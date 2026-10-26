---
slug: affaan-m-ecc-docs-ja-jp-skills-autonomous-agent-harness
name: autonomous-agent-harness
tagline: Claude
  Codeを永続的なメモリ、スケジュール済み操作、コンピュータ使用、タスクキューイングを備えた完全自動エージェントシステムに変換します。スタンドアロンエージェントフレームワーク（Hermes、AutoGPT）を、Claude
  Codeのネイティブcrons、dispatch、MCPツール
summary: 自動操作は、ユーザーによって明示的に要求され、スコープが設定される必要があります。スケジュール、リモートエージェントの派遣、永続的なメモリの書き込み、コンピュータ制御の使用、外部への投稿、サードパーティリソースの変更、または現在のセットアップのプライベート通信に対する行動を行わないでください。ユーザーがその機能と対象ワークスペースを承認していない限り。
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
  subpath: docs/ja-JP/skills/autonomous-agent-harness
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
  path: docs/ja-JP/skills/autonomous-agent-harness/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.006Z
  truncated: false
type: agent_skill
skill:
  skill_name: autonomous-agent-harness
  description: Claude
    Codeを永続的なメモリ、スケジュール済み操作、コンピュータ使用、タスクキューイングを備えた完全自動エージェントシステムに変換します。スタンドアロンエージェントフレームワーク（Hermes、AutoGPT）を、Claude
    Codeのネイティブcrons、dispatch、MCPツール、メモリを活用して置き換えます。ユーザーが継続的な自動操作、スケジュール済みタスク、または自己指令エージェントループを望む場合に使用します。
  folder_path: docs/ja-JP/skills/autonomous-agent-harness
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# 自動エージェントハーネス
ネイティブ機能とMCPサーバーのみを使用して、Claude Codeを永続的な自己指令エージェントシステムに変換します。

## 同意とセーフティバウンダリ

自動操作は、ユーザーによって明示的に要求され、スコープが設定される必要があります。スケジュール、リモートエージェントの派遣、永続的なメモリの書き込み、コンピュータ制御の使用、外部への投稿、サードパーティリソースの変更、または現在のセットアップのプライベート通信に対する行動を行わないでください。ユーザーがその機能と対象ワークスペースを承認していない限り。

クレデンシャル、プライベートワークスペースのエクスポート、個人データセット、およびアカウント固有の自動化を再利用可能なECCアーティファクトから除外する前に、ドライラン計画とローカルキューファイルを好みます。

## アクティベーション時期

- ユーザーが継続的に実行されるか、スケジュール上で実行されるエージェントを望む
- 定期的にトリガーされる自動化ワークフローを設定
- セッション全体でコンテキストを記憶する個人的なAIアシスタントを構築
- ユーザーが「これを毎日実行」、「これを定期的にチェック」、「監視を続ける」と言う
- Hermes、AutoGPT、または同様の自動エージェントフレームワークから機能を複製したい
- スケジュール済み実行と組み合わせたコンピュータ使用が必要

## アーキテクチャ

```
┌──────────────────────────────────────────────────────────────┐
│                    Claude Code Runtime                        │
│                                                              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌─────────────┐ │
│  │  Crons   │  │ Dispatch │  │ Memory   │  │ Computer    │ │
│  │ Schedule │  │ Remote   │  │ Store    │  │ Use         │ │
│  │ Tasks    │  │ Agents   │  │          │  │             │ │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └──────┬──────┘ │
│       │              │             │                │        │
│       ▼              ▼             ▼                ▼        │
│  ┌──────────────────────────────────────────────────────┐    │
│  │              ECC Skill + Agent Layer                  │    │
│  │                                                      │    │
│  │  skills/     agents/     commands/     hooks/        │    │
│  └──────────────────────────────────────────────────────┘    │
│       │              │             │                │        │
│       ▼              ▼             ▼                ▼        │
│  ┌──────────────────────────────────────────────────────┐    │
│  │              MCP Server Layer                        │    │
│  │                                                      │    │
│  │  memory    github    exa    supabase    browser-use  │    │
│  └──────────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────────┘
```

## コアコンポーネント

### 1. 永続的なメモリ

構造化データ用のMCPメモリサーバーで拡張されたClaude Codeの組み込みメモリシステムを使用します。

**組み込みメモリ** (`~/.claude/projects/*/memory/`):
- ユーザーの設定、フィードバック、プロジェクトコンテキスト
- フロントマター付きのマークダウンファイルとして保存
- セッション開始時に自動的に読み込まれる

**MCPメモリサーバー** (構造化知識グラフ):
- エンティティ、関係、観察
- クエリ可能なグラフ構造
- クロスセッション永続性

**メモリパターン：**

```
# 短期：現在のセッションコンテキスト
TodoWriteをセッション内タスク追跡に使用

# 中期：プロジェクトメモリファイル
クロスセッションリコールの場合は～/.claude/projects/*/memory/に書き込む

# 長期：MCPナレッジグラフ
mcp__memory__create_entitiesを永続的な構造化データに使用
mcp__memory__create_relationsを関係マッピングに使用
mcp__memory__add_observationsを既知のエンティティについての新しい事実に使用
```

### 2. スケジュール済み操作（Crons）

Claude Codeのスケジュール済みタスクを使用して、定期的なエージェント操作を作成します。

**cronを設定する：**

```
# MCPツール経由
mcp__scheduled-tasks__create_scheduled_task({
  name: "daily-pr-review",
  schedule: "0 9 * * 1-5",  # 平日午前9時
  prompt: "affaan-m/ECCのすべてのオープンPRを確認します。各について：CIステータスをチェック、変更を確認、問題にフラグを立てます。メモリに概要を投稿します。",
  project_dir: "/path/to/repo"
})
```

## 完全な設定例

セッション全体でコンテキストを記憶し、複数の定期的なタスクを実行する完全に自動化されたエージェントの設定については、高度な設定セクションを参照してください。
