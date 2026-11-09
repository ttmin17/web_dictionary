---
slug: nexu-io-html-anything-next-src-lib-templates-skills-data-report
name: data-report
tagline: 把 CSV/Excel/JSON 数据转成漂亮的可视化报告页
summary: "【模板: 数据可视化报告】 - 头部: 报告标题 + 时间区间 + 数据来源说明。 - KPI 卡片网格: 3-5 个最重要指标,
  每个卡片显示数值 + 同比变化 + 微型趋势线。 - 主图表区: 至少 2 个图表 (柱状 / 折线 / 饼 / 散点), 使用 Chart.js 或
  ECharts (jsdelivr CDN 引入), 数据从用户输入解析得到。 - 图表容器必须有固定高度: 每个 外层包一个 (KPI 迷你图
  40..."
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
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: nexu-io/html-anything
  subpath: next/src/lib/templates/skills/data-report
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
  path: next/src/lib/templates/skills/data-report/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:49.667Z
  truncated: false
type: agent_skill
skill:
  skill_name: data-report
  description: 把 CSV/Excel/JSON 数据转成漂亮的可视化报告页
  folder_path: next/src/lib/templates/skills/data-report
  extra_files:
    - example.html
    - example.md
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nexu-io-html-anything
---

【模板: 数据可视化报告】
- 头部: 报告标题 + 时间区间 + 数据来源说明。
- KPI 卡片网格: 3-5 个最重要指标, 每个卡片显示数值 + 同比变化 + 微型趋势线。
- 主图表区: 至少 2 个图表 (柱状 / 折线 / 饼 / 散点), 使用 Chart.js 或 ECharts (jsdelivr CDN 引入), 数据从用户输入解析得到。
- **图表容器必须有固定高度**: 每个 `<canvas>` 外层包一个 `<div style="position:relative;height:NNNpx">` (KPI 迷你图 ~40px, 主图表 ~240–280px)。Chart.js 用 `responsive:true, maintainAspectRatio:false` 时若父容器没有显式高度, 会陷入 ResizeObserver 死循环, 图表无限增高直至卡死浏览器。**绝对不要**直接给 canvas 写 `height=` 属性当布局, 那个只是初始值。
- 数据表格: 用户原始数据节选, 使用 `<table>` + 现代化样式 (zebra stripe, hover, sticky header)。
- 洞察块: 3-5 条文字洞察, 用 emoji 开头, 像产品周报。
- 底部"方法论"折叠区。
- 配色克制专业: 主色 1 + 中性色阶, 图表用调色板。
- **必须解析用户提供的实际数据**, 不要捏造。
