---
slug: yikart-aitoearn-project-aitoearn-backend-apps-aitoearn-ai-src-core-agent-skills-composing-videos
name: composing-videos
tagline: Combines multiple videos/images into a single video with optional
  background audio. Use when user wants to merge clips, concatenate videos,
  create sli
summary: "- Merging multiple video clips into one - Creating a slideshow from
  multiple images - Adding background music to a video - Combining videos with
  audio tracks - Stitching together video segments"
categories:
  - other
tags:
  - agent-skills
  - auto-publish
  - codex-skills
  - douyin
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-11-05
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: yikart/AiToEarn
  subpath: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/composing-videos
  official_vendor: false
  license: MIT
signals:
  stars: 27517
  last_commit: 2026-11-09T09:08:45Z
  stars_delta_7d: 219
  stars_growth_pct: 0.8
  trending_score: 220.76
  velocity_source: snapshot_delta
  sparkline_4w:
    - 27298
    - 27517
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: yikart/AiToEarn
  path: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/composing-videos/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:26:47.259Z
  truncated: false
type: agent_skill
skill:
  skill_name: composing-videos
  description: Combines multiple videos/images into a single video with optional
    background audio. Use when user wants to merge clips, concatenate videos,
    create slideshow from images, stitch videos together, combine media files,
    add background music to video, mix video with audio, create video montage,
    or join multiple video segments.
    合并视频、拼接视频、图片合成视频、添加背景音乐、视频拼接、多图生成视频、视频混剪、素材合成。
  folder_path: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/composing-videos
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: yikart-aitoearn
---

# Video Composition
Combines multiple videos/images into a single video with optional background audio using AI-powered processing.

## When to Use

Use this skill when:

- Merging multiple video clips into one
- Creating a slideshow from multiple images
- Adding background music to a video
- Combining videos with audio tracks
- Stitching together video segments

## Workflow

### Step 1: Collect Media

Gather all media URLs from user:

- Video files (MP4, MOV, etc.)
- Image files (JPG, PNG, etc.)
- Audio files (MP3, WAV, etc.) for background music

### Step 2: Submit Task

Call `submitAideoTask` with:

- **prompt**: Natural language description of desired composition
- **multiInputs**: Array of all media URLs

### Step 3: Poll for Results

1. First check: Wait **210 seconds** after submission
2. Subsequent checks: Wait **30 seconds** between polls
3. Call `getAideoTaskStatus` to check progress

### Step 4: Timeout Handling

**Maximum wait time: 20 minutes**

If task exceeds 20 minutes:

- Report as timeout failure
- Suggest user try with shorter/smaller media

### Step 5: Return Results

On completion, return the output video URL to user.

## Examples

### Example 1: Merge Images into Video

**User request**: "Create a video from these 5 photos"

```
submitAideoTask:
  prompt: "Combine these images into a video, each image displays for 3 seconds with fade transition effects"
  multiInputs: ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg"]
```

### Example 2: Merge Videos with Background Music

**User request**: "Combine these clips and add background music"

```
submitAideoTask:
  prompt: "Merge these video clips into one video and add the background music"
  multiInputs: ["clip1.mp4", "clip2.mp4", "clip3.mp4", "background_music.mp3"]
```

### Example 3: Create Video Montage

**User request**: "Create a montage from my vacation videos"

```
submitAideoTask:
  prompt: "Create a dynamic video montage with smooth transitions between clips"
  multiInputs: ["vacation1.mp4", "vacation2.mp4", "vacation3.mp4"]
```

## Priority for Multi-Media Tasks

When using aideo for multi-media composition:

- **Always use aideo first** for: Images to video / Video concatenation / Audio-video merge
- Priority order: Translation > Erase > Highlight > Vision > Other

## Important Notes

- Processing time: approximately 10 minutes per 1-minute of output video
- Supports multiple input formats (MP4, MOV, JPG, PNG, MP3, etc.)
- For style transfer (comic/anime), use the `transferring-video-styles` skill instead
- Maximum wait time is 20 minutes
