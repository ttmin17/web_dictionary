---
slug: yikart-aitoearn-project-aitoearn-backend-apps-aitoearn-ai-src-core-agent-skills-generating-drama-recaps
name: generating-drama-recaps
tagline: Generates narrated recap videos from short drama clips using AI-powered
  narration and voice synthesis. Use when user wants to create drama summary, na
summary: "- Creating narrated recaps of short dramas - Generating drama summary
  videos with voice-over - Adding AI-generated commentary to drama clips -
  Producing drama explanation/recap content"
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
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: yikart/AiToEarn
  subpath: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/generating-drama-recaps
  official_vendor: false
  license: MIT
signals:
  stars: 27298
  last_commit: 2026-11-05T08:53:59Z
  stars_delta_7d: 308
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 27298
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: yikart/AiToEarn
  path: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/generating-drama-recaps/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:11:37.187Z
  truncated: false
type: agent_skill
skill:
  skill_name: generating-drama-recaps
  description: Generates narrated recap videos from short drama clips using
    AI-powered narration and voice synthesis. Use when user wants to create
    drama summary, narrated recap, voice-over video, drama commentary, drama
    explanation video, short drama recap, drama montage with narration.
    短剧解说、短剧二创、戏剧解说、影视解说、视频解说、配音解说、AI解说视频、剧情解说、短视频解说、短剧混剪解说。
  folder_path: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/generating-drama-recaps
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: yikart-aitoearn
---

# Drama Recap Generation
Generates narrated recap videos from short drama clips using AI-powered script generation and voice synthesis.

## When to Use

Use this skill when:

- Creating narrated recaps of short dramas
- Generating drama summary videos with voice-over
- Adding AI-generated commentary to drama clips
- Producing drama explanation/recap content

## Key Features

- **AI Script Generation**: Automatically generates narration script if not provided
- **Voice Synthesis**: TTS technology for natural narration
- **Subtitle Erasure**: Removes original hardcoded subtitles (enabled by default)
- **Style Customization**: Various narration styles available
- **Batch Generation**: Generate multiple versions in one task

## Workflow

### Step 1: Collect Video Sources

**IMPORTANT: DO NOT call getVideoInfo** - URLs are auto-uploaded to VID format.

Gather video VIDs or URLs from user.

### Step 2: Submit Recap Task

Call `submitDramaRecapTask` with:

- Video VIDs (array)
- Optional: custom narration text, style, voice config

### Step 3: Poll for Results

1. First check: Wait **180 seconds** (3 minutes) after submission
2. Subsequent checks: Wait **30 seconds** between polls
3. Call `getDramaRecapTaskStatus` to check progress

### Step 4: Timeout Handling

**Maximum wait time: 20 minutes**

If task exceeds 20 minutes:

- Report as timeout failure
- Suggest user try with shorter clips

### Step 5: Return Results

On completion, return the output video URL and VID to user.

## Narration Style Options

| Style    | Description             |
| -------- | ----------------------- |
| 生动有趣 | Vivid and interesting   |
| 幽默搞笑 | Humorous and funny      |
| 悬疑紧张 | Suspenseful and tense   |
| 轻松愉快 | Light and pleasant      |
| 感人温馨 | Touching and warm       |
| 热血激昂 | Passionate and exciting |
| 浪漫甜蜜 | Romantic and sweet      |

## Examples

### Example 1: Auto-Generated Narration

```
1. submitDramaRecapTask:
   - vids: ["vid://xxx", "vid://yyy", "vid://zzz"]
   - recapStyle: "生动有趣"
   - recapTextSpeed: 1.2
2. Wait 180 seconds
3. Poll getDramaRecapTaskStatus until completed
4. Return output video URL
```

### Example 2: Custom Narration Script

```
1. submitDramaRecapTask:
   - vids: ["vid://xxx"]
   - recapText: "这是一个关于爱情与冒险的故事..."
2. Wait 180 seconds
3. Poll getDramaRecapTaskStatus until completed
4. Return output video URL
```

### Example 3: Generate Multiple Versions

```
1. submitDramaRecapTask:
   - vids: ["vid://xxx", "vid://yyy"]
   - batchGenerateCount: 3
   - recapStyle: "轻松愉快"
2. Wait 180 seconds
3. Poll getDramaRecapTaskStatus until completed
4. Return multiple output URLs
```

## Important Notes

- **DO NOT call getVideoInfo** before this task - URLs auto-upload
- Processing time: approximately **10 minutes per 1-minute** of video
- Maximum wait time is 20 minutes
- Maximum narration duration: 60 minutes
- Subtitle erasure is enabled by default
