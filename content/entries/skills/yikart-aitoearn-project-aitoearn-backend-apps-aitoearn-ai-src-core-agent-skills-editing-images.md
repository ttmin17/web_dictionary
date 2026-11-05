---
slug: yikart-aitoearn-project-aitoearn-backend-apps-aitoearn-ai-src-core-agent-skills-editing-images
name: editing-images
tagline: "Image editing using Sharp. Supports compositing (QR codes, logos,
  watermarks), resizing, cropping, rotating, flipping,
  brightness/contrast/saturation "
summary: "- Compositing images (adding QR codes, logos, watermarks to posters) -
  Resizing or cropping images - Rotating or flipping images - Adjusting
  brightness, contrast, saturation - Applying blur or sharpening effects -
  Get..."
categories:
  - other
tags:
  - agent-skills
  - auto-publish
  - codex-skills
  - douyin
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-11-05
last_updated: 2026-11-05T13:14:07.410Z
source:
  kind: github_repo
  repo: yikart/AiToEarn
  subpath: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/editing-images
  official_vendor: false
  license: MIT
signals:
  stars: 27298
  last_commit: 2026-11-05T08:53:59Z
  stars_delta_7d: 308
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 27298
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: yikart/AiToEarn
  path: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/editing-images/SKILL.md
  branch: main
  fetched_at: 2026-11-05T13:11:37.186Z
  truncated: false
type: agent_skill
skill:
  skill_name: editing-images
  description: Image editing using Sharp. Supports compositing (QR codes, logos,
    watermarks), resizing, cropping, rotating, flipping,
    brightness/contrast/saturation adjustment, blur, sharpen.
    图片编辑、图片合成、添加二维码、添加Logo、添加水印、图片缩放、图片裁剪、图片旋转、图片翻转、亮度对比度饱和度调整、模糊、锐化。
  folder_path: project/aitoearn-backend/apps/aitoearn-ai/src/core/agent/skills/editing-images
  extra_files: []
  pack_total_skills: 25
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: yikart-aitoearn
---

# Image Editing with Sharp
Performs image editing using the Sharp library for high-performance image processing.

## When to Use

Use this skill when:

- Compositing images (adding QR codes, logos, watermarks to posters)
- Resizing or cropping images
- Rotating or flipping images
- Adjusting brightness, contrast, saturation
- Applying blur or sharpening effects
- Getting image metadata (dimensions, format)

## Available Tools

| Tool               | Purpose                               |
| ------------------ | ------------------------------------- |
| `compositeImages`  | Overlay images onto a base image      |
| `resizeImage`      | Resize, crop, or extend images        |
| `transformImage`   | Rotate, flip images                   |
| `adjustImage`      | Brightness, saturation, blur, sharpen |
| `getImageMetadata` | Get image dimensions and format info  |

## Workflow

### Step 1: Get Image Information (Recommended)

Call `getImageMetadata` first to understand the base image dimensions for accurate positioning.

### Step 2: Perform Editing

Use the appropriate tool based on the task.

### Step 3: Return Results

Return the output image URL to the user.

## Common Use Cases

### Case 1: Add QR Code to Poster (Bottom-Right Corner)

```json
{
  "base": "https://example.com/poster.jpg",
  "layers": [{
    "input": "https://example.com/qrcode.png",
    "resize": { "width": 150, "height": 150 },
    "gravity": "southeast"
  }]
}
```

### Case 2: Add Logo Watermark (Absolute Position)

```json
{
  "base": "https://example.com/photo.jpg",
  "layers": [{
    "input": "https://example.com/logo.png",
    "resize": { "scale": 0.5 },
    "top": 20,
    "left": 20,
    "opacity": 0.7
  }]
}
```

### Case 3: Resize for Social Media

```json
{
  "input": "https://example.com/image.jpg",
  "width": 1080,
  "height": 1080,
  "fit": "cover"
}
```

### Case 4: Create Thumbnail

```json
{
  "input": "https://example.com/image.jpg",
  "width": 200,
  "height": 200,
  "fit": "cover"
}
```

## Positioning Modes (Mutually Exclusive)

**IMPORTANT:** `gravity` and `top/left` are mutually exclusive. Do NOT mix them.

### Mode A: Gravity Anchor Positioning

Use `gravity` alone to place layer at predefined anchor points:

```
northwest |  north   | northeast
----------+----------+----------
   west   |  center  |   east
----------+----------+----------
southwest |  south   | southeast
```

Example: `{ "gravity": "southeast" }` → bottom-right corner

### Mode B: Absolute Coordinates

Use `top` + `left` together for precise pixel positioning:

```
(0,0)────────────────────→ X (left)
  │
  │    ┌─────────┐
  │    │  layer  │ ← top=100, left=200
  │    └─────────┘
  ↓
  Y (top)
```

Example: `{ "top": 100, "left": 200 }` → exact pixel position

### Layer Resize Options

- `resize.width` / `resize.height`: Target dimensions in pixels
- `resize.scale`: Scale factor (e.g., 0.5 = half size, 2 = double size)
- `resize.fit`: Resize mode (contain, cover, fill, inside, outside)

## Fit Modes for Resize

| Mode    | Behavior                                |
| ------- | --------------------------------------- |
| cover   | Crop to fill exact dimensions (default) |
| contain | Fit within bounds, may add padding      |
| fill    | Stretch to exact size (may distort)     |
| inside  | Fit within bounds, no upscaling         |
| outside | Cover bounds, may exceed dimensions     |

## Important Notes

- All image inputs must be valid HTTP/HTTPS URLs
- Maximum image size: 50MB
- Output images are PNG format
- For compositing, process layers in order (first layer = bottom)
- Opacity only affects the overlay layer, not the base
