---
slug: mukul975-anthropic-cybersecurity-skills-skills-implementing-anti-phishing-training-program
name: implementing-anti-phishing-training-program
tagline: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
summary: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
categories:
  - security-auth
tags:
  - ai-agents
  - claude-code
  - cloud-security
  - cybersecurity
status: active
quality_percentile: 59
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: mukul975/Anthropic-Cybersecurity-Skills
  subpath: skills/implementing-anti-phishing-training-program
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 35031
  last_commit: 2026-08-31T04:32:44Z
  stars_delta_7d: 353
  stars_growth_pct: 1
  trending_score: 356.59
  velocity_source: snapshot_delta
  sparkline_4w:
    - 33900
    - 34367
    - 34678
    - 35031
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mukul975/Anthropic-Cybersecurity-Skills
  path: skills/implementing-anti-phishing-training-program/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.357Z
  truncated: false
type: agent_skill
skill:
  skill_name: implementing-anti-phishing-training-program
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/implementing-anti-phishing-training-program
  extra_files:
    - LICENSE
    - assets/template.md
    - references/api-reference.md
    - references/standards.md
    - references/workflows.md
    - scripts/agent.py
    - scripts/process.py
  pack_total_skills: 818
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mukul975-anthropic-cybersecurity-skills
---

# Implementing Anti-Phishing Training Program
## Overview
Security awareness training is the human layer of phishing defense. An effective anti-phishing training program combines regular simulations, interactive learning modules, metric tracking, and positive reinforcement to build a security-conscious culture. This skill covers designing, deploying, and measuring a comprehensive phishing awareness program using platforms like KnowBe4, Proofpoint Security Awareness, and open-source alternatives.


## When to Use

- When deploying or configuring implementing anti phishing training program capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites
- Management buy-in and budget approval
- Security awareness training platform (KnowBe4, Proofpoint SAT, Cofense)
- Employee email list and organizational structure
- Baseline phishing susceptibility data (from initial simulation)
- Learning management system (LMS) integration capability

## Key Concepts

### Training Program Pillars
1. **Baseline Assessment**: Initial phishing simulation to measure current susceptibility
2. **Interactive Training**: Role-based modules covering phishing identification
3. **Regular Simulations**: Monthly/quarterly phishing tests with progressive difficulty
4. **Just-in-Time Learning**: Immediate training after a user fails a simulation
5. **Positive Reinforcement**: Recognition for reporting phishing correctly
6. **Metrics & Reporting**: Track improvement over time by department and role

### SANS Security Awareness Maturity Model
- **Level 1**: Non-existent - No program
- **Level 2**: Compliance-focused - Annual checkbox training
- **Level 3**: Promoting Awareness - Engaging, regular content
- **Level 4**: Long-term Sustainment - Continuous program with culture change
- **Level 5**: Metrics Framework - Risk-based measurement and optimization

## Workflow

### Step 1: Establish Baseline
- Run initial phishing simulation across all departments
- Measure click rate, submit rate, and report rate
- Identify high-risk departments and roles

### Step 2: Design Curriculum
- **General awareness**: Phishing identification basics for all employees
- **Role-specific**: Finance (BEC/wire fraud), IT (credential phishing), Executives (whaling)
- **Progressive difficulty**: Beginner, intermediate, advanced modules
- **Micro-learning**: Short (3-5 minute) frequent sessions vs. annual marathon

### Step 3: Deploy Training Platform
- Configure KnowBe4/Proofpoint SAT with organizational groups
- Set up automated enrollment workflows
- Integrate with LMS for completion tracking
- Configure reporting dashboards

### Step 4: Run Continuous Simulations
- Monthly simulations with varied scenarios
- Increase difficulty based on organizational performance
- Include diverse attack types: links, attachments, QR codes, BEC

### Step 5: Measure and Optimize
Use `scripts/process.py` to analyze training completion, simulation results, and program effectiveness over time.

## Tools & Resources
- **KnowBe4**: https://www.knowbe4.com/
- **Proofpoint Security Awareness**: https://www.proofpoint.com/us/products/security-awareness-training
- **Cofense PhishMe**: https://cofense.com/
- **SANS Security Awareness**: https://www.sans.org/security-awareness-training/
- **Terranova Security**: https://terranovasecurity.com/

## Validation
- 90%+ training completion rate across organization
- Measurable reduction in phishing click rate over 6 months
- Increase in user phishing report rate
- Department-level improvement tracking
