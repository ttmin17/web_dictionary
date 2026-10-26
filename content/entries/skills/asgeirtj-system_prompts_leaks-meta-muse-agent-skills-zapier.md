---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-zapier
name: zapier
tagline: Connect Muse to actions across apps through Zapier's official MCP server.
summary: OAuth uses Dynamic Client Registration and PKCE through authd. No
  shared client secret enters Muse, and credentials must never be requested in
  chat. Zapier's MCP authorization exposes identity scopes rather than separ...
categories:
  - productivity-ops
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
  subpath: Meta/muse-agent/skills/zapier
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
  path: Meta/muse-agent/skills/zapier/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.846Z
  truncated: false
type: agent_skill
skill:
  skill_name: zapier
  description: Connect Muse to actions across apps through Zapier's official MCP server.
  folder_path: Meta/muse-agent/skills/zapier
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

# Zapier
Use the installed `zapier` CLI. Start with `zapier status`. If it reports
`not_connected`, run `zapier authorize-url` and share only the returned
`connect_url` with the user.

OAuth uses Dynamic Client Registration and PKCE through authd. No shared client
secret enters Muse, and credentials must never be requested in chat. Zapier's
MCP authorization exposes identity scopes rather than separate read and write
scopes, so read-only-by-default behavior is enforced by connector permissions.

Run `zapier list-tools` to inspect the live provider catalogue and schemas,
then call an advertised tool with:

```text
zapier call-tool --name <tool> --arguments-json '<json-object>'
```

`list-tools` exposes only reviewed Zapier agentic-mode tools and includes each
tool's `hatch_permission`, `hatch_action`, and `hatch_permission_label`.
Unknown or dynamic managed-mode tools remain unavailable until reviewed. Read
permissions follow the user's connector settings; executing write actions and
changing configuration use granular approvals. Do not retry a failed or
timed-out write automatically because its side effect may have completed.
