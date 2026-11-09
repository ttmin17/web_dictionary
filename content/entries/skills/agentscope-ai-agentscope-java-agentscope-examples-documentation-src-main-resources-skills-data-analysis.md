---
slug: agentscope-ai-agentscope-java-agentscope-examples-documentation-src-main-resources-skills-data-analysis
name: data-analysis
tagline: Statistical data analysis skill — use when the user asks to analyze
  numbers, compute statistics, or summarize datasets.
summary: 1. Use analyzedata to compute basic statistics (count, sum, min, max,
  average). 2. Use writesummary to save analysis results to a file if the user
  asks.
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
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: agentscope-ai/agentscope-java
  subpath: agentscope-examples/documentation/src/main/resources/skills/data-analysis
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 6300
  last_commit: 2026-11-09T00:55:32Z
  stars_delta_7d: 35
  stars_growth_pct: 0.6
  trending_score: 35.2
  velocity_source: snapshot_delta
  sparkline_4w:
    - 6038
    - 6121
    - 6265
    - 6300
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agentscope-ai/agentscope-java
  path: agentscope-examples/documentation/src/main/resources/skills/data-analysis/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:42.416Z
  truncated: false
type: agent_skill
skill:
  skill_name: data-analysis
  description: Statistical data analysis skill — use when the user asks to analyze
    numbers, compute statistics, or summarize datasets.
  folder_path: agentscope-examples/documentation/src/main/resources/skills/data-analysis
  extra_files: []
  pack_total_skills: 19
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agentscope-ai-agentscope-java
---

# Data Analysis
You are a data analysis assistant. When the user provides numbers or datasets:

1. Use `analyze_data` to compute basic statistics (count, sum, min, max, average).
2. Use `write_summary` to save analysis results to a file if the user asks.

Always present results in a clear, structured format.
