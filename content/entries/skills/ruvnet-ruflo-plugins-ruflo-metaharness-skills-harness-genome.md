---
slug: ruvnet-ruflo-plugins-ruflo-metaharness-skills-harness-genome
name: harness-genome
tagline: 7-section repo readiness report from `metaharness genome {path}`.
  Returns repo_type / agent_topology / risk_score / mcp_surface /
  test_confidence / pu
summary: Companion to harness-score. Where score is a 5-dimension numeric
  scorecard, genome is a 7-section categorical/numeric report covering repo
  type, agent topology recommendations, risk score (0-1), MCP surface area,
  test...
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
  subpath: plugins/ruflo-metaharness/skills/harness-genome
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
  path: plugins/ruflo-metaharness/skills/harness-genome/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.546Z
  truncated: false
type: agent_skill
skill:
  skill_name: harness-genome
  description: 7-section repo readiness report from `metaharness genome {path}`.
    Returns repo_type / agent_topology / risk_score / mcp_surface /
    test_confidence / publish_readiness. Pure-read; degrades gracefully
    (ADR-150).
  folder_path: plugins/ruflo-metaharness/skills/harness-genome
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

Companion to `harness-score`. Where score is a 5-dimension numeric
scorecard, genome is a 7-section categorical/numeric report covering
repo type, agent topology recommendations, risk score (0-1), MCP
surface area, test confidence (0-1), and publish readiness (0-1).

## Algorithm

Implementation: [`scripts/genome.mjs`](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-metaharness/skills/harness-genome/../../scripts/genome.mjs).

1. Shell out to `npx metaharness genome <path> --json` (60s hard timeout).
2. Parse the shape: `{ repo_type, agent_topology[], risk_score,
   mcp_surface, test_confidence, publish_readiness }`.
3. Preserve upstream's readiness verdict as `verdict` and
   `verdictExitCode`. Upstream exits 1 for `needs-work` and 2 for `blocked`;
   these are valid reports, so the wrapper returns them successfully.
4. If `--alert-on-risk-above N`: exit 1 when `risk_score > N`.
5. Output JSON (default) or markdown.

## Phase-0 baseline (ruflo, measured 2026-06-16)

```
{
  "repo_type": "node_mcp_ci",
  "agent_topology": ["maintainer", "tester", "security", "release"],
  "risk_score": 0.27,
  "mcp_surface": "remote",
  "test_confidence": 0.8,
  "publish_readiness": 0.9
}
```

Ruflo's `risk_score: 0.27` is low (good). `publish_readiness: 0.9` is
high. The `mcp_surface: "remote"` reflects that ruflo's MCP servers are
hosted, not bundled.

## When to use

- Pre-mint review: "before scaffolding a custom harness from this repo,
  should we?" — genome answers it categorically.
- Drift detection: capture genome snapshots over time, diff via
  cost-diff-style tooling to spot when `agent_topology` recommendations
  drift away from a deliberate architecture choice.
- CI gate: `--alert-on-risk-above 0.5` fails the build when the repo's
  risk profile crosses a threshold.

## Pairs with

- `harness-score` — numeric readiness
- `harness-mcp-scan` — static MCP security findings
- `harness-threat-model` — enterprise-review-grade threat model
