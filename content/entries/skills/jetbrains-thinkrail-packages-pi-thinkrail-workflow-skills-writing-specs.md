---
slug: jetbrains-thinkrail-packages-pi-thinkrail-workflow-skills-writing-specs
name: writing-specs
tagline: Use when a workflow step drafts or revises a spec artifact — a
  goal-and-requirements, an architecture, or a module SPEC — or when a workflow
  skill nam
summary: "- Small enough to read in one sitting. Target signal, not
  completeness. - Explain intent, not inventory: what the thing is for, what it
  owns, where its boundary runs — never a file listing or a restatement of the
  code."
categories:
  - productivity-ops
tags:
  - agent-skills
  - agentic-ai
  - agentic-workflow
  - ai-coding
status: active
quality_percentile: 56
selection_reason: quality_percentile
first_seen: 2026-11-16
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: JetBrains/thinkrail
  subpath: packages/pi-thinkrail-workflow/skills/writing-specs
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 8293
  last_commit: 2026-11-16T09:07:55Z
  stars_delta_7d: 443
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 8293
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: JetBrains/thinkrail
  path: packages/pi-thinkrail-workflow/skills/writing-specs/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:30.932Z
  truncated: false
type: agent_skill
skill:
  skill_name: writing-specs
  description: Use when a workflow step drafts or revises a spec artifact — a
    goal-and-requirements, an architecture, or a module SPEC — or when a
    workflow skill names it at such a step. The shared quality bar for specs —
    not a workflow, nothing to execute.
  folder_path: packages/pi-thinkrail-workflow/skills/writing-specs
  extra_files: []
  pack_total_skills: 13
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jetbrains-thinkrail
---

# Writing Specs
The workflow family's shared bar for every spec a workflow produces: **short, honest, on-rails**.
Process skills name this concept at the steps that draft or revise specs; *what* to draft and *when*
stays with the referencing skill. Graph mechanics — frontmatter, link kinds, the `spec_*` tools — are
the spec-graph skill's ground; this concept carries the quality bar the family holds on top of them,
and is where the family's rules for specs and the spec graph accrue.

## Short

- Small enough to read in one sitting. Target signal, not completeness.
- Explain intent, not inventory: what the thing is for, what it owns, where its boundary runs — never
  a file listing or a restatement of the code.

## Honest

- Only settled content appears. Never pad with `[TBD]` or placeholder sections — a section that
  hasn't been settled simply doesn't exist yet.
- Anything inferred rather than confirmed is marked unconfirmed, inline, where it stands.
- New and inferred specs are `status: draft` until the user has reviewed them — the flip out of
  `draft` follows the user's review, never the drafting agent's own judgment. A reviewed durable spec
  goes `active`, never `done`: it stays in force and evolves with the project.

## On-rails

- High-signal enough that a future agent (or human) lands on the decisions without re-deriving them.
- The spec is the *only* home for rationale: decisions, invariants, trade-offs, and bug post-mortems
  are recorded here, never as code comments — a rationale paragraph found in code is content to
  promote into the owning spec, leaving at most a one-line pointer where misediting would silently
  break something.
- Say each thing once: link by `id` instead of restating; the dependency edges *between* sibling
  modules live in the parent's spec, not in each leaf.
- One spec per *genuine* boundary — not per directory, not per file.

## The goal doc describes the product, not a plan

`goal-and-requirements` is the living record of what the product is and why: its goal, problem,
audience, capabilities, and non-goals, plus any durable principles.

- No versions, releases, phases, MVP/v1/v2 splits, or "later" lists. Sequencing is not a spec's job:
  an idea cut from scope goes back to the user to track wherever they plan work, and never into the doc.
- **Capabilities** state what the product does, or for a new project what its smallest useful first
  build will do.
- **Non-goals** hold only what is excluded by decision. Something neither listed nor excluded is open,
  not forbidden.
- It evolves with the product: a change that adds a capability or overturns a principle updates the goal
  doc in the same change.
