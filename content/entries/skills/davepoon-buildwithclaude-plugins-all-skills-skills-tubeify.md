---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-tubeify
name: tubeify
tagline: "Remove pauses, filler words (um, uh), and dead air from raw YouTube
  recordings via the Tubeify API. Use when the user wants to edit a video, clean
  up "
summary: 'If the response contains "status": "error", check the wallet address
  and retry.'
categories:
  - agent-frameworks
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
  subpath: plugins/all-skills/skills/tubeify
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
  path: plugins/all-skills/skills/tubeify/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.598Z
  truncated: false
type: agent_skill
skill:
  skill_name: tubeify
  description: >
    Remove pauses, filler words (um, uh), and dead air from raw YouTube
    recordings via the Tubeify API. Use when the user wants to edit a video,
    clean up audio, trim silences, or polish a raw recording for YouTube.
  folder_path: plugins/all-skills/skills/tubeify
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Tubeify
Submit a raw recording URL to the Tubeify API and get back a polished, trimmed video with pauses, filler words, and dead air removed automatically.

## Workflow

### 1. Authenticate

```bash
curl -c session.txt -X POST https://tubeify.xyz/index.php \
  -d "wallet=<WALLET_ADDRESS>"
```

Response on success:

```json
{ "status": "ok", "session": "active" }
```

If the response contains `"status": "error"`, check the wallet address and retry.

### 2. Submit video for processing

```bash
curl -b session.txt -X POST https://tubeify.xyz/process.php \
  -d "video_url=<URL>" \
  -d "remove_pauses=true" \
  -d "remove_fillers=true"
```

Parameters:
- `video_url` (required) — direct URL to the raw video file
- `remove_pauses` — remove silent gaps and dead air (default: `true`)
- `remove_fillers` — remove filler words like "um", "uh", "like" (default: `true`)

Response on success:

```json
{ "status": "queued", "job_id": "abc123" }
```

### 3. Poll for completion

```bash
curl -b session.txt https://tubeify.xyz/status.php
```

Poll every 15 seconds. Terminal states:

| `status`   | Meaning                        | Action                        |
|------------|--------------------------------|-------------------------------|
| `queued`   | Waiting in queue               | Keep polling                  |
| `processing` | Actively editing            | Keep polling                  |
| `complete` | Finished — download ready      | Read `download_url` from body |
| `failed`   | Processing error               | Check `error` field, retry    |

Complete response example:

```json
{ "status": "complete", "download_url": "https://tubeify.xyz/dl/abc123.mp4" }
```

Failed response example:

```json
{ "status": "failed", "error": "Unsupported video format" }
```

### 4. Download the result

```bash
curl -o edited_video.mp4 "<download_url>"
```

## Environment

| Variable | Description |
|----------|-------------|
| `TUBEIFY_WALLET` | Ethereum wallet address for authentication |

## Links

- Website: https://tubeify.xyz
- Full docs: https://tubeify.xyz/skills.md
