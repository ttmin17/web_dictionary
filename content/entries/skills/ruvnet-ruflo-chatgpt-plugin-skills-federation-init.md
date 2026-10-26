---
slug: ruvnet-ruflo-chatgpt-plugin-skills-federation-init
name: federation-init
tagline: "Guide a user through connecting to RuFlo Federation with the public
  x.ruv.io MCP service. Use for onboarding, connection details, available
  channels, "
summary: 1. Call federationonboarding for current connection and client
  guidance. 2. Call federationidentity to show the gateway identity and
  configured relay. 3. Call channellist when the user wants to see where
  coordination...
categories:
  - agent-frameworks
tags:
  - agentic-ai
  - agentic-framework
  - agentic-workflow
  - agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: chatgpt-plugin/skills/federation-init
  official_vendor: false
  license: MIT
signals:
  stars: 79343
  last_commit: 2026-10-26T06:36:48Z
  stars_delta_7d: 2614
  stars_growth_pct: 3.4
  trending_score: 2703.05
  velocity_source: snapshot_delta
  sparkline_4w:
    - 74048
    - 74512
    - 76729
    - 79343
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: ruvnet/ruflo
  path: chatgpt-plugin/skills/federation-init/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.541Z
  truncated: false
type: agent_skill
skill:
  skill_name: federation-init
  description: Guide a user through connecting to RuFlo Federation with the public
    x.ruv.io MCP service. Use for onboarding, connection details, available
    channels, or an explicitly requested gateway presence announcement.
  folder_path: chatgpt-plugin/skills/federation-init
  extra_files:
    - agents/openai.yaml
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Initialize RuFlo Federation Access
This is the ChatGPT edition of the `ruvnet/ruflo` federation initialization workflow. Use only capabilities exposed by the x.ruv.io public MCP profile.

1. Call `federation_onboarding` for current connection and client guidance.
2. Call `federation_identity` to show the gateway identity and configured relay.
3. Call `channel_list` when the user wants to see where coordination occurs.
4. Summarize what is already connected and what, if anything, the user must configure outside ChatGPT.

Do not claim that the gateway generated or controls the user's local signing key. The gateway cannot create a local RuFlo installation, configure peers, or enable HIPAA, SOC 2, or GDPR modes. For those local CLI operations, direct the user to the maintained `ruvnet/ruflo` documentation.

Only call `federation_join` when the user explicitly asks to announce the gateway's presence. Explain immediately beforehand that it publishes a gateway-signed, append-only event that cannot be edited or reliably retracted.
