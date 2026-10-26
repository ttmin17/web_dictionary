---
slug: affaan-m-ecc-docs-ja-jp-skills-continuous-agent-loop
name: continuous-agent-loop
tagline: 品質ゲート、評価、リカバリーコントロールを備えた継続的な自律エージェントループのパターン。
summary: 推奨される本番スタック： 1. RFC分解（ralphinho-rfc-pipeline） 2.
  品質ゲート（plankton-code-quality + /quality-gate） 3. 評価ループ（eval-harness） 4.
  セッション永続化（nanoclaw-repl）
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
  subpath: docs/ja-JP/skills/continuous-agent-loop
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
  path: docs/ja-JP/skills/continuous-agent-loop/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.008Z
  truncated: false
type: agent_skill
skill:
  skill_name: continuous-agent-loop
  description: 品質ゲート、評価、リカバリーコントロールを備えた継続的な自律エージェントループのパターン。
  folder_path: docs/ja-JP/skills/continuous-agent-loop
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# 継続的エージェントループ
これはv1.8+の標準ループスキル名です。1リリースの間、`autonomous-loops`との互換性を保ちながら置き換えます。

## ループ選択フロー

```text
Start
  |
  +-- Need strict CI/PR control? -- yes --> continuous-pr
  |
  +-- Need RFC decomposition? -- yes --> rfc-dag
  |
  +-- Need exploratory parallel generation? -- yes --> infinite
  |
  +-- default --> sequential
```

## 組み合わせパターン

推奨される本番スタック：
1. RFC分解（`ralphinho-rfc-pipeline`）
2. 品質ゲート（`plankton-code-quality` + `/quality-gate`）
3. 評価ループ（`eval-harness`）
4. セッション永続化（`nanoclaw-repl`）

## 失敗モード

- 測定可能な進捗なしのループチャーン
- 同じ根本原因での繰り返しリトライ
- マージキューの停止
- 無制限のエスカレーションによるコストドリフト

## リカバリー

- ループを凍結する
- `/harness-audit`を実行する
- スコープを失敗ユニットに縮小する
- 明示的な受け入れ基準でリプレイする
