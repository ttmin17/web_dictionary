---
slug: wshobson-agents-plugins-documentation-generation-skills-architecture-decision-records
name: architecture-decision-records
tagline: Write and maintain Architecture Decision Records (ADRs) following best
  practices for technical decision documentation. Use when documenting
  significan
summary: "- Making significant architectural decisions - Documenting technology
  choices - Recording design trade-offs - Onboarding new team members -
  Reviewing historical decisions - Establishing decision-making processes"
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/documentation-generation/skills/architecture-decision-records
  official_vendor: false
  license: MIT
signals:
  stars: 41725
  last_commit: 2026-10-26T01:08:14Z
  stars_delta_7d: 673
  stars_growth_pct: 1.6
  trending_score: 684.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
    - 41725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/documentation-generation/skills/architecture-decision-records/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.195Z
  truncated: false
type: agent_skill
skill:
  skill_name: architecture-decision-records
  description: Write and maintain Architecture Decision Records (ADRs) following
    best practices for technical decision documentation. Use when documenting
    significant technical decisions, reviewing past architectural choices, or
    establishing decision processes.
  folder_path: plugins/documentation-generation/skills/architecture-decision-records
  extra_files:
    - references/decision-templates.md
    - references/deprecation-rfc-templates.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Architecture Decision Records
Comprehensive patterns for creating, maintaining, and managing Architecture Decision Records (ADRs) that capture the context and rationale behind significant technical decisions.

## When to Use This Skill

- Making significant architectural decisions
- Documenting technology choices
- Recording design trade-offs
- Onboarding new team members
- Reviewing historical decisions
- Establishing decision-making processes

## Core Concepts

### 1. What is an ADR?

An Architecture Decision Record captures:

- **Context**: Why we needed to make a decision
- **Decision**: What we decided
- **Consequences**: What happens as a result

### 2. When to Write an ADR

| Write ADR                  | Skip ADR               |
| -------------------------- | ---------------------- |
| New framework adoption     | Minor version upgrades |
| Database technology choice | Bug fixes              |
| API design patterns        | Implementation details |
| Security architecture      | Routine maintenance    |
| Integration patterns       | Configuration changes  |

### 3. ADR Lifecycle

```
Proposed → Accepted → Deprecated → Superseded
              ↓
           Rejected
```

Before drafting a standard, lightweight, or Y-statement ADR, read [decision templates](https://github.com/wshobson/agents/blob/main/plugins/documentation-generation/skills/architecture-decision-records/references/decision-templates.md).

Before drafting a deprecation ADR or RFC, read [deprecation and RFC templates](https://github.com/wshobson/agents/blob/main/plugins/documentation-generation/skills/architecture-decision-records/references/deprecation-rfc-templates.md).

## ADR Management

### Directory Structure

```
docs/
├── adr/
│   ├── README.md           # Index and guidelines
│   ├── template.md         # Team's ADR template
│   ├── 0001-use-postgresql.md
│   ├── 0002-caching-strategy.md
│   ├── 0003-mongodb-user-profiles.md  # [DEPRECATED]
│   └── 0020-deprecate-mongodb.md      # Supersedes 0003
```

### ADR Index (README.md)

```markdown
# Architecture Decision Records

This directory contains Architecture Decision Records (ADRs) for [Project Name].

## Index

| ADR                                   | Title                              | Status     | Date       |
| ------------------------------------- | ---------------------------------- | ---------- | ---------- |
| [0001](https://github.com/wshobson/agents/blob/main/plugins/documentation-generation/skills/architecture-decision-records/0001-use-postgresql.md)        | Use PostgreSQL as Primary Database | Accepted   | 2024-01-10 |
| [0002](https://github.com/wshobson/agents/blob/main/plugins/documentation-generation/skills/architecture-decision-records/0002-caching-strategy.md)      | Caching Strategy with Redis        | Accepted   | 2024-01-12 |
| [0003](https://github.com/wshobson/agents/blob/main/plugins/documentation-generation/skills/architecture-decision-records/0003-mongodb-user-profiles.md) | MongoDB for User Profiles          | Deprecated | 2023-06-15 |
| [0020](https://github.com/wshobson/agents/blob/main/plugins/documentation-generation/skills/architecture-decision-records/0020-deprecate-mongodb.md)     | Deprecate MongoDB                  | Accepted   | 2024-01-15 |

## Creating a New ADR

1. Copy `template.md` to `NNNN-title-with-dashes.md`
2. Fill in the template
3. Submit PR for review
4. Update this index after approval

## ADR Status

- **Proposed**: Under discussion
- **Accepted**: Decision made, implementing
- **Deprecated**: No longer relevant
- **Superseded**: Replaced by another ADR
- **Rejected**: Considered but not adopted
```

### Automation (adr-tools)

```bash
# Install adr-tools
brew install adr-tools

# Initialize ADR directory
adr init docs/adr

# Create new ADR
adr new "Use PostgreSQL as Primary Database"

# Supersede an ADR
adr new -s 3 "Deprecate MongoDB in Favor of PostgreSQL"

# Generate table of contents (to a separate file, so the hand-written
# index and guidelines in README.md are not overwritten)
adr generate toc > docs/adr/toc.md

# Link related ADRs
adr link 2 "Complements" 1 "Is complemented by"
```

## Review Process

```markdown
## ADR Review Checklist

### Before Submission

- [ ] Context clearly explains the problem
- [ ] All viable options considered
- [ ] Pros/cons balanced and honest
- [ ] Consequences (positive and negative) documented
- [ ] Related ADRs linked

### During Review

- [ ] At least 2 senior engineers reviewed
- [ ] Affected teams consulted
- [ ] Security implications considered
- [ ] Cost implications documented
- [ ] Reversibility assessed

### After Acceptance

- [ ] ADR index updated
- [ ] Team notified
- [ ] Implementation tickets created
- [ ] Related documentation updated
```

## Best Practices

### Do's

- **Write ADRs early** - Before implementation starts
- **Keep them short** - 1-2 pages maximum
- **Be honest about trade-offs** - Include real cons
- **Link related decisions** - Build decision graph
- **Update status** - Deprecate when superseded

### Don'ts

- **Don't change accepted ADRs** - Write new ones to supersede
- **Don't skip context** - Future readers need background
- **Don't hide failures** - Rejected decisions are valuable
- **Don't be vague** - Specific decisions, specific consequences
- **Don't forget implementation** - ADR without action is waste
