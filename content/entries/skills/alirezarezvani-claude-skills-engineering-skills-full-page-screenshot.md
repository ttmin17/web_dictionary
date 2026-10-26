---
slug: alirezarezvani-claude-skills-engineering-skills-full-page-screenshot
name: full-page-screenshot
tagline: Use when the user asks to capture a full-page screenshot, long
  screenshot, or complete page capture of a web page. Handles SPA scroll
  containers, lazy
summary: "- Node.js 22+ (uses built-in WebSocket) - Chrome/Chromium with remote
  debugging enabled"
categories:
  - coding-agents
tags:
  - agent-plugins
  - agent-skills
  - agentic-ai
  - ai-coding-agent
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-26
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: alirezarezvani/claude-skills
  subpath: engineering/skills/full-page-screenshot
  official_vendor: false
  license: MIT
signals:
  stars: 28730
  last_commit: 2026-10-23T11:30:28Z
  stars_delta_7d: 523
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 27812
    - 28112
    - 28730
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: alirezarezvani/claude-skills
  path: engineering/skills/full-page-screenshot/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:10.262Z
  truncated: false
type: agent_skill
skill:
  skill_name: full-page-screenshot
  description: Use when the user asks to capture a full-page screenshot, long
    screenshot, or complete page capture of a web page. Handles SPA scroll
    containers, lazy-loaded images, and very tall pages via Chrome DevTools
    Protocol with zero external dependencies.
  folder_path: engineering/skills/full-page-screenshot
  extra_files:
    - scripts/full-page-screenshot.mjs
  pack_total_skills: 383
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: alirezarezvani-claude-skills
---

# Full Page Screenshot
Capture a full-page screenshot of any web page via Chrome DevTools Protocol. Produces a single PNG that includes all content — even portions that require scrolling. Zero external dependencies beyond Node.js 22+ and Chrome with remote debugging enabled.

## Prerequisites

- **Node.js 22+** (uses built-in `WebSocket`)
- **Chrome/Chromium** with remote debugging enabled

Check environment readiness:

```bash
node "${SKILL_DIR}/scripts/full-page-screenshot.mjs" --check
```

If Chrome check fails, instruct user to open `chrome://inspect/#remote-debugging` and enable **"Allow remote debugging for this browser instance"**.

## Workflow

### Option A: Screenshot an already-open tab (recommended for authenticated pages)

1. List available tabs:

```bash
node "${SKILL_DIR}/scripts/full-page-screenshot.mjs" --list
```

2. Identify the target by title/URL, then capture:

```bash
node "${SKILL_DIR}/scripts/full-page-screenshot.mjs" <targetId> /tmp/screenshot.png --width 1200 --dpr 1
```

### Option B: Screenshot a URL (opens a background tab, captures, closes)

```bash
node "${SKILL_DIR}/scripts/full-page-screenshot.mjs" --url "https://example.com" /tmp/screenshot.png --width 1200 --dpr 1 --wait 15000
```

> **Note:** `--url` mode creates a background tab. Pages requiring authentication (SSO, login walls) should use Option A instead.

### Parameters

| Parameter | Description | Default |
|-----------|-------------|---------|
| `output` | Output PNG file path | `/tmp/screenshot.png` |
| `--width` | Viewport width in CSS pixels (articles: 1200, dashboards: 1440-1920) | 1200 |
| `--dpr` | Device pixel ratio (2 = Retina, but 4x file size) | 1 |
| `--wait` | Page load timeout in ms (`--url` mode only) | 15000 |
| `--css` | Custom CSS to inject before capture (e.g., hide elements) | — |

### Verify Output

```bash
# macOS
sips -g pixelWidth -g pixelHeight /tmp/screenshot.png

# Linux
file /tmp/screenshot.png
```

## Core Capabilities

1. **SPA scroll container expansion** — Detects `overflow-y: auto/scroll` containers, scrolls through them to trigger lazy-loading, then removes overflow constraints (including Tailwind `h-[calc(...)]`) so all content renders in a single pass.

2. **DOM stability detection** — After `readyState=complete`, monitors DOM element count until it stabilizes. This ensures SPA frameworks finish rendering dynamic content.

3. **Lazy-load triggering** — Scrolls the viewport incrementally to fire `IntersectionObserver` callbacks, then waits for all `<img>` elements to complete loading.

4. **Tiled capture for very tall pages** — Pages exceeding 16,000px are captured in 8,000px tiles and automatically stitched using Python PIL. Falls back to saving tiles separately if PIL is unavailable.

5. **Auto-discovery of Chrome** — Reads `DevToolsActivePort` file to find the debugging port. Falls back to probing ports 9222, 9229, 9333.

6. **CDP Proxy fallback** — When a CDP proxy holds the browser WebSocket, the script falls back to proxy API endpoints (`/eval`, `/screenshot`, `/scroll`) for capture.

## How It Works

```
1. Discover Chrome debugging port
2. Connect via WebSocket (CDP)
3. Attach to target / create background tab
4. Set viewport width via Emulation domain
5. Wait: readyState + DOM stability
6. Detect & expand scroll containers
7. Scroll through page (trigger lazy-load)
8. Wait for images to complete
9. Measure final content height
10. Page.captureScreenshot (or tiled capture)
11. Stitch tiles if needed (PIL)
12. Restore viewport, detach, clean up
```

## Anti-Patterns

| Do NOT | Do instead |
|--------|-----------|
| Use `--dpr 2` on pages > 10,000px tall | Use `--dpr 1` to avoid Chrome memory issues |
| Use `--url` for authenticated/SSO pages | Use `--list` + targetId on a tab where user is logged in |
| Set `--wait` below 5000 for SPAs | SPAs need time to fetch data and render; use 10000-15000 |
| Capture without checking `--check` first | Always verify Chrome debugging is available |
| Hardcode viewport widths for all pages | Use 1200 for articles, 1440+ for dashboards/tables |
| Skip output verification | Always verify with `sips` or `file` command after capture |

## Troubleshooting

| Symptom | Cause | Fix |
|---------|-------|-----|
| "Cannot find Chrome debugging port" | Remote debugging not enabled | Open `chrome://inspect/#remote-debugging`, enable it |
| "WebSocket connection timeout" | CDP proxy holding the connection | Script auto-falls back to proxy API |
| Blank/white screenshot | Page not loaded yet | Increase `--wait` value |
| Truncated at bottom | Scroll container not expanded | Script handles this automatically; file an issue if it persists |
| Out of memory | Very tall page + high DPR | Reduce `--dpr` to 1 and/or reduce `--width` |
| "PIL not available for stitching" | Python Pillow not installed | Install with `pip3 install Pillow` or accept separate tile files |

## Cross-References

- [`engineering/browser-automation`](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/skills/full-page-screenshot/../browser-automation/SKILL.md) — General browser automation patterns via CDP/Playwright
- [`engineering/performance-profiler`](https://github.com/alirezarezvani/claude-skills/blob/main/engineering/skills/full-page-screenshot/../performance-profiler/SKILL.md) — Performance analysis that may complement visual captures
