---
slug: trpc-group-trpc-agent-go-examples-skill-skills-ocr
name: ocr
tagline: Extract text from images using Tesseract OCR
summary: "- Extract text from image files (PNG, JPG, JPEG, GIF, BMP, TIFF) -
  Support for 100+ languages - Optional image preprocessing for better accuracy
  - Output in plain text or JSON format with confidence scores"
categories:
  - agent-frameworks
tags:
  - a2a
  - a2a-protocol
  - ag-ui
  - agent-framework
status: active
quality_percentile: 82
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: trpc-group/trpc-agent-go
  subpath: examples/skill/skills/ocr
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1877
  last_commit: 2026-10-26T06:16:05Z
  stars_delta_7d: 7
  stars_growth_pct: 0.4
  trending_score: 7.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1860
    - 1870
    - 1877
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: trpc-group/trpc-agent-go
  path: examples/skill/skills/ocr/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:38:23.535Z
  truncated: false
type: agent_skill
skill:
  skill_name: ocr
  description: Extract text from images using Tesseract OCR
  folder_path: examples/skill/skills/ocr
  extra_files:
    - scripts/ocr.py
    - scripts/ocr_url.py
  pack_total_skills: 71
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: trpc-group-trpc-agent-go
---

# OCR Image Text Extraction Skill
Extract text from images using Tesseract OCR engine.

## Capabilities

- Extract text from image files (PNG, JPG, JPEG, GIF, BMP, TIFF)
- Support for 100+ languages
- Optional image preprocessing for better accuracy
- Output in plain text or JSON format with confidence scores

## Usage

### Basic OCR

```bash
python3 scripts/ocr.py <image_file> <output_file>
```

### With Options

```bash
# Specify language (default: eng)
python3 scripts/ocr.py image.png text.txt --lang eng

# Chinese text
python3 scripts/ocr.py image.png text.txt --lang chi_sim

# Multiple languages
python3 scripts/ocr.py image.png text.txt --lang eng+chi_sim

# With image preprocessing (improves accuracy)
python3 scripts/ocr.py image.png text.txt --preprocess

# JSON output with confidence scores
python3 scripts/ocr.py image.png output.json --format json
```

### Download and OCR from URL

```bash
# OCR from remote image
python3 scripts/ocr_url.py <image_url> <output_file>

# With options
python3 scripts/ocr_url.py https://example.com/image.jpg text.txt --lang eng --preprocess
```

## Parameters

- `image_file` / `image_url` (required): Path to local image or image URL
- `output_file` (required): Path to output text/JSON file
- `--lang`: Language code (e.g., eng, chi_sim, jpn, fra, deu). Default: eng
- `--preprocess`: Apply image preprocessing (grayscale, thresholding) for better accuracy
- `--format`: Output format (text/json, default: text)

## Common Languages

| Language | Code |
|----------|------|
| English | eng |
| Chinese (Simplified) | chi_sim |
| Chinese (Traditional) | chi_tra |
| Japanese | jpn |
| Korean | kor |
| French | fra |
| German | deu |
| Spanish | spa |
| Russian | rus |
| Arabic | ara |

## Supported Image Formats

PNG, JPG, JPEG, GIF, BMP, TIFF, WEBP

## Dependencies

- Python 3.8+
- pytesseract
- Pillow (PIL)
- tesseract-ocr (system package)

## Installation

```bash
# Python packages
pip install pytesseract Pillow

# Tesseract OCR engine
sudo apt-get install tesseract-ocr  # Ubuntu/Debian
sudo yum install tesseract           # CentOS/RHEL
brew install tesseract               # macOS
```
