---
slug: googleworkspace-cli-skills-gws-admin-reports
name: gws-admin-reports
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
first_seen: 2026-03-02T19:46:06
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: googleworkspace/cli
  subpath: skills/gws-admin-reports
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 31663
  last_commit: 2026-10-06T20:23:04Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
  rank_current: 145
  rank_delta: -97
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
  path: skills/gws-admin-reports/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:40:30.390Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-admin-reports
  description: Agent skill from googleworkspace/cli
  folder_path: skills/gws-admin-reports
  extra_files: []
  pack_total_skills: 95
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# admin-reports (reports_v1)
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

```bash
gws admin-reports <resource> <method> [flags]
```

## API Resources

### activities

  - `list` — Retrieves a list of activities for a specific customer's account and application such as the Admin console application or the Google Drive application. For more information, see the guides for administrator and Google Drive activity reports. For more information about the activity report's parameters, see the activity parameters reference guides.
  - `watch` — Start receiving notifications for account activities. For more information, see Receiving Push Notifications.

### channels

  - `stop` — Stop watching resources through this channel.

### customerUsageReports

  - `get` — Retrieves a report which is a collection of properties and statistics for a specific customer's account. For more information, see the Customers Usage Report guide. For more information about the customer report's parameters, see the Customers Usage parameters reference guides.

### entityUsageReports

  - `get` — Retrieves a report which is a collection of properties and statistics for entities used by users within the account. For more information, see the Entities Usage Report guide. For more information about the entities report's parameters, see the Entities Usage parameters reference guides.

### userUsageReport

  - `get` — Retrieves a report which is a collection of properties and statistics for a set of users with the account. For more information, see the User Usage Report guide. For more information about the user report's parameters, see the Users Usage parameters reference guides.

## Discovering Commands

Before calling any API method, inspect it:

```bash
# Browse resources and methods
gws admin-reports --help

# Inspect a method's required params, types, and defaults
gws schema admin-reports.<resource>.<method>
```

Use `gws schema` output to build your `--params` and `--json` flags.
