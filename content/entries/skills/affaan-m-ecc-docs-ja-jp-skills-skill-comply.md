---
slug: affaan-m-ecc-docs-ja-jp-skills-skill-comply
name: comply
tagline: スキル、ルール、エージェント定義が実際に遵守されているかを可視化する——3種類のプロンプト厳格度レベルのシナリオを自動生成し、エージェントを実行し、動作シーケンスを分類し、完全なツール呼び出しタイムラインの遵守率をレポートする
summary: 1. 任意の .md ファイルから期待される動作シーケンス（仕様）を自動生成する 2.
  プロンプトの厳格度が段階的に低下するシナリオを自動生成する（支持的 → 中立的 → 競合的） 3. claude -p を実行し、stream-json
  経由でツール呼び出しトレースを取得する 4. 正規表現ではなくLLMを使用してツール呼び出しを仕様ステップに分類する 5. 決定論的に時系列順を確認する
  6. 仕様、プロンプト、タイムラインを...
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
  subpath: docs/ja-JP/skills/skill-comply
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
  path: docs/ja-JP/skills/skill-comply/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.021Z
  truncated: false
type: agent_skill
skill:
  skill_name: comply
  description: スキル、ルール、エージェント定義が実際に遵守されているかを可視化する——3種類のプロンプト厳格度レベルのシナリオを自動生成し、エージェントを実行し、動作シーケンスを分類し、完全なツール呼び出しタイムラインの遵守率をレポートする
  folder_path: docs/ja-JP/skills/skill-comply
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# skill-comply：自動化された遵守測定
コーディングエージェントがスキル、ルール、またはエージェント定義を実際に遵守しているかを以下の方法で測定する：

1. 任意の .md ファイルから期待される動作シーケンス（仕様）を自動生成する
2. プロンプトの厳格度が段階的に低下するシナリオを自動生成する（支持的 → 中立的 → 競合的）
3. `claude -p` を実行し、stream-json 経由でツール呼び出しトレースを取得する
4. 正規表現ではなくLLMを使用してツール呼び出しを仕様ステップに分類する
5. 決定論的に時系列順を確認する
6. 仕様、プロンプト、タイムラインを含む自己完結型レポートを生成する

## サポートされるターゲット

* **スキル**（`skills/*/SKILL.md`）：検索優先、TDDガイドなどのワークフロースキル
* **ルール**（`rules/common/*.md`）：testing.md、security.md、git-workflow.md などの強制的なルール
* **エージェント定義**（`agents/*.md`）：エージェントが期待される場面で呼び出されるか（内部ワークフロー検証は未サポート）

## 起動条件

* ユーザーが `/skill-comply <path>` を実行する
* ユーザーが「このルールは本当に遵守されているか？」と尋ねる
* 新しいルール/スキルを追加した後、エージェントの遵守を確認する
* 品質メンテナンスの一環として定期的に実行する

## 使い方

```bash
# Full run
uv run python -m scripts.run ~/.claude/rules/common/testing.md

# Dry run (no cost, spec + scenarios only)
uv run python -m scripts.run --dry-run ~/.claude/skills/search-first/SKILL.md

# Custom models
uv run python -m scripts.run --gen-model haiku --model sonnet <path>
```

## 重要なコンセプト：プロンプト独立性

プロンプトが明示的にサポートしていない場合でも、スキル/ルールが遵守されるかどうかを測定する。

## レポートの内容

レポートは自己完結型で、以下を含む：

1. 期待される動作シーケンス（自動生成された仕様）
2. シナリオプロンプト（各厳格度レベルで尋ねる内容）
3. 各シナリオの遵守スコア
4. LLM分類ラベル付きのツール呼び出しタイムライン

### 高度な内容（オプション）

フックに精通したユーザー向けに、レポートには遵守率が低いステップに対するフック強化の推奨事項も含まれる。これは参考情報——主要な価値は遵守性自体の可視化にある。
