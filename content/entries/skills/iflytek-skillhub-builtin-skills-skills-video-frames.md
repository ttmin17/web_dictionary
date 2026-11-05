---
slug: iflytek-skillhub-builtin-skills-skills-video-frames
name: video-frames
tagline: Extract a single frame from a local video at the first frame, a
  timestamp, or a zero-based frame index using FFmpeg.
summary: '- Prefer --time for "what is happening around here?". - Use a .jpg for
  quick share; use .png for crisp UI frames. - --index accepts a non-negative
  integer only. - The script never overwrites an existing output. Choose...'
categories:
  - agent-frameworks
tags:
  - agent-framework
  - ai-agent
  - ai-governance
  - ai-infrastructure
status: active
quality_percentile: 73
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: iflytek/skillhub
  subpath: builtin-skills/skills/video-frames
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5391
  last_commit: 2026-11-05T12:44:39Z
  stars_delta_7d: 99
  stars_growth_pct: 1.9
  trending_score: 100.85
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5249
    - 5292
    - 5391
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: iflytek/skillhub
  path: builtin-skills/skills/video-frames/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:14:00.165Z
  truncated: false
type: agent_skill
skill:
  skill_name: video-frames
  description: Extract a single frame from a local video at the first frame, a
    timestamp, or a zero-based frame index using FFmpeg.
  folder_path: builtin-skills/skills/video-frames
  extra_files:
    - LICENSE.txt
    - NOTICE.md
    - scripts/frame.sh
  pack_total_skills: 24
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: iflytek-skillhub
---

# Video Frames (ffmpeg)
Extract a single frame from a video, or create quick thumbnails for inspection.

## Quick start

First frame:

```bash
bash scripts/frame.sh /path/to/video.mp4 --out /tmp/frame.jpg
```

At a timestamp:

```bash
bash scripts/frame.sh /path/to/video.mp4 --time 00:00:10 --out /tmp/frame-10s.jpg
```

At a zero-based frame index:

```bash
bash scripts/frame.sh /path/to/video.mp4 --index 42 --out /tmp/frame-42.png
```

## Notes

- Prefer `--time` for "what is happening around here?".
- Use a `.jpg` for quick share; use `.png` for crisp UI frames.
- `--index` accepts a non-negative integer only.
- The script never overwrites an existing output. Choose a new path or remove the
  old file only after the user explicitly asks to replace it.
