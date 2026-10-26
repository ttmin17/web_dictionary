---
slug: trailhq-trail-code-test-fixtures-skills-ship-docs
name: ship-docs
tagline: Builds and publishes the docs site. Use when asked to ship or publish the docs.
summary: Builds and publishes the docs site. Use when asked to ship or publish the docs.
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
  subpath: test/fixtures/skills/ship-docs
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
  path: test/fixtures/skills/ship-docs/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:57.817Z
  truncated: false
type: agent_skill
skill:
  skill_name: ship-docs
  description: Builds and publishes the docs site. Use when asked to ship or
    publish the docs.
  folder_path: test/fixtures/skills/ship-docs
  extra_files: []
  pack_total_skills: 4
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trailhq-trail-code
---

# ship-docs
## Run
1. `make docs`
2. `make publish-docs`
- Run make docs-check first: a broken link fails the publish. (Priya, Oct 7)
