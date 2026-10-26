---
slug: mukul975-anthropic-cybersecurity-skills-skills-configuring-certificate-authority-with-openssl
name: configuring-certificate-authority-with-openssl
tagline: Build a two-tier PKI Certificate Authority hierarchy (offline Root CA
  plus issuing Intermediate CA) using OpenSSL and the Python cryptography
  library,
summary: A Certificate Authority (CA) is the trust anchor in a PKI hierarchy,
  responsible for issuing, signing, and revoking digital certificates. This
  skill covers building a two-tier CA hierarchy (Root CA + Intermediate CA)...
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
  subpath: skills/configuring-certificate-authority-with-openssl
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
  path: skills/configuring-certificate-authority-with-openssl/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.343Z
  truncated: false
type: agent_skill
skill:
  skill_name: configuring-certificate-authority-with-openssl
  description: Build a two-tier PKI Certificate Authority hierarchy (offline Root
    CA plus issuing Intermediate CA) using OpenSSL and the Python cryptography
    library, covering certificate extensions, CRL distribution points, OCSP
    responder configuration, and certificate policy management. Use when
    standing up an internal CA, issuing or revoking X.509 certificates, or
    designing PKI trust hierarchies for TLS, code-signing, or
    client-authentication use cases.
  folder_path: skills/configuring-certificate-authority-with-openssl
  extra_files:
    - LICENSE
    - assets/template.md
    - references/api-reference.md
    - references/standards.md
    - references/workflows.md
    - scripts/agent.py
    - scripts/process.py
  pack_total_skills: 818
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: mukul975-anthropic-cybersecurity-skills
---

# Configuring Certificate Authority with OpenSSL
## Overview

A Certificate Authority (CA) is the trust anchor in a PKI hierarchy, responsible for issuing, signing, and revoking digital certificates. This skill covers building a two-tier CA hierarchy (Root CA + Intermediate CA) using OpenSSL and the Python cryptography library, including CRL distribution, OCSP responder configuration, and certificate policy management.


## When to Use

- When deploying or configuring configuring certificate authority with openssl capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites

- Familiarity with cryptography concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Objectives

- Create a Root CA with self-signed certificate
- Create an Intermediate CA signed by the Root CA
- Issue server and client certificates from the Intermediate CA
- Configure Certificate Revocation Lists (CRLs)
- Implement certificate policies and constraints
- Build a complete PKI hierarchy programmatically

## Key Concepts

### CA Hierarchy

```
Root CA (offline, air-gapped)
  |
  +-- Intermediate CA (online, operational)
        |
        +-- Server Certificates
        +-- Client Certificates
        +-- Code Signing Certificates
```

### Certificate Extensions

| Extension | Purpose | Critical |
|-----------|---------|----------|
| basicConstraints | CA:TRUE/FALSE, pathLenConstraint | Yes |
| keyUsage | keyCertSign, cRLSign, digitalSignature | Yes |
| extendedKeyUsage | serverAuth, clientAuth, codeSigning | No |
| subjectKeyIdentifier | Hash of public key | No |
| authorityKeyIdentifier | Issuer's key identifier | No |
| crlDistributionPoints | URL to CRL | No |
| authorityInfoAccess | OCSP responder URL | No |

## Security Considerations

- Root CA private key must be stored offline (air-gapped HSM)
- Use minimum 4096-bit RSA or P-384 ECDSA for CA keys
- Set path length constraints on intermediate CAs
- Implement certificate policies (OIDs)
- Enable CRL and OCSP for revocation checking
- Audit all certificate issuance operations

## Validation Criteria

- [ ] Root CA self-signed certificate is valid
- [ ] Intermediate CA certificate chains to Root CA
- [ ] Issued certificates chain to Intermediate -> Root
- [ ] Path length constraints are enforced
- [ ] CRL is generated and accessible
- [ ] Revoked certificates appear in CRL
- [ ] Certificate policies are correctly embedded
