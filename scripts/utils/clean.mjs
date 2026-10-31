import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '../../');

const targets = [
  'apps/site/dist',
  'apps/site/.astro',
  'packages/schema/dist',
  'packages/renderers/dist',
];

if (process.argv.includes('--cache')) {
  targets.push('apps/pipeline/.cache');
}

let cleanedCount = 0;

for (const relPath of targets) {
  const fullPath = path.join(rootDir, relPath);
  if (fs.existsSync(fullPath)) {
    fs.rmSync(fullPath, { recursive: true, force: true });
    console.log(`✓ Cleaned ${relPath}`);
    cleanedCount++;
  }
}

if (cleanedCount === 0) {
  console.log('Nothing to clean. Workspace is already clean.');
} else {
  console.log(`Clean completed (${cleanedCount} path(s) removed).`);
}
