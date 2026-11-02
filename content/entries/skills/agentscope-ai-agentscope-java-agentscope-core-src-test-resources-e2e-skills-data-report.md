---
slug: agentscope-ai-agentscope-java-agentscope-core-src-test-resources-e2e-skills-data-report
name: data-report
tagline: Use this skill when the task involves analyzing data to compute
  statistics, aggregations, or summaries, and presenting the results as a
  report. Suitab
summary: "- scripts/summarize.py — Compute descriptive statistics (count, mean,
  min, max, stddev) for numeric columns and output a Markdown report"
categories:
  - agent-frameworks
tags:
  - adk
  - agent-framework
  - agentic
  - agentic-ai
status: active
quality_percentile: 94
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: agentscope-ai/agentscope-java
  subpath: agentscope-core/src/test/resources/e2e-skills/data-report
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 6214
  last_commit: 2026-11-02T08:27:45Z
  stars_delta_7d: 93
  stars_growth_pct: 1.5
  trending_score: 94.41
  velocity_source: snapshot_delta
  sparkline_4w:
    - 6038
    - 6121
    - 6214
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agentscope-ai/agentscope-java
  path: agentscope-core/src/test/resources/e2e-skills/data-report/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:24.989Z
  truncated: false
type: agent_skill
skill:
  skill_name: data-report
  description: Use this skill when the task involves analyzing data to compute
    statistics, aggregations, or summaries, and presenting the results as a
    report. Suitable for tasks like "summarize this dataset", "calculate
    averages and totals", "generate a weekly sales report", or "show me trends
    in this data". Do NOT use for simple format conversion between file types.
  folder_path: agentscope-core/src/test/resources/e2e-skills/data-report
  extra_files:
    - scripts/summarize.py
  pack_total_skills: 19
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agentscope-ai-agentscope-java
---

# Data Report Skill
Analyzes structured data and generates statistical summary reports.

## Available Scripts

- `scripts/summarize.py` — Compute descriptive statistics (count, mean, min, max, stddev) for numeric columns and output a Markdown report

## Usage

```
python3 scripts/summarize.py --input data.csv --output report.md
```
