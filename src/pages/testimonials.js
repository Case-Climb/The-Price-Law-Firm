// NOT BUILT. Removed from build.js before launch because the firm has no
// Google Business Profile and no genuine client reviews, so every quote on this
// page was a placeholder. Restore by re-adding the add('/testimonials', ...)
// line in build.js and the nav entries in src/lib/components.js — but only once
// real, attributable testimonials exist.

import { site, unconfirmed, testimonials } from '../data/site.js';
import { page } from '../lib/layout.js';
import { icon } from '../lib/icons.js';
import {
  hero, sectionHead, ctaBand, findUs, trustPills, quoteCard,
  breadcrumbSchema, esc, ph,
} from '../lib/components.js';

const trail = [{ name: 'Home', url: '/' }, { name: 'Testimonials', url: '/testimonials' }];

const reviewLink = unconfirmed.googleProfileUrl || site.facebook;

const content = `
${hero({
  title: 'What Our Clients Say',
  lead: 'Reviews from people The Price Law Firm has represented across the Florida Panhandle.',
  trail,
  ratingBadge: true,
  image: 'hero-home',
  imageAlt: 'Aerial view of a coastal highway on the Florida Gulf coast',
})}

<section class="section">
  <div class="container">
    <div class="container container--narrow" style="padding:0">
      <div class="notice notice--warn reveal">
        <p style="margin-bottom:.6rem"><strong>Placeholder reviews — not yet real client feedback.</strong></p>
        <p style="margin:0">${ph('The Google Business Profile status was recorded as "Not Sure" during intake. The cards below are structural placeholders written in a realistic voice. They must be replaced with genuine, verifiable reviews before launch — no dollar figures or case outcomes have been invented.')}</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--gray" style="padding-top:0">
  <div class="container">
    ${sectionHead({ eyebrow: 'Client Reviews', title: 'In Their Words', text: 'What people say about working with Bill Price.' })}
    <div class="grid grid-3">
      ${testimonials.map((t) => `<div class="reveal">${quoteCard(t)}</div>`).join('')}
    </div>
  </div>
</section>

<section class="section">
  <div class="container center">
    <div class="container container--narrow">
      <span class="eyebrow">Leave a Review</span>
      <h2>Were We Able to Help You?</h2>
      <p class="lead">If The Price Law Firm represented you, a short review helps other injured people in the Panhandle find help when they need it. It takes a couple of minutes.</p>
      <div class="btn-row center" style="margin-top:2rem">
        <a class="btn btn--primary" href="${reviewLink}" target="_blank" rel="noopener">
          ${icon('star')} Leave a Review${unconfirmed.googleProfileUrl ? ' on Google' : ' on Facebook'}
        </a>
        <a class="btn btn--outline" href="/contact">Contact the Firm</a>
      </div>
      ${unconfirmed.googleProfileUrl ? '' : `<p class="form-note" style="max-width:560px;margin:1.5rem auto 0">${ph('Google Business Profile link not yet available — this button currently points to the firm’s Facebook page as a fallback.')}</p>`}
    </div>
  </div>
</section>

<section class="section section--gray">
  <div class="container center">
    ${sectionHead({ eyebrow: 'Why Clients Call', title: 'What You Can Expect' })}
    ${trustPills({ center: true })}
    <div class="grid grid-3" style="margin-top:3rem;text-align:left">
      <div class="card reveal"><div class="card__body">
        <div class="icon-badge">${icon('user')}</div>
        <h3>You Work With the Attorney</h3>
        <p>The person who takes your first call is the person handling your case — not an intake screener passing you along.</p>
        <a class="arrow-link" href="/about">Meet Bill Price ${icon('arrowRight')}</a>
      </div></div>
      <div class="card reveal"><div class="card__body">
        <div class="icon-badge">${icon('shield')}</div>
        <h3>Five Focused Practice Areas</h3>
        <p>Trucking, auto, catastrophic injury, product liability and insurance disputes. That focus is deliberate.</p>
        <a class="arrow-link" href="/personal-injury">See practice areas ${icon('arrowRight')}</a>
      </div></div>
      <div class="card reveal"><div class="card__body">
        <div class="icon-badge">${icon('chat')}</div>
        <h3>A Free First Conversation</h3>
        <p>Find out whether you have a claim worth pursuing before you commit to anything at all.</p>
        <a class="arrow-link" href="/contact">Start a conversation ${icon('arrowRight')}</a>
      </div></div>
    </div>
  </div>
</section>

${ctaBand({
  title: 'Ready to Talk About Your Case?',
  text: `Call ${esc(site.phone)} or send a message. The consultation is free and there is no obligation.`,
  pills: true,
})}

${findUs({})}
`;

export default page({
  path: '/testimonials',
  title: 'Client Testimonials | The Price Law Firm Panama City, FL',
  description: `Read client reviews of The Price Law Firm in Panama City, FL. Personal attention from attorney Bill Price on every injury case. Call ${site.phone}.`,
  schema: [breadcrumbSchema(trail)],
  content,
});
