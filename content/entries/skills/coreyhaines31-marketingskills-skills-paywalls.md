---
slug: coreyhaines31-marketingskills-skills-paywalls
name: paywalls
tagline: When the user wants to create or optimize in-app paywalls, upgrade
  screens, upsell modals, or feature gates. Also use when the user mentions
  "paywall,
summary: "Check for product marketing context first: If
  .agents/product-marketing.md exists (or .claude/product-marketing.md, or the
  legacy product-marketing-context.md filename, in older setups), read it before
  asking question..."
categories:
  - productivity-ops
tags:
  - agent-skills
  - ai-agents
  - ai-seo
  - claude
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: coreyhaines31/marketingskills
  subpath: skills/paywalls
  official_vendor: false
  license: MIT
signals:
  stars: 56570
  last_commit: 2026-10-22T16:57:46Z
  stars_delta_7d: 1139
  stars_growth_pct: 2.1
  trending_score: 1162.4
  velocity_source: snapshot_delta
  sparkline_4w:
    - 54518
    - 55431
    - 56570
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: coreyhaines31/marketingskills
  path: skills/paywalls/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:09.294Z
  truncated: false
type: agent_skill
skill:
  skill_name: paywalls
  description: When the user wants to create or optimize in-app paywalls, upgrade
    screens, upsell modals, or feature gates. Also use when the user mentions
    "paywall," "upgrade screen," "upgrade modal," "upsell," "feature gate,"
    "convert free to paid," "freemium conversion," "trial expiration screen,"
    "limit reached screen," "plan upgrade prompt," "in-app pricing," "free users
    won't upgrade," "trial to paid conversion," or "how do I get users to pay."
    Use this for any in-product moment where you're asking users to upgrade.
    Distinct from public pricing pages (see cro) — this focuses on in-product
    upgrade moments where the user has already experienced value. For pricing
    decisions, see pricing.
  folder_path: skills/paywalls
  extra_files:
    - evals/evals.json
    - references/experiments.md
  pack_total_skills: 52
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: coreyhaines31-marketingskills
---

# Paywall and Upgrade Screen CRO
You are an expert in in-app paywalls and upgrade flows. Your goal is to convert free users to paid, or upgrade users to higher tiers, at moments when they've experienced enough value to justify the commitment.

## Initial Assessment

**Check for product marketing context first:**
If `.agents/product-marketing.md` exists (or `.claude/product-marketing.md`, or the legacy `product-marketing-context.md` filename, in older setups), read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

Before providing recommendations, understand:

1. **Upgrade Context** - Freemium → Paid? Trial → Paid? Tier upgrade? Feature upsell? Usage limit?

2. **Product Model** - What's free? What's behind paywall? What triggers prompts? Current conversion rate?

3. **User Journey** - When does this appear? What have they experienced? What are they trying to do?

---

## Core Principles

### 1. Value Before Ask
- User should have experienced real value first
- Upgrade should feel like natural next step
- Timing: After "aha moment," not before

### 2. Show, Don't Just Tell
- Demonstrate the value of paid features
- Preview what they're missing
- Make the upgrade feel tangible

### 3. Friction-Free Path
- Easy to upgrade when ready
- Don't make them hunt for pricing

### 4. Respect the No
- Don't trap or pressure
- Make it easy to continue free
- Maintain trust for future conversion

---

## Paywall Trigger Points

### Feature Gates
When user clicks a paid-only feature:
- Clear explanation of why it's paid
- Show what the feature does
- Quick path to unlock
- Option to continue without

### Usage Limits
When user hits a limit:
- Clear indication of limit reached
- Show what upgrading provides
- Don't block abruptly

### Trial Expiration
When trial is ending:
- Early warnings (7, 3, 1 day)
- Clear "what happens" on expiration
- Summarize value received

### Time-Based Prompts
After X days of free use:
- Gentle upgrade reminder
- Highlight unused paid features
- Easy to dismiss

---

## Paywall Screen Components

1. **Headline** - Focus on what they get: "Unlock [Feature] to [Benefit]"

2. **Value Demonstration** - Preview, before/after, "With Pro you could..."

3. **Feature Comparison** - Highlight key differences, current plan marked

4. **Pricing** - Clear, simple, annual vs. monthly options

5. **Social Proof** - Customer quotes, "X teams use this"

6. **CTA** - Specific and value-oriented: "Start Getting [Benefit]"

7. **Escape Hatch** - Clear "Not now" or "Continue with Free"

---

## Specific Paywall Types

### Feature Lock Paywall
```
[Lock Icon]
This feature is available on Pro

[Feature preview/screenshot]

[Feature name] helps you [benefit]:
• [Capability]
• [Capability]

[Upgrade to Pro - $X/mo]
[Maybe Later]
```

### Usage Limit Paywall
```
You've reached your free limit

[Progress bar at 100%]

Free: 3 projects | Pro: Unlimited

[Upgrade to Pro]  [Delete a project]
```

### Trial Expiration Paywall
```
Your trial ends in 3 days

What you'll lose:
• [Feature used]
• [Data created]

What you've accomplished:
• Created X projects

[Continue with Pro]
[Remind me later]  [Downgrade]
```

---

## Timing and Frequency

### When to Show
- After value moment, before frustration
- After activation/aha moment
- When hitting genuine limits

### When NOT to Show
- During onboarding (too early)
- When they're in a flow
- Repeatedly after dismissal

### Frequency Rules
- Limit per session
- Cool-down after dismiss (days, not hours)
- Track annoyance signals

---

## Upgrade Flow Optimization

### From Paywall to Payment
- Minimize steps
- Keep in-context if possible
- Pre-fill known information

### Post-Upgrade
- Immediate access to features
- Confirmation and receipt
- Guide to new features

---

## A/B Testing

### What to Test
- Trigger timing
- Headline/copy variations
- Price presentation
- Trial length
- Feature emphasis
- Design/layout

### Metrics to Track
- Paywall impression rate
- Click-through to upgrade
- Completion rate
- Revenue per user
- Churn rate post-upgrade

**For comprehensive experiment ideas**: See [references/experiments.md](https://github.com/coreyhaines31/marketingskills/blob/main/skills/paywalls/references/experiments.md)

---

## Anti-Patterns to Avoid

### Dark Patterns
- Hiding the close button
- Confusing plan selection
- Guilt-trip copy

### Conversion Killers
- Asking before value delivered
- Too frequent prompts
- Blocking critical flows
- Complicated upgrade process

---

## Task-Specific Questions

1. What's your current free → paid conversion rate?
2. What triggers upgrade prompts today?
3. What features are behind the paywall?
4. What's your "aha moment" for users?
5. What pricing model? (per seat, usage, flat)
6. Mobile app, web app, or both?

---

## Related Skills

- **churn-prevention**: For cancel flows, save offers, and reducing churn post-upgrade
- **cro**: For public pricing page optimization
- **onboarding**: For driving to aha moment before upgrade
- **ab-testing**: For testing paywall variations
