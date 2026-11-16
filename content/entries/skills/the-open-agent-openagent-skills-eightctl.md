---
slug: the-open-agent-openagent-skills-eightctl
name: eightctl
tagline: Control Eight Sleep pods (status, temperature, alarms, schedules).
summary: "- Config: /.config/eightctl/config.yaml - Env: EIGHTCTLEMAIL,
  EIGHTCTLPASSWORD"
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-ai
  - agi
  - chatbot
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/eightctl
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5745
  last_commit: 2026-11-06T13:17:10Z
  stars_delta_7d: 9
  stars_growth_pct: 0.2
  trending_score: 9.01
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5712
    - 5730
    - 5736
    - 5745
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: the-open-agent/openagent
  path: skills/eightctl/SKILL.md
  branch: master
  fetched_at: 2026-11-16T09:15:24.593Z
  truncated: false
type: agent_skill
skill:
  skill_name: eightctl
  description: Control Eight Sleep pods (status, temperature, alarms, schedules).
  folder_path: skills/eightctl
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# eightctl
Use `eightctl` for Eight Sleep pod control. Requires auth.

Auth

- Config: `~/.config/eightctl/config.yaml`
- Env: `EIGHTCTL_EMAIL`, `EIGHTCTL_PASSWORD`

Quick start

- `eightctl status`
- `eightctl on|off`
- `eightctl temp 20`

Common tasks

- Alarms: `eightctl alarm list|create|dismiss`
- Schedules: `eightctl schedule list|create|update`
- Audio: `eightctl audio state|play|pause`
- Base: `eightctl base info|angle`

Notes

- API is unofficial and rate-limited; avoid repeated logins.
- Confirm before changing temperature or alarms.
