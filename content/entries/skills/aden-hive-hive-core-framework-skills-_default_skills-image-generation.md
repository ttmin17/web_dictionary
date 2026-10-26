---
slug: aden-hive-hive-core-framework-skills-_default_skills-image-generation
name: image-generation
tagline: Agent skill from aden-hive/hive
summary: Agent skill from aden-hive/hive
categories:
  - agent-frameworks
tags:
  - agent-framework
  - agent-skills
  - anthropic
  - automation
status: active
quality_percentile: 97
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: aden-hive/hive
  subpath: core/framework/skills/_default_skills/image-generation
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 11122
  last_commit: 2026-10-26T07:23:23Z
  stars_delta_7d: 14
  stars_growth_pct: 0.1
  trending_score: 14.02
  velocity_source: snapshot_delta
  sparkline_4w:
    - 11088
    - 11099
    - 11108
    - 11122
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: aden-hive/hive
  path: core/framework/skills/_default_skills/image-generation/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:44:50.192Z
  truncated: false
type: agent_skill
skill:
  skill_name: image-generation
  description: Agent skill from aden-hive/hive
  folder_path: core/framework/skills/_default_skills/image-generation
  extra_files: []
  pack_total_skills: 20
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: aden-hive-hive
---

# Image generation
`image_generate` turns a text prompt into an image (and can edit existing
images). It routes through the Hive image service to OpenAI's **gpt-image-2**;
the cost is billed to the user's Hive credits exactly like an LLM call, so there
is **no API key to configure**. Each generated image is also saved to disk.

## The call

```
image_generate(
    prompt: str,                       # required — what to draw
    reference_images: list[str] = None,# local paths or http(s) URLs to edit/condition on
    size: str = "1024x1024",           # 1024x1024 | 1536x1024 (landscape) | 1024x1536 (portrait) | auto
    quality: str = "low",              # low only (medium & high disabled)
    n: int = 1,                        # 1–4; each image is billed separately
    output_format: str = "png",        # png | jpeg | webp
    model: str = "gpt-image-2",
)
```

Defaults are deliberately cheap and fast. **`quality` is locked to `low`** —
`medium` and `high` are disabled for cost control, and any request for a higher
tier is automatically forced to `low`. Only raise `n` when the user explicitly
wants variations.

### Writing the prompt
Be concrete: name the subject, style (photo, flat vector, 3D, watercolor…),
composition/framing, color palette, mood, and any **text to render** (gpt-image-2
renders text well — quote it exactly, e.g. `the words "Launch Day" in bold`).

## Reference-image editing

Pass `reference_images` to edit, restyle, or compose from existing images —
restyle a product photo, place a logo on a mockup, keep a character's identity
across images, or merge elements. Provide up to 10 local file paths or `http(s)`
URLs; the model conditions on them at high fidelity. Example:

```
image_generate(prompt="Put this product on a marble kitchen counter, soft morning light",
               reference_images=["data/uploads/bottle.png"])
```

A good source of reference images is something the user attached (read it from
the path in their message) or an image you generated earlier (use its saved
`path`).

## How it runs — start, then collect (it's asynchronous)

Image generation can take a couple of minutes, so `image_generate` **runs in the
background**: it returns immediately with `{"status":"started","handle":"bg_…"}`.
You then poll the generic **`collect_result`** tool with that handle until the
image is ready:

```
start = image_generate(prompt="A minimalist bee logo, flat vector, amber on white")
# start.handle == "bg_1"
res = collect_result(handle="bg_1", wait_seconds=30)
#   → {"status":"pending", ...}   ← not done yet; call collect_result again
#   → eventually the real result: {"images":[{"path": …}], "usage": …, …}
```

`collect_result` waits up to `wait_seconds` (≤45) per call and returns
`{"status":"pending"}` until generation finishes — just call it again with the
same handle until you get the real result. It's fine to do other small things
between polls. Don't start a second image while one is pending unless the user
asked for several.

## Show the user

The finished result's JSON has `images` (each with a `path`) plus `model`, `n`,
and `usage`; one image is previewed inline. **Call `attach_file(path)` on the
image path** to surface a downloadable chip in chat. Do not paste base64 or
write `![](https://raw.githubusercontent.com/aden-hive/hive/main/core/framework/skills/_default_skills/image-generation/...)` markdown.

## Failure modes

Errors surface in the `collect_result` result as `{"error": ...}` (the tool
never raises). Handle these:

- **Out of credits / subscription inactive** (`status: 402`) — tell the user
  they're out of Hive credits; do **not** retry.
- **Model unavailable / org verification** (`status: 403`) — report that image
  generation is currently unavailable; do not loop.
- **Request rejected / moderated** (`status: 400`) — the prompt was likely
  refused; rephrase it (less explicit, no real-person likeness) and try once.
- **Rate limited** (`status: 429`) — wait a moment and retry once.
- **Still `pending` after several minutes** — collect_result keeps returning
  pending well past ~4 min: the job likely failed. Tell the user and start once
  more. (`{"error":"Unknown … handle"}` means it was already collected or never
  started — just start a fresh image_generate.)

## End-to-end example

User: "make us a logo — a friendly robot, simple and modern."

1. `image_generate(prompt="A friendly modern robot mascot logo, simple flat vector, rounded shapes, teal and white, centered, plain background", quality="low")` → `{"status":"started","handle":"bg_1"}`
2. `collect_result(handle="bg_1", wait_seconds=30)` — repeat until it returns the real result (not `{"status":"pending"}`).
3. Take `result.images[0].path`, call `attach_file(that_path)`.
4. Reply briefly: "Here's a first take — want it bolder, a different color, or any tweaks?"
