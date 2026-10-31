---
slug: ruvnet-metaharness
name: metaharness
tagline: 🛠️ The meta-harness for AI agents — scaffold your own focused, branded
  agent harness with its own npx CLI, MCP server, memory, learning loop, and wit
summary: 🛠️ The meta-harness for AI agents — scaffold your own focused, branded
  agent harness with its own npx CLI, MCP server, memory, learning loop, and
  witness-signed releases. Works with Claude Code, Codex, pi.dev, Hermes,
  OpenClaw, and RVM (hardware-isolated sandbox).
categories:
  - agent-frameworks
tags:
  - agent-harness
  - agent-harness-generator
  - agent-scaffolding
  - agentic-ai
status: active
quality_percentile: 46
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/metaharness
  official_vendor: false
  license: MIT
signals:
  stars: 716
  last_commit: 2026-10-25T08:32:58Z
  stars_delta_7d: 9
  stars_growth_pct: 1.3
  trending_score: 9.11
  rank_current: 119
  velocity_source: snapshot_delta
  sparkline_4w:
    - 707
    - 716
language: en
needs_keys: false
prerequisites:
  - multi
readme_source:
  repo: ruvnet/metaharness
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:45:49.048Z
  truncated: false
type: agent_tool
tool:
  subcategory: coding_agent
  install_command: cargo install --git https://github.com/ruvnet/metaharness.git
  runtime: multi
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: npx
    args:
      - -y
      - agent-harness-generator
    env_vars: []
    confidence: manifest
---

🛠️ The meta-harness for AI agents — scaffold your own focused, branded agent harness with its own npx CLI, MCP server, memory, learning loop, and witness-signed releases. Works with Claude Code, Codex, pi.dev, Hermes, OpenClaw, and RVM (hardware-isolated sandbox).
