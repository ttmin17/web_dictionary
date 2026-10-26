---
slug: wshobson-agents-plugins-ui-design-skills-responsive-design
name: responsive-design
tagline: Implement modern responsive layouts using container queries, fluid
  typography, CSS Grid, and mobile-first breakpoint strategies. Use when
  building ada
summary: "- Implementing mobile-first responsive layouts - Using container
  queries for component-based responsiveness - Creating fluid typography and
  spacing scales - Building complex layouts with CSS Grid and Flexbox -
  Designi..."
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/ui-design/skills/responsive-design
  official_vendor: false
  license: MIT
signals:
  stars: 41725
  last_commit: 2026-10-26T01:08:14Z
  stars_delta_7d: 673
  stars_growth_pct: 1.6
  trending_score: 684.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
    - 41725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/ui-design/skills/responsive-design/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.206Z
  truncated: false
type: agent_skill
skill:
  skill_name: responsive-design
  description: Implement modern responsive layouts using container queries, fluid
    typography, CSS Grid, and mobile-first breakpoint strategies. Use when
    building adaptive interfaces, implementing fluid layouts, or creating
    component-level responsive behavior.
  folder_path: plugins/ui-design/skills/responsive-design
  extra_files:
    - references/breakpoint-strategies.md
    - references/container-queries.md
    - references/details.md
    - references/fluid-layouts.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Responsive Design
Master modern responsive design techniques to create interfaces that adapt seamlessly across all screen sizes and device contexts.

## When to Use This Skill

- Implementing mobile-first responsive layouts
- Using container queries for component-based responsiveness
- Creating fluid typography and spacing scales
- Building complex layouts with CSS Grid and Flexbox
- Designing breakpoint strategies for design systems
- Implementing responsive images and media
- Creating adaptive navigation patterns
- Building responsive tables and data displays

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Best Practices

1. **Mobile-First**: Start with mobile styles, enhance for larger screens
2. **Content Breakpoints**: Set breakpoints based on content, not devices
3. **Fluid Over Fixed**: Use fluid values for typography and spacing
4. **Container Queries**: Use for component-level responsiveness
5. **Test Real Devices**: Simulators don't catch all issues
6. **Performance**: Optimize images, lazy load off-screen content
7. **Touch Targets**: Maintain 44x44px minimum on mobile
8. **Logical Properties**: Use inline/block for internationalization

## Common Issues

- **Horizontal Overflow**: Content breaking out of viewport
- **Fixed Widths**: Using px instead of relative units
- **Viewport Height**: 100vh issues on mobile browsers
- **Font Size**: Text too small on mobile
- **Touch Targets**: Buttons too small to tap accurately
- **Aspect Ratio**: Images squishing or stretching
- **Z-Index Stacking**: Overlays breaking on different screens
