---
slug: affaan-m-ecc-docs-ja-jp-skills-benchmark
name: benchmark
tagline: このスキルを使用して、パフォーマンスベースラインを測定し、PR前後の回帰を検出し、スタック代替案を比較します。
summary: "- PR前後にパフォーマンスへの影響を測定 - プロジェクトのパフォーマンスベースラインを設定 - ユーザーが「遅く感じる」と報告したとき
  - ローンチ前 — パフォーマンスターゲットを満たしていることを確認 - スタックを代替案と比較"
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
  subpath: docs/ja-JP/skills/benchmark
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
  path: docs/ja-JP/skills/benchmark/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.006Z
  truncated: false
type: agent_skill
skill:
  skill_name: benchmark
  description: このスキルを使用して、パフォーマンスベースラインを測定し、PR前後の回帰を検出し、スタック代替案を比較します。
  folder_path: docs/ja-JP/skills/benchmark
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# ベンチマーク — パフォーマンスベースラインと回帰検出
## 使用時期

- PR前後にパフォーマンスへの影響を測定
- プロジェクトのパフォーマンスベースラインを設定
- ユーザーが「遅く感じる」と報告したとき
- ローンチ前 — パフォーマンスターゲットを満たしていることを確認
- スタックを代替案と比較

## 動作方法

### モード1：ページパフォーマンス

ブラウザMCPを介してリアルブラウザメトリクスを測定：

```
1. 各ターゲットURLに移動
2. Core Web Vitalsを測定：
   - LCP (Largest Contentful Paint) — ターゲット < 2.5s
   - CLS (Cumulative Layout Shift) — ターゲット < 0.1
   - INP (Interaction to Next Paint) — ターゲット < 200ms
   - FCP (First Contentful Paint) — ターゲット < 1.8s
   - TTFB (Time to First Byte) — ターゲット < 800ms
3. リソースサイズを測定：
   - 合計ページウェイト（ターゲット < 1MB）
   - JSバンドルサイズ（ターゲット < 200KBgzipped）
   - CSSサイズ
   - 画像ウェイト
   - サードパーティスクリプトウェイト
4. ネットワークリクエストをカウント
5. レンダリングブロッキングリソースをチェック
```

### モード2：APIパフォーマンス

APIエンドポイントをベンチマーク：

```
1. 各エンドポイントに100回ヒット
2. 測定：p50、p95、p99レイテンシ
3. トラック：レスポンスサイズ、ステータスコード
4. ロード下でテスト：10個の同時リクエスト
5. SLAターゲットと比較
```

### モード3：ビルドパフォーマンス

開発フィードバックループを測定：

```
1. コールドビルド時間
2. ホットリロード時間（HMR）
3. テストスイート期間
4. TypeScriptチェック時間
5. Lint時間
6. Dockerビルド時間
```

### モード4：前後の比較

変更前後に実行して影響を測定：

```
/benchmark baseline    # 現在のメトリクスを保存
# ... 変更を加える ...
/benchmark compare     # ベースラインと比較
```

出力：
```
| Metric | Before | After | Delta | Verdict |
|--------|--------|-------|-------|---------|
| LCP | 1.2s | 1.4s | +200ms | WARNING: WARN |
| Bundle | 180KB | 175KB | -5KB | ✓ BETTER |
| Build | 12s | 14s | +2s | WARNING: WARN |
```

## 出力

`.ecc/benchmarks/`にJSONとしてベースラインを保存。Gitで追跡されるため、チームはベースラインを共有します。

## 統合

- CI：すべてのPRで`/benchmark compare`を実行
- `/canary-watch`とペアリングしてデプロイ後の監視
- `/browser-qa`とペアリングして完全な出荷前チェックリスト
