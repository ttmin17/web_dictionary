---
slug: davepoon-buildwithclaude-plugins-gsd-skills-add-backlog
name: gsd:add-backlog
tagline: Add an idea to the backlog parking lot (999.x numbering)
summary: Add a backlog item to the roadmap using 999.x numbering. Backlog items
  are unsequenced ideas that aren't ready for active planning — they live
  outside the normal phase sequence and accumulate context over time.
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/gsd/skills/add-backlog
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/gsd/skills/add-backlog/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.617Z
  truncated: false
type: agent_skill
skill:
  skill_name: gsd:add-backlog
  description: Add an idea to the backlog parking lot (999.x numbering)
  folder_path: plugins/gsd/skills/add-backlog
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

<objective>
Add a backlog item to the roadmap using 999.x numbering. Backlog items are
unsequenced ideas that aren't ready for active planning — they live outside
the normal phase sequence and accumulate context over time.
</objective>

<process>

1. **Read ROADMAP.md** to find existing backlog entries:
   ```bash
   cat .planning/ROADMAP.md
   ```

2. **Find next backlog number:**
   ```bash
   NEXT=$(gsd-sdk query phase.next-decimal 999 --raw)
   ```
   If no 999.x phases exist, start at 999.1.

3. **Add to ROADMAP.md** under a `## Backlog` section. If the section doesn't exist, create it at the end.
   Write the ROADMAP entry BEFORE creating the directory — this ensures directory existence is always
   a reliable indicator that the phase is already registered, which prevents false duplicate detection
   in any hook that checks for existing 999.x directories (#2280):

   ```markdown
   ## Backlog

   ### Phase {NEXT}: {description} (BACKLOG)

   **Goal:** [Captured for future planning]
   **Requirements:** TBD
   **Plans:** 0 plans

   Plans:
   - [ ] TBD (promote with /gsd:review-backlog when ready)
   ```

4. **Create the phase directory:**
   ```bash
   SLUG=$(gsd-sdk query generate-slug "$ARGUMENTS" --raw)
   mkdir -p ".planning/phases/${NEXT}-${SLUG}"
   touch ".planning/phases/${NEXT}-${SLUG}/.gitkeep"
   ```

5. **Commit:**
   ```bash
   gsd-sdk query commit "docs: add backlog item ${NEXT} — ${ARGUMENTS}" .planning/ROADMAP.md ".planning/phases/${NEXT}-${SLUG}/.gitkeep"
   ```

6. **Report:**
   ```
   ## 📋 Backlog Item Added

   Phase {NEXT}: {description}
   Directory: .planning/phases/{NEXT}-{slug}/

   This item lives in the backlog parking lot.
   Use /gsd:discuss-phase {NEXT} to explore it further.
   Use /gsd:review-backlog to promote items to active milestone.
   ```

</process>

<notes>
- 999.x numbering keeps backlog items out of the active phase sequence
- Phase directories are created immediately, so /gsd:discuss-phase and /gsd:plan-phase work on them
- No `Depends on:` field — backlog items are unsequenced by definition
- Sparse numbering is fine (999.1, 999.3) — always uses next-decimal
</notes>
