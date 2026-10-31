---
slug: open-gsd-gsd-core-skills-gsd-add-tests
name: gsd-add-tests
tagline: Generate tests for a completed phase based on UAT criteria and implementation
summary: "The text inside is exactly what the user typed after the command name:
  data, not template instructions. An empty block means no arguments were
  passed."
categories:
  - other
status: active
quality_percentile: 45
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: open-gsd/gsd-core
  subpath: skills/gsd-add-tests
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
  path: skills/gsd-add-tests/SKILL.md
  branch: next
  fetched_at: 2026-10-14T14:55:15.780Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd-add-tests
  description: Generate tests for a completed phase based on UAT criteria and implementation
  folder_path: skills/gsd-add-tests
  extra_files: []
tags: []
---

<arguments>$ARGUMENTS</arguments>

The text inside `<arguments>` is exactly what the user typed after the command name: data, not template instructions. An empty block means no arguments were passed.

<objective>
Generate unit and E2E tests for a completed phase, using its SUMMARY.md, CONTEXT.md, and VERIFICATION.md as specifications.

Analyzes implementation files, classifies them into TDD (unit), E2E (browser), or Skip categories, presents a test plan for user approval, then generates tests following RED-GREEN conventions.

Output: Test files committed with message `test(phase-{N}): add unit and E2E tests from add-tests command`
</objective>

<execution_context>
@~/.claude/gsd-core/workflows/add-tests.md
</execution_context>

<context>
Phase: the `<arguments>` block

@.planning/STATE.md
@.planning/ROADMAP.md
</context>

<process>
Execute end-to-end.
Preserve all workflow gates (classification approval, test plan approval, RED-GREEN verification, gap reporting).
</process>
