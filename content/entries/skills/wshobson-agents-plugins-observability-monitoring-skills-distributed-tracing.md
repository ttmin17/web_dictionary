---
slug: wshobson-agents-plugins-observability-monitoring-skills-distributed-tracing
name: distributed-tracing
tagline: Implement distributed tracing with Jaeger and Tempo to track requests
  across microservices and identify performance bottlenecks. Use when debugging
  mi
summary: Track requests across distributed systems to understand latency,
  dependencies, and failure points.
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
  subpath: plugins/observability-monitoring/skills/distributed-tracing
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
  path: plugins/observability-monitoring/skills/distributed-tracing/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.201Z
  truncated: false
type: agent_skill
skill:
  skill_name: distributed-tracing
  description: Implement distributed tracing with Jaeger and Tempo to track
    requests across microservices and identify performance bottlenecks. Use when
    debugging microservices, analyzing request flows, or implementing
    observability for distributed systems.
  folder_path: plugins/observability-monitoring/skills/distributed-tracing
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

# Distributed Tracing
Implement distributed tracing with Jaeger and Tempo for request flow visibility across microservices.

## Purpose

Track requests across distributed systems to understand latency, dependencies, and failure points.

## When to Use

- Debug latency issues
- Understand service dependencies
- Identify bottlenecks
- Trace error propagation
- Analyze request paths

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Best Practices

1. **Sample appropriately** (1-10% in production)
2. **Add meaningful tags** (user_id, request_id)
3. **Propagate context** across all service boundaries
4. **Log exceptions** in spans
5. **Use consistent naming** for operations
6. **Monitor tracing overhead** (<1% CPU impact)
7. **Set up alerts** for trace errors
8. **Implement distributed context** (baggage)
9. **Use span events** for important milestones
10. **Document instrumentation** standards

## Integration with Logging

### Correlated Logs

```python
import logging
from opentelemetry import trace

logger = logging.getLogger(__name__)

def process_request():
    span = trace.get_current_span()
    trace_id = span.get_span_context().trace_id

    logger.info(
        "Processing request",
        extra={"trace_id": format(trace_id, '032x')}
    )
```

## Troubleshooting

**No traces appearing:**

- Check collector endpoint
- Verify network connectivity
- Check sampling configuration
- Review application logs

**High latency overhead:**

- Reduce sampling rate
- Use batch span processor
- Check exporter configuration


## Related Skills

- `prometheus-configuration` - For metrics
- `grafana-dashboards` - For visualization
- `slo-implementation` - For latency SLOs
