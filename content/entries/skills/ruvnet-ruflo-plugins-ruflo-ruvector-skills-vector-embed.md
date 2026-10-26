---
slug: ruvnet-ruflo-plugins-ruflo-ruvector-skills-vector-embed
name: vector-embed
tagline: Generate embeddings via npx ruvector@0.3.3 embed text (ONNX
  all-MiniLM-L6-v2, 384-dim), normalize, and store in HNSW index
summary: Use this skill to embed text, code, or documents into 384-dimensional
  vectors for semantic search, similarity comparison, or clustering. ruvector
  uses ONNX all-MiniLM-L6-v2 with HNSW indexing (52,000+ inserts/sec, 0.0...
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
  subpath: plugins/ruflo-ruvector/skills/vector-embed
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
  path: plugins/ruflo-ruvector/skills/vector-embed/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.548Z
  truncated: false
type: agent_skill
skill:
  skill_name: vector-embed
  description: Generate embeddings via npx ruvector@0.3.3 embed text (ONNX
    all-MiniLM-L6-v2, 384-dim), normalize, and store in HNSW index
  folder_path: plugins/ruflo-ruvector/skills/vector-embed
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Vector Embed
Generate and store vector embeddings using the `ruvector` npm package.

## When to use

Use this skill to embed text, code, or documents into 384-dimensional vectors for semantic search, similarity comparison, or clustering. ruvector uses ONNX all-MiniLM-L6-v2 with HNSW indexing (52,000+ inserts/sec, ~0.045ms search).

## Steps

1. **Ensure ruvector@0.3.3 is available**:
   ```bash
   npm ls ruvector 2>/dev/null | grep '0.3.3' || npm install ruvector@0.3.3
   ```
   ruvector 0.3.3 bundles the ONNX runtime; no add-on is needed. If `embed text` reports `ONNX WASM files not bundled`, an older ruvector (0.2.x) is being resolved — rerun with the pinned `npx -y ruvector@0.3.3`.
2. **Embed the input** (use the `text` subcommand, with text as a positional arg):
   - Single string: `npx -y ruvector@0.3.3 embed text "your text here"`
   - With output file: `npx -y ruvector@0.3.3 embed text "your text here" -o vec.json`
   - For a file: read its content via the Read tool, then pass it as the positional argument.
   - For batch: loop over files in shell — ruvector@0.3.3 has no built-in `--batch`/`--glob` flags.
3. **Adaptive (LoRA) variant**: `npx -y ruvector@0.3.3 embed text "..." --adaptive --domain code`
4. **Confirm** — report vector dimension (384), norm, and any output path written.
5. **Store metadata** in AgentDB if needed:
   `mcp__plugin_ruflo-core_ruflo__memory_store({ key: "embed-SOURCE", value: "VECTOR_METADATA", namespace: "vector-patterns" })`

## MCP alternative

Register the MCP server once with the pinned version:
```bash
claude mcp add ruvector -- npx -y ruvector@0.3.3 mcp start
```
Then call MCP tools directly: `hooks_rag_context` (semantic context), `brain_search` (collective brain), `hooks_ast_analyze`, `hooks_route`.

## Caveats

- The `embed --batch --glob` flags do **not** exist in ruvector@0.3.3. `embed text` accepts one text, `--stdin`, or `--input-file <path>` (keeps sensitive text off argv); call it per file.
- If embedding fails, run `npx -y ruvector@0.3.3 doctor` to diagnose.
