---
slug: gentleman-programming-gentle-ai-internal-assets-skills-rdd-defect-workflow
name: rdd-defect-workflow
tagline: "Trigger: RDD, receipt-driven development, review authority,
  receipt/lineage, correction/recovery, delivery gate/kill switch, bounded
  review defects. G"
summary: Load when the frontmatter trigger terms apply to a defect workflow.
categories:
  - coding-agents
tags:
  - agent-skills
  - ai-agents
  - ai-coding
  - claude-code
status: active
quality_percentile: 88
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: Gentleman-Programming/gentle-ai
  subpath: internal/assets/skills/rdd-defect-workflow
  official_vendor: false
  license: MIT
signals:
  stars: 8181
  last_commit: 2026-11-02T02:09:02Z
  stars_delta_7d: 161
  stars_growth_pct: 2
  trending_score: 164.23
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7736
    - 7849
    - 8020
    - 8181
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Gentleman-Programming/gentle-ai
  path: internal/assets/skills/rdd-defect-workflow/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:38.260Z
  truncated: false
type: agent_skill
skill:
  skill_name: rdd-defect-workflow
  description: "Trigger: RDD, receipt-driven development, review authority,
    receipt/lineage, correction/recovery, delivery gate/kill switch, bounded
    review defects. Guide work."
  folder_path: internal/assets/skills/rdd-defect-workflow
  extra_files: []
  pack_total_skills: 18
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: gentleman-programming-gentle-ai
---

## Activation Contract

Load when the frontmatter trigger terms apply to a defect workflow.

This skill guides public collaboration. It does not grant issue approval, label, review, exception, or merge authority.

## Hard Rules

- Check the user-owned RDD kill switch first. When disabled, do not start receipt reviews or fabricate approval; follow ordinary policy and report `disabled/unmanaged`.
- Require an approved issue (`status:approved`) and clean current `main` reproduction before implementation. Audit existing PRs for supersession or conflict; stop or narrow stale claims.
- Group by causal authority invariant. Use one issue and one PR or explicit chain per independent invariant and rollback boundary. Split independent causes; never merge a superseded or conflicting authority line.
- Inventory every operator flow claimed by the issue or PR, including entry, mode, environment, expectation, and negative controls. Require one truthful black-box bench journey per CLI or lifecycle flow, or actual runtime E2E proof when the core bench cannot represent it. Synthetic proxy coverage never proves another runtime.
- Use CodeGraph-first impact mapping, a dedicated worktree, and behavior-first tests. Run source-mutating normalization before candidate freeze.
- Forecast authored changes before edits. The hard limit is 400 additions plus deletions; above it, STOP for a chain or explicit maintainer-approved exception.
- Only when RDD is enabled, bind the review candidate identity, lineage, correction, and recovery records exactly. Keep bounded review defects in one correction transaction; ordinary repository policy decides delivery.
- Require independent read-only candidate validation before publication. Validation cannot edit source or authority; findings require a new candidate.
- Keep communication humane and evidence-based. Repository labels and workflow metadata are maintainer-owned, never evidence of contributor blame.

## Decision Gates

| Condition | Action |
| --- | --- |
| RDD disabled | Ordinary policy; `disabled/unmanaged`; no receipt or approval claim. |
| Issue gate or reproduction fails | Wait, stop, or narrow with evidence. |
| Invariant or rollback is independent | Separate issue and authoritative PR line. |
| Core bench fits / does not fit | Bench journey / actual runtime E2E; never proxy. |
| Forecast exceeds 400 lines | Chain or approved exception before edits. |

## Execution Steps

1. Check mode, approval, PR conflicts, and current-main reproduction.
2. Name invariant and rollback; isolate the worktree; CodeGraph-map code, tests, evidence, docs, distribution, and registration.
3. Inventory flows and controls; add failing tests and the smallest correction.
4. Normalize, enforce budget, run tests, and record each flow's exact candidate, command, scenario, and result.
5. Freeze, validate read-only, and give the verdict, evidence, and one humane next action.

## Output Contract

Return `rdd_mode`, `issue_pr`, `causal_invariant`, `operator_flows`, `journey_runtime_evidence`, `changed_line_budget`, `tests`, `rollback`, and `unresolved_authority_decisions`.

Identify approved and superseded/conflicting authority lines; every flow, negative control, and candidate-bound proof; additions plus deletions and chain/exception; test results; independent rollback; and unresolved maintainer decisions.

## References

No supporting files. Current repository policy remains authoritative.
