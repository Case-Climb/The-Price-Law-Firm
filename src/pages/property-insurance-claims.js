import { site, otherPracticeAreas } from '../data/site.js';
import { page } from '../lib/layout.js';
import { icon } from '../lib/icons.js';
import {
  hero, sectionHead, processSteps, ctaBand, faqSection, faqSchema,
  testimonialsStrip, breadcrumbSchema, findUs, img, esc, ph,
} from '../lib/components.js';

const area = otherPracticeAreas[0];
const trail = [{ name: 'Home', url: '/' }, { name: 'Property & Hurricane Insurance', url: area.url }];

const faqs = [
  {
    q: 'My hurricane claim was denied. Is that the end of it?',
    a: `<p>No. A denial is one company's position, and denials are reversed regularly once an insurer is presented with a properly documented claim, a correct reading of the policy, and a policyholder who is represented.</p><p>The first step is obtaining the complete policy and the claim file to find out what the carrier actually relied on — the stated reason in a denial letter is often a conclusion without the reasoning behind it.</p>`,
  },
  {
    q: 'What is a wind-versus-flood dispute?',
    a: `<p>It is one of the most common ways a hurricane claim stalls. Wind damage is generally covered by a homeowner's policy, while flood and storm-surge damage typically falls under a separate flood policy. When a storm causes both, each carrier has a financial incentive to attribute the loss to the other.</p><p>The policyholder ends up in the middle, with two insurers pointing at each other. Resolving it usually takes engineering expert opinion on the mechanism of damage — which is a normal part of building these claims.</p>`,
  },
  {
    q: 'The insurer paid, but nowhere near enough to repair the damage. Can I do anything?',
    a: `<p>Yes. Underpayment is at least as common as outright denial, and it is frequently harder to spot — a payment arrives, so it looks like the claim worked, until the contractor's estimate comes in far higher.</p><p>Accepting a payment does not automatically close your claim. Have the adjustment reviewed against the policy limits, the scope of loss and independent repair estimates before you treat the number as final.</p>`,
  },
  {
    q: 'How quickly do I need to file?',
    a: `<p>Right away. Insurers expect prompt notice after a storm, and delay invites additional scrutiny from adjusters about whether the damage really came from the event you are claiming. Florida also imposes statutory deadlines for property claims, and those have been shortened in recent years.</p><p>Florida also sets statutory deadlines for reporting property claims and for bringing suit, and those have been shortened in recent years. Because the deadline that applies turns on your policy and the date of loss, call ${esc(site.phone)} and have it confirmed rather than assuming.</p>`,
  },
  {
    q: 'What is bad faith in a property claim?',
    a: `<p>Broadly, it is an insurer failing to handle a claim fairly and honestly — unreasonable delay, failing to investigate properly, misrepresenting what the policy covers, or refusing to pay a claim it knows is owed.</p><p>Florida provides a statutory framework for these claims, including a required notice and cure period before suit. Whether conduct rises to bad faith depends heavily on the specifics of how the claim was handled.</p>`,
  },
  {
    q: 'Do you handle business property claims as well as homeowners?',
    a: `<p>Yes — commercial property losses, including business interruption, follow the same basic pattern of denial, delay and underpayment, usually with larger sums and more complex policy language at stake.</p><p>Call ${esc(site.phone)} and we will review the policy and the claim file.</p>`,
  },
];

const content = `
${hero({
  title: 'Hurricane & Property Insurance Claim Attorney',
  lead: 'You bought the insurance and paid the premiums. When the storm comes, the carrier should pay what the policy owes.',
  trail,
  badge: { icon: 'home', label: 'Homeowners & businesses' },
  image: 'pa-property-insurance-claims',
  imageAlt: area.imageAlt,
})}

<section class="section">
  <div class="container">
    <div class="split split--media-right" style="align-items:start">
      <div class="reveal">
        <span class="eyebrow">Overview</span>
        <h2>When the Carrier Will Not Pay What It Owes</h2>
        <p class="lead">Insurance is a promise that gets tested exactly once — after the storm. And the economics are simple: an insurer takes in premiums and profits by paying out less than it collects.</p>
        <p>That does not make every adjuster dishonest, but it explains a pattern that repeats after every major Panhandle storm. Claims are denied on thin grounds. Payments arrive that cover a fraction of the actual repair cost. Files sit while the roof keeps leaking. And where wind and water both did damage, two carriers spend months arguing that the loss belongs to the other one.</p>
        <p>The Price Law Firm reviews the policy and the claim file, challenges denials and underpayments with documented evidence and engineering opinion where the damage mechanism is disputed, and litigates against carriers that will not deal reasonably. This is an area where the firm has recovered significant sums — including <a href="/personal-injury#results">$50 million in disputed property insurance coverage</a>.</p>
        <p>If your claim has been denied, delayed or underpaid, call ${esc(site.phone)}. The consultation is free.</p>
      </div>
      <div class="split__media reveal" style="min-height:380px">
        ${img('pa-property-insurance-claims', area.imageAlt)}
      </div>
    </div>
  </div>
</section>

<section class="section section--gray">
  <div class="container">
    ${sectionHead({ eyebrow: 'What We Handle', title: 'Property Claims We Take', text: 'Hurricane and property damage disputes for Panhandle homeowners and businesses.' })}
    <div class="container container--narrow" style="padding:0">
      <div class="card reveal"><div class="card__body" style="padding:clamp(26px,4vw,40px)">
        <ul class="checklist">
          <li><strong>Hurricane roof damage</strong> — including claims denied as "wear and tear" or pre-existing damage.</li>
          <li><strong>Water and structural damage</strong> — interior loss following roof or envelope failure.</li>
          <li><strong>Wind-versus-flood disputes</strong> — where a homeowner's carrier and a flood carrier each blame the other.</li>
          <li><strong>Denied claims</strong> — refusals based on exclusions, alleged late notice, or disputed causation.</li>
          <li><strong>Underpaid claims</strong> — adjustments far below the actual cost of repair.</li>
          <li><strong>Bad-faith claim handling</strong> — unreasonable delay, inadequate investigation, or misrepresented coverage.</li>
          <li><strong>Commercial property and business interruption</strong> — losses to businesses, not just homes.</li>
        </ul>
      </div></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrow: 'Our Process', title: 'How We Handle a Property Claim', text: 'Read the policy, document the loss, then hold the carrier to it.' })}
    ${processSteps([
      { title: 'Review the Policy & Claim File', text: 'We obtain the full policy and the carrier\'s claim file to establish what is actually covered, what limits apply, and what the insurer relied on in denying or reducing your claim.' },
      { title: 'Document the True Loss', text: 'We build the evidentiary record: full scope of damage, independent repair estimates, and where causation is disputed, engineering opinion distinguishing wind damage from flood or pre-existing conditions.' },
      { title: 'Negotiate or Litigate', text: 'We present a documented demand and negotiate from evidence. Where a carrier holds an unreasonable position, we pursue the claim in court — including a bad-faith claim where the handling supports one.' },
    ], { columns: 3 })}
  </div>
</section>

${ctaBand({
  title: 'Claim Denied, Delayed or Underpaid?',
  text: `Bring us the policy and the denial letter. The review is free — call ${esc(site.phone)}.`,
})}

${faqSection(faqs, { title: 'Property & Hurricane Insurance FAQs' })}

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrow: 'Related', title: 'Other Ways We Help' })}
    <div class="grid grid-3">
      <a class="card reveal" href="/personal-injury/insurance-claims" style="text-decoration:none"><div class="card__body">
        <div class="icon-badge">${icon('doc')}</div>
        <h3>Injury Insurance Claims</h3>
        <p>Disputes over injury claims — denials, lowball offers, PIP and uninsured motorist coverage.</p>
        <span class="arrow-link">Learn More ${icon('arrowRight')}</span>
      </div></a>
      <a class="card reveal" href="/personal-injury" style="text-decoration:none"><div class="card__body">
        <div class="icon-badge">${icon('shield')}</div>
        <h3>Personal Injury</h3>
        <p>Trucking, auto, catastrophic injury, product liability and PFAS contamination claims.</p>
        <span class="arrow-link">Learn More ${icon('arrowRight')}</span>
      </div></a>
      <a class="card reveal" href="/contact" style="text-decoration:none"><div class="card__body">
        <div class="icon-badge">${icon('chat')}</div>
        <h3>Talk to Bill Price</h3>
        <p>Free consultation on any claim. You speak directly with the attorney handling your file.</p>
        <span class="arrow-link">Contact Us ${icon('arrowRight')}</span>
      </div></a>
    </div>
  </div>
</section>

${findUs({})}
`;

export default page({
  path: area.url,
  title: 'Hurricane Insurance Claim Lawyer | The Price Law Firm',
  description: `Hurricane or property claim denied, delayed or underpaid in the Florida Panhandle? We challenge carriers on wind, water and roof damage. Call ${site.phone}.`,
  schema: [breadcrumbSchema(trail), faqSchema(faqs)],
  content,
});
