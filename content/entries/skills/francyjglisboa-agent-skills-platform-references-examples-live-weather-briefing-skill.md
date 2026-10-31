---
slug: francyjglisboa-agent-skills-platform-references-examples-live-weather-briefing-skill
name: live-weather-briefing-skill
tagline: Create a current, source-linked weather briefing for a named city using
  the Open-Meteo geocoding and forecast APIs. Activate for requests such as "wha
summary: The command makes two live, read-only API requests and writes a
  Markdown briefing. It never books travel, sends alerts, or changes external
  data.
categories:
  - domain-research
status: active
quality_percentile: 31
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: FrancyJGLisboa/agent-skills-platform
  subpath: references/examples/live-weather-briefing-skill
  official_vendor: false
  license: MIT
signals:
  stars: 2403
  last_commit: 2026-09-15T17:31:46Z
  stars_delta_7d: 54
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 2403
    - 2403
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: FrancyJGLisboa/agent-skills-platform
  path: references/examples/live-weather-briefing-skill/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:19.689Z
  truncated: false
type: agent_skill
skill:
  skill_name: live-weather-briefing-skill
  description: Create a current, source-linked weather briefing for a named city
    using the Open-Meteo geocoding and forecast APIs. Activate for requests such
    as "what is the weather in Sao Paulo?", "prepare a current weather briefing
    for Tokyo", or "get today's live conditions for New York". Do not use for
    travel booking, weather alerts, historical climatology, or safety-critical
    decisions.
  folder_path: references/examples/live-weather-briefing-skill
  extra_files:
    - .claude-plugin/marketplace.json
    - .claude-plugin/plugin.json
    - AGENTS.md
    - EVOLUTION.md
    - README.md
    - VERIFICATION.md
    - contracts/data_contract_open_meteo/.contract_id
    - contracts/data_contract_open_meteo/code/contract_health.py
    - discovery.json
    - evals/corrections/correction-20260827-135741-90678cdffd.json
tags: []
---

# /live-weather-briefing-skill
Create a current weather briefing for one city. Resolve the city through
Open-Meteo's geocoding API, then retrieve current conditions from its forecast API.
Always show the resolved location, observation time, and source URLs.

## Run

```bash
python3 scripts/run_pipeline.py --city "Sao Paulo, BR" --output briefing.md
```

The command makes two live, read-only API requests and writes a Markdown briefing.
It never books travel, sends alerts, or changes external data.

## Required behavior

1. Use the first exact geocoding result and show its country and coordinates.
2. Retrieve current temperature, apparent temperature, wind speed, weather code, and observation time.
3. State that weather is advisory and include the source URLs.
4. If a city cannot be resolved or an API response is incomplete, stop with an error; do not invent conditions.

## Gotchas

- Current conditions are model data, not a safety alert. Check local official warnings before decisions involving risk.
- A city name can be ambiguous. Include a country or region in the request when the city is not unique.
- Conditions change after retrieval; the briefing's observation time identifies the freshness of this result.
- Treat a trailing two-letter country code as a geographic qualifier, not part of the city name.
- Treat a trailing two-letter country code as a geographic qualifier, not part of the city name.
- Treat a trailing two-letter country code as a geographic qualifier, not part of the city name.

## References

- https://open-meteo.com/en/docs/geocoding-api
- https://open-meteo.com/en/docs
