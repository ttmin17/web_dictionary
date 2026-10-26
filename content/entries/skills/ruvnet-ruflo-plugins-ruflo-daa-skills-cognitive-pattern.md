---
slug: ruvnet-ruflo-plugins-ruflo-daa-skills-cognitive-pattern
name: cognitive-pattern
tagline: Define and manage cognitive patterns for agent reasoning and decision-making
summary: When you want to codify reasoning strategies, decision trees, or
  problem-solving approaches that agents can use and improve over time.
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
  subpath: plugins/ruflo-daa/skills/cognitive-pattern
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
  path: plugins/ruflo-daa/skills/cognitive-pattern/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.545Z
  truncated: false
type: agent_skill
skill:
  skill_name: cognitive-pattern
  description: Define and manage cognitive patterns for agent reasoning and decision-making
  folder_path: plugins/ruflo-daa/skills/cognitive-pattern
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Cognitive Pattern
Define cognitive patterns that guide agent reasoning and decision-making.

## When to use

When you want to codify reasoning strategies, decision trees, or problem-solving approaches that agents can use and improve over time.

## Steps

1. **Define pattern** — call `mcp__plugin_ruflo-core_ruflo__daa_cognitive_pattern` with the pattern structure and triggers
2. **Create workflow** — call `mcp__plugin_ruflo-core_ruflo__daa_workflow_create` to embed the pattern in an executable workflow
3. **Execute** — call `mcp__plugin_ruflo-core_ruflo__daa_workflow_execute` to run the cognitive workflow
4. **Evaluate** — call `mcp__plugin_ruflo-core_ruflo__daa_learning_status` to see how the pattern performs
5. **Share** — call `mcp__plugin_ruflo-core_ruflo__daa_knowledge_share` to propagate successful patterns

## Pattern types

- **Decision trees** — structured if/then reasoning
- **Chain of thought** — step-by-step problem decomposition
- **Analogy mapping** — solve new problems by referencing similar solved ones
- **Consensus patterns** — multi-perspective evaluation before deciding
