---
slug: affaan-m-ecc-docs-ja-jp-skills-ai-first-engineering
name: ai-first-engineering
tagline: AI エージェントが大量の実装出力を生成するチームのためのエンジニアリング運用モデル。
summary: 1. 計画の品質はタイピングスピードより重要。 2. 評価のカバレッジは個人的な自信より重要。 3. レビューの焦点は構文からシステムの動作へ。
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
  subpath: docs/ja-JP/skills/ai-first-engineering
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
  path: docs/ja-JP/skills/ai-first-engineering/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.005Z
  truncated: false
type: agent_skill
skill:
  skill_name: ai-first-engineering
  description: AI エージェントが大量の実装出力を生成するチームのためのエンジニアリング運用モデル。
  folder_path: docs/ja-JP/skills/ai-first-engineering
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# AI ファーストエンジニアリング
AI 支援コード生成でリリースするチームのプロセス、レビュー、アーキテクチャを設計する際にこのスキルを使用します。

## プロセスの変化

1. 計画の品質はタイピングスピードより重要。
2. 評価のカバレッジは個人的な自信より重要。
3. レビューの焦点は構文からシステムの動作へ。

## アーキテクチャ要件

エージェントフレンドリーなアーキテクチャを優先する：
- 明示的な境界
- 安定したコントラクト
- 型付きインターフェース
- 決定論的なテスト

隠れた慣習に広がる暗黙の動作を避ける。

## AI ファーストチームでのコードレビュー

レビュー対象：
- 動作のリグレッション
- セキュリティの前提
- データの整合性
- 障害処理
- ロールアウトの安全性

自動化によって既にカバーされているスタイルの問題に費やす時間を最小化する。

## 採用と評価シグナル

AI ファーストの強いエンジニア：
- 曖昧な作業を明確に分解する
- 測定可能な受け入れ基準を定義する
- 高シグナルのプロンプトと評価を生成する
- 納期プレッシャー下でリスクコントロールを強制する

## テスト標準

生成されたコードのテストバーを引き上げる：
- 操作されたドメインに対する必須のリグレッションカバレッジ
- 明示的なエッジケースのアサーション
- インターフェース境界の統合チェック
