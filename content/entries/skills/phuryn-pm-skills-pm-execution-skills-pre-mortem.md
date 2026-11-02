---
slug: phuryn-pm-skills-pm-execution-skills-pre-mortem
name: pre-mortem
tagline: "Run a pre-mortem risk analysis on a PRD or launch plan. Categorizes
  risks as Tigers (real problems), Paper Tigers (overblown concerns), and
  Elephants "
summary: You are a veteran product manager conducting a pre-mortem analysis on
  $ARGUMENTS. This skill imagines launch failure and works backward to identify
  real risks, distinguish them from perceived worries, and create actio...
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
  subpath: pm-execution/skills/pre-mortem
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
  path: pm-execution/skills/pre-mortem/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:06:41.829Z
  truncated: false
type: agent_skill
skill:
  skill_name: pre-mortem
  description: Run a pre-mortem risk analysis on a PRD or launch plan. Categorizes
    risks as Tigers (real problems), Paper Tigers (overblown concerns), and
    Elephants (unspoken worries), then classifies as launch-blocking,
    fast-follow, or track. Use when preparing for launch, stress-testing a
    product plan, or identifying what could go wrong.
  folder_path: pm-execution/skills/pre-mortem
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: phuryn-pm-skills
---

# Pre-Mortem: Risk Analysis for Product Launch
## Purpose

You are a veteran product manager conducting a pre-mortem analysis on $ARGUMENTS. This skill imagines launch failure and works backward to identify real risks, distinguish them from perceived worries, and create action plans to mitigate launch-blocking issues.

## Context

A pre-mortem is a structured risk-identification exercise that forces teams to think critically about what could go wrong before launch, when there's still time to act. By assuming failure, we surface hidden concerns and separate legitimate threats from overblown worries.

## Instructions

1. **Gather the PRD**: If the user provides a PRD or product plan file, read it thoroughly. Understand the product, target market, key assumptions, and timeline. If relevant, use web search to research competitive landscape or market conditions.

2. **Think Step by Step**:
   - Imagine the product launches in 14 days
   - Now imagine it fails—customers don't adopt it, revenue targets miss, reputation takes a hit
   - What went wrong?
   - What did we miss or not execute well?
   - What were we overconfident about?

3. **Categorize Risks**: Classify each potential failure as one of three types:

   **Tigers**: Real problems you personally see that could derail the project
   - Based on evidence, past experience, or clear logic
   - Should keep you awake at night
   - Require action

   **Paper Tigers**: Problems others might worry about, but you don't believe in them
   - Valid concerns on the surface, but unlikely or overblown
   - Not worth significant resource investment
   - Worth documenting to align stakeholders

   **Elephants**: Something you're not sure is a problem, but the team isn't discussing it enough
   - Unspoken concerns or assumptions nobody is validating
   - Could be real; you're unsure
   - Deserve investigation before launch

4. **Classify Tigers by Urgency**:

   **Launch-Blocking**: Must be solved before launch
   - Example: Core feature broken, regulatory blocker, key customer dependency unmet

   **Fast-Follow**: Must be solved within 30 days post-launch
   - Example: Performance issues, secondary features incomplete

   **Track**: Monitor post-launch; solve if it becomes an issue
   - Example: Nice-to-have features, edge cases

5. **Create Action Plans**: For every Launch-Blocking Tiger:
   - Describe the risk clearly
   - Suggest a concrete mitigation action
   - Identify the best owner (function/person)
   - Set a decision/completion date

6. **Structure Output**: Present the analysis as:

   ```
   ## Pre-Mortem Analysis: [Product Name]

   ### Tigers (Real Risks)
   [List each real risk with category and mitigation plan]

   ### Paper Tigers (Overblown Concerns)
   [List each, explain why it's not a true risk]

   ### Elephants (Unspoken Worries)
   [List each, recommend investigation approach]

   ### Action Plans for Launch-Blocking Tigers
   [For each, include: Risk, Mitigation, Owner, Due Date]
   ```

7. **Save the Output**: Save as a markdown document: `PreMortem-[product-name]-[date].md`

## Notes

- Be honest and constructive—the goal is to improve launch readiness, not assign blame
- Default to "Tiger" if unsure; it's better to address risks early
- Involve cross-functional perspectives (engineering, design, go-to-market) in your analysis
- Revisit the pre-mortem 2-3 weeks before launch to verify mitigations are on track

---

### Further Reading

- [How Meta and Instagram Use Pre-Mortems to Avoid Post-Mortems](https://www.productcompass.pm/p/how-to-run-pre-mortem-template)
- [How to Manage Risks as a Product Manager](https://www.productcompass.pm/p/how-to-manage-risks-as-a-product-manager)
