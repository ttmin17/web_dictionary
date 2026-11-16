---
slug: codewhale-hq-codewhale-crates-skills-assets-skills-dataviz
name: dataviz
tagline: Choose and produce an appropriate chart/dashboard/visual explanation
  from data, with legible encodings and source/assumption notes.
summary: Choose and produce an appropriate chart/dashboard/visual explanation
  from data, with legible encodings and source/assumption notes.
categories:
  - agent-frameworks
tags:
  - agent-client-protocol
  - agent-orchestration
  - ai-agent
  - ai-coding
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: codewhale-hq/Codewhale
  subpath: crates/skills/assets/skills/dataviz
  official_vendor: false
  license: MIT
signals:
  stars: 41180
  last_commit: 2026-11-16T06:56:39Z
  stars_delta_7d: 20
  stars_growth_pct: 0
  trending_score: 20.01
  velocity_source: snapshot_delta
  sparkline_4w:
    - 41118
    - 41158
    - 41160
    - 41180
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: codewhale-hq/Codewhale
  path: crates/skills/assets/skills/dataviz/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:50.143Z
  truncated: false
type: agent_skill
skill:
  skill_name: dataviz
  description: Choose and produce an appropriate chart/dashboard/visual
    explanation from data, with legible encodings and source/assumption notes.
  folder_path: crates/skills/assets/skills/dataviz
  extra_files: []
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: codewhale-hq-codewhale
---

# Dataviz
## When to use
Use when the user needs a chart, dashboard, or visual explanation of data.

## Non-goals
- Do not choose chart types that hide uncertainty.
- Do not invent data.

## Workflow
1. Inspect the data and questions.
2. Choose encodings for the comparison at hand.
3. Produce the visual with source/assumption notes.
4. Sanity-check axes, units, and missing values.
