---
slug: agricidaniel-claude-obsidian-skills-think
name: think
tagline: Apply the Fable-derived 10-stage OBSERVE, OBSERVE, LISTEN, THINK,
  CONNECT, CONNECT, FEEL, ACCEPT, CREATE, GROW loop to consequential or
  ambiguous reas
summary: This skill is read-only. It may inspect available evidence, but it does
  not edit files, execute a vault mutation, commit Git, or publish anything. If
  the CREATE stage recommends a change, compose with the appropriate...
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-note-taking
  - ai-second-brain
  - claude-code
status: active
quality_percentile: 64
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: AgriciDaniel/claude-obsidian
  subpath: skills/think
  official_vendor: false
  license: MIT
signals:
  stars: 16185
  last_commit: 2026-10-25T22:24:31Z
  stars_delta_7d: 358
  stars_growth_pct: 2.3
  trending_score: 366.1
  velocity_source: snapshot_delta
  sparkline_4w:
    - 15504
    - 15634
    - 15827
    - 16185
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: AgriciDaniel/claude-obsidian
  path: skills/think/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:12:46.214Z
  truncated: false
type: agent_skill
skill:
  skill_name: think
  description: Apply the Fable-derived 10-stage OBSERVE, OBSERVE, LISTEN, THINK,
    CONNECT, CONNECT, FEEL, ACCEPT, CREATE, GROW loop to consequential or
    ambiguous reasoning and decisions. Use for think this through, deep think,
    architecture review, postmortem, tradeoff analysis, or challenges to
    assumptions. This is a reasoning review, not a deterministic vault health
    check or repair workflow.
  folder_path: skills/think
  extra_files: []
  pack_total_skills: 16
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agricidaniel-claude-obsidian
---

# Think
Use the ten stages as a loop of attention, not a ceremonial transcript. Scale
the depth to novelty, stakes, uncertainty, and irreversibility. Keep the final
reasoning summary concise and evidence-bearing.

This skill is read-only. It may inspect available evidence, but it does not
edit files, execute a vault mutation, commit Git, or publish anything. If the
CREATE stage recommends a change, compose with the appropriate mutation skill
after the user authorizes that operation.

## Establish an evidence frame

Before the loop, separate:

- **Observed:** directly supported by an input, source, test, or measurement.
- **Inferred:** a conclusion drawn from observations; state the bridge.
- **Unknown:** missing evidence that could change the decision.
- **Preference:** a user or designer choice, not a factual claim.

Attach citations or concrete locators when sources exist. Never fabricate a
quotation, locator, test result, consensus, or confidence level.

## The ten stages

### 1. OBSERVE: external

Read the actual inputs, current state, constraints, failures, and prior work.
Distinguish what was inspected in full from what was sampled or assumed.

### 2. OBSERVE: internal

Name the biases most likely to distort this decision: anchoring, ownership,
novelty, familiarity, urgency, sunk cost, confirmation, or a desired verdict.
Recalibrate confidence to the evidence available.

### 3. LISTEN

Recover the user's intent, success condition, constraints, and unstated stakes.
Attend to error messages, dissent, edge cases, and affected voices. Ask only
questions whose answers could materially change the outcome.

### 4. THINK

Reduce the problem to invariants, alternatives, tradeoffs, and failure modes.
Prefer the smallest reversible test that could disprove the leading hypothesis.
Treat failure behavior as part of the specification.

### 5. CONNECT: lateral

Look for the same structure in adjacent components or another domain. Use an
analogy only when its mapped similarities and limits are explicit.

### 6. CONNECT: system

Trace upstream inputs, downstream consumers, ownership, state boundaries,
interfaces, and recovery paths. Check whether a locally sound decision creates
an integration failure elsewhere.

### 7. FEEL

Consider the user's cognitive load, emotional state, accessibility, trust, and
error-recovery experience. Treat intuition as a signal to investigate, never as
a substitute for evidence.

### 8. ACCEPT

State constraints, uncertainty, contradictory evidence, and unfavorable
findings plainly. Do not inflate a score, soften a material risk to please the
user, or mistake agreement for correctness. Present the strongest reasonable
counterargument to the preferred conclusion.

### 9. CREATE

Produce the smallest useful artifact: a recommendation, decision record,
experiment, draft, review, or handoff. Mark assumptions and unresolved risks.
Do not mutate state under this skill.

### 10. GROW

Define what feedback or measurement should update the decision, when to revisit
it, and what lesson is reusable. Saving the lesson is a separate explicit
operation composed with `save`.

## Verification discipline

Before calling the work complete:

1. Test the highest-risk claim or clearly state why it remains untested.
2. Seek disconfirming evidence, not only supporting examples.
3. Match verification effort to blast radius and reversibility.
4. Report actual commands, sources, artifacts, or observations used.
5. Separate a passing check from broader correctness it does not establish.
6. Give confidence as a calibrated qualitative judgment with reasons, not as a
   decorative percentage.

## Output shape

Adapt the headings to the task, but preserve these outcomes:

```markdown
## Decision
<recommendation or artifact>

## Evidence
<observed facts and important inferences>

## Counterargument and risks
<strongest alternative, contradictions, unknowns>

## Verification
<checks performed and checks still needed>

## Growth loop
<feedback signal, revisit condition, reusable lesson>
```

For a trivial, reversible lookup or typo, skip the formal loop. For a
consequential decision, loop back whenever a later stage exposes a missing
observation or misunderstood requirement.
