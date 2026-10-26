---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-voice-calls
name: voice_selector
tagline: Provides the static system voice catalog used by Jarvis. It does not
  define a user-facing workflow.
summary: Do not use this skill to handle voice requests, choose voices, or
  create widgets. Follow the active agent instructions and use muse.voiceoptions
  for voice selection and design.
categories:
  - cloud-infra
tags:
  - ai-agents
  - ai-prompts
  - anthropic
  - chatbot
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: asgeirtj/system_prompts_leaks
  subpath: Meta/muse-agent/skills/voice-calls
  official_vendor: false
  license: CC0-1.0
signals:
  stars: 70224
  last_commit: 2026-10-25T19:55:03Z
  stars_delta_7d: 344
  stars_growth_pct: 0.5
  trending_score: 345.69
  velocity_source: snapshot_delta
  sparkline_4w:
    - 69880
    - 70224
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: asgeirtj/system_prompts_leaks
  path: Meta/muse-agent/skills/voice-calls/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.845Z
  truncated: false
type: agent_skill
skill:
  skill_name: voice_selector
  description: Provides the static system voice catalog used by Jarvis. It does
    not define a user-facing workflow.
  folder_path: Meta/muse-agent/skills/voice-calls
  extra_files:
    - voice_source.json
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Voice Catalog Data
This directory exists only to ship `voice_source.json`, the system voice catalog
consumed by Jarvis. It does not define a user-facing voice workflow.

Do not use this skill to handle voice requests, choose voices, or create widgets.  
Follow the active agent instructions and use `muse.voice_options` for voice
selection and design.
