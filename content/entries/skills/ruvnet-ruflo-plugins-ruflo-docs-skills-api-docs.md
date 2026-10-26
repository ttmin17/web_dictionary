---
slug: ruvnet-ruflo-plugins-ruflo-docs-skills-api-docs
name: api-docs
tagline: Generate API documentation from source code with JSDoc and OpenAPI support
summary: "Generate API documentation from TypeScript/JavaScript source:"
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
  subpath: plugins/ruflo-docs/skills/api-docs
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
  path: plugins/ruflo-docs/skills/api-docs/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.545Z
  truncated: false
type: agent_skill
skill:
  skill_name: api-docs
  description: Generate API documentation from source code with JSDoc and OpenAPI support
  folder_path: plugins/ruflo-docs/skills/api-docs
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Generate API documentation from TypeScript/JavaScript source:

1. **Scan exports**: Find all public functions, classes, and interfaces
2. **Extract JSDoc**: Parse `@param`, `@returns`, `@throws`, `@example` annotations
3. **Generate missing docs**: Add JSDoc for undocumented public APIs
4. **OpenAPI spec**: For HTTP endpoints, generate OpenAPI 3.0 definitions

Dispatch via MCP: `mcp__plugin_ruflo-core_ruflo__hooks_worker-dispatch({ trigger: "document", context: "api" })`

Conventions:
- Every public export must have a JSDoc comment
- Include `@param` with type and description
- Include `@returns` with type and description
- Include `@throws` for known error conditions
- Include `@example` for non-obvious usage
