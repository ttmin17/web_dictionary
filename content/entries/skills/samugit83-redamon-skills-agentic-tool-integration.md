---
slug: samugit83-redamon-skills-agentic-tool-integration
name: agentic-tool-integration
tagline: "Wiring a new tool the AI agent can call (not the recon pipeline): the
  tool registry, the phase map, the hardcoded dispatch chokepoint, and the
  duplica"
summary: "- Adding any tool the agent uses during a chat session (CLI wrapper,
  MCP tool, or API tool)."
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - ai-penetration-testing
  - ai-pentesting
  - autonomous-agents
status: active
quality_percentile: 94
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: samugit83/redamon
  subpath: skills/agentic-tool-integration
  official_vendor: false
  license: MIT
signals:
  stars: 3298
  last_commit: 2026-11-04T18:34:53Z
  stars_delta_7d: 84
  stars_growth_pct: 2.6
  trending_score: 86.2
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3152
    - 3214
    - 3298
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: samugit83/redamon
  path: skills/agentic-tool-integration/SKILL.md
  branch: master
  fetched_at: 2026-11-05T13:13:51.216Z
  truncated: false
type: agent_skill
skill:
  skill_name: agentic-tool-integration
  description: >
    Wiring a new tool the AI agent can call (not the recon pipeline): the tool
    registry, the phase map, the hardcoded dispatch chokepoint, and the
    duplicated execution paths that make a tool work in single mode but silently
    break in parallel plans. Trigger: adding or editing a tool the agent
    invokes; editing agentic/prompts/tool_registry.py, PhaseAwareToolExecutor in
    agentic/tools.py, agentic/orchestrator_helpers/nodes/execute_tool_node.py or
    execute_plan_node.py, TOOL_PHASE_MAP / DANGEROUS_TOOLS in
    agentic/project_settings.py, or a new MCP server in mcp/servers/.
  folder_path: skills/agentic-tool-integration
  extra_files: []
  pack_total_skills: 17
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: samugit83-redamon
---

## When to Use

- Adding any tool the agent uses during a chat session (CLI wrapper, MCP tool, or API tool).

For a recon-pipeline tool (runs during a scan, writes the graph), use
`recon-tool-integration` instead. For the
per-setting/default multi-layer wiring, use
`project-settings-cascade`. For a whole
new attack *skill* (not a tool), use `builtin-agent-skill`.

---

## Critical Rules

- **NEVER `import` a package not already in the agent image.** `agentic/` is
  baked into the `redamon-agent` image; a missing import **crash-loops** the
  container. Confirm it is in [agentic/requirements.txt](https://github.com/samugit83/redamon/blob/master/skills/agentic-tool-integration/../../agentic/requirements.txt)
  or the [Dockerfile](https://github.com/samugit83/redamon/blob/master/skills/agentic-tool-integration/../../agentic/Dockerfile) first.
- **NEVER add a tool without a `TOOL_REGISTRY` entry** in
  [agentic/prompts/tool_registry.py](https://github.com/samugit83/redamon/blob/master/skills/agentic-tool-integration/../../agentic/prompts/tool_registry.py). The
  registry is the single source of truth the LLM reads; an unregistered tool is
  invisible to the agent. All four fields (`purpose`, `when_to_use`,
  `args_format`, `description`) are required, and the description must clear the
  100-char minimum in [agentic/tests/test_tool_registry_completeness.py](https://github.com/samugit83/redamon/blob/master/skills/agentic-tool-integration/../../agentic/tests/test_tool_registry_completeness.py),
  which fails on any unregistered or stub entry.
- **NEVER forget the dispatch branch for a non-MCP / API tool.**
  `PhaseAwareToolExecutor.execute()` in [agentic/tools.py](https://github.com/samugit83/redamon/blob/master/skills/agentic-tool-integration/../../agentic/tools.py)
  has hardcoded `if`/`elif` dispatch. A Type D (API) tool or an MCP tool needing
  key injection MUST add an `elif`; without it the tool is registered but never
  dispatched. MCP tools with no key injection go through the `else` branch automatically.
- **NEVER edit `execute_tool_node.py` without mirroring it in `execute_plan_node.py`.**
  [execute_tool_node.py](https://github.com/samugit83/redamon/blob/master/skills/agentic-tool-integration/../../agentic/orchestrator_helpers/nodes/execute_tool_node.py)
  (single tool) and [execute_plan_node.py](https://github.com/samugit83/redamon/blob/master/skills/agentic-tool-integration/../../agentic/orchestrator_helpers/nodes/execute_plan_node.py)
  (parallel plans) **duplicate** long-running detection and session/listener
  handlers. Update one only and the tool works interactively but silently
  misbehaves in parallel plan execution.
- **NEVER rely on the Prisma default to reach existing projects.** The
  `agentToolPhaseMap` default applies to NEW projects only. Existing projects
  need a jsonb `UPDATE` or the agent never sees the tool there. See
  `project-settings-cascade`.
- **ALWAYS add the tool to `TOOL_PHASE_MAP`** in [agentic/project_settings.py](https://github.com/samugit83/redamon/blob/master/skills/agentic-tool-integration/../../agentic/project_settings.py).
  If it sends attack traffic: also add it to `DANGEROUS_TOOLS` (a frozenset in
  the same file), a per-tool section in
  [agentic/prompts/stealth_rules.py](https://github.com/samugit83/redamon/blob/master/skills/agentic-tool-integration/../../agentic/prompts/stealth_rules.py), and
  the right list in `CATEGORY_TOOL_MAP` in
  [agentic/orchestrator_helpers/roe_gate.py](https://github.com/samugit83/redamon/blob/master/skills/agentic-tool-integration/../../agentic/orchestrator_helpers/roe_gate.py);
  a discovery/scanning tool also goes in `RECON_DISCOVERY_TOOLS` there, so the
  recon budget can refuse it.
- **NEVER add a RoE or budget check to one executor node.** `roe_gate.check_tool_call`
  is the one pre-dispatch gate (the Rules of Engagement, then the recon budget),
  and every executor path asks it: the single tool, the plan wave, and every
  fireteam member, which reuses those two nodes. A rule on one path only is no
  rule. [agentic/tests/test_roe_gate.py](https://github.com/samugit83/redamon/blob/master/skills/agentic-tool-integration/../../agentic/tests/test_roe_gate.py)
  fails when a path stops asking, or when a name in either list is not a
  `TOOL_REGISTRY` key (a misspelt name refuses nothing).

---

## Pick the integration type (simplest that fits)

| Type | Use when | Core files beyond the registry |
| --- | --- | --- |
| **A** kali_shell | tool is in Kali, 300s timeout OK, no parsing | Dockerfile + `kali_shell` description only (no registry entry) |
| **B** MCP tool on existing server | CLI tool, custom timeout/parsing, fire-and-forget | `@mcp.tool()` in an existing `mcp/servers/*.py` (auto-discovered) |
| **C** new MCP server | stateful/interactive, own port | new `mcp/servers/*_server.py` + `SERVERS` in [run_servers.py](https://github.com/samugit83/redamon/blob/master/skills/agentic-tool-integration/../../mcp/servers/run_servers.py) + URL in `MCPToolsManager` |
| **D** API/HTTP tool | external API, key-gated | `ToolManager` class + `elif` dispatch in `tools.py` + orchestrator key hot-reload |

Naming is uniform across every layer: MCP fn / registry key / phase-map key =
`execute_<tool>`; Prisma field `camelCase`; Python setting `SCREAMING_SNAKE`; DB
column `snake_case` via `@map()`.

## Commands

```bash
docker compose build agent && docker compose up -d agent   # mandatory: agentic/ is baked
docker compose exec webapp npx prisma db push              # if you added a Prisma field (NEVER prisma migrate)
./agentic/run_tests.sh                                     # gate; includes the registry completeness test
```

## Resources

- [docs/readmes/coding_agent_prompts/PROMPT.ADD_AGENTIC_TOOL.md](https://github.com/samugit83/redamon/blob/master/skills/agentic-tool-integration/../../docs/readmes/coding_agent_prompts/PROMPT.ADD_AGENTIC_TOOL.md) - the full per-type file checklist and worked references
- Related skills: `project-settings-cascade`, `builtin-agent-skill`, `recon-tool-integration`
