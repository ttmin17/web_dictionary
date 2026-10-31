---
slug: kayforkind-reimagine-it-skills-reimagine-it-extract
name: reimagine-it-extract
tagline: Emit the content signals reimagine-it reads from an HTML file — title,
  anchors, proper nouns, dates, numbers, emails, links, source hex colors, and
  th
summary: "The redesign is only as honest as its extraction. This verb emits
  exactly what the engine reads, as JSON, without generating anything: title,
  profile, density, derived palette, anchors, proper nouns, headings, dates,..."
categories:
  - other
status: active
quality_percentile: 35
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: Kayforkind/reimagine-it
  subpath: skills/reimagine-it/extract
  official_vendor: false
  license: MIT
signals:
  stars: 207
  last_commit: 2026-10-10T14:17:43Z
  stars_delta_7d: 7
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 207
    - 207
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: Kayforkind/reimagine-it
  path: skills/reimagine-it/extract/SKILL.md
  branch: main
  fetched_at: 2026-10-14T14:55:17.226Z
  truncated: false
type: agent_skill
skill:
  skill_name: reimagine-it-extract
  description: 'Emit the content signals reimagine-it reads from an HTML file —
    title, anchors, proper nouns, dates, numbers, emails, links, source hex
    colors, and the derived palette — as JSON without generating a redesign. Use
    when the user says /reimagine-it extract, "what does the engine see in this
    page", "extract the palette", "pull the facts from this page", or wants
    content analysis for research, migration, or design-system work. CLI: npx
    reimagine-it extract -i page.html -o signals.json. Part of the reimagine-it
    Content-Derived Design suite.'
  folder_path: skills/reimagine-it/extract
  extra_files: []
tags: []
---

# /reimagine-it extract
**Parent:** [../SKILL.md](https://github.com/Kayforkind/reimagine-it/blob/main/skills/reimagine-it/extract/../SKILL.md) — the full Content-Derived Design engine. This sub-skill handles only the extraction surface — the honesty layer the whole method stands on.

The redesign is only as honest as its extraction. This verb emits exactly what
the engine reads, as JSON, without generating anything: title, profile,
density, derived palette, anchors, proper nouns, headings, dates, numbers,
emails, links, and source hex colors. Every extracted fact exists in the
source — property-tested against hostile and malformed input.

## Usage

```bash
npx reimagine-it extract -i page.html -o signals.json
cat page.html | npx reimagine-it extract -o -        # stdin → stdout
npx reimagine-it extract -i page.html --full -o signals.json  # + prose
```

Payload shape (default):

```json
{
  "source": "page.html",
  "title": "…",
  "profile": "restaurant | saas | civic | …",
  "density": "sparse | medium | dense",
  "palette": { "ground": "…", "accent": "…", "muted": "…", "surface": "…", "ink": "…" },
  "anchors": ["…"],
  "properNouns": ["…"],
  "headings": ["…"],
  "dates": ["…"],
  "numbers": ["…"],
  "emails": ["…"],
  "links": ["…"],
  "sourceHex": ["#6B3A2A"],
  "counts": { "paragraphs": 4, "listItems": 16 }
}
```

`--full` adds `paragraphs` and `items` (the raw prose arrays).

## Procedure

1. Run it before any redesign when the user asks "what would you even use
   from this page?" — the JSON answers with the engine's actual inputs.
2. To audit honesty: every `dates`, `numbers`, `emails`, and `links` entry
   must be findable in the source. Nothing else is allowed to appear.
3. Use it for migration/research: the payload is a stable, typed summary of
   a page's content — no redesign attached.

## Must not

- Add facts not present in the payload to any downstream summary
- Present the derived `palette` as colors the source *declared* — hex colors
  in `sourceHex` were in the source; the rest is derivation
- Round or "clean up" extracted numbers and dates; they are quotes

Part of [reimagine-it](https://github.com/Kayforkind/reimagine-it) — MIT.
