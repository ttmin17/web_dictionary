---
slug: nexu-io-open-design-design-templates-digital-eguide
name: digital-eguide
tagline: |-
  A two-spread digital e-guide preview — page 1 is a cover (display title,
  author, "What's inside" stats, table of contents teaser); page 2 is a
  spread 
summary: 1. Read the active DESIGN.md (injected above). Pick a serif display
  token for the title (italic ligatures encouraged), a body serif for long-form,
  and a mono token for stats / labels. 2. Pick the topic + author from t...
categories:
  - media-creative
tags:
  - agent-skills
  - ai-design
  - byok
  - claude-code-for-design
status: active
quality_percentile: 76
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: nexu-io/open-design
  subpath: design-templates/digital-eguide
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 105423
  last_commit: 2026-11-02T05:06:45Z
  stars_delta_7d: 1398
  stars_growth_pct: 1.3
  trending_score: 1416.79
  velocity_source: snapshot_delta
  sparkline_4w:
    - 100908
    - 102299
    - 104025
    - 105423
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nexu-io/open-design
  path: design-templates/digital-eguide/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:41.704Z
  truncated: false
type: agent_skill
skill:
  skill_name: digital-eguide
  description: |
    A two-spread digital e-guide preview — page 1 is a cover (display title,
    author, "What's inside" stats, table of contents teaser); page 2 is a
    spread (lesson body with pull-quote and a step list). Lifestyle / creator
    brand tone. Use when the brief asks for an "e-guide", "digital guide",
    "lookbook", "lead magnet", "creator guide", "playbook", "PDF guide",
    or "电子指南".
  folder_path: design-templates/digital-eguide
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

# Digital E-Guide Skill
Produce a two-page digital guide preview side-by-side. Cover on the inline-start,
inside spread on the inline-end. Lifestyle creator tone, lots of negative space,
serif display headings, careful column rhythm.

## Workflow

1. **Read the active DESIGN.md** (injected above). Pick a serif display
   token for the title (italic ligatures encouraged), a body serif for
   long-form, and a mono token for stats / labels.
2. **Pick the topic + author** from the brief. Generate a real title (e.g.
   "The Creator's Style & Format Guide"), a real subtitle, and a one-line
   author byline.
3. **Layout** — center two pages on a tinted backdrop:
   - **Page 1 — cover**:
     - Eyebrow ("STYLE & FORMAT GUIDE FOR CREATORS").
     - Display title with mixed weights and one italic flourish word
       ("The Creator's Style & Format guide" — `&` and `guide` italic).
     - 3-cell stat row ("16 PRINCIPLES OF STYLE", "38 DOS & DON'TS",
       "1 BLOCK, ZERO TEMPLATES") in mono, separated by `·`.
     - "What's inside" header with a 2-column TOC (chapters + page numbers
       in mono, leader dots).
     - Footer: "FIND YOUR VOICE" + page 01 mono.
     - Subtle decorative dot or sticker (CSS) in a corner.
   - **Page 2 — spread**:
     - Eyebrow with chapter number + name ("CHAPTER 02 · TONE").
     - Display sub-title ("Write like you talk — only sharper.").
     - 2-column body: opening paragraph + a numbered 4-step list ("01 Pick
       the rule", "02 Drop the filler"…).
     - Pull-quote pinned to inline-end: for Latin scripts use large italic display
      and accent color; for Arabic, Persian, and Urdu use regular or light
      emphasis (no italics); for Hebrew use regular or light emphasis (no
      italics). Include attribution. (script-aware)
     - Bottom strip with "EXERCISE" callout (mono label + 1 sentence prompt
       in italic).
     - Footer: chapter title + page 18 mono.
4. **Write** a single HTML document:
   - `<!doctype html>` through `</html>`, CSS inline.
   - Pages are 600×860 paper-tone cards with 6px shadow, slight rotation
     opposing each other (±0.6deg) for a magazine-on-desk feel.
   - `data-od-id` on cover, spread, toc, pull-quote, exercise.
5. **Self-check**:
   - Type hierarchy is editorial — title owns page 1, sub-title owns page 2.
   - Italic accent appears once per page.
   - Mono used only for labels, stats, and TOC numbers.

## Output contract

Emit between `<artifact>` tags:

```
<artifact identifier="eguide-slug" type="text/html" title="E-Guide — Title">
<!doctype html>
<html>...</html>
</artifact>
```

One sentence before the artifact, nothing after.
