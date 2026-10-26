---
slug: ruvnet-ruflo-plugins-ruflo-metaharness-skills-harness-threat-model
name: harness-threat-model
tagline: Agent skill from ruvnet/ruflo
summary: "--- name: harness-threat-model description: Enterprise-review-grade
  threat model from harness threat-model {path}. Categorizes MCP-surface
  threats; emits worst: 'clean'|'low'|'medium'|'high' + per-threat findings.
  Pur..."
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
  subpath: plugins/ruflo-metaharness/skills/harness-threat-model
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
  path: plugins/ruflo-metaharness/skills/harness-threat-model/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:36:25.547Z
  truncated: false
type: agent_skill
skill:
  skill_name: harness-threat-model
  description: Agent skill from ruvnet/ruflo
  folder_path: plugins/ruflo-metaharness/skills/harness-threat-model
  extra_files: []
  pack_total_skills: 167
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: ruvnet-ruflo
---

---
name: harness-threat-model
description: Enterprise-review-grade threat model from `harness threat-model {path}`. Categorizes MCP-surface threats; emits `worst: 'clean'|'low'|'medium'|'high'` + per-threat findings. Pure-read.
argument-hint: "[--path .] [--fail-on clean|low|medium|high] [--format table|json]"
allowed-tools: Bash
---

The companion to `harness-mcp-scan` for enterprise security reviews.
Where mcp-scan is a per-server static lint, threat-model produces a
categorized report suitable for sharing with an InfoSec team.

## Algorithm

Implementation: [`scripts/threat-model.mjs`](https://github.com/ruvnet/ruflo/blob/main/plugins/ruflo-metaharness/skills/harness-threat-model/../../scripts/threat-model.mjs).

1. Invoke the pinned `harness` binary (`metaharness@~0.4.1`, resolved from a
   local install or the one-time `~/.ruflo/metaharness-cache-<pin>` cache —
   never `@latest`): `harness threat-model <path> --json`.
2. Parse `{ worst, findings[] }`.
3. `--fail-on <severity>`: exit 1 when `worst >= fail-on`. Default `high`.

## Severity rank

| Severity | Rank |
|---|---:|
| clean | 0 |
| low | 1 |
| medium | 2 |
| high | 3 |

## When to use

- Pre-launch review: include the JSON output in the release-readiness
  packet sent to security.
- Periodic audit: schedule via the planned `oia-audit` background
  worker (ADR-150 Phase 2) to detect MCP-surface drift.

## Graceful degradation

Same pattern as the other skills: when `harness` is absent, emit
`{ degraded: true }` and exit 0. ADR-150 architectural constraint.
