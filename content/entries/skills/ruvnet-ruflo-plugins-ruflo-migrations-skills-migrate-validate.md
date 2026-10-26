---
slug: ruvnet-ruflo-plugins-ruflo-migrations-skills-migrate-validate
name: migrate-validate
tagline: Validate pending migrations for foreign key consistency, rollback
  safety, and best practices
summary: Before applying migrations to catch issues early -- foreign key
  references to non-existent tables, missing rollback SQL, destructive
  operations without safeguards, and naming convention violations.
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
  subpath: plugins/ruflo-migrations/skills/migrate-validate
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
  path: plugins/ruflo-migrations/skills/migrate-validate/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.547Z
  truncated: false
type: agent_skill
skill:
  skill_name: migrate-validate
  description: Validate pending migrations for foreign key consistency, rollback
    safety, and best practices
  folder_path: plugins/ruflo-migrations/skills/migrate-validate
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Migrate Validate
Validate all pending database migrations for correctness, safety, and adherence to best practices.

## When to use

Before applying migrations to catch issues early -- foreign key references to non-existent tables, missing rollback SQL, destructive operations without safeguards, and naming convention violations.

## Steps

1. **Find pending migrations** -- use `Glob` to list all migration files, cross-reference with applied history via `mcp__plugin_ruflo-core_ruflo__memory_search --namespace migrations` (or `memory_list`) to identify pending ones. The `memory_*` tool family routes by namespace; `agentdb_hierarchical-*` does NOT (it routes by tier), so use `memory_*` here.
2. **Parse SQL** -- use `Read` to load each pending `.up.sql` and `.down.sql` file and parse the SQL statements
3. **Check foreign keys** -- verify that all REFERENCES targets exist in the current schema or in prior migrations (both applied and pending)
4. **Check NOT NULL defaults** -- verify that any ADD COLUMN with NOT NULL has a DEFAULT value
5. **Check rollback completeness** -- verify every CREATE/ALTER in the UP file has a corresponding DROP/ALTER in the DOWN file
6. **Flag destructive ops** -- warn on DROP TABLE, DROP COLUMN, TRUNCATE without explicit confirmation
7. **Check idempotency** -- verify IF EXISTS / IF NOT EXISTS is used for safety
8. **Check naming** -- verify table names are plural, column names are snake_case, index names follow `idx_table_column` convention
9. **Store validation patterns** -- two paths (per ruflo-cost-tracker ADR-0001 dual-path pattern):
   - **Pattern store (typed, recommended)**: `mcp__plugin_ruflo-core_ruflo__agentdb_pattern-store` with `type: 'migration-validation'`. No namespace arg — ReasoningBank routes it.
   - **Plain store (namespace-routable)**: `mcp__plugin_ruflo-core_ruflo__memory_store --namespace migrations` for validation results tied to a specific migration number.
10. **Report** -- display: errors (must fix), warnings (should fix), info (suggestions), with file path and line number for each issue

## CLI alternative

```bash
npx @claude-flow/cli@latest memory search --query "migration validation results" --namespace migrations
```
