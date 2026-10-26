---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-stripe
name: stripe
tagline: Manage a merchant's Stripe customers, products, coupons, promotion
  codes, payments, invoices, and recurring subscriptions. Use for billing-plan
  change
summary: OAuth uses Dynamic Client Registration and PKCE through authd. Stripe
  issues a per-VM public client, so no shared credential enters Muse and
  credentials must never be requested in chat.
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
  subpath: Meta/muse-agent/skills/stripe
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
  path: Meta/muse-agent/skills/stripe/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.844Z
  truncated: false
type: agent_skill
skill:
  skill_name: stripe
  description: Manage a merchant's Stripe customers, products, coupons, promotion
    codes, payments, invoices, and recurring subscriptions. Use for billing-plan
    changes, payment links, refunds of duplicate card charges, disputes and
    chargebacks, account balances, payouts, and reconciling processing fees
    through Stripe's official MCP server.
  folder_path: Meta/muse-agent/skills/stripe
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

# Stripe
Use the installed `stripe` CLI. Start with `stripe status`. If it reports
`not_connected`, run `stripe authorize-url` and share only the returned
`connect_url` with the user.

OAuth uses Dynamic Client Registration and PKCE through authd. Stripe issues a
per-VM public client, so no shared credential enters Muse and credentials must
never be requested in chat.

Run `stripe list-tools` to inspect the live provider catalogue and schemas,
then call an advertised tool with:

```text
stripe call-tool --name <tool> --arguments-json '<json-object>'
```

The OAuth connection identifies the merchant account. Never ask the user for
that connected account's `acct_...` ID. If another tool requires
`stripe_context`, first call the advertised `list_available_accounts_or_orgs`
tool with an empty arguments object and use a context it returns. If more than
one context matches the requested live or test mode, present their names and
ask the user which account to use; do not ask them to paste an account ID. Never
invent a context or call an account-scoped tool without one returned by Stripe.

`list-tools` exposes only reviewed Stripe tools and includes each tool's
`hatch_permission`, `hatch_action`, and `hatch_permission_label`. Unknown or
new provider tools remain unavailable until reviewed. For `stripe_api_write`,
the returned schema lists the reviewed `stripe_api_operation_id` values and
their operation-specific permission overrides; unlisted operation IDs are not
available. Read permissions follow the user's connector settings; Stripe API
writes and feedback require granular approval. Stripe may also require
confirmation through a provider URL for sensitive operations. Do not retry a
failed or timed-out write automatically because its side effect may have
completed.
