---
slug: davepoon-buildwithclaude-plugins-gsd-skills-explore
name: gsd:explore
tagline: Socratic ideation and idea routing — think through ideas before
  committing to plans
summary: Open-ended Socratic ideation session. Guides the developer through
  exploring an idea via probing questions, optionally spawns research, then
  routes outputs to the appropriate GSD artifacts (notes, todos, seeds,
  resear...
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/gsd/skills/explore
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/gsd/skills/explore/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.618Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:explore
  description: Socratic ideation and idea routing — think through ideas before
    committing to plans
  folder_path: plugins/gsd/skills/explore
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

<objective>
Open-ended Socratic ideation session. Guides the developer through exploring an idea via
probing questions, optionally spawns research, then routes outputs to the appropriate GSD
artifacts (notes, todos, seeds, research questions, requirements, or new phases).

Accepts an optional topic argument: `/gsd:explore authentication strategy`
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/explore.md
</execution_context>

<process>
Execute the explore workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/explore.md end-to-end.
</process>
