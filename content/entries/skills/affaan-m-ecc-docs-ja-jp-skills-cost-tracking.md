---
slug: affaan-m-ecc-docs-ja-jp-skills-cost-tracking
name: cost-tracking
tagline: ローカルのコスト追跡データベースからClaude
  Codeのトークン使用量、支出、予算を追跡・レポートします。コスト、支出、使用量、トークン、予算、またはプロジェクト、ツール、セッション、日付によるコスト内訳について質問する場合に使用します。
summary: "出典: MayurBhavsarによるコミュニティのPR #1304から救済されました。"
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
  subpath: docs/ja-JP/skills/cost-tracking
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
  path: docs/ja-JP/skills/cost-tracking/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.008Z
  truncated: false
type: agent_skill
skill:
  skill_name: cost-tracking
  description: ローカルのコスト追跡データベースからClaude
    Codeのトークン使用量、支出、予算を追跡・レポートします。コスト、支出、使用量、トークン、予算、またはプロジェクト、ツール、セッション、日付によるコスト内訳について質問する場合に使用します。
  folder_path: docs/ja-JP/skills/cost-tracking
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# コスト追跡
このスキルを使用して、ローカルSQLiteデータベースからClaude Codeのコストと使用履歴を分析します。これは、`~/.claude-cost-tracker/usage.db`に使用行を書き込むコスト追跡フックまたはプラグインをすでに持っているユーザーを対象としています。

出典: `MayurBhavsar`によるコミュニティのPR #1304から救済されました。

## 使用時期

- ユーザーが「いくら使いましたか？」「このセッションのコストは？」「トークン使用量は？」と尋ねる場合
- ユーザーが予算、支出制限、超過、またはコスト管理について言及する場合
- ユーザーがプロジェクト、ツール、セッション、モデル、または日付ごとのコスト内訳を求める場合
- ユーザーが今日と昨日を比較したい、または最近のトレンドを確認したい場合
- ユーザーが最近の使用記録のCSVエクスポートを求める場合

## 動作方法

まず前提条件を確認します：

```bash
command -v sqlite3 >/dev/null && echo "sqlite3 available" || echo "sqlite3 missing"
test -f ~/.claude-cost-tracker/usage.db && echo "Database found" || echo "Database not found"
```

データベースが見つからない場合、使用データを作成しません。ユーザーにコスト追跡が設定されていないことを伝え、信頼できるローカルコスト追跡フック/プラグインのインストールまたは有効化を提案します。

期待される`usage`テーブルには通常、ツール呼び出しまたはモデルインタラクションごとに1行が含まれます。列名はトラッカーによって異なりますが、以下の例では次のように仮定します：

| 列 | 意味 |
| --- | --- |
| `timestamp` | 使用イベントのISOタイムスタンプ |
| `project` | プロジェクトまたはリポジトリ名 |
| `tool_name` | ツールまたはイベント名 |
| `input_tokens` | 記録された場合の入力トークン数 |
| `output_tokens` | 記録された場合の出力トークン数 |
| `cost_usd` | USDで事前計算されたコスト |
| `session_id` | Claude Codeセッション識別子 |
| `model` | イベントに使用されたモデル |

`cost_usd`を使用して手動で価格計算するよりも優先します。モデルの価格とキャッシュ価格は時間とともに変化し、トラッカーが各行の価格設定の信頼できる情報源であるべきです。

## 例

### クイックサマリー

```bash
sqlite3 ~/.claude-cost-tracker/usage.db "
  SELECT
    'Today: $' || ROUND(COALESCE(SUM(CASE WHEN date(timestamp) = date('now') THEN cost_usd END), 0), 4) ||
    ' | Total: $' || ROUND(COALESCE(SUM(cost_usd), 0), 4) ||
    ' | Calls: ' || COUNT(*) ||
    ' | Sessions: ' || COUNT(DISTINCT session_id)
  FROM usage;
"
```

### プロジェクト別コスト

```bash
sqlite3 -header -column ~/.claude-cost-tracker/usage.db "
  SELECT project, ROUND(SUM(cost_usd), 4) AS cost, COUNT(*) AS calls
  FROM usage
  GROUP BY project
  ORDER BY cost DESC;
"
```

### ツール別コスト

```bash
sqlite3 -header -column ~/.claude-cost-tracker/usage.db "
  SELECT tool_name, ROUND(SUM(cost_usd), 4) AS cost, COUNT(*) AS calls
  FROM usage
  GROUP BY tool_name
  ORDER BY cost DESC;
"
```

### 過去7日間

```bash
sqlite3 -header -column ~/.claude-cost-tracker/usage.db "
  SELECT date(timestamp) AS date, ROUND(SUM(cost_usd), 4) AS cost, COUNT(*) AS calls
  FROM usage
  GROUP BY date(timestamp)
  ORDER BY date DESC
  LIMIT 7;
"
```

### セッション詳細

```bash
sqlite3 -header -column ~/.claude-cost-tracker/usage.db "
  SELECT session_id,
    MIN(timestamp) AS started,
    MAX(timestamp) AS ended,
    ROUND(SUM(cost_usd), 4) AS cost,
    COUNT(*) AS calls
  FROM usage
  GROUP BY session_id
  ORDER BY started DESC
  LIMIT 10;
"
```

## レポートガイダンス

コストデータを表示する場合、以下を含めます：

1. 今日の支出と昨日の比較。
2. 追跡されたデータベース全体の合計支出。
3. コスト順にランク付けされた上位プロジェクト。
4. コスト順にランク付けされた上位ツール。
5. 十分なデータがある場合のセッション数とセッションごとの平均コスト。

少額の場合、通貨を小数点4桁でフォーマットします。大きな金額には2桁で十分です。

## アンチパターン

- `cost_usd`が存在する場合に生のトークン数からコストを推定しないこと。
- 確認せずにデータベースが存在すると仮定しないこと。
- 大規模なデータベースで無制限の`SELECT *`エクスポートを実行しないこと。
- ユーザー向けの回答で現在のモデル価格をハードコードしないこと。
- 任意のコードを実行する未審査のフックやプラグインのインストールを推奨しないこと。

## 関連

- `/cost-report` - 同じデータベースを使用するコマンド形式のレポート。
- `cost-aware-llm-pipeline` - モデルルーティングと予算設計のパターン。
- `token-budget-advisor` - コンテキストとトークン予算の計画。
- `strategic-compact` - 繰り返しのトークン支出を削減するためのコンテキスト圧縮。
