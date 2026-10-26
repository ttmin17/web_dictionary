---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-zoom
name: zoom
tagline: Review Zoom meetings, calls, recordings, and transcripts. Use to catch
  up on missed calls, summarize decisions, and extract action items and owners;
  a
summary: OAuth uses the fixed Muse Zoom OAuth client and PKCE through authd.
  CAGI supplies the client secret for token exchange and refresh; the secret
  must never enter Muse or be requested in chat.
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
  subpath: Meta/muse-agent/skills/zoom
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
  path: Meta/muse-agent/skills/zoom/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.846Z
  truncated: false
type: agent_skill
skill:
  skill_name: zoom
  description: Review Zoom meetings, calls, recordings, and transcripts. Use to
    catch up on missed calls, summarize decisions, and extract action items and
    owners; also work with Team Chat, Canvas, Tasks, Whiteboard, Hub, and
    Revenue Accelerator through Zoom's official MCP servers.
  folder_path: Meta/muse-agent/skills/zoom
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

# Zoom
Use the installed `zoom` CLI. Start with `zoom status`. If it reports
`not_connected`, run `zoom authorize-url` and share only the returned
`connect_url` with the user.

OAuth uses the fixed Muse Zoom OAuth client and PKCE through authd. CAGI supplies
the client secret for token exchange and refresh; the secret must never enter
Muse or be requested in chat.

Run `zoom list-tools` to inspect the live catalogues and schemas from every
official Zoom MCP server. To inspect only one server, use `zoom list-tools
--server <server>`, where `<server>` is one of `zoom`, `meeting`, `chat`,
`canvas`, `tasks`, `whiteboard`, or `revenue-accelerator`.

Call an advertised tool on the server that returned it with:

```text
zoom call-tool --server <server> --name <tool> --arguments-json '<json-object>'
```

The `zoom` server is the default for backward compatibility. The dedicated
`meeting` server currently overlaps with the meeting and recording tools on the
all-in-one `zoom` server, while the other dedicated servers add broader product
capabilities.

Provider catalogues can contain both reads and mutations and may change over
time. The CLI validates the name against the selected server's live catalogue
and requires explicit approval before every tool call. Do not retry a failed or
timed-out tool call automatically because its side effect may have completed.

If a dedicated server reports a missing OAuth scope after an upgrade, ask the
user to reconnect Zoom so the expanded grant can be approved. Never disconnect
an existing connection without the user's confirmation.

Some servers require separately licensed Zoom products. Treat a per-server
error as that server being unavailable; continue using catalogues that report
`ok: true` rather than claiming the whole Zoom connection failed.

The `zoom` and `meeting` servers currently advertise `meeting_create`,
`meeting_update`, and `meeting_delete`, so use those live tools for meeting
scheduling and management. Do not infer availability merely from OAuth scopes:
confirm the tool and its current schema with `zoom list-tools --server meeting`
before calling it.
