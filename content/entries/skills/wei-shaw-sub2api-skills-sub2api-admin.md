---
slug: wei-shaw-sub2api-skills-sub2api-admin
name: admin
tagline: Manage Sub2API admin APIs for accounts, redeem codes, groups, proxies,
  error passthrough rules, TLS fingerprint profiles, imports, exports, batch
  upda
summary: For all commands and payload examples, read references/admin-cli.md.
categories:
  - other
tags:
  - 2api
  - antigravity2api
  - cc2api
  - claude
status: active
quality_percentile: 95
selection_reason: quality_percentile
first_seen: 2025-12-18T02:26:18
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: Wei-Shaw/sub2api
  subpath: skills/sub2api-admin
  official_vendor: false
  license: LGPL-3.0
signals:
  stars: 44843
  last_commit: 2026-10-26T03:15:19Z
  stars_delta_7d: 505
  stars_growth_pct: 1.1
  trending_score: 510.75
  rank_current: 36
  rank_delta: -6
  velocity_source: snapshot_delta
  sparkline_4w:
    - 43398
    - 43887
    - 44338
    - 44843
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Wei-Shaw/sub2api
  path: skills/sub2api-admin/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:01.133Z
  truncated: false
type: agent_skill
skill:
  skill_name: admin
  description: Manage Sub2API admin APIs for accounts, redeem codes, groups,
    proxies, error passthrough rules, TLS fingerprint profiles, imports,
    exports, batch updates, and raw administrator API calls. Use when the user
    mentions Sub2API, admin API keys, account management, redeem code
    management, recharge codes, invitation codes, bulk account import/export,
    keeping or deleting accounts, refreshing accounts, clearing errors, CRS
    sync, or managing Sub2API backend settings through the admin API.
  folder_path: skills/sub2api-admin
  extra_files:
    - agents/openai.yaml
    - references/admin-cli.md
    - scripts/sub2api-admin.js
  pack_total_skills: 1
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wei-shaw-sub2api
---

# Sub2API Admin
Use the bundled CLI instead of ad hoc `curl`. Run examples from this skill directory.

```bash
export SUB2API_BASE_URL='https://your-sub2api-host'
export SUB2API_ADMIN_API_KEY='<admin api key>'
# Or, when the deployment uses admin JWT login instead of an admin API key:
# export SUB2API_JWT='<admin access_token>'
node scripts/sub2api-admin.js accounts list
```

For all commands and payload examples, read [references/admin-cli.md](https://github.com/Wei-Shaw/sub2api/blob/main/skills/sub2api-admin/references/admin-cli.md).

## Workflow

1. Reuse `SUB2API_BASE_URL` and either `SUB2API_ADMIN_API_KEY` or `SUB2API_JWT` from the environment.
2. Run read-only commands first: `accounts list`, `accounts get <id>`, `groups all`, or `proxies all`.
3. Before destructive or bulk writes, print the target account names and IDs.
4. Execute the write command only after the target set is clear.
5. Run a follow-up read command to verify the result.

## Common Commands

```bash
node scripts/sub2api-admin.js accounts list --page-size 20
node scripts/sub2api-admin.js accounts get 40
node scripts/sub2api-admin.js accounts usage 40
node scripts/sub2api-admin.js accounts set-schedulable 40 true
node scripts/sub2api-admin.js accounts bulk-update --ids 40,39 --json '{"concurrency":10}'
node scripts/sub2api-admin.js redeem-codes list --page-size 20
node scripts/sub2api-admin.js redeem-codes generate --json '{"count":1,"type":"balance","value":10}' --idempotency-key redeem-$(date +%s)
node scripts/sub2api-admin.js redeem-codes create-and-redeem --json '{"code":"order_123","type":"balance","value":10,"user_id":123}' --idempotency-key order-123
node scripts/sub2api-admin.js error-rules list
node scripts/sub2api-admin.js tls-profiles list
```

## Safety Notes

- Authentication uses `x-api-key` from `SUB2API_ADMIN_API_KEY` first, then falls back to `Authorization: Bearer <jwt>` from `SUB2API_JWT`.
- If the API returns `INVALID_ADMIN_KEY`, ask the user to regenerate the admin API key. If using JWT, log in as an admin user and copy the `access_token` from `POST /api/v1/auth/login`.
- `accounts export` includes credentials and tokens. Prefer `--file` and avoid printing exports in chat.
- Redeem code create/redeem commands should use `--idempotency-key` for payment or recharge workflows.
- For uncertain or newly added backend APIs, use `api <METHOD> <admin-path>` after a read-only check.
