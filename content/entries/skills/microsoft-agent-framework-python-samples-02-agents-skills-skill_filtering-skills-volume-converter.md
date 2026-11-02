---
slug: microsoft-agent-framework-python-samples-02-agents-skills-skill_filtering-skills-volume-converter
name: volume-converter
tagline: Convert between gallons and liters using a conversion factor.
summary: "When the user requests a volume conversion: 1. Run the
  scripts/convert.py script with --value --factor 2. Use factor 3.78541 for
  gallons → liters, or 0.264172 for liters → gallons 3. Present the converted
  value clearl..."
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agentic-ai
  - agents
  - dotnet
status: active
quality_percentile: 99
selection_reason: official_vendor
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: microsoft/agent-framework
  subpath: python/samples/02-agents/skills/skill_filtering/skills/volume-converter
  official_vendor: true
  license: MIT
signals:
  stars: 14492
  last_commit: 2026-11-02T05:12:39Z
  stars_delta_7d: 175
  stars_growth_pct: 1.2
  trending_score: 177.14
  velocity_source: snapshot_delta
  sparkline_4w:
    - 14200
    - 14317
    - 14492
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: microsoft/agent-framework
  path: python/samples/02-agents/skills/skill_filtering/skills/volume-converter/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:20.938Z
  truncated: false
type: agent_skill
skill:
  skill_name: volume-converter
  description: Convert between gallons and liters using a conversion factor.
  folder_path: python/samples/02-agents/skills/skill_filtering/skills/volume-converter
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

When the user requests a volume conversion:
1. Run the `scripts/convert.py` script with `--value <number> --factor <factor>`
2. Use factor 3.78541 for gallons → liters, or 0.264172 for liters → gallons
3. Present the converted value clearly with both units
