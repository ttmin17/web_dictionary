---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-artifacts-pdf
name: artifact_pdf
tagline: Build, revise, or manipulate a fixed-layout PDF (report, guide,
  one-pager, printable document). Use whenever a build task's artifact kind is
  pdf, a do
summary: "Follow /opt/hatch/skills/artifacts/testing/SKILL.md: run the gates,
  then read every validation PNG before returning a link."
categories:
  - cloud-infra
tags:
  - ai-agents
  - ai-prompts
  - anthropic
  - chatbot
status: active
quality_percentile: 86
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: asgeirtj/system_prompts_leaks
  subpath: Meta/muse-agent/skills/artifacts/pdf
  official_vendor: false
  license: CC0-1.0
signals:
  stars: 70224
  last_commit: 2026-10-25T19:55:03Z
  stars_delta_7d: 344
  stars_growth_pct: 0.5
  trending_score: 345.69
  velocity_source: snapshot_delta
  sparkline_4w:
    - 69880
    - 70224
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: asgeirtj/system_prompts_leaks
  path: Meta/muse-agent/skills/artifacts/pdf/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.836Z
  truncated: false
type: agent_skill
skill:
  skill_name: artifact_pdf
  description: Build, revise, or manipulate a fixed-layout PDF (report, guide,
    one-pager, printable document). Use whenever a build task's artifact kind is
    pdf, a document build's output format is pdf, or the task reads, merges,
    splits, crops, or fills an existing PDF, including fillable AcroForms.
    Covers authoring the print-CSS HTML source, rendering, the geometry and
    validation gates, existing-PDF manipulation and form filling, and delivery
    under workspace/your_files.
  folder_path: Meta/muse-agent/skills/artifacts/pdf
  extra_files:
    - references/existing-pdfs.md
    - references/visual.md
    - references/workflow.md
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# PDF artifacts
A PDF is authored as HTML with print CSS and rendered through the
shared capture engine. The kept source under `.src/` is the editable truth
for every future revision; the PDF binary is always regenerated, never
patched.

| Task | Read first |
|---|---|
| Any PDF build or edit | `/opt/hatch/skills/artifacts/pdf/references/workflow.md` (the workflow: authoring, render, gates, validation loop) |
| Design and layout | `/opt/hatch/skills/artifacts/pdf/references/visual.md` |
| What the words say: outline, headings, tone, the prose read-back | `/opt/hatch/skills/artifacts/references/prose.md` (shared) |
| The document plots data | `/opt/hatch/skills/artifacts/references/charts.md` (shared) |
| The document shows a place or a map | `/opt/hatch/skills/artifacts/references/maps.md` (shared) |
| Read, merge, split, or extract from an existing PDF; fill a PDF form | `/opt/hatch/skills/artifacts/pdf/references/existing-pdfs.md` |

## Scripts

| Script | What it does |
|---|---|
| `/opt/hatch/skills/artifacts/scripts/render_audit.mjs` (shared) | Renders the HTML source to PDF and PNGs and runs the render gates; `workflow.md` names the flags |
| `/opt/hatch/skills/artifacts/scripts/validate_pdf.sh` | Integrity, page metadata, data-URI embedding, full rasterization; run until it passes |

## Verification

Follow `/opt/hatch/skills/artifacts/testing/SKILL.md`: run the gates, then read every
validation PNG before returning a link.
