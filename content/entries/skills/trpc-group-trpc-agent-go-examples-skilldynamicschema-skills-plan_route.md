---
slug: trpc-group-trpc-agent-go-examples-skilldynamicschema-skills-plan_route
name: plan_route
tagline: Plan a route and return distance + ETA (schema + deterministic result).
summary: "Print JSON result to stdout:"
categories:
  - agent-frameworks
tags:
  - a2a
  - a2a-protocol
  - ag-ui
  - agent-framework
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: examples/skilldynamicschema/skills/plan_route
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1877
  last_commit: 2026-10-26T06:16:05Z
  stars_delta_7d: 7
  stars_growth_pct: 0.4
  trending_score: 7.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1860
    - 1870
    - 1877
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: examples/skilldynamicschema/skills/plan_route/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:23.535Z
  truncated: false
type: agent_skill
skill:
  skill_name: plan_route
  description: Plan a route and return distance + ETA (schema + deterministic result).
  folder_path: examples/skilldynamicschema/skills/plan_route
  extra_files:
    - result.json
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

# plan_route
This skill is used by the dynamic structured output demo.

## Output JSON Schema

```json
{
  "type": "object",
  "properties": {
    "route": {
      "type": "string",
      "description": "Route name"
    },
    "distance_km": {
      "type": "number",
      "description": "Distance in kilometers"
    },
    "eta_min": {
      "type": "integer",
      "description": "ETA in minutes"
    }
  },
  "required": [
    "route",
    "distance_km",
    "eta_min"
  ],
  "additionalProperties": false
}
```

## Commands

Print JSON result to stdout:

```bash
cat result.json
```
