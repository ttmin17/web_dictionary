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
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/eightctl
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5712
  last_commit: 2026-10-25T13:57:48Z
  stars_delta_7d: 14
  stars_growth_pct: 0.2
  trending_score: 14.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5688
    - 5698
    - 5712
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: the-open-agent/openagent
  path: skills/eightctl/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:38:10.202Z
  truncated: false
type: agent_skill
skill:
  skill_name: eightctl
  description: Control Eight Sleep pods (status, temperature, alarms, schedules).
  folder_path: skills/eightctl
  extra_files: []
  pack_total_skills: 54
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
