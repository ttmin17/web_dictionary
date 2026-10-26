---
slug: trpc-group-trpc-agent-go-openclaw-skills-sag
name: sag
tagline: ElevenLabs text-to-speech with mac-style say UX.
summary: "- ELEVENLABSAPIKEY (preferred) - SAGAPIKEY also supported by the CLI"
categories:
  - agent-frameworks
tags:
  - a2a
  - a2a-protocol
  - ag-ui
  - agent-framework
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: openclaw/skills/sag
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1877
  last_commit: 2026-10-26T06:16:05Z
  stars_delta_7d: 7
  stars_growth_pct: 0.4
  trending_score: 7.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1860
    - 1870
    - 1877
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: openclaw/skills/sag/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:23.538Z
  truncated: false
type: agent_skill
skill:
  skill_name: sag
  description: ElevenLabs text-to-speech with mac-style say UX.
  folder_path: openclaw/skills/sag
  extra_files: []
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

# sag
Use `sag` for ElevenLabs TTS with local playback.

API key (required)

- `ELEVENLABS_API_KEY` (preferred)
- `SAG_API_KEY` also supported by the CLI

Quick start

- `sag "Hello there"`
- `sag speak -v "Roger" "Hello"`
- `sag voices`
- `sag prompting` (model-specific tips)

Model notes

- Default: `eleven_v3` (expressive)
- Stable: `eleven_multilingual_v2`
- Fast: `eleven_flash_v2_5`

Pronunciation + delivery rules

- First fix: respell (e.g. "key-note"), add hyphens, adjust casing.
- Numbers/units/URLs: `--normalize auto` (or `off` if it harms names).
- Language bias: `--lang en|de|fr|...` to guide normalization.
- v3: SSML `<break>` not supported; use `[pause]`, `[short pause]`, `[long pause]`.
- v2/v2.5: SSML `<break time="1.5s" />` supported; `<phoneme>` not exposed in `sag`.

v3 audio tags (put at the entrance of a line)

- `[whispers]`, `[shouts]`, `[sings]`
- `[laughs]`, `[starts laughing]`, `[sighs]`, `[exhales]`
- `[sarcastic]`, `[curious]`, `[excited]`, `[crying]`, `[mischievously]`
- Example: `sag "[whispers] keep this quiet. [short pause] ok?"`

Voice defaults

- `ELEVENLABS_VOICE_ID` or `SAG_VOICE_ID`

Confirm voice + speaker before long output.

## Chat voice responses

When Peter asks for a "voice" reply (e.g., "crazy scientist voice", "explain in voice"), generate audio and send it:

```bash
# Generate audio file
sag -v Clawd -o /tmp/voice-reply.mp3 "Your message here"

# Then include in reply:
# MEDIA:/tmp/voice-reply.mp3
```

Voice character tips:

- Crazy scientist: Use `[excited]` tags, dramatic pauses `[short pause]`, vary intensity
- Calm: Use `[whispers]` or slower pacing
- Dramatic: Use `[sings]` or `[shouts]` sparingly

Default voice for Clawd: `lj2rcrvANS3gaWWnczSX` (or just `-v Clawd`)
