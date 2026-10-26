---
slug: ruvnet-ruflo-plugins-ruflo-ai-team-directory-skills-launch-ai-team
name: launch-ai-team
tagline: Plans and creates an AI team for a goal, with roles, a run that carries
  a unit budget, and bounded tasks. Use when the user asks to start, set up or s
summary: 1. Clarify the outcome, acceptance criteria, constraints, deadline, and
  the maximum units for the run (a whole number from 1 to 100, default 25).
  Units are a recorded budget, not a billed or enforced limit. 2. List th...
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-ai-team/directory/skills/launch-ai-team
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-ai-team/directory/skills/launch-ai-team/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.542Z
  truncated: false
type: agent_skill
skill:
  skill_name: launch-ai-team
  description: Plans and creates an AI team for a goal, with roles, a run that
    carries a unit budget, and bounded tasks. Use when the user asks to start,
    set up or staff a team, or to split a larger goal across roles. Records
    coordination state only; nothing is executed.
  folder_path: plugins/ruflo-ai-team/directory/skills/launch-ai-team
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Launch AI Team
Uses the RuFlo AI Team connector (server name ruflo-ai-team): the tools team_templates_list, team_create, run_create and task_create. If the connector is not connected or the user has not signed in, say so and ask them to connect it; do not pretend a team was created.

1. Clarify the outcome, acceptance criteria, constraints, deadline, and the maximum units for the run (a whole number from 1 to 100, default 25). Units are a recorded budget, not a billed or enforced limit.
2. List the templates (research-brief, release-readiness, security-review) and propose no more than three roles; a team may hold up to eight.
3. Show the team, tasks, budget, risks, and what this service cannot do: it does not run agents, send, publish, deploy, purchase, or execute commands.
4. Create the team only after the user accepts the plan.
5. Create a run, then small tasks that each have one deliverable and one owner role. Recording a task does not execute it; say who or what will do the work.
6. Never put credentials or secrets in a team, run, or task.
7. Next: use the coordinate-team-work skill to assign and track the tasks, and the monitor-ai-team skill for status.
