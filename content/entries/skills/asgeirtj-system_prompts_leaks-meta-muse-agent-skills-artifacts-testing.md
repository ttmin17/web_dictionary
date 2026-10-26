---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-artifacts-testing
name: artifact_testing
tagline: Verify an artifact before delivering it - file deliverables (pdf, pptx,
  docx, xlsx, csv) and web artifacts alike. Use whenever a build is about to ret
summary: The shared render engine is
  /opt/hatch/skills/artifacts/scripts/renderaudit.mjs; renders outlast
  muse.exec's default yield, so size yieldms past the expected runtime and read
  the report file the flags name rather than...
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
  subpath: Meta/muse-agent/skills/artifacts/testing
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
  path: Meta/muse-agent/skills/artifacts/testing/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.836Z
  truncated: false
type: agent_skill
skill:
  skill_name: artifact_testing
  description: Verify an artifact before delivering it - file deliverables (pdf,
    pptx, docx, xlsx, csv) and web artifacts alike. Use whenever a build is
    about to return a link, or a build task asks for validation, QA, or a visual
    check. Covers the per-kind gate scripts, render-and-look verification, and
    leftover-placeholder scanning.
  folder_path: Meta/muse-agent/skills/artifacts/testing
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Artifact verification
One home for verification across the artifact namespace. The rule every
kind shares: a deliverable is verified by looking at what the user will
see, freshly rendered, not by trusting the code that produced it. Never
return a link while a gate below fails; after three failed fix attempts,
report the specific failure and ask for direction instead of iterating.

## File kinds: gates, then eyes

| Kind | Gate |
|---|---|
| pdf | `render_audit.mjs` with the flags the pdf skill's `workflow.md` names, then `/opt/hatch/skills/artifacts/scripts/validate_pdf.sh` |
| presentation | `assemble_deck.mjs`, then `render_audit.mjs` with the flags `workflow.md` names |
| docx | render to PDF with headless LibreOffice (`soffice --headless --convert-to pdf`), then rasterize (`pdftoppm -jpeg -r 100`) |
| xlsx | `/opt/hatch/skills/artifacts/scripts/validate_xlsx.py` |
| csv / md | parse it back (csv: a Python `csv` read; md: read the file) |

The shared render engine is `/opt/hatch/skills/artifacts/scripts/render_audit.mjs`;
renders outlast `muse.exec`'s default yield, so size `yield_ms` past the expected
runtime and read the report file the flags name rather than trusting a
backgrounded command's silence.

**Then look.** Read every validation PNG or page image with fresh eyes - the
generating context sees what it expects, not what rendered. Check first for
text overflow or cut-off content, then overlaps, collisions, cramped or
uneven spacing, low-contrast text, and template decoration left behind.

**Placeholder scan.** Before returning, search the deliverable's text for
leftover scaffolding: TODO, lorem, placeholder, [insert, xxx runs, and
sample rows the user never asked for. Anything found is fixed, not shipped.

## Web artifacts

Web builds keep their own audit tools (`web_artifacts.build` and
`web_artifacts.audit` run the same capture engine with enforcement); this
skill's render-fresh and placeholder rules apply to their output all the
same.
