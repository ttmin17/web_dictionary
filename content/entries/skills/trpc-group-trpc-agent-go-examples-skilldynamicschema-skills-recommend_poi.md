---
slug: trpc-group-trpc-agent-go-examples-skilldynamicschema-skills-recommend_poi
name: recommend_poi
tagline: Recommend a POI in a city (schema + deterministic result).
summary: Recommend a POI in a city (schema + deterministic result).
categories:
  - agent-frameworks
tags:
  - a2a
  - a2a-protocol
  - ag-ui
  - agent-framework
status: active
quality_percentile: 85
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: examples/skilldynamicschema/skills/recommend_poi
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1906
  last_commit: 2026-11-05T12:27:27Z
  stars_delta_7d: 29
  stars_growth_pct: 1.5
  trending_score: 29.45
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1860
    - 1870
    - 1877
    - 1906
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: examples/skilldynamicschema/skills/recommend_poi/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:08.351Z
  truncated: false
type: agent_skill
skill:
  skill_name: recommend_poi
  description: Recommend a POI in a city (schema + deterministic result).
  folder_path: examples/skilldynamicschema/skills/recommend_poi
  extra_files:
    - result.json
  pack_total_skills: 24
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

# recommend_poi
This skill is used by the dynamic structured output demo.

## Output JSON Schema

```json
{
  "type": "object",
  "properties": {
    "poi": {
      "type": "string",
      "description": "Point of interest"
    },
    "city": {
      "type": "string",
      "description": "City name"
    },
    "score": {
      "type": "integer",
      "description": "A deterministic score"
    }
  },
  "required": [
    "poi",
    "city",
    "score"
  ],
  "additionalProperties": false
}
```

## Commands

Print JSON result to stdout:

```bash
cat result.json
```
