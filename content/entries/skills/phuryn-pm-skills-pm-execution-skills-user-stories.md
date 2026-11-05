---
slug: phuryn-pm-skills-pm-execution-skills-user-stories
name: user-stories
tagline: Create user stories following the 3 C's (Card, Conversation,
  Confirmation) and INVEST criteria with descriptions, design links, and
  acceptance criteri
summary: "Use when: Writing user stories, breaking down features into stories,
  creating backlog items, or defining acceptance criteria."
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
  subpath: pm-execution/skills/user-stories
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
  path: pm-execution/skills/user-stories/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:13:07.698Z
  truncated: false
type: agent_skill
skill:
  skill_name: user-stories
  description: Create user stories following the 3 C's (Card, Conversation,
    Confirmation) and INVEST criteria with descriptions, design links, and
    acceptance criteria. Use when writing user stories, breaking down features
    into backlog items, or defining acceptance criteria.
  folder_path: pm-execution/skills/user-stories
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: phuryn-pm-skills
---

# User Stories
Create user stories following the 3 C's (Card, Conversation, Confirmation) and INVEST criteria. Generates stories with descriptions, design links, and acceptance criteria.

**Use when:** Writing user stories, breaking down features into stories, creating backlog items, or defining acceptance criteria.

**Arguments:**
- `$PRODUCT`: The product or system name
- `$FEATURE`: The new feature to break into stories
- `$DESIGN`: Link to design files (Figma, Miro, etc.)
- `$ASSUMPTIONS`: Key assumptions or context

## Step-by-Step Process

1. **Analyze the feature** based on provided design and context
2. **Identify user roles** and distinct user journeys
3. **Apply 3 C's framework:**
   - Card: Simple title and one-liner
   - Conversation: Detailed discussion of intent
   - Confirmation: Clear acceptance criteria
4. **Respect INVEST criteria:** Independent, Negotiable, Valuable, Estimable, Small, Testable
5. **Use plain language** a primary school graduate can understand
6. **Link to design files** for visual reference
7. **Output user stories** in structured format

## Story Template

**Title:** [Feature name]

**Description:** As a [user role], I want to [action], so that [benefit].

**Design:** [Link to design files]

**Acceptance Criteria:**
1. [Clear, testable criterion]
2. [Observable behavior]
3. [System validates correctly]
4. [Edge case handling]
5. [Performance or accessibility consideration]
6. [Integration point]

## Example User Story

**Title:** Recently Viewed Section

**Description:** As an Online Shopper, I want to see a 'Recently viewed' section on the product page to easily revisit items I considered.

**Design:** [Figma link]

**Acceptance Criteria:**
1. The 'Recently viewed' section is displayed at the bottom of the product page for every user who has previously viewed at least 1 product.
2. It is not displayed for users visiting the first product page of their session.
3. The current product itself is excluded from the displayed items.
4. The section showcases product cards or thumbnails with images, titles, and prices.
5. Each product card indicates when it was viewed (e.g., 'Viewed 5 minutes ago').
6. Clicking on a product card leads the user to the corresponding product page.

## Output Deliverables

- Complete set of user stories for the feature
- Each story includes title, description, design link, and 4-6 acceptance criteria
- Stories are independent and can be developed in any order
- Stories are sized for one sprint cycle
- Stories reference related design documentation

---

### Further Reading

- [How to Write User Stories: The Ultimate Guide](https://www.productcompass.pm/p/how-to-write-user-stories)
