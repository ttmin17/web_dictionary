---
slug: mcp-use-mcp-use-libraries-typescript-packages-server-examples-skills-over-mcp-skills-purchasing
name: purchasing
tagline: Create approved purchase orders with the create-purchase-order tool
summary: Create approved purchase orders with the create-purchase-order tool
categories:
  - agent-frameworks
tags:
  - agent-plugins
  - agentic-framework
  - apps-sdk
  - chatgpt
status: active
quality_percentile: 95
selection_reason: quality_percentile
first_seen: 2025-03-28T10:06:31
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: mcp-use/mcp-use
  subpath: libraries/typescript/packages/server/examples/skills-over-mcp/skills/purchasing
  official_vendor: false
  license: MIT
signals:
  stars: 10814
  last_commit: 2026-10-22T00:22:30Z
  stars_delta_7d: 29
  stars_growth_pct: 0.3
  trending_score: 29.08
  rank_current: 112
  rank_delta: -21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 10728
    - 10753
    - 10785
    - 10814
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mcp-use/mcp-use
  path: libraries/typescript/packages/server/examples/skills-over-mcp/skills/purchasing/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:57.658Z
  truncated: false
type: agent_skill
skill:
  skill_name: purchasing
  description: Create approved purchase orders with the create-purchase-order tool
  folder_path: libraries/typescript/packages/server/examples/skills-over-mcp/skills/purchasing
  extra_files:
    - references/approval-policy.md
    - templates/purchase-order.md
  pack_total_skills: 6
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mcp-use-mcp-use
---

# Purchasing
Before creating a purchase order, read the
[approval policy](https://github.com/mcp-use/mcp-use/blob/main/libraries/typescript/packages/server/examples/skills-over-mcp/skills/purchasing/references/approval-policy.md). When the purchase is
approved, call `create-purchase-order` with the SKU and requested quantity.
Use [the order template](https://github.com/mcp-use/mcp-use/blob/main/libraries/typescript/packages/server/examples/skills-over-mcp/skills/purchasing/templates/purchase-order.md) when confirming the
purchase.
