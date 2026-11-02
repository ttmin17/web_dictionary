---
slug: dreammis-social-auto-upload-skills-baijiahao-upload
name: baijiahao-upload
tagline: 使用 social-auto-upload 的 `sau baijiahao` 登录百家号、检查账号并发布视频。Use when
  用户要向百家号发布视频或核验百家号登录状态。
summary: 当前仅支持视频，不支持图文和定时发布。可选 --thumbnail 指定封面，--collection
  指定已有合集。先完成百度账号登录并保存会话；登录出现二维码时把二维码图片展示给用户。
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
  subpath: skills/baijiahao-upload
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
  path: skills/baijiahao-upload/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:45.042Z
  truncated: false
type: agent_skill
skill:
  skill_name: baijiahao-upload
  description: 使用 social-auto-upload 的 `sau baijiahao` 登录百家号、检查账号并发布视频。Use when
    用户要向百家号发布视频或核验百家号登录状态。
  folder_path: skills/baijiahao-upload
  extra_files: []
  pack_total_skills: 18
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: dreammis-social-auto-upload
---

# 百家号视频发布
调用现有 CLI，不另写上传流程。账号名是本地会话别名；发布前先查看 `sau baijiahao upload-video --help`。

```powershell
sau baijiahao login --account creator
sau baijiahao check --account creator
sau baijiahao upload-video --account creator --file videos/demo.mp4 --title "标题" --desc "简介" --tags 百家号,测试
```

当前仅支持视频，不支持图文和定时发布。可选 `--thumbnail` 指定封面，`--collection` 指定已有合集。先完成百度账号登录并保存会话；登录出现二维码时把二维码图片展示给用户。

发布前核对账号、素材、标题、文案和标签。只有命令及平台提供的本次提交证据才表示成功；超时或状态不明时先去后台核查，不能直接重发。
