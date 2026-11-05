---
slug: phuryn-pm-skills-pm-data-analytics-skills-sql-queries
name: sql-queries
tagline: Generate SQL queries from natural language descriptions. Supports
  BigQuery, PostgreSQL, MySQL, and other dialects. Reads database schemas from
  uploade
summary: "Example 1: Query from Schema File"
categories:
  - productivity-ops
tags:
  - agent-skill-repository
  - agent-skills
  - agentic-skills
  - claude-code-marketplace
status: active
quality_percentile: 69
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: phuryn/pm-skills
  subpath: pm-data-analytics/skills/sql-queries
  official_vendor: false
  license: MIT
signals:
  stars: 27709
  last_commit: 2026-10-29T19:09:57Z
  stars_delta_7d: 328
  stars_growth_pct: 1.2
  trending_score: 331.93
  velocity_source: snapshot_delta
  sparkline_4w:
    - 26957
    - 27192
    - 27381
    - 27709
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: phuryn/pm-skills
  path: pm-data-analytics/skills/sql-queries/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:07.697Z
  truncated: false
type: agent_skill
skill:
  skill_name: sql-queries
  description: Generate SQL queries from natural language descriptions. Supports
    BigQuery, PostgreSQL, MySQL, and other dialects. Reads database schemas from
    uploaded diagrams or documentation. Use when writing SQL, building data
    reports, exploring databases, or translating business questions into
    queries.
  folder_path: pm-data-analytics/skills/sql-queries
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: phuryn-pm-skills
---

# SQL Query Generator
## Purpose
Transform natural language requirements into optimized SQL queries across multiple database platforms. This skill helps product managers, analysts, and engineers generate accurate queries without manual syntax work.

## How It Works

### Step 1: Understand Your Database Schema
- If you provide a schema file (SQL, documentation, or diagram description), I will read and analyze it
- Extract table names, column definitions, data types, and relationships
- Identify primary keys, foreign keys, and indexing strategies

### Step 2: Process Your Request
- Clarify the exact data you need to retrieve or analyze
- Confirm the SQL dialect (BigQuery, PostgreSQL, MySQL, Snowflake, etc.)
- Ask for any additional requirements (filters, aggregations, sorting)

### Step 3: Generate Optimized Query
- Write efficient SQL that leverages your database structure
- Include comments explaining complex logic
- Add performance considerations for large datasets
- Provide alternative approaches if applicable

### Step 4: Explain and Test
- Explain the query logic in plain English
- Suggest how to test or validate results
- Offer tips for performance optimization
- If you want, generate a test script or sample data

## Usage Examples

**Example 1: Query from Schema File**
```
Upload your database_schema.sql file and say:
"Generate a query to find users who signed up in the last 30 days
and had at least 5 active sessions"
```

**Example 2: Query from Diagram Description**
```
"Here's my database: Users table (id, email, created_at), Sessions table
(id, user_id, timestamp, duration). Generate a query for average session
duration per user in January 2026."
```

**Example 3: Complex Analysis Query**
```
"Create a BigQuery query to analyze our revenue by region and customer tier,
including year-over-year growth rates."
```

## Key Capabilities

- **Multi-Dialect Support**: Works with BigQuery, PostgreSQL, MySQL, Snowflake, SQL Server
- **File Reading**: Reads schema files, SQL dumps, and data documentation
- **Query Optimization**: Suggests indexes, partitioning, and performance improvements
- **Explanation**: Breaks down queries for learning and documentation
- **Testing**: Can generate test queries and sample data scripts
- **Script Execution**: Create executable SQL scripts for your database

## Tips for Best Results

1. **Provide context**: Share your database schema or structure
2. **Be specific**: Clearly describe what data you need and any filters
3. **Mention database**: Specify which SQL dialect you're using
4. **Include constraints**: Mention data volume, time ranges, and performance needs
5. **Request format**: Ask for the query result format if you need specific output

## Output Format

You'll receive:
- **SQL Query**: Production-ready SQL code with comments
- **Explanation**: What the query does and how it works
- **Performance Notes**: Optimization tips and considerations
- **Test Script** (if requested): Sample data and validation queries

---

### Further Reading

- [The Product Analytics Playbook: AARRR, HEART, Cohorts & Funnels for PMs](https://www.productcompass.pm/p/the-product-analytics-playbook-aarrr)
- [How to Become a Technology-Literate PM](https://www.productcompass.pm/p/how-to-become-a-technology-literate)
