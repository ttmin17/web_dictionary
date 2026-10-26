---
slug: affaan-m-ecc-docs-ja-jp-skills-defi-amm-security
name: defi-amm-security
tagline: DeFi自動マーケットメーカー（AMM）スマートコントラクトセキュリティ監査パターン。フラッシュローン、スリッページ、サンドイッチング攻撃、価格操作、再入攻撃、不正確な整数演算をカバー。
summary: "- Uniswap、Curve、BalancerなどのようなAMMコントラクトをレビュー -
  スワップ関数、ミント、バーンロジックでセキュリティの問題を検出 - フラッシュローン、価格操作脆弱性を特定 -
  DeFiプロトコルの経済セキュリティをテスト"
categories:
  - security-auth
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
  subpath: docs/ja-JP/skills/defi-amm-security
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
  path: docs/ja-JP/skills/defi-amm-security/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.009Z
  truncated: false
type: agent_skill
skill:
  skill_name: defi-amm-security
  description: DeFi自動マーケットメーカー（AMM）スマートコントラクトセキュリティ監査パターン。フラッシュローン、スリッページ、サンドイッチング攻撃、価格操作、再入攻撃、不正確な整数演算をカバー。
  folder_path: docs/ja-JP/skills/defi-amm-security
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# DeFi AMM セキュリティ
自動マーケットメーカー（AMM）スマートコントラクトのセキュリティパターンと監査チェックリスト。

## 使用時期

- Uniswap、Curve、BalancerなどのようなAMMコントラクトをレビュー
- スワップ関数、ミント、バーンロジックでセキュリティの問題を検出
- フラッシュローン、価格操作脆弱性を特定
- DeFiプロトコルの経済セキュリティをテスト

## 一般的な脆弱性

### 1. フラッシュローン攻撃

ローンが同一ブロック内で返却されたと仮定するコントラクトを攻撃。

### 2. スリッページ不足

ユーザーが予期しない不利な価格変更を受ける。

### 3. 再入攻撃

外部呼び出し後の状態チェック。

### 4. 価格操作

オンチェーン価格参照の信頼不足。

## セキュリティチェックリスト

- [ ] すべての価格参照はオラクルから取得
- [ ] フラッシュローンは考慮（価格を信頼しない）
- [ ] スリッページ保護が実装
- [ ] チェック・エフェクト・相互作用パターン使用
- [ ] 再入保護（ミューテックス/チェック付き）
- [ ] 整数オーバーフロー/アンダーフロー処理
- [ ] アクセス制御とロール分離

詳細については、ドキュメントを参照してください。
