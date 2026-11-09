---
slug: krillinai-opencreator-skills-krillinai-render-horizontal
name: krillinai-render-horizontal
tagline: Use when rendering landscape videos with KrillinAI CLI, including
  original video plus bilingual subtitles or dubbed video plus target-language
  subtitl
summary: "- --video: source video, or omit when manifest has the correct input.
  - --audio: optional replacement audio. - --subtitle: usually bilingualsrt.srt
  for bilingual, targetlanguagesrt.srt for dubbed. - --workdir: directo..."
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
  subpath: skills/krillinai-render-horizontal
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
  path: skills/krillinai-render-horizontal/SKILL.md
  branch: master
  fetched_at: 2026-11-09T09:28:00.497Z
  truncated: false
type: agent_skill
skill:
  skill_name: krillinai-render-horizontal
  description: Use when rendering landscape videos with KrillinAI CLI, including
    original video plus bilingual subtitles or dubbed video plus target-language
    subtitles.
  folder_path: skills/krillinai-render-horizontal
  extra_files: []
  pack_total_skills: 9
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: krillinai-opencreator
---

# KrillinAI Render Horizontal
Use this skill for `render-horizontal`. Read `skills/krillinai-cli/references/cli-contract.md` first for binary location, execution working directory, configuration, and JSON behavior.

## Bilingual Subtitle Video

```bash
(cd "$KRILLINAI_CWD" && "$KRILLINAI_CLI" render-horizontal \
  --workdir "$WORKDIR" \
  --video "$WORKDIR/origin_video.mp4" \
  --subtitle "$WORKDIR/bilingual_srt.srt")
```

## Dubbed Video

```bash
(cd "$KRILLINAI_CWD" && "$KRILLINAI_CLI" render-horizontal \
  --workdir "$WORKDIR" \
  --video "$WORKDIR/video_with_tts.mp4" \
  --subtitle "$WORKDIR/target_language_srt.srt" \
  --dubbed)
```

## Inputs

- `--video`: source video, or omit when manifest has the correct input.
- `--audio`: optional replacement audio.
- `--subtitle`: usually `bilingual_srt.srt` for bilingual, `target_language_srt.srt` for dubbed.
- `--workdir`: directory containing `krillinai_manifest.json`.
- `--subtitle-style-file`: optional JSON override merged with the default subtitle style.

## Outputs

- `horizontal_bilingual.mp4` for the default variant.
- `horizontal_dubbed.mp4` with `--dubbed`.
- Both variants are reported through the manifest key `horizontal_video`.

## Verification

- Require terminal JSON with `"ok": true`.
- Confirm output video exists and has video/audio streams.
- Extract a preview frame when checking subtitle placement.
- For manifest and error handling, read `skills/krillinai-cli/references/cli-contract.md`.
