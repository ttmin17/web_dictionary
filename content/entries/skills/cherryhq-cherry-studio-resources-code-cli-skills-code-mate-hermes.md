---
slug: cherryhq-cherry-studio-resources-code-cli-skills-code-mate-hermes
name: code-mate-hermes
tagline: Run Hermes Agent non-interactively for local coding tasks. Use when the
  user asks to delegate work to Hermes.
summary: 1. Set the Bash working directory to the smallest directory the user
  authorized and set a finite timeout, normally 10 minutes. 2. Check
  availability with command -v hermes. If it is missing, stop and ask the user
  to i...
categories:
  - coding-agents
tags:
  - agent-skills
  - ai-agent
  - claude-code
  - codex
status: active
quality_percentile: 72
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: CherryHQ/cherry-studio
  subpath: resources/code-cli-skills/code-mate-hermes
  official_vendor: false
  license: AGPL-3.0
signals:
  stars: 52987
  last_commit: 2026-10-26T07:25:22Z
  stars_delta_7d: 251
  stars_growth_pct: 0.5
  trending_score: 252.19
  velocity_source: snapshot_delta
  sparkline_4w:
    - 52419
    - 52597
    - 52736
    - 52987
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: CherryHQ/cherry-studio
  path: resources/code-cli-skills/code-mate-hermes/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:04.015Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-mate-hermes
  description: Run Hermes Agent non-interactively for local coding tasks. Use when
    the user asks to delegate work to Hermes.
  folder_path: resources/code-cli-skills/code-mate-hermes
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: cherryhq-cherry-studio
---

# Hermes Agent
## Run

1. Set the Bash working directory to the smallest directory the user authorized and set a finite timeout, normally 10 minutes.
2. Check availability with `command -v hermes`. If it is missing, stop and ask the user to install Hermes Agent in Code Mate.
3. Run one task and exit:

```bash
hermes -z "<prompt>"
```

Pass the prompt as one quoted argument. Treat stdout as final text. Exit zero means success, exit one means failure or no response, and exit two means invalid arguments or an empty failed/partial result. Never start the interactive UI or a login flow.

## Authentication And Permissions

If Hermes reports missing provider, model, or API configuration, stop and ask the user to configure Hermes Agent in Code Mate. Never request, read, print, or copy credentials.

One-shot mode automatically enables YOLO and hook acceptance and can load tools, memory, rules, and `AGENTS.md`. Do not run it in a writable project for read-only work. Use a disposable or read-only copy instead. Run it against the real project only when the user explicitly requests workspace changes, constrain the directory and prompt, and inspect the diff afterward.

Example: for an approved edit, ask Hermes to touch only named files, run it in that project, require exit zero, and inspect the resulting diff before reporting success.
