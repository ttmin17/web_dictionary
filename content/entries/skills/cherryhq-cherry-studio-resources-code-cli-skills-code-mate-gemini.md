---
slug: cherryhq-cherry-studio-resources-code-cli-skills-code-mate-gemini
name: code-mate-gemini
tagline: Run Gemini CLI non-interactively for coding tasks. Use when the user
  asks to delegate work to Gemini.
summary: 1. Set the Bash working directory to the exact project the user named
  and set a finite timeout, normally 10 minutes. 2. Check availability with
  command -v gemini. If it is missing, stop and ask the user to install Gem...
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
  subpath: resources/code-cli-skills/code-mate-gemini
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
  path: resources/code-cli-skills/code-mate-gemini/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:04.015Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-mate-gemini
  description: Run Gemini CLI non-interactively for coding tasks. Use when the
    user asks to delegate work to Gemini.
  folder_path: resources/code-cli-skills/code-mate-gemini
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - antigravity
  pack_slug: cherryhq-cherry-studio
---

# Gemini CLI
## Run

1. Set the Bash working directory to the exact project the user named and set a finite timeout, normally 10 minutes.
2. Check availability with `command -v gemini`. If it is missing, stop and ask the user to install Gemini CLI in Code Mate.
3. Run one task and exit:

```bash
gemini -p "<prompt>" --output-format json
```

Pass the prompt as one quoted argument. Parse the JSON result and treat a JSON error or nonzero exit as failure. Never start interactive Gemini or an authentication flow.

## Authentication And Permissions

If Gemini reports missing authentication, project, or provider configuration, stop and ask the user to finish Gemini setup in Code Mate. Never request, read, print, or copy credentials.

Keep headless approval policy at its read-only default. Only when the user explicitly requests workspace changes may the command use the narrowest policy and tool permissions needed; do not enable unrestricted approval.

Example: ask Gemini to review a module without editing, run the command above from the repository, and summarize the parsed response and any reported error.
