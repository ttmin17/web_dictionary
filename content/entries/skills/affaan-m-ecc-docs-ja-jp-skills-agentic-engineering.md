---
slug: affaan-m-ecc-docs-ja-jp-skills-agentic-engineering
name: agentic-engineering
tagline: 評価ファースト実行、分解、コスト対応モデルルーティングを使用してエージェニックエンジニアとして動作します。
summary: 1. 実行前に完了基準を定義する。 2. 作業をエージェントサイズの単位に分解する。 3.
  タスクの複雑さによってモデルティアをルーティングする。 4. 評価とリグレッションチェックで測定する。
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
  subpath: docs/ja-JP/skills/agentic-engineering
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
  path: docs/ja-JP/skills/agentic-engineering/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.005Z
  truncated: false
type: agent_skill
skill:
  skill_name: agentic-engineering
  description: 評価ファースト実行、分解、コスト対応モデルルーティングを使用してエージェニックエンジニアとして動作します。
  folder_path: docs/ja-JP/skills/agentic-engineering
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# エージェニックエンジニアリング
AI エージェントがほとんどの実装作業を行い、人間が品質とリスクのコントロールを強制するエンジニアリングワークフローにこのスキルを使用します。

## 動作原則

1. 実行前に完了基準を定義する。
2. 作業をエージェントサイズの単位に分解する。
3. タスクの複雑さによってモデルティアをルーティングする。
4. 評価とリグレッションチェックで測定する。

## 評価ファーストループ

1. 能力評価とリグレッション評価を定義する。
2. ベースラインを実行し、障害シグネチャをキャプチャする。
3. 実装を実行する。
4. 評価を再実行し、デルタを比較する。

## タスク分解

15 分単位ルールを適用する：
- 各単位は独立して検証可能であるべき
- 各単位は単一の主要なリスクを持つべき
- 各単位は明確な完了条件を持つべき

## モデルルーティング

- Haiku: 分類、ボイラープレート変換、狭い編集
- Sonnet: 実装とリファクタリング
- Opus: アーキテクチャ、根本原因分析、マルチファイル不変条件

## セッション戦略

- 密接に結合した単位にはセッションを継続する。
- 主要なフェーズ移行後は新しいセッションを開始する。
- アクティブなデバッグ中ではなく、マイルストーン完了後にコンパクト化する。

## AI 生成コードのレビューフォーカス

優先する：
- 不変条件とエッジケース
- エラー境界
- セキュリティと認証の前提
- 隠れた結合とロールアウトリスク

自動フォーマット/lint がスタイルを既に強制している場合、スタイルのみの不一致にレビューサイクルを無駄にしない。

## コスト規律

タスクごとに追跡する：
- モデル
- トークン推定値
- リトライ数
- ウォールクロック時間
- 成功/失敗

低いティアが明確な推論のギャップで失敗した場合のみ、モデルティアをエスカレーションする。
