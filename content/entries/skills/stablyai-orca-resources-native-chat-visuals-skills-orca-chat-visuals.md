---
slug: stablyai-orca-resources-native-chat-visuals-skills-orca-chat-visuals
name: chat-visuals
tagline: Show a chart, diagram, table, report or mockup inline in this Orca chat
  as an HTML page. Use when a visual would help the user understand your answer.
summary: "- Save it in the folder named by ORCACHATSCRATCHDIR (printenv
  ORCACHATSCRATCHDIR; in PowerShell $env:ORCACHATSCRATCHDIR). If it's unset or
  you can't write there, skip the visual. This folder belongs to this chat and
  i..."
categories:
  - agent-frameworks
tags:
  - ade
  - agent-ide
  - ai-agents
  - automation
status: active
quality_percentile: 67
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: stablyai/orca
  subpath: resources/native-chat-visuals/skills/orca-chat-visuals
  official_vendor: false
  license: MIT
signals:
  stars: 106220
  last_commit: 2026-10-26T07:33:33Z
  stars_delta_7d: 9043
  stars_growth_pct: 9.3
  trending_score: 9884.51
  rank_current: 1
  rank_delta: 1
  velocity_source: snapshot_delta
  sparkline_4w:
    - 86961
    - 91386
    - 97177
    - 106220
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: stablyai/orca
  path: resources/native-chat-visuals/skills/orca-chat-visuals/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:09.714Z
  truncated: false
type: agent_skill
skill:
  skill_name: chat-visuals
  description: Show a chart, diagram, table, report or mockup inline in this Orca
    chat as an HTML page. Use when a visual would help the user understand your
    answer. Only available when the ORCA_CHAT_SCRATCH_DIR environment variable
    is set.
  folder_path: resources/native-chat-visuals/skills/orca-chat-visuals
  extra_files: []
  pack_total_skills: 11
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: stablyai-orca
---

# Inline visuals in an Orca chat
Orca can show an HTML page inside your reply. Use one whenever a visual would make the answer
clearer.

## Writing the page

- Save it in the folder named by `ORCA_CHAT_SCRATCH_DIR` (`printenv ORCA_CHAT_SCRATCH_DIR`; in
  PowerShell `$env:ORCA_CHAT_SCRATCH_DIR`). If it's unset or you can't write there, skip the visual.
  This folder belongs to this chat and is kept as long as the chat. Save files meant for the
  project in the workspace.
- One complete HTML file per visual, directly in that folder, under 512 KB, with a new file name
  each time (e.g. `latency-by-region-7c1e.html`): letters, digits, `.`, `_`, `-`, ending in `.html`.
- Inline your styles, scripts and data. Libraries and fonts may load only from cdn.jsdelivr.net,
  unpkg.com, cdnjs.cloudflare.com, esm.sh, fonts.googleapis.com and fonts.gstatic.com. The page
  can't make network requests; use inline SVG or `data:` URLs for images.
- Don't size anything to the viewport height (`100vh`); Orca fits the frame to your content.
- Use Orca's theme variables for surfaces, text, and controls; pair hover `--accent` with
  `--accent-foreground`. Scope fixed-palette CSS to its mockup. Orca updates tokens and
  `color-scheme` live. Charts use `--chart-1` to `--chart-5`.

## Showing it

After the file exists, put this on its own line in your reply, outside any code block:

::orca-visual{file="latency-by-region-7c1e.html" title="Latency by region"}

`file` is the bare file name, never a path; `title` is optional. At most 8 per reply.
