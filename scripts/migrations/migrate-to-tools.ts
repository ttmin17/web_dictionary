import fs from 'node:fs';
import path from 'node:path';
import yaml from 'yaml';
import { ToolEntrySchema } from '../../packages/schema/src/index.js';

let rootDir = process.cwd();
while (rootDir !== path.dirname(rootDir) && !fs.existsSync(path.join(rootDir, 'pnpm-workspace.yaml'))) {
  rootDir = path.dirname(rootDir);
}
const mcpDir = path.join(rootDir, 'content/entries/mcp');
const toolsDir = path.join(rootDir, 'content/entries/tools');

fs.mkdirSync(toolsDir, { recursive: true });

type ToolMeta = {
  subcategory:
    | 'coding_agent'
    | 'agent_framework'
    | 'browser_agent'
    | 'memory_rag'
    | 'eval_observability'
    | 'sdk_harness'
    | 'desktop_ui'
    | 'other';
  install_command: string;
  runtime: 'node' | 'python' | 'rust' | 'go' | 'docker' | 'multi' | 'unknown';
  execution_mode: 'local' | 'cloud' | 'hybrid';
  has_mcp_support: boolean;
};

const migrations: Record<string, ToolMeta> = {
  // Previously migrated seeds
  'assafelovic-gpt-researcher.md': {
    subcategory: 'agent_framework',
    install_command: 'pip install gpt-researcher',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'bytedance-ui-tars-desktop.md': {
    subcategory: 'desktop_ui',
    install_command: 'npx @agent-tars/cli@latest',
    runtime: 'node',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'd4vinci-scrapling.md': {
    subcategory: 'browser_agent',
    install_command: 'pip install scrapling',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'triggerdotdev-trigger-dev.md': {
    subcategory: 'agent_framework',
    install_command: 'npx trigger.dev@latest init',
    runtime: 'node',
    execution_mode: 'hybrid',
    has_mcp_support: false,
  },
  'modelcontextprotocol-python-sdk.md': {
    subcategory: 'sdk_harness',
    install_command: 'pip install mcp',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'prefecthq-fastmcp.md': {
    subcategory: 'sdk_harness',
    install_command: 'pip install fastmcp',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },

  // 44 newly identified standalone AI agent tools from content/entries/mcp
  'nousresearch-hermes-agent.md': {
    subcategory: 'agent_framework',
    install_command: 'pip install hermes-agent',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'morluto-rea.md': {
    subcategory: 'coding_agent',
    install_command: 'pip install rea',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'graphify-labs-graphify.md': {
    subcategory: 'memory_rag',
    install_command: 'pip install graphify',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'panniantong-agent-reach.md': {
    subcategory: 'browser_agent',
    install_command: 'git clone https://github.com/Panniantong/Agent-Reach.git',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'koala73-worldmonitor.md': {
    subcategory: 'desktop_ui',
    install_command: 'git clone https://github.com/koala73/worldmonitor.git',
    runtime: 'node',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'diegosouzapw-omniroute.md': {
    subcategory: 'agent_framework',
    install_command: 'npm install -g omniroute',
    runtime: 'node',
    execution_mode: 'hybrid',
    has_mcp_support: true,
  },
  'headroomlabs-ai-headroom.md': {
    subcategory: 'memory_rag',
    install_command: 'pip install headroom-ai',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'hkuds-nanobot.md': {
    subcategory: 'agent_framework',
    install_command: 'pip install nanobot-ai',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'reactive-resume-reactive-resume.md': {
    subcategory: 'desktop_ui',
    install_command: 'git clone https://github.com/reactive-resume/reactive-resume.git',
    runtime: 'node',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'iofficeai-aionui.md': {
    subcategory: 'desktop_ui',
    install_command: 'git clone https://github.com/iOfficeAI/AionUi.git',
    runtime: 'node',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'pascalorg-editor.md': {
    subcategory: 'desktop_ui',
    install_command: 'npm install -g @pascalorg/editor',
    runtime: 'node',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  '1panel-dev-maxkb.md': {
    subcategory: 'agent_framework',
    install_command: 'docker run -d --name=maxkb 1panel/maxkb',
    runtime: 'docker',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'evil0ctal-douyin_tiktok_download_api.md': {
    subcategory: 'browser_agent',
    install_command: 'pip install -r requirements.txt',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'nvidia-skillspector.md': {
    subcategory: 'eval_observability',
    install_command: 'pip install skillspector',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'yishentu-claudian.md': {
    subcategory: 'coding_agent',
    install_command: 'git clone https://github.com/YishenTu/claudian.git',
    runtime: 'node',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'nanmicoder-cc-haha.md': {
    subcategory: 'desktop_ui',
    install_command: 'git clone https://github.com/NanmiCoder/cc-haha.git',
    runtime: 'node',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  '0x4m4-hexstrike-ai.md': {
    subcategory: 'agent_framework',
    install_command: 'git clone https://github.com/0x4m4/hexstrike-ai.git',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'omnigent-ai-omnigent.md': {
    subcategory: 'agent_framework',
    install_command: 'pip install omnigent',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'upsonic-upsonic.md': {
    subcategory: 'agent_framework',
    install_command: 'pip install upsonic',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'thinkinaixyz-deepchat.md': {
    subcategory: 'desktop_ui',
    install_command: 'git clone https://github.com/ThinkInAIXYZ/deepchat.git',
    runtime: 'node',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'minishlab-semble.md': {
    subcategory: 'coding_agent',
    install_command: 'pip install semble',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'vitali87-code-graph-rag.md': {
    subcategory: 'memory_rag',
    install_command: 'pip install code-graph-rag',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'evalstate-fast-agent.md': {
    subcategory: 'eval_observability',
    install_command: 'pip install fast-agent',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'bytebase-dbhub.md': {
    subcategory: 'memory_rag',
    install_command: 'docker run -d bytebase/dbhub',
    runtime: 'docker',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'ar9av-obsidian-wiki.md': {
    subcategory: 'memory_rag',
    install_command: 'git clone https://github.com/Ar9av/obsidian-wiki.git',
    runtime: 'node',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'deedy5-ddgs.md': {
    subcategory: 'browser_agent',
    install_command: 'pip install duckduckgo_search',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'heshengtao-super-agent-party.md': {
    subcategory: 'desktop_ui',
    install_command: 'git clone https://github.com/heshengtao/super-agent-party.git',
    runtime: 'node',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'chrisryugj-kordoc.md': {
    subcategory: 'browser_agent',
    install_command: 'pip install kordoc',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'beenuar-aisoc.md': {
    subcategory: 'agent_framework',
    install_command: 'git clone https://github.com/beenuar/AiSOC.git',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'llmsresearch-paperbanana.md': {
    subcategory: 'agent_framework',
    install_command: 'pip install paperbanana',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  '0xmassi-webclaw.md': {
    subcategory: 'browser_agent',
    install_command: 'pip install webclaw',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'ibm-assetopsbench.md': {
    subcategory: 'eval_observability',
    install_command: 'pip install assetopsbench',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  '0xsline-openchatcut.md': {
    subcategory: 'desktop_ui',
    install_command: 'git clone https://github.com/0xsline/OpenChatCut.git',
    runtime: 'node',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'can4hou6joeng4-boss-agent-cli.md': {
    subcategory: 'browser_agent',
    install_command: 'pip install boss-agent-cli',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'wzyn20051216-solidworks-automation-skill.md': {
    subcategory: 'coding_agent',
    install_command: 'git clone https://github.com/wzyn20051216/solidworks-automation-skill.git',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'sylphxai-anymd.md': {
    subcategory: 'browser_agent',
    install_command: 'npm install -g anymd',
    runtime: 'node',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'rath-team-openrath.md': {
    subcategory: 'agent_framework',
    install_command: 'pip install openrath',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'bgauryy-octocode.md': {
    subcategory: 'coding_agent',
    install_command: 'npm install -g @octocode/cli',
    runtime: 'node',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'codeabra-iai-personal-memory-engine.md': {
    subcategory: 'memory_rag',
    install_command: 'pip install iai-memory',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'avids2-memorix.md': {
    subcategory: 'memory_rag',
    install_command: 'pip install memorix',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'unbrowse-ai-unbrowse.md': {
    subcategory: 'browser_agent',
    install_command: 'pip install unbrowse',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'kitfunso-hippo-memory.md': {
    subcategory: 'memory_rag',
    install_command: 'pip install hippo-memory',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'asaotomo-fofamap.md': {
    subcategory: 'browser_agent',
    install_command: 'git clone https://github.com/asaotomo/FofaMap.git',
    runtime: 'python',
    execution_mode: 'local',
    has_mcp_support: true,
  },
  'playa-cyrene-cyrene-agent.md': {
    subcategory: 'desktop_ui',
    install_command: 'git clone https://github.com/Playa-Cyrene/Cyrene-Agent.git',
    runtime: 'node',
    execution_mode: 'local',
    has_mcp_support: true,
  },
};

let migratedCount = 0;

for (const [filename, meta] of Object.entries(migrations)) {
  const mcpFilePath = path.join(mcpDir, filename);
  const toolFilePath = path.join(toolsDir, filename);

  // If already in toolsDir, we can ensure its metadata is valid
  let raw: string;
  let fromMcp = false;
  if (fs.existsSync(mcpFilePath)) {
    raw = fs.readFileSync(mcpFilePath, 'utf8');
    fromMcp = true;
  } else if (fs.existsSync(toolFilePath)) {
    raw = fs.readFileSync(toolFilePath, 'utf8');
  } else {
    console.warn(`File ${filename} not found in mcp/ or tools/, skipping.`);
    continue;
  }

  const parts = raw.split(/^---\r?\n/m);
  if (parts.length < 3) {
    console.error(`Invalid markdown frontmatter format in ${filename}`);
    continue;
  }

  const frontmatter = yaml.parse(parts[1]);
  const body = parts.slice(2).join('---').trim();

  const mcpLaunch = frontmatter.launch && frontmatter.launch.confidence !== 'none'
    ? frontmatter.launch
    : frontmatter.tool?.mcp_launch;

  const toolFrontmatter = {
    ...frontmatter,
    type: 'agent_tool',
    tool: {
      subcategory: meta.subcategory,
      install_command: meta.install_command,
      runtime: meta.runtime,
      execution_mode: meta.execution_mode,
      has_mcp_support: meta.has_mcp_support,
      mcp_launch: mcpLaunch,
    },
  };
  delete toolFrontmatter.launch;

  // Validate against schema
  const parsed = ToolEntrySchema.safeParse(toolFrontmatter);
  if (!parsed.success) {
    console.error(`Schema validation failed for ${filename}:`, parsed.error.format());
    process.exit(1);
  }

  const newContent = `---\n${yaml.stringify(parsed.data)}---\n\n${body}\n`;
  fs.writeFileSync(toolFilePath, newContent, 'utf8');
  if (fromMcp) {
    fs.unlinkSync(mcpFilePath);
    console.log(`Migrated ${filename} from mcp/ to tools/.`);
  } else {
    console.log(`Updated existing tool ${filename}.`);
  }
  migratedCount++;
}

console.log(`Migration complete. Processed ${migratedCount} tools.`);
