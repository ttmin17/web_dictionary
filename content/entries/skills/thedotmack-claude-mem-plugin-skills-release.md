---
slug: thedotmack-claude-mem-plugin-skills-release
name: release
tagline: Fully automate a release with version-bump and childhood.
summary: 1. version-bump 2. childhood
categories:
  - databases-memory
tags:
  - ai-agents
  - ai-memory
  - anthropic
  - artificial-intelligence
status: active
quality_percentile: 72
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: thedotmack/claude-mem
  subpath: plugin/skills/release
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 103202
  last_commit: 2026-10-25T21:00:05Z
  stars_delta_7d: 1527
  stars_growth_pct: 1.5
  trending_score: 1549.93
  velocity_source: snapshot_delta
  sparkline_4w:
    - 97519
    - 100334
    - 101675
    - 103202
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: thedotmack/claude-mem
  path: plugin/skills/release/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:14.402Z
  truncated: false
type: agent_skill
skill:
  skill_name: release
  description: Fully automate a release with version-bump and childhood.
  folder_path: plugin/skills/release
  extra_files: []
  pack_total_skills: 33
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: thedotmack-claude-mem
---

# Release
Deploy a subagent to fully automate a coding session as if it were typing in it itself.

Use these claude-mem skills in order:

1. `version-bump`
2. `childhood`

Task: $ARGUMENTS
