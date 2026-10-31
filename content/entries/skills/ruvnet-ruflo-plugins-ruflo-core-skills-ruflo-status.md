---
slug: ruvnet-ruflo-plugins-ruflo-core-skills-ruflo-status
name: status
tagline: Diagnose Ruflo health, then report system, MCP server, and active-agent
  status without changing the installation
summary: Summarize the diagnostics and status together. Do not repair, reset,
  start, stop, install, or otherwise change anything during the default
  workflow.
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
  subpath: plugins/ruflo-core/skills/ruflo-status
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
  path: plugins/ruflo-core/skills/ruflo-status/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.543Z
  truncated: false
type: agent_skill
skill:
  skill_name: status
  description: Diagnose Ruflo health, then report system, MCP server, and
    active-agent status without changing the installation
  folder_path: plugins/ruflo-core/skills/ruflo-status
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Ruflo status
Use this skill when the user asks for Ruflo health, diagnostics, MCP server
state, or active-agent status.

## Default read-only workflow

Run these commands in order:

```bash
npx @claude-flow/cli@latest doctor
npx @claude-flow/cli@latest status
```

Summarize the diagnostics and status together. Do not repair, reset, start,
stop, install, or otherwise change anything during the default workflow.

## Explicit repair workflow

Only when the user explicitly asks to fix or auto-repair the installation,
replace the first command with:

```bash
npx @claude-flow/cli@latest doctor --fix
npx @claude-flow/cli@latest status
```

Report what the repair changed and the resulting status. Never infer
authorization for `doctor --fix` from a request to check or diagnose Ruflo.
