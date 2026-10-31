import fs from 'node:fs';
import path from 'node:path';
import yaml from 'yaml';

let rootDir = process.cwd();
while (rootDir !== path.dirname(rootDir) && !fs.existsSync(path.join(rootDir, 'pnpm-workspace.yaml'))) {
  rootDir = path.dirname(rootDir);
}

const mcpDir = path.join(rootDir, 'content/entries/mcp');
const files = fs.readdirSync(mcpDir).filter((f) => f.endsWith('.md'));

const candidates: Array<{
  file: string;
  name: string;
  repo: string;
  stars: number;
  desc: string;
  suggestedSubcategory: string;
}> = [];

for (const f of files) {
  const content = fs.readFileSync(path.join(mcpDir, f), 'utf8');
  const doc = yaml.parse(content.split(/^---\r?\n/m)[1]);
  if (!doc) continue;

  const title = (doc.name || '').toLowerCase();
  const desc = (doc.description || doc.summary || doc.tagline || '').toLowerCase();
  const repo = (doc.source?.repo || '').toLowerCase();

  const isExplicitTool =
    repo.includes('nanobot') ||
    repo.includes('worldmonitor') ||
    repo.includes('pascalorg/editor') ||
    repo.includes('omniroute') ||
    repo.includes('deepchat') ||
    repo.includes('skillspector') ||
    repo.includes('graphify') ||
    repo.includes('code-graph-rag') ||
    repo.includes('douyin') ||
    repo.includes('morluto/rea') ||
    repo.includes('agent-reach') ||
    repo.includes('reactive-resume');

  const hasMcpInNameOrRepo = title.includes('mcp') || repo.includes('mcp');
  const isAgentOrFramework =
    !hasMcpInNameOrRepo &&
    (desc.includes('agent') ||
      desc.includes('framework') ||
      desc.includes('cli') ||
      desc.includes('autonomous') ||
      desc.includes('workflow') ||
      desc.includes('orchestrat'));

  if (isExplicitTool || isAgentOrFramework) {
    let subcategory = 'other';
    if (desc.includes('code') || desc.includes('develop') || desc.includes('editor')) subcategory = 'coding_agent';
    else if (desc.includes('framework') || desc.includes('orchestrat') || desc.includes('workflow')) subcategory = 'agent_framework';
    else if (desc.includes('browser') || desc.includes('crawl') || desc.includes('scrape') || desc.includes('web')) subcategory = 'browser_agent';
    else if (desc.includes('rag') || desc.includes('memory') || desc.includes('graph') || desc.includes('database')) subcategory = 'memory_rag';
    else if (desc.includes('eval') || desc.includes('benchmark') || desc.includes('observability')) subcategory = 'eval_observability';
    else if (desc.includes('gui') || desc.includes('desktop') || desc.includes('ui')) subcategory = 'desktop_ui';

    candidates.push({
      file: f,
      name: doc.name,
      repo: doc.source?.repo,
      stars: doc.signals?.stars || 0,
      desc: (doc.tagline || doc.summary || '').slice(0, 80),
      suggestedSubcategory: subcategory,
    });
  }
}

candidates.sort((a, b) => b.stars - a.stars);
console.log(`Found ${candidates.length} candidate tools in content/entries/mcp:`);
for (const c of candidates) {
  console.log(`- [${c.stars} ★] ${c.file} (${c.repo}) [${c.suggestedSubcategory}]: ${c.desc}`);
}
