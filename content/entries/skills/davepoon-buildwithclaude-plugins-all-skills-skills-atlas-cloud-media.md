---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-atlas-cloud-media
name: atlas-cloud-media
tagline: Discover Atlas Cloud image and video models, inspect their live
  schemas, and submit one confirmed media generation request with bounded GET
  polling. U
summary: "- The user wants to find an available Atlas Cloud image or video
  model. - An integration needs the current model ID, input fields, endpoint, or
  price. - The user wants one explicitly confirmed media generation request..."
categories:
  - cloud-infra
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
  subpath: plugins/all-skills/skills/atlas-cloud-media
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
  path: plugins/all-skills/skills/atlas-cloud-media/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.578Z
  truncated: false
type: agent_skill
skill:
  skill_name: atlas-cloud-media
  description: Discover Atlas Cloud image and video models, inspect their live
    schemas, and submit one confirmed media generation request with bounded GET
    polling. Use when integrating Atlas Cloud media APIs or generating images
    and videos without hard-coding stale model parameters.
  folder_path: plugins/all-skills/skills/atlas-cloud-media
  extra_files:
    - scripts/atlas_media.py
    - tests/test_atlas_media.py
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Atlas Cloud Media
Use the bundled scripts/atlas_media.py CLI to discover current Atlas Cloud
models, inspect a model's live request schema, and run asynchronous image or
video generation.

## When to Use This Skill

- The user wants to find an available Atlas Cloud image or video model.
- An integration needs the current model ID, input fields, endpoint, or price.
- The user wants one explicitly confirmed media generation request.
- An asynchronous Atlas Cloud task needs bounded status polling.

## Setup

Set the API key in the environment. Never pass it as a CLI argument or commit it
to a repository.

~~~bash
export ATLASCLOUD_API_KEY="your-api-key"
~~~

ATLASCLOUD_BASE_URL may point to a compatible deployment. It defaults to
https://api.atlascloud.ai.

## Workflow

### 1. Discover current models

~~~bash
python3 scripts/atlas_media.py models --type Image --query flux
python3 scripts/atlas_media.py models --type Video --query seedance
~~~

Treat model availability and prices as live data. Run discovery immediately
before choosing a model.

### 2. Inspect the exact schema

~~~bash
python3 scripts/atlas_media.py describe black-forest-labs/flux-schnell
~~~

The command resolves the model's current schema URL and reports the required
fields, property definitions, submission endpoint, result endpoint, and catalog
price data. Build the payload from this output instead of copying an old
example.

### 3. Prepare parameters in a file

~~~json
{
  "prompt": "A clean product photograph on a neutral background",
  "size": "1024*1024",
  "num_images": 1
}
~~~

Do not include model; the CLI inserts the selected model ID after validation.

### 4. Confirm cost and generate once

~~~bash
python3 scripts/atlas_media.py generate \
  black-forest-labs/flux-schnell \
  --params-file request.json \
  --confirm-paid
~~~

The --confirm-paid flag is mandatory. The CLI sends exactly one generation POST
and does not retry it. It polls only the schema-defined GET result endpoint,
with a fixed interval and maximum poll count.

Use stdin when a temporary file is unnecessary:

~~~bash
printf '%s' '{"prompt":"A geometric app icon"}' | \
  python3 scripts/atlas_media.py generate \
    black-forest-labs/flux-schnell \
    --params-file - \
    --confirm-paid
~~~

## Safety Rules

- Keep ATLASCLOUD_API_KEY server-side and out of logs, prompts, screenshots,
  browser code, mobile apps, and committed files.
- Never retry a generation POST automatically. If submission fails, report the
  error and require a new explicit confirmation before another paid request.
- Poll only with GET and stop at --max-polls.
- Validate the live schema again when changing models.
- Download returned media URLs before they expire when persistent storage is
  required.
- Require human review for sensitive, regulated, or high-impact content.

## Output

Commands write structured JSON to stdout. Successful generation output includes
the prediction ID, final status, generated URLs, model ID, and the endpoints
resolved from the live schema.
