---
slug: wshobson-agents-plugins-backend-development-skills-projection-patterns
name: projection-patterns
tagline: Build read models and projections from event streams. Use when
  implementing CQRS read sides, building materialized views, or optimizing query
  performa
summary: "- Building CQRS read models - Creating materialized views from events
  - Optimizing query performance - Implementing real-time dashboards - Building
  search indexes from events - Aggregating data across streams"
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 92
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/backend-development/skills/projection-patterns
  official_vendor: false
  license: MIT
signals:
  stars: 42342
  last_commit: 2026-11-09T01:08:33Z
  stars_delta_7d: 113
  stars_growth_pct: 0.3
  trending_score: 113.3
  velocity_source: snapshot_delta
  sparkline_4w:
    - 41052
    - 41725
    - 42229
    - 42342
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/backend-development/skills/projection-patterns/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:30.177Z
  truncated: false
type: agent_skill
skill:
  skill_name: projection-patterns
  description: Build read models and projections from event streams. Use when
    implementing CQRS read sides, building materialized views, or optimizing
    query performance in event-sourced systems.
  folder_path: plugins/backend-development/skills/projection-patterns
  extra_files:
    - references/details.md
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Projection Patterns
Comprehensive guide to building projections and read models for event-sourced systems.

## When to Use This Skill

- Building CQRS read models
- Creating materialized views from events
- Optimizing query performance
- Implementing real-time dashboards
- Building search indexes from events
- Aggregating data across streams

## Core Concepts

### 1. Projection Architecture

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│ Event Store │────►│ Projector   │────►│ Read Model  │
│             │     │             │     │ (Database)  │
│ ┌─────────┐ │     │ ┌─────────┐ │     │ ┌─────────┐ │
│ │ Events  │ │     │ │ Handler │ │     │ │ Tables  │ │
│ └─────────┘ │     │ │ Logic   │ │     │ │ Views   │ │
│             │     │ └─────────┘ │     │ │ Cache   │ │
└─────────────┘     └─────────────┘     └─────────────┘
```

### 2. Projection Types

| Type           | Description                 | Use Case               |
| -------------- | --------------------------- | ---------------------- |
| **Live**       | Real-time from subscription | Current state queries  |
| **Catchup**    | Process historical events   | Rebuilding read models |
| **Persistent** | Stores checkpoint           | Resume after restart   |
| **Inline**     | Same transaction as write   | Strong consistency     |

## Templates and detailed worked examples

Full template library and detailed worked examples live in `references/details.md`. Read that file when you need the concrete templates.

## Best Practices

### Do's

- **Make projections idempotent** - Safe to replay
- **Use transactions** - For multi-table updates
- **Store checkpoints** - Resume after failures
- **Monitor lag** - Alert on projection delays
- **Plan for rebuilds** - Design for reconstruction

### Don'ts

- **Don't couple projections** - Each is independent
- **Don't skip error handling** - Log and alert on failures
- **Don't ignore ordering** - Events must be processed in order
- **Don't over-normalize** - Denormalize for query patterns
