---
slug: ruvnet-ruflo-plugins-ruflo-sparc-skills-sparc-spec
name: sparc-spec
tagline: Run the SPARC Specification phase — gather requirements, define
  acceptance criteria, identify constraints, and store the spec in memory
summary: When starting a new feature or project that needs structured
  requirements gathering before any code is written. This phase produces the
  foundational specification that all subsequent phases (Pseudocode,
  Architecture,...
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
  subpath: plugins/ruflo-sparc/skills/sparc-spec
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
  path: plugins/ruflo-sparc/skills/sparc-spec/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.549Z
  truncated: false
type: agent_skill
skill:
  skill_name: sparc-spec
  description: Run the SPARC Specification phase — gather requirements, define
    acceptance criteria, identify constraints, and store the spec in memory
  folder_path: plugins/ruflo-sparc/skills/sparc-spec
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# SPARC Specification Phase
Run Phase 1 of the SPARC methodology: define what must be built and how success is measured.

## When to use

When starting a new feature or project that needs structured requirements gathering before any code is written. This phase produces the foundational specification that all subsequent phases (Pseudocode, Architecture, Refinement, Completion) build upon.

## Steps

1. **Initialize phase tracking** — call `mcp__plugin_ruflo-core_ruflo__hooks_intelligence_trajectory-start` with metadata `{ "phase": "specification", "feature": "$ARGUMENTS" }`

2. **Check for prior work** — call `mcp__plugin_ruflo-core_ruflo__memory_retrieve` with namespace `sparc-state` and exact key `current-phase-{feature-slug}` to see if this workflow exists. If it does, retrieve existing artifacts. If not, initialize state at that exact key with phase 1, `status: "active"`, and `startedAt` and `updatedAt` set to the current ISO timestamp.

3. **Search for similar patterns** — call `mcp__plugin_ruflo-core_ruflo__neural_predict` with the feature description to find relevant past specifications and learned patterns

4. **Gather requirements** — analyze the feature description and the codebase to identify:
   - **Functional requirements**: what the feature must do (user-facing behaviors)
   - **Non-functional requirements**: performance targets, security constraints, scalability needs
   - **Integration points**: what existing systems or APIs are affected
   - **Data requirements**: what data is created, read, updated, or deleted

5. **Define acceptance criteria** — write at least 3 concrete, testable acceptance criteria in Given/When/Then format:
   ```
   AC-1: Given [precondition], when [action], then [expected result]
   AC-2: Given [precondition], when [action], then [expected result]
   AC-3: Given [precondition], when [action], then [expected result]
   ```

6. **Identify constraints** — document:
   - Performance constraints (latency, throughput, resource limits)
   - Security constraints (authentication, authorization, data sensitivity)
   - Compatibility constraints (browser support, API versions, backward compatibility)
   - Infrastructure constraints (deployment environment, dependencies)

7. **Map edge cases** — list at least 3 edge cases or failure scenarios:
   - What happens with invalid input?
   - What happens under concurrent access?
   - What happens when external dependencies fail?

8. **Store specification** — call `mcp__plugin_ruflo-core_ruflo__memory_store` with:
   - Namespace: `sparc-phases`
   - Key: `spec-{feature-slug}`
   - Value: JSON with `{ status: "complete", requirements, acceptanceCriteria, constraints, edgeCases, integrationPoints }`

9. **Update phase state** — call `mcp__plugin_ruflo-core_ruflo__memory_store` with:
   - Namespace: `sparc-state`
   - Key: `current-phase-{feature-slug}`
   - Value: preserve existing state fields, update artifacts list to include the spec key, and set `updatedAt` to the current ISO timestamp

10. **Record trajectory step** — call `mcp__plugin_ruflo-core_ruflo__hooks_intelligence_trajectory-step` with the specification summary

11. **Present specification** — display the full specification document to the user with a summary table and suggest running `/ruflo-sparc:ruflo-sparc advance` to pass the gate and move to the Pseudocode phase

## Output format

```
# Specification: {Feature Name}

## Requirements
### Functional
- FR-1: ...
- FR-2: ...

### Non-Functional
- NFR-1: ...

## Acceptance Criteria
- AC-1: Given ..., when ..., then ...
- AC-2: Given ..., when ..., then ...
- AC-3: Given ..., when ..., then ...

## Constraints
- Performance: ...
- Security: ...
- Compatibility: ...

## Edge Cases
- EC-1: ...
- EC-2: ...
- EC-3: ...

## Integration Points
- IP-1: ...

---
Phase 1 complete. Run `/ruflo-sparc:ruflo-sparc advance` to pass the gate check.
```
