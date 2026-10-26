---
slug: tencentcloud-octop
name: Octop
tagline: A smarter, self-hosted AI assistant — multi-user, multi-agent.
summary: A smarter, self-hosted AI assistant — multi-user, multi-agent.
categories:
  - databases-memory
tags:
  - agentic-ai
  - ai-agent
  - ai-agents
  - local-first
status: active
quality_percentile: 75
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: TencentCloud/Octop
  official_vendor: false
  license: MIT
signals:
  stars: 11085
  last_commit: 2026-10-25T03:38:49Z
  stars_delta_7d: 1104
  stars_growth_pct: 11.1
  trending_score: 1226.11
  rank_current: 12
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9981
    - 11085
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: TencentCloud/Octop
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:45:39.867Z
  truncated: false
type: agent_tool
tool:
  subcategory: memory_rag
  install_command: pip install octop
  runtime: python
  execution_mode: hybrid
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - octop
    env_vars: []
    confidence: manifest
---

A smarter, self-hosted AI assistant — multi-user, multi-agent.
