---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-slack
name: slack
tagline: Read and search messages, channels, and threads in the user's Slack
  workspace. Use to catch up on team discussions and decisions, post channel
  message
summary: Slack requires a fixed registered app identity and does not support
  Dynamic Client Registration. The test app is limited to its development
  workspace; the production app must be approved for Slack Marketplace
  distribu...
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
  subpath: Meta/muse-agent/skills/slack
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
  path: Meta/muse-agent/skills/slack/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.844Z
  truncated: false
type: agent_skill
skill:
  skill_name: slack
  description: Read and search messages, channels, and threads in the user's Slack
    workspace. Use to catch up on team discussions and decisions, post channel
    messages, and reply to coworkers through Slack's official MCP server.
  folder_path: Meta/muse-agent/skills/slack
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

# Slack
Use the installed `slack` CLI. Start with `slack status`. If it reports
`not_connected`, run `slack authorize-url` and share only the returned
`connect_url` with the user.

Slack requires a fixed registered app identity and does not support Dynamic  
Client Registration. The test app is limited to its development workspace;  
the production app must be approved for Slack Marketplace distribution before
users from other workspaces can connect.

Run `slack list-tools` to inspect the reviewed subset of the live provider
catalogue and its permission annotations, then call an advertised tool with:

```text
slack call-tool --name <tool> --arguments-json '<json-object>'
```

Slack's catalogue contains both reads and mutations and can change over time.
The CLI allows only explicitly reviewed tools: read operations are allowed by
default and mutations require approval with an argument preview. Unknown or new
provider tools fail closed. Direct file reads, signed upload URLs, and unreviewed
list tools remain unavailable until they have dedicated delivery handling.
Never request OAuth tokens or app credentials in chat.
