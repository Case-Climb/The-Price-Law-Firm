#!/usr/bin/env node
/** Post-build audit: link integrity, SEO uniqueness, schema validity. */
import { readdir, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, 'dist');

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(full)));
    else if (e.name.endsWith('.html')) out.push(full);
  }
  return out;
}

const files = await walk(dist);
const urlOf = (f) => {
  const rel = '/' + path.relative(dist, f).replace(/index\.html$/, '').replace(/\\/g, '/');
  return rel === '/' ? '/' : rel.replace(/\/$/, '');
};

const pages = [];
for (const f of files) {
  const html = await readFile(f, 'utf8');
  pages.push({ url: urlOf(f), file: f, html });
}
const known = new Set(pages.map((p) => p.url));

const errors = [];
const warnings = [];
const titles = new Map();
const descs = new Map();

for (const p of pages) {
  const { html, url } = p;

  // --- title / description ---
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1];
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  if (!title) errors.push(`${url}: missing <title>`);
  if (!desc) errors.push(`${url}: missing meta description`);
  if (title) {
    if (titles.has(title)) errors.push(`${url}: duplicate title with ${titles.get(title)}`);
    titles.set(title, url);
    if (title.length > 65) warnings.push(`${url}: title ${title.length} chars (>65): "${title}"`);
  }
  if (desc) {
    if (descs.has(desc)) errors.push(`${url}: duplicate meta description with ${descs.get(desc)}`);
    descs.set(desc, url);
    if (desc.length < 120 || desc.length > 165) {
      warnings.push(`${url}: meta description ${desc.length} chars (target 150-160)`);
    }
  }

  // --- headings ---
  const h1s = html.match(/<h1[\s>]/g) || [];
  if (h1s.length !== 1) errors.push(`${url}: ${h1s.length} <h1> tags (expected 1)`);

  // --- canonical / OG ---
  if (!/<link rel="canonical"/.test(html)) errors.push(`${url}: missing canonical`);
  if (!/<meta property="og:title"/.test(html)) errors.push(`${url}: missing og:title`);

  // --- JSON-LD ---
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (!blocks.length) errors.push(`${url}: no JSON-LD`);
  for (const [, body] of blocks) {
    try {
      const parsed = JSON.parse(body);
      if (!parsed['@context']) errors.push(`${url}: JSON-LD missing @context`);
    } catch (e) {
      errors.push(`${url}: JSON-LD parse error — ${e.message}`);
    }
  }

  // --- internal links ---
  for (const [, href] of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    if (href.startsWith('/assets/')) continue;
    const clean = href === '/' ? '/' : href.replace(/\/$/, '');
    if (['/sitemap.xml', '/robots.txt'].includes(clean)) continue;
    if (!known.has(clean)) errors.push(`${url}: broken internal link -> ${href}`);
  }

  // --- template leakage ---
  if (html.includes('${')) errors.push(`${url}: unrendered template literal "\${"`);
  if (/\[object Object\]/.test(html)) errors.push(`${url}: "[object Object]" in output`);
  if (/undefined</.test(html)) warnings.push(`${url}: literal "undefined" in output`);

  // --- accessibility basics ---
  for (const [, tag] of html.matchAll(/<img([^>]*)>/g)) {
    if (!/\balt=/.test(tag)) errors.push(`${url}: <img> without alt`);
  }
  for (const [, tag] of html.matchAll(/<iframe([^>]*)>/g)) {
    if (!/\btitle=/.test(tag)) errors.push(`${url}: <iframe> without title`);
  }
}

// --- referenced images must exist AND be valid image files ---
const assetChecked = new Set();
for (const p of pages) {
  for (const [, src] of p.html.matchAll(/src="(\/assets\/[^"]+)"/g)) {
    const abs = path.join(dist, src);
    if (!existsSync(abs)) { errors.push(`${p.url}: missing asset -> ${src}`); continue; }
    if (assetChecked.has(src)) continue;
    assetChecked.add(src);
    // Guard against a re-encode silently writing the wrong container format.
    if (/\.jpe?g$/i.test(src)) {
      const head = await readFile(abs);
      if (!(head[0] === 0xff && head[1] === 0xd8)) {
        errors.push(`${src}: not a valid JPEG (bad magic bytes)`);
      }
    }
  }
}

// --- orphan check: is every page linked from somewhere? ---
const linked = new Set();
for (const p of pages) {
  for (const [, href] of p.html.matchAll(/href="(\/[^"#?]*)"/g)) {
    linked.add(href === '/' ? '/' : href.replace(/\/$/, ''));
  }
}
for (const p of pages) {
  if (p.url !== '/' && !linked.has(p.url)) warnings.push(`${p.url}: not linked from any other page (orphan)`);
}

// --- sitemap.xml coverage ---
const sm = await readFile(path.join(dist, 'sitemap.xml'), 'utf8');
const smUrls = new Set(
  [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => {
    const p = new URL(m[1]).pathname;
    return p === '/' ? '/' : p.replace(/\/$/, '');
  }),
);
for (const p of pages) if (!smUrls.has(p.url)) errors.push(`${p.url}: missing from sitemap.xml`);

// --- report ---
console.log(`\n  Audit — ${pages.length} pages\n  ${'-'.repeat(52)}`);
if (errors.length) {
  console.log(`  ✗ ${errors.length} error(s):`);
  errors.forEach((e) => console.log(`      ${e}`));
} else console.log('  ✓ No errors.');
if (warnings.length) {
  console.log(`\n  ! ${warnings.length} warning(s):`);
  warnings.forEach((w) => console.log(`      ${w}`));
}
console.log('');
process.exit(errors.length ? 1 : 0);
