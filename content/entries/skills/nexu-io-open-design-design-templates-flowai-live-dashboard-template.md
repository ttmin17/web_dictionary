---
slug: nexu-io-open-design-design-templates-flowai-live-dashboard-template
name: flowai-live-dashboard-template
tagline: |-
  Team-management dashboard skill in the FlowAI aesthetic — three tabs
  (Team Members, Team Details, Activity Log), KPI stat row, member table,
  role dist
summary: 1. Read the active DESIGN.md (injected above). Map color, typography,
  spacing, and component styling tokens to the CSS variables used by
  assets/template.html. Do not invent new tokens. 2. Start from
  assets/template.ht...
categories:
  - media-creative
tags:
  - agent-skills
  - ai-design
  - byok
  - claude-code-for-design
status: active
quality_percentile: 77
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: nexu-io/open-design
  subpath: design-templates/flowai-live-dashboard-template
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 106727
  last_commit: 2026-11-09T09:19:26Z
  stars_delta_7d: 674
  stars_growth_pct: 0.6
  trending_score: 678.28
  velocity_source: snapshot_delta
  sparkline_4w:
    - 102299
    - 104025
    - 106053
    - 106727
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nexu-io/open-design
  path: design-templates/flowai-live-dashboard-template/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:53.717Z
  truncated: false
type: agent_skill
skill:
  skill_name: flowai-live-dashboard-template
  description: |
    Team-management dashboard skill in the FlowAI aesthetic — three tabs
    (Team Members, Team Details, Activity Log), KPI stat row, member table,
    role distribution bar chart, online presence and activity sparklines,
    and a top-contributors panel, all in a single self-contained HTML file
    with light/dark theming, hoverable chart tooltips, click-to-zoom panels,
    and CSV export. Use when the brief asks for a team / workspace admin
    dashboard, an interactive admin dashboard with charts, or names FlowAI.
  folder_path: design-templates/flowai-live-dashboard-template
  extra_files:
    - assets/template.html
    - example.html
    - references/checklist.md
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nexu-io-open-design
---

# FlowAI Dashboard Skill
Produce a single-screen, multi-tab team management dashboard inspired by the
FlowAI aesthetic. The output is a self-contained HTML file (no external runtime
dependencies) with built-in interactions: tab switching, an animated bar chart,
hover tooltips on charts, click-to-zoom panels, dark mode toggle, and CSV
export of the visible team table.

## Resource map

```
flowai-live-dashboard-template/
├── SKILL.md
├── assets/
│   └── template.html          # reference seed used as the starting structure
├── references/
│   └── checklist.md           # P0/P1/P2 quality gates
└── example.html               # complete hand-built sample (gallery preview)
```

## Workflow

1. **Read the active DESIGN.md** (injected above). Map color, typography,
   spacing, and component styling tokens to the CSS variables used by
   `assets/template.html`. Do not invent new tokens.
2. Start from `assets/template.html`; never generate the shell from blank.
3. Keep three tabs: `Team Members`, `Team Details`, `Activity Log`. Tabs must
   actually switch and only one view is visible at a time.
4. Generate plausible, specific sample data (real-looking names, IDs, roles,
   departments, dates, percentages). No `Member A / Metric B` placeholders.
5. Required interactions:
   - tab switching with hash sync (`#members | #details | #activity`)
   - role bar chart animates with easing on first reveal of the details tab
   - chart hover tooltips with precise label + value
   - click any panel/card to zoom; click again or press Esc to restore
   - dark mode toggle that re-derives chart colors from CSS variables
   - "Export CSV" button that exports every row currently in the team table,
     including the `Workflow` column
6. Run through `references/checklist.md` before final output.

## Output contract

Emit one short orientation sentence, then the artifact:

```xml
<artifact identifier="flowai-team-dashboard" type="text/html" title="FlowAI Team Dashboard">
<!doctype html>
<html>...</html>
</artifact>
```

The artifact must render correctly when opened directly from disk with no
build step and no network access.
