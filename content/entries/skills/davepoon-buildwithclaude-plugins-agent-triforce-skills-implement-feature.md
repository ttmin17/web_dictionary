---
slug: davepoon-buildwithclaude-plugins-agent-triforce-skills-implement-feature
name: implement-feature
tagline: Implements a feature from its specification. Reads the spec, designs
  architecture, writes code and tests. Delegates to the Forja (Dev) agent.
summary: "- A feature spec has been approved and is ready for implementation -
  You need architecture design, code, and tests for a defined feature -
  Translating product requirements into working software"
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 95
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/agent-triforce/skills/implement-feature
  official_vendor: false
  license: MIT
signals:
  stars: 3725
  last_commit: 2026-11-05T07:32:57Z
  stars_delta_7d: 47
  stars_growth_pct: 1.3
  trending_score: 47.6
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3631
    - 3650
    - 3678
    - 3725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/agent-triforce/skills/implement-feature/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:11:48.616Z
  truncated: false
type: agent_skill
skill:
  skill_name: implement-feature
  description: Implements a feature from its specification. Reads the spec,
    designs architecture, writes code and tests. Delegates to the Forja (Dev)
    agent.
  folder_path: plugins/agent-triforce/skills/implement-feature
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Implement Feature
Implements a feature from its specification using the Forja (Dev) agent.

## When to Use This Skill

- A feature spec has been approved and is ready for implementation
- You need architecture design, code, and tests for a defined feature
- Translating product requirements into working software

## What This Skill Does

1. Runs the SIGN IN checklist and verifies the spec handoff
2. Designs architecture (creates ADR if needed)
3. Defines interfaces/contracts, then implements in `src/`
4. Writes tests in `tests/` (unit + integration)
5. Runs the Implementation Complete checklist (TIME OUT 1)
6. Runs the Pre-Delivery checklist (TIME OUT 2)
7. Prepares structured handoff to QA agent
8. Runs the SIGN OUT checklist

## How to Use

### Basic Usage

```
/implement-feature webhook-event-system
```

### With Spec Reference

```
/implement-feature docs/specs/webhook-event-system.md
```

## Example

**User**: `/implement-feature user-authentication`

**Output**:
- Implementation in `src/` with all acceptance criteria met
- Tests in `tests/` covering critical paths
- ADR if significant architecture decisions were made
- Handoff notes for QA: files changed, how to test, known limitations

## Tips

- Ensure the feature spec exists before running this skill
- The agent creates an ADR for any significant architecture decisions
- Two TIME OUT checkpoints ensure both correctness and delivery cleanliness
