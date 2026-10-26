---
slug: trpc-group-trpc-agent-go-examples-dynamicworkflow-skills-skills-fanout-analysis
name: fanout-analysis
tagline: Use this workflow recipe when a question benefits from several
  independent perspectives followed by a single evidence-based synthesis.
summary: 1. Extract the decision or question, the relevant constraints, and the
  output format from the user's request. 2. Choose two to four independent
  analysis angles that cover different evidence or reasoning needs. Give ev...
categories:
  - agent-frameworks
tags:
  - a2a
  - a2a-protocol
  - ag-ui
  - agent-framework
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: examples/dynamicworkflow/skills/skills/fanout-analysis
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1877
  last_commit: 2026-10-26T06:16:05Z
  stars_delta_7d: 7
  stars_growth_pct: 0.4
  trending_score: 7.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1860
    - 1870
    - 1877
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: examples/dynamicworkflow/skills/skills/fanout-analysis/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:23.534Z
  truncated: false
type: agent_skill
skill:
  skill_name: fanout-analysis
  description: Use this workflow recipe when a question benefits from several
    independent perspectives followed by a single evidence-based synthesis.
  folder_path: examples/dynamicworkflow/skills/skills/fanout-analysis
  extra_files: []
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

# Parallel Analysis and Synthesis
Turn the user's request into a temporary fan-out/fan-in workflow. Keep the
number and focus of branches appropriate to the request; do not create roles
just to make the workflow look larger.

## Process

1. Extract the decision or question, the relevant constraints, and the output
   format from the user's request.
2. Choose two to four independent analysis angles that cover different
   evidence or reasoning needs. Give every branch the same core question and
   only the context it needs. Do not let one branch depend on another branch's
   unfinished answer.
3. Run those branches in parallel. Each branch should return concise findings,
   assumptions, and unresolved uncertainty rather than a polished final
   answer.
4. Pass the ordered branch results, the original request, and the explicit
   decision criteria to a separate synthesis role. The synthesizer must
   distinguish agreement, disagreement, and missing evidence; it must not
   silently turn an unsupported claim into a fact.
5. If the request requires a decision, have the synthesizer return a small
   structured object with `recommendation`, `reasons`, and `uncertainties`.
   Keep branch content as text unless a later control-flow decision genuinely
   needs typed fields.
6. Return the synthesis and the key evidence trail. If a branch fails, keep
   that missing evidence explicit and follow the application's bounded failure
   policy; do not silently treat it as support or retry indefinitely.

## Compilation Rules

- Express independent branches with `parallel([...])`; preserve the input
  order when passing results to the synthesizer.
- Use separate workflow-local Agent instances for each branch and for the
  synthesizer. Do not ask the synthesizer to redo every branch from memory.
- Pass the original question, constraints, and branch outputs explicitly as
  inputs. A later stage must not depend on context that was only present in a
  previous Agent's prompt.
- `parallel` returns `None` for a failed independent branch. Handle that value
  explicitly, and let the workflow or its caller decide whether a single,
  bounded rerun is appropriate; do not rely on exception-catching syntax or
  unbounded retries.
- Keep the glue code small: create roles, pass JSON-compatible values, fan out,
  fan in, and return the result. Delegate substantive analysis to Agents.
- Use `tools=[]` for roles that only reason over supplied inputs. Select a
  declared tool only for a branch whose task genuinely needs it, and keep
  mutating tools out of parallel branches unless their independence is clear.
- If a structured synthesis is requested, read the Agent result's explicit
  `structured` object. Do not ask for JSON-looking text and parse it in the
  workflow.
