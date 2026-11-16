---
slug: nexu-io-openmotion-skills-openmotion-production
name: production
tagline: 执行 OpenMotion 已有工程在既定创作决定下的局部修改、素材或音轨替换、预览、技术排错、导出与交付。重新设计叙事、动作或声画关系使用
  openmotion-director；已有模板出片走 openmotion-template-to-video，参考作品复刻走
  openmotion-rec
summary: 在已确认的创作决定下完成工程操作与约定交付，恢复已有工程和保持项，检查受影响内容与实际产物。详细方法由共享规范提供，本入口负责通用工程任务的接入。
categories:
  - security-auth
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
  subpath: skills/openmotion-production
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
  path: skills/openmotion-production/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:13.640Z
  truncated: false
type: agent_skill
skill:
  skill_name: production
  description: 执行 OpenMotion
    已有工程在既定创作决定下的局部修改、素材或音轨替换、预览、技术排错、导出与交付。重新设计叙事、动作或声画关系使用
    openmotion-director；已有模板出片走 openmotion-template-to-video，参考作品复刻走
    openmotion-recreate，视频转可复用模板走 openmotion-video-to-template。仓库开发与文档维护不触发影片制作。
  folder_path: skills/openmotion-production
  extra_files:
    - agents/openai.yaml
    - fonts/catalog.json
    - references/context.md
    - references/edit.md
    - references/fonts.md
    - references/intake.md
    - references/materials.md
    - references/media-providers/account.md
    - references/media-providers/atlascloud.md
    - references/media-providers/compatible.md
  pack_total_skills: 11
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nexu-io-openmotion
---

# OpenMotion Production
## 职责与目标

在已确认的创作决定下完成工程操作与约定交付，恢复已有工程和保持项，检查受影响内容与实际产物。详细方法由共享规范提供，本入口负责通用工程任务的接入。

Agent 根据本轮意图选择入口，专业任务可直接进入对应 Skill。项目源自模板或复刻，不决定后续每轮的入口；同一个 Agent 复用工程与决定继续执行。

## 1. 恢复本轮范围

读取 [共享上下文](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-production/references/context.md)，复用已有简报、素材、工程、授权与仍可用的已读正文。恢复当前阶段、保持项和已完成操作，按本轮任务补齐依赖。续作状态来自会话、已有记录与实际工程；只读过入口不代表已恢复状态。

本入口适用于在已有可编辑工程中按确定要求改文字、颜色或局部时间，替换已选素材/音乐、调音量，打开预览、技术检查、工程排错及仅导出。只有成片文件或链接、没有对应可编辑工程时，进入 openmotion-recreate；不能直接把 MP4 当成可编辑工程。需要新的叙事、动作或声画编排时，按下方专业导航进入对应范围；局部创作只展开受影响内容。

## 2. 工程操作与交付

1. 修改已有内容时读取 [共享修改流程](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-production/references/edit.md)，确定变化、保持项及连带影响；仅查询、预览、审查或导出按本轮范围执行。
2. Existing-project content edits apply the [continuing-edit preview rules](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-production/references/native.md#continuing-edits) after the final video is ready to preview, including scoped engineering work. Intermediate generation/editing must not mount a chat video component or pull up the editor. Preserve the current chat by default; queue its latest preview while inactive and inspect it on return. Only an explicit show-now request permits switching back for this turn. 操作工程前读取 [运行规范](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-production/references/production.md)；编写原生内容前另读 [Native authoring](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-production/references/native.md) 及工具返回的固定版本引擎指南。确认 projectId、最新 revision 与 currentVersionId，复用已完成操作。
3. 需要选择、获取或替换素材时读取 [共享素材规范](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-production/references/materials.md)；按共享上下文补齐其他受影响的质量规范。换现成音乐、调音量也需核对声画锚点与原有 SFX；画面锁定时保持视觉内容。补读结果先返回模型，后续调用再执行依赖操作。
4. 检查受影响区间、接点和保持项。需要新渲染的导出或成片交付读取 [验证](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-production/references/verification.md)，针对已审查 revision/versionId 导出，已有适用任务先查询并复用；模板出片按专业入口在编辑器中核验，需要导出时检查实际 MP4。技术通过与创作品质、正常播放及试听分别记录。
5. 停在用户要求的方案、预览、工程或成片阶段。交付实际结果、检查与必要限制。编辑器中打开的工程就是交付物，只有用户明确要 MP4、视频文件、下载或导出时才附 MP4。

## 专业导航与旧调用兼容

以下导航供尚未选定入口或旧 `production/start` 调用使用；明确的专业任务直接进入对应入口。通用工程任务无需为补齐质量规范重新启动专业创作流程。

| 本轮任务 | 进入范围 |
| --- | --- |
| 原创新片、动态图形、创作方案、大幅重编叙事 | [openmotion-director](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-production/../openmotion-director/SKILL.md) |
| 重新设计局部动作、节奏、声音叙事，或评价创作品质 | openmotion-director 的局部创作／审片范围；即使画面锁定，也可仅设计声音 |
| 使用已选可编辑模板或源码适配内容 | [openmotion-template-to-video](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-production/../openmotion-template-to-video/SKILL.md)，保留原样交付与内容适配实现 |
| 明确要求把参考视频重建为可复用模板文件夹或 ZIP | [openmotion-video-to-template](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-production/../openmotion-video-to-template/SKILL.md) |
| 根据实际视频重建本次作品；只有成片文件/链接、没有对应可编辑工程时，即使只改几处字 | [openmotion-recreate](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-production/../openmotion-recreate/SKILL.md)，沿用已有复刻方法与数字测量 |
| 参考视频只提供风格灵感 | openmotion-director |
| 接受安装后的首次体验邀请 | openmotion-template-to-video；沿用本次邀请中用户接受的准确模板 ID、原生时长、独立工程及可编辑预览；三候选的“是”先澄清 |

模糊需求结合用户目标和已有素材判断；只补充影响选路或真实性的关键缺口。链接与文件是输入形式，不自动等于复刻。模板来源与精确 ID 按 [模板能力说明](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-production/references/templates.md) 核对；原创新片需要补齐简报时使用 [需求与记录](https://github.com/nexu-io/openmotion/blob/main/skills/openmotion-production/references/intake.md)。

## 本地与 MCP 同源

相对链接按本文件位置解析。MCP-only 通过 resources/list 发现、resources/read 读取同源正文：本入口为 `openmotion://workflow/production/start`；共享页使用 production 的 context、edit、production、native、verification、templates、intake、portable；专业入口短 ID 为 director、template、recreate、video-to-template，各读 start。固定引擎指南为 `openmotion://engine/SKILL.md`。

既有 workflow 短 ID 和共享文档路径保持兼容，旧默认 production/start 仍能导航到专业入口；一期不提供独立工作流读取 Tool。返回的 references 提供准确地址；用 documentId/contentHash 识别版本，仅复用实际读过且仍在上下文的完整正文。读取指导不启动服务、不改工程，也不证明实际执行合规。
