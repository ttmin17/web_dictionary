---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-tailscale
name: tailscale
tagline: Set up Muse's built-in Tailscale connector, join a tailnet or Headscale
  network, check status, and reach private machines through the TCP tunnel proxy
summary: Use the bundled /opt/hatch/bin/tailscale CLI described there. Do not
  install the upstream client or start a separate tailscaled daemon.
categories:
  - cloud-infra
tags:
  - ai-agents
  - ai-prompts
  - anthropic
  - chatbot
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: asgeirtj/system_prompts_leaks
  subpath: Meta/muse-agent/skills/tailscale
  official_vendor: false
  license: CC0-1.0
signals:
  stars: 70224
  last_commit: 2026-10-25T19:55:03Z
  stars_delta_7d: 344
  stars_growth_pct: 0.5
  trending_score: 345.69
  velocity_source: snapshot_delta
  sparkline_4w:
    - 69880
    - 70224
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: asgeirtj/system_prompts_leaks
  path: Meta/muse-agent/skills/tailscale/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.844Z
  truncated: false
type: agent_skill
skill:
  skill_name: tailscale
  description: Set up Muse's built-in Tailscale connector, join a tailnet or
    Headscale network, check status, and reach private machines through the TCP
    tunnel proxy. Read for Tailscale, VPN, MagicDNS, network egress, exit-node,
    or browser routing questions and supported limits.
  folder_path: Meta/muse-agent/skills/tailscale
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Tailscale
Read `~/docs/devices/tailscale.md` before setup, network access, or answering
capability questions. It covers connection steps, supported commands, approvals,
DNS, and network limits.

Use the bundled `/opt/hatch/bin/tailscale` CLI described there. Do not install
the upstream client or start a separate `tailscaled` daemon.
