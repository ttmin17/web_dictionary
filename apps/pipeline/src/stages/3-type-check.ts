import { fetchRepoTree, fetchFileContent } from '../sources/github-contents.js';
import { logger } from '../lib/logger.js';
import type { GateCheckedCandidate } from './2-gates.js';
import type { Layer2Evaluation } from '@web-db/schema';

export interface TypeCheckedCandidate extends GateCheckedCandidate {
  layer2: Layer2Evaluation;
}

export async function checkSingleCandidate(c: GateCheckedCandidate): Promise<TypeCheckedCandidate> {
  if (!c.layer1.passed) {
    return {
      ...c,
      layer2: {
        detectedType: null,
        evidenceKind: 'none',
        subpaths: [],
      },
    };
  }

  const { paths } = await fetchRepoTree(c.repo.owner, c.repo.name, c.repo.defaultBranch);

  const repoNameLower = c.repo.name.toLowerCase();
  const repoDescLower = (c.repo.description || '').toLowerCase();
  const repoTopics = (c.repo.topics || []).map((t) => t.toLowerCase());

  const hasToolManifest = paths.some(
    (p) =>
      p === 'package.json' ||
      p === 'pyproject.toml' ||
      p === 'requirements.txt' ||
      p === 'setup.py' ||
      p === 'Cargo.toml' ||
      p === 'go.mod' ||
      p === 'Dockerfile' ||
      p === 'docker-compose.yml'
  );

  const agentKeywords = [
    'ai-agents',
    'ai-agent',
    'agent',
    'agents',
    'autonomous-agents',
    'coding-agent',
    'agent-framework',
    'browser-agent',
    'llm',
    'rag',
    'scraper',
    'workflow',
    'orchestrator',
    'assistant',
    'copilot',
  ];

  const matchesAgentTopicOrDesc =
    repoTopics.some((t) => agentKeywords.some((k) => t.includes(k))) ||
    agentKeywords.some((k) => repoDescLower.includes(k)) ||
    agentKeywords.some((k) => repoNameLower.includes(k));

  const knownStandaloneTools = new Set([
    'gpt-researcher',
    'ui-tars-desktop',
    'ui-tars',
    'scrapling',
    'trigger.dev',
    'trigger-dev',
    'fastmcp',
    'hermes-agent',
    'rea',
    'graphify',
    'agent-reach',
    'worldmonitor',
    'omniroute',
    'headroom',
    'nanobot',
    'reactive-resume',
    'aionui',
    'editor',
    'maxkb',
    'douyin_tiktok_download_api',
    'skillspector',
    'claudian',
    'cc-haha',
    'hexstrike-ai',
    'omnigent',
    'upsonic',
    'deepchat',
    'semble',
    'code-graph-rag',
    'fast-agent',
    'dbhub',
    'obsidian-wiki',
    'ddgs',
    'super-agent-party',
    'kordoc',
    'aisoc',
    'paperbanana',
    'webclaw',
    'assetopsbench',
    'openchatcut',
    'boss-agent-cli',
    'solidworks-automation-skill',
    'anymd',
    'openrath',
    'octocode',
    'iai-personal-memory-engine',
    'memorix',
    'unbrowse',
    'hippo-memory',
    'fofamap',
    'cyrene-agent',
  ]);
  const knownStandaloneRepos = new Set([
    'assafelovic/gpt-researcher',
    'bytedance/ui-tars-desktop',
    'd4vinci/scrapling',
    'triggerdotdev/trigger.dev',
    'modelcontextprotocol/python-sdk',
    'modelcontextprotocol/typescript-sdk',
    'prefecthq/fastmcp',
    'nousresearch/hermes-agent',
    'morluto/rea',
    'graphify-labs/graphify',
    'panniantong/agent-reach',
    'koala73/worldmonitor',
    'diegosouzapw/omniroute',
    'headroomlabs-ai/headroom',
    'hkuds/nanobot',
    'reactive-resume/reactive-resume',
    'iofficeai/aionui',
    'pascalorg/editor',
    '1panel-dev/maxkb',
    'evil0ctal/douyin_tiktok_download_api',
    'nvidia/skillspector',
    'yishentu/claudian',
    'nanmicoder/cc-haha',
    '0x4m4/hexstrike-ai',
    'omnigent-ai/omnigent',
    'upsonic/upsonic',
    'thinkinaixyz/deepchat',
    'minishlab/semble',
    'vitali87/code-graph-rag',
    'evalstate/fast-agent',
    'bytebase/dbhub',
    'ar9av/obsidian-wiki',
    'deedy5/ddgs',
    'heshengtao/super-agent-party',
    'chrisryugj/kordoc',
    'beenuar/aisoc',
    'llmsresearch/paperbanana',
    '0xmassi/webclaw',
    'ibm/assetopsbench',
    '0xsline/openchatcut',
    'can4hou6joeng4/boss-agent-cli',
    'wzyn20051216/solidworks-automation-skill',
    'sylphxai/anymd',
    'rath-team/openrath',
    'bgauryy/octocode',
    'codeabra/iai-personal-memory-engine',
    'avids2/memorix',
    'unbrowse-ai/unbrowse',
    'kitfunso/hippo-memory',
    'asaotomo/fofamap',
    'playa-cyrene/cyrene-agent',
  ]);

  const isMcpSdkOrHarness =
    repoNameLower.endsWith('-sdk') ||
    repoNameLower === 'fastmcp' ||
    repoNameLower.includes('mcp-sdk') ||
    c.repo.fullName.toLowerCase() === 'modelcontextprotocol/python-sdk' ||
    c.repo.fullName.toLowerCase() === 'modelcontextprotocol/typescript-sdk' ||
    c.repo.fullName.toLowerCase() === 'prefecthq/fastmcp';

  const isStandaloneAgentToolOrSdk =
    isMcpSdkOrHarness ||
    knownStandaloneTools.has(repoNameLower) ||
    knownStandaloneRepos.has(c.repo.fullName.toLowerCase());

  // 1. Check for MCP Server Manifest (server.json)
  const serverJsonPath = paths.find((p) => p === 'server.json' || p.endsWith('/server.json'));
  let hasValidServerJson = false;
  if (serverJsonPath) {
    const content = await fetchFileContent(c.repo.owner, c.repo.name, serverJsonPath);
    if (content) {
      try {
        const parsed = JSON.parse(content);
        if (
          parsed.$schema?.includes('modelcontextprotocol') ||
          parsed.mcpServers ||
          (parsed.name && (parsed.command || parsed.remotes || parsed.version))
        ) {
          hasValidServerJson = true;
        }
      } catch {
        // invalid JSON
      }
    }
  }

  // 2. Check for MCP Dependency in manifests
  let hasMcpDependency = false;
  let mcpDepDetails = '';

  const packageJsonPath = paths.find((p) => p === 'package.json');
  if (packageJsonPath) {
    const content = await fetchFileContent(c.repo.owner, c.repo.name, packageJsonPath);
    if (content) {
      try {
        const pkg = JSON.parse(content);
        const deps = { ...pkg.dependencies, ...pkg.peerDependencies };
        if (deps && deps['@modelcontextprotocol/sdk']) {
          hasMcpDependency = true;
          mcpDepDetails = 'Strict dependency on @modelcontextprotocol/sdk in package.json';
        }
      } catch {
        // invalid package.json
      }
    }
  }

  if (!hasMcpDependency) {
    const pythonManifest = paths.find((p) => p === 'pyproject.toml' || p === 'requirements.txt');
    if (pythonManifest) {
      const content = await fetchFileContent(c.repo.owner, c.repo.name, pythonManifest);
      if (content) {
        const isPyproject = pythonManifest === 'pyproject.toml';
        const mcpDepRegex = isPyproject
          ? /["']\s*(?:mcp|fastmcp)(?:\[[^\]]*\])?(?:\s*[>=<~!\s"']|$)/i
          : /^(?:mcp|fastmcp)(?:\[[^\]]*\])?(?:\s*[>=<~!]|$)/im;

        if (mcpDepRegex.test(content)) {
          hasMcpDependency = true;
          mcpDepDetails = `Strict dependency on mcp/fastmcp in ${pythonManifest}`;
        }
      }
    }
  }

  // 3. Classify Standalone Agent Tools / SDKs with MCP support vs Pure MCP servers
  if (isStandaloneAgentToolOrSdk && (hasToolManifest || hasMcpDependency || hasValidServerJson)) {
    return {
      ...c,
      layer2: {
        detectedType: 'agent_tool',
        evidenceKind: 'tool_manifest',
        details: `Standalone AI tool, framework, or MCP SDK (${c.repo.name})`,
        subpaths: [],
      },
    };
  }

  const isDedicatedMcpServer =
    !isStandaloneAgentToolOrSdk &&
    (/(?:^|[-_])mcp(?:[-_]|$)/i.test(repoNameLower) ||
      repoNameLower.startsWith('mcp-') ||
      repoNameLower.endsWith('-mcp') ||
      repoTopics.includes('mcp-server') ||
      repoTopics.includes('model-context-protocol') ||
      /(?:mcp|model context protocol)\s+server/i.test(repoDescLower));

  if (hasValidServerJson || hasMcpDependency) {
    if (isDedicatedMcpServer || (hasValidServerJson && !isStandaloneAgentToolOrSdk)) {
      return {
        ...c,
        layer2: {
          detectedType: 'mcp_server',
          evidenceKind: hasValidServerJson ? 'mcp_server_manifest' : 'mcp_sdk_dependency',
          details: hasValidServerJson
            ? `Valid MCP server.json manifest at ${serverJsonPath}`
            : mcpDepDetails,
          subpaths: [],
        },
      };
    }

    // Has MCP dependency or server.json, but repo is a general AI framework/CLI/app
    return {
      ...c,
      layer2: {
        detectedType: 'agent_tool',
        evidenceKind: 'tool_manifest',
        details: `Standalone AI tool/framework with MCP integration (${c.repo.name})`,
        subpaths: [],
      },
    };
  }

  // 4. Check for Agent Skills (Public SKILL.md files only - skip internal dev scripts & translated doc duplicates)
  const MAX_SKILLS_PER_REPO = 25;
  const translatedDocRegex =
    /(?:^|\/)(?:docs|i18n|locales|translations)\/(?:ja|ja-jp|zh|zh-cn|zh-tw|ko|es|fr|de|pt|pt-br|ru|ar|tr|vi|th|id|it|pl|uk|el)(?:\/|$)/i;
  const publicSkillPaths = paths
    .filter((p) => {
      const isSkillMd = p.endsWith('/SKILL.md') || p === 'SKILL.md';
      if (!isSkillMd) return false;

      // Filter out internal hidden dot-directories like .claude/skills, .cursor/skills, .github, etc.
      const parts = p.split('/');
      const hasHiddenSegment = parts.some((part) => part.startsWith('.') && part !== '.');
      if (hasHiddenSegment) return false;

      // Filter out translated documentation copies (e.g. docs/ja-jp/skills/*/SKILL.md)
      if (translatedDocRegex.test(p)) return false;

      return true;
    })
    .slice(0, MAX_SKILLS_PER_REPO);

  if (publicSkillPaths.length > 0) {
    const subpaths = publicSkillPaths.map((p) => (p === 'SKILL.md' ? '' : p.replace(/\/SKILL\.md$/, '')));
    return {
      ...c,
      layer2: {
        detectedType: 'agent_skill',
        evidenceKind: 'skill_md_file',
        details: `Found ${publicSkillPaths.length} public SKILL.md file(s)`,
        subpaths,
      },
    };
  }

  // 5. Check for Standalone Agent Tools / CLIs / Repos
  if (hasToolManifest && (matchesAgentTopicOrDesc || isStandaloneAgentToolOrSdk)) {
    return {
      ...c,
      layer2: {
        detectedType: 'agent_tool',
        evidenceKind: 'tool_manifest',
        details: `Executable AI agent manifest detected in ${c.repo.name}`,
        subpaths: [],
      },
    };
  }

  // No verified file evidence found
  return {
    ...c,
    layer2: {
      detectedType: null,
      evidenceKind: 'none',
      details: 'No valid MCP server, public SKILL.md, or AI agent tool manifest detected',
      subpaths: [],
    },
  };
}

export async function evaluateLayer2TypeCheck(
  candidates: GateCheckedCandidate[]
): Promise<TypeCheckedCandidate[]> {
  logger.stage(2.5, 'Evaluate Layer 2 Type Check (File Evidence via Git Trees)');
  const qualified = candidates.filter((c) => c.layer1.passed);
  logger.info(`Checking file evidence for ${qualified.length} qualifying repositories in parallel batches...`);

  const results: TypeCheckedCandidate[] = [];
  const chunkSize = 8;
  let processed = 0;

  for (let i = 0; i < candidates.length; i += chunkSize) {
    const chunk = candidates.slice(i, i + chunkSize);
    const chunkResults = await Promise.all(chunk.map((c) => checkSingleCandidate(c)));
    results.push(...chunkResults);

    const chunkQualifiedCount = chunk.filter((c) => c.layer1.passed).length;
    processed += chunkQualifiedCount;
    if (chunkQualifiedCount > 0 && (processed % 24 === 0 || i + chunkSize >= candidates.length)) {
      const confirmedSoFar = results.filter((r) => r.layer2?.detectedType).length;
      logger.info(
        `[Progress: ${Math.min(processed, qualified.length)}/${qualified.length}] Checked repositories (confirmed evidence: ${confirmedSoFar})...`
      );
    }
  }

  const confirmedCount = results.filter((r) => r.layer2?.detectedType).length;
  logger.info(
    `Stage 2.5 Complete: ${confirmedCount} repositories confirmed with verifiable file evidence.`
  );
  return results;
}
