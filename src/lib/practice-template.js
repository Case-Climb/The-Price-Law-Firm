import { site, practiceAreas } from '../data/site.js';
import { page } from './layout.js';
import { icon } from '../lib/icons.js';
import {
  hero, sectionHead, processSteps, ctaBand, faqSection, faqSchema,
  testimonialsStrip, breadcrumbSchema, img, findUs, esc,
} from './components.js';

/** Renders one case-type page from its content definition. */
export function practicePage(def) {
  const area = practiceAreas.find((p) => p.slug === def.slug);
  const trail = [
    { name: 'Home', url: '/' },
    { name: 'Personal Injury', url: '/personal-injury' },
    { name: area.name, url: area.url },
  ];

  const related = def.related.map((slug) => practiceAreas.find((p) => p.slug === slug));

  const content = `
${hero({
  title: def.h1,
  lead: def.heroLead,
  trail,
  badge: { icon: area.icon, label: def.heroBadge },
  image: 'hero-practice',
  imageAlt: 'Classical stone columns of a courthouse seen from below',
})}

<section class="section">
  <div class="container">
    <div class="split split--media-right" style="align-items:start">
      <div class="reveal">
        <span class="eyebrow">Overview</span>
        <h2>${def.introTitle}</h2>
        ${def.intro.map((p) => `<p${p === def.intro[0] ? ' class="lead"' : ''}>${p}</p>`).join('\n        ')}
      </div>
      <div class="split__media reveal" style="min-height:380px">
        ${img('pa-' + area.slug, area.imageAlt)}
      </div>
    </div>
  </div>
</section>

<section class="section section--gray">
  <div class="container">
    ${sectionHead({ eyebrow: 'What We Handle', title: def.handleTitle, text: def.handleText })}
    <div class="container container--narrow" style="padding:0">
      <div class="card reveal"><div class="card__body" style="padding:clamp(26px,4vw,40px)">
        <ul class="checklist">${def.handles.map((h) => `<li><strong>${esc(h.title)}</strong> — ${h.text}</li>`).join('')}</ul>
      </div></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrow: 'Our Process', title: def.processTitle, text: def.processText })}
    ${processSteps(def.steps, { columns: 3 })}
  </div>
</section>

${ctaBand({ title: def.ctaTitle, text: def.ctaText })}

${faqSection(def.faqs, { title: `${area.name} — Frequently Asked Questions` })}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrow: 'Related', title: 'Related Practice Areas' })}
    <div class="grid grid-3">
      ${related.map((r) => `
      <a class="card reveal" href="${r.url}" style="text-decoration:none">
        <div class="card__body">
          <div class="icon-badge">${icon(r.icon)}</div>
          <h3>${esc(r.name)}</h3>
          <p>${esc(r.card)}</p>
          <span class="arrow-link">Learn More ${icon('arrowRight')}</span>
        </div>
      </a>`).join('')}
      <a class="card reveal" href="/personal-injury" style="text-decoration:none">
        <div class="card__body">
          <div class="icon-badge">${icon('shield')}</div>
          <h3>All Personal Injury Cases</h3>
          <p>See every type of injury claim The Price Law Firm handles across the Florida Panhandle.</p>
          <span class="arrow-link">Back to Personal Injury ${icon('arrowRight')}</span>
        </div>
      </a>
    </div>
  </div>
</section>

${findUs({})}
`;

  return page({
    path: area.url,
    title: def.title,
    description: def.description,
    schema: [breadcrumbSchema(trail), faqSchema(def.faqs)],
    content,
  });
}
