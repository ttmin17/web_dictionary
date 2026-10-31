# GitHub Deployment Audit & Hosting Guide

**Date:** 2026-10-16  
**Scope:** Audit of `.github/workflows/` (`ci.yml`, `deploy.yml`, `pipeline.yml`), `apps/site/astro.config.mjs`, and step-by-step hosting instructions ($0/month architecture).  
**Deployment Readiness Rating:** **5.5 / 10** *(Good architecture design, but 4 critical configuration bugs will currently break GitHub Actions and/or GitHub Pages routing on first run).*

---

## 1. How the Current Deployment Architecture Works

Because this project uses a **Git-backed Static Architecture** (Astro 5 + Pagefind + JSON/Markdown files in `content/` and `data/`), you **do not need a backend server or paid database** to host it.

The system is split into two automated parts:
1. **Weekly Data Pipeline ([`.github/workflows/pipeline.yml`](file:///c:/teikmin/exploring/web_database/.github/workflows/pipeline.yml)):**
   - Runs every **Monday at 02:00 UTC** (or manually via the GitHub Actions "Run workflow" button).
   - Queries GitHub Search & npm APIs (`pnpm pipeline:run`), calculates trending velocity deltas, updates `content/entries/*.md`, `data/state/catalog-state.json`, and `data/runs/*.json`, and commits the new files back to the `main` branch.
2. **Static Site Build & Host ([`.github/workflows/deploy.yml`](file:///c:/teikmin/exploring/web_database/.github/workflows/deploy.yml) or Cloudflare/Vercel):**
   - Runs `pnpm site:build` (`astro build && pagefind --site dist`).
   - Outputs a pure static folder (`apps/site/dist/`) containing pre-rendered HTML pages, your Pagefind WASM search index, and `/rss.xml`.

---

## 2. Critical Bugs in the Current GitHub Workflows (Must Fix Before Deploying)

Before pushing this repository live, there are **4 bugs** across `.github/workflows/` and `astro.config.mjs` that will cause deployment to fail:

### Bug 1: Non-Existent `pnpm` Version (`12.9.1`) Breaks All 3 Workflows
In [`.github/workflows/ci.yml`](file:///c:/teikmin/exploring/web_database/.github/workflows/ci.yml#L22-L24), [`.github/workflows/deploy.yml`](file:///c:/teikmin/exploring/web_database/.github/workflows/deploy.yml#L33-L35), and [`.github/workflows/pipeline.yml`](file:///c:/teikmin/exploring/web_database/.github/workflows/pipeline.yml#L30-L32):
```yaml
- uses: pnpm/action-setup@v4
  with:
    version: 12.9.1
```
- **Why it fails:** `pnpm` version `12.9.1` does not exist (`pnpm` is currently on `9.x` / `10.x`). Every GitHub Actions run (`CI`, `Deploy`, and `Weekly Data Pipeline`) will immediately crash at the `Install pnpm` step.
- **How to fix:**
  1. Change `version: 12.9.1` to `version: 9` in `ci.yml`, `deploy.yml`, and `pipeline.yml`.
  2. Optionally add `"packageManager": "pnpm@9.15.4"` to root [`package.json`](file:///c:/teikmin/exploring/web_database/package.json).

---

### Bug 2: GitHub Pages Subpath (`/<repo-name>/`) Breaks Root Links & Pagefind Search
In [`apps/site/astro.config.mjs`](file:///c:/teikmin/exploring/web_database/apps/site/astro.config.mjs#L4-L6):
```js
export default defineConfig({
  output: 'static',
  site: 'https://registry.example.com',
});
```
- **Why it fails on GitHub Pages:**
  1. `site` is still hardcoded to `https://registry.example.com`, which breaks `/rss.xml` feed links and canonical URLs.
  2. If you deploy to standard **GitHub Pages** without a custom domain, your site is hosted under a subpath: `https://<username>.github.io/<repo-name>/`.
  3. However, all links across the Astro components (`href="/catalog"`, `href="/trending"`, `href="/entries/..."`, and `/pagefind/pagefind-ui.js` in [`SearchBar.astro`](file:///c:/teikmin/exploring/web_database/apps/site/src/components/SearchBar.astro#L41-L46)) use root-relative paths starting with `/`. On `https://<username>.github.io/<repo-name>/`, clicking `/catalog` navigates to `https://<username>.github.io/catalog` (**404 Not Found**), and Pagefind search fails to load `/pagefind/pagefind-ui.js` (**404 Not Found**).
- **How to fix (2 choices):**
  - **Choice A (Easiest — Zero Code Changes to Links):** Host on **Cloudflare Pages** or **Vercel** instead of GitHub Pages (or attach a custom domain to GitHub Pages). Both Cloudflare Pages (`your-project.pages.dev`) and Vercel (`your-project.vercel.app`) give you a **dedicated root domain (`/` ) for free**, so every `/catalog`, `/trending`, and `/pagefind/...` path works out of the box! You only need to update `site:` in `astro.config.mjs`.
  - **Choice B (If using GitHub Pages without a custom domain):** Set `site: 'https://<username>.github.io'` and `base: '/<repo-name>'` in `astro.config.mjs`, and update internal `href="/..."` links and Pagefind asset paths to prefix `import.meta.env.BASE_URL`.

---

### Bug 3: `pipeline.yml` Cannot Trigger `deploy.yml` Using Default `GITHUB_TOKEN`
In [`.github/workflows/pipeline.yml`](file:///c:/teikmin/exploring/web_database/.github/workflows/pipeline.yml#L57-L69):
```yaml
git commit -m "chore(data): weekly pipeline refresh [skip ci]"
git push
gh workflow run deploy.yml --ref main || true
```
- **Why it fails:**
  1. The commit message includes `[skip ci]`, which tells GitHub Actions not to trigger `on: push` workflows.
  2. Even without `[skip ci]`, GitHub Actions has a security rule: **commits pushed or `workflow_dispatch` calls made using the built-in `secrets.GITHUB_TOKEN` will never trigger another workflow run** (to prevent infinite loops). Because of `|| true`, `gh workflow run deploy.yml` silently fails or gets ignored, meaning your weekly pipeline updates the repo on Monday morning, **but the live website never rebuilds!**
- **How to fix:**
  - **If hosting on GitHub Pages:** Combine the deploy job directly into `pipeline.yml` (run `pnpm site:build` and `actions/deploy-pages@v4` right after `git push` inside `pipeline.yml`), OR use a Personal Access Token (`secrets.PAT_TOKEN`) instead of `secrets.GITHUB_TOKEN`.
  - **If hosting on Cloudflare Pages / Vercel:** Simply **remove `[skip ci]`** from the commit message in `pipeline.yml` (`git commit -m "chore(data): weekly pipeline refresh"`). Cloudflare Pages and Vercel listen to GitHub commits via their own GitHub App webhook—so when the GitHub Action pushes a commit to `main`, Cloudflare/Vercel will automatically rebuild and deploy the new weekly leaderboard!

---

### Bug 4: `deploy.yml` Ignores Changes to `data/**`
In [`.github/workflows/deploy.yml`](file:///c:/teikmin/exploring/web_database/.github/workflows/deploy.yml#L6-L10):
```yaml
on:
  push:
    branches: [main]
    paths:
      - 'apps/site/**'
      - 'content/**'
      - 'packages/**'
      - '.github/workflows/deploy.yml'
```
- **Why it fails:** The v3 pages (`/trending`, `/trending/[week]`, `/rss.xml`, and the homepage velocity leaderboards) read directly from `data/runs/*.json` and `data/state/catalog-state.json`. If a pipeline run updates `data/**` without modifying a markdown file in `content/**`, `deploy.yml` won't trigger.
- **How to fix:** Add `- 'data/**'` to the `paths:` list in `deploy.yml`.

---

## 3. Comparing Hosting Options (All $0 / Free Tier)

Because the site compiles to static HTML + Pagefind index files, you have three main free hosting options:

| Feature | **Option 1: Cloudflare Pages (Recommended)** | **Option 2: Vercel** | **Option 3: GitHub Pages** |
| :--- | :--- | :--- | :--- |
| **Cost** | **$0/month** (Unlimited bandwidth) | **$0/month** (Hobby tier, 100GB bandwidth) | **$0/month** (Public repo) |
| **Free URL Format** | `https://<project>.pages.dev/` (Root `/`) | `https://<project>.vercel.app/` (Root `/`) | `https://<user>.github.io/<repo>/` (Subpath!) |
| **Root Path (`/`) Compatibility** | **Works out-of-the-box** (No `base` path bugs) | **Works out-of-the-box** (No `base` path bugs) | Breaks `/catalog` & `/pagefind` unless `base` is refactored or custom domain is used |
| **Auto-Deploy on Action Commit** | **Yes** (if `[skip ci]` is removed) | **Yes** (if `[skip ci]` is removed) | Requires fixing `GITHUB_TOKEN` or merging workflows |
| **PR Preview URLs** | Automatic on every PR | Automatic on every PR | Not built-in |
| **Global CDN Speed (Pagefind WASM)** | Fastest global edge caching | Very fast | Good |

---

## 4. Step-by-Step Setup Guides

### Guide A: Hosting on GitHub Pages (100% Inside GitHub)

If you want everything (code, weekly cron job, and hosting) to live inside GitHub with zero external accounts:

#### Step 1: Fix the 4 Config Issues in the Repo
1. In `.github/workflows/ci.yml`, `deploy.yml`, and `pipeline.yml`, change `version: 12.9.1` to `version: 9`.
2. In `.github/workflows/deploy.yml`, add `- 'data/**'` under `on.push.paths`.
3. In `.github/workflows/pipeline.yml`, either:
   - Add the GitHub Pages build & deploy steps (`pnpm site:build` -> `actions/upload-pages-artifact@v3` -> `actions/deploy-pages@v4`) at the end of `pipeline.yml` so the weekly cron job directly publishes the updated site, **OR**
   - Replace `GITHUB_TOKEN` with a GitHub Personal Access Token (`PAT_TOKEN`) and remove `[skip ci]`.
4. **Handle the Domain / Subpath in `apps/site/astro.config.mjs`:**
   - **If you have a custom domain (e.g., `tools.yourdomain.com`):** Set `site: 'https://tools.yourdomain.com'` in `astro.config.mjs` and add a `apps/site/public/CNAME` file containing `tools.yourdomain.com`.
   - **If you are using `https://<username>.github.io/<repo-name>/`:** Set `site: 'https://<username>.github.io'` and `base: '/<repo-name>'` in `astro.config.mjs`, and update internal links in `apps/site/src/` to include `import.meta.env.BASE_URL`.

#### Step 2: Enable GitHub Pages & Actions Permissions in GitHub UI
1. Push your repository to GitHub.
2. Go to **Settings -> Pages** in your GitHub repository:
   - Under **Build and deployment -> Source**, select **GitHub Actions** (do *not* select "Deploy from a branch").
3. Go to **Settings -> Actions -> General**:
   - Scroll to **Workflow permissions** and select **Read and write permissions** (required so `pipeline.yml` can commit weekly data updates back to `main`).
4. *(Optional but Recommended)* Go to **Settings -> Secrets and variables -> Actions**:
   - If you need higher GitHub API rate limits during discovery, add a secret or rely on the built-in `GITHUB_TOKEN` (already wired in `pipeline.yml`).

#### Step 3: Trigger Your First Run
1. Go to the **Actions** tab in GitHub.
2. Click **Deploy to GitHub Pages** -> **Run workflow** (or push to `main`).
3. To test the weekly scraper manually anytime, click **Weekly Data Pipeline** -> **Run workflow**.

---

### Guide B: Hosting on Cloudflare Pages or Vercel (Recommended for Easiest `/` Routing)

If you want a free root domain (`https://your-dictionary.pages.dev` or `.vercel.app`) so that Pagefind and all `/catalog` and `/trending` links work immediately without subpath refactoring:

#### Step 1: Fix the GitHub Actions Pipeline
1. In `.github/workflows/ci.yml` and `pipeline.yml`, change `pnpm` `version: 12.9.1` to `version: 9`.
2. Disable or delete `.github/workflows/deploy.yml` (since Cloudflare/Vercel will build and host the site).
3. In `.github/workflows/pipeline.yml`, remove `[skip ci]` from the commit message on line 57:
   ```yaml
   git commit -m "chore(data): weekly pipeline refresh"
   ```
   *(When `pipeline.yml` pushes the weekly update to `main`, Cloudflare Pages / Vercel will detect the commit and automatically deploy the fresh weekly trending leaderboard).*
4. In `apps/site/astro.config.mjs`, update `site:` to your `.pages.dev` or `.vercel.app` URL.

#### Step 2: Connect Repository to Cloudflare Pages (or Vercel)
1. Log in to **Cloudflare Dashboard -> Workers & Pages -> Create -> Pages -> Connect to Git** (or **Vercel -> Add New Project**).
2. Select your GitHub repository.
3. Configure the build settings:
   - **Framework Preset:** `Astro`
   - **Build Command:** `pnpm site:build`
   - **Build Output Directory:** `apps/site/dist`
   - **Environment Variables:**
     - `NODE_VERSION` = `22` (or `24`)
4. Click **Save and Deploy**. Within ~60 seconds, your Web Dictionary & Weekly Trending Leaderboard will be live on a global CDN with instant Pagefind search!

---

## 5. Summary Checklist Before Going Live

- [ ] **Fix `pnpm` version** in `.github/workflows/*.yml` (`12.9.1` -> `9`).
- [ ] **Update `site` URL** in `apps/site/astro.config.mjs` from `https://registry.example.com` to your real production URL.
- [ ] **Decide on Hosting:**
  - If **Cloudflare Pages / Vercel**: Remove `[skip ci]` from `pipeline.yml` so weekly data commits auto-deploy.
  - If **GitHub Pages**: Add `data/**` to `deploy.yml`, deploy directly at the end of `pipeline.yml`, and either attach a custom domain or configure `base: '/<repo-name>'`.
- [ ] **Enable GitHub Actions Read/Write permissions** in Repo `Settings -> Actions -> General` so the Monday cron job can commit new tools and weekly snapshots.
