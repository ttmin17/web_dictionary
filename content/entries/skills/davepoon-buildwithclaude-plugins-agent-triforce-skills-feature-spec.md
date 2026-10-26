---
slug: davepoon-buildwithclaude-plugins-agent-triforce-skills-feature-spec
name: feature-spec
tagline: Creates a complete product feature specification with acceptance
  criteria, scope, dependencies, and risks. Delegates to the Prometeo (PM)
  agent.
summary: "- Defining a new feature or product requirement - Writing user stories
  with acceptance criteria - Planning product work that needs a structured spec
  - Documenting business requirements before implementation"
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
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/agent-triforce/skills/feature-spec
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
  path: plugins/agent-triforce/skills/feature-spec/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.576Z
  truncated: false
type: agent_skill
skill:
  skill_name: feature-spec
  description: Creates a complete product feature specification with acceptance
    criteria, scope, dependencies, and risks. Delegates to the Prometeo (PM)
    agent.
  folder_path: plugins/agent-triforce/skills/feature-spec
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Feature Spec
Creates a complete product feature specification using the Prometeo (PM) agent.

## When to Use This Skill

- Defining a new feature or product requirement
- Writing user stories with acceptance criteria
- Planning product work that needs a structured spec
- Documenting business requirements before implementation

## What This Skill Does

1. Runs the SIGN IN checklist (identity, task, memory review)
2. Researches existing specs to avoid conflicts
3. Creates a comprehensive spec at `docs/specs/{feature-name}.md`
4. Runs the Spec Completion checklist (TIME OUT)
5. Prepares a structured handoff to the Dev agent
6. Runs the SIGN OUT checklist (memory update, deliverables)

## How to Use

### Basic Usage

```
/feature-spec user authentication with JWT tokens
```

### Detailed Usage

```
/feature-spec multi-tenant billing system with Stripe integration
```

## Example

**User**: `/feature-spec webhook event system`

**Output**: A complete spec at `docs/specs/webhook-event-system.md` containing:
- Problem statement and success metrics
- User stories with GIVEN/WHEN/THEN acceptance criteria
- In-scope and out-of-scope items
- Dependencies, risks, and open questions
- Handoff notes for the Dev agent

## Tips

- Be specific about the feature scope in your description
- The agent will ask clarifying questions rather than guess
- Review the generated spec before passing to implementation
