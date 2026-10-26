---
slug: cherryhq-cherry-studio-resources-code-cli-skills-code-mate-qoder
name: code-mate-qoder
tagline: Run the Qoder CLI non-interactively with structured output. Use when
  the user asks to delegate a coding task to Qoder.
summary: 1. Set the Bash working directory to the exact project the user named
  and set a finite timeout, normally 10 minutes. 2. Check availability with
  command -v qoderclicn. If it is missing, stop and ask the user to install...
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
  subpath: resources/code-cli-skills/code-mate-qoder
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
  path: resources/code-cli-skills/code-mate-qoder/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:04.015Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-mate-qoder
  description: Run the Qoder CLI non-interactively with structured output. Use
    when the user asks to delegate a coding task to Qoder.
  folder_path: resources/code-cli-skills/code-mate-qoder
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: cherryhq-cherry-studio
---

# Qoder CN CLI
## Run

1. Set the Bash working directory to the exact project the user named and set a finite timeout, normally 10 minutes.
2. Check availability with `command -v qoderclicn`. If it is missing, stop and ask the user to install Qoder CLI in Code Mate.
3. Run one stateless task:

```bash
qoderclicn -p "<prompt>" -o json --no-session-persistence
```

Code Mate installs the CN executable `qoderclicn`, not `qoder`. Pass the prompt as one quoted argument. Parse the JSON response and check `is_error`; published exit-code behavior is incomplete, so a zero exit alone is not success. Never start the interactive UI or a login flow.

## Authentication And Permissions

If Qoder reports missing authentication, trust, model, or provider configuration, stop and ask the user to configure Qoder CLI in Code Mate. Never request, read, print, or copy credentials.

Headless mode denies permissions that would require asking. Keep that default for analysis. Only when the user explicitly requests workspace changes may the command select the narrowest non-default permission mode, and only after the target directory is trusted through Code Mate.

Example: ask Qoder to review a named file without editing, run the command above, and accept the result only when `is_error` is false.
