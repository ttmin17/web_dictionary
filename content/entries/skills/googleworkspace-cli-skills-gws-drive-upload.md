---
slug: googleworkspace-cli-skills-gws-drive-upload
name: gws-drive-upload
tagline: "Google Drive: Upload a file with automatic metadata."
summary: Upload a file with automatic metadata
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
  subpath: skills/gws-drive-upload
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
  path: skills/gws-drive-upload/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:07.199Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-drive-upload
  description: "Google Drive: Upload a file with automatic metadata."
  folder_path: skills/gws-drive-upload
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# drive +upload
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

Upload a file with automatic metadata

## Usage

```bash
gws drive +upload <file>
```

## Flags

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `<file>` | ✓ | — | Path to file to upload |
| `--parent` | — | — | Parent folder ID |
| `--name` | — | — | Target filename (defaults to source filename) |

## Examples

```bash
gws drive +upload ./report.pdf
gws drive +upload ./report.pdf --parent FOLDER_ID
gws drive +upload ./data.csv --name 'Sales Data.csv'
```

## Tips

- MIME type is detected automatically.
- Filename is inferred from the local path unless --name is given.

> [!CAUTION]
> This is a **write** command — confirm with the user before executing.

## See Also

- [gws-shared](https://github.com/googleworkspace/cli/blob/main/skills/gws-drive-upload/../gws-shared/SKILL.md) — Global flags and auth
- [gws-drive](https://github.com/googleworkspace/cli/blob/main/skills/gws-drive-upload/../gws-drive/SKILL.md) — All manage files, folders, and shared drives commands
