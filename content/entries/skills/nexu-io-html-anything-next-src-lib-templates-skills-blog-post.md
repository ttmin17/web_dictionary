---
slug: nexu-io-html-anything-next-src-lib-templates-skills-blog-post
name: blog-post
tagline: 杂志感长文, 含 masthead、hero、figures、pull quote、作者署名
summary: "【模板: 博客长文 / Blog Post】 【意图】≥ 600 字的真正的长文章, 排版以 typography 为主, 70% 文字
  20% 图 10% chrome。 【布局】 - Masthead (publication name + date) - Hero (大标题 + 副标 +
  作者署名 + 阅读时间) - 正文 (单栏 65ch, 含 figures, pull quotes, 行内引用) - Author bi..."
categories:
  - media-creative
tags:
  - agent-skills
  - agentic
  - ai-agents
  - ai-design
status: active
quality_percentile: 70
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: nexu-io/html-anything
  subpath: next/src/lib/templates/skills/blog-post
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9478
  last_commit: 2026-11-09T09:21:19Z
  stars_delta_7d: 365
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 9173
    - 9246
    - 9478
language: zh
needs_keys: false
prerequisites: []
readme_source:
  repo: nexu-io/html-anything
  path: next/src/lib/templates/skills/blog-post/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:49.667Z
  truncated: false
type: agent_skill
skill:
  skill_name: blog-post
  description: 杂志感长文, 含 masthead、hero、figures、pull quote、作者署名
  folder_path: next/src/lib/templates/skills/blog-post
  extra_files:
    - example.html
  pack_total_skills: 25
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
