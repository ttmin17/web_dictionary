---
slug: krillinai-opencreator-skills-krillinai-tts
name: krillinai-tts
tagline: Use when generating target-language dubbing with KrillinAI CLI from SRT
  subtitles, including TTS audio creation and optional dubbed video generation.
summary: "- --input-srt is required. Usually use targetlanguagesrt.srt. -
  --video is optional but needed when generating videowithtts.mp4. - TTS
  provider must be configured in /config/config.toml."
categories:
  - media-creative
tags:
  - agent-skills
  - codex-cli
  - deskop-app
  - dubbing
status: active
quality_percentile: 75
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: krillinai/OpenCreator
  subpath: skills/krillinai-tts
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 14172
  last_commit: 2026-11-04T07:21:10Z
  stars_delta_7d: 236
  stars_growth_pct: 1.7
  trending_score: 240
  velocity_source: snapshot_delta
  sparkline_4w:
    - 12884
    - 13701
    - 13936
    - 14172
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: krillinai/OpenCreator
  path: skills/krillinai-tts/SKILL.md
  branch: master
  fetched_at: 2026-11-05T13:13:11.626Z
  truncated: false
type: agent_skill
skill:
  skill_name: krillinai-tts
  description: Use when generating target-language dubbing with KrillinAI CLI from
    SRT subtitles, including TTS audio creation and optional dubbed video
    generation.
  folder_path: skills/krillinai-tts
  extra_files: []
  pack_total_skills: 9
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: krillinai-opencreator
---

# KrillinAI TTS
Use this skill for the `tts` stage. Read `skills/krillinai-cli/references/cli-contract.md` first for binary location, execution working directory, configuration, and JSON behavior.

## Command

```bash
(cd "$KRILLINAI_CWD" && "$KRILLINAI_CLI" tts \
  --workdir "$WORKDIR" \
  --input-srt "$WORKDIR/target_language_srt.srt" \
  --line-mode target-only \
  --video "$WORKDIR/origin_video.mp4")
```

## Inputs

- `--input-srt` is required. Usually use `target_language_srt.srt`.
- `--video` is optional but needed when generating `video_with_tts.mp4`.
- TTS provider must be configured in `<execution-cwd>/config/config.toml`.

## Important Flags

| Flag | Use |
|---|---|
| `--input-srt` | SRT to synthesize |
| `--line-mode target-only` | Use target-language lines only |
| `--line-mode bilingual-target-top` | Bilingual mode with target on top |
| `--line-mode bilingual-target-bottom` | Bilingual mode with target on bottom |
| `--voice` | Provider-specific voice |
| `--voice-clone-source` | Voice clone source audio URL/path when supported |
| `--dry-run` | Validate command shape |

## Outputs

Read paths from manifest:

- `tts_final_audio.wav`
- `video_with_tts.mp4` when a video input is available

## Verification

- Require terminal JSON with `"ok": true`.
- Confirm `tts_final_audio.wav` exists and has non-zero size.
- If `video_with_tts.mp4` is produced, inspect duration and audio stream with `ffprobe`.
- For JSON/error contract, read `skills/krillinai-cli/references/cli-contract.md`.
