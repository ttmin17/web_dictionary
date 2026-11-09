---
slug: mcp-use-mcp-use-libraries-typescript-packages-server-examples-skills-over-mcp-skills-refunds
name: refunds
tagline: Check refund eligibility and use the refund-order tool safely
summary: Check refund eligibility and use the refund-order tool safely
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
first_seen: 2026-10-14
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: mcp-use/mcp-use
  subpath: libraries/typescript/packages/server/examples/skills-over-mcp/skills/refunds
  official_vendor: false
  license: MIT
signals:
  stars: 10859
  last_commit: 2026-11-07T20:09:55Z
  stars_delta_7d: 11
  stars_growth_pct: 0.1
  trending_score: 11.01
  velocity_source: snapshot_delta
  sparkline_4w:
    - 10785
    - 10814
    - 10848
    - 10859
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mcp-use/mcp-use
  path: libraries/typescript/packages/server/examples/skills-over-mcp/skills/refunds/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:26:52.183Z
  truncated: false
type: agent_skill
skill:
  skill_name: refunds
  description: Check refund eligibility and use the refund-order tool safely
  folder_path: libraries/typescript/packages/server/examples/skills-over-mcp/skills/refunds
  extra_files:
    - references/policy.md
    - templates/confirmation.md
  pack_total_skills: 7
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mcp-use-mcp-use
---

# Refund orders
Before refunding an order, read [the refund policy](https://github.com/mcp-use/mcp-use/blob/main/libraries/typescript/packages/server/examples/skills-over-mcp/skills/refunds/references/policy.md).
When an order is eligible, call `refund-order` with its order ID and use
[the confirmation template](https://github.com/mcp-use/mcp-use/blob/main/libraries/typescript/packages/server/examples/skills-over-mcp/skills/refunds/templates/confirmation.md) in the response.
