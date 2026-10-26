---
slug: affaan-m-ecc-docs-ja-jp-skills-dart-flutter-patterns
name: dart-flutter-patterns
tagline: 本番環境対応のDartおよびFlutterパターンは、null安全性、不変状態、非同期構成、ウィジェットアーキテクチャ、人気のある状態管理フレームワーク（BLoC、Riverpod、Provider）、GoRouterナビゲーション、Dioネットワーキング、Freezedコード生成、クリーンアーキテ
summary: 次の場合にこのスキルを使用： -
  新しいFlutter機能を開始し、状態管理、ナビゲーション、またはデータアクセスのイディオマティックパターンが必要 -
  Dartコードのレビューまたは作成とnull安全性、シール型、非同期構成のガイダンスが必要 -
  新しいFlutterプロジェクトをセットアップしBLoC、Riverpod、またはProviderのうち選択 -
  安全なHTTPクライアント、WebView統合、ローカルストレージを実...
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
  subpath: docs/ja-JP/skills/dart-flutter-patterns
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
  path: docs/ja-JP/skills/dart-flutter-patterns/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:08.009Z
  truncated: false
type: agent_skill
skill:
  skill_name: dart-flutter-patterns
  description: 本番環境対応のDartおよびFlutterパターンは、null安全性、不変状態、非同期構成、ウィジェットアーキテクチャ、人気のある状態管理フレームワーク（BLoC、Riverpod、Provider）、GoRouterナビゲーション、Dioネットワーキング、Freezedコード生成、クリーンアーキテクチャをカバー。
  folder_path: docs/ja-JP/skills/dart-flutter-patterns
  extra_files: []
  pack_total_skills: 312
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: affaan-m-ecc
---

# Dart/Flutterパターン
## 使用時期

次の場合にこのスキルを使用：
- 新しいFlutter機能を開始し、状態管理、ナビゲーション、またはデータアクセスのイディオマティックパターンが必要
- Dartコードのレビューまたは作成とnull安全性、シール型、非同期構成のガイダンスが必要
- 新しいFlutterプロジェクトをセットアップしBLoC、Riverpod、またはProviderのうち選択
- 安全なHTTPクライアント、WebView統合、ローカルストレージを実装
- FlutterウィジェットEt、Cubit、またはRiverpodプロバイダーのテストを作成
- GoRouterを認証ガードでワイヤリング

## 動作方法

このスキルは、懸念事項で整理されたコピーペーストの準備ができたDart/Flutterコードパターンを提供：
1. **Null安全性** — `!`を避ける、`?.`/`??`/パターンマッチングを好む
2. **不変状態** — シール型、`freezed`、`copyWith`
3. **非同期構成** — 並行`Future.wait`、`await`後の安全な`BuildContext`
4. **ウィジェットアーキテクチャ** — クラスに抽出（メソッドではなく）、`const`伝播、スコープ付きリビルド
5. **状態管理** — BLoC/Cubityベント、Riverpodノーティファイアおよび派生プロバイダー
6. **ナビゲーション** — `refreshListenable`経由の反応型認証ガード付きGoRouter
7. **ネットワーキング** — インターセプタ付きDio、ワンタイム再試行ガード付きトークンリフレッシュ
8. **エラーハンドリング** — グローバルキャプチャ、`ErrorWidget.builder`、crashlyticsワイヤリング
9. **テスト** — ユニット（BLoC test）、ウィジェット（ProviderScopeオーバーライド）、モック上のフェイク

## 例

```dart
// シール状態 — 不可能な状態を防止
sealed class AsyncState<T> {}
final class Loading<T> extends AsyncState<T> {}
final class Success<T> extends AsyncState<T> { final T data; const Success(this.data); }
final class Failure<T> extends AsyncState<T> { final Object error; const Failure(this.error); }

// 反応型認証リダイレクト付きGoRouter
final router = GoRouter(
  refreshListenable: GoRouterRefreshStream(authCubit.stream),
  redirect: (context, state) {
    final authed = context.read<AuthCubit>().state is AuthAuthenticated;
    if (!authed && !state.matchedLocation.startsWith('/login')) return '/login';
    return null;
  },
  routes: [...],
);
```

詳細については、ドキュメントを参照してください。
