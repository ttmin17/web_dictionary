---
slug: affaan-m-ecc-docs-ja-jp-skills-cpp-coding-standards
name: cpp-coding-standards
tagline: C++コアガイドラインに基づくC++コーディング標準（isocpp.github.io）。現代的で安全で慣用的なプラクティスを強制するためにC++コードを書き、レビュー、またはリファクタリングする場合に使用します。
summary: "- 新しいC++コードを書く（クラス、関数、テンプレート） - 既存のC++コードをレビューまたはリファクタリング -
  C++プロジェクトでアーキテクチャ決定を行う - C++コードベース全体で一貫性のあるスタイルを実施 - 言語機能の選択（例：enum vs enum
  class、生ポインタ対スマートポインタ）"
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
  subpath: docs/ja-JP/skills/cpp-coding-standards
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
  path: docs/ja-JP/skills/cpp-coding-standards/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.008Z
  truncated: false
type: agent_skill
skill:
  skill_name: cpp-coding-standards
  description: C++コアガイドラインに基づくC++コーディング標準（isocpp.github.io）。現代的で安全で慣用的なプラクティスを強制するためにC++コードを書き、レビュー、またはリファクタリングする場合に使用します。
  folder_path: docs/ja-JP/skills/cpp-coding-standards
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# C++コーディング標準（C++コアガイドライン）
C++コアガイドラインから派生した最新のC++（C++17/20/23）の包括的なコーディング標準。タイプセーフティ、リソースセーフティ、不変性、明確性を強制します。

## 使用時期

- 新しいC++コードを書く（クラス、関数、テンプレート）
- 既存のC++コードをレビューまたはリファクタリング
- C++プロジェクトでアーキテクチャ決定を行う
- C++コードベース全体で一貫性のあるスタイルを実施
- 言語機能の選択（例：`enum` vs `enum class`、生ポインタ対スマートポインタ）

## クロスカッティング原則

これらのテーマはガイドライン全体に繰り返され、基礎を形成：

1. **至るところにRAII**：リソースライフタイムをオブジェクトライフタイムにバインド
2. **デフォルトで不変性**：`const`/`constexpr`で開始；変更可能性は例外
3. **タイプセーフティ**：型システムを使用してコンパイル時にエラーを防止
4. **意図を表現**：名前、タイプ、概念は目的を伝える必要があります
5. **複雑性を最小化**：シンプルなコードが正しいコード
6. **値セマンティクス対ポインタセマンティクス**：値で返すか、スコープ付きオブジェクトを好む

## 主要なルール

| Rule | Summary |
|------|---------|
| **P.1** | コード内のアイデアを直接表現 |
| **P.3** | 意図を表現 |
| **P.4** | 理想的には、プログラムは静的にタイプセーフである必要があります |
| **P.5** | ランタイムチェックに対するコンパイル時チェック |
| **P.8** | リソースをリークしない |
| **P.10** | 変更可能なデータより不変データを好む |
| **I.1** | インターフェースを明示的にする |
| **I.2** | 非const グローバル変数を避ける |
| **I.4** | インターフェースを正確にし、強く型付けされたものにする |

## スマートポインタと所有権

現代的なC++では、生ポインタの代わりにスマートポインタを使用：
- `std::unique_ptr<T>` 単一所有者向け
- `std::shared_ptr<T>` 共有所有権向け
- `std::weak_ptr<T>` 循環参照を回避するため
