---
slug: the-open-agent-openagent-skills-goplaces
name: goplaces
tagline: Query Google Places API (New) via the goplaces CLI for text search,
  place details, resolve, and reviews. Use for human-friendly place lookup or
  JSON o
summary: "- Homebrew: brew install steipete/tap/goplaces"
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-ai
  - agi
  - chatbot
status: active
quality_percentile: 85
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/goplaces
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5736
  last_commit: 2026-11-06T13:17:10Z
  stars_delta_7d: 6
  stars_growth_pct: 0.1
  trending_score: 6.01
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5698
    - 5712
    - 5730
    - 5736
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: the-open-agent/openagent
  path: skills/goplaces/SKILL.md
  branch: master
  fetched_at: 2026-11-09T09:27:08.040Z
  truncated: false
type: agent_skill
skill:
  skill_name: goplaces
  description: Query Google Places API (New) via the goplaces CLI for text search,
    place details, resolve, and reviews. Use for human-friendly place lookup or
    JSON output for scripts.
  folder_path: skills/goplaces
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# goplaces
Modern Google Places API (New) CLI. Human output by default, `--json` for scripts.

Install

- Homebrew: `brew install steipete/tap/goplaces`

Config

- `GOOGLE_PLACES_API_KEY` required.
- Optional: `GOOGLE_PLACES_BASE_URL` for testing/proxying.

Common commands

- Search: `goplaces search "coffee" --open-now --min-rating 4 --limit 5`
- Bias: `goplaces search "pizza" --lat 40.8 --lng -73.9 --radius-m 3000`
- Pagination: `goplaces search "pizza" --page-token "NEXT_PAGE_TOKEN"`
- Resolve: `goplaces resolve "Soho, London" --limit 5`
- Details: `goplaces details <place_id> --reviews`
- JSON: `goplaces search "sushi" --json`

Notes

- `--no-color` or `NO_COLOR` disables ANSI color.
- Price levels: 0..4 (free → very expensive).
- Type filter sends only the first `--type` value (API accepts one).
