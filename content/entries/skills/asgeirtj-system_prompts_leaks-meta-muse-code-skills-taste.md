---
slug: asgeirtj-system_prompts_leaks-meta-muse-code-skills-taste
name: taste
tagline: Mandatory preflight for web frontend visual design. If available, call
  read_skill for bundled:taste before the first frontend create or edit tool
  call
summary: "- purple / indigo / violet accent, or a purple-to-blue hero gradient
  (the top AI tell) - bg-clip-text gradient headline text - cream (#faf8f4) as
  the whole-page background - aurora blobs / glowing colored shadows, or..."
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
  subpath: Meta/muse-code/skills/taste
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
  path: Meta/muse-code/skills/taste/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.849Z
  truncated: false
type: agent_skill
skill:
  skill_name: taste
  description: Mandatory preflight for web frontend visual design. If available,
    call read_skill for bundled:taste before the first frontend create or edit
    tool call whenever creating or visually styling a human-viewed web page,
    component, app, dashboard, or interactive report. Do not load it for
    non-visual frontend logic or machine-only HTML. If unavailable, continue
    without warning. Negative constraints only; user requests and other explicit
    styles still win.
  folder_path: Meta/muse-code/skills/taste
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Anti-Slop: Frontend DON'Ts
What NOT to do when designing a UI or page. This is a filter, not a style; it never prescribes a look. Stacking several of the below is what reads as AI-made on sight. Adaptive, so if the user or another skill asks for something specific, do that instead; these are defaults, not overrides.

- purple / indigo / violet accent, or a purple-to-blue hero gradient (the top AI tell)
- `bg-clip-text` gradient headline text
- cream (`#faf8f4`) as the whole-page background
- aurora blobs / glowing colored shadows, or an identical glow on every card
- Inter everywhere, or Geist / Space Grotesk / Instrument Serif / Roboto / Arial as your only identity
- gray-400 / gray-500 body text
- one font weight and size throughout (no hierarchy)
- tracked all-caps micro-kickers above every section
- centered hero of eyebrow pill + headline + two CTAs
- the identical 3-card feature grid with a lucide icon in a rounded square
- an 8+ word, 48px+ headline that says nothing
- bento grid for everything
- the same eyebrow-headline-3cards section repeated back to back
- `rounded-2xl`, or any single radius, on every element
- glassmorphism blur + border + shadow on every surface
- `hover:scale-105` lift on cards
- emoji as feature icons (🚀 ⚡ ✨ 🎯 💡)
- left-border accent cards, a colored border on a rounded element, or cards nested inside cards
- fade-up / slide-up on everything as it scrolls in
- motion that ignores `prefers-reduced-motion`
- scribbly hand-drawn SVG mascots with no purpose
