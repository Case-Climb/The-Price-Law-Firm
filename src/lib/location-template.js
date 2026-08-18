import { site, locations } from '../data/site.js';
import { page, localBusinessSchema } from './layout.js';
import { icon } from './icons.js';
import {
  hero, sectionHead, practiceList, ctaBand, faqSection, faqSchema,
  testimonialsStrip, breadcrumbSchema, findUs, locationCards, esc, ph,
} from './components.js';

export function locationPage(def) {
  const meta = locations.find((l) => l.slug === def.slug);
  const trail = [{ name: 'Home', url: '/' }, { name: def.name, url: def.url }];

  const content = `
${hero({
  title: def.h1,
  lead: def.heroLead,
  trail,
  badge: def.primary
    ? { icon: 'pin', label: 'Primary Office' }
    : { icon: 'pin', label: `Serving ${def.name} from Panama City` },
  image: 'loc-' + def.slug,
  imageAlt: meta.imageAlt,
})}

<section class="section">
  <div class="container">
    <div class="split split--media-right" style="align-items:start">
      <div class="reveal">
        <span class="eyebrow">${esc(def.county)}</span>
        <h2>${def.introTitle}</h2>
        ${def.intro.map((p, i) => `<p${i === 0 ? ' class="lead"' : ''}>${p}</p>`).join('\n        ')}
      </div>
      <div class="reveal">
        <div class="card"><div class="card__body">
          <div class="icon-badge">${icon('gavel')}</div>
          <h3>Where ${esc(def.name)} Cases Are Filed</h3>
          <p><strong>${esc(def.county)}</strong> is part of the <strong>${esc(def.circuit)}</strong> of Florida.</p>
          ${def.courthouse
            ? `<p style="margin-bottom:.5rem"><strong>${esc(def.courthouse.name)}</strong><br>${esc(def.courthouse.address)}</p>`
            : ''}
          <p style="font-size:.93rem;color:var(--slate-light);margin-bottom:0">${def.courtNote}</p>
        </div></div>
        <div class="card" style="margin-top:1.5rem"><div class="card__body">
          <div class="icon-badge">${icon('pin')}</div>
          <h3>Nearby Communities We Serve</h3>
          <p style="margin-bottom:0">${def.nearby.map(esc).join(' · ')}</p>
        </div></div>
      </div>
    </div>
  </div>
</section>

<section class="section section--gray">
  <div class="container">
    ${sectionHead({
      eyebrow: 'Practice Areas',
      title: `Injury Cases We Handle in ${esc(def.name)}`,
      text: def.practiceText,
    })}
    ${practiceList(def.highlight || [])}
  </div>
</section>

${ctaBand({ title: def.ctaTitle, text: def.ctaText })}

${faqSection(def.faqs, { title: `${esc(def.name)} — Common Questions`, gray: false })}

${findUs({ gray: true, note: def.primary
  ? 'Our office is here in Panama City, and clients are welcome to meet with us in person.'
  : `We are based in Panama City and represent ${esc(def.name)} clients from this office.` })}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrow: 'Other Areas', title: 'More Communities We Serve' })}
    ${locationCards(def.slug)}
  </div>
</section>

`;

  return page({
    path: def.url,
    title: def.title,
    description: def.description,
    schema: [
      breadcrumbSchema(trail),
      localBusinessSchema({
        name: def.name,
        url: def.url,
        description: def.schemaDescription,
        areaServed: [def.name, ...def.nearby],
      }),
      faqSchema(def.faqs),
    ],
    content,
  });
}
