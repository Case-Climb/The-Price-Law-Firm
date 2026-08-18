import { site } from './site.js';
import { ph } from '../lib/components.js';

const P = site.phone;

const meetingFaq = (city) => ({
  q: `Do you meet with clients in person in ${city}?`,
  a: `<p>Our office is at ${site.addressLine}, and clients are always welcome there. We also handle consultations by phone and video, and where an injury makes travel difficult we can make other arrangements.</p><p>Call ${P} and we will work out whatever is easiest for you.</p>`,
});

const feeFaq = {
  q: 'What does a consultation cost?',
  a: `<p>Nothing. The initial consultation is free and carries no obligation to hire the firm. Injury cases are handled on a contingency fee — the fee comes out of any recovery rather than being billed to you along the way, and there is no fee unless we win.</p>`,
};

export const locationContent = [
  /* ------------------------------------------------------------- Panama City */
  {
    slug: 'panama-city',
    url: '/panama-city',
    name: 'Panama City',
    county: 'Bay County',
    circuit: '14th Judicial Circuit',
    primary: true,
    h1: 'Personal Injury Attorney in Panama City, FL',
    title: 'Panama City Injury Lawyer | Bay County | The Price Law Firm',
    description: `Personal injury attorney at 2633 W. 23rd St., Panama City. Trucking, auto, catastrophic injury and insurance claims in Bay County. Call ${P}.`,
    heroLead: 'Our office is here in Panama City. If you were hurt in Bay County because someone else was careless, we would like to hear what happened.',
    introTitle: 'A Panama City Firm, Not a Statewide Call Center',
    intro: [
      'The Price Law Firm operates from 2633 W. 23rd Street in Panama City, and Bay County is home ground. We know the intersections where crashes cluster, the stretch of Highway 231 that carries freight north out of town, and the way summer traffic on 23rd Street and Tyndall Parkway changes the risk picture.',
      'Bay County has been through a great deal — hurricane recovery brought years of heavy construction traffic, commercial trucking, and out-of-town drivers unfamiliar with local roads. That has left a steady stream of serious collisions, and a steady stream of insurance adjusters trying to settle them cheaply.',
      `We handle <a href="/personal-injury/trucking-accidents">trucking accidents</a>, <a href="/personal-injury/auto-accidents">auto accidents</a>, <a href="/personal-injury/catastrophic-injuries">catastrophic injuries</a>, <a href="/personal-injury/product-liability">product liability</a> and <a href="/personal-injury/insurance-claims">insurance disputes</a>. What you will not get here is a case manager you have never met. ${site.attorneyShort} handles the file himself.`,
      `If you have been injured in Panama City, call ${P}. The consultation is free, and it costs nothing to find out where you stand.`,
    ],
    courthouse: { name: 'Bay County Courthouse', address: '300 East 4th Street, Panama City, FL 32401' },
    courtNote: 'The 14th Judicial Circuit also covers Calhoun, Gulf, Holmes, Jackson and Washington counties. Most Bay County civil injury claims are filed and heard here.',
    nearby: ['Panama City Beach', 'Lynn Haven', 'Callaway', 'Springfield', 'Parker', 'Mexico Beach'],
    practiceText: 'Every case type the firm handles, for clients throughout Bay County.',
    ctaTitle: 'Injured in Panama City?',
    ctaText: `We are right here on W. 23rd Street. Call ${P} for a free consultation.`,
    schemaDescription: 'Personal injury attorney serving Panama City and Bay County, Florida from an office at 2633 W. 23rd St.',
    faqs: [
      meetingFaq('Panama City'),
      {
        q: 'Where is your Panama City office?',
        a: `<p>We are at ${site.addressLine}, on W. 23rd Street. Parking is available on site, and the Bay County Courthouse is a short drive away at 300 East 4th Street.</p>`,
      },
      {
        q: 'Which court will my Bay County case be filed in?',
        a: `<p>Bay County sits within Florida's 14th Judicial Circuit, which also covers Calhoun, Gulf, Holmes, Jackson and Washington counties. Most civil injury claims arising in Bay County are filed at the Bay County Courthouse in Panama City.</p><p>Which division hears the case depends on the amount in controversy and the type of claim. The great majority of injury claims settle without ever reaching a courtroom.</p>`,
      },
      feeFaq,
    ],
  },

  /* -------------------------------------------------------- Panama City Beach */
  {
    slug: 'panama-city-beach',
    url: '/panama-city-beach',
    name: 'Panama City Beach',
    county: 'Bay County',
    circuit: '14th Judicial Circuit',
    h1: 'Personal Injury Attorney in Panama City Beach, FL',
    title: 'Panama City Beach Injury Attorney | The Price Law Firm',
    description: `Hurt in Panama City Beach? Tourist traffic and rental vehicles drive serious crashes. Free consultation with attorney Bill Price — call ${P}.`,
    heroLead: 'Front Beach Road in July is one of the most demanding driving environments in the Panhandle. When a crash happens there, we can help.',
    introTitle: 'Beach Traffic, Visiting Drivers, and Seasonal Risk',
    intro: [
      'Panama City Beach is served from our office a short drive away in Panama City, and it produces a distinctive pattern of injury claims. The population swells enormously in season, and much of that traffic consists of visitors driving unfamiliar roads, often in rental vehicles, frequently distracted by navigation and by the beach itself.',
      'Front Beach Road, Thomas Drive and Back Beach Road (Highway 98) carry that load through a landscape of constant pedestrian crossings, scooter and golf cart traffic, sudden stops for parking, and congested resort entrances. Add spring break and holiday weekends and the collision rate rises accordingly.',
      'Those cases bring their own complications. An at-fault driver may live in another state, be insured by an out-of-state carrier, or be driving a rental with a layered coverage arrangement. Pedestrian, bicycle and scooter injuries tend to be severe because there is no vehicle absorbing the impact. Sorting out which policies actually apply is often the first real task.',
      `Because Panama City Beach is in Bay County, claims here run through the same court system as Panama City cases. Call ${P} to talk through what happened.`,
    ],
    courthouse: { name: 'Bay County Courthouse', address: '300 East 4th Street, Panama City, FL 32401' },
    courtNote: 'Panama City Beach shares Bay County\'s court system with Panama City. The 14th Judicial Circuit also covers Calhoun, Gulf, Holmes, Jackson and Washington counties.',
    nearby: ['Panama City', 'Callaway', 'Laguna Beach', 'Inlet Beach', 'Rosemary Beach', 'Sunnyside'],
    nearbyConfirm: true,
    practiceText: 'Auto and pedestrian collisions dominate here, but we handle every case type in Panama City Beach.',
    highlight: ['auto-accidents'],
    ctaTitle: 'Injured in Panama City Beach?',
    ctaText: `Visiting or local, the claim works the same way. Call ${P} for a free consultation.`,
    schemaDescription: 'Personal injury attorney serving Panama City Beach and Bay County, Florida.',
    faqs: [
      meetingFaq('Panama City Beach'),
      {
        q: 'I was injured while visiting Panama City Beach. Can you still help?',
        a: `<p>Yes. A claim arising from a crash in Florida is generally handled under Florida law and in the Florida courts regardless of where you live, and you do not need to be a Florida resident to bring one.</p><p>Out-of-state clients are common here. Much of the case can be handled remotely, and we will coordinate around your treatment at home. Call ${P} and we will explain how it works.</p>`,
      },
      {
        q: 'What if the at-fault driver was in a rental car?',
        a: `<p>Rental vehicle crashes usually involve more than one possible source of coverage: the driver's own auto policy, any coverage purchased at the rental counter, a credit card benefit, and in limited circumstances the rental company itself.</p><p>Untangling which applies — and in what order — is part of the investigation. It is also a reason not to accept the first adjuster's account of what coverage exists.</p>`,
      },
      feeFaq,
    ],
  },

  /* ---------------------------------------------------------------- Pensacola */
  {
    slug: 'pensacola',
    url: '/pensacola',
    name: 'Pensacola',
    county: 'Escambia County',
    circuit: '1st Judicial Circuit',
    h1: 'Personal Injury Attorney Serving Pensacola, FL',
    title: 'Personal Injury Attorney in Pensacola, FL | The Price Law Firm',
    description: `Personal injury representation for Pensacola and Escambia County, FL — trucking, auto and insurance claims. Free consultation: call ${P}.`,
    heroLead: 'We represent injured people in Pensacola and across Escambia County from our office in Panama City.',
    introTitle: 'Escambia County Injury Claims',
    intro: [
      'Pensacola anchors the western end of the Panhandle, and it carries the traffic to match — I-10 running east and west, I-110 feeding downtown, and Highway 98 and Davis Highway moving heavy local volume through a dense commercial corridor. It is also a military community, with Naval Air Station Pensacola and a steady population of newcomers driving unfamiliar roads.',
      'That mix produces the full range of injury claims: highway collisions at speed, commercial truck crashes on the interstate, intersection wrecks on congested arterials, and the insurance disputes that follow all of them.',
      `We handle Escambia County cases from Panama City. Much of an injury claim — the investigation, the medical documentation, the negotiation with adjusters — is conducted by phone, email and mail regardless of where the attorney sits, and we travel when a case requires it.`,
      `If you were injured in or near Pensacola, call ${P} for a free consultation. We also serve nearby Gulf Breeze; if you are not sure whether we cover your area, <a href="/contact">ask us</a>.`,
    ],
    courthouse: null,
    courtNote: 'Escambia County is part of Florida\'s 1st Judicial Circuit, which also covers Okaloosa, Santa Rosa and Walton counties.',
    nearby: ['Gulf Breeze', 'Milton', 'Pace', 'Cantonment', 'Perdido Key'],
    nearbyConfirm: true,
    practiceText: 'The full range of injury representation, for clients in Escambia County.',
    highlight: ['trucking-accidents'],
    ctaTitle: 'Injured in Pensacola?',
    ctaText: `Find out where you stand at no cost. Call ${P} for a free consultation.`,
    schemaDescription: 'Personal injury attorney serving Pensacola and Escambia County, Florida.',
    faqs: [
      {
        q: 'Your office is in Panama City — can you still handle my Pensacola case?',
        a: `<p>Yes. Injury claims are largely built through records, correspondence and negotiation rather than daily in-person contact, and we handle those parts the same way regardless of distance. Consultations can be done by phone or video, and we travel for the case when it is needed.</p><p>What you gain is direct access to the attorney handling your file. Call ${P} and we will tell you honestly whether we are the right fit.</p>`,
      },
      {
        q: 'Which court handles Escambia County injury claims?',
        a: `<p>Escambia County sits in Florida's 1st Judicial Circuit, which also includes Okaloosa, Santa Rosa and Walton counties. Civil injury claims arising in Escambia County are filed in that circuit.</p>`,
      },
      {
        q: 'Do you handle claims in Gulf Breeze and Milton?',
        a: `<p>Yes — Gulf Breeze is within our service area, and we take cases from the surrounding Santa Rosa County communities as well. Those areas do not have their own pages on this site, so <a href="/contact">contact us</a> or call ${P} directly.</p>`,
      },
      feeFaq,
    ],
  },

  /* -------------------------------------------------------------- Tallahassee */
  {
    slug: 'tallahassee',
    url: '/tallahassee',
    name: 'Tallahassee',
    county: 'Leon County',
    circuit: '2nd Judicial Circuit',
    h1: 'Personal Injury Attorney Serving Tallahassee, FL',
    title: 'Personal Injury Attorney in Tallahassee, FL | The Price Law Firm',
    description: `Injury representation for Tallahassee and Leon County, FL — auto, trucking and catastrophic injury claims. Free consultation: call ${P}.`,
    heroLead: 'We represent injured clients in Tallahassee and Leon County from our Panama City office.',
    introTitle: 'Leon County Injury Claims',
    intro: [
      'Tallahassee combines state government, two major universities and a large medical sector into a compact road network, and the result is heavy, unpredictable traffic. Capital Circle rings the city carrying commuter and commercial volume; Apalachee Parkway, Thomasville Road, Monroe Street and Tennessee Street push dense local traffic through busy commercial corridors; and I-10 runs along the northern edge with interstate freight.',
      'Add a large student population, significant pedestrian and cyclist activity around the universities, and the seasonal surge that comes with legislative sessions and football weekends, and Leon County produces a steady volume of collisions — many of them involving drivers who are new to the area.',
      'We handle the resulting claims: auto and trucking collisions, catastrophic injury cases, and disputes with insurers who deny, delay or underpay.',
      `Leon County is roughly an hour and a half east of our Panama City office along Highway 231 and I-10, and we are familiar with the corridor. Call ${P} for a free consultation.`,
    ],
    courthouse: null,
    courtNote: 'Leon County is part of Florida\'s 2nd Judicial Circuit, which also covers Franklin, Gadsden, Jefferson, Liberty and Wakulla counties.',
    nearby: ['Midway', 'Havana', 'Crawfordville', 'Woodville', 'Monticello', 'Quincy'],
    nearbyConfirm: true,
    practiceText: 'Full injury representation for Leon County clients.',
    highlight: ['auto-accidents'],
    ctaTitle: 'Injured in Tallahassee?',
    ctaText: `Talk it through with an attorney at no cost. Call ${P}.`,
    schemaDescription: 'Personal injury attorney serving Tallahassee and Leon County, Florida.',
    faqs: [
      {
        q: 'Can you handle a Tallahassee case from Panama City?',
        a: `<p>Yes. Leon County is about ninety minutes from our office, and the bulk of an injury claim is built through records, medical documentation and negotiation rather than daily courthouse appearances. We travel for the case when it is required.</p><p>Consultations can be handled by phone or video. Call ${P} and we will explain exactly how your case would be managed.</p>`,
      },
      {
        q: 'Which court handles Leon County injury claims?',
        a: `<p>Leon County is in Florida's 2nd Judicial Circuit, which also covers Franklin, Gadsden, Jefferson, Liberty and Wakulla counties. Civil injury claims arising in Leon County are filed there.</p>`,
      },
      {
        q: 'I was hit by a driver who lives out of the area. Does that complicate things?',
        a: `<p>Not usually in a way that stops the claim. A crash that happens in Florida is generally handled under Florida law and in Florida courts, even if the at-fault driver lives elsewhere. It can add steps — locating the driver, dealing with an out-of-state insurer, and confirming what coverage applies — but these are routine.</p>`,
      },
      feeFaq,
    ],
  },

  /* ------------------------------------------------------------------ Destin */
  {
    slug: 'destin',
    url: '/destin',
    name: 'Destin',
    county: 'Okaloosa County',
    circuit: '1st Judicial Circuit',
    h1: 'Personal Injury Attorney Serving Destin, FL',
    title: 'Personal Injury Attorney in Destin, FL | The Price Law Firm',
    description: `Injured in Destin or Okaloosa County, FL? Highway 98 tourist traffic and rental vehicles. Free consultation with Bill Price — call ${P}.`,
    heroLead: 'Highway 98 through Destin in season is bumper to bumper with visitors, rentals and boat trailers. We handle the crashes that follow.',
    introTitle: 'Tourist Traffic and Okaloosa County Claims',
    intro: [
      'Destin runs on tourism, and its injury claims reflect that. Highway 98 is the single artery carrying nearly all traffic through town, and in season it fills with visiting drivers navigating unfamiliar roads, rental cars, scooters, boat trailers and constant turning movements into crowded resort and restaurant entrances.',
      'The harbor adds another dimension. Charter operations, recreational boating and watercraft rentals generate injuries that fall outside the ordinary road-traffic pattern, and those claims can involve different insurance structures and different operators.',
      'Because so many parties are from out of the area, coverage questions are frequently the first hurdle: the at-fault driver may be insured out of state, driving a rental with layered coverage, or operating a vehicle owned by someone else entirely. Determining what policies apply — and in what order — takes work before the value of the claim can even be discussed.',
      `Serious collisions on Highway 98 and the surrounding corridors frequently produce <a href="/personal-injury/catastrophic-injuries">catastrophic injuries</a>. If that has happened to you or your family, call ${P}.`,
    ],
    courthouse: null,
    courtNote: 'Okaloosa County is part of Florida\'s 1st Judicial Circuit, which also covers Escambia, Santa Rosa and Walton counties.',
    nearby: ['Miramar Beach', 'Fort Walton Beach', 'Crestview', 'Niceville', 'Sandestin'],
    nearbyConfirm: true,
    practiceText: 'Auto collisions and catastrophic injury claims are especially common here, given the volume of seasonal traffic.',
    highlight: ['auto-accidents', 'catastrophic-injuries'],
    ctaTitle: 'Injured in Destin?',
    ctaText: `Resident or visitor, the consultation is free. Call ${P}.`,
    schemaDescription: 'Personal injury attorney serving Destin and Okaloosa County, Florida.',
    faqs: [
      {
        q: 'I was hurt while on vacation in Destin. Can you represent me?',
        a: `<p>Yes, and it is common. A crash occurring in Florida is generally handled under Florida law and in Florida courts regardless of where you live, and you do not need to return here to pursue it.</p><p>We coordinate around treatment you receive at home and handle the case largely by phone, email and video. Call ${P} to get started.</p>`,
      },
      {
        q: 'Do you handle boating and watercraft injury claims?',
        a: `<p>Watercraft injuries in and around Destin harbor can involve rental operators, charter companies, and commercial policies quite different from auto coverage, and depending on where the incident occurred, different bodies of law may apply.</p><p>Call ${P} and describe what happened. If the claim is one we handle, we will tell you how it works — and if it falls outside our practice, we will say so and point you toward someone who handles it.</p>`,
      },
      {
        q: 'Which court handles Okaloosa County claims?',
        a: `<p>Okaloosa County is part of Florida's 1st Judicial Circuit, alongside Escambia, Santa Rosa and Walton counties.</p>`,
      },
      feeFaq,
    ],
  },

  /* ---------------------------------------------------------------- Marianna */
  {
    slug: 'marianna',
    url: '/marianna',
    name: 'Marianna',
    county: 'Jackson County',
    circuit: '14th Judicial Circuit',
    h1: 'Personal Injury Attorney Serving Marianna, FL',
    title: 'Personal Injury Attorney in Marianna, FL | The Price Law Firm',
    description: `Injured in Marianna or Jackson County, FL? I-10 freight traffic makes truck crashes a constant risk. Free consultation with attorney Bill Price — call ${P}.`,
    heroLead: 'Jackson County sits astride I-10, where long-haul freight moves day and night. Truck crashes here are rarely minor.',
    introTitle: 'The I-10 Corridor and Jackson County',
    intro: [
      'Marianna sits on Interstate 10, the main east–west freight route across the northern Gulf, which means Jackson County absorbs a constant flow of long-haul commercial trucking. Combine highway speeds with fatigued drivers at the end of long runs and the collisions that result tend to be severe.',
      'Beyond the interstate, US-90 and State Road 71 carry a mix of local traffic, agricultural vehicles and commercial transport through rural stretches where emergency response times are longer and injuries are correspondingly worse.',
      `<a href="/personal-injury/trucking-accidents">Trucking accident claims</a> are a natural fit for this area, and they are their own kind of case: federal FMCSA regulations, electronic logging and black box data that can be overwritten within days, and multiple potentially liable parties beyond the driver — the carrier, the loader, the trailer owner, a maintenance contractor. Getting preservation letters out quickly matters enormously.`,
      `Jackson County shares the 14th Judicial Circuit with Bay County, so these cases run through a court system we work in regularly. Call ${P} for a free consultation.`,
    ],
    courthouse: null,
    courtNote: 'Jackson County is part of Florida\'s 14th Judicial Circuit — the same circuit as Bay County, along with Calhoun, Gulf, Holmes and Washington counties.',
    nearby: ['Chipley', 'Bonifay', 'Cottondale', 'Graceville', 'Sneads', 'Grand Ridge'],
    nearbyConfirm: true,
    practiceText: 'Trucking claims are especially common along the I-10 corridor, but we handle every case type in Jackson County.',
    highlight: ['trucking-accidents'],
    ctaTitle: 'Injured on I-10 or in Jackson County?',
    ctaText: `Trucking evidence disappears quickly. Call ${P} as soon as you can.`,
    schemaDescription: 'Personal injury attorney serving Marianna and Jackson County, Florida.',
    faqs: [
      {
        q: 'Why do trucking cases need to be started quickly?',
        a: `<p>Because the most valuable evidence has a short life. Engine control module (black box) data, electronic logging records, dashcam footage and internal dispatch communications are routinely overwritten or purged on normal retention schedules.</p><p>One of the first things we do is send a spoliation letter demanding the carrier preserve all of it. The sooner that goes out, the more of the record survives. Read more on our <a href="/personal-injury/trucking-accidents">trucking accident</a> page.</p>`,
      },
      {
        q: 'Which court handles Jackson County injury claims?',
        a: `<p>Jackson County is part of Florida's 14th Judicial Circuit — the same circuit that covers Bay County, along with Calhoun, Gulf, Holmes and Washington counties. Civil injury claims arising in Jackson County are filed at the county courthouse in Marianna.</p>`,
      },
      meetingFaq('Marianna'),
      feeFaq,
    ],
  },
];
