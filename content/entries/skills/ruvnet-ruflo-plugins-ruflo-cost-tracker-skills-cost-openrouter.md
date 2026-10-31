---
slug: ruvnet-ruflo-plugins-ruflo-cost-tracker-skills-cost-openrouter
name: cost-openrouter
tagline: Agent skill from ruvnet/ruflo
summary: "--- name: cost-openrouter description: OpenRouter real spend — key
  limit and usage today/week/month, one request's billed cost by generation id,
  account credits. Use when asked what OpenRouter charged or whether a key..."
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
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: ruvnet/ruflo
  subpath: plugins/ruflo-cost-tracker/skills/cost-openrouter
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
  path: plugins/ruflo-cost-tracker/skills/cost-openrouter/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.544Z
  truncated: false
type: agent_skill
skill:
  skill_name: cost-openrouter
  description: Agent skill from ruvnet/ruflo
  folder_path: plugins/ruflo-cost-tracker/skills/cost-openrouter
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

---name: cost-openrouter
description: OpenRouter real spend — key limit and usage today/week/month, one request's billed cost by generation id, account credits. Use when asked what OpenRouter charged or whether a key is near its limit. Network and API key: asks first.
argument-hint: "key | generation <id> | credits"
allowed-tools: Bash
---
# Cost OpenRouter

Network skill. **Ask the user before running it**, and run it only with their yes.

```bash
node ${CLAUDE_PLUGIN_ROOT}/scripts/openrouter.mjs key --yes
node ${CLAUDE_PLUGIN_ROOT}/scripts/openrouter.mjs generation gen-abc123 --yes
node ${CLAUDE_PLUGIN_ROOT}/scripts/openrouter.mjs credits --yes
```

## Rules

- Without `--yes` the script prints the call it would make and sends nothing.
- The key comes from `OPENROUTER_API_KEY` (credits: `OPENROUTER_MANAGEMENT_KEY`). Never ask the user to paste a key, never print, log or write one.
- OpenRouter's `usage.cost` / `total_cost` is **authoritative**; do not recompute it from list prices.
- `credits` needs a management key (a normal key returns 403). A fresh generation can 404 briefly: retry.
- BYOK rows carry the 5% OpenRouter fee in `usage`, the provider's charge in `upstream_inference_cost`: show both, labelled.
- Fallback and `openrouter/auto` can change the billed model: report `model` and `provider_name` as returned.
