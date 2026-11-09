---
slug: krillinai-opencreator-skills-krillinai-render-vertical
name: krillinai-render-vertical
tagline: Use when rendering portrait videos with KrillinAI CLI, including
  converting source video to vertical format, adding short bilingual subtitles,
  renderi
summary: "- Chinese uses word segmentation before line decisions. - Display
  width is used for line splitting: Chinese counts as width 2, other text as
  width 1. - Long Chinese subtitles are split across time into multiple
  Dialog..."
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
  subpath: skills/krillinai-render-vertical
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
  path: skills/krillinai-render-vertical/SKILL.md
  branch: master
  fetched_at: 2026-11-09T09:28:00.497Z
  truncated: false
type: agent_skill
skill:
  skill_name: krillinai-render-vertical
  description: Use when rendering portrait videos with KrillinAI CLI, including
    converting source video to vertical format, adding short bilingual
    subtitles, rendering dubbed vertical videos, and checking vertical subtitle
    readability.
  folder_path: skills/krillinai-render-vertical
  extra_files: []
  pack_total_skills: 9
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: krillinai-opencreator
---

# KrillinAI Render Vertical
Use this skill for `render-vertical`. Read `skills/krillinai-cli/references/cli-contract.md` first for binary location, execution working directory, configuration, and JSON behavior.

## Bilingual Short-Subtitle Video

```bash
(cd "$KRILLINAI_CWD" && "$KRILLINAI_CLI" render-vertical \
  --workdir "$WORKDIR" \
  --video "$WORKDIR/origin_video.mp4" \
  --subtitle "$WORKDIR/short_origin_mixed_srt.srt" \
  --major-title "今日话题" \
  --minor-title "AI Video")
```

## Dubbed Vertical Video

```bash
(cd "$KRILLINAI_CWD" && "$KRILLINAI_CLI" render-vertical \
  --workdir "$WORKDIR" \
  --video "$WORKDIR/video_with_tts.mp4" \
  --subtitle "$WORKDIR/target_language_srt.srt" \
  --dubbed \
  --major-title "今日话题" \
  --minor-title "AI Video")
```

## Subtitle Behavior

The Go renderer follows the good behavior from `vertical_srt.py`:

- Chinese uses word segmentation before line decisions.
- Display width is used for line splitting: Chinese counts as width 2, other text as width 1.
- Long Chinese subtitles are split across time into multiple `Dialogue` entries instead of stacked with `\N`.
- The goal is to keep the screen to one English line plus one Chinese line when possible.

## Outputs

- `transferred_vertical_video.mp4`: source converted to portrait format.
- `vertical_bilingual.mp4`: default final vertical video.
- `vertical_dubbed.mp4`: final video with `--dubbed`.
- Final variants are reported through the manifest key `vertical_video`.

## Verification

Use text and visual checks:

```bash
rg -n -F '\\N' "$WORKDIR/formatted_vertical_bilingual.ass"
ffmpeg -y -ss 00:00:01 -i "$WORKDIR/vertical_bilingual.mp4" \
  -frames:v 1 "$WORKDIR/vertical_preview_%03d.jpg"
```

Also require terminal JSON with `"ok": true`, valid video/audio streams, readable subtitles, and non-garbled titles.
