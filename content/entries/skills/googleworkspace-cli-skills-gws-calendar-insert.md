---
slug: googleworkspace-cli-skills-gws-calendar-insert
name: gws-calendar-insert
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
  subpath: skills/gws-calendar-insert
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
  path: skills/gws-calendar-insert/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:40:30.390Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-calendar-insert
  description: Agent skill from googleworkspace/cli
  folder_path: skills/gws-calendar-insert
  extra_files: []
  pack_total_skills: 95
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# calendar +insert
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

create a new event

## Usage

```bash
gws calendar +insert --summary <TEXT> --start <TIME> --end <TIME>
```

## Flags

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--calendar` | — | primary | Calendar ID (default: primary) |
| `--summary` | ✓ | — | Event summary/title |
| `--start` | ✓ | — | Start time (ISO 8601, e.g., 2024-01-01T10:00:00Z) |
| `--end` | ✓ | — | End time (ISO 8601) |
| `--location` | — | — | Event location |
| `--description` | — | — | Event description/body |
| `--attendee` | — | — | Attendee email (can be used multiple times) |
| `--meet` | — | — | Add a Google Meet video conference link |

## Examples

```bash
gws calendar +insert --summary 'Standup' --start '2026-06-17T09:00:00-07:00' --end '2026-06-17T09:30:00-07:00'
gws calendar +insert --summary 'Review' --start ... --end ... --attendee alice@example.com
gws calendar +insert --summary 'Meet' --start ... --end ... --meet
```

## Tips

- Use RFC3339 format for times (e.g. 2026-06-17T09:00:00-07:00).
- The --meet flag automatically adds a Google Meet link to the event.

> [!CAUTION]
> This is a **write** command — confirm with the user before executing.

## See Also

- [gws-shared](https://github.com/googleworkspace/cli/blob/main/skills/gws-calendar-insert/../gws-shared/SKILL.md) — Global flags and auth
- [gws-calendar](https://github.com/googleworkspace/cli/blob/main/skills/gws-calendar-insert/../gws-calendar/SKILL.md) — All manage calendars and events commands
