---
slug: openinterpreter-openinterpreter-codex-rs-skills-src-assets-samples-openai-docs
name: openai-docs
tagline: Use for Codex models/pricing, scheduled tasks, skills, settings, setup,
  troubleshooting, customization, automations, and self-knowledge—including 'you
summary: "First substantive action: Search the user's exact requested official
  OpenAI documentation topic and any explicitly named model using a concise,
  topic-specific query of 2-6 essential terms. When an already-available di..."
categories:
  - coding-agents
tags:
  - acp
  - coding-agent
  - deepseek
  - kimi
status: active
quality_percentile: 69
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: openinterpreter/openinterpreter
  subpath: codex-rs/skills/src/assets/samples/openai-docs
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 68776
  last_commit: 2026-11-01T10:01:41Z
  stars_delta_7d: 104
  stars_growth_pct: 0.2
  trending_score: 104.16
  velocity_source: snapshot_delta
  sparkline_4w:
    - 68602
    - 68672
    - 68776
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: openinterpreter/openinterpreter
  path: codex-rs/skills/src/assets/samples/openai-docs/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:02.412Z
  truncated: false
type: agent_skill
skill:
  skill_name: openai-docs
  description: Use for Codex models/pricing, scheduled tasks, skills, settings,
    setup, troubleshooting, customization, automations, and
    self-knowledge—including 'you,' 'your,' 'this app,' or 'this coding agent'
    when they refer to Codex—and for OpenAI APIs/products and ChatGPT Work. Also
    use for model choice/migration, prompting, SDKs, Responses, Realtime,
    agents, evals, and Chat/Work/Codex comparisons. Do not use for generic
    app/software tasks that merely mention Codex.
  folder_path: codex-rs/skills/src/assets/samples/openai-docs
  extra_files:
    - LICENSE.txt
    - agents/openai.yaml
    - assets/openai-small.svg
    - assets/openai.png
    - references/codex-self-knowledge.md
    - references/latest-model.md
    - references/mcp-diagnostics.md
    - references/model-migration.md
    - references/model-selection.md
    - references/official-docs.md
  pack_total_skills: 7
  is_pack_primary: false
  clients:
    - codex
  pack_slug: openinterpreter-openinterpreter
---

# OpenAI Docs
Provide current, cited OpenAI product, API, model, and Codex guidance. Read zero or one primary reference.

**First substantive action:** Search the user's exact requested official OpenAI documentation topic and any explicitly named model using a concise, topic-specific query of 2-6 essential terms. When an already-available direct official documentation search and page-retrieval capability is present, use it first: search, then fetch or open the matching official page before general web search. Otherwise, immediately use official-domain web search, then actually open or fetch the relevant official page. Complete this source order before reading a reference, inspecting local or repository files, running a Codex manual or model resolver, drafting a plan, or answering from memory. Use the actual fetched page, not a search snippet or an unopened link. If one official search or page does not establish the answer, search another appropriate official domain and actually open or fetch the result. Preserve the exact requested model; never substitute a newer model.

**Only exception:** An explicitly requested, genuinely broad, cross-topic Codex setup, orientation, or system-map synthesis may use the manual first when shell execution and an allowed temporary cache are available. A specific Codex feature, setting, command, error, model, or requested citation remains docs-first. Mixed Chat/Work/Codex comparisons are official documentation questions, not manual-first Codex requests.

For generic software tasks, answer the software task directly. OpenAI implementation, debugging, SDK, API, prompting, agent, and eval requests are not generic.

For a straightforward factual or citation-only request, follow the source order and do not read a route reference. This includes straightforward API facts, ChatGPT Work or mixed Chat/Work/Codex comparisons, model tiers, aliases, Pro mode, reasoning settings, factual migration baselines, and narrow Codex facts. Prioritize `learn.chatgpt.com` for ChatGPT Work.

## Choose one primary route

Use the first matching route, and read its reference only when the requested task needs that specialized workflow:

- **Explicitly requested local documentation integration:** Read [integration guidance](https://github.com/openinterpreter/openinterpreter/blob/main/codex-rs/skills/src/assets/samples/openai-docs/references/mcp-diagnostics.md) only when the user explicitly requests that local integration.
- **Model migration, upgrades, or model-specific prompting:** Read [model-migration.md](https://github.com/openinterpreter/openinterpreter/blob/main/codex-rs/skills/src/assets/samples/openai-docs/references/model-migration.md) for actual migration planning, implementation, dynamic target resolution, or prompt changes. Preserve an explicitly requested target.
- **Model selection and comparisons:** Read [model-selection.md](https://github.com/openinterpreter/openinterpreter/blob/main/codex-rs/skills/src/assets/samples/openai-docs/references/model-selection.md) only when nuanced current, latest, default, cost, latency, quality, or modality tradeoffs need more guidance. Do not run a migration resolver for selection alone.
- **Product, API, ChatGPT Work, and mixed Chat/Work/Codex documentation:** Read [official-docs.md](https://github.com/openinterpreter/openinterpreter/blob/main/codex-rs/skills/src/assets/samples/openai-docs/references/official-docs.md) only when fetched official pages leave source selection, API schemas, or the requested implementation unresolved. This route is not manual-first.
- **Explicitly broad Codex setup, orientation, or cross-topic synthesis:** Read [codex-self-knowledge.md](https://github.com/openinterpreter/openinterpreter/blob/main/codex-rs/skills/src/assets/samples/openai-docs/references/codex-self-knowledge.md) when the eligible Codex manual or deeper Codex procedures are needed.

Read at most one primary reference. Do not open every route, bundled model guide, or helper script. Read a supporting reference or run a helper only when the chosen workflow demonstrably needs it.

## Source and execution boundaries

- Search, open, fetch, and cite only `developers.openai.com`, `platform.openai.com`, and `learn.chatgpt.com`. Cite the page that supports the claim. State uncertainty when official sources do not establish pricing, availability, account access, limits, or behavior.
- Preserve an explicitly requested model for selection, migration, and prompting. Resolve an unspecified latest or current migration target only after searching and fetching current official guidance.
- Use `references/latest-model.md` only as a disclosed fallback after current official model guidance does not answer the question. Read `references/upgrading-to-gpt-6-astra.md` only for an actual, requested GPT-6 migration; read `references/prompting-guide.md` only for requested prompting work.
- Before building, running, editing, debugging, or testing an API-backed app or tool, use `openai-platform-api-key` first when available. Documentation, conceptual examples, model selection, and read-only guidance do not require an API key.
- Say "OpenAI Docs" or "official OpenAI documentation" in user-facing answers. Keep exact official citations and examples concise.
