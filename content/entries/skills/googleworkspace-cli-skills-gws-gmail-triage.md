---
slug: googleworkspace-cli-skills-gws-gmail-triage
name: gws-gmail-triage
tagline: "Gmail: Show unread inbox summary (sender, subject, date)."
summary: Show unread inbox summary (sender, subject, date)
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-agent
  - automation
  - cli
status: active
quality_percentile: 63
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: googleworkspace/cli
  subpath: skills/gws-gmail-triage
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 32123
  last_commit: 2026-11-03T01:37:22Z
  stars_delta_7d: 883
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 31448
    - 31663
    - 32123
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: googleworkspace/cli
  path: skills/gws-gmail-triage/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:07.200Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-gmail-triage
  description: "Gmail: Show unread inbox summary (sender, subject, date)."
  folder_path: skills/gws-gmail-triage
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# gmail +triage
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

Show unread inbox summary (sender, subject, date)

## Usage

```bash
gws gmail +triage
```

## Flags

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--max` | — | 20 | Maximum messages to show (default: 20) |
| `--query` | — | — | Gmail search query (default: is:unread) |
| `--labels` | — | — | Include label names in output |

## Examples

```bash
gws gmail +triage
gws gmail +triage --max 5 --query 'from:boss'
gws gmail +triage --format json | jq '.[].subject'
gws gmail +triage --labels
```

## Tips

- Read-only — never modifies your mailbox.
- Defaults to table output format.

## See Also

- [gws-shared](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail-triage/../gws-shared/SKILL.md) — Global flags and auth
- [gws-gmail](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail-triage/../gws-gmail/SKILL.md) — All send, read, and manage email commands
