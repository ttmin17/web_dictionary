---
slug: affaan-m-ecc-docs-ja-jp-skills-blueprint
name: blueprint
tagline: 1行の目的を複数セッション、複数エージェントエンジニアリングプロジェクト向けのステップバイステップ構築計画に変換します。各ステップには自己完結型コンテキストブリーフがあり、新しいエージェントがそれをコールドで実行できます。
  敵対的なレビューゲート、依存グラフ、平行ステップ検出、アンチパターンカタログ
summary: "- 大きな機能をクリアな依存関係の順序で複数のPRに分割 - 複数のセッションにまたがるリファクタリングまたは移行を計画 -
  サブエージェント間の平行作業流を調整 - セッション間のコンテキスト損失がやり直しを引き起こす可能性のあるタスク"
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
  subpath: docs/ja-JP/skills/blueprint
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
  path: docs/ja-JP/skills/blueprint/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.006Z
  truncated: false
type: agent_skill
skill:
  skill_name: blueprint
  description: 1行の目的を複数セッション、複数エージェントエンジニアリングプロジェクト向けのステップバイステップ構築計画に変換します。各ステップには自己完結型コンテキストブリーフがあり、新しいエージェントがそれをコールドで実行できます。
    敵対的なレビューゲート、依存グラフ、平行ステップ検出、アンチパターンカタログ、計画変更プロトコルを含みます。
    トリガー：ユーザーが複雑なマルチPRタスク用の計画、ブループリント、またはロードマップをリクエストするか、複数のセッションが必要な作業を説明する場合。
    トリガーしない場合：タスクが単一のPRまたは3未満のツール呼び出しで完成可能な場合、またはユーザーが「単にやってくれ」と言う場合。
  folder_path: docs/ja-JP/skills/blueprint
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# ブループリント — 構築計画ジェネレータ
1行の目的を、任意のコーディングエージェントがコールドで実行できるステップバイステップ構築計画に変換します。

## 使用時期

- 大きな機能をクリアな依存関係の順序で複数のPRに分割
- 複数のセッションにまたがるリファクタリングまたは移行を計画
- サブエージェント間の平行作業流を調整
- セッション間のコンテキスト損失がやり直しを引き起こす可能性のあるタスク

**しないでください**単一のPR、3未満のツール呼び出しで完成可能なタスク、またはユーザーが「単にやってくれ」と言う場合。

## 動作方法

ブループリントは5段階パイプラインを実行します：

1. **研究** — 飛行前チェック（git、gh認証、リモート、デフォルトブランチ）、次にプロジェクト構造、既存計画、メモリファイルを読んでコンテキストを収集。
2. **設計** — 目的を1 PRサイズのステップに分割（典型的には3～12）。依存関係エッジ、平行/順序付け、モデル層、ロールバック戦略を割り当て。
3. **ドラフト** — 自己完結型マークダウン計画ファイルを`plans/`に書く。すべてのステップにはコンテキストブリーフ、タスクリスト、検証コマンド、出口基準を含む — 新しいエージェントが前のステップを読まずに任意のステップを実行できます。
4. **レビュー** — 敵対的なレビューを最強モデルサブエージェント（例：Opus）にチェックリストとアンチパターンカタログに対して委任。最終化する前にすべての重大な知見を修正。
5. **登録** — 計画を保存、メモリインデックスを更新、ステップ数と並列性概要をユーザーに提示。

ブループリントはgit/gh可用性を自動的に検出します。git + GitHub CLIを使用すると、完全なブランチ/PR/CIワークフロー計画を生成します。それらなしでは、ダイレクトモードに切り替わります。

## 例

### 基本的な使用方法

```
/blueprint myapp "PostgreSQLにデータベースを移行"
```

次のようなステップを含む`plans/myapp-migrate-database-to-postgresql.md`を生成します：
- ステップ1：PostgreSQLドライバーと接続構成を追加
- ステップ2：各テーブルの移行スクリプトを作成
- ステップ3：新しいドライバーを使用するようにリポジトリレイヤーを更新
- ステップ4：PostgreSQLに対する統合テストを追加
- ステップ5：古いデータベースコードと構成を削除

## インストール

このスキルはECCに付属します。ECCがインストールされている場合、別のインストールは必要ありません。

### 完全なECCインストール

ECC リポジトリチェックアウトから作業する場合、スキルが存在することを確認します：

```bash
test -f skills/blueprint/SKILL.md
```
