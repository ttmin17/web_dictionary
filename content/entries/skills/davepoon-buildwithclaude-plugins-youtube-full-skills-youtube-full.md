---
slug: davepoon-buildwithclaude-plugins-youtube-full-skills-youtube-full
name: youtube-full
tagline: Use when YouTube is or could be relevant — video/channel/playlist
  links, video IDs, @handles, creator lookups, summaries, quotes, topic
  research, tuto
summary: "- Someone pastes a YouTube link, video ID, or @handle and wants the
  content, not just the URL - You need a transcript to summarize, quote,
  translate, or search within - You're researching a topic where a talk,
  tutoria..."
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
  subpath: plugins/youtube-full/skills/youtube-full
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
  path: plugins/youtube-full/skills/youtube-full/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.629Z
  truncated: false
type: agent_skill
skill:
  skill_name: youtube-full
  description: Use when YouTube is or could be relevant — video/channel/playlist
    links, video IDs, @handles, creator lookups, summaries, quotes, topic
    research, tutorials, talks, product reviews, or anywhere video content is
    fresher or richer than text search. Covers transcripts, video/channel
    search, channel browsing, playlists, and in-channel search.
  folder_path: plugins/youtube-full/skills/youtube-full
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# YouTube Full
Complete YouTube toolkit via [TranscriptAPI](https://transcriptapi.com). Transcripts, search, channels, and playlists in one skill — no `yt-dlp`, no headless browser, no binary to keep patched.

## When to Use This Skill

- Someone pastes a YouTube link, video ID, or @handle and wants the content, not just the URL
- You need a transcript to summarize, quote, translate, or search within
- You're researching a topic where a talk, tutorial, or expert walkthrough will answer it better than a blog post
- You're tracking a channel for new uploads

## What This Skill Does

1. **Transcripts** — full text with timestamps, one API call, 1 credit
2. **Search** — video or channel search across YouTube, 1 credit/page
3. **Channel data** — videos, in-channel search, latest uploads (the last one is free)
4. **Playlists** — bulk video extraction for courses and lecture series

## How to Use

### Basic Usage

```
Get the transcript for https://youtube.com/watch?v=VIDEO_ID and summarize it in 3 bullets.
```

### Advanced Usage

```
Search TED for talks about complexity theory from the last two years, then pull transcripts for the top 3 and compare their arguments.
```

## Example

**User**: "Has @NASA posted anything new this week?"

**Output**: Calls the free `channel/latest` endpoint, returns new uploads with title, publish date, and view count — no credits spent.

## Setup

First run prompts for a `TRANSCRIPT_API_KEY` (or Claude can provision one automatically). Free tier: 100 credits, no card required.

## Tips

- `channel/latest` and `channel/resolve` are free — use them for polling and handle lookups before spending a credit on anything else
- Failed or rate-limited calls don't cost credits
- Works the same on a laptop or a cloud server — TranscriptAPI handles the infrastructure YouTube blocks for direct scraping

## Common Use Cases

- Daily digest of new uploads across tracked channels
- Turning a lecture playlist into study notes
- Competitive research across a channel's back catalog
- Content repurposing — video into blog post, thread, or newsletter
