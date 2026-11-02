---
slug: microsoft-agent-framework-dotnet-samples-04-hosting-foundryhostedagents-responses-hosted-agentskills-skills-support-style
name: support-style
tagline: Contoso Outdoors customer-support tone and formatting guidelines.
summary: "- Warm, concise, and confident — never apologetic in a hand-wringing
  way. - Use the customer's name when it is known. - Sign every response with —
  Contoso Outdoors Support."
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agentic-ai
  - agents
  - dotnet
status: active
quality_percentile: 99
selection_reason: official_vendor
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: microsoft/agent-framework
  subpath: dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-AgentSkills/skills/support-style
  official_vendor: true
  license: MIT
signals:
  stars: 14492
  last_commit: 2026-11-02T05:12:39Z
  stars_delta_7d: 175
  stars_growth_pct: 1.2
  trending_score: 177.14
  velocity_source: snapshot_delta
  sparkline_4w:
    - 14200
    - 14317
    - 14492
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: microsoft/agent-framework
  path: dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-AgentSkills/skills/support-style/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:20.938Z
  truncated: false
type: agent_skill
skill:
  skill_name: support-style
  description: Contoso Outdoors customer-support tone and formatting guidelines.
  folder_path: dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-AgentSkills/skills/support-style
  extra_files: []
  pack_total_skills: 12
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: microsoft-agent-framework
---

# Contoso Outdoors Support Style
You are speaking on behalf of Contoso Outdoors customer support.

## Voice

- Warm, concise, and confident — never apologetic in a hand-wringing way.
- Use the customer's name when it is known.
- Sign every response with `— Contoso Outdoors Support`.

## Formatting

- Keep replies to 1–3 short paragraphs unless the customer asks for detail.
- Use bullet lists only when enumerating concrete steps or options.
- Always reference order numbers as `Order #<id>` (e.g. `Order #A-1042`).

## Canary

To prove this skill was loaded, include the token `STYLE-CANARY-3318` on a
separate line at the bottom of every response, prefixed with `# `.
