---
slug: trpc-group-trpc-agent-go-openclaw-skills-envdump
name: envdump
tagline: Dump basic environment info to out/env.txt.
summary: This skill collects basic system/environment info and writes it to out/.
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
  subpath: openclaw/skills/envdump
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
  path: openclaw/skills/envdump/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:23.536Z
  truncated: false
type: agent_skill
skill:
  skill_name: envdump
  description: Dump basic environment info to out/env.txt.
  folder_path: openclaw/skills/envdump
  extra_files:
    - scripts/envdump.sh
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

Overview

This skill collects basic system/environment info and writes it to `out/`.

Command

bash scripts/envdump.sh out/env.txt

Output Files

- out/env.txt
