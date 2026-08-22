import { site } from '../data/site.js';
import { videos } from '../data/video-content.js';
import { page } from '../lib/layout.js';
import {
  hero, videoGrid, ctaBand, breadcrumbSchema,
} from '../lib/components.js';

const trail = [{ name: 'Home', url: '/' }, { name: 'Videos', url: '/videos' }];

const content = `
${hero({
  title: 'Video Library',
  lead: `Short answers to the questions people ask ${site.attorneyShort} most often after an accident — what to do, what not to say, and when to call a lawyer.`,
  trail,
  compact: true,
  buttons: false,
})}

<section class="section">
  <div class="container">
    ${videoGrid(videos)}
  </div>
</section>

${ctaBand({
  title: 'Still Have Questions?',
  text: 'These videos cover the basics. Your situation is specific — tell us what happened and we will talk it through at no cost.',
})}
`;

export default page({
  path: '/videos',
  title: `Video Library | ${site.brand} Panama City, FL`,
  description: `Short videos from attorney ${site.attorney} of ${site.brand} in Panama City, FL, answering common questions about injury and insurance claims. Call ${site.phone}.`,
  schema: [breadcrumbSchema(trail)],
  content,
});
