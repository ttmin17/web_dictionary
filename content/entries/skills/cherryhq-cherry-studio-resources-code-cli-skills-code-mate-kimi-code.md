---
slug: cherryhq-cherry-studio-resources-code-cli-skills-code-mate-kimi-code
name: code-mate-kimi-code
tagline: Run Kimi Code non-interactively for coding tasks. Use when the user
  asks to delegate work to Kimi Code.
summary: 1. Set the Bash working directory to the smallest directory the user
  authorized and set a finite timeout, normally 10 minutes. 2. Check
  availability with command -v kimi. If it is missing, stop and ask the user to
  ins...
categories:
  - productivity-ops
tags:
  - agent-skills
  - agent-workspace
  - agentic-workspace
  - ai-agents
status: active
quality_percentile: 69
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: CherryHQ/cherry-studio
  subpath: resources/code-cli-skills/code-mate-kimi-code
  official_vendor: false
  license: AGPL-3.0
signals:
  stars: 53277
  last_commit: 2026-11-05T13:04:32Z
  stars_delta_7d: 290
  stars_growth_pct: 0.5
  trending_score: 291.59
  velocity_source: snapshot_delta
  sparkline_4w:
    - 52597
    - 52736
    - 52987
    - 53277
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: CherryHQ/cherry-studio
  path: resources/code-cli-skills/code-mate-kimi-code/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:06.776Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-mate-kimi-code
  description: Run Kimi Code non-interactively for coding tasks. Use when the user
    asks to delegate work to Kimi Code.
  folder_path: resources/code-cli-skills/code-mate-kimi-code
  extra_files: []
  pack_total_skills: 21
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: cherryhq-cherry-studio
---

# Kimi Code
## Run

1. Set the Bash working directory to the smallest directory the user authorized and set a finite timeout, normally 10 minutes.
2. Check availability with `command -v kimi`. If it is missing, stop and ask the user to install Kimi Code in Code Mate.
3. Run one prompt and exit:

```bash
kimi -p "<prompt>" --output-format stream-json
```

Pass the prompt as one quoted argument. Parse stdout as JSONL, preserve event order, and extract the final assistant result. Treat an error event or nonzero exit as failure. Never start the interactive UI or `kimi login`.

## Authentication And Permissions

If Kimi reports missing login, model, or provider configuration, stop and ask the user to configure Kimi Code in Code Mate. Never request, read, print, or copy credentials.

Prompt mode automatically approves tool calls and rejects `--yolo`, `--auto`, and `--plan`; those flags cannot make it safer. Do not run it against a writable project for a read-only task. Use a disposable or read-only copy instead. Run against the real project only when the user explicitly requests workspace changes, constrain the directory, and inspect the diff afterward.

Kimi writes session state under `KIMI_CODE_HOME` (normally `~/.kimi-code`) before running workspace tools. If the host Bash reports a sandbox denial there for an explicitly approved write task, retry the exact command once with the narrowest host escalation. In DSH, request `sandbox_permissions: danger-full-access` with a justification naming Kimi's session storage, then wait for approval. Keep the working directory constrained; leave Kimi's config and credential files in place.

Example: for an approved implementation, ask Kimi to change only named files, run it in that project, parse the final JSONL event, and inspect the resulting diff.
