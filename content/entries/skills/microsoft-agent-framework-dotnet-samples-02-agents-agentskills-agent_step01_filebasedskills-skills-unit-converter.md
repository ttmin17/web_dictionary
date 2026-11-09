---
slug: microsoft-agent-framework-dotnet-samples-02-agents-agentskills-agent_step01_filebasedskills-skills-unit-converter
name: unit-converter
tagline: Convert between common units using a multiplication factor. Use when
  asked to convert miles, kilometers, pounds, or kilograms.
summary: "When the user requests a unit conversion: 1. First, review
  references/conversion-table.md to find the correct factor 2. Run the
  scripts/convert.py script with --value --factor (e.g. --value 26.2 --factor
  1.60934) 3. P..."
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
  subpath: dotnet/samples/02-agents/AgentSkills/Agent_Step01_FileBasedSkills/skills/unit-converter
  official_vendor: true
  license: MIT
signals:
  stars: 14599
  last_commit: 2026-11-09T06:38:42Z
  stars_delta_7d: 53
  stars_growth_pct: 0.4
  trending_score: 53.19
  rank_current: 87
  rank_delta: -14
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
  path: dotnet/samples/02-agents/AgentSkills/Agent_Step01_FileBasedSkills/skills/unit-converter/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:38.300Z
  truncated: false
type: agent_skill
skill:
  skill_name: unit-converter
  description: Convert between common units using a multiplication factor. Use
    when asked to convert miles, kilometers, pounds, or kilograms.
  folder_path: dotnet/samples/02-agents/AgentSkills/Agent_Step01_FileBasedSkills/skills/unit-converter
  extra_files:
    - references/conversion-table.md
    - scripts/convert.py
  pack_total_skills: 12
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: microsoft-agent-framework
---

## Usage

When the user requests a unit conversion:
1. First, review `references/conversion-table.md` to find the correct factor
2. Run the `scripts/convert.py` script with `--value <number> --factor <factor>` (e.g. `--value 26.2 --factor 1.60934`)
3. Present the converted value clearly with both units
