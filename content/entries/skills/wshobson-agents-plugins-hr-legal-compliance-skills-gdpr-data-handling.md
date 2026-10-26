---
slug: wshobson-agents-plugins-hr-legal-compliance-skills-gdpr-data-handling
name: gdpr-data-handling
tagline: "Implement GDPR-compliant data handling with consent management, data
  subject rights, and privacy by design. Use when building systems that process
  EU "
summary: "- Building systems that process EU personal data - Implementing
  consent management - Handling data subject requests (DSRs) - Conducting GDPR
  compliance reviews - Designing privacy-first architectures - Creating data
  p..."
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
  subpath: plugins/hr-legal-compliance/skills/gdpr-data-handling
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
  path: plugins/hr-legal-compliance/skills/gdpr-data-handling/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.197Z
  truncated: false
type: agent_skill
skill:
  skill_name: gdpr-data-handling
  description: Implement GDPR-compliant data handling with consent management,
    data subject rights, and privacy by design. Use when building systems that
    process EU personal data, implementing privacy controls, or conducting GDPR
    compliance reviews.
  folder_path: plugins/hr-legal-compliance/skills/gdpr-data-handling
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

# GDPR Data Handling
Practical implementation guide for GDPR-compliant data processing, consent management, and privacy controls.

## When to Use This Skill

- Building systems that process EU personal data
- Implementing consent management
- Handling data subject requests (DSRs)
- Conducting GDPR compliance reviews
- Designing privacy-first architectures
- Creating data processing agreements

## Core Concepts

### 1. Personal Data Categories

| Category               | Examples                    | Protection Level   |
| ---------------------- | --------------------------- | ------------------ |
| **Basic**              | Name, email, phone          | Standard           |
| **Sensitive (Art. 9)** | Health, religion, ethnicity | Explicit consent   |
| **Criminal (Art. 10)** | Convictions, offenses       | Official authority |
| **Children's**         | Under 16 data               | Parental consent   |

### 2. Legal Bases for Processing

```
Article 6 - Lawful Bases:
├── Consent: Freely given, specific, informed
├── Contract: Necessary for contract performance
├── Legal Obligation: Required by law
├── Vital Interests: Protecting someone's life
├── Public Interest: Official functions
└── Legitimate Interest: Balanced against rights
```

### 3. Data Subject Rights

```
Right to Access (Art. 15)      ─┐
Right to Rectification (Art. 16) │
Right to Erasure (Art. 17)       │ Must respond
Right to Restrict (Art. 18)      │ within 1 month
Right to Portability (Art. 20)   │
Right to Object (Art. 21)       ─┘
```

## Detailed worked examples and patterns

Detailed sections (starting with `## Implementation Patterns`) live in `references/details.md`. Read that file when the navigation summary above is insufficient.

## Best Practices

### Do's

- **Minimize data collection** - Only collect what's needed
- **Document everything** - Processing activities, legal bases
- **Encrypt PII** - At rest and in transit
- **Implement access controls** - Need-to-know basis
- **Regular audits** - Verify compliance continuously

### Don'ts

- **Don't pre-check consent boxes** - Must be opt-in
- **Don't bundle consent** - Separate purposes separately
- **Don't retain indefinitely** - Define and enforce retention
- **Don't ignore DSARs** - 30-day response required
- **Don't transfer without safeguards** - SCCs or adequacy decisions
