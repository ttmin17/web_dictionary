---
slug: the-open-agent-openagent-skills-gifgrep
name: gifgrep
tagline: Search GIF providers with CLI/TUI, download results, and extract stills/sheets.
summary: GIF-Grab (gifgrep workflow)
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-ai
  - agi
  - chatbot
status: active
quality_percentile: 85
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: the-open-agent/openagent
  subpath: skills/gifgrep
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 5736
  last_commit: 2026-11-06T13:17:10Z
  stars_delta_7d: 6
  stars_growth_pct: 0.1
  trending_score: 6.01
  velocity_source: snapshot_delta
  sparkline_4w:
    - 5698
    - 5712
    - 5730
    - 5736
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: the-open-agent/openagent
  path: skills/gifgrep/SKILL.md
  branch: master
  fetched_at: 2026-11-09T09:27:08.040Z
  truncated: false
type: agent_skill
skill:
  skill_name: gifgrep
  description: Search GIF providers with CLI/TUI, download results, and extract
    stills/sheets.
  folder_path: skills/gifgrep
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: the-open-agent-openagent
---

# gifgrep
Use `gifgrep` to search GIF providers (Tenor/Giphy), browse in a TUI, download results, and extract stills or sheets.

GIF-Grab (gifgrep workflow)

- Search → preview → download → extract (still/sheet) for fast review and sharing.

Quick start

- `gifgrep cats --max 5`
- `gifgrep cats --format url | head -n 5`
- `gifgrep search --json cats | jq '.[0].url'`
- `gifgrep tui "office handshake"`
- `gifgrep cats --download --max 1 --format url`

TUI + previews

- TUI: `gifgrep tui "query"`
- CLI still previews: `--thumbs` (Kitty/Ghostty only; still frame)

Download + reveal

- `--download` saves to `~/Downloads`
- `--reveal` shows the last download in Finder

Stills + sheets

- `gifgrep still ./clip.gif --at 1.5s -o still.png`
- `gifgrep sheet ./clip.gif --frames 9 --cols 3 -o sheet.png`
- Sheets = single PNG grid of sampled frames (great for quick review, docs, PRs, chat).
- Tune: `--frames` (count), `--cols` (grid width), `--padding` (spacing).

Providers

- `--source auto|tenor|giphy`
- `GIPHY_API_KEY` required for `--source giphy`
- `TENOR_API_KEY` optional (Tenor demo key used if unset)

Output

- `--json` prints an array of results (`id`, `title`, `url`, `preview_url`, `tags`, `width`, `height`)
- `--format` for pipe-friendly fields (e.g., `url`)

Environment tweaks

- `GIFGREP_SOFTWARE_ANIM=1` to force software animation
- `GIFGREP_CELL_ASPECT=0.5` to tweak preview geometry
