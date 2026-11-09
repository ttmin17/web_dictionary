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
quality_percentile: 85
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/eightctl
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5736
  last_commit: 2026-11-06T13:17:10Z
  stars_delta_7d: 6
  stars_growth_pct: 0.1
  trending_score: 6.01
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5698
    - 5712
    - 5730
    - 5736
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: the-open-agent/openagent
  path: skills/eightctl/SKILL.md
  branch: master
  fetched_at: 2026-11-09T09:27:08.039Z
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
