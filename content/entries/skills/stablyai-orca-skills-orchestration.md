---
slug: stablyai-orca-skills-orchestration
name: orchestration
tagline: "Coordinate supervised Orca workers: threaded messages, blocking
  ask/reply, task dispatch, worker_done/escalation waits, task DAGs, decision
  gates, coo"
summary: "Engage Orca orchestration whenever you need structured multi-agent
  coordination: threaded messages, blocking ask/reply flows, task dispatch,
  workerdone/escalation waits, task DAGs, decision gates, coordinator loops,
  o..."
categories:
  - agent-frameworks
tags:
  - ade
  - agent-ide
  - ai-agents
  - automation
status: active
quality_percentile: 67
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: stablyai/orca
  subpath: skills/orchestration
  official_vendor: false
  license: MIT
signals:
  stars: 106220
  last_commit: 2026-10-26T07:33:33Z
  stars_delta_7d: 9043
  stars_growth_pct: 9.3
  trending_score: 9884.51
  velocity_source: snapshot_delta
  sparkline_4w:
    - 86961
    - 91386
    - 97177
    - 106220
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: stablyai/orca
  path: skills/orchestration/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:09.714Z
  truncated: false
type: agent_skill
skill:
  skill_name: orchestration
  description: 'Coordinate supervised Orca workers: threaded messages, blocking
    ask/reply, task dispatch, worker_done/escalation waits, task DAGs, decision
    gates, coordinator loops, and decomposing work across agents. Use `orca-cli`
    for full ownership handoffs — "hand off", "handoff", "handover", "give this
    to another agent", "another worktree" — unless asked to supervise, monitor,
    or coordinate a DAG, and for terminal control, lightweight terminal prompts,
    shell commands, Orca worktree management, and reading or waiting on
    terminals.'
  folder_path: skills/orchestration
  extra_files: []
  pack_total_skills: 11
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: stablyai-orca
---

# Orca Orchestration
This file is a discovery stub, not the usage guide. The full, version-matched Orca
orchestration reference is served by the `orca` binary itself — kept out of this file on
purpose so it can never drift from the binary that will actually run your commands.

Engage Orca orchestration whenever you need structured multi-agent coordination: threaded
messages, blocking ask/reply flows, task dispatch, worker_done/escalation waits, task DAGs,
decision gates, coordinator loops, or decomposing work across agents. Use the orca-cli skill
instead for full ownership handoffs ("hand off", "handoff", "handover", "give this to
another agent", "another worktree") when the user did not ask to supervise, monitor, wait
for results, or coordinate a DAG — and for ordinary terminal control, shell commands,
worktree management, and the built-in browser. Coordination requires real Orca runtime
state; never substitute a non-Orca subagent tool.

## Resolve the CLI for this session

Choose the executable once and reuse it for every later command:

- If the `ORCA_CLI_COMMAND` environment variable is set, use its value. Orca exports this
  for managed WSL sessions.
- Otherwise, in a dev checkout whose session exposes `ORCA_DEV_REPO_ROOT`, use `orca-dev`.
- Otherwise, on Linux outside an Orca-managed terminal, use `orca-ide`. Never run bare
  `orca` there — outside Orca's terminals it normally resolves to the
  GNOME Orca screen reader (`/usr/bin/orca`) and starts speech on the user's machine.
- Otherwise, use `orca`.

Below, `ORCA` is a placeholder for the executable you resolved. Substitute it before
running anything; do not create a shell variable or run `ORCA` literally. This works the
same way in POSIX shells, PowerShell, and cmd.exe.

If the selected executable cannot run, report its exact error and stop. Do not fall through
to another executable, which could silently target a different Orca build.

## Load the version-matched guide before running Orca commands

```text
ORCA skills get orchestration
```

That prints the compact, version-matched guide for the exact binary that will handle your
next commands. It covers the normal local coordinator loop. For a conditional action gate
such as remote placement, uncertain release recovery, or expanded DAG work, load only the
reference that gate names with
`ORCA skills get orchestration --reference references/<file>.md`
(`--references` lists the names). If that binary rejects `--reference`, run
`ORCA skills get orchestration --full` and read the named bundled reference before acting.

Prefer `--json`. Use the selected executable's `--help` for commands or flags the guide does
not cover. If a command reports that Orca is not running, start it with `ORCA open --json`
and retry. If it fails with `runtime_access_denied`, your sandbox blocked the connection:
re-run it with escalated permissions, and do not run `ORCA open` or restart Orca. If
`skills get` is unknown, explain that updating Orca restores the guide; use `--help` for
read-only discovery and do not guess unsupported commands.
