---
slug: wshobson-agents-plugins-cloud-infrastructure-skills-service-mesh-observability
name: service-mesh-observability
tagline: Implement comprehensive observability for service meshes including
  distributed tracing, metrics, and visualization. Use when setting up mesh
  monitorin
summary: "- Setting up distributed tracing across services - Implementing
  service mesh metrics and dashboards - Debugging latency and error issues -
  Defining SLOs for service communication - Visualizing service dependencies -
  T..."
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
  subpath: plugins/cloud-infrastructure/skills/service-mesh-observability
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
  path: plugins/cloud-infrastructure/skills/service-mesh-observability/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.193Z
  truncated: false
type: agent_skill
skill:
  skill_name: service-mesh-observability
  description: Implement comprehensive observability for service meshes including
    distributed tracing, metrics, and visualization. Use when setting up mesh
    monitoring, debugging latency issues, or implementing SLOs for service
    communication.
  folder_path: plugins/cloud-infrastructure/skills/service-mesh-observability
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

# Service Mesh Observability
Complete guide to observability patterns for Istio, Linkerd, and service mesh deployments.

## When to Use This Skill

- Setting up distributed tracing across services
- Implementing service mesh metrics and dashboards
- Debugging latency and error issues
- Defining SLOs for service communication
- Visualizing service dependencies
- Troubleshooting mesh connectivity

## Core Concepts

### 1. Three Pillars of Observability

```
┌─────────────────────────────────────────────────────┐
│                  Observability                       │
├─────────────────┬─────────────────┬─────────────────┤
│     Metrics     │     Traces      │      Logs       │
│                 │                 │                 │
│ • Request rate  │ • Span context  │ • Access logs   │
│ • Error rate    │ • Latency       │ • Error details │
│ • Latency P50   │ • Dependencies  │ • Debug info    │
│ • Saturation    │ • Bottlenecks   │ • Audit trail   │
└─────────────────┴─────────────────┴─────────────────┘
```

### 2. Golden Signals for Mesh

| Signal         | Description               | Alert Threshold   |
| -------------- | ------------------------- | ----------------- |
| **Latency**    | Request duration P50, P99 | P99 > 500ms       |
| **Traffic**    | Requests per second       | Anomaly detection |
| **Errors**     | 5xx error rate            | > 1%              |
| **Saturation** | Resource utilization      | > 80%             |

## Templates and detailed worked examples

Full template library and detailed worked examples live in `references/details.md`. Read that file when you need the concrete templates.

## Best Practices

### Do's

- **Sample appropriately** - 100% in dev, 1-10% in prod
- **Use trace context** - Propagate headers consistently
- **Set up alerts** - For golden signals
- **Correlate metrics/traces** - Use exemplars
- **Retain strategically** - Hot/cold storage tiers

### Don'ts

- **Don't over-sample** - Storage costs add up
- **Don't ignore cardinality** - Limit label values
- **Don't skip dashboards** - Visualize dependencies
- **Don't forget costs** - Monitor observability costs
