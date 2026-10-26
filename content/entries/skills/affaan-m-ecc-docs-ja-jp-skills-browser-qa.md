---
slug: affaan-m-ecc-docs-ja-jp-skills-browser-qa
name: browser-qa
tagline: このスキルを使用して、機能をデプロイ後にブラウザ自動化を使用した自動ビジュアルテストとUI相互作用検証を自動化します。
summary: "- ステージング/プレビューに機能をデプロイ後 - ページ全体のUIの動作を検証する必要がある場合 - 出荷前 —
  レイアウト、フォーム、相互作用が実際に機能することを確認 - フロントエンドコードに触れるPRをレビューする場合 -
  アクセシビリティ監査とレスポンシブテスト"
categories:
  - browser-web
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
  subpath: docs/ja-JP/skills/browser-qa
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
  path: docs/ja-JP/skills/browser-qa/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.006Z
  truncated: false
type: agent_skill
skill:
  skill_name: browser-qa
  description: このスキルを使用して、機能をデプロイ後にブラウザ自動化を使用した自動ビジュアルテストとUI相互作用検証を自動化します。
  folder_path: docs/ja-JP/skills/browser-qa
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# ブラウザQA — 自動ビジュアルテストと相互作用
## 使用時期

- ステージング/プレビューに機能をデプロイ後
- ページ全体のUIの動作を検証する必要がある場合
- 出荷前 — レイアウト、フォーム、相互作用が実際に機能することを確認
- フロントエンドコードに触れるPRをレビューする場合
- アクセシビリティ監査とレスポンシブテスト

## 動作方法

ブラウザオートメーションMCP（claude-in-chrome、Playwright、またはPuppeteer）を使用して、実際のユーザーのようにライブページと相互作用します。

### フェーズ1：スモークテスト
```
1. ターゲットURLに移動
2. コンソールエラーをチェック（ノイズをフィルター：分析、サードパーティ）
3. ネットワークリクエストで4xx/5xxがないことを確認
4. デスクトップ+モバイルビューポート上の上にスクリーンショット
5. Core Web Vitalsをチェック：LCP < 2.5s、CLS < 0.1、INP < 200ms
```

### フェーズ2：相互作用テスト
```
1. すべてのnavリンクをクリック — デッドリンクがないことを確認
2. 有効なデータでフォームを送信 — 成功状態を確認
3. 無効なデータでフォームを送信 — エラー状態を確認
4. 認証フローをテスト：ログイン→保護されたページ→ログアウト
5. 重要なユーザージャーニーをテスト（チェックアウト、オンボーディング、検索）
```

### フェーズ3：ビジュアル回帰
```
1. 3つのブレークポイント（375px、768px、1440px）でキーページのスクリーンショット
2. ベースラインスクリーンショット（保存されている場合）と比較
3. レイアウトシフト> 5px、要素の欠落、オーバーフローにフラグを立てる
4. 該当する場合はダークモードをチェック
```

### フェーズ4：アクセシビリティ
```
1. 各ページでaxe-coreまたは同等のものを実行
2. WCAG AAの違反にフラグを立てる（コントラスト、ラベル、フォーカス順）
3. キーボードナビゲーションがエンドツーエンドで機能することを確認
4. スクリーンリーダーランドマークをチェック
```

## 出力形式

```markdown
## QA Report — [URL] — [timestamp]

### Smoke Test
- ✓ ページが読み込まれる
- ✗ コンソールエラー：オプト不可なトラッキング警告
- ✓ Core Web Vitals OK
- [スクリーンショット]

### 相互作用テスト
- ✓ ナビゲーション機能
- ✓ フォーム検証
- ✗ モバイルメニューが開かない

### ビジュアル回帰
- ✓ デスクトップレイアウト
- ✗ モバイルで画像がオーバーフロー

### アクセシビリティ
- 1 WCAG AA: コントラスト違反
- 0 WCAG A違反
```

## 統合

- `/benchmark`とペアリングしてパフォーマンス確認
- `/canary-watch`とペアリングしてデプロイ後の監視を自動化
- PullRequestワークフローに組み込んでフロントエンドPRをキャッチ
