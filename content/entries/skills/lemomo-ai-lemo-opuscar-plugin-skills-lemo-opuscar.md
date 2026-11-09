---
slug: lemomo-ai-lemo-opuscar-plugin-skills-lemo-opuscar
name: lemo-opuscar
tagline: Direct and produce a short film made entirely in code, in one of the
  styles of the Lemo-Opuscar library (e.g. Impasto Oil Painting 油画厚涂, Watercolor
  Br
summary: 1. Get the library. Run sh "/scripts/setup.sh". It clones or updates
  the library (default /lemo-opuscar; a clone the user is standing in is used as
  it is) and prints LIB= on its last line. 2. Install the core tools ea...
categories:
  - media-creative
tags:
  - agent-skills
  - ai-agents
  - ai-short-film
  - ai-video
status: active
quality_percentile: 77
selection_reason: quality_percentile
first_seen: 2026-11-02
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: lemomo-ai/lemo-opuscar
  subpath: plugin/skills/lemo-opuscar
  official_vendor: false
  license: MIT
signals:
  stars: 13829
  last_commit: 2026-11-08T08:57:06Z
  stars_delta_7d: 1321
  stars_growth_pct: 10.6
  trending_score: 1460.51
  rank_current: 13
  rank_delta: null
  velocity_source: snapshot_delta
  sparkline_4w:
    - 12508
    - 13829
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: lemomo-ai/lemo-opuscar
  path: plugin/skills/lemo-opuscar/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:41.871Z
  truncated: false
type: agent_skill
skill:
  skill_name: lemo-opuscar
  description: Direct and produce a short film made entirely in code, in one of
    the styles of the Lemo-Opuscar library (e.g. Impasto Oil Painting 油画厚涂,
    Watercolor Brush 水彩笔刷, Ukiyo-e 浮世绘, Satellite Briefing 卫星简报, Exploded
    Teardown 产品拆解). Use when the user asks for a video, film, short, promo,
    explainer or animation (视频、短片、动画、宣传片) in a named style, including explainers
    built from real material such as satellite imagery, laser scans, CAD files
    or archive scans (数据解说、科普、产品拆解), and new films cut from real archive footage
    and documents (剪辑与纪实, e.g. 用档案影像剪一支新闻片); when they want a film about their
    own topic and haven't chosen a style (help them choose); when they want to
    change a style into their own, make their own style from a blank page, or
    use a style they saved (改风格、从空白开始、我的风格); when they start the skill without
    saying what they want; or when they ask which film styles there are. Not for
    plain editing, trimming or converting the user's existing video files.
  folder_path: plugin/skills/lemo-opuscar
  extra_files:
    - scripts/setup.sh
  pack_total_skills: 1
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: lemomo-ai-lemo-opuscar
---

# Lemo-Opuscar
The styles, guides and tools live in the Lemo-Opuscar library (github.com/lemomo-ai/lemo-opuscar). This skill fetches it and hands you over to it.

1. **Get the library.** Run `sh "<skill base directory>/scripts/setup.sh"`. It clones or updates the library (default `~/lemo-opuscar`; a clone the user is standing in is used as it is) and prints `LIB=<path>` on its last line.
2. **Install the core tools early.** Start `sh "<skill base directory>/scripts/setup.sh" deps` right away, in the background if you can: it takes a few minutes the first time. Add `deps voice` or `deps music` later, only if the film needs them (`$LIB/TECHNIQUE.md` §1). Report missing system tools (Node, ffmpeg, Python) in your one round of questions; don't install system software yourself. Packages a style needs (its `STYLE.md` lists them) you install yourself, into the project folder.
3. **Follow the library.** Read `$LIB/AGENTS.md` and do what it says, starting with **Start** (the user's own styles in `~/lemo-my-styles/`; when they started the skill without writing anything, the language question first, then the ways in): finding the style or making their own, the one round of questions, the treatment, production and delivery.

What changes in skill mode:

| | |
|---|---|
| Project folder | `<name>/` in the folder the user started from (lowercase letters, digits, hyphens; avoid `#` and `?` in the path). Wherever the guides say `films/<name>/`, read this folder |
| Running tools | from `$LIB`, with the project's absolute path: `cd "$LIB" && node core/render/still.mjs "<project>" 1.5 3` |
| Library files in pages | absolute URLs: `/core/lib.js`, `/node_modules/three/…` (the project is served at `/@film/`) |
| Library files in scripts and `build.sh` | `$LIB/…`, with `LIB=<path>` at the top of `build.sh`; never `../..` |
| Demo source | not downloaded. `sh "<skill base directory>/scripts/setup.sh" demo <slug>`, only after your `TREATMENT.md` is written, to read its techniques; it is not meant to be rendered. An Edit & Documentary style is the exception: fetch it before the treatment to use the material tools its `STYLE.md` names in `demo/tools/` (`$LIB/AGENTS.md`, "Treatment first") |

Deliver what `$LIB/DIRECTOR.md` §11 lists, in the project folder, and tell the user where it is.
