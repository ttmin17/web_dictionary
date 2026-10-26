---
slug: davepoon-buildwithclaude-plugins-frontend-design-pro-skills-trend-researcher
name: trend-researcher
tagline: Research latest UI/UX trends from Dribbble and design communities. Use
  when starting a design project to understand current visual trends, color
  palet
summary: "Before designing, understand what's trending in the design world. This
  skill helps: - Identify popular visual styles and aesthetics - Discover color
  palette trends - Learn typography approaches - See layout patterns i..."
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/frontend-design-pro/skills/trend-researcher
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/frontend-design-pro/skills/trend-researcher/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.617Z
  truncated: false
type: agent_skill
skill:
  skill_name: trend-researcher
  description: Research latest UI/UX trends from Dribbble and design communities.
    Use when starting a design project to understand current visual trends,
    color palettes, and layout patterns.
  folder_path: plugins/frontend-design-pro/skills/trend-researcher
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Trend Researcher
Research current UI/UX design trends from Dribbble and other design communities to inform design decisions.

## Purpose

Before designing, understand what's trending in the design world. This skill helps:
- Identify popular visual styles and aesthetics
- Discover color palette trends
- Learn typography approaches
- See layout patterns in use
- Avoid outdated or overused styles

## Workflow

### Step 1: Navigate to Dribbble

Visit the popular shots pages:

```
https://dribbble.com/shots/popular/web-design
https://dribbble.com/shots/popular/mobile
```

### Step 2: Screenshot and Analyze

For each page:
1. Take a screenshot of the current view
2. Scroll down and take additional screenshots (2-3 scrolls)
3. Analyze the visible designs for:
   - Dominant color schemes
   - Typography styles (serif vs sans-serif, weight, spacing)
   - Layout patterns (bento, cards, full-bleed, etc.)
   - Animation/motion indicators
   - UI element styles (buttons, cards, navigation)

### Step 3: Identify Patterns

Look for recurring themes:

**Color Trends**
- What primary colors appear most?
- Light vs dark mode preference?
- Gradient usage patterns?
- Accent color choices?

**Typography Trends**
- Display fonts: bold, condensed, decorative?
- Body fonts: clean sans, readable serif?
- Weight trends: heavy, light, mixed?
- Spacing: tight, loose, dramatic?

**Layout Trends**
- Grid systems in use
- White space usage
- Card vs full-section layouts
- Navigation patterns

**UI Element Trends**
- Button styles (rounded, sharp, outlined)
- Card designs (shadows, borders, flat)
- Icon styles (outlined, filled, animated)

### Step 4: Generate Report

Create a structured trend report:

```markdown
## UI/UX Trend Report - [Date]

### Top Visual Trends
1. **[Trend Name]**: [Description with specific examples seen]
2. **[Trend Name]**: [Description with specific examples seen]
3. **[Trend Name]**: [Description with specific examples seen]

### Color Trends
- **Primary colors trending**: [hex codes observed]
- **Background approaches**: [light/dark/gradient patterns]
- **Accent colors**: [popular accent choices]

### Typography Trends
- **Heading styles**: [observations about display fonts]
- **Body text**: [readable font choices]
- **Font weight trends**: [heavy/light/mixed]

### Layout Patterns
1. **[Pattern]**: [description + where seen]
2. **[Pattern]**: [description + where seen]

### Elements to Avoid
- [Outdated pattern 1]
- [Overused style 1]

### Recommended Direction
Based on this analysis, suggest: [aesthetic direction that feels fresh]
```

## Alternative Sources

If Dribbble is unavailable, check:
- `https://www.awwwards.com/websites/` - Award-winning sites
- `https://www.behance.net/galleries/ui-ux` - Behance UI/UX
- `https://www.siteinspire.com/` - Curated site inspiration

## Fallback Mode

If browser tools are unavailable:
1. Note that trend research requires browser access
2. Suggest user share screenshots or describe sites they like
3. Reference general current trends from knowledge:
   - Dark mode with accent colors
   - Bento grid layouts
   - Large typography
   - Micro-interactions
   - Glassmorphism (fading)
   - Neobrutalism (rising)
   - Variable fonts
   - 3D elements and depth

## Output

The trend report should inform:
- Aesthetic direction selection
- Color palette choices
- Typography decisions
- Layout structure
- What to avoid (outdated patterns)
