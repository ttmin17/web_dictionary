---
slug: affaan-m-ecc-docs-ja-jp-skills-strategic-compact
name: strategic-compact
tagline: 任意の自動コンパクションではなく、タスクフェーズを通じてコンテキストを保持するための論理的な間隔での手動コンパクションを提案します。
summary: 自動コンパクションは任意のポイントでトリガーされます： - 多くの場合タスクの途中で、重要なコンテキストを失う -
  タスクの論理的な境界を認識しない - 複雑な複数ステップの操作を中断する可能性がある
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
  subpath: docs/ja-JP/skills/strategic-compact
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
  path: docs/ja-JP/skills/strategic-compact/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.022Z
  truncated: false
type: agent_skill
skill:
  skill_name: strategic-compact
  description: 任意の自動コンパクションではなく、タスクフェーズを通じてコンテキストを保持するための論理的な間隔での手動コンパクションを提案します。
  folder_path: docs/ja-JP/skills/strategic-compact
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Strategic Compactスキル
任意の自動コンパクションに依存するのではなく、ワークフローの戦略的なポイントで手動の`/compact`を提案します。

## なぜ戦略的コンパクションか？

自動コンパクションは任意のポイントでトリガーされます：
- 多くの場合タスクの途中で、重要なコンテキストを失う
- タスクの論理的な境界を認識しない
- 複雑な複数ステップの操作を中断する可能性がある

論理的な境界での戦略的コンパクション：
- **探索後、実行前** - 研究コンテキストをコンパクト、実装計画を保持
- **マイルストーン完了後** - 次のフェーズのために新しいスタート
- **主要なコンテキストシフト前** - 異なるタスクの前に探索コンテキストをクリア

## 仕組み

`suggest-compact.js`スクリプトはPreToolUse（Edit/Write）で実行され：

1. **ツール呼び出しを追跡** - セッション内のツール呼び出しをカウント
2. **閾値検出** - 設定可能な閾値で提案（デフォルト：50回）
3. **定期的なリマインダー** - 閾値後25回ごとにリマインド

## フック設定

**プラグインとしてインストール済みの場合**：設定は不要です。プラグインの `hooks/hooks.json` が既に `suggest-compact.js` を登録しています（フック ID `pre:edit-write:suggest-compact`、`standard` と `strict` フックプロファイルで有効）。下のブロックを `~/.claude/settings.json` にコピーしないでください — プラグインインストールでは `~/.claude/scripts/` は存在せず、プラグインフックを重複させると二重実行になります。

**手動インストール**（`./install.sh`）の場合、`~/.claude/settings.json` に追加：

```json
{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "Edit",
        "hooks": [{ "type": "command", "command": "node ~/.claude/scripts/hooks/suggest-compact.js" }]
      },
      {
        "matcher": "Write",
        "hooks": [{ "type": "command", "command": "node ~/.claude/scripts/hooks/suggest-compact.js" }]
      }
    ]
  }
}
```

## 設定

環境変数：
- `COMPACT_THRESHOLD` - 最初の提案前のツール呼び出し（デフォルト：50）

## ベストプラクティス

1. **計画後にコンパクト** - 計画が確定したら、コンパクトして新しくスタート
2. **デバッグ後にコンパクト** - 続行前にエラー解決コンテキストをクリア
3. **実装中はコンパクトしない** - 関連する変更のためにコンテキストを保持
4. **提案を読む** - フックは*いつ*を教えてくれますが、*するかどうか*は自分で決める

## 関連

- [The Longform Guide](https://x.com/affaanmustafa/status/2014040193557471352) - トークン最適化セクション
- メモリ永続化フック - コンパクションを超えて存続する状態用
