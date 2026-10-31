---
slug: ruvnet-ruflo-plugins-ruflo-federation-skills-federation-init
name: federation-init
tagline: Initialize federation on this node — generate keypair and configure peers
summary: Initialize this node for federation. Generates an ed25519 keypair,
  creates the federation config, and optionally sets a compliance mode.
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
  subpath: plugins/ruflo-federation/skills/federation-init
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
  path: plugins/ruflo-federation/skills/federation-init/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:31:55.775Z
  truncated: false
type: agent_skill
skill:
  skill_name: federation-init
  description: Initialize federation on this node — generate keypair and configure peers
  folder_path: plugins/ruflo-federation/skills/federation-init
  extra_files: []
  pack_total_skills: 161
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Initialize this node for federation. Generates an ed25519 keypair, creates the federation config, and optionally sets a compliance mode.

Steps:
1. `npx -y -p @claude-flow/plugin-agent-federation@latest ruflo-federation init`
2. If a compliance mode is specified, configure it: `npx -y -p @claude-flow/plugin-agent-federation@latest ruflo-federation config --compliance MODE`
3. Show the node's public key and endpoint for sharing with peers

Store init event:
`mcp__plugin_ruflo-core_ruflo__memory_store({ key: "federation-init", value: "Node initialized", namespace: "federation" })`
