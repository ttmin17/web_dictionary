---
slug: microsoft-tokeneconomizer-plugin-codex-skills-config
name: config
tagline: "Show or change TokenEconomizer's settings: turn micro-skills, tool
  pruning or the loop guard on or off, or tune them, for this repository or
  (with --g"
summary: Use show as ARGS unless the user asked to change a setting; then set
  KEY=VALUE ... or unset KEY ..., adding --global only if they asked for every
  repository. Show the output verbatim in a code block; if a setting was...
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
  subpath: plugin/codex-skills/config
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
  path: plugin/codex-skills/config/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:47.427Z
  truncated: false
type: agent_skill
skill:
  skill_name: config
  description: >
    Show or change TokenEconomizer's settings: turn micro-skills, tool pruning
    or the loop guard on or off, or tune them, for this repository or (with
    --global) every repository. Use when the user asks to configure, enable or
    disable TokenEconomizer or one of its mechanisms.
  folder_path: plugin/codex-skills/config
  extra_files: []
  pack_total_skills: 5
  is_pack_primary: true
  clients:
    - codex
  pack_slug: microsoft-tokeneconomizer
---

# TokenEconomizer: config
Run this command in the repository's root directory:

```
"${TOKENECONOMIZER_HOME:-$HOME/.tokeneconomizer}/bin/te" --host codex --cwd "$(pwd)" config ARGS
```

Use `show` as ARGS unless the user asked to change a setting; then `set KEY=VALUE ...` or `unset KEY ...`, adding `--global` only if they asked for every repository. Show the output verbatim in a code block; if a setting was rejected, say why in one sentence.

Changing a setting (`set`, `unset`) writes TokenEconomizer's own state under `~/.tokeneconomizer`, outside the workspace, which the sandbox keeps read-only: run that command with `sandbox_permissions` set to `"require_escalated"` and a one-line `justification`, so that Codex asks the user to approve it. `show` reads only and needs no approval.

The command reads and writes only TokenEconomizer's own state (under `~/.tokeneconomizer`); it
makes no model call. If it reports that the launcher does not exist, the plugin has not run in a session yet:
ask the user to start a new Codex session in this repository first.
