---
slug: ruvnet-ruflo-plugins-ruflo-testgen-skills-tdd-workflow
name: tdd-workflow
tagline: TDD London School workflow -- mock-first, outside-in test development
summary: "Follow the TDD London School (mock-first) approach:"
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-testgen/skills/tdd-workflow
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-testgen/skills/tdd-workflow/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.549Z
  truncated: false
type: agent_skill
skill:
  skill_name: tdd-workflow
  description: TDD London School workflow -- mock-first, outside-in test development
  folder_path: plugins/ruflo-testgen/skills/tdd-workflow
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Follow the TDD London School (mock-first) approach:

1. **Write the failing test first** -- define expected behavior with mocked dependencies
2. **Run the test** -- confirm it fails for the right reason
3. **Implement minimal code** -- make the test pass with the simplest solution
4. **Refactor** -- clean up while keeping tests green
5. **Repeat** -- add the next behavior

Before starting: `mcp__plugin_ruflo-core_ruflo__hooks_pre-task({ description: "TDD: FEATURE_NAME" })`
Before reporting the outcome, run the final target tests and the regression suite after the last edit. Record the actual commands, exit codes, whether tests ran, and failing test names. The initial red test is expected during TDD; only the final validation determines success.

Call `mcp__plugin_ruflo-core_ruflo__hooks_post-task` with the observed result, including when the task is abandoned or validation is interrupted. Set `completed`, `targetTestsRan`, and `regressionTestsRan` to true only when observed; use null for missing exit codes. Skipped or unrun validation is not success. Never substitute an expected result for an observed one.

The following example maps those observations to the hook input (tool-call notation):
```javascript
const success = completed && targetTestsRan && regressionTestsRan
  && targetExitCode === 0 && regressionExitCode === 0;
mcp__plugin_ruflo-core_ruflo__hooks_post-task({
  taskId: "tdd-FEATURE",
  success,
  storeResults: true,
  task: JSON.stringify({
    feature: "FEATURE",
    targetCommand, targetExitCode, targetTestsRan,
    regressionCommand, regressionExitCode, regressionTestsRan,
    failingTestNames,
    failureReason: success ? null : failureReason
  })
});
```
On failure, report `success: false` and the failing test names in `task`. If the runner failed before identifying tests, or the task was abandoned, state that reason instead of inventing test names.

Principles:
- Mock external dependencies at boundaries
- Test behavior, not implementation
- One assertion per test when possible
- Descriptive names: `should [behavior] when [condition]`
