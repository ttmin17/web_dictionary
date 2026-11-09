---
slug: codewhale-hq-codewhale-crates-skills-assets-skills-batch
name: batch
tagline: Break a large, parallelizable goal into bounded work units, coordinate
  existing agent/worktree machinery, integrate, and verify. Explicit-only.
summary: Break a large, parallelizable goal into bounded work units, coordinate
  existing agent/worktree machinery, integrate, and verify. Explicit-only.
categories:
  - coding-agents
tags:
  - agent-orchestration
  - ai-agent
  - cli
  - codewhale
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: codewhale-hq/Codewhale
  subpath: crates/skills/assets/skills/batch
  official_vendor: false
  license: MIT
signals:
  stars: 41160
  last_commit: 2026-11-09T09:21:05Z
  stars_delta_7d: 2
  stars_growth_pct: 0
  trending_score: 2
  velocity_source: snapshot_delta
  sparkline_4w:
    - 41101
    - 41118
    - 41158
    - 41160
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: codewhale-hq/Codewhale
  path: crates/skills/assets/skills/batch/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:23.915Z
  truncated: false
type: agent_skill
skill:
  skill_name: batch
  description: Break a large, parallelizable goal into bounded work units,
    coordinate existing agent/worktree machinery, integrate, and verify.
    Explicit-only.
  folder_path: crates/skills/assets/skills/batch
  extra_files: []
  pack_total_skills: 22
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: codewhale-hq-codewhale
---

# Batch
## Invocation
Explicit-only. Do not start from ambient wording alone.

## When to use
Use for large parallelizable goals that need coordinated sub-work.

## Non-goals
- Do not invent a second orchestration engine; reuse delegate/fleet.
- Do not publish or deploy as part of batching.

## Workflow
1. Partition into bounded units.
2. Run units with existing agent/worktree tools.
3. Integrate results and verify.
