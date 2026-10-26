---
slug: ruvnet-ruflo-plugins-ruflo-music-skills-music-master
name: music-master
tagline: Run a mastering pass (LUFS loudness normalization + peak limiting) on
  an existing production
summary: The user wants a "radio-ready" or streaming-normalized version of a
  track they've already generated.
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-music/skills/music-master
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-music/skills/music-master/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.547Z
  truncated: false
type: agent_skill
skill:
  skill_name: music-master
  description: Run a mastering pass (LUFS loudness normalization + peak limiting)
    on an existing production
  folder_path: plugins/ruflo-music/skills/music-master
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Music Master
Applies loudness normalization (default target -14 LUFS, common streaming-platform standard) plus a peak limiter to an already-generated production.

## When to use

The user wants a "radio-ready" or streaming-normalized version of a track they've already generated.

## Steps

1. Call `mcp__cogmusic__master({ id: "<production-id>" })`.
2. The result includes `lufs_before` and `lufs_after` — report both so the user can see the actual loudness change, not just "done."
3. Update the cached entry in `music-productions` (if one exists) with the new `lufs_before`/`lufs_after`/`has_mastered: true` fields so later lookups don't need a round-trip.
4. Mastered audio isn't returned inline over MCP — point the user at the dashboard. See [ADR-0001](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-music/skills/music-master/../../docs/adrs/0001-music-contract.md).
