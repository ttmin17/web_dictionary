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
quality_percentile: 65
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: JuliusBrussee/caveman
  subpath: skills/safe-refactor
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 117655
  last_commit: 2026-11-05T07:18:24Z
  stars_delta_7d: 2545
  stars_growth_pct: 2.2
  trending_score: 2601.27
  velocity_source: snapshot_delta
  sparkline_4w:
    - 111405
    - 113528
    - 115110
    - 117655
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: JuliusBrussee/caveman
  path: skills/safe-refactor/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:19.721Z
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
  pack_total_skills: 20
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
