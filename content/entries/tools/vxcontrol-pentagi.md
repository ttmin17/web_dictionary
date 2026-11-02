---
slug: vxcontrol-pentagi
name: pentagi
tagline: Fully autonomous AI Agents system capable of performing complex
  penetration testing tasks
summary: "- Overview - Features - Architecture - Agent Supervision - Quick Start
  - Agent Docker Access - Running Several Instances - How to Use PentAGI After
  Login - API Access - LLM Provider Configuration - Azure OpenAI - Olla..."
categories:
  - agent-frameworks
tags:
  - ai-agents
  - ai-security-tool
  - anthropic
  - autonomous-agents
status: active
quality_percentile: 81
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: vxcontrol/pentagi
  official_vendor: false
  license: MIT
signals:
  stars: 32985
  last_commit: 2026-10-22T23:26:13Z
  stars_delta_7d: 539
  stars_growth_pct: 1.7
  trending_score: 547.95
  rank_current: 19
  rank_delta: -9
  velocity_source: snapshot_delta
  sparkline_4w:
    - 31207
    - 32446
    - 32985
language: en
needs_keys: false
prerequisites:
  - docker
readme_source:
  repo: vxcontrol/pentagi
  path: README.md
  branch: main
  fetched_at: 2026-11-02T09:06:58.148Z
  truncated: true
type: agent_tool
tool:
  subcategory: agent_framework
  install_command: git clone https://github.com/vxcontrol/pentagi.git
  runtime: docker
  execution_mode: hybrid
  has_mcp_support: false
---

# PentAGI
<div align="center" style="font-size: 1.5em; margin: 20px 0;">
    <strong>P</strong>enetration testing <strong>A</strong>rtificial <strong>G</strong>eneral <strong>I</strong>ntelligence
</div>
<br>
<div align="center">

> **Join the Community!** Connect with security researchers, AI enthusiasts, and fellow ethical hackers. Get support, share insights, and stay updated with the latest PentAGI developments.

[![Discord](https://img.shields.io/badge/Discord-7289DA?logo=discord&logoColor=white)](https://discord.gg/2xrMh7qX6m)⠀[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?logo=telegram&logoColor=white)](https://t.me/+Ka9i6CNwe71hMWQy)

<a href="https://trendshift.io/repositories/15161?utm_source=repository-badge&amp;utm_medium=badge&amp;utm_campaign=badge-repository-15161" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/repositories/15161" alt="vxcontrol%2Fpentagi | Trendshift" width="250" height="55"/></a> <a href="https://trendshift.io/repositories/15161?utm_source=trendshift-badge&amp;utm_medium=badge&amp;utm_campaign=badge-trendshift-15161" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/trendshift/repositories/15161/daily" alt="vxcontrol%2Fpentagi | Trendshift" width="250" height="55"/></a>

<a href="https://trendshift.io/repositories/15161?utm_source=trendshift-badge&amp;utm_medium=badge&amp;utm_campaign=badge-trendshift-15161" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/trendshift/repositories/15161/daily?language=Go" alt="vxcontrol%2Fpentagi | Trendshift" width="250" height="55"/></a> <a href="https://trendshift.io/repositories/15161?utm_source=trendshift-badge&amp;utm_medium=badge&amp;utm_campaign=badge-trendshift-15161" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/trendshift/repositories/15161/weekly?language=Go" alt="vxcontrol%2Fpentagi | Trendshift" width="250" height="55"/></a> <a href="https://trendshift.io/repositories/15161?utm_source=trendshift-badge&amp;utm_medium=badge&amp;utm_campaign=badge-trendshift-15161" target="_blank" rel="noopener noreferrer"><img src="https://trendshift.io/api/badge/trendshift/repositories/15161/monthly?language=Go" alt="vxcontrol%2Fpentagi | Trendshift" width="250" height="55"/></a>

</div>

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
  - [Agent Supervision](#advanced-agent-supervision)
- [Quick Start](#quick-start)
  - [Agent Docker Access](#giving-agents-docker-without-giving-away-the-host)
  - [Running Several Instances](#running-several-instances-tenant_id)
- [How to Use PentAGI After Login](#how-to-use-pentagi-after-login)
- [API Access](#api-access)
  - [LLM Provider Configuration](#custom-llm-provider-configuration)
    - [Azure OpenAI](#using-azure-openai)
    - [Ollama](#ollama-provider-configuration)
    - [OpenAI](#openai-provider-configuration)
    - [Anthropic](#anthropic-provider-configuration)
    - [Google AI (Gemini)](#google-ai-gemini-provider-configuration)
    - [AWS Bedrock](#aws-bedrock-provider-configuration)
    - [DeepSeek](#deepseek-provider-configuration)
    - [GLM](#glm-provider-configuration)
    - [Kimi](#kimi-provider-configuration)
    - [Qwen](#qwen-provider-configuration)
    - [MiniMax](#minimax-provider-configuration)
    - [Mistral](#mistral-provider-configuration)
    - [xAI (Grok)](#xai-grok-provider-configuration)
- [Advanced Setup](#advanced-setup)
  - [Langfuse Integration](#langfuse-integration)
  - [Monitoring and Observability](#monitoring-and-observability)
  - [Knowledge Graph (Graphiti)](#knowledge-graph-integration-graphiti)
  - [OAuth Integration](#github-and-google-oauth-integration)
  - [Docker Image Configuration](#docker-image-configuration)
- [Development](#development)
- [Testing LLM Agents](#testing-llm-agents)
- [Embedding Configuration and Testing](#embedding-configuration-and-testing)
- [Function Testing with ftester](#function-testing-with-ftester)
- [Building](#building)
- [Credits](#credits)
- [License](#license)

## Overview

PentAGI is an open-source, self-hosted multi-agent system for autonomous penetration testing. You describe a target and a goal in plain language; a team of specialized AI agents plans the work, runs 20+ professional tools such as nmap, Metasploit and sqlmap inside an isolated Docker sandbox, remembers what it learned and hands you a report.

- **Who it is for.** Security engineers, penetration testers, researchers and red teams who want an autonomous assistant on their own infrastructure, for authorized testing only.
- **What sets it apart.** It runs on your own servers with the model of your choice: 10+ cloud LLM providers, your own OpenAI-compatible gateway, or local models through Ollama or vLLM. Results and successful approaches are kept in PostgreSQL with pgvector for later flows, an optional Neo4j knowledge graph tracks hosts, services and findings, execution monitoring and task planning help smaller open models, and REST and GraphQL APIs automate it. PentAGI Enterprise adds agent profiles, plugins and MCP servers, customer-ready reports and a real-time attack-chain view.
- **How to install.** An interactive installer for Linux, macOS and Windows sets PentAGI up with Docker Compose — see [Quick Start](#quick-start).

PentAGI is developed by [VXControl](https://vxcontrol.com), a security engineering company based in Dubai.

You can watch the video **PentAGI overview**:
[![PentAGI Overview Video](https://github.com/user-attachments/assets/0828dc3e-15f1-4a1d-858e-9696a146e478)](https://youtu.be/R70x5Ddzs1o)

## Features

- Secure & Isolated. All operations are performed in a sandboxed Docker environment with complete isolation.
- Fully Autonomous. AI-powered agent that automatically determines and executes penetration testing steps with optional execution monitoring and intelligent task planning for enhanced reliability.
- Professional Pentesting Tools. Built-in suite of 20+ professional security tools including nmap, metasploit, sqlmap, and more.
- Smart Memory System. Long-term storage of research results and successful approaches for future use.
- Optional Knowledge Graph Integration. Graphiti-powered knowledge graph using Neo4j for semantic relationship tracking and advanced context understanding.
- Web Intelligence. Built-in browser via [scraper](https://hub.docker.com/r/vxcontrol/scraper) for gathering latest information from web sources.
- External Search Systems. Integration with advanced search APIs including [Tavily](https://tavily.com), [Firecrawl](https://www.firecrawl.dev), [Traversaal](https://traversaal.ai), [Perplexity](https://www.perplexity.ai), [DuckDuckGo](https://duckduckgo.com/), [Google Custom Search](https://programmablesearchengine.google.com/), [Sploitus Search](https://sploitus.com) and [SearXNG](https://searxng.org) for comprehensive information gathering.
- Team of Specialists. Delegation system with specialized AI agents for research, development, and infrastructure tasks, enhanced with optional execution monitoring and intelligent task planning for optimal performance with smaller models.
- Comprehensive Monitoring. Detailed logging and integration with Grafana/Prometheus for real-time system observation.
- Detailed Reporting. Generation of thorough vulnerability reports with exploitation guides.
- Smart Container Management. Automatic Docker image selection based on specific task requirements.
- Modern Interface. Clean and intuitive web UI for system management and monitoring.
- Comprehensive APIs. Full-featured REST and GraphQL APIs with Bearer token authentication for automation and integration.
- Persistent Storage. All commands and outputs are stored in PostgreSQL with [pgvector](https://hub.docker.com/r/vxcontrol/pgvector) extension.
- Scalable Architecture. Microservices-based design supporting horizontal scaling.
- Self-Hosted Solution. Complete control over your deployment and data.
- Flexible Authentication. Support for 10+ LLM providers ([OpenAI](https://platform.openai.com/), [Anthropic](https://www.anthropic.com/), [Google AI/Gemini](https://ai.google.dev/), [AWS Bedrock](https://aws.amazon.com/bedrock/), [Ollama](https://ollama.com/), [DeepSeek](https://www.deepseek.com/en/), [GLM](https://z.ai/), [Kimi](https://platform.moonshot.ai/), [Qwen](https://www.alibabacloud.com/en/), [MiniMax](https://www.minimax.io/), [Mistral](https://mistral.ai/), [xAI](https://x.ai/), Custom for any OpenAI-compatible endpoint including [Azure OpenAI](#using-azure-openai)) plus aggregators ([OpenRouter](https://openrouter.ai/), [DeepInfra](https://deepinfra.com/), [Atlas Cloud](https://www.atlascloud.ai/), [OpenCode Go plan](https://opencode.ai/en/go)). For production local deployments, see our [vLLM + Qwen3.5-27B-FP8 guide](https://github.com/vxcontrol/pentagi/blob/main/examples/guides/vllm-qwen35-27b-fp8.md).
- API Token Authentication. Secure Bearer token system for programmatic access to REST and GraphQL APIs.
- Quick Deployment. Easy setup through [Docker Compose](https://docs.docker.com/compose/) with comprehensive environment configuration.

### Current Capability Boundaries

- PentAGI today is an autonomous and assistant-guided penetration testing platform, not a CALDERA-style Breach and Attack Simulation (BAS) or adversary emulation product with predefined campaigns or attack plans.
- BAS-like agent-authored attack scripts should be treated as conceptual or future work, not as a feature that is implemented today.
- The current flow report UI supports web view, copy to clipboard, Markdown download, and PDF download. JSON flow-report export is not documented as a supported output format today.
- Provider flexibility is available today through built-in providers and custom/OpenAI-compatible endpoints. See [Custom LLM Provider Configuration](#custom-llm-provider-configuration) and the [vLLM + Qwen3.5-27B-FP8 guide](https://github.com/vxcontrol/pentagi/blob/main/examples/guides/vllm-qwen35-27b-fp8.md).

## Architecture

### System Context

```mermaid
flowchart TB
    classDef person fill:#08427B,stroke:#073B6F,color:#fff
    classDef system fill:#1168BD,stroke:#0B4884,color:#fff
    classDef external fill:#666666,stroke:#0B4884,color:#fff

    pentester["👤 Security Engineer
    (User of the system)"]

    pentagi["✨ PentAGI
    (Autonomous penetration testing system)"]

    target["🎯 target-system
    (System under test)"]
    llm["🧠 llm-provider
    (OpenAI/Anthropic/Ollama/Bedrock/Gemini/Custom)"]
    search["🔍 search-systems
    (Google/DuckDuckGo/Tavily/Firecrawl/Traversaal/Perplexity/Sploitus/SearXNG)"]
    langfuse["📊 langfuse-ui
    (LLM Observability Dashboard)"]
    grafana["📈 grafana
    (System Monitoring Dashboard)"]

    pentester --> |Uses HTTPS| pentagi
    pentester --> |Monitors AI HTTPS| langfuse
    pentester --> |Monitors System HTTPS| grafana
    pentagi --> |Tests Various protocols| target
    pentagi --> |Queries HTTPS| llm
    pentagi --> |Searches HTTPS| search
    pentagi --> |Reports HTTPS| langfuse
    pentagi --> |Reports HTTPS| grafana

    class pentester person
    class pentagi system
    class target,llm,search,langfuse,grafana external

    linkStyle default stroke:#ffffff,color:#ffffff
```

<details>
<summary><b>Container Architecture</b> (click to expand)</summary>

```mermaid
graph TB
    subgraph Core Services
        UI[Frontend UI<br/>React + TypeScript]
        API[Backend API<br/>Go + GraphQL]
        DB[(Vector Store<br/>PostgreSQL + pgvector)]
        MQ[Task Queue<br/>Async Processing]
        Agent[AI Agents<br/>Multi-Agent System]
    end

    subgraph Knowledge Graph
        Graphiti[Graphiti<br/>Knowledge Graph API]
        Neo4j[(Neo4j<br/>Graph Database)]
    end

    subgraph Monitoring
        Grafana[Grafana<br/>Dashboards]
        VictoriaMetrics[VictoriaMetrics<br/>Time-series DB]
        Jaeger[Jaeger<br/>Distributed Tracing]
        Loki[Loki<br/>Log Aggregation]
        OTEL[OpenTelemetry<br/>Data Collection]
    end

    subgraph Analytics
        Langfuse[Langfuse<br/>LLM Analytics]
        ClickHouse[ClickHouse<br/>Analytics DB]
        Redis[Redis<br/>Cache + Rate Limiter]
        MinIO[MinIO<br/>S3 Storage]
    end

    subgraph Security Tools
        Scraper[Web Scraper<br/>Isolated Browser]
        PenTest[Security Tools<br/>20+ Pro Tools<br/>Sandboxed Execution]
    end

    UI --> |HTTP/WS| API
    API --> |SQL| DB
    API --> |Events| MQ
    MQ --> |Tasks| Agent
    Agent --> |Commands| PenTest
    Agent --> |Queries| DB
    Agent --> |Knowledge| Graphiti
    Graphiti --> |Graph| Neo4j

    API --> |Telemetry| OTEL
    OTEL --> |Metrics| VictoriaMetrics
    OTEL --> |Traces| Jaeger
    OTEL --> |Logs| Loki

    Grafana --> |Query| VictoriaMetrics
    Grafana --> |Query| Jaeger
    Grafana --> |Query| Loki

    API --> |Analytics| Langfuse
    Langfuse --> |Store| ClickHouse
    Langfuse --> |Cache| Redis
    Langfuse --> |Files| MinIO

    classDef core fill:#f9f,stroke:#333,stroke-width:2px,color:#000
    classDef knowledge fill:#ffa,stroke:#333,stroke-width:2px,color:#000
    classDef monitoring fill:#bbf,stroke:#333,stroke-width:2px,color:#000
    classDef analytics fill:#bfb,stroke:#333,stroke-width:2px,color:#000
    classDef tools fill:#fbb,stroke:#333,stroke-width:2px,color:#000

    class UI,API,DB,MQ,Agent core
    class Graphiti,Neo4j knowledge
    class Grafana,VictoriaMetrics,Jaeger,Loki,OTEL monitoring
    class Langfuse,ClickHouse,Redis,MinIO analytics
    class Scraper,PenTest tools
```

</details>

<details>
<summary><b>Entity Relationship</b> (click to expand)</summary>

```mermaid
erDiagram
    Flow ||--o{ Task : contains
    Task ||--o{ SubTask : contains
    SubTask ||--o{ Action : contains
    Action ||--o{ Artifact : produces
    Action ||--o{ Memory : stores

    Flow {
        string id PK
        string name "Flow name"
        string description "Flow description"
        string status "active/completed/failed"
        json parameters "Flow parameters"
        timestamp created_at
        timestamp updated_at
    }

    Task {
        string id PK
        string flow_id FK
        string name "Task name"
        string description "Task description"
        string status "pending/running/done/failed"
        json result "Task results"
        timestamp created_at
        timestamp updated_at
    }

    SubTask {
        string id PK
        string task_id FK
        string name "Subtask name"
        string description "Subtask description"
        string status "queued/running/completed/failed"
        string agent_type "researcher/developer/executor"
        json context "Agent context"
        timestamp created_at
        timestamp updated_at
    }

    Action {
        string id PK
        string subtask_id FK
        string type "command/search/analyze/etc"
        string status "success/failure"
        json parameters "Action parameters"
        json result "Action results"
        timestamp created_at
    }

    Artifact {
        string id PK
        string action_id FK
        string type "file/report/log"
        string path "Storage path"
        json metadata "Additional info"
        timestamp created_at
    }

    Memory {
        string id PK
        string action_id FK
        string type "observation/conclusion"
        vector embedding "Vector representation"
        text content "Memory content"
        timestamp created_at
    }
```

</details>

<details>
<summary><b>Agent Interaction</b> (click to expand)</summary>

```mermaid
sequenceDiagram
    participant O as Orchestrator
    participant R as Researcher
    participant D as Developer
    participant E as Executor
    participant VS as Vector Store
    participant KB as Knowledge Base

    Note over O,KB: Flow Initialization
    O->>VS: Query similar tasks
    VS-->>O: Return experiences
    O->>KB: Load relevant knowledge
    KB-->>O: Return context

    Note over O,R: Research Phase
    O->>R: Analyze target
    R->>VS: Search similar cases
    VS-->>R: Return patterns
    R->>KB: Query vulnerabilities
    KB-->>R: Return known issues
    R->>VS: Store findings
    R-->>O: Research results

    Note over O,D: Planning Phase
    O->>D: Plan attack
    D->>VS: Query exploits
    VS-->>D: Return techniques
    D->>KB: Load tools info
    KB-->>D: Return capabilities
    D-->>O: Attack plan

    Note over O,E: Execution Phase
    O->>E: Execute plan
    E->>KB: Load tool guides
    KB-->>E: Return procedures
    E->>VS: Store results
    E-->>O: Execution status
```

</details>

<details>
<summary><b>Memory System</b> (click to expand)</summary>

```mermaid
graph TB
    subgraph "Long-term Memory"
        VS[(Vector Store<br/>Embeddings DB)]
        KB[Knowledge Base<br/>Domain Expertise]
        Tools[Tools Knowledge<br/>Usage Patterns]
    end

    subgraph "Working Memory"
        Context[Current Context<br/>Task State]
        Goals[Active Goals<br/>Objectives]
        State[System State<br/>Resources]
    end

    subgraph "Episodic Memory"
        Actions[Past Actions<br/>Commands History]
        Results[Action Results<br/>Outcomes]
        Patterns[Success Patterns<br/>Best Practices]
    end

    Context --> |Query| VS
    VS --> |Retrieve| Context

    Goals --> |Consult| KB
    KB --> |Guide| Goals

    State --> |Record| Actions
    Actions --> |Learn| Patterns
    Patterns --> |Store| VS

    Tools --> |Inform| State
    Results --> |Update| Tools

    VS --> |Enhance| KB
    KB --> |Index| VS

    classDef ltm fill:#f9f,stroke:#333,stroke-width:2px,color:#000
    classDef wm fill:#bbf,stroke:#333,stroke-width:2px,color:#000
    classDef em fill:#bfb,stroke:#333,stroke-width:2px,color:#000

    class VS,KB,Tools ltm
    class Context,Goals,State wm
    class Actions,Results,Patterns em
```

</details>

<details>
<summary><b>Chain Summarization</b> (click to expand)</summary>

The chain summarization system manages conversation context growth by selectively summarizing older messages. This is critical for preventing token limits from being exceeded while maintaining conversation coherence.

```mermaid
flowchart TD
    A[Input Chain] --> B{Needs Summarization?}
    B -->|No| C[Return Original Chain]
    B -->|Yes| D[Convert to ChainAST]
    D --> E[Apply Section Summarization]
    E --> F[Process Oversized Pairs]
    F --> G[Manage Last Section Size]
    G --> H[Apply QA Summarization]
    H --> I[Rebuild Chain with Summaries]
    I --> J{Is New Chain Smaller?}
    J -->|Yes| K[Return Optimized Chain]
    J -->|No| C

    classDef process fill:#bbf,stroke:#333,stroke-width:2px,color:#000
    classDef decision fill:#bfb,stroke:#333,stroke-width:2px,color:#000
    classDef output fill:#fbb,stroke:#333,stroke-width:2px,color:#000

    class A,D,E,F,G,H,I process
    class B,J decision
    class C,K output
```

The algorithm operates on a structured representation of conversation chains (ChainAST) that preserves message types including tool calls and their responses. All summarization operations maintain critical conversation flow while reducing context size.

### Global Summarizer Configuration Options

| Parameter             | Environment Variable             | Default | Description                                                |
| --------------------- | -------------------------------- | ------- | ---------------------------------------------------------- |
| Preserve Last         | `SUMMARIZER_PRESERVE_LAST`       | `true`  | Whether to keep all messages in the last section intact    |
| Use QA Pairs          | `SUMMARIZER_USE_QA`              | `true`  | Whether to use QA pair summarization strategy              |
| Summarize Human in QA | `SUMMARIZER_SUM_MSG_HUMAN_IN_QA` | `false` | Whether to summarize human messages in QA pairs            |
| Last Section Size     | `SUMMARIZER_LAST_SEC_BYTES`      | `51200` | Maximum byte size for last section (50KB)                  |
| Max Body Pair Size    | `SUMMARIZER_MAX_BP_BYTES`        | `16384` | Maximum byte size for a single body pair (16KB)            |
| Max QA Sections       | `SUMMARIZER_MAX_QA_SECTIONS`     | `10`    | Maximum QA pair sections to preserve                       |
| Max QA Size           | `SUMMARIZER_MAX_QA_BYTES`        | `65536` | Maximum byte size for QA pair sections (64KB)              |
| Keep QA Sections      | `SUMMARIZER_KEEP_QA_SECTIONS`    | `1`     | Number of recent QA sections to keep without summarization |

### Assistant Summarizer Configuration Options

Assistant instances can use customized summarization settings to fine-tune context management behavior:

| Parameter          | Environment Variable                    | Default | Description                                                          |
| ------------------ | --------------------------------------- | ------- | -------------------------------------------------------------------- |
| Preserve Last      | `ASSISTANT_SUMMARIZER_PRESERVE_LAST`    | `true`  | Whether to preserve all messages in the assistant's last section     |
| Last Section Size  | `ASSISTANT_SUMMARIZER_LAST_SEC_BYTES`   | `76800` | Maximum byte size for assistant's last section (75KB)                |
| Max Body Pair Size | `ASSISTANT_SUMMARIZER_MAX_BP_BYTES`     | `16384` | Maximum byte size for a single body pair in assistant context (16KB) |
| Max QA Sections    | `ASSISTANT_SUMMARIZER_MAX_QA_SECTIONS`  | `7`     | Maximum QA sections to preserve in assistant context                 |
| Max QA Size        | `ASSISTANT_SUMMARIZER_MAX_QA_BYTES`     | `76800` | Maximum byte size for assistant's QA sections (75KB)                 |
| Keep QA Sections   | `ASSISTANT_SUMMARIZER_KEEP_QA_SECTIONS` | `3`     | Number of recent QA sections to preserve without summarization       |

The assistant summarizer configuration provides more memory for context retention compared to the global settings, preserving more recent conversation history while still ensuring efficient token usage.

### Summarizer Environment Configuration

```bash
# Default values for global summarizer logic
SUMMARIZER_PRESERVE_LAST=true
SUMMARIZER_USE_QA=true
SUMMARIZER_SUM_MSG_HUMAN_IN_QA=false
SUMMARIZER_LAST_SEC_BYTES=51200
SUMMARIZER_MAX_BP_BYTES=16384
SUMMARIZER_MAX_QA_SECTIONS=10
SUMMARIZER_MAX_QA_BYTES=65536
SUMMARIZER_KEEP_QA_SECTIONS=1

# Default values for assistant summarizer logic
ASSISTANT_SUMMARIZER_PRESERVE_LAST=true
ASSISTANT_SUMMARIZER_LAST_SEC_BYTES=76800
ASSISTANT_SUMMARIZER_MAX_BP_BYTES=16384
ASSISTANT_SUMMARIZER_MAX_QA_SECTIONS=7
ASSISTANT_SUMMARIZER_MAX_QA_BYTES=76800
ASSISTANT_SUMMARIZER_KEEP_QA_SECTIONS=3
```

</details>

<a id="advanced-agent-supervision"></a>
<details>
<summary><b>Advanced Agent Supervision</b> (click to expand)</summary>

PentAGI includes sophisticated multi-layered agent supervision mechanisms to ensure efficient task execution, prevent infinite loops, and provide intelligent recovery from stuck states:

### Execution Monitoring (Beta)
- **Automatic Mentor Intervention**: Adviser agent (mentor) is automatically invoked when execution patterns indicate potential issues
- **Pattern Detection**: Monitors identical tool calls (threshold: 5, configurable) and total tool calls (threshold: 10, configurable)
- **Progress Analysis**: Evaluates whether agent advances toward subtask objective, detects loops and inefficiencies
- **Alternative Strategies**: Recommends different approaches when current strategy fails
- **Information Retrieval Guidance**: Suggests searching for established solutions instead of reinventing
- **Enhanced Response Format**: Tool responses include both `<original_result>` and `<mentor_analysis>` sections
- **Configurable**: Enable via `EXECUTION_MONITOR_ENABLED` (default: false), customize thresholds with `EXECUTION_MONITOR_SAME_TOOL_LIMIT` and `EXECUTION_MONITOR_TOTAL_TOOL_LIMIT`

**Best for**: Smaller models (< 32B parameters), complex attack scenarios requiring continuous guidance, preventing agents from getting stuck on single approach

**Performance Impact**: 2-3x increase in execution time and token usage, but delivers **2x improvement in result quality** based on testing with Qwen3.5-27B-FP8

### Intelligent Task Planning (Beta)
- **Automated Decomposition**: Planner (adviser in planning mode) generates 3-7 specific, actionable steps before specialist agents begin work
- **Context-Aware Plans**: Analyzes full execution context via enricher agent to create informed plans
- **Structured Assignment**: Original request wrapped in `<task_assignment>` structure with execution plan and instructions
- **Scope Management**: Prevents scope creep by keeping agents focused on current subtask only
- **Enriched Instructions**: Plans highlight critical actions, potential pitfalls, and verification points
- **Configurable**: Enable via `AGENT_PLANNING_STEP_ENABLED` (default: false)

**Best for**: Models < 32B parameters, complex penetration testing workflows, improving success rates on sophisticated tasks

**Enhanced Adviser Configuration**: Works exceptionally well when adviser agent uses stronger model or enhanced settings. Example: using same base model with maximum reasoning mode for adviser (see [`vllm-qwen3.5-27b-fp8.provider.yml`](https://github.com/vxcontrol/pentagi/blob/main/examples/configs/vllm-qwen3.5-27b-fp8.provider.yml)) enables comprehensive task analysis and strategic planning from identical model architecture.

**Performance Impact**: Adds planning overhead but significantly improves completion rates and reduces redundant work

### Tool Call Limits (Always Active)
- **Hard Limits**: Prevent runaway executions regardless of supervision mode status
- **Differentiated by Agent Type**:
  - General agents (Assistant, Primary Agent, Pentester, Coder, Installer): `MAX_GENERAL_AGENT_TOOL_CALLS` (default: 100)
  - Limited agents (Searcher, Enricher, Memorist, Generator, Reporter, Adviser, Reflector, Planner): `MAX_LIMITED_AGENT_TOOL_CALLS` (default: 20)
- **Graceful Termination**: Reflector guides agents to proper completion when approaching limits
- **Resource Protection**: Ensures system stability and prevents resource exhaustion

### Reflector Integration (Always Active)
- **Automatic Correction**: Invoked when LLM fails to generate tool calls after 3 attempts
- **Strategic Guidance**: Analyzes failures and guides agents toward proper tool usage or barrier tools (`done`, `ask`)
- **Recovery Mechanism**: Provides contextual guidance based on specific failure patterns
- **Limit Enforcement**: Coordinates graceful termination when tool call limits are reached

### Recommendations for Open Source Models

**Must-Have for Models < 32B Parameters**:
Testing with Qwen3.5-27B-FP8 demonstrates that enabling both Execution Monitoring and Task Planning is **essential** for smaller open source models:
- **Quality Improvement**: 2x better results compared to baseline execution without supervision
- **Loop Prevention**: Significantly reduces infinite loops and redundant work
- **Attack Diversity**: Encourages exploration of multiple attack vectors instead of fixating on single approach
- **Air-Gapped Deployments**: Enables production-grade autonomous pentesting in closed network environments with local LLM inference

**Trade-offs**:
- Token consumption: 2-3x increase due to mentor/planner invocations
- Execution time: 2-3x longer due to analysis and planning steps
- Result quality: 2x improvement in completeness, accuracy, and attack coverage
- Model requirements: Works best when adviser uses enhanced configuration (higher reasoning parameters, stronger model variant, or different model)

**Configuration Strategy**:
For optimal performance with smaller models, configure adviser agent with enhanced settings:
- Use same model with maximum reasoning mode (example: [`vllm-qwen3.5-27b-fp8.provider.yml`](https://github.com/vxcontrol/pentagi/blob/main/examples/configs/vllm-qwen3.5-27b-fp8.provider.yml))
- Or use stronger model for adviser while keeping base model for other agents
- Adjust monitoring thresholds based on task complexity and model capabilities



</details>

The architecture of PentAGI is designed to be modular, scalable, and secure. Here are the key components:

1. **Core Services**
   - Frontend UI: React-based web interface with TypeScript for type safety
   - Backend API: Go-based REST and GraphQL APIs with Bearer token authentication for programmatic access
   - Vector Store: PostgreSQL with pgvector for semantic search and memory storage
   - Task Queue: Async task processing system for reliable operation
   - AI Agent: Multi-agent system with specialized roles for efficient testing

2. **Optional Knowledge Graph**
   - Graphiti: Knowledge graph API for semantic relationship tracking and contextual understanding
   - Neo4j: Graph database for storing and querying relationships between entities, actions, and outcomes
   - When enabled, automatically captures agent responses and tool executions for a flow-scoped knowledge base

3. **Monitoring Stack**
   - OpenTelemetry: Unified observability data collection and correlation
   - Grafana: Real-time visualization and alerting dashboards
   - VictoriaMetrics: High-performance time-series metrics storage
   - Jaeger: End-to-end distributed tracing for debugging
   - Loki: Scalable log aggregation and analysis

4. **Analytics Platform**
   - Langfuse: Advanced LLM observability and performance analytics
   - ClickHouse: Column-oriented analytics data warehouse
   - Redis: High-speed caching and rate limiting
   - MinIO: S3-compatible object storage for artifacts

5. **Security Tools**
   - Web Scraper: Isolated browser environment for safe web interaction
   - Pentesting Tools: Comprehensive suite of 20+ professional security tools
   - Sandboxed Execution: All operations run in isolated containers

6. **Memory Systems**
   - Long-term Memory: Persistent storage of knowledge and experiences
   - Working Memory: Active context and goals for current operations
   - Episodic Memory: Historical actions and success patterns
   - Knowledge Base: Structured domain expertise and tool capabilities
   - Context Management: Intelligently manages growing LLM context windows using chain summarization

The system uses Docker containers for isolation and easy deployment, with separate networks for core services, monitoring, and analytics to ensure proper security boundaries. Each component is designed to scale horizontally and can be configured for high availability in production environments.

## Quick Start

For a step-by-step walkthrough that connects installation, configuration, LLM and embedding provider testing, and your first login, see the [Installing and Configuring PentAGI](https://github.com/vxcontrol/pentagi/blob/main/examples/guides/installation_configuration.md) guide. The sections below remain the detailed reference for each step.

### System Requirements

- Docker and Docker Compose (or Podman - see [Podman configuration](#running-pentagi-with-podman))
- Minimum 2 vCPU
- Minimum 4GB RAM
- 20GB free disk space
- Internet access for downloading images and updates

### Using Installer (Recommended)

PentAGI provides an interactive installer with a terminal-based UI for streamlined configuration and deployment. The installer guides you through system checks, LLM provider setup, search engine configuration, and security hardening.

**Supported Platforms:**
- **Linux**: amd64 [download](https://pentagi.com/downloads/linux/amd64/installer-latest.zip) | arm64 [download](https://pentagi.com/downloads/linux/arm64/installer-latest.zip)
- **Windows**: amd64 [download](https://pentagi.com/downloads/windows/amd64/installer-latest.zip)
- **macOS**: amd64 (Intel) [download](https://pentagi.com/downloads/darwin/amd64/installer-latest.zip) | arm64 (M-series) [download](https://pentagi.com/downloads/darwin/arm64/installer-latest.zip)

> **macOS security warning:** If macOS flags a downloaded installer, use only the official PentAGI links above, choose the archive that matches your CPU architecture, verify the source before continuing, and follow the [installer troubleshooting guide](https://github.com/vxcontrol/pentagi/blob/main/backend/docs/installer/installer-troubleshooting.md#macos-reports-the-installer-as-malware) before allowing the app to run.

**Quick Installation (Linux amd64):**

```bash
# Create installation directory
mkdir -p pentagi && cd pentagi

# Download installer
wget -O installer.zip https://pentagi.com/downloads/linux/amd64/installer-latest.zip

# Extract
unzip installer.zip

# Run interactive installer
./installer
```

**Prerequisites & Permissions:**

The installer requires appropriate privileges to interact with the Docker API for proper operation. By default, it uses the Docker socket (`/var/run/docker.sock`) which requires either:

- **Option 1 (Recommended for production):** Run the installer as root:
  ```bash
  sudo ./installer
  ```

- **Option 2 (Development environments):** Grant your user access to the Docker socket by adding them to the `docker` group:
  ```bash
  # Add your user to the docker group
  sudo usermod -aG docker $USER
  
  # Log out and log back in, or activate the group immediately
  newgrp docker
  
  # Verify Docker access (should run without sudo)
  docker ps
  ```

  ⚠️ **Security Note:** Adding a user to the `docker` group grants root-equivalent privileges. Only do this for trusted users in controlled environments. For production deployments, consider using rootless Docker mode or running the installer with sudo.

The installer will:
1. **System Checks**: Verify Docker, network connectivity, and system requirements
2. **Environment Setup**: Create and configure `.env` file with optimal defaults
3. **Provider Configuration**: Set up LLM providers (OpenAI, Anthropic, Gemini, Bedrock, Ollama, DeepSeek, GLM, Kimi, Qwen, MiniMax, Mistral, xAI, Custom)
4. **Search Engines**: Configure DuckDuckGo, Google, Tavily, Firecrawl, Traversaal, Perplexity, Sploitus, SearXNG, and the optional internal browser-analytics fallback engine
5. **Security Hardening**: Generate secure credentials and configure SSL certificates
6. **Deployment**: Start PentAGI with docker-compose

### Current Web Settings Coverage

The PentAGI web console already manages several settings areas after the server is up and running:

- **Settings -> Providers**: Create, edit, delete, and test user-defined provider profiles for supported provider types. These profiles control per-agent model selection, runtime parameters, reasoning options, and pricing metadata.
- **Settings -> Prompts**: Manage system, human, and tool prompt templates.
- **Settings -> PentAGI API**: Create and manage PentAGI Bearer tokens for REST and GraphQL access.
- **Other UI-managed preferences**: Favorite flows are stored as user preferences, and theme selection is handled from the main sidebar/profile controls rather than the Settings pages.

### Still Server-Managed

The following configuration areas still need to be set on the server through environment variables, compose files, or mounted config files:

- **LLM credentials and connection details**: API keys, endpoints, auth modes, and provider-specific connection settings for OpenAI, Anthropic, Bedrock, Ollama, custom providers, and similar backends; config-path settings apply only where supported, such as `OLLAMA_SERVER_CONFIG_PATH`, `LLM_SERVER_CONFIG_PATH`, and `BEDROCK_CONFIG_PATH`.
- **Search provider credentials and options**: Settings such as `DUCKDUCKGO_*`, `GOOGLE_*`, `TAVILY_API_KEY`, `FIRECRAWL_API_*`, `TRAVERSAAL_API_KEY`, `PERPLEXITY_*`, `SEARXNG_*`, `SPLOITUS_ENABLED`, and the optional `WEB_SEARCH_INTERNAL_*` browser-analytics fallback settings.
- **Third-party integrations**: Langfuse, Graphiti, and similar external services remain server-side configuration.

**For Production & Enhanced Security:**

For production deployments or security-sensitive environments, we **strongly recommend** using a distributed two-node architecture where worker operations are isolated on a separate server. This prevents untrusted code execution and network access issues on your main system.

**See detailed guide**: [Worker Node Setup](https://github.com/vxcontrol/pentagi/blob/main/examples/guides/worker_node.md)

The two-node setup provides:
- **Isolated Execution**: Worker containers run on dedicated hardware
- **Network Isolation**: Separate network boundaries for penetration testing
- **Security Boundaries**: Docker-in-Docker with TLS authentication
- **OOB Attack Support**: Dedicated port ranges for out-of-band techniques

#### Giving Agents Docker Without Giving Away the Host

Many pentest workflows need `docker` inside the agent's sandbox. There are two ways to provide it, and they differ sharply in risk.

**Recommended — point sandboxes at a hardened dind daemon over TLS.** Set `DOCKER_INSIDE=true`, leave `DOCKER_SOCKET` empty, and configure the daemon the sandbox may talk to:

```bash
DOCKER_INSIDE=true
DOCKER_SOCKET=                                          # mount no socket
DOCKER_INSIDE_HOST=tcp://10.0.0.5:3376                  # hardened dind endpoint
DOCKER_INSIDE_TLS_VERIFY=1
DOCKER_INSIDE_CERT_PATH=/etc/docker/dind/certs/client   # path on the worker node
DOCKER_INSIDE_POLICY_TESTS=true                         # prove it on every worker; off by default
```

PentAGI injects these into every worker container as `DOCKER_HOST`, `DOCKER_TLS_VERIFY` and `DOCKER_CERT_PATH` (the `_INSIDE_` segment is dropped) and bind-mounts the certificate directory read-only at the same path, so `docker` works inside the sandbox with no further setup.

**Not recommended — bind-mounting a Docker socket (`DOCKER_SOCKET`).** This has two failure modes:

- **Boot-order race**: a bind-mount source that does not exist yet is created by Docker as a *directory*. After a worker-node reboot, a worker container can start before dind has recreated its socket — Docker then puts a directory where the socket belongs, and dind cannot start until it is removed by hand.
- **Blast radius**: the race is only reliably avoided when the mounted socket is the **host** daemon's, since that one always exists first. But that grants an autonomous agent the host Docker API: it can start a privileged container, mount `/`, and compromise the entire node — PentAGI included.

Use `DOCKER_SOCKET` only on single-node development setups where the host daemon is already trusted.

**See**: [Worker Node Setup](https://github.com/vxcontrol/pentagi/blob/main/examples/guides/worker_node.md) for the full dind hardening and TLS configuration, and [Worker Docker Access](https://github.com/vxcontrol/pentagi/blob/main/backend/docs/docker.md#worker-docker-access) for the exact resolution algorithm.

#### Running Several Instances (`TENANT_ID`)

A single PentAGI installation needs none of this — leave `TENANT_ID` empty (the default) and nothing changes.

Set it when several PentAGI installations share external resources: one PostgreSQL server, one worker node, one Neo4j/Graphiti, one Langfuse. The typical case is a management backend per server with a common worker node and database. Because every instance numbers its flows from `1`, they would otherwise collide on container names, database rows, knowledge-graph namespaces and session cookies. `TENANT_ID` namespaces all of it:

| Area | Effect when `TENANT_ID=acme` |
| ---- | ---------------------------- |
| PostgreSQL | The instance creates and works inside schema `acme` instead of `public`; extensions stay shared in `DATABASE_EXTENSIONS_SCHEMA` (default `public`, `extensions` on Supabase) |
| Worker containers | `acme-pentagi-terminal-<flow>` instead of `pentagi-terminal-<flow>`; volumes and hostnames follow, and both carry a `pentagi.tenant` label |
| Knowledge graph | Graphiti/Neo4j group ids become `acme-flow-<id>` |
| Auth | Cookie and API token keys are derived from `COOKIE_SIGNING_SALT` **plus** the tenant, and the session cookie is renamed |
| Telemetry | Langfuse traces carry the tenant as their `environment` and a `tenant:acme` tag; OTel resources gain `tenant_id` |

The value must match `^[a-z][a-z0-9_]{0,31}$` — an invalid one aborts startup rather than being silently normalised.

Some things stay yours to set per instance, because they are host resources rather than names: `DATA_DIR` (two instances sharing it **will** overwrite each other's flow data), `DOCKER_PORTS_BASE`, the published ports, and `INSTALLATION_ID`. The effective values are printed at startup under `Instance identity`.

The installer provisions one instance per server. Running several on one server is possible — for example behind a shared nginx — but the stock `docker-compose.yml` uses fixed container and network names, so it has to be adapted to your own network layout first.

**See**: [Multi-Instance Deployment](https://github.com/vxcontrol/pentagi/blob/main/backend/docs/config.md#multi-instance-deployment-tenant_id) for validation rules, upgrade notes and the full list of operator responsibilities.

### Manual Installation

1. Create a working directory or clone the repository:

```bash
mkdir pentagi && cd pentagi
```

2. Copy `.env.example` to `.env` or download it:

```bash
curl -o .env https://raw.githubusercontent.com/vxcontrol/pentagi/master/.env.example
```

3. Touch examples files (`example.custom.provider.yml`, `example.ollama.provider.yml`, `example.bedrock.provider.yml`) or download it. `docker-compose.yml` mounts each of them into the container, and Docker creates a directory in place of a mount source that does not exist:

```bash
curl -o example.custom.provider.yml https://raw.githubusercontent.com/vxcontrol/pentagi/master/examples/configs/custom-openai.provider.yml
curl -o example.ollama.provider.yml https://raw.githubusercontent.com/vxcontrol/pentagi/master/examples/configs/ollama-llama318b.provider.yml
curl -o example.bedrock.provider.yml https://raw.githubusercontent.com/vxcontrol/pentagi/master/examples/configs/bedrock.provider.yml
```

4. Fill in the required API keys in `.env` file.

```bash
# Required: At least one of these LLM providers
OPEN_AI_KEY=your_openai_key
ANTHROPIC_API_KEY=your_anthropic_key
GEMINI_API_KEY=your_gemini_key

# Optional: AWS Bedrock provider (enterprise-grade models)
BEDROCK_REGION=us-east-1
# Choose one authentication method:
BEDROCK_DEFAULT_AUTH=true                        # Option 1: Use AWS SDK default credential chain (recommended for EC2/ECS)
# BEDROCK_BEARER_TOKEN=your_bearer_token         # Option 2: Bearer token authentication
# BEDROCK_ACCESS_KEY_ID=your_aws_access_key      # Option 3: Static credentials
# BEDROCK_SECRET_ACCESS_KEY=your_aws_secret_key

# Optional: Ollama provider (local or cloud)
# OLLAMA_SERVER_URL=http://ollama-server:11434   # Local server
# OLLAMA_SERVER_URL=https://ollama.com           # Cloud service
# OLLAMA_SERVER_API_KEY=your_ollama_cloud_key    # Required for cloud, empty for local

# Optional: Chinese AI providers
# DEEPSEEK_API_KEY=your_deepseek_key             # DeepSeek (strong reasoning)
# GLM_API_KEY=your_glm_key                       # GLM (Zhipu AI)
# KIMI_API_KEY=your_kimi_key                     # Kimi (Moonshot AI, ultra-long context)
# QWEN_API_KEY=your_qwen_key                     # Qwen (Alibaba Cloud, multimodal)
# MINIMAX_API_KEY=your_minimax_key               # MiniMax

# Optional: European and US providers
# MISTRAL_API_KEY=your_mistral_key               # Mistral
# XAI_API_KEY=your_xai_key                       # xAI (Grok)

# Optional: Local LLM provider (zero-cost inference)
OLLAMA_SERVER_URL=http://localhost:11434
OLLAMA_SERVER_MODEL=your_model_name

# Optional: Additional search capabilities
DUCKDUCKGO_ENABLED=true
DUCKDUCKGO_REGION=us-en
DUCKDUCKGO_SAFESEARCH=
DUCKDUCKGO_TIME_RANGE=
SPLOITUS_ENABLED=true
GOOGLE_API_KEY=your_google_key
GOOGLE_CX_KEY=your_google_cx
TAVILY_API_KEY=your_tavily_key
FIRECRAWL_API_KEY=your_firecrawl_key
FIRECRAWL_API_URL=
TRAVERSAAL_API_KEY=your_traversaal_key
PERPLEXITY_API_KEY=your_perplexity_key
PERPLEXITY_MODEL=
PERPLEXITY_CONTEXT_SIZE=medium

# SearXNG meta search engine (aggregates results from multiple sources)
SEARXNG_URL=http://your-searxng-instance:8080
SEARXNG_CATEGORIES=general
SEARXNG_LANGUAGE=
SEARXNG_SAFESEARCH=0
SEARXNG_TIME_RANGE=
SEARXNG_TIMEOUT=

# Optional: internal browser-analytics fallback engine for web_search (off by default;
# scrapes and summarizes pages instead of calling a paid analytic API)
WEB_SEARCH_INTERNAL_ENABLED=false
WEB_SEARCH_INTERNAL_MAX_SITES=5
WEB_SEARCH_INTERNAL_MAX_SITE_BYTES=10240

## Graphiti knowledge graph settings
GRAPHITI_ENABLED=false
GRAPHITI_TIMEOUT=30
GRAPHITI_URL=

# Neo4j settings (used by Graphiti stack)
NEO4J_USER=neo4j
NEO4J_DATABASE=neo4j
NEO4J_PASSWORD=devpassword
NEO4J_URI=bolt://neo4j:7687

# Assistant configuration
ASSISTANT_USE_AGENTS=false         # Default value for agent usage when creating new assistants
```

5. Change all security related environment variables in `.env` file to improve security.

<details>
    <summary>Security related environment variables</summary>

### Main Security Settings
- `COOKIE_SIGNING_SALT` - Salt for cookie signing, change to random value
- `PUBLIC_URL` - Public URL of your server (eg. `https://pentagi.example.com`)
- `SERVER_SSL_CRT` and `SERVER_SSL_KEY` - Custom paths to your existing SSL certificate and key for HTTPS (these paths should be used in the docker-compose.yml file to mount as volumes)
- `TENANT_ID` - Leave empty unless this instance shares external resources with another PentAGI installation. When set, it is mixed into the cookie and API token signing keys and renames the session cookie, so a session minted by one instance is rejected by the others even though they share the same `COOKIE_SIGNING_SALT`. See [Running Several Instances](#running-several-instances-tenant_id)

### Scraper Access
- `SCRAPER_PUBLIC_URL` - Public URL for scraper if you want to use different scraper server for public URLs
- `SCRAPER_PRIVATE_URL` - Private URL for scraper (local scraper server in docker-compose.yml file to access it to local URLs)

### Access Credentials
- `PENTAGI_POSTGRES_USER` and `PENTAGI_POSTGRES_PASSWORD` - PostgreSQL credentials
- `NEO4J_USER` and `NEO4J_PASSWORD` - Neo4j credentials (for Graphiti knowledge graph)

</details>

6. Remove all inline comments from `.env` file if you want to use it in VSCode or other IDEs as a envFile option:

```bash
perl -i -pe 's/\s+#.*$//' .env
```

7. Run the PentAGI stack:

```bash
curl -O https://raw.githubusercontent.com/vxcontrol/pentagi/master/docker-compose.yml
docker compose up -d
```

Visit [localhost:8443](https://localhost:8443) to access PentAGI Web UI (default is `admin@pentagi.com` / `admin`)

#### Web UI Accounts

PentAGI does not expose public self-service sign-up from the login page. A fresh installation creates the default local administrator account:

- **Email**: `admin@pentagi.com`
- **Password**: `admin`

On first login, change the default password before using the instance for real work. If the administrator password is lost later, use the installer maintenance menu to reset the default `admin@pentagi.com` account password.

For multi-user setups, an authenticated administrator can manage local users through the Users REST API (`/api/v1/users/`). The OpenAPI UI is available at `https://localhost:8443/api/v1/swagger/index.html` after the instance is running.

> [!NOTE]
> If you caught an error about `pentagi-network` or `observability-network` or `langfuse-network` you need to run `docker-compose.yml` firstly to create these networks and after that run `docker-compose-langfuse.yml`, `docker-compose-graphiti.yml`, and `docker-compose-observability.yml` to use Langfuse, Graphiti, and Observability services.
>
> You have to set at least one Language Model provider (OpenAI, Anthropic, Gemini, AWS Bedrock, or Ollama) to use PentAGI. AWS Bedrock provides enterprise-grade access to multiple foundation models from leading AI companies, while Ollama provides zero-cost local inference if you have sufficient computational resources. Additional API keys for search engines are optional but recommended for better results.
>
> **For fully local deployment with advanced models**: See our comprehensive guide on [Running PentAGI with vLLM and Qwen3.5-27B-FP8](https://github.com/vxcontrol/pentagi/blob/main/examples/guides/vllm-qwen35-27b-fp8.md) for a production-grade local LLM setup. This configuration achieves ~13,000 TPS for prompt processing and ~650 TPS for completion on 4× RTX 5090 GPUs, supporting 12+ concurrent flows with complete independence from cloud providers.
>
> `LLM_SERVER_*` environment variables are experimental feature and will be changed in the future. Right now you can use them to specify custom LLM server URL and one model for all agent types.
>
> `PROXY_URL` routes the backend's own HTTP calls through a proxy: every request to LLM and embedding providers and to search engines — self-hosted ones such as Ollama or SearXNG included, as there is no `NO_PROXY` exemption — and the update check. Sandbox containers (where agents run their commands), the scraper, the Graphiti service, OAuth sign-in, and Langfuse/OpenTelemetry export do not use it, so if you need isolation from external networks, restrict their outbound traffic at the network level.
>
> The `docker-compose.yml` file runs the PentAGI service as root user because it needs access to docker.sock for container management. If you're using TCP/IP network connection to Docker instead of socket file, you can remove root privileges and use the default `pentagi` user for better security.

### Accessing PentAGI from External Networks

By default, the PentAGI web interface and the other compose services bind to `127.0.0.1` (localhost only) for security. To access PentAGI from other machines on your network, you need to configure external access.

> [!IMPORTANT]
> Flow sandboxes are not bound to localhost. Each flow publishes two TCP ports for out-of-band callbacks such as reverse shells, taken from the 2000-port window that starts at `DOCKER_PORTS_BASE` (`28000`–`29999` by default), on `DOCKER_PUBLIC_IP` — `0.0.0.0` by default, that is every interface of the Docker host. Docker routes published ports around `ufw` rules and lets them through `firewalld` with its own `docker` zone, so restrict this range with a firewall in front of the host or, with Docker's default iptables backend, with rules in the `DOCKER-USER` chain. With `DOCKER_NETWORK=host`, sandboxes share the host's network stack, so their listeners are exposed without any port mapping.

#### Configuration Steps

1. **Update `.env` file** with your server's IP address:

```bash
# Network binding - allow external connections
PENTAGI_LISTEN_IP=0.0.0.0
PENTAGI_LISTEN_PORT=8443

# Public URL - use your actual server IP or hostname
# Replace 192.168.1.100 with your server's IP address
PUBLIC_URL=https://192.168.1.100:8443

# CORS origins - list all URLs that will access PentAGI
# Include localhost for local access AND your server IP for external access
CORS_ORIGINS=https://localhost:8443,https://192.168.1.100:8443
```

> [!IMPORTANT]
> - Replace `192.168.1.100` with your actual server's IP address
> - Do NOT use `0.0.0.0` in `PUBLIC_URL` or `CORS_ORIGINS` - use the actual IP address
> - Include both localhost and your server IP in `CORS_ORIGINS` for flexibility

2. **Recreate containers** to apply the changes:

```bash
docker compose down
docker compose up -d --force-recreate
```

3. **Verify port binding:**

```bash
docker ps | grep pentagi
```

You should see `0.0.0.0:8443->8443/tcp` or `:::8443->8443/tcp`.

If you see `127.0.0.1:8443->8443/tcp`, the environment variable wasn't picked up. In this case, directly edit `docker-compose.yml` line 31:

```yaml
ports:
  - "0.0.0.0:8443:8443"
```

Then recreate containers again.

4. **Configure firewall** to allow incoming connections on port 8443:

```bash
# Ubuntu/Debian with UFW
sudo ufw allow 8443/tcp
sudo ufw reload

# CentOS/RHEL with firewalld
sudo firewall-cmd --permanent --add-port=8443/tcp
sudo firewall-cmd --reload
```

5. **Access PentAGI:**

- **Local access:** `https://localhost:8443`
- **Network access:** `https://your-server-ip:8443`

> [!NOTE]
> You'll need to accept the self-signed SSL certificate warning in your browser when accessing via IP address.

---

### Running PentAGI with Podman

PentAGI fully supports Podman as a Docker alternative. However, when using **Podman in rootless mode**, the scraper service requires special configuration because rootless containers cannot bind privileged ports (ports below 1024).

#### Podman Rootless Configuration

The default scraper configuration uses port 443 (HTTPS), which is a privileged port. For Podman rootless, reconfigure the scraper to use a non-privileged port:

**1. Edit `docker-compose.yml`** - modify the `scraper` service (around line 199):

```yaml
scraper:
  image: vxcontrol/scraper:latest
  restart: unless-stopped
  container_name: scraper
  hostname: scraper
  expose:
    - 3000/tcp  # Changed from 443 to 3000
  ports:
    - "${SCRAPER_LISTEN_IP:-127.0.0.1}:${SCRAPER_LISTEN_PORT:-9443}:3000"  # Map to port 3000
  environment:
    - MAX_CONCURRENT_SESSIONS=${LOCAL_SCRAPER_MAX_CONCURRENT_SESSIONS:-10}
    - USERNAME=${LOCAL_SCRAPER_USERNAME:-someuser}
    - PASSWORD=${LOCAL_SCRAPER_PASSWORD:-somepass}
  logging:
    options:
      max-size: 50m
      max-file: "7"
  volumes:
    - scraper-ssl:/usr/src/app/ssl
  networks:
    - pentagi-network
  shm_size: 2g
```

**2. Update `.env` file** - change the scraper URL to use HTTP and port 3000:

```bash
# Scraper configuration for Podman rootless
SCRAPER_PRIVATE_URL=http://someuser:somepass@scraper:3000/
LOCAL_SCRAPER_USERNAME=someuser
LOCAL_SCRAPER_PASSWORD=somepass
```

> [!IMPORTANT]
> Key changes for Podman:
> - Use **HTTP** instead of HTTPS for `SCRAPER_PRIVATE_URL`
> - Use port **3000** instead of 443
> - Change internal `expose` to `3000/tcp`
> - Update port mapping to target `3000` instead of `443`

**3. Recreate containers:**

```bash
podman-compose down
podman-compose up -d --force-recreate
```

**4. Test scraper connectivity:**

```bash
# Test from within the pentagi container
podman exec -it pentagi wget -O- "http://someuser:somepass@scraper:3000/html?url=http://example.com"
```

If you see HTML output, the scraper is working correctly.

#### Podman Rootful Mode

If you're running Podman in rootful mode (with sudo), you can use the default configuration without modifications. The scraper will work on port 443 as intended.

#### Docker Compatibility

All Podman configurations remain fully compatible with Docker. The non-privileged port approach works identically on both container runtimes.

### Assistant Configuration

PentAGI allows you to configure default behavior for assistants:

| Variable               | Default | Description                                                             |
| ---------------------- | ------- | ----------------------------------------------------------------------- |
| `ASSISTANT_USE_AGENTS` | `false` | Controls the default value for agent usage when creating new assistants |

The `ASSISTANT_USE_AGENTS` setting affects the initial state of the "Use Agents" toggle when creating a new assistant in the UI:
- `false` (default): New assistants are created with agent delegation disabled by default
- `true`: New assistants are created with agent delegation enabled by default

Note that users can always override this setting by toggling the "Use Agents" button in the UI when creating or editing an assistant. This environment variable only controls the initial default state.

## How to Use PentAGI After Login

Once the stack is running and you can sign in to the web UI, the fastest way to start is through the Flows workflow.

### 1. Create your first flow

1. Open **Flows** in the sidebar.
2. Click **New Flow**.
3. Choose the mode that fits your goal:
   - **Automation**: fully autonomous execution for a testing goal you want PentAGI to carry out end-to-end
   - **Assistant**: interactive back-and-forth help when you want to steer the investigation step by step. In this mode you can also enable the **Use Agents** toggle to let PentAGI delegate subtasks to specialized sub-agents for more complex investigations.
4. Select the LLM provider you want to use for this flow.
5. Describe the target and the objective in natural language in the message box.

Good first prompts usually include:

- the target system or URL
- the type of assessment you want
- any scope limitations or rules of engagement
- the result you expect, such as a vulnerability report or validation of a hypothesis

Example:

```text
Assess https://target.example for common web application vulnerabilities. Focus on authentication, file handling, and injection issues. Stay within the provided target only and summarize confirmed findings with reproduction steps.
```

Only test systems you own or are explicitly authorized to assess. See [EULA.md](https://github.com/vxcontrol/pentagi/blob/main/EULA.md) for the acceptable use requirements.

### 2. Use templates for repeatable workflows

The new flow form includes a template picker, which can prefill the message box with a saved flow template. This is useful when you run similar assessments repeatedly.

- Use an existing template if you already have one saved in **Templates**
- Start from the example prompt in [`examples/prompts/base_web_pentest.md`](https://github.com/vxcontrol/pentagi/blob/main/examples/prompts/base_web_pentest.md) if you need a practical baseline for web testing
- Adjust the target, scope, and constraints before starting the flow

Templates are starting points. You do not need special syntax to use PentAGI: plain natural-language instructions work well as long as the target and goal are clear.

### 3. Monitor execution and review output

After submitting the flow, PentAGI opens the flow page automatically.

- Use the main flow view to follow messages, agent activity, and task progress
- Inspect tool activity and terminal output as the flow runs
- Review generated tasks and subtasks to understand what PentAGI is doing

Once the flow has enough results, use the **Report** menu on the flow page to:

- open the report in a web view
- copy the generated report to the clipboard
- download the report as Markdown
- download the report as PDF

### 4. Use the Assistant view to steer an active flow

Each flow also includes an **Assistant** view for interactive guidance. This is useful when the autonomous run uncovers something that needs human direction instead of a hard restart.

- Open the **Assistant** view for the same flow when you want to inspect the current state before changing anything.
- Use the assistant to check flow status, stop the current task, submit follow-up instructions, or patch the remaining planned subtasks before the next step runs.
- Treat this as an explicit control path for the current flow, not as an invisible background queue. If you want to change direction, say so clearly and keep the new instruction tied to the current engagement scope.
- This works best for clarifying scope, redirecting priorities after intermediate findings, or answering an automation checkpoint without losing the rest of the flow context.

*(README truncated for display. [Read the full README on GitHub](https://github.com/vxcontrol/pentagi)).*
