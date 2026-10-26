---
slug: the-open-agent-openagent-skills-openai-whisper
name: openai-whisper
tagline: Local speech-to-text with the Whisper CLI (no API key).
summary: "- whisper /path/audio.mp3 --model medium --outputformat txt
  --outputdir . - whisper /path/audio.m4a --task translate --outputformat srt"
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
  subpath: skills/openai-whisper
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
  path: skills/openai-whisper/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:38:10.203Z
  truncated: false
type: agent_skill
skill:
  skill_name: openai-whisper
  description: Local speech-to-text with the Whisper CLI (no API key).
  folder_path: skills/openai-whisper
  extra_files: []
  pack_total_skills: 54
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# Whisper (CLI)
Use `whisper` to transcribe audio locally.

Quick start

- `whisper /path/audio.mp3 --model medium --output_format txt --output_dir .`
- `whisper /path/audio.m4a --task translate --output_format srt`

Notes

- Models download to `~/.cache/whisper` on first run.
- `--model` defaults to `turbo` on this install.
- Use smaller models for speed, larger for accuracy.
