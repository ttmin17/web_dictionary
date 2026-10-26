---
slug: davepoon-buildwithclaude-plugins-give-claude-eyes-skills-qwen-vision
name: qwen-vision
tagline: Use when the user asks to "analyze video", "watch this video", "what
  happens in this video", "describe this clip", "review this footage", "classify
  th
summary: The bridge also handles images, useful when you want Qwen's analysis on
  screenshots, diagrams, or photos.
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/give-claude-eyes/skills/qwen-vision
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/give-claude-eyes/skills/qwen-vision/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.617Z
  truncated: false
type: agent_skill
skill:
  skill_name: qwen-vision
  description: >
    Use when the user asks to "analyze video", "watch this video", "what happens
    in this video", "describe this clip", "review this footage", "classify these
    videos", "compare videos", "analyze this image", "what's in this
    screenshot", or when the user provides a video/image file path and expects
    visual understanding. Also trigger on: "qwen", "video bridge", "multimodal
    analysis", "motion analysis", "video reference", "video breakdown", "batch
    classify", or any task requiring understanding of video content that Claude
    cannot do natively.
  folder_path: plugins/give-claude-eyes/skills/qwen-vision
  extra_files:
    - references/batch-pattern.md
    - references/prompt-tips.md
    - scripts/qwen_bridge.py
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
  pack_slug: davepoon-buildwithclaude
---

# Qwen Vision Bridge
Claude cannot natively understand video. This skill bridges that gap by calling Qwen Omni — a natively multimodal model that processes video with temporal attention (it sees motion, not just individual frames).

The bridge also handles images, useful when you want Qwen's analysis on screenshots, diagrams, or photos.

## How it works

A Python script at `${CLAUDE_PLUGIN_ROOT}/skills/qwen-vision/scripts/qwen_bridge.py` sends media files to the Qwen API and returns the analysis as text. Call it via Bash.

## Prerequisites

The user must have:
1. `DASHSCOPE_API_KEY` environment variable set (get one at https://dashscope.console.aliyun.com/ or https://modelstudio.console.alibabacloud.com/)
2. Python 3.9+ with `dashscope` package installed

If the user hasn't set up yet, suggest running `/qwen-setup` first.

## Basic usage

```bash
python3 "${CLAUDE_PLUGIN_ROOT}/skills/qwen-vision/scripts/qwen_bridge.py" "/path/to/video.mp4" "Describe what happens in this video"
```

## Parameters

| Flag | Default | Description |
|------|---------|-------------|
| (positional 1) | required | Path to video or image file |
| (positional 2) | generic prompt | Analysis prompt |
| `--fps` | 2.0 | Frames per second to sample from video. Lower = cheaper, higher = more detail |
| `--model` | qwen-omni-plus-latest | Qwen model to use |
| `--json` | off | Output as JSON (for parsing) |
| `--context` | none | Path to JSON file with previous conversation (multi-turn) |
| `--save-context` | none | Save conversation context for follow-up questions |
| `--system-prompt` | none | Custom system prompt for Qwen |
| `--prompt-file` | none | Read prompt from a file instead of argument |

## Supported formats

**Video:** .mp4, .mov, .avi, .mkv, .webm, .flv, .wmv
**Image:** .png, .jpg, .jpeg, .gif, .webp, .bmp, .tiff

## Patterns

### Single video analysis

```bash
python3 "${CLAUDE_PLUGIN_ROOT}/skills/qwen-vision/scripts/qwen_bridge.py" "/path/to/video.mp4" "Describe the character's body movement, poses, and transitions" --fps 2
```

Parse the text response and use it in your answer to the user.

### Batch analysis

When the user has multiple videos to analyze, write a Python script that loops through files and calls the bridge for each one. Use `--json` flag for machine-readable output. See `references/batch-pattern.md` for a template.

### Multi-turn (follow-up questions)

```bash
# First question
python3 "${CLAUDE_PLUGIN_ROOT}/skills/qwen-vision/scripts/qwen_bridge.py" video.mp4 "General analysis" --save-context /tmp/ctx.json

# Follow-up
python3 "${CLAUDE_PLUGIN_ROOT}/skills/qwen-vision/scripts/qwen_bridge.py" video.mp4 "Tell me more about the lighting" --context /tmp/ctx.json
```

### Image analysis

Same script, just pass an image path instead of video:

```bash
python3 "${CLAUDE_PLUGIN_ROOT}/skills/qwen-vision/scripts/qwen_bridge.py" "/path/to/screenshot.png" "What UI elements are visible in this screenshot?"
```

### Cost-saving tips

- Use `--fps 1` for long videos or when fine detail isn't needed
- Use `--fps 0.5` for very long videos (minutes+)
- For batch jobs, start with `--fps 1` and increase only if results are too vague

## Error handling

- If `DASHSCOPE_API_KEY` is not set, the script exits with a clear error message. Guide the user to set it up.
- If `dashscope` is not installed, suggest `pip install dashscope`.
- If the API returns an error, the script prints the error code and message. Common issues: invalid key, quota exceeded, unsupported file format.
- If a video file is too large for the API, suggest lowering `--fps` or trimming the video first.

## What Qwen sees vs what Claude sees

This is important context for the user: Qwen processes video frames with temporal attention — it understands motion, direction, rhythm, and transitions between frames. Claude analyzing individual screenshots cannot do this. When the user needs to understand *what happens* in a video (not just what a single frame looks like), this bridge is the right tool.

## Additional resources

- **`references/batch-pattern.md`** — template for batch video classification
- **`references/prompt-tips.md`** — effective prompts for different analysis types
