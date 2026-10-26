---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-tessie
name: tessie
tagline: Monitor a Tesla vehicle, inspect live state, and run explicit Tessie
  command endpoints.
summary: "Core subcommands: - authorize-url - set-token --token '' - disconnect
  - verify - vehicles - status --vin '' - state --vin '' - command --vin ''
  --command [--wait-for-completion] [--extra-query k=v] - request --method..."
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
  subpath: Meta/muse-agent/skills/tessie
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
  path: Meta/muse-agent/skills/tessie/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.844Z
  truncated: false
type: agent_skill
skill:
  skill_name: tessie
  description: Monitor a Tesla vehicle, inspect live state, and run explicit
    Tessie command endpoints.
  folder_path: Meta/muse-agent/skills/tessie
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

# Tessie (Tesla Vehicle Control)
## Purpose
Use `tessie-api` to list vehicles, inspect status/state, and run explicit Tessie vehicle commands.

## Tooling
Use:

```sh
tessie-api <subcommand> [options]
```

Core subcommands:
- `authorize-url`
- `set-token --token '<TOKEN>'`
- `disconnect`
- `verify`
- `vehicles`
- `status --vin '<VIN>'`
- `state --vin '<VIN>'`
- `command --vin '<VIN>' --command <command_name> [--wait-for-completion] [--extra-query k=v]`
- `request --method GET --path '/<VIN>/battery' [--query k=v] [--json-body '{"...":"..."}']`

JSON output contract:
- `authorize-url`: parse `ok`, `authorize_url`, and `connect_url`
- `set-token`: parse `ok` and `action`
- `disconnect`: parse `ok`, `action`, `path`, and `removed`
- `verify`: parse `ok`, `action`, and `error`
- all read/command calls: parse top-level `ok`, `status`, and `body`
- common `body` fields include `results[]`, `battery_level`, `battery_range`, `status`, and `result`

## Auth
Manage Tessie auth through the CLI helpers only.

Auth contract:
- Run `tessie-api verify` before Tessie API use when connection state is unknown.
- If no API key is configured, run `tessie-api authorize-url`. When `connect_url` is present, replace `<connect_url>` with the returned URL and share exactly this Markdown link: `[Connect Tessie](https://github.com/asgeirtj/system_prompts_leaks/blob/main/Meta/muse-agent/skills/tessie/<connect_url>)`; do not paste the raw URL separately.
- The user can generate a token at `https://dash.tessie.com/settings/api`.
- If the user provides a key through the CLI flow, store it only through `tessie-api set-token --token '<TESSIE_API_TOKEN>'`; do not write auth files directly.
- Remove stored auth only through `tessie-api disconnect`.
- Never print token values.

## Operating Rules
1. If VIN is not given, call `vehicles` and ask user to pick one when multiple exist.
2. Use `status` or `state` before impactful commands when the current vehicle condition matters.
3. `honk`, `flash`, `remote_boombox`, software-update scheduling or cancellation, and fleet telemetry configuration may proceed from a clear, unambiguous request without an additional confirmation. Other vehicle commands and raw API writes use the connector approval gate; invoke the resolved command directly and do not add a duplicate chat confirmation. Never invent a command or infer a physical action the user did not request.
4. Use `command --command <name>` only for explicit Tessie command names. Do not invent a mandatory pre-wake flow or undocumented helper behavior.
5. On HTTP or API errors, report `status` and `body` clearly. Common cases are `401`, `408`, and `503`.
6. Never print token values.
7. Read results preserve Tessie's raw timestamps and add semantic UTC and
   user-local forms for state observations, last-seen values, and record
   creation/update times.
