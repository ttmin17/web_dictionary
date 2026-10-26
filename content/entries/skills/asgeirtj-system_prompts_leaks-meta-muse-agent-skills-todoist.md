---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-todoist
name: todoist
tagline: Read and manage Todoist tasks, projects, comments, labels, filters, and
  reminders through Todoist's official MCP server.
summary: OAuth uses Dynamic Client Registration and PKCE through authd. No
  shared client secret enters Muse, and credentials must never be requested in
  chat.
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
  subpath: Meta/muse-agent/skills/todoist
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
  path: Meta/muse-agent/skills/todoist/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.845Z
  truncated: false
type: agent_skill
skill:
  skill_name: todoist
  description: Read and manage Todoist tasks, projects, comments, labels, filters,
    and reminders through Todoist's official MCP server.
  folder_path: Meta/muse-agent/skills/todoist
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

# Todoist
Use the installed `todoist` CLI. Start with `todoist status`. If it reports
`not_connected`, run `todoist authorize-url` and share only the returned
`connect_url` with the user.

OAuth uses Dynamic Client Registration and PKCE through authd. No shared client
secret enters Muse, and credentials must never be requested in chat.

The first connection requests read-only Todoist access. If a requested change
fails because Todoist write or delete access has not been granted, direct the
user to add it in Settings; Hatch approval for the action remains separate.

Run `todoist list-tools` to inspect the live provider catalogue and schemas,
then call an advertised tool with:

```text
todoist call-tool --name <tool> --arguments-json '<json-object>'
```

`list-tools` exposes only reviewed Todoist tools and includes each tool's
`hatch_permission`, `hatch_action`, and `hatch_permission_label`.
`delete-object` is authorized as `projects.delete` for projects and as
`items.delete` for every other object type. Unknown or new provider tools
remain unavailable until reviewed. Read permissions follow the user's connector
settings; changes require the corresponding granular approval. Do not retry a
failed or timed-out write automatically because its side effect may have
completed.
