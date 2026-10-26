---
slug: ruvnet-ruflo-plugins-ruflo-ruvllm-skills-chat-format
name: chat-format
tagline: Format chat messages in a local model's template (llama3, mistral,
  chatml, phi, gemma, or a model id) and route queries over a small WASM HNSW
  pattern
summary: When you need a prompt string in a local model's chat template (for
  llama.cpp, Ollama or another local runtime), or a small embedding-based router
  over a handful of patterns. It does not call a model and it does not f...
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
  subpath: plugins/ruflo-ruvllm/skills/chat-format
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
  path: plugins/ruflo-ruvllm/skills/chat-format/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.548Z
  truncated: false
type: agent_skill
skill:
  skill_name: chat-format
  description: Format chat messages in a local model's template (llama3, mistral,
    chatml, phi, gemma, or a model id) and route queries over a small WASM HNSW
    pattern index (about 11 patterns). Use when preparing prompts for local
    runtimes.
  folder_path: plugins/ruflo-ruvllm/skills/chat-format
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Chat Format
Format prompts for multi-provider LLM inference with context retrieval.

## When to use

When you need a prompt string in a local model's chat template (for llama.cpp, Ollama or another local runtime), or a small embedding-based router over a handful of patterns. It does not call a model and it does not format for hosted APIs: Anthropic, OpenAI and Gemini take structured messages, not a template string.

## Steps

1. **Format chat** — call `mcp__plugin_ruflo-core_ruflo__ruvllm_chat_format` with `messages` (`[{role, content}]`) and `template`: one of `llama3`, `mistral`, `chatml`, `phi`, `gemma`, or a model id to auto-detect. Both fields are required. It returns the formatted string. It needs `@ruvector/ruvllm-wasm` (`npm i -g @ruvector/ruvllm-wasm`); without it the call fails with an install hint.
2. **Create a router** (optional) — `ruvllm_hnsw_create` with `dimensions` (for example 384), `maxPatterns`, `efSearch`. The WASM router holds about 11 patterns at most (ruvllm-wasm v2.0.1), so use it for routing between a few named intents, not for document retrieval. For real document search use `memory_search` or the `ruflo-rag-memory` plugin.
3. **Add patterns** — `ruvllm_hnsw_add` with `routerId`, a `name`, and an `embedding` whose length equals the router's dimensions (you produce the embedding, for example with `embeddings_generate`).
4. **Route a query** — `ruvllm_hnsw_route` with `routerId`, the query `embedding`, and `k` (default 3).
5. **Check status** — `ruvllm_status` shows whether the WASM module loaded. Routers live in the MCP server process only; they are gone when it restarts.
