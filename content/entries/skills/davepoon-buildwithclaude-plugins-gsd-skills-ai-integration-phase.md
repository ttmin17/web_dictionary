---
slug: davepoon-buildwithclaude-plugins-gsd-skills-ai-integration-phase
name: gsd:ai-integration-phase
tagline: Generate AI design contract (AI-SPEC.md) for phases that involve
  building AI systems — framework selection, implementation guidance from
  official docs
summary: "Create an AI design contract (AI-SPEC.md) for a phase involving AI
  system development. Orchestrates gsd-framework-selector → gsd-ai-researcher →
  gsd-domain-researcher → gsd-eval-planner. Flow: Select Framework → Resea..."
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
  subpath: plugins/gsd/skills/ai-integration-phase
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
  path: plugins/gsd/skills/ai-integration-phase/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.617Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:ai-integration-phase
  description: Generate AI design contract (AI-SPEC.md) for phases that involve
    building AI systems — framework selection, implementation guidance from
    official docs, and evaluation strategy
  folder_path: plugins/gsd/skills/ai-integration-phase
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

<objective>
Create an AI design contract (AI-SPEC.md) for a phase involving AI system development.
Orchestrates gsd-framework-selector → gsd-ai-researcher → gsd-domain-researcher → gsd-eval-planner.
Flow: Select Framework → Research Docs → Research Domain → Design Eval Strategy → Done
</objective>

<execution_context>
@${CLAUDE_PLUGIN_ROOT}/workflows/ai-integration-phase.md
@${CLAUDE_PLUGIN_ROOT}/references/ai-frameworks.md
@${CLAUDE_PLUGIN_ROOT}/references/ai-evals.md
</execution_context>

<context>
Phase number: $ARGUMENTS — optional, auto-detects next unplanned phase if omitted.
</context>

<process>
Execute @${CLAUDE_PLUGIN_ROOT}/workflows/ai-integration-phase.md end-to-end.
Preserve all workflow gates.
</process>
