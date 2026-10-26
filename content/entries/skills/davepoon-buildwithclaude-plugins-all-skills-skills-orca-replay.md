---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-orca-replay
name: orca-replay
tagline: "Answers questions about a past agent run from its recording rather
  than from memory, and replays or forks that run. Use when asked why an earlier
  run "
summary: "This skill enforces one rule: when a question is about something that
  already happened, read the trace before answering. Do not reconstruct it. If a
  recording exists, guessing is the wrong move even when the guess wou..."
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
  subpath: plugins/all-skills/skills/orca-replay
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
  path: plugins/all-skills/skills/orca-replay/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.592Z
  truncated: false
type: agent_skill
skill:
  skill_name: orca-replay
  description: Answers questions about a past agent run from its recording rather
    than from memory, and replays or forks that run. Use when asked why an
    earlier run did something, or to reproduce a failure.
  folder_path: plugins/all-skills/skills/orca-replay
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# OrcaReplay Run Reader
Coding agents are confidently wrong about their own history. A summary written from memory is
missing the tool results, the exit codes, and the files that changed without anyone mentioning
them.

This skill enforces one rule: **when a question is about something that already happened, read the
trace before answering.** Do not reconstruct it. If a recording exists, guessing is the wrong move
even when the guess would have been right.

## When to Use This Skill

- "Why did you delete / overwrite / move X?"
- "What changed this file?" or "Which step broke the build?"
- "Can you reproduce yesterday's failure?"
- "Would a different model have got this right?"

## What This Skill Does

1. **Finds the run** — `orca_list_runs`, newest first, naming the run each fork came from.
2. **Narrows to the cause** — `orca_graph` with `to: <event seq>` returns only the chain that
   produced one event. That is the shape of an answer to *why*; the full timeline
   (`orca_show_run`) is the shape of an answer to *what*.
3. **Separates evidence from inference** — every edge is labelled `recorded` (the recorder watched
   it happen) or `inferred` (derived just now from a named rule). "The trace shows the `rm` at step
   14 removed it" and "this looks like the `rm` at step 14, going by timing" are different claims,
   and collapsing them into one confident sentence is the exact failure this skill exists to
   prevent.
4. **Reproduces before explaining** — `orca_replay` re-runs the recording offline and reports what
   could not be reproduced.
5. **Compares models only when asked** — `orca_compare` forks one run onto several models from the
   same checkpoint, graded by a shell command whose exit code is the verdict.

## How to Use

### Basic Usage

```
Why did the last run overwrite src/config.ts?
```

The agent reads the trace instead of recalling the session, and answers from the tool call that
did it.

```
Does yesterday's failure still reproduce?
```

## Example

**User**: "Which step broke the build?"

**Output**:
```
Step 14 did. From the recording (recorded edge, not inferred):

  14  TOOL   file_editor   {"command":"str_replace","path":".../tsconfig.json"}
  15  SHELL  npm run build  exit 2
  16  FILE   tsconfig.json  modified +1 -1

The edit at 14 removed "strict": true, and the build at 15 exited 2. I replayed the run
(reused=5/5, divergences=0) and it fails the same way.
```

## Tips

- **Pass `worktree: true` to replay.** Without it, replay restores the recorded filesystem over the
  working tree for the duration of the run, so uncommitted work is absent in the meantime — and
  stays absent if the replay is interrupted.
- **Check what re-executes before the first replay.** Replay serves the model's answers from the
  trace, but the agent process runs again for real, so its shell commands run again too. A run that
  only read files and edited the repository is free to replay; one that touched Docker, a database
  or a remote host is not.
- **Replay is not a sandbox.** It blocks provider egress, not the network.
- **A matching replay is not a determinism result.** The model is not re-asked, its recorded
  answers are served back — so replay cannot tell you whether a *fresh* run would fail the same
  way. Say so rather than implying it did.
- **`reused=3/5` is usually not a failure.** Harnesses make calls for themselves — a quota probe, a
  session-naming request — and replay does not repeat them.
- **No recording means no answer.** Say that plainly and offer to start one with
  `orca record claude`, rather than falling back to a reconstruction.

## Requirements

The `orcareplay` npm package (Node 20+) with its MCP server registered as `orca`, and at least one
recorded run in the project's `.orca/runs` directory. Apache-2.0 —
[Continuum-AI-Corp/OrcaReplay](https://github.com/Continuum-AI-Corp/OrcaReplay).
