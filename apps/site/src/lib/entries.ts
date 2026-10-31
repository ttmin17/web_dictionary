import fs from 'node:fs';
import path from 'node:path';
import { getCollection, type CollectionEntry } from 'astro:content';

export type McpCollectionItem = CollectionEntry<'mcp'>;
export type SkillCollectionItem = CollectionEntry<'skills'>;
export type ToolCollectionItem = CollectionEntry<'tools'>;
export type AnyCollectionItem = McpCollectionItem | SkillCollectionItem | ToolCollectionItem;

export async function getAllMcp(): Promise<McpCollectionItem[]> {
  const items = await getCollection('mcp');
  return items.sort((a, b) => (b.data.signals.stars || 0) - (a.data.signals.stars || 0));
}

export async function getAllSkills(): Promise<SkillCollectionItem[]> {
  const items = await getCollection('skills');
  return items.sort((a, b) => (b.data.signals.stars || 0) - (a.data.signals.stars || 0));
}

export async function getAllTools(): Promise<ToolCollectionItem[]> {
  const items = await getCollection('tools');
  return items.sort((a, b) => (b.data.signals.stars || 0) - (a.data.signals.stars || 0));
}

export async function getAllEntries(): Promise<AnyCollectionItem[]> {
  const [mcp, skills, tools] = await Promise.all([getAllMcp(), getAllSkills(), getAllTools()]);
  return [...mcp, ...skills, ...tools].sort((a, b) => (b.data.signals.stars || 0) - (a.data.signals.stars || 0));
}

export async function getEntriesByCategory(categoryId: string): Promise<AnyCollectionItem[]> {
  const all = await getAllEntries();
  return all.filter((entry) => entry.data.categories.includes(categoryId));
}

export function formatStars(count?: number): string {
  if (!count) return '0';
  if (count >= 1000000) return `${(count / 1000000).toFixed(1)}m`;
  if (count >= 1000) return `${(count / 1000).toFixed(1)}k`;
  return count.toString();
}

export function formatTimeAgo(isoString?: string): string {
  if (!isoString) return 'recently';
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return 'recently';
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays <= 0) return 'today';
  if (diffDays === 1) return 'yesterday';
  if (diffDays < 30) return `${diffDays}d ago`;
  if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
  return `${Math.floor(diffDays / 365)}y ago`;
}

export function getCatalogState(): { refreshed_at: string; formattedDate: string } {
  try {
    const candidates = [
      path.resolve(process.cwd(), '../../data/state/catalog-state.json'),
      path.resolve(process.cwd(), '../data/state/catalog-state.json'),
      path.resolve(process.cwd(), 'data/state/catalog-state.json'),
    ];
    for (const stateFile of candidates) {
      if (fs.existsSync(stateFile)) {
        const data = JSON.parse(fs.readFileSync(stateFile, 'utf8'));
        const d = new Date(data.refreshed_at);
        const formattedDate = d.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
        return { refreshed_at: data.refreshed_at, formattedDate };
      }
    }
  } catch {
    // fallback
  }
  return { refreshed_at: '2026-10-14T13:10:15.358Z', formattedDate: 'Oct 14, 2026' };
}
