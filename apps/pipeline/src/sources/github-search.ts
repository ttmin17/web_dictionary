import { octokit, cachedFetch, sleep } from '../lib/http.js';
import { logger } from '../lib/logger.js';
import type { CandidateRepo } from '@web-db/schema';

export async function searchRepositories(query: string, maxPages = 3): Promise<CandidateRepo[]> {
  logger.info(`Searching GitHub: "${query}" (max ${maxPages} pages)`);
  const repos: CandidateRepo[] = [];

  for (let page = 1; page <= maxPages; page++) {
    const cacheKey = `search_${query}_p${page}`;
    try {
      const data = await cachedFetch(cacheKey, async () => {
        const res = await octokit.rest.search.repos({
          q: query,
          sort: 'stars',
          order: 'desc',
          per_page: 50,
          page,
        });
        return res.data;
      });

      for (const item of data.items) {
        repos.push({
          owner: item.owner?.login || '',
          name: item.name,
          fullName: item.full_name,
          description: item.description,
          stars: item.stargazers_count,
          forks: item.forks_count,
          watchers: item.watchers_count || item.stargazers_count,
          archived: item.archived,
          fork: item.fork,
          isTemplate: item.is_template || false,
          createdAt: item.created_at,
          pushedAt: item.pushed_at || item.created_at,
          license: item.license?.spdx_id || null,
          language: item.language || null,
          topics: item.topics || [],
          defaultBranch: item.default_branch || 'main',
        });
      }

      if (data.items.length < 50) break;
      await sleep(1000); // respect 30 req/min limit
    } catch (err: unknown) {
      logger.warn(`Search failed on page ${page} for "${query}":`, (err as Error).message || err);
      break;
    }
  }

  return repos;
}

export async function fetchRepositoryByFullName(fullName: string): Promise<CandidateRepo | null> {
  const [owner, repo] = fullName.split('/');
  if (!owner || !repo) return null;

  const cacheKey = `repo_meta_${owner.toLowerCase()}_${repo.toLowerCase()}`;
  try {
    const item = await cachedFetch(cacheKey, async () => {
      const res = await octokit.rest.repos.get({ owner, repo });
      return res.data;
    });

    return {
      owner: item.owner?.login || owner,
      name: item.name,
      fullName: item.full_name,
      description: item.description,
      stars: item.stargazers_count,
      forks: item.forks_count,
      watchers: item.subscribers_count ?? item.watchers_count ?? item.stargazers_count,
      archived: item.archived,
      fork: item.fork,
      isTemplate: item.is_template || false,
      createdAt: item.created_at,
      pushedAt: item.pushed_at || item.created_at,
      license: item.license?.spdx_id || null,
      language: item.language || null,
      topics: item.topics || [],
      defaultBranch: item.default_branch || 'main',
    };
  } catch (err: unknown) {
    logger.warn(`Failed to fetch repository "${fullName}":`, (err as Error).message || err);
    return null;
  }
}
