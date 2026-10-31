---
slug: openagentplatform-dive
name: Dive
tagline: Dive is an open-source MCP Host Desktop Application that seamlessly
  integrates with any LLMs supporting function calling capabilities. ✨
summary: Dive is an open-source MCP Host Desktop Application that seamlessly
  integrates with any LLMs supporting function calling capabilities. ✨
categories:
  - agent-frameworks
status: active
quality_percentile: 18
selection_reason: quality_percentile
first_seen: 2025-01-24T00:55:50
last_updated: 2026-10-14T14:55:21.336Z
source:
  kind: github_repo
  repo: OpenAgentPlatform/Dive
  official_vendor: false
  license: MIT
signals:
  stars: 1826
  last_commit: 2026-07-31T03:11:22Z
  stars_delta_7d: 4
  stars_growth_pct: 0
  trending_score: 0
  velocity_source: age_velocity
  sparkline_4w:
    - 1827
    - 1826
    - 1826
language: en
needs_keys: false
prerequisites:
  - Node.js >= 18
readme_source:
  repo: OpenAgentPlatform/Dive
  path: README.md
  branch: main
  fetched_at: 2026-10-14T14:55:04.738Z
  truncated: false
type: mcp_server
launch:
  transport: stdio
  command: npx
  args:
    - -y
    - dive
  env_vars: []
  confidence: manifest
tags: []
---

<div align="center">
<img src="https://raw.githubusercontent.com/OpenAgentPlatform/Dive/main/build/icon.png" alt="Dive" width="128" height="128">
<h1>Dive AI Agent</h1>
</div>

![GitHub stars](https://img.shields.io/github/stars/OpenAgentPlatform/Dive?style=social)
![GitHub forks](https://img.shields.io/github/forks/OpenAgentPlatform/Dive?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/OpenAgentPlatform/Dive?style=social)
![GitHub repo size](https://img.shields.io/github/repo-size/OpenAgentPlatform/Dive)
![GitHub language count](https://img.shields.io/github/languages/count/OpenAgentPlatform/Dive)
![GitHub top language](https://img.shields.io/github/languages/top/OpenAgentPlatform/Dive)
![GitHub last commit](https://img.shields.io/github/last-commit/OpenAgentPlatform/Dive?color=red)
[![Discord](https://img.shields.io/badge/Discord-Dive-blue?logo=discord&logoColor=white)](https://discord.gg/xaV7xzMYBA)
[![Twitter Follow](https://img.shields.io/twitter/follow/Dive_ai_agent?style=social)](https://twitter.com/Dive_ai_agent)

Dive is an open-source MCP Host Desktop Application that seamlessly integrates with any LLMs supporting function calling capabilities. ✨

![Dive Demo](https://raw.githubusercontent.com/OpenAgentPlatform/Dive/main/docs/0.8.0_DiveGIF.gif)

## Features 🎯

- 🌐 **Universal LLM Support**: Compatible with ChatGPT, Anthropic, Ollama and OpenAI-compatible models
- 💻 **Cross-Platform**: Available for Windows, MacOS, and Linux
- 🔄 **Model Context Protocol**: Enabling seamless MCP AI agent integration on both stdio and SSE mode
- ☁️ **OAP Cloud Integration**: One-click access to managed MCP servers via [OAPHub.ai](https://oaphub.ai/) - eliminates complex local deployments
- 🏗️ **Dual Architecture**: Modern Tauri version alongside traditional Electron version for optimal performance
- 🌍 **Multi-Language Support**: Supports 24+ languages including English, Traditional Chinese, Simplified Chinese, Spanish, Japanese, Korean, German, French, Italian, Portuguese, Russian, Thai, Vietnamese, Filipino, Indonesian, Polish, Turkish, Ukrainian, Swedish, Norwegian, Finnish, and Lao
- ⚙️ **Advanced API Management**: Multiple API keys and model switching support with `model_settings.json`
- 🛠️ **Granular Tool Control**: Enable/disable individual MCP tools for precise customization
- 💡 **Custom Instructions**: Personalized system prompts for tailored AI behavior
- ⌨️ **Keyboard Shortcuts**: Comprehensive hotkey support for efficient navigation and operations (rename, settings, reload, new chat, etc.)
- 📝 **Chat Draft Saving**: Automatically saves chat input drafts to prevent data loss
- 🔄 **Auto-Update Mechanism**: Automatically checks for and installs the latest application updates
- 🔐 **MCP Server Authentication**: Added support for MCP server authentication
  > ⚠️ **Note**: This feature is currently unstable and may require frequent re-authorization
- 🛠️ **Built-in Local Tools**: Pre-configured tools available out of the box - Fetch (web requests), File Manager (read/write files), and Bash (command execution)
- 🤖 **MCP Server Installer Agent**: Intelligent agent that helps you install and configure MCP servers automatically
- 🔔 **Multiple Elicitation Support**: Handle multiple MCP elicitation requests simultaneously in the UI
- 📁 **@ File Path Search**: Extended @ keyword in chat input to search file paths

## Recent updates(2026/02/26) - v0.14.0+ 🎉

- 🛠️ **Skills & Slash Commands**: Support skills and more slash commands
- 🔍 **Chat History Search**: Support chat history search


### Platform Availability

| Platform | Electron | Tauri |
| :--- | :---: | :---: |
| **Windows** | ✅ | ✅ |
| **macOS** | ✅ | 🔜 |
| **Linux** | ✅ | ✅ |

> **Migration Note:** Existing local MCP/LLM configurations remain fully supported. OAP integration is additive and does not affect current workflows.

## Download and Install ⬇️

Get the latest version of Dive:
[![Download](https://img.shields.io/badge/Download-Latest%20Release-blue.svg)](https://github.com/OpenAgentPlatform/Dive/releases/latest)

### Windows users: 🪟
Choose between two architectures:
- **Tauri Version** (Recommended): Smaller installer (<30MB), modern architecture
- **Electron Version**: Traditional architecture, fully stable
- Python and Node.js environments will be downloaded automatically after launching

### MacOS users: 🍎
- **Electron Version**: Download the .dmg version
- You need to install Python and Node.js (with npx uvx) environments yourself
- Follow the installation prompts to complete setup

### Linux users: 🐧
Choose between two architectures:
- **Tauri Version**: Modern architecture with smaller installer size
- **Electron Version** (Recommended): Traditional architecture with .AppImage format
- You need to install Python and Node.js (with npx uvx) environments yourself
- For Ubuntu/Debian users:
  - You may need to add `--no-sandbox` parameter
  - Or modify system settings to allow sandbox
  - Run `chmod +x` to make the AppImage executable
- For Arch users:
  - If you are using Arch Linux, you can install dive using an [AUR helper](https://wiki.archlinux.org/title/AUR_helpers). For example: `paru -S dive-ai`

## MCP Setup Options

For more detailed instructions, please see [MCP Servers Setup](https://github.com/OpenAgentPlatform/Dive/blob/main/MCP_SETUP.md).

The easiest way to get started! Access enterprise-grade MCP tools instantly:

1. **Sign up** at [OAPHub.ai](https://oaphub.ai/)
2. **Connect** to Dive using one-click deep links or configuration files
3. **Enjoy** managed MCP servers with zero setup - no Python, Docker, or complex dependencies required

Benefits:
- ✅ Zero configuration needed
- ✅ Cross-platform compatibility
- ✅ Enterprise-grade reliability
- ✅ Automatic updates and maintenance

## Build 🛠️

See [BUILD.md](https://github.com/OpenAgentPlatform/Dive/blob/main/BUILD.md) for more details.

## Contributing 🤝

We welcome contributions from the community! Here's how you can help:

### Development Setup

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/Dive.git`
3. Install dependencies: `npm install`
4. Start development: `npm run dev` (Electron) or `cargo tauri dev` (Tauri)
5. Make your changes and test thoroughly
6. Submit a pull request

## License 📄

Dive is open-source software licensed under the [MIT License](https://github.com/OpenAgentPlatform/Dive/blob/main/LICENSE).

## Connect With Us 🌐
- 💬 Join our [Discord](https://discord.gg/xaV7xzMYBA)
- 🐦 Follow us on [Twitter/X](https://x.com/Dive_ai_agent) [Reddit](https://www.reddit.com/user/BigGo_official/) [Thread](https://www.threads.net/@dive_mcpserver)
- ⭐ Star us on GitHub
- 🐛 Report issues on our [Issue Tracker](https://github.com/OpenAgentPlatform/Dive/issues)
