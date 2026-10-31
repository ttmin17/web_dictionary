import { config } from '../lib/config.js';
import { logger } from '../lib/logger.js';
import { searchRepositories, fetchRepositoryByFullName } from '../sources/github-search.js';
import { searchSkillCodeFiles } from '../sources/github-code-search.js';
import { fetchMcpRegistry } from '../sources/mcp-registry.js';
import type { CandidateRepo } from '@web-db/schema';

export async function runStage1Discover(): Promise<CandidateRepo[]> {
  logger.stage(1, 'Discover Candidates across GitHub & Registries');
  const candidatesMap = new Map<string, CandidateRepo>();

  // 1. MCP Topic Searches
  for (const q of config.queries.mcp_queries) {
    const repos = await searchRepositories(q, 3);
    for (const r of repos) {
      candidatesMap.set(r.fullName.toLowerCase(), r);
    }
  }

  // 2. Skill Topic Searches
  for (const q of config.queries.skill_queries) {
    const repos = await searchRepositories(q, 3);
    for (const r of repos) {
      candidatesMap.set(r.fullName.toLowerCase(), r);
    }
  }

  // 3. Agent Tool Topic Searches
  if (config.queries.tool_queries) {
    for (const q of config.queries.tool_queries) {
      const repos = await searchRepositories(q, 3);
      for (const r of repos) {
        candidatesMap.set(r.fullName.toLowerCase(), r);
      }
    }
  }

  // 4. SKILL.md Code Searches
  for (const q of config.queries.code_queries) {
    const repos = await searchSkillCodeFiles(q, 2);
    for (const r of repos) {
      candidatesMap.set(r.fullName.toLowerCase(), r);
    }
  }

  // 5. Official MCP Registry & Pinned Overrides
  const registryServers = await fetchMcpRegistry();
  logger.info(`Discovered ${registryServers.length} servers from official MCP Registry`);

  const extraRepoNames = new Set<string>();
  for (const pinned of config.pin.pinned || []) {
    if (pinned.repo && !candidatesMap.has(pinned.repo.toLowerCase())) {
      extraRepoNames.add(pinned.repo);
    }
  }

  for (const srv of registryServers) {
    if (!srv.repositoryUrl) continue;
    const match = srv.repositoryUrl.match(/github\.com\/([^/]+\/[^/#?.]+)/i);
    if (match && match[1]) {
      const fullName = match[1].replace(/\.git$/i, '');
      if (!candidatesMap.has(fullName.toLowerCase())) {
        extraRepoNames.add(fullName);
      }
    }
  }

  for (const fullName of Array.from(extraRepoNames).slice(0, 50)) {
    const repo = await fetchRepositoryByFullName(fullName);
    if (repo) {
      candidatesMap.set(repo.fullName.toLowerCase(), repo);
    }
  }

  const total = Array.from(candidatesMap.values());
  logger.info(`Stage 1 Complete: Discovered ${total.length} unique candidate repositories.`);
  return total;
}
