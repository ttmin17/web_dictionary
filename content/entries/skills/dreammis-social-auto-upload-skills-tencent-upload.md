---
slug: dreammis-social-auto-upload-skills-tencent-upload
name: tencent-upload
tagline: 使用 social-auto-upload 的 `sau tencent` 登录视频号并发布或定时发布视频、保存草稿。Use when
  用户要向微信视频号发布视频或检查视频号账号状态。
summary: 视频号仅支持视频发布。可选参数包括 --schedule "YYYY-MM-DD
  HH:MM"、--draft、--collection、--short-title、--category、--thumbnail-landscape 和
  --thumbnail-portrait。--thumbnail 是竖版封面的兼容参数。合集必须已存在。
categories:
  - other
tags:
  - agent-skills
  - bilibili
  - douyin
  - tiktok
status: active
quality_percentile: 57
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: dreammis/social-auto-upload
  subpath: skills/tencent-upload
  official_vendor: false
  license: MIT
signals:
  stars: 16351
  last_commit: 2026-10-22T18:42:22Z
  stars_delta_7d: 206
  stars_growth_pct: 1.3
  trending_score: 208.63
  velocity_source: snapshot_delta
  sparkline_4w:
    - 15815
    - 16145
    - 16351
language: zh
needs_keys: false
prerequisites: []
readme_source:
  repo: dreammis/social-auto-upload
  path: skills/tencent-upload/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:00.968Z
  truncated: false
type: agent_skill
skill:
  skill_name: tencent-upload
  description: 使用 social-auto-upload 的 `sau tencent` 登录视频号并发布或定时发布视频、保存草稿。Use when
    用户要向微信视频号发布视频或检查视频号账号状态。
  folder_path: skills/tencent-upload
  extra_files: []
  pack_total_skills: 18
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: dreammis-social-auto-upload
---

# 视频号发布
调用现有 `sau tencent` CLI，不另写网页上传流程。先确认 `sau tencent --help`；账号名是本地会话别名。

```powershell
sau tencent login --account creator
sau tencent check --account creator
sau tencent upload-video --account creator --file videos/demo.mp4 --title "标题" --desc "简介" --tags 视频号,测试
```

视频号仅支持视频发布。可选参数包括 `--schedule "YYYY-MM-DD HH:MM"`、`--draft`、`--collection`、`--short-title`、`--category`、`--thumbnail-landscape` 和 `--thumbnail-portrait`。`--thumbnail` 是竖版封面的兼容参数。合集必须已存在。

登录和上传依赖浏览器会话。登录若生成二维码，直接展示二维码图片供用户扫码；需要人工操作页面时使用 `--headed`。定时仅在用户给出明确时间时使用。`--draft` 只保存草稿，不代表发布。

发布前确认目标账号、视频、标题、简介、标签及立即发布/定时/草稿意图。只依据 CLI 输出和平台页面确认结果，不把命令启动成功当成发布成功。完整参数以 `sau tencent upload-video --help` 为准。
