---
slug: microsoft-tokeneconomizer-plugin-codex-skills-status
name: status
tagline: Show what TokenEconomizer has learned for this repository, what it has
  done, and what this repository's sessions cost. Use when the user asks about
  To
summary: Show the output verbatim in a code block. Add nothing unless it
  contains a warning; then explain the warning in one sentence.
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
  subpath: plugin/codex-skills/status
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
  path: plugin/codex-skills/status/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:47.427Z
  truncated: false
type: agent_skill
skill:
  skill_name: status
  description: >
    Show what TokenEconomizer has learned for this repository, what it has done,
    and what this repository's sessions cost. Use when the user asks about
    TokenEconomizer, its status, its savings or overhead, or what it learned
    here.
  folder_path: plugin/codex-skills/status
  extra_files: []
  pack_total_skills: 5
  is_pack_primary: false
  clients:
    - codex
  pack_slug: microsoft-tokeneconomizer
---

# TokenEconomizer: status
Run this command in the repository's root directory:

```
"${TOKENECONOMIZER_HOME:-$HOME/.tokeneconomizer}/bin/te" --host codex --cwd "$(pwd)" status
```

Show the output verbatim in a code block. Add nothing unless it contains a warning; then explain the warning in one sentence.

The command reads and writes only TokenEconomizer's own state (under `~/.tokeneconomizer`); it
makes no model call. If it reports that the launcher does not exist, the plugin has not run in a session yet:
ask the user to start a new Codex session in this repository first.
