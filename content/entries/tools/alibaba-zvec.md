---
slug: alibaba-zvec
name: zvec
tagline: A lightweight, lightning-fast, in-process vector database
summary: A lightweight, lightning-fast, in-process vector database
categories:
  - databases-memory
tags:
  - agent-skills
  - db
  - embedded
  - faiss
status: active
quality_percentile: 64
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: alibaba/zvec
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 16151
  last_commit: 2026-10-26T03:18:04Z
  stars_delta_7d: 25
  stars_growth_pct: 0.2
  trending_score: 25.04
  rank_current: 94
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 16126
    - 16151
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: alibaba/zvec
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:44:08.883Z
  truncated: false
type: agent_tool
tool:
  subcategory: memory_rag
  install_command: pip install zvec
  runtime: python
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - zvec
    env_vars: []
    confidence: manifest
---

A lightweight, lightning-fast, in-process vector database
