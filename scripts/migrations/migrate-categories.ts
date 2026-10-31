import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import yaml from 'yaml';
import { classifyCategoryAndTags, CATEGORY_DEFINITIONS } from '../../apps/pipeline/src/classify/categories.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');

const LEGACY_MAPPING: Record<string, string> = {
  'browser-automation': 'browser-web',
  'databases': 'databases-memory',
  'productivity': 'productivity-ops',
  'security': 'security-auth',
  'dev-tools': 'coding-agents',
  'ai-frameworks': 'agent-frameworks',
  'other': 'other',
};

export async function migrateCategories(): Promise<{
  totalMigrated: number;
  distribution: Record<string, number>;
}> {
  const contentDir = path.join(rootDir, 'content/entries');
  const dirs = [path.join(contentDir, 'mcp'), path.join(contentDir, 'skills')];

  let totalMigrated = 0;
  const distribution: Record<string, number> = {};

  for (const cat of CATEGORY_DEFINITIONS) {
    distribution[cat.id] = 0;
  }

  for (const dir of dirs) {
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));

    for (const file of files) {
      const filePath = path.join(dir, file);
      const raw = fs.readFileSync(filePath, 'utf8');

      const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
      if (!match) continue;

      const frontmatterRaw = match[1];
      const body = match[2];

      const data = yaml.parse(frontmatterRaw);
      const legacyCats: string[] = Array.isArray(data.categories) ? data.categories : [];

      // Run score-weighted classification
      const result = classifyCategoryAndTags({
        name: data.name || '',
        desc: `${data.tagline || ''} ${data.summary || ''}`,
        topics: data.topics || [],
        skillName: data.skill?.skill_name,
        subpath: data.source?.subpath,
      });

      let targetCategory = result.categories[0];

      // If classified as 'other' but had a known legacy mapping, check legacy mapping
      if (targetCategory === 'other' && legacyCats.length > 0) {
        const mapped = LEGACY_MAPPING[legacyCats[0]];
        if (mapped && mapped !== 'other') {
          targetCategory = mapped;
        }
      }

      data.categories = [targetCategory];
      data.tags = result.tags;

      const updatedFrontmatter = yaml.stringify(data);
      const updatedContent = `---\n${updatedFrontmatter}---\n\n${body.trim()}\n`;

      fs.writeFileSync(filePath, updatedContent, 'utf8');
      totalMigrated++;
      distribution[targetCategory] = (distribution[targetCategory] || 0) + 1;
    }
  }

  return { totalMigrated, distribution };
}

// Direct execution
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  migrateCategories()
    .then(({ totalMigrated, distribution }) => {
      console.log(`[SG-2] Successfully migrated ${totalMigrated} entries across content/entries/.`);
      console.log('Category Distribution:');
      for (const [cat, count] of Object.entries(distribution)) {
        const pct = ((count / totalMigrated) * 100).toFixed(1);
        console.log(`  ${cat.padEnd(20)}: ${count} (${pct}%)`);
      }
    })
    .catch((err) => {
      console.error('[SG-2] Category migration failed:', err);
      process.exit(1);
    });
}
