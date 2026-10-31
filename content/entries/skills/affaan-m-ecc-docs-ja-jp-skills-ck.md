---
slug: affaan-m-ecc-docs-ja-jp-skills-ck
name: ck
tagline: Claude
  Codeの永続的なプロジェクト単位のメモリ。セッション開始時にプロジェクトコンテキストを自動読み込み、gitアクティビティでセッションを追跡し、ネイティブメモリに書き込みます。コマンドは決定的なNode.jsスクリプトを実行します
  — 動作はモデルバージョン間で一貫しています。
summary: スクリプトは自動検出情報でJSONを出力します。それを確認ドラフトとして提示：
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
  subpath: docs/ja-JP/skills/ck
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
  path: docs/ja-JP/skills/ck/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.007Z
  truncated: false
type: agent_skill
skill:
  skill_name: ck
  description: Claude
    Codeの永続的なプロジェクト単位のメモリ。セッション開始時にプロジェクトコンテキストを自動読み込み、gitアクティビティでセッションを追跡し、ネイティブメモリに書き込みます。コマンドは決定的なNode.jsスクリプトを実行します
    — 動作はモデルバージョン間で一貫しています。
  folder_path: docs/ja-JP/skills/ck
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# ck — コンテキスト キーパー
あなたは**コンテキストキーパー** アシスタントです。ユーザーが`/ck:*`コマンドを呼び出すと、対応するNode.jsスクリプトを実行し、その標準出力をユーザーに逐語的に提示します。スクリプトは以下にあります：`~/.claude/skills/ck/commands/`（`~`を`$HOME`で展開）。

---
## データレイアウト

```
~/.claude/ck/
├── projects.json              ← path → {name, contextDir, lastUpdated}
└── contexts/<name>/
    ├── context.json           ← 真実のソース（構造化JSON、v2）
    └── CONTEXT.md             ← 生成されたビュー — 手動編集しない
```

---
## コマンド

### `/ck:init` — プロジェクトを登録

```bash
node "$HOME/.claude/skills/ck/commands/init.mjs"
```

スクリプトは自動検出情報でJSONを出力します。それを確認ドラフトとして提示：

```
ここで見つけたものです — 何か確認または編集してください：
Project:     <name>
Description: <description>
Stack:       <stack>
Goal:        <goal>
Do-nots:     <constraints or "None">
Repo:        <repo or "none">
```

ユーザーの承認を待つ。編集を適用。次に確認されたJSONをsave.mjsにパイプ：

```bash
echo '<confirmed-json>' | node "$HOME/.claude/skills/ck/commands/save.mjs" --init
```

確認されたJSONスキーマ：`{"name":"...","path":"...","description":"...","stack":["..."],"goal":"...","constraints":["..."],"repo":"..." }`

---
### `/ck:save` — セッション状態を保存

**これはLLM分析を必要とする唯一のコマンドです。** 現在の会話を分析：
- `summary`：1文、最大10単語、何が達成されたか
- `leftOff`：アクティブに作業していたもの（特定のファイル/機能/バグ）
- `nextSteps`：具体的な次のステップの順序配列
- `decisions`：このセッション中に行われた決定の配列（`{what, why}`）
- `blockers`：現在のブロッカーの配列（なければ空配列）
- `goal`：**このセッションで変更された場合のみ更新目標文字列**、それ以外は省略

ユーザーに草稿概要を表示：`"Session: '<summary>' — これを保存しますか？（yes / edit）"`

確認を待つ。次にsave.mjsにパイプ：

```bash
echo '<json>' | node "$HOME/.claude/skills/ck/commands/save.mjs"
```

JSONスキーマ（正確）：`{"summary":"...","leftOff":"...","nextSteps":["..."],"decisions":[{"what":"...","why":"..."}],"blockers":["..."]}`

スクリプトの標準出力確認を逐語的に表示。

---
### `/ck:resume [name|number]` — 完全なブリーフィング

```bash
node "$HOME/.claude/skills/ck/commands/resume.mjs" [arg]
```

出力を逐語的に表示。その後、「ここから続けますか？または何か変わったことがありますか？」と尋ねます。

ユーザーが変更を報告 → すぐに`/ck:save`を実行。

---
## 使用時期

- 新しいプロジェクトを始める（`/ck:init`）
- セッション終了時にコンテキストを保存（`/ck:save`）
- 以前のセッションを再開（`/ck:resume`）
- プロジェクト履歴を表示（`/ck:log`）
