---
slug: jetbrains-thinkrail-packages-pi-thinkrail-workflow-skills-setting-up-a-project
name: setting-up-a-project
tagline: Use when asked to set up, onboard, initialize, or spec a project with
  no spec graph, or when invoked by the app's Set-up-project card. Not for
  ordinar
summary: "- Is there already a spec graph (a goal-and-requirements.md or any
  SPEC.md)? - Is there real source code, or is the repo empty / near-empty (just
  a README or scaffolding)?"
categories:
  - productivity-ops
tags:
  - agent-skills
  - agentic-ai
  - agentic-workflow
  - ai-coding
status: active
quality_percentile: 56
selection_reason: quality_percentile
first_seen: 2026-11-16
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: JetBrains/thinkrail
  subpath: packages/pi-thinkrail-workflow/skills/setting-up-a-project
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 8293
  last_commit: 2026-11-16T09:07:55Z
  stars_delta_7d: 443
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 8293
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: JetBrains/thinkrail
  path: packages/pi-thinkrail-workflow/skills/setting-up-a-project/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:30.932Z
  truncated: false
type: agent_skill
skill:
  skill_name: setting-up-a-project
  description: Use when asked to set up, onboard, initialize, or spec a project
    with no spec graph, or when invoked by the app's Set-up-project card. Not
    for ordinary work in an already-specced project.
  folder_path: packages/pi-thinkrail-workflow/skills/setting-up-a-project
  extra_files: []
  pack_total_skills: 13
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jetbrains-thinkrail
---

# Setting up a project — dispatcher
The single entry point for turning a project into a spec graph. Figure out which situation you're in, then
follow the matching skill — don't improvise the flow yourself.

## 1. Detect

Look at the workspace and use the spec tools (`spec_grep` / `spec_graph`):

- Is there already a spec graph (a `goal-and-requirements.md` or any `SPEC.md`)?
- Is there real source code, or is the repo empty / near-empty (just a README or scaffolding)?

## 2. Route

| Situation | Follow |
|---|---|
| **Already has specs** | Don't redo it. Briefly offer to review/extend the graph (fill obvious gaps — a missing `architecture.md`, un-specced modules). Other work routes as usual: features, behavior changes, and bug fixes through `brainstorming`; work that changes no behavior proceeds directly. Declined → stop. Accepted → **Graph extension** below. |
| **No specs · empty / near-empty repo** | The **`starting-a-new-project`** skill — interview the user to turn the idea into `goal-and-requirements.md`. |
| **No specs · real source code** | The **`importing-a-codebase`** skill — analyze the code + agent files and draft the first spec graph, asking only for intent the code can't reveal. |

Read and follow that skill's steps.

## Graph extension (no dedicated skill)

No dedicated skill covers extending an existing graph. If the offer is accepted, align and adapt to
the user's request with your own judgment, holding the **writing-specs** bar without a routing
announcement.

## Handoff

Ends by naming exactly one of: **starting-a-new-project**, **importing-a-codebase**, or — when specs
already exist — the review/extend offer above (declined → stop; accepted → graph extension on
judgment against the **writing-specs** bar).
