---
slug: codewhale-hq-codewhale-crates-skills-assets-skills-flights
name: flights
tagline: Agent skill from codewhale-hq/Codewhale
summary: "--- name: flights description: Track flights and look up status and
  schedules. Use when: flight status, track a flight, flightaware, arrivals,
  departures, delays, or a flight number. invocation: model+user ---"
categories:
  - coding-agents
tags:
  - agent-orchestration
  - ai-agent
  - cli
  - codewhale
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: codewhale-hq/Codewhale
  subpath: crates/skills/assets/skills/flights
  official_vendor: false
  license: MIT
signals:
  stars: 41160
  last_commit: 2026-11-09T09:21:05Z
  stars_delta_7d: 2
  stars_growth_pct: 0
  trending_score: 2
  velocity_source: snapshot_delta
  sparkline_4w:
    - 41101
    - 41118
    - 41158
    - 41160
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: codewhale-hq/Codewhale
  path: crates/skills/assets/skills/flights/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:23.915Z
  truncated: false
type: agent_skill
skill:
  skill_name: flights
  description: Agent skill from codewhale-hq/Codewhale
  folder_path: crates/skills/assets/skills/flights
  extra_files: []
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: codewhale-hq-codewhale
---

---
name: flights
description: Track flights and look up status and schedules. Use when: flight status, track a flight, flightaware, arrivals, departures, delays, or a flight number.
invocation: model+user
---

# Flights

## When to use
Live status, schedules, gates, and delays for a flight the user names.

## Setup
Two paths:

1. **Web (no setup).** Flight number + date via web search; good enough for
   status, terminals, and delays.
2. **FlightAware AeroAPI (structured data).** Needs the user's API key, or
   fail loud:
   `curl -H "x-apikey: $FLIGHTAWARE_API_KEY" https://aeroapi.flightaware.com/aeroapi/flights/{ident}`

## Workflow
1. Confirm the flight identifier and date — never guess between same-number
   daily flights.
2. Report status, scheduled vs actual times, origin/destination, and terminal/gate.
3. State the timezone of every time quoted.

## Non-goals
- Do not book, change, or cancel travel.
- Do not look up other people's itineraries from a name alone.
- Do not quote times without their timezone.
