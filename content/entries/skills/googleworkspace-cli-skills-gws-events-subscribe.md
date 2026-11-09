---
slug: googleworkspace-cli-skills-gws-events-subscribe
name: gws-events-subscribe
tagline: "Google Workspace Events: Subscribe to Workspace events and stream them
  as NDJSON."
summary: Subscribe to Workspace events and stream them as NDJSON
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-agent
  - automation
  - cli
status: active
quality_percentile: 57
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: googleworkspace/cli
  subpath: skills/gws-events-subscribe
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 32202
  last_commit: 2026-11-03T01:37:22Z
  stars_delta_7d: 79
  stars_growth_pct: 0.2
  trending_score: 79.19
  velocity_source: snapshot_delta
  sparkline_4w:
    - 31663
    - 32123
    - 32202
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: googleworkspace/cli
  path: skills/gws-events-subscribe/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:58.286Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-events-subscribe
  description: "Google Workspace Events: Subscribe to Workspace events and stream
    them as NDJSON."
  folder_path: skills/gws-events-subscribe
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# events +subscribe
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

Subscribe to Workspace events and stream them as NDJSON

## Usage

```bash
gws events +subscribe
```

## Flags

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--target` | — | — | Workspace resource URI (e.g., //chat.googleapis.com/spaces/SPACE_ID) |
| `--event-types` | — | — | Comma-separated CloudEvents types to subscribe to |
| `--project` | — | — | GCP project ID for Pub/Sub resources |
| `--subscription` | — | — | Existing Pub/Sub subscription name (skip setup) |
| `--max-messages` | — | 10 | Max messages per pull batch (default: 10) |
| `--poll-interval` | — | 5 | Seconds between pulls (default: 5) |
| `--once` | — | — | Pull once and exit |
| `--cleanup` | — | — | Delete created Pub/Sub resources on exit |
| `--no-ack` | — | — | Don't auto-acknowledge messages |
| `--output-dir` | — | — | Write each event to a separate JSON file in this directory |

## Examples

```bash
gws events +subscribe --target '//chat.googleapis.com/spaces/SPACE' --event-types 'google.workspace.chat.message.v1.created' --project my-project
gws events +subscribe --subscription projects/p/subscriptions/my-sub --once
gws events +subscribe ... --cleanup --output-dir ./events
```

## Tips

- Without --cleanup, Pub/Sub resources persist for reconnection.
- Press Ctrl-C to stop gracefully.

> [!CAUTION]
> This is a **write** command — confirm with the user before executing.

## See Also

- [gws-shared](https://github.com/googleworkspace/cli/blob/main/skills/gws-events-subscribe/../gws-shared/SKILL.md) — Global flags and auth
- [gws-events](https://github.com/googleworkspace/cli/blob/main/skills/gws-events-subscribe/../gws-events/SKILL.md) — All subscribe to google workspace events commands
