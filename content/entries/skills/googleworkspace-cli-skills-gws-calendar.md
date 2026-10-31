---
slug: googleworkspace-cli-skills-gws-calendar
name: gws-calendar
tagline: Agent skill from googleworkspace/cli
summary: Agent skill from googleworkspace/cli
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-agent
  - automation
  - cli
status: active
quality_percentile: 54
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: googleworkspace/cli
  subpath: skills/gws-calendar
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 31663
  last_commit: 2026-10-06T20:23:04Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: snapshot_delta
  sparkline_4w:
    - 31270
    - 31448
    - 31663
    - 31663
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: googleworkspace/cli
  path: skills/gws-calendar/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:40:30.390Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-calendar
  description: Agent skill from googleworkspace/cli
  folder_path: skills/gws-calendar
  extra_files: []
  pack_total_skills: 95
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# calendar (v3)
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

```bash
gws calendar <resource> <method> [flags]
```

## Helper Commands

| Command | Description |
|---------|-------------|
| [`+insert`](https://github.com/googleworkspace/cli/blob/main/skills/gws-calendar/../gws-calendar-insert/SKILL.md) | create a new event |
| [`+agenda`](https://github.com/googleworkspace/cli/blob/main/skills/gws-calendar/../gws-calendar-agenda/SKILL.md) | Show upcoming events across all calendars |

## API Resources

### acl

  - `delete` — Deletes an access control rule.
  - `get` — Returns an access control rule.
  - `insert` — Creates an access control rule.
  - `list` — Returns the rules in the access control list for the calendar.
  - `patch` — Updates an access control rule. This method supports patch semantics.
  - `update` — Updates an access control rule.
  - `watch` — Watch for changes to ACL resources.

### calendarList

  - `delete` — Removes a calendar from the user's calendar list.
  - `get` — Returns a calendar from the user's calendar list.
  - `insert` — Inserts an existing calendar into the user's calendar list.
  - `list` — Returns the calendars on the user's calendar list.
  - `patch` — Updates an existing calendar on the user's calendar list. This method supports patch semantics.
  - `update` — Updates an existing calendar on the user's calendar list.
  - `watch` — Watch for changes to CalendarList resources.

### calendars

  - `clear` — Clears a primary calendar. This operation deletes all events associated with the primary calendar of an account.
  - `delete` — Deletes a secondary calendar. Use calendars.clear for clearing all events on primary calendars.
  - `get` — Returns metadata for a calendar.
  - `insert` — Creates a secondary calendar.
The authenticated user for the request is made the data owner of the new calendar.

Note: We recommend to authenticate as the intended data owner of the calendar. You can use domain-wide delegation of authority to allow applications to act on behalf of a specific user. Don't use a service account for authentication. If you use a service account for authentication, the service account is the data owner, which can lead to unexpected behavior.
  - `patch` — Updates metadata for a calendar. This method supports patch semantics.
  - `update` — Updates metadata for a calendar.

### channels

  - `stop` — Stop watching resources through this channel

### colors

  - `get` — Returns the color definitions for calendars and events.

### events

  - `delete` — Deletes an event.
  - `get` — Returns an event based on its Google Calendar ID. To retrieve an event using its iCalendar ID, call the events.list method using the iCalUID parameter.
  - `import` — Imports an event. This operation is used to add a private copy of an existing event to a calendar. Only events with an eventType of default may be imported.
Deprecated behavior: If a non-default event is imported, its type will be changed to default and any event-type-specific properties it may have will be dropped.
  - `insert` — Creates an event.
  - `instances` — Returns instances of the specified recurring event.
  - `list` — Returns events on the specified calendar.
  - `move` — Moves an event to another calendar, i.e. changes an event's organizer. Note that only default events can be moved; birthday, focusTime, fromGmail, outOfOffice and workingLocation events cannot be moved.
  - `patch` — Updates an event. This method supports patch semantics.
  - `quickAdd` — Creates an event based on a simple text string.
  - `update` — Updates an event.
  - `watch` — Watch for changes to Events resources.

### freebusy

  - `query` — Returns free/busy information for a set of calendars.

### settings

  - `get` — Returns a single user setting.
  - `list` — Returns all user settings for the authenticated user.
  - `watch` — Watch for changes to Settings resources.

## Discovering Commands

Before calling any API method, inspect it:

```bash
# Browse resources and methods
gws calendar --help

# Inspect a method's required params, types, and defaults
gws schema calendar.<resource>.<method>
```

Use `gws schema` output to build your `--params` and `--json` flags.
