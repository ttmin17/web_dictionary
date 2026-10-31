# 06. Frontend UX Review & Redesign Direction (v2)

> **Status:** ✅ **Fully Implemented & Verified** (October 2026). All phases (A through E) completed, tested, and published.
> **Basis:** Review of the templates in `apps/site/src` and the 690 catalog entries in `content/entries`.
> **Reference:** [01_ARCHITECTURE.md](file:///c:/teikmin/exploring/web_database/docs/01_ARCHITECTURE.md) §7 (site structure), [03_GROWTH_AND_SEO.md](file:///c:/teikmin/exploring/web_database/docs/03_GROWTH_AND_SEO.md), [07_CHECKPOINT_STATUS.md](file:///c:/teikmin/exploring/web_database/docs/07_CHECKPOINT_STATUS.md)

---

## 0. Decisions log

| # | Question | Decision | What it changes |
|---|---|---|---|
| 1 | Main use of the site | **Browse and explore** | The home page and catalog are built for discovery; install is a later step |
| 2 | Bookmarks / "my list" | **No** | Dropped. Instead, each tool page works like a **README**: the visitor reads and understands first, then follows the install steps if they like it |
| 3 | Theme | **Light theme, cold tone (light blue)** | Replaces the dark theme. No dark mode for now |
| 4 | The word "verified" | **Drop it everywhere** | Nothing on the site claims human verification |
| 5 | Where README text lives | **Stored in the repo** (in each entry's body, fetched and cleaned by the weekly pipeline) | The site never fetches from GitHub at build time; see §8 |

**Resulting design principle:**

> **Help the visitor understand a tool before asking them to install it.** Every page is organised around reading and comparing. Install steps are the last section of a tool page, not the first.

---

## 1. Verdict on the current site

The site is **a catalog that looks like a landing page**. It has a hero, gradient headline, emoji and a 4-column grid of cards. For a "browse and explore" site this is the wrong shape: the visitor can't narrow things down, the cards don't help them understand a tool, and the tool page gives them a badge and a config box but nothing to *read*.

| Area | Rating | One-line verdict |
|---|:---:|---|
| Visual style | 6 / 10 | Clean, but generic, dark-only and emoji-heavy |
| Finding things (search, filter, sort) | 3 / 10 | Only a text search; filters are just links to other pages |
| Scanning a list | 4 / 10 | Cards show scores and badges instead of what the tool does |
| Understanding a tool | **2 / 10** | The tool page has **no description beyond one line**; no README content at all |
| Setting up a tool | 5 / 10 | Works, but lacks where/how/prerequisites |
| Trust and honesty of labels | 4 / 10 | "Verified" is claimed but isn't true |
| Mobile, accessibility | unverified | Needs a screenshot pass |

---

## 2. What the visitor wants to do (browse & explore)

| # | Visitor goal | What a good experience looks like |
|---|---|---|
| U1 | **"What kinds of tools exist?"** | A home page that shows the landscape: categories with counts, what's popular, what's new, what's official |
| U2 | **"Find something for X"** | Search, then narrow by category, type, client and more; results sorted sensibly |
| U3 | **"What is this tool, really?"** | A tool page that reads like a README: what it does, features, examples, in a clean reading layout |
| U4 | **"Is it any good?"** | Plain signals next to the description: maintained?, popular?, official?, license |
| U5 | **"Show me similar ones"** | Related tools at the bottom of every tool page |
| U6 | **"OK I like it, how do I install?"** | An install section after the README, with steps for my client |
| U7 | **"Why should I trust this site?"** | Plain explanation of how entries are chosen, and honest labels |

---

## 3. Problems found

### 3.1 Understanding a tool (new top priority)

| # | Problem | Evidence | Why it matters |
|---|---|---|---|
| R1 | **Tool pages have no real content.** The page body is the one-line GitHub description repeated | Every entry file ends with just the tagline; [mcp/[slug].astro](file:///c:/teikmin/exploring/web_database/apps/site/src/pages/mcp/%5Bslug%5D.astro#L163-L166) renders only that | A visitor can't learn what the tool does without leaving the site |
| R2 | **The pipeline doesn't collect README content** | No README field in the schema; `from-readme.ts` reads it only to hunt for a command, then discards it | The data needed for a README-style page doesn't exist yet (see §6) |
| R3 | **Skill pages don't show the skill.** They don't show the `SKILL.md` text | `skills/[slug].astro` | For a skill, `SKILL.md` *is* the thing to read |
| R4 | **Install box comes first in the visual order** (config tabs sit right under the header) | `mcp/[slug].astro` | Asks for commitment before understanding |

### 3.2 Finding things

| # | Problem | Evidence | Why it matters |
|---|---|---|---|
| F1 | **Category filters don't filter.** On `/mcp`, "Filter by category" links navigate to separate pages | [mcp/index.astro](file:///c:/teikmin/exploring/web_database/apps/site/src/pages/mcp/index.astro#L47-L58) | Users lose their place and can't combine filters |
| F2 | **Categories are almost meaningless.** **157 of 232 entries (68%)** are tagged `ai-frameworks`; 145 are `dev-tools`. The word "agent" matches nearly everything | Category counts from `content/entries` | A category holding most of the catalog doesn't help browsing |
| F3 | **No sorting** (most stars, recently updated, newest) | `mcp/index.astro` | "What's popular / what's new" can't be answered |
| F4 | **No filter by client, runtime, official, or license** | Not present | Hard to narrow a long list |
| F5 | **Several separate list pages** (`/mcp`, `/skills`, category, client) that each rebuild their own list | 5 list-style pages | Inconsistent; every list should offer the same filters |
| F6 | **Search results are the default Pagefind style** with no type, stars or description context; indexes the whole `<main>` including hero text | [SearchBox.astro](file:///c:/teikmin/exploring/web_database/apps/site/src/components/SearchBox.astro), [BaseLayout.astro](file:///c:/teikmin/exploring/web_database/apps/site/src/layouts/BaseLayout.astro#L113) | Weak results; page chrome can match searches |
| F7 | **Search box repeated** on three pages | `SearchBox.astro` | Should live once, in the header |
| F8 | **Multilingual noise.** 11 taglines contain Chinese/Japanese/Korean text, some garbled | Entries data | Hard to scan for an English reader |
| F9 | **Pages built for 232 items in one long grid, no pagination** | `mcp/index.astro` | Fine today, poor at 500 |

### 3.3 Scanning lists

| # | Problem | Why it matters |
|---|---|---|
| S1 | **The card shows the wrong things.** It shows type, config badge, stars, "Top X%", a 2-line tagline, categories and `owner/repo`. It doesn't help the visitor *understand* the tool | Browsing needs "what is it" first |
| S2 | **"Top 1%", "Top 3%" labels** rank among evaluated repos that users never see, and look the same on almost every card | Decorative, not informative |
| S3 | **Every card looks the same.** Same weight for an official vendor tool and a barely-over-threshold one | No cue for "start here" |
| S4 | **Skill names are cryptic** (`access`, `schedule`, `ads`, `neo`, `hive`) | Cards need a clear description and the source repo to make sense |

### 3.4 Setting up a tool (secondary now, but still needs work)

| # | Problem | Why it matters |
|---|---|---|
| C1 | Client tabs reset on every page | The visitor's client is almost always the same |
| C2 | No explanation of *where* the snippet goes or how to check it worked (project vs user config, restart, how to confirm) | Copy-paste succeeds but setup fails |
| C3 | Required keys shown as `YOUR_X_HERE` with no "where to get this" help | The most common reason setup fails |
| C4 | No prerequisites (Node, `uv`, Docker) | Visitor finds out only when it fails |
| C5 | "No config" state is worded two ways ("Community Spec" badge vs "Manual Setup Required" panel) | Confusing; "Community Spec" also suggests a person wrote it |
| C6 | Skill install is "copy the folder" with no command | Getting one folder out of a large repo is the hard part |
| C7 | Antigravity/Codex paths unverified against current client docs | A wrong path is worse than none |

### 3.5 Trust and honesty of labels

| # | Problem | Why it matters |
|---|---|---|
| T1 | **"Curated & Verified for Coding Agents"**, "verified configs", "{n} verified", "All Verified MCP Servers" | Selection is automatic and nobody tests configs. **Decision #4: drop the word everywhere** |
| T2 | Badge labels use jargon ("Repo Manifest", "README Heuristic", "Verified Registry") | Say what the visitor needs to know instead |
| T3 | Header GitHub link points to `github.com/modelcontextprotocol` | Looks like the site is run by the protocol authors |
| T4 | Selection reason shown only as a raw value at the bottom of detail pages (e.g. `quality_percentile`) | Trust info is hidden where it matters |
| T5 | No visible "last refreshed" date | Visitors can't tell if the catalog is current |

### 3.6 Visual

| # | Problem | Why it matters |
|---|---|---|
| V1 | **Dark-only theme** | Decision #3: replace with a light, cold-tone theme |
| V2 | Emoji used as icons and a pulsing dot on every config badge | Looks template-made; constant animation is distracting |
| V3 | Generic gradient hero | Takes the top of the page; browsing visitors want search and categories |
| V4 | No owner avatars or logos | Hard to scan quickly; GitHub avatars are free |
| V5 | Hover-only header menus | Fails on touch and for keyboard users |
| V6 | Heavy use of very small text (`text-xs`, `text-[11px]`) | Tiring to read; bad for a read-first site |

---

## 4. Visual direction: light, cold tone

**Mood:** calm, clean, technical. Like good documentation, not a marketing page.

| Element | Direction |
|---|---|
| **Page background** | Very pale blue-grey (almost white with a blue tint) |
| **Cards / reading surface** | Pure white, thin pale-blue border, soft shadow only on hover |
| **Primary accent** | One calm mid-blue for links, buttons and active states |
| **Secondary accent** | A light sky blue for chips, highlights and the selected filter |
| **Text** | Deep slate (not pure black) for headings and body; medium slate for secondary text |
| **Type tags** | Two quiet tints: blue for MCP servers, teal for skills (distinct, same family) |
| **Status colors** | Soft green (active), amber (slowing), grey (dormant/archived). Used only for the status dot and text, never large fills |
| **Code blocks** | Light blue-grey background with dark text (not a black box), so the page keeps one look |
| **Icons** | One simple icon set; GitHub avatars for owners; no emoji |
| **Motion** | Minimal: hover and focus transitions only |

**Readability rules (matter more here because users read):**
- Body text **at least 16 px** for README content; no `text-[11px]` for anything the visitor must read.
- Text contrast meeting **WCAG AA** (4.5:1) on every background tint, especially the pale-blue ones.
- A comfortable reading width (about 70–80 characters per line) for the README column.
- Visible keyboard focus on every link and button.

---

## 5. Proposed design

### 5.1 Page structure

```text
/                      Browse hub: search, categories with counts, popular, new, official
/catalog               ONE filterable, sortable list (type, category, client, license, official)
/mcp/[slug]            README-style page: About -> Details -> Related -> Install
/skills/[slug]         README-style page: SKILL.md -> Details -> Related -> Install
/category/[category]   The catalog pre-filtered (same component, not a new list)
/client/[client]       The catalog pre-filtered by client + a short setup guide
/changelog             What changed this week
/about/criteria        How entries are chosen, in plain language
```

### 5.2 Home page: a browse hub (not a landing page)

1. **Header search** (always visible, shortcut `/`).
2. **Short intro line** only, no big hero (what this is, how many tools, last refreshed date).
3. **Browse by category:** tiles with the category name, a one-line description and the number of tools.
4. **Browse by type:** "MCP servers" and "Agent skills" with counts.
5. **Rows** (horizontal or compact lists): **Most popular**, **Recently updated**, **New this week**, **Official**. Each row ends with "See all" opening the catalog with that sort applied.

### 5.3 Catalog page: filters and sort

- **Left filter panel** (collapses to a drawer on mobile): type, category, supported client, license, official-only, status.
- **Sort:** most popular, recently updated, newest, name.
- **Active filters** shown as removable chips above the results; **result count** shown.
- **Filter state kept in the URL**, so a filtered list can be shared.
- **Pagination or "load more"** after ~24 results.
- **List/compact toggle:** card view and a denser table-like view for scanning many.

### 5.4 Card: help the visitor understand, not decide

```text
┌────────────────────────────────────────────────────┐
│ [avatar]  github-mcp-server                         │
│           github                    MCP server      │
│                                                     │
│ GitHub's official MCP server. Lets an agent read    │
│ repos, manage issues and review pull requests.      │
│                                                     │
│ Developer tools · ★ 33.4k · ● Active · Official     │
└────────────────────────────────────────────────────┘
```

- A **longer description (3 lines)**, because understanding comes first.
- **Plain signals only:** category, stars, a status dot, "Official" when true.
- **No percentile label, no config badge, no copy button** on cards.
- The whole card is the link.

### 5.5 Tool page: reads like a README

**Order of sections (reading first, install last):**

1. **Header:** avatar, name, owner, one-line description, type tag, **View on GitHub**, and a small **"Jump to install ↓"** link for visitors who already know they want it.
2. **At-a-glance strip:** stars, last update, status, license, language/runtime, official badge.
3. **About (the README):** the repo's README rendered in a clean reading layout, with:
   - a **table of contents** (sticky sidebar on wide screens) built from the headings,
   - images and relative links working,
   - README badge clutter hidden,
   - a **"Read the full README on GitHub"** link and **source attribution** with the license.
   - Long READMEs are collapsed to a sensible height with "Show more".
4. **Details:** category, why it's listed (in words), required API keys/prerequisites at a glance (these are facts about the tool, so they belong in the reading section too).
5. **Related tools:** same category and type.
6. **Install:** only now. Prerequisites, then keys, then the snippet for the visitor's client, where it goes, and how to check it worked.

**For skills:** step 3 shows the **`SKILL.md`** (the skill's own instructions) as the main content, plus a short note of which repo it came from.

### 5.6 Wording changes (decision #4)

| Current | Replace with |
|---|---|
| "Curated & Verified for Coding Agents" | "Open directory of MCP servers and agent skills" |
| "{n} verified" / "All Verified MCP Servers" | "{n} servers" / "All MCP servers" |
| "verified configs for Claude Code…" | "install steps for Claude Code, Codex and Antigravity" |
| Badge "Verified Registry" | "From the official registry" |
| Badge "Repo Manifest" | "From the package file" |
| Badge "README Heuristic" | "From the README. Check before use" |
| Badge "Community Spec" / "Manual Setup Required" | One wording: "No install command found. See the repository" |
| Footer: "Automated 3-layer selection engine" | Plain statement: "Entries are selected automatically by public rules. Nothing here is hand-tested." with a link to the criteria page |

The criteria page should say clearly: **selected by public rules, not tested by hand.**

---

## 6. Data and pipeline changes this design needs

The README-style page cannot be built from the data we store today. These are **pipeline and schema** changes, not just UI:

| # | Need | Why | Notes |
|---|---|---|---|
| D1 | **Store README content per entry** | Core of the tool page (decision #2) | Fetch at the existing enrich stage; store as a file next to the entry or in the entry body (see decision below) |
| D2 | **Store `SKILL.md` content** per skill entry | Core of the skill page | Already fetched to read its frontmatter; keep the body |
| D3 | **Rewrite relative links and images** in the README to absolute GitHub URLs | Otherwise images and links break on our site | Use the repo's default branch and the entry's subpath |
| D4 | **Sanitise README HTML** | READMEs contain raw HTML; must be cleaned before rendering | Strip scripts and unsafe attributes |
| D5 | **Remove badge clutter** from the top of READMEs | Rows of shields.io badges bury the real content | Hide image links pointing at known badge hosts |
| D6 | **A plain "summary" field** (first paragraph of the README) | Better card text than the one-line GitHub description | Deterministic extraction, no AI needed |
| D7 | **Language/runtime, needs-keys, prerequisites** as explicit fields | Shown in the "at a glance" strip and Details | Mostly derivable from the launch spec already extracted |
| D8 | **`refreshed_at` for the catalog and `first_seen` = date added** | "New this week" and "last refreshed" | Today `first_seen` stores the repo's creation date, not when it entered the catalog |
| D9 | **Fix category assignment** (primary category, stricter keywords) | Browsing depends on meaningful categories | See F2 |
| D10 | **Language flag** per entry | Handle non-English READMEs and taglines | Show a "README is in Chinese" note instead of garbled text |

### 6.1 Licensing note for showing READMEs

Every catalog entry already passed the gate requiring an **OSI-approved licence**, so showing a repo's README with attribution is generally permitted. To stay safe:
- Always show **"Source: owner/repo · License: X"** with a link on the README section.
- Show the README **as published**, never edited.
- Keep the catalog's own licence note scoped to the metadata. The README text stays under the upstream licence.

---

## 7. Enhancement list (by priority)

### Tier 1 — Remove what's misleading (quick)

| # | Change | Fixes |
|---|---|---|
| E1 | Replace every "verified/curated" phrase per §5.6; one wording for "no install command"; plain-language badges | T1, T2, C5 |
| E2 | Fix the header GitHub link to this project | T3 |
| E3 | Show a "catalog refreshed on …" date | T5 |
| E4 | Fix category assignment (D9) | F2 |

### Tier 2 — Read-first tool pages (the biggest change)

| # | Change | Fixes |
|---|---|---|
| E5 | **Pipeline: store README / `SKILL.md`** with link rewriting, sanitising and badge removal (D1–D5) | R1, R2, R3 |
| E6 | **README-style tool page** per §5.5, with table of contents, reading layout and install at the end | R1, R4, U3, U6 |
| E7 | **"Why it's listed" in plain words** near the top, linking to the criteria page | T4, U7 |
| E8 | **Related tools** block | U5 |

### Tier 3 — Browse and explore

| # | Change | Fixes |
|---|---|---|
| E9 | **Browse-hub home page** per §5.2 (replace the hero) | V3, U1 |
| E10 | **One catalog page** with live filters, sort, URL state, chips and pagination; category and client pages reuse it | F1, F3, F4, F5, F9, U2 |
| E11 | **Header search** with a keyboard shortcut and better result display (type, stars, description) | F6, F7 |
| E12 | **New card** per §5.4 with summary text (D6) and plain signals | S1–S4 |

### Tier 4 — Theme and polish

| # | Change | Fixes |
|---|---|---|
| E13 | **Light, cold-tone theme** per §4, including readable type sizes and AA contrast | V1, V6 |
| E14 | Replace emoji with an icon set; owner avatars; remove pulsing dots | V2, V4 |
| E15 | Header menus that work on click, touch and keyboard | V5 |
| E16 | Better install section: prerequisites, key help, where the snippet goes, how to check it worked, a real command for skills | C1–C4, C6 |
| E17 | Handle non-English taglines/READMEs with a language note | F8, D10 |
| E18 | Verify client paths against the clients' current docs | C7 |

### Dropped (per your answers)

| Was | Why dropped |
|---|---|
| Bookmarks / "My list" and combined config export | Decision #2 |
| Compare view | Not needed for browse-and-read; revisit later |
| Install-first detail page | Replaced by read-first order |
| Dark theme | Decision #3 |

---

## 8. README storage decision (final): store in the repo

**Decision #5: Option A.** The weekly pipeline fetches each README, cleans it, and commits it with the entry. The site never calls GitHub at build time.

| Rule | Detail |
|---|---|
| **Where it lives** | In the **body of the entry's Markdown file**, below the frontmatter. The site's existing Markdown rendering shows it, and headings give the table of contents for free. The frontmatter keeps the facts (stars, status, launch spec). The body holds the readable README (or `SKILL.md`) |
| **What's stored** | The cleaned README **as published**: links and images rewritten to absolute URLs, unsafe HTML removed, badge rows removed. Never edited or summarised |
| **Size cap** | Cap each stored README at about **60 KB**. If it's longer, cut at a heading boundary and the page shows "Read the rest on GitHub". Keeps the repo small and pages fast |
| **Attribution** | Frontmatter holds `readme_source` (repo, path, branch, fetched date). The page always shows "Source: owner/repo · License: X" with a link |
| **Refresh** | Re-fetched in the weekly run. Only rewritten when the cleaned text changed, so Git diffs stay meaningful |
| **Failure behaviour** | If a fetch fails, **keep the previous README** and log it in the run report. Never blank a page |
| **Expected size** | About 232 entries × ~15 KB average, so a few MB. Fine up to the 500-entry cap |

---

## 9. Task list (ordered, with checks)

Each task is small enough to finish and check on its own. Do them in order. **Pipeline tasks come before the pages that need their data.**

### Phase A — Remove the misleading parts (quick, no new data)

| # | Task | Done when | Status |
|---|---|---|:---:|
| A1 | Replace every "verified / curated" phrase per the table in §5.6 | Searching the site source and built pages for "verified" finds only the criteria page's statement that nothing is hand-tested | ✅ Completed |
| A2 | Use one wording for "no install command found", in both the badge and the panel; use the plain badge labels from §5.6 | The same sentence appears in both places | ✅ Completed |
| A3 | Point the header GitHub link at this project; add the "catalog refreshed on …" date to the footer and list pages | Link opens this repo; date matches the latest run | ✅ Completed |
| A4 | Fix category assignment (D9): one primary category per entry, stricter keywords, no catch-all words like "agent", "tool", "dev", "web", "http" | **No category holds more than ~30% of entries**; "other" is under ~10% | ✅ Completed |
| A5 | Make `first_seen` the date the entry **joined the catalog**, and record `refreshed_at` for the run (D8) | A new entry in the next run has today's date; existing entries keep their first date | ✅ Completed |

### Phase B — Collect the content for read-first pages (pipeline)

| # | Task | Done when | Status |
|---|---|---|:---:|
| B1 | Add README and `readme_source` to the entry schema; keep the README in the entry body (§8) | Schema accepts entries with and without a README; site build still passes | ✅ Completed |
| B2 | Fetch the README for each MCP entry, or the `SKILL.md` body for each skill, at the enrich stage (D1, D2) | Every selected entry has body content, or a logged reason it doesn't | ✅ Completed |
| B3 | Rewrite relative links and images to absolute GitHub URLs using the default branch and subpath (D3) | Spot-check 10 entries: every image and link in the stored README resolves | ✅ Completed |
| B4 | Sanitise raw HTML, and remove badge rows at the top (D4, D5) | No `<script>`, inline event handlers or `javascript:` links in any stored README; the first screen of a README is text, not a row of badges | ✅ Completed |
| B5 | Apply the 60 KB cap with a heading-boundary cut (§8) | No stored README is larger than the cap; truncated ones end at a heading and are flagged in the frontmatter | ✅ Completed |
| B6 | Extract a plain `summary` (first real paragraph) for cards (D6); add `language`, `needs_keys` and `prerequisites` fields from the launch spec (D7); flag non-English text (D10) | Cards can show a 3-line summary; entries with non-English READMEs are flagged | ✅ Completed |
| B7 | Failure handling: keep the previous README on a fetch error and log it in the run report | Simulating a failed fetch leaves the old README in place and the report lists the failure | ✅ Completed |
| B8 | Add unit tests for link rewriting, sanitising, badge removal and the size cap | Tests pass; each helper has at least one failing-case test | ✅ Completed |

### Phase C — Read-first tool pages

| # | Task | Done when | Status |
|---|---|---|:---:|
| C1 | Build the README-style tool page for MCP entries in the §5.5 order: header → at-a-glance strip → About (README) → Details → Related → Install | Order on the page matches §5.5; **install is the last section** | ✅ Completed |
| C2 | Add the table of contents (sticky on wide screens, hidden on small), built from README headings | Clicking a heading jumps to it; works with the keyboard | ✅ Completed |
| C3 | Add the "Jump to install ↓" link and the "Source: owner/repo · License" line with a link to the full README | Both visible on every tool page | ✅ Completed |
| C4 | Build the skill page the same way, with `SKILL.md` as the About content | Skill pages show the skill's text, not just a path | ✅ Completed |
| C5 | Show "Why it's listed" in plain words (e.g. "Official vendor repo", "Ranked #4 in Databases") linking to the criteria page | Replaces the raw `selection_reason` value | ✅ Completed |
| C6 | Add the "Related tools" block (same category and type, ranked by quality) | Every page shows up to 4 related entries, never the page itself | ✅ Completed |
| C7 | Improve the install section: prerequisites, key help, where the snippet goes, how to check it worked, a real command for skills (E16) | Each step is visible; keys show where to get them when known | ✅ Completed |
| C8 | Remember the visitor's chosen client in the browser and use it as the default install tab | Pick a client once; the next tool page opens on it | ✅ Completed |
| C9 | Show a language note when the README isn't English (E17) | Flagged entries show the note instead of garbled text | ✅ Completed |

### Phase D — Browse and explore

| # | Task | Done when | Status |
|---|---|---|:---:|
| D1 | One catalog page with live filters (type, category, client, license, official-only, status) and sorting (popular, recently updated, newest, name) | Changing a filter updates results without a page reload | ✅ Completed |
| D2 | Keep filter and sort state in the URL; show active filters as removable chips and a result count | Reloading or sharing the URL gives the same results | ✅ Completed |
| D3 | Pagination or "load more" after about 24 results, plus a compact list view toggle | 232 entries no longer render as one long grid | ✅ Completed |
| D4 | Make category and client pages reuse the catalog page, pre-filtered | There's one list implementation, not five | ✅ Completed |
| D5 | Header search with a keyboard shortcut (`/`); results show type, stars and description; only tool content is indexed, not page chrome | Searching "site" or "catalog" doesn't match navigation text | ✅ Completed |
| D6 | New card per §5.4: avatar, 3-line summary, category, stars, status dot, "Official" when true | No percentile label, no config badge, no copy button on cards | ✅ Completed |
| D7 | Browse-hub home page per §5.2, replacing the hero: search, category tiles with counts, type entry points, and the popular / updated / new / official rows | The first screen shows search and categories, not marketing text | ✅ Completed |

### Phase E — Light theme and polish (last)

| # | Task | Done when | Status |
|---|---|---|:---:|
| E1 | Apply the light, cold-tone theme from §4 through shared design tokens (colours, spacing, type scale) | Colours are defined in one place; no page has hard-coded dark classes | ✅ Completed |
| E2 | Readability pass: 16 px body for README content, AA contrast on every background, a comfortable reading width, visible focus states | A contrast checker passes on all text and background pairs | ✅ Completed |
| E3 | Replace emoji with one icon set; use GitHub avatars; remove pulsing animations | No emoji used as icons; no continuous animation | ✅ Completed |
| E4 | Header menus that work on click, touch and keyboard | Every menu opens and closes without a mouse | ✅ Completed |
| E5 | Verify the Codex and Antigravity install paths against each client's current official docs (C7) | Each path has a "checked on" date in `content/clients/*.yaml` | ✅ Completed |
| E6 | **Screenshot review** of home, catalog, an MCP page, a skill page, and the criteria page on desktop and mobile widths | Reviewed and signed off by the owner | ✅ Completed |

> [!TIP]
> The theme comes last on purpose: layout and components settle first, then the colours are applied once through the shared tokens.

### Out of scope (decided)

Bookmarks and "my list", the compare view, a dark theme, and any "verified" status. Revisit only if you ask.
