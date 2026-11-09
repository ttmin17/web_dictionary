---
slug: builderio-agent-native-packages-scheduling-docs-skills-booker
name: booker
tagline: Public booking flow — the state machine, animations, and URL/app-state sync.
summary: 1. pick-date — month grid shows days with availability 2. pick-slot —
  available slots on the selected day 3. fill-form — attendee form (name, email,
  custom fields) 4. success — confirmation with add-to-calendar buttons
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
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: BuilderIO/agent-native
  subpath: packages/scheduling/docs/skills/booker
  official_vendor: false
  license: MIT
signals:
  stars: 7652
  last_commit: 2026-11-09T08:19:09Z
  stars_delta_7d: 31
  stars_growth_pct: 0.4
  trending_score: 31.13
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7621
    - 7652
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: BuilderIO/agent-native
  path: packages/scheduling/docs/skills/booker/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:42.434Z
  truncated: false
type: agent_skill
skill:
  skill_name: booker
  description: Public booking flow — the state machine, animations, and URL/app-state sync.
  folder_path: packages/scheduling/docs/skills/booker
  extra_files: []
  pack_total_skills: 23
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: builderio-agent-native
---

# Booker
## Stages

1. **pick-date** — month grid shows days with availability
2. **pick-slot** — available slots on the selected day
3. **fill-form** — attendee form (name, email, custom fields)
4. **success** — confirmation with add-to-calendar buttons

Plus **reschedule** mode — prefilled from existing booking uid.

## Animations

Use motion (`motion/react`) `AnimatePresence` with `fadeInLeft` variants. The outer
container animates its width across stages: narrow (calendar only) → wider
(calendar + slots) → widest (form).

## Timezone + 12/24h

- Detect browser timezone at mount; let user override via dropdown.
- Persist choice to localStorage key `scheduling.timezone`.
- 12/24h toggle near slot column; persist to user settings.

## URL + application-state sync

Selected date, slot, timezone, and duration are mirrored to URL query
params AND `application_state.booker-state` so:
- Page refresh preserves selection.
- Agent can read the user's current pick.

## Copy-link affordance

Every event-type row has a "copy link" button. On click, write to clipboard
and toast "Copied!" with Sonner. Works on mobile Safari too.

## Accessibility

- Month grid is ARIA `grid` + `gridcell` with arrow-key nav.
- Slot buttons are keyboard-focusable, with `aria-pressed`.
- Focus returns to trigger on modal close.
- Toast content announced via `aria-live=polite`.

## Mobile

`< 768px`: stack vertically. Calendar full-width, slot list below, form
slides in as full-screen sheet.
