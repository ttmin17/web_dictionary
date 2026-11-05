---
slug: builderio-agent-native-packages-scheduling-docs-skills-bookings
name: bookings
tagline: Booking lifecycle — pending, confirmed, rescheduled, cancelled — plus
  attendees, references, no-shows, and reminders.
summary: "- pending — requires-confirmation event types start here - confirmed —
  normal state - rescheduled — the old booking after a reschedule (the new one
  is confirmed; fromreschedule links them) - cancelled — either party c..."
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
  subpath: packages/scheduling/docs/skills/bookings
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
  path: packages/scheduling/docs/skills/bookings/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:55.516Z
  truncated: false
type: agent_skill
skill:
  skill_name: bookings
  description: Booking lifecycle — pending, confirmed, rescheduled, cancelled —
    plus attendees, references, no-shows, and reminders.
  folder_path: packages/scheduling/docs/skills/bookings
  extra_files: []
  pack_total_skills: 23
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: builderio-agent-native
---

# Bookings
## Lifecycle

- **pending** — requires-confirmation event types start here
- **confirmed** — normal state
- **rescheduled** — the old booking after a reschedule (the new one is
  confirmed; `from_reschedule` links them)
- **cancelled** — either party cancelled
- **rejected** — pending was declined

## Reschedule vs cancel+rebook

The `reschedule-booking` action creates a new booking with a link back to
the old via `fromReschedule`. iCalUID is preserved across the reschedule
chain (RFC 5545), and `iCalSequence` is bumped.

## No-show

`mark-no-show` sets `noShow: true` on an attendee. Round-robin calibration
uses this to penalize hosts whose attendees no-show frequently.

## Cancel / reschedule tokens

Every booking has a `cancelToken` and `rescheduleToken` used in public
magic links sent to attendees. These let them manage the booking without
logging in.

## References

External system IDs: Google Calendar event id, Zoom meeting id, Daily.co
room name. Stored in `booking_references`, used during cancel/reschedule to
propagate changes back to the source system.

## ICS

`/booking/:uid.ics` returns the RFC 5545 calendar file. Used for
confirmation-email attachments and "Add to calendar" buttons.
