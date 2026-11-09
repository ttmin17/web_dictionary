---
slug: dreammis-social-auto-upload-skills-hupu-upload
name: hupu-upload
tagline: 使用 social-auto-upload 的 `sau hupu` 登录虎扑并发布视频，可指定封面。Use when
  用户要向虎扑发布视频或检查虎扑账号状态。
summary: 当前仅支持视频，不支持图文和定时发布。标题长度为 4–40 个字。登录可能需要用户在浏览器中完成 QQ 或手机号验证；需要看见页面时保留
  --headed。封面参数 --thumbnail 可省略。
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
  subpath: skills/hupu-upload
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
  path: skills/hupu-upload/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:00.968Z
  truncated: false
type: agent_skill
skill:
  skill_name: hupu-upload
  description: 使用 social-auto-upload 的 `sau hupu` 登录虎扑并发布视频，可指定封面。Use when
    用户要向虎扑发布视频或检查虎扑账号状态。
  folder_path: skills/hupu-upload
  extra_files: []
  pack_total_skills: 18
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: dreammis-social-auto-upload
---

# 虎扑视频发布
调用现有 CLI，不另写网页上传流程。账号名是本地会话别名。

```powershell
sau hupu login --account creator --headed
sau hupu check --account creator
sau hupu upload-video --account creator --file videos/demo.mp4 --title "标题" --desc "简介" --tags 虎扑,测试 --thumbnail covers/demo.png
```

当前仅支持视频，不支持图文和定时发布。标题长度为 4–40 个字。登录可能需要用户在浏览器中完成 QQ 或手机号验证；需要看见页面时保留 `--headed`。封面参数 `--thumbnail` 可省略。

发布前核对账号、视频、标题长度、简介、标签和封面。结果不明确时先查虎扑后台，不直接重发。
