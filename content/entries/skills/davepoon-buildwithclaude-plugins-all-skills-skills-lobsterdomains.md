---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-lobsterdomains
name: lobsterdomains
tagline: Register ICANN domains with crypto payments (USDC/USDT/ETH/BTC) via API
  — built for AI agents
summary: "- User wants to check if a domain name is available - User wants to
  register a domain programmatically without browser interaction - User wants to
  pay for domain registration with crypto (USDC/USDT/ETH/BTC)"
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/all-skills/skills/lobsterdomains
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/all-skills/skills/lobsterdomains/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.589Z
  truncated: false
type: agent_skill
skill:
  skill_name: lobsterdomains
  description: Register ICANN domains with crypto payments (USDC/USDT/ETH/BTC) via
    API — built for AI agents
  folder_path: plugins/all-skills/skills/lobsterdomains
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# LobsterDomains
Register .com, .xyz, .org and 1000+ ICANN domains with cryptocurrency payments via a simple REST API. Built for AI agents to acquire domains fully autonomously.

## When to Use This Skill

- User wants to check if a domain name is available
- User wants to register a domain programmatically without browser interaction
- User wants to pay for domain registration with crypto (USDC/USDT/ETH/BTC)

## What This Skill Does

1. Checks domain availability and live pricing
2. Accepts on-chain payment (USDC/USDT on Ethereum, Arbitrum, Base, or Optimism)
3. Registers the domain and returns DNS management credentials

## Usage

```bash
# Check availability
curl "https://lobsterdomains.xyz/api/v1/domains/check?domain=example.com" \
  -H "Authorization: Bearer $LOBSTERDOMAINS_API_KEY"

# Register after payment
curl -X POST https://lobsterdomains.xyz/api/v1/domains/register \
  -H "Authorization: Bearer $LOBSTERDOMAINS_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"domain":"example.com","tx_hash":"0x...","contact":{"name":"...","email":"..."}}'
```

## Setup

Generate an API key at https://lobsterdomains.xyz/api-keys (requires Ethereum wallet auth).

## Links

- Website: https://lobsterdomains.xyz
- ClawHub: https://clawhub.ai/esokullu/lobsterdomains
- Full docs: https://lobsterdomains.xyz/skills.md
