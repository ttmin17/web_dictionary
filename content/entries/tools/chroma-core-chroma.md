---
slug: chroma-core-chroma
name: chroma
tagline: Search infrastructure for AI
summary: Search infrastructure for AI
categories:
  - databases-memory
tags:
  - agents
  - ai-agents
  - database
  - rust
status: active
quality_percentile: 51
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: chroma-core/chroma
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 29583
  last_commit: 2026-10-26T03:26:30Z
  stars_delta_7d: 53
  stars_growth_pct: 0.2
  trending_score: 53.1
  rank_current: 77
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 29530
    - 29583
language: en
needs_keys: false
prerequisites:
  - multi
readme_source:
  repo: chroma-core/chroma
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:45:38.239Z
  truncated: false
type: agent_tool
tool:
  subcategory: memory_rag
  install_command: pip install chromadb
  runtime: multi
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - chromadb
    env_vars: []
    confidence: manifest
---

Search infrastructure for AI
