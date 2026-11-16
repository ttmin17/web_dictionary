---
slug: nexu-io-openmotion-skills-openmotion-reference-video
name: reference-video
tagline: OpenMotion 原生 Hyperframes 编写的兼容入口，供旧引用继续使用。新的视频任务按本轮意图进入相应专业
  Skill，工程操作复用 openmotion-production；本入口不承担专门的视频复刻分析。
summary: 直接读取 共享上下文、运行规范 和 Native authoring，继续当前阶段，不返回总入口重做需求或选模板。托管工程通过
  openmotioneditproject 写入，须携带 projectId、requestId、expectedRevision 和
  expectedVersionId；导出按 验证 检查实际文件。
categories:
  - media-creative
tags:
  - agent-skills
  - ai-agents
  - ai-video
  - byok
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-11-16
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: nexu-io/openmotion
  subpath: skills/openmotion-reference-video
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 10016
  last_commit: 2026-11-16T09:11:52Z
  stars_delta_7d: 371
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 10016
language: zh
needs_keys: false
prerequisites: []
readme_source:
  repo: nexu-io/openmotion
  path: skills/openmotion-reference-video/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:13.640Z
  truncated: false
type: agent_skill
skill:
  skill_name: reference-video
  description: OpenMotion 原生 Hyperframes 编写的兼容入口，供旧引用继续使用。新的视频任务按本轮意图进入相应专业
    Skill，工程操作复用 openmotion-production；本入口不承担专门的视频复刻分析。
  folder_path: skills/openmotion-reference-video
  extra_files:
    - agents/openai.yaml
  pack_total_skills: 11
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nexu-io-openmotion
---

# OpenMotion Native Authoring — compatibility entry
本入口负责将旧引用接入共享原生编写规范，目标是让已有任务在同一工程与阶段继续执行。

直接读取 [共享上下文](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-reference-video/../openmotion-production/references/context.md)、[运行规范](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-reference-video/../openmotion-production/references/production.md) 和 [Native authoring](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-reference-video/../openmotion-production/references/native.md)，继续当前阶段，不返回总入口重做需求或选模板。托管工程通过 `openmotion_edit_project` 写入，须携带 projectId、requestId、expectedRevision 和 expectedVersionId；导出按 [验证](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-reference-video/../openmotion-production/references/verification.md) 检查实际文件。

需要选择、获取或替换素材时，按 [共享素材规范](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-reference-video/../openmotion-production/references/materials.md) 执行；仅查看、预览或导出沿用既有素材。

MCP-only 使用 resources/read `openmotion://workflow/production/native` 获取全文。此兼容入口不是新的复刻专业能力。
