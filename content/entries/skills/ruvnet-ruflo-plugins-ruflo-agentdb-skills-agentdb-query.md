---
slug: ruvnet-ruflo-plugins-ruflo-agentdb-skills-agentdb-query
name: agentdb-query
tagline: Query AgentDB through the controller bridge -- semantic routing,
  hierarchical recall, causal graphs, context synthesis, pattern store/search
summary: When you need to store, retrieve, or search knowledge across agent
  sessions. AgentDB provides hierarchical storage, causal knowledge graphs,
  semantic routing, and context synthesis.
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
  subpath: plugins/ruflo-agentdb/skills/agentdb-query
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
  path: plugins/ruflo-agentdb/skills/agentdb-query/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.542Z
  truncated: false
type: agent_skill
skill:
  skill_name: agentdb-query
  description: Query AgentDB through the controller bridge -- semantic routing,
    hierarchical recall, causal graphs, context synthesis, pattern store/search
  folder_path: plugins/ruflo-agentdb/skills/agentdb-query
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# AgentDB Query
Query and manage AgentDB through the controller bridge. AgentDB exposes 20 `agentdb_*` MCP tools; this skill enumerates the standard usage path.

## When to use

When you need to store, retrieve, or search knowledge across agent sessions. AgentDB provides hierarchical storage, causal knowledge graphs, semantic routing, and context synthesis.

## Steps

1. **Check health** — `mcp__plugin_ruflo-core_ruflo__agentdb_health`. Sanity-check `available: true`.
2. **Start session** — `mcp__plugin_ruflo-core_ruflo__agentdb_session-start` if not already active.
3. **Store knowledge** — `mcp__plugin_ruflo-core_ruflo__agentdb_hierarchical-store` for structured tier-keyed data (tiers: `working|episodic|semantic`).
4. **Recall knowledge** — `mcp__plugin_ruflo-core_ruflo__agentdb_hierarchical-recall` with a query.
5. **Search patterns** — `mcp__plugin_ruflo-core_ruflo__agentdb_pattern-search` for learned patterns (ReasoningBank-routed).
6. **Synthesize context** — `mcp__plugin_ruflo-core_ruflo__agentdb_context-synthesize` to combine multiple memories.
7. **Build causal graph** — `mcp__plugin_ruflo-core_ruflo__agentdb_causal-edge` to link related knowledge.

## Available controller groups

Call `mcp__plugin_ruflo-core_ruflo__agentdb_controllers` to list the runtime registry. Functional categories surfaced via the 20 MCP tools:

- **Hierarchical** — `agentdb_hierarchical-store`, `_recall` (tier-routed)
- **Pattern** — `agentdb_pattern-store`, `_search` (ReasoningBank-routed)
- **Semantic** — `agentdb_semantic-route`, `_context-synthesize`
- **Causal** — `agentdb_causal-edge` (graph-node backend with bridge fallback)
- **Lifecycle** — `agentdb_health`, `_controllers`, `_session-start`, `_session-end`
- **Bulk** — `agentdb_batch` (≤500 entries), `_consolidate`
- **Quality** — `agentdb_feedback`
- **Graph reads** — `agentdb_graph-query` (k-hop / semantic / pagerank from a domain-prefixed node id such as `entity:xyz`; SQL k-hop is bounded at 3 hops, check `appliedDepth` and `truncated`) and `agentdb_graph-pathfinder`
- **Deletes (destructive)** — `agentdb_hierarchical-delete`, `agentdb_causal-edge-delete`, `agentdb_causal-node-delete`. Confirm the exact ids with the user before calling; they are not undoable from this plugin.

## Important: namespace handling

Namespace strings apply to `memory_*` and `embeddings_search` only. The `agentdb_hierarchical-*`, `agentdb_pattern-*`, and `agentdb_causal-edge` tools route by **tier** or **controller**, not namespace. Don't pass `namespace: 'foo'` to those tools — it will be silently ignored. See plugin README "Namespace convention".

## Operational fallbacks (branch on these)

- `controller: 'memory-store-fallback'` — pattern persisted via `memory_store --namespace pattern`. NOT a failure.
- `_graphNodeBackend: true` — causal-edge handled by `@ruvector/graph-node`.
- `success: false, error: '...Use memory_store/memory_search instead.'` — bridge unavailable; switch to `memory_*` tools per the README replacement table.

## CLI alternative

```bash
npx @claude-flow/cli@latest memory search --query "your query" --namespace patterns
npx @claude-flow/cli@latest memory store --key "key" --value "value" --namespace patterns
npx @claude-flow/cli@latest memory list --namespace patterns
```
