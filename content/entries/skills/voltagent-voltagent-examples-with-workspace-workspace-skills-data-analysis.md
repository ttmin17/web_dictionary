---
slug: voltagent-voltagent-examples-with-workspace-workspace-skills-data-analysis
name: Workspace Data Analyst
tagline: Analyze CSV files in the workspace and summarize insights.
summary: 1. Load the file and inspect headers. 2. Summarize totals, averages,
  and outliers. 3. Provide a short insight summary and recommended next steps.
categories:
  - agent-frameworks
tags:
  - agents
  - ai-agents
  - ai-agents-framework
  - aiagentframework
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: VoltAgent/voltagent
  subpath: examples/with-workspace/workspace/skills/data-analysis
  official_vendor: false
  license: MIT
signals:
  stars: 10934
  last_commit: 2026-11-06T14:57:04Z
  stars_delta_7d: 13
  stars_growth_pct: 0.1
  trending_score: 13.02
  rank_current: 115
  rank_delta: -8
  velocity_source: snapshot_delta
  sparkline_4w:
    - 10832
    - 10870
    - 10921
    - 10934
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: VoltAgent/voltagent
  path: examples/with-workspace/workspace/skills/data-analysis/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:19.469Z
  truncated: false
type: agent_skill
skill:
  skill_name: Workspace Data Analyst
  description: Analyze CSV files in the workspace and summarize insights.
  folder_path: examples/with-workspace/workspace/skills/data-analysis
  extra_files:
    - assets/sample.csv
    - references/schema.md
  pack_total_skills: 2
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: voltagent-voltagent
---

When analyzing CSV data:

1. Load the file and inspect headers.
2. Summarize totals, averages, and outliers.
3. Provide a short insight summary and recommended next steps.
