---
slug: ruvnet-ruflo-plugins-ruflo-swarm-skills-swarm-init
name: swarm-init
tagline: Initialize a multi-agent swarm with anti-drift configuration. Use when
  starting a complex multi-file task that needs 3+ coordinated agents (feature
  im
summary: Initialize a hierarchical swarm for coordinated multi-agent work.
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-swarm/skills/swarm-init
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-swarm/skills/swarm-init/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.549Z
  truncated: false
type: agent_skill
skill:
  skill_name: swarm-init
  description: Initialize a multi-agent swarm with anti-drift configuration. Use
    when starting a complex multi-file task that needs 3+ coordinated agents
    (feature implementation, refactor across modules, security audit). Skip for
    single-file edits or quick questions.
  folder_path: plugins/ruflo-swarm/skills/swarm-init
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Initialize a hierarchical swarm for coordinated multi-agent work.

Via MCP: `mcp__plugin_ruflo-core_ruflo__swarm_init({ topology: "hierarchical", maxAgents: 8, strategy: "specialized" })`

Or via CLI:
```bash
npx @claude-flow/cli@latest swarm init --topology hierarchical --max-agents 8 --strategy specialized
```

Then spawn named agents in ONE message via Claude Code's `Task` tool with `name:` (for `SendMessage` addressability) and `run_in_background: true` (for parallel execution). Use `EnterWorktree` per agent for git-safe parallel work, and `SendMessage` for inter-agent coordination.

For larger teams (10+), use hierarchical-mesh topology:
```bash
npx @claude-flow/cli@latest swarm init --topology hierarchical-mesh --max-agents 15 --strategy specialized
```
