---
slug: microsoft-tokeneconomizer-plugin-codex-skills-toolprune
name: toolprune
tagline: "Review, undo or apply TokenEconomizer's deny list of Codex
  capabilities this repository never uses (written to the project's
  .codex/config.toml). Use "
summary: Use show as ARGS unless the user asked to apply, restore or measure
  (optionally naming capabilities). Never run apply or restore unless the user
  asked for it. Show the output verbatim in a code block. If it shows a pr...
categories:
  - coding-agents
tags:
  - agentic-ai
  - agentic-coding
  - ai-coding
  - ai-coding-assistant
status: active
quality_percentile: 96
selection_reason: official_vendor
first_seen: 2026-11-16
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: microsoft/TokenEconomizer
  subpath: plugin/codex-skills/toolprune
  official_vendor: true
  license: Apache-2.0
signals:
  stars: 6819
  last_commit: 2026-11-16T05:32:03Z
  stars_delta_7d: 1393
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 6819
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: microsoft/TokenEconomizer
  path: plugin/codex-skills/toolprune/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:47.427Z
  truncated: false
type: agent_skill
skill:
  skill_name: toolprune
  description: >
    Review, undo or apply TokenEconomizer's deny list of Codex capabilities this
    repository never uses (written to the project's .codex/config.toml). Use
    when the user asks about TokenEconomizer's tool pruning or deny list, or
    asks to restore or apply it.
  folder_path: plugin/codex-skills/toolprune
  extra_files: []
  pack_total_skills: 5
  is_pack_primary: false
  clients:
    - codex
  pack_slug: microsoft-tokeneconomizer
---

# TokenEconomizer: toolprune
Run this command in the repository's root directory:

```
"${TOKENECONOMIZER_HOME:-$HOME/.tokeneconomizer}/bin/te" --host codex --cwd "$(pwd)" toolprune ARGS
```

Use `show` as ARGS unless the user asked to `apply`, `restore` or `measure` (optionally naming capabilities). Never run `apply` or `restore` unless the user asked for it. Show the output verbatim in a code block. If it shows a proposal waiting for `toolprune apply` (under `toolprune=propose`, or one the plugin could not write), end with one line saying how to apply it and that it takes effect from the next session; if it shows a pending list, say that it is written by itself once this repository's sessions have been idle, or now with `apply`.

`apply` and `restore` edit the project's `.codex/config.toml` and record the change in TokenEconomizer's own state under `~/.tokeneconomizer`, outside the workspace, which the sandbox keeps read-only: run that command with `sandbox_permissions` set to `"require_escalated"` and a one-line `justification`, so that Codex asks the user to approve it. `show` and `measure` need no approval.

The command reads and writes only TokenEconomizer's own state (under `~/.tokeneconomizer`)
and, for `toolprune apply` or `restore`, the project's `.codex/config.toml`; it makes no model
call. If it reports that the launcher does not exist, the plugin has not run in a session yet:
ask the user to start a new Codex session in this repository first.
