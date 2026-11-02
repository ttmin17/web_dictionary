---
slug: bytedance-deer-flow-skills-public-music-generation
name: music-generation
tagline: Use this skill when the user requests to generate, create, compose, or
  produce music or songs — background music, theme songs, jingles, or
  instrumenta
summary: This skill generates songs (vocal or instrumental) from a structured
  JSON spec using the MiniMax music generation API (/v1/musicgeneration). You
  describe the style/mood/scene in prompt, optionally provide lyrics, and...
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-framework
  - agentic-workflow
  - ai-agents
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: bytedance/deer-flow
  subpath: skills/public/music-generation
  official_vendor: false
  license: MIT
signals:
  stars: 84868
  last_commit: 2026-11-02T07:56:17Z
  stars_delta_7d: 437
  stars_growth_pct: 0.5
  trending_score: 439.26
  velocity_source: snapshot_delta
  sparkline_4w:
    - 84103
    - 84431
    - 84868
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: bytedance/deer-flow
  path: skills/public/music-generation/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:57.914Z
  truncated: false
type: agent_skill
skill:
  skill_name: music-generation
  description: Use this skill when the user requests to generate, create, compose,
    or produce music or songs — background music, theme songs, jingles, or
    instrumental tracks. Generates a song from a style/mood prompt and optional
    lyrics via the MiniMax music API.
  folder_path: skills/public/music-generation
  extra_files:
    - scripts/generate.py
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: bytedance-deer-flow
---

# Music Generation Skill
## Overview

This skill generates songs (vocal or instrumental) from a structured JSON spec using the
MiniMax music generation API (`/v1/music_generation`). You describe the style/mood/scene in
`prompt`, optionally provide `lyrics`, and the script returns an MP3.

## Workflow

### Step 1: Understand Requirements

Identify the desired style, mood, scene, language, and whether the user wants vocals or a
pure instrumental track. Decide whether to supply lyrics or let the model write them.

### Step 2: Create the Spec JSON

Write a JSON file in `/mnt/user-data/workspace/` named `{descriptive-name}.json`:

```json
{
  "title": "Rainy Night Cafe",
  "prompt": "indie folk, melancholic, introspective, walking alone, cafe",
  "lyrics": "[verse]\nStreetlights glow the night wind sighs\n[chorus]\nPush the wooden door warm air inside"
}
```

Fields:
- `title` (optional): a human-readable name.
- `prompt` (required): style, mood, and scene. Drives the musical character.
- `lyrics` (optional): song lyrics. Use `\n` between lines and structure tags such as
  `[Intro]`, `[Verse]`, `[Pre Chorus]`, `[Chorus]`, `[Bridge]`, `[Outro]`.
- `is_instrumental` (optional, bool): set `true` for a pure instrumental track (no lyrics needed).

Behavior:
- `lyrics` provided → those lyrics are sung.
- `is_instrumental: true` → instrumental, no vocals.
- neither → the model auto-writes lyrics from `prompt` (`lyrics_optimizer`).

### Step 3: Execute Generation

```bash
python /mnt/skills/public/music-generation/scripts/generate.py \
  --prompt-file /mnt/user-data/workspace/rainy-night-cafe.json \
  --output-file /mnt/user-data/outputs/rainy-night-cafe.mp3
```

Parameters:
- `--prompt-file`: Absolute path to the JSON spec (required).
- `--output-file`: Absolute path for the output MP3 (required).

[!NOTE]
Do NOT read the python file, just call it with the parameters.

## Environment

- `MINIMAX_API_KEY` (required): your MiniMax interface key.
- `MINIMAX_API_HOST` (optional): default `https://api.minimaxi.com`.
- `MINIMAX_MUSIC_MODEL` (optional): default `music-2.6-free` (works for all API-key users);
  paid/Token-Plan users can set `music-2.6` for higher limits.

## Output Handling

- Music is saved as MP3 (typically in `/mnt/user-data/outputs/`).
- Returned audio must decode to nonempty bytes and have an ID3 tag header or MPEG frame signature. This is a header sanity check, not complete audio decoding.
- Malformed, empty or unrecognized audio is rejected before creating the output directory or opening the output file; an existing output is preserved.
- Missing audio reports "MiniMax returned no audio data"; whitespace-only hex reports "MiniMax audio decoded to empty bytes".
- Share the generated file with the user using the present_files tool.
- Offer to iterate on style or lyrics if adjustments are needed.

## Notes

- Keep `prompt` focused on style/mood/scene; put the actual sung words in `lyrics`.
- For non-English songs, write `lyrics` in the target language.
