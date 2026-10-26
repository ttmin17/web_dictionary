---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-video-downloader
name: video-downloader
tagline: Download YouTube videos with customizable quality and format options.
  Use this skill when the user asks to download, save, or grab YouTube videos.
  Sup
summary: "The simplest way to download a video:"
categories:
  - browser-web
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
  subpath: plugins/all-skills/skills/video-downloader
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
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/all-skills/skills/video-downloader/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.599Z
  truncated: false
type: agent_skill
skill:
  skill_name: video-downloader
  description: Download YouTube videos with customizable quality and format
    options. Use this skill when the user asks to download, save, or grab
    YouTube videos. Supports various quality settings (best, 1080p, 720p, 480p,
    360p), multiple formats (mp4, webm, mkv), and audio-only downloads as MP3.
  folder_path: plugins/all-skills/skills/video-downloader
  extra_files:
    - .gitignore
    - scripts/download_video.py
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# YouTube Video Downloader
Download YouTube videos with full control over quality and format settings.

## Quick Start

The simplest way to download a video:

```bash
python scripts/download_video.py "https://www.youtube.com/watch?v=VIDEO_ID"
```

This downloads the video in best available quality as MP4 to `/mnt/user-data/outputs/`.

## Options

### Quality Settings

Use `-q` or `--quality` to specify video quality:

- `best` (default): Highest quality available
- `1080p`: Full HD
- `720p`: HD
- `480p`: Standard definition
- `360p`: Lower quality
- `worst`: Lowest quality available

Example:
```bash
python scripts/download_video.py "URL" -q 720p
```

### Format Options

Use `-f` or `--format` to specify output format (video downloads only):

- `mp4` (default): Most compatible
- `webm`: Modern format
- `mkv`: Matroska container

Example:
```bash
python scripts/download_video.py "URL" -f webm
```

### Audio Only

Use `-a` or `--audio-only` to download only audio as MP3:

```bash
python scripts/download_video.py "URL" -a
```

### Custom Output Directory

Use `-o` or `--output` to specify a different output directory:

```bash
python scripts/download_video.py "URL" -o /path/to/directory
```

## Complete Examples

1. Download video in 1080p as MP4:
```bash
python scripts/download_video.py "https://www.youtube.com/watch?v=dQw4w9WgXcQ" -q 1080p
```

2. Download audio only as MP3:
```bash
python scripts/download_video.py "https://www.youtube.com/watch?v=dQw4w9WgXcQ" -a
```

3. Download in 720p as WebM to custom directory:
```bash
python scripts/download_video.py "https://www.youtube.com/watch?v=dQw4w9WgXcQ" -q 720p -f webm -o /custom/path
```

## Supported URLs

- **HTTPS only** — `http://` links are rejected.
- **YouTube hosts only** — allowed hostnames include `youtube.com` (and subdomains such as `www`, `m`, `music`), `youtu.be`, and `youtube-nocookie.com` (including `www`). Other sites are rejected.

## yt-dlp installation

The script does **not** install packages into your system Python (no `--break-system-packages`).

1. If `yt-dlp` is on your `PATH`, it is used.
2. Otherwise it creates a **local virtualenv** at `video-downloader/.venv`, installs `yt-dlp` there with `pip`, and runs that binary.
3. If venv creation or install fails, follow the printed message or install globally, for example: `pipx install yt-dlp`, `brew install yt-dlp`, or your OS package manager.

The `.venv` directory is gitignored and stays inside the skill folder.

## How It Works

The skill uses `yt-dlp`, a robust YouTube downloader that:
- Resolves `yt-dlp` via PATH or the skill-local `.venv` as described above
- Fetches video information before downloading
- Selects the best available streams matching your criteria
- Merges video and audio streams when needed
- Supports a wide range of YouTube video formats

## Important Notes

- Downloads are saved to `/mnt/user-data/outputs/` by default
- Video filename is automatically generated from the video title
- Only single videos are downloaded (playlists are skipped by default)
- Higher quality videos may take longer to download and use more disk space
