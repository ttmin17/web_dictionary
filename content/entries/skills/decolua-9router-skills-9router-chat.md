---
slug: decolua-9router-skills-9router-chat
name: chat
tagline: "Chat / code generation via 9Router using OpenAI /v1/chat/completions
  or Anthropic /v1/messages format with streaming + auto-fallback combos. Use
  when "
summary: "- POST $NINEROUTERURL/v1/chat/completions — OpenAI format - POST
  $NINEROUTERURL/v1/messages — Anthropic format"
categories:
  - agent-frameworks
tags:
  - ai-agents
  - ai-gateway
  - anthropic
  - chatgpt
status: active
quality_percentile: 89
selection_reason: quality_percentile
first_seen: 2026-01-05T02:59:30
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: decolua/9router
  subpath: skills/9router-chat
  official_vendor: false
  license: MIT
signals:
  stars: 31424
  last_commit: 2026-10-23T08:35:28Z
  stars_delta_7d: 379
  stars_growth_pct: 1.2
  trending_score: 383.63
  rank_current: 40
  rank_delta: -1
  velocity_source: snapshot_delta
  sparkline_4w:
    - 30411
    - 30732
    - 31045
    - 31424
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: decolua/9router
  path: skills/9router-chat/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:42:27.478Z
  truncated: false
type: agent_skill
skill:
  skill_name: chat
  description: Chat / code generation via 9Router using OpenAI
    /v1/chat/completions or Anthropic /v1/messages format with streaming +
    auto-fallback combos. Use when the user wants to ask an LLM, generate code,
    summarize text, or run prompts through 9Router.
  folder_path: skills/9router-chat
  extra_files: []
  pack_total_skills: 9
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: decolua-9router
---

# 9Router — Chat
Requires `NINEROUTER_URL` (and `NINEROUTER_KEY` if auth enabled). See https://raw.githubusercontent.com/decolua/9router/refs/heads/master/skills/9router/SKILL.md for setup.

## Endpoints

- `POST $NINEROUTER_URL/v1/chat/completions` — OpenAI format
- `POST $NINEROUTER_URL/v1/messages` — Anthropic format

## Discover

```bash
curl $NINEROUTER_URL/v1/models | jq '.data[].id'
# Per-model metadata (contextWindow, params)
curl "$NINEROUTER_URL/v1/models/info?id=openai/gpt-4o"
```

Combos (e.g. `vip`, `mycodex`) auto-fallback through multiple providers.

## OpenAI format

```bash
curl -X POST $NINEROUTER_URL/v1/chat/completions \
  -H "Authorization: Bearer $NINEROUTER_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"openai/gpt-5","messages":[{"role":"user","content":"Hi"}],"stream":false}'
```

JS (OpenAI SDK):

```js
import OpenAI from "openai";
const client = new OpenAI({ baseURL: `${process.env.NINEROUTER_URL}/v1`, apiKey: process.env.NINEROUTER_KEY });
const res = await client.chat.completions.create({
  model: "openai/gpt-5",
  messages: [{ role: "user", content: "Hi" }],
  stream: true,
});
for await (const chunk of res) process.stdout.write(chunk.choices[0]?.delta?.content || "");
```

## Anthropic format

```bash
curl -X POST $NINEROUTER_URL/v1/messages \
  -H "Authorization: Bearer $NINEROUTER_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "Content-Type: application/json" \
  -d '{"model":"cc/claude-opus-4-7","max_tokens":1024,"messages":[{"role":"user","content":"Hi"}]}'
```

## Response shape

OpenAI (`/v1/chat/completions`):
```json
{ "id": "chatcmpl-...", "object": "chat.completion", "model": "openai/gpt-5",
  "choices": [{ "index": 0, "message": { "role": "assistant", "content": "Hello!" }, "finish_reason": "stop" }],
  "usage": { "prompt_tokens": 8, "completion_tokens": 2, "total_tokens": 10 } }
```

Streaming (`stream:true`) emits SSE: `data: {choices:[{delta:{content:"..."}}]}\n\n` ... `data: [DONE]\n\n`.

Anthropic (`/v1/messages`):
```json
{ "id": "msg_...", "type": "message", "role": "assistant", "model": "cc/claude-opus-4-7",
  "content": [{ "type": "text", "text": "Hello!" }],
  "stop_reason": "end_turn", "usage": { "input_tokens": 8, "output_tokens": 2 } }
```
