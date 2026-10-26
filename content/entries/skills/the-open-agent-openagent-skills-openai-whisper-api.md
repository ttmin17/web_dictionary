---
slug: the-open-agent-openagent-skills-openai-whisper-api
name: openai-whisper-api
tagline: Transcribe audio via OpenAI Audio Transcriptions API (Whisper).
summary: "- Model: whisper-1 - Output format: text"
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-ai
  - agi
  - chatbot
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/openai-whisper-api
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5712
  last_commit: 2026-10-25T13:57:48Z
  stars_delta_7d: 14
  stars_growth_pct: 0.2
  trending_score: 14.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5688
    - 5698
    - 5712
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: the-open-agent/openagent
  path: skills/openai-whisper-api/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:38:10.203Z
  truncated: false
type: agent_skill
skill:
  skill_name: openai-whisper-api
  description: Transcribe audio via OpenAI Audio Transcriptions API (Whisper).
  folder_path: skills/openai-whisper-api
  extra_files: []
  pack_total_skills: 54
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# OpenAI Whisper API (curl)
Transcribe an audio file via OpenAI's `/v1/audio/transcriptions` endpoint. Set `OPENAI_BASE_URL` to use an OpenAI-compatible proxy or local gateway.

## Quick start

```bash
curl -sS "https://api.openai.com/v1/audio/transcriptions" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F "file=@/path/to/audio.m4a" \
  -F "model=whisper-1" \
  -F "response_format=text" \
  > transcript.txt
```

Defaults:

- Model: `whisper-1`
- Output format: `text`

## Options

```bash
# With language hint
curl -sS "https://api.openai.com/v1/audio/transcriptions" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F "file=@audio.ogg" \
  -F "model=whisper-1" \
  -F "response_format=text" \
  -F "language=en" \
  > transcript.txt

# With speaker hint (prompt)
curl -sS "https://api.openai.com/v1/audio/transcriptions" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F "file=@audio.m4a" \
  -F "model=whisper-1" \
  -F "response_format=text" \
  -F "prompt=Speaker names: Peter, Daniel" \
  > transcript.txt

# JSON output
curl -sS "https://api.openai.com/v1/audio/transcriptions" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F "file=@audio.m4a" \
  -F "model=whisper-1" \
  -F "response_format=json" \
  > transcript.json
```

## Custom base URL

Set `OPENAI_BASE_URL` to use an OpenAI-compatible proxy or local gateway:

```bash
API_BASE="${OPENAI_BASE_URL:-https://api.openai.com/v1}"
curl -sS "${API_BASE}/audio/transcriptions" \
  -H "Authorization: Bearer $OPENAI_API_KEY" \
  -F "file=@audio.m4a" \
  -F "model=whisper-1" \
  -F "response_format=text" \
  > transcript.txt
```

## API key

Set `OPENAI_API_KEY` environment variable before running commands.
