---
slug: ruvnet-ruflo-plugins-ruflo-music-skills-music-stems
name: music-stems
tagline: Run 4-stem separation (vocals/drums/bass/other) on an existing production
summary: The user wants isolated stems from a track they've already generated
  (remixing, karaoke tracks, sampling). Needs an existing production id — run
  music-list first if you don't have one.
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
  subpath: plugins/ruflo-music/skills/music-stems
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
  path: plugins/ruflo-music/skills/music-stems/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.547Z
  truncated: false
type: agent_skill
skill:
  skill_name: music-stems
  description: Run 4-stem separation (vocals/drums/bass/other) on an existing production
  folder_path: plugins/ruflo-music/skills/music-stems
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Music Stems
Splits an already-generated production into vocals/drums/bass/other stems.

## When to use

The user wants isolated stems from a track they've already generated (remixing, karaoke tracks, sampling). Needs an existing production `id` — run `music-list` first if you don't have one.

## Steps

1. Call `mcp__cogmusic__separate_stems({ id: "<production-id>" })`. This is a real GPU job — it takes real time, similar order of magnitude to generation itself, and shares the same underlying inference service as `create_production` (see the reliability notes in `music-generate`'s SKILL.md — a transient failure is worth one retry before concluding something's wrong).
2. **This does not return audio.** The result only confirms which stems were produced. Check `has_stems` via `mcp__cogmusic__get_production` afterward, then point the user at the dashboard (`music.cognitum.one`) to actually listen — per [ADR-0001](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-music/skills/music-stems/../../docs/adrs/0001-music-contract.md), the current cogmusic MCP tool surface doesn't expose a stem-level `audio_url` the way the primary production audio has one (only the main track's URL is PAT-authorized today).
3. If the user specifically needs the stem *bytes* delivered back through this session rather than via the dashboard, say so plainly — that's a real gap in the current MCP surface, not something this skill can work around.
