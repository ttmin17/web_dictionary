---
slug: ruvnet-ruflo-plugins-ruflo-rag-memory-skills-memory-bridge
name: memory-bridge
tagline: Bridge Claude Code auto-memory into AgentDB with ONNX embeddings,
  deduplicate, and enable unified cross-project search
summary: "Claude Code stores memories as markdown files in
  /.claude/projects//memory/.md. This bridge: 1. Reads all memory files (current
  project or all projects) 2. Generates 384-dim ONNX embeddings
  (all-MiniLM-L6-v2) 3. Store..."
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
  subpath: plugins/ruflo-rag-memory/skills/memory-bridge
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
  path: plugins/ruflo-rag-memory/skills/memory-bridge/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.548Z
  truncated: false
type: agent_skill
skill:
  skill_name: memory-bridge
  description: Bridge Claude Code auto-memory into AgentDB with ONNX embeddings,
    deduplicate, and enable unified cross-project search
  folder_path: plugins/ruflo-rag-memory/skills/memory-bridge
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Memory Bridge
Import Claude Code's native auto-memory files into AgentDB for semantic search across sessions and projects.

## What it does

Claude Code stores memories as markdown files in `~/.claude/projects/*/memory/*.md`. This bridge:
1. Reads all memory files (current project or all projects)
2. Generates 384-dim ONNX embeddings (all-MiniLM-L6-v2)
3. Stores in AgentDB's `claude-memories` namespace with HNSW indexing
4. Deduplicates against existing entries (cosine similarity > 0.95)
5. Enables unified semantic search across all memory sources

## Steps

1. **Check bridge health**:
   `mcp__plugin_ruflo-core_ruflo__memory_bridge_status({})`
   Verify: Claude files count, AgentDB entries, SONA state, connection status.

2. **Import memories**:
   - Current project: `mcp__plugin_ruflo-core_ruflo__memory_import_claude({})`
   - All projects: `mcp__plugin_ruflo-core_ruflo__memory_import_claude({ allProjects: true })`

   CLI alternative:
   ```bash
   node .claude/helpers/auto-memory-hook.mjs import-all
   ```

3. **Verify import**:
   `mcp__plugin_ruflo-core_ruflo__memory_bridge_status({})`
   Confirm entry counts match expected file counts.

4. **Deduplicate** (if --dedupe):
   Search for near-duplicate entries (cosine > 0.95) and merge them, keeping the most recent version.

5. **Test unified search**:
   `mcp__plugin_ruflo-core_ruflo__memory_search_unified({ query: "test query", limit: 3 })`
   Results include source attribution: `claude-code`, `auto-memory`, or `agentdb`.

## Auto-import

The bridge runs automatically on `session-start` via the SessionStart hook. Manual invocation is only needed for:
- First-time import of all projects
- After bulk memory changes outside normal sessions
- Forcing re-embedding after model updates

## Search compatibility

Use `memory_search_unified` to query bridged memories. This bridge does not expose a text-query Graph RAG command or the `ruvector search --hybrid` CLI flags; additional ruvector integrations require separate configuration and verification.
