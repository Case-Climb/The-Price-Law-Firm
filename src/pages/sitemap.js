import { site, practiceAreas, otherPracticeAreas, locations, additionalCities } from '../data/site.js';
import { page } from '../lib/layout.js';
import { blogPosts } from '../data/blog-content.js';
import { breadcrumb, breadcrumbSchema, ctaBand, esc } from '../lib/components.js';

const trail = [{ name: 'Home', url: '/' }, { name: 'Sitemap', url: '/sitemap' }];

const col = (title, links) => `
  <div class="sitemap-col reveal">
    <h2>${esc(title)}</h2>
    <ul>${links.map((l) => `<li><a class="${l.sub ? 'sub' : ''}" href="${l.url}">${esc(l.name)}</a></li>`).join('')}</ul>
  </div>`;

const content = `
<section class="hero hero--compact">
  <div class="hero__bg"><div class="media-ph" role="presentation"></div></div>
  <div class="container">
    <div class="hero__inner">
      ${breadcrumb(trail)}
      <h1>Sitemap</h1>
      <p class="lead" style="margin-bottom:0">Every page on ${esc(site.brand)}, in one place.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="sitemap-grid">
      ${col('Main Pages', [
        { name: 'Home', url: '/' },
        { name: 'About Bill Price', url: '/about' },
        { name: 'Contact', url: '/contact' },
        { name: 'Blog', url: '/blog' },
      ])}

      ${col('Practice Areas', [
        { name: 'Personal Injury (Overview)', url: '/personal-injury' },
        ...practiceAreas.map((p) => ({ name: p.name, url: p.url, sub: true })),
        ...otherPracticeAreas.map((p) => ({ name: p.name, url: p.url })),
      ])}

      ${col('Service Areas', locations.map((l) => ({ name: `${l.name}, FL${l.primary ? ' — Our Office' : ''}`, url: l.url })))}

      ${col('Blog Articles', blogPosts.map((p) => ({ name: p.title, url: `/blog/${p.slug}` })))}

      ${col('Legal', [
        { name: 'Disclaimer', url: '/disclaimer' },
        { name: 'Privacy Policy', url: '/privacy-policy' },
        { name: 'Sitemap', url: '/sitemap' },
      ])}

      <div class="sitemap-col reveal">
        <h2>Also Serving</h2>
        <p style="font-size:.95rem">These communities are within our service area but do not have dedicated pages. Call <a href="${site.phoneHref}">${esc(site.phone)}</a> or <a href="/contact">contact us</a> if you were injured in any of them.</p>
        <p style="font-size:.95rem;margin-bottom:0"><strong>${additionalCities.map(esc).join(' · ')}</strong></p>
      </div>
    </div>

    <div class="container container--narrow center" style="margin-top:3.5rem">
      <p style="font-size:.93rem;color:var(--slate-light)">
        Search engines: the machine-readable sitemap is at
        <a href="/sitemap.xml">/sitemap.xml</a>.
      </p>
    </div>
  </div>
</section>

${ctaBand({})}
`;

export default page({
  path: '/sitemap',
  title: 'Sitemap | The Price Law Firm',
  description: 'Browse every page on The Price Law Firm website — practice areas, service areas across the Florida Panhandle, blog articles and firm information.',
  schema: [breadcrumbSchema(trail)],
  content,
});
