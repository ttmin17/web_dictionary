---
slug: builderio-agent-native-packages-scheduling-docs-skills-event-types
name: event-types
tagline: How event types work — fields, scheduling types, tabs in the editor,
  and the full set of configurable options.
summary: builtin-video, zoom, google-meet, teams, phone, in-person, custom-link,
  attendee-phone, organizer-phone, attendee-choice.
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
  subpath: packages/scheduling/docs/skills/event-types
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
  path: packages/scheduling/docs/skills/event-types/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:42.434Z
  truncated: false
type: agent_skill
skill:
  skill_name: event-types
  description: How event types work — fields, scheduling types, tabs in the
    editor, and the full set of configurable options.
  folder_path: packages/scheduling/docs/skills/event-types
  extra_files: []
  pack_total_skills: 23
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: builderio-agent-native
---

# Event types
## Editor tabs
- **Setup** — title, slug, duration(s), description, default location
- **Availability** — pick a schedule or override per-event-type
- **Limits** — buffers, min notice, booking window (rolling/range), caps
  (perDay/perWeek/perMonth/perYear), slot interval
- **Advanced** — event name template, lock timezone, require confirmation,
  disable guests, redirect URL, private hashed links, seats
- **Apps** — connect per-event location types (Zoom, Meet, etc.)
- **Workflows** — attach workflows to run on booking lifecycle events

## Scheduling types

| Type | Meaning |
|---|---|
| `personal` | Owned by a user, only they host |
| `collective` | Team event; all selected hosts must be free |
| `round-robin` | Team event; assign to one host by rotation |
| `managed` | Parent event pushed to child event types across members |

## Location kinds

`builtin-video`, `zoom`, `google-meet`, `teams`, `phone`, `in-person`,
`custom-link`, `attendee-phone`, `organizer-phone`, `attendee-choice`.

## Custom fields

Text, textarea, number, email, phone, select, multiselect, boolean, radio.
Stored on the event type; responses stored on the booking.

## Hashed links

Private booking URLs at `/d/:hash/:slug`. Create via `add-private-link`,
optionally with `expiresAt` and `isSingleUse`.
