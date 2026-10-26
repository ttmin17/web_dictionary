---
slug: davepoon-buildwithclaude-plugins-origin-skills-recall
name: recall
tagline: Search Origin's local memory by query. Targeted lookup, not
  orientation. Invoked as `/recall <query>`. Use when the user asks "do you
  remember", "what
summary: When a local model or API key is configured, the daemon can rerank and
  expand server-side. In local memory mode it cannot. The skill always does
  agent-side expansion and rerank itself — cheap, makes results good in bo...
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
  subpath: plugins/origin/skills/recall
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
  path: plugins/origin/skills/recall/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.622Z
  truncated: false
type: agent_skill
skill:
  skill_name: recall
  description: >
    Search Origin's local memory by query. Targeted lookup, not orientation.
    Invoked as `/recall <query>`. Use when the user asks "do you remember",
    "what do you know about", "look up".
  folder_path: plugins/origin/skills/recall
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# /recall
Search Origin's memory by natural-language query. Returns matching memories
ranked by hybrid vector + FTS search, then re-ordered by the agent if it
helps.

## Two phases

When a local model or API key is configured, the daemon can rerank and
expand server-side. In local memory mode it cannot. The skill always does
**agent-side expansion and rerank** itself — cheap, makes results good in
both modes.

### Phase 1 — expand the query (agent-side)

Before calling `recall`, rewrite the user's query into a more
search-friendly form:

- Replace pronouns with the referent ("it" → the actual thing).
- Expand abbreviations the embedder is unlikely to know.
- Add the obvious synonym when the original term is too narrow (e.g.
  "auth" → "auth OR authentication").

Don't over-expand. If the query is already specific, leave it alone.
One recall call per `/recall` invocation — duplicate calls double
embedding load and the merge step is rarely worth it. The daemon's
own `search_memory_expanded` exists for the multi-query case; if it
matters, use that endpoint instead of issuing parallel calls here.

### Phase 2 — call the MCP tool

```
recall(query="<expanded query>", space=<inferred>, memory_type=<inferred>)
```

Inferences (do not ask the user):

- `space`: current working directory (e.g. `~/Repos/origin/...` → `"origin"`),
  the topic being discussed, or whatever space was mentioned in recent turns.
  Always pass when scope is known; if uncertain, run `list_spaces` later
  (post-PR-C) or omit.
- `memory_type`: only when the query itself names a type ("decision on X",
  "lesson about Y", "preference for Z"). Otherwise omit and let hybrid
  search rank.
- `limit`: default 10. Use 3-5 for quick lookups, 10-20 for exploration.

### Phase 3 — rerank (agent-side)

The daemon returns hits ranked by hybrid search. That ranking is good but
not perfect — it doesn't know the user's exact intent.

Re-read the returned memories against the *original* query. Promote the
ones that directly answer the question; demote ones that just share
keywords.

Show the user the top 3-5 reranked hits. Surface the rest only if asked.

### Phase 4 — render revision context (per result)

Each memory may carry revision fields: `version`, `pending_revision`,
`merged_from`, `last_delta_summary`. Most memories are fresh (v1, none
set) — render nothing extra for those. Only add a tag line when
something meaningful is present.

**Condition:** emit the tag line when any of these holds:
- `version > 1`
- `merged_from` is non-empty
- `pending_revision == true`

**Format** — one compact line above the memory body:

```
<id>  v<N> (merged <K> memories)         ← merged_from has K entries
<id>  v<N>, pending revision against <id> ← pending_revision true
<id>  v<N> — <last_delta_summary>         ← version > 1, delta populated
<id>  v<N>                                ← version > 1, no delta
```

Rules:
- Merged takes precedence over pending_revision in the label.
- Omit `— <delta>` when `last_delta_summary` is empty or null.
- Skip the tag line entirely when version == 1 (or null) and no other
  flag is set. Preserves current output for fresh memories.

## When to use

- "What did I say about X?"
- "Do you remember the decision on Y?"
- Need a specific fact before continuing.

## When NOT to use

- Broad session orientation → use `/brief` instead.
- Storing a new memory → use `/capture`.

## Hint: write specific queries

"Alice database preference" finds more than "database stuff". The semantic
matcher rewards specificity. If too many results return, add filters rather
than making the query longer.
