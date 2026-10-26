---
slug: wshobson-agents-plugins-data-engineering-skills-airflow-dag-patterns
name: airflow-dag-patterns
tagline: Build production Apache Airflow DAGs with best practices for operators,
  sensors, testing, and deployment. Use when creating data pipelines, orchestrat
summary: "- Creating data pipeline orchestration with Airflow - Designing DAG
  structures and dependencies - Implementing custom operators and sensors -
  Testing Airflow DAGs locally - Setting up Airflow in production -
  Debugging..."
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
  subpath: plugins/data-engineering/skills/airflow-dag-patterns
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
  path: plugins/data-engineering/skills/airflow-dag-patterns/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.194Z
  truncated: false
type: agent_skill
skill:
  skill_name: airflow-dag-patterns
  description: Build production Apache Airflow DAGs with best practices for
    operators, sensors, testing, and deployment. Use when creating data
    pipelines, orchestrating workflows, or scheduling batch jobs.
  folder_path: plugins/data-engineering/skills/airflow-dag-patterns
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

# Apache Airflow DAG Patterns
Production-ready patterns for Apache Airflow including DAG design, operators, sensors, testing, and deployment strategies.

## When to Use This Skill

- Creating data pipeline orchestration with Airflow
- Designing DAG structures and dependencies
- Implementing custom operators and sensors
- Testing Airflow DAGs locally
- Setting up Airflow in production
- Debugging failed DAG runs

## Core Concepts

### 1. DAG Design Principles

| Principle       | Description                         |
| --------------- | ----------------------------------- |
| **Idempotent**  | Running twice produces same result  |
| **Atomic**      | Tasks succeed or fail completely    |
| **Incremental** | Process only new/changed data       |
| **Observable**  | Logs, metrics, alerts at every step |

### 2. Task Dependencies

```python
# Linear
task1 >> task2 >> task3

# Fan-out
task1 >> [task2, task3, task4]

# Fan-in
[task1, task2, task3] >> task4

# Complex
task1 >> task2 >> task4
task1 >> task3 >> task4
```

## Quick Start

```python
# dags/example_dag.py
from datetime import datetime, timedelta
from airflow import DAG
from airflow.operators.python import PythonOperator
from airflow.operators.empty import EmptyOperator

default_args = {
    'owner': 'data-team',
    'depends_on_past': False,
    'email_on_failure': True,
    'email_on_retry': False,
    'retries': 3,
    'retry_delay': timedelta(minutes=5),
    'retry_exponential_backoff': True,
    'max_retry_delay': timedelta(hours=1),
}

with DAG(
    dag_id='example_etl',
    default_args=default_args,
    description='Example ETL pipeline',
    schedule='0 6 * * *',  # Daily at 6 AM
    start_date=datetime(2024, 1, 1),
    catchup=False,
    tags=['etl', 'example'],
    max_active_runs=1,
) as dag:

    start = EmptyOperator(task_id='start')

    def extract_data(**context):
        execution_date = context['ds']
        # Extract logic here
        return {'records': 1000}

    extract = PythonOperator(
        task_id='extract',
        python_callable=extract_data,
    )

    end = EmptyOperator(task_id='end')

    start >> extract >> end
```

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Best Practices

### Do's

- **Use TaskFlow API** - Cleaner code, automatic XCom
- **Set timeouts** - Prevent zombie tasks
- **Use `mode='reschedule'`** - For sensors, free up workers
- **Test DAGs** - Unit tests and integration tests
- **Idempotent tasks** - Safe to retry

### Don'ts

- **Don't use `depends_on_past=True`** - Creates bottlenecks
- **Don't hardcode dates** - Use `{{ ds }}` macros
- **Don't use global state** - Tasks should be stateless
- **Don't skip catchup blindly** - Understand implications
- **Don't put heavy logic in DAG file** - Import from modules
