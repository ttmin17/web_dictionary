---
slug: asgeirtj-system_prompts_leaks-meta-muse-agent-skills-artifacts-markdown
name: artifact_markdown
tagline: Build or revise a plain markdown file (md) deliverable such as notes, a
  README, meeting minutes, documentation, or text the user will edit or paste el
summary: "Structure follows the content: real markdown headings, real list
  syntax, tables only where rows and columns genuinely align. The file ships as
  the user's own text, so no build scaffolding, no HTML unless the user aske..."
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
  subpath: Meta/muse-agent/skills/artifacts/markdown
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
  path: Meta/muse-agent/skills/artifacts/markdown/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:00.836Z
  truncated: false
type: agent_skill
skill:
  skill_name: artifact_markdown
  description: Build or revise a plain markdown file (md) deliverable such as
    notes, a README, meeting minutes, documentation, or text the user will edit
    or paste elsewhere. Use whenever a build task's artifact kind is markdown.
    Covers markdown formatting conventions and read-back verification.
  folder_path: Meta/muse-agent/skills/artifacts/markdown
  extra_files: []
  pack_total_skills: 217
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: asgeirtj-system_prompts_leaks
---

# Markdown artifacts
A markdown deliverable is plain text written directly with the file tools:
append sections with `muse.write` in append mode, keep each write small,
and use `muse.edit` for surgical fixes. There is no compile step; the
file at `<slug>.md` in the project directory root is the deliverable.

| Task | Read first |
|---|---|
| Formatting (tables, lists, emphasis, headings) | `/opt/hatch/skills/artifacts/references/markdown.md` (shared) |

Structure follows the content: real markdown headings, real list syntax,
tables only where rows and columns genuinely align. The file ships as the
user's own text, so no build scaffolding, no HTML unless the user asked
for it, and no trailing commentary that isn't part of the document.

## Verification

Follow `/opt/hatch/skills/artifacts/testing/SKILL.md`: read the finished file back
in full before returning the link, checking structure renders as intended
and no placeholder or scratch content remains.
