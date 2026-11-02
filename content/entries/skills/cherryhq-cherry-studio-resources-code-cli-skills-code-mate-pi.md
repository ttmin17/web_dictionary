---
slug: cherryhq-cherry-studio-resources-code-cli-skills-code-mate-pi
name: code-mate-pi
tagline: Run Pi non-interactively for repository tasks. Use when the user asks
  to delegate analysis or implementation to Pi.
summary: 1. Set the Bash working directory to the exact project the user named
  and set a finite timeout, normally 10 minutes. 2. Check availability with
  command -v pi. If it is missing, stop and ask the user to install Pi in C...
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
  subpath: resources/code-cli-skills/code-mate-pi
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
  path: resources/code-cli-skills/code-mate-pi/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:41.638Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-mate-pi
  description: Run Pi non-interactively for repository tasks. Use when the user
    asks to delegate analysis or implementation to Pi.
  folder_path: resources/code-cli-skills/code-mate-pi
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: cherryhq-cherry-studio
---

# Pi
## Run

1. Set the Bash working directory to the exact project the user named and set a finite timeout, normally 10 minutes.
2. Check availability with `command -v pi`. If it is missing, stop and ask the user to install Pi in Code Mate.
3. Run one sessionless task:

```bash
pi --mode json --no-session "<prompt>"
```

Pass the prompt as one quoted argument. Parse stdout as JSONL and inspect error events; Pi can report model or tool failure in the event stream, so process exit alone is insufficient. Never start interactive Pi or `/login`.

## Authentication And Permissions

If Pi reports missing login, model, provider, or API configuration, stop and ask the user to configure Pi in Code Mate. Never request, read, print, or copy credentials.

Pi has no tool-approval prompt and normally exposes read, write, edit, and Bash tools. For analysis, append `--tools read,grep,find,ls`. Include write, edit, or Bash only when the user explicitly requested workspace changes, and keep the tool list and working directory as narrow as possible.

Example: run a read-only diagnosis with `--tools read,grep,find,ls`, then use the final JSONL message only if no error event occurred.
