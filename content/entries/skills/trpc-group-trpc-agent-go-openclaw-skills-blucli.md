---
slug: trpc-group-trpc-agent-go-openclaw-skills-blucli
name: blucli
tagline: BluOS CLI (blu) for discovery, playback, grouping, and volume.
summary: "- blu devices (pick target) - blu --device status - blu
  play|pause|stop - blu volume set 15"
categories:
  - agent-frameworks
tags:
  - a2a
  - a2a-protocol
  - ag-ui
  - agent-framework
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: openclaw/skills/blucli
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1893
  last_commit: 2026-11-02T07:41:24Z
  stars_delta_7d: 16
  stars_growth_pct: 0.9
  trending_score: 16.14
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1860
    - 1870
    - 1877
    - 1893
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: openclaw/skills/blucli/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:05:56.325Z
  truncated: false
type: agent_skill
skill:
  skill_name: blucli
  description: BluOS CLI (blu) for discovery, playback, grouping, and volume.
  folder_path: openclaw/skills/blucli
  extra_files: []
  pack_total_skills: 24
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

# blucli (blu)
Use `blu` to control Bluesound/NAD players.

Quick start

- `blu devices` (pick target)
- `blu --device <id> status`
- `blu play|pause|stop`
- `blu volume set 15`

Target selection (in priority order)

- `--device <id|name|alias>`
- `BLU_DEVICE`
- config default (if set)

Common tasks

- Grouping: `blu group status|add|remove`
- TuneIn search/play: `blu tunein search "query"`, `blu tunein play "query"`

Prefer `--json` for scripts. Confirm the target device before changing playback.
