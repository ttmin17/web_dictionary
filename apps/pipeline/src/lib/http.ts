import fs from 'node:fs';
import path from 'node:path';
import { Octokit } from '@octokit/rest';
import { config } from './config.js';
import { logger } from './logger.js';

const cacheDir = path.join(config.rootDir, 'apps/pipeline/.cache');
if (!fs.existsSync(cacheDir)) {
  fs.mkdirSync(cacheDir, { recursive: true });
}

export const octokit: Octokit = new Octokit({
  auth: config.githubToken || undefined,
  request: {
    timeout: 15000,
  },
});

export async function checkRateLimit(): Promise<{
  coreRemaining: number;
  searchRemaining: number;
  coreLimit: number;
  searchLimit: number;
}> {
  try {
    const { data } = await octokit.rest.rateLimit.get();
    return {
      coreRemaining: data.resources.core.remaining,
      searchRemaining: data.resources.search.remaining,
      coreLimit: data.resources.core.limit,
      searchLimit: data.resources.search.limit,
    };
  } catch (err) {
    logger.warn('Failed to retrieve GitHub rate limit details:', err);
    return {
      coreRemaining: 60,
      searchRemaining: 10,
      coreLimit: 60,
      searchLimit: 10,
    };
  }
}

export async function cachedFetch<T>(
  cacheKey: string,
  fetcher: () => Promise<T>,
  ttlHours = 24
): Promise<T> {
  const safeFilename = cacheKey.replace(/[^a-zA-Z0-9_-]/g, '_') + '.json';
  const filePath = path.join(cacheDir, safeFilename);

  const forceFullRun = process.env.FORCE_FULL_RUN === 'true';

  if (!forceFullRun && fs.existsSync(filePath)) {
    try {
      const stats = fs.statSync(filePath);
      const ageHours = (Date.now() - stats.mtimeMs) / (1000 * 60 * 60);
      if (ageHours < ttlHours) {
        const raw = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(raw) as T;
      }
    } catch {
      // ignore cache read failure
    }
  }

  const result = await fetcher();
  try {
    fs.writeFileSync(filePath, JSON.stringify(result, null, 2), 'utf8');
  } catch {
    // ignore cache write failure
  }
  return result;
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
