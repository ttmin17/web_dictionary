---
slug: trailhq-trail-code-test-fixtures-skills-rotate-pages
name: rotate-pages
tagline: "Rotating PDF pages: which way is up, and where boxes land"
summary: "Rotating PDF pages: which way is up, and where boxes land"
categories:
  - coding-agents
tags:
  - ai-agents
  - anthropic
  - claude-code
  - cli
status: active
quality_percentile: 90
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: trailhq/Trail-Code
  subpath: test/fixtures/skills/rotate-pages
  official_vendor: false
  license: MIT
signals:
  stars: 10760
  last_commit: 2026-10-26T07:33:20Z
  stars_delta_7d: 348
  stars_growth_pct: 3.3
  trending_score: 359.63
  velocity_source: snapshot_delta
  sparkline_4w:
    - 10412
    - 10760
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trailhq/Trail-Code
  path: test/fixtures/skills/rotate-pages/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:57.817Z
  truncated: false
type: agent_skill
skill:
  skill_name: rotate-pages
  description: "Rotating PDF pages: which way is up, and where boxes land"
  folder_path: test/fixtures/skills/rotate-pages
  extra_files: []
  pack_total_skills: 4
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trailhq-trail-code
---

# rotate-pages
Rotating PDF pages: which way is up, and where boxes land.

## Rotation
- Read rotation with page.Rotation(), never from the raw /Rotate key. (Sam, Oct 7)
