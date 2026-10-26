---
slug: trpc-group-trpc-agent-go-openclaw-skills-http_get
name: http_get
tagline: Fetch a URL with curl and write it to out/.
summary: This skill fetches a URL using curl and writes the response body to out/.
categories:
  - agent-frameworks
tags:
  - a2a
  - a2a-protocol
  - ag-ui
  - agent-framework
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: openclaw/skills/http_get
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1877
  last_commit: 2026-10-26T06:16:05Z
  stars_delta_7d: 7
  stars_growth_pct: 0.4
  trending_score: 7.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1860
    - 1870
    - 1877
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: openclaw/skills/http_get/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:23.537Z
  truncated: false
type: agent_skill
skill:
  skill_name: http_get
  description: Fetch a URL with curl and write it to out/.
  folder_path: openclaw/skills/http_get
  extra_files:
    - scripts/http_get.sh
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

Overview

This skill fetches a URL using `curl` and writes the response body to `out/`.

Command

bash scripts/http_get.sh https://example.com out/example.html

Output Files

- out/example.html
