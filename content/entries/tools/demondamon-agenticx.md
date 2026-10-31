---
slug: demondamon-agenticx
name: AgenticX
tagline: AgenticX is a unified, production-ready multi-agent platform — Python
  SDK + CLI (agx) + Studio server + Machi desktop app. Features Meta-Agent
  orchest
summary: AgenticX is a unified, production-ready multi-agent platform — Python
  SDK + CLI (agx) + Studio server + Machi desktop app. Features Meta-Agent
  orchestration, 15+ LLM providers, MCP Hub, hierarchical memory, avatar & group
  chat, skill ecosystem, safety sandbox, and IM gateway (Feishu/WeChat).
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agentic-workflows
  - ai-agent
  - ai-orchestration
status: active
quality_percentile: 46
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: DemonDamon/AgenticX
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 693
  last_commit: 2026-10-26T03:27:27Z
  stars_delta_7d: 30
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 693
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: DemonDamon/AgenticX
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:45:50.982Z
  truncated: false
type: agent_tool
tool:
  subcategory: desktop_ui
  install_command: pip install agenticx
  runtime: python
  execution_mode: local
  has_mcp_support: true
  mcp_launch:
    transport: stdio
    command: uvx
    args:
      - agenticx
    env_vars: []
    confidence: manifest
---

AgenticX is a unified, production-ready multi-agent platform — Python SDK + CLI (agx) + Studio server + Machi desktop app. Features Meta-Agent orchestration, 15+ LLM providers, MCP Hub, hierarchical memory, avatar & group chat, skill ecosystem, safety sandbox, and IM gateway (Feishu/WeChat).
