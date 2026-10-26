---
slug: affaan-m-ecc-docs-ja-jp-skills-django-celery
name: django-celery
tagline: DjangoおよびCeleryを使用した非同期タスク処理。タスクキューイング、ワーカー管理、エラー処理、スケジューリング。Redis/RabbitMQ
  ブローカー統合。
summary: "- メール送信をバックグラウンドで実行 - 重い処理をスケジュール - 定期的なタスクを実行（日報、クリーンアップ） -
  外部API呼び出しをキューイング - 複雑なワークフローを調整"
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
  subpath: docs/ja-JP/skills/django-celery
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
  path: docs/ja-JP/skills/django-celery/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.009Z
  truncated: false
type: agent_skill
skill:
  skill_name: django-celery
  description: DjangoおよびCeleryを使用した非同期タスク処理。タスクキューイング、ワーカー管理、エラー処理、スケジューリング。Redis/RabbitMQ
    ブローカー統合。
  folder_path: docs/ja-JP/skills/django-celery
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Django + Celery 非同期タスク
Django でのバックグラウンドジョブと非同期処理。

## 使用時期

- メール送信をバックグラウンドで実行
- 重い処理をスケジュール
- 定期的なタスクを実行（日報、クリーンアップ）
- 外部API呼び出しをキューイング
- 複雑なワークフローを調整

## セットアップ

### 1. Celery インストール

```bash
pip install celery redis
```

### 2. タスク定義

```python
from celery import shared_task

@shared_task
def send_email(recipient):
    # メール送信ロジック
    pass
```

### 3. ワーカー起動

```bash
celery -A myapp worker -l info
```

## タスク

### 非同期実行

```python
send_email.delay(recipient)  # すぐにキューに追加、非同期実行
```

### スケジューリング

```python
from celery.schedules import crontab

app.conf.beat_schedule = {
    'send-report-daily': {
        'task': 'app.tasks.send_report',
        'schedule': crontab(hour=9, minute=0),
    },
}
```

## エラーハンドリング

- [ ] リトライロジック実装
- [ ] デッドレター処理
- [ ] ロギング構成
- [ ] モニタリング設定（Flower）

詳細については、ドキュメントを参照してください。
