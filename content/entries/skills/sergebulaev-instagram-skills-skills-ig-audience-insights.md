---
slug: sergebulaev-instagram-skills-skills-ig-audience-insights
name: ig-audience-insights
tagline: Read your Instagram niche and profile from real data via Apify, no
  login. Scan a hashtag for the posts traveling now (likes, comments, owner) to
  see t
summary: "One honest limit: Instagram caps and cookie-gates who liked or
  commented on someone else's post, so a liker or commenter roster is not
  reliably available for other accounts. The signal here is niche post
  performance +..."
categories:
  - other
status: active
quality_percentile: 41
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: sergebulaev/instagram-skills
  subpath: skills/ig-audience-insights
  official_vendor: false
  license: MIT
signals:
  stars: 389
  last_commit: 2026-10-07T01:54:00Z
  stars_delta_7d: 13
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 389
    - 389
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: sergebulaev/instagram-skills
  path: skills/ig-audience-insights/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:17.216Z
  truncated: false
type: agent_skill
skill:
  skill_name: ig-audience-insights
  description: "Read your Instagram niche and profile from real data via Apify, no
    login. Scan a hashtag for the posts traveling now (likes, comments, owner)
    to see the format and hook that works. Pull profile stats for any handle,
    yours or a competitor's: followers, posts, bio, category. Instagram hides
    who liked or commented on other accounts, so this is discovery plus
    profiles, not engagers. Triggers on \"what works in my niche\", \"scan the
    hashtag\", \"competitor stats\". Not for writing captions (use
    ig-caption-writer)."
  folder_path: skills/ig-audience-insights
  extra_files: []
tags: []
---

# Instagram Audience Insights
Turn real Instagram data into a read on what is working: which posts in your niche are traveling right now and why, and how any account (yours or a competitor's) actually performs. This is the read layer, so the skill sees real numbers instead of guessing.

One honest limit: Instagram caps and cookie-gates who **liked** or **commented** on someone else's post, so a liker or commenter roster is not reliably available for other accounts. The signal here is **niche post performance + profile stats**, which is what you can actually read on Instagram.

## When to use

- "What is working in my niche / scan the #hashtag"
- "Pull the stats for this account / how big is this competitor"
- "What format is traveling under this hashtag right now"
- "Compare my follower count to this account"

Not for writing a caption (use `ig-caption-writer`) or planning a carousel (use `ig-carousel-planner`).

## Setup (optional)

The read layer uses **Apify** (no login, no cookies). Get a free token at `https://console.apify.com/account/integrations` and set `APIFY_TOKEN`. No token? Paste the posts or profile stats you already have and the skill runs the same analysis on them.

## Input

- A niche hashtag (with or without the `#`), a username (yours or a competitor's), or both
- Optional: the goal (niche pulse / competitor read / self benchmark)

## Output

1. **Niche pulse** - the top posts under a hashtag ranked by engagement, with the pattern behind the winners (hook shape, caption length, image vs carousel vs Reel, presence of a question or a specific number)
2. **Profile read** - the stats for a handle: followers, post count, bio, category, verified and business flags
3. **Benchmark** - your account against a competitor on follower count and post cadence, normalized so a small account's breakout is not buried under a big account's average
4. **Action list** - what format to make more of, which accounts to watch, what to route to `ig-caption-writer` or `ig-carousel-planner`

## Steps

1. **Pull the data.** For a niche: `lib.ApifyClient().fetch_niche_posts(hashtag, max_items=20)`. For a profile: `fetch_profile(username)`. Falls back to pasted data if no token.
2. **Rank by engagement.** Sort the niche posts by likes + comments. Normalize against the owner's reach where known so a mega-account's average does not crowd out a small account's breakout.
3. **Extract the pattern.** For the top posts, name what they share: the hook shape (question, confession, list, data-point), the caption length, image vs carousel vs Reel, the presence of a specific number. That is the repeatable part.
4. **Read the profile.** From `fetch_profile`, report followers, post count, bio, category, and whether it is a verified business account. Use it to benchmark, not to guess private engagement.
5. **Benchmark honestly.** Compare handles on the stats Instagram exposes (followers, post count, cadence). Do not imply access to a liker or commenter list for accounts you do not own.
6. **Build the action list.** Make-more-of (the winning format), watch (specific accounts), route drafts to `ig-caption-writer` / `ig-carousel-planner`.
7. **Deliver the report** in the Output shape, with the raw ranked posts and profile stats attached.

## What the read layer exposes

| Method | Returns |
|---|---|
| `fetch_niche_posts(hashtag, max_items)` | top posts under a hashtag: caption, likes, comments, owner, type, url |
| `fetch_profile(username)` | profile stats: username, followers, following, posts, bio, category, verified, business |

## Hard rules

Global voice rules: see root `SKILL.md` Voice rules. Additional skill-specific rules:

- Be honest that Instagram hides **who liked or commented** on other accounts. This is **niche discovery + profile stats**, not a liker or engager roster. Do not imply otherwise.
- **Normalize by follower count** before calling a post a winner, or you extract "big account" effects, not "good post" effects.
- Never invent a post, a number, or a pattern. If a hashtag returns thin, say so and try an adjacent tag or pull known accounts.
- A pattern is only a pattern if it recurs across several top posts, not one.

## Related skills

- `ig-caption-writer` - write more of what the niche data shows is working
- `ig-carousel-planner` - turn a winning format into a slide plan
- `ig-hook-extractor` - reverse-engineer the hook from a top-performing post
- `ig-hashtag-strategist` - size the hashtag set around the tags that are traveling
- `ig-content-planner` - feed the winning patterns into a weekly plan
