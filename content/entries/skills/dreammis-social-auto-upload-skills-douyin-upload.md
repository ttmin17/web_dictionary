---
slug: dreammis-social-auto-upload-skills-douyin-upload
name: douyin-upload
tagline: 当 agent 需要通过已安装的 `sau` CLI 完成抖音登录、cookie 校验、视频上传或图文发布时使用这个 skill。该
  skill 适用于已经安装 `social-auto-upload` 且可调用 `sau` 命令的环境。优先使用这个 skill
  进行稳定的命令式抖音工作流，而不是一
summary: 不要假设当前环境一定能读取仓库源码。 不要一开始就去读 uploader/。 只有在命令不可用或 CLI 执行失败时，才回退到故障排查说明。
categories:
  - other
tags:
  - agent-skills
  - bilibili
  - douyin
  - tiktok
status: active
quality_percentile: 63
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: dreammis/social-auto-upload
  subpath: skills/douyin-upload
  official_vendor: false
  license: MIT
signals:
  stars: 16015
  last_commit: 2026-10-22T18:42:22Z
  stars_delta_7d: 200
  stars_growth_pct: 1.3
  trending_score: 202.53
  velocity_source: snapshot_delta
  sparkline_4w:
    - 15815
    - 16015
language: zh
needs_keys: false
prerequisites: []
readme_source:
  repo: dreammis/social-auto-upload
  path: skills/douyin-upload/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:45.042Z
  truncated: false
type: agent_skill
skill:
  skill_name: douyin-upload
  description: 当 agent 需要通过已安装的 `sau` CLI 完成抖音登录、cookie 校验、视频上传或图文发布时使用这个 skill。该
    skill 适用于已经安装 `social-auto-upload` 且可调用 `sau` 命令的环境。优先使用这个 skill
    进行稳定的命令式抖音工作流，而不是一开始就阅读 uploader 源码。
  folder_path: skills/douyin-upload
  extra_files:
    - references/cli-contract.md
    - references/runtime-requirements.md
    - references/troubleshooting.md
    - scripts/examples/douyin_cli_template.py
    - scripts/examples/douyin_commands.ps1
    - scripts/examples/douyin_commands.sh
  pack_total_skills: 18
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: dreammis-social-auto-upload
---

# 抖音上传 Skill
优先把 `sau` 作为主接口。

不要假设当前环境一定能读取仓库源码。
不要一开始就去读 `uploader/`。
只有在命令不可用或 CLI 执行失败时，才回退到故障排查说明。

## 功能概览

| 功能 | 命令入口 | 说明 |
| --- | --- | --- |
| 抖音登录 | `sau douyin login --account <name>` | 生成或刷新指定账号的 cookie |
| cookie 校验 | `sau douyin check --account <name>` | 检查指定账号 cookie 是否有效 |
| 视频上传 | `sau douyin upload-video ...` | 上传并发布抖音视频 |
| 图文上传 | `sau douyin upload-note ...` | 上传并发布抖音图文 |

元数据约定：

- 视频使用 `title + desc + tags`
- 图文使用 `title + note + tags`

## 默认工作流

1. 先确认 `references/runtime-requirements.md` 里的运行前提。
2. 再确认 `references/cli-contract.md` 里的命令契约。
3. 执行匹配的 `sau douyin ...` 命令。
4. 如果命令失败，再看 `references/troubleshooting.md`。

## 支持动作

- 使用 `sau douyin login --account <name>` 登录抖音
- 使用 `sau douyin check --account <name>` 校验 cookie 是否有效
- 使用 `sau douyin upload-video ...` 上传抖音视频
- 使用 `sau douyin upload-note ...` 上传抖音图文

## 命令选择建议

- 当用户需要新的 cookie，或现有 cookie 已失效时，使用 `login`
- 当用户只需要确认 cookie 状态时，使用 `check`
- 当用户要发布视频时，使用 `upload-video`
- 当用户要发布图文时，使用 `upload-note`

## 执行前检查

- 先确认当前 shell 里是否可以调用 `sau`
- 如果 `sau` 不可用，按 `references/runtime-requirements.md` 里的回退方式处理
- 当用户明确指定无头或有头模式时，显式传 `--headless` 或 `--headed`
- 只有用户明确要求定时发布时，才使用 `--schedule`
- 如果登录流程生成了本地二维码图片，不要只把图片路径告诉用户
- 二维码图片本身就是给用户扫码的，优先直接把本地图片展示/发送给用户

## 参考文档

- 运行前提：`references/runtime-requirements.md`
- CLI 契约：`references/cli-contract.md`
- 故障排查：`references/troubleshooting.md`
