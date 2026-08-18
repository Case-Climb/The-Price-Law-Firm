import { site } from '../data/site.js';
import { page } from '../lib/layout.js';
import { breadcrumb, breadcrumbSchema, esc, ph } from '../lib/components.js';

const trail = [{ name: 'Home', url: '/' }, { name: 'Disclaimer', url: '/disclaimer' }];

const content = `
<section class="hero hero--compact">
  <div class="hero__bg"><div class="media-ph" role="presentation"></div></div>
  <div class="container">
    <div class="hero__inner">
      ${breadcrumb(trail)}
      <h1>Disclaimer</h1>
      <p class="lead" style="margin-bottom:0">Important information about this website and your relationship with ${esc(site.legalName)}.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="prose">
      <p class="updated">Last updated: <time datetime="2026-08-18">August 18, 2026</time></p>

      <h2>No legal advice</h2>
      <p>The information on this website is provided by ${esc(site.legalName)}, doing business as ${esc(site.brand)}, for general informational purposes only. It is not legal advice, and it is not a substitute for advice from a licensed attorney about your specific situation.</p>
      <p>Laws change, and the outcome of any legal matter depends on its particular facts and circumstances. You should not act, or refrain from acting, on the basis of anything you read here without seeking professional counsel about your own case.</p>

      <h2>No attorney-client relationship</h2>
      <p>Viewing this website, sending a message through a contact form, calling the firm, or emailing the firm does not create an attorney-client relationship between you and ${esc(site.legalName)} or ${esc(site.attorney)}.</p>
      <p>An attorney-client relationship is established only when the firm and the client have both signed a written representation agreement. Until that has happened, the firm has no obligation to take any action on your behalf, including protecting a filing deadline.</p>

      <h2>Do not send confidential information</h2>
      <p>Because contacting the firm does not by itself create an attorney-client relationship, information you send before a relationship is established may not be treated as confidential or privileged. Please do not send sensitive or confidential details through this website until you have been advised that the firm can represent you.</p>
      <p>Unsolicited information sent to the firm may also not be protected by conflict-of-interest rules, and could in some circumstances prevent the firm from representing you.</p>

      <h2>Prior results do not guarantee a similar outcome</h2>
      <p>Any description of past cases, results, or client experiences appearing on this website is not a promise or guarantee of a similar outcome in your matter. Every case is different, and results depend on the specific facts, the evidence available, the applicable law, and the parties involved.</p>

      <h2>No claim of superiority</h2>
      <p>Nothing on this website is intended as a representation that the quality of legal services provided by ${esc(site.legalName)} is greater than the quality of legal services performed by other lawyers. The hiring of a lawyer is an important decision that should not be based solely on advertisements.</p>

      <h2>Attorney advertising</h2>
      <p>This website may be considered attorney advertising under the rules of The Florida Bar. ${esc(site.attorney)} is responsible for the content of this website. The firm's principal office is located at ${esc(site.addressLine)}.</p>
      <p>${esc(site.attorney)} practices in ${esc(site.jurisdictions.join(' and '))} courts.</p>

      <h2>Statements of law</h2>
      <p>References on this site to Florida law — including statutes of limitations, comparative negligence, and personal injury protection requirements — describe general principles as we understand them at the time of writing. They are summaries, not complete statements of the law, and they may not reflect subsequent changes. Deadlines and rules applicable to your claim depend on your specific facts, and must be confirmed by an attorney.</p>

      <h2>Third-party links</h2>
      <p>This website may link to third-party websites for convenience. The firm does not control those sites, does not endorse their content, and is not responsible for their accuracy, availability, or privacy practices.</p>


      <h2>Contact</h2>
      <p>Questions about this disclaimer can be directed to:</p>
      <p>
        <strong>${esc(site.legalName)}</strong><br>
        ${esc(site.addressLine)}<br>
        Phone: <a href="${site.phoneHref}">${esc(site.phone)}</a><br>
        Email: <a href="mailto:${site.email}">${esc(site.email)}</a>
      </p>

      <p style="margin-top:2.5rem">See also our <a href="/privacy-policy">Privacy Policy</a> and <a href="/sitemap">Sitemap</a>.</p>
    </div>
  </div>
</section>
`;

export default page({
  path: '/disclaimer',
  title: 'Disclaimer | The Price Law Firm',
  description: 'Legal disclaimer for The Price Law Firm (Bill Price, PA), Panama City FL — no legal advice, no attorney-client relationship, prior results not a guarantee.',
  hasHero: true,
  schema: [breadcrumbSchema(trail)],
  content,
});
