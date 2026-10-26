---
slug: nexu-io-open-design-design-templates-blog-post
name: blog-post
tagline: Agent skill from nexu-io/open-design
summary: Agent skill from nexu-io/open-design
categories:
  - media-creative
tags:
  - agent-skills
  - ai-design
  - byok
  - claude-code-for-design
status: active
quality_percentile: 77
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: nexu-io/open-design
  subpath: design-templates/blog-post
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 104025
  last_commit: 2026-10-26T07:31:43Z
  stars_delta_7d: 1726
  stars_growth_pct: 1.7
  trending_score: 1755.12
  velocity_source: snapshot_delta
  sparkline_4w:
    - 99839
    - 100908
    - 102299
    - 104025
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: nexu-io/open-design
  path: design-templates/blog-post/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:44:48.575Z
  truncated: false
type: agent_skill
skill:
  skill_name: blog-post
  description: Agent skill from nexu-io/open-design
  folder_path: design-templates/blog-post
  extra_files:
    - example.html
  pack_total_skills: 401
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: nexu-io-open-design
---

# Blog Post Skill
Produce a single long-form article page — editorial layout, no chrome.

## Workflow

1. **Read the active DESIGN.md** (injected above). Lean into the typography
   tokens — long-form is 70% type, 20% image, 10% chrome.
2. **Pick the topic** from the brief and write a real article — at least 600
   words across 4–6 H2 sections. No lorem ipsum.
3. **Sections**, in order:
   - **Masthead** — small wordmark + 4–6 nav links, plain.
   - **Article header** — category eyebrow, headline (display token, large),
     deck (1–2 sentence subhead), author name + role + date.
   - **Hero image** — a 16:9 placeholder block using a DS-tinted gradient or
     solid fill (no external images). Add a 1-line caption underneath.
   - **Body** — alternating prose paragraphs with at least:
     - 1 pull quote (large display type, accent rule on the inline-start edge so the layout flips correctly under `dir="rtl"`).
     - 1 figure (image placeholder + caption).
     - 1 list (numbered or bulleted).
     - 1 inline blockquote.
   - **Author footer** — author avatar (initials in a circle), bio paragraph.
   - **Related** — 3 cards linking to other posts. Each card: tiny image
     block, title, 1-line excerpt, date.
4. **Write** a single HTML document:
   - `<!doctype html>` through `</html>`, CSS inline.
   - Article body uses the DS body font, centered, max-width per DS layout
     rule (typically 680–720px).
   - Drop caps (`first-letter`) only if the DS mood is editorial / serif —
     skip on tech-y DSes.
   - `data-od-id` on the headline, hero, body, pull quote, related grid.
5. **Self-check**:
   - Type hierarchy is unambiguous — H1 is clearly the headline; H2s are
     section dividers; pull quotes do not compete with H1.
   - Line length 60–75 chars for body prose.
   - Accent appears at most twice (eyebrow + pull-quote rule, or one link).
   - The page reads like a magazine, not a marketing landing.

## Output contract

Emit between `<artifact>` tags:

```
<artifact identifier="post-slug" type="text/html" title="Article Title">
<!doctype html>
<html>...</html>
</artifact>
```

One sentence before the artifact, nothing after.
