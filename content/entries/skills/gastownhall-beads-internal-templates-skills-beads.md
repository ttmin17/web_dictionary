---
slug: gastownhall-beads-internal-templates-skills-beads
name: beads
tagline: Use when working in a repository that uses bd or Beads for durable
  project task tracking, issue dependencies, blocker management, multi-session
  handof
summary: "If that prints nothing, check whether the repository has an active
  Beads workspace:"
categories:
  - productivity-ops
status: active
quality_percentile: 45
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: gastownhall/beads
  subpath: internal/templates/skills/beads
  official_vendor: false
  license: MIT
signals:
  stars: 27840
  last_commit: 2026-10-13T15:52:10Z
  stars_delta_7d: 133
  stars_growth_pct: 0.5
  trending_score: 133.64
  rank_current: 180
  velocity_source: snapshot_delta
  sparkline_4w:
    - 27707
    - 27840
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: gastownhall/beads
  path: internal/templates/skills/beads/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:14.628Z
  truncated: false
type: agent_skill
skill:
  skill_name: beads
  description: Use when working in a repository that uses bd or Beads for durable
    project task tracking, issue dependencies, blocker management, multi-session
    handoff, or shared work memory. Trigger when the user asks to find ready
    work, claim or close tasks, create follow-up work, inspect blockers, recover
    project context, or choose between local planning and persistent project
    tracking.
  folder_path: internal/templates/skills/beads
  extra_files:
    - agents/openai.yaml
tags: []
---

# Beads
Use Beads as the shared project task system. Local plans, scratch files, and personal memories are useful, but they are not the durable source of truth for project work.

## First Step

Run:

```bash
bd prime
```

If that prints nothing, check whether the repository has an active Beads workspace:

```bash
bd where
```

## Preferred Route

Use the `bd` CLI when shell access is available. It is the most compact and direct Beads interface.

## Core CLI Workflow

1. Find work:

```bash
bd ready
bd list --status=open
bd list --status=in_progress
```

2. Inspect before editing:

```bash
bd show <id>
```

3. Claim work atomically:

```bash
bd update <id> --claim
```

4. Create durable follow-up work when implementation reveals new tasks:

```bash
bd create "Short title" --description="Why this exists and what needs to be done" --type=task --priority=2
```

5. Close completed work:

```bash
bd close <id> --reason="Completed"
```

## What Belongs In Beads

Use Beads for:

- shared project tasks
- blockers and dependencies
- discovered follow-up work
- work that must survive thread reset, compaction, or handoff
- status that another person or agent should be able to resume

Use agent-local planning tools only for the current turn's execution checklist. Do not treat them as shared project state.

## Rules

- Do not create markdown TODO files as the source of truth when Beads is available.
- Do not use `bd edit`; it opens an interactive editor. Use `bd update` flags instead.
- Prefer `--json` when parsing `bd` output programmatically.
- If hooks are installed, `bd prime` may already be injected. Run it manually when context is missing.
- Do not auto-close or mutate tasks unless the work is actually complete.
