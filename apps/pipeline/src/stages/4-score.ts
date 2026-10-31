import { config } from '../lib/config.js';
import { logger } from '../lib/logger.js';
import type { TypeCheckedCandidate } from './3-type-check.js';
import type { Layer3Score } from '@web-db/schema';

export interface ScoredCandidate extends TypeCheckedCandidate {
  layer3: Layer3Score;
}

export function evaluateLayer3Scoring(candidates: TypeCheckedCandidate[]): ScoredCandidate[] {
  logger.stage(3, 'Evaluate Layer 3 Quality Scoring & Anti-Fake Star Defense');
  const now = Date.now();
  const msInDay = 24 * 60 * 60 * 1000;

  const results: ScoredCandidate[] = [];

  for (const c of candidates) {
    if (!c.layer1.passed || !c.layer2.detectedType) {
      results.push({
        ...c,
        layer3: {
          adoption: 0,
          maintenance: 0,
          trust: 0,
          community: 0,
          docs: 0,
          compositeScore: 0,
          percentileRank: 0,
          antiFakeFlags: [],
          antiFakeExcluded: false,
        },
      });
      continue;
    }

    const { stars, forks, watchers, pushedAt, createdAt, license, description } = c.repo;

    // 1. Anti-Fake Star Heuristics
    const antiFakeFlags: string[] = [];
    const minRatio = config.antiFake.heuristics.min_fork_to_star_ratio;
    const minStarsRatio = config.antiFake.heuristics.min_stars_for_ratio_check;

    if (stars >= minStarsRatio && forks / Math.max(stars, 1) < minRatio) {
      antiFakeFlags.push(`Suspicious fork-to-star ratio: ${(forks / stars).toFixed(4)} (< ${minRatio})`);
    }

    if (stars >= 1000 && forks / Math.max(stars, 1) < minRatio * 0.25) {
      antiFakeFlags.push(`Extreme fork-to-star anomaly on high-star repo: ${(forks / stars).toFixed(4)}`);
    }

    const ageDays = Math.max(0, (now - new Date(createdAt).getTime()) / msInDay);
    if (ageDays > 0 && ageDays < 14 && stars >= 1000 && forks / Math.max(stars, 1) < 0.02) {
      antiFakeFlags.push('Suspicious new-repo star burst with minimal forks');
    }

    if (stars >= 200 && watchers === 0) {
      antiFakeFlags.push('Zero watchers on high-star repository');
    }

    const antiFakeExcluded = antiFakeFlags.length >= 2;

    // 2. Score Dimensions (0 to 100)
    // Adoption (30%): stars & forks on log scale
    const starScore = Math.min(100, (Math.log10(Math.max(stars, 10)) / 4) * 100);
    const forkScore = Math.min(100, (Math.log10(Math.max(forks, 1)) / 3) * 100);
    const adoption = Math.round(starScore * 0.7 + forkScore * 0.3);

    // Maintenance (25%): days since last push
    const daysSincePush = Math.max(0, (now - new Date(pushedAt).getTime()) / msInDay);
    const maintenance = Math.round(Math.max(0, 100 - (daysSincePush / 180) * 100));

    // Trust (20%): Official vendor, pinned, or verified ecosystem domain
    let trust = 50;
    if (c.isOfficialVendor) trust = 100;
    else if (c.isPinned) trust = 90;
    else if (c.repo.topics.includes('mcp') || c.repo.topics.includes('modelcontextprotocol')) trust = 70;

    // Community (15%): Forks and watchers ratio
    const community = Math.min(100, Math.round((forks / Math.max(stars, 1)) * 300));

    // Docs & Packaging (10%): License & detailed description
    let docs = 40;
    if (license && license !== 'NOASSERTION') docs += 30;
    if ((description || '').length > 50) docs += 30;

    // Composite Weighted Score
    const w = config.weights.weights;
    const compositeScore = Math.round(
      adoption * w.adoption +
      maintenance * w.maintenance +
      trust * w.trust +
      community * w.community +
      docs * w.docs
    );

    results.push({
      ...c,
      layer3: {
        adoption,
        maintenance,
        trust,
        community,
        docs,
        compositeScore,
        percentileRank: 0, // Computed across group
        antiFakeFlags,
        antiFakeExcluded,
      },
    });
  }

  // Calculate percentile rank for qualified candidates
  const eligible = results.filter(
    (r) => r.layer1.passed && r.layer2.detectedType && !r.layer3.antiFakeExcluded
  );

  eligible.sort((a, b) => b.layer3.compositeScore - a.layer3.compositeScore);

  const totalEligible = eligible.length;
  for (let i = 0; i < totalEligible; i++) {
    const percentile = Math.round(((totalEligible - i) / totalEligible) * 100);
    eligible[i].layer3.percentileRank = percentile;
  }

  logger.info(
    `Stage 3 Complete: Scored ${eligible.length} qualifying entries (${results.filter(r => r.layer3.antiFakeExcluded).length} excluded by anti-fake filters).`
  );
  return results;
}
