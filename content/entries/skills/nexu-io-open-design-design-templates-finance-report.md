---
slug: nexu-io-open-design-design-templates-finance-report
name: finance-report
tagline: |-
  Quarterly / monthly financial report — masthead with KPIs, revenue and
  burn charts, P&L summary table, top-line highlights, and an outlook
  paragraph. 
summary: 1. Read the active DESIGN.md. Tables, KPI cards, and chart strokes use
  palette tokens — never invent new ones. 2. Classify the period (monthly /
  quarterly / yearly) and entity (startup, division, project) from the bri...
categories:
  - media-creative
tags:
  - agent-skills
  - ai-design
  - byok
  - claude-code-for-design
status: active
quality_percentile: 76
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: nexu-io/open-design
  subpath: design-templates/finance-report
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 106053
  last_commit: 2026-11-05T12:59:13Z
  stars_delta_7d: 2028
  stars_growth_pct: 1.9
  trending_score: 2067.54
  velocity_source: snapshot_delta
  sparkline_4w:
    - 100908
    - 102299
    - 104025
    - 106053
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nexu-io/open-design
  path: design-templates/finance-report/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:07.777Z
  truncated: false
type: agent_skill
skill:
  skill_name: finance-report
  description: |
    Quarterly / monthly financial report — masthead with KPIs, revenue and
    burn charts, P&L summary table, top-line highlights, and an outlook
    paragraph. Use when the brief mentions "financial report", "Q3 report",
    "MRR review", "P&L", or "财报".
  folder_path: design-templates/finance-report
  extra_files:
    - example.html
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nexu-io-open-design
---

# Finance Report Skill
Produce a single-screen financial report in one self-contained HTML file.

## Workflow

1. **Read the active DESIGN.md.** Tables, KPI cards, and chart strokes use
   palette tokens — never invent new ones.
2. **Classify** the period (monthly / quarterly / yearly) and entity
   (startup, division, project) from the brief. If unspecified, assume a
   quarterly SaaS report and pick believable numbers.
3. **Layout** the page in this order:
   - Masthead: company / period / "Confidential — Finance" badge.
   - Headline KPI strip (4 cards): Revenue, Net new MRR, Gross margin, Cash runway.
   - Revenue trend chart (inline SVG line + area).
   - Cost breakdown chart (inline SVG bar) with a 2–3 bullet caption.
   - P&L summary table (Revenue / Gross profit / Opex / Net) with current vs prior period.
   - Top accounts table with logo placeholders, plan, ARR, status badge.
   - Outlook paragraph + footer with author + signature line.
4. **Write** one self-contained HTML doc (CSS in one inline `<style>` block).
5. **Self-check**: every number ties to a labelled chart or table; deltas
   show direction and percentage; accent colour used at most twice.

## Output contract

```
<artifact identifier="finance-report-q3" type="text/html" title="Q3 Finance Report">
<!doctype html>
<html>...</html>
</artifact>
```
