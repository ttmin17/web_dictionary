---
slug: mukul975-anthropic-cybersecurity-skills-skills-implementing-identity-verification-for-zero-trust
name: implementing-identity-verification-for-zero-trust
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
  subpath: skills/implementing-identity-verification-for-zero-trust
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
  path: skills/implementing-identity-verification-for-zero-trust/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.357Z
  truncated: false
type: agent_skill
skill:
  skill_name: implementing-identity-verification-for-zero-trust
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/implementing-identity-verification-for-zero-trust
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

# Implementing Identity Verification for Zero Trust
## Prerequisites

- Understanding of zero trust principles (NIST SP 800-207)
- Familiarity with identity providers (Azure AD, Okta, Ping Identity)
- Knowledge of authentication protocols (SAML 2.0, OIDC, FIDO2)
- Understanding of MFA and passwordless authentication

## Overview

Identity is the foundational pillar of zero trust architecture. NIST SP 800-207 mandates that all resource authentication and authorization are dynamic and strictly enforced before access is allowed. Identity verification in zero trust goes beyond traditional username/password by implementing continuous, risk-adaptive authentication using multiple signals including device posture, behavioral biometrics, location, and network context.

This skill covers implementing phishing-resistant MFA, continuous identity verification, risk-based conditional access, and identity governance aligned with the CISA Zero Trust Maturity Model Identity Pillar.


## When to Use

- When deploying or configuring implementing identity verification for zero trust capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites

- Familiarity with zero trust architecture concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Architecture

### Identity Verification Flow

```
User Access Request
    │
    v
┌───────────────────────┐
│ Primary Authentication │
│ - FIDO2/WebAuthn key  │
│ - Certificate-based    │
│ - Passwordless         │
└──────────┬────────────┘
           v
┌───────────────────────┐
│ Contextual Assessment  │
│ - Device posture       │
│ - Network location     │
│ - Geo-velocity check   │
│ - Time of access       │
│ - Behavioral baseline  │
└──────────┬────────────┘
           v
┌───────────────────────┐
│ Risk Scoring Engine    │
│ - Aggregate signals    │
│ - Calculate risk score │
│ - Compare to threshold │
└───┬──────────┬────────┘
    │          │
 Low Risk   High Risk
    │          │
    v          v
┌────────┐  ┌──────────────┐
│ Grant  │  │ Step-up Auth  │
│ Access │  │ - Hardware key│
│        │  │ - Biometric   │
│        │  │ - Manager OK  │
└────────┘  └──────────────┘
```

### Identity Provider Architecture

1. **Primary IdP**: Azure AD / Okta / Ping Identity for centralized identity management
2. **FIDO2 Authenticators**: Hardware security keys (YubiKey) or platform authenticators (Windows Hello, Touch ID)
3. **Risk Engine**: Adaptive access using identity threat detection (Microsoft Entra ID Protection, Okta ThreatInsight)
4. **Identity Governance**: Lifecycle management, access reviews, just-in-time provisioning
5. **Privileged Identity**: Separate verification for elevated access (CyberArk, BeyondTrust)

## Key Concepts

### Phishing-Resistant MFA
FIDO2/WebAuthn eliminates phishable credentials by binding authentication to the origin domain. Hardware security keys and platform authenticators provide cryptographic proof of identity without transmitting secrets.

### Continuous Identity Verification
Rather than authenticating once at session start, zero trust requires ongoing verification through session token evaluation, behavioral analytics, and periodic re-authentication challenges based on risk signals.

### Risk-Based Conditional Access
Conditional access policies evaluate multiple signals (user risk level, sign-in risk, device compliance, location) to dynamically adjust authentication requirements and access grants.

### Identity Threat Detection
AI-driven analytics detect compromised identities through impossible travel detection, anomalous sign-in patterns, credential stuffing detection, and token replay attacks.

## Workflow

### Phase 1: Identity Infrastructure

1. **Consolidate Identity Providers**
   - Audit all identity sources across the organization
   - Federate to a single authoritative IdP using SAML 2.0 or OIDC
   - Configure SCIM for automated provisioning and deprovisioning
   - Eliminate local accounts and shared credentials

2. **Deploy Phishing-Resistant MFA**
   - Enroll all users in FIDO2/WebAuthn with hardware security keys
   - Configure platform authenticators (Windows Hello for Business, macOS Touch ID)
   - Disable SMS and voice call as MFA methods (phishable)
   - Create conditional access policy requiring phishing-resistant methods for all sign-ins

3. **Configure Conditional Access Policies**
   - Require compliant device for access to sensitive applications
   - Block legacy authentication protocols (basic auth, IMAP, POP3)
   - Require MFA for all users from untrusted locations
   - Enforce session time limits with re-authentication
   - Block or require additional verification for high-risk sign-ins

### Phase 2: Risk-Based Authentication

4. **Enable Identity Threat Detection**
   - Activate Microsoft Entra ID Protection or Okta ThreatInsight
   - Configure risk levels: low (allow), medium (require MFA), high (block and investigate)
   - Enable impossible travel detection and anomalous token alerts
   - Integrate identity risk signals with SIEM/SOAR

5. **Implement Step-Up Authentication**
   - For sensitive operations (privilege elevation, financial transactions), require additional verification
   - Configure step-up policies: re-authenticate with hardware key
   - Integrate with PAM for privileged session approval workflows
   - Log all step-up events for audit trail

### Phase 3: Continuous Verification

6. **Deploy Continuous Access Evaluation (CAE)**
   - Enable Continuous Access Evaluation Protocol (CAEP) for real-time token revocation
   - Configure critical event triggers: user disabled, password changed, location change
   - Test that token revocation occurs within minutes (not hours) of security event
   - Monitor CAE event logs for operational health

7. **Implement Session Controls**
   - Configure session duration limits based on application sensitivity
   - Enable sign-in frequency controls (re-authenticate every N hours)
   - Implement persistent browser session controls
   - Configure app-enforced restrictions for unmanaged devices

### Phase 4: Identity Governance

8. **Automate Identity Lifecycle**
   - Configure joiner-mover-leaver workflows with HR system integration
   - Automate access provisioning based on role and department
   - Enable just-in-time access for temporary elevated permissions
   - Configure automatic access expiration for contractors and guests

9. **Implement Access Reviews**
   - Schedule quarterly access certification campaigns
   - Configure automated reminders and escalation
   - Require manager approval for continued access
   - Auto-revoke access for unreviewed certifications

## Validation Checklist

- [ ] Single authoritative IdP with all applications federated
- [ ] FIDO2/WebAuthn enrolled for all users
- [ ] SMS and voice MFA methods disabled
- [ ] Legacy authentication protocols blocked
- [ ] Conditional access policies enforced for all applications
- [ ] Identity threat detection active with risk-based policies
- [ ] Continuous Access Evaluation enabled and tested
- [ ] Step-up authentication configured for sensitive operations
- [ ] Identity lifecycle automated with HR integration
- [ ] Quarterly access reviews scheduled and operational
- [ ] Identity events streaming to SIEM

## References

- NIST SP 800-207: Zero Trust Architecture
- NIST SP 800-63B: Digital Identity Guidelines - Authentication
- CISA Zero Trust Maturity Model v2.0 - Identity Pillar
- FIDO Alliance WebAuthn Specification
- Microsoft Entra Conditional Access Documentation
