---
slug: browser-use-browser-harness
name: browser-harness
tagline: Let Claude Code, Codex or Cursor use your real Chrome, logged in as
  you. One prompt to set up. Open source, MIT.
summary: Let Claude Code, Codex or Cursor use your real Chrome, logged in as
  you. One prompt to set up. Open source, MIT.
categories:
  - browser-web
tags:
  - ai-agent
  - browser-agent
  - browser-automation
  - browser-use
status: active
quality_percentile: 89
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: browser-use/browser-harness
  official_vendor: false
  license: MIT
signals:
  stars: 18620
  last_commit: 2026-10-25T03:12:39Z
  stars_delta_7d: 129
  stars_growth_pct: 0.7
  trending_score: 129.9
  rank_current: 54
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 18491
    - 18620
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: browser-use/browser-harness
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:43:42.178Z
  truncated: false
type: agent_tool
tool:
  subcategory: browser_agent
  install_command: pip install browser-harness
  runtime: python
  execution_mode: cloud
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - browser-harness
    env_vars: []
    confidence: manifest
---

Let Claude Code, Codex or Cursor use your real Chrome, logged in as you. One prompt to set up. Open source, MIT.
