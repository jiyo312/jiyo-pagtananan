# Deploying to GitHub Pages with a custom domain

This guide covers how this Next.js portfolio is built as a static site, deployed to GitHub Pages, made search-engine friendly, and served from `jiyopagtananan.com`.

- Repository: `jiyo312/jiyo-pagtananan`
- Live site: `https://jiyopagtananan.com`
- Default Pages URL: `https://jiyo312.github.io/jiyo-pagtananan/`

## How it works

GitHub Pages only serves static files. It can't run a Node.js server. Next.js handles this with a **static export**: `npm run build` renders every page to plain HTML, CSS and JavaScript in the `out/` folder, and GitHub Pages serves that folder.

The pieces already in this repo:

| File | What it does |
| --- | --- |
| `next.config.ts` | `output: 'export'` creates the static site in `out/`. `images.unoptimized` is needed because Pages can't run the Next.js image optimizer. `trailingSlash` makes clean URLs work on static hosting. |
| `.github/workflows/deploy.yml` | Builds the site and publishes `out/` to Pages on every push to `main`. |
| `public/CNAME` | Contains `jiyopagtananan.com`. It tells GitHub Pages which domain to serve. |
| `public/.nojekyll` | Stops GitHub Pages from running Jekyll, which would hide the `_next/` folder and break the site. |
| `app/layout.tsx` | Page title, description, canonical URL, Open Graph and Twitter tags, and structured data (JSON-LD). |

Files in `public/` are copied into the root of `out/`, so `CNAME` and `.nojekyll` end up where GitHub Pages expects them.

## 1. Deploy to GitHub Pages

### One-time setup

1. On GitHub, open the repository and go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**. Don't choose "Deploy from a branch", because that would skip the build step.

### Deploying

Push to `main`:

```bash
git push origin main
```

The workflow then:

1. Installs dependencies with `npm ci`.
2. Runs `npm run build`, which writes the static site to `out/`.
3. Uploads `out/` and publishes it to GitHub Pages.

Watch it in the repository's **Actions** tab. A run takes a couple of minutes. You can also start a deploy by hand from **Actions → Deploy to GitHub Pages → Run workflow**.

### Test the build before pushing

```bash
npm run build
npx serve out
```

Open the URL `serve` prints and check the site works with no dev server. This catches anything that only breaks in the static export.

### Static export limits

These Next.js features need a server, so they don't work on GitHub Pages:

- API routes and Route Handlers that run on each request
- Server Actions
- Middleware
- `cookies()`, `headers()` and other per-request APIs
- The built-in image optimizer (already turned off)

A contact form, for example, needs a third-party service such as Formspree, or a separate backend.

## 2. Make it SEO friendly

### Already in place

- **Pre-rendered HTML.** The static export puts the full page content in the HTML, so search engines can read it without running JavaScript.
- **Metadata** in `app/layout.tsx`: title, description, keywords and author.
- **Canonical URL** (`alternates.canonical`). It points to `https://jiyopagtananan.com`, so Google treats that as the main address and not the `github.io` one.
- **Open Graph and Twitter tags** for link previews on LinkedIn, Facebook and X.
- **Structured data.** A `Person` schema with your name, job title and profile links.
- **`lang="en"`** on the page.

### Recommended additions

These aren't set up yet.

#### robots.txt and sitemap

Create `app/robots.ts`:

```ts
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://jiyopagtananan.com/sitemap.xml',
  }
}
```

Create `app/sitemap.ts`:

```ts
import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://jiyopagtananan.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}
```

`dynamic = 'force-static'` makes Next.js write these as plain files (`robots.txt` and `sitemap.xml`) during the static export.

#### Social preview image

`twitter.card` is set to `summary_large_image`, but there's no preview image yet, so links show up without a picture. Add a 1200×630 image as `app/opengraph-image.png` (and optionally `app/twitter-image.png`). Next.js finds these by file name and adds the right tags.

#### Check the metadata text

The description in `app/layout.tsx` says "unified platforms serving millions", and the keywords list Node.js. Make sure both match the current site content, since the description is what Google shows under your name.

### After launch: Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console) and add a **Domain** property for `jiyopagtananan.com`.
2. Verify ownership by adding the TXT record Google gives you at your DNS provider.
3. Under **Sitemaps**, submit `https://jiyopagtananan.com/sitemap.xml`. This needs the sitemap from above.
4. Use **URL Inspection** on the home page and click **Request indexing**.

New sites usually take a few days to a few weeks to appear in search results.

## 3. Point the domain name

### Step 1: Add the domain in GitHub

1. Go to **Settings → Pages → Custom domain**.
2. Enter `jiyopagtananan.com` and click **Save**.

Keep `public/CNAME` in the repo. With GitHub Actions deploys, GitHub reads the domain from the published site, so without that file the custom domain can reset on the next deploy.

### Step 2: Add DNS records at your domain registrar

Sign in where you bought the domain (Namecheap, Hostinger, GoDaddy and so on) and open its DNS settings. Remove any existing `A`, `AAAA` or `CNAME` records on `@` and `www` that point somewhere else, such as a parking page. Leave email records (`MX`, `TXT`) alone.

Then add:

**Root domain (`jiyopagtananan.com`): four A records**

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**Optional IPv6: four AAAA records**

| Type | Host | Value |
| --- | --- | --- |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |

**`www` subdomain: one CNAME record**

| Type | Host | Value |
| --- | --- | --- |
| CNAME | `www` | `jiyo312.github.io` |

Point the `www` CNAME at `jiyo312.github.io`, without the repository name. GitHub then redirects `www.jiyopagtananan.com` to `jiyopagtananan.com` automatically.

Some registrars use a blank host instead of `@`, and some add a trailing dot to the CNAME value. Both are fine.

These IP addresses come from GitHub's guide, [Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site). Check them there if anything looks out of date.

### Step 3: Wait for DNS, then turn on HTTPS

DNS changes can take from a few minutes up to 24–48 hours to spread. Check progress from a terminal:

```bash
dig jiyopagtananan.com +noall +answer
dig www.jiyopagtananan.com +noall +answer
```

The first command should list the four `185.199.x.153` addresses. The second should show the CNAME to `jiyo312.github.io`.

When the DNS check in **Settings → Pages** passes:

1. GitHub issues a free HTTPS certificate. This can take up to an hour.
2. Tick **Enforce HTTPS**.

HTTPS matters for SEO, since Google ranks secure sites higher and browsers warn on insecure ones.

### Step 4 (recommended): Verify the domain with GitHub

Verifying stops anyone else from claiming your domain on GitHub Pages if your DNS is ever misconfigured.

1. Go to your GitHub profile **Settings → Pages** (account settings, not the repository's).
2. Click **Add a domain**, enter `jiyopagtananan.com`, and follow the steps. GitHub gives you a TXT record to add at your registrar.

## Troubleshooting

| Problem | Likely cause and fix |
| --- | --- |
| Page loads but has no styles, or buttons don't work | The `_next/` folder is being hidden. Check that `public/.nojekyll` exists and that Pages source is **GitHub Actions**. |
| Custom domain disappears after a deploy | `public/CNAME` is missing or wrong. It should contain only `jiyopagtananan.com`. |
| "Domain's DNS record could not be retrieved" | DNS hasn't spread yet, or a record is wrong. Recheck the records and wait. |
| "Enforce HTTPS" is greyed out | The certificate isn't issued yet. Wait up to an hour after DNS passes, or remove and re-add the custom domain to retry. |
| `www` doesn't redirect | The `www` CNAME is missing or points to the repository URL. It should be `jiyo312.github.io`. |
| Build fails in Actions | Run `npm run build` locally to see the error. A common cause is using a server-only feature from the list above. |
| Site works with `npm run dev` but not on a phone over Wi-Fi | That's a dev server setting, not a deploy issue. Add the computer's local IP to `allowedDevOrigins` in `next.config.ts` and restart the dev server. It doesn't affect the deployed site. |

## References

- [Next.js: Static exports](https://nextjs.org/docs/app/guides/static-exports)
- [Next.js: Metadata and OG images](https://nextjs.org/docs/app/getting-started/metadata-and-og-images)
- [GitHub Docs: Managing a custom domain for your GitHub Pages site](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)
- [GitHub Docs: Verifying your custom domain](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/verifying-your-custom-domain-for-github-pages)
- [Google Search Console](https://search.google.com/search-console)
