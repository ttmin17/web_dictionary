---
slug: the-open-agent-openagent-skills-sonoscli
name: sonoscli
tagline: Control Sonos speakers (discover/status/play/volume/group).
summary: '- sonos discover - sonos status --name "Kitchen" - sonos
  play|pause|stop --name "Kitchen" - sonos volume set 15 --name "Kitchen"'
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
  subpath: skills/sonoscli
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
  path: skills/sonoscli/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:38:10.204Z
  truncated: false
type: agent_skill
skill:
  skill_name: sonoscli
  description: Control Sonos speakers (discover/status/play/volume/group).
  folder_path: skills/sonoscli
  extra_files: []
  pack_total_skills: 54
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# Sonos CLI
Use `sonos` to control Sonos speakers on the local network.

## Quick start

- `sonos discover`
- `sonos status --name "Kitchen"`
- `sonos play|pause|stop --name "Kitchen"`
- `sonos volume set 15 --name "Kitchen"`

## Common tasks

- Grouping: `sonos group status|join|unjoin|party|solo`
- Favorites: `sonos favorites list|open`
- Queue: `sonos queue list|play|clear`
- Spotify search (via SMAPI): `sonos smapi search --service "Spotify" --category tracks "query"`

## Notes

- If SSDP fails, specify `--ip <speaker-ip>`.
- Spotify Web API search is optional and requires `SPOTIFY_CLIENT_ID/SECRET`.
- If there is an error, check the troubleshooting section and offer advice if there is a decent match.

## Troubleshooting

### `sonos discover` - `no route to host`

- On error `Error: write udp4 0.0.0.0:64326->239.255.255.250:1900: sendto: no route to host (Command exited with code 1)`
  - Note that the port number after `0.0.0.0:` is ephemeral and will change and the netmask may not match exactly either
  - The `sendto: no route to host` should stay consistent
- Advise the user that in `direct` (no Docker sandbox) mode on Mac OS that Settings -> Privacy & Security -> Local Network will need to be enabled for the top-level host parent process of the Gateway
  - `node` if running via `launchd`
  - `Terminal` if running the gateway directly in the terminal
  - `Visual Studio Code` if running via terminal in VS Code
- An alternative option is to use `sandbox` (docker container) with network access allowed for that sandbox

### `sonos discover` - `bind: operation not permitted`

- On error `Error: listen udp4 0.0.0.0:0: bind: operation not permitted`
- Advise the user that they may be running via a Codex or other sandbox that does not permit network access (this can be replicated by running `sonos discover` within a Codex CLI session with sandbox enabled and not approving the escalation request)
