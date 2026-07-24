import type { NicheConfig } from './types';

// Electrician — the first demo niche.
// Every piece of content is realistic and specific.
// To rebrand: swap this object and update the accent CSS vars.

const electricianAccent = {
  name: 'Electric Yellow',
  scale: {
    50: '254 252 232',
    100: '254 249 195',
    200: '252 244 144',
    300: '251 236 86',
    400: '248 222 43',
    500: '234 179 8',
    600: '202 138 4',
    700: '161 98 7',
    800: '133 77 14',
    900: '113 64 22',
    950: '67 27 2',
  },
  cssVar: 'electric',
};

export const electrician: NicheConfig = {
  niche: 'electrician',
  accent: electricianAccent,
  business: {
    name: 'Voltaire Electric',
    shortName: 'Voltaire',
    tagline: 'Master electricians for considered homes and businesses.',
    establishedYear: 2009,
    description:
      'A licensed master-electrician firm serving New York City since 2009. We design, upgrade, and maintain electrical systems for homes and commercial spaces where craftsmanship and code matter equally.',
    story: [
      'Voltaire Electric began in 2009 with a single truck and a conviction that electrical work deserved the same rigor as architecture. Founded by Marcus Voltaire, a third-generation electrician trained in both New York and Berlin, the firm has grown into a team of fourteen master electricians and apprentices.',
      'We work on the buildings other electricians turn down — landmarked brownstones with knob-and-tube remnants, commercial fit-outs with impossible deadlines, and homes where the panel has been asked to do more than it ever should.',
      'Every project is documented, every panel labeled, every junction accessible. We leave spaces cleaner than we found them and systems safer than we found them. That is the standard.',
    ],
  },
  hero: {
    eyebrow: 'Licensed Master Electricians · NYC',
    headline: 'Power, designed with intent.',
    headlineLines: ['Power, designed with', 'intent.'],
    subheadline:
      'We plan, upgrade, and refine electrical systems for homes and businesses that expect more than a working outlet — they expect a system built to last thirty years.',
    primaryCta: { label: 'Request a consultation', to: '/contact' },
    secondaryCta: { label: 'View our work', to: '/projects' },
    image: '/images/electrician-cutout.webp',
    trustBadges: [
      { label: 'Licensed', value: 'Master Electrician #1238' },
      { label: 'Established', value: '2009' },
      { label: 'Response', value: '24/7 emergency' },
      { label: 'Coverage', value: 'Manhattan & Brooklyn' },
    ],
  },
  navigation: [
    { label: 'Services', to: '/services' },
    { label: 'Projects', to: '/projects' },
    { label: 'About', to: '/about' },
    { label: 'Service Areas', to: '/service-areas' },
    { label: 'Contact', to: '/contact' },
  ],
  services: [
    {
      slug: 'panel-upgrades',
      title: 'Panel Upgrades & Service Replacements',
      shortTitle: 'Panel Upgrades',
      tagline: 'Bring your electrical panel up to modern demand.',
      icon: 'gauge',
      excerpt:
        'Replace outdated 100-amp panels with correctly sized 200-amp service, modern breakers, and surge protection. The foundation every safe home is built on.',
      overview:
        'Most homes built before 1990 were wired for a fraction of what modern life demands. Air conditioning, EV chargers, heat pumps, induction ranges, and home offices have outpaced what a 100-amp panel was ever designed to deliver. We assess your current and future load, size the service correctly, coordinate with Con Edison on the utility side, and install a panel that will carry the next thirty years without complaint.',
      benefits: [
        { title: 'Correct load sizing', description: 'We calculate actual demand against future expansion — not a one-size-fits-all upgrade.' },
        { title: 'Code-compliant installation', description: 'Every panel is installed to current NEC and NYC Electrical Code, fully permitted and inspected.' },
        { title: 'Whole-home surge protection', description: 'Surge protection is built into the panel, guarding every circuit from utility and lightning transients.' },
        { title: 'Labeled and documented', description: 'Every circuit is mapped, labeled, and documented in a panel schedule you keep.' },
      ],
      process: [
        { step: '01', title: 'Load assessment', description: 'We inventory every circuit and appliance, then model current and projected demand.' },
        { step: '02', title: 'Permit and utility coordination', description: 'We file the electrical permit and coordinate the service upgrade with Con Edison.' },
        { step: '03', title: 'Panel installation', description: 'Old panel is decommissioned, new service is landed, and every circuit is re-terminated and labeled.' },
        { step: '04', title: 'Inspection and sign-off', description: 'City inspection, utility sign-off, and a documented panel schedule delivered to you.' },
      ],
      faqs: [
        { question: 'How do I know if I need a panel upgrade?', answer: 'If your panel is 100 amps or less, you trip breakers regularly, or you are adding an EV charger, heat pump, or addition, you likely need an upgrade. We assess this during the consultation.' },
        { question: 'How long does a panel upgrade take?', answer: 'A standard 200-amp residential upgrade takes one to two days on-site, with permit filing and utility coordination adding two to four weeks of lead time.' },
        { question: 'Will my power be off?', answer: 'Power is interrupted for a controlled window of four to eight hours during the cutover. We schedule this with you in advance and work efficiently to minimize downtime.' },
      ],
      gallery: [
        'https://images.pexels.com/photos/8004570/pexels-photo-8004570.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/8004558/pexels-photo-8004558.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      relatedProjectSlugs: ['park-slope-brownstone-rewire', 'tribeca-loft-service-upgrade'],
      startingPrice: 'from $3,800',
    },
    {
      slug: 'ev-charger-installation',
      title: 'EV Charger Installation',
      shortTitle: 'EV Charging',
      tagline: 'Home charging, installed to the standard the car deserves.',
      icon: 'car',
      excerpt:
        'Level 2 charging stations hardwired and rated for your panel — Tesla Wall Connectors, ChargePoint Home Flex, and Wallbox units installed clean, permitted, and ready.',
      overview:
        'A home charger is the difference between owning an EV and enjoying one. We install Level 2 charging stations from every major manufacturer, sized correctly for your panel and circuit capacity. Whether you need a single Tesla Wall Connector in a private garage or a four-station Wallbox setup for a brownstone with two daily drivers, we handle the load calculation, the circuit, the hardwire, and the permit.',
      benefits: [
        { title: 'Correct circuit sizing', description: 'We size the dedicated circuit to your panel capacity and the charger specification — no overloaded breakers.' },
        { title: 'All major brands', description: 'Tesla Wall Connector, ChargePoint Home Flex, Wallbox Pulsar, Grizzl-E, and JuiceBox — we install them all.' },
        { title: 'Clean, concealed runs', description: 'Conduit and cable runs are routed neatly and concealed where possible. No surface-mounted cobbling.' },
        { title: 'Permit and inspection', description: 'Every installation is permitted and inspected. You receive documentation for insurance and resale.' },
      ],
      process: [
        { step: '01', title: 'Panel and site assessment', description: 'We confirm panel capacity, charging location, and the cleanest cable route.' },
        { step: '02', title: 'Charger selection', description: 'We help you select the right unit for your vehicle, panel, and charging speed goals.' },
        { step: '03', title: 'Dedicated circuit install', description: 'A dedicated 40- or 60-amp circuit is run, the charger is hardwired, and the unit is mounted.' },
        { step: '04', title: 'Permit closeout', description: 'Permit is filed, inspection is scheduled, and you receive the closed permit and warranty paperwork.' },
      ],
      faqs: [
        { question: 'Can my panel support an EV charger?', answer: 'Many 200-amp panels can, but it depends on your existing load. We perform a load calculation during the consultation. If your panel cannot support it, we will recommend a panel upgrade or a load management device.' },
        { question: 'How fast will it charge?', answer: 'A 48-amp Level 2 charger on a 60-amp circuit adds roughly 35 to 40 miles of range per hour — enough to fully recharge most EVs overnight.' },
        { question: 'Can I use a 240V outlet instead of hardwiring?', answer: 'You can, but hardwiring is safer, more efficient, and required by some jurisdictions and manufacturers. We recommend hardwiring for permanent installations.' },
      ],
      gallery: [
        'https://images.pexels.com/photos/27355833/pexels-photo-27355833.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3765334/pexels-photo-3765334.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1592374/pexels-photo-1592374.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      relatedProjectSlugs: ['west-village-tesla-garage'],
      startingPrice: 'from $1,450',
    },
    {
      slug: 'lighting-design',
      title: 'Architectural Lighting Design & Installation',
      shortTitle: 'Lighting Design',
      tagline: 'Lighting that shapes how a space feels.',
      icon: 'lightbulb',
      excerpt:
        'Recessed layouts, layered lighting plans, dimming systems, and statement fixtures — engineered for the architecture and the way you actually live in a room.',
      overview:
        'Good lighting is invisible. Great lighting is architectural. We design layered lighting plans that combine ambient, task, and accent light to give a room depth and flexibility. From recessed downlight layouts that respect ceiling joists to dimming systems that remember four scenes, we install lighting the way an architect would specify it — not the way a contractor would guess at it.',
      benefits: [
        { title: 'Layered lighting plans', description: 'Ambient, task, and accent light designed together so a room works at every hour and every mood.' },
        { title: 'Dimming and scene control', description: '0-10V and TRIAC dimming systems with programmable scenes — movie night, dinner, morning, away.' },
        { title: 'Fixture specification', description: 'We help source fixtures that pair aesthetically with your space and electrically with your dimming system.' },
        { title: 'Architectural integration', description: 'Recessed layouts are planned around joist direction and structure — never random grids.' },
      ],
      process: [
        { step: '01', title: 'Lighting consultation', description: 'We walk the space, discuss how you use each room, and review any architect or designer plans.' },
        { step: '02', title: 'Lighting plan', description: 'We produce a fixture layout, switching plan, and dimming specification for your space.' },
        { step: '03', title: 'Rough-in and trim', description: 'Wiring is roughed-in during construction, then fixtures and controls are trimmed out at finish.' },
        { step: '04', title: 'Programming and balancing', description: 'Dimmers are programmed, scenes are set, and light levels are balanced across the space.' },
      ],
      faqs: [
        { question: 'Do you work with my interior designer or architect?', answer: 'Yes. We collaborate with design professionals regularly and can execute their lighting plans or develop one from scratch. We speak both trades.' },
        { question: 'Can you dim LED fixtures?', answer: 'Most modern LEDs are dimmable, but dimming performance depends on matching the fixture, dimmer, and control type. We specify compatible combinations to avoid flicker and pop-on.' },
        { question: 'Do you supply the fixtures?', answer: 'We can supply fixtures through our trade accounts, or install fixtures you have sourced. Either way, we confirm dimming compatibility before installation.' },
      ],
      gallery: [
        'https://images.pexels.com/photos/15409477/pexels-photo-15409477.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/16249144/pexels-photo-16249144.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/18039878/pexels-photo-18039878.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      relatedProjectSlugs: ['park-slope-brownstone-rewire', 'midtown-restaurant-refit'],
      startingPrice: 'from $2,200',
    },
    {
      slug: 'smart-home-automation',
      title: 'Smart Home & Automation Systems',
      shortTitle: 'Smart Home',
      tagline: 'A home that responds without making you learn a manual.',
      icon: 'cpu',
      excerpt:
        'Lutron RadioRA 3, Control4, and Apple HomeKit systems — lighting, shades, climate, and security integrated into controls that feel effortless.',
      overview:
        'A smart home should reduce friction, not add it. We design and install automation systems that control lighting, motorized shades, climate, and security from elegant wall keypads, voice, or a single app — not a dozen. We are certified Lutron RadioRA 3 and Control4 dealers, and we integrate with Apple HomeKit for households that prefer the Apple ecosystem.',
      benefits: [
        { title: 'Lutron RadioRA 3 certified', description: 'We design and install the industry standard in wireless lighting and shade control.' },
        { title: 'Whole-home integration', description: 'Lighting, shades, climate, and security unified under one system with consistent control.' },
        { title: 'Elegant keypads', description: 'Architectural keypads from Lutron and Vantage replace banks of switches with a single, beautiful control.' },
        { title: 'Reliable infrastructure', description: 'Robust networking and proper device placement — the difference between a smart home and a finicky one.' },
      ],
      process: [
        { step: '01', title: 'System design', description: 'We map every room, device, and control point, then specify the platform and infrastructure.' },
        { step: '02', title: 'Infrastructure', description: 'Networking, low-voltage wiring, and control points are installed during construction or retrofit.' },
        { step: '03', title: 'Device installation', description: 'Keypads, dimmers, shades, and sensors are installed and connected to the central controller.' },
        { step: '04', title: 'Programming and handoff', description: 'Scenes, schedules, and automations are programmed. We walk you through every control.' },
      ],
      faqs: [
        { question: 'Lutron, Control4, or HomeKit — which should I choose?', answer: 'It depends on your home size, aesthetic priorities, and ecosystem preference. We design for all three and recommend the right fit during consultation.' },
        { question: 'Can this be installed in an existing home?', answer: 'Yes. Lutron RadioRA 3 is wireless and ideal for retrofit. Control4 and HomeKit can also be added without full rewiring. We assess what is feasible on-site.' },
        { question: 'What happens if the internet goes down?', answer: 'Core lighting and shade control operate locally and continue to work without internet. Cloud-dependent features like remote access pause until connectivity returns.' },
      ],
      gallery: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/3933252/pexels-photo-3933252.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      relatedProjectSlugs: ['ues-penthouse-automation'],
      startingPrice: 'from $4,500',
    },
    {
      slug: 'commercial-electrical',
      title: 'Commercial & Tenant Fit-Out',
      shortTitle: 'Commercial',
      tagline: 'Electrical systems for spaces that cannot afford downtime.',
      icon: 'building',
      excerpt:
        'Office build-outs, retail fit-outs, and restaurant electrical — engineered to schedule, permitted, and inspected without holding up your opening.',
      overview:
        'Commercial electrical work is a different discipline. The schedule is unforgiving, the code is stricter, and the systems are more complex. We have wired offices in Midtown, restaurants in the West Village, and retail fit-outs in SoHo — always coordinated with GCs, architects, and the Department of Buildings, and always closed out with a green-tag inspection.',
      benefits: [
        { title: 'Schedule-driven delivery', description: 'We coordinate with your GC and trades to hit milestones. Your opening date is our constraint.' },
        { title: 'Full permitting and filing', description: 'We file the electrical permit, manage DOB sign-off, and deliver the closed permit set.' },
        { title: 'Power and data coordination', description: 'Receptacle layouts, dedicated circuits, and data drops coordinated with your IT and furniture plans.' },
        { title: 'Life safety systems', description: 'Emergency lighting, exit signs, and fire alarm interfaces installed to commercial code.' },
      ],
      process: [
        { step: '01', title: 'Scope and schedule', description: 'We review drawings, confirm scope, and commit to a schedule that matches your build-out timeline.' },
        { step: '02', title: 'Permit filing', description: 'We file the electrical permit and coordinate with the DOB and utility.' },
        { step: '03', title: 'Rough-in and trim', description: 'Wiring is roughed-in behind walls and ceilings, then trimmed out with devices and fixtures.' },
        { step: '04', title: 'Inspection and closeout', description: 'Inspection is passed, the permit is closed, and you receive the closed permit and as-built documentation.' },
      ],
      faqs: [
        { question: 'Can you work nights and weekends?', answer: 'Yes. For occupied commercial spaces we schedule off-hours work to avoid disruption. This is common for retail and restaurant fit-outs.' },
        { question: 'Do you work with our general contractor?', answer: 'We work as a subcontractor under your GC regularly, or direct with the tenant. We coordinate closely with all trades.' },
        { question: 'How large a project can you take on?', answer: 'We handle fit-outs up to roughly 10,000 square feet. For larger projects we partner with a commercial firm we trust.' },
      ],
      gallery: [
        'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      relatedProjectSlugs: ['midtown-restaurant-refit', 'dumbo-office-buildout'],
      startingPrice: 'custom quote',
    },
    {
      slug: 'emergency-service',
      title: '24/7 Emergency Electrical Service',
      shortTitle: 'Emergency',
      tagline: 'When the power fails, we answer.',
      icon: 'phone',
      excerpt:
        'Outlets dead, breaker tripping repeatedly, burning smell, or no power at all — a master electrician is on call every hour of every day.',
      overview:
        'Electrical emergencies do not keep business hours. A failed panel at midnight, a tripping breaker before a holiday, a burning smell behind a wall — these cannot wait until Monday. We maintain a 24/7 emergency line answered directly by a master electrician, with a truck dispatched within the hour across Manhattan and Brooklyn.',
      benefits: [
        { title: 'Live master electrician', description: 'You speak with a master electrician, not a dispatcher. Triage begins on the call.' },
        { title: 'Hour response in NYC', description: 'A truck is dispatched within the hour across Manhattan and Brooklyn, day or night.' },
        { title: 'Safety first', description: 'We isolate the hazard before anything else. If there is an active risk, we tell you exactly what to do while we are en route.' },
        { title: 'Documented for insurance', description: 'Every emergency call is documented with cause, remedy, and photos — ready for an insurance claim if needed.' },
      ],
      process: [
        { step: '01', title: 'Call and triage', description: 'A master electrician answers, assesses the risk, and gives you immediate safety guidance.' },
        { step: '02', title: 'Dispatch', description: 'A truck is dispatched within the hour with the parts most likely needed.' },
        { step: '03', title: 'Stabilize', description: 'We isolate the fault, restore safe power where possible, and document the cause.' },
        { step: '04', title: 'Permanent repair', description: 'We schedule the permanent repair and provide a written scope and estimate.' },
      ],
      faqs: [
        { question: 'What counts as an emergency?', answer: 'No power, repeated breaker tripping, burning smell, sparking, hot outlets or switches, or water in your panel. If you are unsure, call — we would rather triage a false alarm than miss a fire risk.' },
        { question: 'What does emergency service cost?', answer: 'Emergency calls carry an after-hours rate plus labor and parts. We provide a clear estimate before any work begins, once we have assessed the situation on-site.' },
        { question: 'Do you cover all of NYC?', answer: 'We cover Manhattan and Brooklyn around the clock. For Queens, the Bronx, and Staten Island we respond during business hours and refer to a trusted partner after hours.' },
      ],
      gallery: [
        'https://images.pexels.com/photos/8004558/pexels-photo-8004558.jpeg?auto=compress&cs=tinysrgb&w=1200',
        'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=1200',
      ],
      relatedProjectSlugs: [],
      startingPrice: 'after-hours rate',
    },
  ],
  projects: [
    {
      slug: 'park-slope-brownstone-rewire',
      title: 'Park Slope Brownstone Complete Rewire',
      location: 'Park Slope, Brooklyn',
      neighborhood: 'Park Slope',
      category: 'Residential',
      year: '2024',
      timeline: '6 weeks',
      challenge:
        'A 1898 four-story brownstone with original knob-and-tube wiring still live in the walls, a 60-amp service that tripped whenever the central air cycled, and a family of five who needed to remain in the home throughout the project.',
      solution:
        'We performed a phased rewire, floor by floor, over six weeks. A new 200-amp service was landed with Con Edison, the knob-and-tube was fully decommissioned and removed, and a new home-run topology was run through existing chases to minimize plaster damage. Each floor was returned to livable condition before the next was started.',
      before:
        '60-amp service, original 1898 knob-and-tube wiring, no grounding, frequent breaker trips, no capacity for air conditioning or modern appliances.',
      after:
        '200-amp service with whole-home surge protection, fully grounded NM cable throughout, dedicated circuits for kitchen and laundry, a 48-amp EV charger in the rear garage, and a Lutron RadioRA 3 lighting system across all four floors.',
      cover:
        'https://images.pexels.com/photos/6538943/pexels-photo-6538943.jpeg?auto=compress&cs=tinysrgb&w=1600',
      gallery: [
        'https://images.pexels.com/photos/6538943/pexels-photo-6538943.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/6538897/pexels-photo-6538897.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/534220/pexels-photo-534220.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
      ],
      results: [
        { label: 'Service capacity', value: '60A → 200A' },
        { label: 'Wiring removed', value: '1,400 ft knob-and-tube' },
        { label: 'Project length', value: '6 weeks' },
        { label: 'Floors rewired', value: '4' },
      ],
      clientQuote: {
        quote:
          'They rewired our entire brownstone while we lived in it and somehow kept every floor livable in turn. The panel schedule they left us is more organized than anything I have ever seen in a home.',
        name: 'Eleanor Voss',
        role: 'Homeowner, Park Slope',
      },
      serviceSlug: 'panel-upgrades',
    },
    {
      slug: 'tribeca-loft-service-upgrade',
      title: 'Tribeca Cast-Iron Loft Service Upgrade',
      location: 'Tribeca, Manhattan',
      neighborhood: 'Tribeca',
      category: 'Residential',
      year: '2023',
      timeline: '3 weeks',
      challenge:
        'A landmarked cast-iron building with a 100-amp service straining under a new heat pump, induction range, and two daily EV drivers sharing a single garage circuit. The building required a landmarked-facade permit for the service entry.',
      solution:
        'We upgraded to 320-amp service with a split-bus panel, ran a dedicated 60-amp circuit to a dual Wallbox Pulsar Plus setup in the garage, and coordinated the landmarked-facade permit through the LPC. The service entry was routed through an existing chase to avoid any alteration to the cast-iron facade.',
      before:
        '100-amp service, shared garage circuit, breaker trips when both EVs charged simultaneously, no headroom for the new heat pump.',
      after:
        '320-amp split-bus service, dual 48-amp EV charging, dedicated heat pump circuit, whole-home surge protection, and a sub-panel for future loft expansion.',
      cover:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
      gallery: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/8004570/pexels-photo-8004570.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/3765334/pexels-photo-3765334.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/27355833/pexels-photo-27355833.jpeg?auto=compress&cs=tinysrgb&w=1600',
      ],
      results: [
        { label: 'Service capacity', value: '100A → 320A' },
        { label: 'EV chargers', value: '2 × 48A' },
        { label: 'Permit type', value: 'LPC landmarked' },
        { label: 'Facade alterations', value: '0' },
      ],
      clientQuote: {
        quote:
          'Two EVs, a heat pump, and an induction range on a 100-amp service in a landmarked building — every other electrician said it could not be done. Voltaire did it in three weeks and you would never know they were here.',
        name: 'David Kestrel',
        role: 'Loft owner, Tribeca',
      },
      serviceSlug: 'panel-upgrades',
    },
    {
      slug: 'west-village-tesla-garage',
      title: 'West Village Townhouse Tesla Garage',
      location: 'West Village, Manhattan',
      neighborhood: 'West Village',
      category: 'Residential',
      year: '2024',
      timeline: '2 days',
      challenge:
        'A narrow curbside garage with a 100-amp sub-panel, no dedicated circuit available, and a homeowner who wanted to charge a Tesla Model S and a Rivian R1S overnight from the same wall.',
      solution:
        'We installed a Tesla Wall Connector and a Wallbox Pulsar Plus on a shared 60-amp circuit with Wallbox power sharing, allowing both vehicles to charge simultaneously at a dynamically balanced 30 amps each, or one at the full 48 amps.',
      before:
        'No charging infrastructure, 100-amp sub-panel with no spare capacity, single garage bay.',
      after:
        'Dual Level 2 charging with intelligent load sharing, dedicated 60-amp circuit, concealed conduit run, and a clean wall-mounted installation that left the bay fully usable.',
      cover:
        'https://images.pexels.com/photos/27355833/pexels-photo-27355833.jpeg?auto=compress&cs=tinysrgb&w=1600',
      gallery: [
        'https://images.pexels.com/photos/27355833/pexels-photo-27355833.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/3765334/pexels-photo-3765334.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/1592374/pexels-photo-1592374.jpeg?auto=compress&cs=tinysrgb&w=1600',
      ],
      results: [
        { label: 'Charging stations', value: '2' },
        { label: 'Shared circuit', value: '60A intelligent' },
        { label: 'Install time', value: '2 days' },
        { label: 'Range per hour', value: '35 mi each' },
      ],
      clientQuote: {
        quote:
          'They figured out how to charge two EVs from a sub-panel that should not have been able to support it. The power sharing just works — I never think about it.',
        name: 'Sarah Miren',
        role: 'Homeowner, West Village',
      },
      serviceSlug: 'ev-charger-installation',
    },
    {
      slug: 'ues-penthouse-automation',
      title: 'Upper East Side Penthouse Automation',
      location: 'Upper East Side, Manhattan',
      neighborhood: 'Upper East Side',
      category: 'Smart Home',
      year: '2024',
      timeline: '4 weeks',
      challenge:
        'A 3,200-square-foot penthouse with floor-to-ceiling windows, motorized shades specified by the interior designer, and an owner who wanted lighting and shade control from elegant keypads — not a phone app as the primary interface.',
      solution:
        'We installed a Lutron RadioRA 3 system with 14 seeTouch keypads, six Sivoia QS roller shades, and integration with the existing Crestron climate system. Eight lighting scenes were programmed — morning, day, evening, dinner, movie, entertaining, away, and all off — each accessible from any keypad.',
      before:
        'Banks of five to seven switches per room, no shade control, no scenes, lighting operated one fixture at a time.',
      after:
        'Single architectural keypad per room, eight programmed scenes, motorized shades integrated with lighting, and HomeKit access for remote control.',
      cover:
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
      gallery: [
        'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/3933252/pexels-photo-3933252.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1600',
      ],
      results: [
        { label: 'Keypads installed', value: '14' },
        { label: 'Shades automated', value: '6' },
        { label: 'Lighting scenes', value: '8' },
        { label: 'Switches eliminated', value: '47' },
      ],
      clientQuote: {
        quote:
          'The designer told me it would look like a hotel and she was right. One keypad replaces what used to be six switches, and every room has the exact light it needs at the exact hour.',
        name: 'Richard Hale',
        role: 'Penthouse owner, Upper East Side',
      },
      serviceSlug: 'smart-home-automation',
    },
    {
      slug: 'midtown-restaurant-refit',
      title: 'Midtown Restaurant Electrical Refit',
      location: 'Midtown, Manhattan',
      neighborhood: 'Midtown',
      category: 'Commercial',
      year: '2023',
      timeline: '5 nights',
      challenge:
        'A 120-seat restaurant opening in four weeks with an electrical system designed for a retail tenant, a kitchen pulling 180 amps of dedicated load, and an owner who could not lose a single service day during construction.',
      solution:
        'We worked five consecutive overnights, installing a 400-amp three-phase service upgrade, dedicated kitchen circuits, a lighting layout with twelve dimmable zones, and life safety systems. The electrical inspection passed on the first submission and the restaurant opened on schedule.',
      before:
        'Retail-grade 200-amp single-phase service, no kitchen capacity, no dedicated circuits, no lighting control, no life safety integration.',
      after:
        '400-amp three-phase service, twelve dedicated kitchen circuits, twelve-zone dimmable lighting, emergency lighting and exit signs, and a fully permitted and inspected electrical system.',
      cover:
        'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1600',
      gallery: [
        'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/260932/pexels-photo-260932.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/261047/pexels-photo-261047.jpeg?auto=compress&cs=tinysrgb&w=1600',
      ],
      results: [
        { label: 'Service upgrade', value: '200A → 400A 3-phase' },
        { label: 'Kitchen circuits', value: '12 dedicated' },
        { label: 'Lighting zones', value: '12 dimmable' },
        { label: 'Service days lost', value: '0' },
      ],
      clientQuote: {
        quote:
          'They wired our entire restaurant in five overnights and we never closed for a single service. The inspection passed first time and we opened on the date we promised our landlord.',
        name: 'Marco Bianchi',
        role: 'Owner, Midtown restaurant',
      },
      serviceSlug: 'commercial-electrical',
    },
    {
      slug: 'dumbo-office-buildout',
      title: 'DUMBO Office Build-Out',
      location: 'DUMBO, Brooklyn',
      neighborhood: 'DUMBO',
      category: 'Commercial',
      year: '2024',
      timeline: '4 weeks',
      challenge:
        'An 8,000-square-foot open-plan office with exposed ceilings, a 40-person team moving in five weeks, and an IT infrastructure requiring 120 data drops, dedicated server circuits, and a conference-room AV backbone.',
      solution:
        'We ran all power and data in exposed, painted conduit to preserve the industrial aesthetic, installed a dedicated server room with a 60-amp UPS-backed circuit, and wired six conference rooms with AV and lighting control. The build-out was completed and inspected in four weeks.',
      before:
        'Raw concrete shell, no electrical infrastructure, no data, no lighting, no server capacity.',
      after:
        '120 data drops, dedicated server room with UPS, six conference rooms with AV and lighting control, and exposed conduit runs painted to match the structure.',
      cover:
        'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1600',
      gallery: [
        'https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=1600',
        'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1600',
      ],
      results: [
        { label: 'Data drops', value: '120' },
        { label: 'Conference rooms', value: '6' },
        { label: 'Server circuits', value: '60A UPS-backed' },
        { label: 'Build-out time', value: '4 weeks' },
      ],
      clientQuote: {
        quote:
          'The exposed conduit was a design feature, not a compromise. They ran it so cleanly that our architect photographed it for her portfolio.',
        name: 'Lena Park',
        role: 'Operations lead, DUMBO office',
      },
      serviceSlug: 'commercial-electrical',
    },
  ],
  testimonials: [
    {
      name: 'Eleanor Voss',
      role: 'Homeowner',
      location: 'Park Slope, Brooklyn',
      quote:
        'They rewired our 1898 brownstone while we lived in it and kept every floor livable in turn. The panel schedule they left is more organized than anything I have seen in a home.',
      rating: 5,
    },
    {
      name: 'David Kestrel',
      role: 'Loft owner',
      location: 'Tribeca, Manhattan',
      quote:
        'Every other electrician said a 320-amp service in a landmarked building could not be done. Voltaire did it in three weeks and you would never know they were here.',
      rating: 5,
    },
    {
      name: 'Sarah Miren',
      role: 'Homeowner',
      location: 'West Village, Manhattan',
      quote:
        'They figured out how to charge two EVs from a sub-panel that should not have supported it. The power sharing just works — I never think about it.',
      rating: 5,
    },
    {
      name: 'Richard Hale',
      role: 'Penthouse owner',
      location: 'Upper East Side, Manhattan',
      quote:
        'The designer told me it would look like a hotel and she was right. One keypad replaces what used to be six switches, and every room has the exact light it needs.',
      rating: 5,
    },
    {
      name: 'Marco Bianchi',
      role: 'Restaurant owner',
      location: 'Midtown, Manhattan',
      quote:
        'They wired our entire restaurant in five overnights and we never closed a single service. Inspection passed first time and we opened on the date we promised.',
      rating: 5,
    },
    {
      name: 'Lena Park',
      role: 'Operations lead',
      location: 'DUMBO, Brooklyn',
      quote:
        'The exposed conduit was a design feature, not a compromise. They ran it so cleanly that our architect photographed it for her portfolio.',
      rating: 5,
    },
  ],
  faqs: [
    {
      question: 'Are you licensed and insured?',
      answer:
        'Yes. We hold New York Master Electrician License #1238, carry $2M general liability and $1M workers compensation, and every electrician on our team is licensed or a registered apprentice under a master electrician.',
    },
    {
      question: 'Do you provide free estimates?',
      answer:
        'Consultations are free for projects over $1,000. For smaller repairs we charge a diagnostic fee that is credited toward the work if you proceed. Every estimate is written and itemized.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'Manhattan and Brooklyn for all services, with 24/7 emergency coverage. We take on larger projects in Queens and the Bronx by arrangement.',
    },
    {
      question: 'Do you handle permits and inspections?',
      answer:
        'Always. We file every permit, coordinate with Con Edison and the DOB where required, and schedule the inspection. You receive the closed permit and documentation.',
    },
    {
      question: 'Do you warranty your work?',
      answer:
        'All workmanship is warrantied for five years. Manufacturer warranties on panels, chargers, and fixtures are passed through in full, and we handle any warranty claim on your behalf.',
    },
    {
      question: 'Can you work with my architect or interior designer?',
      answer:
        'We collaborate with design professionals on most of our projects. We can execute their specifications or develop electrical and lighting plans from scratch.',
    },
  ],
  process: [
    {
      step: '01',
      title: 'Consultation',
      description:
        'A master electrician visits your property, listens to what you need, and assesses the existing system. No salesperson, no guesswork.',
    },
    {
      step: '02',
      title: 'Written scope and estimate',
      description:
        'You receive an itemized scope of work, a fixed estimate, and a timeline — typically within 48 hours of the consultation.',
    },
    {
      step: '03',
      title: 'Permit and scheduling',
      description:
        'We file the permit, coordinate with the utility, and schedule the work around your life. You receive a clear start date and a single point of contact.',
    },
    {
      step: '04',
      title: 'Execution',
      description:
        'The work is performed by our team — we do not subcontract. Every day on site ends with the space cleaned and the system safe.',
    },
    {
      step: '05',
      title: 'Inspection and documentation',
      description:
        'We pass inspection, close the permit, and deliver a panel schedule, as-built documentation, and warranty paperwork.',
    },
  ],
  serviceAreas: [
    { name: 'Manhattan', description: 'Tribeca, SoHo, West Village, Chelsea, Midtown, Upper East Side, Upper West Side, and Harlem.' },
    { name: 'Brooklyn', description: 'Park Slope, Brooklyn Heights, DUMBO, Williamsburg, Fort Greene, Cobble Hill, and Carroll Gardens.' },
    { name: 'Queens', description: 'Long Island City, Astoria, and Forest Hills for scheduled projects by arrangement.' },
    { name: 'The Bronx', description: 'Riverdale and Mott Haven for scheduled commercial projects by arrangement.' },
  ],
  licenses: [
    { name: 'New York Master Electrician License', issuer: 'NYC Department of Buildings', number: '1238' },
    { name: 'Electrical Contractor Registration', issuer: 'State of New York', number: 'EC-09412' },
    { name: 'Lutron RadioRA 3 Certified Dealer', issuer: 'Lutron Electronics', number: 'NYC-22-1187' },
    { name: 'EVITP Certified', issuer: 'Electric Vehicle Infrastructure Training Program', number: 'EV-4471' },
  ],
  awards: [
    { name: 'Best Electricians in Brooklyn', year: '2024', issuer: 'Brownstoner Readers Poll' },
    { name: 'Top Rated Electrical Contractor', year: '2023', issuer: 'NYC BuildHub' },
    { name: 'Angi Super Service Award', year: '2022', issuer: 'Angi' },
  ],
  trustBadges: [
    { label: 'Licensed', value: 'Master Electrician #1238' },
    { label: 'Insured', value: '$2M liability' },
    { label: 'Established', value: '2009' },
    { label: 'Projects', value: '1,800+ completed' },
    { label: 'Response', value: '24/7 emergency' },
    { label: 'Warranty', value: '5-year workmanship' },
  ],
  team: [
    {
      name: 'Marcus Voltaire',
      role: 'Founder & Master Electrician',
      bio: 'Third-generation electrician trained in New York and Berlin. Founded Voltaire Electric in 2009 with the conviction that electrical work deserves architectural rigor.',
      photo: 'https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'Priya Anand',
      role: 'Lead Electrician & Project Manager',
      bio: 'Licensed master electrician with a background in commercial fit-outs. Manages our commercial and restaurant projects and runs the permitting desk.',
      photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      name: 'James Okonkwo',
      role: 'Lead Electrician & Automation Specialist',
      bio: 'Lutron RadioRA 3 and Control4 certified. Leads our smart home and lighting design projects across Manhattan.',
      photo: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ],
  social: [
    { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
    { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  ],
  contact: {
    phone: '(212) 555-0148',
    phoneHref: 'tel:+12125550148',
    emergencyPhone: '(212) 555-0911',
    emergencyPhoneHref: 'tel:+12125550911',
    email: 'studio@voltaireelectric.nyc',
    emailHref: 'mailto:studio@voltaireelectric.nyc',
    address: {
      line1: '214 Atlantic Avenue',
      line2: 'Workshop & Studio',
      city: 'Brooklyn',
      state: 'NY',
      zip: '11201',
    },
    mapEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2!2d-73.9949!3d40.6852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQxJzA2LjciTiA3M8KwNTknNDEuNyJX!5e0!3m2!1sen!2sus!4v1700000000000',
    hours: [
      { day: 'Monday – Friday', hours: '7:00 AM – 7:00 PM' },
      { day: 'Saturday', hours: '8:00 AM – 4:00 PM' },
      { day: 'Sunday', hours: 'Emergency only' },
      { day: 'Emergency', hours: '24/7, every day' },
    ],
    emergencyNote: 'For active electrical emergencies — no power, burning smell, sparking — call our 24/7 line. A master electrician answers directly.',
  },
  seo: {
    title: 'Voltaire Electric — Master Electricians in New York',
    description:
      'Licensed master electricians serving New York City. Panel upgrades, EV chargers, lighting design, smart home automation, and 24/7 emergency service.',
    keywords: ['electrician nyc', 'panel upgrade', 'ev charger installation', 'lighting design', 'smart home', 'emergency electrician'],
    ogImage: 'https://images.pexels.com/photos/8004570/pexels-photo-8004570.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  cta: {
    headline: 'Start with a conversation.',
    subheadline:
      'Tell us what you are trying to power. A master electrician will assess your system, explain your options, and give you a written estimate — usually within 48 hours.',
    primary: { label: 'Request a consultation', to: '/contact' },
    secondary: { label: 'Call (212) 555-0148', to: 'tel:+12125550148' },
  },
};
