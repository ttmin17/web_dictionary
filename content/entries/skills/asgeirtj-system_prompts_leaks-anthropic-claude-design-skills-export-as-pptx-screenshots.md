---
slug: asgeirtj-system_prompts_leaks-anthropic-claude-design-skills-export-as-pptx-screenshots
name: export-as-pptx-screenshots
tagline: Flat images — pixel-perfect but not editable
summary: "1. showtouser the deck. 2. Call genpptx:"
categories:
  - media-creative
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
  subpath: Anthropic/claude-design/skills/export-as-pptx-screenshots
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
  path: Anthropic/claude-design/skills/export-as-pptx-screenshots/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.828Z
  truncated: false
type: agent_skill
skill:
  skill_name: export-as-pptx-screenshots
  description: Flat images — pixel-perfect but not editable
  folder_path: Anthropic/claude-design/skills/export-as-pptx-screenshots
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
  pack_slug: asgeirtj-system_prompts_leaks
---

# Export as PPTX (screenshots)
Export an HTML slide deck to a `.pptx` as full-bleed PNG images. Pixel-perfect, not editable. One `gen_pptx` tool call.

### Steps

1. `show_to_user` the deck.
2. Call `gen_pptx`:

```jsonc
{
  "mode": "screenshots",
  "width": 1920, "height": 1080,
  "slides": [
    { "showJs": "goToSlide(0)", "selector": "body" },  // selector unused in screenshot mode but required
    { "showJs": "goToSlide(1)", "selector": "body" }
  ],
  "hideSelectors": [".nav", ".progress"],
  // If the deck wraps slides in a transform:scale() container, name it here so
  // the deck is forced to width × height inside the locked iframe.
  "resetTransformSelector": ".slide-container",
  "filename": "my-deck"
}
```

If — and only if — the user asked for Google Slides, also pass `"offer_google_slides": true`: the export dialog gains a 'Send to Google Slides' button, and the upload happens only if they click it.

`slides[].delay` defaults to 600ms — bump if transitions are slower.

#### If the deck uses the `<deck-stage>` starter component

- `resetTransformSelector: "deck-stage"` — same as editable mode; the component drops its shadow-DOM `transform: scale()` so the slides fill the locked iframe.
- `slides[N].showJs`: `"document.querySelector('deck-stage').goTo(N)"` — 0-indexed, so slide 1 is `goTo(0)`.
- `hideSelectors` is unnecessary — the overlay and tap-zones live in shadow DOM and aren't captured.

### Validation

Same flags as editable mode. Watch for `duplicate_adjacent` (showJs didn't navigate) and `reset_selector_miss` / `slide_size_mismatch` (your `resetTransformSelector` matched nothing or didn't size to width × height).

Speaker notes from `#speaker-notes` are attached automatically. Page reloads after.
