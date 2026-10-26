---
slug: netease-youdao-lobsterai
name: LobsterAI
tagline: Open-source, desktop-grade AI agent that gets real work done — data
  analysis, slides, docs, video & web research. Built on OpenClaw; runs tools on
  you
summary: Open-source, desktop-grade AI agent that gets real work done — data
  analysis, slides, docs, video & web research. Built on OpenClaw; runs tools on
  your real desktop and takes commands from your phone via WeChat, Feishu,
  DingTalk & Telegram.
categories:
  - agent-frameworks
tags:
  - ai-agent
  - ai-assistant
  - automation
  - autonomous-agents
status: active
quality_percentile: 94
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: netease-youdao/LobsterAI
  official_vendor: false
  license: MIT
signals:
  stars: 6151
  last_commit: 2026-10-25T06:24:58Z
  stars_delta_7d: 25
  stars_growth_pct: 0.4
  trending_score: 25.1
  rank_current: 93
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 6126
    - 6151
language: en
needs_keys: false
prerequisites:
  - node
readme_source:
  repo: netease-youdao/LobsterAI
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:45:47.561Z
  truncated: false
type: agent_tool
tool:
  subcategory: desktop_ui
  install_command: git clone https://github.com/netease-youdao/LobsterAI.git
  runtime: node
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: npx
    args:
      - -y
      - lobsterai
    env_vars: []
    confidence: manifest
---

Open-source, desktop-grade AI agent that gets real work done — data analysis, slides, docs, video & web research. Built on OpenClaw; runs tools on your real desktop and takes commands from your phone via WeChat, Feishu, DingTalk & Telegram.
