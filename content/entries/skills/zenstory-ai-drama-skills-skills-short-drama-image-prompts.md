---
slug: zenstory-ai-drama-skills-skills-short-drama-image-prompts
name: short-drama-image-prompts
tagline: 为短剧人物、造型、地点、道具和状态编写或修改可直接复制的图片提示词
  Markdown。用户提到角色设定图、三视图、参考图、场景板、道具图、风格帧、Look
  Development、状态变体或局部编辑提示词时使用；不生成图片，也不调用供应商。
summary: "- 每项使用 ## IMG-... · 中文名（IMG-... 仅标识提示词条目，不代表已存在真实图片），下设一行 - 参考：。 -
  无外部参考时写 - 参考：无外部参考；绑定项目内真实图片时逐字使用 REF-（顺序：）· 《》（用途：；控制：；不得控制：）（多张用 ； 连接，顺序从 1
  连续编号；分镜挂图计划 PLAN-... 不能充当输入参考）。 - 正文标题固定为 ### 可复制提示词，每个非空行以 > 开头；说明文字跟随项..."
categories:
  - media-creative
tags:
  - agent-skills
  - ai-short-drama
  - ai-video
  - aigc
status: active
quality_percentile: 76
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: zenstory-ai/drama-skills
  subpath: skills/short-drama-image-prompts
  official_vendor: false
  license: MIT
signals:
  stars: 3980
  last_commit: 2026-11-08T04:37:02Z
  stars_delta_7d: 168
  stars_growth_pct: 4.4
  trending_score: 175.4
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3053
    - 3360
    - 3812
    - 3980
language: zh
needs_keys: false
prerequisites: []
readme_source:
  repo: zenstory-ai/drama-skills
  path: skills/short-drama-image-prompts/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:09.100Z
  truncated: false
type: agent_skill
skill:
  skill_name: short-drama-image-prompts
  description: 为短剧人物、造型、地点、道具和状态编写或修改可直接复制的图片提示词
    Markdown。用户提到角色设定图、三视图、参考图、场景板、道具图、风格帧、Look
    Development、状态变体或局部编辑提示词时使用；不生成图片，也不调用供应商。
  folder_path: skills/short-drama-image-prompts
  extra_files:
    - agents/openai.yaml
    - references/character-and-look.md
    - references/common-recipe.md
    - references/edit-and-revision.md
    - references/location-plate.md
    - references/look-and-state-variant.md
    - references/lookdev-frame.md
    - references/production-sheet-recipes.md
    - references/prop-plate.md
    - references/review-and-fixtures.md
  pack_total_skills: 13
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: zenstory-ai-drama-skills
---

# 短剧资产图片提示词
将 `视觉设定.md` 的视觉事实写成可复用、可直接复制的角色板、场景板、道具板或状态图提示词，统一写入 `剧集/<EP>/图片提示词.md`：

- 每项使用 `## IMG-... · 中文名`（`IMG-...` 仅标识提示词条目，不代表已存在真实图片），下设一行 `- 参考：`。
- 无外部参考时写 `- 参考：无外部参考`；绑定项目内真实图片时逐字使用 `REF-<slot>（顺序：<n>）· <项目相对路径>《<中文名称>》（用途：<用途>；控制：<范围>；不得控制：<范围>）`（多张用 `；` 连接，顺序从 1 连续编号；分镜挂图计划 `PLAN-...` 不能充当输入参考）。
- 正文标题固定为 `### 可复制提示词`，每个非空行以 `>` 开头；说明文字跟随项目语言，可复制正文跟随 `short-drama.json#/format/prompt_language`（未配置时默认 `en`，不从说明语言推断）。

## Quick Start

```text
用 $short-drama-image-prompts 为 EP001 已确定的人物、地点和道具写可直接复制的图片提示词
```

## 工作流与提示词要求

1. **确认用途与来源**：基于 `视觉设定.md` 确定本项属于身份板、造型/状态变体、地点板、道具板、组合参考板或 Lookdev 风格帧。分镜需生产尾帧时，可将已接受的「收尾关键帧提示词」落为独立 `IMG-...` 状态图条目（注明来源 `SHOT-...` 与终点状态，沿用视觉事实与参考边界）。
2. **组织正文结构**：按「用途与主体身份锚点 → 当前单一变体 → 构图/视角/版面关系 → 光色/材质 → 背景边界 → 文字呈现与禁止项」编写；开头直陈对象与用途，不用泛化质量词淹没识别特征，不写同一张图无法共存的互斥状态。
3. **兑现连续性锁（`IMG-13`）**：凡被 `视觉设定.md` 连续性锁点名的 `IMG-...` 条目，必须将 `锁面` 原样带入可复制正文。
4. **声明参考槽位与文字政策**：每张参考图的 `用途` 取自封闭词表（`身份`、`造型状态`、`地理`、`构图`、`尺度`、`效果`、`起始帧`、`结束帧`、`风格`）；可见文字、logo、水印、界面和字幕须明确允许或禁止，不得同时要求可读文字与全局禁字（见 [通用配方](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-image-prompts/references/common-recipe.md)）。
5. **保持可复制纯净度**：可复制正文不含 ID、文件路径、占位符、流程说明或 QA 结论。整集请求一次写完全部点名资产。

## 按需知识

默认只读本 SKILL 和当前视觉设定。按需查阅：

- 阶段边界与规则分级：[阶段契约](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-image-prompts/references/stage-contract.md)
- 八段式配方、参考槽位与文字两层映射：[通用配方](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-image-prompts/references/common-recipe.md)
- 人物身份板与造型一致性：[人物与造型](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-image-prompts/references/character-and-look.md)
- 地点地理、多视角母版派生与光线对齐：[地点板](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-image-prompts/references/location-plate.md)
- 功能道具、尺度、材质与文字承载面：[道具板](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-image-prompts/references/prop-plate.md)
- 造型、视图与道具状态变体：[造型与状态变体](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-image-prompts/references/look-and-state-variant.md)
- 多视图版式与布光词汇表：[生产参考板配方](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-image-prompts/references/production-sheet-recipes.md)
- 比较视觉方向的代表帧：[Lookdev 风格帧](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-image-prompts/references/lookdev-frame.md)
- 局部修改与自然语言修订：[定点修改](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-image-prompts/references/edit-and-revision.md)
- 完成前结构检查与正反例：[审查与示例](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-image-prompts/references/review-and-fixtures.md)

## 完成与投产

所有点名条目具备唯一 `IMG-...`、明确用途、合规 `- 参考：` 与无冲突的 `### 可复制提示词` 即完成（同轮联改分镜时同步刷新对应镜头的「图片提示词项」）。完成后可转 `$short-drama` 做局部或完整机械核对；实际生图转 `$short-drama-produce` 展示精确任务并经显式确认后执行。
