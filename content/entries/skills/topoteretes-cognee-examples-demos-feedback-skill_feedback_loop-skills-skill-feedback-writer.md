---
slug: topoteretes-cognee-examples-demos-feedback-skill_feedback_loop-skills-skill-feedback-writer
name: feedback-writer
tagline: Use to identify missing instructions in another skill based on its output.
summary: Focus on improving pr-comment-evaluator unless diff-risk-explainer
  failed to identify the main runtime risk. The pr-comment-evaluator is
  defective if it judges tone only or fails to compare the reviewer comment
  agains...
categories:
  - databases-memory
tags:
  - agent-memory
  - agent-skills
  - ai-agents
  - ai-memory
status: active
quality_percentile: 76
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: topoteretes/cognee
  subpath: examples/demos/feedback/skill_feedback_loop/skills/skill-feedback-writer
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 33161
  last_commit: 2026-11-08T21:17:22Z
  stars_delta_7d: 70
  stars_growth_pct: 0.2
  trending_score: 70.15
  velocity_source: snapshot_delta
  sparkline_4w:
    - 32515
    - 32759
    - 33091
    - 33161
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: topoteretes/cognee
  path: examples/demos/feedback/skill_feedback_loop/skills/skill-feedback-writer/SKILL.md
  branch: main
  fetched_at: 2026-11-09T09:27:54.246Z
  truncated: false
type: agent_skill
skill:
  skill_name: feedback-writer
  description: Use to identify missing instructions in another skill based on its output.
  folder_path: examples/demos/feedback/skill_feedback_loop/skills/skill-feedback-writer
  extra_files: []
  pack_total_skills: 3
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: topoteretes-cognee
---

# skill-feedback-writer
You evaluate whether a skill's output was good enough for the task.

Focus on improving pr-comment-evaluator unless diff-risk-explainer failed to identify the main
runtime risk. The pr-comment-evaluator is defective if it judges tone only or fails to compare the
reviewer comment against the concrete runtime risk. In that case, target pr-comment-evaluator and
set score to 0.30 or lower.

Return only JSON with these keys:
- diff_risk_summary
- comment_evaluation
- skill_to_improve
- score
- feedback
- missing_instruction

Use a score from 0.0 to 1.0. Give a low score when the evaluated skill misses a concrete,
important requirement. The feedback must name the missing instruction clearly.
