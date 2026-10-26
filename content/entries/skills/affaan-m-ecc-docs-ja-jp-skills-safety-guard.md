---
slug: affaan-m-ecc-docs-ja-jp-skills-safety-guard
name: safety-guard
tagline: 本番システムでの作業時や、エージェントを自律的に実行する際に破壊的な操作を防ぐためにこのスキルを使用してください。
summary: "- 本番システムでの作業時 - エージェントが自律的に動作している場合（フルオートモード） - 特定のディレクトリへの編集を制限したい場合
  - センシティブな操作時（マイグレーション、デプロイ、データ変更）"
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
  subpath: docs/ja-JP/skills/safety-guard
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
  path: docs/ja-JP/skills/safety-guard/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.020Z
  truncated: false
type: agent_skill
skill:
  skill_name: safety-guard
  description: 本番システムでの作業時や、エージェントを自律的に実行する際に破壊的な操作を防ぐためにこのスキルを使用してください。
  folder_path: docs/ja-JP/skills/safety-guard
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Safety Guard — 破壊的な操作の防止
## 使用するタイミング

- 本番システムでの作業時
- エージェントが自律的に動作している場合（フルオートモード）
- 特定のディレクトリへの編集を制限したい場合
- センシティブな操作時（マイグレーション、デプロイ、データ変更）

## 動作の仕組み

3つの保護モードがあります:

### モード1: Careful モード

実行前に破壊的なコマンドを検知して警告します:

```
監視するパターン:
- rm -rf（特に /、~、またはプロジェクトルート）
- git push --force
- git reset --hard
- git checkout .（全変更を破棄）
- DROP TABLE / DROP DATABASE
- docker system prune
- kubectl delete
- chmod 777
- sudo rm
- npm publish（誤公開）
- --no-verify を含む全コマンド
```

検知した場合: コマンドの内容を示し、確認を求め、より安全な代替手段を提示します。

### モード2: Freeze モード

特定のディレクトリツリーへのファイル編集をロックします:

```
/safety-guard freeze src/components/
```

`src/components/` 外への Write/Edit は説明付きでブロックされます。エージェントを特定の領域に集中させ、無関係なコードに触れないようにしたい場合に便利です。

### モード3: Guard モード（Careful + Freeze の組み合わせ）

両方の保護が有効になります。自律エージェントのための最大安全モードです。

```
/safety-guard guard --dir src/api/ --allow-read-all
```

エージェントはすべてを読み取れますが、`src/api/` にのみ書き込めます。破壊的なコマンドはどこでもブロックされます。

### ロック解除

```
/safety-guard off
```

## 実装

PreToolUse フックを使用して Bash、Write、Edit、MultiEdit ツールの呼び出しを検知します。実行前に、アクティブなルールに対してコマンド/パスを確認します。

## 統合

- `codex -a never` セッションでデフォルトで有効化する
- ECC 2.0 の可観測性リスクスコアリングと組み合わせる
- ブロックされた全アクションを `~/.claude/safety-guard.log` に記録する
