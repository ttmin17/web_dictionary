---
slug: wshobson-agents-plugins-payment-processing-skills-paypal-integration
name: paypal-integration
tagline: Integrate PayPal payment processing with support for express checkout,
  subscriptions, and refund management. Use when implementing PayPal payments,
  pr
summary: "- Integrating PayPal as a payment option - Implementing express
  checkout flows - Setting up recurring billing with PayPal - Processing refunds
  and payment disputes - Handling PayPal webhooks (IPN) - Supporting interna..."
categories:
  - coding-agents
tags:
  - agent-skills
  - agentic-ai
  - ai-agents
  - anthropic
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: wshobson/agents
  subpath: plugins/payment-processing/skills/paypal-integration
  official_vendor: false
  license: MIT
signals:
  stars: 41725
  last_commit: 2026-10-26T01:08:14Z
  stars_delta_7d: 673
  stars_growth_pct: 1.6
  trending_score: 684.03
  velocity_source: snapshot_delta
  sparkline_4w:
    - 40271
    - 40590
    - 41052
    - 41725
language: en
needs_keys: false
prerequisites: []
readme_source:
  repo: wshobson/agents
  path: plugins/payment-processing/skills/paypal-integration/SKILL.md
  branch: main
  fetched_at: 2026-10-26T07:42:26.201Z
  truncated: false
type: agent_skill
skill:
  skill_name: paypal-integration
  description: Integrate PayPal payment processing with support for express
    checkout, subscriptions, and refund management. Use when implementing PayPal
    payments, processing online transactions, or building e-commerce checkout
    flows.
  folder_path: plugins/payment-processing/skills/paypal-integration
  extra_files:
    - references/details.md
  pack_total_skills: 185
  is_pack_primary: false
  clients:
    - claude-code
    - codex
    - antigravity
  pack_slug: wshobson-agents
---

# PayPal Integration
Master PayPal payment integration including Express Checkout, IPN handling, recurring billing, and refund workflows.

## When to Use This Skill

- Integrating PayPal as a payment option
- Implementing express checkout flows
- Setting up recurring billing with PayPal
- Processing refunds and payment disputes
- Handling PayPal webhooks (IPN)
- Supporting international payments
- Implementing PayPal subscriptions

## Core Concepts

### 1. Payment Products

**PayPal Checkout**

- One-time payments
- Express checkout experience
- Guest and PayPal account payments

**PayPal Subscriptions**

- Recurring billing
- Subscription plans
- Automatic renewals

**PayPal Payouts**

- Send money to multiple recipients
- Marketplace and platform payments

### 2. Integration Methods

**Client-Side (JavaScript SDK)**

- Smart Payment Buttons
- Hosted payment flow
- Minimal backend code

**Server-Side (REST API)**

- Full control over payment flow
- Custom checkout UI
- Advanced features

### 3. IPN (Instant Payment Notification)

- Webhook-like payment notifications
- Asynchronous payment updates
- Verification required

## Quick Start

```javascript
// Frontend - PayPal Smart Buttons
<div id="paypal-button-container"></div>



```

```python
# Backend - Verify and capture order
from paypalrestsdk import Payment
import paypalrestsdk

paypalrestsdk.configure({
    "mode": "sandbox",  # or "live"
    "client_id": "YOUR_CLIENT_ID",
    "client_secret": "YOUR_CLIENT_SECRET"
})

def capture_paypal_order(order_id):
    """Capture a PayPal order."""
    payment = Payment.find(order_id)

    if payment.execute({"payer_id": payment.payer.payer_info.payer_id}):
        # Payment successful
        return {
            'status': 'success',
            'transaction_id': payment.id,
            'amount': payment.transactions[0].amount.total
        }
    else:
        # Payment failed
        return {
            'status': 'failed',
            'error': payment.error
        }
```

## Detailed patterns and worked examples

Detailed pattern documentation lives in `references/details.md`. Read that file when the navigation tier above is insufficient.

## Testing

```python
# Use sandbox credentials
SANDBOX_CLIENT_ID = "..."
SANDBOX_SECRET = "..."

# Test accounts
# Create test buyer and seller accounts at developer.paypal.com

def test_payment_flow():
    """Test complete payment flow."""
    client = PayPalClient(SANDBOX_CLIENT_ID, SANDBOX_SECRET, mode='sandbox')

    # Create order
    order = client.create_order(10.00)
    assert 'id' in order

    # Get approval URL
    approval_url = next((link['href'] for link in order['links'] if link['rel'] == 'approve'), None)
    assert approval_url is not None

    # After approval (manual step with test account)
    # Capture order
    # captured = client.capture_order(order['id'])
    # assert captured['status'] == 'COMPLETED'
```
