---
slug: trpc-group-trpc-agent-go-openclaw-skills-weather
name: weather
tagline: "Get current weather and forecasts via wttr.in or Open-Meteo. Use when:
  user asks about weather, temperature, or forecasts for any location. NOT for:
  h"
summary: "- \"What's the weather?\" - \"Will it rain today/tomorrow?\" -
  \"Temperature in [city]\" - \"Weather forecast for the week\" - Travel
  planning weather checks"
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
  subpath: openclaw/skills/weather
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
  path: openclaw/skills/weather/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:23.539Z
  truncated: false
type: agent_skill
skill:
  skill_name: weather
  description: "Get current weather and forecasts via wttr.in or Open-Meteo. Use
    when: user asks about weather, temperature, or forecasts for any location.
    NOT for: historical weather data, severe weather alerts, or detailed
    meteorological analysis. No API key needed."
  folder_path: openclaw/skills/weather
  extra_files: []
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

# Weather Skill
Get current weather conditions and forecasts.

## When to Use

✅ **USE this skill when:**

- "What's the weather?"
- "Will it rain today/tomorrow?"
- "Temperature in [city]"
- "Weather forecast for the week"
- Travel planning weather checks

## When NOT to Use

❌ **DON'T use this skill when:**

- Historical weather data → use weather archives/APIs
- Climate analysis or trends → use specialized data sources
- Hyper-local microclimate data → use local sensors
- Severe weather alerts → check official NWS sources
- Aviation/marine weather → use specialized services (METAR, etc.)

## Location

Always include a city, region, or airport code in weather queries.

## Commands

### Units

- **Metric (recommended):** add `&m` (°C, km/h)
- **US:** add `&u` (°F, mph)

### Current Weather

```bash
# One-line summary
curl "wttr.in/London?format=3&m"

# Detailed current conditions
curl "wttr.in/London?0&m"

# Specific city
curl "wttr.in/New+York?format=3&u"
```

### Forecasts

```bash
# 3-day forecast
curl "wttr.in/London?m"

# Week forecast
curl "wttr.in/London?format=v2&m"

# Specific day (0=today, 1=tomorrow, 2=day after)
curl "wttr.in/London?1&m"
```

### Format Options

```bash
# One-liner
curl "wttr.in/London?format=%l:+%c+%t+%w"

# JSON output
curl "wttr.in/London?format=j1"

# PNG image
curl "wttr.in/London.png"
```

### Format Codes

- `%c` — Weather condition emoji
- `%t` — Temperature
- `%f` — "Feels like"
- `%w` — Wind
- `%h` — Humidity
- `%p` — Precipitation
- `%l` — Location

## Quick Responses

**"What's the weather?"**

```bash
curl -s "wttr.in/London?format=%l:+%c+%t+(feels+like+%f),+%w+wind,+%h+humidity&m"
```

**"Will it rain?"**

```bash
curl -s "wttr.in/London?format=%l:+%c+%p&m"
```

**"Weekend forecast"**

```bash
curl "wttr.in/London?format=v2"
```

## Notes

- No API key needed (uses wttr.in)
- Rate limited; don't spam requests
- Works for most global cities
- Supports airport codes: `curl wttr.in/ORD`
