---
slug: wshobson-agents-plugins-conductor-skills-track-management
name: track-management
tagline: Use this skill when creating, managing, or working with Conductor
  tracks - the logical work units for features, bugs, and refactors. Applies to
  spec.m
summary: "- Creating new feature, bug, or refactor tracks - Writing or reviewing
  spec.md files - Creating or updating plan.md files - Managing track lifecycle
  from creation to completion - Understanding track status markers and..."
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/conductor/skills/track-management
  official_vendor: false
  license: MIT
signals:
  stars: 41725
  last_commit: 2026-10-26T01:08:14Z
  stars_delta_7d: 673
  stars_growth_pct: 1.6
  trending_score: 684.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
    - 41725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/conductor/skills/track-management/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.193Z
  truncated: false
type: agent_skill
skill:
  skill_name: track-management
  description: Use this skill when creating, managing, or working with Conductor
    tracks - the logical work units for features, bugs, and refactors. Applies
    to spec.md, plan.md, and track lifecycle operations.
  folder_path: plugins/conductor/skills/track-management
  extra_files:
    - references/details.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Track Management
Guide for creating, managing, and completing Conductor tracks - the logical work units that organize features, bugs, and refactors through specification, planning, and implementation phases.

## When to Use This Skill

- Creating new feature, bug, or refactor tracks
- Writing or reviewing spec.md files
- Creating or updating plan.md files
- Managing track lifecycle from creation to completion
- Understanding track status markers and conventions
- Working with the tracks.md registry
- Interpreting or updating track metadata

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Best Practices

1. **One track, one concern**: Keep tracks focused on a single logical change
2. **Small phases**: Break work into phases of 3-5 tasks maximum
3. **Verification after phases**: Always include verification tasks
4. **Update markers immediately**: Mark task status as you work
5. **Record SHAs**: Always note commit SHAs for completed tasks
6. **Review specs before planning**: Ensure spec is complete before creating plan
7. **Link dependencies**: Explicitly note track dependencies
8. **Archive, don't delete**: Preserve completed tracks for reference
9. **Size appropriately**: Keep tracks between 1-5 days of work
10. **Clear acceptance criteria**: Every requirement must be testable
