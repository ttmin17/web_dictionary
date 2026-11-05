---
slug: phuryn-pm-skills-pm-go-to-market-skills-growth-loops
name: growth-loops
tagline: "Identify growth loops (flywheels) for sustainable traction. Evaluates
  5 loop types: Viral, Usage, Collaboration, User-Generated, and Referral. Use
  whe"
summary: "- Product-Led Growth 101, Part 1/2 - OpenAI’s Product Leader Shares
  3-Layer Distribution Framework To Win Mind & Market Share in the AI World -
  How to Design a Value Proposition Customers Can't Resist?"
categories:
  - productivity-ops
tags:
  - agent-skill-repository
  - agent-skills
  - agentic-skills
  - claude-code-marketplace
status: active
quality_percentile: 69
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: phuryn/pm-skills
  subpath: pm-go-to-market/skills/growth-loops
  official_vendor: false
  license: MIT
signals:
  stars: 27709
  last_commit: 2026-10-29T19:09:57Z
  stars_delta_7d: 328
  stars_growth_pct: 1.2
  trending_score: 331.93
  velocity_source: snapshot_delta
  sparkline_4w:
    - 26957
    - 27192
    - 27381
    - 27709
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: phuryn/pm-skills
  path: pm-go-to-market/skills/growth-loops/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:07.698Z
  truncated: false
type: agent_skill
skill:
  skill_name: growth-loops
  description: "Identify growth loops (flywheels) for sustainable traction.
    Evaluates 5 loop types: Viral, Usage, Collaboration, User-Generated, and
    Referral. Use when designing growth mechanisms, building product-led
    traction, or understanding how growth loops work."
  folder_path: pm-go-to-market/skills/growth-loops
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: phuryn-pm-skills
---

# Growth Loops
## Overview
Identify and design growth loops (flywheels) that create sustainable traction. This skill evaluates five proven growth loop mechanisms to reduce reliance on paid acquisition and build product-led growth.

## When to Use
- Designing growth mechanisms for a product
- Building sustainable viral or referral traction
- Reducing reliance on paid acquisition
- Analyzing competitor growth strategies
- Optimizing product for product-led growth

## The 5 Growth Loop Types

### 1. Viral Loop
Product content created by users gets shared on external platforms, bringing new users back to the product.
- **Mechanism**: Users create content in-product → Share on social/external platforms → New users discover and signup
- **Example**: Figma designs shared as links, Loom videos shared in emails
- **Strength**: Exponential user acquisition if content is inherently shareable
- **Challenge**: Requires highly shareable output and strong incentive to share

### 2. Usage Loop
Users create content or value within the product, then share it, which invites new users or drives re-engagement.
- **Mechanism**: User creates → Shares creation → Others consume → Become engaged users
- **Example**: Twitter threads, Medium articles, Notion templates shared publicly
- **Strength**: Growth tied directly to product usage and network effects
- **Challenge**: Requires content creation friction to be very low

### 3. Collaboration Loop
Users invite colleagues to co-create or collaborate within the product, expanding the user base within organizations.
- **Mechanism**: User creates → Invites colleagues for collaboration → Colleagues discover product value
- **Example**: Google Docs invitations, Figma team projects, Slack channels
- **Strength**: Deep organizational penetration and high retention
- **Challenge**: Works best for collaborative/team-based products

### 4. User-Generated Loop
Users discover new content or features through other users' creations, then create and share their own content.
- **Mechanism**: User discovers content → Creates similar content → Shares creation → Others discover
- **Example**: TikTok, Pinterest, YouTube trends driving creator participation
- **Strength**: Creates content flywheel and network effects
- **Challenge**: Requires critical mass of quality content to sustain

### 5. Referral Loop
Users invite other potential users in exchange for rewards, incentives, or social recognition.
- **Mechanism**: User refers → Referred user joins → Referrer gets reward → Shares more referrals
- **Example**: Dropbox referral bonus, Uber rider referrals, PayPal signup bonuses
- **Strength**: Directly incentivizes acquisition; easy to measure ROI
- **Challenge**: Requires valuable incentive without eroding unit economics

## How It Works

### Step 1: Define Product Value
Clarify the core value users experience:
- Primary action users take in your product
- Value created per user action
- Network effects present (if any)
- Friction points in the experience

### Step 2: Evaluate Loop Fit
Assess which growth loops align with your product:
- Product type (collaborative, content-based, utility, etc.)
- Target user behavior and sharing habits
- Network effects already present
- Existing user base and engagement

### Step 3: Design Loop Mechanics
Create specific loop implementation:
- Trigger that initiates sharing or invitations
- Incentive for participation (intrinsic or extrinsic)
- Ease of sharing mechanism
- Conversion rate from invite to activation
- Frequency of loop repetition per user

### Step 4: Calculate Loop Coefficient
Estimate growth velocity:
- Invites/shares per user per cycle
- Conversion rate of invites to new users
- Net new users per cycle
- Time per cycle iteration

### Step 5: Build the Loop
Implement the highest-leverage loop first:
- Start with the most natural loop for your product
- Optimize messaging and friction
- Measure loop metrics and conversion rates
- Compound results over time

## Input Format
Use $ARGUMENTS to pass:
- Product description and primary user action
- Target user demographics and behavior
- Existing sharing/collaboration features
- Current growth channels and metrics
- Constraints or opportunities

## Output
A growth loops analysis including:
- Ranked evaluation of all 5 loop types for your product
- Recommended primary growth loop with implementation plan
- Secondary loops to layer over time
- Key metrics and measurement framework
- 30-60-90 day implementation roadmap
- Potential loop coefficient and growth projections

## Framework
Based on growth loops research by Ognjen Bošković. Focuses on compounding user acquisition through built-in, product-native sharing and collaboration mechanisms.

## Tips
- Start with one loop and master it before adding complexity
- Viral loops compound fastest but take time to build
- Collaboration loops create strongest retention and LTV
- Measure loop health weekly during optimization phase
- Combine loops for multiplicative effect once operating at scale

---

### Further Reading

- [Product-Led Growth 101, Part 1/2](https://www.productcompass.pm/p/product-led-growth-101-12)
- [OpenAI’s Product Leader Shares 3-Layer Distribution Framework To Win Mind & Market Share in the AI World](https://www.productcompass.pm/p/distribution-framework-ai-products)
- [How to Design a Value Proposition Customers Can't Resist?](https://www.productcompass.pm/p/how-to-design-value-proposition-template)
