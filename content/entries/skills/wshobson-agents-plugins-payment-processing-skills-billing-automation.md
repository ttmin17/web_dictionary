---
slug: wshobson-agents-plugins-payment-processing-skills-billing-automation
name: billing-automation
tagline: "Build automated billing systems for recurring payments, invoicing,
  subscription lifecycle, and dunning management. Use when implementing
  subscription "
summary: "- Implementing SaaS subscription billing - Automating invoice
  generation and delivery - Managing failed payment recovery (dunning) -
  Calculating prorated charges for plan changes - Handling sales tax, VAT, and
  GST - P..."
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
  subpath: plugins/payment-processing/skills/billing-automation
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
  path: plugins/payment-processing/skills/billing-automation/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.201Z
  truncated: false
type: agent_skill
skill:
  skill_name: billing-automation
  description: Build automated billing systems for recurring payments, invoicing,
    subscription lifecycle, and dunning management. Use when implementing
    subscription billing, automating invoicing, or managing recurring payment
    systems.
  folder_path: plugins/payment-processing/skills/billing-automation
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

# Billing Automation
Master automated billing systems including recurring billing, invoice generation, dunning management, proration, and tax calculation.

## When to Use This Skill

- Implementing SaaS subscription billing
- Automating invoice generation and delivery
- Managing failed payment recovery (dunning)
- Calculating prorated charges for plan changes
- Handling sales tax, VAT, and GST
- Processing usage-based billing
- Managing billing cycles and renewals

## Core Concepts

### 1. Billing Cycles

**Common Intervals:**

- Monthly (most common for SaaS)
- Annual (discounted long-term)
- Quarterly
- Weekly
- Custom (usage-based, per-seat)

### 2. Subscription States

```
trial → active → past_due → canceled
              → paused → resumed
```

### 3. Dunning Management

Automated process to recover failed payments through:

- Retry schedules
- Customer notifications
- Grace periods
- Account restrictions

### 4. Proration

Adjusting charges when:

- Upgrading/downgrading mid-cycle
- Adding/removing seats
- Changing billing frequency

## Quick Start

```python
from billing import BillingEngine, Subscription

# Initialize billing engine
billing = BillingEngine()

# Create subscription
subscription = billing.create_subscription(
    customer_id="cus_123",
    plan_id="plan_pro_monthly",
    billing_cycle_anchor=datetime.now(),
    trial_days=14
)

# Process billing cycle
billing.process_billing_cycle(subscription.id)
```

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.
