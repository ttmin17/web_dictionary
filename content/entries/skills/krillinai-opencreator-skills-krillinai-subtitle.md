---
slug: krillinai-opencreator-skills-krillinai-subtitle
name: krillinai-subtitle
tagline: Use when generating subtitles with KrillinAI CLI from a YouTube link,
  Bilibili/local video, or existing media, including platform caption download,
  Wh
summary: "- YouTube URL: prefer --caption-source any; platform captions are used
  first, then Whisper fallback. - Local file: use local:/abs/path/video.mp4 or a
  path accepted by the CLI. - Bilibili or other yt-dlp supported link..."
categories:
  - media-creative
tags:
  - agent-skills
  - codex-cli
  - deskop-app
  - dubbing
status: active
quality_percentile: 76
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: krillinai/OpenCreator
  subpath: skills/krillinai-subtitle
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 14249
  last_commit: 2026-11-08T22:49:48Z
  stars_delta_7d: 77
  stars_growth_pct: 0.5
  trending_score: 77.42
  velocity_source: snapshot_delta
  sparkline_4w:
    - 13701
    - 13936
    - 14172
    - 14249
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: krillinai/OpenCreator
  path: skills/krillinai-subtitle/SKILL.md
  branch: master
  fetched_at: 2026-11-09T09:28:00.497Z
  truncated: false
type: agent_skill
skill:
  skill_name: krillinai-subtitle
  description: Use when generating subtitles with KrillinAI CLI from a YouTube
    link, Bilibili/local video, or existing media, including platform caption
    download, Whisper fallback, translation, bilingual SRT, and short vertical
    subtitle output.
  folder_path: skills/krillinai-subtitle
  extra_files: []
  pack_total_skills: 9
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: krillinai-opencreator
---

# KrillinAI Subtitle
Use this skill for the `subtitle` stage. Read `skills/krillinai-cli/references/cli-contract.md` first for binary location, execution working directory, configuration, and JSON behavior.

## Command

```bash
(cd "$KRILLINAI_CWD" && "$KRILLINAI_CLI" subtitle "<input>" \
  --origin-lang en \
  --target-lang zh_cn \
  --workdir "$WORKDIR" \
  --caption-source any \
  --prepare-video)
```

## Inputs

- YouTube URL: prefer `--caption-source any`; platform captions are used first, then Whisper fallback.
- Local file: use `local:/abs/path/video.mp4` or a path accepted by the CLI.
- Bilibili or other yt-dlp supported links: use when media download works; platform caption behavior may differ, so expect transcription fallback.

## Important Flags

| Flag | Use |
|---|---|
| `--origin-lang` | Source language, such as `en`, `zh`, `ja` |
| `--target-lang` | Target language, such as `zh_cn` |
| `--workdir` | Dedicated task directory |
| `--caption-source any` | Prefer platform captions, fallback to transcription |
| `--caption-source whisper` | Force transcription |
| `--prepare-video` | Require the original video for later render stages |
| `--bilingual-top=true` | Put target language on top in bilingual SRT |
| `--subtitle-style-file` | Merge a JSON subtitle-style override |
| `--dry-run` | Validate without downloads or AI calls |

## Outputs

After a real run, read paths from `krillinai_manifest.json`. Main files:

- `origin_language_srt.srt`
- `target_language_srt.srt`
- `bilingual_srt.srt`
- `short_origin_mixed_srt.srt`
- `origin_video.mp4` when media preparation produced or required video
- `origin_audio.mp3` when transcription preparation produced audio

`subtitle --dry-run` validates command shape but does not write a manifest or output files.

## Verification

- Require terminal JSON with `"ok": true`.
- Confirm `krillinai_manifest.json` exists under `--workdir`.
- Spot-check `bilingual_srt.srt` ordering and `short_origin_mixed_srt.srt` readability.
- When `--prepare-video` was requested, require a non-empty `origin_video` output.
- For Agent integration details, read `skills/krillinai-cli/references/cli-contract.md`.
