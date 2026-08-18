#!/usr/bin/env node
/**
 * Static site generator for The Price Law Firm.
 * Zero dependencies. Renders src/pages/** to dist/ as plain static HTML,
 * copies assets, and emits sitemap.xml + robots.txt.
 */
import { mkdir, writeFile, rm, cp, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(root, 'dist');

const { site } = await import('./src/data/site.js');
const { practiceContent } = await import('./src/data/practice-content.js');
const { locationContent } = await import('./src/data/location-content.js');
const { blogPosts } = await import('./src/data/blog-content.js');
const { practicePage } = await import('./src/lib/practice-template.js');
const { locationPage } = await import('./src/lib/location-template.js');
const { postPage } = await import('./src/lib/post-template.js');

/* ------------------------------------------------------------- page table */
/** priority/changefreq feed sitemap.xml */
const pages = [];

const add = (url, html, { priority = 0.7, changefreq = 'monthly' } = {}) =>
  pages.push({ url, html, priority, changefreq });

// Static, hand-written pages
add('/', (await import('./src/pages/home.js')).default, { priority: 1.0, changefreq: 'weekly' });
add('/about', (await import('./src/pages/about.js')).default, { priority: 0.8 });
add('/personal-injury', (await import('./src/pages/personal-injury.js')).default, { priority: 0.9, changefreq: 'weekly' });
add('/property-insurance-claims', (await import('./src/pages/property-insurance-claims.js')).default, { priority: 0.85 });
add('/blog', (await import('./src/pages/blog.js')).default, { priority: 0.7, changefreq: 'weekly' });
add('/contact', (await import('./src/pages/contact.js')).default, { priority: 0.9 });
add('/disclaimer', (await import('./src/pages/disclaimer.js')).default, { priority: 0.3, changefreq: 'yearly' });
add('/privacy-policy', (await import('./src/pages/privacy-policy.js')).default, { priority: 0.3, changefreq: 'yearly' });
add('/sitemap', (await import('./src/pages/sitemap.js')).default, { priority: 0.3, changefreq: 'monthly' });

// Templated pages
for (const def of practiceContent) add(`/personal-injury/${def.slug}`, practicePage(def), { priority: 0.85 });
for (const def of locationContent) add(def.url, locationPage(def), { priority: def.primary ? 0.9 : 0.8 });
for (const post of blogPosts) add(`/blog/${post.slug}`, postPage(post), { priority: 0.6 });

/* ----------------------------------------------------------------- writer */
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });

for (const p of pages) {
  const outPath = p.url === '/' ? path.join(dist, 'index.html') : path.join(dist, p.url, 'index.html');
  await mkdir(path.dirname(outPath), { recursive: true });
  await writeFile(outPath, p.html, 'utf8');
}

// Assets — documentation (CREDITS.md etc.) stays out of the published site.
await cp(path.join(root, 'assets'), path.join(dist, 'assets'), {
  recursive: true,
  filter: (src) => !/\.(md|txt)$/i.test(src) || path.basename(src) === 'robots.txt',
});

/* ------------------------------------------------------------ sitemap.xml */
const today = new Date().toISOString().slice(0, 10);
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>${site.domain}${p.url === '/' ? '/' : p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority.toFixed(1)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;
await writeFile(path.join(dist, 'sitemap.xml'), sitemapXml, 'utf8');

/* -------------------------------------------------------------- robots.txt */
await writeFile(
  path.join(dist, 'robots.txt'),
  `User-agent: *
Allow: /

Sitemap: ${site.domain}/sitemap.xml
`,
  'utf8',
);

/* ------------------------------------------------------------------ extras */
// Minimal favicon so the <link rel="icon"> is not a 404.
await mkdir(path.join(dist, 'assets', 'img'), { recursive: true });
await writeFile(
  path.join(dist, 'assets', 'img', 'favicon.svg'),
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><rect width="48" height="48" rx="10" fill="#12294D"/><g fill="#fff"><path d="M23 11h2v27h-2z"/><path d="M16 36h16v2H16z"/><path d="M12 17h24v2H12z"/><path d="M15 19l-4 9h8l-4-9z"/><path d="M33 19l-4 9h8l-4-9z"/><circle cx="24" cy="13" r="3"/></g></svg>\n`,
  'utf8',
);

/* ------------------------------------------------------------- placeholders */
// Count unconfirmed markers so nothing unverified ships silently.
let phCount = 0;
const phByPage = [];
for (const p of pages) {
  const n = (p.html.match(/data-confirm/g) || []).length;
  if (n) phByPage.push({ url: p.url, n });
  phCount += n;
}

/* ------------------------------------------------------------------ report */
const totalBytes = pages.reduce((a, p) => a + Buffer.byteLength(p.html), 0);
console.log(`\n  The Price Law Firm — build complete`);
console.log(`  ${'-'.repeat(52)}`);
console.log(`  Pages rendered : ${pages.length}`);
console.log(`  Output         : dist/`);
console.log(`  Total HTML     : ${(totalBytes / 1024).toFixed(0)} KB`);
console.log(`  sitemap.xml    : ${pages.length} URLs`);
console.log(`  ${'-'.repeat(52)}`);
if (phCount) {
  console.log(`  ⚠  ${phCount} unconfirmed placeholders across ${phByPage.length} pages.`);
  console.log(`     These are highlighted in amber on the page (DRAFT mode).`);
  for (const { url, n } of phByPage.sort((a, b) => b.n - a.n).slice(0, 8)) {
    console.log(`       ${String(n).padStart(3)}  ${url}`);
  }
  if (phByPage.length > 8) console.log(`       ... and ${phByPage.length - 8} more pages`);
} else {
  console.log(`  ✓  No unconfirmed placeholders remain.`);
}
console.log('');
