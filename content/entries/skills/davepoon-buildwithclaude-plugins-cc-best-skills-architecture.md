---
slug: davepoon-buildwithclaude-plugins-cc-best-skills-architecture
name: architecture
tagline: Architecture design skill with ADR records, system design checklists,
  scalability assessment, and architecture patterns
summary: "- ADR (Architecture Decision Records): Structured format for recording
  design decisions with context, options, and rationale - System Design
  Checklist: Scalability, reliability, observability, security
  considerations..."
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
  subpath: plugins/cc-best/skills/architecture
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
  path: plugins/cc-best/skills/architecture/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.602Z
  truncated: false
type: agent_skill
skill:
  skill_name: architecture
  description: Architecture design skill with ADR records, system design
    checklists, scalability assessment, and architecture patterns
  folder_path: plugins/cc-best/skills/architecture
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Architecture Skill
Provides architectural guidance for system design decisions, including:

- **ADR (Architecture Decision Records)**: Structured format for recording design decisions with context, options, and rationale
- **System Design Checklist**: Scalability, reliability, observability, security considerations
- **Architecture Patterns**: Microservices, event-driven, layered, hexagonal
- **API Design**: RESTful conventions, versioning, pagination, error handling

## When Loaded

This skill is automatically injected when working with:

- `/cc-best:lead` — Technical design phase
- `architect` agent — System architecture decisions
- `planner` agent — Task breakdown and complexity analysis

## Key Principles

1. **Simplicity first** — Choose the simplest architecture that meets requirements
2. **Document decisions** — Every significant choice gets an ADR
3. **Separation of concerns** — Clear boundaries between components
4. **Design for failure** — Graceful degradation and circuit breakers
