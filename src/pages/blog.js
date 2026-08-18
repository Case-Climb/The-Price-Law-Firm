import { site } from '../data/site.js';
import { page } from '../lib/layout.js';
import { icon } from '../lib/icons.js';
import { blogPosts, blogCategories } from '../data/blog-content.js';
import {
  hero, sectionHead, ctaBand, breadcrumbSchema, img, esc, ph,
} from '../lib/components.js';

const trail = [{ name: 'Home', url: '/' }, { name: 'Blog', url: '/blog' }];

const fmtDate = (iso) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

const content = `
${hero({
  title: 'Florida Personal Injury Legal Blog',
  lead: 'Practical guidance for injury victims across the Florida Panhandle — plain answers to the questions people actually ask.',
  trail,
  buttons: false,
  image: 'blog-deadline',
  imageAlt: 'Shelves of legal reference books in a law library',
})}

<section class="section">
  <div class="container">
    <div class="filter-row reveal">
      ${blogCategories.map((c, i) => `<button class="filter-btn${i === 0 ? ' active' : ''}" data-cat="${c === 'All' ? 'all' : esc(c)}">${esc(c)}</button>`).join('')}
    </div>

    <div class="grid grid-3">
      ${blogPosts.map((p) => `
      <article class="card blog-card reveal" data-post-cat="${esc(p.category)}">
        <div class="card__media">${img(p.image, p.imageAlt)}</div>
        <div class="card__body">
          <span class="tag">${esc(p.category)}</span>
          <div class="blog-meta"><time datetime="${p.date}">${fmtDate(p.date)}</time></div>
          <h3><a href="/blog/${p.slug}" style="color:inherit">${esc(p.title)}</a></h3>
          <p>${esc(p.excerpt)}</p>
          <a class="arrow-link" href="/blog/${p.slug}">Read More ${icon('arrowRight')}</a>
        </div>
      </article>`).join('')}
    </div>

  </div>
</section>

<section class="section section--gray">
  <div class="container container--narrow center">
    <span class="eyebrow">Have a Question?</span>
    <h2>Not Finding the Answer You Need?</h2>
    <p class="lead">These articles cover general ground. Your situation has its own facts — and those are what actually matter.</p>
    <div class="btn-row center" style="margin-top:2rem">
      <a class="btn btn--primary" href="/contact">Ask Bill Price</a>
      <a class="btn btn--outline" href="${site.phoneHref}">${icon('phone')} Call ${esc(site.phone)}</a>
    </div>
  </div>
</section>

${ctaBand({})}
`;

export default page({
  path: '/blog',
  title: 'Personal Injury Legal Blog | The Price Law Firm',
  description: `Florida personal injury tips from The Price Law Firm in Panama City — accident steps, claim deadlines, case value and comparative negligence rules.`,
  schema: [
    breadcrumbSchema(trail),
    {
      '@type': 'Blog',
      '@id': `${site.domain}/blog#blog`,
      name: 'Florida Personal Injury Legal Blog',
      url: `${site.domain}/blog`,
      publisher: { '@id': `${site.domain}/#organization` },
      blogPost: blogPosts.map((p) => ({
        '@type': 'BlogPosting',
        headline: p.title,
        url: `${site.domain}/blog/${p.slug}`,
        datePublished: p.date,
      })),
    },
  ],
  content,
});
