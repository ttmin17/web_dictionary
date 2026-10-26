---
slug: ruvnet-ruflo-plugins-ruflo-iot-cognitum-skills-iot-register
name: iot-register
tagline: Register a Cognitum Seed device by endpoint and establish agent bridge
summary: Register a Cognitum Seed device. Creates a SeedClient connection,
  fetches identity, and assigns initial trust level.
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-iot-cognitum/skills/iot-register
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: plugins/ruflo-iot-cognitum/skills/iot-register/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.546Z
  truncated: false
type: agent_skill
skill:
  skill_name: iot-register
  description: Register a Cognitum Seed device by endpoint and establish agent bridge
  folder_path: plugins/ruflo-iot-cognitum/skills/iot-register
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Register a Cognitum Seed device. Creates a SeedClient connection, fetches identity, and assigns initial trust level.

Default endpoint: `http://169.254.42.1/` — the Cognitum Seed link-local USB Ethernet address. Use this when no endpoint is supplied.

Steps:
1. Resolve ENDPOINT: use the user-supplied value, or default to `http://169.254.42.1/`.
2. `npx -y -p @claude-flow/plugin-iot-cognitum@1.0.0 cognitum-iot register ENDPOINT`
3. If pairing token provided: `npx -y -p @claude-flow/plugin-iot-cognitum@1.0.0 cognitum-iot pair DEVICE_ID`
4. Show device status: `npx -y -p @claude-flow/plugin-iot-cognitum@1.0.0 cognitum-iot status DEVICE_ID`

Store registration event:
`mcp__plugin_ruflo-core_ruflo__memory_store({ key: "iot-register-DEVICEID", value: "Registered at ENDPOINT", namespace: "iot-devices" })`
