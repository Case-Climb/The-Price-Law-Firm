import { site } from './site.js';
import { ph } from '../lib/components.js';

const P = site.phone;

/* Standard cost/fee answer, reused so the [CONFIRM] flag stays consistent. */
const feeAnswer = `<p>The consultation costs nothing. Injury cases are handled on a contingency fee, so the fee comes out of any recovery rather than out of your pocket while the case is pending — and there is no fee unless we win.</p><p>We go through the fee agreement with you in full before you sign it.</p>`;

const limitationsAnswer = `<p>For most Florida negligence claims arising on or after March 24, 2023, the statute of limitations is <strong>two years</strong> from the date of injury. Claims that arose earlier were generally subject to a four-year deadline. Wrongful death claims run two years, and any claim against a government entity carries much shorter notice requirements.</p><p>The deadline that applies to you depends on your specific dates and facts, so please confirm it rather than relying on a general rule — call ${P}. Once the deadline passes, the claim is usually lost regardless of its merits.</p>`;

export const practiceContent = [
  /* ------------------------------------------------------ trucking accidents */
  {
    slug: 'trucking-accidents',
    h1: 'Panama City Trucking Accident Lawyer',
    title: 'Trucking Accident Lawyer in Panama City, FL | The Price Law Firm',
    description: `Hurt by a commercial truck in Panama City or on I-10? We investigate carrier records, black box data and multi-party liability. Call ${P}.`,
    heroBadge: 'FMCSA-regulated carriers',
    heroLead: 'A loaded tractor-trailer can weigh twenty times what your car does. When one of them hits you, the injuries and the legal fight are both on a different scale.',
    introTitle: 'Truck Crashes Are Not Just Bigger Car Crashes',
    intro: [
      'A commercial truck collision is a different kind of case from the moment it happens. The physics are unforgiving: a fully loaded tractor-trailer running at highway speed needs the length of a football field to stop, and the vehicle it strikes absorbs nearly all of the energy. That is why truck crashes on I-10, US-231, and Highway 98 so often produce life-changing injuries rather than sore necks.',
      'The legal side is different too. Commercial carriers are governed by federal safety regulations enforced by the Federal Motor Carrier Safety Administration — rules limiting how many hours a driver may be behind the wheel, requiring documented vehicle inspection and maintenance, setting standards for driver qualification and drug testing, and governing how cargo is secured. When a carrier cuts corners on any of those, the violation itself can become powerful evidence of negligence.',
      'And there is rarely just one defendant. Depending on the facts, responsibility may be shared among the driver, the motor carrier that employed or contracted with them, the company that loaded the trailer, the owner of the tractor or trailer, a maintenance contractor, or a parts manufacturer. Each of those carries its own insurance policy — which is why identifying every liable party early matters so much to what you can ultimately recover.',
      `There is also a clock running on the evidence. Electronic logging data, dashcam footage, and internal records can be overwritten or destroyed on a routine retention schedule. Getting a preservation letter to the carrier quickly is one of the first things we do. If you have been hit by a commercial truck, call ${P}.`,
    ],
    handleTitle: 'Trucking Cases We Take',
    handleText: 'Collisions involving commercial vehicles, from delivery trucks to fully loaded tractor-trailers.',
    handles: [
      { title: 'Commercial truck and tractor-trailer crashes', text: 'Collisions involving 18-wheelers, box trucks, tankers, delivery vehicles and other commercial carriers.' },
      { title: 'Jackknife and rollover accidents', text: 'Crashes caused by improper braking, excessive speed for conditions, unbalanced loads, or poorly maintained equipment.' },
      { title: 'Underride collisions', text: 'Catastrophic crashes where a passenger vehicle slides beneath a trailer — often involving missing, damaged, or inadequate underride guards.' },
      { title: 'Cargo-related accidents', text: 'Injuries caused by improperly secured, overloaded, or shifting freight, including cases where the loading company is separately liable.' },
      { title: 'Wrongful death from trucking crashes', text: 'Claims brought by surviving family members after a fatal commercial vehicle collision.' },
      { title: 'Driver fatigue and hours-of-service violations', text: 'Cases built on electronic logging device data showing a driver exceeded federal limits before the crash.' },
    ],
    processTitle: 'How We Build a Trucking Case',
    processText: 'Truck cases are won on evidence that has a short shelf life. Speed matters.',
    steps: [
      { title: 'Investigate & Preserve Evidence', text: 'We send spoliation letters demanding the carrier preserve electronic control module (black box) data, electronic logging records, driver qualification files, maintenance history, dashcam footage and dispatch communications before any of it is overwritten.' },
      { title: 'Identify All Liable Parties', text: 'We work out who is actually responsible — driver, motor carrier, broker, shipper, loader, trailer owner, maintenance provider or parts manufacturer — and locate every insurance policy that may apply to your claim.' },
      { title: 'Negotiate or Litigate', text: 'We present a fully documented demand to the carrier and its insurer. Commercial carriers are defended aggressively, so if the offer does not reflect the harm done, we file suit and prepare the case for a jury.' },
    ],
    ctaTitle: 'Hit by a Commercial Truck?',
    ctaText: `Evidence in trucking cases disappears fast. Call ${P} for a free consultation and let us get preservation letters out.`,
    related: ['auto-accidents', 'catastrophic-injuries'],
    faqs: [
      {
        q: 'Who can be held liable in a truck accident?',
        a: `<p>Often more than one party. Liability may rest with the driver, but it can extend to the motor carrier that hired and supervised them, a broker or shipper, the company that loaded the trailer, the owner of the tractor or trailer, a maintenance contractor, or the manufacturer of a defective component such as brakes or tires.</p><p>This matters practically: each defendant typically brings a separate insurance policy, and in a serious injury case the driver's coverage alone is frequently nowhere near enough. Identifying every responsible party is a core part of the investigation.</p>`,
      },
      {
        q: 'How is a truck accident claim different from a car accident claim?',
        a: `<p>Three ways. First, commercial carriers must comply with federal FMCSA regulations covering driver hours, inspection and maintenance, driver qualification, drug and alcohol testing, and cargo securement — a violation can be strong evidence of negligence in a way that has no equivalent in an ordinary car crash.</p><p>Second, the evidence is different: electronic logging devices, engine control module data, dispatch records and maintenance files exist in trucking cases and must be demanded before they are lost.</p><p>Third, the opposition is different. Carriers often have rapid response teams investigating within hours of a crash, and their insurers defend these claims hard. See our <a href="/personal-injury/auto-accidents">auto accident</a> page for how standard collision claims compare.</p>`,
      },
      {
        q: 'What is black box or ECM data, and why does it matter?',
        a: `<p>Most commercial trucks record operational data through an engine control module — commonly called the black box — and through an electronic logging device. Depending on the equipment, that data can show vehicle speed, throttle position, brake application, engine RPM, and hours the driver had been on duty in the period before the crash.</p><p>It is often the most objective account of what happened, and it can directly contradict a driver's version of events. It can also be overwritten in the normal course of operation, which is why a preservation demand needs to go out immediately.</p>`,
      },
      { q: 'How long do I have to file a trucking claim in Florida?', a: limitationsAnswer },
      {
        q: 'What if I was partly at fault for the crash?',
        a: `<p>You may still recover. Florida uses a modified comparative negligence system: if you are found partially responsible, your damages are reduced by your percentage of fault, and under the standard adopted in 2023, a plaintiff found <em>more than 50 percent</em> at fault is generally barred from recovering.</p><p>Insurers know this and routinely try to inflate your share of blame. Do not accept their assessment of fault as settled — that number is contested evidence, and it is worth fighting over.</p>`,
      },
      {
        q: 'What compensation can I recover after a truck accident?',
        a: `<p>Depending on the facts, a claim may include past and future medical treatment, lost wages, reduced future earning capacity, pain and suffering, and property damage. Where an injury is permanent, the future costs frequently dwarf the bills already incurred — which is why settling before you understand the long-term picture is risky.</p><p>Where a crash is fatal, Florida's Wrongful Death Act allows certain surviving family members to bring a claim. What is available in any specific case depends on the injuries, the facts, and the coverage in play.</p>`,
      },
    ],
  },

  /* ---------------------------------------------------------- auto accidents */
  {
    slug: 'auto-accidents',
    h1: 'Panama City Car Accident Lawyer',
    title: 'Car Accident Lawyer in Panama City, FL | The Price Law Firm',
    description: `Injured in a car accident in Panama City, FL? We deal with the insurance adjusters so you can recover. Free consultation with Bill Price: ${P}.`,
    heroBadge: 'We deal with the adjusters',
    heroLead: 'The other driver caused it — and now their insurance company is calling you for a recorded statement. Let us take that conversation off your hands.',
    introTitle: 'Car Accident Claims in Bay County and Beyond',
    intro: [
      'Most people meet the personal injury system for the first time from the driver\'s seat, and the introduction is not a friendly one. Within a day or two of the crash an adjuster calls, sounding helpful, asking for a recorded statement and a signed medical authorization, and sometimes floating a quick settlement number before anybody knows how badly you are actually hurt.',
      'That call is not customer service. The recorded statement exists to lock you into a version of events before you have seen the police report, and the blanket medical authorization lets the insurer comb through years of unrelated history looking for something pre-existing to blame. The early offer is priced against what your claim looks like today, not what it will look like once treatment is finished.',
      'Florida adds two wrinkles. It is a no-fault state, so your own personal injury protection coverage pays the first portion of your medical bills regardless of who caused the crash — and PIP has deadlines, including a requirement that you seek initial treatment within fourteen days. Separately, Florida applies modified comparative negligence, which means the percentage of blame assigned to you directly reduces what you recover, and being found more than half at fault can bar recovery entirely.',
      `We handle the claim so you can concentrate on treatment: gathering the report and records, documenting your injuries properly, dealing with the adjusters directly, and pressing for a number that reflects the whole picture. Call ${P} to talk it through.`,
    ],
    handleTitle: 'Auto Accident Cases We Take',
    handleText: 'Collisions on Panhandle roads — from fender-benders that turned out serious to catastrophic highway crashes.',
    handles: [
      { title: 'Rear-end collisions', text: 'Including the neck, back and soft-tissue injuries insurers routinely undervalue as "minor" regardless of what your treatment actually shows.' },
      { title: 'Intersection and T-bone crashes', text: 'Side-impact collisions from failure to yield or running a light, where fault is often contested and witness evidence matters.' },
      { title: 'Hit-and-run accidents', text: 'Where the at-fault driver is never identified, we pursue uninsured motorist coverage and any other applicable policy.' },
      { title: 'Uninsured and underinsured motorist claims', text: 'Claims against your own UM/UIM coverage when the at-fault driver had no insurance or nowhere near enough.' },
      { title: 'Distracted and impaired driving crashes', text: 'Cases involving texting, phone use, or a driver under the influence — where the conduct itself can affect the value of the claim.' },
      { title: 'Multi-vehicle and chain-reaction collisions', text: 'Pile-ups where several drivers share fault and multiple insurers each try to point at someone else.' },
    ],
    processTitle: 'How We Handle a Car Accident Claim',
    processText: 'Three stages, and you know where you stand in each one.',
    steps: [
      { title: 'Free Case Review', text: 'We go through what happened, look at the police report and any photographs, identify every insurance policy that may apply — including your own PIP and UM coverage — and tell you honestly what we think the claim is worth pursuing.' },
      { title: 'Evidence & Medical Documentation', text: 'We collect the crash report, scene and vehicle photographs, and witness statements, and we track your treatment from the emergency room through discharge so the medical record reflects the full extent of the injury rather than a snapshot.' },
      { title: 'Settlement Negotiation or Trial', text: 'We present a documented demand and negotiate directly with the adjuster. If the insurer will not move to a fair number, we file suit — and you decide whether to accept any offer that comes in.' },
    ],
    ctaTitle: 'Injured in a Car Accident?',
    ctaText: `Before you give a recorded statement or sign anything, get a free consultation. Call ${P}.`,
    related: ['trucking-accidents', 'insurance-claims'],
    faqs: [
      {
        q: 'What if the other driver has no insurance?',
        a: `<p>You may still have coverage. Uninsured and underinsured motorist coverage on your own auto policy is built for exactly this situation, and it can also apply if the at-fault driver carried a policy far too small for the harm they caused. Depending on the facts, a resident relative's policy or an employer's commercial policy may also come into play if the driver was working at the time.</p><p>Part of our job is finding every layer of available coverage rather than stopping at the first one. See <a href="/personal-injury/insurance-claims">insurance claims</a> for more.</p>`,
      },
      {
        q: 'How is fault determined in Florida?',
        a: `<p>Fault is established from evidence: the crash report, physical damage patterns, scene photographs, skid marks, traffic camera or dashcam footage, witness accounts and, in serious cases, accident reconstruction.</p><p>Florida applies modified comparative negligence, so more than one driver can share responsibility. Your recovery is reduced by your percentage of fault, and a plaintiff found more than 50 percent at fault is generally barred from recovering. The police officer's opinion in the report is influential but not the final word — fault is ultimately decided on the evidence.</p>`,
      },
      {
        q: 'Should I talk to the other driver\'s insurance company?',
        a: `<p>You are generally not required to give the other driver's insurer a recorded statement, and doing so before you have advice rarely helps you. Adjusters are trained to ask questions that produce useful admissions — about how fast you were going, whether you saw the other car, and especially about whether you are "feeling okay," which becomes an argument that you were not seriously hurt.</p><p>You do have duties of cooperation with <em>your own</em> insurer under your policy. The practical answer: report the crash, and let us handle the other side's adjuster.</p>`,
      },
      {
        q: 'What if I was partly at fault?',
        a: `<p>You can still bring a claim. Under Florida's modified comparative negligence standard your damages are reduced in proportion to your share of the blame, and being found more than 50 percent at fault generally bars recovery.</p><p>Because that percentage directly controls what you receive, insurers push hard to assign as much of it to you as possible. Their opening position on fault is a negotiating stance, not a finding — it is very much worth contesting.</p>`,
      },
      {
        q: 'How long does a car accident claim take?',
        a: `<p>Mostly it depends on your treatment. A claim generally should not be settled until your condition has stabilized enough to understand the long-term outlook, because a settlement is final — if a problem turns out to be permanent after you have signed a release, you cannot go back.</p><p>Uncomplicated claims may resolve within a few months of finishing treatment. Serious injuries, disputed liability, or cases that go into litigation take longer. We will give you a realistic estimate once we have seen the file.</p>`,
      },
      { q: 'What is my car accident case worth?', a: `<p>Nobody can responsibly answer that from a website or a first phone call, and you should be wary of any firm that offers a number before reviewing your records. Value turns on the severity and permanence of the injury, the total cost of past and future treatment, income you lost and your capacity to earn going forward, the strength of the liability evidence, your share of fault, and — often decisively — how much insurance coverage actually exists.</p><p>What we can do is review your case at no cost and give you a candid assessment based on the facts. Call ${P}.</p>` },
    ],
  },

  /* --------------------------------------------------- catastrophic injuries */
  {
    slug: 'catastrophic-injuries',
    h1: 'Catastrophic Injury Attorney in Panama City, FL',
    title: 'Catastrophic Injury Lawyer in Panama City | The Price Law Firm',
    description: `Brain injury, spinal cord injury, amputation or severe burns in the Florida Panhandle? Claims that account for a lifetime of care. Free consultation: ${P}.`,
    heroBadge: 'Lifetime-impact claims',
    heroLead: 'When an injury permanently changes what your life looks like, the claim has to account for all of it — not just the bills that have already arrived.',
    introTitle: 'When the Injury Does Not Heal',
    intro: [
      'A catastrophic injury is one that permanently alters how you live and work: a traumatic brain injury, a spinal cord injury causing paralysis, an amputation, severe burns, or any harm producing permanent disability or disfigurement. The line is not about how dramatic the accident was — it is about whether the effects are permanent.',
      'These cases are fundamentally different from ordinary injury claims because most of the loss lies in the future. The emergency treatment and initial surgeries are only the opening chapter. What follows may include years of rehabilitation, home modifications, adaptive equipment that must be replaced periodically, in-home or attendant care, and medical needs that continue for the rest of a person\'s life. Meanwhile the income side often collapses at the same moment, sometimes for a spouse who becomes a full-time caregiver as well.',
      'That combination is what insurers work hardest to underestimate. An early offer in a catastrophic case is usually built around the bills that have already come in, because those are the only numbers on the table so far — and once you sign a release, the future costs are yours alone.',
      `Building these claims properly means projecting decades forward with evidence rather than argument: treating physicians on prognosis, life care planners on the cost of ongoing needs, vocational experts on what work is still possible, and economists to reduce a lifetime of loss to a present figure. If you or a family member has suffered a life-altering injury, call ${P}.`,
    ],
    handleTitle: 'Catastrophic Injuries We Handle',
    handleText: 'Life-altering injuries arising from vehicle collisions, defective products, and other negligence.',
    handles: [
      { title: 'Traumatic brain injuries', text: 'From severe TBI to injuries that look mild on a scan but permanently affect memory, concentration, mood and the ability to work.' },
      { title: 'Spinal cord injuries and paralysis', text: 'Including paraplegia and quadriplegia, where lifetime care, equipment and home modification costs dominate the claim.' },
      { title: 'Severe burns', text: 'Third and fourth-degree burns requiring grafting and reconstructive surgery, with lasting scarring and disfigurement.' },
      { title: 'Amputation and loss of limb', text: 'Traumatic or surgical amputation, including the recurring lifetime cost of prosthetics and their replacement.' },
      { title: 'Permanent disability claims', text: 'Injuries that permanently prevent a return to your occupation or to any comparable earning capacity.' },
      { title: 'Wrongful death', text: 'Claims brought by surviving family members under Florida\'s Wrongful Death Act.' },
    ],
    processTitle: 'How We Build a Catastrophic Injury Case',
    processText: 'The work is proving what the next several decades will actually require.',
    steps: [
      { title: 'Full Case Investigation', text: 'We establish liability thoroughly — scene evidence, reconstruction where warranted, and every potentially responsible party — then map every insurance policy and asset that could contribute to a recovery large enough to matter.' },
      { title: 'Calculating True Long-Term Costs', text: 'Working with treating physicians, life care planners, vocational experts and economists, we document the projected cost of future medical care, equipment, attendant care, home and vehicle modification, and lost earning capacity over a lifetime.' },
      { title: 'Aggressive Negotiation or Trial', text: 'We present the full documented picture and refuse to let the claim be valued on the bills received so far. Where the insurer will not meet a realistic figure, we are prepared to try the case.' },
    ],
    ctaTitle: 'Facing a Life-Changing Injury?',
    ctaText: `These claims must be built to cover decades, not months. Call ${P} for a free consultation.`,
    related: ['product-liability', 'auto-accidents'],
    faqs: [
      {
        q: 'How is a catastrophic injury claim different from a standard injury claim?',
        a: `<p>Scale and time horizon. In an ordinary claim, most of the loss has already happened by the time the case resolves. In a catastrophic case, the majority of the loss is still ahead — decades of medical care, equipment, personal assistance, and income that will never be earned.</p><p>That changes how the case is built. It requires expert projection of future needs rather than a stack of past bills, and it usually requires a hard search for every available layer of insurance coverage, because a single standard policy is rarely enough.</p>`,
      },
      {
        q: 'What damages can be recovered?',
        a: `<p>Depending on the facts, a catastrophic injury claim may include past and future medical expenses, rehabilitation, assistive equipment and prosthetics with their replacement cycles, home and vehicle modifications, in-home or attendant care, lost wages, diminished future earning capacity, pain and suffering, disfigurement, and loss of enjoyment of life. A spouse may in some circumstances have a claim for loss of consortium.</p><p>What is actually recoverable depends on the specific injuries, the liability evidence, and the coverage available.</p>`,
      },
      {
        q: 'Do you work with medical and financial experts?',
        a: `<p>Yes — in a serious case it is not optional. Treating physicians speak to prognosis and future medical needs. Life care planners translate those needs into an itemized lifetime cost. Vocational experts assess what work, if any, remains realistic. Economists reduce future losses to present value and account for inflation.</p><p>Without that framework, a claim gets valued on the bills already incurred, which in a catastrophic case is a small fraction of the truth.</p>`,
      },
      {
        q: 'What if the injury affects my ability to work long-term?',
        a: `<p>Lost earning capacity is frequently the largest single component of a catastrophic claim, and it is distinct from the wages you have already missed. The question is what you could have earned over your working life compared with what you can realistically earn now.</p><p>Proving it takes evidence: your work history and trajectory, vocational assessment of remaining capacity, and economic analysis projecting the difference across your expected working years.</p>`,
      },
      {
        q: 'How is the value of a catastrophic case calculated?',
        a: `<p>By building it from documented components rather than guessing at a headline number: projected lifetime medical and care costs, equipment and modification needs, lost earning capacity, and non-economic harm including pain, disfigurement and loss of enjoyment of life. Then it is tested against the practical limit — how much insurance coverage and recoverable assets actually exist.</p><p>Be cautious of anyone who quotes a figure before reviewing the medical records. Serious valuation follows the evidence.</p>`,
      },
      { q: 'How long do I have to file a catastrophic injury claim?', a: limitationsAnswer },
    ],
  },

  /* -------------------------------------------------------- product liability */
  {
    slug: 'product-liability',
    h1: 'Product Liability Attorney in Panama City, FL',
    title: 'Product Liability Lawyer in Panama City, FL | The Price Law Firm',
    description: `Injured by a defective product in Florida? We pursue manufacturers, distributors and retailers for design and manufacturing defects. Call ${P}.`,
    heroBadge: 'Defective & dangerous products',
    heroLead: 'You used it the way it was meant to be used, and it hurt you. When a product is defective, the company that put it on the market can be held responsible.',
    introTitle: 'When a Product Causes the Injury',
    intro: [
      'Product liability claims arise when something sold to the public turns out to be unreasonably dangerous — a tire that fails at speed, a tool with an inadequate guard, a heater that ignites, a medical device that breaks down inside the body. The defining feature of these cases is that you were doing nothing wrong. The product failed.',
      'Claims are generally built on one of three theories. A <strong>design defect</strong> means the product was dangerous as conceived, so every unit shares the flaw. A <strong>manufacturing defect</strong> means the design was sound but something went wrong in production, affecting your unit or its batch. A <strong>failure to warn</strong> means the danger was known or knowable but the instructions and warnings did not adequately convey it.',
      'Responsibility can extend along the entire chain of distribution — the manufacturer, a component supplier, the distributor, and in some circumstances the retailer that sold it. That breadth matters when a manufacturer is overseas, dissolved, or otherwise beyond practical reach.',
      `One practical point above all: <strong>keep the product</strong>. Do not return it to the store, send it back to the manufacturer, or throw it away, and preserve the packaging, manual and receipt if you have them. The item itself is usually the single most important piece of evidence, and cases have been lost because it was discarded. Call ${P} before parting with it.`,
    ],
    handleTitle: 'Product Cases We Take',
    handleText: 'Injuries caused by products that were defective, dangerous, or inadequately labeled.',
    handles: [
      { title: 'Defective auto parts and tires', text: 'Tire tread separation, brake and steering failures, defective airbags, seat belts and restraint systems, and fuel system failures.' },
      { title: 'Dangerous machinery and tools', text: 'Industrial and power equipment with inadequate guarding, defective safety switches, or missing failure protections.' },
      { title: 'Defective consumer products', text: 'Household goods, appliances, furniture, recreational equipment and children\'s products that fail in normal use.' },
      { title: 'Pharmaceutical and medical device claims', text: 'Drugs and implanted devices causing injury through defect or inadequate warning of known risks.' },
      { title: 'Recalled products', text: 'Injuries from goods subject to a recall — before, during, or after the recall was issued.' },
      { title: 'Fires and explosions', text: 'Burns and property loss caused by defective batteries, heaters, wiring, fuel systems or gas appliances.' },
    ],
    processTitle: 'How We Build a Product Liability Case',
    processText: 'These cases turn on the product itself and on what the company knew.',
    steps: [
      { title: 'Identify the Defect & Liable Parties', text: 'We determine whether the failure was one of design, manufacturing or warning, and trace the chain of distribution from manufacturer and component supplier through distributor and retailer to find every party who may be answerable.' },
      { title: 'Preserve the Product as Evidence', text: 'We secure the product, its packaging, manual and purchase records under a documented chain of custody, and arrange engineering examination and testing before anything can be altered, repaired or lost.' },
      { title: 'Pursue Compensation', text: 'We assemble the technical case — expert analysis, comparable incident reports, recall history and internal documents obtained in discovery — and negotiate or, where necessary, litigate against manufacturers who defend these claims hard.' },
    ],
    ctaTitle: 'Injured by a Defective Product?',
    ctaText: `Keep the product and call ${P}. It is often the most important evidence in the case.`,
    related: ['catastrophic-injuries', 'insurance-claims'],
    faqs: [
      {
        q: 'What counts as a defective product claim?',
        a: `<p>Broadly, a claim exists where a product was unreasonably dangerous and that condition caused your injury while you were using it as intended or in a reasonably foreseeable way. The three standard theories are design defect (the product was dangerous as designed), manufacturing defect (this unit departed from the intended design), and failure to warn (the risk was not adequately disclosed).</p><p>A product that merely underperformed or broke without hurting anyone is usually a warranty matter, not an injury claim.</p>`,
      },
      {
        q: 'Do I need to keep the product itself?',
        a: `<p>Yes — this is the single most important thing you can do. Do not return it to the retailer, ship it back to the manufacturer for inspection or replacement, repair it, or discard it. Keep the packaging, instructions, labels and proof of purchase as well, and photograph everything as it currently sits.</p><p>Without the product, proving which defect caused the failure becomes dramatically harder, and manufacturers know it.</p>`,
      },
      {
        q: 'Who is responsible — the manufacturer or the store?',
        a: `<p>Potentially either, and often more than one party. Liability can extend along the chain of distribution: the manufacturer of the finished product, the maker of a defective component, the distributor, and in some circumstances the retailer.</p><p>This matters most when the manufacturer is overseas, out of business, or otherwise hard to reach. Naming every viable party protects your ability to actually recover rather than winning against a defendant who cannot pay.</p>`,
      },
      {
        q: 'What if the product was recalled?',
        a: `<p>A recall is useful evidence — it can help establish that the danger existed and that the company knew about it — but it is not automatically a decided case. You still must show the defect caused your injury, and a manufacturer will often argue the recall notice discharged its responsibility.</p><p>Importantly, you do not need a recall to bring a claim. Most defective products are never recalled at all.</p>`,
      },
      { q: 'How long do I have to file a product liability claim in Florida?', a: `${limitationsAnswer}<p>Product cases can also involve a separate statute of repose, which can cut off claims a set number of years after a product was delivered regardless of when the injury happened. Because these interact in complicated ways, have the dates reviewed early.</p>` },
      { q: 'What compensation is available in a product liability case?', a: `<p>Depending on the facts, a claim may cover medical expenses past and future, lost income and diminished earning capacity, pain and suffering, disfigurement, and property damage. Where a defect is fatal, surviving family members may bring a wrongful death claim.</p><p>Because defective product injuries are frequently severe — burns, amputations, brain injury — these claims often overlap with <a href="/personal-injury/catastrophic-injuries">catastrophic injury</a> claims and need the same long-term cost analysis.</p>` },
    ],
  },

  /* -------------------------------------------------------- insurance claims */
  {
    slug: 'insurance-claims',
    h1: 'Insurance Claim Attorney in Panama City, FL',
    title: 'Insurance Claim Lawyer in Panama City, FL | The Price Law Firm',
    description: `Claim denied, delayed or lowballed in Panama City, FL? We handle bad faith, PIP disputes and coverage fights with insurers. Free consultation — call ${P}.`,
    heroBadge: 'Denials, delays & lowball offers',
    heroLead: 'You paid the premiums for years. When the claim finally matters, a denial letter is not the end of the conversation.',
    introTitle: 'When the Insurance Company Will Not Pay',
    intro: [
      'Insurance is a promise that gets tested exactly once — at the moment you need it. And the arithmetic of the business is straightforward: every dollar not paid on your claim is a dollar retained. That does not make every adjuster dishonest, but it does explain a set of tactics that show up again and again.',
      'The patterns are recognizable. A quick offer arrives before anyone knows the true extent of the injury. The file goes quiet for weeks, then a new adjuster takes over and asks for documents you already sent. Liability is suddenly "disputed" on thin evidence. Your treatment is described as excessive, or your injury is attributed to a pre-existing condition pulled from records the authorization you signed let them obtain. Or the denial letter simply cites a policy exclusion in language designed not to be argued with.',
      'None of that is final. A denial is one company\'s position, and positions change when they are met with documentation, the policy language read carefully, and a credible willingness to litigate. Where an insurer\'s conduct crosses the line, Florida law also recognizes a bad faith claim — a distinct action arising from the insurer\'s failure to handle the claim fairly, separate from the underlying dispute.',
      `Florida\'s no-fault system adds its own layer: PIP coverage pays a portion of your medical bills regardless of fault, but carries strict conditions, including a requirement to seek initial treatment within fourteen days of the crash. If your claim has been denied, delayed, or answered with an offer that does not come close, call ${P}.`,
    ],
    handleTitle: 'Insurance Disputes We Handle',
    handleText: 'Fights with insurers over what your claim is worth and whether it is covered at all.',
    handles: [
      { title: 'Denied claims', text: 'Denials based on disputed liability, alleged policy exclusions, claimed late notice, or assertions that treatment was unnecessary.' },
      { title: 'Lowball settlement offers', text: 'Offers made before treatment is complete, or built on a valuation that ignores future care and lost earning capacity.' },
      { title: 'Bad faith insurance practices', text: 'Unreasonable delay, failure to investigate properly, misrepresenting policy terms, or refusing to settle within limits when liability is clear.' },
      { title: 'Coverage disputes', text: 'Disagreements over what the policy actually covers, which policy applies, stacking, and applicable limits.' },
      { title: 'PIP claims under Florida no-fault', text: 'Personal injury protection benefits — including the 14-day treatment requirement and disputes over emergency medical condition determinations.' },
      { title: 'UM/UIM claims', text: 'Claims against your own uninsured or underinsured motorist coverage, where your insurer effectively becomes the opposing party.' },
    ],
    processTitle: 'How We Handle an Insurance Dispute',
    processText: 'Read the policy, build the record, then push.',
    steps: [
      { title: 'Review the Denial or Offer', text: 'We obtain the complete policy and the claim file and work out what the insurer actually relied on — the specific exclusion, the valuation, or the factual assumption — because a denial letter often states a conclusion without the reasoning behind it.' },
      { title: 'Build the Counter-Case', text: 'We assemble the documentation the position cannot survive: complete medical records and treating-physician opinions, wage loss proof, liability evidence, and where needed independent expert review. Everything is submitted in writing and on the record.' },
      { title: 'Negotiate or Litigate', text: 'We present a documented demand and negotiate from evidence rather than argument. If the insurer holds an unreasonable line, we pursue the claim in court — including a bad faith claim where the conduct supports one.' },
    ],
    ctaTitle: 'Claim Denied or Underpaid?',
    ctaText: `A denial letter is a position, not a verdict. Call ${P} for a free review of where you stand.`,
    related: ['auto-accidents', 'trucking-accidents'],
    faqs: [
      {
        q: 'Why did the insurance company deny my claim?',
        a: `<p>Common stated reasons include disputed liability, a policy exclusion, late notice of the claim, an argument that treatment was not medically necessary or was excessive, an assertion that the injury is pre-existing, or a lapse or coverage gap in the policy.</p><p>The stated reason is not always the operative one, and it is not always correct. The first step is getting the complete policy and the claim file so the denial can be tested against the actual language and the actual evidence.</p>`,
      },
      {
        q: 'What is bad faith insurance practice?',
        a: `<p>In broad terms, bad faith arises when an insurer fails to handle a claim fairly and honestly — unreasonable delay, failure to conduct a proper investigation, misrepresenting policy provisions, or refusing to settle within policy limits where liability is clear and the exposure plainly exceeds those limits.</p><p>Florida law provides a statutory framework for these claims, including a required notice and cure period before suit. Bad faith is a distinct claim from the underlying dispute and depends heavily on the specific conduct involved, so it is worth having the claim file reviewed.</p>`,
      },
      {
        q: 'Should I accept the first settlement offer?',
        a: `<p>Rarely, and almost never before your treatment is finished. First offers are typically calculated against the bills received so far and frequently arrive before anyone knows whether an injury is permanent. Accepting means signing a release — if the problem worsens afterward, the claim is closed for good.</p><p>Have the offer reviewed before you respond. The consultation is free, and knowing whether a number is reasonable costs you nothing.</p>`,
      },
      {
        q: 'What is PIP coverage and how does it work in Florida?',
        a: `<p>Florida is a no-fault state. Personal injury protection coverage pays a portion of your medical expenses and certain lost wages after a crash regardless of who caused it, up to your policy's limit.</p><p>Two conditions catch people out. You generally must seek initial medical treatment within <strong>fourteen days</strong> of the crash or PIP benefits may be unavailable entirely. And the benefit level can depend on whether a qualified provider determines you had an emergency medical condition. PIP is also only a first layer — serious injuries typically require a claim against the at-fault driver beyond it.</p>`,
      },
      {
        q: 'Can I still get compensation if my claim was denied?',
        a: `<p>Often, yes. Denials are reversed regularly once the insurer is presented with complete documentation, a correct reading of the policy, and a claimant who is represented. Where the denial holds, the dispute can be pursued in court, and depending on the conduct there may be a separate bad faith claim.</p><p>What matters is not letting the deadline run while you appeal informally. Get the denial reviewed promptly.</p>`,
      },
      {
        q: 'Do I need an attorney to negotiate with an insurer?',
        a: `<p>Not legally — you are entitled to handle your own claim. Whether it is wise depends on what is at stake. For minor property damage, probably not. Where there are real injuries, ongoing treatment, disputed fault, or an offer you suspect is low, the imbalance is significant: the adjuster does this every day, has valuation software and a defense budget, and you do not.</p><p>Call ${P} and get a free assessment. If we think you are being treated fairly, we will tell you that.</p>`,
      },
    ],
  },

  /* ------------------------------------------------------ PFAS contamination */
  {
    slug: 'pfas-contamination',
    h1: 'PFAS Contamination Lawyer',
    title: 'PFAS Contamination Lawyer | The Price Law Firm',
    description: `Diagnosed with cancer after PFAS exposure in water, firefighting foam or consumer products? Free case evaluation with attorney Bill Price — call ${P}.`,
    heroBadge: 'Forever chemicals',
    heroLead: 'Many people never learn that their illness may be connected to the water they drank or the products they used. PFAS exposure claims are being pursued nationwide.',
    introTitle: 'The "Forever Chemicals" Problem',
    intro: [
      'PFAS — per- and polyfluoroalkyl substances — are a family of synthetic chemicals used since the 1940s to make products resistant to heat, grease, stains and water. They are called "forever chemicals" because they do not meaningfully break down in the environment or in the human body, and instead accumulate over time.',
      'They are also close to unavoidable. A 2023 United States Geological Survey study estimated that nearly half of the tap water in the United States may contain at least one PFAS compound. Beyond drinking water, exposure routes include AFFF firefighting foam, non-stick cookware, stain-resistant carpets and fabrics, food packaging, and some cosmetics.',
      'A growing body of scientific research has associated long-term PFAS exposure with several serious conditions, and litigation is now proceeding against the manufacturers who made and sold these chemicals — in many cases while holding internal research about their risks.',
      `An important point that surprises people: <strong>you do not need to have worked on a military base to have a claim.</strong> Firefighters, industrial workers, and residents of communities with contaminated municipal or well water may all be affected. If you have been diagnosed with one of the illnesses below and believe you were exposed, call ${P} for a free case evaluation.`,
    ],
    handleTitle: 'Illnesses Linked to PFAS Exposure',
    handleText: 'Research has associated PFAS exposure with the conditions below. A diagnosis does not by itself establish a claim — causation has to be evaluated on your facts.',
    handles: [
      { title: 'Kidney and testicular cancer', text: 'Among the conditions most consistently associated with PFAS exposure in published research.' },
      { title: 'Liver, bladder and pancreatic cancer', text: 'Cancers reported in studies of populations with elevated long-term PFAS exposure.' },
      { title: 'Thyroid cancer and thyroid disease', text: 'Including disruption of normal thyroid hormone function.' },
      { title: 'Blood cancers', text: 'Including leukemia and lymphoma reported in exposed populations.' },
      { title: 'Ulcerative colitis', text: 'An inflammatory bowel condition associated with PFAS exposure in research literature.' },
      { title: 'Preeclampsia and low birth weight', text: 'Pregnancy complications reported in studies of women with elevated PFAS levels.' },
    ],
    processTitle: 'How a PFAS Claim Is Built',
    processText: 'These cases turn on establishing exposure and connecting it to a diagnosis.',
    steps: [
      { title: 'Establish Your Exposure', text: 'We identify how and where you were exposed — municipal or well water at a specific address, occupational contact with AFFF firefighting foam, or industrial use — and gather the records, water testing data and work history that document it.' },
      { title: 'Connect Exposure to Diagnosis', text: 'We collect your complete medical records and work with medical experts to evaluate whether your diagnosis fits the conditions research has associated with PFAS, and whether the timing and level of exposure support the connection.' },
      { title: 'Pursue the Manufacturers', text: 'Claims are brought against the chemical manufacturers and other responsible parties, often within coordinated multi-district litigation. We handle the filing, the evidentiary requirements and the negotiation.' },
    ],
    ctaTitle: 'Diagnosed After PFAS Exposure?',
    ctaText: `The evaluation is free and you pay nothing unless we recover for you. Call ${P}.`,
    related: ['product-liability', 'catastrophic-injuries'],
    faqs: [
      {
        q: 'What are PFAS, and why are they called forever chemicals?',
        a: `<p>PFAS are a large family of manufactured chemicals used since the 1940s to make products repel water, grease, heat and stains. The carbon-fluorine bond that makes them so effective also makes them extraordinarily persistent — they do not meaningfully degrade in the environment or in the body, which is why they are commonly called "forever chemicals."</p><p>Because they accumulate, exposure that happened years ago can still be relevant today.</p>`,
      },
      {
        q: 'Do I need to have worked on a military base to qualify?',
        a: `<p>No. That is a common misunderstanding. Military firefighting training sites are well-known contamination sources because of AFFF foam, but they are far from the only route.</p><p>Municipal water supplies, private wells near industrial or airport sites, civilian firefighting, and certain manufacturing jobs are all potential exposure pathways. Residents of affected communities may have claims without any military connection at all.</p>`,
      },
      {
        q: 'Which illnesses are associated with PFAS exposure?',
        a: `<p>Published research has associated PFAS exposure with kidney and testicular cancer, liver, bladder, pancreatic and thyroid cancers, blood cancers, thyroid disease, ulcerative colitis, and pregnancy complications including preeclampsia and low birth weight.</p><p>Association is not the same as proof of causation in an individual case. Whether your diagnosis supports a claim depends on your exposure history, the timing, and the medical evidence — which is what an evaluation is for.</p>`,
      },
      {
        q: 'How would I know if I was exposed?',
        a: `<p>Often you would not, which is the heart of the problem. Useful starting points are where you have lived and whether that water system has been tested for PFAS, whether you worked in firefighting, aviation, manufacturing or chemical processing, and whether you lived near a military installation, airport, industrial plant or landfill.</p><p>Part of our work is establishing exposure from water testing data, employment records and site histories — you are not expected to prove it yourself before calling.</p>`,
      },
      {
        q: 'How long do I have to bring a PFAS claim?',
        a: `<p>Deadlines in these cases are complicated. They can turn on when you were diagnosed and when you reasonably should have connected the illness to an exposure, rather than simply when the exposure occurred — and different states apply different rules.</p><p>Because the analysis is genuinely fact-specific and the consequence of waiting is losing the claim entirely, do not try to work this out from a website. Call ${P} and have your dates reviewed.</p>`,
      },
      {
        q: 'What does it cost to have my case evaluated?',
        a: `<p>Nothing. The case evaluation is free, and PFAS claims are handled on a contingency basis — you pay no attorney's fee unless compensation is recovered for you.</p>`,
      },
    ],
  },
];
