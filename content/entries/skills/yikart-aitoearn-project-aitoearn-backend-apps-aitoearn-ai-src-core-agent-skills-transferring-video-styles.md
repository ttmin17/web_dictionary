---
slug: yikart-aitoearn-project-aitoearn-backend-apps-aitoearn-ai-src-core-agent-skills-transferring-video-styles
name: transferring-video-styles
tagline: Converts live-action videos into artistic styles like comic, anime,
  manga, 3D cartoon. Use when user wants to transform video style, create anime
  vers
summary: "- Converting videos to comic/manga style - Creating anime-style
  versions of videos - Applying 3D cartoon effects to videos - Transforming
  real-world footage into artistic styles"
categories:
  - media-creative
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
  subpath: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/transferring-video-styles
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
  path: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/transferring-video-styles/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:26:47.259Z
  truncated: false
type: agent_skill
skill:
  skill_name: transferring-video-styles
  description: Converts live-action videos into artistic styles like comic, anime,
    manga, 3D cartoon. Use when user wants to transform video style, create
    anime version, apply artistic effects, convert to cartoon style, make comic
    video, create manga style video, stylize video.
    视频风格转换、动漫风格、漫画风格、卡通风格、视频二次元化、视频风格化、AI风格转换、视频转动漫、视频转漫画。
  folder_path: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/transferring-video-styles
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: yikart-aitoearn
---

# Video Style Transfer
Converts live-action videos into artistic styles (comic, anime, 3D cartoon) using AI-powered style transfer.

## When to Use

Use this skill when:

- Converting videos to comic/manga style
- Creating anime-style versions of videos
- Applying 3D cartoon effects to videos
- Transforming real-world footage into artistic styles

## Available Styles

| Style                     | Description                | Best For                        |
| ------------------------- | -------------------------- | ------------------------------- |
| 漫画风 (Comic)            | Bold outlines, flat colors | Action scenes, dramatic content |
| 3D卡通风格 (3D Cartoon)   | Smooth 3D rendering        | Family content, cute subjects   |
| 日漫风格 (Japanese Anime) | Anime aesthetics           | Storytelling, character-focused |

## Workflow

### Step 1: Get Video Input

Obtain the video URL or VID from user. URLs will be auto-uploaded.

### Step 2: Submit Style Transfer Task

Call `submitVideoStyleTransfer` with:

- Video source
- Target style
- Output resolution

### Step 3: Poll for Results

1. First check: Wait **210 seconds** (3.5 minutes) after submission
2. Subsequent checks: Wait **30 seconds** between polls
3. Call `getVideoStyleTransferStatus` to check progress

### Step 4: Timeout Handling

**Maximum wait time: 20 minutes**

If task exceeds 20 minutes:

- Report as timeout failure
- Suggest user try with shorter video or lower resolution

### Step 5: Return Results

On completion, return the styled video URL and VID to user.

## Examples

### Example 1: Convert to Comic Style

```
1. submitVideoStyleTransfer:
   - videoInput: "https://example.com/video.mp4"
   - style: "漫画风"
   - resolution: "720p"
2. Wait 210 seconds
3. Poll getVideoStyleTransferStatus until completed
4. Return styled video URL
```

### Example 2: Create Japanese Anime Version

```
1. submitVideoStyleTransfer:
   - videoInput: "vid://xxxxx"
   - style: "日漫风格"
   - resolution: "1080p"
2. Wait 210 seconds
3. Poll getVideoStyleTransferStatus until completed
4. Return styled video URL
```

## Resolution Selection

| Resolution | Use Case                  | Processing Time |
| ---------- | ------------------------- | --------------- |
| 480p       | Quick testing, previews   | Fastest         |
| 720p       | Standard quality output   | Normal          |
| 1080p      | High quality final output | Longest         |

## Important Notes

- Processing time: approximately **10 minutes per 1-minute** of video
- Maximum wait time is 20 minutes
- Style transfer works best with clear subjects and good lighting
- Use 480p for testing, upgrade to 720p/1080p for final output
