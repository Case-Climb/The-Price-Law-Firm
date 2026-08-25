import { site, unconfirmed, hours, practiceAreas } from '../data/site.js';
import { page } from '../lib/layout.js';
import { icon } from '../lib/icons.js';
import {
  hero, sectionHead, contactForm, trustPills, breadcrumbSchema, directionsUrl, esc, ph,
} from '../lib/components.js';

const trail = [{ name: 'Home', url: '/' }, { name: 'Contact', url: '/contact' }];

const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

const hoursVal = unconfirmed.officeHours
  ? hours.map((h) => `${esc(h.days)}: ${esc(h.time)}`).join('<br>')
  : `${ph('Office hours pending confirmation')}<br>Placeholder: Mon–Fri, 8:00 AM – 5:00 PM`;

const content = `
${hero({
  title: 'Contact The Price Law Firm',
  lead: `Tell us what happened. The consultation is free${unconfirmed.noFeeUnlessWin ? ', and there is no fee unless we win' : ''}, and there is no obligation to hire us.`,
  trail,
  buttons: false,
  image: 'loc-panama-city',
  imageAlt: 'Aerial view of a marina and waterfront on the Florida Gulf coast',
})}

<section class="section">
  <div class="container">
    <div class="split" style="align-items:start">
      <div class="reveal">
        <span class="eyebrow">Get in Touch</span>
        <h2>Talk to an Attorney</h2>
        <p class="lead">If you were injured because someone else was careless, the sooner you get advice the better. Evidence goes missing, deadlines run, and insurance adjusters start building their file immediately.</p>
        <p>Call ${esc(site.phone)} and you reach the firm directly. Or send a message using the form and we will get back to you.</p>

        <ul class="info-list" style="margin-top:2.25rem">
          <li><span class="ico">${icon('phone')}</span><div>
            <div class="lbl">Phone</div>
            <div class="val"><a href="${site.phoneHref}">${esc(site.phone)}</a></div>
          </div></li>
          <li><span class="ico">${icon('mail')}</span><div>
            <div class="lbl">Email</div>
            <div class="val"><a href="mailto:${site.email}">${esc(site.email)}</a></div>
          </div></li>
          <li><span class="ico">${icon('pin')}</span><div>
            <div class="lbl">Office</div>
            <div class="val"><a href="${directionsUrl()}" target="_blank" rel="noopener">${esc(site.address.street)}<br>${esc(site.address.city)}, ${esc(site.address.region)} ${esc(site.address.postal)}</a></div>
          </div></li>
          <li><span class="ico">${icon('clock')}</span><div>
            <div class="lbl">Hours</div>
            <div class="val">${hoursVal}</div>
          </div></li>
          <li><span class="ico">${icon('facebook')}</span><div>
            <div class="lbl">Facebook</div>
            <div class="val"><a href="${site.facebook}" target="_blank" rel="noopener">facebook.com/BillPricePA</a></div>
          </div></li>
        </ul>

        <div class="btn-row" style="margin-top:2rem">
          <a class="btn btn--primary" href="${site.phoneHref}">${icon('phone')} Call ${esc(site.phone)}</a>
          <a class="btn btn--outline" href="${directionsUrl()}" target="_blank" rel="noopener">${icon('pin')} Get Directions</a>
        </div>
      </div>

      <div>
        <h2 style="margin-bottom:1.25rem">Send Us a Message</h2>
        ${contactForm()}
      </div>
    </div>
  </div>
</section>

<section class="section section--gray">
  <div class="container">
    ${sectionHead({ eyebrow: 'Find Us', title: 'Our Panama City Office' })}
    <div class="map-embed reveal">
      <iframe src="${mapSrc}" title="Map showing ${esc(site.brand)} at ${esc(site.addressLine)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen></iframe>
    </div>
    <div class="btn-row center" style="margin-top:1.5rem">
      <a class="btn btn--primary" href="${directionsUrl()}" target="_blank" rel="noopener">${icon('pin')} Get Directions to Our Office</a>
    </div>
    <div class="center" style="margin-top:2.5rem">${trustPills({ center: true })}</div>
  </div>
</section>

<section class="section">
  <div class="container container--narrow center">
    <span class="eyebrow">Before You Call</span>
    <h2>What to Have Ready</h2>
    <p class="lead">None of this is required — call even if you have nothing. But if you have it handy, it helps us give you a better answer on the first conversation.</p>
    <div style="text-align:left;max-width:560px;margin:2.25rem auto 0">
      <ul class="checklist">
        <li>The date and location of the accident</li>
        <li>The police report or crash report number, if one was made</li>
        <li>Names and insurance information for anyone else involved</li>
        <li>Photographs of the scene, the vehicles, or your injuries</li>
        <li>Where you have received medical treatment so far</li>
        <li>Any letters, offers or forms an insurance company has sent you</li>
      </ul>
    </div>
    <div class="notice" style="text-align:left;margin-top:2.5rem">
      <strong>One caution:</strong> please do not send confidential or sensitive details in a first message through this website. Contacting the firm does not by itself create an attorney-client relationship, and information sent before we agree in writing to represent you may not be treated as confidential. See our <a href="/disclaimer">disclaimer</a> for more.
    </div>
  </div>
</section>

<section class="section cta-band">
  <div class="container center">
    <h2>Injured in the Florida Panhandle?</h2>
    <p>The call is free, and it costs nothing to find out whether you have a case.</p>
    <div class="btn-row center" style="margin-top:2rem">
      <a class="btn btn--white" href="${site.phoneHref}">${icon('phone')} Call ${esc(site.phone)}</a>
      <a class="btn btn--ghost-light" href="/personal-injury">See How We Can Help</a>
    </div>
  </div>
</section>
`;

export default page({
  path: '/contact',
  title: 'Contact Us | Free Consultation | The Price Law Firm',
  description: `Contact The Price Law Firm in Panama City, FL for a free consultation about your injury claim. Call ${site.phone} or send a message — we respond personally.`,
  schema: [breadcrumbSchema(trail)],
  content,
});
