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
  - agent-ide
  - ai-agents
  - automation
  - bot
status: active
quality_percentile: 65
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: stablyai/orca
  subpath: resources/native-chat-visuals/skills/orca-chat-visuals
  official_vendor: false
  license: MIT
signals:
  stars: 119733
  last_commit: 2026-11-09T09:22:54Z
  stars_delta_7d: 3570
  stars_growth_pct: 3.1
  trending_score: 3679.72
  rank_current: 4
  rank_delta: 0
  velocity_source: snapshot_delta
  sparkline_4w:
    - 97177
    - 106220
    - 116163
    - 119733
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: stablyai/orca
  path: resources/native-chat-visuals/skills/orca-chat-visuals/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:19.238Z
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
  pack_total_skills: 12
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
- Make the saved HTML readable in an ordinary browser too: use paired fallback values such as
  `background:var(--background,#fff);color:var(--foreground,#171717)` for every theme-token use.
  Scripts reading chart colors need a fallback too: `getComputedStyle(document.documentElement)
  .getPropertyValue('--chart-1').trim() || '#2563eb'`. Never redefine Orca's tokens on `:root`:
  those declarations would override the viewer's live theme. Use separate names for local colors.
- Exposed tokens: `--background`, `--foreground`, `--card`, `--card-foreground`, `--popover`,
  `--popover-foreground`, `--primary`, `--primary-foreground`, `--secondary`,
  `--secondary-foreground`, `--muted`, `--muted-foreground`, `--accent`, `--accent-foreground`,
  `--destructive`, `--destructive-foreground`, `--border`, `--input`, `--ring`, `--radius`,
  `--font-sans`, `--font-mono`, and `--chart-1` through `--chart-5`.

## Showing it

After the file exists, put this on its own line in your reply, outside any code block:

::orca-visual{file="latency-by-region-7c1e.html" title="Latency by region"}

`file` is the bare file name, never a path; `title` is optional. At most 8 per reply.
