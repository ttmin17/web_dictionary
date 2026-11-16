---
slug: microsoft-tokeneconomizer-plugin-codex-skills-repos
name: repos
tagline: List every repository TokenEconomizer keeps state for (how each was
  identified, its agents and sessions, the checkouts seen), or merge one
  repository'
summary: Use list as ARGS unless the user asked to migrate, or to merge KEY
  [INTO] (keys as the list shows them; INTO defaults to this repository). Never
  run migrate or merge unless the user asked for it. Show the output verba...
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
  subpath: plugin/codex-skills/repos
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
  path: plugin/codex-skills/repos/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:47.427Z
  truncated: false
type: agent_skill
skill:
  skill_name: repos
  description: >
    List every repository TokenEconomizer keeps state for (how each was
    identified, its agents and sessions, the checkouts seen), or merge one
    repository's state into another. Use when the user asks which repositories
    TokenEconomizer tracks, why state looks split or missing, or asks to merge
    or migrate it.
  folder_path: plugin/codex-skills/repos
  extra_files: []
  pack_total_skills: 5
  is_pack_primary: false
  clients:
    - codex
  pack_slug: microsoft-tokeneconomizer
---

# TokenEconomizer: repos
Run this command in the repository's root directory:

```
"${TOKENECONOMIZER_HOME:-$HOME/.tokeneconomizer}/bin/te" --host codex --cwd "$(pwd)" repos ARGS
```

Use `list` as ARGS unless the user asked to `migrate`, or to `merge KEY [INTO]` (keys as the list shows them; INTO defaults to this repository). Never run `migrate` or `merge` unless the user asked for it. Show the output verbatim in a code block.

`migrate` and `merge` move state between repositories; that writes TokenEconomizer's own state under `~/.tokeneconomizer`, outside the workspace, which the sandbox keeps read-only: run that command with `sandbox_permissions` set to `"require_escalated"` and a one-line `justification`, so that Codex asks the user to approve it. `list` reads only and needs no approval.

The command reads and writes only TokenEconomizer's own state (under `~/.tokeneconomizer`);
it makes no model call, and a merge keeps the old state directory under
`~/.tokeneconomizer/merged/`. If it reports that the launcher does not exist, the plugin has
not run in a session yet: ask the user to start a new Codex session in this repository first.
