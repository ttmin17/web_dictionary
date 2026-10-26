---
slug: the-open-agent-openagent-skills-songsee
name: songsee
tagline: Generate spectrograms and feature-panel visualizations from audio with
  the songsee CLI.
summary: "- Spectrogram: songsee track.mp3 - Multi-panel: songsee track.mp3
  --viz spectrogram,mel,chroma,hpss,selfsim,loudness,tempogram,mfcc,flux - Time
  slice: songsee track.mp3 --start 12.5 --duration 8 -o slice.jpg - Stdin:..."
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-ai
  - agi
  - chatbot
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/songsee
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5712
  last_commit: 2026-10-25T13:57:48Z
  stars_delta_7d: 14
  stars_growth_pct: 0.2
  trending_score: 14.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5688
    - 5698
    - 5712
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: the-open-agent/openagent
  path: skills/songsee/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:38:10.204Z
  truncated: false
type: agent_skill
skill:
  skill_name: songsee
  description: Generate spectrograms and feature-panel visualizations from audio
    with the songsee CLI.
  folder_path: skills/songsee
  extra_files: []
  pack_total_skills: 54
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# songsee
Generate spectrograms + feature panels from audio.

Quick start

- Spectrogram: `songsee track.mp3`
- Multi-panel: `songsee track.mp3 --viz spectrogram,mel,chroma,hpss,selfsim,loudness,tempogram,mfcc,flux`
- Time slice: `songsee track.mp3 --start 12.5 --duration 8 -o slice.jpg`
- Stdin: `cat track.mp3 | songsee - --format png -o out.png`

Common flags

- `--viz` list (repeatable or comma-separated)
- `--style` palette (classic, magma, inferno, viridis, gray)
- `--width` / `--height` output size
- `--window` / `--hop` FFT settings
- `--min-freq` / `--max-freq` frequency range
- `--start` / `--duration` time slice
- `--format` jpg|png

Notes

- WAV/MP3 decode native; other formats use ffmpeg if available.
- Multiple `--viz` renders a grid.
