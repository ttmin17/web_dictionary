---
slug: ruvnet-ruflo-plugins-ruflo-agent-skills-wasm-agent
name: wasm-agent
tagline: Create and manage sandboxed WASM agents for isolated code execution
summary: When you need to run untrusted code, experiment with agent
  configurations, or create portable agents that run anywhere WASM is supported.
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 79
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-agent/skills/wasm-agent
  official_vendor: false
  license: MIT
signals:
  stars: 80952
  last_commit: 2026-11-05T04:50:54Z
  stars_delta_7d: 1609
  stars_growth_pct: 2
  trending_score: 1641.63
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74512
    - 76729
    - 79343
    - 80952
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-agent/skills/wasm-agent/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:11:32.189Z
  truncated: false
type: agent_skill
skill:
  skill_name: wasm-agent
  description: Create and manage sandboxed WASM agents for isolated code execution
  folder_path: plugins/ruflo-agent/skills/wasm-agent
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# WASM Agent
Create sandboxed agents that run in WebAssembly for safe, isolated execution.

## When to use

When you need to run untrusted code, experiment with agent configurations, or create portable agents that run anywhere WASM is supported.

## Steps

1. **Create agent** — call `mcp__plugin_ruflo-core_ruflo__wasm_agent_create` with agent configuration
2. **Send prompt** — call `mcp__plugin_ruflo-core_ruflo__wasm_agent_prompt` to interact with the agent
3. **Use tools** — call `mcp__plugin_ruflo-core_ruflo__wasm_agent_tool` to give the agent access to specific tools
4. **Manage files** — call `mcp__plugin_ruflo-core_ruflo__wasm_agent_files` to read/write files in the sandbox
5. **Export** — call `mcp__plugin_ruflo-core_ruflo__wasm_agent_export` to package the agent for sharing
6. **List agents** — call `mcp__plugin_ruflo-core_ruflo__wasm_agent_list` to see all running WASM agents
7. **Terminate** — call `mcp__plugin_ruflo-core_ruflo__wasm_agent_terminate` to stop an agent

## Benefits

- Full sandbox isolation — agents cannot access the host filesystem
- Portable — export and run on any WASM runtime
- Reproducible — same behavior across platforms
- Safe — no risk of system damage from agent actions
