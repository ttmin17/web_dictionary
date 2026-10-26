---
slug: affaan-m-ecc-docs-ja-jp-skills-remotion-video-creation
name: remotion-video-creation
tagline: Remotion のベストプラクティス - React
  で動画を作成する。3D、アニメーション、音声、字幕、チャート、トランジションなどをカバーするドメイン固有の29のルール。
summary: Remotion のコードを扱い、ドメイン固有の知識が必要な場合にこのスキルを使用してください。
categories:
  - media-creative
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
  subpath: docs/ja-JP/skills/remotion-video-creation
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
  path: docs/ja-JP/skills/remotion-video-creation/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.019Z
  truncated: false
type: agent_skill
skill:
  skill_name: remotion-video-creation
  description: Remotion のベストプラクティス - React
    で動画を作成する。3D、アニメーション、音声、字幕、チャート、トランジションなどをカバーするドメイン固有の29のルール。
  folder_path: docs/ja-JP/skills/remotion-video-creation
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

## 使用場面

Remotion のコードを扱い、ドメイン固有の知識が必要な場合にこのスキルを使用してください。

## 使い方

詳細な説明とコード例については、各ルールファイルをお読みください：

* [rules/3d.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/3d.md) - Three.js と React Three Fiber を使用して Remotion で 3D コンテンツを作成する
* [rules/animations.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/animations.md) - Remotion の基本的なアニメーションスキル
* [rules/assets.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/assets.md) - Remotion で画像、動画、音声、フォントをインポートする
* [rules/audio.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/audio.md) - Remotion での音声とサウンドの使用——インポート、トリミング、音量、速度、ピッチ
* [rules/calculate-metadata.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/calculate-metadata.md) - コンポジションの長さ、サイズ、プロパティを動的に設定する
* [rules/can-decode.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/can-decode.md) - Mediabunny を使用してブラウザが動画をデコードできるか確認する
* [rules/charts.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/charts.md) - Remotion のチャートとデータビジュアライゼーションパターン
* [rules/compositions.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/compositions.md) - コンポジション、静止画、フォルダー、デフォルトプロパティ、動的メタデータの定義
* [rules/display-captions.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/display-captions.md) - TikTok スタイルのページと単語ハイライトに対応した Remotion での字幕表示
* [rules/extract-frames.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/extract-frames.md) - Mediabunny を使用して指定タイムスタンプの動画フレームを抽出する
* [rules/fonts.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/fonts.md) - Remotion で Google フォントとローカルフォントを読み込む
* [rules/get-audio-duration.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/get-audio-duration.md) - Mediabunny を使用して音声ファイルの長さ（秒）を取得する
* [rules/get-video-dimensions.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/get-video-dimensions.md) - Mediabunny を使用して動画ファイルの幅と高さを取得する
* [rules/get-video-duration.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/get-video-duration.md) - Mediabunny を使用して動画ファイルの長さ（秒）を取得する
* [rules/gifs.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/gifs.md) - Remotion のタイムラインと同期した GIF を表示する
* [rules/images.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/images.md) - Img コンポーネントを使用して Remotion に画像を埋め込む
* [rules/import-srt-captions.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/import-srt-captions.md) - @remotion/captions を使用して .srt 字幕ファイルを Remotion にインポートする
* [rules/lottie.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/lottie.md) - Remotion に Lottie アニメーションを埋め込む
* [rules/measuring-dom-nodes.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/measuring-dom-nodes.md) - Remotion で DOM 要素のサイズを測定する
* [rules/measuring-text.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/measuring-text.md) - テキストサイズの測定、コンテナへのテキスト適合、オーバーフローの確認
* [rules/sequencing.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/sequencing.md) - Remotion のシーケンスパターン——遅延、トリミング、項目の長さ制限
* [rules/tailwind.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/tailwind.md) - Remotion で TailwindCSS を使用する
* [rules/text-animations.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/text-animations.md) - Remotion のタイポグラフィとテキストアニメーションパターン
* [rules/timing.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/timing.md) - Remotion の補間曲線——線形、イージング、スプリングアニメーション
* [rules/transcribe-captions.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/transcribe-captions.md) - Remotion で字幕を生成するための音声文字起こし
* [rules/transitions.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/transitions.md) - Remotion のシーントランジションパターン
* [rules/trimming.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/trimming.md) - Remotion のトリミングパターン——アニメーションの最初または最後をトリミングする
* [rules/videos.md](https://github.com/affaan-m/ECC/blob/main/docs/ja-JP/skills/remotion-video-creation/rules/videos.md) - Remotion への動画埋め込み——トリミング、音量、速度、ループ、ピッチ
