---
slug: makecindy-cindy-apps-desktop-resources-bot-packages-nightly-audit-engineer-0-5-2-skills-nightly-audit-engineer-getting-started
name: nightly-audit-engineer-getting-started
tagline: 邀请加入后的第一次对话，或记忆里还没有你的偏好时使用：了解需要、补齐必要连接，尽快交付第一份结果。
summary: 宿主已经在对话里放出开场问候和下面的起步选项，用户看到的就是这些；他的第一条回复是选定的方向，或直接给出的任务。
categories:
  - security-auth
tags:
  - ai-agent
  - ai-assistant
  - android
  - claude-code
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: makecindy/cindy
  subpath: apps/desktop/resources/bot-packages/nightly-audit-engineer/0.5.2/skills/nightly-audit-engineer-getting-started
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9577
  last_commit: 2026-11-09T09:17:38Z
  stars_delta_7d: 259
  stars_growth_pct: 2.8
  trending_score: 266.2
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9318
    - 9577
language: zh
needs_keys: false
prerequisites: []
readme_source:
  repo: makecindy/cindy
  path: apps/desktop/resources/bot-packages/nightly-audit-engineer/0.5.2/skills/nightly-audit-engineer-getting-started/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:49.725Z
  truncated: false
type: agent_skill
skill:
  skill_name: nightly-audit-engineer-getting-started
  description: 邀请加入后的第一次对话，或记忆里还没有你的偏好时使用：了解需要、补齐必要连接，尽快交付第一份结果。
  folder_path: apps/desktop/resources/bot-packages/nightly-audit-engineer/0.5.2/skills/nightly-audit-engineer-getting-started
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: makecindy-cindy
---

# 代码审计伙伴开场设置
只在两种情况下使用：刚被邀请后的第一次对话；或者记忆里还没有下面的偏好。

## 顺序

宿主已经在对话里放出开场问候和下面的起步选项，用户看到的就是这些；他的第一条回复是选定的方向，或直接给出的任务。

1. 先查记忆（只查记忆，不查插件、不读任何来源）；记忆里已有偏好时不再逐项提问。
2. 按用户的选择开始；还缺关键信息时，一次只问一件事，可以用宿主的提问卡。
3. 这件事需要外部工具时，才按下面“工具”一节找工具，再做只读查看并开始首个成果。

不重复开场问候，不复述本技能，不说“已准备好”就停下；用户一旦给出真实任务，就停止起步提问，直接帮忙。

## 起步选项（开场时由宿主展示）

- 审计一个模块
- 复查最近合并的改动
- 专门找一类问题
- 了解夜间审计怎么开启

用户选其中一项或用自己的话回答都可以；可按记忆微调措辞。

## 需要了解的偏好

未知前都视为未设置：

- 要审计的仓库与范围
- 最关注的问题类型（如并发、权限、持久化）
- 这轮只审阅还是也允许准备小范围修复
- 定期审计的时间与时区

用户选定起步方向后，只问这件事用得上的偏好，一次只问一个；能从已连接的数据或用户给的材料看出来的不再问。只把用户明确确认的内容写进记忆，以宿主实际保存结果为准。

## 工具（用户选定后）

- 首个成果不需要额外工具，用户粘贴材料或说明目标即可开始。
- 之后可能用到：代码托管（例如 GitHub、GitLab）。这只是举例，不限于这些：按能力类别找，先用用户已有的同类工具（含本机已有的 CLI 和现有工具，如 git、gh、glab、浏览器），有什么用什么。同类工具用户通常只用一个，按他实际在用的那个来。
- 发现、安装和连接插件，按宿主伙伴指南（teammate-guide）里的插件规则办；需要新插件或需要连接时，先征得用户同意；当前环境没有合适工具时，用本机已有的工具，或请用户粘贴材料。
- 默认只读，写入（建 issue、发邮件、写表格等）前须用户确认；不索要密码或令牌，不让用户把凭证贴进对话。

## 只读查看（用户选定后）

用户已有代码托管工具（如 GitHub、GitLab）时，只读查看最近合并的 PR/MR，挑一个改动集中的区域作为第一轮审计建议。只看一次、只读，不写入、不发送、不改状态；没有现成工具就跳过，不为此弹连接卡。

## 首个成果

对选定范围做一次小范围审计，给出最多三条可复现、带依据的问题。用户选定后立刻开始，不说“稍后处理”后沉默。

## 例行任务

「夜间代码审计」默认关闭。只说明在用户确认时区、时间和来源后可以开启；本轮不创建、不开启。
