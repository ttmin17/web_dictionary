---
slug: googleworkspace-cli-skills-gws-gmail-read
name: gws-gmail-read
tagline: "Gmail: Read a message and extract its body or headers."
summary: Read a message and extract its body or headers
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
  subpath: skills/gws-gmail-read
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
  path: skills/gws-gmail-read/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:07.200Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-gmail-read
  description: "Gmail: Read a message and extract its body or headers."
  folder_path: skills/gws-gmail-read
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# gmail +read
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

Read a message and extract its body or headers

## Usage

```bash
gws gmail +read --id <ID>
```

## Flags

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--id` | ✓ | — | The Gmail message ID to read |
| `--headers` | — | — | Include headers (From, To, Subject, Date) in the output |
| `--format` | — | text | Output format (text, json) |
| `--html` | — | — | Return HTML body instead of plain text |
| `--dry-run` | — | — | Show the request that would be sent without executing it |

## Examples

```bash
gws gmail +read --id 18f1a2b3c4d
gws gmail +read --id 18f1a2b3c4d --headers
gws gmail +read --id 18f1a2b3c4d --format json | jq '.body'
```

## Tips

- Converts HTML-only messages to plain text automatically.
- Handles multipart/alternative and base64 decoding.

## See Also

- [gws-shared](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail-read/../gws-shared/SKILL.md) — Global flags and auth
- [gws-gmail](https://github.com/googleworkspace/cli/blob/main/skills/gws-gmail-read/../gws-gmail/SKILL.md) — All send, read, and manage email commands
