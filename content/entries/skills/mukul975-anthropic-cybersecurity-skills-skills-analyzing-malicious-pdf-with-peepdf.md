---
slug: mukul975-anthropic-cybersecurity-skills-skills-analyzing-malicious-pdf-with-peepdf
name: analyzing-malicious-pdf-with-peepdf
tagline: Perform static analysis of malicious PDF documents using peepdf, pdfid,
  and pdf-parser to extract embedded JavaScript, shellcode, and suspicious objec
summary: "- When triaging suspicious PDF attachments from phishing emails -
  During malware analysis of PDF-based exploit documents - When extracting
  embedded JavaScript, shellcode, or executables from PDFs - For forensic
  examin..."
categories:
  - security-auth
tags:
  - ai-agents
  - claude-code
  - cloud-security
  - cybersecurity
status: active
quality_percentile: 59
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: mukul975/Anthropic-Cybersecurity-Skills
  subpath: skills/analyzing-malicious-pdf-with-peepdf
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 35031
  last_commit: 2026-08-31T04:32:44Z
  stars_delta_7d: 353
  stars_growth_pct: 1
  trending_score: 356.59
  velocity_source: snapshot_delta
  sparkline_4w:
    - 33900
    - 34367
    - 34678
    - 35031
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: mukul975/Anthropic-Cybersecurity-Skills
  path: skills/analyzing-malicious-pdf-with-peepdf/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.324Z
  truncated: false
type: agent_skill
skill:
  skill_name: analyzing-malicious-pdf-with-peepdf
  description: Perform static analysis of malicious PDF documents using peepdf,
    pdfid, and pdf-parser to extract embedded JavaScript, shellcode, and
    suspicious objects. Use when triaging a suspicious PDF attachment from a
    phishing email, analyzing a PDF-based exploit document, or building
    detection signatures for weaponized PDF threats.
  folder_path: skills/analyzing-malicious-pdf-with-peepdf
  extra_files:
    - LICENSE
    - references/api-reference.md
    - scripts/agent.py
  pack_total_skills: 818
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mukul975-anthropic-cybersecurity-skills
---

# Analyzing Malicious PDF with peepdf
## When to Use

- When triaging suspicious PDF attachments from phishing emails
- During malware analysis of PDF-based exploit documents
- When extracting embedded JavaScript, shellcode, or executables from PDFs
- For forensic examination of weaponized document artifacts
- When building detection signatures for PDF-based threats

## Prerequisites

- Python 3.8+ with peepdf-3 installed (pip install peepdf-3)
- pdfid.py and pdf-parser.py from Didier Stevens suite
- Isolated analysis environment (VM or sandbox)
- Optional: PyV8 for JavaScript emulation within peepdf
- Optional: Pylibemu for shellcode analysis

## Workflow

1. **Triage with pdfid**: Scan PDF for suspicious keywords (/JS, /JavaScript, /OpenAction, /Launch, /EmbeddedFile).
2. **Interactive Analysis**: Open PDF in peepdf interactive mode to explore object structure.
3. **Identify Suspicious Objects**: Locate objects containing JavaScript, streams, or encoded data.
4. **Extract Content**: Dump suspicious streams and decode filters (FlateDecode, ASCIIHexDecode).
5. **Deobfuscate JavaScript**: Analyze extracted JS for shellcode, heap sprays, or exploit code.
6. **Check VirusTotal**: Use peepdf vtcheck to cross-reference file hash with AV detections.
7. **Generate IOCs**: Extract URLs, domains, hashes, and shellcode signatures.

## Key Concepts

| Concept | Description |
|---------|-------------|
| /OpenAction | Automatic action executed when PDF is opened |
| /JavaScript /JS | Embedded JavaScript code in PDF objects |
| /Launch | Action that launches external applications |
| /EmbeddedFile | File embedded within the PDF structure |
| FlateDecode | zlib compression filter used to hide content |
| Object Streams | PDF objects stored in compressed streams |

## Tools & Systems

| Tool | Purpose |
|------|---------|
| peepdf / peepdf-3 | Interactive PDF analysis with JS emulation |
| pdfid.py | Quick triage scanning for suspicious keywords |
| pdf-parser.py | Deep object-level PDF parsing |
| VirusTotal | Hash lookup and AV detection cross-reference |
| CyberChef | Decode and transform extracted payloads |

## Output Format

```
Analysis Report: PDF-MAL-[DATE]-[SEQ]
File: [filename.pdf]
SHA-256: [hash]
Suspicious Keywords: [/JS, /OpenAction, etc.]
Objects with JavaScript: [Object IDs]
Extracted URLs: [List]
Shellcode Detected: [Yes/No]
Embedded Files: [Count and types]
VirusTotal Detections: [X/Y engines]
Risk Level: [Critical/High/Medium/Low]
```
