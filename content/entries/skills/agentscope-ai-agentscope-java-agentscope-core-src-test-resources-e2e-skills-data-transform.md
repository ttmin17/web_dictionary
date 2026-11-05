---
slug: agentscope-ai-agentscope-java-agentscope-core-src-test-resources-e2e-skills-data-transform
name: data-transform
tagline: Use this skill when the task involves converting or reformatting
  structured data between file formats such as CSV, JSON, XML, or YAML. Suitable
  for ta
summary: "- scripts/csvtojson.py — Convert a CSV file to JSON array format -
  scripts/jsontocsv.py — Flatten a JSON array into a CSV file"
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
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: agentscope-ai/agentscope-java
  subpath: agentscope-core/src/test/resources/e2e-skills/data-transform
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 6265
  last_commit: 2026-11-05T08:34:33Z
  stars_delta_7d: 144
  stars_growth_pct: 2.4
  trending_score: 147.39
  velocity_source: snapshot_delta
  sparkline_4w:
    - 6038
    - 6121
    - 6265
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agentscope-ai/agentscope-java
  path: agentscope-core/src/test/resources/e2e-skills/data-transform/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:59.722Z
  truncated: false
type: agent_skill
skill:
  skill_name: data-transform
  description: Use this skill when the task involves converting or reformatting
    structured data between file formats such as CSV, JSON, XML, or YAML.
    Suitable for tasks like "convert this CSV to JSON", "reformat my data file",
    or "change the file format of this dataset". Do NOT use for statistical
    analysis, aggregation, or report generation.
  folder_path: agentscope-core/src/test/resources/e2e-skills/data-transform
  extra_files:
    - scripts/csv_to_json.py
    - scripts/json_to_csv.py
  pack_total_skills: 19
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agentscope-ai-agentscope-java
---

# Data Transform Skill
Converts structured data files between formats (CSV ↔ JSON ↔ XML ↔ YAML).

## Available Scripts

- `scripts/csv_to_json.py` — Convert a CSV file to JSON array format
- `scripts/json_to_csv.py` — Flatten a JSON array into a CSV file

## Usage

```
python3 scripts/csv_to_json.py --input data.csv --output data.json
python3 scripts/json_to_csv.py --input data.json --output data.csv
```
