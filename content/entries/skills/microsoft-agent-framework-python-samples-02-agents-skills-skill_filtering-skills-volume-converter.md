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
quality_percentile: 100
selection_reason: official_vendor
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: microsoft/agent-framework
  subpath: python/samples/02-agents/skills/skill_filtering/skills/volume-converter
  official_vendor: true
  license: MIT
signals:
  stars: 14599
  last_commit: 2026-11-09T06:38:42Z
  stars_delta_7d: 53
  stars_growth_pct: 0.4
  trending_score: 53.19
  velocity_source: snapshot_delta
  sparkline_4w:
    - 14200
    - 14317
    - 14546
    - 14599
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: microsoft/agent-framework
  path: python/samples/02-agents/skills/skill_filtering/skills/volume-converter/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:38.300Z
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
