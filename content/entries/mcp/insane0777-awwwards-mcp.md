---
slug: insane0777-awwwards-mcp
name: Awwwards-mcp
tagline: Free, open-source MCP server that gives AI coding agents (Claude Code,
  Codex, Cursor, OpenCode, ZCode…) design inspiration from award-winning
  websites
summary: 'Your agent searches in natural language ("dark 3D portfolio sites",
  "soft pastel e-commerce"), sees real screenshots inline, and pulls the design
  DNA of any site: color palette, tech stack, design elements, award hist...'
categories:
  - media-creative
tags:
  - ai-agents
  - awwwards
  - claude-code
  - codex
status: active
quality_percentile: 28
selection_reason: quality_percentile
first_seen: 2026-11-09
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: INSANE0777/Awwwards-mcp
  official_vendor: false
  license: MIT
signals:
  stars: 525
  last_commit: 2026-11-08T10:28:12Z
  stars_delta_7d: 70
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 525
language: en
needs_keys: false
prerequisites:
  - Node.js >= 18
readme_source:
  repo: INSANE0777/Awwwards-mcp
  path: README.md
  branch: main
  fetched_at: 2026-11-09T09:28:28.373Z
  truncated: true
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - awwwards-mcp
  env_vars: []
  confidence: manifest
---

# <img src="https://raw.githubusercontent.com/INSANE0777/Awwwards-mcp/main/assets/Mint-accented%20folded%20ribbon%20icon.png" alt="awwwards-mcp icon" width="32"> awwwards-mcp
Free, open-source MCP server that gives AI agents design inspiration from
[Awwwards](https://www.awwwards.com/) — the Mobbin-style visual reference loop,
sourced from the web's best award-winning websites.

[![M8ven Score](https://m8ven.ai/badge/mcp/insane0777-awwwards-mcp-1ll2az?v=2f46bb2a1c85764573ed2516bfbb1c9b)](https://m8ven.ai/mcp/insane0777-awwwards-mcp-1ll2az?s=readme) [![mcp.market](https://mcp.market/badge/insane0777-awwwards-mcp.svg)](https://mcp.market/server/insane0777-awwwards-mcp)

<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/White%20awwwards-mcp%20logo%20on%20transparent.png">
    <img src="https://raw.githubusercontent.com/INSANE0777/Awwwards-mcp/main/assets/Awwwards-mcp%20ribbon%20monogram%20with%20mint%20node.png" alt="awwwards-mcp" width="420">
  </picture>
</p>

<a href="https://github.com/INSANE0777/Awwwards-mcp"><img src="https://raw.githubusercontent.com/INSANE0777/Awwwards-mcp/main/assets/demo.gif?v=2" alt="awwwards-mcp in action: search results, design DNA, motion filmstrip, band map — real tool output" width="480"></a>

Your agent searches in natural language ("dark 3D portfolio sites", "soft pastel
e-commerce"), sees **real screenshots inline**, and pulls the **design DNA** of any
site: color palette, tech stack, design elements, award history. Then it goes past
inspiration: point it at **any link** and it band-maps the page, censuses scroll and
hover motion (keyframes, measured scrub curves), fingerprints the framework, captures
canvas pose grids, and reads the site's bundles when a mechanism is unclear. From that
evidence it **recreates the page section by section**, then converts the build into a
runnable **Vite, Astro or Next.js project** with a measured motion manifest and
per-section hooks. Close the loop with **`verify_build`** (band + motion scoring,
measured perf) and generate GSAP timelines from the captured motion.

And it's not just Awwwards websites — every capture, census, and verification
tool **runs on any URL**. Just give it any site link and tell it to recreate:
band-map it, study its motion, rebuild section by section, and score your
build against the original.

Free-text queries run on a porter-stemmed, prefix-matching FTS5 index with BM25
ranking — "magazines" now finds Magazine-tagged sites (68 on the live index),
best matches first, where the old substring path returned zero. Multi-word
queries keep AND semantics: every token must hit the same site.

## Tools

| Tool | What it does |
|------|--------------|
| `search_sites` | Search by color, tags, technology, award type or free-text query; e.g. `award: "soty"`, `award: "nominees"`, `award: "ecommerce"` (winners), or a technology alias like `technology: "nextjs"` which canonicalizes to the live slug. Multi-word queries match against the local FTS5 index and rank BM25 (title hits lead); zero results come with loose-match and taxonomy-tag hints. Default full results include each site's screenshot; use `responseMode: "compact"` for concise cards and inline previews of only the first two results on the requested page. |
| `get_site_details` | Design DNA for one site: palette, technologies, elements, awards, description. Batch (`slugs`, up to 10) is compact enrichment for a shortlist — `compactSiteDetails` per slug (lists as counts, ≤500-char description, awards), cached/fetched/error status, no inline images. |
| `compare_sites` | Compare 2–3 sites' design DNA and jury scores as text-only JSON. Uses cached details or fetches missing detail pages. |
| `create_design_brief` | Turn 2–5 selected site slugs plus a required project goal into a deterministic, cited build brief. Uses cached detail/element evidence and cached Motion DNA first, fetches only missing details, returns Markdown plus versioned JSON, and runs browser band analysis only with `includeStructure: true`. |
| `get_index_status` | Read local index count, crawl progress, last success/error, lock state and freshness without network requests. |
| `get_index_stats` | Aggregate metrics over the **local cache only** (zero network). **All-time:** site count, gallery element count (`elements.total`) and technology/tag frequency (`items[].tag`); `elements.corpus` discloses the whole locally cached element set — total, gallery, site, categorized/uncategorized, builtWithKnown and oldest/newest fetch timestamps (aggregates only, no titles or slugs). **Windowed** by `windowDays` (default 90, 1–3650): cached details, palette colour frequency and jury score stats (n/avg/median) from at most the 500 most recently fetched detail rows, plus Motion DNA library frequency. Coverage is labelled `"locally cached subset"` on every metric; `windowDays`/`detailsCached`/`detailParseCap` appear only on the windowed metrics, while sites/elements/technologies are explicitly all-time. `top` caps each frequency list (default 10, 1–50). Aggregates only — no site slugs or titles. Personal, non-commercial use. |
| `get_site_elements` | Component-level visuals for one site: each element's poster image inline (3D models, video content, mobile layouts, microcopy…) + video URLs. |
| `list_categories` | Every filter the agent can search by (200+ tags, 27 colors). A legacy cache without technology facets is refreshed on read; if that refresh fails the response sets `taxonomyStale: true` with a `taxonomyWarning`. |
| `get_collections` | Browse Awwwards' curated and member collections. No slug lists collections (paginated, ~32 per page, `owner`/`ref` on every row); a slug returns one page of that collection's site cards (curated e.g. `brutalism`, or `owner/slug` for member collections; `page` works for collections too). Results expose `siteCards` separately from `items` (all collectables), so element-only collections return empty sites rather than a parser error. 7-day local cache. Personal, non-commercial inspiration use. |
| `search_directory` | Browse the Awwwards directory of agencies, studios and freelancers: name, profile slug, location, website and award counts. Filters are path-based (`country`, `category`, `budget`; one per request — e.g. budget `over_hundred_thousand`). Country must be canonical and case-sensitive (`United States`, not `united states`). Results carry `applied`/`ignored` filter arrays; free-text `query` is matched client-side over the one fetched page. Contact details are stripped. 7-day local cache. Personal, non-commercial inspiration use. |
| `get_annual_categories` | Official Annual Awards categories (Site of the Year, Agency of the Year, …) with nominee counts from Awwwards' public read-only API. Nominee details hydrate on request. Personal, non-commercial inspiration use; media URLs are reference-only. |
| `get_annual_nominees` | Nominees in one Annual Awards category, hydrated on demand at 1 request/second (default 10, max 20). Site summaries include `siteSlug` and `inLocalIndex` so agents can jump to `get_site_details` when the daily index has the site. |
| `get_annual_nominee` | One Annual Awards nominee in full — site: date, description, designBy, country, images/videos; agency: location, avatar, award tag counts, featured projects. Accepts a UUID, a full `/api/annual/nominees/...` path, or category+slug; the slug form may hydrate up to 20 uncached nominees at 1 req/s (~20s worst case), so prefer an id when known. Media URLs are reference-only (`mediaNote: "reference-only"`); nothing is downloaded. |
| `capture_live_site` | Optional: fresh full-page screenshot of any live URL. Waits for `load` + a settle window with a pre-scroll capped at 80 × 450px steps / 8 s (step- and time-capped so a growing page cannot stall it), so heavy sites work (`waitStrategy: "networkidle"` available). After the scroll it waits up to 10 s for a full-screen fixed preloader (≥90% viewport, z-index ≥100) to clear, so the site — not its loader — is captured; `waitForOverlay: false` skips that wait. Pass `viewport: "mobile"` for the 390×844 iPhone-class render (`"desktop"` 1440×900 default). On inner-scroller pages (`body` pinned, an inner container scrolls) it returns `mode: "anchors"` — six ordered viewport screenshots down that container as JSON `anchors[].scrollTop`/`file` paths, with no inline image and no top-level `file`; `scrollCapture: "viewport"` forces one explicit viewport shot instead. Document-scrolling pages keep the single full-page capture. Inline previews are capped at 2.5 MB of base64; `inline: false` keeps only the saved file. (needs [playwright](https://playwright.dev)). |
| `analyze_page_structure` | Section band map of any page (live URL or local file:// build): tag, background, offset, height per band. Detects the real scroll container when the page pins `body` and scrolls an inner element (`overflow-y: auto/scroll`), reports it as `scrollRoot` (`tag#id.class`), and measures every band and landmark in that scroller's coordinates; the pre-scroll drives the same container. Compare a reference site's structure against your build. Same heavy-site-friendly wait (`waitStrategy: "networkidle"` available); `viewport: "mobile"` analyzes the phone-class layout (`"desktop"` default). `compare: "mobile"` adds a second 390×844 capture and returns `mobileBands` + `diff: {heightDelta, bandsAdded, bandsRemoved, reordered}` (label-matched); if the mobile capture fails you still get the desktop result plus `mobileError`. Absent, the response is unchanged. `cdpEndpoint` instead attaches to a browser you started (loopback only, requires `AWWWARDS_MCP_ATTACH=1`) and scans the already-open matching page — it never navigates, scrolls, clicks or creates tabs, and disconnects without closing yours. (needs [playwright](https://playwright.dev)). |
| `record_site_motion` | Optional: short motion-through video of a live URL — preloader, scroll-triggered and hover/cursor animations. Returns an inline filmstrip JPEG plus the saved .webm path. `viewport: "mobile"` records at phone size — the filmstrip renders at the selected viewport, no pillarboxing (`"desktop"` default). Every recording also produces a **Motion Evidence Sheet** (`sheet.html` + `motion-sheet.md`): census-directed keyframes, consecutive-frame diff masks, an onion-skin composite, a cursor-trail overlay and a phase timeline — motion video turned into a document a model can actually read. Degrades gracefully: recording never fails because the sheet does. (needs [playwright](https://playwright.dev) + ffmpeg-static). |
| `search_elements` | Search the element corpus (footer, hero, pricing, 404…) by free text: cached `source:"gallery"` records plus `source:"site"` records backfilled from new winners' own Elements sections; ranks BM25 over title/author/category. `category` (exact) and `stack` (case-insensitive substring, all terms AND) are applied across the whole cached corpus before the limit. It does **not** crawl the robots-disallowed `/elements/*` gallery. |
| `get_element` | One element record: title, category, author, built-with stack, related elements and its media URL (image or video) pointing at awwwards' CDN. |
| `get_motion_dna` | Runtime motion fingerprint of a live URL: animation libraries, render engines, ScrollTrigger stats (trigger count, scrub ratio), tween easing/duration vocab and the scroll model. Fresh capture or cached capture with timestamp. |
| `analyze_scroll_map` | Per-element scroll-motion census of any URL: selector path, trigger source (gsap-scrolltrigger / native css scroll & view timelines / data-attr / css-keyframe / SMIL), animated props, duration, easing, scrub/pin flags and SVG stroke draw-ins — the rebuild recipe an agent can wire straight into GSAP timelines. Optional `scrubProbe` re-drives the page through ≤8 scroll steps and samples each scrubbed trigger's real progress curve (`scrubCurves`); every payload ends with a `choreography` block — `hints[]` (selector/value/source) and `groups` read from `gsapTriggers` tween vars and stepped sibling `delayMs`. (needs [playwright](https://playwright.dev)). |
| `analyze_hover_census` | Hover-interaction census: extracts `:hover` rules from stylesheets, then samples up to 20 interactive elements before/after hover — transform/color/filter diffs plus transition timing (ms + easing). The hover recipe for rebuilds, no video required. (needs [playwright](https://playwright.dev)). |
| `analyze_bundle` | Bundle forensics for a live page: fetches the page once, downloads its script chunks (script tags, inline scripts, and modulepreload/preload-as-script hints; bounded: ≤40 chunks / 10MB / 1 request/second), saves + hashes them locally, optionally de-obfuscates with webcrack if installed, and greps keywords across the code — chunk paths + match lines so an agent can read the actual animation mechanism instead of guessing. Optional `edges` adds the static import graph over the captured chunks (import/reexport declarations up to 8 KB each). Needs no browser. |
| `analyze_network_capture` | Offline API-surface evidence from a local HAR 1.2 file (a browser DevTools export): requests grouped by method + origin + path template (dates, versions, UUIDs, hex ids and numbers templated; emails, tokens and long high-entropy segments redacted), with counts, statuses, content types and query names only. Reads the file only - never fetches recorded URLs and never returns bodies, headers or query values. 20 MB / 2000-entry caps; `evidenceCoverage` discloses what was excluded. No network. |
| `audit_url` | Runtime + static performance **evidence** for any live URL — never a grade. Runtime: installed Chrome/Edge over raw CDP (no playwright) measures fps, dropped frames, long tasks/animations and layout thrash (`perf: {error}` when no browser exists). Static: fetches the page HTML + up to 8 same-origin CSS/JS assets (≤2MB each, one shared 1 req/s limiter, 10s default timeouts), resolving refs against the final post-redirect page URL; asset redirects leaving that origin are rejected. Scans them for animation anti-patterns and returns severity-sorted findings (`count`, `worst`, ≤50 `findings`, `coverage: {assetsScanned, failed}`) so `worst` is always included. Each half degrades independently. Personal, non-commercial use; audit only URLs you are authorised to inspect. |
| `analyze_accessibility` | Accessibility **evidence** from a live page — explicitly not a WCAG pass/fail. Samples up to `limit` (default 100, max 200) visible text nodes with computed colour and a background **composited bottom-up from the ancestor stack** for fully opaque chains (colour alpha layers; reported as final `rgb()`), then the contrast ratio (worst pairs + selector paths). A sample under any ancestor CSS opacity group (<1) is **excluded from ratios** and counted in `coverage.skippedOpacityGroups` — never approximated. Background images, gradients and pseudo-elements are not composited either, so contrast stays heuristic there. Also: image alt coverage; heading ladder issues; focusable/positive-tabindex counts plus `outline:none` stylesheet rules; unlabeled form controls; document `lang`/title. Returns `coverage`, `heuristic: true` and the note "Evidence only — not a WCAG pass/fail". Accepts http(s) URLs only; degrades to `{error}` when playwright is missing. (needs [playwright](https://playwright.dev)). |
| `build_project` | Convert a single-file exact rebuild (any local `.html`, e.g. the rebuild flow's `full-page-exact.html`) into a runnable **Vite**, **Astro** or **Next.js** project: sections become components, CSS splits per section, gsap timelines re-wire in the framework idiom (`useEffect` + `gsap.context` on Next), assets carried. Reads a local file and writes the project dir — the suite's one local-write tool. |
| `verify_build` | Score a build against a reference site: band-map compare (Dice score) + motion-fingerprint diff (trigger mix, scrub/pin, easing vocabulary, native scroll timelines) → 0–100 score, pass/warn/fail verdict and evidence lines. `bands` carries one aggregate score plus `matched`/`refOnly`/`buildOnly` labels and a `diagnostics` row per band (reference/build index, match reason, relative-order flag, height delta, background change) — there are no per-band scores. The design-loop gate: build → verify the aggregate band score → fix → re-verify. Optional `domDiff` adds a body-subtree structural diff (missing/extra/reordered/rect drift) between reference and build. Optional `scene3d` adds a separate, opt-in 3D gate that preflights both URLs through one shared DNS/private-IP guard before any legacy scan (a private or loopback URL is refused with no requests, and the legacy acquisitions run behind the same proxy), then replays a `capture_scene_3d` pack on the build canvas and returns its own status/verdict; the legacy verdict never certifies a canvas (see [Opt-in 3D verify gate](#opt-in-3d-verify-gate)). (needs [playwright](https://playwright.dev)). |
| `verify_flow` | Step-aligned interaction-flow comparison: runs the same 1–6 scroll/click/wait steps on a build and a reference URL (two fresh headless launches, desktop or mobile) and compares path, scroll delta, skeleton hash, text hash and element count after each step. `same` only when both sides are complete and untruncated — truncated or failed states are `unknown`. No screenshots; a click can still trigger client-side mutations. (needs [playwright](https://playwright.dev)). |
| `capture_component` | Optional: serialize one page component (CSS selector, default `header`) into a portable `component-pack-v1` JSON pack — bounded DOM tree with computed-style tokens (44 keys incl. layout offsets + `::before`/::after pseudo styles, `maxNodes` up to 2000, optional `maxDepth` where values above 12 can exceed Code Mode's depth cap and 12 keeps a capped pack safe), fonts, colors and element animations — for pixel-informed rebuilds. Adds `typography` usage summaries (families/sizes/weights/line-heights/letter-spacings, top 12 each, `sampled` node count) and a deduped `paletteSummary` (colour counts from node styles + pack colors, transparent/rgba(0,0,0,0)/none filtered, top 24). `compact: true` trades detail for tokens: each node keeps only `{tag, classes, rect}` (styles, text, svg, pseudo styles and anims are dropped) plus top-level `fonts`/`colors`; the `typography`/`paletteSummary` summaries are full-mode only. Runs on any URL. (needs [playwright](https://playwright.dev)). |
| `export_design_tokens` | Deterministic design-token export from one computed-style capture: colors, typography, spacing, radii, shadows and borders as ordinal CSS variables (`--color-1`, `--space-1`, …) plus a Tailwind theme map. `selector` defaults to `body`, `maxNodes` to 800 (50–2000); `include` filters categories. Names are ordinals — never semantic guesses — values are deduped, frequency-ranked and capped; a category cap or node truncation sets `truncated` and names the reason in `notes`, and the CSS contains no URLs. Runs on any URL. (needs [playwright](https://playwright.dev)). |
| `analyze_images` | Image-delivery **evidence** for a live page: totals by format, `loading` split (lazy/eager/missing), `srcset`/`sizes` coverage, intrinsic vs rendered dimensions (oversized, tiny, zero-rect), broken images and alt coverage; up to 20 issue samples with origin+pathname only (query/hash stripped, data URIs reduced to `data:<mime>`). The page loads its own assets — no tool-initiated fetches, no downloads. `maxImages` defaults to 200 (max 500); `truncated` when the pre-cap total is larger. Not a WCAG grade. (needs [playwright](https://playwright.dev)). |
| `capture_pose_3d` | Hero canvas reference frames → `pose-grid-v1`; runs on any URL. Samples the page's largest canvas at up to 10 scroll steps with per-step scroll ratios (`viewport: "mobile"` supported). Frame evidence only — camera transforms are not recovered. (needs [playwright](https://playwright.dev)). |
| `capture_scene_3d` | Two strict ops. `op:"capture"` writes a `scene-evidence-v1` pack for a WebGL/canvas page: up to 10 checkpoints (scroll ratio + optional normalized pointer + settle wait), each saving a viewport screenshot and a clipped canvas screenshot (the chosen canvas gets a per-run random marker; duplicate or pre-marked decoys are refused) with requested/actual scroll, scroll range, canvas CSS rect/backing size/DPR and elapsed ms plus a post-screenshot `stable`/`stabilityReason` flag; plus passive framework hints and a redacted inventory of up to 200 of the page's own responses (origin+pathname only, MIME, Content-Length when declared, resource type, texture/model/HDR/shader/script/font/image classification, plus an `assetId` and download status per row). The internal download URL is stored only when the observed URL has no query, fragment or credentials; every other row carries a skip reason. Without adapters, no hooks and no `getContext` are used during capture; the spector adapter injects its own WebGL bundle before load. `op:"download_assets"` fetches up to 32 `assetId`s from one `captureId`: `rights.basis` (`owned`/`licensed`/`permission`) and `rights.evidence` are mandatory because downloading is a licensing decision, are recorded with a timestamp in `provenance.json`, and are not verified by the server. Originals are written to `<cache>/scene-captures/<captureId>/assets` with SHA-256 and an extension validated from MIME/magic (unknown types are skipped unless `allowUnknown` saves them as `.bin`). Caps: 16 MiB/file, 64 MiB/run, 5 manual redirects, 1 request/second, 15s body deadline, 120s overall; every hop is DNS-validated and loopback/private/metadata/reserved addresses are refused. It never crawls, never guesses model or source-map URLs and never uses credentials. **Honest scope:** passive capture (no adapter) recovers no scene graph, camera, controls, shader source or geometry — frames show rendered output only. Two experimental opt-in adapters extend the pack: `adapters:["three"]` adds a bounded `evidence.three` summary from reachable globals (see [Opt-in Three adapter](#opt-in-three-adapter)), and `adapters:["spector"]` captures one WebGL frame into a bounded `evidence.spector` summary with command names/counts, context attributes and capped shader source (see [Opt-in Spector adapter](#opt-in-spector-adapter)). Neither adapter crawls the heap; a requested adapter that finds nothing leaves its capabilities unknown, not available. Capture evidence is written to `<captureId>/evidence.json` + PNG frames (metadata ≤2 MiB, 8 MiB per image, 32 MiB total); responses are compact JSON with paths, hashes, counts, coverage and limitations, never inline bodies. (capture needs [playwright](https://playwright.dev)). |
| `build_pose_stub` | Pose grid → offline three.js+GSAP replay skeleton. Renders a `pose-grid-v1` grid as a standalone scroll-scrubbed stub page: frames preloaded inline (same-index loads are deduped and stale decodes discarded), a synthesized camera path interpolated between snapshot scroll ratios (guidance, not recovered camera data), reduced-motion static fallback; optional `analyze_scroll_map` census adds st/pin/ease suggestions. Pure build — no page fetches. |
| `analyze_stack` | Fingerprint any page's stack from one polite HTML fetch (no browser): framework (Next.js/Astro/Nuxt/Remix/SvelteKit/WordPress/Webflow/Framer), CSS framework (Tailwind/Bootstrap) with marker lists and honest confidence, plus a `stack-fingerprint-v1` payload. |
| `build_gsap_stub` | Captured motion evidence → runnable single-file GSAP+ScrollTrigger stub: one timeline per scroll-census anim (trigger, `start: "top 80%"`, scrub/pin, census duration, cubic-bezier easing normalized to the nearest GSAP token), plus an optional scroll-driven camera module from pose-grid anchors (synthesized dolly-in over the page's three.js canvas). Always-on `prefers-reduced-motion` guard; requires the full census shape (`anims[]` + `gsapTriggers[]`) - empty arrays still build a valid no-anim page, but a compact census is rejected. Pure build from provided JSON - no page fetches. |
| `build_motion_manifest` | Build a `motion.manifest.json` scaffold from measured evidence: an `analyze_page_structure` result (`bands`) + an `analyze_scroll_map` census, with optional `sections: [{label, selector?}]` overrides. Sections map best-effort from each band's tag plus the first `#id`/`.class` token in its label (or the override selector); no markup is available, so DOM initial-state hints are empty while census triggers still attribute by those tokens. Returns `{manifest, measured: false, censusAnims, warnings, note}` (`manifest.measured` stays false when the census has no anims/triggers/curves); never throws (`{error}` on invalid input). Pure/offline — no page fetches. |
| `build_scene_stub` | Offline Vite + Three.js scaffold from a `capture_scene_3d` pack (full profile only). Reads one `scene-evidence-v1` file (regular file ≤2 MiB, inside `scene-captures` or an exported pack with top-level `"exported": true`) and up to 32 `assetBindings` (`resourceId` → a local file you already hold: regular, non-symlink, ≤64 MiB, glb/gltf/bin/png/jpg/jpeg/webp/ktx2/hdr/exr; traversal and duplicate ids rejected). Returns `files[{path,content}]` — `package.json` with pinned `three` 0.160.0 + vite and dev/build/preview scripts, `index.html`, `src/main.js` (resize, reduced-motion static render, `GLTFLoader` for a bound model, texture loading, adapter meshes for supported Box/Plane/Sphere/Cylinder geometry with standard/basic materials, a labelled placeholder plane when no model or supported mesh exists, pagehide disposal, load-failure message), `scene.json` (bindings + frame basenames extracted from Windows or POSIX paths) and a provenance README — plus `assetCopies` to `public/assets/<assetId>.<ext>`, `unresolved`, `authoredDefaults` and `mode` (`reconstructed-subset` with a glb/gltf model or at least one supported adapter mesh, else `placeholder`). Adapter packs rebuild only the supported subset: primitive geometry, standard/basic materials and a validated perspective camera from its exact matrix (static, no idle orbit); captured controls are never recreated and are listed in `unresolved`. Unsupported geometry, materials and cameras plus missing dimensions are also listed, captured lights are recorded but not applied, and shader source/`userData` are never used. Deterministic and offline: no fetch, install, directory write or captured-code execution; copy the assets and run `npm install && npm run build` yourself. |
| `search_motion` | Search previously captured motion-DNA scans by library, scroll model or easing vocabulary — find references by how a site moves. |
| `new_winners` | Poll today's freshly-crowned winners (SOTD / Developer Award / Honorable Mention) against a persisted baseline. First call seeds the baseline and reports the current listing count (no element backfill); later calls report the delta. Each winner first reported after the baseline poll is backfilled into the searchable element corpus from its site page when reachable; failed per-winner fetches are not retried. |
| `watch_site` | Persistent watches over studios, tags or specific sites (add/list/remove). `list` matches each watch against the freshest cached listing and reports per-watch `NEW since last check` deltas — it never fetches; `new_winners`/`search_sites` keep the pool fresh. |

### Routing

| You want | Use |
|----------|-----|
| Sites matching filters or free text | `search_sites` — the site index with filters. |
| Curated inspiration boards | `get_collections` — curated moodboards, not a search index. |
| Agencies, studios or freelancers | `search_directory` — agencies/studios, not sites. |
| Annual Awards categories, nominees or one nominee | `get_annual_*` — Annual Awards only. |
| Design DNA for one site, or compact enrichment for a shortlist | `get_site_details` — one `slug`, or a bounded batch of `slugs`. |
| Performance evidence for one URL | `audit_url` — one URL, no reference. |
| A scored build-vs-reference comparison | `verify_build` — two URLs, scored comparison. |
| Accessibility evidence for a live page | `analyze_accessibility` — evidence census, not compliance. |
| Section bands and desktop↔mobile changes | `analyze_page_structure` — band map and responsive comparison, not a score. |
| API calls a page makes | `analyze_network_capture` — offline HAR evidence, not a live network tool. |
| Did my build keep an interaction flow? | `verify_flow` — step-aligned state comparison, not a visual score. |

`compact:true` is the summary mode for heavy tools — `audit_url`,
`verify_build`, `analyze_scroll_map`, `analyze_hover_census` and
`capture_component` return a summary payload with less detail, and each shape
differs: the scroll/hover censuses reduce to counts, `capture_component` drops
per-node styles/text/svg/anims (the tag/classes/rect tree, fonts and colors
stay; typography/palette summaries are full-mode only), and `verify_build`
keeps `verdict`,
`overall`, `bands` and `motion` top-level while dropping `buildUrl`,
`referenceUrl` and `evidence` (`bands` holds counts); a requested `scene3d`
block is kept whole because it carries its own verdict. `audit_url` keeps its
top-level keys but reduces `perf` and `antiPatterns`.
Batch detail is `get_site_details { slugs }`, capped at 10: results stay in
input order, carry compact details only (no images), and report per-slug
`cached`/`fetched`/`error`/`skipped` status. `analyze_page_structure` with
`compare: "mobile"` returns responsive evidence alongside `mobileBands`/`diff`
— page overflow, small text and small tap targets at 390×844 — evidence, not a
score.

### Opt-in Three adapter

`capture_scene_3d` can add an experimental, opt-in Three.js adapter to an
`op:"capture"` request:

```json
{ "request": { "op": "capture", "url": "https://example.com", "adapters": ["three"] } }
```

v2 uses the same field inside the scene branch:
`capture_page {request:{kind:"scene", op:"capture", url, adapters:["three"]}}`.

The adapter reads only objects reachable after load from `window.THREE`,
`window.scene`/`camera`/`renderer`/`controls`, and
`window.app`/`experience`/`viewer`/`world` (including those holders'
`scene`/`camera`/`renderer`/`controls` fields). It installs no hooks, makes no
network requests and never crawls the heap. A scene held only in a module
closure is invisible, so absence is not evidence of absence.

The pack gains `evidence.three` (`three-adapter-v1`) only when the adapter was
requested: `available`, `reason`, `revision`, `scene.nodes` (≤500 nodes, depth
20, with `truncated` and `total`), `camera` plus `cameras` (≤8), `lights` (≤8),
`controls`, and `coverage` for scene, geometry, camera, controls, lights and
materials. Nodes carry type,
name, uuid, visibility, parent-relative position/quaternion/scale, child count,
geometry (type, attributes, index count, bounds and numeric constructor
parameters), and material/camera/light records. Materials are capped at 32 and
texture references at 200; texture URLs are redacted to origin+pathname, and a
material's `map` also carries the inventory `assetId` when the URL matches a
resource row. `coverage` reflects what was actually observed: a requested
adapter that finds nothing leaves capabilities `unknown`, not `available`.

`build_scene_stub` reconstructs the supported subset from `evidence.three`:

- Meshes only for Box, Plane, Sphere and Cylinder geometry, using captured
  numeric dimensions where present. A missing or out-of-range dimension falls
  back to an authored `1` and is listed in `unresolved`; other geometry types
  are skipped and listed.
- Materials only as `MeshStandardMaterial` or `MeshBasicMaterial`. Other types
  fall back to standard and are listed; a multi-material mesh keeps only its
  first material.
- A captured `PerspectiveCamera` is applied from its exact `matrixWorld` only
  when `fov`/`near`/`far` and an affine matrix validate; otherwise the authored
  camera stays and the gap is listed. The captured camera is static — no idle
  orbit — with `matrixAutoUpdate` and `matrixWorldAutoUpdate` off. Controls are
  never recreated: OrbitControls is not wired, because its TRS update can move a
  sheared or non-orthogonal pose, so any captured controls are listed in
  `unresolved`. With no captured camera, the scaffold keeps the authored camera;
  the idle orbit is used only when the pack has no usable adapter scene.
- Captured lights are recorded but not applied; lighting and background stay
  authored defaults. The scaffold never reads or executes captured shader source
  or `userData`.
- `mode` is `reconstructed-subset` for a model binding or at least one supported
  adapter mesh; otherwise `placeholder`. Textures bind only through
  `assetBindings`: without a local image bound to the texture's `assetId`, the
  material keeps its flat colour and the gap is listed.

Honest limits: module-local scenes are invisible; captured node transforms are
parent-relative and the stub flattens meshes at the scene root, so parent
transforms are lost; texture binding is local-only; and missing nodes are not
evidence of absence.

### Opt-in Spector adapter

`capture_scene_3d` also accepts `"spector"` in the same `adapters` array. An
`op:"capture"` request may use it alone or with `"three"` (at most two entries,
no duplicates):

```json
{ "request": { "op": "capture", "url": "https://example.com", "adapters": ["spector"] } }
```

v2 uses the same field inside the scene branch:
`capture_page {request:{kind:"scene", op:"capture", url, adapters:["spector"]}}`.

`spectorjs@0.9.33` is an optional dependency. When it is installed, its local
`dist/spector.bundle.js` (about 1.19 MB) is read from disk and injected as an
init script before navigation, so its WebGL spies exist before the page creates
a context. The bundle is never fetched over the network, its UI is not shown,
and worker contexts are not captured. When the package is absent, the adapter
is recorded as unavailable with the install hint
`npm install --save-optional spectorjs@0.9.33`; the rest of the capture still
runs. A probe timeout or error likewise degrades only the adapter and never
fails the scene pack. The bundle is injected once per capture that requests it.

`evidence.spector` (`spector-adapter-v1`) records a compact summary of one
captured WebGL frame:

- `context`: WebGL version and up to 16 context attributes.
- `commands`: total, draw-call count, up to 30 command names by frequency, and
  status counts (`unknown`, `unused`, `disabled`, `redundant`, `valid`,
  `deprecated`).
- up to 8 programs, each with `LINK_STATUS`, `VALIDATE_STATUS`, an info log, and
  shader source; up to 16 shaders total.
- shader source is capped at 64 Ki characters per shader and 256 Ki characters
  total, with `length` and `truncated` preserving the original size.
- up to 8 analyses (8 keys each), canvas dimensions, adapter `limits` and
  truncation flags.
- no command arguments, command results, GL state, stack traces, memory or raw
  capture is transferred into Node.

Shader source is untrusted page text: it is bounded, stored as data and never
executed. `coverage.capabilities.shaders` is `available` only when at least one
shader source was captured; a spector request that captured none leaves it
`unknown`, while capture without any adapter leaves it `unavailable`.

Honest limits: one frame is captured per request. A page that has stopped
drawing can yield no draw calls and therefore no programs; the adapter still
returns context and command evidence with an empty `programs` array. Command
arguments, results, state, stack and memory are deliberately absent, so the
summary cannot explain why a draw call differs — only what was submitted.

### Opt-in 3D verify gate

`verify_build` takes an optional `scene3d` block for canvas/WebGL builds. It
replays the checkpoints of one `capture_scene_3d` pack against the build page in
a fresh browser and compares each clipped canvas frame pixel-by-pixel.

```json
{
  "buildUrl": "https://preview.example.com",
  "referenceUrl": "https://reference.example.com",
  "scene3d": {
    "referenceCaptureId": "scene-mg2k3j4p-0123abcd",
    "buildSelector": "#scene",
    "tolerances": { "pixelThreshold": 0.05, "maxChangedFraction": 0.02 }
  }
}
```

| Field | Meaning |
|---|---|
| `referenceCaptureId` | Pack id from a `capture_scene_3d` `op:"capture"` run (v2: `capture_page` `kind:"scene"`); it must match the `scene-<time>-<hex>` pattern. |
| `buildSelector` | CSS selector for the build's `<canvas>`; it must match one visible canvas. The gate tags it with a per-run random marker and refuses duplicate or pre-marked decoys instead of guessing. |
| `tolerances.pixelThreshold` | Per-channel normalized delta (0–1) above which a pixel counts as changed; default 0 while no verdict is issued. |
| `tolerances.maxChangedFraction` | Maximum share of changed pixels (0–1) for the pair to stay within tolerance. |
| `tolerances.cameraAngleDeg` | Accepted camera-angle delta in degrees (0–180). Only used when the reference pack carries a comparable camera angle; neither `scene-evidence-v1` nor either adapter records one. |

Both `pixelThreshold` and `maxChangedFraction` are required for a
`within-tolerance` or `outside-tolerance` verdict. When either is missing,
comparable checkpoints still report `changedPixelFraction` and
`meanAbsoluteChannelError`, but the verdict is `inconclusive`.

Before any legacy structure, scroll, hover or perf scan, a requested `scene3d`
creates one DNS/private-IP guard and loopback proxy and checks the reference and
build URLs against it. The same proxy carries the legacy acquisitions and the
anti-pattern HTML read. If either URL is not `http(s)` or resolves to a
loopback, link-local, private, metadata or reserved address, the run makes zero
requests and returns an unavailable report with an inconclusive `scene3d` block.

`scene3d.status` (`comparable` / `inconclusive`) and `scene3d.verdict`
(`within-tolerance` / `outside-tolerance` / `inconclusive`) are separate from
the top-level `overall` and `verdict`. The legacy pass never certifies a canvas,
and the 3D gate never changes the legacy score. `compact: true` keeps the
`scene3d` block whole. A pass requires every requested checkpoint to be
comparable; one blocking reason forces the whole gate to `inconclusive`, never a
partial pass.

Artifacts: build and diff PNGs are written under
`<cache>/scene-captures/<referenceCaptureId>/verify/<run>/`; `referenceImage`
points at the pack frame, and red marks changed pixels while dimmed grey marks
unchanged ones. An artifact write failure is reported in `limitations` and
blocks a within/outside verdict. A verify path that is a symlink/junction, or
that cannot be created, makes the whole gate inconclusive; paths stay `null`
when an artifact was not written.

Reference stability: `capture_scene_3d` re-probes the page after each screenshot
and records `stable` plus, when false, `stabilityReason`. A checkpoint with
`stable: false` is rejected as inconclusive with that reason; packs without the
optional `stable` field remain accepted, while the other checkpoint fields are
still required. Capture cannot detect a WebGL context loss on the reference
page, so reference frames carry no context-loss proof — only the build side is
checked.

Build-side re-probe: before the screenshot the gate requires the build to hold
the reference's measured scroll position (±2 px) and to match the reference DPR
and canvas backing size. After the screenshot it re-probes again and requires
the position to stay within 2 px of both the pre-shot measured position and the
reference `actualScrollTop`, and the canvas rect, backing size and DPR to be
exactly unchanged; a WebGL context loss observed at either probe invalidates the
checkpoint. The screenshot is not atomic, so a post-shot shift is an
inconclusive result, not a pass.

Inconclusive cases include a missing, unreadable or blank frame (≤4 sampled
colours) on either side; an unstable reference frame; mismatched device pixel
ratio or canvas backing size (frames are never scaled); a scroll mismatch or a
post-shot shift; a missing or lost scroll root, a canvas that is missing, not a
`<canvas>`, outside the viewport, or not uniquely taggable (duplicate or
pre-marked decoys); WebGL context loss; the watchdog or a page
load, evaluation, screenshot or comparison timeout/error; and incomplete or
malformed evidence (missing pack, viewport or checkpoints, more than 10
checkpoints, or a checkpoint missing its required scroll/geometry fields).

The deadline is dynamic: the sum of the replayed checkpoint waits plus 10 s of
acquisition/comparison headroom, floored at 15 s and capped at 45 s (the
maximum schedule, 10 checkpoints x 2000 ms waits, yields 30 s). It is armed
before the pack is resolved and covers every asynchronous step: pack read, DNS
gate, artifact preparation, frame reads, the Playwright import/loader, browser
launch, and the comparison. A timeout returns `inconclusive` with the deadline
reason. Cleanup closes tracked resources
concurrently under one shared 3 s grace, so the result returns within the
deadline plus roughly 3 s; close promises still pending after the grace are
abandoned, and their underlying teardown may linger. Resources that resolve
after the deadline still get a closure attempt, but it is not awaited.

The build URL must be `http(s)` and its host must resolve to a public address.
Loopback, link-local, private, metadata and reserved destinations are refused;
the exact-origin loopback allowance is an internal test option, not a tool
input, so a build served from `localhost` is inconclusive for this gate.

Camera: without an adapter, `scene-evidence-v1` records no camera state. The
three adapter records a single camera pose (and a camera list), not a
per-checkpoint angle; the spector adapter records none. `cameraAngleDeg`
therefore stays `null` with a stated reason and a camera tolerance cannot be
evaluated. That note alone does not make a measured pair incomparable.

Honest limits: one frame per checkpoint — animation that shifted in time
relative to the reference may land outside tolerance for reasons unrelated to
fidelity; the gate compares pixels only and does not read the pack's
scene/camera/geometry evidence, so it cannot attribute a mismatch; and there is
no scaling, so the build must match the reference's DPR and backing size
exactly.

`create_design_brief` turns 2–5 shortlisted references into a cited direction:

1. Search and shortlist references with `search_sites`.
2. Call `create_design_brief` with the slugs and a required project goal.
3. Use its Markdown direction and versioned JSON; set `includeStructure: true` only when optional browser-derived section-band evidence is needed.

The response separates observed shared signals from one-site outliers, names evidence gaps, and never records motion automatically. Its Interaction Plan applies only evidence-backed cursor/hover, scroll, entrance/reveal, easing, and duration cues; empty fields mean the brief has no supporting evidence, not that an effect should be invented. It also carries a `prefers-reduced-motion`, content-access, and keyboard-access guardrail.

**Data posture**: element records store metadata + media URLs pointing at
awwwards' own CDN — nothing is mirrored. Motion DNA records are local
captures, each stamped with the time it was taken.

## Setup

**Stable, current, fully offline — no API key, no account.** Any MCP-compatible coding agent can use awwwards-mcp.
Requires Node ≥ 22.13 (`node -v` to check). Pick your agent:

**Updates**: the server checks the npm registry once a day and prints an
stderr notice when a newer `awwwards-mcp` exists (stdout stays clean for the
JSON-RPC channel — your agent sees the notice as a log line). Set
`AWWWARDS_AUTO_UPDATE=1` in the server's `env` to opt into background
self-update; restart your agent afterwards to load it. Nothing is fetched
more than once a day and serving never waits on the check.

> **`npx` is the core, no-browser path.** `npx -y awwwards-mcp` runs the
> package from an isolated cache that does not contain Playwright or
> ffmpeg-static, so `capture_live_site`, `analyze_page_structure`,
> `record_site_motion`, `verify_build` and the other browser tools return an
> install hint instead of running. For those, use the
> [global side-by-side install](#browser-enabled-install-side-by-side).

**Claude Code**

```bash
claude mcp add awwwards -- npx -y awwwards-mcp
```

**Codex CLI** (ChatGPT desktop app and the IDE extension share this config)

```bash
codex mcp add awwwards -- npx -y awwwards-mcp
```

or in `~/.codex/config.toml` (project-scoped: `.codex/config.toml`):

```toml
[mcp_servers.awwwards]
command = "npx"
args = ["-y", "awwwards-mcp"]
```

**OpenCode** (`opencode.json` — note the command is an array)

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "awwwards": {
      "type": "local",
      "command": ["npx", "-y", "awwwards-mcp"]
    }
  }
}
```

**ZCode** (`~/.zcode/cli/config.json` — note servers nest under `"mcp": { "servers": ... }`)

```json
{
  "mcp": {
    "servers": {
      "awwwards": { "command": "npx", "args": ["-y", "awwwards-mcp"], "env": {} }
    }
  }
}
```

**Claude Desktop / Cursor / Windsurf / Gemini CLI / Cline / Continue** — anything
reading the common `mcpServers` JSON shape (e.g. `~/.claude/claude_desktop_config.json`
or `~/.gemini/settings.json`):

```json
{
  "mcpServers": {
    "awwwards": { "command": "npx", "args": ["-y", "awwwards-mcp"] }
  }
}
```

**Anything else** — awwwards-mcp is a plain stdio MCP server: point your client
at `npx -y awwwards-mcp` for the core tools. To pin a version, use
`npx -y awwwards-mcp@1.9.0`.

**pi coding agent** has no built-in MCP by design — it uses skills and
extensions instead. Two options:

1. Install the awwwards-inspiration skill (below). pi reads skills from
   `~/.pi/agent/skills/` or `~/.agents/skills/` (the latter is shared across
   agents following the Agent Skills standard). The skill teaches the workflow;
   for it to reach the live data, add an MCP-supporting pi extension, or run
   the queries in another agent and paste results.
2. Skip MCP entirely: ask pi to build you a small CLI wrapper around
   awwwards.com, or use a shared skills directory (`~/.agents/skills/`) so the
   same skill file serves pi and every other agent.

### Browser-enabled install (side-by-side)

Browser captures (`capture_live_site`, `analyze_page_structure`,
`record_site_motion`, the scroll/hover censuses, `verify_build`,
`capture_component`, `export_design_tokens`, `analyze_images`,
`capture_pose_3d` and `capture_scene_3d`) need optional packages that are **not** dependencies of
awwwards-mcp. The walkthrough below is the path the two checks at the end of
this section cover for the install layout:

1. Install the server and those packages side by side in one global prefix:

   ```bash
   npm install -g awwwards-mcp playwright ffmpeg-static
   npm exec --global -- playwright install chromium
   ```

2. Point your MCP client at the installed `awwwards-mcp` command (not `npx`).
   Remove an older entry in that scope first:

   ```bash
   claude mcp remove awwwards
   claude mcp add awwwards -- awwwards-mcp
   ```

   ```json
   {
     "mcpServers": {
       "awwwards": { "command": "awwwards-mcp" }
     }
   }
   ```

3. **Restart the MCP server** (or the agent that hosts it). The client spawns
   the server process once; the new command and any `env` only take effect
   after a restart.

4. **Verification call** — ask the agent to run one browser tool, e.g.
   `analyze_page_structure` on any page:

   ```json
   { "name": "analyze_page_structure", "arguments": { "url": "https://example.com" } }
   ```

   Success is JSON with a `bands` array (at least one entry) and a
   `totalHeight`. A response naming the Playwright install hint means the
   server cannot import or launch Playwright from its own install location;
   redo step 1 before using any browser tool.

In this layout all three packages are siblings in the same `node_modules`, so
the server's bare `import("playwright")` / `import("ffmpeg-static")` resolve
from its own install location; `record_site_motion` uses ffmpeg-static
automatically. `npx -y awwwards-mcp` has no such siblings: core tools work,
browser tools cannot. Installing only `awwwards-mcp` globally has the same
limitation — Playwright and ffmpeg-static must be installed globally too.

Two commands cover this walkthrough. `npm run pack:smoke` packs the tarball,
installs it into a throwaway global prefix and proves the side-by-side
resolution layout with stand-in Playwright/ffmpeg packages.
From a clone of this repository (the smoke is a dev check, not shipped in the
tarball), `npm run smoke:browser` packs and installs this checkout into a
throwaway global prefix with the **real** Playwright/ffmpeg packages linked as
siblings, then runs the installed server over MCP stdio against a local static
fixture with real Chromium:

```bash
npm run build && npm run smoke:browser
```

The smoke serves a three-section page on `127.0.0.1`, seeds a throwaway cache
(so no crawl or daily update check starts), then makes two real calls — one
`analyze_page_structure`, one `capture_live_site` — and fails on a missing band,
a non-PNG image or a timeout. Observed result (Windows, Node 24, Playwright
1.63, 2026-11-01):

```
browser-smoke: pack + global install
browser-smoke: connected to awwwards-mcp, 41 tools
browser-smoke: analyze_page_structure -> 4 bands, totalHeight 2061, labels body,#hero.hero,#work.work,#contact.contact
browser-smoke: capture_live_site -> image/png 17.5 KB inline, saved capture-38f75233f8a4-desktop.png
browser-smoke: PASS
```

### Resource limits and diagnostics

All optional and read at startup:

| Variable | Default | Effect |
|---|---|---|
| `AWWWARDS_MCP_PROFILE` | `full` | `core` registers only the 13 build-loop tools (`search_sites`, `get_site_details`, `analyze_page_structure`, `analyze_scroll_map`, `capture_component`, `verify_build`, `build_project`, `get_motion_dna`, `analyze_stack`, `capture_live_site`, `get_annual_categories`, `get_annual_nominees`, `get_collections`); `full` keeps all 41; `v2` (beta) replaces the list with the 15-tool consolidated surface. The old → new v2 mapping is in [awwwards-skills repository](https://github.com/INSANE0777/awwwards-skills). |
| `AWWWARDS_MCP_MAX_RESPONSE_BYTES` | `32000000` | Full serialized tool-result bytes (text, inline images and `structuredContent`). Larger responses replace `content` with a `{truncated:true, tool, bytes, limit, note}` JSON block; a truncated structured payload is dropped and reported as `isError: true`. |
| `AWWWARDS_MCP_DEBUG_MEMORY` | unset | `1` logs one JSON line per tool call (duration, rss, heap) to stderr - never stdout. |
| `AWWWARDS_MCP_IMAGE_RETENTION_DAYS` | `0` (off) | A positive N prunes cached `images/` files older than N days once at startup. |
| `AWWWARDS_MCP_IMAGE_MAX_BYTES` | `26214400` (25 MB) | Maximum size of one cached CDN image/asset download; larger responses (declared or streamed) are aborted before they are fully buffered. |

The v1.14.0 `AWARDS_MCP_*` spellings (one fewer W) are still accepted as a one-release fallback; the `AWWWARDS_MCP_*` name wins when both are set.

`AWWWARDS_MCP_PROFILE=v2` is the opt-in beta surface: 15 tools, never registered alongside the 1.x names. Ten consolidate the old surface (`search_references`, `get_reference`, `browse_awards`, `get_index`, `inspect_page`, `analyze_motion`, `capture_page`, `audit_page`, `build_motion`, `monitor_awards`) and five are retained (`create_design_brief`, `build_project`, `verify_build`, `verify_flow`, `analyze_network_capture`). Each consolidated tool takes exactly one `request` branch. `monitor_awards` `add_watch`/`remove_watch` require `kind` and `pattern` at the schema boundary (the 1.x handler rejected them later; the valid set is the same). Profiles are exclusive and read once at startup — `full` = 41, `core` = 13, `v2` = 15 — so changing the value requires a server restart. The complete 1.x → v2 mapping for all 36 replaced names is in [awwwards-skills repository](https://github.com/INSANE0777/awwwards-skills).

`capture_live_site` also accepts `inline: false` to skip the base64 preview and `maxInlineBytes` to change the budget; captures whose base64 would exceed the budget (default 2.5 MB) are saved without an inline image, decided from the raw PNG size before conversion. Inline images from `capture_pose_3d` and `capture_component` count toward the same `AWWWARDS_MCP_MAX_RESPONSE_BYTES` budget. `analyze_network_capture` reads HAR files up to 20 MB (re-checked after reading) and 2000 entries. The `analyze_bundle` import graph supports import/reexport declarations up to 8 KB each.

### Attach to your own browser

`analyze_page_structure` can scan a page you already have open instead of
launching its own browser. Start Chrome/Edge with a **throwaway profile** —
version 136+ ignores `--remote-debugging-port` on the default profile:

```bash
chrome --remote-debugging-port=9222 --user-data-dir=<throwaway dir>
```

Open the exact URL in the window that starts: it runs in the throwaway profile,
not your everyday one, so it carries none of your normal cookies or logins.
Then set `AWWWARDS_MCP_ATTACH=1` in the server's environment (restart the
server), and pass `cdpEndpoint: "http://127.0.0.1:9222"` — or
`http://[::1]:9222`, or a `ws://127.0.0.1:9222/devtools/browser/<id>` endpoint.

- **Loopback only.** The endpoint must be `127.0.0.1` or `[::1]`; HTTPS/WSS,
  credentials, queries, fragments, non-loopback hosts and extra paths are
  rejected. For an `http://` endpoint the server reads `/json/version` itself
  (5 s timeout) and refuses to connect unless the returned
  `webSocketDebuggerUrl` is also a loopback ws URL.
- **Never navigates, scrolls, clicks or creates tabs.** The server selects the
  existing page whose normalized URL matches `url` exactly; if none matches it
  returns an error listing the open origins (never paths). It takes no
  screenshots and changes nothing on the page except an idempotent
  `globalThis.__name` helper used by dev-mode snippet runs.
- **No compare.** `compare: "mobile"`, a custom `viewport` and responsive
  evidence are rejected in attach mode because each would drive the page.
- **Disconnect only.** When the scan ends the server disconnects from CDP; your
  browser and tabs stay open.
- **Off by default.** Without `AWWWARDS_MCP_ATTACH=1` the tool returns an error
  explaining the gate, so an agent cannot attach to a browser you did not offer.
  Keep the debugging port bound to loopback.

## Skills

The seven agent skills live in the separate
[awwwards-skills repository](https://github.com/INSANE0777/awwwards-skills),
which is their source of truth. This package does not ship them.

Install them with the [`skills` CLI](https://skills.sh):

```bash
npx skills add INSANE0777/awwwards-skills
```

Tested pairing: **`awwwards-mcp@1.18.0` + `skills-v2026.11.07`**. The 1.18
release keeps the same **41 / 13 / 15** tool surface, but rerun the
compatibility check before a later release changes either side.

The CLI detects your agents and lets you choose a project or user-level
install, then links each skill into that agent's skills directory. Useful
flags: `--skill <name>` for one skill, `-a <agent>` to target specific
agents, `-g` for a user-level install, `--copy` to copy files instead of
symlinking, and `-l` to list what the repository contains without
installing. Any agent that reads the
[Agent Skills standard](https://agentskills.io) layout can also use the
`skills/<name>/` directories from that repository directly.

| Skill | What it teaches |
|-------|-----------------|
| `awwwards-setup` | First-time onboarding: asks the user's preferences (result density, viewport, captures, local index, winner watches), persists them to `~/.awwwards-mcp/preferences.json`, and runs any one-time installs they opt into. |
| `awwwards-inspiration` | The inspiration loop: search, judge from screenshots, pull design DNA, state a design direction, capture/motion-first builds; staying current with `new_winners` and `watch_site`. |
| `awwwards-motion-study` | The full video chain: what to record from a live site (and what to skip), frame-by-frame review (video input or tile-per-element), the motion inventory, and build verification by re-recording. Now opens with an instrument-first pass: scroll/hover censuses, motion DNA, and pose capture before (and instead of) recording. |
| `awwwards-doctor` | Repair: run `npm run doctor`, apply its fixes, re-anchor parsers after real awwwards.com drift, recover the in-flight task that surfaced the failure. |
| `awwwards-section-loop` | Section-by-section rebuilding: band map → per-section capture → build → verify the aggregate band score → lock → next; selector fallback rules, shared-canvas one-unit rule, and the lock-before-next discipline. |
| `recreate` | `/recreate <url>` — the full link-to-site playbook: study-build disclaimer gate → evidence capture (bands, components, censuses, motion DNA, pose, bundle) → hand build with exact assets → scroll-anchor QA gate → project conversion **only on request** (`build_project`, native structure + authored motion) → handoff. |
| `motion-authoring` | `/authored` conversions: topology (master scrub vs independent triggers), manifest contract (evidence, never hand-marked measured), intent mapping, per-target surfaces (no double GSAP), and the desktop + 390 mobile parity gate. |

| Agent | Skills directory |
|-------|------------------|
| Claude Code | `~/.claude/skills/` |
| pi | `~/.pi/agent/skills/` (also reads `~/.agents/skills/`) |
| ZCode | `~/.zcode/skills/` |
| Agent Skills-standard agents | `~/.agents/skills/` |

Each installed skill is self-contained: it carries its own `v2-routing.md`
reference and, where needed, the `_memory/techniques.json` registry. Edit and
test skills in the awwwards-skills repository; this MCP repository does not
carry skill copies.

## Indexing (recommended)

`search_sites` works out of the box, but its depth is limited by polite live
scraping (~31 sites per filter page). Build a local index once and searches
draw from thousands of award-winning sites instantly:

```bash
npx -y -p awwwards-mcp awwwards-index      # once published
# or, from a local checkout of this repo:
npm run index
```

- Crawls all ~200 tag pages at 1 request/second (~4 minutes) into the local
  SQLite cache at `~/.awwwards-mcp/`.
- Resumable: interrupt it and re-run — completed pages are skipped.
- The MCP server re-indexes automatically in the background whenever the
  index is older than 7 days (never blocking your session). Completed crawl
  checkpoints are cleared so each refresh actually revisits the tag pages.
  Run `get_index_status` to inspect progress or the last crawl error.

*(README truncated for display. [Read the full README on GitHub](https://github.com/INSANE0777/Awwwards-mcp)).*
