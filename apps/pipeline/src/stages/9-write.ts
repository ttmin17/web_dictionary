import fs from 'node:fs';
import path from 'node:path';
import yaml from 'yaml';
import { config } from '../lib/config.js';
import { logger } from '../lib/logger.js';
import { generateSlug } from '../lib/slug.js';
import { classifyCategoryAndTags } from '../classify/categories.js';
import type { EnrichedEntry } from './7-enrich.js';
import type { McpEntry, SkillEntry, ToolEntry } from '@web-db/schema';

import type { TrendingReport, DiffReport } from './8-trends.js';

export interface WriteStageOptions {
  forcePrune?: boolean;
  rootDir?: string;
  totalStarsGained?: number;
  totalNewEntries?: number;
  trendingData?: TrendingReport;
  diffData?: DiffReport;
}

export async function runStage9Write(
  enrichedEntries: EnrichedEntry[],
  weekStr: string,
  options?: WriteStageOptions
): Promise<{ writtenMcp: number; writtenSkills: number; writtenTools: number; prunedCount: number }> {
  logger.stage(6, 'Stage 9: Write Content Entries & Signal Snapshots to Git');

  const rootDir = options?.rootDir || config.rootDir;
  const contentDir = path.join(rootDir, 'content/entries');
  const mcpDir = path.join(contentDir, 'mcp');
  const skillsDir = path.join(contentDir, 'skills');
  const toolsDir = path.join(contentDir, 'tools');
  const signalsDir = path.join(rootDir, 'data/signals', weekStr.slice(0, 4));

  fs.mkdirSync(mcpDir, { recursive: true });
  fs.mkdirSync(skillsDir, { recursive: true });
  fs.mkdirSync(toolsDir, { recursive: true });
  fs.mkdirSync(signalsDir, { recursive: true });

  let writtenMcp = 0;
  let writtenSkills = 0;
  let writtenTools = 0;
  const signalSnapshots: Record<string, unknown> = {};

  const nowIso = new Date().toISOString();

  const writtenMcpSlugs = new Set<string>();
  const writtenSkillSlugs = new Set<string>();
  const writtenToolSlugs = new Set<string>();

  for (const item of enrichedEntries) {
    const { repo, layer2, layer3, selectionReason } = item.decision;
    const isOfficialVendor = selectionReason === 'official_vendor';
    const isMcp = layer2?.detectedType === 'mcp_server';
    const isTool = layer2?.detectedType === 'agent_tool';
    const isSkill = layer2?.detectedType === 'agent_skill';
    const subpath = isSkill ? item.skillSpec?.folder_path || layer2?.subpaths?.[0] || '' : '';
    const slug = generateSlug(repo.owner, repo.name, isSkill ? subpath : undefined);
    const { categories, tags } = classifyCategoryAndTags({
      name: repo.name,
      desc: repo.description || '',
      topics: repo.topics,
      skillName: item.skillSpec?.skill_name,
      subpath,
    });

    const targetDir = isMcp ? mcpDir : isTool ? toolsDir : skillsDir;
    const filePath = path.join(targetDir, `${slug}.md`);

    // Cross-run memory: preserve original first_seen date if already exists on disk
    let firstSeen = nowIso.slice(0, 10);
    if (fs.existsSync(filePath)) {
      try {
        const raw = fs.readFileSync(filePath, 'utf8');
        const match = raw.match(/first_seen:\s*['"]?([0-9T:.-]+)['"]?/);
        if (match && match[1]) {
          firstSeen = match[1];
        }
      } catch {
        // ignore read error
      }
    }

    const title = isSkill ? item.skillSpec?.skill_name || repo.name : repo.name;
    const tagline = isSkill
      ? (item.skillSpec?.description || repo.description || '').slice(0, 150)
      : (repo.description || '').slice(0, 150);

    // B7: Handle body and failure fallback retention
    let body = item.readmeBody || '';
    let effectiveReadmeSource = item.readmeSource;

    if (!body && fs.existsSync(filePath)) {
      try {
        const existingRaw = fs.readFileSync(filePath, 'utf8');
        const parts = existingRaw.split(/^---\r?\n/m);
        if (parts.length >= 3) {
          const existingBody = parts.slice(2).join('---').trim();
          if (existingBody && existingBody !== (repo.description || '') && existingBody !== (item.skillSpec?.description || '')) {
            body = existingBody;
            const parsed = yaml.parse(parts[1]);
            if (parsed?.readme_source && !effectiveReadmeSource) {
              effectiveReadmeSource = parsed.readme_source;
            }
            logger.warn(`Retained existing README for ${slug} due to missing fresh fetch.`);
          }
        }
      } catch {
        // ignore read error
      }
    }

    if (!body) {
      body = isMcp ? (repo.description || '') : (item.skillSpec?.description || repo.description || '');
    }

    const pushedDaysAgo = repo.pushedAt
      ? Math.max(0, (Date.now() - new Date(repo.pushedAt).getTime()) / (1000 * 60 * 60 * 24))
      : 0;
    const entryStatus: 'active' | 'slowing' | 'dormant' | 'archived' = repo.archived
      ? 'archived'
      : pushedDaysAgo > 180
        ? 'dormant'
        : pushedDaysAgo > 90
          ? 'slowing'
          : 'active';

    const baseData = {
      slug,
      name: title,
      tagline,
      summary: item.summary || tagline,
      categories,
      tags,
      status: entryStatus,
      quality_percentile: layer3?.percentileRank || 0,
      selection_reason: selectionReason || 'quality_percentile',
      first_seen: firstSeen,
      last_updated: nowIso,
      source: {
        kind: 'github_repo' as const,
        repo: repo.fullName,
        subpath: subpath || undefined,
        homepage: undefined,
        official_vendor: isOfficialVendor,
        license: repo.license || undefined,
      },
      signals: {
        stars: repo.stars,
        last_commit: repo.pushedAt,
        weekly_downloads: undefined,
        contributors: undefined,
        stars_delta_7d: item.trendMetrics?.stars_delta_7d ?? 0,
        stars_growth_pct: item.trendMetrics?.stars_growth_pct ?? 0,
        trending_score: item.trendMetrics?.trending_score ?? 0,
        rank_current: item.trendMetrics?.rank_current,
        rank_delta: item.trendMetrics?.rank_delta,
        velocity_source: item.trendMetrics?.velocity_source ?? 'snapshot_delta',
        sparkline_4w: item.trendMetrics?.sparkline_4w ?? [repo.stars],
      },
      language: item.language || 'en',
      needs_keys: item.needsKeys || false,
      prerequisites: item.prerequisites || [],
      readme_source: effectiveReadmeSource,
    };

    signalSnapshots[slug] = {
      stars: repo.stars,
      forks: repo.forks,
      watchers: repo.watchers,
      pushedAt: repo.pushedAt,
      compositeScore: layer3?.compositeScore,
      percentile: layer3?.percentileRank,
      trendingScore: item.trendMetrics?.trending_score ?? 0,
      rank: item.trendMetrics?.rank_current,
    };

    if (isMcp && item.launchSpec) {
      const entry: McpEntry = {
        ...baseData,
        type: 'mcp_server',
        launch: item.launchSpec,
      };

      const mdContent = `---\n${yaml.stringify(entry)}---\n\n${body}\n`;
      fs.writeFileSync(filePath, mdContent, 'utf8');
      writtenMcp++;
      writtenMcpSlugs.add(`${slug}.md`);
    } else if (isSkill && item.skillSpec) {
      const entry: SkillEntry = {
        ...baseData,
        type: 'agent_skill',
        skill: item.skillSpec,
      };

      const mdContent = `---\n${yaml.stringify(entry)}---\n\n${body}\n`;
      fs.writeFileSync(filePath, mdContent, 'utf8');
      writtenSkills++;
      writtenSkillSlugs.add(`${slug}.md`);
    } else if (isTool && item.toolSpec) {
      const entry: ToolEntry = {
        ...baseData,
        type: 'agent_tool',
        tool: item.toolSpec,
      };

      const mdContent = `---\n${yaml.stringify(entry)}---\n\n${body}\n`;
      fs.writeFileSync(filePath, mdContent, 'utf8');
      writtenTools++;
      writtenToolSlugs.add(`${slug}.md`);
    }
  }

  // SG-1: Safe pruning: require --force-prune and max 5% deletion circuit breaker
  const forcePrune = options?.forcePrune ?? process.argv.includes('--force-prune');
  let prunedCount = 0;

  const existingMcpFiles = fs.readdirSync(mcpDir).filter((file) => file.endsWith('.md'));
  const existingSkillFiles = fs.readdirSync(skillsDir).filter((file) => file.endsWith('.md'));
  const existingToolFiles = fs.readdirSync(toolsDir).filter((file) => file.endsWith('.md'));
  const totalExisting =
    existingMcpFiles.length + existingSkillFiles.length + existingToolFiles.length;

  const mcpToPrune = existingMcpFiles.filter((file) => !writtenMcpSlugs.has(file));
  const skillsToPrune = existingSkillFiles.filter((file) => !writtenSkillSlugs.has(file));
  const toolsToPrune = existingToolFiles.filter((file) => !writtenToolSlugs.has(file));
  const candidatePruneCount = mcpToPrune.length + skillsToPrune.length + toolsToPrune.length;

  if (candidatePruneCount > 0) {
    if (!forcePrune) {
      logger.warn(
        `[SG-1 Safeguard] Pruning skipped: ${candidatePruneCount} stale files identified, but automated pruning is disabled by default. Pass --force-prune to unlink.`
      );
    } else {
      // 5% deletion circuit breaker
      const maxAllowedPrune = Math.ceil(totalExisting * 0.05);
      if (totalExisting > 0 && candidatePruneCount > maxAllowedPrune) {
        throw new Error(
          `[CIRCUIT BREAKER ACTIVATED] Attempted to prune ${candidatePruneCount}/${totalExisting} entries (${((candidatePruneCount / totalExisting) * 100).toFixed(1)}%), exceeding the 5% maximum threshold (${maxAllowedPrune}). Aborting pruning to prevent catalog wipeout.`
        );
      }

      // Archive pruned files before deletion
      const archiveDir = path.join(rootDir, 'data/archive/pruned', weekStr);
      fs.mkdirSync(archiveDir, { recursive: true });

      for (const file of mcpToPrune) {
        fs.copyFileSync(path.join(mcpDir, file), path.join(archiveDir, file));
        fs.unlinkSync(path.join(mcpDir, file));
        prunedCount++;
      }
      for (const file of skillsToPrune) {
        fs.copyFileSync(path.join(skillsDir, file), path.join(archiveDir, file));
        fs.unlinkSync(path.join(skillsDir, file));
        prunedCount++;
      }
      for (const file of toolsToPrune) {
        fs.copyFileSync(path.join(toolsDir, file), path.join(archiveDir, file));
        fs.unlinkSync(path.join(toolsDir, file));
        prunedCount++;
      }
      logger.info(
        `[SG-1] Pruned and archived ${prunedCount} stale catalog files to ${path.relative(rootDir, archiveDir)}.`
      );
    }
  }

  // Write weekly signals snapshot
  const signalFile = path.join(signalsDir, `${weekStr}.json`);
  fs.writeFileSync(signalFile, JSON.stringify(signalSnapshots, null, 2), 'utf8');

  // Emit weekly trending and diff artifacts if provided
  const runsDir = path.join(rootDir, 'data/runs', weekStr);
  if (options?.trendingData || options?.diffData) {
    fs.mkdirSync(runsDir, { recursive: true });
    if (options.trendingData) {
      const trendingFile = path.join(runsDir, 'trending.json');
      fs.writeFileSync(trendingFile, JSON.stringify(options.trendingData, null, 2), 'utf8');
      logger.info(`Saved trending leaderboard to ${trendingFile}`);
    }
    if (options.diffData) {
      const diffFile = path.join(runsDir, 'diff.json');
      fs.writeFileSync(diffFile, JSON.stringify(options.diffData, null, 2), 'utf8');
      logger.info(`Saved weekly diff to ${diffFile}`);
    }
  }

  // Persist cross-run state (Task A5, D8, Phase 3 ecosystem totals)
  const stateDir = path.join(rootDir, 'data/state');
  fs.mkdirSync(stateDir, { recursive: true });
  const stateFile = path.join(stateDir, 'catalog-state.json');
  const seenStateRepos = new Set<string>();
  let fallbackStarsGained = 0;
  for (const e of enrichedEntries) {
    const repoKey = e.decision.repo.fullName;
    if (!seenStateRepos.has(repoKey)) {
      seenStateRepos.add(repoKey);
      fallbackStarsGained += e.trendMetrics?.stars_delta_7d ?? 0;
    }
  }
  const totalStarsGained = options?.totalStarsGained ?? fallbackStarsGained;
  const totalNewEntries =
    options?.totalNewEntries ??
    enrichedEntries.filter((e) => e.trendMetrics?.velocity_source === 'age_velocity').length;

  fs.writeFileSync(
    stateFile,
    JSON.stringify(
      {
        refreshed_at: nowIso,
        week: weekStr,
        total_mcp: writtenMcp,
        total_skills: writtenSkills,
        total_tools: writtenTools,
        total_entries: writtenMcp + writtenSkills + writtenTools,
        total_stars_gained: totalStarsGained,
        total_new_entries: totalNewEntries,
      },
      null,
      2
    ),
    'utf8'
  );

  logger.info(
    `Stage 9 Complete: Written ${writtenMcp} MCP entries, ${writtenSkills} Skill entries, and ${writtenTools} Tool entries to content/entries/.`
  );
  logger.info(`Saved signal snapshots to ${signalFile}`);
  logger.info(`Saved catalog state to ${stateFile}`);

  return { writtenMcp, writtenSkills, writtenTools, prunedCount };
}
