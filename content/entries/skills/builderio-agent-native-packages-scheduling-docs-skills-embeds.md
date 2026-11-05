---
slug: builderio-agent-native-packages-scheduling-docs-skills-embeds
name: embeds
tagline: Inline, popup, and floating-button embeds — snippet generation and theming.
summary: "- inline — iframe embedded in the page - popup — trigger opens modal
  overlay with iframe - element-click / floating-button — fixed-position trigger
  anywhere on the page"
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agent-native
  - agentic-ai
  - agents
status: active
quality_percentile: 68
selection_reason: quality_percentile
first_seen: 2026-11-05
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: BuilderIO/agent-native
  subpath: packages/scheduling/docs/skills/embeds
  official_vendor: false
  license: MIT
signals:
  stars: 7621
  last_commit: 2026-11-05T11:55:08Z
  stars_delta_7d: 224
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 7621
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: BuilderIO/agent-native
  path: packages/scheduling/docs/skills/embeds/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:55.516Z
  truncated: false
type: agent_skill
skill:
  skill_name: embeds
  description: Inline, popup, and floating-button embeds — snippet generation and theming.
  folder_path: packages/scheduling/docs/skills/embeds
  extra_files: []
  pack_total_skills: 23
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: builderio-agent-native
---

# Embeds
## Modes

- **inline** — iframe embedded in the page
- **popup** — trigger opens modal overlay with iframe
- **element-click / floating-button** — fixed-position trigger anywhere on
  the page

## URL

Embed page: `/:user/:slug/embed` — same Booker, no chrome, theme honored
via query params.

## Snippet

```html

<div id="cal-inline-embed"></div>

```

## Theming

Query params on the embed URL:
- `theme=light|dark`
- `primaryColor=<hex>`
- `locale=en|es|...`
- `timeZone=America/Los_Angeles`

These override the event type's defaults for the embedded session only.

## Message passing

The iframe posts messages to the parent on lifecycle events:
`__cal.init`, `__cal.booking-successful`, `__cal.booking-cancelled`,
`__cal.booking-rescheduled`.
