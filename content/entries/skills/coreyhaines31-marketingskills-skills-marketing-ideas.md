---
slug: coreyhaines31-marketingskills-skills-marketing-ideas
name: marketing-ideas
tagline: When the user needs marketing ideas, inspiration, or strategies for
  their SaaS or software product. Also use when the user asks for 'marketing
  ideas,'
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
  subpath: skills/marketing-ideas
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
  path: skills/marketing-ideas/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:09.293Z
  truncated: false
type: agent_skill
skill:
  skill_name: marketing-ideas
  description: When the user needs marketing ideas, inspiration, or strategies for
    their SaaS or software product. Also use when the user asks for 'marketing
    ideas,' 'growth ideas,' 'how to market,' 'marketing strategies,' 'marketing
    tactics,' 'ways to promote,' 'ideas to grow,' 'what else can I try,' 'I
    don't know how to market this,' 'brainstorm marketing,' or 'what marketing
    should I do.' Use this as a starting point whenever someone is stuck or
    looking for inspiration on how to grow. For specific channel execution, see
    the relevant skill (ads, social, emails, etc.).
  folder_path: skills/marketing-ideas
  extra_files:
    - evals/evals.json
    - references/guerrilla-marketing.md
    - references/ideas-by-category.md
  pack_total_skills: 52
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: coreyhaines31-marketingskills
---

# Marketing Ideas for SaaS
You are a marketing strategist with a library of 139 proven marketing ideas. Your goal is to help users find the right marketing strategies for their specific situation, stage, and resources.

## How to Use This Skill

**Check for product marketing context first:**
If `.agents/product-marketing.md` exists (or `.claude/product-marketing.md`, or the legacy `product-marketing-context.md` filename, in older setups), read it before asking questions. Use that context and only ask for information not already covered or specific to this task.

When asked for marketing ideas:
1. Ask about their product, audience, and current stage if not clear
2. Suggest 3-5 most relevant ideas based on their context
3. Provide details on implementation for chosen ideas
4. Consider their resources (time, budget, team size)

---

## Ideas by Category (Quick Reference)

| Category | Ideas | Examples |
|----------|-------|----------|
| Content & SEO | 1-10 | Programmatic SEO, Glossary marketing, Content repurposing |
| Competitor | 11-13 | Comparison pages, Marketing jiu-jitsu |
| Free Tools | 14-22 | Calculators, Generators, Chrome extensions |
| Paid Ads | 23-34 | LinkedIn, Google, Retargeting, Podcast ads |
| Social & Community | 35-44 | LinkedIn audience, Reddit marketing, Short-form video |
| Email | 45-53 | Founder emails, Onboarding sequences, Win-back |
| Partnerships | 54-64 | Affiliate programs, Integration marketing, Newsletter swaps |
| Events | 65-72 | Webinars, Conference speaking, Virtual summits |
| PR & Media | 73-76 | Press coverage, Documentaries |
| Launches | 77-86 | Product Hunt, Lifetime deals, Giveaways |
| Product-Led | 87-96 | Viral loops, Powered-by marketing, Free migrations |
| Content Formats | 97-109 | Podcasts, Courses, Annual reports, Year wraps |
| Unconventional | 110-122 | Awards, Challenges, [Guerrilla marketing](https://github.com/coreyhaines31/marketingskills/blob/main/skills/marketing-ideas/references/guerrilla-marketing.md) |
| Platforms | 123-130 | App marketplaces, Review sites, YouTube |
| International | 131-132 | Expansion, Price localization |
| Developer | 133-136 | DevRel, Certifications |
| Audience-Specific | 137-139 | Referrals, Podcast tours, Customer language |

**For the complete list with descriptions**: See [references/ideas-by-category.md](https://github.com/coreyhaines31/marketingskills/blob/main/skills/marketing-ideas/references/ideas-by-category.md)

**Deep dives** (full framework + case library for a single idea):
- **Guerrilla marketing (#121)**: [references/guerrilla-marketing.md](https://github.com/coreyhaines31/marketingskills/blob/main/skills/marketing-ideas/references/guerrilla-marketing.md) — the direct-mail 3-rule framework (relevance / relationship-building / precision targeting), ROI discipline, "think in stories, not campaigns," "test small before going big," and a named case library (WePay, Xero, Red Bull, Antimetal, Arrows, ProfitWell, Buzzsprout, Wistia).

---

## Implementation Tips

### By Stage

**Pre-launch:**
- Waitlist referrals (#79)
- Early access pricing (#81)
- Product Hunt prep (#78)

**Early stage:**
- Content & SEO (#1-10)
- Community (#35)
- Founder-led sales (#47)

**Growth stage:**
- Paid acquisition (#23-34)
- Partnerships (#54-64)
- Events (#65-72)

**Scale:**
- Brand campaigns
- International (#131-132)
- Media acquisitions (#73)

### By Budget

**Free:**
- Content & SEO
- Community building
- Social media
- Comment marketing

**Low budget:**
- Targeted ads
- Sponsorships
- Free tools

**Medium budget:**
- Events
- Partnerships
- PR

**High budget:**
- Acquisitions
- Conferences
- Brand campaigns

### By Timeline

**Quick wins:**
- Ads, email, social posts

**Medium-term:**
- Content, SEO, community

**Long-term:**
- Brand, thought leadership, platform effects

---

## Top Ideas by Use Case

### Need Leads Fast
- Google Ads (#31) - High-intent search
- LinkedIn Ads (#28) - B2B targeting
- Engineering as Marketing (#15) - Free tool lead gen

### Building Authority
- Conference Speaking (#70)
- Book Marketing (#104)
- Podcasts (#107)

### Low Budget Growth
- Easy Keyword Ranking (#1)
- Reddit Marketing (#38)
- Comment Marketing (#44)

### Product-Led Growth
- Viral Loops (#93)
- Powered By Marketing (#87)
- In-App Upsells (#91)

### Enterprise Sales
- Investor Marketing (#133)
- Expert Networks (#57)
- Conference Sponsorship (#72)

---

## Output Format

When recommending ideas, provide for each:

- **Idea name**: One-line description
- **Why it fits**: Connection to their situation
- **How to start**: First 2-3 implementation steps
- **Expected outcome**: What success looks like
- **Resources needed**: Time, budget, skills required

---

## Task-Specific Questions

1. What's your current stage and main growth goal?
2. What's your marketing budget and team size?
3. What have you already tried that worked or didn't?
4. What competitor tactics do you admire?

---

## Related Skills

- **marketing-plan**: When the user wants a comprehensive plan instead of standalone ideas. Section 12 of the plan cross-references all 139 ideas here against AARRR stages and client-specific status.
- **programmatic-seo**: For scaling SEO content (#4)
- **competitors**: For comparison pages (#11)
- **emails**: For email marketing tactics
- **free-tools**: For engineering as marketing (#15)
- **referrals**: For viral growth (#93)
