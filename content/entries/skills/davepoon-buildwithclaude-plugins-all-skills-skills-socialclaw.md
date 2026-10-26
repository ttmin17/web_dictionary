---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-socialclaw
name: socialclaw
tagline: Social media scheduling and publishing for AI agents. Use when the user
  wants to schedule posts, connect social accounts, upload media, or publish cam
summary: "This skill teaches Claude Code how to: - Validate a workspace API key
  and confirm SocialClaw access - Connect and disconnect social accounts via
  browser OAuth - Upload media assets and get SocialClaw-hosted delivery U..."
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
  subpath: plugins/all-skills/skills/socialclaw
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
  path: plugins/all-skills/skills/socialclaw/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.596Z
  truncated: false
type: agent_skill
skill:
  skill_name: socialclaw
  description: Social media scheduling and publishing for AI agents. Use when the
    user wants to schedule posts, connect social accounts, upload media, or
    publish campaigns to X, LinkedIn, Instagram, Facebook Pages, TikTok,
    Discord, Telegram, YouTube, Reddit, WordPress, or Pinterest through
    SocialClaw.
  folder_path: plugins/all-skills/skills/socialclaw
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# SocialClaw
SocialClaw is a workspace-scoped social publishing service at `https://getsocialclaw.com`.

This skill teaches Claude Code how to:
- Validate a workspace API key and confirm SocialClaw access
- Connect and disconnect social accounts via browser OAuth
- Upload media assets and get SocialClaw-hosted delivery URLs
- Validate, preview, apply, and inspect scheduled posts and campaigns
- Inspect account capabilities, publish settings, analytics, and workspace health

## Runtime Requirements

- `SC_API_KEY` — workspace API key from the SocialClaw dashboard
- CLI (optional): `npm install -g socialclaw`
- Active trial or paid plan required for CLI/API execution

## Quick Start

```bash
# Get a workspace API key
open https://getsocialclaw.com/dashboard

# Set it in your environment
export SC_API_KEY="<workspace-key>"

# Or use the CLI
socialclaw login --api-key <workspace-key>

# List connected accounts
socialclaw accounts list --json

# Upload media and schedule a post
socialclaw assets upload --file ./image.png --json
socialclaw validate -f schedule.json --json
socialclaw apply -f schedule.json --json
```

## Supported Providers

X, LinkedIn (profile + page), Instagram (Business + standalone), Facebook Pages, TikTok, Discord, Telegram, YouTube, Reddit, WordPress, Pinterest

## Install as Skill

```bash
npx skills add ndesv21/socialclaw
```

## Key Commands

```bash
socialclaw login                                          # Authenticate with workspace API key
socialclaw accounts list --json                          # List connected accounts
socialclaw accounts connect --provider x --open          # Connect X account
socialclaw assets upload --file ./image.png --json       # Upload media
socialclaw validate -f schedule.json --json              # Validate schedule
socialclaw apply -f schedule.json --json                 # Apply schedule / create run
socialclaw status --run-id <id> --json                   # Check run status
socialclaw posts list --json                             # List posts
socialclaw analytics post --post-id <id> --json          # Post analytics
socialclaw workspace health --json                       # Workspace health
```

## Links

- GitHub: https://github.com/ndesv21/socialclaw
- Dashboard: https://getsocialclaw.com/dashboard
- npm: https://www.npmjs.com/package/socialclaw
