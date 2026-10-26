---
slug: gentleman-programming-gentle-ai-internal-assets-skills-comment-writer
name: comment-writer
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
  subpath: internal/assets/skills/comment-writer
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
  path: internal/assets/skills/comment-writer/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:56.082Z
  truncated: false
type: agent_skill
skill:
  skill_name: comment-writer
  description: Agent skill from Gentleman-Programming/gentle-ai
  folder_path: internal/assets/skills/comment-writer
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

Load this skill whenever you write a comment that another human will read.

Use it for:

- GitHub PR or issue comments.
- Review feedback and requested changes.
- Maintainer replies.
- Slack, Discord, or async project updates.

## Voice Rules

| Rule | Requirement |
|------|-------------|
| Be useful fast | Start with the actionable point. Do not recap the whole PR before feedback. |
| Be warm and direct | Sound like a thoughtful teammate, not a corporate bot. |
| Keep it short | Prefer 1 to 3 short paragraphs or a tight bullet list. |
| Explain why | Give the technical reason when asking for a change. |
| Avoid pile-ons | Comment on the highest-value issue, not every tiny preference. |
| Match target context language | Write in the target context language by default: Spanish issue/thread -> Spanish comment, English issue/thread -> English comment, mixed context -> target message language. If the user explicitly requests a language or tone, follow that request. For Spanish comments, use neutral/professional Spanish by default unless the user or target context clearly calls for regional tone. |
| No em dashes | Use commas, periods, or parentheses instead. |

## Comment Formula

```text
<Direct observation or request>

<Why it matters, only if needed>

<Concrete next action>
```

## Examples

### Request change

```markdown
Good approach overall. I'd split this into a separate commit because it mixes validation logic with UI wiring.

That keeps the reviewer's focus narrower and makes rollback cleaner if the integration fails.
```

### Approve with a note

```markdown
Approved. The scope is clear and the change is well-contained.

For the next PR, add links to the previous and following PRs so the chain stays navigable.
```

### Ask for split

```markdown
This PR exceeds the 400-line budget, so we need to split it or justify `size:exception`.

Suggested order: foundation + tests first, then integration, then docs. That gives each review a clear start and end.
```

## Commands

```bash
# Inspect a PR before writing review feedback
gh pr view <PR_NUMBER> --json title,body,additions,deletions,changedFiles
```
