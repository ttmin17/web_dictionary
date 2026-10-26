---
slug: cherryhq-cherry-studio-resources-code-cli-skills-code-mate-opencode
name: code-mate-opencode
tagline: Run OpenCode non-interactively for coding tasks. Use when the user asks
  to delegate work to OpenCode.
summary: 1. Set the Bash working directory to the exact project the user named
  and set a finite timeout, normally 10 minutes. 2. Check availability with
  command -v opencode. If it is missing, stop and ask the user to install O...
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
  subpath: resources/code-cli-skills/code-mate-opencode
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
  path: resources/code-cli-skills/code-mate-opencode/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:04.015Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-mate-opencode
  description: Run OpenCode non-interactively for coding tasks. Use when the user
    asks to delegate work to OpenCode.
  folder_path: resources/code-cli-skills/code-mate-opencode
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: cherryhq-cherry-studio
---

# OpenCode
## Run

1. Set the Bash working directory to the exact project the user named and set a finite timeout, normally 10 minutes.
2. Check availability with `command -v opencode`. If it is missing, stop and ask the user to install OpenCode in Code Mate.
3. Run one task and exit:

```bash
opencode run "<prompt>" --format json
```

Pass the prompt as one quoted argument. Parse stdout as a JSON event stream and treat an error event or nonzero exit as failure. Never start the interactive OpenCode UI or an authentication flow.

## Authentication And Permissions

If OpenCode reports a missing provider or credentials, stop and ask the user to configure OpenCode in Code Mate. Never request, read, print, or copy credentials.

Headless mode denies permission prompts by default; keep that behavior for analysis. Only when the user explicitly requests workspace changes may the command enable the minimum tools needed. Do not add `--auto` merely to avoid a denied permission.

Example: ask OpenCode to inspect a failing test without editing, run the command above from that repository, and summarize the final content event and any tool errors.
