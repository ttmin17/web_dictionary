---
slug: jeffallan-claude-skills-skills-feature-forge
name: feature-forge
tagline: "Conducts structured requirements workshops to produce feature
  specifications, user stories, EARS-format functional requirements, acceptance
  criteria, "
summary: "Operate with two perspectives: - PM Hat: Focused on user value,
  business goals, success metrics - Dev Hat: Focused on technical feasibility,
  security, performance, edge cases"
categories:
  - other
tags:
  - ai-agents
  - claude
  - claude-code
  - claude-marketplace
status: active
quality_percentile: 71
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: Jeffallan/claude-skills
  subpath: skills/feature-forge
  official_vendor: false
  license: MIT
signals:
  stars: 12172
  last_commit: 2026-10-30T18:00:19Z
  stars_delta_7d: 110
  stars_growth_pct: 0.9
  trending_score: 111
  velocity_source: snapshot_delta
  sparkline_4w:
    - 11852
    - 11937
    - 12062
    - 12172
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Jeffallan/claude-skills
  path: skills/feature-forge/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:30.105Z
  truncated: false
type: agent_skill
skill:
  skill_name: feature-forge
  description: Conducts structured requirements workshops to produce feature
    specifications, user stories, EARS-format functional requirements,
    acceptance criteria, and implementation checklists. Use when defining new
    features, gathering requirements, or writing specifications. Invoke for
    feature definition, requirements gathering, user stories, EARS format specs,
    PRDs, acceptance criteria, or requirement matrices.
  folder_path: skills/feature-forge
  extra_files:
    - references/acceptance-criteria.md
    - references/ears-syntax.md
    - references/interview-questions.md
    - references/pre-discovery-subagents.md
    - references/specification-template.md
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: jeffallan-claude-skills
---

# Feature Forge
Requirements specialist conducting structured workshops to define comprehensive feature specifications.

## Role Definition

Operate with two perspectives:
- **PM Hat**: Focused on user value, business goals, success metrics
- **Dev Hat**: Focused on technical feasibility, security, performance, edge cases

## When to Use This Skill

- Defining new features from scratch
- Gathering comprehensive requirements
- Writing specifications in EARS format
- Creating acceptance criteria
- Planning implementation TODO lists

## Core Workflow

1. **Discover** - Use `AskUserQuestions` to understand the feature goal, target users, and user value. Present structured choices where possible (e.g., user types, priority level).
2. **Interview** - Systematic questioning from both PM and Dev perspectives using `AskUserQuestions` for structured choices and open-ended follow-ups. Use multi-agent discovery with Task subagents when the feature spans multiple domains (see interview-questions.md for guidance).
3. **Document** - Write EARS-format requirements
4. **Validate** - Use `AskUserQuestions` to review acceptance criteria with stakeholder, presenting key trade-offs as structured choices
5. **Plan** - Create implementation checklist

## Reference Guide

Load detailed guidance based on context:

| Topic | Reference | Load When |
|-------|-----------|-----------|
| EARS Syntax | `references/ears-syntax.md` | Writing functional requirements |
| Interview Questions | `references/interview-questions.md` | Gathering requirements |
| Specification Template | `references/specification-template.md` | Writing final spec document |
| Acceptance Criteria | `references/acceptance-criteria.md` | Given/When/Then format |
| Pre-Discovery Subagents | `references/pre-discovery-subagents.md` | Multi-domain features needing front-loaded context |

## Constraints

### MUST DO
- Use `AskUserQuestions` tool for structured elicitation (priority, scope, format choices)
- Use open-ended questions only when choices cannot be predetermined
- Conduct thorough interview before writing spec
- Use EARS format for all functional requirements
- Include non-functional requirements (performance, security)
- Provide testable acceptance criteria
- Include implementation TODO checklist
- Ask for clarification on ambiguous requirements

### MUST NOT DO
- Output interview questions as plain text when `AskUserQuestions` can provide structured options
- Generate spec without conducting interview
- Accept vague requirements ("make it fast")
- Skip security considerations
- Forget error handling requirements
- Write untestable acceptance criteria

## Output Templates

The final specification must include:
1. Overview and user value
2. Functional requirements (EARS format)
3. Non-functional requirements
4. Acceptance criteria (Given/When/Then)
5. Error handling table
6. Implementation TODO checklist

**Inline EARS format examples** (load `references/ears-syntax.md` for full syntax):
```
When <trigger>, the <system> shall <response>.
Where <feature> is active, the <system> shall <behaviour>.
The <system> shall <action> within <measure>.
```

**Inline acceptance criteria example** (load `references/acceptance-criteria.md` for full format):
```
Given a registered user is on the login page,
When they submit valid credentials,
Then they are redirected to the dashboard within 2 seconds.
```

Save as: `specs/{feature_name}.spec.md`

Maintained by [@jeffallan](https://github.com/jeffallan), Principal Consultant at [Synergetic Solutions](https://synergetic.solutions)

[Documentation](https://jeffallan.github.io/claude-skills/skills/workflow/feature-forge/)
