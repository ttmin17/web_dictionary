import fs from 'node:fs';
import path from 'node:path';
import {
  TrendingReportSchema,
  type TrendingReport,
  type TrendingItem,
} from '@web-db/schema';

export type { TrendingReport, TrendingItem };

function findRunsDir(): string | null {
  const candidates = [
    path.resolve(process.cwd(), '../../data/runs'),
    path.resolve(process.cwd(), '../data/runs'),
    path.resolve(process.cwd(), 'data/runs'),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

function findTrendingReportFile(week: string): string | null {
  const candidates = [
    path.resolve(process.cwd(), `../../data/runs/${week}/trending.json`),
    path.resolve(process.cwd(), `../data/runs/${week}/trending.json`),
    path.resolve(process.cwd(), `data/runs/${week}/trending.json`),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) return c;
  }
  return null;
}

/**
 * Returns all available historical and current weekly trending run keys,
 * sorted chronologically descending (newest first).
 */
export function getAvailableTrendingWeeks(): string[] {
  try {
    const runsDir = findRunsDir();
    if (runsDir) {
      return readWeeksFromDir(runsDir);
    }
    return ['2026-W42'];
  } catch {
    return ['2026-W42'];
  }
}

function readWeeksFromDir(dir: string): string[] {
  const weekRegex = /^\d{4}-W\d{2}$/;
  try {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const weeks = entries
      .filter((e) => e.isDirectory() && weekRegex.test(e.name))
      .filter((e) => fs.existsSync(path.join(dir, e.name, 'trending.json')))
      .map((e) => e.name)
      .sort()
      .reverse();

    return weeks.length > 0 ? weeks : ['2026-W42'];
  } catch {
    return ['2026-W42'];
  }
}

/**
 * Returns the latest available week key (e.g. "2026-W42").
 */
export function getLatestTrendingWeek(): string {
  const weeks = getAvailableTrendingWeeks();
  return weeks[0] || '2026-W42';
}

/**
 * Loads the trending report artifact for a specific week.
 */
export function getTrendingReport(week: string): TrendingReport {
  const filePath = findTrendingReportFile(week);
  if (filePath) {
      try {
        const raw = fs.readFileSync(filePath, 'utf8');
        const parsed = JSON.parse(raw);
        const result = TrendingReportSchema.safeParse(parsed);
        if (result.success) {
          return result.data;
        }
        return parsed as TrendingReport;
      } catch (err) {
        console.error(`Failed to load trending report at ${filePath}:`, err);
      }
    }

  // Graceful fallback empty report
  return {
    week,
    generated_at: new Date().toISOString(),
    summary: {
      week,
      generated_at: new Date().toISOString(),
      total_new_tools: 0,
      total_stars_gained: 0,
      total_active_entries: 0,
    },
    top25_overall: [],
    breakout_new: [],
    top10_mcp: [],
    top10_skills: [],
    top10_tools: [],
  };
}

/**
 * Loads the latest trending report.
 */
export function getLatestTrendingReport(): TrendingReport {
  const latestWeek = getLatestTrendingWeek();
  return getTrendingReport(latestWeek);
}

/**
 * Computes canonical relative URL for an entry based on its type.
 */
export function getEntryHref(item: { type: string; slug: string }): string {
  if (item.type === 'mcp_server') {
    return `/mcp/${item.slug}`;
  }
  if (item.type === 'agent_tool') {
    return `/tools/${item.slug}`;
  }
  return `/skills/${item.slug}`;
}

export const CATEGORY_LABELS: Record<string, string> = {
  'coding-agents': 'Coding & Dev',
  'browser-web': 'Browser & Web',
  'databases-memory': 'Databases & Memory',
  'agent-frameworks': 'Frameworks',
  'productivity-ops': 'Productivity',
  'cloud-infra': 'Cloud & DevOps',
  'media-creative': 'Media & Creative',
  'security-auth': 'Security',
  'domain-research': 'Research & Domain',
  'other': 'Other',
};

export function getCategoryLabel(categoryId?: string): string {
  if (!categoryId) return 'General';
  return CATEGORY_LABELS[categoryId] || categoryId;
}

export function formatStarDelta(delta: number): string {
  if (delta <= 0) return '0 ★';
  return `+${delta.toLocaleString()} ★`;
}

export interface DiffItem {
  slug: string;
  name: string;
  type: 'mcp_server' | 'agent_skill' | 'agent_tool';
  stars: number;
  repo: string;
}

export interface WeeklyDiffReport {
  week: string;
  generated_at: string;
  added: DiffItem[];
  removed: Array<string | DiffItem>;
  surging: TrendingItem[];
  summary: {
    week: string;
    generated_at: string;
    added_count: number;
    removed_count: number;
    surging_count: number;
    total_stars_gained: number;
  };
}

export function getWeeklyDiff(week: string): WeeklyDiffReport | null {
  const candidates = [
    path.resolve(process.cwd(), `../../data/runs/${week}/diff.json`),
    path.resolve(process.cwd(), `../data/runs/${week}/diff.json`),
    path.resolve(process.cwd(), `data/runs/${week}/diff.json`),
  ];
  for (const c of candidates) {
    if (fs.existsSync(c)) {
      try {
        const raw = fs.readFileSync(c, 'utf8');
        return JSON.parse(raw) as WeeklyDiffReport;
      } catch {
        return null;
      }
    }
  }
  return null;
}

export function getAllWeeklyDiffs(): WeeklyDiffReport[] {
  const weeks = getAvailableTrendingWeeks();
  const diffs: WeeklyDiffReport[] = [];
  for (const w of weeks) {
    const diff = getWeeklyDiff(w);
    if (diff) diffs.push(diff);
  }
  return diffs;
}
