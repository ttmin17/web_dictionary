---
slug: ruvnet-ruflo-plugins-ruflo-ddd-skills-ddd-validate
name: ddd-validate
tagline: Validate domain boundaries -- detect cross-context import violations
  and aggregate invariant issues. Use when auditing a DDD codebase for leaks
  betwee
summary: Validate domain boundary integrity across all bounded contexts.
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
  subpath: plugins/ruflo-ddd/skills/ddd-validate
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
  path: plugins/ruflo-ddd/skills/ddd-validate/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.545Z
  truncated: false
type: agent_skill
skill:
  skill_name: ddd-validate
  description: Validate domain boundaries -- detect cross-context import
    violations and aggregate invariant issues. Use when auditing a DDD codebase
    for leaks between bounded contexts, before merging cross-cutting changes, or
    as a CI gate to catch boundary erosion early.
  folder_path: plugins/ruflo-ddd/skills/ddd-validate
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Validate domain boundary integrity across all bounded contexts.

## Steps

1. **Discover contexts**: Scan `src/*/domain/` to find all bounded contexts.

2. **Check cross-boundary violations**:
   - For each context, scan all `.ts` files for import statements
   - Flag any import that reaches into another context's `domain/` directory directly
   - Allowed: importing from another context's public `index.ts` (application layer)
   - Violation: importing from `src/<other-context>/domain/entities/...` directly

   ```bash
   # Find cross-boundary imports
   for ctx in $(find src -maxdepth 2 -name "domain" -type d | sed 's|src/||;s|/domain||'); do
     grep -rn "from ['\"].*src/" "src/$ctx/" --include="*.ts" | grep -v "src/$ctx/" || true
   done
   ```

3. **Check aggregate invariant enforcement**:
   - Scan aggregate root entities for public setters that bypass validation
   - Flag mutable public properties without invariant checks
   - Verify that child entities are not directly accessible (must go through aggregate root)

4. **Check event naming conventions**:
   - Domain events should be past-tense named (e.g., `OrderCreated`, not `CreateOrder`)
   - Events should be immutable (no public setters)
   - Events should carry the aggregate ID

5. **Check repository patterns**:
   - Repository interfaces should exist in `domain/repositories/`, not `infrastructure/`
   - Repository implementations should exist in `infrastructure/`, not `domain/`
   - Each aggregate root should have exactly one repository

6. **Report findings**:
   - Output a table of violations with file path, line number, violation type, and suggestion
   - Categorize as: `BOUNDARY`, `INVARIANT`, `EVENT`, `REPOSITORY`
   - Exit with summary: total violations, by category, severity

7. **Store results**:
   ```bash
   npx @claude-flow/cli@latest memory store --key "ddd-validation-TIMESTAMP" --value "RESULTS_SUMMARY" --namespace tasks
   npx @claude-flow/cli@latest hooks post-task --task-id "ddd-validate" --success true --store-results true
   ```
