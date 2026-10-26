---
slug: affaan-m-ecc-skills-orch-build-mvp
name: orch-build-mvp
tagline: "Orchestrate bootstrapping a working MVP from a design or spec document
  — ingest the SDD/PRD, plan thin vertical slices, scaffold the first end-to-end
  "
summary: "- The user has a design / spec document (SDD, PRD, systemdesign) and
  wants a working vertical slice bootstrapped from it. - Takes a doc path as its
  argument, e.g. civicpulse/docs/SDD-v0.6.md."
categories:
  - productivity-ops
tags:
  - ai-agents
  - anthropic
  - claude
  - claude-code
status: active
quality_percentile: 96
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: affaan-m/ECC
  subpath: skills/orch-build-mvp
  official_vendor: false
  license: MIT
signals:
  stars: 289072
  last_commit: 2026-10-26T04:56:56Z
  stars_delta_7d: 5578
  stars_growth_pct: 2
  trending_score: 5687.75
  velocity_source: snapshot_delta
  sparkline_4w:
    - 274698
    - 278380
    - 283494
    - 289072
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: affaan-m/ECC
  path: skills/orch-build-mvp/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.038Z
  truncated: false
type: agent_skill
skill:
  skill_name: orch-build-mvp
  description: Orchestrate bootstrapping a working MVP from a design or spec
    document — ingest the SDD/PRD, plan thin vertical slices, scaffold the first
    end-to-end slice, then drive a generator-evaluator build loop with review
    and gated feat commits. Use when a design or spec document must become a
    running MVP through planned vertical slices.
  folder_path: skills/orch-build-mvp
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# orch-build-mvp
Actor · action · target: **orch · build · mvp**. Thin wrapper over the shared
engine in [`orch-pipeline`](https://github.com/affaan-m/ECC/blob/main/skills/orch-build-mvp/../orch-pipeline/SKILL.md).

## When to Use

- The user has a **design / spec document** (SDD, PRD, system_design) and wants a
  working vertical slice bootstrapped from it.
- Takes a doc path as its argument, e.g. `civicpulse/docs/SDD-v0.6.md`.

## Operation settings

- **Default size floor:** large — this is the full pipeline including Scaffold.
- **Phase mask:** 0 (read the spec) → 1 → 2 (heavy) → 3 (scaffold) → 4 → 5 → 6.
- **First move (phase 0 → 2):** read the doc; extract scope, locked decisions,
  and the feature list; order it into **thin vertical slices** (one end-to-end
  path first, not all-models-then-all-views). Phase 3 stands up that first slice.

## How It Works

1. Run the `orch-pipeline` engine with the settings above.
2. **Reuse the existing GAN harness** instead of hand-rolling an iterate loop:
   - Translate the SDD into `gan-harness/spec.md` + `gan-harness/eval-rubric.md`
     (this stands in for what `gan-planner` would generate — you already have the spec).
   - Drive the build with `/gan-build "<one-line brief>" --skip-planner`
     (defaults: `--max-iterations 15`, `--pass-threshold 7.0`,
     `--eval-mode playwright`; use `--eval-mode code-only` for non-UI slices).
   - That command runs the `gan-generator` → `gan-evaluator` loop and writes
     `gan-harness/feedback/feedback-NNN.md` until the score passes or plateaus.
3. Stop at **Gate 1** (slice plan) and **Gate 2** (pre-commit). Commit the
   scaffold and each slice as separate `feat:` commits.
4. Add `security-reviewer` for any slice touching a security trigger.

## Example

```
orch-build-mvp: civicpulse/docs/SDD-v0.6.md
→ read SDD → slice list (vertical) → scaffold slice 1  [GATE 1: approve]
→ /gan-build --skip-planner (generator → evaluator loop) scores vs spec → review
→ commit feat:  [GATE 2: confirm] → next slice
```
