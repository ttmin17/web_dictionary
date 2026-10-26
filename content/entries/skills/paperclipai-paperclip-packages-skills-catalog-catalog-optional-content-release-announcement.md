---
slug: paperclipai-paperclip-packages-skills-catalog-catalog-optional-content-release-announcement
name: release-announcement
tagline: Write a release announcement — changelog, blog post, in-app note, or
  social post — that leads with user impact, names the audience, and includes
  upgra
summary: "- A version, feature, or fix is shipping and needs writeup for at
  least one surface. - A previously private feature is going GA. - A breaking
  change needs broadcast before users hit it."
categories:
  - agent-frameworks
tags:
  - acpx
  - agent-orchestration
  - agent-skills
  - agentic-ai
status: active
quality_percentile: 97
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: paperclipai/paperclip
  subpath: packages/skills-catalog/catalog/optional/content/release-announcement
  official_vendor: false
  license: MIT
signals:
  stars: 107406
  last_commit: 2026-10-26T06:44:43Z
  stars_delta_7d: 3106
  stars_growth_pct: 3
  trending_score: 3198.5
  velocity_source: snapshot_delta
  sparkline_4w:
    - 101411
    - 104300
    - 107406
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: paperclipai/paperclip
  path: packages/skills-catalog/catalog/optional/content/release-announcement/SKILL.md
  branch: master
  fetched_at: 2026-10-26T07:41:15.001Z
  truncated: false
type: agent_skill
skill:
  skill_name: release-announcement
  description: Write a release announcement — changelog, blog post, in-app note,
    or social post — that leads with user impact, names the audience, and
    includes upgrade/migration steps without filler.
  folder_path: packages/skills-catalog/catalog/optional/content/release-announcement
  extra_files: []
  pack_total_skills: 37
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: paperclipai-paperclip
---

# Release Announcement
Write the channel-appropriate announcement for a release without churn. Different surfaces need different shapes: a changelog entry is not a blog post is not a social card. The bar is: a reader of the chosen surface can decide in under 30 seconds whether this release affects them, and if so what to do.

## When to use

- A version, feature, or fix is shipping and needs writeup for at least one surface.
- A previously private feature is going GA.
- A breaking change needs broadcast before users hit it.

## When not to use

- An internal-only change with no user impact. Update internal docs; do not announce.
- The release is incomplete (still in active development). Wait until it ships, even if marketing wants the post.

## Paperclip Cases output

When this skill runs inside Paperclip and `experimental.enableCases` is enabled,
emit durable release-content cases before handing off the copy. Cases preserve
the inspectable output; the issue coordinates the work.

Use `skills/paperclip/references/cases.md` for the API contract. Include
`X-Paperclip-Run-Id` on writes when `PAPERCLIP_RUN_ID` is set. If the API returns
`403 Cases are disabled`, report that limitation and continue with the requested
copy artifact.

Upsert the parent release case first when it does not already exist:

```json
{
  "caseType": "release",
  "key": "paperclip-release:vYYYY.MDD.P",
  "title": "Paperclip vYYYY.MDD.P release",
  "status": "in_progress",
  "fields": {
    "schema_version": 1,
    "version": "vYYYY.MDD.P",
    "release_date": "YYYY-MM-DD",
    "release_patch": 0,
    "stable": true,
    "channels": ["blog_post", "tweet_storm"],
    "artifacts": {
      "changelog_path": "releases/vYYYY.MDD.P.md",
      "publish_url": null
    }
  }
}
```

For a dev blog, upsert a child case with `parentCaseId` set to the release case:

```json
{
  "caseType": "blog_post",
  "key": "paperclip-release:vYYYY.MDD.P:blog-post",
  "title": "Paperclip vYYYY.MDD.P launch post",
  "status": "in_review",
  "parentCaseId": "<release-case-id>",
  "fields": {
    "schema_version": 1,
    "version": "vYYYY.MDD.P",
    "slug": "paperclip-vYYYY-MDD-P",
    "word_count_target": 650,
    "target_audience": ["operators", "developers"],
    "requires_screenshot": false,
    "links": {
      "release_notes": "releases/vYYYY.MDD.P.md",
      "publish_url": null
    },
    "sections": ["hook", "whats_new", "upgrade", "whats_next"]
  }
}
```

For social output, upsert a sibling child case:

```json
{
  "caseType": "tweet_storm",
  "key": "paperclip-release:vYYYY.MDD.P:tweet-storm",
  "title": "Paperclip vYYYY.MDD.P tweet storm",
  "status": "in_review",
  "parentCaseId": "<release-case-id>",
  "fields": {
    "schema_version": 1,
    "version": "vYYYY.MDD.P",
    "post_count": 1,
    "channel": "x",
    "target_audience": ["operators", "contributors"],
    "links": {
      "release_notes": "releases/vYYYY.MDD.P.md",
      "publish_url": null
    },
    "review": {
      "needs_human_copy_paste": true,
      "approved_by": null
    }
  }
}
```

Write the produced copy to `PUT /api/cases/:caseId/documents/body` with
`format: "markdown"` and a `changeSummary`. Fetch the latest document revision
and pass `baseRevisionId` when updating an existing body document.

## Determine the audience and channel first

| Audience | Best channel | Tone |
|---|---|---|
| Existing power users | Changelog, in-app note | Terse, factual, links |
| Engineering teams adopting your API | Release notes, dev blog | Examples, migration steps, version pins |
| Prospective customers | Landing page, marketing blog | Story arc, problem → solution, social proof |
| Broad audience | Social post, email newsletter | One-sentence pitch, link to depth |
| Internal team | Slack/Discord post | What changed, who to ping if it breaks |

Pick the audience for *this* writeup. One release often needs several writeups; do not blend them.

## Universal structure

Whatever the channel, lead with:

1. **What changed.** One sentence in the user's vocabulary.
2. **Who it affects.** Which user role / use case.
3. **What to do.** Migrate now / opt-in / no action needed.

Everything else is depth that supports those three.

## Channel templates

### Changelog entry (terse)

```md
## v1.42.0 — 2026-05-26

### Added
- <feature> — <one-line user benefit>. ([#1234](https://github.com/paperclipai/paperclip/blob/master/packages/skills-catalog/catalog/optional/content/release-announcement/link))

### Changed
- <change> — <one-line impact>. ([#1235](https://github.com/paperclipai/paperclip/blob/master/packages/skills-catalog/catalog/optional/content/release-announcement/link))

### Fixed
- <bug> — <one-line user-visible symptom>. ([#1236](https://github.com/paperclipai/paperclip/blob/master/packages/skills-catalog/catalog/optional/content/release-announcement/link))

### Deprecated
- <thing>. Replaced by <thing>. Removal planned for v<x>.

### Breaking
- <change>. **Migration:** <one-line> or <link to guide>.
```

### Release notes (for adopters)

Same as changelog, plus:

- Migration guide section with before/after code.
- Compatibility table (versions, runtimes, OS).
- Known issues and workarounds.
- Acknowledgements (contributors, reporters of fixed bugs).

### Dev blog post (300–800 words)

- **Hook (1 paragraph):** the problem the release solves, in a real-world scenario.
- **What's new (3–5 bullets with sub-paragraphs):** features, with one code or screenshot example each.
- **Upgrade (1 paragraph):** how to upgrade, what to check.
- **What's next:** one sentence about the next direction. Avoid promises.

### In-app note

- 1 sentence.
- 1 link.
- Dismiss after seen.

### Social post

- 1 sentence pitch.
- 1 link.
- 1 image or short clip.
- No threadbait. If it needs a thread, write a blog post instead.

## Writing rules

- Lead with the user, not the team. `You can now export to CSV` beats `We've added CSV export`.
- Numbers beat adjectives. `60% faster cold start` beats `much faster`. Cite the methodology.
- Show, don't just tell. One code snippet, one screenshot — more is noise.
- Date the post. Undated release content rots fastest.
- Link the migration path explicitly. Do not bury it.
- Mark breaking changes with `**Breaking:**` prefix. Repeat in the email/social channel.

## Avoid

- "We are excited to announce" filler.
- Lists of changes that mix user-visible and internal items.
- Marketing claims without a way to verify.
- Promised dates for unshipped work.
- Pre-announcing something the team has not yet committed to ship.

## Post-publish checklist

- Changelog is in source control alongside the release.
- Blog post date matches actual ship date.
- All links work (release tag, PRs, docs sections).
- Breaking changes are also in the upgrade guide, not only the post.
- Internal team is notified before the public post goes live, not after.
