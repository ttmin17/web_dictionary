---
slug: jeffallan-claude-skills-skills-database-optimizer
name: database-optimizer
tagline: Optimizes database queries and improves performance across PostgreSQL
  and MySQL systems. Use when investigating slow queries, analyzing execution
  plan
summary: "- Analyzing slow queries and execution plans - Designing optimal index
  strategies - Tuning database configuration parameters - Optimizing schema
  design and partitioning - Reducing lock contention and deadlocks - Impro..."
categories:
  - other
tags:
  - ai-agents
  - claude
  - claude-code
  - claude-marketplace
status: active
quality_percentile: 71
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: Jeffallan/claude-skills
  subpath: skills/database-optimizer
  official_vendor: false
  license: MIT
signals:
  stars: 12172
  last_commit: 2026-10-30T18:00:19Z
  stars_delta_7d: 110
  stars_growth_pct: 0.9
  trending_score: 111
  velocity_source: snapshot_delta
  sparkline_4w:
    - 11852
    - 11937
    - 12062
    - 12172
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Jeffallan/claude-skills
  path: skills/database-optimizer/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:30.104Z
  truncated: false
type: agent_skill
skill:
  skill_name: database-optimizer
  description: Optimizes database queries and improves performance across
    PostgreSQL and MySQL systems. Use when investigating slow queries, analyzing
    execution plans, or optimizing database performance. Invoke for index
    design, query rewrites, configuration tuning, partitioning strategies, lock
    contention resolution.
  folder_path: skills/database-optimizer
  extra_files:
    - references/index-strategies.md
    - references/monitoring-analysis.md
    - references/mysql-tuning.md
    - references/postgresql-tuning.md
    - references/query-optimization.md
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jeffallan-claude-skills
---

# Database Optimizer
Senior database optimizer with expertise in performance tuning, query optimization, and scalability across multiple database systems.

## When to Use This Skill

- Analyzing slow queries and execution plans
- Designing optimal index strategies
- Tuning database configuration parameters
- Optimizing schema design and partitioning
- Reducing lock contention and deadlocks
- Improving cache hit rates and memory usage

## Core Workflow

1. **Analyze Performance** — Capture baseline metrics and run `EXPLAIN ANALYZE` before any changes
2. **Identify Bottlenecks** — Find inefficient queries, missing indexes, config issues
3. **Design Solutions** — Create index strategies, query rewrites, schema improvements
4. **Implement Changes** — Apply optimizations incrementally with monitoring; validate each change before proceeding to the next
5. **Validate Results** — Re-run `EXPLAIN ANALYZE`, compare costs, measure wall-clock improvement, document changes

> ⚠️ Always test changes in non-production first. Revert immediately if write performance degrades or replication lag increases.

## Reference Guide

Load detailed guidance based on context:

| Topic | Reference | Load When |
|-------|-----------|-----------|
| Query Optimization | `references/query-optimization.md` | Analyzing slow queries, execution plans |
| Index Strategies | `references/index-strategies.md` | Designing indexes, covering indexes |
| PostgreSQL Tuning | `references/postgresql-tuning.md` | PostgreSQL-specific optimizations |
| MySQL Tuning | `references/mysql-tuning.md` | MySQL-specific optimizations |
| Monitoring & Analysis | `references/monitoring-analysis.md` | Performance metrics, diagnostics |

## Common Operations & Examples

### Identify Top Slow Queries (PostgreSQL)
```sql
-- Requires pg_stat_statements extension
SELECT query,
       calls,
       round(total_exec_time::numeric, 2)  AS total_ms,
       round(mean_exec_time::numeric, 2)   AS mean_ms,
       round(stddev_exec_time::numeric, 2) AS stddev_ms,
       rows
FROM   pg_stat_statements
ORDER  BY mean_exec_time DESC
LIMIT  20;
```

### Capture an Execution Plan
```sql
-- Use BUFFERS to expose cache hit vs. disk read ratio
EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
SELECT o.id, c.name
FROM   orders o
JOIN   customers c ON c.id = o.customer_id
WHERE  o.status = 'pending'
  AND  o.created_at > now() - interval '7 days';
```

### Reading EXPLAIN Output — Key Patterns to Find

| Pattern | Symptom | Typical Remedy |
|---------|---------|----------------|
| `Seq Scan` on large table | High row estimate, no filter selectivity | Add B-tree index on filter column |
| `Nested Loop` with large outer set | Exponential row growth in inner loop | Consider Hash Join; index inner join key |
| `cost=... rows=1` but actual rows=50000 | Stale statistics | Run `ANALYZE <table>;` |
| `Buffers: hit=10 read=90000` | Low buffer cache hit rate | Increase `shared_buffers`; add covering index |
| `Sort Method: external merge` | Sort spilling to disk | Increase `work_mem` for the session |

### Create a Covering Index
```sql
-- Covers the filter AND the projected columns, eliminating a heap fetch
CREATE INDEX CONCURRENTLY idx_orders_status_created_covering
    ON orders (status, created_at)
    INCLUDE (customer_id, total_amount);
```

### Validate Improvement
```sql
-- Before optimization: save plan & timing
EXPLAIN (ANALYZE, BUFFERS) <query>;   -- note "Execution Time: X ms"

-- After optimization: compare
EXPLAIN (ANALYZE, BUFFERS) <query>;   -- target meaningful reduction in cost & time

-- Confirm index is actually used
SELECT indexname, idx_scan, idx_tup_read, idx_tup_fetch
FROM   pg_stat_user_indexes
WHERE  relname = 'orders';
```

### MySQL: Find Slow Queries
```sql
-- Inspect slow query log candidates
SELECT * FROM performance_schema.events_statements_summary_by_digest
ORDER  BY SUM_TIMER_WAIT DESC
LIMIT  20;

-- Execution plan
EXPLAIN FORMAT=JSON
SELECT * FROM orders WHERE status = 'pending' AND created_at > NOW() - INTERVAL 7 DAY;
```

## Constraints

### MUST DO
- Capture `EXPLAIN (ANALYZE, BUFFERS)` output **before** optimizing — this is the baseline
- Measure performance before and after every change
- Create indexes with `CONCURRENTLY` (PostgreSQL) to avoid table locks
- Test in non-production; roll back if write performance or replication lag worsens
- Document all optimization decisions with before/after metrics
- Run `ANALYZE` after bulk data changes to refresh statistics

### MUST NOT DO
- Apply optimizations without a measured baseline
- Create redundant or unused indexes
- Make multiple changes simultaneously (impossible to attribute impact)
- Ignore write amplification caused by new indexes
- Neglect `VACUUM` / statistics maintenance

## Output Templates

When optimizing database performance, provide:
1. Performance analysis with baseline metrics (query time, cost, buffer hit ratio)
2. Identified bottlenecks and root causes (with EXPLAIN evidence)
3. Optimization strategy with specific changes
4. Implementation SQL / config changes
5. Validation queries to measure improvement
6. Monitoring recommendations

Maintained by [@jeffallan](https://github.com/jeffallan), Principal Consultant at [Synergetic Solutions](https://synergetic.solutions)

[Documentation](https://jeffallan.github.io/claude-skills/skills/infrastructure/database-optimizer/)
