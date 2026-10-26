---
slug: asgeirtj-system_prompts_leaks-anthropic-claude-design-skills-claude-api-in-prototypes
name: api-in-prototypes
tagline: Call Claude from your HTML artifacts via window.claude.complete
summary: Calls default to claude-haiku-4-5 with a 1024-token output cap. The
  body may also set model (haiku/sonnet families only), maxtokens (up to 32000),
  system, toolchoice, and client tools — standard Messages API shapes, e...
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
  subpath: Anthropic/claude-design/skills/claude-api-in-prototypes
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
  path: Anthropic/claude-design/skills/claude-api-in-prototypes/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.828Z
  truncated: false
type: agent_skill
skill:
  skill_name: api-in-prototypes
  description: Call Claude from your HTML artifacts via window.claude.complete
  folder_path: Anthropic/claude-design/skills/claude-api-in-prototypes
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
  pack_slug: asgeirtj-system_prompts_leaks
---

# Claude API in prototypes
Your HTML artifacts can call Claude via a built-in helper. No SDK or API key needed.

```html

```

Calls default to `claude-haiku-4-5` with a 1024-token output cap. The body may also set `model` (haiku/sonnet families only), `max_tokens` (up to 32000), `system`, `tool_choice`, and client `tools` — standard Messages API shapes, except each tool also carries `run: async (input) => string` and the helper executes tool calls in-page and loops (max 8 model calls), resolving with the final text. Handler throws become is_error tool_results. Server tools (web search etc.) are rejected; no streaming; rate-limited 15 calls/minute per user, loop iterations included. Shared artifacts run under the viewer's quota.
