---
slug: affaan-m-ecc-docs-ja-jp-skills-codebase-onboarding
name: codebase-onboarding
tagline: 不慣れなコードベースを分析し、アーキテクチャマップ、主要なエントリポイント、規約、スターターCLAUDE.mdを含む構造化オンボーディングガイドを生成します。新しいプロジェクトに参加するか、リポでClaude
  Codeを初めてセットアップする場合に使用します。
summary: "- Claude Codeでプロジェクトを初めて開く - 新しいチームまたはリポに参加 -
  ユーザーが「このコードベースを理解する手助けをしてください」と求める - ユーザーがプロジェクトのCLAUDE.mdを生成するよう要求 -
  ユーザーが「オンボード」または「このリポを説明」と言う"
categories:
  - coding-agents
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
  subpath: docs/ja-JP/skills/codebase-onboarding
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
  path: docs/ja-JP/skills/codebase-onboarding/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.007Z
  truncated: false
type: agent_skill
skill:
  skill_name: codebase-onboarding
  description: 不慣れなコードベースを分析し、アーキテクチャマップ、主要なエントリポイント、規約、スターターCLAUDE.mdを含む構造化オンボーディングガイドを生成します。新しいプロジェクトに参加するか、リポでClaude
    Codeを初めてセットアップする場合に使用します。
  folder_path: docs/ja-JP/skills/codebase-onboarding
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# コードベースオンボーディング
体系的に不慣れなコードベースを分析し、構造化オンボーディングガイドを作成。新しいプロジェクトに参加するか、既存リポでClaude Codeを初めてセットアップする開発者向けに設計。

## 使用時期

- Claude Codeでプロジェクトを初めて開く
- 新しいチームまたはリポに参加
- ユーザーが「このコードベースを理解する手助けをしてください」と求める
- ユーザーがプロジェクトのCLAUDE.mdを生成するよう要求
- ユーザーが「オンボード」または「このリポを説明」と言う

## 動作方法

### フェーズ1：偵察

すべてのファイルを読まずにプロジェクトについての生の信号を集めます。これらのチェックを並行して実行：

```
1. パッケージマニフェスト検出
   → package.json, go.mod, Cargo.toml, pyproject.toml, pom.xml

2. フレームワークフィンガープリント
   → next.config、nuxt.config、angular.json、vite.config

3. エントリポイント識別
   → main.*、index.*、app.*、server.*

4. ディレクトリ構造スナップショット
   → ディレクトリツリーの最上位2レベル

5. コンフィグとツール検出
   → .eslintrc、.prettierrc、tsconfig.json、Dockerfile

6. テスト構造検出
   → tests/、__tests__/、*.spec.ts、jest.config.*
```

### フェーズ2：アーキテクチャマップ

主要なモジュールとそれらの関係を特定します。

### フェーズ3：規約とスタイル

コード規約、命名パターン、プロジェクト固有のパターンを特定。

### 出力

- アーキテクチャマップ
- 主要なエントリポイントと流れ
- 規約とスタイルガイド
- スターターCLAUDE.md
