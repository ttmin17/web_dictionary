---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-dropbox
name: dropbox
tagline: Search, read, upload, organize, and share files and folders in the
  user's Dropbox cloud storage. Use to upload or download files, collect client
  uploa
summary: "The first connection requests read-only OAuth access. Before a write,
  or after one fails for missing access, run dropbox status --for-command . If
  it returns scopestatus: notgranted, copy scopeaddurl exactly and post..."
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
  subpath: Meta/muse-agent/skills/dropbox
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
  path: Meta/muse-agent/skills/dropbox/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.836Z
  truncated: false
type: agent_skill
skill:
  skill_name: dropbox
  description: Search, read, upload, organize, and share files and folders in the
    user's Dropbox cloud storage. Use to upload or download files, collect
    client uploads with file requests, inspect or create shared links, and
    create, copy, move, or delete content through Dropbox's official APIs.
  folder_path: Meta/muse-agent/skills/dropbox
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

# Dropbox
Use the installed `dropbox` CLI. Start with `dropbox status`. If it reports
`not_connected`, run `dropbox authorize-url` and share only the returned
`connect_url` with the user. After connecting, run `dropbox list-tools` to get
the live input schemas for the reviewed Dropbox MCP catalogue.

The first connection requests read-only OAuth access. Before a write, or after
one fails for missing access, run `dropbox status --for-command <tool-name>`.
If it returns `scope_status: not_granted`, copy `scope_add_url` exactly and post
it on its own line as `[Additional Dropbox access](https://github.com/asgeirtj/system_prompts_leaks/blob/main/Meta/muse-agent/skills/dropbox/<scope_add_url>)` so the
client renders the native access button, then wait for consent to finish before
retrying once. OAuth access does not replace Hatch approval. Never construct a
scope URL or ask for tokens in chat.

```text
dropbox list-tools
dropbox call-tool --name <tool-name> --arguments-json '<JSON object>'
dropbox call-tool --name <tool-name> --arguments-json '<JSON object>' --output <path>
dropbox create-file --path <dropbox-path> --input <local-path>
```

The reviewed catalogue supports listing, searching, reading, and downloading
files; file and account metadata; inspecting and creating shared links and file
requests; and creating, copying, moving, deleting, or sharing content. Follow the
schema returned by
`dropbox list-tools` exactly. Never call a tool that is absent from that list.

Use `create-file` to create or replace a Dropbox file from a local file. It
accepts text and binary files up to 150 MiB.

File requests collect uploads from other people; they do not upload a local file
from this VM. The CLI does not expose revision history or version restore.

Use `--output` when the selected tool returns binary content. Never request or
expose temporary download links, OAuth tokens, or Dropbox app credentials in
chat. Confirm destructive intent before deleting, moving, or overwriting
content.
