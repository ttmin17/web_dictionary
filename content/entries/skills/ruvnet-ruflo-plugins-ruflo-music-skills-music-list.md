---
slug: ruvnet-ruflo-plugins-ruflo-music-skills-music-list
name: music-list
tagline: List the account's saved music productions with metadata and audio_url
summary: The user asks what tracks exist, wants to find a track by title, or you
  need a production id for music-get/music-stems/music-midi/music-master and
  don't already have it.
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
  subpath: plugins/ruflo-music/skills/music-list
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
  path: plugins/ruflo-music/skills/music-list/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.547Z
  truncated: false
type: agent_skill
skill:
  skill_name: music-list
  description: List the account's saved music productions with metadata and audio_url
  folder_path: plugins/ruflo-music/skills/music-list
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Music List
Surfaces every production in the connected Cognitum Music account.

## When to use

The user asks what tracks exist, wants to find a track by title, or you need a production `id` for `music-get`/`music-stems`/`music-midi`/`music-master` and don't already have it.

## Steps

1. Call `mcp__cogmusic__list_productions({})` — no arguments.
2. Present results sorted by `created_at_unix` descending (the API already returns them this way): title, duration, `id`, and which processing steps have run (`has_stems`/`has_midi`/`has_mastered`).
3. If the user is looking for a specific track, match on `title` (case-insensitive substring) rather than asking them to know the `id` up front.
4. Optionally refresh the `music-productions` memory cache for any entries not already stored there (see `music-generate`'s caching step) — useful after a production was created outside this session (e.g. from the web dashboard).

## Notes

This never returns audio bytes — only metadata plus each production's `audio_url` for a follow-up authenticated GET. See [ADR-0001](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-music/skills/music-list/../../docs/adrs/0001-music-contract.md).
