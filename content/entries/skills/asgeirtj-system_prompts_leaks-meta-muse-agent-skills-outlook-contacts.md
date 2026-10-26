---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-outlook-contacts
name: outlook_contacts
tagline: List, search, create, update, and delete contacts in the user's Outlook
  account.
summary: 'Core subcommands: - disconnect - list [--page-size 10] [--page-token ]
  - get "AAMkAD..." - search "alice smith" --page-size 10 - create --given-name
  "Alice" --family-name "Smith" --email alice@example.com --phone "+15...'
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
  subpath: Meta/muse-agent/skills/outlook-contacts
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
  path: Meta/muse-agent/skills/outlook-contacts/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.842Z
  truncated: false
type: agent_skill
skill:
  skill_name: outlook_contacts
  description: List, search, create, update, and delete contacts in the user's
    Outlook account.
  folder_path: Meta/muse-agent/skills/outlook-contacts
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

# Outlook Contacts
## Purpose
Manage Outlook contacts with a local helper CLI so the prompt stays concise.  
The connector supports both personal Microsoft accounts and Microsoft 365 work
or school accounts.

## Tooling
Use:

```sh
outlook-contacts <subcommand> [options]
```

Core subcommands:
- `disconnect`
- `list [--page-size 10] [--page-token <token>]`
- `get "AAMkAD..."`
- `search "alice smith" --page-size 10`
- `create --given-name "Alice" --family-name "Smith" --email alice@example.com --phone "+15551234567"`
- `update "AAMkAD..." --given-name "Alice" --email newalice@example.com`
- `delete "AAMkAD..."`

Common option:
- `--timeout-secs N` (default `30`)

Use `--page-size` for result count. `--top`, `--limit`, and `--max-results`
are compatibility aliases only; do not use them in new commands.

JSON output contract:
- `disconnect`: parse `ok`, `action`, `status`, and `disconnect_url`
- `list` / `search`: parse `ok`, `count`, `next_page_token` (when present, pass back as `--page-token`), `total_people`, and `contacts[].resource_name`, `contacts[].display_name`, `contacts[].emails`, `contacts[].phones`
- `get`: parse `ok` and `contact.resource_name`, `contact.display_name`, `contact.emails`, `contact.phones`, `contact.organization`, `contact.title`
- `create` / `update` / `delete`: parse `ok`, `action`, `resource_name`

## Auth
This skill depends on an Outlook connector managed by `outlook-contacts`.

Use:

```sh
outlook-contacts --status
```

Rules:
- For connect or reconnect, replace `<connect_url>` with the returned URL and share exactly this Markdown link: `[Connect Outlook Contacts](https://github.com/asgeirtj/system_prompts_leaks/blob/main/Meta/muse-agent/skills/outlook-contacts/<connect_url>)`; do not paste the raw URL separately.
- For disconnect, run `outlook-contacts disconnect`. When `disconnect_url` is present, replace `<disconnect_url>` with the returned URL and share exactly this Markdown link: `[Disconnect Outlook Contacts](https://github.com/asgeirtj/system_prompts_leaks/blob/main/Meta/muse-agent/skills/outlook-contacts/<disconnect_url>)`; do not paste the raw URL separately. If absent, say the connector is already disconnected.
- never use a shared connector helper CLI for Outlook Contacts
- do not hand-author token files or guess connector state; rely on `outlook-contacts --status`

## Operating Rules
1. Use `search` for finding contacts by name, email, or phone number.
2. Use `list` for browsing contacts with pagination via `--page-token` (skip value).
3. Contact IDs are opaque Graph strings (for example `AAMkAD...`); use the exact value from `list` or `search`.
4. `create`, `update`, and `delete` may proceed from a clear, unambiguous user request without an additional confirmation.
5. When updating a contact, only the specified fields change; unspecified fields keep their existing values.
6. If the CLI reports an auth error, re-check `outlook-contacts --status` and guide the user through reconnecting.
7. Never print connector secrets or dump raw contact payloads unless the user explicitly asks for them.
8. Never surface raw Graph identifiers (contact ids like `AAMkAD...`) or other internal response fields (change keys, page/skip tokens, raw JSON) in text shown to the user — including in summaries, lists, or per-item annotations. Reuse the ids only internally to chain follow-up commands (rule 3). The sole exceptions are when the user explicitly asks for a raw id or you must show one to troubleshoot a failure.
