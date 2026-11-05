---
slug: useagenthq-useagent-docs-skills-task-convention
name: Task Convention
tagline: Track multi-step work in useAgent's durable task manager, with
  .useagent/tasks.md as an explicit repo-local or offline fallback.
summary: "- Trigger this skill when work spans multiple steps, runs, or agents.
  A single quick edit does not need a task plan. - When the taskcreate,
  tasklist, and taskupdate tools are available, useAgent's org-scoped durable
  t..."
categories:
  - productivity-ops
tags:
  - agents
  - ai-agents
  - automation
  - autonomous-agents
status: active
quality_percentile: 60
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: useagenthq/useagent
  subpath: docs/skills/task-convention
  official_vendor: false
  license: AGPL-3.0
signals:
  stars: 370
  last_commit: 2026-11-05T13:07:32Z
  stars_delta_7d: 4
  stars_growth_pct: 1.1
  trending_score: 4.04
  rank_current: 130
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 366
    - 370
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: useagenthq/useagent
  path: docs/skills/task-convention/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:51.414Z
  truncated: false
type: agent_skill
skill:
  skill_name: Task Convention
  description: Track multi-step work in useAgent's durable task manager, with
    .useagent/tasks.md as an explicit repo-local or offline fallback.
  folder_path: docs/skills/task-convention
  extra_files: []
  pack_total_skills: 1
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: useagenthq-useagent
---

# Task Convention
Track multi-step, multi-run, or multi-agent work without creating competing sources of truth.

## Overview

- Trigger this skill when work spans multiple steps, runs, or agents. A single quick edit does not need a task plan.
- When the `task_create`, `task_list`, and `task_update` tools are available, useAgent's org-scoped durable task manager is authoritative. It survives sessions, supports project and unfiled work, and is shared across harnesses.
- Use `.useagent/tasks.md` only when the user explicitly wants a git-versioned repo-local plan, when durable task tools are unavailable, or while working offline.
- Do not silently maintain both stores. When both are required, declare which is authoritative and synchronize only at explicit handoff points.

## Procedure

1. Discover the available task tools before planning. Do not guess their arguments.
2. If durable task tools are available, list existing tasks for the current project or unfiled scope before creating new ones.
3. Create one task per independently verifiable outcome. Update its status as work moves from todo to in progress to done or archived.
4. Preserve independent work: a task without a project stays unfiled rather than inventing a project name.
5. If the user requests a repo-local plan, or durable tools are unavailable, use `.useagent/tasks.md` with `## Todo`, `## In progress`, `## Done`, and append-only `## Log` sections.
6. In the markdown fallback, write tasks as `- [ ] <id>: <description>`, move them between sections, and append date-stamped decisions or blockers to the log.
7. When reconnecting after offline work, read the durable task state first. Reconcile the markdown file explicitly, recording the synchronization in its log; never overwrite newer durable state silently.
8. Commit `.useagent/tasks.md` with the code changes it describes when the file is used.

Fallback skeleton:

    # Tasks

    ## Todo
    - [ ] example-id: short description of the task

    ## In progress

    ## Done

    ## Log
    - 2026-01-01: created tasks file

## Verify

- Durable task tools were preferred when available, and all mutations used the current org-scoped tool context.
- Unfiled work remained unfiled unless the user or an existing binding selected a project.
- If `.useagent/tasks.md` was used, it contains the four required sections and reflects current work accurately.
- No hidden second tracker was created.
- If both stores were required, the response names the authoritative store and the reconciliation point is recorded.
