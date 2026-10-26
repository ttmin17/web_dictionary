---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-klaviyo
name: klaviyo
tagline: Read and manage the user's Klaviyo email and SMS marketing campaigns,
  newsletters, flows, subscriber lists, and audience segments. Use to compare
  camp
summary: Run klaviyo list-tools for the compact reviewed tool catalog. These
  names and their Hatch permissions are available before connection. Run klaviyo
  list-tools --name for one reviewed tool's live input schema; the provi...
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
  subpath: Meta/muse-agent/skills/klaviyo
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
  path: Meta/muse-agent/skills/klaviyo/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.840Z
  truncated: false
type: agent_skill
skill:
  skill_name: klaviyo
  description: Read and manage the user's Klaviyo email and SMS marketing
    campaigns, newsletters, flows, subscriber lists, and audience segments. Use
    to compare campaign performance and revenue, find recent customers, plan
    audience targeting, and manage marketing content and subscriptions through
    Klaviyo's official MCP server.
  folder_path: Meta/muse-agent/skills/klaviyo
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

# Klaviyo
Use the installed `klaviyo` CLI. Connecting requests access to the full
supported catalog. Writes, sends, and deletions require Hatch approval.
Settings group the catalog into eight capabilities: reading, marketing
content, campaign delivery, flows, audiences and subscriptions, catalogs and
coupons, tracking and integrations, and deletion. Editing content does not
grant permission to send campaigns or delete data. Each approval still
previews the specific operation and inputs. Campaign creation and campaign/message
edits show the submitted audience, sender, subject, and message when present.
Campaign send/cancel and flow status/action approvals also show available
Klaviyo metadata; lookup failures
retain the original inputs. Audience IDs and recipient estimates are shown
when available, not inferred audience names or guaranteed delivery counts.

Run `klaviyo list-tools` for the compact reviewed tool catalog. These names and
their Hatch permissions are available before connection. Run `klaviyo
list-tools --name <tool-name>` for one reviewed tool's live input schema; the
provider's output schemas are intentionally omitted to keep discovery bounded.
Do not guess tool names or argument schemas.

If `klaviyo status` reports `auth_status: not_connected`, run
`klaviyo authorize-url` and share only the returned `connect_url`. Klaviyo
requires an Owner, Admin, or Manager role. Do not construct OAuth URLs or
request tokens in chat.

```text
klaviyo call-tool --help
klaviyo status
klaviyo list-tools [--name <tool-name>]
klaviyo call-tool --name <tool-name> --arguments-json '<JSON object>'
klaviyo account-details
klaviyo list-campaigns --channel <email|sms|mobile-push> [--page-cursor <cursor>]
klaviyo list-flows [--page-cursor <cursor>] [--page-size <1-100>]
klaviyo list-metrics [--page-cursor <cursor>]
```

The catalog covers stable remote campaign, flow, audience, subscription,
template, image, catalog, event, metric, reporting, coupon, tag, webhook, form,
review, push-token, and profile-deletion tools. Beta and local-only tools are
excluded. Klaviyo's MCP supports sending campaigns; Hatch's explicit allowlist
controls which tools can be called here. If `list-tools --name` reports that a
reviewed tool is unavailable, check the connection before concluding it is
unsupported. Do not invent a schema or bypass the CLI with a direct API call.

- Campaigns: read back the audience, message content, and schedule before
  `send_campaign`. Sending and cancellation share a campaign-delivery
  permission, separate from content editing. A successful request starts an
  asynchronous job; check `get_campaign_send_job` and
  `get_campaign` before reporting the outcome. `cancel_campaign_send` can
  cancel or revert a send to draft where Klaviyo permits it; read back status.
  Cancellation cannot recall delivered mail. A created draft is not sent.
- Flows: `create_flow` uses an encoded flow definition; preserve returned IDs.
  `update_flow` changes the flow status AND all its actions. Read `get_flow`,
  `get_flow_action`, and `get_flow_message` before and after changes. Making a
  flow or action live can start delivering messages.
- Audiences: list membership does not grant or revoke marketing consent; use
  subscription tools for consent changes. Adding list members, subscribing
  profiles, or creating events can trigger flows. Check the relevant flows
  before those changes.
- Bulk changes, merges, and deletions: confirm the target set and consequences.
  Profile deletion is permanent. Preserve returned job IDs and use the matching
  job-status read before claiming completion. After any uncertain write or
  deletion result, inspect state before retrying.

`assign_template_to_campaign_message` returns a new, message-owned template
copy whose ID differs from the source. Do not retry because of that substitution;
verify with `get_campaign` using `include=campaign-messages`. Preserve returned
Klaviyo UI links when present.
