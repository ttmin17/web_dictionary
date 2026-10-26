---
slug: mukul975-anthropic-cybersecurity-skills-skills-configuring-multi-factor-authentication-with-duo
name: configuring-multi-factor-authentication-with-duo
tagline: Deploys Cisco Duo multi-factor authentication across enterprise
  applications, VPN, RDP, and SSH access points, covering Duo Authentication
  Proxy setup
summary: "- When deploying or configuring configuring multi factor
  authentication with duo capabilities in your environment - When establishing
  security controls aligned to compliance requirements - When building or
  improving s..."
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
  subpath: skills/configuring-multi-factor-authentication-with-duo
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
  path: skills/configuring-multi-factor-authentication-with-duo/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.344Z
  truncated: false
type: agent_skill
skill:
  skill_name: configuring-multi-factor-authentication-with-duo
  description: Deploys Cisco Duo multi-factor authentication across enterprise
    applications, VPN, RDP, and SSH access points, covering Duo Authentication
    Proxy setup, adaptive authentication policies, device trust assessment, and
    phishing-resistant WebAuthn/FIDO2 deployment aligned with NIST 800-63B
    AAL2/AAL3. Use when adding or hardening MFA for remote access, VPN, or
    privileged logins with Duo.
  folder_path: skills/configuring-multi-factor-authentication-with-duo
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

# Configuring Multi-Factor Authentication with Duo
## Overview
Deploy Cisco Duo multi-factor authentication across enterprise applications, VPN, RDP, and SSH access points. This skill covers Duo integration methods, adaptive authentication policies, device trust assessment, and phishing-resistant MFA deployment aligned with NIST 800-63B AAL2/AAL3 requirements.


## When to Use

- When deploying or configuring configuring multi factor authentication with duo capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites

- Familiarity with identity access management concepts and tools
- Access to a test or lab environment for safe execution
- Python 3.8+ with required dependencies installed
- Appropriate authorization for any testing activities

## Objectives
- Configure Duo MFA for VPN, RDP, SSH, and web applications
- Implement adaptive access policies based on user, device, and network context
- Deploy phishing-resistant authentication (Duo Verified Push, WebAuthn)
- Configure device health policies (trusted endpoints, OS version enforcement)
- Set up Duo Admin Panel monitoring and reporting
- Implement MFA bypass and emergency access procedures

## Key Concepts

### Duo Authentication Methods (by security strength)
1. **Security Keys (WebAuthn/FIDO2)**: Phishing-resistant, AAL3 capable
2. **Duo Verified Push**: Requires code entry, resistant to MFA fatigue attacks
3. **Duo Push**: Push notification to Duo Mobile app
4. **TOTP (Duo Mobile Passcode)**: Time-based one-time password
5. **Hardware Tokens**: OTP from physical token
6. **SMS/Phone Call**: Least secure, use only as fallback

### Duo Integration Architecture
- **Duo Authentication Proxy**: On-premises proxy for RADIUS/LDAP integration
- **Duo Web SDK**: Embed Duo MFA in web applications
- **Duo OIDC/SAML**: SSO integration for cloud applications
- **Duo for RDP**: Windows Logon MFA
- **Duo Unix**: PAM-based MFA for SSH

### Adaptive Access Policies
- **Trusted Networks**: Reduce MFA friction for corporate networks
- **Remembered Devices**: Skip MFA for trusted devices (configurable duration)
- **Device Health**: Block or require MFA based on OS patch level, encryption, firewall
- **Risk-Based Authentication**: Step-up MFA for anomalous login patterns

## Workflow

### Step 1: Duo Authentication Proxy Setup
1. Deploy Duo Authentication Proxy on Windows/Linux server
2. Configure primary authentication (AD/LDAP or RADIUS)
3. Configure Duo API credentials (Integration Key, Secret Key, API Hostname)
4. Set failmode (safe=deny if Duo unreachable, secure=allow)
5. Test proxy connectivity to Duo cloud and AD

### Step 2: VPN MFA Integration
1. Configure VPN concentrator for RADIUS authentication
2. Point RADIUS to Duo Authentication Proxy
3. Configure Duo proxy with [radius_server_auto] section
4. Test VPN login with Duo Push
5. Deploy to all VPN users with enrollment period

### Step 3: RDP/Windows Logon MFA
1. Install Duo Authentication for Windows Logon on target servers
2. Configure Duo application in Admin Panel
3. Set offline access options (allow N offline logins)
4. Configure bypass for service accounts
5. Test RDP login with Duo MFA

### Step 4: Adaptive Policy Configuration
1. Create user groups (Standard, Privileged, Contractors)
2. Configure per-group authentication policies:
   - Standard: Duo Push allowed, remembered device 7 days
   - Privileged: Verified Push required, no remembered device
   - Contractors: WebAuthn required, no remembered device
3. Configure device health policies:
   - Require encrypted disk
   - Block outdated OS versions
   - Require firewall enabled
4. Set trusted network exceptions for corporate IPs

### Step 5: Phishing-Resistant MFA Deployment
1. Enable Verified Push (requires entering 3-digit code from login screen)
2. Register WebAuthn/FIDO2 security keys for privileged users
3. Disable SMS and phone call for high-risk groups
4. Configure Duo Risk-Based Factor Selection
5. Monitor for MFA fatigue attack patterns

### Step 6: Monitoring and Response
1. Configure Duo Admin Panel alerts
2. Set up authentication log forwarding to SIEM
3. Monitor for: MFA denial patterns, bypass usage, new device enrollments
4. Create incident response playbook for MFA compromise
5. Regular review of bypass and exception policies

## Security Controls
| Control | NIST 800-53 | Description |
|---------|-------------|-------------|
| MFA | IA-2(1) | Multi-factor authentication for network access |
| MFA for Privileged | IA-2(2) | MFA for privileged account access |
| Replay Resistance | IA-2(8) | Replay-resistant authentication |
| Device Identification | IA-3 | Device identity and trust |
| Authenticator Management | IA-5 | MFA enrollment and lifecycle |

## Common Pitfalls
- Not deploying phishing-resistant MFA (Verified Push/FIDO2) for privileged accounts
- Setting failmode to "safe" (allow access when Duo is down) in production
- Not disabling SMS/phone call for users with app-capable devices
- Forgetting to configure offline access for laptops
- Not monitoring for MFA fatigue/prompt bombing attacks

## Verification
- [ ] VPN login requires Duo MFA
- [ ] RDP to servers requires Duo MFA
- [ ] SSH access requires Duo MFA
- [ ] Verified Push enabled for privileged users
- [ ] Device health policy blocks non-compliant devices
- [ ] Authentication logs forwarded to SIEM
- [ ] Bypass/emergency access procedures tested
- [ ] MFA fatigue detection alerts configured
