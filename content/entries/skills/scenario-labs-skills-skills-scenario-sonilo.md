---
slug: scenario-labs-skills-skills-scenario-sonilo
name: scenario-sonilo
tagline: "Use when adding sound to a video or generating standalone audio with
  Sonilo models on Scenario via MCP: text-to-sound-effects, text-to-music,
  video-to"
summary: "Sonilo, an audio family on Scenario, splits along two axes: what the
  sound is (sound effects or instrumental music) and what comes back (a
  standalone track, or the source video with the generated track muxed in,
  visua..."
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
  subpath: skills/scenario-sonilo
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
  path: skills/scenario-sonilo/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:47.969Z
  truncated: false
type: agent_skill
skill:
  skill_name: scenario-sonilo
  description: "Use when adding sound to a video or generating standalone audio
    with Sonilo models on Scenario via MCP: text-to-sound-effects,
    text-to-music, video-to-sound-effects or video-to-music from a clip, scoring
    silent AI video, foley, ambience, muxed video-to-video variants returning
    the clip with the new track mixed in, keeping speech while replacing music,
    or per-segment sound control. Keywords: Sonilo V1.1, SFX, soundtrack, score,
    keepSpeechVocal, segments, royalty-free."
  folder_path: skills/scenario-sonilo
  extra_files: []
  pack_total_skills: 166
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: scenario-labs-skills
---

# Scenario Sonilo Audio
## Overview

Sonilo, an audio family on Scenario, splits along two axes: what the sound is (sound effects or
instrumental music) and what comes back (a standalone track, or the source video with the generated
track muxed in, visuals untouched). Picking the member whose return matches the delivery matters
more than any prompt. Discover with `search` and treat `model_schema_get` as the contract.

Connection and the core loop: see the `scenario` skill in this repo; model-agnostic audio work: the
`scenario-audio` skill. If a sibling skill named here is missing from your available skills, ask the
user to install it (`npx skills add scenario-labs/skills --skill <name>`); unattended, proceed from
tool schemas and flag the gap.

## Quick reference

Member names state the mode; input names come from the live schemas:

| Member                 | Key inputs                                                          | Returns                                     |
| ---------------------- | ------------------------------------------------------------------- | ------------------------------------------- |
| Text to SFX            | `prompt`, `duration`, `audioFormat`                                 | one sound effect clip                       |
| Text to Music          | `prompt`, `duration`, `numSamples`                                  | instrumental track                          |
| Video to SFX           | `video`, optional `prompt` or `segments`                            | audio track matching the video length       |
| Video to Music         | `video`, optional `prompt`, `numSamples`, `startOffset`, `duration` | music track                                 |
| Video to Video SFX     | as Video to SFX                                                     | the video with SFX mixed in, plus the track |
| Video to Video (music) | as Video to Music, plus `keepSpeechVocal`                           | the video with music mixed in               |

At authoring time: text SFX ran 1 to 180 seconds (default 8), text music 1 to 600 (default 90),
video inputs took up to 360 seconds, `segments` up to 50, `numSamples` 1 to 3, and `startOffset`
moved in steps of 10 with `startOffset` plus `duration` capped at the video length. `audioFormat`
(aac default, mp3, wav, flac; wav or flac for editing pipelines) exists on the SFX members only, and
on the muxed one it formats the separate track: the video's own audio stays AAC. Two music mux
members were live with the same schema; prefer the newest hit. Every duration knob carries cost, so
`dry_run` before a batch.

## The video is the clock

On video-conditioned members the footage decides when sound happens and the prompt only steers what
it sounds like; the clip's own audio never steers generation, visuals alone are read. An empty
`prompt` is valid and often best: the model captions the clip and covers each scene itself. When one
description cannot fit the whole clip, `segments` gives per-range prompts, contiguous by contract:
the first `start` is 0, each `end` equals the next `start`, and the last stays within the video.
Text to SFX has no timing control at all, so describe one sound event per run, physical words over
moods (hollow, muffled, punchy), source then material then space then intensity, with the duration
intent in the wording as well as the parameter. No member takes a seed, so archive the takes you
like; on the music members `numSamples` buys up to three takes in one run instead of re-rolls.

## What survives a music pass

The music mux members replace the whole original track by default. `keepSpeechVocal: true` isolates
human voice (dialogue, narration, singing, crowds) and ducks the music under it; everything
non-voice (engines, footsteps, ambience, prior foley) is replaced regardless. So never score a clip
after muxing foley into it: when a video needs both, take standalone tracks from Video to SFX and
Video to Music and mix in post. Music comes back instrumental.

## Worked example: foley for a silent gameplay clip

1. `search` with `target="models"`, `query="sonilo"`, `public=true`. Members list `txt2audio`,
   `video2audio`, or `video2video` capabilities; e.g.
   `model_sonilo-v1-1-video-to-video-sound-effects` (a live hit at authoring time: re-discover each
   session).
2. `model_schema_get` with that id: fields and caps before anything else.
3. `upload_asset` the clip (see the `scenario` skill) to get its asset id.
4. `model_run` with that `model_id`, `dry_run=true`, and
   `parameters={"video": "asset_x", "segments": [{"start": 0, "end": 4, "prompt": "footsteps on wet metal, close and sharp"}, {"start": 4, "end": 12, "prompt": "plasma rifle shots, hollow hangar reverb"}]}`:
   cost scales with clip length.
5. Repeat `model_run` with `wait=false`, then `jobs_wait` with the returned job id, re-called with
   `pending_job_ids` on timeout, never a second `model_run`.
6. `asset_display` the muxed video, then `asset_download` it and the separate track.

## Common mistakes

- Muxing when the edit needs a bare track, or the reverse: Video to SFX returns audio only; Video to
  Video SFX returns the finished clip. Pick by delivery.
- Scoring a clip that already carries foley with a music mux member: non-voice sound is replaced and
  the foley is gone.
- Leaving `keepSpeechVocal` off (the default) on a talking-head clip: the narration vanishes with
  the rest of the track.
- Gapped or overlapping `segments`: the contract wants contiguous ranges from 0.
- Packing sequenced events into one Text to SFX prompt: it has no timing control; one event per run.
- Asking any member for speech or vocals: no member produces dialogue, narration, or singing; SFX
  and instrumental music are the whole surface.
