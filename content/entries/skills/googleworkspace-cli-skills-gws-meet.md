---
slug: googleworkspace-cli-skills-gws-meet
name: gws-meet
tagline: Manage Google Meet conferences.
summary: "- get — Gets a conference record by conference ID. - list — Lists the
  conference records. By default, ordered by start time and in descending order.
  - participants — Operations on the 'participants' resource - recordi..."
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-agent
  - automation
  - cli
status: active
quality_percentile: 56
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: googleworkspace/cli
  subpath: skills/gws-meet
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 32055
  last_commit: 2026-10-30T16:06:54Z
  stars_delta_7d: 890
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 31448
    - 31663
    - 32055
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: googleworkspace/cli
  path: skills/gws-meet/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:42.261Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-meet
  description: Manage Google Meet conferences.
  folder_path: skills/gws-meet
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# meet (v2)
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

```bash
gws meet <resource> <method> [flags]
```

## API Resources

### conferenceRecords

  - `get` — Gets a conference record by conference ID.
  - `list` — Lists the conference records. By default, ordered by start time and in descending order.
  - `participants` — Operations on the 'participants' resource
  - `recordings` — Operations on the 'recordings' resource
  - `smartNotes` — Operations on the 'smartNotes' resource
  - `transcripts` — Operations on the 'transcripts' resource

### spaces

  - `create` — Creates a space.
  - `endActiveConference` — Ends an active conference (if there's one). For an example, see [End active conference](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#end-active-conference).
  - `get` — Gets details about a meeting space. For an example, see [Get a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#get-meeting-space).
  - `patch` — Updates details about a meeting space. For an example, see [Update a meeting space](https://developers.google.com/workspace/meet/api/guides/meeting-spaces#update-meeting-space).

## Discovering Commands

Before calling any API method, inspect it:

```bash
# Browse resources and methods
gws meet --help

# Inspect a method's required params, types, and defaults
gws schema meet.<resource>.<method>
```

Use `gws schema` output to build your `--params` and `--json` flags.
