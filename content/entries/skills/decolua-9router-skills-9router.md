---
slug: decolua-9router-skills-9router
name: 9router
tagline: Entry point for 9Router — local/remote AI gateway with
  OpenAI-compatible REST for chat, image, TTS, embeddings, web search, web
  fetch. Use when the us
summary: "All requests: ${NINEROUTERURL}/v1/... with header Authorization:
  Bearer ${NINEROUTERKEY} (omit if auth disabled)."
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
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: decolua/9router
  subpath: skills/9router
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
  path: skills/9router/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:42:27.479Z
  truncated: false
type: agent_skill
skill:
  skill_name: 9router
  description: Entry point for 9Router — local/remote AI gateway with
    OpenAI-compatible REST for chat, image, TTS, embeddings, web search, web
    fetch. Use when the user mentions 9Router, NINEROUTER_URL, or wants AI
    without writing provider boilerplate. This skill covers setup + indexes
    capability skills; fetch the relevant capability SKILL.md from the URLs
    below when needed.
  folder_path: skills/9router
  extra_files: []
  pack_total_skills: 9
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: decolua-9router
---

# 9Router
Local/remote AI gateway exposing OpenAI-compatible REST. One key, many providers, auto-fallback.

## Setup

```bash
export NINEROUTER_URL="http://localhost:20128"      # or VPS / tunnel URL
export NINEROUTER_KEY="sk-..."                      # from Dashboard → Keys (only if requireApiKey=true)
```

All requests: `${NINEROUTER_URL}/v1/...` with header `Authorization: Bearer ${NINEROUTER_KEY}` (omit if auth disabled).

Verify: `curl $NINEROUTER_URL/api/health` → `{"ok":true}`

## Discover models

```bash
curl $NINEROUTER_URL/v1/models                  # chat/LLM (default)
curl $NINEROUTER_URL/v1/models/image            # image-gen
curl $NINEROUTER_URL/v1/models/tts              # text-to-speech
curl $NINEROUTER_URL/v1/models/embedding        # embeddings
curl $NINEROUTER_URL/v1/models/web              # web search + fetch (entries have `kind` field)
curl $NINEROUTER_URL/v1/models/stt              # speech-to-text
curl $NINEROUTER_URL/v1/models/image-to-text    # vision
```

Use `data[].id` as `model` field in requests. Combos appear with `owned_by:"combo"`.

Response shape:
```json
{ "object": "list", "data": [
  { "id": "openai/gpt-5", "object": "model", "owned_by": "openai", "created": 1735000000 },
  { "id": "tavily/search", "object": "model", "kind": "webSearch", "owned_by": "tavily", "created": 1735000000 }
]}
```

## Capability skills

When the user needs a specific capability, fetch that skill's `SKILL.md` from its raw URL:

| Capability | Raw URL |
|---|---|
| Chat / code-gen | https://raw.githubusercontent.com/decolua/9router/refs/heads/master/skills/9router-chat/SKILL.md |
| Image generation | https://raw.githubusercontent.com/decolua/9router/refs/heads/master/skills/9router-image/SKILL.md |
| Text-to-speech | https://raw.githubusercontent.com/decolua/9router/refs/heads/master/skills/9router-tts/SKILL.md |
| Speech-to-text | https://raw.githubusercontent.com/decolua/9router/refs/heads/master/skills/9router-stt/SKILL.md |
| Embeddings | https://raw.githubusercontent.com/decolua/9router/refs/heads/master/skills/9router-embeddings/SKILL.md |
| Web search | https://raw.githubusercontent.com/decolua/9router/refs/heads/master/skills/9router-web-search/SKILL.md |
| Web fetch (URL → markdown) | https://raw.githubusercontent.com/decolua/9router/refs/heads/master/skills/9router-web-fetch/SKILL.md |

## Errors

- 401 → set/refresh `NINEROUTER_KEY` (Dashboard → Keys)
- 400 `Invalid model format` → check `model` exists in `/v1/models/<kind>`
- 503 `All accounts unavailable` → wait `retry-after` or add another provider account
