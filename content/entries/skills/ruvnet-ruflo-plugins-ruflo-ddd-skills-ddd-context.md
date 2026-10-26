---
slug: ruvnet-ruflo-plugins-ruflo-ddd-skills-ddd-context
name: ddd-context
tagline: Create and manage a DDD bounded context with standard directory
  structure. Use when starting a new subdomain, splitting a monolith into
  bounded contex
summary: Create a bounded context directory structure for the given context name.
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
  subpath: plugins/ruflo-ddd/skills/ddd-context
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
  path: plugins/ruflo-ddd/skills/ddd-context/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.545Z
  truncated: false
type: agent_skill
skill:
  skill_name: ddd-context
  description: Create and manage a DDD bounded context with standard directory
    structure. Use when starting a new subdomain, splitting a monolith into
    bounded contexts, or scaffolding the domain/application/infrastructure
    layout for a fresh module.
  folder_path: plugins/ruflo-ddd/skills/ddd-context
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Create a bounded context directory structure for the given context name.

Parse `$ARGUMENTS` as the context name (kebab-case). If empty, list existing contexts.

## Steps

1. **Validate name**: Ensure the context name is kebab-case and does not already exist under `src/`.

2. **Create directory structure**:
   ```
   src/<context-name>/
     domain/
       entities/
       value-objects/
       events/
       services/
       repositories/
     application/
     infrastructure/
   ```

3. **Generate index files**:
   - `src/<context-name>/domain/entities/index.ts` -- barrel export for entities
   - `src/<context-name>/domain/value-objects/index.ts` -- barrel export for value objects
   - `src/<context-name>/domain/events/index.ts` -- barrel export for domain events
   - `src/<context-name>/domain/services/index.ts` -- barrel export for domain services
   - `src/<context-name>/domain/repositories/index.ts` -- barrel export for repository interfaces
   - `src/<context-name>/domain/index.ts` -- re-export all domain submodules
   - `src/<context-name>/application/index.ts` -- barrel export for application services
   - `src/<context-name>/infrastructure/index.ts` -- barrel export for infrastructure implementations
   - `src/<context-name>/index.ts` -- public API of the bounded context (re-exports domain and application only, NOT infrastructure)

4. **Store in domain model graph**:
   ```
   mcp__plugin_ruflo-core_ruflo__agentdb_hierarchical-store({ key: "domain/context-<context-name>", value: "Bounded context <context-name> (parent: domain)", tier: "semantic" })
   mcp__plugin_ruflo-core_ruflo__agentdb_causal-edge({ sourceId: "entity:domain", targetId: "entity:context-<context-name>", relation: "contains" })
   mcp__plugin_ruflo-core_ruflo__memory_store({ key: "ddd-context-<context-name>", value: "Created bounded context", namespace: "tasks" })
   ```

5. **Report**: Confirm the context was created and list the generated files.
