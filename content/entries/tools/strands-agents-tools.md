---
slug: strands-agents-tools
name: tools
tagline: A set of tools that gives agents powerful capabilities.
summary: A model-driven approach to building AI agents in just a few lines of code.
categories:
  - agent-frameworks
tags:
  - agentic
  - agentic-ai
  - agents
  - anthropic
status: active
quality_percentile: 94
selection_reason: quality_percentile
first_seen: 2026-10-19
last_updated: 2026-11-02T09:07:29.758Z
source:
  kind: github_repo
  repo: strands-agents/tools
  official_vendor: false
  license: Apache-2.0
signals:
  stars: 1342
  last_commit: 2026-10-30T17:29:32Z
  stars_delta_7d: 5
  stars_growth_pct: 0.4
  trending_score: 5.02
  rank_current: 130
  rank_delta: -15
  velocity_source: snapshot_delta
  sparkline_4w:
    - 1327
    - 1337
    - 1342
language: en
needs_keys: false
prerequisites:
  - python
readme_source:
  repo: strands-agents/tools
  path: README.md
  branch: main
  fetched_at: 2026-11-02T09:07:13.565Z
  truncated: true
type: agent_tool
tool:
  subcategory: agent_framework
  install_command: pip install strands-agents-tools
  runtime: python
  execution_mode: local
  has_mcp_support: false
---

<div align="center">
  <div>
    <a href="https://strandsagents.com">
      <picture>
        <source media="(prefers-color-scheme: dark)" srcset="https://strandsagents.com/latest/assets/wordmark-github-dark.svg">
        <img src="https://strandsagents.com/latest/assets/wordmark-github-light.svg" alt="Strands" width="320">
      </picture>
    </a>
  </div>

  <h1>
    Strands Agents Tools
  </h1>

  <h2>
    A model-driven approach to building AI agents in just a few lines of code.
  </h2>

  <div align="center">
    <a href="https://github.com/strands-agents/tools/graphs/commit-activity"><img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/strands-agents/tools"/></a>
    <a href="https://github.com/strands-agents/tools/issues"><img alt="GitHub open issues" src="https://img.shields.io/github/issues/strands-agents/tools"/></a>
    <a href="https://github.com/strands-agents/tools/pulls"><img alt="GitHub open pull requests" src="https://img.shields.io/github/issues-pr/strands-agents/tools"/></a>
    <a href="https://github.com/strands-agents/tools/blob/main/LICENSE"><img alt="License" src="https://img.shields.io/github/license/strands-agents/tools"/></a>
    <a href="https://pypi.org/project/strands-agents-tools/"><img alt="PyPI version" src="https://img.shields.io/pypi/v/strands-agents-tools"/></a>
    <a href="https://python.org"><img alt="Python versions" src="https://img.shields.io/pypi/pyversions/strands-agents-tools"/></a>
    <a href="https://discord.gg/strands"><img alt="Strands Discord" src="https://img.shields.io/badge/Discord-Strands-5865F2?logo=discord&logoColor=white"/></a>
  </div>

  <p>
    <a href="https://strandsagents.com/">Documentation</a>
    ◆ <a href="https://github.com/strands-agents/samples">Samples</a>
    ◆ <a href="https://github.com/strands-agents/harness-sdk/tree/main/strands-cli">CLI</a>
    ◆ <a href="https://github.com/strands-agents/harness-sdk/tree/main/strands-mcp">MCP Server</a>
    <br>
    Harness (<a href="https://github.com/strands-agents/harness-sdk/tree/main/harness-py">Python</a>, <a href="https://github.com/strands-agents/harness-sdk/tree/main/harness-ts">TypeScript</a>)
    ◆ SDK (<a href="https://github.com/strands-agents/harness-sdk/tree/main/strands-py">Python</a>, <a href="https://github.com/strands-agents/harness-sdk/tree/main/strands-ts">TypeScript</a>)
    ◆ <a href="https://github.com/strands-agents/box">Box</a>
    ◆ <a href="https://github.com/strands-agents/shell">Shell</a>
    ◆ <a href="https://github.com/strands-agents/evals">Evals</a>
    ◆ <a href="https://github.com/strands-labs">Labs</a>
  </p>
</div>

Strands Agents Tools is a community-driven project that provides a powerful set of tools for your agents to use. It bridges the gap between large language models and practical applications by offering ready-to-use tools for file operations, system execution, API interactions, mathematical operations, and more.

## ✨ Features

- 📁 **File Operations** - Read, write, and edit files with syntax highlighting and intelligent modifications
- 🖥️ **Shell Integration** - Execute and interact with shell commands securely
- 🧠 **Memory** - Store user and agent memories across agent runs to provide personalized experiences with both Mem0, Amazon Bedrock Knowledge Bases, Elasticsearch, and MongoDB Atlas
- 🕸️ **Web Infrastructure** - Perform web searches, extract page content, and crawl websites with Tavily and Exa-powered tools
- 🌐 **HTTP Client** - Make API requests with comprehensive authentication support
- 💬 **Slack Client** - Real-time Slack events, message processing, and Slack API access
- 🐍 **Python Execution** - Run Python code snippets with state persistence, user confirmation for code execution, and safety features
- 🧮 **Mathematical Tools** - Perform advanced calculations with symbolic math capabilities
- ☁️ **AWS Integration** - Seamless access to AWS services
- 🖼️ **Image Processing** - Generate and process images for AI applications
- 🎥 **Video Processing** - Use models and agents to generate dynamic videos
- 🎙️ **Audio Output** - Enable models to generate audio and speak
- 🔄 **Environment Management** - Handle environment variables safely
- 📝 **Journaling** - Create and manage structured logs and journals
- ⏱️ **Task Scheduling** - Schedule and manage cron jobs
- 🧠 **Advanced Reasoning** - Tools for complex thinking and reasoning capabilities
- 🐝 **Swarm Intelligence** - Coordinate multiple AI agents for parallel problem solving with shared memory
- 🤖 **Agent as Tool** - Create nested agent instances with model switching support for multi-model workflows and specialized sub-tasks
- 🔗 **Multi-Agent Graph** - Create and manage deterministic DAG-based multi-agent pipelines with output propagation and per-node model configuration
- 🔌 **Dynamic MCP Client** - ⚠️ Dynamically connect to external MCP servers and load remote tools (use with caution - see security warnings)
- 🔄 **Multiple Tools per Turn** - Call several other tools from one model response with Batch Tool
- 🔍 **Browser Tool** - Tool giving an agent access to perform automated actions on a browser (chromium)
- 📈 **Diagram** - Create AWS cloud diagrams, basic diagrams, or UML diagrams using python libraries
- 📰 **RSS Feed Manager** - Subscribe, fetch, and process RSS feeds with content filtering and persistent storage
- 🖱️ **Computer Tool** - Automate desktop actions including mouse movements, keyboard input, screenshots, and application management

> [!IMPORTANT]
> **The tools in this repository are experimental.** Many of them grant agents powerful capabilities — executing code, accessing the file system, calling AWS APIs, connecting to external servers, and automating browsers and desktops — which carry real security implications. Any production use should be preceded by your own independent security review; see the [Responsible AI guidance](https://strandsagents.com/docs/user-guide/safety-security/responsible-ai/) for best practices. Use of these tools is at your own risk.

## 📦 Installation

### Quick Install

```bash
pip install strands-agents-tools
```

To install the dependencies for optional tools:

```bash
pip install "strands-agents-tools[mem0_memory, use_browser, rss, use_computer]"
```

### Development Install

```bash
# Clone the repository
git clone https://github.com/strands-agents/tools.git
cd tools

# Create and activate virtual environment
python3 -m venv .venv
source .venv/bin/activate  # On Windows: .venv\Scripts\activate

# Install in development mode
pip install -e ".[dev]"

# Install pre-commit hooks
pre-commit install
```

### Tools Overview

Below is a comprehensive table of all available tools, how to use them with an agent, and typical use cases:

| Tool | Agent Usage | Use Case |
|------|-------------|----------|
| a2a_client ⚠️ | `provider = A2AClientToolProvider(known_agent_urls=["http://localhost:9000"]); agent = Agent(tools=provider.tools)` | Discover and communicate with A2A-compliant agents, send messages between agents <br> **Deprecated — see [Deprecations](#deprecations)** |
| file_read | `agent.tool.file_read(path="path/to/file.txt")` | Reading configuration files, parsing code files, loading datasets |
| file_write | `agent.tool.file_write(path="path/to/file.txt", content="file content")` | Writing results to files, creating new files, saving output data |
| editor ⚠️ | `agent.tool.editor(command="view", path="path/to/file.py")` | Advanced file operations like syntax highlighting, pattern replacement, and multi-file edits <br> **Deprecated — see [Deprecations](#deprecations)** |
| shell* ⚠️ | `agent.tool.shell(command="ls -la")` | Executing shell commands, interacting with the operating system, running scripts <br> **Deprecated — see [Deprecations](#deprecations)** |
| http_request ⚠️ | `agent.tool.http_request(method="GET", url="https://api.example.com/data")` | Making API calls, fetching web data, sending data to external services <br> **Deprecated — see [Deprecations](#deprecations)** |
| tavily_search ⚠️ | `agent.tool.tavily_search(query="What is artificial intelligence?", search_depth="advanced")` | Real-time web search optimized for AI agents with a variety of custom parameters <br> **Deprecated — see [Deprecations](#deprecations)** |
| tavily_extract ⚠️ | `agent.tool.tavily_extract(urls=["www.tavily.com"], extract_depth="advanced")` | Extract clean, structured content from web pages with advanced processing and noise removal <br> **Deprecated — see [Deprecations](#deprecations)** |
| tavily_crawl ⚠️ | `agent.tool.tavily_crawl(url="www.tavily.com", max_depth=2, instructions="Find API docs")` | Crawl websites intelligently starting from a base URL with filtering and extraction <br> **Deprecated — see [Deprecations](#deprecations)** |
| tavily_map ⚠️ | `agent.tool.tavily_map(url="www.tavily.com", max_depth=2, instructions="Find all pages")` | Map website structure and discover URLs starting from a base URL without content extraction <br> **Deprecated — see [Deprecations](#deprecations)** |
| exa_search ⚠️ | `agent.tool.exa_search(query="Best project management tools", text=True)` | Intelligent web search with auto mode (default) for optimal results, plus fast and deep search modes <br> **Deprecated — see [Deprecations](#deprecations)** |
| exa_get_contents ⚠️ | `agent.tool.exa_get_contents(urls=["https://example.com/article"], text=True, summary={"query": "key points"})` | Extract full content and summaries from specific URLs with live crawling fallback <br> **Deprecated — see [Deprecations](#deprecations)** |
| python_repl* ⚠️ | `agent.tool.python_repl(code="import pandas as pd\ndf = pd.read_csv('data.csv')\nprint(df.head())")` | Running Python code snippets, data analysis, executing complex logic with user confirmation for security <br> **Deprecated — see [Deprecations](#deprecations)** |
| calculator ⚠️ | `agent.tool.calculator(expression="2 * sin(pi/4) + log(e**2)")` | Performing mathematical operations, symbolic math, equation solving <br> **Deprecated — see [Deprecations](#deprecations)** |
| code_interpreter ⚠️ | `code_interpreter = AgentCoreCodeInterpreter(region="us-west-2"); agent = Agent(tools=[code_interpreter.code_interpreter])` | Execute code in isolated sandbox environments with multi-language support (Python, JavaScript, TypeScript), persistent sessions, and file operations <br> **Deprecated — see [Deprecations](#deprecations)** |
| use_aws | `agent.tool.use_aws(service_name="s3", operation_name="list_buckets", parameters={}, region="us-west-2")` | Interacting with AWS services, cloud resource management |
| retrieve ⚠️ | `agent.tool.retrieve(text="What is STRANDS?")` | Retrieving information from Amazon Bedrock Knowledge Bases with optional metadata <br> **Deprecated — see [Deprecations](#deprecations)** |
| nova_reels ⚠️ | `agent.tool.nova_reels(action="create", text="A cinematic shot of mountains", s3_bucket="my-bucket")` | Create high-quality videos using Amazon Bedrock Nova Reel with configurable parameters via environment variables <br> **Deprecated — see [Deprecations](#deprecations)** |
| agent_core_memory ⚠️ | `agent.tool.agent_core_memory(action="record", content="Hello, I like vegetarian food")` | Store and retrieve memories with Amazon Bedrock Agent Core Memory service <br> **Deprecated — see [Deprecations](#deprecations)** |
| mem0_memory ⚠️ | `agent.tool.mem0_memory(action="store", content="Remember I like to play tennis")` | Store user and agent memories across agent runs to provide personalized experience (tenant identity configured via `Mem0MemoryTool` or environment variables) <br> **Deprecated — see [Deprecations](#deprecations)** |
| bright_data ⚠️ | `agent.tool.bright_data(action="scrape_as_markdown", url="https://example.com")` | Web scraping, search queries, screenshot capture, and structured data extraction from websites and different data feeds <br> **Deprecated — see [Deprecations](#deprecations)** |
| memory ⚠️ | `agent.tool.memory(action="retrieve", query="product features")` | Store, retrieve, list, and manage documents in Amazon Bedrock Knowledge Bases with configurable parameters via environment variables <br> **Deprecated — see [Deprecations](#deprecations)** |
| environment ⚠️ | `agent.tool.environment(action="list", prefix="AWS_")` | Managing environment variables, configuration management <br> **Deprecated — see [Deprecations](#deprecations)** |
| generate_image_stability ⚠️ | `agent.tool.generate_image_stability(prompt="A tranquil pool")` | Creating images using Stability AI models <br> **Deprecated — see [Deprecations](#deprecations)** |
| generate_image ⚠️ | `agent.tool.generate_image(prompt="A sunset over mountains")` | Creating AI-generated images for various applications <br> **Deprecated — see [Deprecations](#deprecations)** |
| image_reader ⚠️ | `agent.tool.image_reader(image_path="path/to/image.jpg")` | Processing and reading image files for AI analysis <br> **Deprecated — see [Deprecations](#deprecations)** |
| journal ⚠️ | `agent.tool.journal(action="write", content="Today's progress notes")` | Creating structured logs, maintaining documentation <br> **Deprecated — see [Deprecations](#deprecations)** |
| think ⚠️ | `agent.tool.think(thought="Complex problem to analyze", cycle_count=3)` | Advanced reasoning, multi-step thinking processes <br> **Deprecated — see [Deprecations](#deprecations)** |
| load_tool ⚠️ | `agent.tool.load_tool(path="path/to/custom_tool.py", name="custom_tool")` | Dynamically loading custom tools and extensions <br> **Deprecated — see [Deprecations](#deprecations)** |
| swarm ⚠️ | `agent.tool.swarm(task="Analyze this problem", swarm_size=3, coordination_pattern="collaborative")` | Coordinating multiple AI agents to solve complex problems through collective intelligence <br> **Deprecated — see [Deprecations](#deprecations)** |
| current_time ⚠️ | `agent.tool.current_time(timezone="US/Pacific")` | Get the current time in ISO 8601 format for a specified timezone <br> **Deprecated — see [Deprecations](#deprecations)** |
| sleep ⚠️ | `agent.tool.sleep(seconds=5)` | Pause execution for the specified number of seconds, interruptible with SIGINT (Ctrl+C) <br> **Deprecated — see [Deprecations](#deprecations)** |
| agent_graph | `agent.tool.agent_graph(agents=["agent1", "agent2"], connections=[{"from": "agent1", "to": "agent2"}])` | Create and visualize agent relationship graphs for complex multi-agent systems |
| graph | `agent.tool.graph(action="create", graph_id="pipeline", topology={"nodes": [...], "edges": [...]})` | Create and manage deterministic DAG-based multi-agent graphs using Strands SDK Graph implementation with per-node model configuration |
| cron* ⚠️ | `agent.tool.cron(action="schedule", name="task", schedule="0 * * * *", command="backup.sh")` | Schedule and manage recurring tasks with cron job syntax <br> **Does not work on Windows** <br> **Deprecated — see [Deprecations](#deprecations)** |
| slack ⚠️ | `agent.tool.slack(action="post_message", channel="general", text="Hello team!")` | Interact with Slack workspace for messaging and monitoring <br> **Deprecated — see [Deprecations](#deprecations)** |
| speak ⚠️ | `agent.tool.speak(text="Operation completed successfully", style="green", mode="polly")` | Output status messages with rich formatting and optional text-to-speech <br> **Deprecated — see [Deprecations](#deprecations)** |
| stop | `agent.tool.stop(message="Process terminated by user request")` | Gracefully terminate agent execution with custom message |
| handoff_to_user ⚠️ | `agent.tool.handoff_to_user(message="Please confirm action", breakout_of_loop=False)` | Hand off control to user for confirmation, input, or complete task handoff <br> **Deprecated — see [Deprecations](#deprecations)** |
| use_llm ⚠️ | `agent.tool.use_llm(prompt="Analyze this data", system_prompt="You are a data analyst")` | Create nested AI loops with customized system prompts for specialized tasks <br> **Deprecated — see [Deprecations](#deprecations)** |
| use_agent ⚠️ | `agent.tool.use_agent(prompt="Analyze this code", system_prompt="You are a code analyst.", model_provider="bedrock")` | Create nested agent instances with model switching, multi-model workflows, cost optimization, and specialized sub-tasks <br> **Deprecated — see [Deprecations](#deprecations)** |
| workflow | `agent.tool.workflow(action="create", name="data_pipeline", steps=[{"tool": "file_read"}, {"tool": "python_repl"}])` | Define, execute, and manage multi-step automated workflows |
| mcp_client ⚠️ | `agent.tool.mcp_client(action="connect", connection_id="my_server", transport="stdio", command="python", args=["server.py"])` | ⚠️ **SECURITY WARNING**: Dynamically connect to external MCP servers via stdio, sse, or streamable_http, list tools, and call remote tools. This can pose security risks as agents may connect to malicious servers. Use with caution in production. <br> **Deprecated — see [Deprecations](#deprecations)** |
| batch ⚠️ | `agent.tool.batch(invocations=[{"name": "current_time", "arguments": {"timezone": "Europe/London"}}, {"name": "stop", "arguments": {}}])` | Call multiple other tools from one request. <br> **Deprecated — see [Deprecations](#deprecations)** |
| browser ⚠️ | `browser = LocalChromiumBrowser(); agent = Agent(tools=[browser.browser])` | Web scraping, automated testing, form filling, web automation tasks <br> **Deprecated — see [Deprecations](#deprecations)** |
| diagram ⚠️ | `agent.tool.diagram(diagram_type="cloud", nodes=[{"id": "s3", "type": "S3"}], edges=[])` | Create AWS cloud architecture diagrams, network diagrams, graphs, and UML diagrams (all 14 types) <br> **Deprecated — see [Deprecations](#deprecations)** |
| rss ⚠️ | `agent.tool.rss(action="subscribe", url="https://example.com/feed.xml", feed_id="tech_news")` | Manage RSS feeds: subscribe, fetch, read, search, and update content from various sources <br> **Deprecated — see [Deprecations](#deprecations)** |
| use_computer ⚠️ | `agent.tool.use_computer(action="click", x=100, y=200, app_name="Chrome") ` | Desktop automation, GUI interaction, screen capture <br> **Deprecated — see [Deprecations](#deprecations)** |
| search_video ⚠️ | `agent.tool.search_video(query="people discussing AI")` | Semantic video search using TwelveLabs' Marengo model <br> **Deprecated — see [Deprecations](#deprecations)** |
| chat_video ⚠️ | `agent.tool.chat_video(prompt="What are the main topics?", video_id="video_123")` | Interactive video analysis using TwelveLabs' Pegasus model <br> **Deprecated — see [Deprecations](#deprecations)** |
| mongodb_memory | `agent.tool.mongodb_memory(action="record", content="User prefers vegetarian pizza")` | Store and retrieve memories using MongoDB Atlas with semantic search via AWS Bedrock Titan embeddings (connection and namespace configured via `MongoDBMemoryTool` or environment variables) |
| elasticsearch_memory ⚠️ | `agent.tool.elasticsearch_memory(action="record", content="User prefers dark mode")` | Store and retrieve memories using Elasticsearch with semantic search via AWS Bedrock Titan embeddings (connection and namespace configured via `ElasticsearchMemoryTool` or environment variables) <br> **Deprecated — see [Deprecations](#deprecations)** |

\* *These tools do not work on Windows*

### Deprecations

The tools below are deprecated, and each row points to where that capability now lives.

When this package started, the SDK had no built-in way to do most of these things, so we shipped
tools to fill the gap. Much of that is now native: the SDK reasons, injects context, manages memory,
and runs tools concurrently on its own, and where a vendor maintains an official MCP server, that
server will always track their API better than a wrapper here can. Keeping a second implementation
alongside means two things to fix and two things to drift, so we would rather point you at the one
that gets the attention.

More tools will follow as their capabilities land elsewhere, and this repository will eventually be
archived. Nothing breaks suddenly — but migrating when a tool is first deprecated is easier than
moving several at once later.

Deprecated tools keep working until v0.9.0. Each one logs a warning when invoked, starting in the
release shown below, and in **v0.9.0** that warning becomes an import error, so the tool can no longer be imported.

They are also marked with `@typing_extensions.deprecated`, so type checkers and IDEs flag
usage before you run anything. To list what you still need to migrate, run
`mypy --enable-error-code deprecated` over your project: it reports the import line for each
deprecated tool, without invoking any of them.
Prefer mypy here: pyright, with `reportDeprecated` enabled, reports direct calls such as
`calculator(expression=...)` but not `agent.tool.calculator(...)`, and it reaches the import
line for only the tools whose marker is not wrapped by `@tool`. At runtime, Python suppresses the
`DeprecationWarning` that function tools raise when the agent invokes them, and the markers on
class-based tools are static-only, which is why the log message exists as well.

| Tool | Suggested alternative | Warning | Error |
|------|-----------------------|---------|-------|
| `sleep` | `from strands.vended_tools import sleep` | v0.8.6 | v0.9.0 |
| `editor` | `from strands.vended_tools import file_editor` | v0.8.6 | v0.9.0 |
| `shell` | `from strands.vended_tools import shell` | v0.8.6 | v0.9.0 |
| `batch` | none needed — concurrent tool execution is the SDK default ([docs](https://strandsagents.com/docs/user-guide/concepts/tools/executors/)) | v0.8.6 | v0.9.0 |
| `think` | native extended thinking via model reasoning config ([docs](https://strandsagents.com/docs/user-guide/concepts/model-providers/amazon-bedrock/)) | v0.8.6 | v0.9.0 |
| `current_time` | `ContextInjector` ([docs](https://strandsagents.com/docs/user-guide/concepts/plugins/context-injector/)) | v0.8.6 | v0.9.0 |
| `memory` | `MemoryManager` + `BedrockKnowledgeBaseStore` ([docs](https://strandsagents.com/docs/user-guide/concepts/memory/bedrock-knowledge-base/)) | v0.8.6 | v0.9.0 |
| `retrieve` | `MemoryManager` + `BedrockKnowledgeBaseStore(writable=False)` ([docs](https://strandsagents.com/docs/user-guide/concepts/memory/overview/)) | v0.8.6 | v0.9.0 |
| `calculator` | `from strands.vended_tools import shell` (run `python3 -c` with sympy) | v0.8.6 | v0.9.0 |
| `cron` | `from strands.vended_tools import shell` (manage `crontab`), or Amazon EventBridge Scheduler | v0.8.6 | v0.9.0 |
| `environment` | `from strands.vended_tools import shell` (inspect only, see notes) | v0.8.6 | v0.9.0 |
| `bright_data` | [Bright Data's official MCP server](https://docs.brightdata.com/ai/mcp-server/overview) | v0.8.9 | v0.9.0 |
| `http_request` | `from strands.vended_tools import http_request, web_fetch` (http_request for APIs, web_fetch for web pages)| v0.8.9 | v0.9.0 |
| `slack` | [official Slack MCP server](https://docs.slack.dev/ai/mcp-server/); `slack_bolt` for Socket Mode | v0.8.6 | v0.9.0 |
| `diagram` | no replacement — have the model write graphviz/mermaid/`diagrams` code directly | v0.8.6 | v0.9.0 |
| `rss` | no replacement — parse feeds directly with `feedparser` | v0.8.6 | v0.9.0 |
| `tavily` (`tavily_search`, `tavily_extract`, `tavily_crawl`, `tavily_map`) | [official Tavily MCP server](https://docs.tavily.com/documentation/mcp) | v0.8.9 | v0.9.0 |
| `exa` (`exa_search`, `exa_get_contents`) | [official Exa MCP server](https://exa.ai/docs/reference/exa-mcp) | v0.8.9 | v0.9.0 |
| `search_video` | [official TwelveLabs MCP servers](https://docs.twelvelabs.io/docs/advanced/model-context-protocol) | v0.8.9 | v0.9.0 |
| `chat_video` | [official TwelveLabs MCP servers](https://docs.twelvelabs.io/docs/advanced/model-context-protocol) | v0.8.9 | v0.9.0 |
| `journal` | `from strands.vended_tools import notebook` | v0.8.9 | v0.9.0 |
| `python_repl` | `from strands.vended_tools import python_repl` | v0.8.10 | v0.9.0 |
| `a2a_client` | `from strands.vended_tools import make_a2a_client` | v0.8.10 | v0.9.0 |
| `mcp_client` | `from strands.vended_tools import make_mcp_router` | v0.8.10 | v0.9.0 |
| `mem0_memory` (`mem0_memory`, `Mem0MemoryTool`) | `MemoryManager` + `Mem0MemoryStore` from [mem0-strands](https://docs.mem0.ai/integrations/strands) | v0.8.10 | v0.9.0 |
| `code_interpreter` (`AgentCoreCodeInterpreter`) | `from strands.vended_tools import python_repl` for Python; `from strands.vended_tools import shell` for other languages | v0.8.11 | v0.9.0 |
| `handoff_to_user` | `from strands.vended_tools import handoff_to_user` | v0.8.11 | v0.9.0 |
| `speak` | no replacement — call Amazon Polly's `synthesize_speech` directly | v0.8.11 | v0.9.0 |
| `load_tool` | no replacement — pass tools to the `Agent` directly, or use `Agent(load_tools_from_directory=True)` | v0.8.11 | v0.9.0 |
| `use_computer` | no replacement — drive `pyautogui` and `pytesseract` directly | v0.8.11 | v0.9.0 |
| `browser` (`LocalChromiumBrowser`, `AgentCoreBrowser`) | no replacement — drive Playwright directly, with `bedrock-agentcore`'s `BrowserClient` for AgentCore sessions | v0.8.11 | v0.9.0 |
| `nova_reels` | no replacement — Amazon Nova Reel reached end-of-life on Bedrock ([docs](https://docs.aws.amazon.com/bedrock/latest/userguide/model-lifecycle-legacy.html)) | v0.8.11 | v0.9.0 |
| `agent_core_memory` (`AgentCoreMemoryToolProvider`) | `MemoryManager` + `AgentCoreMemoryStore` from `bedrock-agentcore` ([docs](https://strandsagents.com/docs/integrations/memory-stores/agentcore-memory-store/)) | v0.8.11 | v0.9.0 |
| `generate_image_stability` | no replacement — call the Stability AI REST API directly ([docs](https://docs.stability.ai/api-reference)) | v0.8.11 | v0.9.0 |
| `generate_image` | no replacement — call Bedrock's `invoke_model` with a Stability AI model directly ([docs](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters-stability-diffusion.html)) | v0.8.11 | v0.9.0 |
| `image_reader` | image content blocks in the agent prompt ([docs](https://strandsagents.com/docs/user-guide/sdk/agents/prompts/)) | v0.8.11 | v0.9.0 |
| `elasticsearch_memory` (`elasticsearch_memory`, `ElasticsearchMemoryTool`) | no replacement — implement a `MemoryStore` over [`elasticsearch-py`](https://www.elastic.co/docs/reference/elasticsearch/clients/python) for `MemoryManager` ([docs](https://strandsagents.com/docs/user-guide/sdk/memory/managing-memory/#custom-stores)) | v0.8.11 | v0.9.0 |
| `swarm` | `from strands.vended_tools import swarm` | v0.8.11 | v0.9.0 |
| `use_agent` | `from strands.vended_tools import subagent` | v0.8.11 | v0.9.0 |
| `use_llm` | `from strands.vended_tools import subagent` | v0.8.11 | v0.9.0 |

```python
# Before
from strands import Agent
from strands_tools import editor, shell, sleep

agent = Agent(tools=[editor, shell, sleep])

# After
from strands import Agent
from strands.vended_tools import file_editor, shell, sleep

agent = Agent(tools=[file_editor, shell, sleep])
```

#### Behavior differences

The replacements are not drop-in equivalents. Check these before migrating:

- **`strands_tools.shell` → `strands.vended_tools.shell`**: the SDK tool routes commands through the agent's configured
  sandbox and is stateless — each call runs in a fresh shell, so variables and the working
  directory do not persist between calls. It does not provide PTY support or batched
  parallel/sequential command execution.
- **`editor` → `file_editor`**: supports `view`, `create`, `str_replace`, and `insert`. The
  `pattern_replace`, `find_line`, and `undo_edit` commands have no SDK equivalent.
- **`sleep` → `sleep`**: the maximum duration is set with
  `make_sleep(max_duration=...)` and defaults to 60 seconds, replacing the
  `MAX_SLEEP_SECONDS` environment variable which defaulted to 300 seconds.
- **`batch`** — you can drop it. The SDK runs tool calls concurrently by default via
  `ConcurrentToolExecutor`, which also keeps tracing, metrics, and hooks intact. See
  [Tool executors](https://strandsagents.com/docs/user-guide/concepts/tools/executors/).
- **`think` → extended thinking** — reasoning is now a model capability rather than a tool, so you
  configure it once instead of prompting for it. It is single-pass, so if you were relying on
  `cycle_count` to refine across passes, or on tool calls inside the reasoning loop, that pattern
  moves into your own orchestration. Config is per provider — see
  [Amazon Bedrock](https://strandsagents.com/docs/user-guide/concepts/model-providers/amazon-bedrock/).
- **`current_time` → `ContextInjector`** — the date is context, not something the agent should have to
  ask for, so injecting it means it is always fresh and the model cannot forget to call it. The
  trade-off is that your code picks the timezone; if you need the model to choose one per call, the
  official [MCP `time` server](https://github.com/modelcontextprotocol/servers/tree/main/src/time)
  still does that. See
  [ContextInjector](https://strandsagents.com/docs/user-guide/concepts/plugins/context-injector/).
- **`memory` / `retrieve` → memory stores** — memory is a first-class SDK concept now, so stores plug
  into the agent and inject context automatically instead of waiting to be called. `store`/`retrieve`
  become `add`/`search`. `list`, `get`, and `delete` are not part of the store protocol, so keep them
  as backend-native tools via `get_tools()`. One thing to know: the store returns relevance scores but
  does not filter on them, so if you relied on `retrieve`'s default `score >= 0.4` floor, apply it
  yourself. See
  [Bedrock Knowledge Base store](https://strandsagents.com/docs/user-guide/concepts/memory/bedrock-knowledge-base/)
  and [Custom stores](https://strandsagents.com/docs/user-guide/concepts/memory/overview/#custom-stores).
- **`calculator` → `shell`** — run `python3 -c` with sympy for the same symbolic math. Worth being
  explicit: `shell` runs whatever it is given, whereas this tool checked expressions against an
  allowlist first. If you are evaluating untrusted input, put a sandbox behind the shell tool or keep
  your own validation in front of it.
- **`cron` → `shell`** — `crontab` through the shell tool covers scheduling on a host. Two things to
  plan for: the shell is sandbox-routed, so under Docker or SSH your jobs land in an environment that
  may not have a cron daemon, and you will be composing crontab lines yourself rather than using
  structured `list`/`add`/`remove`/`edit` actions. For scheduling that outlives the host, Amazon EventBridge
  Scheduler is usually the better fit.
- **`environment` → `shell`** — `env` and `printenv` cover reading. Setting is genuinely different: a
  child shell cannot change the agent's own process environment, so variables need to be set where the
  agent is launched, or passed per call. If you were leaning on `PROTECTED_VARS` or secret masking,
  that guarding moves to your side.
- **`bright_data` → Bright Data's official MCP server** — the vendor-maintained server covers search,
  scraping, structured extraction, and browser automation. Its tool names and response shapes are not
  drop-in equivalents, so follow Bright Data's
  [setup and migration documentation](https://docs.brightdata.com/ai/mcp-server/overview).
- **`http_request` → `http_request` / `web_fetch`** — the tool splits by intent: raw API calls move to
  the vended `http_request`, while fetching and reading a page moves to `web_fetch`. Authentication and
  endpoint scoping now live in an `httpx.AsyncClient` you pass via `make_http_request(client=...)`.
  `web_fetch` defaults to an agentic mode that summarizes a page before it enters the main context;
  pass `mode="markdown"` to the `web_fetch` factory for the full page as markdown, replacing
  `convert_to_markdown=True`.
- **`slack` → Slack's official MCP server** — Slack maintains it, so it tracks their API directly, and
  it uses OAuth rather than long-lived tokens. It exposes a curated tool set rather than this tool's
  passthrough to any Web API method, and being request/response it does not cover Socket Mode or
  real-time events — `slack_bolt` remains the right tool for event listeners. Endpoint and setup:
  [docs.slack.dev/ai/mcp-server](https://docs.slack.dev/ai/mcp-server/).
- **`diagram`** — no direct replacement, and that is deliberate: this tool was a wrapper over
  `graphviz` and the `diagrams` package, and a capable model writes that code well on its own. The
  wrapper mostly added a layer to keep in sync.
- **`rss`** — no direct replacement. Fetching and parsing a feed is a few lines of `feedparser`, and
  the subscription list was a JSON file. If you were using feed HTTP Basic auth or the stored
  subscriptions, those move into your code.
- **`tavily` → Tavily MCP server** — Auth moves from `TAVILY_API_KEY` to OAuth, a key in the server URL, or a header. A handful of parameters have no MCP equivalent:
  `auto_parameters`, `chunks_per_source`, `days`, `include_answer`, `categories`, `exclude_paths`,
  and the `"markdown"/"text"` literals for `include_raw_content` (the MCP accepts a boolean only). If you need these parameters, call the [Tavily REST API](https://docs.tavily.com/documentation/api-reference/introduction) directly.
- **`exa` → Exa MCP server** — the MCP renames the tools: `exa_search` becomes `web_search_exa` and
  `exa_get_contents` becomes `web_fetch_exa`. For the full parameter surface of `exa_search`, opt in
  to `web_search_advanced_exa` via the `tools` URL parameter. Auth moves from `EXA_API_KEY` to OAuth, a key in
  the server URL, or a header.
- **`search_video` / `chat_video` → TwelveLabs MCP servers** — Jockey adds cross-video reasoning, while single-video search and analysis continue
  at `mcp-alpic.twelvelabs.io`. Jockey requires publicly accessible URLs and has no equivalent for `chat_video`'s local-file upload nor
  `search_video`'s `group_by`, `threshold`, and `search_options` parameters.
- **`journal` → `notebook`** — `notebook` keeps notes in `agent.state` instead of `./journal/<date>.md`, so persistence follows your session
  manager. There is no `add_task` equivalent and no per-day entry, so tasks and dated entries become plain note text. If you need the entries as
  files on disk, use `file_editor`.
- **`python_repl` → `python_repl`** — the SDK tool runs each call in a fresh interpreter, so in-memory state does not
  persist; save intermediate results to files instead. By default it executes on the host with no isolation and no
  confirmation prompt — pass a `sandbox=` to `Agent` (for example `DockerSandbox`) if you relied on the consent gate.
  There is no PTY, stdin, or `reset_state`, and the `PYTHON_REPL_*` environment variables no longer apply.
- **`a2a_client` → `make_a2a_client`** — the three `a2a_*` tools become one tool with `discover` and
  `send_message` operations, limited to the endpoints you pass in `allowed_endpoints`. Authentication,
  timeouts, and push notifications move from `httpx_client_args` and the webhook arguments into a
  per-endpoint `ClientConfig`.
- **`mcp_client` → `make_mcp_router`** — the model connects by name to servers you allowlist in `servers`
  rather than supplying its own command or URL. There is no `load_tools`, so remote tools are invoked
  through `call_tool`.
- **`mem0_memory` → `Mem0MemoryStore`** — plugs into `MemoryManager`, so memories are recalled automatically.
  `retrieve` becomes `search_memory` and `store` becomes `add_memory` (with `add_tool_config=True`); for `get`, `list`,
  `delete`, and `history`, use `mem0`'s `MemoryClient`. `mem0-strands` needs `mem0ai` 2.x, so drop the `mem0-memory`
  extra first. Backend env vars don't carry over: without `MEM0_API_KEY`, pass a Mem0 OSS `config=`. See the
  [Mem0 integration docs](https://docs.mem0.ai/integrations/strands).
- **`code_interpreter` → `python_repl` / `shell`** — both run in the agent's sandbox instead of an AgentCore
  session. An `Agent` with no `sandbox=` falls back to `NotASandboxLocalEnvironment`, which runs on the host
  with no isolation, so pass a sandbox (e.g. `strands.sandbox.docker.DockerSandbox`) if you were relying on
  AgentCore's. Each call starts a fresh process, so in-memory state does not persist. There are no named
  sessions or file actions; use `file_editor` or `shell` for file operations.
- **`handoff_to_user` → `handoff_to_user`** — the SDK tool raises an interrupt instead of prompting on the
  console, so the agent stops with `stop_reason == "interrupt"` and your code resumes it with the user's
  reply. There is no `breakout_of_loop`: every call pauses the agent.
- **`speak`** — no direct replacement. Text-to-speech is a single Polly `synthesize_speech` call (or
  macOS `say`), so a custom tool covers it in a few lines. If you want the agent itself to talk,
  `from strands.bidi import BidiAgent` runs a live voice session with a speech model, though it does not
  read text verbatim or save audio files.
- **`load_tool`** — no direct replacement. Letting the model load arbitrary files as tools is rarely what
  you want; pass tools to the `Agent` up front, or set `load_tools_from_directory=True` to load and
  hot-reload tools from `./tools/`.
- **`use_computer`** — no direct replacement. This tool was a wrapper over `pyautogui`, `pytesseract`, and
  OS-specific app control; if you need desktop automation, call those from a custom tool scoped to the
  actions you actually use.
- **`browser`** — no direct replacement. This tool was a wrapper over Playwright, and `bedrock-agentcore`
  ships only the session layer (`BrowserClient`), not a Strands tool. Write a custom tool that drives
  Playwright directly; for AgentCore, start a session with `BrowserClient` and connect Playwright to it.
- **`nova_reels`** — no direct replacement. Amazon Nova Reel reached end-of-life on Bedrock on September 30, 2026,
  so this tool no longer works.
- **`agent_core_memory` → `AgentCoreMemoryStore`** — plugs into `MemoryManager`, so memories are recalled
  automatically. `retrieve` becomes `search_memory`; there is no `record` tool, so set `writable=True,
  extraction=True` and AgentCore extracts memories from the conversation. For `list`, `get`, and `delete`, use
  `bedrock-agentcore`'s `MemorySessionManager`.
- **`generate_image_stability`** — no direct replacement. This tool was a wrapper over Stability AI's
  [`v2beta/stable-image` REST API](https://docs.stability.ai/api-reference), so a custom tool covers it in a
  few lines.
- **`generate_image`** — no direct replacement. This tool was a wrapper over Bedrock's `invoke_model` for
  [Stability AI models](https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters-stability-diffusion.html), so a custom tool covers it in a few lines.
- **`image_reader` → image content blocks** — pass the image in the prompt, e.g.
  `agent([{"text": "..."}, {"image": {"format": "png", "source": {"bytes": data}}}])`. The model can no longer load
  images by path mid-run; if it needs to, return that same image block from a custom tool.
- **`elasticsearch_memory` → custom `MemoryStore`** — no store ships for Elasticsearch, but one only needs `search`
  (a k-NN query) and `add` (index a document) over
  [`elasticsearch-py`](https://www.elastic.co/docs/reference/elasticsearch/clients/python). `retrieve` then becomes
  `search_memory` and `record` becomes `add_memory` (with `writable=True` on the store and `add_tool_config=True` on
  `MemoryManager`); bind the namespace in the store, not the tool call, to keep tenants isolated. For `list`, `get`, and `delete`, call `elasticsearch-py` directly.
- **`swarm` → `swarm`** — by default every agent inherits the
  parent's model and all of its tools, and the model writes only `instructions` (formerly `system_prompt`). To let
  it pick tools or models per agent again, offer a set with `make_swarm(tools=Choice([...], multiple=True),
  model=Choice([...]))`. The handoff, iteration, and timeout limits also move from tool arguments to `make_swarm(...)`.
- **`use_agent` / `use_llm` → `subagent`** — by default the child inherits the parent's model and tools, and the
  model passes a `task` with optional `instructions` (without them, a built-in general-purpose prompt is used). In place
  of `use_agent`'s free-form `model_provider` and `model_settings`, offer models with `make_subagent(model=Choice([...]))`
  or pin one with `Fixed(...)`. The result is the child's final message, without the metrics block.
  `Choice`, `Fixed`, and the other axis modes come from `strands.multiagent.spec`.

## 💻 Usage Examples

### File Operations

```python
from strands import Agent
from strands_tools import file_read, file_write, editor

agent = Agent(tools=[file_read, file_write, editor])

agent.tool.file_read(path="config.json")
agent.tool.file_write(path="output.txt", content="Hello, world!")
agent.tool.editor(command="view", path="script.py")
```

### Dynamic MCP Client Integration

⚠️ **SECURITY WARNING**: The Dynamic MCP Client allows agents to autonomously connect to external MCP servers and load remote tools at runtime. This poses significant security risks as agents can potentially connect to malicious servers and execute untrusted code. Use with extreme caution in production environments.

This tool is different from the static MCP server implementation in the Strands SDK (see [MCP Tools Documentation](https://github.com/strands-agents/docs/blob/main/docs/user-guide/concepts/tools/mcp-tools.md)) which uses pre-configured, trusted MCP servers.

```python
from strands import Agent
from strands_tools import mcp_client

agent = Agent(tools=[mcp_client])

# Connect to a custom MCP server via stdio
agent.tool.mcp_client(
    action="connect",
    connection_id="my_tools",
    transport="stdio",
    command="python",
    args=["my_mcp_server.py"]
)

# List available tools on the server
tools = agent.tool.mcp_client(
    action="list_tools",
    connection_id="my_tools"
)

# Call a tool from the MCP server
result = agent.tool.mcp_client(
    action="call_tool",
    connection_id="my_tools",
    tool_name="calculate",
    tool_args={"x": 10, "y": 20}
)

# Connect to a SSE-based server
agent.tool.mcp_client(
    action="connect",
    connection_id="web_server",
    transport="sse",
    server_url="http://localhost:8080/sse"
)

# Connect to a streamable HTTP server
agent.tool.mcp_client(
    action="connect",
    connection_id="http_server",
    transport="streamable_http",
    server_url="https://api.example.com/mcp",
    headers={"Authorization": "Bearer token"},
    timeout=60
)

# Load MCP tools into agent's registry for direct access
# ⚠️ WARNING: This loads external tools directly into the agent
agent.tool.mcp_client(
    action="load_tools",
    connection_id="my_tools"
)
# Now you can call MCP tools directly as: agent.tool.calculate(x=10, y=20)
```

### Shell Commands

*Note: `shell` does not work on Windows.*

```python
from strands import Agent
from strands_tools import shell

agent = Agent(tools=[shell])

# Execute a single command
result = agent.tool.shell(command="ls -la")

# Execute a sequence of commands
results = agent.tool.shell(command=["mkdir -p test_dir", "cd test_dir", "touch test.txt"])

# Execute commands with error handling
agent.tool.shell(command="risky-command", ignore_errors=True)
```

### HTTP Requests

```python
from strands import Agent
from strands_tools import http_request

agent = Agent(tools=[http_request])

# Make a simple GET request
response = agent.tool.http_request(
    method="GET",
    url="https://api.example.com/data"
)

# POST request with authentication
response = agent.tool.http_request(
    method="POST",
    url="https://api.example.com/resource",
    headers={"Content-Type": "application/json"},
    body=json.dumps({"key": "value"}),
    auth_type="Bearer",
    auth_token="your_token_here"
)

# Convert HTML webpages to markdown for better readability
response = agent.tool.http_request(
    method="GET",
    url="https://example.com/article",
    convert_to_markdown=True
)
```

### Tavily Search, Extract, Crawl, and Map

```python
from strands import Agent
from strands_tools.tavily import (
    tavily_search, tavily_extract, tavily_crawl, tavily_map
)

# For async usage, call the corresponding *_async function with await.
# Synchronous usage 
agent = Agent(tools=[tavily_search, tavily_extract, tavily_crawl, tavily_map])

# Real-time web search
result = agent.tool.tavily_search(
    query="Latest developments in renewable energy",
    search_depth="advanced",
    topic="news",
    max_results=10,
    include_raw_content=True
)

# Extract content from multiple URLs
result = agent.tool.tavily_extract(
    urls=["www.tavily.com", "www.apple.com"],
    extract_depth="advanced",
    format="markdown"
)

# Advanced crawl with instructions and filtering
result = agent.tool.tavily_crawl(
    url="www.tavily.com",
    max_depth=2,
    limit=50,
    instructions="Find all API documentation and developer guides",
    extract_depth="advanced",
    include_images=True
)

# Basic website mapping
result = agent.tool.tavily_map(url="www.tavily.com")

```

### Exa Search and Contents

```python
from strands import Agent
from strands_tools.exa import exa_search, exa_get_contents

agent = Agent(tools=[exa_search, exa_get_contents])

# Basic search (auto mode is default and recommended)
result = agent.tool.exa_search(
    query="Best project management software",
    text=True
)

# Company-specific search when needed
result = agent.tool.exa_search(
    query="Anthropic AI safety research",
    category="company",
    include_domains=["anthropic.com"],
    num_results=5,
    summary={"query": "key research areas and findings"}
)

# News search with date filtering
result = agent.tool.exa_search(
    query="AI regulation policy updates",
    category="news",
    start_published_date="2024-01-01T00:00:00.000Z",
    text=True
)

# Get detailed content from specific URLs
result = agent.tool.exa_get_contents(
    urls=[
        "https://example.com/blog-post",
        "https://github.com/microsoft/semantic-kernel"
    ],
    text={"maxCharacters": 5000, "includeHtmlTags": False},
    summary={
        "query": "main points and practical applications"
    },
    subpages=2,
    extras={"links": 5, "imageLinks": 2}
)

# Structured summary with JSON schema
result = agent.tool.exa_get_contents(
    urls=["https://example.com/article"],
    summary={
        "query": "main findings and recommendations",
        "schema": {
            "type": "object",
            "properties": {
                "main_points": {"type": "string", "description": "Key points from the article"},
                "recommendations": {"type": "string", "description": "Suggested actions or advice"},
                "conclusion": {"type": "string", "description": "Overall conclusion"},
                "relevance": {"type": "string", "description": "Why this matters"}
            },
            "required": ["main_points", "conclusion"]
        }
    }
)

```

### Python Code Execution

*Note: `python_repl` does not work on Windows.*

```python
from strands import Agent
from strands_tools import python_repl

agent = Agent(tools=[python_repl])

# Execute Python code with state persistence
result = agent.tool.python_repl(code="""
import pandas as pd

# Load and process data
data = pd.read_csv('data.csv')
processed = data.groupby('category').mean()

processed.head()
""")
```

### Code Interpreter

```python
from strands import Agent
from strands_tools.code_interpreter import AgentCoreCodeInterpreter

# Create the code interpreter tool
bedrock_agent_core_code_interpreter = AgentCoreCodeInterpreter(region="us-west-2")
agent = Agent(tools=[bedrock_agent_core_code_interpreter.code_interpreter])

# Create a session
agent.tool.code_interpreter({
    "action": {
        "type": "initSession",
        "description": "Data analysis session",
        "session_name": "analysis-session"
    }
})

# Execute Python code
agent.tool.code_interpreter({
    "action": {
        "type": "executeCode",
        "session_name": "analysis-session",
        "code": "print('Hello from sandbox!')",
        "language": "python"
    }
})
```

### Swarm Intelligence

```python
from strands import Agent
from strands_tools import swarm

agent = Agent(tools=[swarm])

# Create a collaborative swarm of agents to tackle a complex problem
result = agent.tool.swarm(
    task="Generate creative solutions for reducing plastic waste in urban areas",
    swarm_size=5,
    coordination_pattern="collaborative"
)

# Create a competitive swarm for diverse solution generation
result = agent.tool.swarm(
    task="Design an innovative product for smart home automation",
    swarm_size=3,
    coordination_pattern="competitive"
)

# Hybrid approach combining collaboration and competition
result = agent.tool.swarm(
    task="Develop marketing strategies for a new sustainable fashion brand",
    swarm_size=4,
    coordination_pattern="hybrid"
)
```

### Use AWS

```python
from strands import Agent
from strands_tools import use_aws

agent = Agent(tools=[use_aws])

# List S3 buckets
result = agent.tool.use_aws(
    service_name="s3",
    operation_name="list_buckets",
    parameters={},
    region="us-east-1",
    label="List all S3 buckets"
)

# Get the contents of a specific S3 bucket
result = agent.tool.use_aws(
    service_name="s3",
    operation_name="list_objects_v2",
    parameters={"Bucket": "example-bucket"},  # Replace with your actual bucket name
    region="us-east-1",
    label="List objects in a specific S3 bucket"
)

# Get the list of EC2 subnets
result = agent.tool.use_aws(
    service_name="ec2",
    operation_name="describe_subnets",
    parameters={},
    region="us-east-1",
    label="List all subnets"
)
```

### Retrieve Tool

```python
from strands import Agent
from strands_tools import retrieve

agent = Agent(tools=[retrieve])

# Basic retrieval without metadata
result = agent.tool.retrieve(
    text="What is artificial intelligence?"
)

# Retrieval with metadata enabled
result = agent.tool.retrieve(
    text="What are the latest developments in machine learning?",
    enableMetadata=True
)

# Using environment variable to set default metadata behavior
# Set RETRIEVE_ENABLE_METADATA_DEFAULT=true in your environment
result = agent.tool.retrieve(
    text="Tell me about cloud computing"
    # enableMetadata will default to the environment variable value
)
```

### Batch Tool

```python
import os
import sys

from strands import Agent
from strands_tools import batch, http_request, use_aws

# Example usage of the batch with http_request and use_aws tools
agent = Agent(tools=[batch, http_request, use_aws])

result = agent.tool.batch(
    invocations=[
        {"name": "http_request", "arguments": {"method": "GET", "url": "https://api.ipify.org?format=json"}},
        {
            "name": "use_aws",
            "arguments": {
                "service_name": "s3",
                "operation_name": "list_buckets",
                "parameters": {},
                "region": "us-east-1",
                "label": "List S3 Buckets"
            }
        },
    ]
)
```

### Video Tools

```python
from strands import Agent
from strands_tools import search_video, chat_video

agent = Agent(tools=[search_video, chat_video])

# Search for video content using natural language
result = agent.tool.search_video(
    query="people discussing AI technology",
    threshold="high",
    group_by="video",
    page_limit=5
)

# Chat with existing video (no index_id needed)
result = agent.tool.chat_video(
    prompt="What are the main topics discussed in this video?",
    video_id="existing-video-id"
)

# Chat with new video file (index_id required for upload)
result = agent.tool.chat_video(
    prompt="Describe what happens in this video",
    video_path="/path/to/video.mp4",
    index_id="your-index-id"  # or set TWELVELABS_PEGASUS_INDEX_ID env var
)
```

### AgentCore Memory
```python
from strands import Agent
from strands_tools.agent_core_memory import AgentCoreMemoryToolProvider


provider = AgentCoreMemoryToolProvider(
    memory_id="memory-123abc",  # Required
    actor_id="user-456",        # Required
    session_id="session-789",   # Required
    namespace="default",        # Required
    region="us-west-2"          # Optional, defaults to us-west-2
)

agent = Agent(tools=provider.tools)

# Create a new memory
result = agent.tool.agent_core_memory(
    action="record",
    content="I am allergic to shellfish"
)

# Search for relevant memories
result = agent.tool.agent_core_memory(
    action="retrieve",
    query="user preferences"
)

# List all memories
result = agent.tool.agent_core_memory(
    action="list"
)

# Get a specific memory by ID
result = agent.tool.agent_core_memory(
    action="get",
    memory_record_id="mr-12345"
)
```

### Browser
```python
from strands import Agent
from strands_tools.browser import LocalChromiumBrowser

# Create browser tool
browser = LocalChromiumBrowser()
agent = Agent(tools=[browser.browser])

# Simple navigation
result = agent.tool.browser({
    "action": {
        "type": "navigate",
        "url": "https://example.com"
    }
})

# Initialize a session first
result = agent.tool.browser({
    "action": {
        "type": "initSession",
        "session_name": "main-session",
        "description": "Web automation session"
    }
})
```

### Handoff to User

```python
from strands import Agent
from strands_tools import handoff_to_user

agent = Agent(tools=[handoff_to_user])

# Request user confirmation and continue
response = agent.tool.handoff_to_user(
    message="I need your approval to proceed with deleting these files. Type 'yes' to confirm.",
    breakout_of_loop=False
)

# Complete handoff to user (stops agent execution)
agent.tool.handoff_to_user(
    message="Task completed. Please review the results and take any necessary follow-up actions.",
    breakout_of_loop=True
)
```

### Use Agent (Agent as Tool)

```python
from strands import Agent
from strands_tools import use_agent

agent = Agent(tools=[use_agent])

# Basic usage - inherits parent agent's model
result = agent.tool.use_agent(
    prompt="Tell me about the advantages of tool-building in AI agents",
    system_prompt="You are a helpful AI assistant specializing in AI development concepts."
)

# Use a different model provider for specialized tasks
result = agent.tool.use_agent(
    prompt="Calculate 2 + 2 and explain the result",
    system_prompt="You are a helpful math assistant.",
    model_provider="bedrock",
    model_settings={
        "model_id": "us.anthropic.claude-sonnet-4-20250514-v1:0"
    },
    tools=["calculator"]
)

# Use environment variables to determine model
import os
os.environ["STRANDS_PROVIDER"] = "ollama"
os.environ["STRANDS_MODEL_ID"] = "qwen3:4b"
result = agent.tool.use_agent(
    prompt="Analyze this code",
    system_prompt="You are a code review assistant.",
    model_provider="env"
)

# Custom model configuration with specific parameters
result = agent.tool.use_agent(
    prompt="Write a creative story",
    system_prompt="You are a creative writing assistant.",
    model_provider="github",
    model_settings={
        "model_id": "openai/o4-mini",
        "params": {"temperature": 1, "max_tokens": 4000}
    }
)
```

### A2A Client

```python
from strands import Agent
from strands_tools.a2a_client import A2AClientToolProvider

# Initialize the A2A client provider with known agent URLs
provider = A2AClientToolProvider(known_agent_urls=["http://localhost:9000"])
agent = Agent(tools=provider.tools)

# Use natural language to interact with A2A agents
response = agent("discover available agents and send a greeting message")

# The agent will automatically use the available tools:
# - discover_agent(url) to find agents
# - list_discovered_agents() to see all discovered agents
# - send_message(message_text, target_agent_url) to communicate
```

### Diagram

```python
from strands import Agent
from strands_tools import diagram

agent = Agent(tools=[diagram])

# Create an AWS cloud architecture diagram
result = agent.tool.diagram(
    diagram_type="cloud",
    nodes=[
        {"id": "users", "type": "Users", "label": "End Users"},
        {"id": "cloudfront", "type": "CloudFront", "label": "CDN"},
        {"id": "s3", "type": "S3", "label": "Static Assets"},
        {"id": "api", "type": "APIGateway", "label": "API Gateway"},
        {"id": "lambda", "type": "Lambda", "label": "Backend Service"}
    ],
    edges=[
        {"from": "users", "to": "cloudfront"},
        {"from": "cloudfront", "to": "s3"},
        {"from": "users", "to": "api"},
        {"from": "api", "to": "lambda"}
    ],
    title="Web Application Architecture"
)

# Create a UML class diagram
result = agent.tool.diagram(
    diagram_type="class",
    elements=[
        {
            "name": "User",
            "attributes": ["+id: int", "-name: string", "#email: string"],
            "methods": ["+login(): bool", "+logout(): void"]
        },
        {
            "name": "Order",
            "attributes": ["+id: int", "-items: List", "-total: float"],
            "methods": ["+addItem(item): void", "+calculateTotal(): float"]
        }
    ],
    relationships=[
        {"from": "User", "to": "Order", "type": "association", "multiplicity": "1..*"}
    ],
    title="E-commerce Domain Model"
)
```

### RSS Feed Management

```python
from strands import Agent
from strands_tools import rss

agent = Agent(tools=[rss])

# Subscribe to a feed
result = agent.tool.rss(
    action="subscribe",
    url="https://news.example.com/rss/technology"
)

# List all subscribed feeds
feeds = agent.tool.rss(action="list")

# Read entries from a specific feed
entries = agent.tool.rss(
    action="read",
    feed_id="news_example_com_technology",
    max_entries=5,
    include_content=True
)

# Search across all feeds
search_results = agent.tool.rss(
    action="search",
    query="machine learning",
    max_entries=10
)

# Fetch feed content without subscribing
latest_news = agent.tool.rss(
    action="fetch",
    url="https://blog.example.org/feed",
    max_entries=3
)
```

### Use Computer

```python
from strands import Agent
from strands_tools import use_computer

agent = Agent(tools=[use_computer])

# Find mouse position
result = agent.tool.use_computer(action="mouse_position")

# Automate adding text
result = agent.tool.use_computer(action="type", text="Hello, world!", app_name="Notepad")

# Analyze current computer screen
result = agent.tool.use_computer(action="analyze_screen")

result = agent.tool.use_computer(action="open_app", app_name="Calculator")
result = agent.tool.use_computer(action="close_app", app_name="Calendar")

result = agent.tool.use_computer(
    action="hotkey",
    hotkey_str="command+ctrl+f",  # For macOS
    app_name="Chrome"
)
```

### Graph (Multi-Agent DAG)

Create deterministic DAG-based multi-agent pipelines where agents are nodes with dependency relationships. Unlike `agent_graph` (which uses persistent message-passing), `graph` uses task-based execution with output propagation.

```python
from strands import Agent
from strands_tools.graph import graph

agent = Agent(tools=[graph])

*(README truncated for display. [Read the full README on GitHub](https://github.com/strands-agents/tools)).*
