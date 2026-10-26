---
slug: wshobson-agents-plugins-data-engineering-skills-data-quality-frameworks
name: data-quality-frameworks
tagline: Implement data quality validation with Great Expectations, dbt tests,
  and data contracts. Use when building data quality pipelines, implementing
  valid
summary: "- Implementing data quality checks in pipelines - Setting up Great
  Expectations validation - Building comprehensive dbt test suites -
  Establishing data contracts between teams - Monitoring data quality metrics -
  Autom..."
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/data-engineering/skills/data-quality-frameworks
  official_vendor: false
  license: MIT
signals:
  stars: 41725
  last_commit: 2026-10-26T01:08:14Z
  stars_delta_7d: 673
  stars_growth_pct: 1.6
  trending_score: 684.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
    - 41725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/data-engineering/skills/data-quality-frameworks/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.194Z
  truncated: false
type: agent_skill
skill:
  skill_name: data-quality-frameworks
  description: Implement data quality validation with Great Expectations, dbt
    tests, and data contracts. Use when building data quality pipelines,
    implementing validation rules, or establishing data contracts.
  folder_path: plugins/data-engineering/skills/data-quality-frameworks
  extra_files:
    - references/details.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Data Quality Frameworks
Production patterns for implementing data quality with Great Expectations, dbt tests, and data contracts to ensure reliable data pipelines.

## When to Use This Skill

- Implementing data quality checks in pipelines
- Setting up Great Expectations validation
- Building comprehensive dbt test suites
- Establishing data contracts between teams
- Monitoring data quality metrics
- Automating data validation in CI/CD

## Core Concepts

### 1. Data Quality Dimensions

| Dimension        | Description              | Example Check                                      |
| ---------------- | ------------------------ | -------------------------------------------------- |
| **Completeness** | No missing values        | `expect_column_values_to_not_be_null`              |
| **Uniqueness**   | No duplicates            | `expect_column_values_to_be_unique`                |
| **Validity**     | Values in expected range | `expect_column_values_to_be_in_set`                |
| **Accuracy**     | Data matches reality     | Cross-reference validation                         |
| **Consistency**  | No contradictions        | `expect_column_pair_values_A_to_be_greater_than_B` |
| **Timeliness**   | Data is recent           | `expect_column_max_to_be_between`                  |

### 2. Testing Pyramid for Data

```
          /\
         /  \     Integration Tests (cross-table)
        /────\
       /      \   Unit Tests (single column)
      /────────\
     /          \ Schema Tests (structure)
    /────────────\
```

## Quick Start

### Great Expectations Setup

```bash
# Install
pip install great_expectations

# Initialize project
great_expectations init

# Create datasource
great_expectations datasource new
```

```python
# great_expectations/checkpoints/daily_validation.yml
import great_expectations as gx

# Create context
context = gx.get_context()

# Create expectation suite
suite = context.add_expectation_suite("orders_suite")

# Add expectations
suite.add_expectation(
    gx.expectations.ExpectColumnValuesToNotBeNull(column="order_id")
)
suite.add_expectation(
    gx.expectations.ExpectColumnValuesToBeUnique(column="order_id")
)

# Validate
results = context.run_checkpoint(checkpoint_name="daily_orders")
```

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Summary: {total_passed}/{total_tables} tables passed")
        report.append("")

        for table, result in results.items():
            status = "✅" if result.passed else "❌"
            report.append(f"### {status} {table}")
            report.append(f"- Expectations: {result.total_expectations}")
            report.append(f"- Failed: {result.failed_expectations}")

            if not result.passed:
                report.append("- Failed checks:")
                for detail in result.details:
                    if not detail["success"]:
                        report.append(f"  - {detail['expectation']}: {detail['observed_value']}")
            report.append("")

        return "\n".join(report)

# Usage
context = gx.get_context()
pipeline = DataQualityPipeline(context)

tables_to_validate = {
    "orders": "orders_suite",
    "customers": "customers_suite",
    "products": "products_suite",
}

results = pipeline.run_all(tables_to_validate)
report = pipeline.generate_report(results)

# Fail pipeline if any table failed
if not all(r.passed for r in results.values()):
    print(report)
    raise ValueError("Data quality checks failed!")
```

## Best Practices

### Do's

- **Test early** - Validate source data before transformations
- **Test incrementally** - Add tests as you find issues
- **Document expectations** - Clear descriptions for each test
- **Alert on failures** - Integrate with monitoring
- **Version contracts** - Track schema changes

### Don'ts

- **Don't test everything** - Focus on critical columns
- **Don't ignore warnings** - They often precede failures
- **Don't skip freshness** - Stale data is bad data
- **Don't hardcode thresholds** - Use dynamic baselines
- **Don't test in isolation** - Test relationships too
