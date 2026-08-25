import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { icon } from './icons.js';
import { videos } from '../data/video-content.js';
import {
  site, DRAFT, unconfirmed, hours, practiceAreas, otherPracticeAreas, locations,
  additionalCities, activeBadges, testimonials,
} from '../data/site.js';

/** Opens turn-by-turn directions to the office in Google Maps. */
export const directionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(site.mapQuery)}`;

export const esc = (s = '') =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * Marks copy that Bill Price must verify. In DRAFT it renders an amber,
 * greppable marker; in production it renders nothing, so an overlooked
 * placeholder degrades to silence rather than leaking an internal note.
 */
export const ph = (text) => (DRAFT ? `<span class="ph" data-confirm>${text}</span>` : '');

/* ------------------------------------------------------------------- logo */
export function logo(href = '/') {
  return `<a class="logo" href="${href}" aria-label="${esc(site.brand)} — home">
    <svg viewBox="0 0 48 48" aria-hidden="true" focusable="false">
      <rect class="mark-bg" width="48" height="48" rx="12" fill="#EAF1FE"/>
      <g class="mark-fg" fill="#12294D">
        <path d="M23 11h2v27h-2z"/>
        <path d="M16 36h16v2H16z"/>
        <path d="M12 17h24v2H12z"/>
        <path d="M15 19 11 28h8l-4-9zm0 4.6 1.3 2.9h-2.6L15 23.6z"/>
        <path d="M33 19l-4 9h8l-4-9zm0 4.6 1.3 2.9h-2.6L33 23.6z"/>
        <circle cx="24" cy="13" r="3"/>
      </g>
    </svg>
    <span class="logo-text">
      <span class="l1">The Price Law Firm</span>
      <span class="l2">Bill Price, PA</span>
    </span>
  </a>`;
}

/* ----------------------------------------------------------------- header */
export function header(current = '') {
  const paLinks = practiceAreas.map((p) => `<li><a href="${p.url}">${esc(p.navName)}</a></li>`).join('');
  const otherLinks = otherPracticeAreas.map((p) => `<li><a href="${p.url}">${esc(p.navName)}</a></li>`).join('');
  const locLinks = locations.map((l) => `<li><a href="${l.url}">${esc(l.name)}</a></li>`).join('');
  const isCur = (path) => (current === path || (path !== '/' && current.startsWith(path)) ? ' is-current' : '');

  return `<header class="site-header">
  <div class="inner">
    ${logo()}
    <nav class="nav" aria-label="Primary">
      <ul class="nav-list">
        <li class="nav-item has-dropdown">
          <button class="nav-link${isCur('/personal-injury')}" aria-expanded="false" aria-haspopup="true">Practice Areas <span class="chev">${icon('chevronDown')}</span></button>
          <ul class="dropdown">
            ${paLinks}
            <li class="divider" role="presentation"></li>
            ${otherLinks}
            <li class="divider" role="presentation"></li>
            <li><a class="all-link" href="/personal-injury">All Practice Areas</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link${isCur('/about')}" href="/about">About</a></li>
        <li class="nav-item has-dropdown">
          <button class="nav-link" aria-expanded="false" aria-haspopup="true">Service Areas <span class="chev">${icon('chevronDown')}</span></button>
          <ul class="dropdown">
            ${locLinks}
            <li class="divider" role="presentation"></li>
            <li><a class="all-link" href="/sitemap">All Areas We Serve</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link${isCur('/videos')}" href="/videos">Videos</a></li>
        <li class="nav-item"><a class="nav-link${isCur('/blog')}" href="/blog">Blog</a></li>
        <li class="nav-item"><a class="nav-link${isCur('/contact')}" href="/contact">Contact</a></li>
      </ul>
    </nav>
    <div class="header-cta">
      <a class="header-phone" href="${site.phoneHref}">${icon('phone')} ${esc(site.phone)}</a>
      <a class="btn btn--primary btn--sm" href="/contact">Free Consultation</a>
      <button class="burger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav"><span></span></button>
    </div>
  </div>
</header>
<div class="mobile-nav" id="mobile-nav">
  <ul>
    <li>
      <button class="m-toggle" aria-expanded="false">Practice Areas ${icon('chevronDown')}</button>
      <ul class="m-sub">
        ${paLinks}
        ${otherLinks}
        <li><a href="/personal-injury"><strong>All Practice Areas</strong></a></li>
      </ul>
    </li>
    <li><a href="/about">About</a></li>
    <li>
      <button class="m-toggle" aria-expanded="false">Service Areas ${icon('chevronDown')}</button>
      <ul class="m-sub">
        ${locLinks}
        <li><a href="/sitemap"><strong>All Areas We Serve</strong></a></li>
      </ul>
    </li>
    <li><a href="/videos">Videos</a></li>
    <li><a href="/blog">Blog</a></li>
    <li><a href="/contact">Contact</a></li>
  </ul>
  <div class="m-cta">
    <a class="btn btn--primary" href="/contact">Free Consultation</a>
    <a class="btn btn--outline" href="${site.phoneHref}">${icon('phone')} ${esc(site.phone)}</a>
  </div>
</div>`;
}

/* ----------------------------------------------------------------- pills */
export function trustPills({ dark = false, center = false } = {}) {
  const items = activeBadges()
    .map((b) => `<span class="pill${dark ? ' pill--dark' : ''}">${icon(b.icon)}${esc(b.label)}</span>`)
    .join('');
  return `<div class="pills${center ? ' center' : ''}">${items}</div>`;
}

/* ---------------------------------------------------------------- footer */
export function footer() {
  const year = new Date().getFullYear();
  const hoursRows = unconfirmed.officeHours
    ? hours.map((h) => `<li>${esc(h.days)}<br><span style="opacity:.75">${esc(h.time)}</span></li>`).join('')
    : `<li>${ph('Office hours to be confirmed')}<br><span style="opacity:.75">Placeholder: Mon–Fri, 8:00 AM – 5:00 PM</span></li>
       <li style="opacity:.8">Calls answered 24/7 for new injury inquiries ${ph('confirm')}</li>`;

  return `<footer class="site-footer">
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        ${logo()}
        <p>The Price Law Firm represents people injured across the Florida Panhandle — in trucking and auto collisions, catastrophic injury cases, defective product claims, and disputes with insurance companies. When you call, you speak with ${esc(site.attorneyShort)}.</p>
        <div class="footer-social">
          <a href="${site.facebook}" aria-label="The Price Law Firm on Facebook" rel="noopener" target="_blank">${icon('facebook')}</a>
          <a href="${site.phoneHref}" aria-label="Call ${esc(site.phone)}">${icon('phone')}</a>
          <a href="mailto:${site.email}" aria-label="Email ${esc(site.email)}">${icon('mail')}</a>
        </div>
      </div>
      <div>
        <h4>Practice Areas</h4>
        <ul>
          <li><a href="/personal-injury">Personal Injury</a></li>
          ${practiceAreas.map((p) => `<li><a href="${p.url}">${esc(p.name)}</a></li>`).join('')}
          ${otherPracticeAreas.map((p) => `<li><a href="${p.url}">${esc(p.name)}</a></li>`).join('')}
        </ul>
      </div>
      <div>
        <h4>Service Areas</h4>
        <ul>${locations.map((l) => `<li><a href="${l.url}">${esc(l.name)}</a></li>`).join('')}</ul>
      </div>
      <div>
        <h4>Contact</h4>
        <ul class="footer-contact">
          <li>${icon('phone')}<a href="${site.phoneHref}">${esc(site.phone)}</a></li>
          <li>${icon('mail')}<a href="mailto:${site.email}">${esc(site.email)}</a></li>
          <li>${icon('pin')}<a href="${directionsUrl()}" target="_blank" rel="noopener">${esc(site.address.street)}<br>${esc(site.address.city)}, ${esc(site.address.region)} ${esc(site.address.postal)}</a></li>
        </ul>
      </div>
      <div>
        <h4>Hours</h4>
        <ul class="footer-contact"><li>${icon('clock')}<span>${hoursRows.replace(/<\/?li>/g, '')}</span></li></ul>
      </div>
    </div>
    <div class="footer-pills">${trustPills({ dark: true })}</div>
    <div class="footer-bottom">
      <span>&copy; <span data-year>${year}</span> ${esc(site.legalName)}. All rights reserved.</span>
      <nav aria-label="Legal">
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/disclaimer">Disclaimer</a>
        <a href="/sitemap">Sitemap</a>
      </nav>
    </div>
    <p class="footer-disclaimer">The information on this website is for general informational purposes only and is not legal advice. Viewing this site, contacting the firm, or sending information through this site does not create an attorney-client relationship. Do not send confidential information until an attorney-client relationship has been established in writing. Prior results do not guarantee a similar outcome. ${esc(site.legalName)} is a professional association.</p>
  </div>
</footer>`;
}

/* -------------------------------------------------------- floating widgets */
export function floatingWidgets() {
  return `<div class="mobile-call-bar">
  <a class="btn btn--primary" href="${site.phoneHref}">${icon('phone')} Call Now</a>
  <a class="btn btn--outline" href="/contact">Free Consultation</a>
</div>`;
}

/* -------------------------------------------------------------- videos */
/**
 * Click-to-play grid of vertical (9:16) Shorts.
 *
 * Cards render as a static thumbnail until clicked, then swap in a
 * youtube-nocookie iframe. A live embed is ~700KB and sets tracking cookies
 * on page load; this keeps the page fast and cookie-free until a visitor
 * actually chooses to watch.
 */
export function videoGrid(list = videos) {
  const cards = list
    .map((v, i) => {
      const label = v.title || `Video from ${site.brand}, ${i + 1} of ${list.length}`;
      const caption = v.title ? `<p class="video-caption">${esc(v.title)}</p>` : '';
      return `<li class="video-card">
      <button class="video-facade" type="button" data-video-id="${esc(v.id)}" data-video-title="${esc(label)}" aria-label="Play video: ${esc(label)}">
        <img src="https://i.ytimg.com/vi/${esc(v.id)}/hqdefault.jpg" alt="" loading="lazy" decoding="async" width="480" height="360">
        <span class="video-play" aria-hidden="true">${icon('play')}</span>
      </button>${caption}
    </li>`;
    })
    .join('\n    ');
  return `<ul class="video-grid reveal">\n    ${cards}\n  </ul>`;
}

export function videoSection({
  list = videos,
  eyebrow = 'Video',
  title = 'Legal Tips from Bill Price',
  text,
  gray = false,
  limit,
  more = false,
} = {}) {
  const shown = limit ? list.slice(0, limit) : list;
  const moreLink = more
    ? `<div class="btn-row" style="justify-content:center;margin-top:2.25rem"><a class="btn btn--outline" href="/videos">Watch all ${list.length} videos</a></div>`
    : '';
  return `<section class="section${gray ? ' section--gray' : ''}">
  <div class="container">
    ${sectionHead({ eyebrow, title, text })}
    ${videoGrid(shown)}
    ${moreLink}
  </div>
</section>`;
}

/* ------------------------------------------------------------ breadcrumbs */
export function breadcrumb(trail) {
  const items = trail
    .map((t, i) => {
      const last = i === trail.length - 1;
      const sep = i > 0 ? `<span class="sep" aria-hidden="true">/</span>` : '';
      return `<li>${sep}${last ? `<span aria-current="page">${esc(t.name)}</span>` : `<a href="${t.url}">${esc(t.name)}</a>`}</li>`;
    })
    .join('');
  return `<nav aria-label="Breadcrumb"><ol class="breadcrumb">${items}</ol></nav>`;
}

export function breadcrumbSchema(trail) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((t, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: t.name,
      item: site.domain + (t.url === '/' ? '/' : t.url),
    })),
  };
}

/* ------------------------------------------------------------------ media */
const assetsDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'assets', 'img');

/** True if the image file actually exists on disk. */
export const hasImage = (name) => existsSync(path.join(assetsDir, `${name}.jpg`));

/**
 * Renders a photo if the file exists, otherwise the labeled placeholder.
 * Lets client-supplied photography be dropped in without a code change.
 */
export function photo(name, alt, placeholderLabel, opts = {}) {
  return hasImage(name) ? img(name, alt, opts) : mediaPlaceholder(placeholderLabel, opts);
}

/** Real photograph. Every image needs descriptive alt text. */
export function img(name, alt, { eager = false } = {}) {
  return `<img src="/assets/img/${name}.jpg" alt="${esc(alt)}"` +
    ` loading="${eager ? 'eager' : 'lazy'}" decoding="async"` +
    `${eager ? ' fetchpriority="high"' : ''}>`;
}

/* ------------------------------------------------------ media placeholders */
export function mediaPlaceholder(label, { light = false, bg = false, icon: ico = 'camera' } = {}) {
  return `<div class="media-ph${light ? ' media-ph--light' : ''}${bg ? ' media-ph--bg' : ''}" role="img" aria-label="Image placeholder: ${esc(label)}">
    <div class="media-ph__label">${icon(ico)}${esc(label)}</div>
  </div>`;
}

/* ------------------------------------------------------------------- hero */
export function hero({ title, lead, badge, trail, buttons = true, center = false, compact = false, ratingBadge = false, mediaLabel, image, imageAlt }) {
  const cls = ['hero'];
  if (center) cls.push('hero--center');
  if (compact) cls.push('hero--compact');

  let badgeHtml = '';
  if (ratingBadge) {
    // Only render a star-rating badge when a real rating actually exists.
    // With no reviews, fall back to a claim that is true today.
    badgeHtml = unconfirmed.googleReviews
      ? `<div class="rating-badge"><span class="stars">${icon('star').repeat(5)}</span> ${unconfirmed.googleRating} · ${unconfirmed.googleReviewCount}+ Google reviews</div>`
      : `<div class="hero-badge">${icon('user')} You speak directly with Bill Price</div>`;
  } else if (badge) {
    badgeHtml = `<div class="hero-badge">${icon(badge.icon || 'check')} ${badge.label}</div>`;
  }

  return `<section class="${cls.join(' ')}">
  <div class="hero__bg">${image
    ? img(image, imageAlt || '', { eager: true })
    : mediaPlaceholder(mediaLabel || 'Hero photograph to be supplied by client', { icon: 'camera', bg: true })}</div>
  <div class="container">
    <div class="hero__inner">
      ${trail ? breadcrumb(trail) : ''}
      ${badgeHtml}
      <h1>${title}</h1>
      ${lead ? `<p class="lead">${lead}</p>` : ''}
      ${buttons ? `<div class="btn-row">
        <a class="btn btn--primary" href="/contact">Free Consultation</a>
        <a class="btn btn--ghost-light" href="${site.phoneHref}">${icon('phone')} Call ${esc(site.phone)}</a>
      </div>` : ''}
    </div>
  </div>
</section>`;
}

/* ------------------------------------------------------------ section head */
export function sectionHead({ eyebrow, title, text, left = false }) {
  return `<div class="section-head${left ? ' left' : ''} reveal">
    ${eyebrow ? `<span class="eyebrow">${esc(eyebrow)}</span>` : ''}
    <h2>${title}</h2>
    ${text ? `<p>${text}</p>` : ''}
  </div>`;
}

/* ----------------------------------------------------------- practice grid */
export function practiceCards(exclude = null) {
  const list = practiceAreas.filter((p) => p.slug !== exclude);
  return `<div class="grid grid-3">${list.map((p) => `
    <article class="card reveal">
      <div class="card__media">${img('pa-' + p.slug, p.imageAlt)}</div>
      <div class="card__body">
        <h3><a href="${p.url}" style="color:inherit">${esc(p.name)}</a></h3>
        <p>${esc(p.card)}</p>
        <ul class="card__bullets">${p.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}</ul>
        <a class="arrow-link" href="${p.url}">Learn More ${icon('arrowRight')}</a>
      </div>
    </article>`).join('')}</div>`;
}

/** Compact list of the five case types, for sidebars and location pages. */
export function practiceList(highlight = []) {
  return `<div class="grid grid-3">${practiceAreas.map((p) => `
    <a class="card reveal" href="${p.url}" style="text-decoration:none">
      <div class="card__body">
        <div class="icon-badge">${icon(p.icon)}</div>
        <h3>${esc(p.name)}${highlight.includes(p.slug) ? ' <span class="tag" style="margin:0 0 0 .4rem;vertical-align:middle">Common here</span>' : ''}</h3>
        <p>${esc(p.card)}</p>
        <span class="arrow-link">Learn More ${icon('arrowRight')}</span>
      </div>
    </a>`).join('')}</div>`;
}

/* ---------------------------------------------------------- location grid */
export function locationCards(exclude = null) {
  const list = locations.filter((l) => l.slug !== exclude);
  return `<div class="grid grid-3">${list.map((l) => `
    <a class="card loc-card reveal" href="${l.url}" style="text-decoration:none">
      <div class="card__media">${img('loc-' + l.slug, l.imageAlt)}</div>
      <div class="card__body">
        <div class="county">${esc(l.county)}</div>
        <h3>${esc(l.name)}${l.primary ? ' <span class="tag" style="margin:0 0 0 .4rem;vertical-align:middle">Our Office</span>' : ''}</h3>
        <p>${esc(l.blurb)}</p>
        <span class="arrow-link">View ${esc(l.name)} ${icon('arrowRight')}</span>
      </div>
    </a>`).join('')}</div>`;
}

export function alsoServing() {
  return `<div class="also-serving reveal">
    <p><strong>We also represent clients in:</strong> ${additionalCities.map(esc).join(' · ')}. Not sure whether we cover your area? <a href="/contact">Call ${esc(site.phone)}</a> and ask.</p>
  </div>`;
}

/* ------------------------------------------------------------ process steps */
export function processSteps(steps, { columns = 4 } = {}) {
  return `<div class="steps${columns === 3 ? ' steps--3' : ''}">${steps.map((s, i) => `
    <div class="step reveal">
      <div class="step__num">${String(i + 1).padStart(2, '0')}</div>
      <h3>${esc(s.title)}</h3>
      <p>${esc(s.text)}</p>
    </div>`).join('')}</div>`;
}

/* ----------------------------------------------------------------- feature */
export function featureGrid(items) {
  return `<div class="feature-grid">${items.map((f) => `
    <div class="feature reveal">
      <div class="icon-badge">${icon(f.icon)}</div>
      <h3>${f.title}</h3>
      <p>${f.text}</p>
    </div>`).join('')}</div>`;
}

/* --------------------------------------------------------------------- FAQ */
export function faq(items) {
  return `<div class="faq">${items.map((f) => `
    <div class="faq__item reveal">
      <button class="faq__q" aria-expanded="false"><span>${esc(f.q)}</span><span class="faq__icon">${icon('plus')}</span></button>
      <div class="faq__a"><div class="faq__a-inner">${f.a}</div></div>
    </div>`).join('')}</div>`;
}

export function faqSchema(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: String(f.a).replace(/<[^>]+>/g, '').trim() },
    })),
  };
}

export function faqSection(items, { title = 'Frequently Asked Questions', eyebrow = 'FAQ', text, gray = true } = {}) {
  return `<section class="section${gray ? ' section--gray' : ''}">
    <div class="container">
      ${sectionHead({ eyebrow, title, text })}
      ${faq(items)}
    </div>
  </section>`;
}

/* -------------------------------------------------------------- quote card */
function quoteCard(t) {
  const initials = t.name.split(' ').map((w) => w[0]).join('');
  return `<div class="quote">
    <span class="stars">${icon('star').repeat(5)}</span>
    <blockquote>${esc(t.quote)}</blockquote>
    <div class="quote__meta">
      <div class="quote__avatar" aria-hidden="true">${esc(initials)}</div>
      <div>
        <div class="quote__name">${esc(t.name)}</div>
        <div class="quote__source">${unconfirmed.realTestimonials ? esc(t.source) : '<span class="ph" data-confirm>Sample text — replace with a real client testimonial</span>'}</div>
      </div>
    </div>
  </div>`;
}

export function testimonialsSection({ count = 5, title = 'What Our Clients Say', eyebrow = 'Testimonials', text, gray = false } = {}) {
  const items = testimonials.slice(0, count);
  return `<section class="section${gray ? ' section--gray' : ''}">
    <div class="container">
      ${sectionHead({ eyebrow, title, text: text || 'Reviews from people we have represented across the Panhandle.' })}
      <div class="carousel reveal">
        <div class="carousel__track">${items.map(quoteCard).join('')}</div>
        <div class="carousel__nav">
          <button class="carousel__btn" data-dir="prev" aria-label="Previous testimonials">${icon('chevronLeft')}</button>
          <button class="carousel__btn" data-dir="next" aria-label="Next testimonials">${icon('chevronRight')}</button>
        </div>
      </div>
      <div class="center" style="margin-top:1.5rem"><a class="arrow-link" href="/testimonials">Read all client reviews ${icon('arrowRight')}</a></div>
    </div>
  </section>`;
}

export function testimonialsStrip({ count = 3, gray = true } = {}) {
  return `<section class="section${gray ? ' section--gray' : ''}">
    <div class="container">
      ${sectionHead({ eyebrow: 'Testimonials', title: 'What Our Clients Say' })}
      <div class="grid grid-3">${testimonials.slice(0, count).map((t) => `<div class="reveal">${quoteCard(t)}</div>`).join('')}</div>
      <div class="center" style="margin-top:2rem"><a class="arrow-link" href="/testimonials">Read all client reviews ${icon('arrowRight')}</a></div>
    </div>
  </section>`;
}

export { quoteCard };

/* ---------------------------------------------------------------- CTA band */
export function ctaBand({ title = "Injured in an Accident? Let's Talk.", text = 'Tell us what happened. Your initial consultation is free, and there is no obligation to hire us.', pills = false } = {}) {
  return `<section class="section cta-band">
    <div class="container center">
      <h2>${title}</h2>
      <p>${text}</p>
      <div class="btn-row center" style="margin-top:2rem">
        <a class="btn btn--white" href="/contact">Free Consultation</a>
        <a class="btn btn--ghost-light" href="${site.phoneHref}">${icon('phone')} Call ${esc(site.phone)}</a>
      </div>
      ${pills ? trustPills({ dark: true, center: true }) : ''}
    </div>
  </section>`;
}

/* ----------------------------------------------------------------- find us */
export function findUs({ gray = false, note } = {}) {
  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
  const hoursVal = unconfirmed.officeHours
    ? hours.map((h) => `${esc(h.days)}: ${esc(h.time)}`).join('<br>')
    : `${ph('Hours pending confirmation')}<br>Placeholder: Mon–Fri, 8:00 AM – 5:00 PM`;

  return `<section class="section${gray ? ' section--gray' : ''}">
    <div class="container">
      ${sectionHead({ eyebrow: 'Find Us', title: 'Visit Our Panama City Office', text: note || 'We are on W. 23rd Street in Panama City, and we serve clients throughout the Florida Panhandle.' })}
      <div class="find-us">
        <ul class="info-list reveal">
          <li><span class="ico">${icon('pin')}</span><div><div class="lbl">Office</div><div class="val">
            <a href="${directionsUrl()}" target="_blank" rel="noopener">${esc(site.address.street)}<br>${esc(site.address.city)}, ${esc(site.address.region)} ${esc(site.address.postal)}</a>
          </div></div></li>
          <li><span class="ico">${icon('phone')}</span><div><div class="lbl">Phone</div><div class="val"><a href="${site.phoneHref}">${esc(site.phone)}</a></div></div></li>
          <li><span class="ico">${icon('mail')}</span><div><div class="lbl">Email</div><div class="val"><a href="mailto:${site.email}">${esc(site.email)}</a></div></div></li>
          <li><span class="ico">${icon('clock')}</span><div><div class="lbl">Hours</div><div class="val">${hoursVal}</div></div></li>
        </ul>
        <div class="reveal">
          <div class="map-embed">
            <iframe src="${mapSrc}" title="Map showing ${esc(site.brand)} at ${esc(site.addressLine)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
          </div>
          <div class="btn-row" style="margin-top:1.25rem">
            <a class="btn btn--primary" href="${directionsUrl()}" target="_blank" rel="noopener">${icon('pin')} Get Directions</a>
          </div>
        </div>
      </div>
    </div>
  </section>`;
}

/* --------------------------------------------------------------- contact form */
export function contactForm() {
  return `<div class="form-embed reveal">
    <iframe
      src="https://services.caseclimb.com/widget/form/zZUdrr0b8CtJ0L1FbI3K"
      style="width:100%;height:100%;border:none;border-radius:10px"
      id="inline-zZUdrr0b8CtJ0L1FbI3K"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Website Form (The Price Law Firm)"
      data-height="540"
      data-layout-iframe-id="inline-zZUdrr0b8CtJ0L1FbI3K"
      data-form-id="zZUdrr0b8CtJ0L1FbI3K"
      title="Website Form (The Price Law Firm)"></iframe>
    <script src="https://services.caseclimb.com/js/form_embed.js"></script>
    <p class="form-note">Submitting this form does not create an attorney-client relationship, and the information you send is not confidential until we agree in writing to represent you. Please do not include sensitive details in your first message.</p>
  </div>`;
}
