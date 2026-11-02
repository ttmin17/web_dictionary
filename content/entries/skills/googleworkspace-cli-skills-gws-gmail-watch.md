---
slug: googleworkspace-cli-skills-gws-gmail-watch
name: gws-gmail-watch
tagline: "Gmail: Watch for new emails and stream them as NDJSON."
summary: Watch for new emails and stream them as NDJSON
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
  subpath: skills/gws-gmail-watch
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
  path: skills/gws-gmail-watch/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:42.261Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-gmail-watch
  description: "Gmail: Watch for new emails and stream them as NDJSON."
  folder_path: skills/gws-gmail-watch
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# gmail +watch
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

Watch for new emails and stream them as NDJSON

## Usage

```bash
gws gmail +watch
```

## Flags

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--project` | — | — | GCP project ID for Pub/Sub resources |
| `--subscription` | — | — | Existing Pub/Sub subscription name (skip setup) |
| `--topic` | — | — | Existing Pub/Sub topic with Gmail push permission already granted |
| `--label-ids` | — | — | Comma-separated Gmail label IDs to filter (e.g., INBOX,UNREAD) |
| `--max-messages` | — | 10 | Max messages per pull batch |
| `--poll-interval` | — | 5 | Seconds between pulls |
| `--msg-format` | — | full | Gmail message format: full, metadata, minimal, raw |
| `--once` | — | — | Pull once and exit |
| `--cleanup` | — | — | Delete created Pub/Sub resources on exit |
| `--output-dir` | — | — | Write each message to a separate JSON file in this directory |

## Examples

```bash
gws gmail +watch --project my-gcp-project
gws gmail +watch --project my-project --label-ids INBOX --once
gws gmail +watch --subscription projects/p/subscriptions/my-sub
gws gmail +watch --project my-project --cleanup --output-dir ./emails
```

## Tips

- Gmail watch expires after 7 days — re-run to renew.
- Without --cleanup, Pub/Sub resources persist for reconnection.
- Press Ctrl-C to stop gracefully.

## See Also

- [gws-shared](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail-watch/../gws-shared/SKILL.md) — Global flags and auth
- [gws-gmail](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail-watch/../gws-gmail/SKILL.md) — All send, read, and manage email commands
