---
slug: he-yufeng-corecoder
name: CoreCoder
tagline: Minimal AI coding agent (~1,000 lines of Python) inspired by Claude
  Code. Works with any LLM. Think NanoGPT for coding agents. Formerly NanoCoder.
summary: Minimal AI coding agent (~1,000 lines of Python) inspired by Claude
  Code. Works with any LLM. Think NanoGPT for coding agents. Formerly NanoCoder.
categories:
  - coding-agents
tags:
  - ai-agent
  - claude-code
  - cli
  - coding-agent
status: active
quality_percentile: 75
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: he-yufeng/CoreCoder
  official_vendor: false
  license: MIT
signals:
  stars: 1871
  last_commit: 2026-10-19T03:49:19Z
  stars_delta_7d: 24
  stars_growth_pct: 1.3
  trending_score: 24.31
  rank_current: 95
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1847
    - 1871
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: he-yufeng/CoreCoder
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:45:47.386Z
  truncated: false
type: agent_tool
tool:
  subcategory: coding_agent
  install_command: pip install corecoder
  runtime: python
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - corecoder
    env_vars: []
    confidence: manifest
---

Minimal AI coding agent (~1,000 lines of Python) inspired by Claude Code. Works with any LLM. Think NanoGPT for coding agents. Formerly NanoCoder.
