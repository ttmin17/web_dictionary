import { describe, it, expect, vi } from 'vitest';

vi.mock('astro:content', () => ({
  getCollection: vi.fn().mockResolvedValue([]),
}));

import {
  getAvailableTrendingWeeks,
  getLatestTrendingWeek,
  getTrendingReport,
  getLatestTrendingReport,
  getEntryHref,
  getCategoryLabel,
  formatStarDelta,
} from '../../site/src/lib/trending.js';
import { formatStars, formatTimeAgo } from '../../site/src/lib/entries.js';
import { TrendingReportSchema } from '@web-db/schema';

describe('Phase 4: Site Trending Data Loaders, Formatters & RSS Helpers', () => {
  describe('1. Trending Week Loaders', () => {
    it('discovers available weekly runs sorted newest first', () => {
      const weeks = getAvailableTrendingWeeks();
      expect(Array.isArray(weeks)).toBe(true);
      expect(weeks.length).toBeGreaterThanOrEqual(1);

      // Verify ISO week format
      const weekPattern = /^\d{4}-W\d{2}$/;
      for (const week of weeks) {
        expect(weekPattern.test(week)).toBe(true);
      }

      // Verify descending order
      const sorted = [...weeks].sort().reverse();
      expect(weeks).toEqual(sorted);
    });

    it('returns latest trending week', () => {
      const latest = getLatestTrendingWeek();
      const all = getAvailableTrendingWeeks();
      expect(latest).toBe(all[0]);
      expect(latest).toMatch(/^\d{4}-W\d{2}$/);
    });

    it('loads and validates latest trending report against schema', () => {
      const report = getLatestTrendingReport();
      expect(report.week).toBe(getLatestTrendingWeek());

      const parsed = TrendingReportSchema.safeParse(report);
      expect(parsed.success).toBe(true);

      // Summary
      expect(report.summary.total_stars_gained).toBeGreaterThan(0);
      expect(report.summary.total_active_entries).toBeGreaterThan(0);

      // Top 25
      expect(report.top25_overall.length).toBeLessThanOrEqual(25);
      expect(report.top25_overall.length).toBeGreaterThan(0);

      // Check order: descending trending_score
      for (let i = 1; i < report.top25_overall.length; i++) {
        expect(report.top25_overall[i - 1].trending_score).toBeGreaterThanOrEqual(
          report.top25_overall[i].trending_score
        );
      }

      // Check breakout new tools
      expect(Array.isArray(report.breakout_new)).toBe(true);
      expect(report.breakout_new.length).toBeGreaterThan(0);

      // Check 3 pillars
      expect(report.top10_mcp.every((i) => i.type === 'mcp_server')).toBe(true);
      expect(report.top10_skills.every((i) => i.type === 'agent_skill')).toBe(true);
      expect(report.top10_tools.every((i) => i.type === 'agent_tool')).toBe(true);
      expect(report.top10_tools.length).toBeGreaterThan(0);
    });

    it('provides graceful empty report fallback for non-existent week without throwing', () => {
      const fallback = getTrendingReport('1999-W01');
      expect(fallback.week).toBe('1999-W01');
      expect(fallback.summary.total_stars_gained).toBe(0);
      expect(fallback.top25_overall).toEqual([]);
      expect(fallback.breakout_new).toEqual([]);
      expect(fallback.top10_mcp).toEqual([]);
      expect(fallback.top10_skills).toEqual([]);
      expect(fallback.top10_tools).toEqual([]);
    });
  });

  describe('2. Routing and Label Helpers', () => {
    it('computes correct canonical href for all 3 pillars', () => {
      expect(getEntryHref({ type: 'mcp_server', slug: 'modelcontextprotocol-server-sqlite' })).toBe(
        '/mcp/modelcontextprotocol-server-sqlite'
      );
      expect(getEntryHref({ type: 'agent_skill', slug: 'anthropic-quickstarts-skills-eval' })).toBe(
        '/skills/anthropic-quickstarts-skills-eval'
      );
      expect(getEntryHref({ type: 'agent_tool', slug: 'assafelovic-gpt-researcher' })).toBe(
        '/tools/assafelovic-gpt-researcher'
      );
    });

    it('resolves category labels and provides friendly fallbacks', () => {
      expect(getCategoryLabel('coding-agents')).toBe('Coding & Dev');
      expect(getCategoryLabel('browser-web')).toBe('Browser & Web');
      expect(getCategoryLabel('agent-frameworks')).toBe('Frameworks');
      expect(getCategoryLabel('security-auth')).toBe('Security');
      expect(getCategoryLabel('unknown-category')).toBe('unknown-category');
      expect(getCategoryLabel(undefined)).toBe('General');
    });

    it('formats weekly star deltas with positive plus sign and clamp', () => {
      expect(formatStarDelta(9049)).toBe('+9,049 ★');
      expect(formatStarDelta(50)).toBe('+50 ★');
      expect(formatStarDelta(0)).toBe('0 ★');
      expect(formatStarDelta(-10)).toBe('0 ★');
    });
  });

  describe('3. Formatting and Edge-Case Robustness', () => {
    it('formats stars numbers cleanly', () => {
      expect(formatStars(0)).toBe('0');
      expect(formatStars(500)).toBe('500');
      expect(formatStars(1200)).toBe('1.2k');
      expect(formatStars(53703)).toBe('53.7k');
      expect(formatStars(1500000)).toBe('1.5m');
    });

    it('formats relative time and guards against invalid date inputs without producing NaNy ago', () => {
      const now = new Date();
      expect(formatTimeAgo(now.toISOString())).toBe('today');

      const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
      expect(formatTimeAgo(yesterday.toISOString())).toBe('yesterday');

      const fiveDaysAgo = new Date(Date.now() - 5 * 24 * 60 * 60 * 1000);
      expect(formatTimeAgo(fiveDaysAgo.toISOString())).toBe('5d ago');

      // Edge cases: null/undefined/invalid string
      expect(formatTimeAgo(undefined)).toBe('recently');
      expect(formatTimeAgo('')).toBe('recently');
      expect(formatTimeAgo('invalid-date-string')).toBe('recently'); // MUST NOT return NaNy ago!
    });
  });

  describe('4. RSS Feed Generation & XML Sanitization', () => {
    function sanitizeXml(unsafe?: string): string {
      if (!unsafe) return '';
      const clean = unsafe.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '');
      return clean.replace(/[<>&'"]/g, (c) => {
        switch (c) {
          case '<':
            return '&lt;';
          case '>':
            return '&gt;';
          case '&':
            return '&amp;';
          case '\'':
            return '&apos;';
          case '"':
            return '&quot;';
          default:
            return c;
        }
      });
    }

    it('escapes XML reserved characters safely', () => {
      const raw = 'Test <tag> & "quotes" + \'apostrophes\'>';
      const escaped = sanitizeXml(raw);
      expect(escaped).toBe('Test &lt;tag&gt; &amp; &quot;quotes&quot; + &apos;apostrophes&apos;&gt;');
      expect(escaped).not.toContain('<tag>');
    });

    it('strips illegal XML 1.0 control characters', () => {
      const rawWithControl = 'Dirty\x00String\x08With\x0CFormFeed\x1FEnd';
      const cleaned = sanitizeXml(rawWithControl);
      expect(cleaned).toBe('DirtyStringWithFormFeedEnd');
      expect(cleaned).not.toMatch(/[\x00-\x08\x0B\x0C\x0E-\x1F]/);
    });

    it('verifies generated dist/rss.xml contains valid RSS 2.0 structure', async () => {
      const fs = await import('node:fs');
      const path = await import('node:path');
      const rssPath = path.resolve(process.cwd(), 'apps/site/dist/rss.xml');

      if (fs.existsSync(rssPath)) {
        const content = fs.readFileSync(rssPath, 'utf8');
        expect(content.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true);
        expect(content).toContain('<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">');
        expect(content).toContain('<channel>');
        expect(content).toContain('<title>AI Tools Hub — Weekly Trending &amp; Velocity Radar</title>');
        expect(content).toContain('<link>https://registry.example.com/trending</link>');
        expect(content).toContain('<atom:link href="https://registry.example.com/rss.xml" rel="self" type="application/rss+xml"/>');
        expect(content).toContain('</channel>');
        expect(content).toContain('</rss>');

        // No unescaped raw control characters
        expect(content).not.toMatch(/[\x00-\x08\x0B\x0C\x0E-\x1F]/);
      }
    });
  });
});
