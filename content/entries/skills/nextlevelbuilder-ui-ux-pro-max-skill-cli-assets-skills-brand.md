---
slug: nextlevelbuilder-ui-ux-pro-max-skill-cli-assets-skills-brand
name: brand
tagline: Brand voice, visual identity, messaging frameworks, asset management,
  brand consistency. Activate for branded content, tone of voice, marketing
  assets
summary: "- Brand voice definition and content tone guidance - Visual identity
  standards and style guide development - Messaging framework creation - Brand
  consistency review and audit - Asset organization, naming, and approval..."
categories:
  - productivity-ops
tags:
  - ai-skills
  - antigravity
  - claude
  - claude-code
status: active
quality_percentile: 78
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: nextlevelbuilder/ui-ux-pro-max-skill
  subpath: cli/assets/skills/brand
  official_vendor: false
  license: MIT
signals:
  stars: 140519
  last_commit: 2026-10-26T07:06:53Z
  stars_delta_7d: 3172
  stars_growth_pct: 2.3
  trending_score: 3245.26
  velocity_source: snapshot_delta
  sparkline_4w:
    - 133772
    - 135424
    - 137347
    - 140519
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nextlevelbuilder/ui-ux-pro-max-skill
  path: cli/assets/skills/brand/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:41:09.047Z
  truncated: false
type: agent_skill
skill:
  skill_name: brand
  description: Brand voice, visual identity, messaging frameworks, asset
    management, brand consistency. Activate for branded content, tone of voice,
    marketing assets, brand compliance, style guides.
  folder_path: cli/assets/skills/brand
  extra_files:
    - references/approval-checklist.md
    - references/asset-organization.md
    - references/brand-guideline-template.md
    - references/color-palette-management.md
    - references/consistency-checklist.md
    - references/logo-usage-rules.md
    - references/messaging-framework.md
    - references/typography-specifications.md
    - references/update.md
    - references/visual-identity.md
  pack_total_skills: 6
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nextlevelbuilder-ui-ux-pro-max-skill
---

# Brand
Brand identity, voice, messaging, asset management, and consistency frameworks.

## When to Use

- Brand voice definition and content tone guidance
- Visual identity standards and style guide development
- Messaging framework creation
- Brand consistency review and audit
- Asset organization, naming, and approval
- Color palette management and typography specs

## Script Paths

Script paths in this skill and its `references/` are relative to the directory that contains this SKILL.md, not to the project: `scripts/<file>` is this skill's own `scripts/` folder, and `../<skill>/scripts/<file>` is a sibling sub-skill installed alongside it. Build the full path from that directory (Claude Code reports it as the skill's base directory when the skill loads) and keep the working directory at the project root — the scripts read and write project files such as `docs/brand-guidelines.md`, `assets/design-tokens.json` or `src/` relative to it.

## Quick Start

**Inject brand context into prompts:**
```bash
node scripts/inject-brand-context.cjs
node scripts/inject-brand-context.cjs --json
```

**Validate an asset:**
```bash
node scripts/validate-asset.cjs <asset-path>
```

**Extract/compare colors:**
```bash
node scripts/extract-colors.cjs --palette
node scripts/extract-colors.cjs <image-path>
```

## Brand Sync Workflow

```bash
# 1. Edit docs/brand-guidelines.md (or use /brand update)
# 2. Sync to design tokens
node scripts/sync-brand-to-tokens.cjs
# 3. Verify
node scripts/inject-brand-context.cjs --json | head -20
```

The sync stops when it detects existing token files, `:root` custom properties
or Tailwind v4 `@theme` variables in common CSS entry points and their local
CSS imports, or Tailwind theme colors and presets. Review the reported source
before proceeding. If the detected files are the managed
`assets/design-tokens.*` outputs from an earlier sync and replacing them is
intentional, re-run with `--force`.

**Files synced:**
- `docs/brand-guidelines.md` → Source of truth
- `assets/design-tokens.json` → Token definitions
- `assets/design-tokens.css` → CSS variables

## Subcommands

| Subcommand | Description | Reference |
|------------|-------------|-----------|
| `update` | Update brand identity and sync to all design systems | `references/update.md` |

## References

| Topic | File |
|-------|------|
| Voice Framework | `references/voice-framework.md` |
| Visual Identity | `references/visual-identity.md` |
| Messaging | `references/messaging-framework.md` |
| Consistency | `references/consistency-checklist.md` |
| Guidelines Template | `references/brand-guideline-template.md` |
| Asset Organization | `references/asset-organization.md` |
| Color Management | `references/color-palette-management.md` |
| Typography | `references/typography-specifications.md` |
| Logo Usage | `references/logo-usage-rules.md` |
| Approval Checklist | `references/approval-checklist.md` |

## Scripts

| Script | Purpose |
|--------|---------|
| `scripts/inject-brand-context.cjs` | Extract brand context for prompt injection |
| `scripts/sync-brand-to-tokens.cjs` | Sync brand-guidelines.md → design-tokens.json/css |
| `scripts/validate-asset.cjs` | Validate asset naming, size, format |
| `scripts/extract-colors.cjs` | Extract and compare colors against palette |

## Templates

| Template | Purpose |
|----------|---------|
| `templates/brand-guidelines-starter.md` | Complete starter template for new brands |

## Routing

1. Parse subcommand from `$ARGUMENTS` (first word)
2. Load corresponding `references/{subcommand}.md`
3. Execute with remaining arguments
