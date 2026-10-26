---
slug: wshobson-agents-plugins-llm-application-dev-skills-similarity-search-patterns
name: similarity-search-patterns
tagline: Implement efficient similarity search with vector databases. Use when
  building semantic search, implementing nearest neighbor queries, or optimizing
  r
summary: "- Building semantic search systems - Implementing RAG retrieval -
  Creating recommendation engines - Optimizing search latency - Scaling to
  millions of vectors - Combining semantic and keyword search"
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/llm-application-dev/skills/similarity-search-patterns
  official_vendor: false
  license: MIT
signals:
  stars: 41725
  last_commit: 2026-10-26T01:08:14Z
  stars_delta_7d: 673
  stars_growth_pct: 1.6
  trending_score: 684.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
    - 41725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/llm-application-dev/skills/similarity-search-patterns/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.199Z
  truncated: false
type: agent_skill
skill:
  skill_name: similarity-search-patterns
  description: Implement efficient similarity search with vector databases. Use
    when building semantic search, implementing nearest neighbor queries, or
    optimizing retrieval performance.
  folder_path: plugins/llm-application-dev/skills/similarity-search-patterns
  extra_files:
    - references/details.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Similarity Search Patterns
Patterns for implementing efficient similarity search in production systems.

## When to Use This Skill

- Building semantic search systems
- Implementing RAG retrieval
- Creating recommendation engines
- Optimizing search latency
- Scaling to millions of vectors
- Combining semantic and keyword search

## Core Concepts

### 1. Distance Metrics

| Metric             | Formula            | Best For              |
| ------------------ | ------------------ | --------------------- | --- | -------------- |
| **Cosine**         | 1 - (A·B)/(‖A‖‖B‖) | Normalized embeddings |
| **Euclidean (L2)** | √Σ(a-b)²           | Raw embeddings        |
| **Dot Product**    | A·B                | Magnitude matters     |
| **Manhattan (L1)** | Σ                  | a-b                   |     | Sparse vectors |

### 2. Index Types

```
┌─────────────────────────────────────────────────┐
│                 Index Types                      │
├─────────────┬───────────────┬───────────────────┤
│    Flat     │     HNSW      │    IVF+PQ         │
│ (Exact)     │ (Graph-based) │ (Quantized)       │
├─────────────┼───────────────┼───────────────────┤
│ O(n) search │ O(log n)      │ O(√n)             │
│ 100% recall │ ~95-99%       │ ~90-95%           │
│ Small data  │ Medium-Large  │ Very Large        │
└─────────────┴───────────────┴───────────────────┘
```

## Templates and detailed worked examples

Full template library and detailed worked examples live in `references/details.md`. Read that file when you need the concrete templates.

## Best Practices

### Do's

- **Use appropriate index** - HNSW for most cases
- **Tune parameters** - ef_search, nprobe for recall/speed
- **Implement hybrid search** - Combine with keyword search
- **Monitor recall** - Measure search quality
- **Pre-filter when possible** - Reduce search space

### Don'ts

- **Don't skip evaluation** - Measure before optimizing
- **Don't over-index** - Start with flat, scale up
- **Don't ignore latency** - P99 matters for UX
- **Don't forget costs** - Vector storage adds up
