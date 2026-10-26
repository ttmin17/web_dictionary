---
slug: affaan-m-ecc-docs-ja-jp-skills-iterative-retrieval
name: iterative-retrieval
tagline: サブエージェントのコンテキスト問題を解決するために、コンテキスト取得を段階的に洗練するパターン
summary: "サブエージェントは限定的なコンテキストで起動されます。以下を知りません: - どのファイルに関連するコードが含まれているか -
  コードベースにどのようなパターンが存在するか - プロジェクトがどのような用語を使用しているか"
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
  subpath: docs/ja-JP/skills/iterative-retrieval
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
  path: docs/ja-JP/skills/iterative-retrieval/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.016Z
  truncated: false
type: agent_skill
skill:
  skill_name: iterative-retrieval
  description: サブエージェントのコンテキスト問題を解決するために、コンテキスト取得を段階的に洗練するパターン
  folder_path: docs/ja-JP/skills/iterative-retrieval
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# 反復検索パターン
マルチエージェントワークフローにおける「コンテキスト問題」を解決します。サブエージェントは作業を開始するまで、どのコンテキストが必要かわかりません。

## 問題

サブエージェントは限定的なコンテキストで起動されます。以下を知りません:
- どのファイルに関連するコードが含まれているか
- コードベースにどのようなパターンが存在するか
- プロジェクトがどのような用語を使用しているか

標準的なアプローチは失敗します:
- **すべてを送信**: コンテキスト制限を超える
- **何も送信しない**: エージェントに重要な情報が不足
- **必要なものを推測**: しばしば間違い

## 解決策: 反復検索

コンテキストを段階的に洗練する4フェーズのループ:

```
┌─────────────────────────────────────────────┐
│                                             │
│   ┌──────────┐      ┌──────────┐            │
│   │ DISPATCH │─────│ EVALUATE │            │
│   └──────────┘      └──────────┘            │
│        ▲                  │                 │
│        │                  ▼                 │
│   ┌──────────┐      ┌──────────┐            │
│   │   LOOP   │─────│  REFINE  │            │
│   └──────────┘      └──────────┘            │
│                                             │
│        最大3サイクル、その後続行              │
└─────────────────────────────────────────────┘
```

### フェーズ1: DISPATCH

候補ファイルを収集する初期の広範なクエリ:

```javascript
// 高レベルの意図から開始
const initialQuery = {
  patterns: ['src/**/*.ts', 'lib/**/*.ts'],
  keywords: ['authentication', 'user', 'session'],
  excludes: ['*.test.ts', '*.spec.ts']
};

// 検索エージェントにディスパッチ
const candidates = await retrieveFiles(initialQuery);
```

### フェーズ2: EVALUATE

取得したコンテンツの関連性を評価:

```javascript
function evaluateRelevance(files, task) {
  return files.map(file => ({
    path: file.path,
    relevance: scoreRelevance(file.content, task),
    reason: explainRelevance(file.content, task),
    missingContext: identifyGaps(file.content, task)
  }));
}
```

スコアリング基準:
- **高(0.8-1.0)**: ターゲット機能を直接実装
- **中(0.5-0.7)**: 関連するパターンや型を含む
- **低(0.2-0.4)**: 間接的に関連
- **なし(0-0.2)**: 関連なし、除外

### フェーズ3: REFINE

評価に基づいて検索基準を更新:

```javascript
function refineQuery(evaluation, previousQuery) {
  return {
    // 高関連性ファイルで発見された新しいパターンを追加
    patterns: [...previousQuery.patterns, ...extractPatterns(evaluation)],

    // コードベースで見つかった用語を追加
    keywords: [...previousQuery.keywords, ...extractKeywords(evaluation)],

    // 確認された無関係なパスを除外
    excludes: [...previousQuery.excludes, ...evaluation
      .filter(e => e.relevance < 0.2)
      .map(e => e.path)
    ],

    // 特定のギャップをターゲット
    focusAreas: evaluation
      .flatMap(e => e.missingContext)
      .filter(unique)
  };
}
```

### フェーズ4: LOOP

洗練された基準で繰り返す(最大3サイクル):

```javascript
async function iterativeRetrieve(task, maxCycles = 3) {
  let query = createInitialQuery(task);
  let bestContext = [];

  for (let cycle = 0; cycle < maxCycles; cycle++) {
    const candidates = await retrieveFiles(query);
    const evaluation = evaluateRelevance(candidates, task);

    // 十分なコンテキストがあるか確認
    const highRelevance = evaluation.filter(e => e.relevance >= 0.7);
    if (highRelevance.length >= 3 && !hasCriticalGaps(evaluation)) {
      return highRelevance;
    }

    // 洗練して続行
    query = refineQuery(evaluation, query);
    bestContext = mergeContext(bestContext, highRelevance);
  }

  return bestContext;
}
```

## 実践例

### 例1: バグ修正コンテキスト

```
タスク: "認証トークン期限切れバグを修正"

サイクル1:
  DISPATCH: src/**で"token"、"auth"、"expiry"を検索
  EVALUATE: auth.ts(0.9)、tokens.ts(0.8)、user.ts(0.3)を発見
  REFINE: "refresh"、"jwt"キーワードを追加; user.tsを除外

サイクル2:
  DISPATCH: 洗練された用語で検索
  EVALUATE: session-manager.ts(0.95)、jwt-utils.ts(0.85)を発見
  REFINE: 十分なコンテキスト(2つの高関連性ファイル)

結果: auth.ts、tokens.ts、session-manager.ts、jwt-utils.ts
```

### 例2: 機能実装

```
タスク: "APIエンドポイントにレート制限を追加"

サイクル1:
  DISPATCH: routes/**で"rate"、"limit"、"api"を検索
  EVALUATE: マッチなし - コードベースは"throttle"用語を使用
  REFINE: "throttle"、"middleware"キーワードを追加

サイクル2:
  DISPATCH: 洗練された用語で検索
  EVALUATE: throttle.ts(0.9)、middleware/index.ts(0.7)を発見
  REFINE: ルーターパターンが必要

サイクル3:
  DISPATCH: "router"、"express"パターンを検索
  EVALUATE: router-setup.ts(0.8)を発見
  REFINE: 十分なコンテキスト

結果: throttle.ts、middleware/index.ts、router-setup.ts
```

## エージェントとの統合

エージェントプロンプトで使用:

```markdown
このタスクのコンテキストを取得する際:
1. 広範なキーワード検索から開始
2. 各ファイルの関連性を評価(0-1スケール)
3. まだ不足しているコンテキストを特定
4. 検索基準を洗練して繰り返す(最大3サイクル)
5. 関連性が0.7以上のファイルを返す
```

## ベストプラクティス

1. **広く開始し、段階的に絞る** - 初期クエリで過度に指定しない
2. **コードベースの用語を学ぶ** - 最初のサイクルでしばしば命名規則が明らかになる
3. **不足しているものを追跡** - 明示的なギャップ識別が洗練を促進
4. **「十分に良い」で停止** - 3つの高関連性ファイルは10個の平凡なファイルより優れている
5. **確信を持って除外** - 低関連性ファイルは関連性を持つようにならない

## 関連項目

- [The Longform Guide](https://x.com/affaanmustafa/status/2014040193557471352) - サブエージェントオーケストレーションセクション
- `continuous-learning`スキル - 時間とともに改善するパターン用
- `~/.claude/agents/`内のエージェント定義
