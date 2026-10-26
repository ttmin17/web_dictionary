---
slug: wshobson-agents-plugins-security-scanning-skills-security-requirement-extraction
name: security-requirement-extraction
tagline: Derive security requirements from threat models and business context.
  Use when translating threats into actionable requirements, creating security
  use
summary: "- Converting threat models to requirements - Writing security user
  stories - Creating security test cases - Building security acceptance criteria
  - Compliance requirement mapping - Security architecture documentation"
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
  subpath: plugins/security-scanning/skills/security-requirement-extraction
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
  path: plugins/security-scanning/skills/security-requirement-extraction/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.204Z
  truncated: false
type: agent_skill
skill:
  skill_name: security-requirement-extraction
  description: Derive security requirements from threat models and business
    context. Use when translating threats into actionable requirements, creating
    security user stories, or building security test cases.
  folder_path: plugins/security-scanning/skills/security-requirement-extraction
  extra_files:
    - references/details.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# Security Requirement Extraction
Transform threat analysis into actionable security requirements.

## When to Use This Skill

- Converting threat models to requirements
- Writing security user stories
- Creating security test cases
- Building security acceptance criteria
- Compliance requirement mapping
- Security architecture documentation

## Core Concepts

### 1. Requirement Categories

```
Business Requirements → Security Requirements → Technical Controls
         ↓                       ↓                      ↓
  "Protect customer    "Encrypt PII at rest"   "AES-256 encryption
   data"                                        with KMS key rotation"
```

### 2. Security Requirement Types

| Type               | Focus                   | Example                               |
| ------------------ | ----------------------- | ------------------------------------- |
| **Functional**     | What system must do     | "System must authenticate users"      |
| **Non-functional** | How system must perform | "Authentication must complete in <2s" |
| **Constraint**     | Limitations imposed     | "Must use approved crypto libraries"  |

### 3. Requirement Attributes

| Attribute        | Description                 |
| ---------------- | --------------------------- |
| **Traceability** | Links to threats/compliance |
| **Testability**  | Can be verified             |
| **Priority**     | Business importance         |
| **Risk Level**   | Impact if not met           |

## Templates and detailed worked examples

Full template library lives in `references/details.md`. Read that file when you need concrete templates for this skill.

## Best Practices

### Do's

- **Trace to threats** - Every requirement should map to threats
- **Be specific** - Vague requirements can't be tested
- **Include acceptance criteria** - Define "done"
- **Consider compliance** - Map to frameworks early
- **Review regularly** - Requirements evolve with threats

### Don'ts

- **Don't be generic** - "Be secure" is not a requirement
- **Don't skip rationale** - Explain why it matters
- **Don't ignore priorities** - Not all requirements are equal
- **Don't forget testability** - If you can't test it, you can't verify it
- **Don't work in isolation** - Involve stakeholders
