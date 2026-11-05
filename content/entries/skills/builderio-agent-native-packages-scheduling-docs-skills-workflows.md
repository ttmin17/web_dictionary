---
slug: builderio-agent-native-packages-scheduling-docs-skills-workflows
name: workflows
tagline: Trigger-based automations — reminders, follow-ups, webhooks — across
  the booking lifecycle.
summary: "- new-booking — fires when a booking is created - before-event —
  offset minutes BEFORE startTime - after-event — offset minutes AFTER endTime -
  reschedule — booking rescheduled - cancellation — booking cancelled - no-..."
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
  subpath: packages/scheduling/docs/skills/workflows
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
  path: packages/scheduling/docs/skills/workflows/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:55.516Z
  truncated: false
type: agent_skill
skill:
  skill_name: workflows
  description: Trigger-based automations — reminders, follow-ups, webhooks —
    across the booking lifecycle.
  folder_path: packages/scheduling/docs/skills/workflows
  extra_files: []
  pack_total_skills: 23
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: builderio-agent-native
---

# Workflows
## Triggers

- `new-booking` — fires when a booking is created
- `before-event` — offset minutes BEFORE `startTime`
- `after-event` — offset minutes AFTER `endTime`
- `reschedule` — booking rescheduled
- `cancellation` — booking cancelled
- `no-show` — a host marked an attendee as no-show

## Steps

| Action | Sends |
|---|---|
| `email-host` | Email to the organizer |
| `email-attendee` | Email to the attendee |
| `email-address` | Email to a fixed address (e.g. ops@example.com) |
| `sms-attendee` | SMS to the attendee's phone (requires attendee `phone` custom field) |
| `sms-host` | SMS to the host |
| `sms-number` | SMS to a fixed number |
| `webhook` | HTTP POST to a URL |

Step `offsetMinutes` is relative to the trigger time. For `before-event`
use positive values (we apply them with a minus sign internally).

## Template variables

In email subjects / bodies and SMS bodies:
- `{eventName}` — event type title
- `{attendeeName}`, `{attendeeEmail}` — first attendee
- `{hostName}`, `{hostEmail}` — organizer
- `{startTime}`, `{endTime}` — formatted in host's timezone
- `{location}` — meeting URL or address
- `{cancelUrl}`, `{rescheduleUrl}` — public magic links

## Firing

When a booking fires a trigger, the hook dispatcher materializes rows in
`scheduled_reminders`. A recurring job processes due rows and fires the
actual emails/SMS/webhooks. Framework-side recurring jobs handle the
polling.

## Common tasks

| User | Action |
|---|---|
| "Email attendees 24h before the meeting" | `create-workflow --trigger before-event --steps '[{action: email-attendee, offsetMinutes: 1440}]'` |
| "Text me when someone books" | `create-workflow --trigger new-booking --steps '[{action: sms-host, ...}]'` |
| "Stop all reminders on an event type" | `toggle-workflow` to disable |
