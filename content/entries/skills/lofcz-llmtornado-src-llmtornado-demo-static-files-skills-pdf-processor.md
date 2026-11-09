---
slug: lofcz-llmtornado-src-llmtornado-demo-static-files-skills-pdf-processor
name: pdf-processor
tagline: "Extracts text and tables from PDF files, fills forms, and merges
  documents. Use when working with PDF files or when the user mentions PDFs,
  forms, or "
summary: "Form filling: See FORMS.md for complete guide API reference: See
  REFERENCE.md for all methods Examples: See EXAMPLES.md for common patterns"
categories:
  - agent-frameworks
tags:
  - a2a
  - agent-framework
  - agent-orchestration
  - agent2agent
status: active
quality_percentile: 60
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-09T09:28:46.976Z
source:
  kind: github_repo
  repo: lofcz/LLMTornado
  subpath: src/LlmTornado.Demo/Static/Files/Skills/pdf-processor
  official_vendor: false
  license: MIT
signals:
  stars: 652
  last_commit: 2026-11-09T08:22:09Z
  stars_delta_7d: 1
  stars_growth_pct: 0.2
  trending_score: 1
  velocity_source: snapshot_delta
  sparkline_4w:
    - 647
    - 649
    - 651
    - 652
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: lofcz/LLMTornado
  path: src/LlmTornado.Demo/Static/Files/Skills/pdf-processor/SKILL.md
  branch: master
  fetched_at: 2026-11-09T09:28:45.277Z
  truncated: false
type: agent_skill
skill:
  skill_name: pdf-processor
  description: Extracts text and tables from PDF files, fills forms, and merges
    documents. Use when working with PDF files or when the user mentions PDFs,
    forms, or document extraction.
  folder_path: src/LlmTornado.Demo/Static/Files/Skills/pdf-processor
  extra_files: []
  pack_total_skills: 9
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: lofcz-llmtornado
---

# PDF Processing
## Quick start

Extract text with pdfplumber:
```python
import pdfplumber
with pdfplumber.open("file.pdf") as pdf:
    text = pdf.pages[0].extract_text()
```

## Advanced features

**Form filling**: See [FORMS.md](https://github.com/lofcz/LLMTornado/blob/master/src/LlmTornado.Demo/Static/Files/Skills/pdf-processor/FORMS.md) for complete guide
**API reference**: See [REFERENCE.md](https://github.com/lofcz/LLMTornado/blob/master/src/LlmTornado.Demo/Static/Files/Skills/pdf-processor/REFERENCE.md) for all methods
**Examples**: See [EXAMPLES.md](https://github.com/lofcz/LLMTornado/blob/master/src/LlmTornado.Demo/Static/Files/Skills/pdf-processor/EXAMPLES.md) for common patterns
