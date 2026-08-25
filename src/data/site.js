// Single source of truth for The Price Law Firm site.
// Anything the client has not yet verified lives under `unconfirmed` and is
// switched OFF by default, so no unverified claim can ship by accident.

export const site = {
  legalName: 'Bill Price, PA',
  brand: 'The Price Law Firm',
  attorney: 'William "Bill" Price',
  attorneyShort: 'Bill Price',
  domain: 'https://www.thepricelawfirm.com',
  phone: '850-215-2195',
  phoneHref: 'tel:+18502152195',
  email: 'bill@thepricelawfirm.com',
  facebook: 'https://www.facebook.com/BillPricePA/',
  address: {
    street: '2633 W. 23rd St.',
    city: 'Panama City',
    region: 'FL',
    regionName: 'Florida',
    postal: '32405',
    country: 'US',
    // Verified against OpenStreetMap/Nominatim: these reverse-geocode to
    // "2633 West 23rd Street, Panama City, Bay County, Florida, 32405".
    // The previous values were ~1 mile east and resolved only to the street.
    lat: 30.1892757,
    lng: -85.6990291,
  },
  get addressLine() {
    return `${this.address.street}, ${this.address.city}, ${this.address.region} ${this.address.postal}`;
  },
  // Derived from addressLine so the map pin, the directions link and the
  // displayed NAP can never drift apart. Verified to geocode to the building.
  get mapQuery() {
    return this.addressLine;
  },
  ga4Id: 'G-XXXXXXXXXX', // placeholder — swap for the real GA4 measurement ID
  // billpricepa.com: Bill Price practices in "Alabama and Florida courts".
  jurisdictions: ['Florida', 'Alabama'],
  experiencePhrase: 'over a decade of trial experience',
  legacySite: 'https://billpricepa.com',
};

// ---------------------------------------------------------------------------
// Unconfirmed claims. Flip a flag to true ONLY after Bill Price confirms it.
// Every `false` value below causes the related copy to be omitted rather than
// guessed. Each flag notes what it is waiting on.
// ---------------------------------------------------------------------------
// Draft mode. When true, unverified copy is highlighted amber on the page so
// it cannot ship unnoticed. Set to false for production — ph() then renders
// nothing. Track outstanding items in the project's pre-launch checklist.
export const DRAFT = false;

export const unconfirmed = {
  // Contingency claim. billpricepa.com states clients "pay nothing unless the
  // firm wins compensation" and that consultations are "free of charge".
  noFeeUnlessWin: true,
  // Google Business Profile. Confirmed 2026-08-18: the firm does NOT have one
  // yet. Nothing on the site may imply Google reviews exist. If a profile is
  // created later, set these and the star-rating badge turns on everywhere.
  googleReviews: false,
  googleReviewCount: null,
  googleRating: null,
  googleProfileUrl: null,
  // billpricepa.com: "over a decade of trial experience".
  yearsInPractice: 10,
  // Law school, bar admission year and honours are still NOT published
  // anywhere on billpricepa.com, so they remain unconfirmed.
  attorneyBio: false,
  // Verdicts and settlements published by the firm on billpricepa.com.
  caseResults: true,
  // Office hours — confirmed from billpricepa.com/contact.
  officeHours: true,
  // Real, attributable client testimonials collected with written permission.
  // Until true, every quote renders marked as a sample.
  realTestimonials: false,
  // Spanish-language services.
  espanol: false,
};

// Placeholder office hours, clearly labeled as unconfirmed in the UI.
// Confirmed from billpricepa.com/contact (the firm's existing website).
export const hours = [
  { days: 'Monday – Friday', time: '9:00 AM – 5:00 PM' },
  { days: 'Saturday – Sunday', time: 'Closed' },
];

export const practiceAreas = [
  {
    slug: 'trucking-accidents',
    imageAlt: 'A tractor-trailer traveling on a highway at dusk',
    url: '/personal-injury/trucking-accidents',
    name: 'Trucking Accidents',
    navName: 'Trucking Accidents',
    card: 'Commercial trucks are governed by federal safety rules, and more than one company may share the blame for a crash.',
    bullets: [
      'FMCSA-regulated carriers and driver hours-of-service rules',
      'Catastrophic injury severity in truck-versus-car collisions',
      'Multi-party liability: driver, carrier, loader, manufacturer',
    ],
    icon: 'truck',
  },
  {
    slug: 'auto-accidents',
    imageAlt: 'A car with front-end damage beside an overturned vehicle after a collision',
    url: '/personal-injury/auto-accidents',
    name: 'Auto Accidents',
    navName: 'Auto Accidents',
    card: 'Most injury claims start with an insurance adjuster whose job is to pay you as little as possible.',
    bullets: [
      'Dealing directly with insurance adjusters on your behalf',
      "Florida's comparative negligence rule and shared fault",
      'Whiplash, fractures, back injuries and long-term pain',
    ],
    icon: 'car',
  },
  {
    slug: 'catastrophic-injuries',
    imageAlt: 'A therapist supporting the leg of a patient during rehabilitation',
    url: '/personal-injury/catastrophic-injuries',
    name: 'Catastrophic Injuries',
    navName: 'Catastrophic Injuries',
    card: 'When an injury changes the rest of your life, the claim has to account for the rest of your life.',
    bullets: [
      'Life-altering brain, spinal cord and burn injuries',
      'Future medical care and lost earning capacity',
      'Building the full long-term value of the claim',
    ],
    icon: 'shield',
  },
  {
    slug: 'product-liability',
    imageAlt: 'The interior of an industrial manufacturing plant',
    url: '/personal-injury/product-liability',
    name: 'Product Liability',
    navName: 'Product Liability',
    card: 'A product that hurts you when used normally can make its manufacturer, distributor or retailer liable.',
    bullets: [
      'Design defects, manufacturing defects and failure to warn',
      'Manufacturer, distributor and retailer responsibility',
      'Recalled and dangerous consumer products',
    ],
    icon: 'gear',
  },
  {
    slug: 'insurance-claims',
    imageAlt: 'A person signing an insurance document with a pen',
    url: '/personal-injury/insurance-claims',
    name: 'Insurance Claims',
    navName: 'Insurance Claims',
    card: 'A denial or a lowball offer is an opening position, not the final word on what your claim is worth.',
    bullets: [
      'Denied claims and bad-faith insurance practices',
      'Lowball settlement offers and delayed payouts',
      'Negotiating a fair number, or filing suit',
    ],
    icon: 'doc',
  },
  {
    slug: 'pfas-contamination',
    imageAlt: 'A hand turning on a kitchen tap with water running into the sink',
    url: '/personal-injury/pfas-contamination',
    name: 'PFAS Contamination',
    navName: 'PFAS Contamination',
    card: 'Cancer and serious illness linked to "forever chemicals" in drinking water, firefighting foam and everyday products.',
    bullets: [
      'Kidney, testicular, liver, bladder and thyroid cancers',
      'Contaminated tap water, AFFF firefighting foam, consumer goods',
      'You do not need to have worked on a military base to qualify',
    ],
    icon: 'droplet',
  },
];

// Practice areas that are NOT personal injury and therefore live outside the
// /personal-injury hub. Sourced from billpricepa.com/insurance-claim-help.
export const otherPracticeAreas = [
  {
    slug: 'property-insurance-claims',
    imageAlt: 'A house severely damaged by a hurricane, with debris in the yard',
    url: '/property-insurance-claims',
    name: 'Property & Hurricane Insurance',
    navName: 'Property & Hurricane Claims',
    card: 'Denied, delayed and underpaid hurricane and property damage claims for Panhandle homeowners and businesses.',
    bullets: [
      'Hurricane roof, water and structural damage claims',
      'Wind-versus-flood coverage disputes between carriers',
      'Denials, underpayments and bad-faith claim handling',
    ],
    icon: 'home',
  },
];

export const locations = [
  {
    slug: 'panama-city',
    imageAlt: 'Aerial view of a marina and waterfront on the Florida Gulf coast',
    url: '/panama-city',
    name: 'Panama City',
    county: 'Bay County',
    primary: true,
    blurb: 'Our office is here on W. 23rd St., serving Bay County and the surrounding Panhandle.',
  },
  {
    slug: 'panama-city-beach',
    imageAlt: 'High-rise condominiums along the beach at Panama City Beach, Florida',
    url: '/panama-city-beach',
    name: 'Panama City Beach',
    county: 'Bay County',
    blurb: 'Tourist traffic and seasonal congestion make Front Beach Road and Highway 98 high-risk corridors.',
  },
  {
    slug: 'pensacola',
    imageAlt: 'Aerial view of the Pensacola waterfront and Community Maritime Park',
    url: '/pensacola',
    name: 'Pensacola',
    county: 'Escambia County',
    blurb: 'Serving Escambia County injury clients from our Panama City office.',
  },
  {
    slug: 'tallahassee',
    imageAlt: 'The historic Florida Capitol building in Tallahassee',
    url: '/tallahassee',
    name: 'Tallahassee',
    county: 'Leon County',
    blurb: 'Representing Leon County clients hurt in crashes on I-10, Capital Circle and Apalachee Parkway.',
  },
  {
    slug: 'destin',
    imageAlt: 'Boats anchored in the turquoise water off Destin, Florida',
    url: '/destin',
    name: 'Destin',
    county: 'Okaloosa County',
    blurb: 'Highway 98 tourist traffic, rental vehicles and harbor activity drive Okaloosa County injury claims.',
  },
  {
    slug: 'marianna',
    imageAlt: 'An open interstate highway with an exit sign',
    url: '/marianna',
    name: 'Marianna',
    county: 'Jackson County',
    blurb: 'Jackson County sits on the I-10 freight corridor, where truck crashes are a constant risk.',
  },
];

// Cities served that do not have a dedicated page (rendered as a plain list).
export const additionalCities = [
  'Lynn Haven',
  'Callaway',
  'Mexico Beach',
  'Chipley',
  'Port St. Joe',
  'Crestview',
  'Defuniak Springs',
  'Bonifay',
  'Freeport',
  'Gulf Breeze',
];

export const allCities = [
  'Panama City', 'Panama City Beach', 'Lynn Haven', 'Callaway', 'Mexico Beach',
  'Chipley', 'Marianna', 'Port St. Joe', 'Pensacola', 'Tallahassee', 'Destin',
  'Crestview', 'Defuniak Springs', 'Bonifay', 'Freeport', 'Gulf Breeze',
];

// Trust pills. Any entry with `requires` is dropped until that flag is true.
export const trustBadges = [
  { label: 'Free Consultation', icon: 'chat' },
  { label: 'No Fee Unless We Win', icon: 'check', requires: 'noFeeUnlessWin' },
  { label: 'Serving the Florida Panhandle', icon: 'pin' },
  { label: 'Personal Attention from Bill Price', icon: 'user' },
];

export function activeBadges() {
  return trustBadges.filter((b) => !b.requires || unconfirmed[b.requires] === true);
}

// Placeholder testimonials. Deliberately generic: no dollar figures, no case
// outcomes, no invented client names beyond first name + initial. These are
// replaced wholesale once a Google Business Profile is connected.
export const testimonials = [
  {
    quote: 'Bill answered the phone himself every single time I called. I never once felt like I was being handed off or forgotten about.',
    name: 'Sarah M.',
    source: 'Client review',
  },
  {
    quote: 'He explained the whole process in plain English and told me what to expect before it happened. That took a lot of stress off my family.',
    name: 'James T.',
    source: 'Client review',
  },
  {
    quote: 'After my accident the insurance company kept giving me the runaround. Having someone deal with them for me made all the difference.',
    name: 'Denise R.',
    source: 'Client review',
  },
  {
    quote: 'Straightforward and honest about what my options were. He never oversold anything, and he kept me updated the whole way through.',
    name: 'Michael K.',
    source: 'Client review',
  },
  {
    quote: 'I was in over my head with medical bills and paperwork. Bill took it off my plate so I could focus on getting better.',
    name: 'Angela P.',
    source: 'Client review',
  },
  {
    quote: 'Local, responsive, and he actually knows the area and the people. Calling his office was the best decision I made.',
    name: 'Robert L.',
    source: 'Client review',
  },
];


// ---------------------------------------------------------------------------
// Verdicts & settlements, taken from the firm's own published list at
// billpricepa.com/verdicts-&-settlements. Any results section that renders
// these MUST carry a prior-results disclaimer (Florida Bar advertising rules).
// ---------------------------------------------------------------------------
export const caseResults = [
  { amount: '$100 Million', category: 'Negligence', desc: 'In settlements against a negligent corporation for multiple injuries.' },
  { amount: '$50 Million', category: 'Property Insurance', desc: 'Recovered in disputed property insurance coverage.' },
  { amount: '$11 Million', category: 'Trucking', desc: 'Settlement against a trucking company after a collision left the client paralyzed.' },
  { amount: '$1.25 Million', category: 'Product Liability', desc: 'Settlement against a restaurant and subcontractor after a propane tank discharge caused severe burns.' },
  { amount: '$900,000', category: 'Trucking', desc: 'Settlement against a trucking company for a serious back injury requiring multiple surgeries.' },
  { amount: '$470,000', category: 'Trucking', desc: 'Settlement against a trucking company for a traumatic amputation of two toes.' },
  { amount: '$250,000', category: 'Auto', desc: 'Settlement against two motor vehicle insurers for serious back injuries.' },
  { amount: '$155,000', category: 'Motorcycle', desc: 'Settlement against a farm operation after a motorcycle collision caused a back injury.' },
  { amount: '$100,000', category: 'Auto', desc: 'Settlement with two motor vehicle insurers for a traumatic brain injury.' },
  { amount: '$100,000', category: 'Premises', desc: 'Settlement against a resort where a juvenile wheelchair user sustained a skull fracture on non-compliant stairs.' },
  { amount: '$25,000', category: 'Negligence', desc: 'Settlement against an individual for injuries sustained in a skiing collision.' },
];
