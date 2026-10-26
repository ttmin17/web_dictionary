---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-linear
name: linear
tagline: Read and manage software issues, tickets, projects, and planning data
  in Linear. Use to review sprints and cycles, identify ticket rollover and
  releas
summary: OAuth uses Dynamic Client Registration and PKCE through authd. No
  shared client secret enters Muse, and credentials must never be requested in
  chat. The first connection requests read-only access. Before a write, or a...
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
  subpath: Meta/muse-agent/skills/linear
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
  path: Meta/muse-agent/skills/linear/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.840Z
  truncated: false
type: agent_skill
skill:
  skill_name: linear
  description: Read and manage software issues, tickets, projects, and planning
    data in Linear. Use to review sprints and cycles, identify ticket rollover
    and release blockers, and update issue status, assignees, priorities, and
    milestones through Linear's official MCP server.
  folder_path: Meta/muse-agent/skills/linear
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

# Linear
Use the installed `linear` CLI. Start with `linear status`. If it reports
`not_connected`, run `linear authorize-url` and share only the returned
`connect_url` with the user.

OAuth uses Dynamic Client Registration and PKCE through authd. No shared client
secret enters Muse, and credentials must never be requested in chat.
The first connection requests read-only access. Before a write, or after one
fails for missing access, run `linear status --for-command <permission>`. For
Linear's `save_*` tools, use the matching `*.create` permission when the
arguments omit `id`, and the matching `*.manage` permission when they include
`id`. If the status command
returns `scope_status: not_granted`, copy `scope_add_url` exactly and post it on
its own line as `[Additional Linear access](https://github.com/asgeirtj/system_prompts_leaks/blob/main/Meta/muse-agent/skills/linear/<scope_add_url>)` so the client
renders the native access button, then wait for consent to finish before
retrying once. OAuth access does not replace Hatch approval. Never construct a
scope URL or ask for tokens in chat.

Run `linear list-tools` to inspect the live provider catalogue and schemas,
then call an advertised tool with:

```text
linear call-tool --name <tool> --arguments-json '<json-object>'
```

`list-tools` exposes only reviewed Linear tools and includes each tool's
`hatch_permission`, `hatch_action`, and `hatch_permission_label`. For a
polymorphic `save_*` tool, the permission fields show the `id`-based selector
used at execution. Linear hides write tools from its live catalogue while the
OAuth grant is read-only; do not describe an all-read `tools` list as lack of
write support. In that state, `list-tools` returns manifest-derived
`additional_access` entries separately from the provider-advertised tools. When
the user requests one of those capabilities, share its `scope_add_url` using
the exact Additional Linear access link format above, wait for consent, then
rerun `linear list-tools` to obtain the provider's live write-tool schema.
Unknown or newly advertised provider tools remain unavailable until reviewed.
Read permissions follow the user's connector settings; changes require the
corresponding granular approval. Do not retry a failed or timed-out write
automatically because its side effect may have completed.
