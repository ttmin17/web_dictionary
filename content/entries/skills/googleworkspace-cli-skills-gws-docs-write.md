---
slug: googleworkspace-cli-skills-gws-docs-write
name: gws-docs-write
tagline: "Google Docs: Append text to a document."
summary: Append text to a document
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
  subpath: skills/gws-docs-write
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
  path: skills/gws-docs-write/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:42.260Z
  truncated: false
type: agent_skill
skill:
  skill_name: gws-docs-write
  description: "Google Docs: Append text to a document."
  folder_path: skills/gws-docs-write
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: googleworkspace-cli
---

# docs +write
> **PREREQUISITE:** Read `../gws-shared/SKILL.md` for auth, global flags, and security rules. If missing, run `gws generate-skills` to create it.

Append text to a document

## Usage

```bash
gws docs +write --document <ID> --text <TEXT>
```

## Flags

| Flag | Required | Default | Description |
|------|----------|---------|-------------|
| `--document` | ✓ | — | Document ID |
| `--text` | ✓ | — | Text to append (plain text) |

## Examples

```bash
gws docs +write --document DOC_ID --text 'Hello, world!'
```

## Tips

- Text is inserted at the end of the document body.
- For rich formatting, use the raw batchUpdate API instead.

> [!CAUTION]
> This is a **write** command — confirm with the user before executing.

## See Also

- [gws-shared](https://github.com/googleworkspace/cli/blob/main/skills/gws-docs-write/../gws-shared/SKILL.md) — Global flags and auth
- [gws-docs](https://github.com/googleworkspace/cli/blob/main/skills/gws-docs-write/../gws-docs/SKILL.md) — All read and write google docs commands
