---
slug: mukul975-anthropic-cybersecurity-skills-skills-implementing-aes-encryption-for-data-at-rest
name: implementing-aes-encryption-for-data-at-rest
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
  subpath: skills/implementing-aes-encryption-for-data-at-rest
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
  path: skills/implementing-aes-encryption-for-data-at-rest/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.357Z
  truncated: false
type: agent_skill
skill:
  skill_name: implementing-aes-encryption-for-data-at-rest
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/implementing-aes-encryption-for-data-at-rest
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

# Implementing AES Encryption for Data at Rest
## Overview

AES (Advanced Encryption Standard) is a symmetric block cipher standardized by NIST (FIPS 197) used to protect classified and sensitive data. This skill covers implementing AES-256 encryption in GCM mode for encrypting files and data stores at rest, including proper key derivation, IV/nonce management, and authenticated encryption.


## When to Use

- When deploying or configuring implementing aes encryption for data at rest capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites

- Familiarity with cryptography concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Objectives

- Implement AES-256-GCM encryption and decryption for files
- Derive encryption keys from passwords using PBKDF2 and Argon2
- Manage initialization vectors (IVs) and nonces securely
- Encrypt and decrypt entire directory trees
- Implement authenticated encryption to detect tampering
- Handle large files with streaming encryption

## Key Concepts

### AES Modes of Operation

| Mode | Authentication | Parallelizable | Use Case |
|------|---------------|----------------|----------|
| GCM  | Yes (AEAD)    | Yes            | Network data, file encryption |
| CBC  | No            | Decrypt only   | Legacy systems, disk encryption |
| CTR  | No            | Yes            | Streaming encryption |
| CCM  | Yes (AEAD)    | No             | IoT, constrained environments |

### Key Derivation

Never use raw passwords as encryption keys. Always derive keys using:
- **PBKDF2**: NIST-approved, widely supported (minimum 600,000 iterations as of 2024)
- **Argon2id**: Winner of Password Hashing Competition, memory-hard
- **scrypt**: Memory-hard, good alternative to Argon2

### Nonce/IV Management

- GCM requires a 96-bit (12-byte) nonce that must NEVER be reused with the same key
- Generate nonces using `os.urandom()` (CSPRNG)
- Store nonce alongside ciphertext (it is not secret)

## Workflow

1. Install the `cryptography` library: `pip install cryptography`
2. Generate or derive an encryption key
3. Create a random nonce for each encryption operation
4. Encrypt data using AES-256-GCM with the key and nonce
5. Store nonce + ciphertext + authentication tag together
6. For decryption, extract nonce, verify tag, and decrypt

## Encrypted File Format

```
[salt: 16 bytes][nonce: 12 bytes][ciphertext: variable][tag: 16 bytes]
```

## Security Considerations

- Always use authenticated encryption (GCM, CCM) to prevent tampering
- Never reuse a nonce with the same key (catastrophic in GCM)
- Use at least 256-bit keys for long-term data protection
- Securely wipe keys from memory after use when possible
- Rotate encryption keys periodically per organizational policy
- For disk-level encryption, consider XTS mode (AES-XTS)

## Validation Criteria

- [ ] AES-256-GCM encryption produces valid ciphertext
- [ ] Decryption recovers original plaintext exactly
- [ ] Authentication tag detects any ciphertext modification
- [ ] Key derivation uses sufficient iterations/parameters
- [ ] Nonces are never reused for the same key
- [ ] Large files (>1GB) can be processed via streaming
- [ ] Encrypted file format includes all necessary metadata
