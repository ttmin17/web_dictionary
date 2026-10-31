# 10. Post-v3 Audit: Why Tools Were Filtered Out & Frontend Layout Redesign

> **Date:** 16 October 2026  
> **Scope:** Independent audit of the other agent's v3 implementation across pipeline stages ([`3-type-check.ts`](file:///c:/teikmin/exploring/web_database/apps/pipeline/src/stages/3-type-check.ts), [`8-trends.ts`](file:///c:/teikmin/exploring/web_database/apps/pipeline/src/stages/8-trends.ts), [`scripts/migrate-to-tools.ts`](file:///c:/teikmin/exploring/web_database/scripts/migrate-to-tools.ts)) and frontend templates ([`index.astro`](file:///c:/teikmin/exploring/web_database/apps/site/src/pages/index.astro), [`CatalogView.astro`](file:///c:/teikmin/exploring/web_database/apps/site/src/components/CatalogView.astro), [`EntryCard.astro`](file:///c:/teikmin/exploring/web_database/apps/site/src/components/EntryCard.astro), [`DictionaryCard.astro`](file:///c:/teikmin/exploring/web_database/apps/site/src/components/DictionaryCard.astro), [`TrendingBoard.astro`](file:///c:/teikmin/exploring/web_database/apps/site/src/components/TrendingBoard.astro)).

---

## 1. Executive Summary & Updated Scorecard

The other agent completed a large amount of structural plumbing (new schemas, 9 categories, `/trending` route, `/tools` route, `DictionaryCard`, `Sparkline`, and 94 unit tests). **However, both of your observations are 100% spot-on:**

1. **"Why are so many tools filtered out?"**
   - Because of **4 compounding filtering/migration bugs**, the user-facing catalog drops from **690 total entries** down to **298 visible entries** on `/catalog`, only **6 entries** in `Agent Tools`, and **566 entries (82% of the catalog!) forced to `trending_score = 0`** and excluded from the Trending leaderboards.
2. **"Why is the frontend arrangement not attractive?"**
   - The frontend suffers from **" Stacked Box Syndrome"**: the home page stacks 6 different full-width component styles vertically (`3,500px+` scroll), `/catalog` uses a cramped 2-column grid where cards are stretched too wide, skill cards show cryptic internal folder names (`access`, `configure`, `welcome`), and detail pages repeat the exact same metadata **3 times in a row** before the user reaches the README.

| Dimension | v3 Audit Score | Verdict |
|---|:---:|---|
| **⚙️ Pipeline & Schema Plumbing** | **8.0 / 10** | Solid TypeScript types and unit tests, but the agent **never ran a live discovery pass** for Agent Tools (only migrated 6 hardcoded files) and broke historical signal matching for 82% of the catalog. |
| **🔍 Data Visibility & Filtering** | **4.5 / 10** | Over-aggressive default hiding: 392 skills are hidden by default in `/catalog` (and even blocked from keyword search!), only 6 Agent Tools exist, and 566 entries are quarantined from `/trending`. |
| **🎨 Frontend Layout & Visual Arrangement** | **5.5 / 10** | Functional light theme, but visually cluttered: 6 competing badge colors (`blue`, `teal`, `purple`, `orange`, `amber`, `emerald`), mismatched card geometries, redundant headers on detail pages, and a bloated home page stack. |
| **⭐ Overall Post-v3 Rating** | **6.0 / 10** | **Strong underlying components that need data un-filtering and a cohesive, high-density UI layout pass.** |

---

## 2. Root-Cause Analysis: Why So Many Tools Are Filtered Out

Here are the **4 exact mechanisms** currently hiding or dropping tools across the site:

### 🔴 Cause 1: `CatalogView.astro` Hides 392 of 690 Entries by Default (Even During Search!)
- **Where:** [`apps/site/src/components/CatalogView.astro`](file:///c:/teikmin/exploring/web_database/apps/site/src/components/CatalogView.astro#L105-L108) and [line 599](file:///c:/teikmin/exploring/web_database/apps/site/src/components/CatalogView.astro#L599).
- **What happens:**
  - The checkbox `"Group skills by repo"` (`state.collapsePacks`) is enabled (`true`) by default.
  - Because the `538` Agent Skills come from `146` repositories, `if (state.collapsePacks && item.type === 'agent_skill' && !item.isPrimary) return false;` immediately hides **392 skills**, dropping the `/catalog` counter from **690 tools** to **298 tools** (`Showing 24 of 298 tools`).
  - **The Search Bug:** In `applyFilterAndRender()` ([line 599](file:///c:/teikmin/exploring/web_database/apps/site/src/components/CatalogView.astro#L599)), the `!item.isPrimary` filter runs **before** the keyword search (`state.q` on line 603). If a user types a skill name into the `/catalog` filter box, **392 skills are completely unsearchable** unless the user manually unchecks `"Group skills by repo"` in the left sidebar!
  - **Wrong Representative Card:** When a repo like `anthropics/claude-plugins-official` is collapsed into 1 card, it picks the first skill in the loop (`access`) instead of titling the card after the repository (`claude-plugins-official`).

### 🔴 Cause 2: Only 6 `Agent Tools` Exist Because Discovery Was Never Run (Hardcoded Script)
- **Where:** [`scripts/migrate-to-tools.ts`](file:///c:/teikmin/exploring/web_database/scripts/migrate-to-tools.ts#L32-L75) and [`data/state/catalog-state.json`](file:///c:/teikmin/exploring/web_database/data/state/catalog-state.json#L6).
- **What happens:**
  - Even though the other agent added `tool_queries` to [`queries.yaml`](file:///c:/teikmin/exploring/web_database/apps/pipeline/config/queries.yaml#L15-L20), they **never ran the discovery pipeline** to fetch those repositories.
  - Instead, they wrote a one-off script ([`scripts/migrate-to-tools.ts`](file:///c:/teikmin/exploring/web_database/scripts/migrate-to-tools.ts)) that hardcoded **only 6 files** (`gpt-researcher`, `ui-tars-desktop`, `scrapling`, `trigger.dev`, `python-sdk`, `fastmcp`) and moved them from `content/entries/mcp/` to `content/entries/tools/`.
  - Meanwhile, dozens of other standalone AI tools/apps are **still sitting inside `content/entries/mcp/`** (`morluto/rea`, `HKUDS/nanobot`, `koala73/worldmonitor`, `pascalorg/editor`, `diegosouzapw/OmniRoute`, `ThinkInAIXYZ/deepchat`, `NVIDIA/SkillSpector`, `Graphify-Labs/graphify`, `Evil0ctal/Douyin_TikTok_Download_API`), and **191 candidate repos** in [`data/runs/2026-W42/decisions.json`](file:///c:/teikmin/exploring/web_database/data/runs/2026-W42/decisions.json) that were rejected under the old 2-pillar cap (`exceeded_catalog_cap: 106`, `missing_file_evidence: 85`) were never let in!

### 🔴 Cause 3: 566 of 690 Entries (82%) Were Quarantined to `trending_score: 0` in `8-trends.ts`
- **Where:** [`apps/pipeline/src/stages/8-trends.ts`](file:///c:/teikmin/exploring/web_database/apps/pipeline/src/stages/8-trends.ts#L117-L138) and [lines 228–241](file:///c:/teikmin/exploring/web_database/apps/pipeline/src/stages/8-trends.ts#L228-L241).
- **What happens:**
  - Look at [`data/runs/2026-W42/trending.json`](file:///c:/teikmin/exploring/web_database/data/runs/2026-W42/trending.json#L7): `"total_new_tools": 566, "total_active_entries": 690`.
  - Why did `8-trends.ts` think **566 of your 690 existing tools** had no prior week data (`safePrevStars === undefined`)?
  - Because in [`data/signals/2026/2026-W41.json`](file:///c:/teikmin/exploring/web_database/data/signals/2026/2026-W41.json), skill slugs were saved under their old W41 paths (e.g., `google-gemini-gemini-cli-gemini-skills-agent-tui`), whereas in W42 the paths changed (e.g., `google-gemini-gemini-cli-packages-core-src-skills-builtin-skill-creator`).
  - Even though GitHub stars belong to the **parent repository** (`google-gemini/gemini-cli`), `resolveSnapshotEntry()` in `8-trends.ts` only checks exact entry slugs! When exact slug lookup fails, it marks all 566 entries as `velocity_source: 'age_velocity'` and **hardcodes `trending_score: 0`** ([line 237](file:///c:/teikmin/exploring/web_database/apps/pipeline/src/stages/8-trends.ts#L237)), kicking **82% of the entire catalog** off the Trending Leaderboard and pushing them to the bottom when sorting `/catalog` by `"🔥 Trending This Week"`!

### 🔴 Cause 4: Strict MCP Heuristic in `3-type-check.ts` Now Reclassifies Real MCP Servers as Tools
- **Where:** [`apps/pipeline/src/stages/3-type-check.ts`](file:///c:/teikmin/exploring/web_database/apps/pipeline/src/stages/3-type-check.ts#L40-L61) and [lines 168–199](file:///c:/teikmin/exploring/web_database/apps/pipeline/src/stages/3-type-check.ts#L168-L199).
- **What happens:**
  - In `3-type-check.ts` line 40, `agentKeywords` includes generic words like `'agent'`, `'llm'`, `'workflow'`, `'assistant'`.
  - Then on line 172, `isDedicatedMcpServer` requires `(repoTopics.includes('mcp-server') && !matchesAgentTopicOrDesc)`.
  - Almost **every** MCP server description mentions `"agent"` or `"LLM"` (e.g., *"An MCP server that lets LLM agents query Postgres"*). Because `!matchesAgentTopicOrDesc` is `false` whenever the description contains `"agent"` or `"llm"`, any MCP server whose repo name doesn't literally contain the substring `"mcp"` gets misclassified or dropped on future pipeline runs!

---

## 3. Frontend UX & Visual Arrangement Critique (Why It Feels Unattractive)

### 3.1 Home Page (`index.astro`) — "The 6-Section Vertical Wall"
Right now, [`apps/site/src/pages/index.astro`](file:///c:/teikmin/exploring/web_database/apps/site/src/pages/index.astro) stacks **6 full-width sections** vertically with different card shapes and a rainbow of badge colors:

```text
Current Home Page Vertical Stack (~3,600px tall):
┌──────────────────────────────────────────────────────────┐
│ 1. Header + Left-aligned Search Box (empty right space)  │
├──────────────────────────────────────────────────────────┤
│ 2. 3 Giant Pastel Pillar Cards:                          │
│    [146 MCP (Blue)]  [538 Skills (Teal)]  [6 Tools (!)]  │ <-- "6 tools" looks broken!
├──────────────────────────────────────────────────────────┤
│ 3. 10-Row Full-Width Trending Table (~750px tall)        │ <-- Dominated by 3-line skill walls
├──────────────────────────────────────────────────────────┤
│ 4. 4 Purple "Breakout New Tools" Cards                   │ <-- All 4 are skills from W42
├──────────────────────────────────────────────────────────┤
│ 5. 9 Category Cards (3x3 Grid)                           │
├──────────────────────────────────────────────────────────┤
│ 6. 4 "Most Popular" Cards + 4 "Recently Updated" Cards   │
└──────────────────────────────────────────────────────────┘
```

**Why this arrangement doesn't work visually:**
1. **Imbalanced Pillar Numbers (`146` vs `538` vs `6`):** Putting 3 giant equal-sized cards at the top when Pillar 3 only says `6 tools` immediately makes the site look unfinished.
2. **No Above-the-Fold Split Layout:** A user has to scroll past giant pastel boxes just to see the trending tools, and then scroll past 10 wide rows to see categories.
3. **Color & Badge Overload:** Every row/card mixes `slate`, `blue`, `teal`, `purple`, `orange` (`+stars/wk`), `amber` (`Pack`), and `emerald` (`▲ delta` / `Active`). Instead of the calm, clean cold-tone design from [`06_FRONTEND_UX_REVIEW.md`](file:///c:/teikmin/exploring/web_database/docs/06_FRONTEND_UX_REVIEW.md), it looks like a Christmas tree of competing pastel pills.

---

### 3.2 Catalog Page (`CatalogView.astro` & `EntryCard.astro`) — Cramped & Hard to Scan

1. **2-Column Grid Makes Cards Stretched & Sparse (`grid-cols-1 md:grid-cols-2`):**
   - In [`CatalogView.astro`](file:///c:/teikmin/exploring/web_database/apps/site/src/components/CatalogView.astro#L337), the results grid is locked to **2 columns** (`md:grid-cols-2`). On a standard desktop screen, each card is nearly `500px` wide with lots of empty white space in the header and only 4 cards visible above the fold.
2. **Skill Cards Have Cryptic Titles (`access`, `configure`, `welcome`, `cavecrew`):**
   - When a skill comes from a monorepo, `EntryCard.astro` shows the subfolder skill name (`access`) as the large bold title and only shows `anthropics` in tiny grey text underneath. And when `Group skills by repo` is checked, that single `access` card represents the entire `anthropics/claude-plugins-official` repository!
3. **Clipped Bottom Metadata Bar on Cards:**
   - [`EntryCard.astro`](file:///c:/teikmin/exploring/web_database/apps/site/src/components/EntryCard.astro#L143-L170) crams 5–6 items (`Category · ★ 91.4k · +4.4k/wk · ● Active · Official` + `Sparkline`) into a single bottom bar with `truncate`, causing items on the right to get cut off or collide with the sparkline.
4. **Duplicate Card HTML in `CatalogView.astro`:**
   - `CatalogView.astro` renders `<EntryCard />` on initial SSR load ([line 339](file:///c:/teikmin/exploring/web_database/apps/site/src/components/CatalogView.astro#L339)), and then **immediately overwrites `gridContainer.innerHTML`** on line 692 when `setupCatalog()` runs `applyFilterAndRender()` on page load! Even worse, the client-side JS template on lines 708–741 **omits the `<Sparkline />` and hardcodes `Active` status** for every card, causing a visual flash where sparklines disappear as soon as the page loads!

---

### 3.3 Detail Pages (`mcp/[slug]`, `skills/[slug]`, `tools/[slug]`) — Triple Redundancy Above the Fold

Look at what a visitor sees at the top of any tool page right now:
1. **Header Block:** Shows Pillar badge (`MCP Server`), Status badge (`Active`), Title, `owner/repo`, and a 2-line description (`data.summary || data.tagline`).
2. **At-a-Glance Strip:** Shows `★ Stars`, `Last commit`, `License: MIT`, `Runtime: Node.js`.
3. **`DictionaryCard.astro` Immediately Below:** A big bordered box that **repeats the exact same description (`What It Is`), the exact same Pillar badge & Runtime (`Pillar & Runtime`), the exact same License (`Auth & Cost`), and the exact same Stars (`Trend Status`)!**
   - Having the Header and the `DictionaryCard` stacked back-to-back repeating the same 5 facts makes the top of every page feel repetitive and boxy.
4. **Inconsistent Install Box Placement:**
   - On `/tools/[slug]`, the dark Quickstart Install box is at the **top** (above the README).
   - On `/mcp/[slug]` and `/skills/[slug]`, the Install box is at the **very bottom** (below 60KB of README text).

---

## 4. Action Plan: How to Fix the Filtering & Redesign the Frontend (Phased)

### Phase A: Un-Filter the Catalog & Fix Trending / Tool Counts (Data & Pipeline)

| Step | What to Fix | Exact Change | Expected Result |
|:---:|---|---|---|
| **A.1** | **Fix `8-trends.ts` Historical Repo-Level Star Matching** | In `resolveSnapshotEntry()` ([`8-trends.ts`](file:///c:/teikmin/exploring/web_database/apps/pipeline/src/stages/8-trends.ts#L117)), if exact `slug` lookup in `2026-W41.json` fails, fallback to matching any entry in `2026-W41.json` that belongs to the **same `owner/repo`** (`slug.startsWith(ownerRepoSlug)`). Since GitHub stars are a repo-level metric, every skill/tool from a repo tracked in W41 immediately recovers its true 7-day star delta! Also, for genuinely new repos (`age_velocity`), do **not** hardcode `trending_score: 0` — allow them in the `Breakout New Tools` list and give them a damped baseline score. | **566 quarantined entries drop to ~0**; `/trending` and `/catalog?sort=trending` become rich, accurate, and complete. |
| **A.2** | **Reclassify Existing Standalone Apps in `content/entries/mcp/` & `decisions.json` into `Agent Tools`** | Expand [`scripts/migrate-to-tools.ts`](file:///c:/teikmin/exploring/web_database/scripts/migrate-to-tools.ts) (or run an offline reclassification pass over `content/entries/mcp/` and `data/runs/2026-W42/enriched.json`) to move standalone apps/frameworks (`morluto/rea`, `HKUDS/nanobot`, `koala73/worldmonitor`, `pascalorg/editor`, `diegosouzapw/OmniRoute`, `ThinkInAIXYZ/deepchat`, `NVIDIA/SkillSpector`, `Graphify-Labs/graphify`, `vitali87/code-graph-rag`, `Evil0ctal/Douyin_TikTok_Download_API`, plus top skill-packaged tools like `stablyai/orca`, `thedotmack/claude-mem`, `genspark-ai/genoffice`) into `Agent Tools` (or dual-badge them). Also fix `3-type-check.ts` line 172 so `matchesAgentTopicOrDesc` doesn't disqualify MCP servers whose description mentions `"agent"` or `"llm"`. | `Agent Tools` grows from a tiny **6 tools** to **30–50+ major AI agent repos** immediately, balancing all 3 pillars. |
| **A.3** | **Fix Skill Pack Representation & Search Bug in `CatalogView.astro`** | 1. In [`CatalogView.astro`](file:///c:/teikmin/exploring/web_database/apps/site/src/components/CatalogView.astro#L599), when the user types a search query (`qLower.length > 0`) or filters by `type === 'agent_skill'`, **automatically search across all 538 skills** (do not hide non-primary skills during search!).<br>2. When displaying a collapsed Skill Pack card, display the **Repository / Pack Name** (e.g. `claude-plugins-official` or `nitrostack`) as the card title with subtitle `📦 Skill Pack · 5 skills included (access, configure, ...)` instead of showing the first random subfolder name (`access`).<br>3. Show the true total in the counter: `"Showing 298 repositories (690 total tools & skills)"`. | Users never feel like tools are "missing", search finds all 690 entries, and Skill Pack cards finally make sense. |

---

### Phase B: Frontend Layout & Visual Arrangement Redesign

#### 1. Redesign the Home Page (`index.astro`) — Compact 2-Column "Dictionary + Radar" Hero
Instead of stacking 6 huge full-width sections vertically, organize the Home Page into **3 clean, high-density zones**:

```text
Proposed Home Page Arrangement (Clean, Scannable, High-Density):
┌─────────────────────────────────────────────────────────────────────────┐
│ ZONE 1: COMPACT DICTIONARY HERO (Centered or Split)                     │
│   The AI Tools Web Dictionary & Weekly Trend Radar                      │
│   [ 🔍 Search 690+ MCP servers, agent skills & AI repos...       (/) ]  │
│   Quick Filters: [🔌 130+ MCPs] [🧠 530+ Skills] [🛠️ 30+ Agent Tools]   │
│                  [Claude Code] [OpenAI Codex] [Google Antigravity]      │
├────────────────────────────────────────┬────────────────────────────────┤
│ ZONE 2: LEFT (7 cols)                  │ ZONE 2: RIGHT (5 cols)         │
│ 🔥 HOT THIS WEEK (Top 10 Leaderboard)  │ 🚀 BREAKOUT NEW REPOS (<=60d)  │
│ Compact ranked table:                  │ Compact vertical list of the   │
│ #1  diagram-design      +9.0k ★ [📈]   │ top 5 fastest-rising new repos │
│ #2  orca                +4.4k ★ [📈]   │                                │
│ #3  ghidra-mcp          +857 ★  [📈]   ├────────────────────────────────┤
│ ...                                    │ 📂 BROWSE BY 9 CATEGORIES      │
│ [View Full Weekly Leaderboard →]       │ Compact 2-col pill grid w/ #s  │
├────────────────────────────────────────┴────────────────────────────────┤
│ ZONE 3: FEATURED DICTIONARY GRID (3 Columns, Tabbed)                    │
│ Tabs: [ ⭐ Most Popular ]  [ ⚡ Recently Updated ]  [ 🏛️ Official ]      │
│ ┌───────────────────┐  ┌───────────────────┐  ┌───────────────────┐     │
│ │ Card 1            │  │ Card 2            │  │ Card 3            │     │
│ └───────────────────┘  └───────────────────┘  └───────────────────┘     │
└─────────────────────────────────────────────────────────────────────────┘
```

**Why this looks 10x better:**
- **Everything important is visible in the first 1.5 screens** (Search + Pillar pills + Live Weekly Top 10 on the left + Breakout Newcomers & Categories on the right).
- Replaces the 3 giant pastel Pillar boxes (which wasted 250px of vertical height and highlighted the awkward `6 tools` count) with sleek, unified **Pillar Stat Pills** right under the search bar.
- Turns the bottom "Most Popular" and "Recently Updated" stacks into a single **3-column tabbed showcase**.

#### 2. Redesign the Catalog Page (`CatalogView.astro`) & Cards (`EntryCard.astro`)
1. **Upgrade Grid from 2 Columns to 3 Columns (`grid-cols-1 md:grid-cols-2 xl:grid-cols-3`):**
   - Reduces card width to a crisp, balanced proportion (~320px), showing **9 cards per screen** instead of 4.
2. **Stop Overwriting SSR Cards on Initial Load (Fix the Disappearing Sparklines Bug):**
   - In `CatalogView.astro`, either include the inline SVG sparkline & status dot in the client-side render template **or** only re-render `gridContainer.innerHTML` when a user actually changes a filter/sort control.
3. **Clean Up `EntryCard.astro` Visual Hierarchy & Restrain Colors:**
   - **Strict 2-Row Footer on Cards:**
     - *Row 1 (Left):* `Category` · `★ 33.6k` · `+152/wk` (subtle emerald/slate text instead of loud orange bordered boxes).
     - *Row 1 (Right):* Inline 4-week `<Sparkline />` (never clipped by `truncate`!).
   - **Pack Title Clarity:** When a card represents a collapsed Skill Pack, title it with the **Repo Name** (`anthropics / claude-plugins-official`) and show the included skill names as subtle mono pills (`access`, `configure`, `+3 more`).

#### 3. Unify Detail Pages (`mcp/[slug]`, `skills/[slug]`, `tools/[slug]`) — Eliminate Triple Redundancy
1. **Merge the Header and `DictionaryCard.astro` into ONE Unified "Dictionary Header Card":**
   - Do **not** render a Header with Title + Description + Signal Strip and then immediately render `DictionaryCard.astro` repeating the exact same Description + Runtime + License + Stars!
   - Instead, make the top of every detail page a single, cohesive **Web Dictionary Entry Header**:
     - **Top Bar:** Avatar + Entry Title + `owner/repo` + Pillar Badge + `[⚡ Jump to Install ↓]` + `[GitHub ↗]`
     - **Dictionary Definition Grid (Inside the same card, right below the title):**
       - **Definition:** Clean 1–2 sentence definition
       - **Taxonomy:** Category + `#tags`
       - **Environment:** Runtime (`Node.js` / `Python`) · Execution (`Local` / `Remote HTTP`) · Auth (`API Key Required` / `Free Local`) · License (`MIT`)
       - **Compatibility:** `Claude Code` · `OpenAI Codex` · `Google Antigravity`
       - **Weekly Momentum:** `★ 33,579 total` · `+152 ★ this week (#9 in MCP)` · `[4w Sparkline]`
2. **Consistent Read-First Section Order Across All 3 Pillars:**
   - Keep a small inline **1-Line Quick Command Bar** (`claude mcp add ...` or `pip install ...` with a 1-click Copy button) inside the top Dictionary Header for power users, and keep the full multi-client configuration tabs at `#install` at the bottom of the page across all 3 pillars (`/mcp`, `/skills`, `/tools`).

---

## 5. Summary Checklist of Recommended Next Steps

| Priority | Phase | Task | Impact |
|:---:|---|---|---|
| **P0** | **Data Fix** | Fix `8-trends.ts` repo-level fallback matching against `2026-W41.json` so 566 entries aren't quarantined to `trending_score: 0`. | 🔥 Fixes `/trending` and `/catalog` sorting immediately |
| **P0** | **Data Fix** | Reclassify standalone AI repos currently stuck in `content/entries/mcp/` into `content/entries/tools/` (expanding `Agent Tools` from 6 to ~35+ tools). | 🛠️ Makes Pillar 3 (`Agent Tools`) look full and legitimate |
| **P1** | **Catalog UX** | Fix `CatalogView.astro` so keyword search searches all 690 entries, collapsed Skill Packs show the **Repo Name**, and client-side JS keeps the `<Sparkline />`. | 🔍 Un-hides the 392 skills and fixes disappearing sparklines |
| **P1** | **Home Layout** | Replace the 6-section vertical stack in `index.astro` with the **2-Column Split Radar Layout** (Top 10 Trending Left + Breakout & Categories Right). | 🎨 Makes the home page look like a modern, cohesive product |
| **P2** | **Detail Layout** | Merge the duplicate page header + `DictionaryCard.astro` into a single unified **Dictionary Entry Header** on `/mcp`, `/skills`, and `/tools`. | 📖 Removes the 3x repeated text above the README |
