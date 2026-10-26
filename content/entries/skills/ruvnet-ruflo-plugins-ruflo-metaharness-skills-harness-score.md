---
slug: ruvnet-ruflo-plugins-ruflo-metaharness-skills-harness-score
name: harness-score
tagline: 5-dimension harness readiness scorecard from `metaharness score
  {path}`. Returns harnessFit / compileConfidence / taskCoverage / toolSafety /
  memoryUs
summary: Surfaces the upstream metaharness score CLI as a ruflo skill. Use when
  Claude Code needs to assess whether a repo is ready for harness adoption
  before recommending the user run npx ruflo init or harness-mint.
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
  subpath: plugins/ruflo-metaharness/skills/harness-score
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
  path: plugins/ruflo-metaharness/skills/harness-score/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.546Z
  truncated: false
type: agent_skill
skill:
  skill_name: harness-score
  description: 5-dimension harness readiness scorecard from `metaharness score
    {path}`. Returns harnessFit / compileConfidence / taskCoverage / toolSafety
    / memoryUsefulness + estCostPerRunUsd + scaffoldReady. Pure-read; subprocess
    invocation; degrades gracefully when MetaHarness is absent (ADR-150
    architectural constraint).
  folder_path: plugins/ruflo-metaharness/skills/harness-score
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Surfaces the upstream `metaharness score` CLI as a ruflo skill. Use when
Claude Code needs to assess whether a repo is ready for harness adoption
before recommending the user run `npx ruflo init` or `harness-mint`.

## Algorithm

Implementation: [`scripts/score.mjs`](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-metaharness/skills/harness-score/../../scripts/score.mjs).

1. Shell out to `npx metaharness score <path> --json` (single subprocess,
   60s hard timeout).
2. Parse the JSON shape: `{ harnessFit, compileConfidence, taskCoverage,
   toolSafety, memoryUsefulness, estCostPerRunUsd, recommendedMode,
   archetype, template, scaffoldReady, hardConstraints }`.
3. If `--alert-on-fit-below N`: exit 1 when `harnessFit < N`.
4. Output JSON (default) or markdown table.

## Phase-0 baseline (ruflo's own scorecard, measured 2026-06-16)

| Dimension | Value |
|---|---:|
| harnessFit | 82/100 |
| compileConfidence | 100 |
| taskCoverage | 79 |
| toolSafety | 100 |
| memoryUsefulness | 40 |
| estCostPerRunUsd | $0.048 |
| recommendedMode | CLI + MCP |
| archetype | typescript-sdk-harness |
| template | vertical:coding |
| scaffoldReady | true |

Ruflo passes its own readiness check. `memoryUsefulness: 40` is the
weakest dimension — track this as a leading indicator for future memory
work in the AgentDB layer.

## CI integration

```bash
node plugins/ruflo-metaharness/scripts/score.mjs --alert-on-fit-below 70 --format json
```

Exit 1 fails the build. Pair with `harness-genome` for the full
7-section view.

## Graceful degradation (ADR-150 architectural constraint rule #3)

When `metaharness` is not installed and `npx` can't fetch it (offline,
no network, registry unreachable), the script emits:

```json
{
  "degraded": true,
  "reason": "metaharness-not-available",
  "hint": "Install with `npm i -D metaharness@~0.4.1` (pinned range — this plugin never fetches @latest) or verify network access for the one-time cache install."
}
```

and exits 0. Ruflo continues to function — this is the architectural
constraint in action.
