---
slug: microsoft-agent-framework-python-samples-02-agents-skills-skill_filtering-skills-length-converter
name: length-converter
tagline: Convert between common length units (miles, km, feet, meters) using a
  multiplication factor.
summary: When the user requests a length conversion, run the scripts/convert.py
  script with --value --factor .
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agentic-ai
  - agents
  - dotnet
status: active
quality_percentile: 100
selection_reason: official_vendor
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: microsoft/agent-framework
  subpath: python/samples/02-agents/skills/skill_filtering/skills/length-converter
  official_vendor: true
  license: MIT
signals:
  stars: 14546
  last_commit: 2026-11-05T12:54:54Z
  stars_delta_7d: 229
  stars_growth_pct: 1.6
  trending_score: 232.66
  velocity_source: snapshot_delta
  sparkline_4w:
    - 14200
    - 14317
    - 14546
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: microsoft/agent-framework
  path: python/samples/02-agents/skills/skill_filtering/skills/length-converter/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:55.532Z
  truncated: false
type: agent_skill
skill:
  skill_name: length-converter
  description: Convert between common length units (miles, km, feet, meters) using
    a multiplication factor.
  folder_path: python/samples/02-agents/skills/skill_filtering/skills/length-converter
  extra_files:
    - scripts/convert.py
  pack_total_skills: 12
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: microsoft-agent-framework
---

## Usage

When the user requests a length conversion, run the `scripts/convert.py`
script with `--value <number> --factor <factor>`.

Common factors:
- miles → km: 1.60934
- km → miles: 0.621371
- feet → meters: 0.3048
- meters → feet: 3.28084
