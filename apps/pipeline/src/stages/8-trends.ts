import fs from 'node:fs';
import path from 'node:path';
import { config } from '../lib/config.js';
import { logger } from '../lib/logger.js';
import { generateSlug } from '../lib/slug.js';
import { classifyCategoryAndTags } from '../classify/categories.js';
import type { EnrichedEntry } from './7-enrich.js';
import type { LatestSignals, EntryType } from '@web-db/schema';

export interface TrendMetrics {
  stars_delta_7d: number;
  stars_growth_pct: number;
  trending_score: number;
  rank_current?: number;
  rank_delta?: number | null;
  velocity_source: 'snapshot_delta' | 'age_velocity';
  sparkline_4w: number[];
  is_suspicious_burst?: boolean;
}

export interface SnapshotEntry {
  stars: number;
  forks?: number;
  watchers?: number;
  pushedAt?: string;
  compositeScore?: number;
  percentile?: number;
  trendingScore?: number;
  rank?: number;
}

export type SnapshotMap = Record<string, SnapshotEntry>;

export interface TrendingItem {
  slug: string;
  name: string;
  type: EntryType;
  categories: string[];
  stars: number;
  stars_delta_7d: number;
  stars_growth_pct: number;
  trending_score: number;
  rank_current?: number;
  rank_delta?: number | null;
  velocity_source: 'snapshot_delta' | 'age_velocity';
  sparkline_4w: number[];
  tagline: string;
  repo: string;
  is_pack_primary?: boolean;
  pack_slug?: string;
  created_at: string;
  pushed_at: string;
}

export interface TrendingReport {
  week: string;
  generated_at: string;
  summary: {
    week: string;
    generated_at: string;
    total_new_tools: number;
    total_stars_gained: number;
    total_active_entries: number;
  };
  top25_overall: TrendingItem[];
  breakout_new: TrendingItem[];
  top10_mcp: TrendingItem[];
  top10_skills: TrendingItem[];
  top10_tools: TrendingItem[];
}

export interface DiffReport {
  week: string;
  generated_at: string;
  added: Array<{ slug: string; name: string; type: EntryType; stars: number; repo: string }>;
  removed: string[];
  surging: Array<{
    slug: string;
    name: string;
    type: EntryType;
    stars: number;
    stars_delta_7d: number;
    stars_growth_pct: number;
    trending_score: number;
  }>;
  summary: {
    week: string;
    generated_at: string;
    added_count: number;
    removed_count: number;
    surging_count: number;
    total_stars_gained: number;
  };
}

export interface TrendStageOptions {
  rootDir?: string;
  signalsDir?: string;
  runsDir?: string;
  stateDir?: string;
}

export interface TrendStageResult {
  enrichedEntries: EnrichedEntry[];
  trendingData: TrendingReport;
  diffData: DiffReport;
  stats: {
    totalEvaluated: number;
    totalStarsGained: number;
    newEntriesCount: number;
  };
}

/**
 * Resolves an entry from a snapshot dictionary, checking canonical slug and aliases.
 */
export function resolveSnapshotEntry(
  snapshot: SnapshotMap | undefined,
  slug: string,
  aliases: Record<string, string>,
  repoFullName?: string
): SnapshotEntry | undefined {
  if (!snapshot) return undefined;
  if (snapshot[slug]) return snapshot[slug];

  // 1. Check if an alias mapped to this canonical slug
  for (const [oldSlug, canonical] of Object.entries(aliases)) {
    if (canonical === slug && snapshot[oldSlug]) {
      return snapshot[oldSlug];
    }
  }

  // 2. Check if slug itself is an alias pointing to a canonical entry
  if (aliases[slug] && snapshot[aliases[slug]]) {
    return snapshot[aliases[slug]];
  }

  // 3. Fallback to matching by repository (owner/repo)
  // Because GitHub stars belong to the repository, entries from the same repo share stars.
  if (repoFullName) {
    const parts = repoFullName.toLowerCase().split('/');
    if (parts.length === 2) {
      const ownerPrefix = parts[0].replace(/[^a-z0-9]+/g, '-');
      const namePrefix = parts[1].replace(/[^a-z0-9]+/g, '-');
      const repoPrefix = `${ownerPrefix}-${namePrefix}`;
      for (const [s, entry] of Object.entries(snapshot)) {
        if (s === repoPrefix || s.startsWith(repoPrefix + '-')) {
          return entry;
        }
      }
    }
  }

  return undefined;
}

/**
 * Loads all historical snapshots from data/signals/YYYY/*.json or data/signals/*.json, sorted chronologically.
 */
export function loadHistoricalSnapshots(
  signalsDir: string
): Record<string, SnapshotMap> {
  const result: Record<string, SnapshotMap> = {};
  if (!fs.existsSync(signalsDir)) return result;

  const weekRegex = /^\d{4}-W\d{2}$/;

  const parseAndStore = (filePath: string, fileName: string) => {
    if (!fileName.endsWith('.json')) return;
    const weekKey = fileName.replace('.json', '');
    if (!weekRegex.test(weekKey)) return;
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const parsed = JSON.parse(content);
      if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
        result[weekKey] = parsed as SnapshotMap;
      }
    } catch (err) {
      logger.warn(`Failed to parse snapshot ${fileName}:`, err);
    }
  };

  const entries = fs.readdirSync(signalsDir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isFile()) {
      parseAndStore(path.join(signalsDir, entry.name), entry.name);
    } else if (entry.isDirectory()) {
      const yearPath = path.join(signalsDir, entry.name);
      try {
        const files = fs.readdirSync(yearPath);
        for (const file of files) {
          parseAndStore(path.join(yearPath, file), file);
        }
      } catch (err) {
        logger.warn(`Failed to read snapshot directory ${entry.name}:`, err);
      }
    }
  }

  return result;
}

/**
 * Computes trending metrics for a single entry according to the patched Doc 09 / Audit formula.
 *
 * TrendingScore = DeltaS_7d * (1 + min(2.0, DeltaS_7d / max(S_{t-1}, 250)))
 * - Enforces non-negative clamping (DeltaS_7d >= 0)
 * - Eliminates (S_t == S_{t-1}) cold-start trap: stagnant repos receive delta=0 and score=0
 * - Quarantines synthetic age_velocity to trending_score = 0
 * - Anti-Sybil delta-fork coherence: suppresses artificial bot star bursts with zero fork delta
 */
export function computeTrendingMetrics(params: {
  currentStars: number;
  prevStars: number | undefined;
  createdDaysAgo: number;
  pushedDaysAgo: number;
  sparklineHistory?: number[];
  currentForks?: number;
  prevForks?: number;
}): TrendMetrics {
  const {
    currentStars,
    prevStars,
    createdDaysAgo,
    pushedDaysAgo,
    sparklineHistory = [],
    currentForks,
    prevForks,
  } = params;

  // Safe sanitized numeric inputs
  const safeCurrentStars = Number.isFinite(currentStars) ? Math.max(0, currentStars) : 0;
  const safePrevStars =
    prevStars !== undefined && Number.isFinite(prevStars) ? Math.max(0, prevStars) : undefined;
  const safeCreatedDaysAgo = Number.isFinite(createdDaysAgo) ? Math.max(0, createdDaysAgo) : 365;
  const safePushedDaysAgo = Number.isFinite(pushedDaysAgo) ? Math.max(0, pushedDaysAgo) : 30;

  // Build sparkline: historical week stars followed by current stars
  const safeSparklineHistory = (Array.isArray(sparklineHistory) ? sparklineHistory : []).filter(
    (p) => typeof p === 'number' && Number.isFinite(p)
  );
  const sparkline_4w = [...safeSparklineHistory, safeCurrentStars];

  // 1. Cold-Start Resolution: ONLY when repo was NOT in previous weekly snapshot
  if (safePrevStars === undefined) {
    const repoAgeWeeks = Math.max(safeCreatedDaysAgo / 7, 0.5); // 3.5 days floor
    const recencyBoost = Math.max(0.2, Math.min(1.0, 1 - safePushedDaysAgo / 90));
    const estimatedDelta = Math.round((safeCurrentStars / repoAgeWeeks) * recencyBoost);
    const stars_delta_7d = Math.max(0, estimatedDelta);
    // Quarantined baseline trending score for synthetic age velocity
    const trending_score = 0;

    return {
      stars_delta_7d,
      stars_growth_pct: 0.0,
      trending_score,
      velocity_source: 'age_velocity',
      sparkline_4w,
      is_suspicious_burst: false,
    };
  }

  // 2. Verified Snapshot Delta with Non-Negative Clamp
  const rawDelta = safeCurrentStars - safePrevStars;
  const stars_delta_7d = Math.max(0, rawDelta);

  // 3. Stagnant / Zero Delta (Eliminates S_t == S_{t-1} cold-start bug)
  if (stars_delta_7d === 0) {
    return {
      stars_delta_7d: 0,
      stars_growth_pct: 0.0,
      trending_score: 0,
      velocity_source: 'snapshot_delta',
      sparkline_4w,
      is_suspicious_burst: false,
    };
  }

  // 4. Safe Growth Percentage Calculation
  const stars_growth_pct =
    safePrevStars > 0 ? Math.round((stars_delta_7d / safePrevStars) * 1000) / 10 : 100.0;

  // 5. Anti-Sybil / Fake Burst Detection (Delta-Fork Coherence Check from Audit R3)
  let is_suspicious_burst = false;
  if (currentForks !== undefined && prevForks !== undefined && stars_delta_7d >= 150) {
    const safeCurrentForks = Number.isFinite(currentForks) ? Math.max(0, currentForks) : 0;
    const safePrevForks = Number.isFinite(prevForks) ? Math.max(0, prevForks) : 0;
    const forkDelta7d = Math.max(0, safeCurrentForks - safePrevForks);
    const forkToStarRatio = forkDelta7d / stars_delta_7d;
    const totalForkRatio = safeCurrentForks / Math.max(safeCurrentStars, 1);
    if (forkToStarRatio < 0.01 && totalForkRatio < 0.02) {
      is_suspicious_burst = true;
    }
  }

  // Quarantine extreme inorganic bot-star spikes (e.g., >50,000 stars gained in 7d with >500% jump)
  if (stars_delta_7d >= 50000 && stars_growth_pct >= 500) {
    return {
      stars_delta_7d: 0,
      stars_growth_pct: 0.0,
      trending_score: 0,
      velocity_source: 'snapshot_delta',
      sparkline_4w,
      is_suspicious_burst: true,
    };
  }

  // 6. Patched Velocity Formula with Baseline Floor 250 and Max 2.0 Growth Bonus (3.0x Max Multiplier)
  const baselineFloor = 250;
  const effectiveBaseline = Math.max(safePrevStars, baselineFloor);
  const growthRatio = stars_delta_7d / effectiveBaseline;
  // If flagged as suspicious sybil burst, clamp multiplier bonus to 0.0 (raw delta only)
  const multiplierBonus = is_suspicious_burst ? 0.0 : Math.min(2.0, growthRatio);
  const multiplier = 1.0 + multiplierBonus;

  const rawScore = stars_delta_7d * multiplier;
  const trending_score = Math.round(rawScore * 100) / 100;

  return {
    stars_delta_7d,
    stars_growth_pct,
    trending_score,
    velocity_source: 'snapshot_delta',
    sparkline_4w,
    is_suspicious_burst,
  };
}

/**
 * 5-tier deterministic comparator preventing build jitter.
 */
export function deterministicTrendingCompare(a: TrendingItem, b: TrendingItem): number {
  if (b.trending_score !== a.trending_score) {
    return b.trending_score - a.trending_score;
  }
  if (b.stars_delta_7d !== a.stars_delta_7d) {
    return b.stars_delta_7d - a.stars_delta_7d;
  }
  if (b.stars !== a.stars) {
    return b.stars - a.stars;
  }
  return a.slug.localeCompare(b.slug);
}

/**
 * Assembles weekly leaderboard artifacts.
 * Applies audit safeguards:
 * - Quarantines synthetic age_velocity from top25_overall and pillar top10s
 * - Filters monorepo sub-skills: only is_pack_primary === true qualify
 */
export function assembleTrendingLeaderboards(
  items: TrendingItem[],
  weekStr: string
): TrendingReport {
  const nowIso = new Date().toISOString();

  // Competitive candidates: verified weekly snapshot delta, pack primary, and positive velocity
  const competitiveItems = items.filter((item) => {
    const isPrimary = item.type !== 'agent_skill' || item.is_pack_primary !== false;
    const isSnapshotDelta = item.velocity_source === 'snapshot_delta';
    return isPrimary && isSnapshotDelta;
  });

  const sortedCompetitive = [...competitiveItems].sort(deterministicTrendingCompare);

  // Top 25 overall: strictly positive trending score, max 1 entry per parent repo
  const seenOverallRepos = new Set<string>();
  const top25_overall: TrendingItem[] = [];
  for (const item of sortedCompetitive) {
    if (item.trending_score > 0 && !seenOverallRepos.has(item.repo)) {
      seenOverallRepos.add(item.repo);
      top25_overall.push(item);
      if (top25_overall.length >= 25) break;
    }
  }

  // Breakout new repos: created <= 60 days ago, pack primary, max 1 per repo
  const breakoutCandidates = items.filter((item) => {
    const isPrimary = item.type !== 'agent_skill' || item.is_pack_primary !== false;
    if (!isPrimary) return false;
    if (!item.created_at) return false;
    const createdTime = new Date(item.created_at).getTime();
    if (!Number.isFinite(createdTime)) return false;
    const createdDaysAgo = (Date.now() - createdTime) / (1000 * 60 * 60 * 24);
    return (
      createdDaysAgo >= 0 &&
      createdDaysAgo <= 60 &&
      (item.stars_delta_7d >= 10 || item.trending_score > 0)
    );
  });

  const sortedBreakout = [...breakoutCandidates].sort(deterministicTrendingCompare);
  const seenBreakoutRepos = new Set<string>();
  const breakout_new: TrendingItem[] = [];
  for (const item of sortedBreakout) {
    if (!seenBreakoutRepos.has(item.repo)) {
      seenBreakoutRepos.add(item.repo);
      breakout_new.push(item);
      if (breakout_new.length >= 15) break;
    }
  }

  // Pillar leaderboards: max 1 per repo in each pillar, sorted deterministically
  const getPillarTop10 = (type: EntryType) => {
    const seen = new Set<string>();
    const result: TrendingItem[] = [];
    for (const item of sortedCompetitive) {
      if (item.type === type && !seen.has(item.repo)) {
        seen.add(item.repo);
        result.push(item);
        if (result.length >= 10) break;
      }
    }
    return result;
  };

  const top10_mcp = getPillarTop10('mcp_server');
  const top10_skills = getPillarTop10('agent_skill');
  const top10_tools = getPillarTop10('agent_tool');

  const seenReposForTotal = new Set<string>();
  let totalStarsGained = 0;
  for (const curr of items) {
    const repoKey = curr.repo || curr.slug;
    if (!seenReposForTotal.has(repoKey)) {
      seenReposForTotal.add(repoKey);
      totalStarsGained += curr.stars_delta_7d;
    }
  }
  const totalNewTools = items.filter((item) => item.velocity_source === 'age_velocity').length;

  return {
    week: weekStr,
    generated_at: nowIso,
    summary: {
      week: weekStr,
      generated_at: nowIso,
      total_new_tools: totalNewTools,
      total_stars_gained: totalStarsGained,
      total_active_entries: items.length,
    },
    top25_overall,
    breakout_new,
    top10_mcp,
    top10_skills,
    top10_tools,
  };
}

/**
 * Computes weekly diff artifact.
 */
export function computeWeeklyDiff(params: {
  currentItems: TrendingItem[];
  prevSnapshot: SnapshotMap | undefined;
  weekStr: string;
  aliases: Record<string, string>;
}): DiffReport {
  const { currentItems, prevSnapshot, weekStr, aliases } = params;
  const nowIso = new Date().toISOString();

  const currentSlugs = new Set(currentItems.map((i) => i.slug));
  const added: DiffReport['added'] = [];

  for (const item of currentItems) {
    const prev = resolveSnapshotEntry(prevSnapshot, item.slug, aliases, item.repo);
    if (!prev) {
      added.push({
        slug: item.slug,
        name: item.name,
        type: item.type,
        stars: item.stars,
        repo: item.repo,
      });
    }
  }

  const removed: string[] = [];
  if (prevSnapshot) {
    for (const prevSlug of Object.keys(prevSnapshot)) {
      const canonical = aliases[prevSlug] || prevSlug;
      if (!currentSlugs.has(canonical) && !currentSlugs.has(prevSlug)) {
        removed.push(prevSlug);
      }
    }
  }
  removed.sort();

  const seenSurgingRepos = new Set<string>();
  const sortedSurging = [...currentItems]
    .filter(
      (i) =>
        i.velocity_source === 'snapshot_delta' &&
        i.stars_delta_7d > 0 &&
        (i.type !== 'agent_skill' || i.is_pack_primary !== false)
    )
    .sort(deterministicTrendingCompare);

  const surging: DiffReport['surging'] = [];
  for (const i of sortedSurging) {
    if (!seenSurgingRepos.has(i.repo)) {
      seenSurgingRepos.add(i.repo);
      surging.push({
        slug: i.slug,
        name: i.name,
        type: i.type,
        stars: i.stars,
        stars_delta_7d: i.stars_delta_7d,
        stars_growth_pct: i.stars_growth_pct,
        trending_score: i.trending_score,
      });
      if (surging.length >= 25) break;
    }
  }

  const seenDiffReposForTotal = new Set<string>();
  let totalStarsGained = 0;
  for (const curr of currentItems) {
    const repoKey = curr.repo || curr.slug;
    if (!seenDiffReposForTotal.has(repoKey)) {
      seenDiffReposForTotal.add(repoKey);
      totalStarsGained += curr.stars_delta_7d;
    }
  }

  return {
    week: weekStr,
    generated_at: nowIso,
    added,
    removed,
    surging,
    summary: {
      week: weekStr,
      generated_at: nowIso,
      added_count: added.length,
      removed_count: removed.length,
      surging_count: surging.length,
      total_stars_gained: totalStarsGained,
    },
  };
}

/**
 * Main Stage 8 entrypoint.
 */
export async function runStage8Trends(
  enrichedEntries: EnrichedEntry[],
  weekStr: string,
  options?: TrendStageOptions
): Promise<TrendStageResult> {
  logger.stage(5, 'Stage 8: Weekly Trend, Velocity & Ranking Engine');

  const rootDir = options?.rootDir || config.rootDir;
  const signalsDir = options?.signalsDir || path.join(rootDir, 'data/signals');
  const runsDir = options?.runsDir || path.join(rootDir, 'data/runs', weekStr);
  const stateDir = options?.stateDir || path.join(rootDir, 'data/state');

  // 1. Load aliases
  const aliasPath = path.join(stateDir, 'slug-aliases.json');
  let slugAliases: Record<string, string> = {};
  if (fs.existsSync(aliasPath)) {
    try {
      slugAliases = JSON.parse(fs.readFileSync(aliasPath, 'utf8'));
    } catch {
      logger.warn('Failed to parse slug-aliases.json');
    }
  }

  // 2. Load historical snapshots
  const allSnapshots = loadHistoricalSnapshots(signalsDir);
  const sortedWeeks = Object.keys(allSnapshots).sort();
  const priorWeeks = sortedWeeks.filter((w) => w < weekStr);
  const prevWeek = priorWeeks.length > 0 ? priorWeeks[priorWeeks.length - 1] : undefined;
  const prevSnapshot = prevWeek ? allSnapshots[prevWeek] : undefined;

  logger.info(
    `Stage 8: Loaded ${sortedWeeks.length} snapshot(s). Prior week baseline: ${prevWeek || 'None (First Run)'}`
  );

  // Identify up to 3 prior snapshots for 4-week sparkline
  const sparklineWeeks = priorWeeks.slice(-3);
  const sparklineSnapshots = sparklineWeeks.map((w) => allSnapshots[w]);

  // 3. Compute raw trending metrics for each entry
  const now = Date.now();
  const trendingItems: TrendingItem[] = [];

  for (const item of enrichedEntries) {
    const { repo, layer2 } = item.decision;
    const isSkill = layer2?.detectedType === 'agent_skill';
    const subpath = isSkill ? item.skillSpec?.folder_path || layer2?.subpaths?.[0] || '' : '';
    const slug = generateSlug(repo.owner, repo.name, isSkill ? subpath : undefined);

    const prevEntry = resolveSnapshotEntry(prevSnapshot, slug, slugAliases, repo.fullName);
    const prevStars = prevEntry?.stars;
    const prevForks = prevEntry?.forks;

    // Collect historical sparkline points from prior weeks
    const sparklineHistory: number[] = [];
    for (const snap of sparklineSnapshots) {
      const snapEntry = resolveSnapshotEntry(snap, slug, slugAliases, repo.fullName);
      if (snapEntry && typeof snapEntry.stars === 'number') {
        sparklineHistory.push(snapEntry.stars);
      }
    }

    const createdTime = repo.createdAt ? new Date(repo.createdAt).getTime() : NaN;
    const createdDaysAgo = Number.isFinite(createdTime)
      ? Math.max(0, (now - createdTime) / (1000 * 60 * 60 * 24))
      : 365;

    const pushedTime = repo.pushedAt ? new Date(repo.pushedAt).getTime() : NaN;
    const pushedDaysAgo = Number.isFinite(pushedTime)
      ? Math.max(0, (now - pushedTime) / (1000 * 60 * 60 * 24))
      : 30;

    const metrics = computeTrendingMetrics({
      currentStars: repo.stars,
      prevStars,
      createdDaysAgo,
      pushedDaysAgo,
      sparklineHistory,
      currentForks: repo.forks,
      prevForks,
    });

    const type: EntryType = layer2?.detectedType || 'mcp_server';
    const title = isSkill ? item.skillSpec?.skill_name || repo.name : repo.name;
    const tagline = isSkill
      ? item.skillSpec?.description || repo.description || ''
      : repo.description || '';

    const { categories } = classifyCategoryAndTags({
      name: repo.name,
      desc: repo.description || undefined,
      topics: repo.topics,
      skillName: item.skillSpec?.skill_name,
      subpath,
    });

    trendingItems.push({
      slug,
      name: title,
      type,
      categories,
      stars: repo.stars,
      stars_delta_7d: metrics.stars_delta_7d,
      stars_growth_pct: metrics.stars_growth_pct,
      trending_score: metrics.trending_score,
      velocity_source: metrics.velocity_source,
      sparkline_4w: metrics.sparkline_4w,
      tagline,
      repo: repo.fullName,
      is_pack_primary: isSkill ? item.skillSpec?.is_pack_primary : true,
      pack_slug: isSkill ? item.skillSpec?.pack_slug : undefined,
      created_at: repo.createdAt,
      pushed_at: repo.pushedAt,
    });
  }

  // 4. Compute pillar ranks and rank deltas
  // SG Safeguards: Only primary entries (is_pack_primary === true) and snapshot_delta entries qualify
  const pillars: EntryType[] = ['mcp_server', 'agent_skill', 'agent_tool'];
  const rankBySlug = new Map<string, { rank_current: number; rank_delta: number | null }>();

  for (const pillar of pillars) {
    const qualifyingPillarItems = trendingItems.filter(
      (item) =>
        item.type === pillar &&
        (item.type !== 'agent_skill' || item.is_pack_primary !== false) &&
        item.velocity_source === 'snapshot_delta'
    );
    // Sort deterministically
    qualifyingPillarItems.sort(deterministicTrendingCompare);

    qualifyingPillarItems.forEach((item, index) => {
      const rank_current = index + 1;
      const prevEntry = resolveSnapshotEntry(prevSnapshot, item.slug, slugAliases, item.repo);
      let rank_delta: number | null = null;
      if (prevEntry && typeof prevEntry.rank === 'number') {
        rank_delta = prevEntry.rank - rank_current; // Positive = moved up, negative = moved down
      }
      rankBySlug.set(item.slug, { rank_current, rank_delta });
      item.rank_current = rank_current;
      item.rank_delta = rank_delta;
    });
  }

  // 5. Attach metrics back to enriched entries
  for (const item of enrichedEntries) {
    const { repo, layer2 } = item.decision;
    const isSkill = layer2?.detectedType === 'agent_skill';
    const subpath = isSkill ? item.skillSpec?.folder_path || layer2?.subpaths?.[0] || '' : '';
    const slug = generateSlug(repo.owner, repo.name, isSkill ? subpath : undefined);
    const trendingItem = trendingItems.find((t) => t.slug === slug);
    const ranks = rankBySlug.get(slug);

    if (trendingItem) {
      item.trendMetrics = {
        stars: repo.stars,
        last_commit: repo.pushedAt,
        stars_delta_7d: trendingItem.stars_delta_7d,
        stars_growth_pct: trendingItem.stars_growth_pct,
        trending_score: trendingItem.trending_score,
        rank_current: ranks?.rank_current,
        rank_delta: ranks?.rank_delta,
        velocity_source: trendingItem.velocity_source,
        sparkline_4w: trendingItem.sparkline_4w,
      };
    }
  }

  // 6. Assemble leaderboards & diff artifacts
  const trendingData = assembleTrendingLeaderboards(trendingItems, weekStr);
  const diffData = computeWeeklyDiff({
    currentItems: trendingItems,
    prevSnapshot,
    weekStr,
    aliases: slugAliases,
  });

  // 7. Write artifacts to data/runs/<week>/
  fs.mkdirSync(runsDir, { recursive: true });
  const trendingFile = path.join(runsDir, 'trending.json');
  const diffFile = path.join(runsDir, 'diff.json');

  fs.writeFileSync(trendingFile, JSON.stringify(trendingData, null, 2), 'utf8');
  fs.writeFileSync(diffFile, JSON.stringify(diffData, null, 2), 'utf8');

  logger.info(`Saved trending leaderboard to ${trendingFile}`);
  logger.info(`Saved weekly diff to ${diffFile}`);

  return {
    enrichedEntries,
    trendingData,
    diffData,
    stats: {
      totalEvaluated: enrichedEntries.length,
      totalStarsGained: trendingData.summary.total_stars_gained,
      newEntriesCount: trendingData.summary.total_new_tools,
    },
  };
}
