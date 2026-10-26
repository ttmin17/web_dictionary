---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-pressreleasesonline
name: pressreleasesonline
tagline: Draft and publish AI-powered press releases — submit a URL + notes, get
  a live release page instantly. Free, no API key required.
summary: "- User wants to announce a product launch, feature, or milestone -
  User wants to generate a press release draft from a website URL - User wants
  to publish a press release without signing up for a service"
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
  subpath: plugins/all-skills/skills/pressreleasesonline
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
  path: plugins/all-skills/skills/pressreleasesonline/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.593Z
  truncated: false
type: agent_skill
skill:
  skill_name: pressreleasesonline
  description: Draft and publish AI-powered press releases — submit a URL + notes,
    get a live release page instantly. Free, no API key required.
  folder_path: plugins/all-skills/skills/pressreleasesonline
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# pressreleases.online
Draft and publish press releases using AI. Submit a URL and some notes, get a polished release page with RSS feed and sitemap — no account, no API key, completely free.

## When to Use This Skill

- User wants to announce a product launch, feature, or milestone
- User wants to generate a press release draft from a website URL
- User wants to publish a press release without signing up for a service

## What This Skill Does

1. Accepts a URL and optional notes/instructions
2. Uses AI to draft a professional press release
3. Publishes it as a live page with its own URL, RSS feed, and sitemap

## Usage

```bash
# Submit a URL for AI-drafted press release
curl -X POST https://pressreleases.online/api/v1/releases \
  -H "Content-Type: application/json" \
  -d '{"website": "https://example.com", "email": "you@example.com", "notes": "Announcing our v2 launch"}'

# Confirm with email code (last 4 chars of md5(email))
curl -X POST https://pressreleases.online/api/v1/releases/confirm \
  -H "Content-Type: application/json" \
  -d '{"token": "<token from above>", "code": "<4-char code from email>"}'
```

## Resources

- Website: https://pressreleases.online
- API docs: https://pressreleases.online/skills.md
