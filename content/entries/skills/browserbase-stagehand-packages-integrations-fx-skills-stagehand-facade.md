---
slug: browserbase-stagehand-packages-integrations-fx-skills-stagehand-facade
name: facade
tagline: Browse, navigate, inspect, screenshot, and automate websites with the
  exact fx tools mcp_stagehand_run, mcp_stagehand_snapshot, and
  mcp_stagehand_scre
summary: In fx, the tools are registered as mcpstagehandrun,
  mcpstagehandsnapshot, and mcpstagehandscreenshot. Select them with
  mcpselecttool using those exact names before calling them; mcpsearchtools may
  return no results fo...
categories:
  - browser-web
tags:
  - agents
  - ai-agents
  - browser-agent
  - browser-automation
status: active
quality_percentile: 61
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: browserbase/stagehand
  subpath: packages/integrations/fx/skills/stagehand-facade
  official_vendor: false
  license: MIT
signals:
  stars: 25956
  last_commit: 2026-11-05T10:11:36Z
  stars_delta_7d: 142
  stars_growth_pct: 0.6
  trending_score: 142.78
  velocity_source: snapshot_delta
  sparkline_4w:
    - 25731
    - 25814
    - 25956
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: browserbase/stagehand
  path: packages/integrations/fx/skills/stagehand-facade/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:30.611Z
  truncated: false
type: agent_skill
skill:
  skill_name: facade
  description: Browse, navigate, inspect, screenshot, and automate websites with
    the exact fx tools mcp_stagehand_run, mcp_stagehand_snapshot, and
    mcp_stagehand_screenshot.
  folder_path: packages/integrations/fx/skills/stagehand-facade
  extra_files: []
  pack_total_skills: 2
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: browserbase-stagehand
---

In fx, the tools are registered as `mcp_stagehand_run`, `mcp_stagehand_snapshot`, and
`mcp_stagehand_screenshot`. Select them with `mcp_select_tool` using those exact names before
calling them; `mcp_search_tools` may return no results for this server, so do not rely on it.
Never invent another Stagehand tool name. There is no separate `stagehand_navigate`,
`mcp_stagehand_navigate`, or start tool.

You control one persistent browser through exactly three tools:

- snapshot: inspect the active page and hydrate bracketed element IDs.
- run: browse or navigate with JavaScript (for example, `await page.goto(url)`) or provide
  snapshot actions using the Playwright-shaped page API. The first call initializes the browser.
- screenshot: inspect the rendered page visually. Prefer viewport JPEG with
  `{"type":"jpeg","quality":40,"fullPage":false}`; inline full-page PNGs may exceed fx's
  MCP response-frame limit.

Use snapshot actions for simple interactions and run code for multi-step workflows. Pass run exactly one of code or actions; every action uses "op" and "id", never "kind" or "ref". Snapshot IDs are valid only for the latest snapshot of the active page; snapshot again after navigation or stale IDs. Do not launch another browser.
