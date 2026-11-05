---
slug: yikart-aitoearn-project-aitoearn-backend-apps-aitoearn-ai-src-core-agent-skills-analyzing-videos
name: analyzing-videos
tagline: Analyzes video content and extracts highlights. Use when user wants to
  analyze video, extract highlights, create video summary, generate video
  keyword
summary: "- Analyzing video content for summary - Extracting highlight/exciting
  moments - Generating video keywords and tags - Creating trailers from longer
  videos - Understanding plot and storyline - Finding viral-worthy moments"
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
  subpath: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/analyzing-videos
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
  path: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/analyzing-videos/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:11:37.186Z
  truncated: false
type: agent_skill
skill:
  skill_name: analyzing-videos
  description: Analyzes video content and extracts highlights. Use when user wants
    to analyze video, extract highlights, create video summary, generate video
    keywords, understand video content, find best moments, create trailer,
    extract exciting clips, get video insights, or identify viral moments.
    视频分析、提取精彩片段、视频摘要、视频理解、精彩集锦、视频关键词、剪辑精华、内容分析、热门片段。
  folder_path: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/analyzing-videos
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: yikart-aitoearn
---

# Video Analysis
Analyzes video content for understanding and extracts highlight clips using AI multimodal analysis.

## When to Use

Use this skill when:

- Analyzing video content for summary
- Extracting highlight/exciting moments
- Generating video keywords and tags
- Creating trailers from longer videos
- Understanding plot and storyline
- Finding viral-worthy moments

## Analysis Capabilities

- **Visual Analysis**: Scene detection, object recognition, action identification
- **Audio Analysis**: Speech recognition, music detection, sound effects
- **Language Understanding**: Dialogue analysis, sentiment detection
- **Multimodal Fusion**: Combines all modalities for comprehensive understanding

## Workflow

### Step 1: Get Source Video

Obtain the video URL to analyze.

### Step 2: Submit Analysis Task

Call `submitAideoTask` with appropriate prompt:

- For understanding: "Analyze and summarize this video"
- For highlights: "Extract the most exciting moments"

### Step 3: Poll for Results

1. First check: Wait **210 seconds** after submission
2. Subsequent checks: Wait **30 seconds** between polls
3. Call `getAideoTaskStatus` to check progress

### Step 4: Timeout Handling

**Maximum wait time: 20 minutes**

If task exceeds 20 minutes, report as timeout failure.

### Step 5: Return Results

Results vary by task type:

- **Understanding**: Summary, keywords, plot analysis (JSON)
- **Highlights**: Array of highlight clip URLs

## Examples

### Example 1: Extract Highlights

**User request**: "Create a 30-second highlight reel from this video"

```
submitAideoTask:
  prompt: "Extract the most exciting moments from this video to create a 30-second highlight compilation"
  multiInputs: ["source_video.mp4"]
```

### Example 2: Video Understanding

**User request**: "Analyze this video and give me a summary"

```
submitAideoTask:
  prompt: "Analyze this video content and generate: summary, keywords, and plot analysis"
  multiInputs: ["video.mp4"]
```

### Example 3: Create Trailer

**User request**: "Make a trailer from this long video"

```
submitAideoTask:
  prompt: "Extract the most engaging and exciting moments to create a compelling trailer"
  multiInputs: ["long_video.mp4"]
```

### Example 4: Find Viral Moments

**User request**: "Find the best clips for social media"

```
submitAideoTask:
  prompt: "Identify and extract the most viral-worthy moments from this video for social media"
  multiInputs: ["content_video.mp4"]
```

## Output Types

### Highlight Extraction

- Returns array of clip URLs
- Each clip contains exciting/engaging moment
- Clips can be used directly or further edited

### Video Understanding

- **Summary**: Brief description of video content
- **Keywords**: Relevant tags and topics
- **Plot Analysis**: Story structure and key events

## Important Notes

- Maximum video length: 2 hours
- Maximum wait time: 20 minutes
- Highlight extraction returns multiple clip URLs
- Understanding returns JSON with summary, keywords, plot
- Processing time: ~10 minutes per 1-minute video
