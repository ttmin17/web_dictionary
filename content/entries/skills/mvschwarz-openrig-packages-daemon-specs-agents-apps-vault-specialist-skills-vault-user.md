---
slug: mvschwarz-openrig-packages-daemon-specs-agents-apps-vault-specialist-skills-vault-user
name: vault-user
tagline: Use when checking the health of this rig's HashiCorp Vault or writing,
  reading, listing, deleting or explaining its secrets.
summary: "- Address: http://127.0.0.1:8200 - Token: openrig-dev-token - Auth
  header: X-Vault-Token: openrig-dev-token"
categories:
  - agent-frameworks
tags:
  - agent-harness
  - agent-orchestration
  - agent-skills
  - ai-coding
status: active
quality_percentile: 63
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: mvschwarz/openrig
  subpath: packages/daemon/specs/agents/apps/vault-specialist/skills/vault-user
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 8648
  last_commit: 2026-11-05T13:06:48Z
  stars_delta_7d: 450
  stars_growth_pct: 5.5
  trending_score: 474.7
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7377
    - 7831
    - 8198
    - 8648
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mvschwarz/openrig
  path: packages/daemon/specs/agents/apps/vault-specialist/skills/vault-user/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:57.373Z
  truncated: false
type: agent_skill
skill:
  skill_name: vault-user
  description: Use when checking the health of this rig's HashiCorp Vault or
    writing, reading, listing, deleting or explaining its secrets.
  folder_path: packages/daemon/specs/agents/apps/vault-specialist/skills/vault-user
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mvschwarz-openrig
---

# Vault User
You have access to a HashiCorp Vault instance managed by this rig's environment.

## Connection

- **Address:** `http://127.0.0.1:8200`
- **Token:** `openrig-dev-token`
- **Auth header:** `X-Vault-Token: openrig-dev-token`

Always set the token before making API calls. For curl, use `-H "X-Vault-Token: openrig-dev-token"`.

## Health Check

```bash
curl -s http://127.0.0.1:8200/v1/sys/health | jq .
```

A healthy response has `"initialized": true` and `"sealed": false`.

## Secret Operations

### Write a secret

```bash
curl -s -X POST http://127.0.0.1:8200/v1/secret/data/<path> \
  -H "X-Vault-Token: openrig-dev-token" \
  -d '{"data": {"key": "value"}}' | jq .
```

### Read a secret

```bash
curl -s http://127.0.0.1:8200/v1/secret/data/<path> \
  -H "X-Vault-Token: openrig-dev-token" | jq .
```

The secret value is in `.data.data`.

### List secrets

```bash
curl -s -X LIST http://127.0.0.1:8200/v1/secret/metadata/ \
  -H "X-Vault-Token: openrig-dev-token" | jq .
```

List a subdirectory by appending the path: `.../secret/metadata/<prefix>/`.

### Delete a secret

```bash
curl -s -X DELETE http://127.0.0.1:8200/v1/secret/data/<path> \
  -H "X-Vault-Token: openrig-dev-token"
```

## Explaining Secrets

When asked to explain the current secret structure, list all paths and summarize what each contains. Use the list endpoint recursively if needed.

## Important Notes

- This is Vault dev mode — all data is in-memory and lost on restart
- The KV secrets engine is mounted at `secret/` by default in dev mode
- Use the `rig env status` command to verify Vault health through OpenRig before direct probing
