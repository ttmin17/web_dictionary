---
slug: affaan-m-ecc-docs-ja-jp-skills-canary-watch
name: canary-watch
tagline: このスキルを使用して、デプロイメント、マージ、または依存関係アップグレード後にデプロイされたURLの回帰を監視します。
summary: "- 本番またはステージングへのデプロイ後 - 危険なPRをマージした後 - 修正が実際に修正されたことを確認したい場合 -
  ローンチウィンドウ中の継続的監視 - 依存関係アップグレード後"
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
  subpath: docs/ja-JP/skills/canary-watch
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
  path: docs/ja-JP/skills/canary-watch/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.007Z
  truncated: false
type: agent_skill
skill:
  skill_name: canary-watch
  description: このスキルを使用して、デプロイメント、マージ、または依存関係アップグレード後にデプロイされたURLの回帰を監視します。
  folder_path: docs/ja-JP/skills/canary-watch
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# カナリアウォッチ — デプロイ後の監視
## 使用時期

- 本番またはステージングへのデプロイ後
- 危険なPRをマージした後
- 修正が実際に修正されたことを確認したい場合
- ローンチウィンドウ中の継続的監視
- 依存関係アップグレード後

## 動作方法

デプロイされたURLの回帰を監視します。停止されるか監視ウィンドウが期限切れになるまで、ループで実行されます。

### 監視内容

```
1. HTTPステータス — ページは200を返していますか？
2. コンソールエラー — 以前なかった新しいエラーはありますか？
3. ネットワークの障害 — 失敗したAPIコール、5xx応答？
4. パフォーマンス — LCP/CLS/INPの回帰対ベースライン？
5. コンテンツ — 主要な要素は消えましたか？（h1、nav、footer、CTA）
6. API健康 — 重要なエンドポイントはSLA内で応答していますか？
```

### 監視モード

**クイックチェック**（デフォルト）：シングルパス、レポート結果
```
/canary-watch https://myapp.com
```

**継続監視**：N分ごとにM時間チェック
```
/canary-watch https://myapp.com --interval 5m --duration 2h
```

**差分モード**：ステージング対本番を比較
```
/canary-watch --compare https://staging.myapp.com https://myapp.com
```

### 警告しきい値

```yaml
critical:  # 即座の警告
  - HTTPステータス != 200
  - コンソールエラー数 > 5（新しいエラーのみ）
  - LCP > 4s
  - APIエンドポイントは5xxを返す

warning:   # レポートで報告
  - LCP ベースラインから > 500ms増加
  - CLS > 0.1
  - 新しいコンソール警告
  - レスポンス時間 > 2xベースライン

info:      # ログのみ
  - マイナーパフォーマンス分散
  - 新しいネットワークリクエスト（サードパーティスクリプトが追加された？）
```

### 通知

重大なしきい値を超えたとき：
- デスクトップ通知（macOS/Linux）
- オプション：Slack/Discord Webhook
- `~/.claude/canary-watch.log`にログ

## 出力

```markdown
## Canary Report — myapp.com — 2026-03-23 03:15 PST

### Status
- ✓ HTTP 200
- ✓ No critical errors
- ✓ LCP within SLA (1.8s)

### Diffs from Baseline
- CLS: 0.08 (↓ 0.02)
- Response: 245ms (↑ 12ms, OK)
- Network: 42 requests (↑ 3, investigate third-party?)
```

## 統合

- `/benchmark`とペアリングしてパフォーマンス比較
- `/browser-qa`とペアリングして完全なUIテスト
- CI/CDパイプラインに組み込んでオートメーション監視
