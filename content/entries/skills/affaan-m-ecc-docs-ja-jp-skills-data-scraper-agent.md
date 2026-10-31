---
slug: affaan-m-ecc-docs-ja-jp-skills-data-scraper-agent
name: data-scraper-agent
tagline: 任意のパブリックソース（ジョブボード、価格、ニュース、GitHub、スポーツなど）用の完全自動化されたAI搭載データ収集エージェントを構築します。スケジュールでスクレイプし、無料LLM（Gemini
  Flash）でデータを豊かにし、Notion/Sheets/Supabaseに結果を保存し、ユーザー
summary: "- ユーザーが任意のパブリックWebサイトまたはAPIをスクレイプまたは監視したい場合 -
  ユーザーが「チェックするボットを構築」「Xを監視」「データを収集」と言う -
  ユーザーがジョブ、価格、ニュース、リポ、スポーツスコア、イベント、リストを追跡したい場合 -
  ユーザーがホスティング用に支払わずにデータ収集を自動化する方法を尋ねる - ユーザーが決定に基づいて時間とともにより スマートになるエージェントを望む"
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
  subpath: docs/ja-JP/skills/data-scraper-agent
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
  path: docs/ja-JP/skills/data-scraper-agent/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.009Z
  truncated: false
type: agent_skill
skill:
  skill_name: data-scraper-agent
  description: 任意のパブリックソース（ジョブボード、価格、ニュース、GitHub、スポーツなど）用の完全自動化されたAI搭載データ収集エージェントを構築します。スケジュールでスクレイプし、無料LLM（Gemini
    Flash）でデータを豊かにし、Notion/Sheets/Supabaseに結果を保存し、ユーザーフィードバックから学習します。GitHub
    Actions上で100％無料で実行。ユーザーがパブリックデータを自動的に監視、収集、または追跡したい場合に使用します。
  folder_path: docs/ja-JP/skills/data-scraper-agent
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# データスクレイパーエージェント
任意のパブリックデータソース用の本番環境対応、AI搭載データ収集エージェントを構築。
スケジュールで実行され、無料LLMで結果を豊かにし、データベースに保存し、時間とともに改善されます。

**スタック：Python · Gemini Flash（無料） · GitHub Actions（無料） · Notion / Sheets / Supabase**

## アクティベーション時期

- ユーザーが任意のパブリックWebサイトまたはAPIをスクレイプまたは監視したい場合
- ユーザーが「チェックするボットを構築」「Xを監視」「データを収集」と言う
- ユーザーがジョブ、価格、ニュース、リポ、スポーツスコア、イベント、リストを追跡したい場合
- ユーザーがホスティング用に支払わずにデータ収集を自動化する方法を尋ねる
- ユーザーが決定に基づいて時間とともにより スマートになるエージェントを望む

## コアコンセプト

### 3つのレイヤー

すべてのデータスクレイパーエージェントには3つのレイヤーがあります：

```
COLLECT → ENRICH → STORE
  │           │        │
Scraper    AI (LLM)  Database
runs on    scores/   Notion /
schedule   summarises Sheets /
           & classifies Supabase
```

### 無料スタック

| Layer | Tool | Why |
|---|---|---|
| COLLECT | Playwright/BeautifulSoup | 無料のオープンソーススクレイピング |
| ENRICH | Gemini Flash | 無料で高速LLM |
| STORE | Supabase / Sheets | 無料データベースとスプレッドシート |
| SCHEDULE | GitHub Actions | 無料クロンジョブ |

## ワークフロー

1. **ソースを定義** - どこからスクレイプするか、何を抽出するか
2. **スクレイパーを構築** - BeautifulSoup または Playwright ベースのコレクタ
3. **LLMを構成** - Gemini Flash でテキストをスコア付け/要約/分類
4. **ストレージを設定** - Notion、Sheets、Supabase のいずれか
5. **GitHub Actions を設定** - 毎日/毎週実行するスケジュール
6. **フィードバックループを追加** - ユーザーの判断から学習

## 例

- ジョブボード監視：新しい公開
