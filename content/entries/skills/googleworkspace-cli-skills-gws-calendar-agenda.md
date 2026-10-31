---
slug: googleworkspace-cli-skills-gws-calendar-agenda
name: gws-calendar-agenda
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
  subpath: skills/gws-calendar-agenda
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
  path: skills/gws-calendar-agenda/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:40:30.390Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-calendar-agenda
  description: Agent skill from googleworkspace/cli
  folder_path: skills/gws-calendar-agenda
  extra_files: []
  pack_total_skills: 95
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# calendar +agenda
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

Show upcoming events across all calendars

## Usage

```bash
gws calendar +agenda
```

## Flags

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--today` | — | — | Show today's events |
| `--tomorrow` | — | — | Show tomorrow's events |
| `--week` | — | — | Show this week's events |
| `--days` | — | — | Number of days ahead to show |
| `--calendar` | — | — | Filter to specific calendar name or ID |
| `--timezone` | — | — | IANA timezone override (e.g. America/Denver). Defaults to Google account timezone. |

## Examples

```bash
gws calendar +agenda
gws calendar +agenda --today
gws calendar +agenda --week --format table
gws calendar +agenda --days 3 --calendar 'Work'
gws calendar +agenda --today --timezone America/New_York
```

## Tips

- Read-only — never modifies events.
- Queries all calendars by default; use --calendar to filter.
- Uses your Google account timezone by default; override with --timezone.

## See Also

- [gws-shared](https://github.com/googleworkspace/cli/blob/main/skills/gws-calendar-agenda/../gws-shared/SKILL.md) — Global flags and auth
- [gws-calendar](https://github.com/googleworkspace/cli/blob/main/skills/gws-calendar-agenda/../gws-calendar/SKILL.md) — All manage calendars and events commands
