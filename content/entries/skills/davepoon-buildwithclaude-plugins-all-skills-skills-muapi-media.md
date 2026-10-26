---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-muapi-media
name: muapi-media
tagline: Discover current MuAPI image models and run one explicitly confirmed
  asynchronous image generation request with bounded polling. Use when an agent
  nee
summary: "- The user wants to find a current MuAPI image model. - An image
  workflow needs MuAPI's exact model endpoint rather than a remembered alias. -
  The user has explicitly approved a potentially billable image-generation r..."
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
  subpath: plugins/all-skills/skills/muapi-media
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
  path: plugins/all-skills/skills/muapi-media/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.591Z
  truncated: false
type: agent_skill
skill:
  skill_name: muapi-media
  description: Discover current MuAPI image models and run one explicitly
    confirmed asynchronous image generation request with bounded polling. Use
    when an agent needs hosted image generation without hard-coding stale model
    endpoints or request IDs.
  folder_path: plugins/all-skills/skills/muapi-media
  extra_files:
    - scripts/muapi_media.py
    - tests/test_muapi_media.py
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# MuAPI Media
Use the bundled `scripts/muapi_media.py` CLI to discover current MuAPI image models and submit
one explicitly confirmed image-generation request. The CLI uses the live catalog's `name`,
`category`, and already-versioned `endpoint` fields, then polls the standard prediction result
endpoint. It does not assume that the catalog contains an inline request schema; add model-specific
fields only from the current model contract.

## When to use this skill

- The user wants to find a current MuAPI image model.
- An image workflow needs MuAPI's exact model endpoint rather than a remembered alias.
- The user has explicitly approved a potentially billable image-generation request.
- An asynchronous MuAPI prediction needs bounded status polling.

This skill covers text-to-image and image-to-image workflows. Do not use it for MuAPI video, audio,
3D, chat, or model-training requests.

## Setup

Set the API key in the environment. Never pass it as a CLI argument or commit it:

~~~bash
export MUAPI_API_KEY="your-api-key"
~~~

`MUAPI_BASE_URL` is optional and defaults to `https://api.muapi.ai`. Use it only for an approved
compatible deployment.

## Workflow

### 1. Discover current image models

~~~bash
python3 scripts/muapi_media.py models --category image --query flux
~~~

The public catalog currently returns a top-level `models` array. Image-generation entries use
categories such as `Text to Image` and `Image to Image`; their `endpoint` values already include
the `/api/v1/` prefix. Choose an exact model from this output immediately before generation.

### 2. Prepare and review parameters

~~~json
{
  "prompt": "A clean product photograph on a neutral background",
  "aspect_ratio": "1:1"
}
~~~

Keep only fields supported by the selected model's current request contract. The catalog is a
model directory, not a guarantee that every model accepts the same parameters. A prompt is required
for this skill.

### 3. Confirm cost and generate once

~~~bash
python3 scripts/muapi_media.py generate \
  flux-dev \
  --params-file request.json \
  --confirm-paid
~~~

`--confirm-paid` is mandatory. The CLI sends exactly one generation POST, never retries an
ambiguous POST, and polls only GET requests with a finite budget. The model argument may be the
catalog model name or its exact `/api/v1/...` endpoint path.

Use `--output` to download the first completed artifact without sending the API key to the output
host:

~~~bash
python3 scripts/muapi_media.py generate \
  flux-dev \
  --params-file request.json \
  --confirm-paid \
  --output ./muapi-output.png
~~~

## Safety rules

- Keep `MUAPI_API_KEY` server-side and out of logs, prompts, screenshots, and committed files.
- Never retry a generation POST automatically. Require fresh user confirmation before another paid request.
- Poll only with GET and stop at `--max-polls`.
- Preserve the catalog endpoint path; do not prepend `/api/v1/` to an endpoint that already has it.
- Download only HTTPS output URLs and do not forward the API key to the output host.
- Require human review for sensitive, regulated, or high-impact content.

## Output

Commands write structured JSON to stdout. A successful generation includes the selected model,
request ID, terminal status, output URLs, and—when requested—the local artifact path.

## Official references

- [MuAPI model catalog](https://muapi.ai/docs/models)
- [MuAPI API reference](https://muapi.ai/docs/api-reference)
- [MuAPI image models](https://muapi.ai/playground/group/image)
- [MuAPI access keys](https://muapi.ai/access-keys)
