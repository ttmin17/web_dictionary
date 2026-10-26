---
slug: decolua-9router-skills-9router-stt
name: stt
tagline: Speech-to-text via 9Router /v1/audio/transcriptions using OpenAI
  Whisper / Groq / Gemini / Deepgram / AssemblyAI / NVIDIA / HuggingFace models.
  Use wh
summary: model = STT model ID (e.g. openai/whisper-1, groq/whisper-large-v3,
  deepgram/nova-3, gemini/gemini-2.5-flash).
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
  subpath: skills/9router-stt
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
  path: skills/9router-stt/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:42:27.478Z
  truncated: false
type: agent_skill
skill:
  skill_name: stt
  description: Speech-to-text via 9Router /v1/audio/transcriptions using OpenAI
    Whisper / Groq / Gemini / Deepgram / AssemblyAI / NVIDIA / HuggingFace
    models. Use when the user wants to transcribe audio, convert speech to text,
    or get subtitles from audio files.
  folder_path: skills/9router-stt
  extra_files: []
  pack_total_skills: 9
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: decolua-9router
---

# 9Router — Speech-to-Text
Requires `NINEROUTER_URL` (and `NINEROUTER_KEY` if auth enabled). See https://raw.githubusercontent.com/decolua/9router/refs/heads/master/skills/9router/SKILL.md for setup.

## Discover

```bash
curl $NINEROUTER_URL/v1/models/stt | jq '.data[].id'
# Per-model params (language, response_format, prompt, temperature support)
curl "$NINEROUTER_URL/v1/models/info?id=openai/whisper-1"
```

`model` = STT model ID (e.g. `openai/whisper-1`, `groq/whisper-large-v3`, `deepgram/nova-3`, `gemini/gemini-2.5-flash`).

## Endpoint

`POST $NINEROUTER_URL/v1/audio/transcriptions` (OpenAI Whisper compatible, `multipart/form-data`)

| Field | Required | Notes |
|---|---|---|
| `model` | yes | from `/v1/models/stt` |
| `file` | yes | audio file (mp3, wav, m4a, webm, ogg, flac) |
| `language` | no | ISO-639-1 (e.g. `en`, `vi`) |
| `prompt` | no | hint text to guide transcription |
| `response_format` | no | `json` (default) / `text` / `verbose_json` / `srt` / `vtt` |
| `temperature` | no | 0–1 |

## Examples

```bash
curl -X POST "$NINEROUTER_URL/v1/audio/transcriptions" \
  -H "Authorization: Bearer $NINEROUTER_KEY" \
  -F "model=openai/whisper-1" \
  -F "file=@audio.mp3" \
  -F "language=vi"
```

JS (Node):

```js
import { createReadStream } from "node:fs";
const form = new FormData();
form.append("model", "groq/whisper-large-v3-turbo");
form.append("file", new Blob([await (await import("node:fs/promises")).readFile("audio.mp3")]), "audio.mp3");
const r = await fetch(`${process.env.NINEROUTER_URL}/v1/audio/transcriptions`, {
  method: "POST",
  headers: { "Authorization": `Bearer ${process.env.NINEROUTER_KEY}` },
  body: form,
});
const { text } = await r.json();
console.log(text);
```

## Response shape

Default (`response_format=json`):
```json
{ "text": "Xin chào, đây là bản ghi âm." }
```

`verbose_json` adds `language`, `duration`, `segments[]` with timestamps.
`srt` / `vtt` return subtitle text.

## Provider quirks

| Provider | `model` format | Notes |
|---|---|---|
| `openai` | `whisper-1`, `gpt-4o-transcribe`, `gpt-4o-mini-transcribe` | Native OpenAI shape |
| `groq` | `whisper-large-v3`, `whisper-large-v3-turbo`, `distil-whisper-large-v3-en` | Fastest; OpenAI shape |
| `gemini` | `gemini-2.5-flash`, `gemini-2.5-pro`, `gemini-2.5-flash-lite` | Server converts to `generateContent` with audio inline |
| `deepgram` | `nova-3`, `nova-2`, `whisper-large` | Token auth; server adapts response |
| `assemblyai` | `universal-3-pro`, `universal-2` | Async upload+poll handled server-side |
| `nvidia` | `nvidia/parakeet-ctc-1.1b-asr` | NIM endpoint |
| `huggingface` | `openai/whisper-large-v3`, `openai/whisper-small` | HF Inference API |
| `elevenlabs` | `scribe_v1`, `scribe_v2` | Whisper-compatible shape; `xi-api-key` auth, not Bearer. Extra params: `timestamps_granularity` (`word`/`character`/`none`), `tag_audio_events`, and speaker labelling via **either** `diarize=true` **or** `num_speakers` (1–32) — sending both makes the request invalid, so `diarize` wins and `num_speakers` is dropped. Blank `language` is omitted upstream for auto-detect. `srt`/`vtt` and `verbose_json` segments are served from Scribe's own `additional_formats` render, so `segments[]` is omitted when the upstream render is unavailable rather than synthesized. Does not accept `temperature` or `prompt` — those are not forwarded. |
