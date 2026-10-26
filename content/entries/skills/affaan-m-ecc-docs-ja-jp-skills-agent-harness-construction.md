---
slug: affaan-m-ecc-docs-ja-jp-skills-agent-harness-construction
name: agent-harness-construction
tagline: AI エージェントのアクション空間、ツール定義、観測フォーマットを設計・最適化して完了率を向上させます。
summary: エージェントの出力品質は以下によって制約されます： 1. アクション空間の品質 2. 観測の品質 3. 回復の品質 4. コンテキストバジェットの品質
categories:
  - agent-frameworks
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
  subpath: docs/ja-JP/skills/agent-harness-construction
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
  path: docs/ja-JP/skills/agent-harness-construction/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.004Z
  truncated: false
type: agent_skill
skill:
  skill_name: agent-harness-construction
  description: AI エージェントのアクション空間、ツール定義、観測フォーマットを設計・最適化して完了率を向上させます。
  folder_path: docs/ja-JP/skills/agent-harness-construction
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# エージェントハーネス構築
エージェントの計画、ツール呼び出し、エラーからの回復、完了への収束を改善する場合にこのスキルを使用します。

## コアモデル

エージェントの出力品質は以下によって制約されます：
1. アクション空間の品質
2. 観測の品質
3. 回復の品質
4. コンテキストバジェットの品質

## アクション空間の設計

1. 安定した明示的なツール名を使用する。
2. 入力スキーマファーストで絞り込んだものにする。
3. 決定論的な出力形状を返す。
4. 分離が不可能な場合を除き、キャッチオールツールは避ける。

## 粒度ルール

- 高リスク操作（デプロイ、マイグレーション、権限）にはマイクロツールを使用する。
- 一般的な編集・読み取り・検索ループには中規模ツールを使用する。
- ラウンドトリップのオーバーヘッドが支配的なコストである場合のみマクロツールを使用する。

## 観測の設計

すべてのツールレスポンスに含めるべき内容：
- `status`: success|warning|error
- `summary`: 一行の結果
- `next_actions`: 実行可能なフォローアップ
- `artifacts`: ファイルパス / ID

## エラー回復コントラクト

すべてのエラーパスに含めるべき内容：
- 根本原因のヒント
- 安全なリトライ指示
- 明示的な停止条件

## コンテキストバジェット管理

1. システムプロンプトを最小限かつ不変に保つ。
2. 大きなガイダンスはオンデマンドで読み込まれるスキルに移動する。
3. 長いドキュメントをインラインで挿入するより、ファイルへの参照を優先する。
4. 任意のトークン閾値ではなく、フェーズの境界でコンパクト化する。

## アーキテクチャパターンガイダンス

- ReAct: 不確実なパスを持つ探索的タスクに最適。
- 関数呼び出し: 構造化された決定論的フローに最適。
- ハイブリッド（推奨）: ReAct 計画 + 型付きツール実行。

## ベンチマーク

追跡すべき指標：
- 完了率
- タスクあたりのリトライ数
- pass@1 および pass@3
- 成功タスクあたりのコスト

## アンチパターン

- セマンティクスが重複するツールが多すぎる。
- 回復ヒントのない不透明なツール出力。
- 次のステップなしのエラーのみの出力。
- 無関係な参照でコンテキストを過負荷にする。
