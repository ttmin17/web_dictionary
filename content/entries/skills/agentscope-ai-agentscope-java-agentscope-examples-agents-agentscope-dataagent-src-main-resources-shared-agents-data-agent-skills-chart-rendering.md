---
slug: agentscope-ai-agentscope-java-agentscope-examples-agents-agentscope-dataagent-src-main-resources-shared-agents-data-agent-skills-chart-rendering
name: chart-rendering
tagline: Visualise the result of an analysis as a chart (line, bar, area,
  scatter, etc.). Use when the user asks to "plot...", "chart...", "show me the
  trend o
summary: If none fit, ask the user which view they want — do not default to "any
  chart will do".
categories:
  - agent-frameworks
tags:
  - adk
  - agent-framework
  - agentic
  - agentic-ai
status: active
quality_percentile: 94
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: agentscope-ai/agentscope-java
  subpath: agentscope-examples/agents/agentscope-dataagent/src/main/resources/shared/agents/data-agent/skills/chart-rendering
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 6265
  last_commit: 2026-11-05T08:34:33Z
  stars_delta_7d: 144
  stars_growth_pct: 2.4
  trending_score: 147.39
  velocity_source: snapshot_delta
  sparkline_4w:
    - 6038
    - 6121
    - 6265
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: agentscope-ai/agentscope-java
  path: agentscope-examples/agents/agentscope-dataagent/src/main/resources/shared/agents/data-agent/skills/chart-rendering/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:59.722Z
  truncated: false
type: agent_skill
skill:
  skill_name: chart-rendering
  description: Visualise the result of an analysis as a chart (line, bar, area,
    scatter, etc.). Use when the user asks to "plot...", "chart...", "show me
    the trend of...", "visualise...", or when a numerical result has more than
    ~10 rows and would be easier to read as a picture. Produces an image file
    plus the script that generated it.
  folder_path: agentscope-examples/agents/agentscope-dataagent/src/main/resources/shared/agents/data-agent/skills/chart-rendering
  extra_files: []
  pack_total_skills: 19
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: agentscope-ai-agentscope-java
---

# Chart Rendering Skill
Repeatable SOP for turning a result set into a chart that actually communicates
the point.

## Steps

1. **Match chart type to question.** Decide *before* drawing:

   | Question shape | Chart |
   |----------------|-------|
   | "How does X change over time?" | Line (single series) or multi-line |
   | "Composition / share of total" | Stacked bar, or 100% stacked area |
   | "Comparison across a small set of categories" | Bar (horizontal if labels are long) |
   | "Relationship between two numeric variables" | Scatter |
   | "Distribution of a single variable" | Histogram or box plot |
   | "Cumulative total" | Area |

   If none fit, ask the user which view they want — do not default to "any chart
   will do".

2. **Prepare the data.** The query result from the [[sql-analysis]] Skill should
   already be tidy (one row per data point, one column per dimension). If not,
   reshape first using pandas (`pivot`, `melt`, `groupby`). Save the cleaned
   frame to `knowledge/cache/<topic>.csv` so it can be re-rendered.

3. **Render with matplotlib.** Write the script to a file under
   `scratch/charts/<topic>.py` and execute it via `shell_run`. Conventions:
   - **Title** — one sentence answering the question (not "Untitled chart").
   - **Axes** — label both, include units (`Active users (count)`,
     `Date (UTC)`).
   - **Legend** — include only if there is more than one series.
   - **Colours** — use the matplotlib default palette unless the user has a
     stated brand colour in `knowledge/style.md`.
   - **Output** — save as PNG (`bbox_inches='tight'`, `dpi=150`) under
     `knowledge/charts/<topic>.png`.

4. **Show and explain.** In the assistant reply, link the saved image with a
   markdown image embed (`![title](https://raw.githubusercontent.com/agentscope-ai/agentscope-java/main/agentscope-examples/agents/agentscope-dataagent/src/main/resources/shared/agents/data-agent/skills/chart-rendering/knowledge/charts/<topic>.png)`) and write
   **2–3 sentences interpreting it** — what the chart shows, the one thing the
   user should take away, and any caveat (incomplete latest data point,
   outliers excluded, etc.).

5. **Keep the script reproducible.** The chart file is the artefact; the script
   under `scratch/charts/<topic>.py` is the source of truth. If the user asks
   for a tweak ("can we use a log y-axis?"), edit the script and re-run — do
   not regenerate from scratch.

## Anti-patterns

- ❌ Pie charts with > 5 slices.
- ❌ Charting raw counts when proportions are what the user actually asked.
- ❌ A chart whose axes have no labels or unit.
- ❌ Embedding the image without 2 sentences of interpretation.

## When to delegate

If the user wants a multi-chart dashboard with narrative around it (e.g. "build
me a weekly product health deck"), **spawn the `report-writer` sub-agent** —
this Skill is for individual charts.
