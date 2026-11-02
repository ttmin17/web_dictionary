---
slug: cherryhq-cherry-studio-resources-code-cli-skills-code-mate-github-copilot
name: code-mate-github-copilot
tagline: Run GitHub Copilot CLI non-interactively for coding tasks. Use when the
  user asks to delegate work to Copilot.
summary: 1. Set the Bash working directory to the exact project the user named
  and set a finite timeout, normally 10 minutes. 2. Check availability with
  command -v copilot. If it is missing, stop and ask the user to install Gi...
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
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: CherryHQ/cherry-studio
  subpath: resources/code-cli-skills/code-mate-github-copilot
  official_vendor: false
  license: AGPL-3.0
signals:
  stars: 53181
  last_commit: 2026-11-02T08:58:57Z
  stars_delta_7d: 194
  stars_growth_pct: 0.4
  trending_score: 194.71
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
  path: resources/code-cli-skills/code-mate-github-copilot/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:41.638Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-mate-github-copilot
  description: Run GitHub Copilot CLI non-interactively for coding tasks. Use when
    the user asks to delegate work to Copilot.
  folder_path: resources/code-cli-skills/code-mate-github-copilot
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: cherryhq-cherry-studio
---

# GitHub Copilot CLI
## Run

1. Set the Bash working directory to the exact project the user named and set a finite timeout, normally 10 minutes.
2. Check availability with `command -v copilot`. If it is missing, stop and ask the user to install GitHub Copilot CLI in Code Mate.
3. Run one non-interactive task:

```bash
copilot -p "<prompt>" -s --output-format json --no-ask-user
```

Pass the prompt as one quoted argument. Parse stdout as JSONL and treat an error event or nonzero exit as failure; the published exit-code contract is incomplete. Never start the interactive UI or an authentication flow.

## Authentication And Permissions

If Copilot reports a missing login, subscription, or token configuration, stop and ask the user to configure GitHub Copilot CLI in Code Mate. Never request, read, print, or copy credentials.

`--no-ask-user` prevents an unattended approval prompt. Keep tools denied by default. When the user explicitly requests workspace changes, add only narrowly scoped `--allow-tool` entries; never use `--allow-all` as a shortcut.

Example: ask Copilot to explain a failing test without modifying files, run the command above, and summarize the final JSONL result plus any denied tool request.
