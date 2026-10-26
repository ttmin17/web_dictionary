---
slug: nexu-io-html-anything-next-src-lib-templates-skills-blog-post
name: blog-post
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
  subpath: next/src/lib/templates/skills/blog-post
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9246
  last_commit: 2026-10-13T02:33:42Z
  stars_delta_7d: 73
  stars_growth_pct: 0.8
  trending_score: 73.58
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
  path: next/src/lib/templates/skills/blog-post/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:59.805Z
  truncated: false
type: agent_skill
skill:
  skill_name: blog-post
  description: Agent skill from nexu-io/html-anything
  folder_path: next/src/lib/templates/skills/blog-post
  extra_files:
    - example.html
  pack_total_skills: 81
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nexu-io-html-anything
---

【模板: 博客长文 / Blog Post】
【意图】≥ 600 字的真正的长文章, 排版以 typography 为主, 70% 文字 20% 图 10% chrome。
【布局】
- Masthead (publication name + date)
- Hero (大标题 + 副标 + 作者署名 + 阅读时间)
- 正文 (单栏 65ch, 含 figures, pull quotes, 行内引用)
- Author bio 卡片
- Related posts (3 张卡)
【设计细节】
- Pull quote 用大号 serif 斜体 + 左侧色条
- Figures 自带 caption (italic, smaller)
- 代码块: 圆角 + 深色 + 语言标签
