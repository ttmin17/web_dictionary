---
slug: affaan-m-ecc-docs-ja-jp-skills-ralphinho-rfc-pipeline
name: ralphinho-rfc-pipeline
tagline: RFC駆動の複数エージェントDAG実行パターン、品質ゲート、マージキュー、ワークユニットオーケストレーション。
summary: 単一エージェントパスでは大きすぎる機能を独立して検証可能なワークユニットに分割する必要がある場合、このスキルを使用します。
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
  subpath: docs/ja-JP/skills/ralphinho-rfc-pipeline
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
language: zh
needs_keys: false
prerequisites: []
readme_source:
  repo: affaan-m/ECC
  path: docs/ja-JP/skills/ralphinho-rfc-pipeline/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.019Z
  truncated: false
type: agent_skill
skill:
  skill_name: ralphinho-rfc-pipeline
  description: RFC駆動の複数エージェントDAG実行パターン、品質ゲート、マージキュー、ワークユニットオーケストレーション。
  folder_path: docs/ja-JP/skills/ralphinho-rfc-pipeline
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Ralphinho RFC Pipeline
[humanplane](https://github.com/humanplane) スタイルのRFC分解パターンと複数ユニットオーケストレーションワークフローにインスパイア。

単一エージェントパスでは大きすぎる機能を独立して検証可能なワークユニットに分割する必要がある場合、このスキルを使用します。

## Pipeline Stages

1. RFC intake
2. DAG decomposition
3. Unit assignment
4. Unit implementation
5. Unit validation
6. Merge queue and integration
7. Final system verification

## Unit Spec Template

各ワークユニットに含める：
- `id`
- `depends_on`
- `scope`
- `acceptance_tests`
- `risk_level`
- `rollback_plan`

## Complexity Tiers

- Tier 1: isolated file edits, deterministic tests
- Tier 2: multi-file behavior changes, moderate integration risk
- Tier 3: schema/auth/perf/security changes

## Quality Pipeline per Unit

1. research
2. implementation plan
3. implementation
4. tests
5. review
6. merge-ready report

## Merge Queue Rules

- Never merge a unit with unresolved dependency failures.
- Always rebase unit branches on latest integration branch.
- Re-run integration tests after each queued merge.

## Recovery

ユニットが stall した場合：
- evict from active queue
- snapshot findings
- regenerate narrowed unit scope
- retry with updated constraints

## Outputs

- RFC execution log
- unit scorecards
- dependency graph snapshot
- integration risk summary
