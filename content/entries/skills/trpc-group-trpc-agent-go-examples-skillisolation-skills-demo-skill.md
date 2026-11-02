---
slug: trpc-group-trpc-agent-go-examples-skillisolation-skills-demo-skill
name: demo-skill
tagline: A tiny skill used by the skill isolation example.
summary: If this body shows up in the coordinator's system prompt, it indicates
  a skill state leak across agents.
categories:
  - agent-frameworks
tags:
  - a2a
  - a2a-protocol
  - ag-ui
  - agent-framework
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: examples/skillisolation/skills/demo-skill
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1893
  last_commit: 2026-11-02T07:41:24Z
  stars_delta_7d: 16
  stars_growth_pct: 0.9
  trending_score: 16.14
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1860
    - 1870
    - 1877
    - 1893
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: examples/skillisolation/skills/demo-skill/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:05:56.325Z
  truncated: false
type: agent_skill
skill:
  skill_name: demo-skill
  description: A tiny skill used by the skill isolation example.
  folder_path: examples/skillisolation/skills/demo-skill
  extra_files: []
  pack_total_skills: 24
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

This is a minimal skill.

If this body shows up in the coordinator's system prompt, it indicates a
skill state leak across agents.
