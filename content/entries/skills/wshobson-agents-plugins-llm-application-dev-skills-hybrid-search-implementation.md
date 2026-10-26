---
slug: wshobson-agents-plugins-llm-application-dev-skills-hybrid-search-implementation
name: hybrid-search-implementation
tagline: Combine vector and keyword search for improved retrieval. Use when
  implementing RAG systems, building search engines, or when neither approach
  alone p
summary: "- Building RAG systems with improved recall - Combining semantic
  understanding with exact matching - Handling queries with specific terms
  (names, codes) - Improving search for domain-specific vocabulary - When pure
  ve..."
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
  subpath: plugins/llm-application-dev/skills/hybrid-search-implementation
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
  path: plugins/llm-application-dev/skills/hybrid-search-implementation/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.199Z
  truncated: false
type: agent_skill
skill:
  skill_name: hybrid-search-implementation
  description: Combine vector and keyword search for improved retrieval. Use when
    implementing RAG systems, building search engines, or when neither approach
    alone provides sufficient recall.
  folder_path: plugins/llm-application-dev/skills/hybrid-search-implementation
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

# Hybrid Search Implementation
Patterns for combining vector similarity and keyword-based search.

## When to Use This Skill

- Building RAG systems with improved recall
- Combining semantic understanding with exact matching
- Handling queries with specific terms (names, codes)
- Improving search for domain-specific vocabulary
- When pure vector search misses keyword matches

## Core Concepts

### 1. Hybrid Search Architecture

```
Query → ┬─► Vector Search ──► Candidates ─┐
        │                                  │
        └─► Keyword Search ─► Candidates ─┴─► Fusion ─► Results
```

### 2. Fusion Methods

| Method            | Description              | Best For        |
| ----------------- | ------------------------ | --------------- |
| **RRF**           | Reciprocal Rank Fusion   | General purpose |
| **Linear**        | Weighted sum of scores   | Tunable balance |
| **Cross-encoder** | Rerank with neural model | Highest quality |
| **Cascade**       | Filter then rerank       | Efficiency      |

## Templates and detailed worked examples

Full template library and detailed worked examples live in `references/details.md`. Read that file when you need the concrete templates.

## Best Practices

### Do's

- **Tune weights empirically** - Test on your data
- **Use RRF for simplicity** - Works well without tuning
- **Add reranking** - Significant quality improvement
- **Log both scores** - Helps with debugging
- **A/B test** - Measure real user impact

### Don'ts

- **Don't assume one size fits all** - Different queries need different weights
- **Don't skip keyword search** - Handles exact matches better
- **Don't over-fetch** - Balance recall vs latency
- **Don't ignore edge cases** - Empty results, single word queries
