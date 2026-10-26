---
slug: davepoon-buildwithclaude-plugins-cc-best-skills-testing
name: testing
tagline: Testing strategies and methodologies including TDD, E2E testing, and
  multi-framework support
summary: "- TDD Workflow: Red → Green → Refactor cycle with practical examples -
  Test Organization: Unit / Integration / E2E test structure - Framework
  Support: pytest, Jest, JUnit5, xUnit, Google Test - Mock Strategies: Only
  m..."
categories:
  - agent-frameworks
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
  subpath: plugins/cc-best/skills/testing
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
  path: plugins/cc-best/skills/testing/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.602Z
  truncated: false
type: agent_skill
skill:
  skill_name: testing
  description: Testing strategies and methodologies including TDD, E2E testing,
    and multi-framework support
  folder_path: plugins/cc-best/skills/testing
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Testing Skill
Comprehensive testing guidance covering:

- **TDD Workflow**: Red → Green → Refactor cycle with practical examples
- **Test Organization**: Unit / Integration / E2E test structure
- **Framework Support**: pytest, Jest, JUnit5, xUnit, Google Test
- **Mock Strategies**: Only mock external boundaries, not internal logic
- **Coverage Requirements**: 80%+ with meaningful assertions

## When Loaded

This skill is automatically injected when working with:

- `/cc-best:dev` — Implementation with tests
- `tdd-guide` agent — Test-driven development guidance
- `build-error-resolver` agent — Fixing test failures

## Key Rules

1. **Tests first** — Write failing test before implementation
2. **AAA pattern** — Arrange, Act, Assert in every test
3. **No shared mutable state** — Each test is independent
4. **Descriptive names** — `test_<feature>_<scenario>_<expected>`
