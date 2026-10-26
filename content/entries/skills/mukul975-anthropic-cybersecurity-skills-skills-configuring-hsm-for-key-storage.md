---
slug: mukul975-anthropic-cybersecurity-skills-skills-configuring-hsm-for-key-storage
name: configuring-hsm-for-key-storage
tagline: Configures Hardware Security Modules for cryptographic key storage
  using the PKCS#11 standard interface, covering key generation, signing,
  encryption,
summary: Hardware Security Modules (HSMs) are tamper-resistant physical devices
  that safeguard cryptographic keys and perform cryptographic operations in a
  hardened environment. Keys stored in an HSM never leave the device bou...
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
  subpath: skills/configuring-hsm-for-key-storage
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
  path: skills/configuring-hsm-for-key-storage/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.343Z
  truncated: false
type: agent_skill
skill:
  skill_name: configuring-hsm-for-key-storage
  description: Configures Hardware Security Modules for cryptographic key storage
    using the PKCS#11 standard interface, covering key generation, signing,
    encryption, and key management on physical HSMs and SoftHSM2 for
    development. Use when protecting cryptographic keys so they never leave a
    hardened device boundary, or when building and testing PKCS#11-based key
    management workflows.
  folder_path: skills/configuring-hsm-for-key-storage
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

# Configuring HSM for Key Storage
## Overview

Hardware Security Modules (HSMs) are tamper-resistant physical devices that safeguard cryptographic keys and perform cryptographic operations in a hardened environment. Keys stored in an HSM never leave the device boundary, providing the highest level of key protection. This skill covers configuring HSMs using the PKCS#11 standard interface, including key generation, signing, encryption, and key management using both physical HSMs and SoftHSM2 for development.


## When to Use

- When deploying or configuring configuring hsm for key storage capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites

- Familiarity with cryptography concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Objectives

- Configure SoftHSM2 as a development PKCS#11 provider
- Generate and manage keys inside the HSM via PKCS#11
- Perform cryptographic operations (sign, verify, encrypt, decrypt) using HSM-resident keys
- Implement HSM-backed certificate authority operations
- Configure key access policies and user authentication
- Interface with cloud HSM services (AWS CloudHSM, Azure)

## Key Concepts

### HSM Compliance Levels

| FIPS Level | Protection | Use Case |
|-----------|-----------|----------|
| FIPS 140-2 Level 1 | Software only | Development |
| FIPS 140-2 Level 2 | Tamper-evident, role-based auth | General production |
| FIPS 140-2 Level 3 | Tamper-resistant, identity-based auth | Financial, government |
| FIPS 140-2 Level 4 | Physical tamper response | Military, classified |

### PKCS#11 Architecture

```
Application --> PKCS#11 API --> HSM Provider --> Hardware HSM
                                    |
                              (SoftHSM2 for dev)
```

### Key Objects in PKCS#11

| Object Type | Description | Operations |
|-------------|-------------|-----------|
| CKO_SECRET_KEY | Symmetric keys (AES) | Encrypt, Decrypt, Wrap |
| CKO_PUBLIC_KEY | Public keys (RSA, EC) | Verify, Encrypt, Wrap |
| CKO_PRIVATE_KEY | Private keys (RSA, EC) | Sign, Decrypt, Unwrap |
| CKO_CERTIFICATE | X.509 certificates | Storage, retrieval |

## Security Considerations

- Never export private keys from HSM (use CKA_EXTRACTABLE=False)
- Use separate slots/partitions for different applications
- Implement multi-person key ceremony for CA root keys
- Enable audit logging for all HSM operations
- Implement HSM backup and disaster recovery
- Use strong PINs and enable SO (Security Officer) PIN

## Validation Criteria

- [ ] SoftHSM2 initializes with token and user PIN
- [ ] AES key generates inside HSM
- [ ] RSA key pair generates inside HSM
- [ ] Encryption/decryption uses HSM-resident keys
- [ ] Signing/verification uses HSM-resident keys
- [ ] Keys cannot be exported (non-extractable)
- [ ] Key listing shows all HSM-stored objects
