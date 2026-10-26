---
slug: nexu-io-html-anything-next-src-lib-templates-skills-article-magazine
name: article-magazine
tagline: Agent skill from nexu-io/html-anything
summary: Agent skill from nexu-io/html-anything
categories:
  - media-creative
tags:
  - agent-skills
  - agentic
  - ai-agents
  - ai-design
status: active
quality_percentile: 58
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: nexu-io/html-anything
  subpath: next/src/lib/templates/skills/article-magazine
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9246
  last_commit: 2026-10-13T02:33:42Z
  stars_delta_7d: 73
  stars_growth_pct: 0.8
  trending_score: 73.58
  rank_current: 91
  rank_delta: -16
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9099
    - 9173
    - 9246
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nexu-io/html-anything
  path: next/src/lib/templates/skills/article-magazine/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:59.805Z
  truncated: false
type: agent_skill
skill:
  skill_name: article-magazine
  description: Agent skill from nexu-io/html-anything
  folder_path: next/src/lib/templates/skills/article-magazine
  extra_files:
    - example.html
    - example.md
  pack_total_skills: 81
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nexu-io-html-anything
---

【模板: 杂志文章】
- 顶部 hero: 大标题 (text-5xl/6xl) + 可选副标题 + 作者 / 阅读时间 / 日期元数据。
- 正文: 单栏, 最大宽度约 700px, 居中。段落 `text-lg leading-relaxed text-neutral-700 dark:text-neutral-300`。
- H2 / H3 标题用 serif 字体, 让正文与标题有视觉对比。
- 引用块使用左侧粗 accent 色边线 + 斜体。
- 代码块: 圆角 + 深色背景 + 浅色文字, 显示语言标签。
- 列表项使用自定义 bullet（小方块 / accent 圆点）。
- 章节之间用 `<hr>` 分隔, 但样式做成中央居中的小 ornament。
- 文末加一个简单的 "如果觉得有用，欢迎转发" 行动卡片。
