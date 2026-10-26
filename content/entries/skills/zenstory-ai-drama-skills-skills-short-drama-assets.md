---
slug: zenstory-ai-drama-skills-skills-short-drama-assets
name: short-drama-assets
tagline: Agent skill from zenstory-ai/drama-skills
summary: Agent skill from zenstory-ai/drama-skills
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
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: zenstory-ai/drama-skills
  subpath: skills/short-drama-assets
  official_vendor: false
  license: MIT
signals:
  stars: 3360
  last_commit: 2026-10-20T19:23:14Z
  stars_delta_7d: 307
  stars_growth_pct: 10.1
  trending_score: 337.87
  velocity_source: snapshot_delta
  sparkline_4w:
    - 2574
    - 2825
    - 3053
    - 3360
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: zenstory-ai/drama-skills
  path: skills/short-drama-assets/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:45:26.649Z
  truncated: false
type: agent_skill
skill:
  skill_name: short-drama-assets
  description: Agent skill from zenstory-ai/drama-skills
  folder_path: skills/short-drama-assets
  extra_files:
    - agents/openai.yaml
    - references/asset-review-checklist.md
    - references/character-and-look.md
    - references/continuity-delta.md
    - references/continuity-lock.md
    - references/era-anchors.md
    - references/identity-vs-variant.md
    - references/location-and-view.md
    - references/occurrence-extraction.md
    - references/prop-and-state.md
  pack_total_skills: 12
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: zenstory-ai-drama-skills
---

# 短剧资产拆解
把剧本文字变成可复用、可持续的视觉事实，统一写入 `剧集/<EP>/视觉设定.md`。不要把每次出场都
变成新资产，也不要抢写剧本语义、镜头走位或生成提示词。

## Quick Start

```text
用 $short-drama-assets 从 EP001 剧本拆完人物、造型、地点、道具和本集状态
```

## 入口与边界

现成剧本可以直接拆资产。先区分：

- **身份**：换一个就不再是同一个人、地或物；
- **变体**：身份不变，但服装、伤势、时段、天气、开合或持有状态改变；
- **镜头瞬态**：姿势、视线、左右手、站位和相机角度，由分镜拥有；
- **故事语义**：知识、目标、关系和情绪由写作/开发拥有，只引用可见后果。

## 工作流

1. 只读当前范围的剧本和已决定的视觉方向；视觉方向还没有时代锚点时，先按原著事实定时代。
2. 逐场找实体、可见描述、状态变化和含混指代，先不创建资产。
3. 对每项决定新建、复用、增加变体或标记未决；含混指代不猜。
4. 写最小可识别设定：统一使用 `识别锚点`、本集状态和变化原因；会持续限制后续动作的身体—物件—空间关系写进有生效范围的状态，不当成一次姿势略过。
5. 检查造型/伤势、持物/所有权、道具状态、地点时段/天气/光态与跨集 outgoing。
6. 给跨镜出现且观众看得出不一致的可见事实写一条连续性锁，其余保持识别锚点即可。
7. 项目提示词语言不是中文时，给每个人物条目写一行 `画面代称：<正文里的拼写>`；正文从不点名它就写 `画面代称：无`。地点和道具按需。
8. 整集请求自动处理完整集，末端一次回报关键身份决定和未决指代。

## 内容要求

- 每项先写什么不变使它仍是同一资产，再写本集变化。
- 识别锚点必须可见、可生成、可比较，不用空泛质量词替代事实。
- 服装、伤势、湿污、道具开合和光态通常是变体，不是新身份。
- 不复制剧情摘要，只保留下游生成、分镜或连续性真正需要的事实。
- 文字、标识和敏感信息遵守项目政策，不擅自补造品牌或私密信息。
- 多集状态写清生效与持续范围；镜头内瞬态留给分镜。
- 已确认且持续限制动作空间的关系（身体依托、固定、负重、占位或与功能物件的接触）不是普通镜头姿势：可独立识别的物件仍建资产，关系写进状态并交给分镜逐镜投影；只有剧本明确改变时才结束。
- 连续性锁只锁不随剧情改变的可见事实；锁面用提示词语言写成最小名词短语，会变的部分留给状态。
- 「画面代称」把提示词正文里的名字对回本条目：分镜的机械核对靠它判断关键帧里点名的人是谁。条目自身的中文名称
  始终算一个代称，所以中文正文通常不必写这一行；提示词正文语言不是中文时，人物条目必须给出结论——写出正文使用的
  拼写，或在正文从不点名它时写 `画面代称：无`。同一个名字全集只用一个拼写，大小写也一致（`AST-10` 的同一条要求跨语言同样成立）；
  多个写法用 `、` 分隔。名字与常用词同形（`道具「手机」` 撞上「手机店」）时也写 `画面代称：无`，让核对不按名字找它。

## 按需知识

默认只读本 SKILL、当前剧本和视觉方向。遇到对应问题时只打开一份：

- 阶段边界与规则分级：[阶段契约](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-assets/references/stage-contract.md)
- 定时代、写时代锚点，或想把场所、设备、服装写旧：[时代锚点](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-assets/references/era-anchors.md)
- 从剧本找真正的资产出现证据：[出现提取](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-assets/references/occurrence-extraction.md)
- 新身份、复用、变体或未决：[身份与变体](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-assets/references/identity-vs-variant.md)
- 人物识别与造型层次：[人物与造型](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-assets/references/character-and-look.md)
- 地点地理、视图和固定锚点：[地点与视图](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-assets/references/location-and-view.md)
- 功能道具、所有权、状态变化，或画面上的可读文字与标识：[道具与状态](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-assets/references/prop-and-state.md)
- 声音参考的身份与授权边界：[声音方向](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-assets/references/voice-direction.md)
- 跨场、跨镜、跨集状态：[连续性变化](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-assets/references/continuity-delta.md)
- 跨镜服装/道具颜色、材质漂移：[跨镜一致性锁](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-assets/references/continuity-lock.md)
- 完成前做一次资产漏项检查：[资产审查清单](https://github.com/zenstory-ai/drama-skills/blob/main/skills/short-drama-assets/references/asset-review-checklist.md)

## 完成

所有明确出场都已复用、新建、变体化或标为真实未决；需要保持的视觉事实与状态变化已写入唯一
视觉设定文档，即完成。图片提示词、分镜、审查和生产不自动开始。
五份创作文档齐备后，可转 `$short-drama` 对跨文档结构做一次机械核对；内容质量仍由创作者审查。

## 安装维护

只有安装、升级或排障时运行 `python3 scripts/selftest.py`。
