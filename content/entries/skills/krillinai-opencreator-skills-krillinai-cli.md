---
slug: krillinai-opencreator-skills-krillinai-cli
name: krillinai-cli
tagline: Agent skill from krillinai/OpenCreator
summary: Agent skill from krillinai/OpenCreator
categories:
  - media-creative
tags:
  - agent-skills
  - codex-cli
  - deskop-app
  - dubbing
status: active
quality_percentile: 77
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: krillinai/OpenCreator
  subpath: skills/krillinai-cli
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 13936
  last_commit: 2026-10-26T01:28:37Z
  stars_delta_7d: 235
  stars_growth_pct: 1.7
  trending_score: 239.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 12614
    - 12884
    - 13701
    - 13936
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: krillinai/OpenCreator
  path: skills/krillinai-cli/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:44:49.730Z
  truncated: false
type: agent_skill
skill:
  skill_name: krillinai-cli
  description: Agent skill from krillinai/OpenCreator
  folder_path: skills/krillinai-cli
  extra_files:
    - references/cli-contract.md
  pack_total_skills: 9
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: krillinai-opencreator
---

# KrillinAI CLI
Use this as the top-level routing skill for KrillinAI command-line work.

## Build And Locate The Binary

Build both KrillinAI binaries through the repository script:

```bash
pnpm krillinai:build
```

For the current machine, locate the CLI without assuming a platform or architecture:

```bash
TARGET="$(node -p "process.platform + '-' + process.arch")"
SUFFIX="$(node -p "process.platform === 'win32' ? '.exe' : ''")"
KRILLINAI_CLI="$PWD/.runtime/build/krillinai/$TARGET/bin/krillinai-cli$SUFFIX"
test -f "$KRILLINAI_CLI"
```

The CLI loads `config/config.toml` relative to its process working directory. For real runs from a source checkout, use `runtime/krillinai` as the process working directory and create its ignored `config/config.toml` from `config/config-example.toml` without overwriting an existing file. A release archive should be run from its unpacked package root.

For build layout, configuration, JSON, manifest, output, and error details, read:

```text
skills/krillinai-cli/references/cli-contract.md
```

## Choose The Command

| User intent | Command / skill |
|---|---|
| Generate source, target, bilingual, and short vertical subtitles | `subtitle`; use `krillinai-subtitle` |
| Generate target-language dubbing from subtitles | `tts`; use `krillinai-tts` |
| Create landscape videos | `render-horizontal`; use `krillinai-render-horizontal` |
| Create portrait/short-form videos | `render-vertical`; use `krillinai-render-vertical` |
| Generate a cover from a complete image prompt | `cover`; use `krillinai-cover` |
| Generate speech from plain text | `speech` |
| List provider voice codes for Aliyun, OpenAI, or MiniMax | `voices` |
| Validate a requested multi-stage output plan | `pipeline --dry-run`; use `krillinai-pipeline` |

`pipeline` only validates plans in dry-run mode; non-dry-run execution returns `unsupported_command`. `status` is reserved and unsupported.

## Operating Rules For Agents

- Use a dedicated `--workdir`; do not scatter outputs in the repo root.
- Use `--dry-run` for command-shape validation before external calls.
- Parse stdout as JSON lines. The terminal response is the object containing `ok`; OpenCreator mode may emit progress frames first.
- Treat `krillinai_manifest.json` and actual output files as the source of truth after a real stage.
- Reuse manifest outputs for later stages instead of guessing filenames.
- If a command fails, classify by `error.kind`: `usage`, `retryable`, `dependency`, or `internal`.
- Avoid rerunning expensive stages if the manifest already has valid upstream outputs.
- Do not claim that `cover` consumed a reference image: the current CLI accepts a complete text prompt and size only.
- Do not request an Edge TTS voice catalog: `voices` currently supports `aliyun`, `openai`, and `minimax`.

## Minimal Workflow

```bash
REPO_ROOT="$PWD"
WORKDIR="$REPO_ROOT/tasks/demo"
mkdir -p "$WORKDIR"

(cd "$REPO_ROOT/runtime/krillinai" && "$KRILLINAI_CLI" subtitle \
  "https://www.youtube.com/watch?v=VIDEO_ID" \
  --origin-lang en \
  --target-lang zh_cn \
  --workdir "$WORKDIR" \
  --caption-source any \
  --prepare-video)

(cd "$REPO_ROOT/runtime/krillinai" && "$KRILLINAI_CLI" render-vertical \
  --workdir "$WORKDIR")
```
