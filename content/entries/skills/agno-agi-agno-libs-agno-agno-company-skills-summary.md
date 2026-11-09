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
quality_percentile: 69
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: agno-agi/agno
  subpath: libs/agno/agno/company/skills/summary
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 43113
  last_commit: 2026-11-09T08:28:49Z
  stars_delta_7d: 40
  stars_growth_pct: 0.1
  trending_score: 40.04
  velocity_source: snapshot_delta
  sparkline_4w:
    - 42805
    - 42891
    - 43073
    - 43113
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agno-agi/agno
  path: libs/agno/agno/company/skills/summary/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:16.229Z
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
