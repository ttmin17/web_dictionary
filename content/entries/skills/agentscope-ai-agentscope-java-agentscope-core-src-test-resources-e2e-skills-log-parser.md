---
slug: agentscope-ai-agentscope-java-agentscope-core-src-test-resources-e2e-skills-log-parser
name: log-parser
tagline: Use this skill when the task involves inspecting, searching, or
  extracting information from application log files. Suitable for tasks like "my
  applica
summary: "- scripts/extracterrors.py — Scan a log file and extract all
  ERROR/WARN lines with timestamps into a structured summary"
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
  subpath: agentscope-core/src/test/resources/e2e-skills/log-parser
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
  path: agentscope-core/src/test/resources/e2e-skills/log-parser/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:42.415Z
  truncated: false
type: agent_skill
skill:
  skill_name: log-parser
  description: Use this skill when the task involves inspecting, searching, or
    extracting information from application log files. Suitable for tasks like
    "my application is crashing and I need to find the errors", "scan these logs
    for warnings", "extract all exceptions from this log file", or "find slow
    requests in my server logs". Triggered by debugging, incident investigation,
    or log analysis needs.
  folder_path: agentscope-core/src/test/resources/e2e-skills/log-parser
  extra_files:
    - scripts/extract_errors.py
  pack_total_skills: 19
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agentscope-ai-agentscope-java
---

# Log Parser Skill
Parses application log files to extract errors, warnings, and patterns.

## Available Scripts

- `scripts/extract_errors.py` — Scan a log file and extract all ERROR/WARN lines with timestamps into a structured summary

## Usage

```
python3 scripts/extract_errors.py --input app.log --output errors.json
python3 scripts/extract_errors.py --input app.log --level ERROR
```
