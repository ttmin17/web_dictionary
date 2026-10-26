---
slug: zcaceres-markdownify-mcp
name: markdownify-mcp
tagline: A Model Context Protocol server for converting almost anything to Markdown
summary: Markdownify is a Model Context Protocol (MCP) server that converts
  various file types and web content to Markdown format. It provides a set of
  tools to transform PDFs, images, audio files, web pages, and more into eas...
categories:
  - media-creative
tags:
  - anthropic
  - anthropic-ai
  - anthropic-claude
  - markdown
status: active
quality_percentile: 68
selection_reason: quality_percentile
first_seen: 2024-12-18T21:14:52
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: zcaceres/markdownify-mcp
  official_vendor: false
  license: MIT
signals:
  stars: 2996
  last_commit: 2026-10-26T05:51:27Z
  stars_delta_7d: 0
  stars_growth_pct: 0
  trending_score: 0
  rank_current: 103
  rank_delta: -16
  velocity_source: snapshot_delta
  sparkline_4w:
    - 3001
    - 2998
    - 2997
    - 2996
language: en
needs_keys: false
prerequisites:
  - Node.js >= 18
readme_source:
  repo: zcaceres/markdownify-mcp
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:38:10.416Z
  truncated: false
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - mcp-markdownify-server
  env_vars: []
  confidence: manifest
---

# Markdownify MCP Server
![markdownify mcp logo](https://raw.githubusercontent.com/zcaceres/markdownify-mcp/main/logo.jpg)

Markdownify is a Model Context Protocol (MCP) server that converts various file types and web content to Markdown format. It provides a set of tools to transform PDFs, images, audio files, web pages, and more into easily readable and shareable Markdown text.

<a href="https://glama.ai/mcp/servers/bn5q4b0ett"><img width="380" height="200" src="https://glama.ai/mcp/servers/bn5q4b0ett/badge" alt="Markdownify Server MCP server" /></a>

## Features

- Convert multiple file types to Markdown:
  - PDF
  - Images
  - Audio (with transcription)
  - DOCX
  - XLSX
  - PPTX
- Convert web content to Markdown:
  - YouTube video transcripts
  - Bing search results
  - General web pages
- Retrieve existing Markdown files

## Getting Started

1. Clone this repository
2. Install dependencies:
   ```
   bun install
   ```

   The `preinstall` step creates a Python virtual environment at `.venv` and installs `markitdown[all]`.

3. Build the project:
   ```
   bun run build
   ```
4. Start the server:
   ```
   bun start
   ```

## Development

- Use `bun run dev` to start the TypeScript compiler in watch mode
- Modify `src/server.ts` to customize server behavior
- Add or modify tools in `src/tools.ts`

## Usage with Desktop App

To integrate this server with a desktop app, add the following to your app's server configuration:

```js
{
  "mcpServers": {
    "markdownify": {
      "command": "node",
      "args": [
        "{ABSOLUTE PATH TO FILE HERE}/dist/index.js"
      ]
    }
  }
}
```

### Environment variables

All paths default to sensible values; override only when the defaults don't fit your install layout.

| Variable | Default | Purpose |
|---|---|---|
| `MARKITDOWN_PATH` | `<project>/.venv/bin/markitdown`, then `markitdown` on `PATH` | Absolute path to the `markitdown` executable. Set this when you've installed markitdown system-wide (e.g. `pipx install "markitdown[pdf]"`) instead of using the bundled venv. |
| `REPOMIX_PATH` | `<project>/node_modules/.bin/repomix`, then `repomix` on `PATH` | Absolute path to the `repomix` executable used by `git-repo-to-markdown`. |
| `MD_ALLOWED_PATHS` | unset (unrestricted) | Path-delimiter-separated list (`:` on POSIX, `;` on Windows) of directories the server is allowed to read. When set, all file-input tools (`pdf-to-markdown`, `get-markdown-file`, etc.) reject paths outside these directories. |
| `MD_SHARE_DIR` | unset | Deprecated alias for `MD_ALLOWED_PATHS` (single directory). Still honored for backward compatibility. |

## Usage with Docker

Build and run:
```sh
docker build -t markdownify-mcp .
docker run --rm -i \
  -v "$HOME/Documents:/data:ro" \
  -e MD_ALLOWED_PATHS=/data \
  markdownify-mcp
```

Notes for the Docker MCP catalog (`mcp/markdownify`):
- Mount any host directories you want the server to read into the container, then pass the **container** paths to the tools (e.g. `/data/foo.pdf`, not `/Users/you/Documents/foo.pdf`).
- Set `MD_ALLOWED_PATHS` to the colon-separated list of mounted directories so the server enforces a read boundary that matches the bind mount.
- The published Docker image installs `markitdown[pdf]` only — audio transcription and image OCR (`audio-to-markdown`, `image-to-markdown`) require the `[all]` extras and will fail in the slim image. Use the local install (`bun install`) for the full feature set.

## Available Tools

- `youtube-to-markdown`: Convert YouTube videos to Markdown
- `pdf-to-markdown`: Convert PDF files to Markdown
- `bing-search-to-markdown`: Convert Bing search results to Markdown
- `webpage-to-markdown`: Convert web pages to Markdown
- `image-to-markdown`: Convert images to Markdown with metadata
- `audio-to-markdown`: Convert audio files to Markdown with transcription
- `docx-to-markdown`: Convert DOCX files to Markdown
- `xlsx-to-markdown`: Convert XLSX files to Markdown
- `pptx-to-markdown`: Convert PPTX files to Markdown
- `get-markdown-file`: Retrieve an existing Markdown file. File extension must end with: *.md, *.markdown.

  OPTIONAL: set `MD_ALLOWED_PATHS` to restrict every file-input tool to a list of directories, e.g. `MD_ALLOWED_PATHS=/data/in:/data/out bun start`.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/zcaceres/markdownify-mcp/blob/main/LICENSE) file for details.
