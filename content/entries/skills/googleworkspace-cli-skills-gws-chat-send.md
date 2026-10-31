---
slug: googleworkspace-cli-skills-gws-chat-send
name: gws-chat-send
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
  subpath: skills/gws-chat-send
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
  path: skills/gws-chat-send/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:40:30.390Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-chat-send
  description: Agent skill from googleworkspace/cli
  folder_path: skills/gws-chat-send
  extra_files: []
  pack_total_skills: 95
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# chat +send
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

Send a message to a space

## Usage

```bash
gws chat +send --space <NAME> --text <TEXT>
```

## Flags

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--space` | ✓ | — | Space name (e.g. spaces/AAAA...) |
| `--text` | ✓ | — | Message text (plain text) |

## Examples

```bash
gws chat +send --space spaces/AAAAxxxx --text 'Hello team!'
```

## Tips

- Use 'gws chat spaces list' to find space names.
- For cards or threaded replies, use the raw API instead.

> [!CAUTION]
> This is a **write** command — confirm with the user before executing.

## See Also

- [gws-shared](https://github.com/googleworkspace/cli/blob/main/skills/gws-chat-send/../gws-shared/SKILL.md) — Global flags and auth
- [gws-chat](https://github.com/googleworkspace/cli/blob/main/skills/gws-chat-send/../gws-chat/SKILL.md) — All manage chat spaces and messages commands
