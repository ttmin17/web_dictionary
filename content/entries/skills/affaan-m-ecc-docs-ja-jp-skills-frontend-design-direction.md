---
slug: affaan-m-ecc-docs-ja-jp-skills-frontend-design-direction
name: frontend-design-direction
tagline: フロントエンド設計の方向性、美的原則、および一貫した設計言語実装。
summary: "Source: salvaged from stale community PR #1659 by linus707."
categories:
  - media-creative
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
  subpath: docs/ja-JP/skills/frontend-design-direction
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
  path: docs/ja-JP/skills/frontend-design-direction/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.013Z
  truncated: false
type: agent_skill
skill:
  skill_name: frontend-design-direction
  description: フロントエンド設計の方向性、美的原則、および一貫した設計言語実装。
  folder_path: docs/ja-JP/skills/frontend-design-direction
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Frontend Design Direction
Use this skill when the work is not just making UI function, but making it feel
purposeful, polished, and appropriate to the product domain.

Source: salvaged from stale community PR #1659 by `linus707`.

Note: ECC intentionally does not rebundle the canonical Anthropic
`frontend-design` skill. Install that from `anthropics/skills` when you want the
official upstream skill. This skill is the ECC-specific design-direction salvage
of the useful local guidance from #1659.

## When to Use

- The user asks to build a web page, app, dashboard, artifact, component, or UI.
- The user asks to make an interface more polished, distinctive, beautiful, or
  less generic.
- The implementation needs visual hierarchy, typography, color, motion, layout,
  and interaction choices.
- The current UI works but reads as flat, generic, templated, or mismatched to
  the audience.

## Design Direction

Before coding, choose a specific direction:

1. Purpose: what job does the interface do?
2. Audience: who repeats this workflow, and what do they need to scan first?
3. Tone: utilitarian, editorial, playful, industrial, refined, technical,
   maximal, minimal, dense, calm, or another explicit direction.
4. Memorable detail: one design idea that makes the result feel intentional.
5. Constraints: framework, accessibility, performance, responsiveness, and
   existing design system.

Match the direction to the domain. A SaaS operations tool should usually be
dense, quiet, and scannable. A portfolio, launch page, game, or editorial piece
can be more expressive. Do not force a landing-page composition onto a tool that
needs repeated daily use.

## Implementation Guidance

- Build the actual usable experience as the first screen unless the user
  explicitly asks for marketing copy.
- Use existing project components, tokens, icon libraries, and routing patterns
  before introducing a new visual system.
- Use real or generated visual assets when the interface depends on images,
  products, places, people, gameplay, charts, or inspectable media.
- Prefer contextual typography and spacing over generic oversized hero text.
- Keep palettes multi-dimensional: avoid a UI dominated by one hue family.
- Use CSS variables or existing design tokens so the direction remains
  coherent across states.
- Design responsive constraints explicitly: grids, aspect ratios, min/max
  sizes, stable toolbars, and fixed-format controls should not shift when labels
  or hover states appear.
- Use motion sparingly but deliberately. Prefer high-signal transitions that
  clarify state over decorative animation.
- Verify text fit on mobile and desktop. Long labels must wrap or resize
  cleanly rather than overflowing.

## Anti-Patterns

- Do not default to common generated patterns: purple gradients, decorative
  blobs, oversized cards, vague hero copy, or stock-like atmospheric media.
- Do not add UI cards inside other cards.
- Do not use a single decorative style everywhere when the domain calls for
  restraint.
- Do not hide the primary product, tool, object, or workflow behind generic
  marketing sections.
- Do not add a new dependency for a design flourish unless it clearly pays for
  itself.
- Do not describe the UI's features inside the UI when the controls can speak
  for themselves.

## Review Checklist

- The first viewport immediately communicates the product, workflow, or object.
- The visual hierarchy supports scanning and repeated use.
- Typography fits the container and does not overlap adjacent content.
- Color choices have contrast and do not collapse into a one-note palette.
- Icons are used for familiar tool actions where available.
- Responsive layout has stable dimensions for boards, grids, toolbars,
  controls, tiles, and counters.
- Assets render and carry the subject matter instead of acting as filler.
- Motion improves orientation and does not mask sluggishness.
- The result matches the repo's existing frontend conventions unless there is a
  clear reason to depart.
