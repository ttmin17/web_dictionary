---
slug: agricidaniel-claude-blog-skills-blog-audio
name: blog-audio
tagline: Agent skill from AgriciDaniel/claude-blog
summary: Agent skill from AgriciDaniel/claude-blog
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-citations
  - ai-content
  - ai-marketing
status: active
quality_percentile: 58
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-19T07:41:42.374Z
source:
  kind: github_repo
  repo: AgriciDaniel/claude-blog
  subpath: skills/blog-audio
  official_vendor: false
  license: MIT
signals:
  stars: 2424
  last_commit: 2026-10-14T08:51:33Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: snapshot_delta
  sparkline_4w:
    - 2340
    - 2376
    - 2424
    - 2424
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: AgriciDaniel/claude-blog
  path: skills/blog-audio/SKILL.md
  branch: main
  fetched_at: 2026-10-19T07:41:11.314Z
  truncated: false
type: agent_skill
skill:
  skill_name: blog-audio
  description: Agent skill from AgriciDaniel/claude-blog
  folder_path: skills/blog-audio
  extra_files:
    - references/voices.md
    - scripts/__init__.py
    - scripts/generate_audio.py
    - scripts/requirements.lock
    - scripts/requirements.txt
    - scripts/run.py
    - scripts/runtime_paths.py
    - scripts/setup_environment.py
  pack_total_skills: 33
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agricidaniel-claude-blog
---

# Blog Audio: Gemini TTS Narration for Blog Posts
Generate professional audio narration of blog content using Google's Gemini TTS.
Three modes: summary (200-300 word spoken overview), full article read-aloud,
or two-speaker podcast dialogue. 30 voices, 80+ languages, HTML5 embed output.

## Quick Reference

| Command | What it does |
|---------|-------------|
| `/blog audio generate <file>` | Generate audio narration of a blog post |
| `/blog audio voices` | Show available voices with characteristics |
| `/blog audio setup` | Check/configure API key for Gemini TTS |

## Prerequisites

- Python 3.11+ (venv managed automatically by `run.py`)
- `GOOGLE_AI_API_KEY` environment variable (same key used by blog-image)
- FFmpeg (for WAV-to-MP3 conversion; falls back to WAV if missing)

## Always Use run.py Wrapper

```bash
# CORRECT:
python3 scripts/run.py generate_audio.py --text "..." --voice Charon --json

# WRONG:
python3 scripts/generate_audio.py --text "..."  # Fails without venv
```

## API Key Check (Gate Pattern)

Before generating audio, check for the API key:

```bash
test -n "${GOOGLE_AI_API_KEY:-}" && echo "GOOGLE_AI_API_KEY is set" || echo "GOOGLE_AI_API_KEY is not set"
```

- If set: proceed with generation
- If not set: guide the user:
  "Audio generation requires a Google AI API key. Get one free at https://aistudio.google.com/apikey
   Then set it: `export GOOGLE_AI_API_KEY=your-key`
   This can be the same key used by `/blog image`, but it must be exported in the shell."
- **When called internally** (from blog-write): return silently if key is missing.
  Never block the writing workflow.

## Setup

For `/blog audio setup`:

1. Check if `GOOGLE_AI_API_KEY` is set in environment
2. If blog-image uses project `.mcp.json`, confirm the referenced env var is exported
3. If not, guide user to https://aistudio.google.com/apikey
4. Verify with a dry run: `python3 scripts/run.py generate_audio.py --text "Test" --dry-run --json`

## Voice Selection

For `/blog audio voices`:

Load `references/voices.md` and present the voice catalog to the user.

Ask the user which voice they prefer, or recommend based on content type:
- **Article narration**: Charon (Informative) or Sadaltager (Knowledgeable)
- **Tutorial/how-to**: Achird (Friendly) or Sulafat (Warm)
- **News/analysis**: Rasalgethi (Informative) or Schedar (Even)
- **Lifestyle/wellness**: Aoede (Breezy) or Vindemiatrix (Gentle)
- **Dialogue host**: Puck (Upbeat) or Laomedeia (Upbeat)
- **Dialogue expert**: Kore (Firm) or Charon (Informative)

## Generation Workflow

For `/blog audio generate <file>`:

### Step 1: Read the Blog Post

Read the file and extract:
- Title (from H1 or frontmatter)
- Full content (markdown body)
- Approximate word count

### Step 2: Choose Mode

Ask the user (or auto-select if they specified `--mode`):

| Mode | When to use | Output |
|------|-------------|--------|
| **Summary** | Quick audio overview (1-2 min) | 200-300 word spoken summary |
| **Full** | Complete read-aloud (5-15 min) | Full article as natural speech |
| **Dialogue** | Podcast-style (3-8 min) | Two-person conversation about the article |

### Step 3: Prepare Text

Claude prepares the text; the script does TTS only.

**Summary mode:**
Write a 200-300 word spoken summary of the article. Rules:
- Write as natural speech, not written text
- Open with the article's key finding or answer
- Cover 3-5 main takeaways
- Close with actionable advice
- No markdown, no "In this article...", no meta-commentary
- Use conversational transitions ("Here's what matters...", "The key finding is...")

**Full mode:**
Strip the markdown content to clean spoken text:
- Headings become natural transitions ("Next, let's look at...")
- Links become plain text (remove URLs, keep anchor text)
- Images and charts: omit or briefly describe ("As the data shows...")
- Code blocks: describe verbally ("The code uses a for-loop to...")
- Lists: convert to natural sentences
- Remove frontmatter, schema markup, HTML tags
- Add brief intro: "This is [title], published on [date]."

**Dialogue mode:**
Write a 2-person conversation script about the article:
- Speaker1 = Host (curious, asks good questions)
- Speaker2 = Expert (knowledgeable, gives clear answers)
- Format each line as: `Speaker1: What's the key takeaway here?`
- Cover the article's main points conversationally
- 15-25 exchanges (produces ~3-8 minutes)
- Natural, not stilted ("That's a great point" over "Indeed, as the research indicates")

### Step 4: Select Voice

If the user chose a voice, use it. Otherwise, recommend based on mode:
- Summary/Full: default to Charon (Informative)
- Dialogue: default to Puck (Host) + Kore (Expert)

### Step 5: Generate Audio

Write the prepared text to a file under the working directory, then call:

```bash
# Single voice (summary or full mode)
python3 scripts/run.py generate_audio.py \
  --text-file blog_audio_prepared.txt \
  --voice Charon \
  --model flash \
  --output audio/post-slug.mp3 \
  --json

# Two voices (dialogue mode)
python3 scripts/run.py generate_audio.py \
  --text-file blog_audio_dialogue.txt \
  --voice Puck \
  --voice2 Kore \
  --model pro \
  --output audio/post-slug-dialogue.mp3 \
  --json
```

**Model selection:**
- `flash` (default): maps to `gemini-3.1-flash-tts-preview`, good for summaries and standard narration.
- `flash31`: explicit alias for `gemini-3.1-flash-tts-preview`.
- `legacy-flash25`: retained only for older compatibility.
- `pro` or `legacy-pro25`: maps to `gemini-2.5-pro-preview-tts`, use only when needed.

### Step 6: Deliver

Present the result to the user:
1. **File path**: where the audio was saved
2. **Duration**: human-readable (e.g., "3:42")
3. **Embed code**: ready-to-paste HTML5 audio tag
4. **Cost**: estimated API cost
5. **Placement suggestion**: where to insert the embed in the blog post

## Embedding Guide

### Standard HTML (Hugo, Jekyll, static sites)
```html
<audio controls preload="metadata">
  <source src="audio/post-slug.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>
```

### MDX (Next.js, Gatsby)
```jsx
<audio controls preload="metadata">
  <source src="/audio/post-slug.mp3" type="audio/mpeg" />
</audio>
```

### WordPress
```
[audio src="audio/post-slug.mp3"]
```

### Placement
Insert the audio player after the introduction (below the first H2) or at the
very top of the article with a label: "Listen to this article" or "Audio version".

## Internal API (for blog-write)

When invoked internally from blog-write:

**Input:**
- `text`: Prepared text (already cleaned by Claude)
- `voice`: Voice name (default: Charon)
- `voice2`: Second voice for dialogue (optional)
- `model`: flash or pro
- `output_path`: Where to save the file

**Output:**
```markdown
### Audio Narration
- **Path:** /path/to/audio/post-slug.mp3
- **Duration:** 3:42
- **Voice:** Charon
- **Embed:** `<audio controls preload="metadata"><source src="audio/post-slug.mp3" type="audio/mpeg"></audio>`
```

**Graceful fallback:** If `GOOGLE_AI_API_KEY` is not set, return immediately
with no error. The writing workflow continues without audio. Never block
blog-write because audio generation is unavailable.

## Error Handling

| Error | Resolution |
|-------|-----------|
| GOOGLE_AI_API_KEY not set | Get key at https://aistudio.google.com/apikey |
| FFmpeg not found | Install: `sudo apt install ffmpeg`. Falls back to WAV output. |
| Rate limited | Wait and retry. Check limits at https://aistudio.google.com/rate-limit |
| Text too long (>8,192 input tokens) | Split into sections around 7,800 tokens; the script chunks and stitches prepared text |
| Unknown voice name | Run `/blog audio voices` to see valid options |
| API error | Check key validity and model availability |
| API key missing (internal call) | Return silently: writing workflow continues |

## Reference Documentation

Load on-demand: do NOT load all at startup:
- `references/voices.md`: Full 30-voice catalog, recommendations by content type, dialogue pairings
