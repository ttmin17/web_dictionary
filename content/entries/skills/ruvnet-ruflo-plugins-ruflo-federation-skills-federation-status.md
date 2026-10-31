---
slug: ruvnet-ruflo-plugins-ruflo-federation-skills-federation-status
name: federation-status
tagline: Show federation health — peers, sessions, trust levels, and message
  metrics. Use when the user asks "is federation healthy?", "show peers",
  "federatio
summary: Show the current state of the federation.
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
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-federation/skills/federation-status
  official_vendor: false
  license: MIT
signals:
  stars: 76729
  last_commit: 2026-10-19T06:30:38Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 76729
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-federation/skills/federation-status/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:31:55.775Z
  truncated: false
type: agent_skill
skill:
  skill_name: federation-status
  description: Show federation health — peers, sessions, trust levels, and message
    metrics. Use when the user asks "is federation healthy?", "show peers",
    "federation status", or wants to inspect cross-installation agent
    connectivity.
  folder_path: plugins/ruflo-federation/skills/federation-status
  extra_files: []
  pack_total_skills: 161
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Show the current state of the federation.

Steps:
1. `npx -y -p @claude-flow/plugin-agent-federation@latest ruflo-federation status` -- overall health
2. `npx -y -p @claude-flow/plugin-agent-federation@latest ruflo-federation peers` -- list peers with trust levels and scores
3. Summarize: active sessions, messages exchanged, PII redactions, threat detections

Search memory for federation history:
`mcp__plugin_ruflo-core_ruflo__memory_search({ query: "federation peer trust", namespace: "federation" })`
