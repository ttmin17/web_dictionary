---
slug: asgeirtj-system_prompts_leaks-anthropic-claude-design-skills-flier
name: flier
tagline: Print-ready single page
summary: 'Sheet setup: - START by calling copystartercomponent with kind:
  "docpage.js", then build the flier as ONE explicitly paginated page: …. The
  component owns the page box, the desk background that disappears at print,
  th...'
categories:
  - cloud-infra
tags:
  - ai-agents
  - ai-prompts
  - anthropic
  - chatbot
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: asgeirtj/system_prompts_leaks
  subpath: Anthropic/claude-design/skills/flier
  official_vendor: false
  license: CC0-1.0
signals:
  stars: 70224
  last_commit: 2026-10-25T19:55:03Z
  stars_delta_7d: 344
  stars_growth_pct: 0.5
  trending_score: 345.69
  velocity_source: snapshot_delta
  sparkline_4w:
    - 69880
    - 70224
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: asgeirtj/system_prompts_leaks
  path: Anthropic/claude-design/skills/flier/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.828Z
  truncated: false
type: agent_skill
skill:
  skill_name: flier
  description: Print-ready single page
  folder_path: Anthropic/claude-design/skills/flier
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
  pack_slug: asgeirtj-system_prompts_leaks
---

# Flier
Design a print-ready, single-page flier as one self-contained HTML
file: exactly one fixed-size page.

Sheet setup:
- START by calling copy_starter_component with kind: "doc_page.js",
  then build the flier as ONE explicitly paginated page:
  <doc-page><section class="page" id="flier">…</section></doc-page>.
  The component owns the page box, the desk background that
  disappears at print, the page break discipline, and all print
  geometry — do NOT write your own @page rule, body background, or
  hard-coded paper dimensions, and never add an omelette-owns-print
  meta. The print dialog must show exactly 1 page.
- The flier prints as a FIXED full-bleed page box with overflow
  hidden — letter by default, the user's chosen paper (letter, A4, …)
  when they export — so content that misses the box is clipped, never
  reflowed. Design the flier to FILL the page box and fit letter and
  A4 alike without overlap.
- The page is full-bleed: the flier owns its own inset — keep a
  visual margin of at least 4% of the page on every edge, and keep
  everything inside it.
- Never viewport units (vh/vw) — they track the window, not the page.

A flier is read at a distance, in passing, in under three seconds:
- One dominant element — usually a headline under ~6 words — sized so
  it reads across a room (think 8cqh+), everything else clearly
  subordinate.
- The five Ws grouped tight and scannable: what, when, where, cost,
  and one way to act (QR-sized URL, phone number, or tear-off) — not
  scattered through prose.
- Strong flat color blocks and vector shapes over photos and
  gradients; high contrast; body text in near-black on light stock.
- Generous whitespace beats more words — cut copy until the hierarchy
  is unmissable.
- Optional: a tear-off fringe along the bottom edge (a row of
  narrow cells with dashed left borders and rotated contact text) when
  the user wants phone-number slips.

Check the print preview: nothing clipped, nothing spilling to page
two, colors that still work in grayscale.
