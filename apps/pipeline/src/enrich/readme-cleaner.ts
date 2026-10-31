import type { LaunchSpec } from '@web-db/schema';

export interface CleanReadmeOptions {
  owner: string;
  repo: string;
  branch?: string;
  subpath?: string;
  maxBytes?: number;
}

export interface CleanReadmeResult {
  cleaned: string;
  summary: string;
  truncated: boolean;
  language: string;
}

const BADGE_HOST_REGEX =
  /(?:shields\.io|badge\.fury\.io|codecov\.io|github\.com\/[^\/]+\/[^\/]+\/workflows|actions\/workflows|pepy\.tech|badgen\.net|sonarcloud\.io|circleci\.com|travis-ci\.org|api\.securityscorecards\.dev)/i;

/**
 * Strips raw HTML dangerous tags, event handlers, and javascript pseudo-protocols.
 */
export function stripUnsafeHtml(content: string): string {
  let cleaned = content;

  // Strip script, style, iframe, object, embed tags with content
  cleaned = cleaned.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  cleaned = cleaned.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');
  cleaned = cleaned.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
  cleaned = cleaned.replace(/<iframe\b[^>]*\/?>/gi, '');
  cleaned = cleaned.replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '');
  cleaned = cleaned.replace(/<embed\b[^>]*\/?>/gi, '');

  // Strip inline event handlers (e.g. onload, onclick, onerror)
  cleaned = cleaned.replace(/\s+on[a-z]+\s*=\s*(?:'[^']*'|"[^"]*"|[^\s>]+)/gi, '');

  // Strip javascript: URLs in href and src
  cleaned = cleaned.replace(/(href|src)\s*=\s*(['"])\s*javascript:[^'"]*\2/gi, '$1="#"');
  cleaned = cleaned.replace(/(href|src)\s*=\s*javascript:[^\s>]+/gi, '$1="#"');

  return cleaned;
}

/**
 * Removes badge rows from the top of the README before the first substantive text.
 */
export function stripBadgeClutter(content: string): string {
  const lines = content.split(/\r?\n/);
  const resultLines: string[] = [];
  let foundSubstantiveText = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!foundSubstantiveText) {
      // Empty line or simple title header (keep title header)
      if (!trimmed) {
        continue;
      }

      if (/^#\s+[^#]/.test(trimmed)) {
        resultLines.push(line);
        continue;
      }

      // If line contains badge host references or images with badges, skip
      if (
        BADGE_HOST_REGEX.test(line) ||
        (trimmed.startsWith('[![') && trimmed.includes('http')) ||
        (trimmed.startsWith('<p align="center">') && BADGE_HOST_REGEX.test(lines.slice(i, i + 5).join(' ')))
      ) {
        continue;
      }

      // Check if this line is an HTML badge container block
      if (line.includes('<img') && BADGE_HOST_REGEX.test(line)) {
        continue;
      }

      // Reached first real text paragraph or substantive content
      foundSubstantiveText = true;
      resultLines.push(line);
    } else {
      resultLines.push(line);
    }
  }

  return resultLines.join('\n').trim();
}

/**
 * Resolves a relative path against an optional repository subpath.
 */
function resolveRepoPath(baseSubpath: string, relPath: string): string {
  const cleanRel = relPath.replace(/^\.?\//, '');
  if (!baseSubpath || baseSubpath === '.') {
    return cleanRel;
  }
  return `${baseSubpath.replace(/\/$/, '')}/${cleanRel}`;
}

/**
 * Rewrites relative markdown and HTML links and images to canonical GitHub URLs.
 */
export function rewriteRelativeLinks(
  content: string,
  owner: string,
  repo: string,
  branch = 'main',
  subpath = ''
): string {
  const rawBase = `https://raw.githubusercontent.com/${owner}/${repo}/${branch}`;
  const blobBase = `https://github.com/${owner}/${repo}/blob/${branch}`;

  let result = content;

  // 1. Markdown images: ![alt](relative/path)
  result = result.replace(/!\[(.*?)\]\((?!https?:\/\/|data:|#|mailto:)(.*?)\)/g, (_, alt, url) => {
    const cleanUrl = url.trim().replace(/^['"]|['"]$/g, '');
    const resolved = resolveRepoPath(subpath, cleanUrl);
    return `![${alt}](${rawBase}/${resolved})`;
  });

  // 2. Markdown links: [text](relative/path)
  result = result.replace(/(?<!!)\[(.*?)\]\((?!https?:\/\/|data:|#|mailto:)(.*?)\)/g, (_, text, url) => {
    const cleanUrl = url.trim().replace(/^['"]|['"]$/g, '');
    const resolved = resolveRepoPath(subpath, cleanUrl);
    return `[${text}](${blobBase}/${resolved})`;
  });

  // 3. HTML <img> tags with relative src
  result = result.replace(/<img\b([^>]*?)\bsrc=(['"])(?!https?:\/\/|data:|#)(.*?)\2([^>]*?)>/gi, (_, before, q, src, after) => {
    const resolved = resolveRepoPath(subpath, src.trim());
    return `<img${before}src=${q}${rawBase}/${resolved}${q}${after}>`;
  });

  // 4. HTML <a> tags with relative href
  result = result.replace(/<a\b([^>]*?)\bhref=(['"])(?!https?:\/\/|data:|#|mailto:)(.*?)\2([^>]*?)>/gi, (_, before, q, href, after) => {
    const resolved = resolveRepoPath(subpath, href.trim());
    return `<a${before}href=${q}${blobBase}/${resolved}${q}${after}>`;
  });

  return result;
}

/**
 * Applies the ~60 KB size cap with a heading-boundary cut (§8).
 */
export function applySizeCap(
  content: string,
  maxBytes = 60000,
  owner = '',
  repo = ''
): { content: string; truncated: boolean } {
  const byteLength = Buffer.byteLength(content, 'utf8');
  if (byteLength <= maxBytes) {
    return { content, truncated: false };
  }

  // Slice content roughly to character count matching maxBytes
  const slicePos = content.slice(0, maxBytes);

  // Look for the last heading before the limit
  const lastHeadingMatch = slicePos.search(/\n#{1,3}\s+[^\n]+\n?(?=[^#]*$)/);
  let cutIndex = lastHeadingMatch > maxBytes * 0.5 ? lastHeadingMatch : -1;

  if (cutIndex === -1) {
    // Fallback to last paragraph break
    const lastParagraph = slicePos.lastIndexOf('\n\n');
    cutIndex = lastParagraph > maxBytes * 0.5 ? lastParagraph : maxBytes;
  }

  const truncatedText = content.slice(0, cutIndex).trim();
  const githubLink = owner && repo ? `https://github.com/${owner}/${repo}` : '#';
  const notice = `\n\n*(README truncated for display. [Read the full README on GitHub](${githubLink})).*`;

  return {
    content: `${truncatedText}${notice}`,
    truncated: true,
  };
}

/**
 * Extracts the first substantive plain-text paragraph for card summaries (D6).
 */
export function extractSummary(content: string): string {
  // Strip code blocks first
  const noCode = content.replace(/```[\s\S]*?```/g, '');
  const paragraphs = noCode.split(/\r?\n\r?\n/);

  for (const p of paragraphs) {
    const trimmed = p.trim();
    if (!trimmed) continue;
    // Skip headings, blockquotes, badges, images, tables
    if (/^#+/.test(trimmed)) continue;
    if (/^>/.test(trimmed)) continue;
    if (/^\|/.test(trimmed)) continue;
    if (/^!\[.*?\]/.test(trimmed)) continue;
    if (BADGE_HOST_REGEX.test(trimmed)) continue;

    // Clean inline markdown
    const clean = trimmed
      .replace(/!\[.*?\]\(.*?\)/g, '')
      .replace(/\[(.*?)\]\(.*?\)/g, '$1')
      .replace(/[*_~`]/g, '')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    if (clean.length >= 25) {
      // Skip language switchers or navigation bars with 3+ middle-dot/pipe separators
      const separatorCount = (clean.match(/[·|•]/g) || []).length;
      if (separatorCount >= 3) continue;
      // Skip short colon lead-in lines (e.g., "For MCP clients like Cursor or Claude Desktop:")
      if (clean.endsWith(':') && clean.length < 80) continue;

      if (clean.length > 220) {
        return `${clean.slice(0, 217).trim()}...`;
      }
      return clean;
    }
  }

  return '';
}

/**
 * Detects whether the content is primarily in Chinese/Japanese/Korean (D10).
 */
export function detectLanguage(text: string): string {
  const cjkMatches = text.match(/[\u3040-\u30ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/g);
  if (cjkMatches && cjkMatches.length >= 15) {
    const ratio = cjkMatches.length / Math.max(text.length, 1);
    if (ratio > 0.05) {
      return 'zh';
    }
  }
  return 'en';
}

/**
 * Derives needs_keys and prerequisites from a launch spec (D7).
 */
export function derivePrerequisitesAndKeys(spec?: LaunchSpec): {
  needsKeys: boolean;
  prerequisites: string[];
} {
  const prerequisites: string[] = [];
  let needsKeys = false;

  if (!spec) {
    return { needsKeys: false, prerequisites: [] };
  }

  if (spec.env_vars && spec.env_vars.length > 0) {
    needsKeys = spec.env_vars.some((v) => v.required || v.secret);
  }

  const cmd = (spec.command || '').toLowerCase();
  if (cmd === 'npx' || cmd === 'node') {
    prerequisites.push('Node.js >= 18');
  } else if (cmd === 'uvx' || cmd === 'python' || cmd === 'python3') {
    prerequisites.push('Python >= 3.10', 'uv');
  } else if (cmd === 'docker') {
    prerequisites.push('Docker');
  }

  if (spec.transport === 'http') {
    prerequisites.push('Network access (HTTP MCP server)');
  }

  return {
    needsKeys,
    prerequisites,
  };
}

/**
 * Orchestrator: cleans raw README content and extracts metadata.
 */
export function cleanReadme(rawContent: string, options: CleanReadmeOptions): CleanReadmeResult {
  const { owner, repo, branch = 'main', subpath = '', maxBytes = 60000 } = options;

  // 1. Strip raw dangerous HTML
  let processed = stripUnsafeHtml(rawContent);

  // 2. Strip top badge clutter
  processed = stripBadgeClutter(processed);

  // 3. Rewrite relative links & images to canonical GitHub URLs
  processed = rewriteRelativeLinks(processed, owner, repo, branch, subpath);

  // 4. Extract summary before truncation
  const summary = extractSummary(processed);

  // 5. Detect language
  const language = detectLanguage(processed);

  // 6. Apply ~60 KB size cap
  const { content: cleaned, truncated } = applySizeCap(processed, maxBytes, owner, repo);

  return {
    cleaned,
    summary,
    truncated,
    language,
  };
}
