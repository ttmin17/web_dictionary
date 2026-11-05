---
slug: dreammis-social-auto-upload-skills-alipay-upload
name: alipay-upload
tagline: 使用 social-auto-upload 的 `sau alipay` 登录支付宝生活号并发布视频。Use when
  用户要向支付宝生活号发布视频或检查创作账号状态。
summary: 当前仅支持视频，不支持图文和定时发布。可选 --thumbnail 指定封面，--collection
  指定已有合集。账号名是本地会话别名；登录需要扫码时，把二维码图片展示给用户。
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
  subpath: skills/alipay-upload
  official_vendor: false
  license: MIT
signals:
  stars: 16145
  last_commit: 2026-10-22T18:42:22Z
  stars_delta_7d: 330
  stars_growth_pct: 2.1
  trending_score: 336.89
  rank_current: 58
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 15815
    - 16145
language: zh
needs_keys: false
prerequisites: []
readme_source:
  repo: dreammis/social-auto-upload
  path: skills/alipay-upload/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:12.024Z
  truncated: false
type: agent_skill
skill:
  skill_name: alipay-upload
  description: 使用 social-auto-upload 的 `sau alipay` 登录支付宝生活号并发布视频。Use when
    用户要向支付宝生活号发布视频或检查创作账号状态。
  folder_path: skills/alipay-upload
  extra_files: []
  pack_total_skills: 18
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: dreammis-social-auto-upload
---

# 支付宝生活号视频发布
调用现有 `sau alipay` CLI。首次使用前，用户需要在支付宝内容创作后台登录并确认账号已开通生活号内容创作权限。

```powershell
sau alipay login --account creator
sau alipay check --account creator
sau alipay upload-video --account creator --file videos/demo.mp4 --title "标题" --desc "简介" --tags 生活号,测试
```

当前仅支持视频，不支持图文和定时发布。可选 `--thumbnail` 指定封面，`--collection` 指定已有合集。账号名是本地会话别名；登录需要扫码时，把二维码图片展示给用户。

发布前核对账号、素材、标题、简介和标签。不要把 CLI 返回“已提交”扩大解释成审核通过或公开可见；结果不确定时先查支付宝后台，不盲目重试。
