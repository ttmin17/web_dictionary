---
slug: googleworkspace-cli-skills-gws-events-renew
name: gws-events-renew
tagline: "Google Workspace Events: Renew/reactivate Workspace Events subscriptions."
summary: Renew/reactivate Workspace Events subscriptions
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
  subpath: skills/gws-events-renew
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
  path: skills/gws-events-renew/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:58.286Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-events-renew
  description: "Google Workspace Events: Renew/reactivate Workspace Events subscriptions."
  folder_path: skills/gws-events-renew
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# events +renew
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

Renew/reactivate Workspace Events subscriptions

## Usage

```bash
gws events +renew
```

## Flags

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--name` | — | — | Subscription name to reactivate (e.g., subscriptions/SUB_ID) |
| `--all` | — | — | Renew all subscriptions expiring within --within window |
| `--within` | — | 1h | Time window for --all (e.g., 1h, 30m, 2d) |

## Examples

```bash
gws events +renew --name subscriptions/SUB_ID
gws events +renew --all --within 2d
```

## Tips

- Subscriptions expire if not renewed periodically.
- Use --all with a cron job to keep subscriptions alive.

## See Also

- [gws-shared](https://github.com/googleworkspace/cli/blob/main/skills/gws-events-renew/../gws-shared/SKILL.md) — Global flags and auth
- [gws-events](https://github.com/googleworkspace/cli/blob/main/skills/gws-events-renew/../gws-events/SKILL.md) — All subscribe to google workspace events commands
