---
slug: the-open-agent-openagent-skills-video-frames
name: video-frames
tagline: Extract frames or short clips from videos using ffmpeg.
summary: '- Prefer -ss + timestamp for "what is happening around here?". - Use
  .jpg for quick sharing; use .png for crisp UI frames. - Use -hidebanner
  -loglevel error to suppress verbose ffmpeg output.'
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
  subpath: skills/video-frames
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
  path: skills/video-frames/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:38:10.205Z
  truncated: false
type: agent_skill
skill:
  skill_name: video-frames
  description: Extract frames or short clips from videos using ffmpeg.
  folder_path: skills/video-frames
  extra_files: []
  pack_total_skills: 54
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# Video Frames (ffmpeg)
Extract a single frame from a video, or create quick thumbnails for inspection.

## Quick start

First frame:

```bash
ffmpeg -hide_banner -loglevel error -y \
  -i /path/to/video.mp4 \
  -vf "select=eq(n\,0)" \
  -vframes 1 \
  /tmp/frame.jpg
```

At a timestamp:

```bash
ffmpeg -hide_banner -loglevel error -y \
  -ss 00:00:10 \
  -i /path/to/video.mp4 \
  -frames:v 1 \
  /tmp/frame-10s.jpg
```

By frame index:

```bash
ffmpeg -hide_banner -loglevel error -y \
  -i /path/to/video.mp4 \
  -vf "select=eq(n\,42)" \
  -vframes 1 \
  /tmp/frame42.jpg
```

## Notes

- Prefer `-ss` + timestamp for "what is happening around here?".
- Use `.jpg` for quick sharing; use `.png` for crisp UI frames.
- Use `-hide_banner -loglevel error` to suppress verbose ffmpeg output.
