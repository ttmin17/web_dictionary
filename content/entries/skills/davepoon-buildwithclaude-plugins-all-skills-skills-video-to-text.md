---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-video-to-text
name: video-to-text
tagline: "视频转文字。用户发抖音分享链接（获取标题/作者/点赞等元数据），或本地视频文件（语音转写全文）时使用。抖音链接用 SSR 解析无需
  Cookie。Video to text: extract metadata from Douyin share links, or transcribe
  speech"
summary: 用户发送以下内容时使用本技能： - 抖音分享链接，要求"转文字""提取文案""拆解视频" - 本地视频文件（.mp4/.mov），要求"语音转文字""字幕"
categories:
  - media-creative
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/all-skills/skills/video-to-text
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: zh
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/all-skills/skills/video-to-text/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.599Z
  truncated: false
type: agent_skill
skill:
  skill_name: video-to-text
  description: "视频转文字。用户发抖音分享链接（获取标题/作者/点赞等元数据），或本地视频文件（语音转写全文）时使用。抖音链接用 SSR 解析无需
    Cookie。Video to text: extract metadata from Douyin share links, or
    transcribe speech from local video files."
  folder_path: plugins/all-skills/skills/video-to-text
  extra_files:
    - scripts/douyin_extract.py
    - scripts/vtt.py
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Video-to-Text 视频转文字
把视频变成可复制、可搜索的文字。支持抖音分享链接（元数据，无需登录）和本地视频文件（语音转写）。

## 触发条件

用户发送以下内容时使用本技能：
- 抖音分享链接，要求"转文字""提取文案""拆解视频"
- 本地视频文件（.mp4/.mov），要求"语音转文字""字幕"

## 使用步骤

### 1. 抖音分享链接 → 元数据

```bash
python3 scripts/vtt.py "https://v.douyin.com/xxxx/"
```

- 输出元数据（标题/作者/点赞/标签）
- **注意**：分享链接当前只提取元数据——语音转写请让用户保存视频后走本地文件（步骤 2）

### 2. 本地视频文件 → 语音转写

```bash
python3 scripts/vtt.py 本地视频.mp4
```

- 自动提取音频、faster-whisper 转写（中文）
- 转写文本保存为 `<输入名>_transcript.txt` 并打印时间戳分段

## 依赖（首次使用时安装）

```bash
pip3 install faster-whisper        # 转写需要（首次会下载 tiny 模型 ~75MB）
# macOS 自带 avconvert；Linux 需 ffmpeg
# 抖音 SSR 解析零依赖（curl + 标准库）
```

## 已知陷阱

- **duration_ms=0 假阴性**：SSR 元数据时长可能为 0，但实际是视频。若元数据显示 0 秒且有下载 URL，先下载验证，不要直接判定为图文。
- **play_addr URL 过期**：SSR 解析出的视频 URL 可能 404，此时需 Cookie 降级或让用户提供文件。
- **whisper 转写慢**：Intel Mac 上 3 分钟视频约 5 分钟；转写必须加 `language='zh'` 否则自动检测多花 1-2 分钟。
- **图文内容**：duration=0 且下载文件 <1MB 时是图文（无音频），只输出元数据，不要编造内容。
