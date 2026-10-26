---
slug: scenario-labs-skills-skills-scenario-runway
name: scenario-runway
tagline: "Use when generating or editing video with Runway models on Scenario
  via MCP: text-to-video or image-to-video from a first frame with Gen4.5
  (cinematic"
summary: "Runway's family on Scenario splits by direction: Gen4.5 generates new
  clips from text or a first-frame image; Aleph 2 rewrites existing footage,
  changing what the prompt names while motion, audio, and structure carry..."
categories:
  - media-creative
tags:
  - 3d-models
  - agent-skills
  - ai-agents
  - ai-art
status: active
quality_percentile: 59
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: scenario-labs/skills
  subpath: skills/scenario-runway
  official_vendor: false
  license: MIT
signals:
  stars: 1139
  last_commit: 2026-10-25T22:41:37Z
  stars_delta_7d: 83
  stars_growth_pct: 7.9
  trending_score: 89.52
  velocity_source: snapshot_delta
  sparkline_4w:
    - 995
    - 1056
    - 1139
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: scenario-labs/skills
  path: skills/scenario-runway/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:47.967Z
  truncated: false
type: agent_skill
skill:
  skill_name: scenario-runway
  description: "Use when generating or editing video with Runway models on
    Scenario via MCP: text-to-video or image-to-video from a first frame with
    Gen4.5 (cinematic motion, sequenced actions, camera choreography), or
    video-to-video editing of real footage with Aleph 2 (remove objects, swap
    products, restyle or relight shots, keyframe-pinned reference images, motion
    and audio preserved). Keywords: Runway ML, Gen4.5, Gen-4.5, Aleph, T2V, I2V,
    V2V, first frame."
  folder_path: skills/scenario-runway
  extra_files: []
  pack_total_skills: 166
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: scenario-labs-skills
---

# Scenario Runway Video
## Overview

Runway's family on Scenario splits by direction: Gen4.5 generates new clips from text or a
first-frame image; Aleph 2 rewrites existing footage, changing what the prompt names while motion,
audio, and structure carry over. Discover both with `search`; `model_schema_get` is the contract.

Connection and the core loop: the `scenario` skill; model-agnostic video work: the `scenario-video`
skill. If a sibling skill named here is missing from your available skills, ask the user to install
it (`npx skills add scenario-labs/skills --skill <name>`); unattended, proceed from tool schemas and
flag the gap.

## Quick reference

Mode follows from the inputs (names and caps from the live schema):

| Mode                 | Inputs             | Behavior                                                    |
| -------------------- | ------------------ | ----------------------------------------------------------- |
| Text (Gen4.5)        | `prompt`           | `aspectRatio` honored; `duration` 2 to 10 seconds           |
| First frame (Gen4.5) | `image` + `prompt` | opens on that frame; same `duration`; `aspectRatio` ignored |
| Edit (Aleph 2)       | `video` + `prompt` | rewrites visuals; motion, audio, structure persist          |

At authoring time Aleph capped sources at 30 seconds and 16 MB, separate limits: high-bitrate clips
hit the size cap first. Its median cost ran six times Gen4.5's, a fifteen-fold spread following the
source video: `dry_run` the exact payload first. Median latency neared six minutes, so `jobs_wait`
will time out mid-job; re-call it with `pending_job_ids`.

## Gen4.5 prompts follow the mode

Text mode needs both the visuals and the motion described. A first frame fixes subject, composition,
and palette: spend the whole prompt on motion, camera, and atmosphere. Order beats explicitly
("kneels, then rises, camera cranes up") and give multi-beat prompts 8 to 10 seconds of `duration`.
Name camera moves plainly (locked camera, pan, dolly, tracking, orbit, crane), one or two per clip,
in present-tense prose.

`aspectRatio` takes pixel pairs (`"1280:720"`, `"960:960"`), and text mode honored only the 16:9 and
9:16 pairs at authoring time; get other shapes (1:1, 4:3, 3:4, 21:9) from a first frame with that
geometry instead.

## Aleph changes what you name

An Aleph prompt states the edit: remove, swap, restyle, relight. Everything unnamed persists, along
with motion and audio: Aleph cannot re-choreograph or add camera moves; when motion must change,
generate with Gen4.5. To steer the edit, pin up to 5 reference images: `keyframes` places each image
(`uri`) by `seconds` or `at` (a 0 to 1 fraction); `promptImage` by `positionType` plus
`timestampSeconds` or `positionPercentage`. The arrays are alternatives, never combined.

## Worked example: swap a product in real footage

1. `search` with `target="models"`, `query="runway"`, `public=true`, e.g. `model_runway-aleph-2` for
   editing, `model_runway-gen4-5` for generation (live hits at authoring time: re-discover each
   session).
2. `model_schema_get` with the Aleph id before anything else.
3. Trim or compress a source over the caps (see `scenario-video`); `upload_asset` the clip and
   product still (see the `scenario` skill).
4. `model_run` with `dry_run=true` and the exact
   `parameters={"prompt": "Replace the soda can with the bottle from the reference image. Keep everything else unchanged.", "video": "asset_clip", "keyframes": [{"uri": "asset_bottle", "at": 0}]}`;
   re-estimate after any trim.
5. Repeat with `wait=false`, then `jobs_wait` the returned job id, re-calling with
   `pending_job_ids`; a timeout is not a failure and never justifies a second `model_run`.
6. `asset_display` the output; check the swap holds in every shot.

## Common mistakes

- Sending both `keyframes` and `promptImage`: exclusive alternatives; pick one.
- Restating the first frame in an image-mode prompt: prompt motion and camera instead.
- Passing `aspectRatio` as `"16:9"` or alongside `image`: pixel pairs only, and a first frame
  overrides it.
- Asking Aleph for new motion or camera moves: the source's motion persists by design.
