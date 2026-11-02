---
slug: lofcz-llmtornado-src-llmtornado-agents-samples-claude-skills-skills-research-synthesis-workflow
name: research-synthesis-workflow
tagline: Agent skill from lofcz/LLMTornado
summary: "--- name: Research Synthesis Workflow description: A step-by-step
  guide to synthesizing research from multiple sources into a coherent summary.
  --- ## Research synthesis workflow"
categories:
  - agent-frameworks
tags:
  - a2a
  - agent-framework
  - agent-orchestration
  - agent2agent
status: active
quality_percentile: 60
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: lofcz/LLMTornado
  subpath: src/LlmTornado.Agents.Samples/claude-skills/Skills/research-synthesis-workflow
  official_vendor: false
  license: MIT
signals:
  stars: 650
  last_commit: 2026-10-30T16:01:10Z
  stars_delta_7d: 1
  stars_growth_pct: 0.2
  trending_score: 1
  rank_current: 136
  rank_delta: -3
  velocity_source: snapshot_delta
  sparkline_4w:
    - 647
    - 649
    - 650
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: lofcz/LLMTornado
  path: src/LlmTornado.Agents.Samples/claude-skills/Skills/research-synthesis-workflow/SKILL.md
  branch: master
  fetched_at: 2026-11-02T09:07:27.838Z
  truncated: false
type: agent_skill
skill:
  skill_name: research-synthesis-workflow
  description: Agent skill from lofcz/LLMTornado
  folder_path: src/LlmTornado.Agents.Samples/claude-skills/Skills/research-synthesis-workflow
  extra_files: []
  pack_total_skills: 9
  is_pack_primary: true
  clients:
    - claude-code
  pack_slug: lofcz-llmtornado
---

---
name: Research Synthesis Workflow
description: A step-by-step guide to synthesizing research from multiple sources into a coherent summary.
---
## Research synthesis workflow

Copy this checklist and track your progress:

```
Research Progress:
- [ ] Step 1: Read all source documents
- [ ] Step 2: Identify key themes
- [ ] Step 3: Cross-reference claims
- [ ] Step 4: Create structured summary
- [ ] Step 5: Verify citations
```

**Step 1: Read all source documents**

Review each document in the `sources/` directory. Note the main arguments and supporting evidence.

**Step 2: Identify key themes**

Look for patterns across sources. What themes appear repeatedly? Where do sources agree or disagree?

**Step 3: Cross-reference claims**

For each major claim, verify it appears in the source material. Note which source supports each point.

**Step 4: Create structured summary**

Organize findings by theme. Include:
- Main claim
- Supporting evidence from sources
- Conflicting viewpoints (if any)

**Step 5: Verify citations**

Check that every claim references the correct source document. If citations are incomplete, return to Step 3.
