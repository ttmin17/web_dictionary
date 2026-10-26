---
slug: mukul975-anthropic-cybersecurity-skills-skills-implementing-immutable-backup-with-restic
name: implementing-immutable-backup-with-restic
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
  subpath: skills/implementing-immutable-backup-with-restic
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
  path: skills/implementing-immutable-backup-with-restic/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.357Z
  truncated: false
type: agent_skill
skill:
  skill_name: implementing-immutable-backup-with-restic
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/implementing-immutable-backup-with-restic
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

# Implementing Immutable Backup with Restic
## When to Use

- Establishing ransomware-resistant backup infrastructure with cryptographic integrity verification
- Implementing 3-2-1-1-0 backup strategy where the extra 1 is an immutable copy
- Automating backup verification workflows that test restore capability on a schedule
- Protecting backup repositories from deletion or modification by compromised admin accounts
- Meeting compliance requirements for data retention with tamper-proof storage

**Do not use** as the sole backup solution without also maintaining offline/air-gapped copies. Object lock protects against logical deletion but not physical storage failure.

## Prerequisites

- restic binary installed (https://restic.readthedocs.io/)
- S3-compatible storage with Object Lock enabled (AWS S3, MinIO, Backblaze B2)
- Python 3.8+ with subprocess module
- AWS CLI or MinIO client (mc) configured for bucket access
- Sufficient storage for backup repository (typically 2-3x source data with deduplication)

## Workflow

### Step 1: Initialize Restic Repository with Encryption

Create an encrypted restic repository on S3-compatible storage with object lock enabled. Restic uses AES-256-CTR for encryption with Poly1305-AES for authentication, ensuring backup data is both confidential and tamper-evident.

### Step 2: Configure Object Lock Retention

Enable S3 Object Lock in Compliance mode on the backup bucket to prevent any principal (including root) from deleting or modifying objects during the retention period. Set retention to match your backup window requirements (typically 30-90 days).

### Step 3: Automate Backup and Verification

Schedule backup operations with post-backup integrity verification using `restic check --read-data` which downloads and verifies every data blob against its stored checksum. Log results and alert on any integrity failures.

### Step 4: Test Restore Procedures

Periodically restore random files from backup snapshots to a temporary location and compare checksums against the original to validate end-to-end backup integrity. Document restore times for RTO planning.

## Key Concepts

| Term | Definition |
|------|------------|
| **Object Lock** | S3 feature that prevents object deletion or overwrite for a specified retention period |
| **Compliance Mode** | Object Lock mode where even the root account cannot delete objects before retention expires |
| **Deduplication** | Restic stores data in content-addressable chunks, deduplicating across all snapshots |
| **3-2-1-1-0** | 3 copies, 2 media types, 1 offsite, 1 immutable, 0 errors in verification |

## Tools & Systems

- **restic**: Fast, secure, cross-platform backup tool with built-in encryption and deduplication
- **resticpy**: Python wrapper for restic CLI operations
- **AWS S3 Object Lock**: WORM storage for tamper-proof backup retention
- **MinIO**: Self-hosted S3-compatible storage with Object Lock support

## Output Format

```
BACKUP VERIFICATION REPORT
===========================
Repository: s3:s3.amazonaws.com/company-backups-immutable
Snapshots: 45
Total Size: 2.3 TiB (deduplicated from 8.7 TiB)
Last Backup: 2026-03-11T02:00:00Z
Integrity Check: PASSED (all packs verified)
Object Lock: Compliance mode, 90-day retention
Restore Test: PASSED (15 files verified)
```
