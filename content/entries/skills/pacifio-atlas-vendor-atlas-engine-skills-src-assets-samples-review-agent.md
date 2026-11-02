---
slug: pacifio-atlas-vendor-atlas-engine-skills-src-assets-samples-review-agent
name: review-agent
tagline: Perform a read-only, defect-first review of a specified code change and
  return every actionable finding. Use when another agent delegates review of un
summary: 1. Read the applicable AGENTS.md instructions. 2. Inspect the complete
  diff for the requested target and enough surrounding code to understand each
  changed path. 3. Identify concrete regressions introduced by the chan...
categories:
  - agent-frameworks
tags:
  - ai-coding-assistant
  - claude-code
  - codex
  - coding-agents
status: active
quality_percentile: 71
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: pacifio/atlas
  subpath: vendor/atlas-engine/skills/src/assets/samples/review-agent
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9561
  last_commit: 2026-11-02T05:01:45Z
  stars_delta_7d: 18
  stars_growth_pct: 0.2
  trending_score: 18.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9593
    - 9622
    - 9543
    - 9561
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: pacifio/atlas
  path: vendor/atlas-engine/skills/src/assets/samples/review-agent/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:31.061Z
  truncated: false
type: agent_skill
skill:
  skill_name: review-agent
  description: Perform a read-only, defect-first review of a specified code change
    and return every actionable finding. Use when another agent delegates review
    of uncommitted changes, a base-branch diff, a commit, or custom review
    instructions.
  folder_path: vendor/atlas-engine/skills/src/assets/samples/review-agent
  extra_files:
    - agents/openai.yaml
  pack_total_skills: 6
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: pacifio-atlas
---

# Review Agent
Inspect the requested target directly and return every finding that the author would likely fix.
Do not modify files, create commits, push branches, post review comments, or delegate the review
to another agent.

## Review the change

1. Read the applicable `AGENTS.md` instructions.
2. Inspect the complete diff for the requested target and enough surrounding code to understand
   each changed path.
3. Identify concrete regressions introduced by the change. Continue through the whole diff after
   finding the first issue.
4. Check the relevant tests and call sites to confirm that each finding is real and actionable.

For a base-branch review, compare the changes that would actually merge rather than diffing
directly against the branch tip. Resolve the comparison ref to the branch's upstream when that
upstream exists and is ahead of the local branch; otherwise use the local branch. Run
`git merge-base HEAD <comparison-ref>`, then inspect `git diff <merge-base-sha>`. If the local
branch cannot be resolved, try its configured upstream explicitly before reporting that the target
is unavailable.

Flag an issue only when all of these are true:

- It affects correctness, security, performance, or maintainability in a meaningful way.
- It is discrete and actionable.
- It was introduced by the reviewed change.
- The affected scenario or call path can be demonstrated from the code.
- The author would probably fix it if they knew about it.

Do not flag speculative concerns, pre-existing problems, intentional behavior changes, or style
nits that do not obscure the code.

## Write the result

Present findings first, ordered by severity. Use one entry per issue in this form:

`[P1] Imperative finding title — path/to/file.rs:line`

Follow the title with one short paragraph explaining the affected scenario and why the behavior is
wrong. Keep the cited range as small as possible and make sure it overlaps the reviewed diff.

Use these priorities:

- `P0`: universal release blocker or critical failure.
- `P1`: urgent defect that should be fixed next.
- `P2`: ordinary defect that should be fixed.
- `P3`: low-impact issue that is still worth fixing.

If there are no qualifying findings, say `No findings.` Do not invent a finding to fill the result.
After the findings, add a brief overall assessment and mention any material test gaps or residual
risks.
