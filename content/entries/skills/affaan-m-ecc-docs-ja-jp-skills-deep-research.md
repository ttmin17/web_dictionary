---
slug: affaan-m-ecc-docs-ja-jp-skills-deep-research
name: deep-research
tagline: コンテキスト深い研究を実施し、複雑なテーマについての権威ある答えを生成します。複数のソースをキュレート、相互参照、合成してコンテキスト内の完全な画像を構築します。
summary: "- ユーザーが「Xについて詳しく調べてくれ」と求める - トレードオフ分析、選択肢の比較 - 市場調査、競合分析 -
  技術的な深掘り（フレームワーク、言語、ツール） - 複数の権限筋からの情報を必要とする質問"
categories:
  - domain-research
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
  subpath: docs/ja-JP/skills/deep-research
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
  path: docs/ja-JP/skills/deep-research/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.009Z
  truncated: false
type: agent_skill
skill:
  skill_name: deep-research
  description: コンテキスト深い研究を実施し、複雑なテーマについての権威ある答えを生成します。複数のソースをキュレート、相互参照、合成してコンテキスト内の完全な画像を構築します。
  folder_path: docs/ja-JP/skills/deep-research
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# ディープ リサーチ
複雑なテーマについて複数のソースをキュレート、交差参照、合成して権威ある答えを生成します。

## 使用時期

- ユーザーが「Xについて詳しく調べてくれ」と求める
- トレードオフ分析、選択肢の比較
- 市場調査、競合分析
- 技術的な深掘り（フレームワーク、言語、ツール）
- 複数の権限筋からの情報を必要とする質問

## ワークフロー

1. **質問を拡張** - キュレートするトピックと質問の軸を特定
2. **複数のソースをスキャン** - Exa、GitHub、arXiv、論文、ブログ、ドキュメント
3. **データを合成** - テーマごとにノートを整理、共通パターンを特定
4. **メリット/デメリット表を構築** - トレードオフを明確に表示
5. **権威ある答えを構築** - コンテキスト内の完全な画像を提示

## 出力形式

- 要約（2-3段落）
- 重要な発見（箇条書き）
- メリット/デメリット表
- 推奨事項またはベストプラクティス
- ソース参考文献
