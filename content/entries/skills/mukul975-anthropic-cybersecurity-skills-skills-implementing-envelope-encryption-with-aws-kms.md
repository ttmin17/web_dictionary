---
slug: mukul975-anthropic-cybersecurity-skills-skills-implementing-envelope-encryption-with-aws-kms
name: implementing-envelope-encryption-with-aws-kms
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
  subpath: skills/implementing-envelope-encryption-with-aws-kms
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
  path: skills/implementing-envelope-encryption-with-aws-kms/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.357Z
  truncated: false
type: agent_skill
skill:
  skill_name: implementing-envelope-encryption-with-aws-kms
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/implementing-envelope-encryption-with-aws-kms
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

# Implementing Envelope Encryption with AWS KMS
## Overview

Envelope encryption is a strategy where data is encrypted with a data encryption key (DEK), and the DEK itself is encrypted with a master key (KEK) managed by AWS KMS. This approach allows encrypting large volumes of data locally while keeping the master key secure in a hardware security module (HSM) managed by AWS. This skill covers implementing envelope encryption using AWS KMS GenerateDataKey API.


## When to Use

- When deploying or configuring implementing envelope encryption with aws kms capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites

- Familiarity with cryptography concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Objectives

- Understand the envelope encryption pattern and its advantages
- Generate data encryption keys using AWS KMS GenerateDataKey
- Encrypt/decrypt data locally using DEKs
- Store encrypted DEK alongside ciphertext
- Implement key caching to reduce KMS API calls
- Handle key rotation with automatic re-encryption
- Implement multi-region encryption for disaster recovery

## Key Concepts

### Envelope Encryption Flow

1. Call `kms:GenerateDataKey` to get plaintext DEK + encrypted DEK
2. Use plaintext DEK to encrypt data locally (AES-256-GCM)
3. Store encrypted DEK alongside ciphertext
4. Discard plaintext DEK from memory
5. For decryption: call `kms:Decrypt` on encrypted DEK, then decrypt data

### Advantages Over Direct KMS Encryption

| Aspect | Direct KMS | Envelope Encryption |
|--------|-----------|-------------------|
| Max data size | 4 KB | Unlimited |
| Latency | Network round-trip per operation | Local encryption |
| Cost | $0.03/10,000 requests | Fewer KMS requests |
| Offline | Not possible | Yes (with cached DEKs) |

### KMS Key Types

- **AWS Managed**: AWS creates and manages (`aws/s3`, `aws/ebs`)
- **Customer Managed**: You create and manage policies
- **Custom Key Store**: Backed by CloudHSM cluster

## Security Considerations

- Never store plaintext DEK; only keep encrypted DEK
- Use key policies to restrict who can call GenerateDataKey and Decrypt
- Enable AWS CloudTrail logging for all KMS API calls
- Implement key rotation (automatic annual rotation for CMKs)
- Use encryption context for authenticated encryption metadata
- Handle KMS throttling with exponential backoff

## Validation Criteria

- [ ] GenerateDataKey returns plaintext and encrypted DEK
- [ ] Data encrypts correctly with plaintext DEK using AES-256-GCM
- [ ] Encrypted DEK can be decrypted via KMS Decrypt API
- [ ] Decrypted DEK recovers the original data
- [ ] Plaintext DEK is wiped from memory after use
- [ ] Encryption context is validated during decryption
- [ ] Key rotation re-encrypts DEKs with new master key
