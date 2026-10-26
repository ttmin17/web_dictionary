---
slug: nexu-io-open-design-design-templates-aster-atelier
name: aster-atelier
tagline: Agent skill from nexu-io/open-design
summary: Agent skill from nexu-io/open-design
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
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: nexu-io/open-design
  subpath: design-templates/aster-atelier
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 104025
  last_commit: 2026-10-26T07:31:43Z
  stars_delta_7d: 1726
  stars_growth_pct: 1.7
  trending_score: 1755.12
  velocity_source: snapshot_delta
  sparkline_4w:
    - 99839
    - 100908
    - 102299
    - 104025
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nexu-io/open-design
  path: design-templates/aster-atelier/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:44:48.575Z
  truncated: false
type: agent_skill
skill:
  skill_name: aster-atelier
  description: Agent skill from nexu-io/open-design
  folder_path: design-templates/aster-atelier
  extra_files:
    - ASSET-SOURCES.md
    - LICENSE
    - README.md
    - example.html
    - open-design.json
    - references/checklist.md
  pack_total_skills: 401
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nexu-io-open-design
---

# Aster Atelier
Start from `example.html`. It is the full runnable source, with embedded original artwork, styles and JavaScript. Keep its visual composition and functional interactions while adapting the brand and copy to the user's brief. Do not substitute a screenshot or use an unrelated website as source.

## Visual system

- Palette: cobalt `#0758bc`, deep night `#083d86`, ivory `#fffaf0`, parchment `#fff6e3`, bronze `#f5cf7c`.
- System serif typography: Georgia / Times New Roman; system sans and monospace for body and coordinates. No fonts are distributed.
- Editorial composition: generous side margins, large serif headings, small uppercase coordinates, fine rules and open space.
- Five chapters: astronomer hero, point-cloud instrument / approach, observatory artwork and services, questions / contact, oversized wordmark footer.
- The two original illustrations are embedded WebP data URIs. Reuse them directly, preserving aspect and focus; do not fetch the previous inspiration site's resources.
- The armillary instrument is original Canvas 2D point-cloud code with three-dimensional rotation, drawn procedurally. Preserve its animation visibility gating and DPR cap.

## Interaction contract

- Hero CTA scrolls to approach. Navigation has functioning chapter anchors.
- Navigation and contact use native `dialog`, with close buttons, Escape handling and focus return.
- Services and FAQ use native `details` / `summary`.
- Form inputs have visible labels, HTML validation and local-only save feedback. No fake submission or external endpoint. The user can download a text brief.
- Honor reduced motion. Stop the canvas loop while offscreen or in a hidden tab.
- Preserve mobile layout at 390px, legible headings, usable controls and no horizontal overflow.

## Workflow

1. Read the seed and the user's brand/context; keep sensible defaults for missing optional details.
2. Edit copy, semantic content and brand without flattening the layout.
3. Keep it self-contained. Do not introduce external scripts, paid images or fonts.
4. Render the page; check hero, all chapter links, menus, modal focus, forms and mobile overflow.
5. Read `references/checklist.md` and pass its P0 gates before delivery.
6. Deliver the runnable artifact according to the host execution profile: write canonical files when filesystem tools are available, or emit one complete artifact when the host requires text artifacts. Describe backend behavior honestly. Never fabricate project metrics, awards or client endorsements.

`ASSET-SOURCES.md` records the original generated art and code provenance. The demo brand does not represent a real client or imply endorsement.
