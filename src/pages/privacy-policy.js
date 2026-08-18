import { site } from '../data/site.js';
import { page } from '../lib/layout.js';
import { breadcrumb, breadcrumbSchema, esc, ph } from '../lib/components.js';

const trail = [{ name: 'Home', url: '/' }, { name: 'Privacy Policy', url: '/privacy-policy' }];

const content = `
<section class="hero hero--compact">
  <div class="hero__bg"><div class="media-ph" role="presentation"></div></div>
  <div class="container">
    <div class="hero__inner">
      ${breadcrumb(trail)}
      <h1>Privacy Policy</h1>
      <p class="lead" style="margin-bottom:0">How ${esc(site.legalName)} handles information collected through this website.</p>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="prose">
      <p class="updated">Last updated: <time datetime="2026-08-18">August 18, 2026</time></p>

      <h2>Who we are</h2>
      <p>This website is operated by ${esc(site.legalName)}, doing business as ${esc(site.brand)}, located at ${esc(site.addressLine)}. You can reach us at <a href="${site.phoneHref}">${esc(site.phone)}</a> or <a href="mailto:${site.email}">${esc(site.email)}</a>.</p>

      <h2>Information we collect</h2>
      <h3>Information you give us</h3>
      <p>When you submit a contact form or the message widget on this site, we collect the information you choose to provide — typically your name, phone number, email address, and a description of your situation. We use it solely to respond to your inquiry and to evaluate whether we may be able to assist you.</p>
      <p>Please note: submitting a form does not create an attorney-client relationship, and information you send before such a relationship exists may not be confidential. See our <a href="/disclaimer">Disclaimer</a>.</p>

      <h3>Information collected automatically</h3>
      <p>Like most websites, this site collects limited technical information automatically through analytics, including your IP address, browser type and version, device type, the pages you visit, the time and duration of your visit, and the referring website. This is used in aggregate to understand how the site is used and to improve it.</p>
      <p>This site uses Google Analytics 4. Google may set cookies or similar identifiers in your browser. Information about Google's practices is available in Google's own privacy documentation, and you can opt out of Google Analytics using Google's browser add-on.</p>

      <h2>Cookies</h2>
      <p>Cookies are small text files stored by your browser. This site uses them for analytics as described above. Most browsers allow you to refuse cookies or delete existing ones through their settings. Blocking cookies will not prevent you from using this site.</p>

      <h2>How we use your information</h2>
      <ul>
        <li>To respond to inquiries and consultation requests</li>
        <li>To evaluate potential representation and check for conflicts of interest</li>
        <li>To provide legal services to clients who retain the firm</li>
        <li>To understand site usage and improve the website</li>
        <li>To comply with legal, regulatory and professional obligations</li>
      </ul>

      <h2>We do not sell your information</h2>
      <p>${esc(site.legalName)} does not sell, rent, or trade personal information collected through this website to third parties for their marketing purposes.</p>
      <p>We may share information with service providers who help operate the site and the firm — such as website hosting, email, analytics, and case management providers — who are permitted to use it only to provide those services. We may also disclose information where required by law, court order, or the rules governing the practice of law, or where necessary to protect the firm's legal rights.</p>

      <h2>Confidentiality of client information</h2>
      <p>Information belonging to clients of the firm is separately protected by the attorney-client privilege and by the confidentiality obligations imposed on attorneys under the Rules Regulating The Florida Bar. Those obligations are broader than this policy, and nothing here limits them.</p>

      <h2>Data retention</h2>
      <p>We retain inquiry information for as long as necessary to respond and to meet the firm's professional and legal record-keeping obligations.</p>

      <h2>Security</h2>
      <p>We take reasonable measures to protect information submitted through this site. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security. Please do not transmit sensitive or confidential information through this website.</p>

      <h2>Children's privacy</h2>
      <p>This website is not directed to children under 13, and we do not knowingly collect personal information from them. If you believe a child has provided information through this site, please contact us so it can be removed.</p>

      <h2>Your choices</h2>
      <p>You may contact us at any time to ask what information we hold about you, to request correction or deletion, or to ask that we stop contacting you. Requests can be sent to <a href="mailto:${site.email}">${esc(site.email)}</a> or made by phone at <a href="${site.phoneHref}">${esc(site.phone)}</a>. Some information may need to be retained where the firm has a legal or professional obligation to keep it.</p>

      <h2>Third-party links</h2>
      <p>This site links to third-party services, including Google Maps and the firm's Facebook page. Those services have their own privacy policies, and this policy does not apply to them.</p>

      <h2>Changes to this policy</h2>
      <p>We may update this policy from time to time. Any changes will be posted on this page with a revised "last updated" date.</p>

      <h2>Contact us</h2>
      <p>
        <strong>${esc(site.legalName)}</strong><br>
        ${esc(site.addressLine)}<br>
        Phone: <a href="${site.phoneHref}">${esc(site.phone)}</a><br>
        Email: <a href="mailto:${site.email}">${esc(site.email)}</a>
      </p>

      <p style="margin-top:2.5rem">See also our <a href="/disclaimer">Disclaimer</a> and <a href="/sitemap">Sitemap</a>.</p>
    </div>
  </div>
</section>
`;

export default page({
  path: '/privacy-policy',
  title: 'Privacy Policy | The Price Law Firm',
  description: 'Privacy policy for The Price Law Firm (Bill Price, PA) in Panama City, FL — what information this website collects, how it is used, and how it is protected.',
  schema: [breadcrumbSchema(trail)],
  content,
});
