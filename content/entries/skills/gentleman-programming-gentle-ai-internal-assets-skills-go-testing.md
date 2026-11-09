---
slug: gentleman-programming-gentle-ai-internal-assets-skills-go-testing
name: go-testing
tagline: "Trigger: Go tests, go test coverage, Bubbletea teatest, golden files.
  Apply focused Go testing patterns."
summary: Load this skill when writing or reviewing Go tests, adding coverage,
  testing Bubbletea/TUI flows, using teatest, or updating golden files.
categories:
  - coding-agents
tags:
  - agent-skills
  - ai-agents
  - ai-coding
  - claude-code
status: active
quality_percentile: 88
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: Gentleman-Programming/gentle-ai
  subpath: internal/assets/skills/go-testing
  official_vendor: false
  license: MIT
signals:
  stars: 8636
  last_commit: 2026-11-08T21:57:39Z
  stars_delta_7d: 301
  stars_growth_pct: 3.6
  trending_score: 311.87
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7849
    - 8020
    - 8335
    - 8636
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Gentleman-Programming/gentle-ai
  path: internal/assets/skills/go-testing/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:53.522Z
  truncated: false
type: agent_skill
skill:
  skill_name: go-testing
  description: "Trigger: Go tests, go test coverage, Bubbletea teatest, golden
    files. Apply focused Go testing patterns."
  folder_path: internal/assets/skills/go-testing
  extra_files:
    - references/examples.md
  pack_total_skills: 18
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: gentleman-programming-gentle-ai
---

## Activation Contract

Load this skill when writing or reviewing Go tests, adding coverage, testing Bubbletea/TUI flows, using `teatest`, or updating golden files.

## Hard Rules

- Prefer table-driven tests for multiple cases; use `t.Run(tt.name, ...)`.
- Test behavior and state transitions, not implementation trivia.
- Use `t.TempDir()` for filesystem tests; never rely on a real home directory.
- Keep integration tests skippable with `testing.Short()` when they run external commands or slow flows.
- For Bubbletea, test `Model.Update()` directly for state changes; use `teatest` only for interactive flows.
- Golden files must be deterministic; update only through the repo's `-update` path and rerun tests without `-update`.
- Use small mocks/interfaces around system or command execution boundaries.

## Decision Gates

| Target | Test pattern |
|---|---|
| Pure function or parser | Table-driven unit test. |
| Error behavior | Explicit success and failure cases. |
| File operations | `t.TempDir()` plus focused assertions. |
| TUI state transition | Direct `Model.Update()` call with `tea.Msg`. |
| Full TUI interaction | `teatest.NewTestModel()`. |
| Rendered output | Golden file test. |
| Real external command | Integration test; skip in `-short`. |

## Execution Steps

1. Identify behavior under test and the smallest public boundary that proves it.
2. Choose the test pattern from the decision gate.
3. Name cases by scenario, not input mechanics.
4. Assert outputs, errors, state, and side effects explicitly.
5. Run the narrow package test first, then the relevant broader suite.
6. For golden updates: run with `-update`, inspect diff, then rerun without `-update`.

## Output Contract

Report test files changed, scenarios covered, commands executed, golden files updated, and any skipped integration scope.

## References

- [references/examples.md](https://github.com/Gentleman-Programming/gentle-ai/blob/main/internal/assets/skills/go-testing/references/examples.md) — compact table-driven, Bubbletea, teatest, golden, and command examples.
