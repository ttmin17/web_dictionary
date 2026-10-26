---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-outlook-mail
name: outlook_mail
tagline: Read, search, send, reply to, and delete messages in the user's Outlook Mail.
summary: 'Core subcommands: - disconnect - list [--page-size 10] [--unread]
  [--page-token 20] [--folder sentitems] - get "" - search "" [--folder
  sentitems] [--page-size 10] - send --to alice@example.com [--to
  bob@example.com]...'
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
  subpath: Meta/muse-agent/skills/outlook-mail
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
  path: Meta/muse-agent/skills/outlook-mail/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.842Z
  truncated: false
type: agent_skill
skill:
  skill_name: outlook_mail
  description: Read, search, send, reply to, and delete messages in the user's Outlook Mail.
  folder_path: Meta/muse-agent/skills/outlook-mail
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

# Outlook Mail
## Purpose
Manage Outlook Mail messages with the `outlook-mail` companion CLI. The
connector supports both personal Microsoft accounts and Microsoft 365 work or
school accounts.

## Tooling
Use `exec` to run:

```sh
outlook-mail <subcommand> [options]
```

Core subcommands:
- `disconnect`
- `list [--page-size 10] [--unread] [--page-token 20] [--folder sentitems]`
- `get "<MESSAGE_ID>"`
- `search "<query>" [--folder sentitems] [--page-size 10]`
- `send --to alice@example.com [--to bob@example.com] [--cc charlie@example.com] --subject "Hello" --body "Hi ..." [--attachment /path/to/file.pdf]`
- `reply "<MESSAGE_ID>" --body "Thanks for the update!" [--reply-all]`
- `delete "<MESSAGE_ID>"` (moves the message to Deleted Items; recoverable, not a permanent delete)
- `mark-read "<MESSAGE_ID>"`
- `mark-unread "<MESSAGE_ID>"`

Use `--page-size` for result count. `--top`, `--limit`, and `--max-results`
are compatibility aliases only; do not use them in new commands. Use
`get "<MESSAGE_ID>"` for a single message; `read`, `get --id`, and
`search --query` are compatibility forms only.

JSON output contract:
- `disconnect`: parse `ok`, `action`, `status`, and `disconnect_url`
- `list` / `search`: parse `ok`, `count`, `next_page_token` (when present, pass back as `--page-token`), `total_messages`, `retrieved_at`, and `messages[]` with `id`, `subject`, `from`, `to`, `date`, `message_received_at`, `preview`, `is_read`, and `has_attachments`
- `get`: parse `ok`, `retrieved_at`, and `message` with `id`, `subject`, `from`, `to`, `cc`, `date`, `message_received_at`, `body`, `body_type`, `is_read`, and `has_attachments`
- `send`: parse `ok` and `action`
- `reply`: parse `ok`, `action`, and `message_id`
- `delete`: parse `ok`, `action` (`trashed`), and `message_id`; the moved message gets a **new** id, so `message_id` is not the id you passed in — use the returned one for any follow-up command
- `mark-read` / `mark-unread`: parse `ok`, `action`, and `message_id`

## Auth
Use `outlook-mail --status` for connector state and link management. The binary handles its callback target internally.

- If the user wants to connect or reconnect, replace `<connect_url>` with the returned URL and share exactly this Markdown link: `[Connect Outlook Mail](https://github.com/asgeirtj/system_prompts_leaks/blob/main/Meta/muse-agent/skills/outlook-mail/<connect_url>)`; do not paste the raw URL separately.
- If the user wants to disconnect, run `outlook-mail disconnect`. When `disconnect_url` is present, replace `<disconnect_url>` with the returned URL and share exactly this Markdown link: `[Disconnect Outlook Mail](https://github.com/asgeirtj/system_prompts_leaks/blob/main/Meta/muse-agent/skills/outlook-mail/<disconnect_url>)`; do not paste the raw URL separately. Otherwise say it is already disconnected.
- Keep status and linking inside `outlook-mail --status`; do not use a shared connector helper CLI.
- Never print tokens, cookies, or connector secrets.

## Operating Rules
1. Use `search` for targeted lookup, `list` for browsing, and `get` only when you need the full body of a specific message.
2. Message IDs are opaque Graph values. Reuse the exact `id` returned by `list` or `search`.
3. Before `send`, confirm recipients, subject, and body in the current thread.
4. Before `reply`, confirm the reply body and whether the user wants `--reply-all`. Use `--reply-all` only when the user explicitly wants everyone included.
5. `delete`, `mark-read`, and `mark-unread` may proceed from a clear user request without an additional confirmation. `delete` moves the message to the Deleted Items folder, where the user can still recover it; tell the user that, and do not describe it as permanent or unrecoverable.
6. For mailbox-summary requests, exclude likely spam, phishing, or irrelevant bulk promotions by default unless the user explicitly asks for junk or spam, and briefly note that filtering if you used it.
7. If the CLI reports an auth failure or disconnected state, stop and route the user through the `--status` connect flow before retrying.
8. Never surface raw Graph identifiers (message ids, conversation ids) or other internal response fields (change keys, `@odata` fields, page/skip tokens, raw JSON) in text shown to the user — including in summaries, lists, or per-item annotations. Reuse the ids only internally to chain follow-up commands (rule 2). The sole exceptions are when the user explicitly asks for a raw id or you must show one to troubleshoot a failure.
9. The compatibility `date` field is Outlook's message-received time. Prefer `message_received_at.user_local` when presenting it. It is not the time of an event described inside the email; never infer a delivery, payment, trip, meeting, or other event time from it.
- Permission-withheld fields: a `list`/`search` result carrying a `withheld`
  entry had those fields removed by the user's "Access messages" permission —
  they are NOT empty. Answer from the remaining fields and mention that the
  permission hides the rest. Only when the user actually needs a withheld
  field for one specific message and `withheld.reason` is `requires_approval`,
  read that message with `get`, which shows the user the approval prompt.
  Never `get` during routine browsing just to fill previews.
