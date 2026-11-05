---
slug: kungfu-systems-kungfu-framework-skill-fixtures-minimal
name: minimal
tagline: Agent skill from kungfu-systems/kungfu
summary: Use this when a user asks why a Kungfu trace, replay, adapter, or
  journal write failed.
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agent-memory
  - agent-orchestration
  - memory
status: active
quality_percentile: 94
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: kungfu-systems/kungfu
  subpath: framework/skill/fixtures/minimal
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 4540
  last_commit: 2026-10-31T06:41:20Z
  stars_delta_7d: 7
  stars_growth_pct: 0.2
  trending_score: 7.01
  velocity_source: snapshot_delta
  sparkline_4w:
    - 4531
    - 4533
    - 4540
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: kungfu-systems/kungfu
  path: framework/skill/fixtures/minimal/SKILL.md
  branch: dev/v4/v4.0
  fetched_at: 2026-11-05T13:13:56.605Z
  truncated: false
type: agent_skill
skill:
  skill_name: minimal
  description: Agent skill from kungfu-systems/kungfu
  folder_path: framework/skill/fixtures/minimal
  extra_files: []
  pack_total_skills: 4
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: kungfu-systems-kungfu
---

# Trace Failure Investigator
Help an agent inspect a failed trace run, identify likely failure layers, and
produce a short audit note.

Use this when a user asks why a Kungfu trace, replay, adapter, or journal write
failed.
