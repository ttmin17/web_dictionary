---
slug: code-yeongyu-senpi-packages-coding-agent-test-fixtures-skills-multiline-description
name: multiline-description
tagline: |
  This is a multiline description.
  It spans multiple lines.
  And should be normalized.
summary: |
  This is a multiline description.
  It spans multiple lines.
  And should be normalized.
categories:
  - coding-agents
tags:
  - ai-agent
  - cli
  - coding-agent
  - llm
status: active
quality_percentile: 74
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: code-yeongyu/senpi
  subpath: packages/coding-agent/test/fixtures/skills/multiline-description
  official_vendor: false
  license: MIT
signals:
  stars: 512
  last_commit: 2026-11-05T13:00:13Z
  stars_delta_7d: 15
  stars_growth_pct: 3
  trending_score: 15.45
  velocity_source: snapshot_delta
  sparkline_4w:
    - 484
    - 497
    - 512
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: code-yeongyu/senpi
  path: packages/coding-agent/test/fixtures/skills/multiline-description/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:48.038Z
  truncated: false
type: agent_skill
skill:
  skill_name: multiline-description
  description: |
    This is a multiline description.
    It spans multiple lines.
    And should be normalized.
  folder_path: packages/coding-agent/test/fixtures/skills/multiline-description
  extra_files: []
  pack_total_skills: 18
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: code-yeongyu-senpi
---

# Multiline Description Skill
This skill tests that multiline YAML descriptions are normalized to single lines.
