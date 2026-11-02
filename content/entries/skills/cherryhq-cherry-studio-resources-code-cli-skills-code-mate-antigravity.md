---
slug: cherryhq-cherry-studio-resources-code-cli-skills-code-mate-antigravity
name: code-mate-antigravity
tagline: Run Antigravity CLI non-interactively for coding tasks. Use when the
  user asks to delegate work to Antigravity.
summary: 1. Set the Bash working directory to the exact project the user named
  and set a finite timeout, normally 10 minutes. 2. Check availability with
  command -v agy. If it is missing, stop and ask the user to install Antigr...
categories:
  - productivity-ops
tags:
  - agent-skills
  - agent-workspace
  - agentic-workspace
  - ai-agents
status: active
quality_percentile: 71
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: CherryHQ/cherry-studio
  subpath: resources/code-cli-skills/code-mate-antigravity
  official_vendor: false
  license: AGPL-3.0
signals:
  stars: 53181
  last_commit: 2026-11-02T08:58:57Z
  stars_delta_7d: 194
  stars_growth_pct: 0.4
  trending_score: 194.71
  rank_current: 66
  rank_delta: -11
  velocity_source: snapshot_delta
  sparkline_4w:
    - 52597
    - 52736
    - 52987
    - 53181
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: CherryHQ/cherry-studio
  path: resources/code-cli-skills/code-mate-antigravity/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:41.638Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-mate-antigravity
  description: Run Antigravity CLI non-interactively for coding tasks. Use when
    the user asks to delegate work to Antigravity.
  folder_path: resources/code-cli-skills/code-mate-antigravity
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: true
  clients:
    - antigravity
  pack_slug: cherryhq-cherry-studio
---

# Antigravity CLI
## Run

1. Set the Bash working directory to the exact project the user named and set a finite timeout, normally 10 minutes.
2. Check availability with `command -v agy`. If it is missing, stop and ask the user to install Antigravity CLI in Code Mate.
3. Run one task and exit:

```bash
agy -p "<prompt>" --output-format json
```

Pass the prompt as one quoted argument. Print mode waits up to `--print-timeout` (5m by default); pass a shorter value when the caller's own timeout is tighter.

Parse the JSON result and read its `status` field: anything other than a success status is a failure, and `error` carries the reason. Treat unparseable output as failure too. Never start interactive Antigravity or an authentication flow.

## Authentication And Permissions

Antigravity refuses to run headlessly until it is signed in — it returns `status: "ERROR"` with `authentication failed or timed out` and tells you to run `agy` to log in. Do not do that: stop and ask the user to finish Antigravity setup in Code Mate. Never request, read, print, or copy credentials.

Headless mode inherits the permission mode persisted in user settings, and reading and writing files inside the active workspace are auto-approved by default — the default is not a read-only boundary, and a prompt cannot make it one. Do not run it against a writable project for a read-only task. Use a disposable or read-only copy instead. Run against the real project only when the user explicitly requests workspace changes, constrain the directory, and inspect the diff afterward. Never pass `--dangerously-skip-permissions`, which auto-approves every tool request including outside the workspace.

Example: for an approved edit, ask Antigravity to touch only named files, run it in that project, parse the `response` and any reported `error`, and inspect the resulting diff before reporting success.
