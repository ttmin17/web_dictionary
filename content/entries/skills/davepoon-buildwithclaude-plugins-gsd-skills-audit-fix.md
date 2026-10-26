---
slug: davepoon-buildwithclaude-plugins-gsd-skills-audit-fix
name: gsd:audit-fix
tagline: Autonomous audit-to-fix pipeline — find issues, classify, fix, test, commit
summary: Run an audit, classify findings as auto-fixable vs manual-only, then
  autonomously fix auto-fixable issues with test verification and atomic
  commits.
categories:
  - security-auth
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/gsd/skills/audit-fix
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/gsd/skills/audit-fix/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.617Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:audit-fix
  description: Autonomous audit-to-fix pipeline — find issues, classify, fix, test, commit
  folder_path: plugins/gsd/skills/audit-fix
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

<objective>
Run an audit, classify findings as auto-fixable vs manual-only, then autonomously fix
auto-fixable issues with test verification and atomic commits.

Flags:
- `--max N` — maximum findings to fix (default: 5)
- `--severity high|medium|all` — minimum severity to process (default: medium)
- `--dry-run` — classify findings without fixing (shows classification table)
- `--source <audit>` — which audit to run (default: audit-uat)
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/audit-fix.md
</execution_context>

<process>
Execute the audit-fix workflow from @${CLAUDE_PLUGIN_ROOT}/workflows/audit-fix.md end-to-end.
</process>
