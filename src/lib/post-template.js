import { site } from '../data/site.js';
import { page } from './layout.js';
import { icon } from './icons.js';
import { blogPosts } from '../data/blog-content.js';
import { breadcrumbSchema, ctaBand, img, esc } from './components.js';

const fmtDate = (iso) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export function postPage(post) {
  const url = `/blog/${post.slug}`;
  const trail = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog' },
    { name: post.title, url },
  ];

  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const content = `
<section class="hero hero--compact">
  <div class="hero__bg">${img(post.image, post.imageAlt, { eager: true })}</div>
  <div class="container">
    <div class="hero__inner">
      <nav aria-label="Breadcrumb"><ol class="breadcrumb">
        <li><a href="/">Home</a></li>
        <li><span class="sep" aria-hidden="true">/</span><a href="/blog">Blog</a></li>
        <li><span class="sep" aria-hidden="true">/</span><span aria-current="page">${esc(post.category)}</span></li>
      </ol></nav>
      <span class="tag" style="background:rgba(255,255,255,.16);color:#fff">${esc(post.category)}</span>
      <h1>${esc(post.title)}</h1>
      <p class="lead" style="margin-bottom:0">${esc(post.excerpt)}</p>
      <p style="color:rgba(255,255,255,.7);font-size:.9rem;margin-top:1rem">
        Published <time datetime="${post.date}">${fmtDate(post.date)}</time> · The Price Law Firm
      </p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split" style="grid-template-columns:1.7fr 1fr;align-items:start">
      <article class="post-body reveal">
        ${post.body}

        <div class="notice" style="margin-top:2.5rem">
          <strong>A note on this article.</strong> This is general information about Florida law, not legal advice, and it does not create an attorney-client relationship. Laws change and every case turns on its own facts. For advice about your situation, speak with an attorney — call ${esc(site.phone)}.
        </div>

        <div class="post-cta">
          <h3>Injured in the Florida Panhandle?</h3>
          <p>The Price Law Firm handles <a href="${post.related}">${esc(post.relatedLabel.toLowerCase())}</a> claims and other injury cases from our office in Panama City. The consultation is free and there is no obligation.</p>
          <div class="btn-row" style="margin-top:1.25rem">
            <a class="btn btn--primary" href="/contact">Free Consultation</a>
            <a class="btn btn--outline" href="${site.phoneHref}">${icon('phone')} Call ${esc(site.phone)}</a>
          </div>
        </div>
      </article>

      <aside class="reveal">
        <div class="card"><div class="card__body">
          <h3>Related Practice Area</h3>
          <p>Learn how we handle these cases and what the process looks like.</p>
          <a class="arrow-link" href="${post.related}">${esc(post.relatedLabel)} ${icon('arrowRight')}</a>
        </div></div>

        <div class="card" style="margin-top:1.5rem"><div class="card__body">
          <h3>More Articles</h3>
          <ul style="list-style:none;padding:0;margin:0">
            ${others.map((o) => `<li style="padding:.7rem 0;border-bottom:1px solid var(--border)">
              <a href="/blog/${o.slug}" style="font-weight:600;font-size:.95rem;color:var(--navy)">${esc(o.title)}</a>
              <div style="font-size:.82rem;color:var(--slate-light);margin-top:.2rem">${esc(o.category)}</div>
            </li>`).join('')}
          </ul>
          <a class="arrow-link" style="margin-top:1.25rem" href="/blog">All articles ${icon('arrowRight')}</a>
        </div></div>

        <div class="card" style="margin-top:1.5rem;background:var(--navy)"><div class="card__body">
          <h3 style="color:#fff">Talk to Bill Price</h3>
          <p style="color:rgba(255,255,255,.8)">Free consultation. You speak with the attorney handling your case.</p>
          <a class="btn btn--white" href="${site.phoneHref}" style="margin-top:.5rem">${icon('phone')} ${esc(site.phone)}</a>
        </div></div>
      </aside>
    </div>
  </div>
</section>

${ctaBand({})}
`;

  return page({
    path: url,
    title: post.metaTitle,
    description: post.metaDescription,
    ogType: 'article',
    schema: [
      breadcrumbSchema(trail),
      {
        '@type': 'BlogPosting',
        '@id': `${site.domain}${url}#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.date,
        dateModified: post.date,
        articleSection: post.category,
        author: { '@type': 'Person', name: site.attorney, url: `${site.domain}/about` },
        publisher: { '@id': `${site.domain}/#organization` },
        mainEntityOfPage: { '@type': 'WebPage', '@id': site.domain + url },
      },
    ],
    content,
  });
}
