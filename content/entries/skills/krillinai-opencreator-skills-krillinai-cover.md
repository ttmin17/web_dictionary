---
slug: krillinai-opencreator-skills-krillinai-cover
name: krillinai-cover
tagline: Use when generating a cover image with the KrillinAI CLI from a
  complete image prompt, including validating image-provider configuration and
  inspectin
summary: The prompt must already contain the desired title text, language,
  composition, visual style, and any useful source-video context. The current
  CLI does not expose a reference-image argument and does not automatically s...
categories:
  - media-creative
tags:
  - agent-skills
  - codex-cli
  - deskop-app
  - dubbing
status: active
quality_percentile: 76
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: krillinai/OpenCreator
  subpath: skills/krillinai-cover
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 14249
  last_commit: 2026-11-08T22:49:48Z
  stars_delta_7d: 77
  stars_growth_pct: 0.5
  trending_score: 77.42
  velocity_source: snapshot_delta
  sparkline_4w:
    - 13701
    - 13936
    - 14172
    - 14249
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: krillinai/OpenCreator
  path: skills/krillinai-cover/SKILL.md
  branch: master
  fetched_at: 2026-11-09T09:28:00.497Z
  truncated: false
type: agent_skill
skill:
  skill_name: krillinai-cover
  description: Use when generating a cover image with the KrillinAI CLI from a
    complete image prompt, including validating image-provider configuration and
    inspecting the generated image and saved prompt.
  folder_path: skills/krillinai-cover
  extra_files: []
  pack_total_skills: 9
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: krillinai-opencreator
---

# KrillinAI Cover
Use this skill for the implemented `cover` command. Read `skills/krillinai-cli/references/cli-contract.md` first for binary location, execution working directory, configuration, and JSON behavior.

## Command

```bash
(cd "$KRILLINAI_CWD" && "$KRILLINAI_CLI" cover \
  --workdir "$WORKDIR" \
  --prompt "$COVER_PROMPT" \
  --size 1536x1024)
```

The prompt must already contain the desired title text, language, composition, visual style, and any useful source-video context. The current CLI does not expose a reference-image argument and does not automatically send `origin_cover.jpg` to the image model.

## Inputs

- `--workdir`: an existing or new task directory.
- `--prompt`: required final prompt sent to the configured image model.
- `--size`: optional image size; the default is `1024x1024`.
- `[image]` configuration in `<execution-cwd>/config/config.toml`.

## Outputs

- `generated_cover.png`
- `cover_prompt.final.txt`
- `krillinai_manifest.json`

## Dry Run

`cover --dry-run` validates the command and writes a manifest, but it does not call the image model or create `generated_cover.png`.

## Verification

- Require terminal JSON with `"ok": true`.
- Read output paths from the terminal response or manifest.
- Confirm `generated_cover.png` is non-empty and decodable as an image.
- Confirm `cover_prompt.final.txt` exactly records the submitted prompt.
- If provider configuration is missing or generation fails, report the returned error rather than treating the manifest alone as success.
