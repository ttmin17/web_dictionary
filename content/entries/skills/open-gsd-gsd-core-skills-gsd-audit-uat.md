---
slug: open-gsd-gsd-core-skills-gsd-audit-uat
name: gsd-audit-uat
tagline: Cross-phase audit of all outstanding UAT and verification items
summary: Scan all phases for pending, skipped, blocked, and humanneeded UAT
  items. Cross-reference against codebase to detect stale documentation. Produce
  prioritized human test plan.
categories:
  - security-auth
status: active
quality_percentile: 45
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: open-gsd/gsd-core
  subpath: skills/gsd-audit-uat
  official_vendor: false
  license: MIT
signals:
  stars: 10480
  last_commit: 2026-10-13T16:06:01Z
  stars_delta_7d: 362
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 10480
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: open-gsd/gsd-core
  path: skills/gsd-audit-uat/SKILL.md
  branch: next
  fetched_at: 2026-10-14T14:55:15.820Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd-audit-uat
  description: Cross-phase audit of all outstanding UAT and verification items
  folder_path: skills/gsd-audit-uat
  extra_files: []
tags: []
---

<objective>
Scan all phases for pending, skipped, blocked, and human_needed UAT items. Cross-reference against codebase to detect stale documentation. Produce prioritized human test plan.
</objective>

<execution_context>
@~/.claude/gsd-core/workflows/audit-uat.md
</execution_context>

<context>
Core planning files are loaded in-workflow via CLI.

**Scope:**
Glob: .planning/phases/*/*-UAT.md
Glob: .planning/phases/*/*-VERIFICATION.md
</context>
