---
slug: amelnagdy-delegate-skills-skills-cline-delegate
name: cline-delegate
tagline: Delegate a coding task to the Cline coding agent CLI (`cline`) as a
  background implementer, then review its diff and land it yourself. Use this
  whenev
summary: The loop needs only a shell command and file access, so any comparable
  orchestrator can drive it.
categories:
  - coding-agents
status: active
quality_percentile: 34
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: amElnagdy/delegate-skills
  subpath: skills/cline-delegate
  official_vendor: false
  license: MIT
signals:
  stars: 2372
  last_commit: 2026-10-07T15:35:08Z
  stars_delta_7d: 88
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 2372
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: amElnagdy/delegate-skills
  path: skills/cline-delegate/SKILL.md
  branch: master
  fetched_at: 2026-10-14T14:55:19.699Z
  truncated: false
type: agent_skill
skill:
  skill_name: cline-delegate
  description: Delegate a coding task to the Cline coding agent CLI (`cline`) as a
    background implementer, then review its diff and land it yourself. Use this
    whenever the user wants to delegate implementation work to Cline - phrasings
    like "have Cline implement X", "delegate this to cline", "run it through
    Cline", or "use cline to implement/fix/refactor" - or wants to run a queue
    of coding tasks through Cline while staying the reviewer. DO NOT USE for
    tasks small enough to do inline, or when the user wants the code written
    directly without delegating.
  folder_path: skills/cline-delegate
  extra_files:
    - references/dispatch-and-poll.md
    - references/multi-task-queues.md
    - references/review-and-land.md
    - references/writing-the-brief.md
    - scripts/relay.mjs
tags: []
---

# Cline Delegate
You are the **orchestrator**. Delegate a bounded coding task to a separate **implementer** - the Cline
coding agent CLI - then review what it produced and land it yourself. You write the brief and own
the judgment; the implementer makes changes in its own session in a clean working tree; you verify
and commit.

The loop needs only a shell command and file access, so any comparable orchestrator can drive it.

## When NOT to use this

- The task is small enough to do inline; delegation overhead is not worth it.
- The `cline` CLI is not installed or authenticated.
- You require the relay to configure a sandbox. Cline exposes sandbox controls, but this relay
  leaves them to the CLI environment; use `--plan` when the run must be read-only.

## Prerequisites (check once)

1. Install `cline` (npm or bundled binary; the relay probes `cline --version`).
2. Authenticate: run `cline auth` (interactive sign-in), or configure
   `ANTHROPIC_API_KEY` / an OpenAI-compatible base URL.
3. Confirm `cline --version` succeeds.
4. Work in, or point `--cd` at, the target git repository.

## Choose the model (optional)

Cline picks a default model. To choose another, pass the separate `--model <id>` or `--provider <name>`
(e.g. `anthropic`, `openai-native`, `openrouter`). The relay accepts letters, digits,
and `. _ : / -` only (the value reaches a shell on Windows).

## The loop

Run these five steps per task. Steps 1, 4, and 5 require judgment; 2 and 3 are mechanical.

### 1. Write a brief

Cline sees only the text you send. It cannot read your conversation: the brief must stand alone
with the goal, current state, what to change, what to leave untouched, the project's **real**
gates, and a report contract. Keep each brief to a single task. Write it to a file and pass it as
the relay's `--brief`. See [references/writing-the-brief.md](https://github.com/amElnagdy/delegate-skills/blob/master/skills/cline-delegate/references/writing-the-brief.md).

### 2. Dispatch

Use the bundled relay. It runs `cline --json -v`, streams the brief on stdin behind a fixed
positional instruction, captures the JSON event stream, and writes `result.json`.

```bash
node "<skill-dir>/scripts/relay.mjs" --brief brief.txt --cd /path/to/repo
# choose a model / provider:        add --model <id>  --provider <name>
# read-only planning pass:          add --plan   (forces --auto-approve false)
# deny approval-required tools:     add --auto-approve false
# hard time limit (watchdog):        add --timeout 2h   (the 30m default suits brief runs; most implementation briefs should be 1-2h)
# see all options:                   node .../relay.mjs --help
```

The child's cwd pins the workspace. The relay writes artifacts under the system temp dir by
default and never commits. See [references/dispatch-and-poll.md](https://github.com/amElnagdy/delegate-skills/blob/master/skills/cline-delegate/references/dispatch-and-poll.md).

### 3. Wait for completion

The relay blocks until cline finishes. Run it with the orchestrator's background-command
facility, or background it in the shell and poll for `result.json`. A pre-run usage error exits 2
and writes no result; a missing `cline` exits 127 and writes `status: "cline_unavailable"`.

Completion means the process exited and `result.json` exists - trust process state and the
working tree, not the progress display. Cline's final message is the `finalMessage` field of
`result.json`.

### 4. Review - do not trust the self-report

- Re-run the project's gates yourself.
- Read the diff against the brief, starting with `touchedFiles`.
- Run relevant guard skills if installed.

See [references/review-and-land.md](https://github.com/amElnagdy/delegate-skills/blob/master/skills/cline-delegate/references/review-and-land.md).

### 5. Land it

If the work is good, commit it. The relay never commits - the diff and `result.json` are the
record; run `git status` and `git diff` first to confirm exactly what changed. If the group has a
PR flow, make the commit and push a branch; let human review happen. If the diff is wrong or
incomplete, re-dispatch a corrected brief in a fresh run and review again.

## Autonomy and permissions

The relay explicitly passes Cline's `--auto-approve`, defaulting to `true` in act mode. Cline
plan mode can request a switch to act mode, so `--plan` forces `--auto-approve false`; the relay
rejects `--plan --auto-approve true`. That pair is the read-only gate. Cline also exposes sandbox
through `--data-dir` / `CLINE_SANDBOX`, but the relay does not configure or override it. Plan-first
for anything risky, then review the plan before a separate act-mode dispatch. Malformed or malicious
briefs remain dangerous in act mode because commands run as the current user.

## Authorization model

Delegation is something the human opts into. Once briefed, cline works as a tool you approved use
of. The boundary is: **do not accept conclusions from the self-report**; verify everything on
disk. For anything touching credentials, production data, or irreversible operations, stop and ask
the human first instead of encoding it in a brief.

## References

- [references/writing-the-brief.md](https://github.com/amElnagdy/delegate-skills/blob/master/skills/cline-delegate/references/writing-the-brief.md) - structure, scope, gates,
  brief delivery.
- [references/dispatch-and-poll.md](https://github.com/amElnagdy/delegate-skills/blob/master/skills/cline-delegate/references/dispatch-and-poll.md) - flags, artifacts,
  `result.json`, and failure recovery.
- [references/review-and-land.md](https://github.com/amElnagdy/delegate-skills/blob/master/skills/cline-delegate/references/review-and-land.md) - what to verify before calling
  the diff done, at the end of a run.
- [references/multi-task-queues.md](https://github.com/amElnagdy/delegate-skills/blob/master/skills/cline-delegate/references/multi-task-queues.md) - sequential queues,
  constraint carry-forward, progress tracking, and the final coherence pass.
