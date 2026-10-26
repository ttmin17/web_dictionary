---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-notion
name: notion
tagline: Search, read, create, and update Notion pages via the Notion MCP.
summary: --arguments-json must be a JSON object; arrays or scalars are rejected.
  Use list-tools first to discover the tool catalogue and each tool's
  inputschema.
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
  subpath: Meta/muse-agent/skills/notion
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
  path: Meta/muse-agent/skills/notion/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.842Z
  truncated: false
type: agent_skill
skill:
  skill_name: notion
  description: Search, read, create, and update Notion pages via the Notion MCP.
  folder_path: Meta/muse-agent/skills/notion
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

# Notion
## Purpose
Interact with Notion pages, databases, and workspace content via the hosted
Notion MCP server (`https://mcp.notion.com/mcp`).

## Tooling
Use `exec` to run:

```sh
notion-cli <subcommand> [options]
```

### Connection management

```sh
notion-cli status
notion-cli authorize-url
notion-cli exchange-code --code <code> [--redirect-uri <url>]
notion-cli refresh
notion-cli disconnect
```

### MCP operations

```sh
notion-cli list-tools
notion-cli call-tool --name <tool> --arguments-json '<json-object>'
```

`--arguments-json` must be a JSON object; arrays or scalars are rejected. Use
`list-tools` first to discover the tool catalogue and each tool's  
`input_schema`.

## Auth
OAuth is handled by authd via Dynamic Client Registration + PKCE (S256). The
access token is stored at `$JARVIS_HOME/user/auth/notion.json`. Do not hand-edit
this file.

## First-use setup flow

1. Run `notion-cli status`.
2. If status is `not_connected`, run `notion-cli authorize-url`. When
   `connect_url` is present, replace `<connect_url>` with the returned URL
   and share exactly this Markdown link: `[Connect Notion](https://github.com/asgeirtj/system_prompts_leaks/blob/main/Meta/muse-agent/skills/notion/<connect_url>)`; do not paste the raw
   URL separately. Wait for the user to complete authorization.
3. After the user authorizes, the browser is redirected via the Muse relay
   back to this VM, and authd completes the code exchange automatically. The
   agent resumes once the token lands.
4. Re-run `notion-cli status`. When status flips to `connected` the output also
   includes the discovered MCP tool catalogue.

For manual environments where the relay is not wired up, call
`notion-cli exchange-code --code <auth-code>` after receiving the code.

## Operating Rules
1. Run `notion-cli status` before any MCP work. If not `connected`, complete
   the setup flow first.
2. Call `list-tools` before `call-tool` unless you already know the tool name
   and its argument shape. Never guess tool names.
3. `arguments-json` must be a JSON object; wrap every argument appropriately.
4. Confirm user intent before tool calls that mutate Notion pages, databases,
   or blocks.
5. Token refresh happens automatically on 401. If `call-tool` keeps failing
   with `unauthorized`, run `notion-cli refresh` explicitly or ask the user to
   re-authorize.
6. Read results preserve Notion's raw date fields and add semantic UTC and
   user-local forms for record creation/edit times and timed date properties.
   Date-only properties remain dates.
