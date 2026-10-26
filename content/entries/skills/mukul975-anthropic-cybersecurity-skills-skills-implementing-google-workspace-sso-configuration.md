---
slug: mukul975-anthropic-cybersecurity-skills-skills-implementing-google-workspace-sso-configuration
name: implementing-google-workspace-sso-configuration
tagline: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
summary: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
categories:
  - productivity-ops
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
  subpath: skills/implementing-google-workspace-sso-configuration
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
  path: skills/implementing-google-workspace-sso-configuration/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:43:39.357Z
  truncated: false
type: agent_skill
skill:
  skill_name: implementing-google-workspace-sso-configuration
  description: Agent skill from mukul975/Anthropic-Cybersecurity-Skills
  folder_path: skills/implementing-google-workspace-sso-configuration
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

# Implementing Google Workspace SSO Configuration
## Overview

Single Sign-On (SSO) for Google Workspace allows organizations to authenticate users through their existing identity provider (IdP) such as Okta, Azure AD (Microsoft Entra ID), or ADFS, rather than managing separate Google passwords. This is implemented using SAML 2.0 protocol where Google Workspace acts as the Service Provider (SP) and the organization's IdP handles authentication. SSO centralizes credential management, enforces MFA policies at the IdP, and enables immediate access revocation when users leave the organization.


## When to Use

- When deploying or configuring implementing google workspace sso configuration capabilities in your environment
- When establishing security controls aligned to compliance requirements
- When building or improving security architecture for this domain
- When conducting security assessments that require this implementation

## Prerequisites

- Google Workspace Business, Enterprise, or Education edition
- Super Admin access to Google Admin Console
- Identity Provider with SAML 2.0 support (Okta, Azure AD, ADFS, Ping Identity)
- IdP signing certificate (X.509 PEM format, RSA or DSA)
- DNS verification for the Google Workspace domain

## Core Concepts

### SAML 2.0 SSO Flow

```
User navigates to Google Workspace app (Gmail, Drive, etc.)
        │
        ├── Google checks: Is SSO configured for this domain?
        │
        ├── YES → Redirect user to IdP Sign-In Page URL
        │          (SAML AuthnRequest sent via browser redirect)
        │
        ├── User authenticates at IdP (credentials + MFA)
        │
        ├── IdP generates SAML Response with signed assertion
        │
        ├── Browser POSTs SAML Response to Google ACS URL:
        │   https://www.google.com/a/{domain}/acs
        │
        ├── Google validates SAML signature against uploaded certificate
        │
        └── User is granted access to Google Workspace
```

### Key SAML Parameters

| Parameter | Value |
|-----------|-------|
| ACS URL | `https://www.google.com/a/{your-domain}/acs` |
| Entity ID | `google.com/a/{your-domain}` or `google.com` |
| NameID Format | `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress` |
| NameID Value | User's primary Google Workspace email |
| Binding | HTTP-POST (for ACS), HTTP-Redirect (for SSO URL) |

## Workflow

### Step 1: Prepare the Identity Provider

**For Okta:**
1. Navigate to Applications > Add Application > Search "Google Workspace"
2. Configure the Google Workspace app with your domain
3. Assign users/groups to the application
4. Download the IdP metadata or note: SSO URL, Entity ID, Certificate

**For Azure AD (Microsoft Entra ID):**
1. Navigate to Enterprise Applications > New Application > Google Cloud/Workspace
2. Configure Single sign-on > SAML
3. Set Basic SAML Configuration:
   - Identifier (Entity ID): `google.com`
   - Reply URL (ACS): `https://www.google.com/a/{your-domain}/acs`
   - Sign on URL: `https://www.google.com/a/{your-domain}/ServiceLogin`
4. Download Federation Metadata XML or Certificate (Base64)

**For ADFS:**
1. Add Relying Party Trust using federation metadata
2. Configure claim rules to pass NameID as email address
3. Export the token-signing certificate

### Step 2: Configure Google Workspace SSO

1. Sign in to Google Admin Console (admin.google.com) as Super Admin
2. Navigate to Security > Authentication > SSO with third-party IdP
3. Click "Add SSO profile" or configure the default profile

**Third-Party SSO Profile Settings:**

| Setting | Value |
|---------|-------|
| Set up SSO with third-party IdP | Enabled |
| Sign-in page URL | IdP's SAML SSO endpoint (e.g., `https://idp.example.com/sso/saml`) |
| Sign-out page URL | IdP's logout URL (e.g., `https://idp.example.com/slo`) |
| Change password URL | IdP's password change URL |
| Verification certificate | Upload IdP's X.509 signing certificate |
| Use a domain-specific issuer | Enabled (uses `google.com/a/{domain}` as entity ID) |

### Step 3: Assign SSO Profile to Users

SSO profiles can be applied at different scopes:

```
Organization-wide (all users)
    │
    ├── Org Unit level (specific departments)
    │   ├── Engineering OU → SSO via Okta
    │   ├── Marketing OU → SSO via Azure AD
    │   └── Contractors OU → SSO via specific IdP
    │
    └── Group level (specific security groups)
        └── VPN Users → SSO with additional MFA
```

1. Navigate to Security > Authentication > SSO with third-party IdP
2. Select the SSO profile to assign
3. Choose organizational units or groups
4. Save and wait for propagation (up to 24 hours, typically minutes)

### Step 4: Configure Network Masks (Optional)

Network masks control when SSO is enforced based on the user's IP:

- If the user's IP matches a network mask, they use Google's sign-in page
- If the user's IP does NOT match, they are redirected to the IdP

This is useful for allowing direct Google login from corporate network while enforcing SSO for external access.

### Step 5: Test SSO

1. Open an incognito browser window
2. Navigate to `https://mail.google.com/a/{your-domain}`
3. Verify redirect to IdP sign-in page
4. Authenticate at the IdP
5. Verify successful redirect back to Google Workspace
6. Test sign-out flow redirects to IdP logout page
7. Test with user not assigned in IdP (should fail)

## Validation Checklist

- [ ] IdP SAML application configured with correct ACS URL and Entity ID
- [ ] IdP signing certificate uploaded to Google Admin Console
- [ ] SSO profile assigned to target organizational units/groups
- [ ] SAML assertion includes correct NameID (email format)
- [ ] MFA enforced at IdP for all Google Workspace users
- [ ] Sign-out URL configured to terminate IdP session
- [ ] Network masks configured if internal/external access differs
- [ ] Break-glass Super Admin accounts bypass SSO (use Google auth)
- [ ] SSO tested with multiple user types (admin, standard, contractor)
- [ ] SAML response signature validated successfully
- [ ] Error handling tested (expired cert, invalid user, clock skew)

## References

- [Google Workspace SSO Configuration Guide](https://support.google.com/a/answer/12032922)
- [Set Up Custom SAML App - Google](https://support.google.com/a/answer/6087519)
- [Okta Google Workspace SAML Guide](https://saml-doc.okta.com/SAML_Docs/How-to-Enable-SAML-2.0-in-Google-Apps.html)
- [SAML 2.0 Technical Overview - OASIS](https://docs.oasis-open.org/security/saml/Post2.0/sstc-saml-tech-overview-2.0.html)
