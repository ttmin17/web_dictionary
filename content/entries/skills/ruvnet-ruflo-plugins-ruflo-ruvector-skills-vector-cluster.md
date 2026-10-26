---
slug: ruvnet-ruflo-plugins-ruflo-ruvector-skills-vector-cluster
name: vector-cluster
tagline: Cluster code by graph community detection via npx ruvector@0.3.3 hooks
  graph-cluster (spectral / Louvain)
summary: Use this skill when you have a collection of embeddings and want to
  discover natural groupings. Clustering reveals themes, identifies outliers,
  and helps organize large vector collections.
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
  subpath: plugins/ruflo-ruvector/skills/vector-cluster
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
  path: plugins/ruflo-ruvector/skills/vector-cluster/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.548Z
  truncated: false
type: agent_skill
skill:
  skill_name: vector-cluster
  description: Cluster code by graph community detection via npx ruvector@0.3.3
    hooks graph-cluster (spectral / Louvain)
  folder_path: plugins/ruflo-ruvector/skills/vector-cluster
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Vector Cluster
Cluster vectors in a namespace by semantic similarity using `ruvector`.

## When to use

Use this skill when you have a collection of embeddings and want to discover natural groupings. Clustering reveals themes, identifies outliers, and helps organize large vector collections.

## Steps

1. **Ensure ruvector@0.3.3 is available**:
   ```bash
   npm ls ruvector 2>/dev/null | grep '0.3.3' || npm install ruvector@0.3.3
   ```
2. **Run clustering** — in ruvector@0.3.3 the only working clustering is via `hooks graph-cluster` (spectral/Louvain over a code graph). The top-level `cluster` command is reserved for distributed cluster ops and is currently "Coming Soon" upstream.
   ```bash
   npx -y ruvector@0.3.3 hooks graph-cluster <files...>
   npx -y ruvector@0.3.3 hooks graph-mincut <files...>
   ```
3. **Review output** — JSON with cluster assignments, community labels, and edges. If you see `"graph.nodes is not iterable"`, run `hooks init` first to seed the graph state.
4. **Store results**:
   `mcp__plugin_ruflo-core_ruflo__memory_store({ key: "clusters-PROJECT-TIMESTAMP", value: "CLUSTER_ASSIGNMENTS", namespace: "vector-clusters" })`

## Interpreting results

- **High cohesion** (>0.85): tight, well-defined cluster
- **Medium cohesion** (0.6-0.85): related but diverse content
- **Low cohesion** (<0.6): loose grouping, try higher resolution
- **Outliers**: novel or anomalous files worth investigating

## Caveats

- `cluster --namespace ... --k N` and `cluster --density` are **not** valid in ruvector@0.3.3 — those flags fall through to the distributed-cluster command, which only accepts `--status`, `--join`, `--leave`, `--nodes`, `--leader`, `--info`.
- For namespaced k-means over arbitrary embeddings, run k-means in your own code against vectors stored in AgentDB.
