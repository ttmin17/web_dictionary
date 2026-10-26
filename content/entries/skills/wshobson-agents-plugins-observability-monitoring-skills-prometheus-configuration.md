---
slug: wshobson-agents-plugins-observability-monitoring-skills-prometheus-configuration
name: prometheus-configuration
tagline: Set up Prometheus for comprehensive metric collection, storage, and
  monitoring of infrastructure and applications. Use when implementing metrics
  colle
summary: Configure Prometheus for comprehensive metric collection, alerting, and
  monitoring of infrastructure and applications.
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
  subpath: plugins/observability-monitoring/skills/prometheus-configuration
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
  path: plugins/observability-monitoring/skills/prometheus-configuration/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.201Z
  truncated: false
type: agent_skill
skill:
  skill_name: prometheus-configuration
  description: Set up Prometheus for comprehensive metric collection, storage, and
    monitoring of infrastructure and applications. Use when implementing metrics
    collection, setting up monitoring infrastructure, or configuring alerting
    systems.
  folder_path: plugins/observability-monitoring/skills/prometheus-configuration
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

# Prometheus Configuration
Complete guide to Prometheus setup, metric collection, scrape configuration, and recording rules.

## Purpose

Configure Prometheus for comprehensive metric collection, alerting, and monitoring of infrastructure and applications.

## When to Use

- Set up Prometheus monitoring
- Configure metric scraping
- Create recording rules
- Design alert rules
- Implement service discovery

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Best Practices

1. **Use consistent naming** for metrics (prefix_name_unit)
2. **Set appropriate scrape intervals** (15-60s typical)
3. **Use recording rules** for expensive queries
4. **Implement high availability** (multiple Prometheus instances)
5. **Configure retention** based on storage capacity
6. **Use relabeling** for metric cleanup
7. **Monitor Prometheus itself**
8. **Implement federation** for large deployments
9. **Use Thanos/Cortex** for long-term storage
10. **Document custom metrics**

## Troubleshooting

**Check scrape targets:**

```bash
curl http://localhost:9090/api/v1/targets
```

**Check configuration:**

```bash
curl http://localhost:9090/api/v1/status/config
```

**Test query:**

```bash
curl 'http://localhost:9090/api/v1/query?query=up'
```


## Related Skills

- `grafana-dashboards` - For visualization
- `slo-implementation` - For SLO monitoring
- `distributed-tracing` - For request tracing
