import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'yaml';
import { runStage8Trends } from '../../apps/pipeline/src/stages/8-trends.js';
import { extractSummary } from '../../apps/pipeline/src/enrich/readme-cleaner.js';
import type { EnrichedEntry } from '../../apps/pipeline/src/stages/7-enrich.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface ParsedMarkdownEntry {
  filePath: string;
  pillarDir: 'mcp' | 'skills' | 'tools';
  frontmatter: Record<string, any>;
  body: string;
}

function loadCatalogMarkdownEntries(rootDir: string): ParsedMarkdownEntry[] {
  const pillars: Array<'mcp' | 'skills' | 'tools'> = ['mcp', 'skills', 'tools'];
  const entries: ParsedMarkdownEntry[] = [];

  for (const pillar of pillars) {
    const dir = path.join(rootDir, 'content/entries', pillar);
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
    for (const file of files) {
      const filePath = path.join(dir, file);
      const raw = fs.readFileSync(filePath, 'utf8');
      const parts = raw.split(/^---\r?\n/m);
      if (parts.length < 3) continue;

      const frontmatter = yaml.parse(parts[1]);
      const body = parts.slice(2).join('---').trim();
      entries.push({ filePath, pillarDir: pillar, frontmatter, body });
    }
  }

  return entries;
}

function loadExistingCreatedAtMap(rootDir: string): Map<string, string> {
  const map = new Map<string, string>();
  const runsDir = path.join(rootDir, 'data/runs');
  if (!fs.existsSync(runsDir)) return map;

  for (const week of fs.readdirSync(runsDir)) {
    const trendingPath = path.join(runsDir, week, 'trending.json');
    if (!fs.existsSync(trendingPath)) continue;
    try {
      const data = JSON.parse(fs.readFileSync(trendingPath, 'utf8'));
      const lists = [
        data.top25_overall || [],
        data.breakout_new || [],
        data.top10_mcp || [],
        data.top10_skills || [],
        data.top10_tools || [],
      ];
      for (const list of lists) {
        for (const item of list) {
          if (item.slug && item.created_at) {
            map.set(item.slug, item.created_at);
          }
          if (item.repo && item.created_at) {
            map.set(item.repo.toLowerCase(), item.created_at);
          }
        }
      }
    } catch {
      // ignore parse errors
    }
  }
  return map;
}

function buildEnrichedFromMarkdown(
  mdEntries: ParsedMarkdownEntry[],
  snapshot: Record<string, any> | undefined,
  createdAtMap: Map<string, string>
): EnrichedEntry[] {
  return mdEntries.map(({ frontmatter: fm, body }) => {
    const fullName: string = fm.source?.repo || '';
    const [owner = '', name = ''] = fullName.split('/');
    const snap = snapshot?.[fm.slug];
    const stars = snap?.stars ?? fm.signals?.stars ?? 0;
    const forks = snap?.forks ?? Math.round(stars * 0.08);
    const pushedAt = snap?.pushedAt || fm.signals?.last_commit || fm.last_updated || '2026-10-14T00:00:00Z';
    const createdAt =
      createdAtMap.get(fm.slug) ||
      createdAtMap.get(fullName.toLowerCase()) ||
      (typeof fm.first_seen === 'string' && fm.first_seen.includes('T')
        ? `${fm.first_seen.replace(/Z?$/, 'Z')}`
        : '2026-06-01T00:00:00Z');

    return {
      decision: {
        repo: {
          owner,
          name,
          fullName,
          description: fm.tagline || '',
          stars,
          forks,
          watchers: stars,
          archived: fm.status === 'archived',
          fork: false,
          isTemplate: false,
          createdAt,
          pushedAt,
          license: fm.source?.license || null,
          language: null,
          topics: fm.tags || [],
          defaultBranch: fm.readme_source?.branch || 'main',
        },
        layer1: { passed: true, failureReasons: [] },
        layer2: {
          detectedType: fm.type,
          evidenceKind:
            fm.type === 'agent_skill'
              ? 'skill_md_file'
              : fm.type === 'agent_tool'
                ? 'tool_manifest'
                : 'mcp_server_manifest',
          subpaths: fm.source?.subpath ? [fm.source.subpath] : [],
        },
        layer3: {
          adoption: 80,
          maintenance: 80,
          trust: 80,
          community: 80,
          docs: 80,
          compositeScore: snap?.compositeScore ?? 80,
          percentileRank: fm.quality_percentile ?? 80,
          antiFakeFlags: [],
          antiFakeExcluded: false,
        },
        selected: true,
        selectionReason: fm.selection_reason || 'quality_percentile',
      },
      launchSpec: fm.launch,
      skillSpec: fm.skill,
      toolSpec: fm.tool,
      renderedConfigs: {} as any,
      readmeBody: body,
      summary: fm.summary,
      language: fm.language || 'en',
      needsKeys: Boolean(fm.needs_keys),
      prerequisites: fm.prerequisites || [],
      readmeSource: fm.readme_source,
    };
  });
}

async function main() {
  const rootDir = path.resolve(__dirname, '../..');
  const runs = ['2026-W41', '2026-W42'];
  const mdEntries = loadCatalogMarkdownEntries(rootDir);
  const createdAtMap = loadExistingCreatedAtMap(rootDir);

  let latestResult: Awaited<ReturnType<typeof runStage8Trends>> | null = null;

  for (const week of runs) {
    const enrichedPath = path.join(rootDir, 'data/runs', week, 'enriched.json');
    const signalPath = path.join(rootDir, 'data/signals', week.slice(0, 4), `${week}.json`);
    const snapshot = fs.existsSync(signalPath)
      ? JSON.parse(fs.readFileSync(signalPath, 'utf8'))
      : undefined;

    let enriched: EnrichedEntry[];

    if (fs.existsSync(enrichedPath)) {
      console.log(`Processing Stage 8 for ${week} from enriched.json...`);
      enriched = JSON.parse(fs.readFileSync(enrichedPath, 'utf8'));

      // Align historical enriched with Phase 2 agent_tool classifications
      const toolsDir = path.join(rootDir, 'content/entries/tools');
      const toolSlugs = new Set(
        fs.existsSync(toolsDir)
          ? fs.readdirSync(toolsDir).filter((f) => f.endsWith('.md')).map((f) => f.replace('.md', '').toLowerCase())
          : []
      );

      for (const item of enriched) {
        const repo = item.decision?.repo;
        if (!repo) continue;
        const owner = (repo.owner || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const name = (repo.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-');
        const candidateSlug = `${owner}-${name}`;

        if (toolSlugs.has(candidateSlug)) {
          if (!item.decision.layer2) {
            item.decision.layer2 = { detectedType: 'agent_tool', evidenceKind: 'tool_manifest', subpaths: [] };
          } else {
            item.decision.layer2.detectedType = 'agent_tool';
          }
        }
      }
    } else {
      console.log(`Processing Stage 8 for ${week} from catalog markdown + signal snapshot...`);
      // For historical runs prior to latest, filter to entries present in that week's snapshot if available
      const weekMdEntries =
        week !== runs[runs.length - 1] && snapshot
          ? mdEntries.filter((e) => Boolean(snapshot[e.frontmatter.slug]))
          : mdEntries;
      enriched = buildEnrichedFromMarkdown(weekMdEntries, snapshot, createdAtMap);
    }

    const result = await runStage8Trends(enriched, week, { rootDir });
    latestResult = result;
    console.log(`Successfully generated trending artifacts for ${week}:`);
    console.log(` - Top 25 overall: ${result.trendingData.top25_overall.length}`);
    console.log(` - Breakout new: ${result.trendingData.breakout_new.length}`);
    console.log(` - Top 10 MCP: ${result.trendingData.top10_mcp.length}`);
    console.log(` - Top 10 Skills: ${result.trendingData.top10_skills.length}`);
    console.log(` - Top 10 Tools: ${result.trendingData.top10_tools.length}`);
    console.log(` - Total stars gained (deduped): ${result.trendingData.summary.total_stars_gained}`);
  }

  // Sync latest week's computed trend metrics & clean metadata back into content/entries/**/*.md
  if (latestResult) {
    const metricsBySlug = new Map<string, NonNullable<EnrichedEntry['trendMetrics']>>();
    for (const item of latestResult.enrichedEntries) {
      if (!item.trendMetrics) continue;
      // Match by slug
      const isSkill = item.decision.layer2?.detectedType === 'agent_skill';
      const subpath = isSkill
        ? item.skillSpec?.folder_path || item.decision.layer2?.subpaths?.[0] || ''
        : '';
      const ownerClean = item.decision.repo.owner.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const nameClean = item.decision.repo.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
      const subClean = subpath ? subpath.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') : '';
      const slug = subClean ? `${ownerClean}-${nameClean}-${subClean}` : `${ownerClean}-${nameClean}`;
      metricsBySlug.set(slug, item.trendMetrics);
    }

    let updatedFiles = 0;
    let cleanedFalseMcpTools = 0;
    let cleanedSummaries = 0;

    for (const entry of mdEntries) {
      const fm = entry.frontmatter;
      const tm = metricsBySlug.get(fm.slug);

      if (tm) {
        fm.signals = {
          ...fm.signals,
          stars: tm.stars ?? fm.signals?.stars ?? 0,
          last_commit: tm.last_commit ?? fm.signals?.last_commit,
          stars_delta_7d: tm.stars_delta_7d,
          stars_growth_pct: tm.stars_growth_pct,
          trending_score: tm.trending_score,
          ...(tm.rank_current !== undefined ? { rank_current: tm.rank_current } : {}),
          ...(tm.rank_delta !== undefined && tm.rank_delta !== null ? { rank_delta: tm.rank_delta } : {}),
          velocity_source: tm.velocity_source,
          sparkline_4w: tm.sparkline_4w,
        };
        if (tm.rank_current === undefined) {
          delete fm.signals.rank_current;
        }
        if (tm.rank_delta === undefined || tm.rank_delta === null) {
          delete fm.signals.rank_delta;
        }
      }

      // Clean summary if contaminated by language switcher bar or short colon intro
      const currentSummary = String(fm.summary || '');
      const sepCount = (currentSummary.match(/[·|•]/g) || []).length;
      if (sepCount >= 3 || (currentSummary.endsWith(':') && currentSummary.length < 80)) {
        const freshSummary = extractSummary(entry.body);
        if (freshSummary) {
          fm.summary = freshSummary;
          cleanedSummaries++;
        }
      }

      // Clean false-positive has_mcp_support on Python/Node tools with zero MCP mentions in repo or README
      if (fm.type === 'agent_tool' && fm.tool?.has_mcp_support) {
        const combinedText = `${fm.name} ${fm.tagline || ''} ${(fm.tags || []).join(' ')} ${entry.body}`;
        const mentionsMcp = /\b(?:mcp|fastmcp|model context protocol|modelcontextprotocol)\b/i.test(combinedText);
        if (!mentionsMcp) {
          fm.tool.has_mcp_support = false;
          delete fm.tool.mcp_launch;
          cleanedFalseMcpTools++;
        }
      }

      const mdOut = `---\n${yaml.stringify(fm)}---\n\n${entry.body}\n`;
      fs.writeFileSync(entry.filePath, mdOut, 'utf8');
      updatedFiles++;
    }

    // Update catalog-state.json
    const stateFile = path.join(rootDir, 'data/state/catalog-state.json');
    if (fs.existsSync(stateFile)) {
      const state = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
      state.total_stars_gained = latestResult.trendingData.summary.total_stars_gained;
      state.total_new_entries = latestResult.trendingData.summary.total_new_tools;
      fs.writeFileSync(stateFile, JSON.stringify(state, null, 2), 'utf8');
    }

    console.log(
      `Synced signals to ${updatedFiles} markdown entries (${cleanedSummaries} summaries cleaned, ${cleanedFalseMcpTools} false-positive MCP tool flags removed).`
    );
  }
}

main().catch(console.error);
