---
slug: cloudflare-moltworker-skills-cloudflare-browser
name: cloudflare-browser
tagline: Control headless Chrome via Cloudflare Browser Rendering CDP WebSocket.
  Use for screenshots, page navigation, scraping, and video capture when browser
summary: "- CDPSECRET environment variable set - Browser profile configured in
  openclaw.json with cdpUrl pointing to the worker endpoint:"
categories:
  - cloud-infra
tags:
  - ai-agents
  - cloudflare-workers
  - cloudflare
status: slowing
quality_percentile: 24
selection_reason: official_vendor
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: cloudflare/moltworker
  subpath: skills/cloudflare-browser
  official_vendor: true
  license: Apache-2.0
signals:
  stars: 9944
  last_commit: 2026-05-09T02:37:13Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
  rank_current: 138
  rank_delta: -2
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9949
    - 9944
    - 9944
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: cloudflare/moltworker
  path: skills/cloudflare-browser/SKILL.md
  branch: main
  fetched_at: 2026-11-02T09:07:01.518Z
  truncated: false
type: agent_skill
skill:
  skill_name: cloudflare-browser
  description: Control headless Chrome via Cloudflare Browser Rendering CDP
    WebSocket. Use for screenshots, page navigation, scraping, and video capture
    when browser automation is needed in a Cloudflare Workers environment.
    Requires CDP_SECRET env var and cdpUrl configured in browser.profiles.
  folder_path: skills/cloudflare-browser
  extra_files:
    - scripts/cdp-client.js
    - scripts/screenshot.js
    - scripts/video.js
  pack_total_skills: 1
  is_pack_primary: true
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: cloudflare-moltworker
---

# Cloudflare Browser Rendering
Control headless browsers via Cloudflare's Browser Rendering service using CDP (Chrome DevTools Protocol) over WebSocket.

## Prerequisites

- `CDP_SECRET` environment variable set
- Browser profile configured in openclaw.json with `cdpUrl` pointing to the worker endpoint:
  ```json
  "browser": {
    "profiles": {
      "cloudflare": {
        "cdpUrl": "https://your-worker.workers.dev/cdp?secret=..."
      }
    }
  }
  ```

## Quick Start

### Screenshot
```bash
node /path/to/skills/cloudflare-browser/scripts/screenshot.js https://example.com output.png
```

### Multi-page Video
```bash
node /path/to/skills/cloudflare-browser/scripts/video.js "https://site1.com,https://site2.com" output.mp4
```

## CDP Connection Pattern

The worker creates a page target automatically on WebSocket connect. Listen for Target.targetCreated event to get the targetId:

```javascript
const WebSocket = require('ws');
const CDP_SECRET = process.env.CDP_SECRET;
const WS_URL = `wss://your-worker.workers.dev/cdp?secret=${encodeURIComponent(CDP_SECRET)}`;

const ws = new WebSocket(WS_URL);
let targetId = null;

ws.on('message', (data) => {
  const msg = JSON.parse(data.toString());
  if (msg.method === 'Target.targetCreated' && msg.params?.targetInfo?.type === 'page') {
    targetId = msg.params.targetInfo.targetId;
  }
});
```

## Key CDP Commands

| Command | Purpose |
|---------|---------|
| Page.navigate | Navigate to URL |
| Page.captureScreenshot | Capture PNG/JPEG |
| Runtime.evaluate | Execute JavaScript |
| Emulation.setDeviceMetricsOverride | Set viewport size |

## Common Patterns

### Navigate and Screenshot
```javascript
await send('Page.navigate', { url: 'https://example.com' });
await new Promise(r => setTimeout(r, 3000)); // Wait for render
const { data } = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync('out.png', Buffer.from(data, 'base64'));
```

### Scroll Page
```javascript
await send('Runtime.evaluate', { expression: 'window.scrollBy(0, 300)' });
```

### Set Viewport
```javascript
await send('Emulation.setDeviceMetricsOverride', {
  width: 1280,
  height: 720,
  deviceScaleFactor: 1,
  mobile: false
});
```

## Creating Videos

1. Capture frames as PNGs during navigation
2. Use ffmpeg to stitch: `ffmpeg -framerate 10 -i frame_%04d.png -c:v libx264 -pix_fmt yuv420p output.mp4`

## Troubleshooting

- **No target created**: Race condition - wait for Target.targetCreated event with timeout
- **Commands timeout**: Worker may have cold start delay; increase timeout to 30-60s
- **WebSocket hangs**: Verify CDP_SECRET matches worker configuration
