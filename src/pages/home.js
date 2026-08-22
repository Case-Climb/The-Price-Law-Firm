import { site, unconfirmed, practiceAreas } from '../data/site.js';
import { page } from '../lib/layout.js';
import { icon } from '../lib/icons.js';
import {
  hero, sectionHead, practiceCards, locationCards, alsoServing, processSteps,
  testimonialsSection, ctaBand, findUs, faqSection, faqSchema, mediaPlaceholder,
  trustPills, photo, esc, ph,
} from '../lib/components.js';

const faqs = [
  {
    q: 'How much does it cost to hire a personal injury attorney?',
    a: `<p>Your first consultation with The Price Law Firm is free, and there is no obligation to hire us afterward. Injury cases are handled on a contingency fee — the attorney's fee comes out of any recovery rather than out of your pocket, and you pay no fee unless we win.</p><p>We go through the fee agreement with you in full before you sign it.</p>`,
  },
  {
    q: 'How long do I have to file an injury claim in Florida?',
    a: `<p>Florida law sets a deadline called the statute of limitations. For most negligence claims arising on or after March 24, 2023, that deadline is <strong>two years</strong> from the date of the injury; claims that arose before that date were generally governed by a four-year deadline. Wrongful death claims have their own two-year deadline, and claims against government entities carry shorter notice requirements.</p><p>Because the correct deadline depends on your specific facts and when the incident happened, do not rely on a general rule. Call ${esc(site.phone)} and let us confirm the deadline that applies to you — once it passes, the claim is usually barred no matter how strong it was.</p>`,
  },
  {
    q: 'What should I do after an accident?',
    a: `<p>Get medical attention first, even if you feel able to walk away — some serious injuries do not produce symptoms for hours or days, and a gap in treatment is one of the first things an insurance company will use against you. Then, if you are able: call law enforcement so there is an official report, photograph the vehicles, the scene, and your injuries, and get the names and numbers of any witnesses.</p><p>Be careful about giving a recorded statement or signing anything from the other side's insurer before you have spoken with an attorney.</p>`,
  },
  {
    q: 'Will my case have to go to trial?',
    a: `<p>Most personal injury claims settle without a trial. That said, cases tend to settle for fair value when the other side believes the attorney is genuinely prepared to try them. We build each case as though it may be presented to a jury, and we discuss any settlement offer with you before responding — the decision to accept or reject an offer is always yours.</p>`,
  },
  {
    q: 'Do I have a case?',
    a: `<p>Generally, an injury claim requires that someone else owed you a duty of care, failed to meet it, and caused you harm as a result. Whether that is true in your situation depends on the specific facts, the available evidence, and the insurance coverage involved.</p><p>The fastest way to find out is to ask. Call ${esc(site.phone)} or <a href="/contact">send us a message</a> — the consultation is free, and if we do not think you have a claim worth pursuing, we will tell you.</p>`,
  },
];

const steps = [
  { title: 'Free Consultation', text: 'Call us or send a message. We listen to what happened, answer your questions, and tell you honestly whether you have a claim worth pursuing. No cost, no obligation.' },
  { title: 'Case Investigation', text: 'We gather the police report, medical records, photographs and witness accounts, identify every insurance policy that may apply, and take over communication with the adjusters.' },
  { title: 'Negotiation & Filing', text: 'We document the full extent of your losses and negotiate for a fair number. If the insurer will not deal reasonably, we file suit and continue building the case for trial.' },
  { title: 'Resolution', text: 'Your case ends in a settlement or a verdict — and the decision to accept any offer is yours. You are kept informed at every stage, by the attorney handling your file.' },
];

const content = `
${hero({
  title: 'Panama City Personal Injury Attorney',
  lead: `When someone else's negligence turns your life upside down, you should not have to fight the insurance company alone. The Price Law Firm represents injured people and their families across the Florida Panhandle.`,
  ratingBadge: true,
  image: 'hero-home',
  imageAlt: 'Aerial view of a coastal highway crossing turquoise water on the Florida Gulf coast',
})}

<!-- ------------------------------------------------------- what we handle -->
<section class="section section--gray">
  <div class="container">
    ${sectionHead({
      eyebrow: 'What We Handle',
      title: 'Personal Injury Representation',
      text: 'One focus, handled personally. Every case below is worked by Bill Price — not passed down to a case manager you never meet.',
    })}
    <article class="card card--feature reveal">
      <div class="card__body">
        <div class="split" style="align-items:flex-start">
          <div>
            <div class="icon-badge">${icon('shield')}</div>
            <h3 style="font-size:1.6rem">Personal Injury</h3>
            <p class="lead">If you were hurt because someone else was careless — a distracted driver, a trucking company cutting corners on safety, a manufacturer that sold a dangerous product, or an insurer refusing to pay what it owes — you may be entitled to compensation for your medical care, your lost income, and what the injury has cost you personally.</p>
            <p>We handle these cases from the first phone call through settlement or trial, and we deal with the insurance companies so you can concentrate on recovering.</p>
            <div class="btn-row" style="margin-top:1.75rem">
              <a class="btn btn--primary" href="/personal-injury">Explore Personal Injury Representation</a>
            </div>
          </div>
          <div>
            <h4 style="margin-bottom:1rem">Case types we take</h4>
            <ul class="checklist">
              ${practiceAreas.map((p) => `<li><a href="${p.url}"><strong>${esc(p.name)}</strong></a> — ${esc(p.card)}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </article>
  </div>
</section>

<!-- ----------------------------------------------------------- about teaser -->
<section class="section">
  <div class="container">
    <div class="split split--media-right">
      <div class="split__media is-headshot reveal" style="min-height:420px">
        ${photo('bill-price', 'Attorney Bill Price, personal injury lawyer at The Price Law Firm in Panama City, Florida',
          'Headshot of Bill Price (drop bill-price.jpg into assets/img/)', { icon: 'user' })}
        <div class="stat-badge">
          <div class="n">${unconfirmed.yearsInPractice ? esc(unconfirmed.yearsInPractice) + '+' : '<span class="ph" data-confirm>##</span>'}</div>
          <div class="t">${unconfirmed.yearsInPractice ? 'Years representing injured Floridians' : '<span class="ph" data-confirm>Years in practice — confirm before launch</span>'}</div>
        </div>
      </div>
      <div class="reveal">
        <span class="eyebrow">Our Story</span>
        <h2>You Work Directly With Bill Price</h2>
        <p class="lead">The Price Law Firm is a Panama City practice built around a simple idea: the attorney you hire should be the attorney who handles your case.</p>
        <p>Larger firms advertise heavily, sign a high volume of cases, and then hand most of them to staff. Here, ${esc(site.attorneyShort)} takes your call, reviews your records, negotiates with the adjuster, and stands up in court if it comes to that. You will always know who is working on your file, because it is the same person every time.</p>
        <p>Bill Price brings ${esc(site.experiencePhrase)} to injury cases in ${esc(site.jurisdictions.join(' and '))} courts, and has recovered substantial results for people hurt by negligent drivers, trucking companies, corporations and insurers.</p>
        <div class="btn-row" style="margin-top:1.75rem">
          <a class="btn btn--outline" href="/about">Meet Bill Price</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ------------------------------------------------------------ how we work -->
<section class="section section--navy">
  <div class="container">
    ${sectionHead({ eyebrow: 'How We Work', title: 'What Working With Us Looks Like', text: 'Four steps, and you always know which one you are in.' })}
    ${processSteps(steps)}
  </div>
</section>

<!-- ---------------------------------------------------------- where we serve -->
<section class="section section--gray">
  <div class="container">
    ${sectionHead({
      eyebrow: 'Where We Serve',
      title: 'Serving the Florida Panhandle',
      text: 'Based in Panama City, representing injured people from Pensacola to Tallahassee and everywhere between.',
    })}
    ${locationCards()}
    ${alsoServing()}
  </div>
</section>

${ctaBand({})}

${faqSection(faqs, { title: 'Common Questions About Injury Claims', text: 'A few things people ask us most often. If your question is not here, just call.' })}

${findUs({})}

<section class="section cta-band">
  <div class="container center">
    <h2>Talk to a Panama City Injury Attorney Today</h2>
    <p>Your consultation is free, and it costs you nothing to find out where you stand.</p>
    <div class="btn-row center" style="margin-top:2rem">
      <a class="btn btn--white" href="/contact">Free Consultation</a>
      <a class="btn btn--ghost-light" href="${site.phoneHref}">${icon('phone')} Call ${esc(site.phone)}</a>
    </div>
    ${trustPills({ dark: true, center: true })}
  </div>
</section>
`;

export default page({
  path: '/',
  title: 'Personal Injury Attorney in Panama City, FL | The Price Law Firm',
  description: `Injured in Panama City, FL? The Price Law Firm handles trucking, auto, catastrophic injury and insurance claims. Free consultation — call ${site.phone}.`,
  schema: [faqSchema(faqs)],
  content,
});
