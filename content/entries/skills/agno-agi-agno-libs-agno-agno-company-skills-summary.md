---
slug: agno-agi-agno-libs-agno-agno-company-skills-summary
name: summary
tagline: Deliver the Product summary through its configured interface and wiki.
summary: Read the Product identified in the message, its Tasks and attention
  counts. Explain what changed, what awaits the owner and what failed, using
  actual records and summary.md. That page may retain an undelivered attempt...
categories:
  - coding-agents
tags:
  - agents
  - ai-agents
  - developer-tools
  - python
status: active
quality_percentile: 62
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: agno-agi/agno
  subpath: libs/agno/agno/company/skills/summary
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 43011
  last_commit: 2026-11-02T08:04:25Z
  stars_delta_7d: 120
  stars_growth_pct: 0.3
  trending_score: 120.34
  velocity_source: snapshot_delta
  sparkline_4w:
    - 42805
    - 42891
    - 43011
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agno-agi/agno
  path: libs/agno/agno/company/skills/summary/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:54.901Z
  truncated: false
type: agent_skill
skill:
  skill_name: summary
  description: Deliver the Product summary through its configured interface and wiki.
  folder_path: libs/agno/agno/company/skills/summary
  extra_files: []
  pack_total_skills: 7
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agno-agi-agno
---

Read the Product identified in the message, its Tasks and
attention counts. Explain what changed, what awaits the owner and what failed,
using actual records and summary.md. That page may retain an undelivered attempt;
the summary tool compares changes against the last successfully delivered snapshot. Pass your narrative to
summarize_company_product to write the summary to
its wiki and deliver it through the configured interface and destination.
Do not invent progress. Do not accept or complete work, alter Sources or schedules.
When nothing needs attention, record a quiet successful check.
