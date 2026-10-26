---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-subscription-status
name: subscription_status
tagline: Answer questions about the user's Muse subscription, plan, usage,
  tokens, reset timing, or available plans and prices, or verify information
  that refe
summary: "Run exactly one of these commands:"
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
  subpath: Meta/muse-agent/skills/subscription-status
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
  path: Meta/muse-agent/skills/subscription-status/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.844Z
  truncated: false
type: agent_skill
skill:
  skill_name: subscription_status
  description: Answer questions about the user's Muse subscription, plan, usage,
    tokens, reset timing, or available plans and prices, or verify information
    that references the Muse subscription.
  folder_path: Meta/muse-agent/skills/subscription-status
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Subscription Status
Use this skill only when the user directly asks about their Muse subscription, current plan, usage allowance, tokens, reset timing, or available subscription plans and prices, or to verify information that references the Muse subscription.

Run exactly one of these commands:

- `subscription-status status` for current subscription, usage, reset timing, or credit availability.
- `subscription-status plans` for the current tier and available plans and prices.
- `subscription-status overview` when you need both current usage and plan options.

The command output is a safe, agent-facing factual brief. Use it to answer the user naturally; do not simply read the brief aloud or copy its labels mechanically. Do not probe for JSON or other output formats, and do not mention commands, internal services, APIs, caches, field names, or backend status values.

When verifying information, distinguish what the brief confirms from what it cannot check.

If exact token counts are requested, explain that Muse reports usage against the subscription allowance rather than an exact token balance.
