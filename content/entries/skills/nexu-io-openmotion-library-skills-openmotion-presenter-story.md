---
slug: nexu-io-openmotion-library-skills-openmotion-presenter-story
name: presenter-story
tagline: OpenMotion — Adapt presenter-led videos using reusable motion design
  recipes for listicles, workflow demonstrations and product walkthroughs. Use
  with
summary: These are design recipes, with attributed reference/remix
  demonstrations in the README showcase. They include no presenter footage,
  executable template or completed OpenMotion recreation. The six executable
  motion-sou...
categories:
  - security-auth
tags:
  - agent-skills
  - ai-agents
  - ai-video
  - byok
status: active
quality_percentile: 87
selection_reason: quality_percentile
first_seen: 2026-11-16
last_updated: 2026-11-16T09:17:13.266Z
source:
  kind: github_repo
  repo: nexu-io/openmotion
  subpath: library/skills/openmotion-presenter-story
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 10016
  last_commit: 2026-11-16T09:11:52Z
  stars_delta_7d: 371
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 10016
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nexu-io/openmotion
  path: library/skills/openmotion-presenter-story/SKILL.md
  branch: main
  fetched_at: 2026-11-16T09:16:13.639Z
  truncated: false
type: agent_skill
skill:
  skill_name: presenter-story
  description: OpenMotion — Adapt presenter-led videos using reusable motion
    design recipes for listicles, workflow demonstrations and product
    walkthroughs. Use with the creator's own footage and measured speech timing
    to combine spoken storytelling, captions, screen recordings and motion.
  folder_path: library/skills/openmotion-presenter-story
  extra_files:
    - agents/openai.yaml
    - assets/ali-abdaal-workflow-reference.mp4
    - assets/ali-abdaal-workflow-result.mp4
    - assets/careerwithriya-reference.mp4
    - assets/careerwithriya-result.mp4
    - assets/john-tagudin-capso-reference.mp4
    - assets/john-tagudin-capso-result.mp4
    - references/presenter-listicle/MOTION_DESIGN.md
    - references/product-walkthrough/MOTION_DESIGN.md
    - references/workflow-demo/MOTION_DESIGN.md
  pack_total_skills: 11
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nexu-io-openmotion
---

# OpenMotion · Presenter Story
Keep the person and their story at the center. Use motion to explain what they say: a ranked point, a useful screenshot, a product action or a visual comparison. Select the closest recipe, then adapt its hierarchy and pacing to the actual recording.

| The creator wants to… | Read |
| --- | --- |
| Teach several ideas with memorable on-screen labels | [Presenter listicle](https://github.com/nexu-io/openmotion/blob/main/library/skills/openmotion-presenter-story/references/presenter-listicle/MOTION_DESIGN.md) |
| Explain a workflow while showing tools and examples | [Workflow demonstration](https://github.com/nexu-io/openmotion/blob/main/library/skills/openmotion-presenter-story/references/workflow-demo/MOTION_DESIGN.md) |
| Tell a product story with a presenter and screen recording | [Product walkthrough](https://github.com/nexu-io/openmotion/blob/main/library/skills/openmotion-presenter-story/references/product-walkthrough/MOTION_DESIGN.md) |

These are **design recipes**, with attributed reference/remix demonstrations in the [README showcase](https://github.com/nexu-io/openmotion/blob/main/library/skills/openmotion-presenter-story/../../../README.md#presenter-motion). They include no presenter footage, executable template or completed OpenMotion recreation. The six executable motion-source profiles are a separate [Motion Design Remix package](https://github.com/nexu-io/openmotion/blob/main/library/skills/openmotion-presenter-story/../openmotion-design-remix/SKILL.md).

If the user selects the packaged [Presenter Tech template](https://github.com/nexu-io/openmotion/blob/main/library/skills/openmotion-presenter-story/../../templates/presenter-tech/README.md), use its included source, input contract and runner through [TEMPLATE.md](https://github.com/nexu-io/openmotion/blob/main/library/skills/openmotion-presenter-story/../../templates/presenter-tech/TEMPLATE.md). Do not rebuild a lookalike from its demo. That local package is separate from Studio-native template import.

## Apply a recipe

Start from the user's brief, footage, brand assets and existing captions. Preserve their topic, language, voice, approved takes and requested scope. Only ask for missing inputs needed for the selected edit. If a transcript or word timing is needed, use an available host transcription/alignment capability or provided timings; do not invent spoken words or word-level clocks from sampled frames.

Map selected source ranges to the output timeline before adding graphics. Record the source file, in/out times, output start, retained speech and overlays. For a new video reference, use OpenMotion's `openmotion-recreate` workflow with this recipe as creative context; for an existing editable project, continue its established editing route. This library Skill adds design context, not another MCP Tool or core production route.

Use the creator's own or supplied presenter recording. Changing topic means rewriting the story and using matching speech, footage and supporting visuals; changing on-screen text over someone else's unrelated speech is not a finished adaptation. Keep the face, mouth, gestures and captions unobstructed. Reframe to the target aspect ratio after checking the actual face and content positions.

Preview at normal speed with sound. Check speech continuity after cuts, caption timing, readable holds and whether each graphic helps the sentence. Retain managed-project revision protection and the existing fixed-revision export path. Deliver editable source and the requested video; compare equivalent story beats with the reference and state which parts were changed. Export checks and the user's creative acceptance remain separate.

## Share the reusable result

After an actual adaptation is reviewed, keep its Motion MD, input contract, editable source, original/source attribution, permitted assets and real reference/remix comparison together. Follow `openmotion-video-to-template` when reusable template production is requested; its `TEMPLATE.md` handoff remains in place. Do not include personal footage, voices or third-party assets in a community package merely because they appeared in a reference.
