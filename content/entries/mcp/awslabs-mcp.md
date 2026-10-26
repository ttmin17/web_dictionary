---
slug: awslabs-mcp
name: mcp
tagline: Open source MCP Servers for AWS
summary: "- Open source MCP servers for AWS - Table of Contents - What is the
  Model Context Protocol (MCP) and how does it work with MCP Servers for AWS? -
  Open source MCP servers for AWS Transport Mechanisms - Supported transp..."
categories:
  - agent-frameworks
tags:
  - aws
  - mcp-client
  - mcp-clients
  - mcp-host
status: active
quality_percentile: 93
selection_reason: quality_percentile
first_seen: 2026-10-14
last_updated: 2026-10-26T07:46:02.721Z
source:
  kind: github_repo
  repo: awslabs/mcp
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 9832
  last_commit: 2026-10-26T01:29:51Z
  stars_delta_7d: 39
  stars_growth_pct: 0.4
  trending_score: 39.16
  rank_current: 43
  rank_delta: 1
  velocity_source: snapshot_delta
  sparkline_4w:
    - 9761
    - 9775
    - 9793
    - 9832
language: en
needs_keys: false
prerequisites:
  - Network access (HTTP MCP server)
readme_source:
  repo: awslabs/mcp
  path: README.md
  branch: main
  fetched_at: 2026-10-26T07:36:57.073Z
  truncated: true
type: mcp_server
launch:
  transport: http
  remote_url: https://api.inference.sh/mcp
  args: []
  env_vars: []
  confidence: registry
---

# Open source MCP servers for AWS
A suite of specialized MCP servers that help you get the most out of AWS, wherever you use MCP.

[![GitHub](https://img.shields.io/badge/github-awslabs/mcp-blue.svg?style=flat&logo=github)](https://github.com/awslabs/mcp)
[![License](https://img.shields.io/badge/license-Apache--2.0-brightgreen)](https://raw.githubusercontent.com/awslabs/mcp/main/LICENSE)
[![Codecov](https://img.shields.io/codecov/c/github/awslabs/mcp)](https://app.codecov.io/gh/awslabs/mcp)
[![OSSF-Scorecard Score](https://img.shields.io/ossf-scorecard/github.com/awslabs/mcp)](https://scorecard.dev/viewer/?uri=github.com/awslabs/mcp)

> [!TIP]
> The [Agent Toolkit for AWS](https://aws.amazon.com/about-aws/whats-new/2026/05/agent-toolkit/) is now live! The Agent Toolkit for AWS is the successor to the MCP servers, plugins, and skills available on AWS Labs, and was informed by feedback from customers like you. If you're building production software using coding agents or building agents for your own customers, we recommend Agent Toolkit for AWS. It includes IAM condition keys to distinguish agent actions from human ones, CloudWatch and CloudTrail visibility, and skills that have been evaluated for accuracy and effectiveness. This repo continues to work and accept contributions. Over time, the most useful projects here will move into Agent Toolkit for AWS.

## Table of Contents

- [Open source MCP servers for AWS](#open-source-mcp-servers-for-aws)
  - [Table of Contents](#table-of-contents)
  - [What is the Model Context Protocol (MCP) and how does it work with MCP Servers for AWS?](#what-is-the-model-context-protocol-mcp-and-how-does-it-work-with-mcp-servers-for-aws)
  - [Open source MCP servers for AWS Transport Mechanisms](#open-source-mcp-servers-for-aws-transport-mechanisms)
    - [Supported transport mechanisms](#supported-transport-mechanisms)
    - [Server Sent Events Support Removal](#server-sent-events-support-removal)
    - [Why MCP Servers for AWS?](#why-mcp-servers-for-aws)
  - [Available MCP Servers: Quick Installation](#available-mcp-servers-quick-installation)
    - [🚀 Getting Started with AWS](#-getting-started-with-aws)
    - [Browse by What You're Building](#browse-by-what-youre-building)
      - [📚 Real-time access to official AWS documentation](#-real-time-access-to-official-aws-documentation)
    - [🏗️ Infrastructure \& Deployment](#️-infrastructure--deployment)
      - [Container Platforms](#container-platforms)
      - [Serverless \& Functions](#serverless--functions)
      - [Support](#support)
    - [🤖 AI \& Machine Learning](#-ai--machine-learning)
    - [📊 Data \& Analytics](#-data--analytics)
      - [SQL \& NoSQL Databases](#sql--nosql-databases)
        - [Search \& Analytics](#search--analytics)
      - [Backend API Providers](#backend-api-providers)
      - [Caching \& Performance](#caching--performance)
    - [🛠️ Developer Tools \& Support](#️-developer-tools--support)
    - [📡 Integration \& Messaging](#-integration--messaging)
    - [💰 Cost \& Operations](#-cost--operations)
    - [🧬 Healthcare \& Lifesciences](#-healthcare--lifesciences)
    - [Browse by How You're Working](#browse-by-how-youre-working)
      - [👨‍💻 Vibe Coding \& Development](#-vibe-coding--development)
        - [Core Development Workflow](#core-development-workflow)
        - [Infrastructure as Code](#infrastructure-as-code)
        - [Application Development](#application-development)
        - [Container \& Serverless Development](#container--serverless-development)
        - [Testing \& Data](#testing--data)
        - [Lifesciences Workflow Development](#lifesciences-workflow-development)
        - [Healthcare Data Management](#healthcare-data-management)
      - [💬 Conversational Assistants](#-conversational-assistants)
        - [Knowledge \& Search](#knowledge--search)
        - [Content Processing \& Generation](#content-processing--generation)
        - [Business Services](#business-services)
      - [🤖 Autonomous Background Agents](#-autonomous-background-agents)
        - [Data Operations \& ETL](#data-operations--etl)
        - [Caching \& Performance](#caching--performance-1)
        - [Workflow \& Integration](#workflow--integration)
        - [Operations \& Monitoring](#operations--monitoring)
  - [MCP AWS Lambda Handler Module](#mcp-aws-lambda-handler-module)
  - [When to use Local vs Remote MCP Servers?](#when-to-use-local-vs-remote-mcp-servers)
    - [Local MCP Servers](#local-mcp-servers)
    - [Remote MCP Servers](#remote-mcp-servers)
  - [Use Cases for the Servers](#use-cases-for-the-servers)
  - [Installation and Setup](#installation-and-setup)
    - [For macOS/Linux](#for-macoslinux)
    - [For Windows](#for-windows)
    - [Running MCP servers in containers](#running-mcp-servers-in-containers)
    - [Getting Started with Kiro](#getting-started-with-kiro)
      - [`~/.kiro/settings/mcp.json`](#kirosettingsmcpjson)
    - [Getting Started with Cline and Amazon Bedrock](#getting-started-with-cline-and-amazon-bedrock)
      - [`cline_mcp_settings.json`](#cline_mcp_settingsjson)
    - [Getting Started with Cursor](#getting-started-with-cursor)
      - [`.cursor/mcp.json`](#cursormcpjson)
    - [Getting Started with Windsurf](#getting-started-with-windsurf)
      - [`~/.codeium/windsurf/mcp_config.json`](#codeiumwindsurfmcp_configjson)
    - [Getting Started with VS Code](#getting-started-with-vs-code)
      - [`.vscode/mcp.json`](#vscodemcpjson)
    - [Getting Started with Claude Code](#getting-started-with-claude-code)
      - [`.mcp.json`](#mcpjson)
    - [Getting Started with fx](#getting-started-with-fx)
      - [`~/.fx/mcp.json`](#fxmcpjson)
  - [Samples](#samples)
  - [Vibe coding](#vibe-coding)
  - [Additional Resources](#additional-resources)
  - [Security](#security)
  - [Contributing](#contributing)
  - [Developer guide](#developer-guide)
  - [License](#license)
  - [Disclaimer](#disclaimer)

## What is the Model Context Protocol (MCP) and how does it work with MCP Servers for AWS?

> The Model Context Protocol (MCP) is an open protocol that enables seamless integration between LLM applications and external data sources and tools. Whether you're building an AI-powered IDE, enhancing a chat interface, or creating custom AI workflows, MCP provides a standardized way to connect LLMs with the context they need.
>
> &mdash; [Model Context Protocol README](https://github.com/modelcontextprotocol#:~:text=The%20Model%20Context,context%20they%20need.)

An MCP Server is a lightweight program that exposes specific capabilities through the standardized Model Context Protocol. Host applications (such as chatbots, IDEs, and other AI tools) have MCP clients that maintain 1:1 connections with MCP servers. Common MCP clients include agentic AI coding assistants (like Kiro, Cline, Cursor, Windsurf) as well as chatbot applications like Claude Desktop, with more clients coming soon. MCP servers can access local data sources and remote services to provide additional context that improves the generated outputs from the models.

MCP Servers for AWS use this protocol to provide AI applications access to AWS documentation, contextual guidance, and best practices. Through the standardized MCP client-server architecture, AWS capabilities become an intelligent extension of your development environment or AI application.

MCP Servers for AWS enable enhanced cloud-native development, infrastructure management, and development workflows—making AI-assisted cloud computing more accessible and efficient.

The Model Context Protocol is an open source project run by Anthropic, PBC. and open to contributions from the entire community. For more information on MCP, you can find further documentation [here](https://modelcontextprotocol.io/introduction)

## Open source MCP servers for AWS Transport Mechanisms

### Supported transport mechanisms

The MCP protocol currently defines two standard transport mechanisms for client-server communication:
- stdio, communication over standard in and standard out
- streamable HTTP

The MCP servers in this repository are designed to support stdio only.

You are responsible for ensuring that your use of these servers comply with the terms governing them, and any laws, rules, regulations, policies, or standards that apply to you.

### Server Sent Events Support Removal

**Important Notice:** On May 26th, 2025, Server Sent Events (SSE) support was removed from all MCP servers in their latest major versions. This change aligns with the Model Context Protocol specification's [backwards compatibility guidelines](https://modelcontextprotocol.io/specification/2025-03-26/basic/transports#backwards-compatibility).

We are actively working towards supporting [Streamable HTTP](https://modelcontextprotocol.io/specification/draft/basic/transports#streamable-http), which will provide improved transport capabilities for future versions.

For applications still requiring SSE support, please use the previous major version of the respective MCP server until you can migrate to alternative transport methods.

### Why MCP Servers for AWS?

MCP servers enhance the capabilities of foundation models (FMs) in several key ways:

- **Improved Output Quality**: By providing relevant information directly in the model's context, MCP servers significantly improve model responses for specialized domains like AWS services. This approach reduces hallucinations, provides more accurate technical details, enables more precise code generation, and ensures recommendations align with current AWS best practices and service capabilities.

- **Access to Latest Documentation**: FMs may not have knowledge of recent releases, APIs, or SDKs. MCP servers bridge this gap by pulling in up-to-date documentation, ensuring your AI assistant always works with the latest AWS capabilities.

- **Workflow Automation**: MCP servers convert common workflows into tools that foundation models can use directly. Whether it's CDK, Terraform, or other AWS-specific workflows, these tools enable AI assistants to perform complex tasks with greater accuracy and efficiency.

- **Specialized Domain Knowledge**: MCP servers provide deep, contextual knowledge about AWS services that might not be fully represented in foundation models' training data, enabling more accurate and helpful responses for cloud development tasks.

## Available MCP Servers: Quick Installation

Get started quickly with one-click installation buttons for popular MCP clients. Click the buttons below to install servers directly in Cursor or VS Code:

### 🚀 Getting Started with AWS

For AWS interactions, we recommend starting with:

| Server Name                                                                                                 | Description | Install |
|-------------------------------------------------------------------------------------------------------------|-------------|---------|
| [AWS MCP Server (in preview)](https://docs.aws.amazon.com/aws-mcp/latest/userguide/what-is-mcp-server.html) | Start here for secure, auditable AWS interactions! This remote, managed MCP server is hosted by AWS and combines comprehensive AWS API support with access to the latest AWS documentation, API references, What's New posts, and Getting Started information. Features pre-built Agent SOPs that follow AWS best practices, helping agents complete complex multi-step AWS tasks reliably. Built with safety and control in mind: syntactically validated API calls, IAM-based permissions with zero credential exposure, and complete CloudTrail audit logging. Access all AWS services for managing infrastructure, exploring resources, and executing AWS operations with full transparency and traceability. [Read more](https://docs.aws.amazon.com/aws-mcp/latest/userguide/what-is-mcp-server.html) | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=aws-mcp&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22mcp-proxy-for-aws%40latest%22%2C%22https%3A//aws-mcp.us-east-1.api.aws/mcp%22%5D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en-US/install-mcp?name=aws-mcp&config=eyJjb21tYW5kIjoidXZ4IG1jcC1wcm94eS1mb3ItYXdzQGxhdGVzdCBodHRwczovL2F3cy1tY3AudXMtZWFzdC0xLmFwaS5hd3MvbWNwIn0%3D) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://raw.githubusercontent.com/awslabs/mcp/main/<https://insiders.vscode.dev/redirect/mcp/install?name=AWS%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22mcp-proxy-for-aws%40latest%22%2C%22https%3A%2F%2Faws-mcp.us-east-1.api.aws%2Fmcp%22%5D%7D>) |

### Browse by What You're Building

#### 📚 Real-time access to official AWS documentation

| Server Name | Description | Install |
|-------------|-------------|---------|
| [AWS Knowledge MCP Server](https://github.com/awslabs/mcp/blob/main/src/aws-knowledge-mcp-server) | A remote, fully-managed MCP server hosted by AWS that provides access to the latest AWS docs, API references, What's New Posts, Getting Started information, Builder Center, Blog posts, Architectural references, and Well-Architected guidance. | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=aws-knowledge-mcp&config=%7B%22url%22%3A%22https%3A//knowledge-mcp.global.api.aws%22%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=aws-knowledge-mcp&config=eyJ1cmwiOiJodHRwczovL2tub3dsZWRnZS1tY3AuZ2xvYmFsLmFwaS5hd3MifQ==) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://vscode.dev/redirect/mcp/install?name=aws-knowledge-mcp&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fknowledge-mcp.global.api.aws%22%7D) |
| [AWS Documentation MCP Server](https://github.com/awslabs/mcp/blob/main/src/aws-documentation-mcp-server) | Get latest AWS docs and API references | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs.aws-documentation-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.aws-documentation-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%2C%22AWS_DOCUMENTATION_PARTITION%22%3A%22aws%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs.aws-documentation-mcp-server&config=eyJjb21tYW5kIjoidXZ4IGF3c2xhYnMuYXdzLWRvY3VtZW50YXRpb24tbWNwLXNlcnZlckBsYXRlc3QiLCJlbnYiOnsiRkFTVE1DUF9MT0dfTEVWRUwiOiJFUlJPUiIsIkFXU19ET0NVTUVOVEFUSU9OX1BBUlRJVElPTiI6ImF3cyJ9LCJkaXNhYmxlZCI6ZmFsc2UsImF1dG9BcHByb3ZlIjpbXX0%3D) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=AWS%20Documentation%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.aws-documentation-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%2C%22AWS_DOCUMENTATION_PARTITION%22%3A%22aws%22%7D%2C%22disabled%22%3Afalse%2C%22autoApprove%22%3A%5B%5D%7D) |


### 🏗️ Infrastructure & Deployment

Build, deploy, and manage cloud infrastructure with Infrastructure as Code best practices.

| Server Name | Description | Install |
|-------------|-------------|---------|
| [AWS IaC MCP Server](https://github.com/awslabs/mcp/blob/main/src/aws-iac-mcp-server) | Complete Infrastructure as Code toolkit with CloudFormation documentation access, CDK best practices guidance, construct examples, security validation, and deployment troubleshooting | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs.aws-iac-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.aws-iac-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-aws-profile%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs.aws-iac-mcp-server&config=eyJjb21tYW5kIjoidXZ4IGF3c2xhYnMuYXdzLWlhYy1tY3Atc2VydmVyQGxhdGVzdCIsImVudiI6eyJBV1NfUFJPRklMRSI6InlvdXItYXdzLXByb2ZpbGUiLCJGQVNUTUNQX0xPR19MRVZFTCI6IkVSUk9SIn0sImRpc2FibGVkIjpmYWxzZSwiYXV0b0FwcHJvdmUiOltdfQ==IiwiZW52Ijp7IkFXU19QUk9GSUxFIjoieW91ci1hd3MtcHJvZmlsZSIsIkZBU1RNQ1BfTE9HX0xFVkVMIjoiRVJST1IifSwiZGlzYWJsZWQiOmZhbHNlLCJhdXRvQXBwcm92ZSI6W119) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=AWS%20IaC%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.aws-iac-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-aws-profile%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%2C%22disabled%22%3Afalse%2C%22autoApprove%22%3A%5B%5D%7D) |
| [AWS Cloud Control API MCP Server](https://github.com/awslabs/mcp/blob/main/src/ccapi-mcp-server) ⚠️ **DEPRECATED** | Direct AWS resource management with security scanning and best practices (Use [AWS IaC MCP Server](https://github.com/awslabs/mcp/blob/main/src/aws-iac-mcp-server) instead) | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs.ccapi-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.ccapi-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-aws-profile%22%2C%22AWS_REGION%22%3A%22us-east-1%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs.ccapi-mcp-server&config=eyJjb21tYW5kIjoidXZ4IGF3c2xhYnMuY2NhcGktbWNwLXNlcnZlckBsYXRlc3QiLCJlbnYiOnsiQVdTX1BST0ZJTEUiOiJ5b3VyLWF3cy1wcm9maWxlIiwiQVdTX1JFR0lPTiI6InVzLWVhc3QtMSIsIkZBU1RNQ1BfTE9HX0xFVkVMIjoiRVJST1IifSwiZGlzYWJsZWQiOmZhbHNlLCJhdXRvQXBwcm92ZSI6W119) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=AWS%20Cloud%20Control%20API%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.ccapi-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-aws-profile%22%2C%22AWS_REGION%22%3A%22us-east-1%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%2C%22disabled%22%3Afalse%2C%22autoApprove%22%3A%5B%5D%7D) |

#### Container Platforms

| Server Name | Description | Install |
|-------------|-------------|---------|
| [Amazon EKS MCP Server](https://github.com/awslabs/mcp/blob/main/src/eks-mcp-server) | Kubernetes cluster management and application deployment | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs.eks-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.eks-mcp-server%40latest%22%2C%22--allow-write%22%2C%22--allow-sensitive-data-access%22%5D%2C%22env%22%3A%7B%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs.eks-mcp-server&config=eyJhdXRvQXBwcm92ZSI6W10sImRpc2FibGVkIjpmYWxzZSwiY29tbWFuZCI6InV2eCBhd3NsYWJzLmVrcy1tY3Atc2VydmVyQGxhdGVzdCAtLWFsbG93LXdyaXRlIC0tYWxsb3ctc2Vuc2l0aXZlLWRhdGEtYWNjZXNzIiwiZW52Ijp7IkZBU1RNQ1BfTE9HX0xFVkVMIjoiRVJST1IifSwidHJhbnNwb3J0VHlwZSI6InN0ZGlvIn0%3D) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=EKS%20MCP%20Server&config=%7B%22autoApprove%22%3A%5B%5D%2C%22disabled%22%3Afalse%2C%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.eks-mcp-server%40latest%22%2C%22--allow-write%22%2C%22--allow-sensitive-data-access%22%5D%2C%22env%22%3A%7B%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%2C%22transportType%22%3A%22stdio%22%7D) |
| [Amazon ECS MCP Server](https://github.com/awslabs/mcp/blob/main/src/ecs-mcp-server) | Container orchestration and ECS application deployment | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs.ecs-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22--from%22%2C%22awslabs-ecs-mcp-server%22%2C%22ecs-mcp-server%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-aws-profile%22%2C%22AWS_REGION%22%3A%22your-aws-region%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%2C%22FASTMCP_LOG_FILE%22%3A%22/path/to/ecs-mcp-server.log%22%2C%22ALLOW_WRITE%22%3A%22false%22%2C%22ALLOW_SENSITIVE_DATA%22%3A%22false%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs.ecs-mcp-server&config=eyJjb21tYW5kIjoidXZ4IC0tZnJvbSBhd3NsYWJzLWVjcy1tY3Atc2VydmVyIGVjcy1tY3Atc2VydmVyIiwiZW52Ijp7IkFXU19QUk9GSUxFIjoieW91ci1hd3MtcHJvZmlsZSIsIkFXU19SRUdJT04iOiJ5b3VyLWF3cy1yZWdpb24iLCJGQVNUTUNQX0xPR19MRVZFTCI6IkVSUk9SIiwiRkFTVE1DUF9MT0dfRklMRSI6Ii9wYXRoL3RvL2Vjcy1tY3Atc2VydmVyLmxvZyIsIkFMTE9XX1dSSVRFIjoiZmFsc2UiLCJBTExPV19TRU5TSVRJVkVfREFUQSI6ImZhbHNlIn19) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=ECS%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22--from%22%2C%22awslabs-ecs-mcp-server%22%2C%22ecs-mcp-server%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-aws-profile%22%2C%22AWS_REGION%22%3A%22your-aws-region%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%2C%22FASTMCP_LOG_FILE%22%3A%22%2Fpath%2Fto%2Fecs-mcp-server.log%22%2C%22ALLOW_WRITE%22%3A%22false%22%2C%22ALLOW_SENSITIVE_DATA%22%3A%22false%22%7D%7D) |
| [Finch MCP Server](https://github.com/awslabs/mcp/blob/main/src/finch-mcp-server) | Local container building with ECR integration | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs.finch-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.finch-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22default%22%2C%22AWS_REGION%22%3A%22us-west-2%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22INFO%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs.finch-mcp-server&config=eyJjb21tYW5kIjoidXZ4IGF3c2xhYnMuZmluY2gtbWNwLXNlcnZlckBsYXRlc3QiLCJlbnYiOnsiQVdTX1BST0ZJTEUiOiJkZWZhdWx0IiwiQVdTX1JFR0lPTiI6InVzLXdlc3QtMiIsIkZBU1RNQ1BfTE9HX0xFVkVMIjoiSU5GTyJ9LCJ0cmFuc3BvcnRUeXBlIjoic3RkaW8iLCJkaXNhYmxlZCI6ZmFsc2UsImF1dG9BcHByb3ZlIjpbXX0%3D) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=Finch%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.finch-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22default%22%2C%22AWS_REGION%22%3A%22us-west-2%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22INFO%22%7D%2C%22transportType%22%3A%22stdio%22%2C%22disabled%22%3Afalse%2C%22autoApprove%22%3A%5B%5D%7D) |



#### Serverless & Functions

| Server Name | Description | Install |
|-------------|-------------|---------|
| [AWS Serverless MCP Server](https://github.com/awslabs/mcp/blob/main/src/aws-serverless-mcp-server) | Complete serverless application lifecycle with SAM CLI | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs.aws-serverless-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.aws-serverless-mcp-server%40latest%22%2C%22--allow-write%22%2C%22--allow-sensitive-data-access%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-aws-profile%22%2C%22AWS_REGION%22%3A%22us-east-1%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs.aws-serverless-mcp-server&config=eyJjb21tYW5kIjoidXZ4IGF3c2xhYnMuYXdzLXNlcnZlcmxlc3MtbWNwLXNlcnZlckBsYXRlc3QgLS1hbGxvdy13cml0ZSAtLWFsbG93LXNlbnNpdGl2ZS1kYXRhLWFjY2VzcyIsImVudiI6eyJBV1NfUFJPRklMRSI6InlvdXItYXdzLXByb2ZpbGUiLCJBV1NfUkVHSU9OIjoidXMtZWFzdC0xIn0sImRpc2FibGVkIjpmYWxzZSwiYXV0b0FwcHJvdmUiOltdfQ%3D%3D) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=AWS%20Serverless%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.aws-serverless-mcp-server%40latest%22%2C%22--allow-write%22%2C%22--allow-sensitive-data-access%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-aws-profile%22%2C%22AWS_REGION%22%3A%22us-east-1%22%7D%2C%22disabled%22%3Afalse%2C%22autoApprove%22%3A%5B%5D%7D) |
| [AWS Lambda Tool MCP Server](https://github.com/awslabs/mcp/blob/main/src/lambda-tool-mcp-server) | Execute Lambda functions as AI tools for private resource access | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs.lambda-tool-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.lambda-tool-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-aws-profile%22%2C%22AWS_REGION%22%3A%22us-east-1%22%2C%22FUNCTION_PREFIX%22%3A%22your-function-prefix%22%2C%22FUNCTION_LIST%22%3A%22your-first-function%2C%20your-second-function%22%2C%22FUNCTION_TAG_KEY%22%3A%22your-tag-key%22%2C%22FUNCTION_TAG_VALUE%22%3A%22your-tag-value%22%2C%22FUNCTION_INPUT_SCHEMA_ARN_TAG_KEY%22%3A%22your-function-tag-for-input-schema%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs.lambda-tool-mcp-server&config=eyJjb21tYW5kIjoidXZ4IGF3c2xhYnMubGFtYmRhLXRvb2wtbWNwLXNlcnZlckBsYXRlc3QiLCJlbnYiOnsiQVdTX1BST0ZJTEUiOiJ5b3VyLWF3cy1wcm9maWxlIiwiQVdTX1JFR0lPTiI6InVzLWVhc3QtMSIsIkZVTkNUSU9OX1BSRUZJWCI6InlvdXItZnVuY3Rpb24tcHJlZml4IiwiRlVOQ1RJT05fTElTVCI6InlvdXItZmlyc3QtZnVuY3Rpb24sIHlvdXItc2Vjb25kLWZ1bmN0aW9uIiwiRlVOQ1RJT05fVEFHX0tFWSI6InlvdXItdGFnLWtleSIsIkZVTkNUSU9OX1RBR19WQUxVRSI6InlvdXItdGFnLXZhbHVlIiwiRlVOQ1RJT05fSU5QVVRfU0NIRU1BX0FSTl9UQUdfS0VZIjoieW91ci1mdW5jdGlvbi10YWctZm9yLWlucHV0LXNjaGVtYSJ9fQ%3D%3D) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=AWS%20Lambda%20Tool%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.lambda-tool-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-aws-profile%22%2C%22AWS_REGION%22%3A%22us-east-1%22%2C%22FUNCTION_PREFIX%22%3A%22your-function-prefix%22%2C%22FUNCTION_LIST%22%3A%22your-first-function%2C%20your-second-function%22%2C%22FUNCTION_TAG_KEY%22%3A%22your-tag-key%22%2C%22FUNCTION_TAG_VALUE%22%3A%22your-tag-value%22%2C%22FUNCTION_INPUT_SCHEMA_ARN_TAG_KEY%22%3A%22your-function-tag-for-input-schema%22%7D%7D) |


#### Migration & Modernization

| Server Name | Description | Install |
|-------------|-------------|---------|
| [AWS Transform MCP Server](https://github.com/awslabs/mcp/blob/main/src/aws-transform-mcp-server) | Manage AWS Transform workspaces, jobs, connectors, HITL tasks, and artifacts for mainframe, VMware, .NET, and custom code transformations | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs.aws-transform-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.aws-transform-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs.aws-transform-mcp-server&config=eyJjb21tYW5kIjoidXZ4IGF3c2xhYnMuYXdzLXRyYW5zZm9ybS1tY3Atc2VydmVyQGxhdGVzdCIsImVudiI6eyJGQVNUTUNQX0xPR19MRVZFTCI6IkVSUk9SIn0sImRpc2FibGVkIjpmYWxzZSwiYXV0b0FwcHJvdmUiOltdfQ==) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=AWS%20Transform%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.aws-transform-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%2C%22disabled%22%3Afalse%2C%22autoApprove%22%3A%5B%5D%7D) |

#### Support

| Server Name | Description | Install |
|-------------|-------------|---------|
| [AWS Support MCP Server](https://github.com/awslabs/mcp/blob/main/src/aws-support-mcp-server) | Help users create and manage AWS Support cases | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs_support_mcp_server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22-m%22%2C%22awslabs.aws-support-mcp-server%40latest%22%2C%22--debug%22%2C%22--log-file%22%2C%22./logs/mcp_support_server.log%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-aws-profile%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs_support_mcp_server&config=eyJjb21tYW5kIjoidXZ4IC1tIGF3c2xhYnMuYXdzLXN1cHBvcnQtbWNwLXNlcnZlckBsYXRlc3QgLS1kZWJ1ZyAtLWxvZy1maWxlIC4vbG9ncy9tY3Bfc3VwcG9ydF9zZXJ2ZXIubG9nIiwiZW52Ijp7IkFXU19QUk9GSUxFIjoieW91ci1hd3MtcHJvZmlsZSJ9fQ%3D%3D) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=AWS%20Support%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22-m%22%2C%22awslabs.aws-support-mcp-server%40latest%22%2C%22--debug%22%2C%22--log-file%22%2C%22.%2Flogs%2Fmcp_support_server.log%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-aws-profile%22%7D%7D) |

### 🤖 AI & Machine Learning
Enhance AI applications with knowledge retrieval, content generation, and ML capabilities

| Server Name | Description | Install |
|-------------|-------------|---------|
| [Amazon Bedrock Knowledge Bases Retrieval MCP Server ](https://github.com/awslabs/mcp/blob/main/src/bedrock-kb-retrieval-mcp-server) | Query enterprise knowledge bases with citation support | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs.bedrock-kb-retrieval-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.bedrock-kb-retrieval-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-profile-name%22%2C%22AWS_REGION%22%3A%22us-east-1%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%2C%22KB_INCLUSION_TAG_KEY%22%3A%22optional-tag-key-to-filter-kbs%22%2C%22BEDROCK_KB_RERANKING_ENABLED%22%3A%22false%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs.bedrock-kb-retrieval-mcp-server&config=eyJjb21tYW5kIjoidXZ4IGF3c2xhYnMuYmVkcm9jay1rYi1yZXRyaWV2YWwtbWNwLXNlcnZlckBsYXRlc3QiLCJlbnYiOnsiQVdTX1BST0ZJTEUiOiJ5b3VyLXByb2ZpbGUtbmFtZSIsIkFXU19SRUdJT04iOiJ1cy1lYXN0LTEiLCJGQVNUTUNQX0xPR19MRVZFTCI6IkVSUk9SIiwiS0JfSU5DTFVTSU9OX1RBR19LRVkiOiJvcHRpb25hbC10YWcta2V5LXRvLWZpbHRlci1rYnMiLCJCRURST0NLX0tCX1JFUkFOS0lOR19FTkFCTEVEIjoiZmFsc2UifSwiZGlzYWJsZWQiOmZhbHNlLCJhdXRvQXBwcm92ZSI6W119) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=Bedrock%20KB%20Retrieval%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.bedrock-kb-retrieval-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-profile-name%22%2C%22AWS_REGION%22%3A%22us-east-1%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%2C%22KB_INCLUSION_TAG_KEY%22%3A%22optional-tag-key-to-filter-kbs%22%2C%22BEDROCK_KB_RERANKING_ENABLED%22%3A%22false%22%7D%2C%22disabled%22%3Afalse%2C%22autoApprove%22%3A%5B%5D%7D) |
| [Amazon Kendra Index MCP Server](https://github.com/awslabs/mcp/blob/main/src/amazon-kendra-index-mcp-server) | Enterprise search and RAG enhancement | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs.amazon-kendra-index-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.amazon-kendra-index-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_REGION%22%3A%22us-east-1%22%2C%22KEND_INDEX_ID%22%3A%22your-kendra-index-id%22%2C%22KEND_ROLE_ARN%22%3A%22your-kendra-role-arn%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs.amazon-kendra-index-mcp-server&config=eyJjb21tYW5kIjoidXZ4IGF3c2xhYnMuYW1hem9uLWtlbmRyYS1pbmRleC1tY3Atc2VydmVyQGxhdGVzdCIsImVudiI6eyJBV1NfUkVHSU9OIjoidXMtZWFzdC0xIiwiS0VORF9JTkRFWF9JRCI6InlvdXIta2VuZHJhLWluZGV4LWlkIiwiS0VORF9ST0xFX0FSTiI6InlvdXIta2VuZHJhLXJvbGUtYXJuIiwiRkFTVE1DUF9MT0dfTEVWRUwiOiJFUlJPUiJ9LCJkaXNhYmxlZCI6ZmFsc2UsImF1dG9BcHByb3ZlIjpbXX0%3D) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=Amazon%20Kendra%20Index%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.amazon-kendra-index-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_REGION%22%3A%22us-east-1%22%2C%22KEND_INDEX_ID%22%3A%22your-kendra-index-id%22%2C%22KEND_ROLE_ARN%22%3A%22your-kendra-role-arn%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%2C%22disabled%22%3Afalse%2C%22autoApprove%22%3A%5B%5D%7D) |
| [Amazon Q Business MCP Server](https://github.com/awslabs/mcp/blob/main/src/amazon-qbusiness-anonymous-mcp-server) | AI assistant for your ingested content with anonymous access | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs.amazon-qbusiness-anonymous-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.amazon-qbusiness-anonymous-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22QBUSINESS_APP_ID%22%3A%22your-qbusiness-app-id%22%2C%22QBUSINESS_USER_ID%22%3A%22your-user-id%22%2C%22AWS_PROFILE%22%3A%22your-aws-profile%22%2C%22AWS_REGION%22%3A%22us-east-1%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs.amazon-qbusiness-anonymous-mcp-server&config=eyJjb21tYW5kIjoidXZ4IGF3c2xhYnMuYW1hem9uLXFidXNpbmVzcy1hbm9ueW1vdXMtbWNwLXNlcnZlckBsYXRlc3QiLCJlbnYiOnsiUUJVU0lORVNTX0FQUF9JRCI6InlvdXItcWJ1c2luZXNzLWFwcC1pZCIsIlFCVVNJTkVTU19VU0VSX0lEIjoieW91ci11c2VyLWlkIiwiQVdTX1BST0ZJTEUiOiJ5b3VyLWF3cy1wcm9maWxlIiwiQVdTX1JFR0lPTiI6InVzLWVhc3QtMSIsIkZBU1RNQ1BfTE9HX0xFVkVMIjoiRVJST1IifSwiZGlzYWJsZWQiOmZhbHNlLCJhdXRvQXBwcm92ZSI6W119) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=Amazon%20Q%20Business%20Anonymous%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.amazon-qbusiness-anonymous-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22QBUSINESS_APP_ID%22%3A%22your-qbusiness-app-id%22%2C%22QBUSINESS_USER_ID%22%3A%22your-user-id%22%2C%22AWS_PROFILE%22%3A%22your-aws-profile%22%2C%22AWS_REGION%22%3A%22us-east-1%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%2C%22disabled%22%3Afalse%2C%22autoApprove%22%3A%5B%5D%7D) |
| [Amazon Q Index MCP Server](https://github.com/awslabs/mcp/blob/main/src/amazon-qindex-mcp-server) | Data accessors to search through enterprise's Q index | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs.amazon-qindex-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.amazon-qindex-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_REGION%22%3A%22us-east-1%22%2C%22QINDEX_ID%22%3A%22your-qindex-id%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs.amazon-qindex-mcp-server&config=eyJjb21tYW5kIjoidXZ4IGF3c2xhYnMuYW1hem9uLXFpbmRleC1tY3Atc2VydmVyQGxhdGVzdCIsImVudiI6eyJBV1NfUkVHSU9OIjoidXMtZWFzdC0xIiwiUUlOREVYX0lEIjoieW91ci1xaW5kZXgtaWQiLCJGQVNUTUNQX0xPR19MRVZFTCI6IkVSUk9SIn0sImRpc2FibGVkIjpmYWxzZSwiYXV0b0FwcHJvdmUiOltdfQ%3D%3D) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=Amazon%20Q%20Index%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.amazon-qindex-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_REGION%22%3A%22us-east-1%22%2C%22QINDEX_ID%22%3A%22your-qindex-id%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%2C%22disabled%22%3Afalse%2C%22autoApprove%22%3A%5B%5D%7D) |
| [AWS Bedrock Custom Model Import MCP Server](https://github.com/awslabs/mcp/blob/main/src/aws-bedrock-custom-model-import-mcp-server) | Manage custom models in Bedrock for on-demand inference | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=aws-bedrock-custom-model-import-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.aws-bedrock-custom-model-import-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-aws-profile%22%2C%22AWS_REGION%22%3A%22us-east-1%22%2C%22BEDROCK_MODEL_IMPORT_S3_BUCKET%22%3A%22your-s3-bucket-name%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=aws-bedrock-custom-model-import-mcp-server&config=eyJjb21tYW5kIjoidXZ4IGF3c2xhYnMuYXdzLWJlZHJvY2stY3VzdG9tLW1vZGVsLWltcG9ydC1tY3Atc2VydmVyQGxhdGVzdCIsImVudiI6eyJBV1NfUFJPRklMRSI6InlvdXItYXdzLXByb2ZpbGUiLCJBV1NfUkVHSU9OIjoidXMtZWFzdC0xIiwiQkVEUk9DS19NT0RFTF9JTVBPUlRfUzNfQlVDS0VUIjoieW91ci1zMy1idWNrZXQtbmFtZSIsIkZBU1RNQ1BfTE9HX0xFVkVMIjoiRVJST1IifSwiZGlzYWJsZWQiOmZhbHNlLCJhdXRvQXBwcm92ZSI6W119) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=AWS%20Bedrock%20Custom%20Model%20Import%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.aws-bedrock-custom-model-import-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-aws-profile%22%2C%22AWS_REGION%22%3A%22us-east-1%22%2C%22BEDROCK_MODEL_IMPORT_S3_BUCKET%22%3A%22your-s3-bucket-name%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%2C%22disabled%22%3Afalse%2C%22autoApprove%22%3A%5B%5D%7D) |
| [AWS Bedrock AgentCore MCP Server](https://github.com/awslabs/mcp/blob/main/src/amazon-bedrock-agentcore-mcp-server) | Provides comprehensive documentation access on AgentCore platform services, APIs, and best practices | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs.amazon-bedrock-agentcore-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.amazon-bedrock-agentcore-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs.amazon-bedrock-agentcore-mcp-server&config=eyJjb21tYW5kIjoidXZ4IGF3c2xhYnMuYW1hem9uLWJlZHJvY2stYWdlbnRjb3JlLW1jcC1zZXJ2ZXJAbGF0ZXN0IiwiZW52Ijp7IkZBU1RNQ1BfTE9HX0xFVkVMIjoiRVJST1IifSwiZGlzYWJsZWQiOmZhbHNlLCJhdXRvQXBwcm92ZSI6W119) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=AWS%20Bedrock%20AgentCore%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.amazon-bedrock-agentcore-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%2C%22disabled%22%3Afalse%2C%22autoApprove%22%3A%5B%5D%7D) |
| [Amazon Translate MCP Server](https://github.com/awslabs/mcp/blob/main/src/amazon-translate-mcp-server) | Neural machine translation across 75+ languages with batch processing and custom terminology | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs.amazon-translate-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.amazon-translate-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-aws-profile%22%2C%22AWS_REGION%22%3A%22us-east-1%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs.amazon-translate-mcp-server&config=eyJjb21tYW5kIjoidXZ4IGF3c2xhYnMuYW1hem9uLXRyYW5zbGF0ZS1tY3Atc2VydmVyQGxhdGVzdCIsImVudiI6eyJBV1NfUFJPRklMRSI6InlvdXItYXdzLXByb2ZpbGUiLCJBV1NfUkVHSU9OIjoidXMtZWFzdC0xIiwiRkFTVE1DUF9MT0dfTEVWRUwiOiJFUlJPUiJ9LCJkaXNhYmxlZCI6ZmFsc2UsImF1dG9BcHByb3ZlIjpbXX0%3D) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=Amazon%20Translate%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.amazon-translate-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22AWS_PROFILE%22%3A%22your-aws-profile%22%2C%22AWS_REGION%22%3A%22us-east-1%22%2C%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%2C%22disabled%22%3Afalse%2C%22autoApprove%22%3A%5B%5D%7D) |
| [Amazon SageMaker AI MCP Server](https://github.com/awslabs/mcp/blob/main/src/sagemaker-ai-mcp-server) | SageMaker AI resource management and model development | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs.sagemaker-ai-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.sagemaker-ai-mcp-server%40latest%22%2C%22--allow-write%22%2C%22--allow-sensitive-data-access%22%5D%2C%22env%22%3A%7B%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs.sagemaker-ai-mcp-server&config=eyJhdXRvQXBwcm92ZSI6W10sImRpc2FibGVkIjpmYWxzZSwiY29tbWFuZCI6InV2eCBhd3NsYWJzLnNhZ2VtYWtlci1haS1tY3Atc2VydmVyQGxhdGVzdCAtLWFsbG93LXdyaXRlIC0tYWxsb3ctc2Vuc2l0aXZlLWRhdGEtYWNjZXNzIiwiZW52Ijp7IkZBU1RNQ1BfTE9HX0xFVkVMIjoiRVJST1IifSwidHJhbnNwb3J0VHlwZSI6InN0ZGlvIn0%3D) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=SageMaker%20AI%20MCP%20Server&config=%7B%22autoApprove%22%3A%5B%5D%2C%22disabled%22%3Afalse%2C%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.sagemaker-ai-mcp-server%40latest%22%2C%22--allow-write%22%2C%22--allow-sensitive-data-access%22%5D%2C%22env%22%3A%7B%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%2C%22transportType%22%3A%22stdio%22%7D) |
| [Registry of Open Data (RODA) MCP Server](https://github.com/awslabs/mcp/blob/main/src/roda-mcp-server) | Discover, explore, and preview open datasets on AWS | [![Install](https://img.shields.io/badge/Install-Kiro-9046FF?style=flat-square&logo=kiro)](https://kiro.dev/launch/mcp/add?name=awslabs.roda-mcp-server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.roda-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%7D) <br/>[![Install](https://img.shields.io/badge/Install-Cursor-blue?style=flat-square&logo=cursor)](https://cursor.com/en/install-mcp?name=awslabs.roda-mcp-server&config=eyJjb21tYW5kIjoidXZ4IGF3c2xhYnMucm9kYS1tY3Atc2VydmVyQGxhdGVzdCIsImVudiI6eyJGQVNUTUNQX0xPR19MRVZFTCI6IkVSUk9SIn0sImRpc2FibGVkIjpmYWxzZSwiYXV0b0FwcHJvdmUiOltdfQ==) <br/>[![Install on VS Code](https://img.shields.io/badge/Install-VS_Code-FF9900?style=flat-square&logo=visualstudiocode&logoColor=white)](https://insiders.vscode.dev/redirect/mcp/install?name=RODA%20MCP%20Server&config=%7B%22command%22%3A%22uvx%22%2C%22args%22%3A%5B%22awslabs.roda-mcp-server%40latest%22%5D%2C%22env%22%3A%7B%22FASTMCP_LOG_LEVEL%22%3A%22ERROR%22%7D%2C%22disabled%22%3Afalse%2C%22autoApprove%22%3A%5B%5D%7D) |


### 📊 Data & Analytics

Work with databases, caching systems, and data processing workflows.

#### SQL & NoSQL Databases

*(README truncated for display. [Read the full README on GitHub](https://github.com/awslabs/mcp)).*
