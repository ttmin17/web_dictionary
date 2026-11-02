---
slug: phuryn-pm-skills-pm-go-to-market-skills-competitive-battlecard
name: competitive-battlecard
tagline: Create sales-ready competitive battlecards comparing your product
  against a specific competitor — positioning, feature comparison, objection
  handling,
summary: Create a concise, sales-ready battlecard for use against a specific competitor.
categories:
  - productivity-ops
tags:
  - agent-skill-repository
  - agent-skills
  - agentic-skills
  - claude-code-marketplace
status: active
quality_percentile: 70
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: phuryn/pm-skills
  subpath: pm-go-to-market/skills/competitive-battlecard
  official_vendor: false
  license: MIT
signals:
  stars: 27614
  last_commit: 2026-10-29T19:09:57Z
  stars_delta_7d: 233
  stars_growth_pct: 0.9
  trending_score: 234.98
  velocity_source: snapshot_delta
  sparkline_4w:
    - 26957
    - 27192
    - 27381
    - 27614
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: phuryn/pm-skills
  path: pm-go-to-market/skills/competitive-battlecard/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:41.830Z
  truncated: false
type: agent_skill
skill:
  skill_name: competitive-battlecard
  description: Create sales-ready competitive battlecards comparing your product
    against a specific competitor — positioning, feature comparison, objection
    handling, and win/loss patterns. Use when preparing sales teams, creating
    competitive materials, or responding to 'why not competitor X?'
  folder_path: pm-go-to-market/skills/competitive-battlecard
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: phuryn-pm-skills
---

## Competitive Battlecard

Create a concise, sales-ready battlecard for use against a specific competitor.

### Context

You are creating a competitive battlecard for **$ARGUMENTS**.

Use web search to research the competitor's current product, pricing, positioning, and recent changes. If the user provides files (feature lists, win/loss data, sales call notes), read them first.

### Instructions

1. **Research the competitor** (use web search):
   - Current product offerings and features
   - Pricing tiers and model
   - Target market and positioning
   - Recent product launches or changes
   - Known strengths and weaknesses
   - Customer reviews and sentiment (G2, Capterra, Reddit)

2. **Create the battlecard** with these sections:

   ### Company Overview
   - Founded, HQ, funding/revenue (if public)
   - Target market and ICP
   - Positioning in one sentence

   ### Quick Comparison

   | Capability | Us | Them | Winner |
   |---|---|---|---|
   | [Feature area 1] | [Our approach] | [Their approach] | [Us/Them/Tie] |
   | [Feature area 2] | ... | ... | ... |
   | Pricing | ... | ... | ... |
   | Support | ... | ... | ... |

   ### Where We Win
   - [Advantage 1]: [Proof point or customer quote]
   - [Advantage 2]: [Specific capability they lack]
   - [Advantage 3]: [Better approach with reasoning]

   ### Where They Win
   - [Their strength 1]: [Our counter-positioning]
   - [Their strength 2]: [How we mitigate this gap]

   ### Common Objections & Responses

   | Prospect Says | Respond With |
   |---|---|
   | "Competitor X has [feature]" | "[Our alternative approach and why it's better for them]" |
   | "They're cheaper" | "[Value framing: total cost of ownership, ROI, hidden costs]" |
   | "They're more established" | "[Our advantages: speed, innovation, focus, support]" |

   ### Landmines to Plant
   Questions to ask the prospect that highlight competitor weaknesses:
   - "How important is [area where we excel] to your team?"
   - "Have you evaluated [specific capability they lack]?"

   ### Win/Loss Patterns
   - We tend to win when: [pattern]
   - We tend to lose when: [pattern]
   - Key differentiator in competitive deals: [what tips the scale]

3. **Keep it scannable**: Sales reps need to reference this during calls. Use tables, bold text, and short bullets.

Save as markdown. Format for easy printing or sharing in Notion/Confluence.

---

### Further Reading

- [How to Design a Value Proposition Customers Can't Resist?](https://www.productcompass.pm/p/how-to-design-value-proposition-template)
