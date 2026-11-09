---
slug: bytedance-deer-flow-skills-public-chart-visualization
name: chart-visualization
tagline: This skill should be used when the user wants to visualize data. It
  intelligently selects the most suitable chart type from 26 available options,
  extr
summary: "- Time Series: Use generatelinechart (trends) or generateareachart
  (accumulated trends). Use generatedualaxeschart for two different scales. -
  Comparisons: Use generatebarchart (categorical) or generatecolumnchart. Us..."
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-framework
  - agentic-workflow
  - ai-agents
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: bytedance/deer-flow
  subpath: skills/public/chart-visualization
  official_vendor: false
  license: MIT
signals:
  stars: 85169
  last_commit: 2026-11-09T09:06:05Z
  stars_delta_7d: 147
  stars_growth_pct: 0.2
  trending_score: 147.25
  velocity_source: snapshot_delta
  sparkline_4w:
    - 84103
    - 84431
    - 85022
    - 85169
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: bytedance/deer-flow
  path: skills/public/chart-visualization/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:15.113Z
  truncated: false
type: agent_skill
skill:
  skill_name: chart-visualization
  description: This skill should be used when the user wants to visualize data. It
    intelligently selects the most suitable chart type from 26 available
    options, extracts parameters based on detailed specifications, and generates
    a chart image using a JavaScript script.
  folder_path: skills/public/chart-visualization
  extra_files:
    - references/generate_area_chart.md
    - references/generate_bar_chart.md
    - references/generate_boxplot_chart.md
    - references/generate_column_chart.md
    - references/generate_district_map.md
    - references/generate_dual_axes_chart.md
    - references/generate_fishbone_diagram.md
    - references/generate_flow_diagram.md
    - references/generate_funnel_chart.md
    - references/generate_histogram_chart.md
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: bytedance-deer-flow
---

# Chart Visualization Skill
This skill provides a comprehensive workflow for transforming data into visual charts. It handles chart selection, parameter extraction, and image generation.

## Workflow

To visualize data, follow these steps:

### 1. Intelligent Chart Selection
Analyze the user's data features to determine the most appropriate chart type. Use the following guidelines (and consult `references/` for detailed specs):

- **Time Series**: Use `generate_line_chart` (trends) or `generate_area_chart` (accumulated trends). Use `generate_dual_axes_chart` for two different scales.
- **Comparisons**: Use `generate_bar_chart` (categorical) or `generate_column_chart`. Use `generate_histogram_chart` for frequency distributions.
- **Part-to-Whole**: Use `generate_pie_chart` or `generate_treemap_chart` (hierarchical).
- **Relationships & Flow**: Use `generate_scatter_chart` (correlation), `generate_sankey_chart` (flow), or `generate_venn_chart` (overlap).
- **Maps**: Use `generate_district_map` (regions), `generate_pin_map` (points), or `generate_path_map` (routes).
- **Hierarchies & Trees**: Use `generate_organization_chart` or `generate_mind_map`.
- **Specialized**:
    - `generate_radar_chart`: Multi-dimensional comparison.
    - `generate_funnel_chart`: Process stages.
    - `generate_liquid_chart`: Percentage/Progress.
    - `generate_word_cloud_chart`: Text frequency.
    - `generate_boxplot_chart` or `generate_violin_chart`: Statistical distribution.
    - `generate_network_graph`: Complex node-edge relationships.
    - `generate_fishbone_diagram`: Cause-effect analysis.
    - `generate_flow_diagram`: Process flow.
    - `generate_spreadsheet`: Tabular data or pivot tables for structured data display and cross-tabulation.

### 2. Parameter Extraction
Once a chart type is selected, read the corresponding file in the `references/` directory (e.g., `references/generate_line_chart.md`) to identify the required and optional fields.
Extract the data from the user's input and map it to the expected `args` format.

### 3. Chart Generation
Invoke the `scripts/generate.js` script with a JSON payload.

**Payload Format:**
```json
{
  "tool": "generate_chart_type_name",
  "args": {
    "data": [...],
    "title": "...",
    "theme": "...",
    "style": { ... }
  }
}
```

**Execution Command:**
```bash
node ./scripts/generate.js '<payload_json>'
```

### 4. Result Return
The script prints each generated chart's result on stdout (the image URL for chart types; text or JSON for map tools).
A missing `tool`, an unknown tool, or a failed chart-service request is written to stderr. The process exits with status 1 if any item in the batch fails, after printing URLs for the items that succeeded. Present a URL only when the command exits 0.
Return the following to the user:
- The image URL.
- The complete `args` (specification) used for generation.

## Reference Material
Detailed specifications for each chart type are located in the `references/` directory. Consult these files to ensure the `args` passed to the script match the expected schema.

## License

This `SKILL.md` is provided by [antvis/chart-visualization-skills](https://github.com/antvis/chart-visualization-skills).
Licensed under the [MIT License](https://github.com/antvis/chart-visualization-skills/blob/master/LICENSE).
