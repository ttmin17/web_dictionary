---
slug: agentscope-ai-agentscope-java-agentscope-examples-agents-agentscope-codingagent-src-main-resources-workspace-templates-skills-verify-changes
name: verify-changes
tagline: Verify code changes by running the project's typecheck, build, lint,
  and targeted tests, then fix and re-run until clean. Use after editing any
  source
summary: "1. Detect the project's check commands from its config files: -
  Node/TS: package.json scripts (build, lint, typecheck), tsconfig.json -> npx
  tsc --noEmit, npx eslint . - Python: ruff check , mypy , pytest . -
  Java/Mav..."
categories:
  - agent-frameworks
tags:
  - adk
  - agent-framework
  - agentic
  - agentic-ai
status: active
quality_percentile: 94
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: agentscope-ai/agentscope-java
  subpath: agentscope-examples/agents/agentscope-codingagent/src/main/resources/workspace-templates/skills/verify-changes
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 6214
  last_commit: 2026-11-02T08:27:45Z
  stars_delta_7d: 93
  stars_growth_pct: 1.5
  trending_score: 94.41
  velocity_source: snapshot_delta
  sparkline_4w:
    - 6038
    - 6121
    - 6214
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agentscope-ai/agentscope-java
  path: agentscope-examples/agents/agentscope-codingagent/src/main/resources/workspace-templates/skills/verify-changes/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:24.989Z
  truncated: false
type: agent_skill
skill:
  skill_name: verify-changes
  description: Verify code changes by running the project's typecheck, build,
    lint, and targeted tests, then fix and re-run until clean. Use after editing
    any source file.
  folder_path: agentscope-examples/agents/agentscope-codingagent/src/main/resources/workspace-templates/skills/verify-changes
  extra_files: []
  pack_total_skills: 19
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agentscope-ai-agentscope-java
---

# Verify Changes
Editing a file is only half a step. Always close the loop by verifying before you mark
work done or open a PR. This is the manual equivalent of an IDE/LSP diagnostics loop.

## Procedure

1. Detect the project's check commands from its config files:
   - Node/TS: `package.json` scripts (`build`, `lint`, `typecheck`), `tsconfig.json` -> `npx tsc --noEmit`, `npx eslint <changed files>`.
   - Python: `ruff check <path>`, `mypy <path>`, `pytest <specific test file>`.
   - Java/Maven: `mvn -q -pl <module> compile`, then the single relevant test class via `-Dtest=<ClassName>`.
   - Gradle: `./gradlew :<module>:compileJava` / `:<module>:test --tests <ClassName>`.
2. Run ONLY the checks and tests directly related to the files you changed. Never run the
   full test suite.
3. Disable color output so logs are readable: `NO_COLOR=1`, `--no-color`, or `--no-colors`.
4. Read the output as ground truth. If it reports errors, they are real — do not claim success.
5. Fix the root cause, then re-run the SAME command. Repeat until it passes.

## Rules

- Only mark a todo `completed` once its verification command passes.
- If you cannot find a check command, at minimum compile/parse the changed files.
- Do not disable or delete failing tests to make checks pass.
