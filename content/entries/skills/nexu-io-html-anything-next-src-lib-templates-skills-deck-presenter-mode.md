---
slug: nexu-io-html-anything-next-src-lib-templates-skills-deck-presenter-mode
name: deck-presenter-mode
tagline: tokyo-night 默认主题, T 切换 5 主题, S 打开提词器 popup
summary: "【模板: Presenter Mode Deck】 【意图】怕忘词的演讲者专用 deck, 含逐字稿 notes 与 popup
  teleprompter。 【布局】 - 每页 + 150-300 字稿 - 右下小 toolbar: T 切主题 / S 打开 popup -
  Popup: CURRENT / NEXT / SCRIPT / TIMER 四张磁吸卡 【设计细节】 - 默认 tokyo-night; 共 5 套主题
  (..."
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
  subpath: next/src/lib/templates/skills/deck-presenter-mode
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
  path: next/src/lib/templates/skills/deck-presenter-mode/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:49.668Z
  truncated: false
type: agent_skill
skill:
  skill_name: deck-presenter-mode
  description: tokyo-night 默认主题, T 切换 5 主题, S 打开提词器 popup
  folder_path: next/src/lib/templates/skills/deck-presenter-mode
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

【模板: Presenter Mode Deck】
【意图】怕忘词的演讲者专用 deck, 含逐字稿 notes 与 popup teleprompter。
【布局】
- 每页 + `<aside class="notes">` 150-300 字稿
- 右下小 toolbar: T 切主题 / S 打开 popup
- Popup: CURRENT / NEXT / SCRIPT / TIMER 四张磁吸卡
【设计细节】
- 默认 tokyo-night; 共 5 套主题 (含 light)
