---
slug: jackwener-opencli-skills-opencli-usage
name: usage
tagline: Discover and invoke OpenCLI capabilities for websites and Chrome. Find
  commands, inspect schemas, interpret results and choose browser or adapter
  tool
summary: "list [query] searches command names and descriptions across built-ins
  and adapters. Results are compact and paginated:
  {ok:true,data:{commands,total,nextOffset?}}. Pass --offset to continue.
  Inspect exact inputs using..."
categories:
  - browser-web
tags:
  - ai-agent
  - ai-agents
  - ai-tools
  - browser-automation
status: active
quality_percentile: 62
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: jackwener/OpenCLI
  subpath: skills/opencli-usage
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 30892
  last_commit: 2026-10-26T07:53:40Z
  stars_delta_7d: 242
  stars_growth_pct: 0.8
  trending_score: 243.91
  velocity_source: snapshot_delta
  sparkline_4w:
    - 30421
    - 30650
    - 30892
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: jackwener/OpenCLI
  path: skills/opencli-usage/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:30.224Z
  truncated: false
type: agent_skill
skill:
  skill_name: usage
  description: Discover and invoke OpenCLI capabilities for websites and Chrome.
    Find commands, inspect schemas, interpret results and choose browser or
    adapter tools.
  folder_path: skills/opencli-usage
  extra_files: []
  pack_total_skills: 5
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jackwener-opencli
---

# OpenCLI
OpenCLI exposes reusable website adapters and direct Chrome tools to agents.

```sh
opencli list search
opencli list --site github --limit 20
opencli github search --help -f json
```

`list [query]` searches command names and descriptions across built-ins and adapters.
Results are compact and paginated: `{ok:true,data:{commands,total,nextOffset?}}`.
Pass `--offset <nextOffset>` to continue. Inspect exact inputs using command help.
Do not hard-code the adapter catalog or dump all commands into context.

## Results

Commands default to JSON: `{ok:true,data:...}`. Failures produce a nonzero exit
code and `{ok:false,error:{code,message,hint?,...}}` on stdout. Logs use stderr.
Explicit `-f table|yaml|csv|md|plain` exports are available where command help lists
them. Help, version, completion and explicit plain exports retain their own formats.
Browser follow modes stream one JSON envelope per line.

Use error codes and supplied candidates/keys to recover. Unknown write outcomes
require inspecting state before repeating an action. An empty successful result
is distinct from an execution failure.

## Browser

```sh
opencli browser open https://example.com --session research
opencli browser state --session research
opencli browser close --session research
opencli browser chrome describe
```

Page commands use `--session`; native Chrome methods need no session. `--profile`
selects a connected Chrome profile. `profile list` discovers profiles and
`profile use <name>` selects the default. Use `doctor` for connection diagnosis.
See `opencli-browser` for interaction, API evidence and tab/group management.

## Adapters and installation

```sh
opencli adapter init example/search
opencli adapter check example/search
opencli adapter test example/search --args '{"query":"hello"}'
opencli adapter status
```

See `opencli-adapter-author` for implementation. `adapter eject` makes an official
site editable locally; `adapter reset` removes that local override. Adapter tests
execute real commands and can perform writes.

`plugin list|install|update|uninstall|create` manages plugin packages. `auth status`
reports website login facts; `auth refresh` touches sessions. `daemon status|restart|stop`
manages the bridge process. Read help for the selected capability.

Bundled skill content is available through `skills list` and
`skills read opencli-browser -f plain` (omit `-f plain` for JSON).
