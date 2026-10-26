---
slug: ruvnet-ruflo-plugins-ruflo-migrations-skills-migrate-create
name: migrate-create
tagline: Create a new sequentially numbered database migration with up/down SQL files
summary: When you need to create a new database migration for schema changes
  such as creating tables, adding columns, creating indexes, or modifying
  constraints.
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
  subpath: plugins/ruflo-migrations/skills/migrate-create
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
  path: plugins/ruflo-migrations/skills/migrate-create/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.547Z
  truncated: false
type: agent_skill
skill:
  skill_name: migrate-create
  description: Create a new sequentially numbered database migration with up/down SQL files
  folder_path: plugins/ruflo-migrations/skills/migrate-create
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Migrate Create
Generate a new database migration with sequential numbering and up/down SQL file pair.

## When to use

When you need to create a new database migration for schema changes such as creating tables, adding columns, creating indexes, or modifying constraints.

## Steps

1. **Determine next number** -- use `Glob` to scan the migrations directory for existing migration files and find the highest number, then increment by 1 (zero-pad to 3 digits)
2. **Select template** -- based on the `<name>`, choose the appropriate SQL template:
   - Names starting with `create_` -> CREATE TABLE template
   - Names starting with `add_` -> ALTER TABLE ADD COLUMN template
   - Names starting with `drop_` -> DROP with safety checks
   - Names containing `index` -> CREATE INDEX template
   - Other -> generic migration template with placeholder comments
3. **Generate up migration** -- write `NNN_<name>.up.sql` with the appropriate SQL using IF NOT EXISTS for idempotency
4. **Generate down migration** -- write `NNN_<name>.down.sql` with the reverse operation using IF EXISTS
5. **Search past patterns** -- call `mcp__plugin_ruflo-core_ruflo__agentdb_pattern-search` (ReasoningBank-routed; **don't** pass a `namespace` argument — pattern-* tools ignore it).
6. **Store metadata** -- call `mcp__plugin_ruflo-core_ruflo__memory_store --namespace migrations` to record the migration with number, name, status (pending), and file paths. The `memory_*` tool family routes by namespace; `agentdb_hierarchical-*` does NOT (it routes by tier `working|episodic|semantic`), so use `memory_*` here. See [ruflo-agentdb ADR-0001 §"Namespace convention"](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-migrations/skills/migrate-create/../../../ruflo-agentdb/docs/adrs/0001-agentdb-optimization.md).
7. **Report** -- display: migration number, file paths created, template used, any similar past migrations found

## CLI alternative

```bash
npx @claude-flow/cli@latest memory store --namespace migrations --key "migration-NNN_NAME" --value '{"number": NNN, "name": "NAME", "status": "pending"}'
```
