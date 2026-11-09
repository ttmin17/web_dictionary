---
slug: nimbalyst-nimbalyst-packages-extensions-mockuplm-claude-plugin-skills-mockuplm
name: mockuplm
tagline: Create visual UX mockups using HTML/CSS files (.mockup.html). Use when
  the user wants to design UI, wireframes, visual layouts, or plan features
  visua
summary: "- Planning new UI features or screens - Designing layouts and visual
  hierarchy - Creating wireframes or prototypes - Visualizing proposed changes
  to existing screens - Any situation where visual communication helps"
categories:
  - coding-agents
tags:
  - agentic-ai
  - agentic-ide
  - ai-agents
  - ai-coding-assistant
status: active
quality_percentile: 80
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: nimbalyst/nimbalyst
  subpath: packages/extensions/mockuplm/claude-plugin/skills/mockuplm
  official_vendor: false
  license: MIT
signals:
  stars: 2047
  last_commit: 2026-11-04T07:28:07Z
  stars_delta_7d: 24
  stars_growth_pct: 1.2
  trending_score: 24.28
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1931
    - 1975
    - 2023
    - 2047
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nimbalyst/nimbalyst
  path: packages/extensions/mockuplm/claude-plugin/skills/mockuplm/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:28:27.663Z
  truncated: false
type: agent_skill
skill:
  skill_name: mockuplm
  description: Create visual UX mockups using HTML/CSS files (.mockup.html). Use
    when the user wants to design UI, wireframes, visual layouts, or plan
    features visually.
  folder_path: packages/extensions/mockuplm/claude-plugin/skills/mockuplm
  extra_files: []
  pack_total_skills: 16
  is_pack_primary: false
  clients:
    - claude-code
  pack_slug: nimbalyst-nimbalyst
---

# MockupLM - Visual Planning
MockupLM is Nimbalyst's visual mockup system for UI/UX design and planning. Create `.mockup.html` files with HTML and inline CSS to share and iterate on designs with users.

## When to Use MockupLM

- Planning new UI features or screens
- Designing layouts and visual hierarchy
- Creating wireframes or prototypes
- Visualizing proposed changes to existing screens
- Any situation where visual communication helps

**Do NOT use for implementation** - MockupLM is for planning only. If you're implementing actual code, don't create mockup files.

## File Format

- **Extension**: `.mockup.html`
- **Location**: `nimbalyst-local/mockups/` for new designs, `nimbalyst-local/existing-screens/` for replicas of existing UI
- **Structure**: Standalone HTML with inline CSS, no external dependencies

```html
<!DOCTYPE html>
<html>
<head>
  
</head>
<body>
  <!-- Mockup content -->
</body>
</html>
```

## Workflow

1. **Create mockup file** in `nimbalyst-local/mockups/[descriptive-name].mockup.html`
2. **Build the mockup** with HTML and inline CSS
3. **Verify visually** using the Task tool to spawn a sub-agent that will:
   - Capture screenshot with `mcp__nimbalyst__capture_editor_screenshot`
   - Analyze for layout/visual issues
   - Fix with Edit tool if needed
   - Re-capture and iterate until correct

## User Annotations

Users can draw directly on mockups in the editor (circles, arrows, highlights). These annotations are NOT in the HTML source.

**To see user annotations**: Use `mcp__nimbalyst__capture_editor_screenshot` to capture a screenshot that includes the annotations.

When the user draws on a mockup:
1. Capture a screenshot to see what they marked
2. Interpret their visual feedback
3. Update the mockup accordingly

## Design Guidelines

- **Realistic appearance**: Mockups should look like finished UI, not sketches
- **Clean HTML/CSS**: Use semantic HTML and minimal, well-organized CSS
- **Stable selectors**: When regenerating a mockup, preserve existing `id` and `class` values on elements that still represent the same UI; rename or remove them only when that element genuinely changes
- **Modern patterns**: Use flexbox, grid, CSS variables
- **Placeholder content**: Use realistic sample data (lorem ipsum, example names, etc.)
- **Responsive design**: Consider mobile breakpoints when appropriate

## For Existing Screens

When modifying existing UI:

1. Check `nimbalyst-local/existing-screens/` for cached replicas
2. If no replica exists, create a pixel-perfect HTML/CSS replica first
3. Copy to `nimbalyst-local/mockups/` and apply modifications there
4. Never modify the original in existing-screens directly

## File Naming

Use kebab-case with `.mockup.html` extension:
- `settings-page.mockup.html`
- `checkout-flow.mockup.html`
- `user-profile-card.mockup.html`
