---
slug: decolua-9router-skills-9router-tts
name: tts
tagline: Text-to-speech via 9Router /v1/audio/speech using OpenAI / ElevenLabs /
  Deepgram / Edge TTS / Google TTS / Hyperbolic / Inworld voices. Use when the u
summary: model field in /v1/audio/speech = voice ID directly (e.g.
  edge-tts/vi-VN-HoaiMyNeural, el/, or openai/tts-1 model+default voice).
categories:
  - agent-frameworks
tags:
  - ai-agents
  - ai-gateway
  - anthropic
  - chatgpt
status: active
quality_percentile: 89
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: decolua/9router
  subpath: skills/9router-tts
  official_vendor: false
  license: MIT
signals:
  stars: 31424
  last_commit: 2026-10-23T08:35:28Z
  stars_delta_7d: 379
  stars_growth_pct: 1.2
  trending_score: 383.63
  velocity_source: snapshot_delta
  sparkline_4w:
    - 30411
    - 30732
    - 31045
    - 31424
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: decolua/9router
  path: skills/9router-tts/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:42:27.478Z
  truncated: false
type: agent_skill
skill:
  skill_name: tts
  description: Text-to-speech via 9Router /v1/audio/speech using OpenAI /
    ElevenLabs / Deepgram / Edge TTS / Google TTS / Hyperbolic / Inworld voices.
    Use when the user wants to convert text to speech, generate audio,
    voiceover, narrate, or read text aloud.
  folder_path: skills/9router-tts
  extra_files: []
  pack_total_skills: 9
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: decolua-9router
---

# 9Router — Text-to-Speech
Requires `NINEROUTER_URL` (and `NINEROUTER_KEY` if auth enabled). See https://raw.githubusercontent.com/decolua/9router/refs/heads/master/skills/9router/SKILL.md for setup.

## Discover

```bash
# 1) List models
curl $NINEROUTER_URL/v1/models/tts | jq '.data[].id'
# 2) Per-model metadata (params, voicesUrl if voice-by-id)
curl "$NINEROUTER_URL/v1/models/info?id=el/eleven_multilingual_v2"
# 3) List voices (elevenlabs, edge-tts, deepgram, inworld, local-device). Optional ?lang=vi
curl "$NINEROUTER_URL/v1/audio/voices?provider=edge-tts&lang=vi" | jq '.data[].model'
```

`model` field in `/v1/audio/speech` = voice ID directly (e.g. `edge-tts/vi-VN-HoaiMyNeural`, `el/<voice_id>`, or `openai/tts-1` model+default voice).

## Endpoint

`POST $NINEROUTER_URL/v1/audio/speech`

| Field | Required | Notes |
|---|---|---|
| `model` | yes | voice ID from `/v1/models/tts` |
| `input` | yes | text to speak |

Query `?response_format=mp3` (default, raw bytes) or `?response_format=json` (`{audio: base64, format}`).

## Examples

Save MP3:

```bash
curl -X POST "$NINEROUTER_URL/v1/audio/speech" \
  -H "Authorization: Bearer $NINEROUTER_KEY" \
  -H "Content-Type: application/json" \
  -d '{"model":"openai/tts-1","input":"Hello world"}' \
  --output speech.mp3
```

JS (save file):

```js
import { writeFile } from "node:fs/promises";
const r = await fetch(`${process.env.NINEROUTER_URL}/v1/audio/speech`, {
  method: "POST",
  headers: { "Authorization": `Bearer ${process.env.NINEROUTER_KEY}`, "Content-Type": "application/json" },
  body: JSON.stringify({ model: "el/eleven_multilingual_v2", input: "Xin chào" }),
});
await writeFile("speech.mp3", Buffer.from(await r.arrayBuffer()));
```

## Response shape

Default → raw audio bytes (Content-Type `audio/mp3`).

`?response_format=json`:
```json
{ "audio": "SUQzBAAAA...", "format": "mp3" }
```

## Provider quirks (model format)

| Provider | `model` format | Notes |
|---|---|---|
| `openai` | `tts-1/alloy` (model/voice) or just voice | Default model `gpt-4o-mini-tts` |
| `elevenlabs` | `<model_id>/<voice_id>` or `<voice_id>` | Default model `eleven_flash_v2_5`; list voices in Dashboard |
| `openrouter` | `openai/gpt-4o-mini-tts/alloy` | Streamed via chat-completions audio modality |
| `edge-tts` | voice id e.g. `vi-VN-HoaiMyNeural` | **noAuth**; default `vi-VN-HoaiMyNeural` |
| `google-tts` | language code e.g. `en`, `vi` | **noAuth** |
| `local-device` | OS voice name (`say -v ?` / SAPI) | **noAuth**; needs `ffmpeg` |
| `deepgram` | `aura-asteria-en` etc | Token auth |
| `nvidia`, `inworld`, `cartesia`, `playht` | `model/voice` | Provider-specific auth header |
| `coqui`, `tortoise` | speaker / voice id | Localhost noAuth |
| `hyperbolic` | model id | Body = `{text}` only |
