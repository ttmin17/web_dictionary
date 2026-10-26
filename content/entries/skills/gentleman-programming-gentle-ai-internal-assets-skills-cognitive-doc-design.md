---
slug: gentleman-programming-gentle-ai-internal-assets-skills-cognitive-doc-design
name: cognitive-doc-design
tagline: Agent skill from Gentleman-Programming/gentle-ai
summary: Agent skill from Gentleman-Programming/gentle-ai
categories:
  - coding-agents
tags:
  - agent-skills
  - ai-agents
  - ai-coding
  - claude-code
status: active
quality_percentile: 89
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: Gentleman-Programming/gentle-ai
  subpath: internal/assets/skills/cognitive-doc-design
  official_vendor: false
  license: MIT
signals:
  stars: 8020
  last_commit: 2026-10-26T04:03:33Z
  stars_delta_7d: 171
  stars_growth_pct: 2.2
  trending_score: 174.73
  velocity_source: snapshot_delta
  sparkline_4w:
    - 7736
    - 7849
    - 8020
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Gentleman-Programming/gentle-ai
  path: internal/assets/skills/cognitive-doc-design/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:56.082Z
  truncated: false
type: agent_skill
skill:
  skill_name: cognitive-doc-design
  description: Agent skill from Gentleman-Programming/gentle-ai
  folder_path: internal/assets/skills/cognitive-doc-design
  extra_files: []
  pack_total_skills: 18
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: gentleman-programming-gentle-ai
---

## When to Use

Load this skill when creating or editing documentation that people need to understand quickly, retain, or use during review.

Use it especially for:

- PR descriptions and review notes.
- Contributor or maintainer guides.
- Architecture, workflow, or onboarding docs.
- Any doc that currently feels long, dense, or hard to scan.

## Critical Patterns

| Pattern | Rule |
|---------|------|
| Lead with the answer | Put the decision, action, or outcome first. Context comes after. |
| Progressive disclosure | Start with the happy path, then add details, edge cases, and references. |
| Chunking | Group related information into small sections. Keep flat lists short. |
| Signposting | Use headings, labels, callouts, and summaries so readers know where they are. |
| Recognition over recall | Prefer tables, checklists, examples, and templates over prose that must be remembered. |
| Review empathy | Design docs so reviewers can verify intent without reconstructing the whole story. |

## Documentation Shape

Use this default structure unless the repo already provides a stronger template:

```markdown
# <Outcome-oriented title>

<One paragraph: what changed, who it helps, and why it matters.>

## Quick path

1. <First action>
2. <Second action>
3. <Verification or expected result>

## Details

| Topic | Decision |
|-------|----------|
| <area> | <concise explanation> |

## Checklist

- [ ] <Reader can confirm this>
- [ ] <Reader can confirm that>

## Next step

<Link or action that continues the workflow.>
```

## PR and Review Docs

When documenting a PR, reduce reviewer burnout by making the review path explicit:

- State what to review first.
- State what is intentionally out of scope.
- Link the previous and next PR when work is chained.
- Keep each section focused on one decision or unit of work.
- Use checklists for acceptance criteria and verification.

## Commands

```bash
# Check markdown files changed in the current branch
git diff --name-only -- '*.md'

# Inspect PR changed-line count for cognitive load
gh pr view <PR_NUMBER> --json additions,deletions,changedFiles
```
