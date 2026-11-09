---
slug: nexu-io-html-anything-next-src-lib-templates-skills-deck-guizang-editorial
name: deck-guizang-editorial
tagline: 电子杂志 × 电子墨水; 10 个版面 + 5 套调色板 (墨水/靛蓝瓷/森林墨/牛皮纸/沙丘)
summary: "【模板: 贵赞编辑墨水 Deck (Editorial × E-Ink)】 【意图】叙事、观点、分享、个人风格表达。墨纸印刷感,
  不要科技感。Inspired by op7418/guizang-ppt-skill Style A。"
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
  subpath: next/src/lib/templates/skills/deck-guizang-editorial
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
  path: next/src/lib/templates/skills/deck-guizang-editorial/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:49.667Z
  truncated: false
type: agent_skill
skill:
  skill_name: deck-guizang-editorial
  description: 电子杂志 × 电子墨水; 10 个版面 + 5 套调色板 (墨水/靛蓝瓷/森林墨/牛皮纸/沙丘)
  folder_path: next/src/lib/templates/skills/deck-guizang-editorial
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

【模板: 贵赞编辑墨水 Deck (Editorial × E-Ink)】
【意图】叙事、观点、分享、个人风格表达。墨纸印刷感, 不要科技感。Inspired by op7418/guizang-ppt-skill Style A。

【调色板 — 5 选 1, 严禁改 hex、严禁混用】
- 🖋 **墨水经典 Monocle** — ink `#0a0a0b`, paper `#f1efea`, paper-tint `#e8e5de`, ink-tint `#18181a`. 默认 / 通用商业 / 科技。
- 🌊 **靛蓝瓷 Indigo Porcelain** — ink `#0a1f3d`, paper `#f1f3f5`, paper-tint `#e4e8ec`, ink-tint `#152a4a`. 科技 / 研究 / 数据。
- 🌿 **森林墨 Forest Ink** — ink `#1a2e1f`, paper `#f5f1e8`, paper-tint `#ece7da`, ink-tint `#253d2c`. 自然 / 可持续 / 文化。
- 🍂 **牛皮纸 Kraft Paper** — ink `#2a1e13`, paper `#eedfc7`, paper-tint `#e0d0b6`, ink-tint `#3a2a1d`. 怀旧 / 人文 / 文学。
- 🌙 **沙丘 Dune** — ink `#1f1a14`, paper `#f0e6d2`, paper-tint `#e3d7bf`, ink-tint `#2d2620`. 艺术 / 设计 / 时尚。

【布局 — 10 个磁带式版式池, 可复用; **数量由【用户内容】决定**, 完整覆盖每个要点; 短内容 6-12 张起步, 长内容应更多 (同一版式可在不同章节重复使用)】
- **L01 Hero Cover** — 居中大字 hero typography + kicker + subtitle + lead paragraph + 底部元数据 row。
- **L02 Act Divider** — kicker + 8.5-10vw 巨大 headline + 一句引言; 章节切换可反色 (ink ↔ paper)。
- **L03 Big Numbers Grid** — 3×2 数据卡 (label / 大数字 / 注释)。
- **L04 Quote + Image** — 左 kicker + headline + body + callout; 右 16:10 图 (基线对齐 baseline 不是 top)。
- **L05 Image Grid** — 3×2 或 3×1 等高图网格 (26vh 或 22vh); 严格统一高度。
- **L06 Pipeline / Flow** — 横向编号步骤组, 每步: №X + 标题 + 描述; 支持键盘逐步推进。
- **L07 Hero Question** — 7vw 全屏单一问句, 按语义断行, 周围极简。
- **L08 Big Quote** — 5.8vw 巨大衬线引文 + 英文翻译 + 署名 + 日期。
- **L09 Before / After** — 1:1 split; 左列 opacity .55 (旧/before); 右列 full brightness (新/after)。
- **L10 Mixed Media** — 8:4 比例; 左大段文字 (kicker / headline / body / callout) + 右 3:4 竖图作辅助。

【设计细节】
- **严禁**: 渐变 / drop-shadow / 圆角 / 圆形装饰 / blur / SVG 图标库 / emoji 装饰。
- **字体**: Display 用 `Playfair Display` (英) / `Noto Serif SC` (中); Body 用 `Inter` / `Noto Sans SC`; 编号 / 数字偶尔可用 italic 衬线。
- **杂志感细节**: kicker 用 11px uppercase letterspacing 0.12em; folio 右下角 `01 / 12`; 顶部细 hairline rule + 期刊 logo / topic。
- **不许**: 数据捏造、Lorem ipsum、占位图片 URL。所有图请用纯 CSS / SVG 内联描绘 (色块 + 简笔)。
- 键盘 ← / → 切换; hash 同步; 单文件 HTML。
