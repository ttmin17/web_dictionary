---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-evernote
name: evernote
tagline: Read and create notes through Evernote's official MCP server.
summary: OAuth uses Dynamic Client Registration and PKCE through authd. No
  shared client secret enters Muse, and credentials must never be requested in
  chat.
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
  subpath: Meta/muse-agent/skills/evernote
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
  path: Meta/muse-agent/skills/evernote/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.837Z
  truncated: false
type: agent_skill
skill:
  skill_name: evernote
  description: Read and create notes through Evernote's official MCP server.
  folder_path: Meta/muse-agent/skills/evernote
  extra_files:
    - connector_auth_config.yaml
    - manifest.yaml
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Evernote
Use the installed `evernote` CLI. Start with `evernote status`. If it reports
`not_connected`, run `evernote authorize-url` and share only the returned
`connect_url` with the user.

OAuth uses Dynamic Client Registration and PKCE through authd. No shared client
secret enters Muse, and credentials must never be requested in chat.

Run `evernote list-tools` to inspect the live provider catalogue and schemas,
then call an advertised tool with:

```text
evernote call-tool --name <tool> --arguments-json '<json-object>'
```

`list-tools` exposes only reviewed Evernote tools and includes each tool's
`hatch_permission`, `hatch_action`, and `hatch_permission_label`. Unknown or
new provider tools remain unavailable until reviewed. Read permissions follow
the user's connector settings; creating notes requires the corresponding
granular approval. Do not retry a failed or timed-out write automatically
because its side effect may have completed.
