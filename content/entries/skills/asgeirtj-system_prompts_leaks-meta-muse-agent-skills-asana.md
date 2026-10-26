---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-asana
name: asana
tagline: "Plan and track team projects and tasks in Asana. Use to assign work to
  owners, update due dates and status, set task dependencies, and review project
  "
summary: OAuth uses the fixed Muse Asana MCP app, PKCE, and Asana's MCP resource
  indicator through authd. CAGI supplies the client secret for token exchange,
  refresh, and revocation; the secret must never enter Muse or be requ...
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
  subpath: Meta/muse-agent/skills/asana
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
  path: Meta/muse-agent/skills/asana/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.836Z
  truncated: false
type: agent_skill
skill:
  skill_name: asana
  description: Plan and track team projects and tasks in Asana. Use to assign work
    to owners, update due dates and status, set task dependencies, and review
    project progress, comments, teams, and workspaces through Asana's official
    MCP server.
  folder_path: Meta/muse-agent/skills/asana
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

# Asana
Use the installed `asana` CLI. Start with `asana status`. If it reports
`not_connected`, run `asana authorize-url` and share only the returned
`connect_url` with the user.

OAuth uses the fixed Muse Asana MCP app, PKCE, and Asana's MCP resource
indicator through authd. CAGI supplies the client secret for token exchange,
refresh, and revocation; the secret must never enter Muse or be requested in
chat. Do not request ordinary Asana API scopes because MCP apps reject them.

Run `asana list-tools` to inspect the live provider catalogue and schemas,
then call an advertised tool with:

```text
asana call-tool --name <tool> --arguments-json '<json-object>'
```

`list-tools` exposes only reviewed Asana tools and includes each tool's
`hatch_permission`, `hatch_action`, and `hatch_permission_label`. Unknown or
new provider tools remain unavailable until reviewed. Read permissions follow
the user's connector settings; changes require the corresponding granular
approval. Do not retry a failed or timed-out write automatically because its
side effect may have completed.
