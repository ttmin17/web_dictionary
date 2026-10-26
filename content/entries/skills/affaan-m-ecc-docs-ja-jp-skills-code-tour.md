---
slug: affaan-m-ecc-docs-ja-jp-skills-code-tour
name: code-tour
tagline: CodeTour `.tour`ファイルを作成 —
  ペルソナターゲット、ステップバイステップウォークスルー（実際のファイルとラインアンカー付き）。オンボーディングツアー、アーキテクチャウォークスルー、PRツアー、RCAツアー、構造化「これがどのように機能するかを説明」リクエストに使用。
summary: 良いツアーは特定の読者への物語： - 彼らが何を見ているか - なぜそれが重要か - 次にどのパスを従うべきか
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
  subpath: docs/ja-JP/skills/code-tour
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
  path: docs/ja-JP/skills/code-tour/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.007Z
  truncated: false
type: agent_skill
skill:
  skill_name: code-tour
  description: CodeTour `.tour`ファイルを作成 —
    ペルソナターゲット、ステップバイステップウォークスルー（実際のファイルとラインアンカー付き）。オンボーディングツアー、アーキテクチャウォークスルー、PRツアー、RCAツアー、構造化「これがどのように機能するかを説明」リクエストに使用。
  folder_path: docs/ja-JP/skills/code-tour
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# コードツアー
コードベースウォークスルー用のCodeTour `.tour`ファイルを作成し、実際のファイルとラインの範囲に直接開きます。ツアーは`.tours/`にあり、アドホックなMarkdownノートではなくCodeTour形式を対象としています。

良いツアーは特定の読者への物語：
- 彼らが何を見ているか
- なぜそれが重要か
- 次にどのパスを従うべきか

`.tour` JSONファイルのみを作成。このスキルの一部としてソースコードを変更しないでください。

## 使用時期

次の場合にこのスキルを使用：
- ユーザーがコードツアー、オンボーディングツアー、アーキテクチャウォークスルー、またはPRツアーを求める
- ユーザーが「Xがどのように機能するかを説明」と言い、再利用可能なガイド付きアーティファクトを望む
- 新しいエンジニアまたはレビュアーのためのランプアップパス
- タスクはフラット概要ではなくガイド付きシーケンスでより良くサービスされる

## 使用しないとき

| コードツアーの代わりに | 使用 |
| --- | --- |
| 一度限りの説明で十分 | 直接答える |
| ユーザーがプロのドキュメント、`.tour`アーティファクトではなく | ドキュメント編集 |
| タスクは実装またはリファクタリング | 実装作業を行う |
| 広範なコードベースオンボーディング | `codebase-onboarding` |

## ワークフロー

### 1. 発見

何か書く前にリポを探索：
- READMEとパッケージ/アプリエントリポイント
- フォルダ構造
- 関連するコンフィグファイル
- ツアーがPRフォーカスの場合は変更されたファイル

コードの形状を理解する前にステップを書き始めないでください。

### 2. 読者を推測

要求からペルソナと深さを決定。

| リクエストの形 | ペルソナ | 推奨される深さ |
| --- | --- | --- |
| 「オンボーディング」「新しい参加者」 | `new-joiner` | 9-13ステップ |

## ツアー形式

Code Tour `.tour`ファイルはJSON形式で、各ステップはファイルパス、ライン番号、説明を含みます。
