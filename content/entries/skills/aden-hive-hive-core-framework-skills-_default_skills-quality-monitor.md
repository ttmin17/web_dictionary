---
slug: aden-hive-hive-core-framework-skills-_default_skills-quality-monitor
name: hive.quality-monitor
tagline: Periodically self-assess output quality to catch degradation before the
  judge does.
summary: 1. On-task? Still working toward the stated objective? 2. Thorough?
  Cutting corners compared to earlier? 3. Non-repetitive? Producing new value or
  rehashing? 4. Consistent? Latest output contradict earlier decisions?...
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agent-skills
  - anthropic
  - automation
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: aden-hive/hive
  subpath: core/framework/skills/_default_skills/quality-monitor
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 11131
  last_commit: 2026-10-26T11:58:57Z
  stars_delta_7d: 9
  stars_growth_pct: 0.1
  trending_score: 9.01
  velocity_source: snapshot_delta
  sparkline_4w:
    - 11099
    - 11108
    - 11122
    - 11131
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: aden-hive/hive
  path: core/framework/skills/_default_skills/quality-monitor/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:45.645Z
  truncated: false
type: agent_skill
skill:
  skill_name: hive.quality-monitor
  description: Periodically self-assess output quality to catch degradation before
    the judge does.
  folder_path: core/framework/skills/_default_skills/quality-monitor
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: aden-hive-hive
---

## Operational Protocol: Quality Self-Assessment

Every {{assessment_interval}} iterations, self-assess:

1. On-task? Still working toward the stated objective?
2. Thorough? Cutting corners compared to earlier?
3. Non-repetitive? Producing new value or rehashing?
4. Consistent? Latest output contradict earlier decisions?
5. Complete? Tracking all items, or silently dropped some?

If degrading: write assessment to `_quality_log`, re-read `_working_notes`,
change approach explicitly. If acceptable: brief note in `_quality_log`.
