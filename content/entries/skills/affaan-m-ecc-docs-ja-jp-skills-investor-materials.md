---
slug: affaan-m-ecc-docs-ja-jp-skills-investor-materials
name: investor-materials
tagline: 投資家向けマテリアル、ピッチデック、財務プレゼンテーション、およびビジネス概要。
summary: "- creating or revising a pitch deck - writing an investor memo or
  one-pager - building a financial model, milestone plan, or use-of-funds table
  - answering accelerator or incubator application questions - aligning mul..."
categories:
  - productivity-ops
tags:
  - ai-agents
  - anthropic
  - claude
  - claude-code
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: affaan-m/ECC
  subpath: docs/ja-JP/skills/investor-materials
  official_vendor: false
  license: MIT
signals:
  stars: 289072
  last_commit: 2026-10-26T04:56:56Z
  stars_delta_7d: 5578
  stars_growth_pct: 2
  trending_score: 5687.75
  velocity_source: snapshot_delta
  sparkline_4w:
    - 274698
    - 278380
    - 283494
    - 289072
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: affaan-m/ECC
  path: docs/ja-JP/skills/investor-materials/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.016Z
  truncated: false
type: agent_skill
skill:
  skill_name: investor-materials
  description: 投資家向けマテリアル、ピッチデック、財務プレゼンテーション、およびビジネス概要。
  folder_path: docs/ja-JP/skills/investor-materials
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Investor Materials
Build investor-facing materials that are consistent, credible, and easy to defend.

## When to Activate

- creating or revising a pitch deck
- writing an investor memo or one-pager
- building a financial model, milestone plan, or use-of-funds table
- answering accelerator or incubator application questions
- aligning multiple fundraising docs around one source of truth

## Golden Rule

All investor materials must agree with each other.

Create or confirm a single source of truth before writing:
- traction metrics
- pricing and revenue assumptions
- raise size and instrument
- use of funds
- team bios and titles
- milestones and timelines

If conflicting numbers appear, stop and resolve them before drafting.

## Core Workflow

1. inventory the canonical facts
2. identify missing assumptions
3. choose the asset type
4. draft the asset with explicit logic
5. cross-check every number against the source of truth

## Asset Guidance

### Pitch Deck
Recommended flow:
1. company + wedge
2. problem
3. solution
4. product / demo
5. market
6. business model
7. traction
8. team
9. competition / differentiation
10. ask
11. use of funds / milestones
12. appendix

If the user wants a web-native deck, pair this skill with `frontend-slides`.

### One-Pager / Memo
- state what the company does in one clean sentence
- show why now
- include traction and proof points early
- make the ask precise
- keep claims easy to verify

### Financial Model
Include:
- explicit assumptions
- bear / base / bull cases when useful
- clean layer-by-layer revenue logic
- milestone-linked spending
- sensitivity analysis where the decision hinges on assumptions

### Accelerator Applications
- answer the exact question asked
- prioritize traction, insight, and team advantage
- avoid puffery
- keep internal metrics consistent with the deck and model

## Red Flags to Avoid

- unverifiable claims
- fuzzy market sizing without assumptions
- inconsistent team roles or titles
- revenue math that does not sum cleanly
- inflated certainty where assumptions are fragile

## Quality Gate

Before delivering:
- every number matches the current source of truth
- use of funds and revenue layers sum correctly
- assumptions are visible, not buried
- the story is clear without hype language
- the final asset is defensible in a partner meeting
