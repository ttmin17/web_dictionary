---
slug: alirezarezvani-claude-skills-engineering-demo-video-skills-demo-video
name: demo-video
tagline: "Use when the user asks to create a demo video, product walkthrough,
  feature showcase, animated presentation, marketing video, or GIF from
  screenshots "
summary: Create polished demo videos by orchestrating browser rendering,
  text-to-speech, and video compositing. Think like a video producer — story
  arc, pacing, emotion, visual hierarchy. Turns screenshots and scene
  descriptio...
categories:
  - coding-agents
tags:
  - agent-plugins
  - agent-skills
  - agentic-ai
  - ai-coding-agent
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: alirezarezvani/claude-skills
  subpath: engineering/demo-video/skills/demo-video
  official_vendor: false
  license: MIT
signals:
  stars: 28730
  last_commit: 2026-10-23T11:30:28Z
  stars_delta_7d: 1198
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 27812
    - 28112
    - 28730
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: alirezarezvani/claude-skills
  path: engineering/demo-video/skills/demo-video/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.258Z
  truncated: false
type: agent_skill
skill:
  skill_name: demo-video
  description: Use when the user asks to create a demo video, product walkthrough,
    feature showcase, animated presentation, marketing video, or GIF from
    screenshots or scene descriptions. Orchestrates playwright, ffmpeg, and
    edge-tts MCPs to produce polished video content.
  folder_path: engineering/demo-video/skills/demo-video
  extra_files:
    - references/scene-design-system.md
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# Demo Video
You are a video producer. Not a slideshow maker. Every frame has a job. Every second earns the next.

## Overview

Create polished demo videos by orchestrating browser rendering, text-to-speech, and video compositing. Think like a video producer — story arc, pacing, emotion, visual hierarchy. Turns screenshots and scene descriptions into shareable product demos.

## When to Use This Skill

- User asks to create a demo video, product walkthrough, or feature showcase
- User wants an animated presentation, marketing video, or product teaser
- User wants to turn screenshots or UI captures into a polished video or GIF
- User says "make a video", "create a demo", "record a demo", "promo video"

## Core Workflow

### 1. Choose a rendering mode

Before starting, verify available tools:
- **playwright MCP available?** — needed for automated screenshots. Fallback: ask user to screenshot the HTML files manually.
- **edge-tts available?** — needed for narration audio. Fallback: output narration text files for user to record or use any TTS tool.
- **ffmpeg available?** — needed for compositing. Fallback: output individual scene images + audio files with manual ffmpeg commands the user can run.

If none are available, produce HTML scene files + `scenes.json` manifest + narration scripts. The user can composite manually or use any video editor.

| Mode | How | When |
|------|-----|------|
| **MCP Orchestration** | HTML → playwright screenshots → edge-tts audio → ffmpeg composite | Use when playwright + edge-tts + ffmpeg MCPs are all connected |
| **Manual** | Write HTML scene files, provide ffmpeg commands for user to run | Use when MCPs are not available |

### 2. Pick a story structure

**The Classic Demo (30-60s):**
Hook (3s) -> Problem (5s) -> Magic Moment (5s) -> Proof (15s) -> Social Proof (4s) -> Invite (4s)

**The Problem-Solution (20-40s):**
Before (6s) -> After (6s) -> How (10s) -> CTA (4s)

**The 15-Second Teaser:**
Hook (2s) -> Demo (8s) -> Logo (3s) -> Tagline (2s)

### 3. Design scenes

**If no screenshots are provided:**
- For CLI/terminal tools: generate HTML scenes with terminal-style dark background, monospace font, and animated typing effect
- For conceptual demos: use text-heavy scenes with the color language and typography system
- Ask the user for screenshots only if the product is visual and descriptions are insufficient

Every scene has exactly ONE primary focus:
- Title scenes: product name
- Problem scenes: the pain (red, chaotic)
- Solution scenes: the result (green, spacious)
- Feature scenes: the highlighted screenshot region
- End scenes: URL / CTA button

### 4. Write narration

- One idea per scene. If you need "and" you need two scenes.
- Lead with the verb. "Organize your tabs" not "Tab organization is provided."
- No jargon. "Your tabs organize themselves" not "AI-powered tab categorization."
- Use contrast. "24 tabs. One click. 5 groups."

## Output Artifacts

For each video, produce these files in a `demo-output/` directory:

1. `scenes/` — one HTML file per scene (1920x1080 viewport)
2. `narration/` — one `.txt` file per scene (for edge-tts input)
3. `scenes.json` — manifest listing scenes in order with durations and narration text
4. `build.sh` — shell script that runs the full pipeline:
   - `playwright screenshot` each HTML scene → `frames/`
   - `edge-tts` each narration file → `audio/`
   - `ffmpeg` concat with crossfade transitions → `output.mp4`

If MCPs are unavailable, still produce items 1-3. Include the ffmpeg commands in `build.sh` for the user to run manually.

## Scene Design System

See [references/scene-design-system.md](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/demo-video/skills/demo-video/references/scene-design-system.md) for the full design system: color language, animation timing, typography, HTML layout, voice options, and pacing guide.

## Quality Checklist

- [ ] Video has audio stream
- [ ] Resolution is 1920x1080
- [ ] No black frames between scenes
- [ ] First 3 seconds grab attention
- [ ] Every scene has one focus point
- [ ] End card has URL and CTA

## Anti-Patterns

| Anti-pattern | Fix |
|---|---|
| **Slideshow pacing** — every scene same duration, no rhythm | Vary durations: hooks 3s, proof 8s, CTA 4s |
| **Wall of text on screen** | Move info to narration, simplify visuals |
| **Generic narration** — "This feature lets you..." | Use specific numbers and concrete verbs |
| **No story arc** — just listing features | Use problem -> solution -> proof structure |
| **Raw screenshots** | Always add rounded corners, shadows, dark background |
| **Using `ease` or `linear` animations** | Use spring curve: `cubic-bezier(0.16, 1, 0.3, 1)` |

## Cross-References

- Related: `engineering/browser-automation` — for playwright-based browser workflows
- See also: [framecraft](https://github.com/vaddisrinivas/framecraft) — open-source scene rendering pipeline
