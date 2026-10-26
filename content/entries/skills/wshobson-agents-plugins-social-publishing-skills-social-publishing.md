---
slug: wshobson-agents-plugins-social-publishing-skills-social-publishing
name: social-publishing
tagline: Schedule and publish social media posts across 13 platforms (X,
  LinkedIn, Instagram, Facebook Pages, TikTok, Discord, Telegram, YouTube,
  Reddit, WordP
summary: "Use this skill when the user wants to: - Publish or schedule posts
  across multiple social media platforms - Orchestrate a multi-platform content
  campaign - Upload and attach media to social posts - Retrieve post-level..."
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/social-publishing/skills/social-publishing
  official_vendor: false
  license: MIT
signals:
  stars: 41725
  last_commit: 2026-10-26T01:08:14Z
  stars_delta_7d: 673
  stars_growth_pct: 1.6
  trending_score: 684.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
    - 41725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/social-publishing/skills/social-publishing/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.205Z
  truncated: false
type: agent_skill
skill:
  skill_name: social-publishing
  description: >
    Schedule and publish social media posts across 13 platforms (X, LinkedIn,
    Instagram, Facebook Pages, TikTok, Discord, Telegram, YouTube, Reddit,
    WordPress, Pinterest) via the SocialClaw API. Use when the user wants to
    publish, schedule, or manage social media content programmatically. Requires
    SOCIALCLAW_API_KEY.
  folder_path: plugins/social-publishing/skills/social-publishing
  extra_files: []
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Social Publishing
Agent-first social media publishing via [SocialClaw](https://getsocialclaw.com). One workspace API key, 13 platforms, zero per-platform OAuth setup.

## When to Use This Skill

Use this skill when the user wants to:
- Publish or schedule posts across multiple social media platforms
- Orchestrate a multi-platform content campaign
- Upload and attach media to social posts
- Retrieve post-level engagement analytics
- Manage a content calendar programmatically

## Supported Platforms

| Platform | Notes |
|----------|-------|
| X (Twitter) | Profile posts, threads |
| LinkedIn | Profile posts + Company pages |
| Instagram | Business + standalone accounts |
| Facebook Pages | Page posts with link previews |
| TikTok | Video descriptions |
| Discord | Channel targeting, embeds |
| Telegram | Channel/group messaging |
| YouTube | Video descriptions and metadata |
| Reddit | Subreddit posts with flair |
| WordPress | Blog posts with SEO metadata |
| Pinterest | Pins with board targeting |

## Setup

```bash
# Install via npx
npx skills add ndesv21/socialclaw

# Or install as package
npm install socialclaw@0.1.12

# Set your workspace API key
export SOCIALCLAW_API_KEY=your_key_here
```

Get a workspace API key at [getsocialclaw.com](https://getsocialclaw.com).

## Workflow

### Step 1: Define Campaign
Specify platforms, message content, schedule, and any media attachments.

### Step 2: Draft Platform Variants
Claude generates platform-optimized copy for each channel (character limits, hashtag norms, tone).

### Step 3: Upload Media (Optional)
Upload images or videos once — SocialClaw stores them for reuse across platforms.

### Step 4: Validate Schedule
Claude checks platform-specific timing rules and rate limits before submitting.

### Step 5: Publish or Schedule
Posts queue via the SocialClaw API. Receive post IDs and scheduled times for confirmation.

### Step 6: Analytics
Pull engagement metrics (impressions, clicks, reactions) 24–48 hours after publishing.

## Usage Examples

### Single Platform Post
```
Post to our company LinkedIn page:
"Excited to announce our Q2 product roadmap — here's what's coming next.
[roadmap image]"
```

### Multi-Platform Campaign
```
Announce our beta launch on X, LinkedIn, Instagram, and Discord.
Message: "Our beta is live! 100 spots available — sign up at example.com #launch"
Schedule for tomorrow 9am PST
```

### Content Series
```
Create a 5-day drip campaign for our feature launch week.
Platforms: X and LinkedIn.
I'll provide copy for each day.
```

## Guidelines

1. **One key, all platforms** — SOCIALCLAW_API_KEY authenticates across all connected accounts
2. **Platform-native copy** — Adapt tone and format for each platform rather than copy-pasting
3. **Validate timing** — Always confirm schedule before submission to avoid rate limit errors
4. **Media reuse** — Upload assets once and reference by ID across multiple posts

## Limitations

- Requires active SocialClaw account with connected social accounts
- Platform availability depends on workspace tier
- Some platforms require video content for optimal reach (TikTok, YouTube, Instagram Reels)
