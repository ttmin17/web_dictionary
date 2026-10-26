---
slug: opencoworkai-open-cowork
name: open-cowork
tagline: Open-source AI agent desktop app for Windows & macOS. One-click install
  Claude Code, MCP tools, and Skills — with sandbox isolation, multi-model suppo
summary: Open-source AI agent desktop app for Windows & macOS. One-click install
  Claude Code, MCP tools, and Skills — with sandbox isolation, multi-model
  support, and Feishu/Slack integration.
categories:
  - productivity-ops
tags:
  - ai-agent
  - ai-coding
  - ai-tools
  - anthropic
status: active
quality_percentile: 75
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: OpenCoworkAI/open-cowork
  official_vendor: false
  license: MIT
signals:
  stars: 2229
  last_commit: 2026-10-20T10:08:13Z
  stars_delta_7d: 10
  stars_growth_pct: 0.5
  trending_score: 10.05
  rank_current: 116
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 2219
    - 2229
language: en
needs_keys: false
prerequisites:
  - node
readme_source:
  repo: OpenCoworkAI/open-cowork
  path: readme.md
  branch: main
  fetched_at: 2026-10-26T07:45:45.923Z
  truncated: false
type: agent_tool
tool:
  subcategory: desktop_ui
  install_command: npm install open-cowork
  runtime: node
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: npx
    args:
      - -y
      - open-cowork
    env_vars: []
    confidence: manifest
---

Open-source AI agent desktop app for Windows & macOS. One-click install Claude Code, MCP tools, and Skills — with sandbox isolation, multi-model support, and Feishu/Slack integration.
