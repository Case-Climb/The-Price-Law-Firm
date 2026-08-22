/**
 * YouTube Shorts published by the firm.
 *
 * Captions were written from the auto-generated transcripts — YouTube's own
 * titles are camera timestamps ("20260724 132630") and carry no meaning.
 *
 * `topics` maps a clip to the pages it belongs on, so a practice-area page can
 * pull only its own videos via videoSection({ topic: '...' }).
 *
 * `review` marks a clip that needs sign-off before it goes live. See the notes
 * on each one — they concern named defendants and described case outcomes, not
 * production quality.
 */
export const videos = [
  {
    id: 'nCfqkohzBQM',
    title: 'When an everyday aerosol can explodes',
    topics: ['/personal-injury/product-liability'],
    review:
      'Names a specific manufacturer on camera, describes a client\'s life-threatening burns, ' +
      'and states that related cases are still pending. Needs attorney sign-off before publishing.',
  },
  {
    id: 'EeXkFiLcUcw',
    title: 'Check your policy before the storm, not after',
    topics: ['/property-insurance-claims'],
    review: 'Near-duplicate of bqGZIYG5zK4 — same message, 33s vs 29s. Publish one, not both.',
  },
  {
    id: 'bqGZIYG5zK4',
    title: 'Hurricane season: is your coverage still right?',
    topics: ['/property-insurance-claims'],
    review: 'Near-duplicate of EeXkFiLcUcw — same message, 29s vs 33s. Publish one, not both.',
  },
  {
    id: 'FPU6b-4ecvE',
    title: 'Do you need a police report after a Florida crash?',
    topics: ['/personal-injury/auto-accidents'],
  },
  {
    id: 'w5DvzpThC74',
    title: 'Actual cash value vs. replacement cost — what your policy really pays',
    topics: ['/property-insurance-claims'],
  },
  {
    id: 'IpdbiIzH2Ww',
    title: 'Ask a lawyer whose side they normally represent',
    topics: ['/about'],
  },
  {
    id: 'wB1B3xuBNwY',
    title: 'The most important car insurance you can buy',
    topics: ['/personal-injury/auto-accidents'],
  },
  {
    id: '87195D8K26U',
    title: 'Document your own damage after a hurricane',
    topics: ['/property-insurance-claims'],
    review: 'Describes a specific trial and accuses a carrier of altering an adjuster\'s estimate.',
  },
  {
    id: '8kHSgPgKcJ0',
    title: 'Falsified logbooks and fatigued truck drivers',
    topics: ['/personal-injury/trucking-accidents'],
    review: 'Describes discovery findings and injuries from a specific case he litigated.',
  },
  {
    id: 'Qioaf7HYjRE',
    title: 'Rear-ended into the car ahead? You may not be at fault',
    topics: ['/personal-injury/auto-accidents'],
  },
  {
    id: 'o_2bSKCgWVc',
    title: 'Can you sue the internet?',
    topics: ['/personal-injury/product-liability'],
    review:
      'Opens by referring to "this social media platform I\'m talking to you on", which reads ' +
      'oddly once the clip lives on the firm\'s own site.',
  },
  {
    id: 'h2ow4kG5z0A',
    title: 'Auto insurers are denying more claims than ever',
    topics: ['/personal-injury/insurance-claims'],
  },
  {
    id: 'TJBcZgDiuVk',
    title: 'The jury duty scam — and how to shut it down',
    topics: [],
  },
  {
    id: 'QBOh_PEtsCU',
    title: 'Florida changed its insurance laws — and not in your favour',
    topics: ['/property-insurance-claims'],
    review:
      'Opens as a live tracking update on "Invest 92", which dates the clip to one morning ' +
      'and will read as stale. Also states that Citizens denies coverage via arbitration at ' +
      '"almost 100%" success, and closes on an unrelated early-voting anecdote.',
  },
  {
    id: 'ligtvjfSOAk',
    title: 'How a personal injury lawyer picks a jury',
    topics: ['/about'],
    review:
      'Describes his own jury-selection strategy in detail — which occupations he seeks and ' +
      'which he strikes — and mentions drawing an all-female panel. Publishing trial strategy ' +
      'on the firm\'s own site is a decision for Bill. Ends with a "leave a comment" ask that ' +
      'does not work off social media.',
  },
];

/** Clips suitable for a given page path. */
export const videosFor = (topic) => videos.filter((v) => (v.topics || []).includes(topic));
