---
slug: ruvnet-ruflo-plugins-ruflo-goals-skills-research-synthesize
name: research-synthesize
tagline: Synthesize research findings from memory into structured reports with
  evidence grading, contradiction resolution, and actionable recommendations
summary: After running deep-research (one or multiple times), when you need to
  pull together findings from memory into a coherent synthesis with
  recommendations.
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
  subpath: plugins/ruflo-goals/skills/research-synthesize
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
  path: plugins/ruflo-goals/skills/research-synthesize/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.545Z
  truncated: false
type: agent_skill
skill:
  skill_name: research-synthesize
  description: Synthesize research findings from memory into structured reports
    with evidence grading, contradiction resolution, and actionable
    recommendations
  folder_path: plugins/ruflo-goals/skills/research-synthesize
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

# Research Synthesize
Synthesize accumulated research findings into actionable reports.

## When to use

After running deep-research (one or multiple times), when you need to pull together findings from memory into a coherent synthesis with recommendations.

## Steps

1. **Gather findings** — search across research namespaces:
   - `mcp__plugin_ruflo-core_ruflo__memory_search` namespace `research` for raw findings
   - `mcp__plugin_ruflo-core_ruflo__memory_search` namespace `research-sources` for references
   - `mcp__plugin_ruflo-core_ruflo__agentdb_pattern-search` for discovered patterns
   - `mcp__plugin_ruflo-core_ruflo__agentdb_context-synthesize` for AI-assisted context building
2. **Grade evidence** — for each finding, assess:
   - **High**: Multiple independent sources agree, directly observed, reproducible
   - **Medium**: Single credible source, indirectly supported, plausible
   - **Low**: Anecdotal, single unverified source, speculative
3. **Resolve contradictions** — when findings conflict:
   - Identify the specific claim in tension
   - Compare evidence quality
   - Check recency (newer data may supersede)
   - Note unresolved contradictions explicitly
4. **Predict relevance** — call `mcp__plugin_ruflo-core_ruflo__neural_predict` to score which findings are most relevant to the original goal
5. **Structure report**:
   - Executive summary (2-3 sentences answering the original question)
   - Key findings (ranked by evidence quality)
   - Methodology (what sources were checked)
   - Limitations (what wasn't checked, what remains uncertain)
   - Recommendations (concrete next actions)
   - References (source links and memory keys)
6. **Store synthesis** — call `mcp__plugin_ruflo-core_ruflo__memory_store` namespace `research-synthesis` with the full report

## Output format

```
# [Research Topic] — Synthesis Report

## Summary
[2-3 sentence answer]

## Key Findings
1. [Finding] — Evidence: High/Medium/Low
2. [Finding] — Evidence: High/Medium/Low

## Contradictions
- [Claim A] vs [Claim B]: [resolution or "unresolved"]

## Recommendations
1. [Action] — because [reasoning]

## Sources
- [key]: [description]
```
