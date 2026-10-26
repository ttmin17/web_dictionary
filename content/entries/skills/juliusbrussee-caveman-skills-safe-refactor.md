---
slug: juliusbrussee-caveman-skills-safe-refactor
name: safe-refactor
tagline: "Restructure code while preserving behavior. Use for extraction,
  consolidation, ownership moves, or cleanup where verification must bracket
  structural "
summary: "- Keep feature changes outside refactor. - Move one ownership boundary
  at a time. - Preserve public interfaces, failure behavior, ordering, and
  compatibility unless explicitly scoped. - Keep intermediate states builda..."
categories:
  - agent-frameworks
tags:
  - anthropic
  - caveman
  - claude
  - claude-code
status: active
quality_percentile: 59
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: JuliusBrussee/caveman
  subpath: skills/safe-refactor
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 115110
  last_commit: 2026-10-25T09:24:33Z
  stars_delta_7d: 1582
  stars_growth_pct: 1.4
  trending_score: 1604.04
  velocity_source: snapshot_delta
  sparkline_4w:
    - 110366
    - 111405
    - 113528
    - 115110
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: JuliusBrussee/caveman
  path: skills/safe-refactor/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:11.956Z
  truncated: false
type: agent_skill
skill:
  skill_name: safe-refactor
  description: Restructure code while preserving behavior. Use for extraction,
    consolidation, ownership moves, or cleanup where verification must bracket
    structural edits.
  folder_path: skills/safe-refactor
  extra_files:
    - agents/openai.yaml
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: juliusbrussee-caveman
---

# Safe refactor
Define behavior-preservation boundary and establish verification before structural edits.

- Keep feature changes outside refactor.
- Move one ownership boundary at a time.
- Preserve public interfaces, failure behavior, ordering, and compatibility unless explicitly scoped.
- Keep intermediate states buildable and testable.
- Avoid dependency or configuration growth without correctness need.

Run same proof after change. Stop when behavior matches and requested structure is achieved.
