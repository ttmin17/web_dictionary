---
slug: microsoft-agent-governance-toolkit
name: agent-governance-toolkit
tagline: AI Agent Governance Toolkit — Policy enforcement, zero-trust identity,
  execution sandboxing, and reliability engineering for autonomous AI agents.
  Cov
summary: Policy enforcement, identity, sandboxing, and SRE for autonomous AI
  agents. One pip install, any framework.
categories:
  - agent-frameworks
tags:
  - agent-framework
  - ai-agents
  - ai-safety
  - compliance
status: active
quality_percentile: 99
selection_reason: official_vendor
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: microsoft/agent-governance-toolkit
  official_vendor: true
  license: MIT
signals:
  stars: 6507
  last_commit: 2026-10-30T18:36:45Z
  stars_delta_7d: 38
  stars_growth_pct: 0.6
  trending_score: 38.22
  rank_current: 47
  rank_delta: 3
  velocity_source: snapshot_delta
  sparkline_4w:
    - 6442
    - 6469
    - 6507
language: en
needs_keys: true
prerequisites:
  - Node.js >= 18
readme_source:
  repo: microsoft/agent-governance-toolkit
  path: README.md
  branch: main
  fetched_at: 2026-11-02T09:07:21.141Z
  truncated: false
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - "@microsoft/agent-governance-copilot-cli"
  env_vars:
    - name: AZURE_CLIENT_ID
      required: true
      secret: true
      description: Required credentials for AZURE_CLIENT_ID
    - name: AZURE_TENANT_ID
      required: true
      secret: true
      description: Required credentials for AZURE_TENANT_ID
    - name: AZURE_CLIENT_SECRET
      required: true
      secret: true
      description: Required credentials for AZURE_CLIENT_SECRET
  confidence: readme
---

🌍 [English](https://github.com/microsoft/agent-governance-toolkit/blob/main/README.md) | [Español](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/i18n/README.es.md) | [日本語](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/i18n/README.ja.md) | [简体中文](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/i18n/README.zh-CN.md) | [한국어](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/i18n/README.ko.md) | [繁體中文](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/i18n/README.zh-TW.md)

![Agent Governance Toolkit](https://raw.githubusercontent.com/microsoft/agent-governance-toolkit/main/docs/assets/readme-banner.svg)

# Agent Governance Toolkit

### Ship agents to production without losing sleep

<p align="center">
  <a href="https://microsoft.github.io/agent-governance-toolkit">
    <img src="https://img.shields.io/badge/%F0%9F%93%96_Full_Documentation-microsoft.github.io%2Fagent--governance--toolkit-0078D4?style=for-the-badge&logoColor=white" alt="Full Documentation" height="40">
  </a>
</p>

<p align="center">
  <strong>
    🚀 <a href="#quick-start">Quick Start</a> ·
    📋 <a href="#specifications">Specifications</a> ·
    📦 <a href="https://pypi.org/project/agent-governance-toolkit/">PyPI</a> ·
    📝 <a href="https://github.com/microsoft/agent-governance-toolkit/blob/main/CHANGELOG.md">Changelog</a>
  </strong>
</p>

[![CI](https://github.com/microsoft/agent-governance-toolkit/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/agent-governance-toolkit/actions/workflows/ci.yml)
[![Discord](https://dcbadge.limes.pink/api/server/TxMRqY3pFr?style=flat)](https://discord.gg/TxMRqY3pFr)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://raw.githubusercontent.com/microsoft/agent-governance-toolkit/main/LICENSE)
[![PyPI version](https://img.shields.io/pypi/v/agent-governance-toolkit?label=PyPI)](https://pypi.org/project/agent-governance-toolkit/)
[![npm](https://img.shields.io/npm/v/%40microsoft/agent-governance-sdk?label=npm)](https://www.npmjs.com/package/@microsoft/agent-governance-sdk)
[![NuGet](https://img.shields.io/nuget/v/Microsoft.AgentGovernance?label=NuGet)](https://www.nuget.org/packages/Microsoft.AgentGovernance)
[![OpenSSF Scorecard](https://api.scorecard.dev/projects/github.com/microsoft/agent-governance-toolkit/badge)](https://scorecard.dev/viewer/?uri=github.com/microsoft/agent-governance-toolkit)
[![OpenSSF Best Practices](https://www.bestpractices.dev/projects/12085/badge)](https://www.bestpractices.dev/projects/12085)
[![OWASP Agentic Top 10](https://img.shields.io/badge/OWASP_Agentic_Top_10-7_Full,_3_Partial-blue)](https://raw.githubusercontent.com/microsoft/agent-governance-toolkit/main/docs/compliance/owasp-agentic-top10-architecture.md)
[![AARM Extended](https://img.shields.io/badge/AARM-Extended_(R1–R9)-brightgreen)](https://aarm.dev/builders/agent-governance-toolkit-microsoft)
[![ATF](https://img.shields.io/badge/ATF-All_5_Elements-brightgreen)](https://agentictrustframework.ai/ecosystem)

> [!IMPORTANT]
> **Public Preview** -- production-quality public preview releases. May have breaking changes before GA.

Policy enforcement, identity, sandboxing, and SRE for autonomous AI agents. One `pip install`, any framework.

---

## The Problem

Your AI agents call tools, browse the web, query databases, and delegate to other agents. Once deployed, they make decisions autonomously. You need answers to three questions:

**1. Is this action allowed?** An agent with access to `send_email` and `query_database` should not be able to `drop_table`. OAuth scopes and IAM roles control which services an agent can reach, not what it does once connected.

**2. Which agent did this?** In a multi-agent system, five agents might share a single API key. When something goes wrong, "an agent did it" is not an incident response.

**3. Can you prove what happened?** Auditors and regulators need tamper-evident records of every decision: what policy was active, what the agent requested, and why it was allowed or denied.

Prompt-level safety ("please follow the rules") is not a control surface. It is a polite request to a stochastic system. [OWASP LLM01:2025](https://genai.owasp.org/llmrisk/llm01-prompt-injection/) states this explicitly: *"it is unclear if there are fool-proof methods of prevention for prompt injection."* The published numbers back this up. [Andriushchenko et al. (ICLR 2025)](https://arxiv.org/abs/2404.02151) report **100% attack success rate** on GPT-4o, GPT-3.5, Claude 3, and Llama-3 using adaptive attacks with logprob access and suffix optimization, evaluated against the [JailbreakBench](https://arxiv.org/abs/2404.01318) benchmark (Chao et al., NeurIPS 2024). Microsoft's own [AI Red Teaming Agent](https://learn.microsoft.com/azure/ai-foundry/concepts/ai-red-teaming-agent) formalizes **Attack Success Rate (ASR)**, the rate of policy violations under adversarial input, as the canonical metric for this class of failure. [*Lessons from Red Teaming 100 Generative AI Products*](https://www.microsoft.com/en-us/security/blog/2025/01/13/3-takeaways-from-red-teaming-100-generative-ai-products/) reinforces the point: *"mitigations do not eliminate risk entirely"* and red teaming must be a continuous process because model-layer defenses are probabilistic by construction.

AGT does not try to win that fight inside the prompt. Every tool call, message send, and delegation is intercepted in deterministic application code *before* the model's intent reaches the wire. Actions the AGT kernel denies are not "unlikely." They are **structurally impossible**. That is the difference between asking an agent to behave and making it incapable of misbehaving.

---

## Quick Start

**Prerequisites:** Python 3.11+

```bash
pip install "agent-governance-toolkit[full]"
```

Use the `[full]` extra for the quick-start imports below. The base
`agent-governance-toolkit` wheel installs the compliance CLI only; the governance
modules live in the consolidated core distribution. The `agentmesh` quick-start
import remains the current wrapper API. Importing `agent_os` emits a
`DeprecationWarning` because the old `agent-os-kernel` distribution is deprecated.
Use `agent-governance-toolkit-core` (or the `[full]` extra that includes it) as
the replacement distribution. Policy-engine host code uses the ACS SDK;
`agt-policies` provides the one-way v4-to-v5 migration command. The pre-ACS
`agent_os.policies` rule model is gone, and `BREAKING_CHANGES.md` lists its
replacements.

The policy engine is published upstream as
[`agent-control-spec`](https://github.com/responsibleai/agent-control-spec).
[`agent-hooks`](https://github.com/responsibleai/agent-hooks) defines its
interception contract. AGT retains the `AgentControl` host APIs and framework
adapters in [`policy-engine/`](https://github.com/microsoft/agent-governance-toolkit/blob/main/policy-engine/), not a second decision engine.
This keeps policy evaluation in one place. AGT can adopt upstream fixes through
a dependency update while keeping its host APIs and framework integrations.
See the [ACS package guide](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/packages/agent-control-specification.md) for
the distinction between upstream packages and AGT's compatibility SDKs.

For Claude Code, add AGT as a plugin marketplace and install the governance plugin:

```text
/plugin marketplace add microsoft/agent-governance-toolkit
/plugin install agt-governance@agent-governance-toolkit
```

Govern any tool function in two lines:

```python
from agentmesh.governance import govern

safe_tool = govern(my_tool, policy="policy.yaml")   # every call checked, logged, enforced
```

On every call, `safe_tool` evaluates the YAML policy, logs the decision to an
audit trail, and raises `GovernanceDenied` when the policy blocks the action.

```yaml
# policy.yaml
apiVersion: governance.toolkit/v1
name: production-policy
default_action: allow
rules:
  - name: block-destructive
    condition: "action.type in ['drop', 'delete', 'truncate']"
    action: deny
    description: "Destructive operations require human approval"

  - name: require-approval-for-send
    condition: "action.type == 'send_email'"
    action: require_approval
    approvers: ["security-team"]
```

```python
>>> safe_tool(action="read", table="users")
{'table': 'users', 'rows': 42}

>>> safe_tool(action="drop", table="users")
GovernanceDenied: Action denied by policy rule 'block-destructive':
  Destructive operations require human approval
```

Or use the full `AgentControl` API for programmatic control:

<details>
<summary><b>AgentControl example</b></summary>

```python
from agent_control_specification import AgentControl

runtime = AgentControl.from_path(str("manifest.yaml"))
result = runtime.evaluate(
    "input",
    {
        "envelope": {"agent_id": "example-agent"},
        "input": {"body": {"action": "web_search", "params": {}}},
    },
)
print(result.verdict)
runtime.close()
```

[Run the complete ACS email-tool example](https://github.com/microsoft/agent-governance-toolkit/blob/main/examples/acs-email-tool).

</details>

<details>
<summary><b>TypeScript / .NET / Rust / Go examples</b></summary>

**TypeScript**
```typescript
import { PolicyEngine } from "@microsoft/agent-governance-sdk";

const engine = new PolicyEngine([
  { action: "web_search", effect: "allow" },
  { action: "shell_exec", effect: "deny" },
]);
engine.evaluate("web_search"); // "allow"
engine.evaluate("shell_exec"); // "deny"
```

**.NET**
```csharp
using AgentGovernance;
using AgentGovernance.Extensions.ModelContextProtocol;
using AgentGovernance.Policy;

var kernel = new GovernanceKernel(new GovernanceOptions
{
    PolicyPaths = new() { "policies/default.yaml" },
});
var result = kernel.EvaluateToolCall("did:mesh:agent-1", "web_search",
    new() { ["query"] = "latest AI news" });

// MCP server integration
builder.Services.AddMcpServer()
    .WithGovernance(options => options.PolicyPaths.Add("policies/mcp.yaml"));
```

**Rust**
```rust
use agent_governance::{AgentMeshClient, ClientOptions};

let client = AgentMeshClient::new("my-agent").unwrap();
let result = client.execute_with_governance("data.read", None);
assert!(result.allowed);
```

**Go**
```go
import agentmesh "github.com/microsoft/agent-governance-toolkit/agent-governance-golang"

client, _ := agentmesh.NewClient("my-agent",
    agentmesh.WithPolicyRules([]agentmesh.PolicyRule{
        {Action: "data.read", Effect: agentmesh.Allow},
        {Action: "*", Effect: agentmesh.Deny},
    }),
)
result := client.ExecuteWithGovernance("data.read", nil)
```

</details>

CLI tools:

```bash
agt doctor                                        # check installation
agt verify                                        # OWASP compliance check
agt verify --evidence ./agt-evidence.json --strict # fail CI on weak evidence
agt red-team scan ./prompts/ --min-grade B         # prompt injection audit
agt lint-policy policies/                          # validate policy files
```

Full walkthrough: [quickstart.md](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/quickstart.md) -- zero to governed agents in 5 minutes.
🌍 Also in: [Español](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/i18n/quickstart.es.md) | [日本語](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/i18n/quickstart.ja.md) | [简体中文](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/i18n/quickstart.zh-CN.md) | [한국어](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/i18n/quickstart.ko.md)

---

## How It Works

```
Agent ──► Policy Engine ──► Identity ──► Audit Log
            (YAML/OPA/Cedar)  (SPIFFE/DID/mTLS)  (Tamper-evident)
                 │                                      │
                 ├── Allowed ──► Tool executes           │
                 └── Denied  ──► GovernanceDenied        │
                                                        ▼
                                                 Decision Record
```

Every layer is optional. Start with `govern()` and add layers as your risk profile grows. Most teams run policy enforcement + audit logging and never need the full stack.

---

## Packages

| Package | Description |
|---------|-------------|
| [**Agent OS**](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-python/agent-os/) | Policy engine, agent lifecycle, governance gate |
| [**Agent Control Specification**](https://github.com/microsoft/agent-governance-toolkit/blob/main/policy-engine/) ([README](https://github.com/microsoft/agent-governance-toolkit/blob/main/policy-engine/README.md)) | Stateless, deterministic, fail-closed policy decision runtime (Rust core) backing the AGT policy layer |
| [**Agent Mesh**](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-python/agent-mesh/) | Agent discovery, routing, and trust mesh |
| [**Agent Runtime**](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-python/agent-runtime/) | Execution sandboxing with four privilege rings |
| [**Agent SRE**](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-python/agent-sre/) | Kill switch, SLO monitoring, chaos testing |
| [**Agent Compliance**](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-python/agent-compliance/) | OWASP verification, policy linting, integrity checks |
| [**Agent Marketplace**](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-python/agent-marketplace/) | Plugin governance and trust scoring |
| [**Agent Lightning**](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-python/agent-lightning/) | RL training governance with violation penalties |
| [**Agent Hypervisor**](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-python/agent-hypervisor/) | Execution audit, delta engine, in-memory commitment tracking, command denylist enforcement |

### Additional Capabilities

| Capability | Description |
|---|---|
| **MCP Security Gateway** | Tool poisoning detection, drift monitoring, typosquatting, hidden instruction scanning ([Spec](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/specs/MCP-SECURITY-GATEWAY-1.0.md)) |
| **Shadow AI Discovery** | Find unregistered agents across processes, configs, and repos ([Discovery](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-python/agent-discovery/)) |
| **Governance Dashboard** | Real-time fleet visibility for health, trust, and compliance ([Dashboard](https://github.com/microsoft/agent-governance-toolkit/blob/main/examples/demos/governance-dashboard/)) |
| **PromptDefense Evaluator** | 12-vector prompt injection audit ([Evaluator](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-python/agent-compliance/src/agent_compliance/prompt_defense.py)) |
| **Contributor Reputation** | PR/issue author screening for social engineering. Reusable GitHub Action ([Action](https://github.com/microsoft/agent-governance-toolkit/blob/main/.github/actions/contributor-check/)) |

---

## Install

| Language | Package | Command |
|----------|---------|---------|
| **Python** | [`agent-governance-toolkit`](https://pypi.org/project/agent-governance-toolkit/) | `pip install "agent-governance-toolkit[full]"` |
| **TypeScript** | [`@microsoft/agent-governance-sdk`](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-typescript/) | `npm install @microsoft/agent-governance-sdk` |
| **Copilot CLI** | [`@microsoft/agent-governance-copilot-cli`](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-copilot-cli/) | `npx @microsoft/agent-governance-copilot-cli install` |
| **Claude Code** | [`@microsoft/agent-governance-claude-code`](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-claude-code/) | `claude --plugin-dir ./agent-governance-claude-code` |
| **Codex CLI** | [`@microsoft/agent-governance-codex-cli`](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-codex-cli/) | `node agent-governance-codex-cli/bin/agt-codex.mjs install` |
| **OpenCode** | [`@microsoft/agent-governance-opencode`](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-opencode/) | `npm install @microsoft/agent-governance-opencode` |
| **.NET** | [`Microsoft.AgentGovernance`](https://www.nuget.org/packages/Microsoft.AgentGovernance) | `dotnet add package Microsoft.AgentGovernance` |
| **.NET MCP** | `Microsoft.AgentGovernance.Extensions.ModelContextProtocol` | `dotnet add package Microsoft.AgentGovernance.Extensions.ModelContextProtocol` |
| **Rust** | [`agent-governance`](https://crates.io/crates/agent-governance) | `cargo add agent-governance` |
| **Go** | [`agent-governance-toolkit`](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-golang/) | `go get github.com/microsoft/agent-governance-toolkit/agent-governance-golang` |

All five language SDKs implement core governance (policy, identity, trust, audit). Python has the full stack. Copilot CLI and Claude Code are first-party developer surfaces built on the TypeScript SDK.
See **[Language Package Matrix](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/PACKAGE-FEATURE-MATRIX.md)** for detailed per-language coverage.

<details>
<summary><b>Python distributions (v4.1.0 — consolidated)</b></summary>

As of v4.1.0, 45 packages have been consolidated into 5 top-level distributions:

| Distribution | PyPI | What's included |
|--------------|------|-----------------|
| `agent-governance-toolkit-core` | [`agent-governance-toolkit-core`](https://pypi.org/project/agent-governance-toolkit-core/) | Policy engine, capability model, audit, MCP gateway, zero-trust identity, trust scoring, A2A/MCP/IATP bridges |
| `agent-governance-toolkit-runtime` | [`agent-governance-toolkit-runtime`](https://pypi.org/project/agent-governance-toolkit-runtime/) | Privilege rings, saga orchestration, termination control, execution plan validation, command denylist enforcement |
| `agent-governance-toolkit-sre` | [`agent-governance-toolkit-sre`](https://pypi.org/project/agent-governance-toolkit-sre/) | SLOs, error budgets, chaos engineering, circuit breakers |
| `agent-governance-toolkit-cli` | [`agent-governance-toolkit-cli`](https://pypi.org/project/agent-governance-toolkit-cli/) | `agt` CLI, OWASP verification, integrity checks, policy linting |
| `agent-governance-toolkit[full]` | [`agent-governance-toolkit`](https://pypi.org/project/agent-governance-toolkit/) | Meta-package installing all of the above |

Previous package names (`agent-os-kernel`, `agentmesh-platform`, `agentmesh-runtime`, `agent-sre`, `agent-discovery`, `agent-hypervisor`, `agentmesh-marketplace`, `agentmesh-lightning`) remain installable as stub packages that redirect to the consolidated distributions.

</details>

### Prerequisites

- **Python**: 3.10+
- **Node.js**: 18+ / npm 9+ (TypeScript SDK)
- **.NET**: 8+
- **Go**: 1.25+
- **Rust**: 1.70+
- **Optional**: `AZURE_CLIENT_ID`, `AZURE_TENANT_ID`, `AZURE_CLIENT_SECRET` for Azure-integrated features

---

## Framework Support

| Framework | Integration |
|-----------|-------------|
| [**Microsoft Agent Framework**](https://github.com/microsoft/agent-framework) | Native Middleware |
| [**Semantic Kernel**](https://github.com/microsoft/semantic-kernel) | Native (.NET + Python) |
| [AutoGen](https://github.com/microsoft/autogen) | Adapter |
| [LangGraph](https://github.com/langchain-ai/langgraph) / [LangChain](https://github.com/langchain-ai/langchain) | Adapter |
| [CrewAI](https://github.com/crewAIInc/crewAI) | Adapter |
| [OpenAI Agents SDK](https://github.com/openai/openai-agents-python) | Middleware |
| Claude Code | Governance plugin package |
| [Google ADK](https://github.com/google/adk-python) | Adapter |
| [LlamaIndex](https://github.com/run-llama/llama_index) | Middleware |
| [Haystack](https://github.com/deepset-ai/haystack) | Pipeline |
| [Mastra](https://github.com/mastra-ai/mastra) | Adapter |
| [Dify](https://github.com/langgenius/dify) | Plugin |
| [Azure AI Foundry](https://learn.microsoft.com/azure/ai-studio/) | Deployment Guide |
| GitHub Copilot CLI | Governance installer |

Full list: [Framework Integrations](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-python/agentmesh-integrations/) · [Quickstart Examples](https://github.com/microsoft/agent-governance-toolkit/blob/main/examples/quickstart/)

---

## Examples

| Example | Framework | What it demonstrates |
|---------|-----------|----------------------|
| [acs-email-tool](https://github.com/microsoft/agent-governance-toolkit/blob/main/examples/acs-email-tool) | Framework-neutral ACS host | Snapshot, verdict, transform, deny, and host enforcement |
| [acs-atr-annotator](https://github.com/microsoft/agent-governance-toolkit/blob/main/examples/acs-atr-annotator) | ACS custom policy | Independent threat-rule annotations with fail-closed decisions |
| [openai-agents-governed](https://github.com/microsoft/agent-governance-toolkit/blob/main/examples/openai-agents-governed) | OpenAI Agents SDK | Policy-gated tool calls with trust tiers |
| [crewai-governed](https://github.com/microsoft/agent-governance-toolkit/blob/main/examples/crewai-governed) | CrewAI | Multi-agent governance with role-based policies |
| [smolagents-governed](https://github.com/microsoft/agent-governance-toolkit/blob/main/examples/smolagents-governed) | HuggingFace smolagents | Lightweight agent governance |
| [maf-integration](https://github.com/microsoft/agent-governance-toolkit/blob/main/examples/maf-integration) | MAF | Microsoft Agent Framework integration |
| [mcp-trust-verified-server](https://github.com/microsoft/agent-governance-toolkit/blob/main/examples/mcp-trust-verified-server) | MCP | Trust-verified MCP server implementation |
| [governance-dashboard](https://github.com/microsoft/agent-governance-toolkit/blob/main/examples/demos/governance-dashboard) | Streamlit | Real-time fleet visibility dashboard |
| [k8s-agent-sandbox-governed](https://github.com/microsoft/agent-governance-toolkit/blob/main/examples/k8s-agent-sandbox-governed) | kubernetes-sigs/agent-sandbox | Pre-dispatch command policy on top of Kubernetes-native execution isolation |

---

## Specifications

Every major component has a formal RFC 2119 specification with conformance tests. These specs define the behavioral contract: what implementations MUST, SHOULD, and MAY do.

| Specification | Scope | Tests |
|---|---|---|
| [Agent OS Policy Engine](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/specs/AGENT-OS-POLICY-ENGINE-1.0.md) | Native runtime integration and fail-closed semantics | -- |
| [Agent Control Specification](https://github.com/microsoft/agent-governance-toolkit/blob/main/policy-engine/spec/SPECIFICATION.md) | Stateless intervention-point policy runtime, verdicts, transform, fail-closed | -- |
| [AgentMesh Identity and Trust](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/specs/AGENTMESH-IDENTITY-TRUST-1.0.md) | Credentials, trust scoring, delegation chains | 135 |
| [Agent Hypervisor Execution Control](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/specs/AGENT-HYPERVISOR-EXECUTION-CONTROL-1.0.md) | Privilege rings, saga orchestration, kill switch | 80 |
| [AgentMesh Trust and Coordination](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/specs/AGENTMESH-TRUST-COORDINATION-1.0.md) | Peer trust negotiation, mesh-wide policy | 62 |
| [Agent SRE Governance](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/specs/AGENT-SRE-GOVERNANCE-1.0.md) | SLOs, error budgets, chaos, circuit breakers | 111 |
| [MCP Security Gateway](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/specs/MCP-SECURITY-GATEWAY-1.0.md) | Tool poisoning, drift detection, hidden instructions | 127 |
| [Agent Lightning Fast-Path](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/specs/AGENT-LIGHTNING-FAST-PATH-1.0.md) | RL training governance, violation penalties | 100 |
| [Framework Adapter Contract](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/specs/FRAMEWORK-ADAPTER-CONTRACT-1.0.md) | Native framework mediation contract | -- |
| [Audit and Compliance](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/specs/AUDIT-COMPLIANCE-1.0.md) | Merkle audit, compliance mapping, Decision BOM | 157 |
| [AgentMesh Wire Protocol](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/specs/AGENTMESH-WIRE-1.0.md) | Message format, routing, serialization | -- |

**992 conformance tests** ensure code stays aligned to specs. [29 Architecture Decision Records](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/adr/) document why.

---

## Standards Compliance

| Standard | Coverage |
|----------|----------|
| [OWASP Agentic AI Top 10](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/compliance/owasp-agentic-top10-architecture.md) | All ASI risk categories mapped with deterministic controls |
| [NIST AI RMF 1.0](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/compliance/nist-ai-rmf-alignment.md) | Full GOVERN, MAP, MEASURE, MANAGE alignment |
| [EU AI Act](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/compliance/) | Compliance mapping with automated evidence |
| [SOC 2](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/compliance/soc2-mapping.md) | Control mapping with audit trail export |
| [AARM Extended](https://aarm.dev/builders/agent-governance-toolkit-microsoft) | All R1–R9 requirements satisfied; verified Jun 14, 2026 |
| [ATF](https://agentictrustframework.ai/ecosystem) | All five elements mapped: Agent Mesh (identity), Agent OS (policy), Agent Compliance (governance), Agent Runtime (sandboxing), Agent SRE (incident response) |

---

## Security

AGT enforces governance at the application middleware layer, not at the OS kernel level. The policy engine and agents share the same process boundary.

**Production recommendation:** Run each agent in a separate container for OS-level isolation. See [Architecture: Security Boundaries](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/ARCHITECTURE.md).

| Tool | Coverage |
|------|----------|
| CodeQL | Python + TypeScript SAST |
| Gitleaks | Secret scanning on PR/push/weekly |
| ClusterFuzzLite | 7 fuzz targets (policy, injection, MCP, sandbox, trust) |
| Dependabot | 13 ecosystems |
| OpenSSF Scorecard | Weekly scoring + SARIF upload |

See [Known Limitations](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/LIMITATIONS.md) for honest design boundaries and recommended layered defense.

---

## Documentation

| Category | Links |
|----------|-------|
| **Getting Started** | [Quick Start](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/quickstart.md) · [Tutorials](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/tutorials/) (60+) · [FAQ](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/FAQ.md) |
| **Architecture** | [System Design](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/ARCHITECTURE.md) · [Threat Model](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/security/threat-model.md) · [ADRs](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/adr/) (29) |
| **Specifications** | [All Specs](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/specs/) (10 formal specs, 992 conformance tests) |
| **API Reference** | [Agent OS](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-python/agent-os/README.md) · [AgentMesh](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-python/agent-mesh/README.md) · [Agent SRE](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-python/agent-sre/README.md) |
| **Compliance** | [OWASP](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/compliance/owasp-agentic-top10-architecture.md) · [EU AI Act](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/compliance/) · [NIST AI RMF](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/compliance/nist-ai-rmf-alignment.md) · [SOC 2](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/compliance/soc2-mapping.md) · [AARM Extended](https://aarm.dev/builders/agent-governance-toolkit-microsoft) · [ATF](https://agentictrustframework.ai/ecosystem) |
| **Deployment** | [Azure](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/deployment/README.md) · [AWS](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/deployment/README.md) · [GCP](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/deployment/README.md) · [Docker Compose](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/deployment/README.md) |
| **Extensions** | [VS Code](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-typescript/agent-os-vscode/) · [Framework Integrations](https://github.com/microsoft/agent-governance-toolkit/blob/main/agent-governance-python/agentmesh-integrations/) |

---

## Contributing

[Contributing Guide](https://github.com/microsoft/agent-governance-toolkit/blob/main/CONTRIBUTING.md) · [Community](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/COMMUNITY.md) · [Discord](https://discord.gg/TxMRqY3pFr) · [Security Policy](https://github.com/microsoft/agent-governance-toolkit/blob/main/SECURITY.md) · [Changelog](https://github.com/microsoft/agent-governance-toolkit/blob/main/CHANGELOG.md)

**Using AGT?** Add your organization to [ADOPTERS.md](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/ADOPTERS.md).

## Governance

| Document | Purpose |
|----------|---------|
| [GOVERNANCE.md](https://github.com/microsoft/agent-governance-toolkit/blob/main/GOVERNANCE.md) | Decision-making, roles, contributor ladder |
| [CHARTER.md](https://github.com/microsoft/agent-governance-toolkit/blob/main/docs/CHARTER.md) | Technical charter (LF Projects format) |
| [MAINTAINERS.md](https://github.com/microsoft/agent-governance-toolkit/blob/main/MAINTAINERS.md) | Maintainers and organizations |
| [SECURITY.md](https://github.com/microsoft/agent-governance-toolkit/blob/main/SECURITY.md) | Vulnerability reporting and response SLAs |
| [CODE_OF_CONDUCT.md](https://github.com/microsoft/agent-governance-toolkit/blob/main/CODE_OF_CONDUCT.md) | Microsoft Open Source Code of Conduct |
| [ANTITRUST.md](https://github.com/microsoft/agent-governance-toolkit/blob/main/ANTITRUST.md) | Competition law guidelines for participants |
| [TRADEMARKS.md](https://github.com/microsoft/agent-governance-toolkit/blob/main/TRADEMARKS.md) | Trademark usage policy |

## Important Notes

If you use the Agent Governance Toolkit to build applications that operate with third-party agent frameworks or services, you do so at your own risk. We recommend reviewing all data being shared with third-party services and being cognizant of third-party practices for retention and location of data.

## Official Sources

The only official sources for the Agent Governance Toolkit are:

| Resource | Location |
|----------|----------|
| **Source code** | [github.com/microsoft/agent-governance-toolkit](https://github.com/microsoft/agent-governance-toolkit) |
| **Documentation** | [microsoft.github.io/agent-governance-toolkit](https://microsoft.github.io/agent-governance-toolkit/) |
| **Python packages** | `https://pypi.org/user/agentgovtoolkit/` |
| **npm packages** | `@microsoft/agent-governance-sdk` on [npmjs.com](https://www.npmjs.com/) |
| **NuGet packages** | `Microsoft.AgentGovernance.*` on [nuget.org](https://www.nuget.org/) |
| **Rust crates** | `agent-governance`, `agent-governance-mcp` on [crates.io](https://crates.io/) |

The project team does not maintain or endorse any third-party websites,
packages, or documentation sites claiming to be official. If you encounter a
suspicious site or package using the Agent Governance Toolkit name, please
report it through the channels described in [SECURITY.md](https://github.com/microsoft/agent-governance-toolkit/blob/main/SECURITY.md).

## License

This project is licensed under the [MIT License](https://github.com/microsoft/agent-governance-toolkit/blob/main/LICENSE).

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft
trademarks or logos is subject to and must follow
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
