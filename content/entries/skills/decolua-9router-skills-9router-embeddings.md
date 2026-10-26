---
slug: decolua-9router-skills-9router-embeddings
name: embeddings
tagline: Generate vector embeddings via 9Router /v1/embeddings using OpenAI /
  Gemini / Mistral / Voyage / Nvidia / GitHub embedding models for RAG, semantic
  se
summary: POST $NINEROUTERURL/v1/embeddings
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
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: decolua/9router
  subpath: skills/9router-embeddings
  official_vendor: false
  license: MIT
signals:
  stars: 31424
  last_commit: 2026-10-23T08:35:28Z
  stars_delta_7d: 379
  stars_growth_pct: 1.2
  trending_score: 383.63
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
  path: skills/9router-embeddings/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:42:27.478Z
  truncated: false
type: agent_skill
skill:
  skill_name: embeddings
  description: Generate vector embeddings via 9Router /v1/embeddings using OpenAI
    / Gemini / Mistral / Voyage / Nvidia / GitHub embedding models for RAG,
    semantic search, similarity. Use when the user wants embeddings, vectors,
    RAG, semantic search, or to embed text.
  folder_path: skills/9router-embeddings
  extra_files: []
  pack_total_skills: 9
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: decolua-9router
---

# 9Router — Embeddings
Requires `NINEROUTER_URL` (and `NINEROUTER_KEY` if auth enabled). See https://raw.githubusercontent.com/decolua/9router/refs/heads/master/skills/9router/SKILL.md for setup.

## Discover

```bash
curl $NINEROUTER_URL/v1/models/embedding | jq '.data[].id'
# Per-model dimensions
curl "$NINEROUTER_URL/v1/models/info?id=openai/text-embedding-3-small"
```

## Endpoint

`POST $NINEROUTER_URL/v1/embeddings`

| Field | Required | Notes |
|---|---|---|
| `model` | yes | from `/v1/models/embedding` |
| `input` | yes | string OR array of strings |
| `encoding_format` | no | `float` (default) / `base64` |
| `dimensions` | no | OpenAI v3 only |

## Examples

```bash
curl -X POST $NINEROUTER_URL/v1/embeddings \
  -H "Authorization: Bearer $NINEROUTER_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"openai/text-embedding-3-small","input":["hello","world"]}'
```

JS:

```js
const r = await fetch(`${process.env.NINEROUTER_URL}/v1/embeddings`, {
  method: "POST",
  headers: { "Authorization": `Bearer ${process.env.NINEROUTER_KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({ model: "gemini/text-embedding-004", input: "RAG chunk text" }),
});
const { data } = await r.json();
console.log(data[0].embedding.length);  // dimension
```

## Response shape

```json
{ "object": "list", "model": "openai/text-embedding-3-small",
  "data": [
    { "object": "embedding", "index": 0, "embedding": [0.0123, -0.045, ...] },
    { "object": "embedding", "index": 1, "embedding": [...] }
  ],
  "usage": { "prompt_tokens": 5, "total_tokens": 5 } }
```

## Provider quirks

| Provider | Notes |
|---|---|
| `openai`, `openrouter`, `mistral`, `voyage-ai`, `fireworks`, `together`, `nebius`, `github`, `nvidia`, `jina-ai` | Native OpenAI shape — `dimensions` works only on OpenAI v3 (`text-embedding-3-*`) |
| `gemini`, `google_ai_studio` | Server auto-converts to `embedContent`/`batchEmbedContents` — send OpenAI shape |
| `openai-compatible-*`, `custom-embedding-*` | Custom `baseUrl` from credentials |

Batch (`input` as array) is faster; some providers cap batch size.
