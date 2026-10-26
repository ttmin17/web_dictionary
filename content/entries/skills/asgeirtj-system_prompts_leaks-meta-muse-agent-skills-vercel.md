---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-vercel
name: vercel
tagline: "Inspect and manage the user's Vercel websites, web apps, projects, and
  deployments. Use to read build and runtime logs, investigate production errors
  "
summary: OAuth uses Dynamic Client Registration and PKCE through authd. Vercel
  declares the client public and issues no client secret, so no shared
  credential enters Muse and credentials must never be requested in chat.
  Vercel...
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
  subpath: Meta/muse-agent/skills/vercel
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
  path: Meta/muse-agent/skills/vercel/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.845Z
  truncated: false
type: agent_skill
skill:
  skill_name: vercel
  description: Inspect and manage the user's Vercel websites, web apps, projects,
    and deployments. Use to read build and runtime logs, investigate production
    errors and failed deployments, check deployment status, and deploy projects
    through Vercel's official MCP server.
  folder_path: Meta/muse-agent/skills/vercel
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

# Vercel
Use the installed `vercel` CLI. Start with `vercel status`. If it reports
`not_connected`, run `vercel authorize-url` and share only the returned
`connect_url` with the user.

OAuth uses Dynamic Client Registration and PKCE through authd. Vercel declares
the client public and issues no client secret, so no shared credential enters
Muse and credentials must never be requested in chat. Vercel exposes only
identity and session OAuth scopes for this MCP server, so read-only-by-default
behavior is enforced by the connector permissions below rather than a narrower
provider scope.

Run `vercel list-tools` to inspect the live provider catalogue and schemas,
then call an advertised tool with:

```text
vercel call-tool --name <tool> --arguments-json '<json-object>'
```

The reviewed catalogue follows Vercel's current public MCP tool documentation,
including `create_deployment`. The former `deploy_to_vercel` name and other
recently replaced names remain accepted only when the live server still
advertises them during rollout. Always use the live schema returned by
`list-tools`; for example, current `create_deployment` arguments place the
deployment definition under `requestBody`.

`list-tools` exposes only reviewed Vercel tools and includes each tool's
`hatch_permission`, `hatch_action`, and `hatch_permission_label`. Unknown or
new provider tools remain unavailable until reviewed. Ordinary reads follow
the user's connector settings. Decrypted secrets, deployment or sandbox file
contents, deployments, purchases, credential creation, security changes,
sandbox execution, and other mutations use separate granular permissions that
ask by default. Vercel advertises identity/session OAuth scopes only, so there
is no provider-side incremental scope to request for an individual tool.

Purchase tools can create immediate, non-refundable charges. Obtain a quote
when the live tool contract provides one, show it to the user, and never infer
confirmation. Do not retry any failed or timed-out write automatically because
its side effect may have completed.
