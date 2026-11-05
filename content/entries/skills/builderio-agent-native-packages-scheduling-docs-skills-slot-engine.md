---
slug: builderio-agent-native-packages-scheduling-docs-skills-slot-engine
name: slot-engine
tagline: The pure `computeAvailableSlots` function — inputs, outputs,
  invariants, and debugging guide.
summary: 1. No slot falls in the past (now + minimumBookingNotice is the floor).
  2. No slot overlaps a busy interval (with buffers applied). 3. No slot falls
  outside the schedule's available intervals for that day. 4. No slot...
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
  subpath: packages/scheduling/docs/skills/slot-engine
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
  path: packages/scheduling/docs/skills/slot-engine/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:55.516Z
  truncated: false
type: agent_skill
skill:
  skill_name: slot-engine
  description: The pure `computeAvailableSlots` function — inputs, outputs,
    invariants, and debugging guide.
  folder_path: packages/scheduling/docs/skills/slot-engine
  extra_files: []
  pack_total_skills: 23
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: builderio-agent-native
---

# Slot engine
`import { computeAvailableSlots } from "@agent-native/scheduling/core"`

## Inputs
- Event type config (duration, buffers, minimum notice, period, limits,
  slot interval)
- Schedule (timezone + weekly availability + date overrides)
- Busy intervals (UTC, aggregated from external calendars + existing
  bookings)
- Booking counts by bucket (day/week/month/year) for limit enforcement
- Time range to compute over
- Optional seats-per-slot + seats-taken map
- Viewer timezone (for limit bucketing, if it differs from the schedule)

## Output
- Array of `Slot { start: ISO, end: ISO, available: boolean, seatsRemaining?, hostEmail? }`

## Invariants

The function guarantees, in order:

1. No slot falls in the past (`now + minimumBookingNotice` is the floor).
2. No slot overlaps a busy interval (with buffers applied).
3. No slot falls outside the schedule's available intervals for that day.
4. No slot exceeds a booking limit.
5. No slot falls outside the event's period (rolling/range).
6. DST-safe: we convert to UTC using the schedule's timezone before doing
   any interval arithmetic.

## Debugging

If a slot is unexpectedly missing:
1. Check the schedule's weekly availability for that day-of-week in the
   schedule's timezone (not UTC — weekends can shift across the date line).
2. Check date overrides for that local date (empty intervals = fully
   blocked).
3. Check merged busy intervals for overlap, *including* the before/after
   buffer expansion.
4. Check booking limits: a single existing booking can close a day.
5. Check period caps: rolling periods restrict how far in the future slots
   appear.

If a slot is unexpectedly present:
1. Check that `now` is being passed correctly (defaults to `new Date()`).
2. Check that busy intervals from providers are in UTC.
3. Confirm slot interval matches what you expect (default = duration).
