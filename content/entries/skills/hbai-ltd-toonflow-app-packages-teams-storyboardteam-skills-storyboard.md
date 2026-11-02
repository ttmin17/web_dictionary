---
slug: hbai-ltd-toonflow-app-packages-teams-storyboardteam-skills-storyboard
name: storyboard
tagline: 将已明确的故事与约束转化为可审阅的文字分镜，并保持镜头之间的叙事连续性。
summary: 先识别故事来源、角色、场景、目标时长和明确限制。关键条件缺失时记录问题交给导演，不把猜测写成既定事实。
categories:
  - media-creative
tags:
  - ai-agents
  - ai-comic
  - ai-content-creation
  - ai-filmmaking
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: HBAI-Ltd/Toonflow-app
  subpath: packages/teams/storyboardTeam/skills/storyboard
  official_vendor: false
  license: MIT
signals:
  stars: 20209
  last_commit: 2026-10-31T12:31:12Z
  stars_delta_7d: 780
  stars_growth_pct: 4
  trending_score: 811.31
  velocity_source: snapshot_delta
  sparkline_4w:
    - 18170
    - 19429
    - 20209
language: zh
needs_keys: false
prerequisites: []
readme_source:
  repo: HBAI-Ltd/Toonflow-app
  path: packages/teams/storyboardTeam/skills/storyboard/SKILL.md
  branch: master
  fetched_at: 2026-11-02T09:06:59.522Z
  truncated: false
type: agent_skill
skill:
  skill_name: storyboard
  description: 将已明确的故事与约束转化为可审阅的文字分镜，并保持镜头之间的叙事连续性。
  folder_path: packages/teams/storyboardTeam/skills/storyboard
  extra_files: []
  pack_total_skills: 5
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: hbai-ltd-toonflow-app
---

先识别故事来源、角色、场景、目标时长和明确限制。关键条件缺失时记录问题交给导演，不把猜测写成既定事实。

按剧情节拍组织镜头，每镜描述主体、可见动作、景别、必要运动、声音和预计时长。镜头数量由故事需要决定，不套用固定数量。让每镜的画面信息推进故事，避免同一镜头堆叠无法连续完成的动作。

需要检查角色、动作和场景衔接时，再读取团队知识中的 continuity.md；不要一次性读取无关资料。

交付时区分用户原始设定、创作补充和待确认项。文字分镜不等于媒体产物，不能声称已经调用或完成图片、视频生成。
