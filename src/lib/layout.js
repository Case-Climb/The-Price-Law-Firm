import { site, unconfirmed } from '../data/site.js';
import { header, footer, floatingWidgets, esc } from './components.js';

const A = site.address;

/* ------------------------------------------------------- reusable schema */
export const orgSchema = {
  '@type': ['LegalService', 'Attorney'],
  '@id': `${site.domain}/#organization`,
  name: site.brand,
  legalName: site.legalName,
  url: site.domain + '/',
  telephone: site.phone,
  email: site.email,
  priceRange: 'Free consultation',
  description:
    'Personal injury law firm in Panama City, Florida representing people injured in trucking accidents, auto accidents, catastrophic injury incidents, defective product incidents, and insurance disputes across the Florida Panhandle.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: A.street,
    addressLocality: A.city,
    addressRegion: A.region,
    postalCode: A.postal,
    addressCountry: A.country,
  },
  geo: { '@type': 'GeoCoordinates', latitude: A.lat, longitude: A.lng },
  areaServed: [
    'Panama City FL', 'Panama City Beach FL', 'Lynn Haven FL', 'Callaway FL',
    'Mexico Beach FL', 'Chipley FL', 'Marianna FL', 'Port St. Joe FL',
    'Pensacola FL', 'Tallahassee FL', 'Destin FL', 'Crestview FL',
    'Defuniak Springs FL', 'Bonifay FL', 'Freeport FL', 'Gulf Breeze FL',
  ].map((n) => ({ '@type': 'City', name: n })),
  sameAs: [site.facebook],
  founder: { '@type': 'Person', name: site.attorney },
  knowsAbout: [
    'Personal injury law', 'Trucking accident claims', 'Auto accident claims',
    'Catastrophic injury claims', 'Product liability', 'Insurance claim disputes',
  ],
  // Bill Price practices in both Florida and Alabama courts.
  areaServedNote: 'Florida and Alabama',
};

/** LocalBusiness node for a location page. NAP always matches the footer. */
export function localBusinessSchema({ name, url, description, areaServed }) {
  return {
    '@type': 'LegalService',
    '@id': `${site.domain}${url}#localbusiness`,
    name: `${site.brand} — ${name}`,
    parentOrganization: { '@id': `${site.domain}/#organization` },
    url: site.domain + url,
    telephone: site.phone,
    email: site.email,
    description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: A.street,
      addressLocality: A.city,
      addressRegion: A.region,
      postalCode: A.postal,
      addressCountry: A.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: A.lat, longitude: A.lng },
    areaServed: (areaServed || [name]).map((n) => ({ '@type': 'City', name: n })),
    priceRange: 'Free consultation',
  };
}

export function attorneySchema() {
  const node = {
    '@type': 'Attorney',
    '@id': `${site.domain}/about#attorney`,
    name: site.attorney,
    givenName: 'William',
    familyName: 'Price',
    jobTitle: 'Personal Injury Attorney',
    worksFor: { '@id': `${site.domain}/#organization` },
    url: `${site.domain}/about`,
    telephone: site.phone,
    email: site.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: A.street,
      addressLocality: A.city,
      addressRegion: A.region,
      postalCode: A.postal,
      addressCountry: A.country,
    },
  };
  // alumniOf / hasCredential are deliberately omitted until the client
  // confirms law school and bar admission. Never guess credentials.
  if (unconfirmed.attorneyBio) {
    // populate here once confirmed
  }
  return node;
}

/* ----------------------------------------------------------------- shell */
export function page({
  path,
  title,
  description,
  bodyClass = '',
  hasHero = true,
  schema = [],
  content,
  ogType = 'website',
}) {
  const canonical = site.domain + (path === '/' ? '/' : path);
  const graph = [orgSchema, ...schema].filter(Boolean);
  const jsonld = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }, null, 2);

  const classes = [bodyClass, hasHero ? 'has-hero' : ''].filter(Boolean).join(' ');

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${canonical}">
<meta name="robots" content="index, follow, max-image-preview:large">

<!-- Open Graph -->
<meta property="og:type" content="${ogType}">
<meta property="og:site_name" content="${esc(site.brand)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:locale" content="en_US">
<meta property="og:image" content="${site.domain}/assets/img/og-default.jpg">
<meta property="og:image:alt" content="${esc(site.brand)} — personal injury attorney in Panama City, Florida">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${site.domain}/assets/img/og-default.jpg">

<!-- Local business signals -->
<meta name="geo.region" content="US-FL">
<meta name="geo.placename" content="Panama City">
<meta name="geo.position" content="${A.lat};${A.lng}">
<meta name="ICBM" content="${A.lat}, ${A.lng}">

<link rel="icon" href="/assets/img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/assets/img/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap">
<link rel="stylesheet" href="/assets/css/site.css">
<noscript><style>.reveal{opacity:1!important;transform:none!important}</style></noscript>

<script type="application/ld+json">
${jsonld}
</script>

<!-- Google Analytics 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${site.ga4Id}');
</script>
</head>
<body${classes ? ` class="${classes}"` : ''}>
<a class="skip-link" href="#main">Skip to main content</a>
${header(path)}
<main id="main">
${content}
</main>
${footer()}
${floatingWidgets()}
<script src="/assets/js/site.js" defer></script>
<!-- LeadConnector chat widget -->
<script src="https://widgets.leadconnectorhq.com/loader.js" data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js" data-widget-id="6a847bd5af859fb1da5d7dc5"></script>
</body>
</html>`;
}
