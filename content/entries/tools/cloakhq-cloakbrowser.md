---
slug: cloakhq-cloakbrowser
name: CloakBrowser
tagline: Stealth Chromium that passes every bot detection test. Drop-in
  Playwright replacement with source-level fingerprint patches. 50+ tests
  passed.
summary: Stealth Chromium that passes every bot detection test. Drop-in
  Playwright replacement with source-level fingerprint patches. 50+ tests
  passed.
categories:
  - browser-web
tags:
  - ai-agents
  - anti-detect
  - antidetect-browser
  - bot-detection
status: active
quality_percentile: 70
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: CloakHQ/CloakBrowser
  official_vendor: false
  license: MIT
signals:
  stars: 32498
  last_commit: 2026-10-25T20:13:10Z
  stars_delta_7d: 198
  stars_growth_pct: 0.6
  trending_score: 199.21
  rank_current: 34
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 32300
    - 32498
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: CloakHQ/CloakBrowser
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:45:38.268Z
  truncated: false
type: agent_tool
tool:
  subcategory: browser_agent
  install_command: pip install cloakbrowser
  runtime: python
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - cloakbrowser
    env_vars: []
    confidence: manifest
---

Stealth Chromium that passes every bot detection test. Drop-in Playwright replacement with source-level fingerprint patches. 50+ tests passed.
