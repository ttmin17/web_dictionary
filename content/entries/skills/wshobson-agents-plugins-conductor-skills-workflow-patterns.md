---
slug: wshobson-agents-plugins-conductor-skills-workflow-patterns
name: workflow-patterns
tagline: Use this skill when implementing tasks according to Conductor's TDD
  workflow, handling phase checkpoints, managing git commits for tasks, or
  understan
summary: "- Implementing tasks from a track's plan.md - Following TDD
  red-green-refactor cycle - Completing phase checkpoints - Managing git commits
  and notes - Understanding quality assurance gates - Handling verification
  prot..."
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
  subpath: plugins/conductor/skills/workflow-patterns
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
  path: plugins/conductor/skills/workflow-patterns/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.193Z
  truncated: false
type: agent_skill
skill:
  skill_name: workflow-patterns
  description: Use this skill when implementing tasks according to Conductor's TDD
    workflow, handling phase checkpoints, managing git commits for tasks, or
    understanding the verification protocol.
  folder_path: plugins/conductor/skills/workflow-patterns
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

# Workflow Patterns
Guide for implementing tasks using Conductor's TDD workflow, managing phase checkpoints, handling git commits, and executing the verification protocol that ensures quality throughout implementation.

## When to Use This Skill

- Implementing tasks from a track's plan.md
- Following TDD red-green-refactor cycle
- Completing phase checkpoints
- Managing git commits and notes
- Understanding quality assurance gates
- Handling verification protocols
- Recording progress in plan files

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Best Practices

1. **Never skip RED**: Always write failing tests first
2. **Small commits**: One logical change per commit
3. **Immediate updates**: Update plan.md right after task completion
4. **Wait for approval**: Never skip checkpoint verification
5. **Rich git notes**: Include context that helps future understanding
6. **Coverage discipline**: Don't accept coverage below target
7. **Quality gates**: Check all gates before marking complete
8. **Sequential phases**: Complete phases in order
9. **Document deviations**: Note any changes from original plan
10. **Clean state**: Each commit should leave code in working state
11. **Fast feedback**: Run relevant tests frequently during development
12. **Clear blockers**: Address blockers promptly, don't work around them
