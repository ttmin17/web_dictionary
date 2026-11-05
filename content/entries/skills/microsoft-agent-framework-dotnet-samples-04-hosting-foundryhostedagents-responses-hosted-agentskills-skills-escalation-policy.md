---
slug: microsoft-agent-framework-dotnet-samples-04-hosting-foundryhostedagents-responses-hosted-agentskills-skills-escalation-policy
name: escalation-policy
tagline: When and how to escalate Contoso Outdoors customer-support tickets.
summary: "- Reports an injury, allergic reaction, or other safety incident. -
  Mentions legal action, regulators, or the press. - Has waited more than 14
  days for a refund that was already approved. - Requests a refund larger th..."
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agentic-ai
  - agents
  - dotnet
status: active
quality_percentile: 100
selection_reason: official_vendor
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: microsoft/agent-framework
  subpath: dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-AgentSkills/skills/escalation-policy
  official_vendor: true
  license: MIT
signals:
  stars: 14546
  last_commit: 2026-11-05T12:54:54Z
  stars_delta_7d: 229
  stars_growth_pct: 1.6
  trending_score: 232.66
  velocity_source: snapshot_delta
  sparkline_4w:
    - 14200
    - 14317
    - 14546
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: microsoft/agent-framework
  path: dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-AgentSkills/skills/escalation-policy/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:55.532Z
  truncated: false
type: agent_skill
skill:
  skill_name: escalation-policy
  description: When and how to escalate Contoso Outdoors customer-support tickets.
  folder_path: dotnet/samples/04-hosting/FoundryHostedAgents/responses/Hosted-AgentSkills/skills/escalation-policy
  extra_files: []
  pack_total_skills: 12
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: microsoft-agent-framework
---

# Contoso Outdoors Escalation Policy
You must follow this escalation policy on every conversation.

## Escalate immediately when the customer

- Reports an injury, allergic reaction, or other safety incident.
- Mentions legal action, regulators, or the press.
- Has waited more than 14 days for a refund that was already approved.
- Requests a refund larger than $500.

## How to escalate

1. Acknowledge the issue in one sentence.
2. Tell the customer you are escalating to a senior specialist.
3. Provide the escalation reference `ESC-CANARY-7742` and the SLA: a senior
   specialist will reply within 1 business day.
4. Do not promise a specific outcome (refund, replacement, compensation) on
   escalated tickets — only the senior specialist can commit to one.

## Do not escalate

- Routine returns within the standard 30-day window.
- Shipping status questions.
- Product care and usage questions.
