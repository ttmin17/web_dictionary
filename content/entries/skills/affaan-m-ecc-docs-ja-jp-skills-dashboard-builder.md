---
slug: affaan-m-ecc-docs-ja-jp-skills-dashboard-builder
name: dashboard-builder
tagline: Grafana、SigNoz、および同様のプラットフォーム用の実際のオペレータ質問に答える監視ダッシュボードを構築します。メトリクスを虚栄ボードではなく機能するダッシュボードに変える場合に使用します。
summary: 目標は「すべてのメトリクスを表示」ではありません。目標は以下の質問に答えることです：
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
  subpath: docs/ja-JP/skills/dashboard-builder
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
  path: docs/ja-JP/skills/dashboard-builder/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.009Z
  truncated: false
type: agent_skill
skill:
  skill_name: dashboard-builder
  description: Grafana、SigNoz、および同様のプラットフォーム用の実際のオペレータ質問に答える監視ダッシュボードを構築します。メトリクスを虚栄ボードではなく機能するダッシュボードに変える場合に使用します。
  folder_path: docs/ja-JP/skills/dashboard-builder
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# ダッシュボード ビルダー
タスクが人々が操作できるダッシュボードを構築することの場合に使用。

目標は「すべてのメトリクスを表示」ではありません。目標は以下の質問に答えることです：

- 健康ですか？
- ボトルネックはどこですか？
- 何が変わったのですか？
- 誰かが取るべき措置は何ですか？

## 使用時期

- 「Kafkaモニタリングダッシュボードを構築」
- 「Elasticsearch用のGrafanaダッシュボードを作成」
- 「このサービス用のSigNozダッシュボードを作成」
- 「このメトリクスリストを実際の運用ダッシュボードに変える」

## ガードレール

- ビジュアルレイアウトから始めない；オペレータの質問から始める
- 利用可能なすべてのメトリクスを含めない
- 健康、スループット、リソースパネルを構造なしで混ぜない
- タイトル、ユニット、合理的なしきい値なしでパネルを出荷しない

## ワークフロー

### 1. 運用質問を定義

以下の周りに整理：

- 健康/可用性
- レイテンシ/パフォーマンス
- スループット/ボリューム
- 飽和/リソース
- サービス固有のリスク

### 2. ターゲットプラットフォームスキーマを研究

既存のダッシュボードを最初に検査：

- JSON構造
- クエリ言語

### 3. メトリクスを選択

オペレータが実際に見ているもの、アラートしているもと、対応するのに必要なメトリクスのみを含める。

### 4. レイアウトの構築

質問ごとにパネルをグループ化。
