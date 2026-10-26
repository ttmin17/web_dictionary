---
slug: affaan-m-ecc-docs-ja-jp-skills-dmux-workflows
name: dmux-workflows
tagline: 複数のAIエージェントとタスク集約ワークフローを調整します。複数のワーカーで作業を分配し、エラーを処理し、結果をマージ。
summary: "- 複数のタスクを並行して実行 - 大規模なワークフローを調整 - エージェント間でタスクを分配 - エラーハンドリングとリトライ - 結果のマージと統合"
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
  subpath: docs/ja-JP/skills/dmux-workflows
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
  path: docs/ja-JP/skills/dmux-workflows/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.010Z
  truncated: false
type: agent_skill
skill:
  skill_name: dmux-workflows
  description: 複数のAIエージェントとタスク集約ワークフローを調整します。複数のワーカーで作業を分配し、エラーを処理し、結果をマージ。
  folder_path: docs/ja-JP/skills/dmux-workflows
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# dmux ワークフロー
複数のエージェントとタスク集約処理の調整。

## 使用時期

- 複数のタスクを並行して実行
- 大規模なワークフローを調整
- エージェント間でタスクを分配
- エラーハンドリングとリトライ
- 結果のマージと統合

## アーキテクチャ

```
Input Task
    ↓
[Dispatcher]
    ↓
├─ Worker 1 → Task A
├─ Worker 2 → Task B
├─ Worker 3 → Task C
    ↓
[Result Merger]
    ↓
Unified Output
```

## 実装

### 1. タスク定義

```python
tasks = [
    Task(id=1, work="process data A"),
    Task(id=2, work="process data B"),
    Task(id=3, work="process data C"),
]
```

### 2. Dispatch

```python
dispatcher.run_parallel(tasks, workers=3)
```

### 3. Results

```python
results = dispatcher.get_results()
merged = merge_results(results)
```

## ベストプラクティス

- [ ] タスク粒度を適切に設定
- [ ] エラーハンドリング
- [ ] ロギング
- [ ] モニタリング
- [ ] タイムアウト管理

詳細については、ドキュメントを参照してください。
