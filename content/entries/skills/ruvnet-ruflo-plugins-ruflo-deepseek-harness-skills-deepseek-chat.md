---
slug: ruvnet-ruflo-plugins-ruflo-deepseek-harness-skills-deepseek-chat
name: deepseek-chat
tagline: One-shot chat completion against DeepSeek's `deepseek-chat` model via
  the OpenAI-compatible /v1/chat/completions endpoint. Reads DEEPSEEK_API_KEY
  from
summary: Wraps DeepSeek's chat/completions endpoint in the same
  subprocess-invocation shape as the other ruflo--harness skills (see
  ruflo-metaharness's harness-score for the reference). No library import on
  ruflo's boot path.
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
  subpath: plugins/ruflo-deepseek-harness/skills/deepseek-chat
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
  path: plugins/ruflo-deepseek-harness/skills/deepseek-chat/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.545Z
  truncated: false
type: agent_skill
skill:
  skill_name: deepseek-chat
  description: One-shot chat completion against DeepSeek's `deepseek-chat` model
    via the OpenAI-compatible /v1/chat/completions endpoint. Reads
    DEEPSEEK_API_KEY from the environment; degrades gracefully (exit 0 with a
    JSON status:degraded envelope) when the key is missing or the API is
    unreachable. Use for non-reasoning tasks — summarization, extraction, quick
    classification — where deepseek-reasoner would be overkill.
  folder_path: plugins/ruflo-deepseek-harness/skills/deepseek-chat
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Wraps DeepSeek's chat/completions endpoint in the same subprocess-invocation
shape as the other `ruflo-*-harness` skills (see ruflo-metaharness's
`harness-score` for the reference). No library import on ruflo's boot path.

## When to use

- You want a cheap, fast completion from a non-reasoning model.
- The task fits in a single request/response — no multi-turn context.
- You want the raw content back as JSON so downstream tooling can consume it.
- For reasoning-heavy tasks (proofs, multi-step planning, hard debugging),
  use `deepseek-reason` instead — same plugin, different model.

## Data handling

The prompt and any `--system` text are sent over the network to `api.deepseek.com`, a third party. Do not put secrets, credentials, personal data or proprietary code you are not allowed to share into them. The API key is read from `DEEPSEEK_API_KEY` in your shell only; never paste it into a prompt, a file or a command line.

## Algorithm

Implementation: [`scripts/chat.mjs`](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-deepseek-harness/skills/deepseek-chat/../../scripts/chat.mjs).

1. Read `DEEPSEEK_API_KEY` from env. If missing, emit
   `{ status: 'degraded', reason: 'DEEPSEEK_API_KEY is not set', ... }`
   and exit 0 (ADR-150-style graceful degradation).
2. POST to `https://api.deepseek.com/v1/chat/completions` with
   `{ model, messages, temperature?, max_tokens? }`. 60s hard timeout.
3. Extract `choices[0].message.content` and usage counters.
4. `--format table` prints only the content (for piping); `--format json`
   (default) returns the full envelope.
5. `--alert-on-error` exits 1 on any degraded/error status (CI-friendly).

## Example

```bash
node plugins/ruflo-deepseek-harness/scripts/chat.mjs \
  --prompt "In one sentence: what is HNSW?" \
  --temperature 0.2
```

Sample output:

```json
{
  "status": "ok",
  "model": "deepseek-chat",
  "content": "HNSW is a graph-based approximate nearest neighbor …",
  "finishReason": "stop",
  "usage": { "promptTokens": 12, "completionTokens": 34, "totalTokens": 46 }
}
```
