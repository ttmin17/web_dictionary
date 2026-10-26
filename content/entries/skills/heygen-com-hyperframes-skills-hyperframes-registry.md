---
slug: heygen-com-hyperframes-skills-hyperframes-registry
name: registry
tagline: About 450 ready-made HyperFrames blocks and components installed as
  editable source - transitions, overlays, titles, kinetic type, captions,
  charts, m
summary: "Plugin installs: Before setup or freshness commands, follow plugin
  execution rules when this skill is inside a HyperFrames plugin."
categories:
  - media-creative
tags:
  - ai-agents
  - animation
  - claude-code
  - ffmpeg
status: active
quality_percentile: 78
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: heygen-com/hyperframes
  subpath: skills/hyperframes-registry
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 72435
  last_commit: 2026-10-26T07:28:28Z
  stars_delta_7d: 2202
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 72435
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: heygen-com/hyperframes
  path: skills/hyperframes-registry/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:17.188Z
  truncated: false
type: agent_skill
skill:
  skill_name: registry
  description: About 450 ready-made HyperFrames blocks and components installed as
    editable source - transitions, overlays, titles, kinetic type, captions,
    charts, map overlays, 3D, camera moves. Use it before hand-building any
    named visual (CRT scanlines, glitch, film grain, a chart); also for
    hyperframes add and catalog.
  folder_path: skills/hyperframes-registry
  extra_files:
    - examples/add-block.md
    - examples/add-component.md
    - references/component-quality-bar.md
    - references/contributing.md
    - references/demo-html-pattern.md
    - references/discovery.md
    - references/install-locations.md
    - references/placeholder-material.md
    - references/search.md
    - references/templates.md
  pack_total_skills: 14
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: heygen-com-hyperframes
---

**Plugin installs:** Before setup or freshness commands, follow [plugin execution rules](https://github.com/heygen-com/hyperframes/blob/main/skills/hyperframes-registry/../hyperframes/references/plugin-installation.md) when this skill is inside a HyperFrames plugin.

# HyperFrames registry

Starting from an item is faster and usually better than writing the effect yourself, and an installed item is ordinary source in your project: change it, cut it down, restyle it.

## Find and install

```bash
npx hyperframes catalog --query "<what the beat should do, in English>" --json
npx hyperframes add <name> --json        # prints the written files and the mount snippet
```

- Query in English even when the video is not: the catalog is indexed in English, and another script returns `No searchable words in query`, which is not a gap.
- Search is local and sends nothing. The default `words` tier only finds items that reuse your words; `--on-device` ranks by meaning after a one-time ~33 MB download. Offer that download and let the person decide; never enable it silently. The `--json` envelope names the tier that answered.
- Narrow with `--type block|component` and `--tag <tag>`. `add <tag>` installs every block with that tag; dependencies install first. `add` needs the network even for an item installed before; search works offline from the cached manifest.
- Nothing fits: report it before you hand-build, on either tier. `catalog --query` prints the line pre-filled (`report_gap` in `--json`): `npx hyperframes feedback --search-miss "<query>" --wanted "<the move you needed>" --tier <tier>`. Describe the effect, not an item name you imagined.

Tiers, `dropped` and `unindexed`, stale indexes, offline behaviour: `references/search.md`.

## What's in it

| Blocks: a scene with its own timeline | Examples |
| --- | --- |
| Transitions | `beat-freeze-cut`, `chromatic-radial-split`, `cinematic-zoom` |
| Overlays and lower thirds | `camcorder-hud`, `editorial-flash-overlay`, `lt-clean-bar` |
| Title cards and kinetic type | `canopy-part-title`, `code-slice-hero` |
| Social, chat and UI cards | `ai-chat-reveal`, `chatgpt-exchange` |
| Code, charts, data and maps | `code-diff`, `bar-chart-race`, `data-chart` |
| 3D, shader and backgrounds | `app-showcase`, `aurora`, `blob` |

| Components: a snippet merged into your scene | Examples |
| --- | --- |
| Motion primitives and text effects | `agent-cursor`, `blur-in`, `bottom-up-letters` |
| Caption styles | `caption-clip-wipe`, `caption-editorial-emphasis` |
| Camera moves | `camera-shake`, `camera-scan-gate` |
| Product demo and UI props | `before-after-wipe`, `browser-device-stage` |
| Textures, particles and effects | `ascii-render-pass`, `grain-overlay` |

## Wiring

- **Block**: installs to `compositions/<name>.html`. Mount it with `data-composition-src`, `data-composition-id` matching the block's own id, `data-start` and the `data-duration` you need; the snippet `add` prints is the starting point. `references/wiring-blocks.md`.
- **Component**: installs to `compositions/components/<name>.html`. Copy its markup, `<style>` and script into your scene, and follow its comment block if it hooks into your timeline. `references/wiring-components.md`.
- Take the largest unit that fits, then edit it. Keep an installed item's ids prefixed as they are, so two items can't collide.
- An item keeps its own variables; set them for one mount with `data-variable-values` on its host (`add --vars '{"title":"…"}'` writes that), and point its colour and font variables at your brand's.
- Beat-synced blocks take hit times from `npx hyperframes beats --json`: the beat times minus the mount's `data-start`.
- Install paths come from `hyperframes.json` (`references/install-locations.md`).

## Contributing

Authoring a new block or component for an upstream PR: `references/contributing.md`, starter templates in `references/templates.md`, quality bar in `references/component-quality-bar.md`.
