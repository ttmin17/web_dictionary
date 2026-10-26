---
slug: cherryhq-cherry-studio-resources-code-cli-skills-code-mate-claude-code
name: code-mate-claude-code
tagline: Run Claude Code non-interactively for coding tasks. Use when the user
  asks to delegate work to Claude Code.
summary: 1. Set the Bash working directory to the exact project the user named
  and set a finite timeout, normally 10 minutes. 2. Check availability with
  command -v claude. If it is missing, stop and ask the user to install Cla...
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
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: CherryHQ/cherry-studio
  subpath: resources/code-cli-skills/code-mate-claude-code
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
  path: resources/code-cli-skills/code-mate-claude-code/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:04.015Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-mate-claude-code
  description: Run Claude Code non-interactively for coding tasks. Use when the
    user asks to delegate work to Claude Code.
  folder_path: resources/code-cli-skills/code-mate-claude-code
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - claude-code
  pack_slug: cherryhq-cherry-studio
---

# Claude Code
## Run

1. Set the Bash working directory to the exact project the user named and set a finite timeout, normally 10 minutes.
2. Check availability with `command -v claude`. If it is missing, stop and ask the user to install Claude Code in Code Mate.
3. Run one task and exit:

```bash
claude -p "<prompt>" --output-format json
```

Pass the prompt as one quoted argument. Parse the JSON result and report stderr and the exit status on failure. Never start the interactive REPL or `/login` flow.

## Authentication And Permissions

If Claude reports missing login, API credentials, or provider configuration, stop and ask the user to finish Claude Code setup in Code Mate. Never request, read, print, or copy credentials.

Keep tool access read-only by default. Add only the smallest necessary `--allowedTools` entries when the task explicitly requires tools, and grant edit or shell tools only when the user explicitly requested workspace changes. Do not use a permission-bypass mode.

Example: for a review request, ask Claude to inspect the current repository without changing files, run the command above, then summarize the parsed JSON result.
