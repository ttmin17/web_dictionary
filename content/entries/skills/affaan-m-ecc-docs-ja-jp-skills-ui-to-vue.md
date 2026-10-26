---
slug: affaan-m-ecc-docs-ja-jp-skills-ui-to-vue
name: ui-to-vue
tagline: UIスクリーンショットやデザインエクスポートをVue 3コンポーネントに一括変換する際に使用。Vant、Element Plus、Ant
  Design Vueに対応。
summary: "- ユーザーがデザインスクリーンショットまたはデザインエクスポート画像のディレクトリを提供するとき。 - ターゲットアプリケーションがVue
  3のとき。 - ユーザーがページコンポーネント、共有コンポーネント、ルーター配線の最初の変換を希望するとき。 - ユーザーがVant、Element
  Plus、またはAnt Design Vueをコンポーネントライブラリとして指定するとき。"
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
  subpath: docs/ja-JP/skills/ui-to-vue
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
  path: docs/ja-JP/skills/ui-to-vue/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.024Z
  truncated: false
type: agent_skill
skill:
  skill_name: ui-to-vue
  description: UIスクリーンショットやデザインエクスポートをVue 3コンポーネントに一括変換する際に使用。Vant、Element
    Plus、Ant Design Vueに対応。
  folder_path: docs/ja-JP/skills/ui-to-vue
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# UI To Vue
UIデザインのスクリーンショットをVue 3 Composition APIコンポーネントコードに一括変換します。

## 使用するタイミング

- ユーザーがデザインスクリーンショットまたはデザインエクスポート画像のディレクトリを提供するとき。
- ターゲットアプリケーションがVue 3のとき。
- ユーザーがページコンポーネント、共有コンポーネント、ルーター配線の最初の変換を希望するとき。
- ユーザーがVant、Element Plus、またはAnt Design Vueをコンポーネントライブラリとして指定するとき。

## 使用しないタイミング

- ユーザーがスクリーンショット1枚のみで、特定のコンポーネントを希望するとき。
- ターゲットプロジェクトがVueでないとき。
- デザインが詳細なインタラクションロジック、データフロー、またはアクセシビリティレビューを必要とするとき。
- スクリーンショットに外部モデルAPIに送信できないプライベートな顧客データが含まれるとき。

## 入力

モジュールとページ状態でスクリーンショットをグループ化したディレクトリを入力として使用します。

サポートされている切り出し画像ディレクトリ名：`assets`、`icons`、`sprites`、`cut`、`images`、`cut-images`。

## 変換モデル

- ページグループ化：リスト、詳細、フォーム、ローディング、または空の状態を表す関連スクリーンショットを1つのページコンポーネントにまとめる。
- UIライブラリマッピング：可能な限りネイティブのビジュアル要素をVant、Element Plus、またはAnt Design Vueコンポーネントにマッピングする。
- 切り出し画像の優先順位：ページレベルのアセットを優先し、次にモジュールレベル、最後にグローバル共有アセット。
- コンポーネント抽出：繰り返し使われるUIリージョンが2回以上現れる場合は共有コンポーネントに抽出する。

## CLI使用方法

グローバルバイナリに依存せず、ドキュメントに記載されたコマンドが機能するように `npx` でコンバーターを実行します：

```bash
export DASHSCOPE_API_KEY=your_key
npx ui-to-vue-converter@1.0.2 --input ./screenshots --ui vant --output ./src
```

## オプション

| オプション | 説明 | デフォルト |
| --- | --- | --- |
| `--input` | デザイン画像ディレクトリ | `./screenshots` |
| `--ui` | UIライブラリ：`vant`、`element-plus`、または `antd-vue` | `vant` |
| `--output` | 出力ディレクトリ | `./src` |
| `--config` | 設定ファイルのパス | `./.ui-to-vue.config.json` |

## セキュリティとプライバシー

- デザインスクリーンショットを外部モデルAPIに送信される可能性があるソース素材として扱う。
- 許可なくプライベートな顧客デザインでこのフローを実行しないこと。
- 再現可能なワークフローでは `@latest` の代わりにコンバーターのバージョンを固定すること。
- コミット前に生成されたVueコードをレビューすること。
- `.ui-to-vue.config.json`、APIキー、生成されたシークレット、または顧客スクリーンショットをコミットしないこと。

## 出力レビューチェックリスト

- [ ] ページコンポーネントが `views/` または選択した出力ディレクトリの下に生成された。
- [ ] 繰り返しのUIリージョンが再利用が明確な場合のみ `components/` に抽出された。
- [ ] ルーター出力がターゲットプロジェクトのルータースタイルと互換性がある。
- [ ] 生成されたコンポーネントが要求したUIライブラリを一貫して使用している。
- [ ] 生成されたCSSのユニットがデザインのベースラインと一致している。
- [ ] コードがプロジェクトのフォーマッター、リンター、型チェッカー、ビルドをパスする。
- [ ] プレースホルダーのコピー、モックデータ、生成されたアセットをコミット前にレビューした。

## トラブルシューティング

| 問題 | 確認事項 |
| --- | --- |
| `401` または認証エラー | コマンドを実行するシェルで `DASHSCOPE_API_KEY` が設定されていることを確認する。 |
| `command not found: ui-to-vue` | `npx ui-to-vue-converter@1.0.2` の形式を使用するか、パッケージをグローバルインストールする。 |
| 切り出し画像が無視される | アセットディレクトリ名がサポートされており、対応するページまたはモジュールの下にネストされていることを確認する。 |
| コンポーネントが要求されたUIライブラリを無視する | 明示的な `--ui` 値で再実行して、生成されたインポートを確認する。 |
| 生成されたレイアウトの寸法がおかしい | スクリーンショットのエクスポート幅がターゲットライブラリのベースラインと一致していることを確認する。 |

## リファレンス

- npmパッケージ：`ui-to-vue-converter`
