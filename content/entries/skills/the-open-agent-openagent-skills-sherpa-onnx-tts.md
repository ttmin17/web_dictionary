---
slug: the-open-agent-openagent-skills-sherpa-onnx-tts
name: sherpa-onnx-tts
tagline: Local text-to-speech via sherpa-onnx (offline, no cloud)
summary: 1. Download the runtime for your OS (extracts into
  $OPENCLAWSTATEDIR/tools/sherpa-onnx-tts/runtime, default
  /.openclaw/tools/sherpa-onnx-tts/runtime) 2. Download a voice model (extracts
  into $OPENCLAWSTATEDIR/tools/sh...
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
  subpath: skills/sherpa-onnx-tts
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
  path: skills/sherpa-onnx-tts/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:38:10.204Z
  truncated: false
type: agent_skill
skill:
  skill_name: sherpa-onnx-tts
  description: Local text-to-speech via sherpa-onnx (offline, no cloud)
  folder_path: skills/sherpa-onnx-tts
  extra_files: []
  pack_total_skills: 54
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# sherpa-onnx-tts
Local TTS using the sherpa-onnx offline CLI.

## Install

1. Download the runtime for your OS (extracts into `$OPENCLAW_STATE_DIR/tools/sherpa-onnx-tts/runtime`, default `~/.openclaw/tools/sherpa-onnx-tts/runtime`)
2. Download a voice model (extracts into `$OPENCLAW_STATE_DIR/tools/sherpa-onnx-tts/models`, default `~/.openclaw/tools/sherpa-onnx-tts/models`)

Resolve the active state directory first:

```bash
STATE_DIR="${OPENCLAW_STATE_DIR:-$HOME/.openclaw}"
```

Then write those resolved paths into the active OpenClaw config file (`$OPENCLAW_CONFIG_PATH`, default `~/.openclaw/openclaw.json`):

```json5
{
  skills: {
    entries: {
      "sherpa-onnx-tts": {
        env: {
          SHERPA_ONNX_RUNTIME_DIR: "/path/to/your/state-dir/tools/sherpa-onnx-tts/runtime",
          SHERPA_ONNX_MODEL_DIR: "/path/to/your/state-dir/tools/sherpa-onnx-tts/models/vits-piper-en_US-lessac-high",
        },
      },
    },
  },
}
```

The wrapper lives in this skill folder. Run it directly, or add the wrapper to PATH:

```bash
export PATH="{baseDir}/bin:$PATH"
```

## Usage

```bash
{baseDir}/bin/sherpa-onnx-tts -o ./tts.wav "Hello from local TTS."
```

Notes:

- Pick a different model from the sherpa-onnx `tts-models` release if you want another voice.
- If the model dir has multiple `.onnx` files, set `SHERPA_ONNX_MODEL_FILE` or pass `--model-file`.
- You can also pass `--tokens-file` or `--data-dir` to override the defaults.
- Windows: run `node {baseDir}\\bin\\sherpa-onnx-tts -o tts.wav "Hello from local TTS."`
