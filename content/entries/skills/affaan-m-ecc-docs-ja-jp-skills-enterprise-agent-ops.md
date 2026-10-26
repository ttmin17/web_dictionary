---
slug: affaan-m-ecc-docs-ja-jp-skills-enterprise-agent-ops
name: enterprise-agent-ops
tagline: オブザーバビリティ、セキュリティ境界、およびライフサイクル管理を備えた長寿命エージェントワークロードを運用します。
summary: 1. runtime lifecycle (start, pause, stop, restart) 2. observability
  (logs, metrics, traces) 3. safety controls (scopes, permissions, kill
  switches) 4. change management (rollout, rollback, audit)
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
  subpath: docs/ja-JP/skills/enterprise-agent-ops
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
  path: docs/ja-JP/skills/enterprise-agent-ops/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.011Z
  truncated: false
type: agent_skill
skill:
  skill_name: enterprise-agent-ops
  description: オブザーバビリティ、セキュリティ境界、およびライフサイクル管理を備えた長寿命エージェントワークロードを運用します。
  folder_path: docs/ja-JP/skills/enterprise-agent-ops
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Enterprise Agent Ops
Use this skill for cloud-hosted or continuously running agent systems that need operational controls beyond single CLI sessions.

## Operational Domains

1. runtime lifecycle (start, pause, stop, restart)
2. observability (logs, metrics, traces)
3. safety controls (scopes, permissions, kill switches)
4. change management (rollout, rollback, audit)

## Baseline Controls

- immutable deployment artifacts
- least-privilege credentials
- environment-level secret injection
- hard timeout and retry budgets
- audit log for high-risk actions

## Metrics to Track

- success rate
- mean retries per task
- time to recovery
- cost per successful task
- failure class distribution

## Incident Pattern

When failure spikes:
1. freeze new rollout
2. capture representative traces
3. isolate failing route
4. patch with smallest safe change
5. run regression + security checks
6. resume gradually

## Deployment Integrations

This skill pairs with:
- PM2 workflows
- systemd services
- container orchestrators
- CI/CD gates
