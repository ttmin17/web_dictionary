---
slug: dreammis-social-auto-upload-skills-weibo-upload
name: weibo-upload
tagline: 使用 social-auto-upload 的 `sau weibo` 登录微博并发布视频，可指定封面。Use when
  用户要向微博发布视频或检查微博账号状态。
summary: 当前仅支持视频，不支持图文和定时发布。标题最多 30 个字；封面建议小于 5 MB。登录时若出现二维码，展示二维码图片供用户扫码。完整参数以
  sau weibo upload-video --help 为准。
categories:
  - other
tags:
  - agent-skills
  - bilibili
  - douyin
  - tiktok
status: active
quality_percentile: 62
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: dreammis/social-auto-upload
  subpath: skills/weibo-upload
  official_vendor: false
  license: MIT
signals:
  stars: 16145
  last_commit: 2026-10-22T18:42:22Z
  stars_delta_7d: 330
  stars_growth_pct: 2.1
  trending_score: 336.89
  velocity_source: snapshot_delta
  sparkline_4w:
    - 15815
    - 16145
language: zh
needs_keys: false
prerequisites: []
readme_source:
  repo: dreammis/social-auto-upload
  path: skills/weibo-upload/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:12.024Z
  truncated: false
type: agent_skill
skill:
  skill_name: weibo-upload
  description: 使用 social-auto-upload 的 `sau weibo` 登录微博并发布视频，可指定封面。Use when
    用户要向微博发布视频或检查微博账号状态。
  folder_path: skills/weibo-upload
  extra_files: []
  pack_total_skills: 18
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: dreammis-social-auto-upload
---

# 微博视频发布
调用现有 CLI，不另写网页上传流程。账号名是本地会话别名。

```powershell
sau weibo login --account creator
sau weibo check --account creator
sau weibo upload-video --account creator --file videos/demo.mp4 --title "标题" --desc "简介" --tags 微博,测试 --thumbnail covers/demo.png
```

当前仅支持视频，不支持图文和定时发布。标题最多 30 个字；封面建议小于 5 MB。登录时若出现二维码，展示二维码图片供用户扫码。完整参数以 `sau weibo upload-video --help` 为准。

发布前核对账号、视频、标题长度、简介、标签和封面。提交后只根据实际平台反馈报告结果；超时或状态不明时先在微博后台确认原作品，不重复上传。
