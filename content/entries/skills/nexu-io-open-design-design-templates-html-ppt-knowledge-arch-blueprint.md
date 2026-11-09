---
slug: nexu-io-open-design-design-templates-html-ppt-knowledge-arch-blueprint
name: html-ppt-knowledge-arch-blueprint
tagline: "OpenDesign's incident retro: the daemon-restart data bug, the root
  cause, the fix, and the systemic follow-ups. Built as a decision-grade product
  mana"
summary: The Examples gallery wires "Use this prompt" to the exampleprompt
  above. When you accept that prompt, this card is the right pick if the user
  wants exactly the visual identity of knowledge-arch-blueprint (see the upst...
categories:
  - media-creative
tags:
  - agent-skills
  - ai-design
  - byok
  - claude-code-for-design
status: active
quality_percentile: 77
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: nexu-io/open-design
  subpath: design-templates/html-ppt-knowledge-arch-blueprint
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 106727
  last_commit: 2026-11-09T09:19:26Z
  stars_delta_7d: 674
  stars_growth_pct: 0.6
  trending_score: 678.28
  velocity_source: snapshot_delta
  sparkline_4w:
    - 102299
    - 104025
    - 106053
    - 106727
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nexu-io/open-design
  path: design-templates/html-ppt-knowledge-arch-blueprint/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:53.718Z
  truncated: false
type: agent_skill
skill:
  skill_name: html-ppt-knowledge-arch-blueprint
  description: >
    OpenDesign's incident retro: the daemon-restart data bug, the root cause,
    the fix, and the systemic follow-ups. Built as a decision-grade product
    management deck for engineering, SRE, leadership.
  folder_path: design-templates/html-ppt-knowledge-arch-blueprint
  extra_files:
    - example.html
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nexu-io-open-design
---

# HTML PPT · 奶油蓝图架构
A focused entry point into the [`html-ppt`](https://github.com/nexu-io/open-design/blob/main/design-templates/html-ppt-knowledge-arch-blueprint/../html-ppt/SKILL.md) master skill that lands the user directly on the **`knowledge-arch-blueprint`** full-deck template.

## When this card is picked

The Examples gallery wires "Use this prompt" to the example_prompt above. When you accept that prompt, this card is the right pick if the user wants exactly the visual identity of `knowledge-arch-blueprint` (see the upstream [full-decks catalog](https://github.com/nexu-io/open-design/blob/main/design-templates/html-ppt-knowledge-arch-blueprint/../html-ppt/references/full-decks.md) for screenshots and rationale).

## How to author the deck

1. **Read the master skill first.** All authoring rules live in
   [`design-templates/html-ppt/SKILL.md`](https://github.com/nexu-io/open-design/blob/main/design-templates/html-ppt-knowledge-arch-blueprint/../html-ppt/SKILL.md) — content/audience checklist,
   token rules, layout reuse, presenter mode, the keyboard runtime, and the
   "never put presenter-only text on the slide" rule.
2. **Start from the matching template folder:**
   `design-templates/html-ppt/templates/full-decks/knowledge-arch-blueprint/` — copy `index.html` and
   `style.css` into the project, keep the `.tpl-knowledge-arch-blueprint` body class.
3. **Bring the shared runtime with the template.** The upstream
   `index.html` links the shared CSS/JS via `../../../assets/...` because it
   sits three folders deep inside `design-templates/html-ppt/templates/full-decks/`.
   Once you copy `index.html` into the project, those parent-relative URLs
   no longer resolve and `base.css`, `animations.css`, and `runtime.js`
   will 404 — meaning the deck never activates and slide navigation is
   dead. Pick one of these two recipes per project:
   - **Recipe A — copy + rewrite (preferred):** copy
     `design-templates/html-ppt/assets/fonts.css`, `design-templates/html-ppt/assets/base.css`,
     `design-templates/html-ppt/assets/animations/animations.css`, and
     `design-templates/html-ppt/assets/runtime.js` into a project-local
     `assets/` (with `assets/animations/animations.css`), then rewrite the
     four `<link>`/`` containing `runtime.js`. Yields a single
     self-contained `index.html`.
   Either way, do not ship the upstream `../../../assets/...` URLs
   verbatim into a project artifact — they only work in-tree.
4. **Pick a theme.** Default tokens look fine; if the user wants a different
   feel, swap in any of the 36 themes from `design-templates/html-ppt/assets/themes/*.css`
   via `<link id="theme-link">` and let `T` cycle.
5. **Replace demo content, not classes.** The `.tpl-knowledge-arch-blueprint` scoped CSS only
   recognises the structural classes shipped in the template — keep them.
6. **Speaker notes go inside `<aside class="notes">` or `<div class="notes">`** — never as visible text on the slide.

## Attribution

Visual system, layouts, themes and the runtime keyboard model come from
the upstream MIT-licensed [`lewislulu/html-ppt-skill`](https://github.com/lewislulu/html-ppt-skill). The
LICENSE file ships at `design-templates/html-ppt/LICENSE`; please keep it in place when
redistributing.
