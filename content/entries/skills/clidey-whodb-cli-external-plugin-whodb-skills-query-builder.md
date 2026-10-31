---
slug: clidey-whodb-cli-external-plugin-whodb-skills-query-builder
name: query-builder
tagline: Convert natural language questions into SQL queries. Activates when
  users ask data questions in plain English like "show me users who signed up
  last w
summary: These database-only MCP tools require the database module enabled
  through whodb setup. Keep the MCP command at whodb mcp serve. For platform
  resources, use the WhoDB skill and discover available whodbplatform tools
  in...
categories:
  - coding-agents
status: active
quality_percentile: 34
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: clidey/whodb
  subpath: cli/external-plugin/whodb/skills/query-builder
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5036
  last_commit: 2026-10-13T15:37:17Z
  stars_delta_7d: 185
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 5036
    - 5036
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: clidey/whodb
  path: cli/external-plugin/whodb/skills/query-builder/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:54:58.214Z
  truncated: false
type: agent_skill
skill:
  skill_name: query-builder
  description: Convert natural language questions into SQL queries. Activates when
    users ask data questions in plain English like "show me users who signed up
    last week" or "find orders over $100".
  folder_path: cli/external-plugin/whodb/skills/query-builder
  extra_files: []
tags: []
---

# Query Builder
Convert natural language questions into SQL queries using the database schema.

These database-only MCP tools require the database module enabled through `whodb setup`. Keep the MCP command at `whodb mcp serve`. For platform resources, use the WhoDB skill and discover available `whodb_platform_*` tools instead.

## When to Use

Activate when user asks questions like:
- "Show me all users who signed up last month"
- "Find orders greater than $100"
- "Which products have low inventory?"
- "Get the top 10 customers by total spend"

## Workflow

### 1. Understand the Schema
Before generating SQL, always check the table structure:

```
whodb_tables(connection="...") → Get available tables
whodb_columns(table="relevant_table") → Get column names and types
```

### 2. Identify Intent
Parse the natural language request:
- **Subject**: What entity? (users, orders, products)
- **Filter**: What conditions? (last month, > $100, active)
- **Aggregation**: Count, sum, average, max, min?
- **Grouping**: By what dimension?
- **Ordering**: Sort by what? Ascending/descending?
- **Limit**: How many results?

### 3. Map to Schema
- Match entities to table names
- Match attributes to column names
- Identify foreign key joins needed

### 4. Generate SQL
Build the query following SQL best practices:

```sql
SELECT columns
FROM table
[JOIN other_table ON condition]
WHERE filters
[GROUP BY columns]
[HAVING aggregate_condition]
ORDER BY column [ASC|DESC]
LIMIT n;
```

### 5. Execute and Present
```
whodb_query(query="generated SQL")
```

## Translation Patterns

| Natural Language | SQL Pattern |
|------------------|-------------|
| "last week/month/year" | `WHERE date_col >= DATE_SUB(NOW(), INTERVAL 1 WEEK)` |
| "more than X" / "greater than X" | `WHERE col > X` |
| "top N" | `ORDER BY col DESC LIMIT N` |
| "how many" | `SELECT COUNT(*)` |
| "total" / "sum of" | `SELECT SUM(col)` |
| "average" | `SELECT AVG(col)` |
| "for each" / "by" | `GROUP BY col` |
| "between X and Y" | `WHERE col BETWEEN X AND Y` |
| "contains" / "like" | `WHERE col LIKE '%term%'` |
| "starts with" | `WHERE col LIKE 'term%'` |
| "is empty" / "is null" | `WHERE col IS NULL` |
| "is not empty" | `WHERE col IS NOT NULL` |

## Date Handling by Database

### PostgreSQL
```sql
WHERE created_at >= NOW() - INTERVAL '7 days'
WHERE created_at >= DATE_TRUNC('month', CURRENT_DATE)
```

### MySQL
```sql
WHERE created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
WHERE created_at >= DATE_FORMAT(NOW(), '%Y-%m-01')
```

### SQLite
```sql
WHERE created_at >= DATE('now', '-7 days')
WHERE created_at >= DATE('now', 'start of month')
```

## Examples

### "Show me users who signed up this month"
```sql
SELECT * FROM users
WHERE created_at >= DATE_TRUNC('month', CURRENT_DATE)
ORDER BY created_at DESC;
```

### "Find the top 5 products by sales"
```sql
SELECT p.name, SUM(oi.quantity) as total_sold
FROM products p
JOIN order_items oi ON p.id = oi.product_id
GROUP BY p.id, p.name
ORDER BY total_sold DESC
LIMIT 5;
```

### "How many orders per customer?"
```sql
SELECT customer_id, COUNT(*) as order_count
FROM orders
GROUP BY customer_id
ORDER BY order_count DESC;
```

## Safety Rules

- Always use LIMIT for exploratory queries (default: 100)
- Never generate DELETE, UPDATE, or DROP unless explicitly requested
- Warn if query might return large result sets
- Use table aliases for readability in JOINs
