---
slug: the-open-agent-openagent-skills-blucli
name: blucli
tagline: BluOS CLI (blu) for discovery, playback, grouping, and volume.
summary: "- blu devices (pick target) - blu --device status - blu
  play|pause|stop - blu volume set 15"
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-ai
  - agi
  - chatbot
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/blucli
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5730
  last_commit: 2026-11-02T01:23:53Z
  stars_delta_7d: 18
  stars_growth_pct: 0.3
  trending_score: 18.06
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5688
    - 5698
    - 5712
    - 5730
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: the-open-agent/openagent
  path: skills/blucli/SKILL.md
  branch: master
  fetched_at: 2026-11-02T09:05:48.637Z
  truncated: false
type: agent_skill
skill:
  skill_name: blucli
  description: BluOS CLI (blu) for discovery, playback, grouping, and volume.
  folder_path: skills/blucli
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
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
