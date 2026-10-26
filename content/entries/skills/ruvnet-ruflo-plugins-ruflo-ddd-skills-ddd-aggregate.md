---
slug: ruvnet-ruflo-plugins-ruflo-ddd-skills-ddd-aggregate
name: ddd-aggregate
tagline: Scaffold an aggregate root with entity, value objects, repository
  interface, domain events, and test stubs. Use when adding a new aggregate to
  an exis
summary: Scaffold a complete aggregate root inside a bounded context.
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
  subpath: plugins/ruflo-ddd/skills/ddd-aggregate
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
  path: plugins/ruflo-ddd/skills/ddd-aggregate/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.545Z
  truncated: false
type: agent_skill
skill:
  skill_name: ddd-aggregate
  description: Scaffold an aggregate root with entity, value objects, repository
    interface, domain events, and test stubs. Use when adding a new aggregate to
    an existing bounded context, modeling a new business concept that owns
    invariants, or generating the boilerplate for an entity + repo + events
    triplet.
  folder_path: plugins/ruflo-ddd/skills/ddd-aggregate
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Scaffold a complete aggregate root inside a bounded context.

Parse `$ARGUMENTS` as `<context-name> <aggregate-name>` (both kebab-case). The context must already exist under `src/`.

## Steps

1. **Validate**: Confirm `src/<context>/domain/` exists. If not, suggest running `/ddd-context <context>` first.

2. **Pre-task hook**: `npx @claude-flow/cli@latest hooks pre-task --description "DDD aggregate: <aggregate-name> in <context>"`

3. **Create aggregate root entity**:
   - File: `src/<context>/domain/entities/<aggregate-name>.entity.ts`
   - Include: unique ID field, constructor with invariant validation, domain methods that enforce business rules, `equals()` based on identity
   - Export a TypeScript class extending or implementing a base `AggregateRoot` interface

4. **Create value objects**:
   - File: `src/<context>/domain/value-objects/<aggregate-name>-id.value-object.ts`
   - Include: immutable ID value object with factory method and validation
   - Add additional value objects as properties of the aggregate suggest them

5. **Create repository interface**:
   - File: `src/<context>/domain/repositories/<aggregate-name>.repository.ts`
   - Include: `findById`, `save`, `delete` methods
   - Use the aggregate root and its ID value object as types
   - This is an interface only -- no implementation (infrastructure concern)

6. **Create domain events**:
   - File: `src/<context>/domain/events/<aggregate-name>-created.event.ts`
   - File: `src/<context>/domain/events/<aggregate-name>-updated.event.ts`
   - Include: event name (past tense), timestamp, aggregate ID, payload

7. **Create unit test stubs**:
   - File: `src/<context>/domain/entities/<aggregate-name>.entity.test.ts`
   - Include: test cases for construction invariants, domain methods, equality
   - Use `describe`/`it` with `should [behavior] when [condition]` names

8. **Update barrel exports**: Add new files to the relevant `index.ts` barrel files.

9. **Store in domain model graph**:
   ```
   mcp__plugin_ruflo-core_ruflo__agentdb_hierarchical-store({ key: "domain/context-<context>/aggregate-<aggregate-name>", value: "Aggregate <aggregate-name> (parent: context-<context>)", tier: "semantic" })
   mcp__plugin_ruflo-core_ruflo__agentdb_causal-edge({ sourceId: "entity:context-<context>", targetId: "entity:aggregate-<aggregate-name>", relation: "contains" })
   mcp__plugin_ruflo-core_ruflo__memory_store({ key: "ddd-aggregate-<context>-<aggregate-name>", value: "AGGREGATE_SUMMARY", namespace: "tasks" })
   ```

10. **Post-task hook**: `npx @claude-flow/cli@latest hooks post-task --task-id "ddd-aggregate-<aggregate-name>" --success true`
