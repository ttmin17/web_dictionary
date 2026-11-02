---
slug: codewhale-hq-codewhale-crates-skills-assets-skills-dataviz
name: dataviz
tagline: Choose and produce an appropriate chart/dashboard/visual explanation
  from data, with legible encodings and source/assumption notes.
summary: Choose and produce an appropriate chart/dashboard/visual explanation
  from data, with legible encodings and source/assumption notes.
categories:
  - coding-agents
tags:
  - agent-orchestration
  - ai-agent
  - cli
  - codewhale
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: codewhale-hq/Codewhale
  subpath: crates/skills/assets/skills/dataviz
  official_vendor: false
  license: MIT
signals:
  stars: 41169
  last_commit: 2026-11-02T08:01:40Z
  stars_delta_7d: 51
  stars_growth_pct: 0.1
  trending_score: 51.06
  velocity_source: snapshot_delta
  sparkline_4w:
    - 41101
    - 41118
    - 41169
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: codewhale-hq/Codewhale
  path: crates/skills/assets/skills/dataviz/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:06.535Z
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
