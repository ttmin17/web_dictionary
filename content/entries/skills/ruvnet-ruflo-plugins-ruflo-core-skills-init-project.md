---
slug: ruvnet-ruflo-plugins-ruflo-core-skills-init-project
name: init-project
tagline: 'Initialize a new Ruflo project with MCP tools, hooks, and agent
  configuration. Use when setting up Ruflo in a fresh repo, or when the user
  says "init '
summary: Run npx @claude-flow/cli@latest init --wizard to set up the project
  interactively, or npx @claude-flow/cli@latest init --preset standard for
  defaults.
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
  subpath: plugins/ruflo-core/skills/init-project
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
  path: plugins/ruflo-core/skills/init-project/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.543Z
  truncated: false
type: agent_skill
skill:
  skill_name: init-project
  description: Initialize a new Ruflo project with MCP tools, hooks, and agent
    configuration. Use when setting up Ruflo in a fresh repo, or when the user
    says "init ruflo", "set up ruflo", or asks how to bootstrap the MCP server,
    hooks, and agent configs from scratch.
  folder_path: plugins/ruflo-core/skills/init-project
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Run `npx @claude-flow/cli@latest init --wizard` to set up the project interactively, or `npx @claude-flow/cli@latest init --preset standard` for defaults.

This creates CLAUDE.md, .claude/settings.json, and .claude-flow/ config with MCP server registration for the `ruflo` MCP tools.
