---
slug: ruvnet-ruflo-plugins-ruflo-music-skills-music-midi
name: music-midi
tagline: Extract MIDI/score from an existing production
summary: The user wants a MIDI file or score from a track they've already
  generated (transcription, arranging, DAW import). Needs an existing production
  id.
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
  subpath: plugins/ruflo-music/skills/music-midi
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
  path: plugins/ruflo-music/skills/music-midi/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.547Z
  truncated: false
type: agent_skill
skill:
  skill_name: music-midi
  description: Extract MIDI/score from an existing production
  folder_path: plugins/ruflo-music/skills/music-midi
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Music MIDI
Runs pitch-tracked MIDI/score extraction on an already-generated production.

## When to use

The user wants a MIDI file or score from a track they've already generated (transcription, arranging, DAW import). Needs an existing production `id`.

## Steps

1. Call `mcp__cogmusic__extract_midi({ id: "<production-id>" })`. Real GPU work, same reliability profile as `music-stems` and `music-generate` — one retry on a transient failure is reasonable before treating it as broken.
2. Confirm via `mcp__cogmusic__get_production` that `has_midi` is now `true`.
3. Like stems, the MIDI file itself isn't returned inline over MCP today — point the user at the dashboard to download it. See [ADR-0001](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-music/skills/music-midi/../../docs/adrs/0001-music-contract.md).
