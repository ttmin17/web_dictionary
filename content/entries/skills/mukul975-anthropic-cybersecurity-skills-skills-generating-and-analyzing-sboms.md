---
slug: mukul975-anthropic-cybersecurity-skills-skills-generating-and-analyzing-sboms
name: generating-and-analyzing-sboms
tagline: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
summary: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
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
  subpath: skills/generating-and-analyzing-sboms
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
  path: skills/generating-and-analyzing-sboms/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.356Z
  truncated: false
type: agent_skill
skill:
  skill_name: generating-and-analyzing-sboms
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/generating-and-analyzing-sboms
  extra_files:
    - LICENSE
    - references/api-reference.md
    - references/standards.md
    - scripts/agent.py
  pack_total_skills: 818
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mukul975-anthropic-cybersecurity-skills
---

# Generating and Analyzing SBOMs
> **Authorized Use Only:** Generate and scan SBOMs only for software and images you own or are authorized to assess. Treat SBOMs as sensitive inventory data — they reveal your dependency attack surface.

## Overview

A Software Bill of Materials (SBOM) is a formal, machine-readable inventory of every component, library, and dependency in a piece of software — the supply-chain equivalent of an ingredients label. SBOMs are central to defending against supply-chain compromise (CISA's SBOM initiative, US Executive Order 14028) because you cannot patch what you cannot see. The two dominant SBOM standards are:

- **CycloneDX** — an OWASP standard optimized for security use cases (vulnerabilities, VEX, dependency relationships).
- **SPDX** — a Linux Foundation / ISO standard (ISO/IEC 5962) strong on licensing and provenance.

The reference open-source toolchain is from Anchore:

- **Syft** generates SBOMs (CycloneDX, SPDX, or its native format) from container images and filesystems.
- **Grype** matches an SBOM (or image) against vulnerability databases to find CVEs.
- **Cosign** (Sigstore) signs SBOMs and attaches them to images as signed attestations for tamper-evident provenance.

This skill covers producing standards-compliant SBOMs, correlating them with vulnerability intelligence, and embedding the workflow into CI/CD.

## When to Use

- Establishing and maintaining a component inventory for applications and container images.
- Continuously detecting known vulnerabilities (including newly disclosed CVEs against existing artifacts).
- Satisfying procurement/regulatory SBOM requirements (CISA, EO 14028).
- Producing signed SBOM attestations for downstream supply-chain trust.

## Prerequisites

- Install Syft and Grype (official install scripts):
  ```bash
  curl -sSfL https://raw.githubusercontent.com/anchore/syft/main/install.sh | sh -s -- -b /usr/local/bin
  curl -sSfL https://raw.githubusercontent.com/anchore/grype/main/install.sh | sh -s -- -b /usr/local/bin
  ```
- Install Cosign for signing/attestation:
  ```bash
  # via Go, or download a release from https://github.com/sigstore/cosign/releases
  go install github.com/sigstore/cosign/v2/cmd/cosign@latest
  ```
- Access to the target images/source and (for signing) a registry plus keys or keyless OIDC.

## Objectives

- Generate CycloneDX and SPDX SBOMs from images and directories.
- Scan SBOMs and images for vulnerabilities with Grype.
- Gate CI/CD builds on severity thresholds.
- Sign and attach SBOM attestations with Cosign and verify them.

## MITRE ATT&CK Mapping

| ID | Official Technique Name | Relevance to this skill |
|----|------------------------|--------------------------|
| T1195.001 | Supply Chain Compromise: Compromise Software Dependencies and Development Tools | SBOM generation and vulnerability correlation expose compromised or vulnerable dependencies — the attack surface adversaries abuse under this technique. |

This is a defensive supply-chain skill; the mapping reflects the adversary technique it is designed to detect and mitigate.

## Workflow

### 1. Generate a CycloneDX SBOM from a container image
`-o <format>` selects output; `cyclonedx-json` is security-oriented.
```bash
syft alpine:latest -o cyclonedx-json=alpine.cdx.json
```

### 2. Generate an SPDX SBOM from a source directory
Use the `dir:` source to inventory a checked-out repository; `spdx-json` for the SPDX standard.
```bash
syft dir:. -o spdx-json=app.spdx.json
```

### 3. Emit multiple formats at once
Produce both standards in a single pass for different consumers.
```bash
syft myorg/app:1.4.2 \
  -o cyclonedx-json=app.cdx.json \
  -o spdx-json=app.spdx.json \
  -o table
```

### 4. Scan the SBOM for vulnerabilities with Grype
Decoupling generation from scanning lets you re-scan stored SBOMs as new CVEs land — without rebuilding.
```bash
# Scan an existing SBOM
grype sbom:app.cdx.json -o table

# JSON report for automation
grype sbom:app.cdx.json -o json > app.vulns.json
```
You can also scan an image directly (Grype generates the SBOM internally):
```bash
grype myorg/app:1.4.2 -o table
```

### 5. Gate CI/CD on severity
`--fail-on` exits non-zero at or above a severity, failing the pipeline.
```bash
grype sbom:app.cdx.json --fail-on high
```
Filter out unfixable noise with a `.grype.yaml` policy (`only-fixed: true`) or `--only-fixed`:
```bash
grype sbom:app.cdx.json --only-fixed --fail-on critical
```

### 6. Sign and attach the SBOM as an attestation
Cosign records the SBOM as a signed, in-toto attestation alongside the image in the registry.
```bash
# Key-based signing
cosign attest --key cosign.key \
  --predicate app.spdx.json \
  --type spdxjson \
  myorg/app:1.4.2

# Keyless (Sigstore OIDC / Fulcio + Rekor)
COSIGN_EXPERIMENTAL=1 cosign attest \
  --predicate app.cdx.json \
  --type cyclonedx \
  myorg/app:1.4.2
```

### 7. Verify the attestation downstream
Consumers verify provenance before trusting an image.
```bash
cosign verify-attestation --key cosign.pub --type spdxjson myorg/app:1.4.2
```

### 8. Retrieve and re-scan attached SBOMs
Pull the attested SBOM from the registry and re-run Grype as part of continuous monitoring.
```bash
cosign download attestation myorg/app:1.4.2 \
  | jq -r '.payload' | base64 -d | jq '.predicate' > pulled.spdx.json
grype sbom:pulled.spdx.json -o table
```

### 9. Correlate to vulnerability intelligence
Feed Grype JSON into your vulnerability management workflow: deduplicate by CVE, enrich with EPSS/KEV for prioritization, and track remediation SLAs. Re-scan stored SBOMs on each Grype DB update to catch newly disclosed CVEs in unchanged artifacts.

## Tools and Resources

| Tool | Purpose | Link |
|------|---------|------|
| Syft | SBOM generation | https://github.com/anchore/syft |
| Grype | Vulnerability scanning of SBOMs/images | https://github.com/anchore/grype |
| Cosign | SBOM signing/attestation | https://github.com/sigstore/cosign |
| CycloneDX | Security-focused SBOM standard | https://cyclonedx.org/ |
| SPDX | ISO SBOM standard | https://spdx.dev/ |
| CISA SBOM | Guidance and minimum elements | https://www.cisa.gov/sbom |

## Format Comparison

| Aspect | CycloneDX | SPDX |
|--------|-----------|------|
| Steward | OWASP | Linux Foundation / ISO 5962 |
| Strength | Security, VEX, vulnerabilities | Licensing, provenance |
| Common syft `-o` values | `cyclonedx-json`, `cyclonedx-xml` | `spdx-json`, `spdx` (tag-value) |

## Validation Criteria

- [ ] CycloneDX SBOM generated from the target image
- [ ] SPDX SBOM generated from source where required
- [ ] SBOM scanned with Grype producing a CVE report
- [ ] CI/CD gated with `--fail-on` at an agreed severity
- [ ] SBOM signed and attached as an attestation with Cosign
- [ ] Attestation verified downstream
- [ ] Stored SBOMs re-scanned on Grype DB updates
- [ ] Findings correlated/prioritized (EPSS/KEV) and tracked to remediation
