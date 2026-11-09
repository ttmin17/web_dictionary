---
slug: nexu-io-html-anything-next-src-lib-templates-skills-card-xiaohongshu
name: card-xiaohongshu
tagline: 小红书风格知识卡片, 多张联排可滑动浏览
summary: '【模板: 小红书图文卡片】 - 输出 N 张连续卡片, 每张 w-[1080px] h-[1440px], 用 flex
  纵向排列方便整体截图也方便单张截图。N 由【用户内容】信息量决定: 短内容 3-6 张起步, 长内容应更多 (小红书平台单帖最多 18 图, 通常 9
  张以内最佳); 一张卡只承载一个核心观点。 - 第一张是封面: 巨大的标题 + 1 行副标题 + 一个吸引人的标签 (类似 "干货预警" /
  "建议收藏")。...'
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
  subpath: next/src/lib/templates/skills/card-xiaohongshu
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
  path: next/src/lib/templates/skills/card-xiaohongshu/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:49.667Z
  truncated: false
type: agent_skill
skill:
  skill_name: card-xiaohongshu
  description: 小红书风格知识卡片, 多张联排可滑动浏览
  folder_path: next/src/lib/templates/skills/card-xiaohongshu
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

【模板: 小红书图文卡片】
- 输出 N 张连续卡片, 每张 `w-[1080px] h-[1440px]`, 用 flex 纵向排列方便整体截图也方便单张截图。N 由【用户内容】信息量决定: 短内容 3-6 张起步, 长内容应更多 (小红书平台单帖最多 18 图, 通常 9 张以内最佳); 一张卡只承载一个核心观点。
- 第一张是封面: 巨大的标题 + 1 行副标题 + 一个吸引人的标签 (类似 "干货预警" / "建议收藏")。
- 中间几张展开正文, 每张一个核心观点, 配 emoji + 短句 + 1-2 个例子。
- 最后一张是总结 + 行动号召 (关注 / 收藏 / 评论)。
- 配色: 选择柔和的莫兰迪色或粉色系; 元素圆润, 大量留白。
- 字号大、行距宽、对比强（小红书在手机上看, 小字根本看不清）。
- 每张卡片右下角小水印 (作者名 / 日期)。
