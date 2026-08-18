import { site, unconfirmed, caseResults } from '../data/site.js';
import { page } from '../lib/layout.js';
import { icon } from '../lib/icons.js';
import {
  hero, sectionHead, practiceCards, locationCards, alsoServing, featureGrid,
  ctaBand, findUs, faqSection, faqSchema, testimonialsStrip, breadcrumbSchema,
  esc, ph,
} from '../lib/components.js';

const trail = [{ name: 'Home', url: '/' }, { name: 'Personal Injury', url: '/personal-injury' }];

const faqs = [
  {
    q: 'How much does it cost to hire a personal injury attorney?',
    a: `<p>The consultation is free. Injury work is handled on a contingency fee — the attorney is paid out of any recovery rather than billing you month by month, and there is no fee unless we win.</p><p>The fee agreement is explained in full before you sign it.</p>`,
  },
  {
    q: 'How long do I have to file a personal injury claim in Florida?',
    a: `<p>For most negligence claims arising on or after March 24, 2023, Florida sets a <strong>two-year</strong> statute of limitations; before that date, a four-year period generally applied. Wrongful death claims run two years, and claims involving a government entity require written notice far sooner.</p><p>Deadlines turn on the specific facts and dates of your case, so please do not rely on a general rule. Call ${esc(site.phone)} and we will confirm which deadline applies to you.</p>`,
  },
  {
    q: 'What should I do immediately after an accident?',
    a: `<p>Get medical attention, even if you think you are fine — adrenaline masks injuries, and a delay in treatment gives the insurer an argument that you were not really hurt. Report the crash so there is an official record. Photograph everything: vehicle positions, damage, skid marks, road conditions, and your visible injuries. Collect witness names and numbers.</p><p>Then be careful. Do not give a recorded statement to the other side's insurer, and do not sign a medical authorization or a release before an attorney has looked at it.</p>`,
  },
  {
    q: 'Will my case go to trial?',
    a: `<p>Most do not. The large majority of injury claims resolve through settlement. But the settlements that reflect real value come from cases the other side believes are trial-ready, so we prepare every file that way. You decide whether to accept an offer — we give you our recommendation, and the call is yours.</p>`,
  },
  {
    q: 'How long does an injury claim take?',
    a: `<p>It depends chiefly on your medical treatment. A claim should not be settled until your condition has stabilized enough to know what the long-term picture looks like — settling early can mean signing away the right to compensation for a problem that turns out to be permanent.</p><p>Straightforward claims can resolve in a few months. Serious injury cases, disputed liability, or cases that go into litigation take considerably longer. We will give you a realistic estimate once we have seen the file rather than a number designed to sound good.</p>`,
  },
  {
    q: 'What if the other driver is uninsured or underinsured?',
    a: `<p>You may still have a path to recovery. Florida drivers can carry uninsured/underinsured motorist (UM/UIM) coverage on their own policy, which is designed for exactly this situation, and there may be other applicable policies — a resident relative's coverage, an employer's policy if the at-fault driver was working, or a commercial policy.</p><p>Finding every available layer of coverage is part of the investigation. Read more on our <a href="/personal-injury/insurance-claims">insurance claims</a> page.</p>`,
  },
];

const content = `
${hero({
  title: 'Personal Injury Attorney in Panama City, FL',
  lead: 'From highway truck collisions to defective products and insurance companies that will not pay — we represent injured people across the Florida Panhandle.',
  trail,
  badge: { icon: 'shield', label: '5 case types handled' },
  image: 'hero-practice',
  imageAlt: 'Classical stone columns of a courthouse seen from below',
})}

<section class="section">
  <div class="container">
    <div class="split split--media-right" style="align-items:start">
      <div class="reveal">
        <span class="eyebrow">Overview</span>
        <h2>Injury Claims, Handled Personally</h2>
        <p class="lead">A personal injury claim is not just a form to fill out. It is a dispute with a company whose business model depends on paying you as little as possible.</p>
        <p>The Price Law Firm handles the entire claim: preserving the evidence, identifying every party who may be responsible, documenting the full extent of your medical treatment and lost income, and pressing the insurer for a number that reflects what actually happened to you. If they will not get there, we file suit.</p>
        <p>Below are the five kinds of cases we take. If you are not sure which describes yours — or whether you have a claim at all — call ${esc(site.phone)}. The consultation is free.</p>
      </div>
      <div class="reveal">
        <h3>What a claim can cover</h3>
        <ul class="checklist">
          <li>Emergency treatment, surgery, and ongoing medical care</li>
          <li>Future medical costs where an injury is permanent</li>
          <li>Wages lost while you were unable to work</li>
          <li>Reduced ability to earn a living going forward</li>
          <li>Pain, suffering, and loss of enjoyment of life</li>
          <li>Property damage from the collision</li>
        </ul>
        <p style="margin-top:1.25rem;font-size:.93rem;color:var(--slate-light)">What is recoverable in any specific case depends on the facts, the injuries, and the insurance coverage available.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--gray">
  <div class="container">
    ${sectionHead({ eyebrow: 'Case Types', title: 'Personal Injury Cases We Handle', text: 'Five focused practice areas. Click through for what each involves and how these claims are built.' })}
    ${practiceCards()}
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="container container--narrow" style="padding:0">
      <div class="card card--feature reveal"><div class="card__body">
        <div class="icon-badge">${icon('home')}</div>
        <h3>Also: Hurricane &amp; Property Insurance Claims</h3>
        <p>Beyond injury work, the firm represents Panhandle homeowners and businesses whose hurricane and property damage claims have been denied, delayed or underpaid — an area where Bill Price has recovered $50 million in disputed coverage.</p>
        <a class="arrow-link" href="/property-insurance-claims">Property &amp; Hurricane Insurance Claims ${icon('arrowRight')}</a>
      </div></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    ${sectionHead({ eyebrow: 'Where We Serve', title: 'Representing Clients Across the Panhandle' })}
    ${locationCards()}
    ${alsoServing()}
  </div>
</section>

<section class="section section--gray">
  <div class="container">
    ${sectionHead({ eyebrow: 'Why Choose Us', title: 'Why Injured Clients Call This Firm' })}
    ${featureGrid([
      { icon: 'user', title: 'Personal Attention', text: 'Bill Price handles your case himself — the consultation, the negotiation, and the courtroom.' },
      { icon: 'handshake', title: 'Free Consultation', text: 'Find out where you stand at no cost and with no obligation to hire us.' },
      { icon: 'pin', title: 'Local Knowledge', text: 'We practice in this part of Florida. We know these roads, these courts, and these insurers.' },
      { icon: 'phone', title: 'Direct Access', text: 'When you call with a question, you reach the attorney working your file.' },
    ])}
  </div>
</section>

<section class="section" id="results">
  <div class="container">
    ${sectionHead({ eyebrow: 'Results', title: 'Verdicts &amp; Settlements', text: 'Representative results Bill Price has obtained for injured clients.' })}
    <div class="results-grid">
      ${caseResults.map((r) => `
        <div class="result-card reveal">
          <div class="result-card__amount">${esc(r.amount)}</div>
          <div class="result-card__cat">${esc(r.category)}</div>
          <p>${esc(r.desc)}</p>
        </div>`).join('')}
    </div>
    <div class="container container--narrow" style="padding:0;margin-top:2.5rem">
      <div class="notice reveal">
        <strong>Prior results do not guarantee a similar outcome.</strong> Every case is different, and the
        result in any particular matter depends on its own facts, the evidence available, the applicable law
        and the insurance coverage in play. The results above are examples of past matters and are not a
        promise or prediction about your case. The hiring of a lawyer is an important decision that should
        not be based solely on advertisements.
      </div>
    </div>
  </div>
</section>

${ctaBand({})}

${faqSection(faqs, { title: 'Personal Injury FAQs' })}

${findUs({ gray: true })}
`;

export default page({
  path: '/personal-injury',
  title: 'Personal Injury Lawyer in Panama City, FL | The Price Law Firm',
  description: `Panama City personal injury lawyer handling trucking, auto, catastrophic injury and insurance claims across the Florida Panhandle. Call ${site.phone}.`,
  schema: [breadcrumbSchema(trail), faqSchema(faqs)],
  content,
});
