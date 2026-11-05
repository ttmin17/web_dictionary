import { describe, it, expect } from 'vitest';
import {
  stripUnsafeHtml,
  stripBadgeClutter,
  rewriteRelativeLinks,
  applySizeCap,
  extractSummary,
  detectLanguage,
  derivePrerequisitesAndKeys,
  cleanReadme,
} from '../src/enrich/readme-cleaner.js';

describe('README Cleaner & Sanitizer (Phase B)', () => {
  it('strips unsafe HTML: scripts, inline handlers, and javascript pseudo-protocols', () => {
    const input = `
# My Project
<script>alert("xss")</script>
<img src="foo.png" onerror="alert(1)" />
<a href="javascript:void(0)">Click</a>
<iframe src="https://evil.com"></iframe>
Safe text continues.
    `.trim();

    const result = stripUnsafeHtml(input);
    expect(result).not.toContain('<script');
    expect(result).not.toContain('onerror=');
    expect(result).not.toContain('javascript:');
    expect(result).not.toContain('<iframe');
    expect(result).toContain('Safe text continues.');
  });

  it('removes badge clutter from the top of the README', () => {
    const input = `
# Awesome Server

[![Build](https://github.com/org/repo/workflows/CI/badge.svg)](https://github.com/org/repo/actions)
[![Coverage](https://img.shields.io/codecov/c/github/org/repo.svg)](https://codecov.io)
[![npm](https://img.shields.io/npm/v/awesome-server.svg)](https://www.npmjs.com/package/awesome-server)

Awesome Server connects your LLM agent to production databases safely and reliably.
    `.trim();

    const result = stripBadgeClutter(input);
    expect(result).not.toContain('shields.io');
    expect(result).not.toContain('codecov');
    expect(result).toContain('# Awesome Server');
    expect(result).toContain('Awesome Server connects your LLM agent');
  });

  it('rewrites relative image and document links to canonical GitHub URLs', () => {
    const input = `
![Architecture Diagram](./assets/diagram.png)
Read the [Setup Guide](docs/setup.md) for more details.
External link [Google](https://google.com) and anchor [Jump](#install) should not change.
    `.trim();

    const result = rewriteRelativeLinks(input, 'acme', 'tool-repo', 'main', 'packages/server');

    expect(result).toContain('https://raw.githubusercontent.com/acme/tool-repo/main/packages/server/assets/diagram.png');
    expect(result).toContain('https://github.com/acme/tool-repo/blob/main/packages/server/docs/setup.md');
    expect(result).toContain('https://google.com');
    expect(result).toContain('#install');
  });

  it('rewrites multi-line image alt text and link labels properly', () => {
    const input = `
![The thread workspace: threads sidebar, an agent turn with an inline artifact
preview and applied-change receipt, live per-account quota cards, and the
> composer](docs/assets/app-agent-run.jpg)

[A multi-line link label
describing the documentation](docs/guide.md "Guide Title")
<img src="assets/preview.png" alt="preview" />
<a href="docs/install.md">Install</a>
    `.trim();

    const result = rewriteRelativeLinks(input, 'razzant', 'claudexor', 'main');

    expect(result).toContain('https://raw.githubusercontent.com/razzant/claudexor/main/docs/assets/app-agent-run.jpg');
    expect(result).toContain('https://github.com/razzant/claudexor/blob/main/docs/guide.md "Guide Title"');
    expect(result).toContain('src="https://raw.githubusercontent.com/razzant/claudexor/main/assets/preview.png"');
    expect(result).toContain('href="https://github.com/razzant/claudexor/blob/main/docs/install.md"');
  });

  it('rewrites markdown reference-style link and image definitions', () => {
    const input = `
[![Docker][docker-btn]][docker-deploy]

[docker-btn]: ./deploy/buttons/docker.png
[docker-deploy]: ./deploy/docker-deploy.md
[doc-with-title]: docs/guide.md "Setup Guide"
[key: string]: unknown
[^1]: footnote text
    `.trim();

    const result = rewriteRelativeLinks(input, 'insforge', 'insforge', 'main');

    expect(result).toContain('[docker-btn]: https://raw.githubusercontent.com/insforge/insforge/main/deploy/buttons/docker.png');
    expect(result).toContain('[docker-deploy]: https://github.com/insforge/insforge/blob/main/deploy/docker-deploy.md');
    expect(result).toContain('[doc-with-title]: https://github.com/insforge/insforge/blob/main/docs/guide.md "Setup Guide"');
    expect(result).toContain('[key: string]: unknown');
    expect(result).toContain('[^1]: footnote text');
  });

  it('applies the 60 KB size cap with a clean heading cut', () => {
    const smallContent = '# Small Doc\n\nShort readme content here.';
    const smallResult = applySizeCap(smallContent, 1000, 'acme', 'tool');
    expect(smallResult.truncated).toBe(false);
    expect(smallResult.content).toBe(smallContent);

    // Large content exceeding limit
    const section1 = '# Heading 1\n\n' + 'Content paragraph one. '.repeat(50) + '\n\n';
    const section2 = '## Heading 2\n\n' + 'Content paragraph two. '.repeat(100) + '\n\n';
    const section3 = '## Heading 3\n\n' + 'Content paragraph three. '.repeat(100);
    const largeContent = section1 + section2 + section3;

    const limit = 1500;
    const cappedResult = applySizeCap(largeContent, limit, 'acme', 'tool');
    expect(cappedResult.truncated).toBe(true);
    expect(Buffer.byteLength(cappedResult.content, 'utf8')).toBeLessThan(largeContent.length);
    expect(cappedResult.content).toContain('*(README truncated for display.');
    expect(cappedResult.content).toContain('https://github.com/acme/tool');
  });

  it('extracts a clean plain-text summary and detects CJK language', () => {
    const markdown = `
# Tool Name

[![Badge](https://img.shields.io/badge/test-123)](https://test.com)

A high-performance **MCP server** that enables AI agents to query PostgreSQL and MySQL instances with *zero configuration*.

## Features
- Fast queries
    `.trim();

    const summary = extractSummary(markdown);
    expect(summary).toBe('A high-performance MCP server that enables AI agents to query PostgreSQL and MySQL instances with zero configuration.');

    const englishLang = detectLanguage(markdown);
    expect(englishLang).toBe('en');

    const chineseDoc = `
# 中文工具库
这是一个为大语言模型打造的自主智能体辅助工具，支持多模态输入与智能知识库管理。
详细使用文档请参见快速开始指引。
    `.trim();

    const cjkLang = detectLanguage(chineseDoc);
    expect(cjkLang).toBe('zh');
  });

  it('derives prerequisites and key requirements from launch spec', () => {
    const nodeSpec = {
      transport: 'stdio' as const,
      command: 'npx',
      args: ['-y', 'my-pkg'],
      env_vars: [
        { name: 'API_KEY', required: true, secret: true },
      ],
      confidence: 'manifest' as const,
    };

    const nodeMeta = derivePrerequisitesAndKeys(nodeSpec);
    expect(nodeMeta.needsKeys).toBe(true);
    expect(nodeMeta.prerequisites).toContain('Node.js >= 18');

    const pythonSpec = {
      transport: 'stdio' as const,
      command: 'uvx',
      args: ['my-pkg'],
      env_vars: [],
      confidence: 'manifest' as const,
    };

    const pyMeta = derivePrerequisitesAndKeys(pythonSpec);
    expect(pyMeta.needsKeys).toBe(false);
    expect(pyMeta.prerequisites).toContain('Python >= 3.10');
    expect(pyMeta.prerequisites).toContain('uv');
  });
});
