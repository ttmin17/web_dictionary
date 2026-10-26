---
slug: alirezarezvani-claude-skills-engineering-skills-interview-system-designer
name: interview-system-designer
tagline: This skill should be used when the user asks to "design interview
  processes", "create hiring pipelines", "calibrate interview loops", "generate
  interv
summary: Use this skill to create structured interview loops, standardize
  question quality, and keep hiring signal consistent across interviewers.
categories:
  - coding-agents
tags:
  - agent-plugins
  - agent-skills
  - agentic-ai
  - ai-coding-agent
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: alirezarezvani/claude-skills
  subpath: engineering/skills/interview-system-designer
  official_vendor: false
  license: MIT
signals:
  stars: 28730
  last_commit: 2026-10-23T11:30:28Z
  stars_delta_7d: 523
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 27812
    - 28112
    - 28730
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: alirezarezvani/claude-skills
  path: engineering/skills/interview-system-designer/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.262Z
  truncated: false
type: agent_skill
skill:
  skill_name: interview-system-designer
  description: This skill should be used when the user asks to "design interview
    processes", "create hiring pipelines", "calibrate interview loops",
    "generate interview questions", "design competency matrices", "analyze
    interviewer bias", "create scoring rubrics", "build question banks", or
    "optimize hiring systems". Use for designing role-specific interview loops,
    competency assessments, and hiring calibration systems.
  folder_path: engineering/skills/interview-system-designer
  extra_files:
    - README.md
    - assets/sample_interview_results.json
    - assets/sample_role_definitions.json
    - expected_outputs/product_manager_senior_questions.json
    - expected_outputs/product_manager_senior_questions.txt
    - expected_outputs/senior_software_engineer_senior_interview_loop.json
    - expected_outputs/senior_software_engineer_senior_interview_loop.txt
    - hiring_calibrator.py
    - loop_designer.py
    - question_bank_generator.py
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# Interview System Designer
Comprehensive interview loop planning and calibration support for role-based hiring systems.

## Overview

Use this skill to create structured interview loops, standardize question quality, and keep hiring signal consistent across interviewers.

## Core Capabilities

- Interview loop planning by role and level
- Round-by-round focus and timing recommendations
- Suggested question sets by round type
- Framework support for scoring and calibration
- Bias-reduction and process consistency guidance

## Quick Start

```bash
# Generate a loop plan for a role and level
python3 scripts/interview_planner.py --role "Senior Software Engineer" --level senior

# JSON output for integration with internal tooling
python3 scripts/interview_planner.py --role "Product Manager" --level mid --json
```

## Recommended Workflow

1. Run `scripts/interview_planner.py` to generate a baseline loop.
2. Align rounds to role-specific competencies.
3. Validate scoring rubric consistency with interview panel leads.
4. Review for bias controls before rollout.
5. Recalibrate quarterly using hiring outcome data.

## References

- `references/interview-frameworks.md`
- `references/bias_mitigation_checklist.md`
- `references/competency_matrix_templates.md`
- `references/debrief_facilitation_guide.md`

## Common Pitfalls

- Overweighting one round while ignoring other competency signals
- Using unstructured interviews without standardized scoring
- Skipping calibration sessions for interviewers
- Changing hiring bar without documenting rationale

## Best Practices

1. Keep round objectives explicit and non-overlapping.
2. Require evidence for each score recommendation.
3. Use the same baseline rubric across comparable roles.
4. Revisit loop design based on quality-of-hire outcomes.
