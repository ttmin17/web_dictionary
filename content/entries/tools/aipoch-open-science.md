---
slug: aipoch-open-science
name: open-science
tagline: The open-source AI research workbench for scientific research and agent
  workflows. Local-first, model-agnostic desktop app with extensible skills, MCP
summary: The open-source AI research workbench for scientific research and agent
  workflows. Local-first, model-agnostic desktop app with extensible skills, MCP
  tools and connectors, Python/R execution and traceable artifacts for
  reproducible research on macOS, Windows and Linux.
categories:
  - domain-research
tags:
  - agent-skills
  - ai-agent
  - ai-for-science
  - ai-research
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: aipoch/open-science
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5367
  last_commit: 2026-10-26T06:31:56Z
  stars_delta_7d: 144
  stars_growth_pct: 2.8
  trending_score: 147.97
  rank_current: 47
  rank_delta: -29
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5451
    - 5075
    - 5223
    - 5367
language: en
needs_keys: false
prerequisites:
  - node
readme_source:
  repo: aipoch/open-science
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:44:55.808Z
  truncated: false
type: agent_tool
tool:
  subcategory: desktop_ui
  install_command: npx open-science
  runtime: node
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: npx
    args:
      - -y
      - open-science
    env_vars: []
    confidence: manifest
---

The open-source AI research workbench for scientific research and agent workflows. Local-first, model-agnostic desktop app with extensible skills, MCP tools and connectors, Python/R execution and traceable artifacts for reproducible research on macOS, Windows and Linux.
