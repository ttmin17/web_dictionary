---
slug: yikart-aitoearn-project-aitoearn-backend-apps-aitoearn-ai-src-core-agent-skills-translating-videos
name: translating-videos
tagline: Translates videos including subtitles, voice cloning, and lip sync. Use
  when user wants to translate video, dub video to another language, convert vid
summary: "- Translating video content to another language - Creating dubbed
  versions of videos - Adding translated voiceover - Localizing video for
  different markets - Converting Chinese videos to English (or vice versa)"
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
  subpath: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/translating-videos
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
  path: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/translating-videos/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:26:47.259Z
  truncated: false
type: agent_skill
skill:
  skill_name: translating-videos
  description: Translates videos including subtitles, voice cloning, and lip sync.
    Use when user wants to translate video, dub video to another language,
    convert video language, localize video content, create multilingual video,
    add translated voiceover, change video audio language, or produce foreign
    language version. 视频翻译、配音翻译、字幕翻译、视频本地化、多语言视频、翻译视频、视频配音、语言转换。
  folder_path: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/translating-videos
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: yikart-aitoearn
---

# Video Translation
Translates video content to another language using AI voice cloning, lip sync, and subtitle translation.

## When to Use

Use this skill when:

- Translating video content to another language
- Creating dubbed versions of videos
- Adding translated voiceover
- Localizing video for different markets
- Converting Chinese videos to English (or vice versa)

## Features

- **AI Voice Cloning**: Preserves original speaker's voice characteristics
- **Emotion Preservation**: Maintains emotional tone in translated audio
- **Lip Sync**: Adjusts lip movements to match translated audio
- **Subtitle Translation**: Automatically translates hardcoded subtitles

## Workflow

### Step 1: Get Source Video

Obtain the video URL that needs translation.

### Step 2: Submit Translation Task

Call `submitAideoTask` with:

- **prompt**: Specify target language and translation requirements
- **multiInputs**: Array containing source video URL

### Step 3: Poll for Results

1. First check: Wait **210 seconds** after submission
2. Subsequent checks: Wait **30 seconds** between polls
3. Call `getAideoTaskStatus` to check progress

### Step 4: Timeout Handling

**Maximum wait time: 20 minutes**

If task exceeds 20 minutes, report as timeout failure.

### Step 5: Return Results

On completion, return the translated video URL.

## Examples

### Example 1: Chinese to English

**User request**: "Translate this Chinese video to English"

```
submitAideoTask:
  prompt: "Translate this Chinese video to English, including subtitle translation and voice dubbing with emotion preservation"
  multiInputs: ["chinese_video.mp4"]
```

### Example 2: English to Japanese

**User request**: "Create a Japanese version of this video"

```
submitAideoTask:
  prompt: "Translate this English video to Japanese with natural voice cloning and lip sync"
  multiInputs: ["english_video.mp4"]
```

### Example 3: Multi-language Localization

**User request**: "I need this video in Spanish"

```
submitAideoTask:
  prompt: "Translate this video to Spanish with dubbed audio and translated subtitles"
  multiInputs: ["source_video.mp4"]
```

## Supported Languages

- Chinese (Mandarin)
- English
- Japanese
- Korean
- Spanish
- And more...

## Important Notes

- Processing time varies based on video length
- Voice cloning quality depends on source audio quality
- Maximum wait time is 20 minutes
- Works best with clear audio and minimal background noise
