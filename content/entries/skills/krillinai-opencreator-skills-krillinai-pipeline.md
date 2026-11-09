---
slug: krillinai-opencreator-skills-krillinai-pipeline
name: krillinai-pipeline
tagline: Use when validating or documenting a multi-stage KrillinAI CLI output
  plan; the current pipeline command supports dry-run planning only, not
  end-to-en
summary: The dry-run validates output names and returns a successful
  pipeline-stage JSON response. It does not execute stages or write a task
  manifest.
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
  subpath: skills/krillinai-pipeline
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
  path: skills/krillinai-pipeline/SKILL.md
  branch: master
  fetched_at: 2026-11-09T09:28:00.497Z
  truncated: false
type: agent_skill
skill:
  skill_name: krillinai-pipeline
  description: Use when validating or documenting a multi-stage KrillinAI CLI
    output plan; the current pipeline command supports dry-run planning only,
    not end-to-end execution.
  folder_path: skills/krillinai-pipeline
  extra_files: []
  pack_total_skills: 9
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: krillinai-opencreator
---

# KrillinAI Pipeline
Use this skill to validate a requested stage plan. Run real work through the individual stage commands because non-dry-run `pipeline` execution returns `unsupported_command`.

## Plan Validation

```bash
(cd "$KRILLINAI_CWD" && "$KRILLINAI_CLI" pipeline \
  --outputs "subtitle,tts,vertical-bilingual" \
  --dry-run)
```

## Outputs Values

| Output | Stage |
|---|---|
| `subtitle` | Generate subtitle files |
| `tts` | Generate dubbing |
| `horizontal-bilingual` | Render landscape bilingual video |
| `horizontal-dubbed` | Render landscape dubbed video |
| `vertical-bilingual` | Render portrait bilingual video |
| `vertical-dubbed` | Render portrait dubbed video |
| `cover` | Generate cover |

The dry-run validates output names and returns a successful pipeline-stage JSON response. It does not execute stages or write a task manifest.

## Execute The Plan

Map the validated outputs to `subtitle`, `tts`, `render-horizontal`, `render-vertical`, and `cover`. Run each required command independently and use the same absolute `--workdir`.

## Recovery Strategy

- If `subtitle` succeeds and render fails, rerun only render with the same `--workdir`.
- If TTS fails, keep subtitle outputs and rerun `tts` after fixing provider config.
- Read `krillinai_manifest.json` before rerunning to avoid repeating expensive work.

## Verification

- Require terminal JSON with `"ok": true` for dry-run validation.
- For real work, confirm every independently executed stage succeeded.
- Confirm manifest stages and requested output files, not just the plan response.
- Inspect final requested media/cover files, not only intermediate outputs.
- For shared CLI details, read `skills/krillinai-cli/references/cli-contract.md`.
