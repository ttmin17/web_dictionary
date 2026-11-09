---
slug: builderio-agent-native-packages-scheduling-docs-skills-scheduling-basics
name: scheduling-basics
tagline: Core concepts of the scheduling package — event types, schedules,
  bookings, hosts, teams, and how they compose.
summary: '- Event Type — a definition of "a bookable thing" (30-minute intro
  call, 45-minute demo). Lives at /:user/:slug or /team/:teamSlug/:slug. -
  Schedule — a named set of availability rules ("Working Hours", "Evenings").
  W...'
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
  subpath: packages/scheduling/docs/skills/scheduling-basics
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
  path: packages/scheduling/docs/skills/scheduling-basics/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:42.434Z
  truncated: false
type: agent_skill
skill:
  skill_name: scheduling-basics
  description: Core concepts of the scheduling package — event types, schedules,
    bookings, hosts, teams, and how they compose.
  folder_path: packages/scheduling/docs/skills/scheduling-basics
  extra_files: []
  pack_total_skills: 23
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: builderio-agent-native
---

# Scheduling basics
The mental model:

- **Event Type** — a definition of "a bookable thing" (30-minute intro call,
  45-minute demo). Lives at `/:user/:slug` or `/team/:teamSlug/:slug`.
- **Schedule** — a named set of availability rules ("Working Hours",
  "Evenings"). Weekly intervals plus date-specific overrides. Each user
  has a default schedule; event types can pick any.
- **Booking** — the materialized appointment. Has attendees, references to
  external systems (Google Calendar event, Zoom meeting), and a stable
  iCalUID across reschedules.
- **Host** — a user assigned to an event type. Hosts have weights and
  priorities for round-robin.
- **Team** — a group of users who can co-host event types.
- **Location** — where the meeting happens. Video (built-in, Zoom, Meet,
  Teams), phone, in-person, or custom link.

## Workflows and routing forms

- **Workflow** — trigger + ordered steps. "Email attendee 1h before event."
- **Routing Form** — pre-booking form with rules that route to the right
  event type based on answers. Like ChiliPiper.

## Public URLs

- `/:user` — user profile with event type list
- `/:user/:slug` — Booker for a personal event type
- `/:user/:slug/embed` — chromeless for iframe embedding
- `/team/:teamSlug` — team profile
- `/team/:teamSlug/:slug` — Booker for team event type (round-robin or collective)
- `/d/:hash/:slug` — private hashed-link Booker
- `/booking/:uid` — booking detail / manage
- `/reschedule/:uid` — reschedule Booker
- `/forms/:formId` — public routing form

## Common tasks

| User request | Action(s) |
|---|---|
| "Create a 30-minute intro meeting" | `create-event-type --title "Intro" --slug intro --length 30` |
| "What's my availability tomorrow?" | `check-availability --slug <slug> --from ... --to ...` |
| "Cancel my 3pm with Alex" | `list-bookings --status upcoming`, then `cancel-booking --uid ...` |
| "Block next Friday" | `add-date-override --scheduleId <id> --date 2026-04-10 --intervals []` |
| "Connect Google Calendar" | `connect-calendar --kind google_calendar --redirectUri ...` |
| "Make a team event rotating between Alice and Bob" | `create-event-type --schedulingType round-robin --teamId ...`, then `set-event-type-hosts` |
