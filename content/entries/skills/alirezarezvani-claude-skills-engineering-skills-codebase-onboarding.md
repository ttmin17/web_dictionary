---
slug: alirezarezvani-claude-skills-engineering-skills-codebase-onboarding
name: codebase-onboarding
tagline: Analyze a codebase and generate onboarding documentation for engineers,
  tech leads, and contractors. Fast fact-gathering and repeatable onboarding out
summary: Analyze a codebase and generate onboarding documentation for engineers,
  tech leads, and contractors. This skill is optimized for fast fact-gathering
  and repeatable onboarding outputs.
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
  subpath: engineering/skills/codebase-onboarding
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
  path: engineering/skills/codebase-onboarding/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.261Z
  truncated: false
type: agent_skill
skill:
  skill_name: codebase-onboarding
  description: Analyze a codebase and generate onboarding documentation for
    engineers, tech leads, and contractors. Fast fact-gathering and repeatable
    onboarding outputs. Use when onboarding a new engineer, writing
    architecture-overview docs for a new project, or producing tech-lead
    briefings for unfamiliar repos.
  folder_path: engineering/skills/codebase-onboarding
  extra_files:
    - references/onboarding-template.md
    - references/output-format-templates.md
    - scripts/codebase_analyzer.py
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# Codebase Onboarding
**Tier:** POWERFUL  
**Category:** Engineering  
**Domain:** Documentation / Developer Experience

---

## Overview

Analyze a codebase and generate onboarding documentation for engineers, tech leads, and contractors. This skill is optimized for fast fact-gathering and repeatable onboarding outputs.

## Core Capabilities

- Architecture and stack discovery from repository signals
- Key file and config inventory for new contributors
- Local setup and common-task guidance generation
- Audience-aware documentation framing
- Debugging and contribution checklist scaffolding

---

## When to Use

- Onboarding a new team member or contractor
- Rebuilding stale project docs after large refactors
- Preparing internal handoff documentation
- Creating a standardized onboarding packet for services

---

## Quick Start

```bash
# 1) Gather codebase facts
python3 scripts/codebase_analyzer.py /path/to/repo

# 2) Export machine-readable output
python3 scripts/codebase_analyzer.py /path/to/repo --json

# 3) Use the template to draft onboarding docs
# See references/onboarding-template.md
```

---

## Recommended Workflow

1. Run `scripts/codebase_analyzer.py` against the target repository.
2. Capture key signals: file counts, detected languages, config files, top-level structure.
3. Fill the onboarding template in `references/onboarding-template.md`.
4. Tailor output depth by audience:
   - Junior: setup + guardrails
   - Senior: architecture + operational concerns
   - Contractor: scoped ownership + integration boundaries

---

## Onboarding Document Template

Detailed template and section examples live in:
- `references/onboarding-template.md`
- `references/output-format-templates.md`

---

## Common Pitfalls

- Writing docs without validating setup commands on a clean environment
- Mixing architecture deep-dives into contractor-oriented docs
- Omitting troubleshooting and verification steps
- Letting onboarding docs drift from current repo state

## Best Practices

1. Keep setup instructions executable and time-bounded.
2. Document the "why" for key architectural decisions.
3. Update docs in the same PR as behavior changes.
4. Treat onboarding docs as living operational assets, not one-time deliverables.
