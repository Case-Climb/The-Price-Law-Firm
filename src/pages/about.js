import { site, unconfirmed } from '../data/site.js';
import { page, attorneySchema } from '../lib/layout.js';
import { icon } from '../lib/icons.js';
import {
  hero, sectionHead, featureGrid, ctaBand, findUs, faqSection, faqSchema,
  testimonialsStrip, mediaPlaceholder, photo, breadcrumbSchema, esc, ph,
} from '../lib/components.js';

const trail = [{ name: 'Home', url: '/' }, { name: 'About', url: '/about' }];

const faqs = [
  {
    q: 'Do I pay anything upfront?',
    a: `<p>No. The initial consultation is free of charge, and injury cases are handled on a contingency basis — you pay nothing unless the firm recovers compensation for you.</p><p>We will explain the fee agreement in full before you sign anything, so you know exactly how it works.</p>`,
  },
  {
    q: 'Will I actually work directly with Bill Price?',
    a: `<p>Yes. That is the point of hiring a smaller firm. ${esc(site.attorneyShort)} handles the consultation, the investigation, the negotiation with the insurance company, and the courtroom work. You will not be handed to a rotating cast of case managers.</p>`,
  },
  {
    q: 'What areas does the firm serve?',
    a: `<p>We are based in Panama City and represent clients across the Florida Panhandle, including <a href="/panama-city-beach">Panama City Beach</a>, Lynn Haven, Callaway, Mexico Beach, Port St. Joe, <a href="/marianna">Marianna</a>, Chipley, Bonifay, <a href="/destin">Destin</a>, Crestview, Defuniak Springs, Freeport, Gulf Breeze, <a href="/pensacola">Pensacola</a> and <a href="/tallahassee">Tallahassee</a>.</p>`,
  },
  {
    q: 'What kinds of cases do you take?',
    a: `<p>We focus on personal injury: <a href="/personal-injury/trucking-accidents">trucking accidents</a>, <a href="/personal-injury/auto-accidents">auto accidents</a>, <a href="/personal-injury/catastrophic-injuries">catastrophic injuries</a>, <a href="/personal-injury/product-liability">product liability</a>, and <a href="/personal-injury/insurance-claims">insurance claim disputes</a>. If your situation falls outside that, tell us anyway — we will point you toward someone who handles it.</p>`,
  },
  {
    q: 'How quickly will someone get back to me?',
    a: `<p>Call ${esc(site.phone)} and you will reach the firm directly rather than a national call center. Our office is open Monday to Friday, 9:00 AM to 5:00 PM, and messages sent through this site go straight to the firm.</p>`,
  },
];

const content = `
${hero({
  title: 'About Bill Price',
  lead: 'A Panama City personal injury practice where the attorney you hire is the attorney who handles your case — start to finish.',
  trail,
  image: 'hero-about',
  imageAlt: 'A bright modern law office corridor with glass partitions',
})}

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__media is-headshot reveal" style="min-height:480px">
        ${photo('bill-price', 'Attorney Bill Price standing beside The Price Law Firm sign at the Panama City office',
          'Professional headshot — Bill Price (drop bill-price.jpg into assets/img/)', { icon: 'user' })}
      </div>
      <div class="reveal">
        <span class="eyebrow">Attorney Profile</span>
        <h2>William "Bill" Price</h2>
        <p class="lead">Bill Price founded The Price Law Firm to represent people — not insurance companies, not corporations, and not trucking carriers. He brings ${esc(site.experiencePhrase)} to that work, in both ${esc(site.jurisdictions.join(' and '))} courts.</p>
        <p>Injury cases arrive at the worst possible moment. There are medical bills stacking up, income that has stopped, an adjuster calling for a recorded statement, and a stack of paperwork nobody explains. The job of this firm is to take that weight off you: to find out what actually happened, to establish what the injury has genuinely cost, and to press the responsible party to pay it.</p>
        <p>That work does not get delegated here. When you call The Price Law Firm, you are talking to the attorney who will be reviewing your medical records, negotiating with the adjuster, and filing suit if the insurer will not deal fairly.</p>
        <p>Over that time he has recovered significant compensation for injured clients — including multi-million dollar settlements against trucking companies and corporations, and substantial recoveries in disputed property insurance claims. <a href="/personal-injury#results">See representative results</a>.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--gray">
  <div class="container">
    ${sectionHead({ eyebrow: 'Why Clients Choose Us', title: 'What You Get Working With This Firm' })}
    ${featureGrid([
      { icon: 'user', title: 'Personal Attention', text: 'Your case is handled by Bill Price. It is not passed to a paralegal or a junior associate you never meet.' },
      { icon: 'phone', title: 'Direct Communication', text: 'You get straight answers about where your case stands, in plain language, from the person doing the work.' },
      { icon: 'handshake', title: 'Free Consultation', text: 'The first conversation costs nothing and carries no obligation. If you do not have a claim, we will say so.' },
      { icon: 'pin', title: 'Local Panhandle Knowledge', text: 'We know the roads, the courts, and the insurers in this part of Florida, because this is where we practice.' },
    ])}
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrow: 'Our Approach', title: 'How We Handle a Case' })}
    <div class="grid grid-3">
      <div class="card reveal"><div class="card__body">
        <div class="icon-badge">${icon('search')}</div>
        <h3>Thorough Investigation</h3>
        <p>Insurance companies build their position from the police report and a quick recorded statement. We go further — scene photographs, witness accounts, vehicle damage, medical records, and where the case calls for it, accident reconstruction and treating-physician input. Evidence disappears quickly, which is why the early weeks matter.</p>
      </div></div>
      <div class="card reveal"><div class="card__body">
        <div class="icon-badge">${icon('doc')}</div>
        <h3>Dealing With the Insurers</h3>
        <p>Once we are involved, the adjusters talk to us instead of to you. That protects you from the recorded statement designed to trap you into an admission, and from a fast settlement offer made before anyone knows how badly you are hurt. We present a documented demand and hold the line on it.</p>
      </div></div>
      <div class="card reveal"><div class="card__body">
        <div class="icon-badge">${icon('gavel')}</div>
        <h3>Ready for Court</h3>
        <p>Most cases settle, but the ones that settle fairly are the ones the other side believes will actually be tried. We prepare each file to be presented to a jury. If the insurer's number never becomes reasonable, filing suit is a real option, not a bluff.</p>
      </div></div>
    </div>
  </div>
</section>

${ctaBand({
  title: 'Have a Question About Your Injury Case?',
  text: `Call ${esc(site.phone)} and talk it through with Bill Price. The consultation is free and there is no obligation.`,
})}

${faqSection(faqs, { title: 'Questions About Working With Us' })}

${findUs({ gray: true })}
`;

export default page({
  path: '/about',
  title: 'Meet Bill Price | Panama City Personal Injury Attorney',
  description: `Meet Bill Price of The Price Law Firm in Panama City, FL — personal attention on every injury case, direct from the attorney. Free consult: ${site.phone}.`,
  schema: [attorneySchema(), breadcrumbSchema(trail), faqSchema(faqs)],
  content,
});
