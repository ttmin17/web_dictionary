---
slug: davepoon-buildwithclaude-plugins-all-skills-skills-google-drive-upload
name: google-drive-upload
tagline: "Upload files directly to Google Drive via a deployed Google Apps
  Script web app. Trigger on: upload to Drive, save to Drive, send to Drive, put
  this i"
summary: "- User asks to upload, save, or send a file to Google Drive - A
  workflow produces a file the user might want stored in Drive - User mentions
  Drive in any language (English or Hebrew)"
categories:
  - agent-frameworks
tags:
  - claude
  - claude-code
  - claude-code-commands
  - claude-skills
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: davepoon/buildwithclaude
  subpath: plugins/all-skills/skills/google-drive-upload
  official_vendor: false
  license: MIT
signals:
  stars: 3678
  last_commit: 2026-10-26T00:07:50Z
  stars_delta_7d: 28
  stars_growth_pct: 0.8
  trending_score: 28.21
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3604
    - 3631
    - 3650
    - 3678
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: davepoon/buildwithclaude
  path: plugins/all-skills/skills/google-drive-upload/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:37:58.586Z
  truncated: false
type: agent_skill
skill:
  skill_name: google-drive-upload
  description: >
    Upload files directly to Google Drive via a deployed Google Apps Script web
    app. Trigger on: upload to Drive, save to Drive, send to Drive, put this in
    Drive. Also Hebrew: "תעלה לדרייב", "שמור בדרייב", "העלה לגוגל דרייב". Use
    proactively when a workflow produces a file the user might want in Drive.
  folder_path: plugins/all-skills/skills/google-drive-upload
  extra_files: []
  pack_total_skills: 408
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: davepoon-buildwithclaude
---

# Google Drive Upload
Upload files directly from Claude to Google Drive using a simple Google Apps Script.

## When to Use This Skill

- User asks to upload, save, or send a file to Google Drive
- A workflow produces a file the user might want stored in Drive
- User mentions Drive in any language (English or Hebrew)

## What This Skill Does

1. Reads the user's config file (`~/.cowork-gdrive-config.json`)
2. Base64-encodes the target file
3. POSTs it to the deployed Google Apps Script
4. Returns the Google Drive file URL

## How to Use

### Prerequisites (One-Time Setup)

1. Deploy the included Google Apps Script as a web app
2. Create `~/.cowork-gdrive-config.json` with your script URL and API key

### Basic Usage

Ask Claude naturally:
- "Upload this report to Google Drive"
- "Save the presentation in Clients/Acme on Drive"
- "תעלה את זה לדרייב"

### Upload Workflow

\`\`\`bash
# Read config
cat "$HOME/.cowork-gdrive-config.json"

# Encode and upload
FILE="/path/to/file"
B64=$(base64 "$FILE" | tr -d '\n')
MIME=$(file --mime-type -b "$FILE")

curl -s -L -H "Content-Type: application/json" \
  -d '{"fileName":"name","content":"'$B64'","mimeType":"'$MIME'","apiKey":"KEY"}' \
  "SCRIPT_URL"
\`\`\`

## Example

**User**: "Upload this report to Google Drive"

**Output**: Claude encodes the file, uploads it via the Apps Script, and returns:
"Uploaded successfully! Here's your file: https://drive.google.com/file/d/abc123/view"

## Tips

- Use `folderPath` to organize files into folders (e.g., "Clients/Acme")
- Add `"replaceExisting": true` to overwrite instead of duplicating
- Hebrew filenames are fully supported
- Max file size is ~50MB (Google Apps Script limit)

## Source

Full plugin with setup guide and Apps Script code:
https://github.com/msmobileapps/google-drive-upload-plugin

Built by [MSApps](https://msapps.mobi) — AI Automation & Application Development
