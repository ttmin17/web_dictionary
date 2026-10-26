---
slug: ruvnet-ruflo-plugins-ruflo-deepseek-harness-skills-deepseek-reason
name: deepseek-reason
tagline: Reasoning-mode completion against DeepSeek's `deepseek-reasoner` model
  (R1) via /v1/chat/completions. Surfaces the model's chain-of-thought
  (`reasonin
summary: Wraps DeepSeek's reasoning model so ruflo callers can get an explicit
  chain-of-thought back with the final answer, without having to parse it out of
  the message content. Same subprocess-invocation shape as the sibling...
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
  subpath: plugins/ruflo-deepseek-harness/skills/deepseek-reason
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
  path: plugins/ruflo-deepseek-harness/skills/deepseek-reason/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.545Z
  truncated: false
type: agent_skill
skill:
  skill_name: deepseek-reason
  description: Reasoning-mode completion against DeepSeek's `deepseek-reasoner`
    model (R1) via /v1/chat/completions. Surfaces the model's chain-of-thought
    (`reasoning_content`) separately from the final answer (`content`), so
    callers can display or discard the CoT without re-parsing. Reads
    DEEPSEEK_API_KEY; degrades gracefully (exit 0 with status:degraded envelope)
    when unset or the API is unreachable. Ignores temperature/top_p per
    DeepSeek's spec for reasoner models.
  folder_path: plugins/ruflo-deepseek-harness/skills/deepseek-reason
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Wraps DeepSeek's reasoning model so ruflo callers can get an explicit
chain-of-thought back with the final answer, without having to parse it
out of the message content. Same subprocess-invocation shape as the sibling
`deepseek-chat` skill.

## When to use

- Multi-step reasoning tasks: proofs, plans, root-cause analysis, hard
  bug triage.
- You want to *see* the model's thinking (for audit, for training data,
  or to sanity-check its final answer).
- You can tolerate the higher latency and token cost of a reasoner vs
  `deepseek-chat`.

## Data handling

The prompt and any `--system` text are sent over the network to `api.deepseek.com`, a third party. Do not put secrets, credentials, personal data or proprietary code you are not allowed to share into them. The API key is read from `DEEPSEEK_API_KEY` in your shell only; never paste it into a prompt, a file or a command line.

## Algorithm

Implementation: [`scripts/reason.mjs`](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-deepseek-harness/skills/deepseek-reason/../../scripts/reason.mjs).

1. Read `DEEPSEEK_API_KEY` from env. Degrade gracefully when missing.
2. POST to `/v1/chat/completions` with `{ model: 'deepseek-reasoner', messages, max_tokens? }`.
   Per DeepSeek's docs, `temperature`/`top_p` are ignored for reasoner
   models — this script does not forward them.
3. Extract `choices[0].message.content` AND `choices[0].message.reasoning_content`.
4. JSON output always includes `reasoning`; table mode omits it unless
   `--show-reasoning` is passed.
5. `reasoningTokens` (from `usage.completion_tokens_details.reasoning_tokens`)
   is surfaced separately so callers can attribute cost.

## Example

```bash
node plugins/ruflo-deepseek-harness/scripts/reason.mjs \
  --prompt "Prove that sqrt(2) is irrational." \
  --format table --show-reasoning
```

Table output shows the reasoning block, then the answer. JSON mode returns:

```json
{
  "status": "ok",
  "model": "deepseek-reasoner",
  "content": "sqrt(2) is irrational because …",
  "reasoning": "Assume for contradiction that sqrt(2) = p/q in lowest terms …",
  "finishReason": "stop",
  "usage": {
    "promptTokens": 14,
    "completionTokens": 812,
    "reasoningTokens": 640,
    "totalTokens": 826
  }
}
```
