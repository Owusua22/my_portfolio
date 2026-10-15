// lib/portfolioMock.ts
// Static front-end data with a storytelling narrative arc.
// Ordered strictly: Real-Life Projects -> Landing Pages -> Digital Marketing -> Creative

export type MediaKind = 'image' | 'video';

export interface PortfolioItem {
  id: string;
  image: string;
  title: string;
  description: string;
  summary?: string;
  problem?: string;
  framework?: string;
  category: string;
  sourceType: 'real_life_projects' | 'landing_pages' | 'digital_marketing' | 'creative';
  videoUrl?: string;
  projectUrl?: string;
  driveUrl?: string;
  date?: string;
  client?: string;
  year?: string;
  role?: string;
  label?: string;
  tools?: string[];
  services?: string[];
  situation?: string;
  task?: string;
  action?: string;
  results?: string;
  result?: string;
  impactLabel?: string;
  platform?: string;
  mediaKind?: MediaKind;
  accent?: string;
  isConcept?: boolean;
  isFeatured?: boolean;
  galleryImages: string[];
}

export const STATIC_PORTFOLIO: PortfolioItem[] = [
  // =========================================================================
  // 1. REAL LIFE PROJECTS (Live Client & Production Websites)
  // =========================================================================
  {
    id: 'rlp-franko-trading',
    sourceType: 'real_life_projects',
    image: '/assets/img/portfolio/franko.png',
    galleryImages: ['/assets/img/portfolio/franko.png'],
    title: 'Franko Trading - Scalable Retail E-Commerce Engine',
    category: 'E-Commerce / Full-Stack Platform',
    client: 'Franko Trading Enterprise',
    year: '2024',
    role: 'Full Stack Developer → Technical Team Lead',
    framework: 'React / Next.js Ecosystem',
    tools: [
      'React',
      'Tailwind CSS',
      'GSAP Animations',
      'Expo / React Native',
      'Google Tag Manager',
      'Meta Pixel',
      'WhatsApp Business API',
    ],
    services: [
      'Full-Stack Architecture',
      'E-Commerce Checkout Flow',
      'Technical & On-Page SEO',
      'Mobile App Integration',
      'Conversion Rate Optimization',
    ],
    problem:
      'Franko was already a household name for electronics across Ghana, but their digital presence could not keep pace with their retail stores. Shoppers on patchy mobile networks faced sluggish pages, customer service reps were flooded with repetitive WhatsApp inquiries, and the site lost high-intent search traffic for competitive queries like "buy iPhone in Ghana" to generic marketplaces.',
    description:
      'When Franko Trading decided to bring their massive electronics inventory online, the primary challenge wasn\'t just building a shopping cart-it was building trust for high-ticket online purchases on mobile connections that frequently fluctuate.\n\nI stepped in to architect a lightweight, SEO-engineered e-commerce experience. I eliminated bloated third-party dependencies, created custom product catalog filtering, and bridged the gap between automated online ordering and instant human trust by embedding a contextual WhatsApp checkout assistant.\n\nTo capture mobile-first shoppers, I also helped synchronize the web ecosystem with a companion Expo/React Native mobile app, giving customers live price updates and delivery tracking straight from their pocket.',
    summary:
      'Architected a lightning-fast React e-commerce engine backed by a companion React Native app. Integrated contextual WhatsApp purchasing for Ghanaian shoppers on unstable connections.',
    results:
      'Engineered an 85% surge in digital sales within 8 months, achieved page-one Google rankings for high-intent consumer terms, and cut catalog update cycles by 40%.',
    result:
      '+85% online sales growth, 1st-page Google ranking for "phones in Ghana", and instant multi-channel WhatsApp conversion.',
    impactLabel: '+85% Sales Growth',
    projectUrl: 'https://www.frankotrading.com/',
    isFeatured: true,
  },
  {
    id: 'rlp-cell7',
    sourceType: 'real_life_projects',
    image: 'https://cell7.ai/assets/images/services/services-img-1.png',
    galleryImages: ['https://cell7.ai/assets/images/services/services-img-1.png'],
    title: 'Cell-7 - AI Precision Health Platform & Positioning',
    category: 'HealthTech / AI Product Website',
    client: 'Cell-7 Intelligence',
    year: '2024',
    role: 'Product Manager & Frontend Architect',
    framework: 'Responsive Semantic Web Architecture',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'Tally Forms', 'Product Positioning', 'Figma'],
    services: [
      'Product Positioning',
      'Clinical Narrative Design',
      'Enterprise Demo Funnels',
      'Technical Architecture Framing',
    ],
    problem:
      'Across Sub-Saharan Africa, healthcare remains reactive: non-communicable diseases are detected too late, and the patient-to-doctor ratio exceeds 1:4,000. Cell-7 had built powerful predictive clinical AI models, but medical professionals were skeptical of "AI hype" and patients found the science intimidating. The startup needed a platform that communicated clinical authority without alienating everyday people.',
    description:
      'AI in healthcare triggers immediate skepticism if it feels like a black box. My objective was to strip away the buzzwords and tell a human-centered medical story.\n\nI structured the platform around three distinct, understandable engines: Risk Prediction, Personalized Guidance, and Clinical Intelligence. Rather than presenting the AI as a replacement for physicians, I positioned it as a "digital diagnostic co-pilot" that helps overstretched doctors catch chronic conditions years early.\n\nI designed an interactive demo intake funnel with embedded clinical trial validation data, customer trust testimonials, and tier-based onboarding for hospital networks.',
    summary:
      'Transformed deep medical-grade AI models into a credible, human-first health narrative with clear clinician trust pathways and enterprise demo funnels.',
    results:
      'Positioned the company to secure hospital pilot partnerships, dramatically simplified demo requests, and established an authoritative digital presence across Africa.',
    result:
      'Built trust with skeptical clinicians, enabled enterprise pilot demo signups, and clarified complex diagnostic AI into three intuitive modules.',
    impactLabel: 'Pilot Onboarding Engine',
    projectUrl: 'https://cell7.ai/',
    isFeatured: true,
  },
  {
    id: 'rlp-newlands-medical',
    sourceType: 'real_life_projects',
    image: '/assets/img/portfolio/newl.png',
    galleryImages: ['/assets/img/portfolio/newl.png'],
    title: 'Newlands Medical Centre - Patient-Centered Healthcare Portal',
    category: 'Healthcare / Institutional Portal',
    client: 'Newlands Medical Centre',
    year: '2023',
    role: 'Lead Web Developer',
    framework: 'React / Modular Component Engine',
    tools: ['React', 'HTML5', 'Tailwind CSS', 'JavaScript', 'Google Maps API', 'Form Engine'],
    services: [
      'Patient UX Research',
      'Doctor Directory & Schedules',
      'Insurance Partner Showcase',
      'Direct Appointment Lead Funnel',
    ],
    problem:
      'Patients facing medical emergencies or planning clinic visits in the Eastern Region experienced extreme friction: clinic phone lines were perpetually busy, patients had no way of knowing if their private insurance was accepted before arriving, and uncertainty around specialist availability led to crowded waiting rooms and delayed care.',
    description:
      'When someone is sick or seeking care for a family member, every second of web confusion causes real anxiety. I designed Newlands Medical Centre’s website with one goal: clarity under stress.\n\nI organized 12 complex medical specialties into simple, searchable condition hubs. I built a transparent insurance partner lookup so families immediately know if their policy covers consultations, and created an emergency "Click-to-Call & Directions" mobile bar pinned to the screen for urgent triage.\n\nInstead of cold medical jargon, the site highlights doctor profiles, operational clinic hours, and direct booking forms that flow directly to the front-desk triage team.',
    summary:
      'Engineered an empathetic hospital web portal that eliminated patient triage bottlenecks, clearly displayed insurance coverage, and simplified clinic scheduling.',
    results:
      'Reduced inbound administrative phone calls, eradicated insurance coverage confusion at reception, and made finding doctor schedules seamless for thousands of local patients.',
    result:
      'Drastically reduced front-desk phone congestion and eliminated insurance coverage uncertainty for incoming walk-in patients.',
    impactLabel: 'Zero-Friction Patient Care',
    projectUrl: 'https://newlandsmedicalcentregh.com/',
    isFeatured: true,
  },
  {
    id: 'rlp-klassic-lubricants',
    sourceType: 'real_life_projects',
    image: '/assets/img/portfolio/klassic.png',
    galleryImages: ['/assets/img/portfolio/klassic.png'],
    title: 'Klassic Lubricants - Industrial Catalog & B2B Quote Engine',
    category: 'Corporate B2B / Industrial Catalog',
    client: 'Klassic Lubricants Ltd',
    year: '2023',
    role: 'Web Developer & Information Architect',
    framework: 'React / Server-Rendered Catalog',
    tools: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Admin Content Panel', 'Quote Generation Engine'],
    services: [
      'Industrial Spec Architecture',
      'B2B Quote Request Flow',
      'Custom Admin Management',
      'Search Engine Optimization',
    ],
    problem:
      'Distributing industrial lubricants across depots in Accra, Tamale, and Kumasi was held back by constant technical confusion: fleet operators and mining procurement managers frequently had no idea which grade of hydraulic oil or engine grease matched their heavy machinery specs. Sales reps spent hours sending PDF spec sheets back and forth instead of closing bulk deals.',
    description:
      'B2B buyers do not want flashy marketing fluff; they want exact viscosity ratings, OEM certifications, and an effortless way to get bulk pricing.\n\nI architected a structured product index classifying 50+ industrial lubricants across engine oils, ATF, brake fluids, and industrial greases. To empower the non-technical sales team, I developed a lightweight admin upload panel that allows staff to update inventories, pricing sheets, and product bulletins without writing a line of code.\n\nEvery product page was fitted with a contextual "Request a Depot Quote" call-to-action that pre-populates product codes into inquiries, saving hours of manual sales back-and-forth.',
    summary:
      'Transformed a manual B2B wholesale distribution process into a searchable spec catalog equipped with automated quote requests and a self-serve admin panel.',
    results:
      'Accelerated quote turnaround time from days to minutes, reduced spec verification errors, and established a direct lead pipeline for industrial and mining accounts.',
    result:
      'Eliminated hours of repetitive spec inquiries and opened a direct digital quote channel for national transport and mining fleets.',
    impactLabel: 'B2B Sales Acceleration',
    projectUrl: 'https://klassiclubricantsltd.com/',
    isFeatured: false,
  },
  {
    id: 'rlp-yosa',
    sourceType: 'real_life_projects',
    image: '/assets/img/portfolio/yosa.png',
    galleryImages: ['/assets/img/portfolio/yosa.png'],
    title: 'Youth Opportunities South Africa - Data-Led Impact Platform',
    category: 'Non-Profit / Social Impact Portal',
    client: 'Youth Opportunities South Africa (YOSA)',
    year: '2023',
    role: 'Website Developer & Digital Strategist',
    framework: 'Responsive CMS Architecture',
    tools: ['CMS Engine', 'Newsletter Lead Funnels', 'Data Visualization', 'Compliance & Cookie Banner'],
    services: [
      'Social Impact Storytelling',
      'Donor & Partner Pipeline',
      'Annual Reporting Hub',
      'Community Onboarding',
    ],
    problem:
      'Working in Soweto to combat high youth unemployment, school dropouts, and substance abuse, YOSA was making a massive grassroots difference on the ground. However, international donors and corporate grant providers were hesitant to commit funding because the NGO lacked an audited, credible online repository showcasing measurable social ROI.',
    description:
      'Donors do not fund good intentions; they fund proven outcomes. I transformed YOSA’s online presence from a basic non-profit brochure into an evidence-based storytelling platform.\n\nI highlighted the Positive Youth Development (PYD) framework with quantifiable data counters: over 7,000 learners supported across 10 partner schools. I built an accessible annual reports and newsletter archive, documented verified student success stories, and integrated a dedicated "Partner With Us" pipeline tailored specifically for CSR managers and grant evaluators.\n\nThe entire platform was engineered for transparency, ensuring compliance with data privacy standards and presenting verified social impact.',
    summary:
      'Built an evidence-backed impact platform that turned grassroots youth interventions into quantifiable data, unlocking doors for corporate grants and school partners.',
    results:
      'Helped position YOSA to pass corporate due diligence, streamlined donor reporting, and created an active newsletter community of supporters.',
    result:
      'Validated grassroots impact for institutional funders, turning raw student outcome metrics into an authoritative grant-attracting platform.',
    impactLabel: '7,000+ Learners Supported',
    projectUrl: 'https://youthopportunitiessouthafrica.org/',
    isFeatured: false,
  },

  // =========================================================================
  // 2. LANDING PAGES & HIGH-CONVERSION UI
  // =========================================================================
  {
    id: 'lp-hmd-events',
    sourceType: 'landing_pages',
    image: 'https://hmd-sigma.vercel.app/ba.jpg',
    galleryImages: ['https://hmd-sigma.vercel.app/ba.jpg'],
    title: 'HMD Events - Luxury Event Consultation Funnel',
    category: 'Landing Page / High-Conversion UI',
    client: 'HMD Events',
    year: '2024',
    role: 'Full-Stack Developer & UX Designer',
    framework: 'Next.js 14 / React',
    tools: ['Next.js', 'React', 'Tailwind CSS', 'Vercel Edge', 'Technical SEO', 'Structured JSON-LD'],
    services: [
      'Conversion Architecture',
      'Brand Identity System',
      'Performance Optimization',
      'Consultation Booking Engine',
    ],
    problem:
      'HMD Events was creating spectacular weddings and corporate galas, but their social media presence was leaking potential clients. Curious prospects who loved their Instagram photos had no clear, pressure-free way to book consultations, verify pricing clarity, or understand their planning steps-leading to high drop-offs and lost event deposits.',
    description:
      'Luxury event planning is an emotional purchase where trust and aesthetic taste mean everything. I built a Next.js landing page centered around the reassurance: "We plan. You celebrate."\n\nI structured the user experience around 3 transparent milestones (Concept, Curate, Celebrate), backed up by social proof from 300+ executed events. To prevent decision paralysis, I placed a frictionless "Book a Discovery Session" call-to-action in high-intent viewport positions.\n\nThe site was optimized for mobile page load speeds under 1.2s and shipped with comprehensive SEO metadata, structured sitemaps, and automated OpenGraph image sharing.',
    summary:
      'A Next.js luxury event landing page built to turn passive Instagram followers into scheduled consultation calls with zero booking friction.',
    results:
      'Directly supported the business campaign to lock in 20 high-value event bookings, while achieving near-perfect Google Lighthouse performance scores.',
    result:
      'Delivered lightning-fast 1.2s mobile load times and created a streamlined consultation booking funnel that converted warm social traffic into deposits.',
    impactLabel: 'Sub-1.2s Load Speed',
    projectUrl: 'https://hmd-sigma.vercel.app/',
    isFeatured: true,
  },
  {
    id: 'lp-sally-chops',
    sourceType: 'landing_pages',
    image: '/assets/img/portfolio/restaurant.png',
    galleryImages: ['/assets/img/portfolio/restaurant.png'],
    title: 'Sally Chops - Quick-Service Culinary Ordering UI',
    category: 'Landing Page / Food & Beverage UI',
    client: 'Sally Chops',
    year: '2024',
    role: 'Front-End Developer',
    framework: 'React / Single Page Architecture',
    tools: ['React', 'CSS Modules', 'Netlify Edge', 'Responsive Image Pipeline'],
    services: [
      'Sensory Visual UX',
      'Micro-Interactions',
      'Mobile Fast-Checkout',
      'Local Delivery Pathways',
    ],
    problem:
      'Hungry mobile users make buying decisions in seconds. Traditional restaurant websites with sluggish PDF menus and cluttered navigations lose diners before they even see the dishes, causing massive drop-off to third-party delivery apps that charge exorbitant commissions.',
    description:
      'I wanted to design an online menu experience that triggers cravings immediately. I created a high-velocity single-page React app that loads essential menu items above the fold in under a second.\n\nEvery item is accompanied by vivid food imagery, clear dietary badges, and a one-click order pathway. I eliminated nested menus and complicated multi-step cart flows, letting users jump from looking at a dish to ordering their meal in two taps.',
    summary:
      'A mobile-first culinary landing page engineered for fast cravings, zero menu lag, and direct consumer ordering.',
    results:
      'Delivered a zero-friction mobile menu experience that loads instantly and keeps diners on the direct-order channel.',
    result:
      'Eliminated clunky PDF menu friction and allowed customers to order in two taps without third-party app commission loss.',
    impactLabel: 'Instant Mobile Ordering',
    projectUrl: 'https://sally-chops.netlify.app/',
    isFeatured: false,
  },
  {
    id: 'lp-sally-car-rental',
    sourceType: 'landing_pages',
    image: '/assets/img/portfolio/cars.png',
    galleryImages: ['/assets/img/portfolio/cars.png'],
    title: 'Sally Car Rental - Transparent Fleet Booking UI',
    category: 'Landing Page / Mobility & Travel',
    client: 'Sally Car Rental',
    year: '2024',
    role: 'Front-End Developer',
    framework: 'React (Create React App)',
    tools: ['React', 'Tailwind CSS', 'Netlify', 'Interactive Filter Components'],
    services: [
      'Fleet Categorization',
      'Transparent Pricing UI',
      'Availability Checker',
      'Direct Reservation Funnel',
    ],
    problem:
      'Car rental services often plague travelers with hidden insurance fees, vague vehicle condition specs, and prolonged quote response times. Prospective renters leave platforms out of fear of bait-and-switch pricing at the pick-up counter.',
    description:
      'I built Sally Car Rental around radical upfront transparency. The landing page categorizes the fleet by actual use-case (Executive, City Commute, Safari SUV) with clear transmission, fuel economy, and daily rental rates shown right on the card.\n\nI incorporated an intuitive reservation calculator that gives renters an exact breakdown of their total before they submit an inquiry, establishing trust from the first click.',
    summary:
      'A streamlined fleet booking landing page that addresses car rental trust issues with transparent pricing and instant vehicle filtering.',
    results:
      'Empowered travelers to reserve verified vehicles with zero hidden cost anxieties, leading to high inquiry completion rates.',
    result:
      'Replaced vague inquiry forms with transparent daily rental calculators, removing customer drop-off at checkout.',
    impactLabel: 'Transparent Fleet Funnel',
    projectUrl: 'https://sally-car-rental.netlify.app/',
    isFeatured: false,
  },

  // =========================================================================
  // 3. DIGITAL MARKETING & GROWTH CASE STUDIES
  // =========================================================================
  {
    id: '4451eb13-4dee-46f5-b9b1-3d8af3978894',
    sourceType: 'digital_marketing',
    image: 'https://yumcvrgoucpuhazdxbcp.supabase.co/storage/v1/object/public/portfolio-media/case-studies/1789488326070-2enbex.png',
    galleryImages: ['https://yumcvrgoucpuhazdxbcp.supabase.co/storage/v1/object/public/portfolio-media/case-studies/1789488326070-2enbex.png'],
    mediaKind: 'image',
    title: 'Kodu Pads - Breaking Taboos with Empathetic Storytelling',
    description:
      'How I designed an audience-first creative campaign strategy for eco-friendly sanitary pads, transforming a sensitive, taboo health conversation into an engaging, empowering digital movement.',
    category: 'Digital Marketing / Content Strategy',
    label: 'Campaign Strategy',
    client: 'KODU PADS',
    year: '2026',
    role: 'Creative Campaign Lead',
    accent: 'sage',
    isConcept: true,
    situation:
      'Menstrual hygiene in many target communities is still shrouded in silence, shame, and misinformation. Kodu Pads had an affordable, biodegradable, high-quality sanitary pad, but traditional advertising felt cold, clinical, and corporate. They needed a marketing angle that felt like a trusted big sister talking to young women-relatable, empathetic, and culturally grounded.',
    task:
      'As Creative Campaign Lead, my responsibility was to break down the social stigma without being preachy. I had to develop the overarching creative narrative, design multi-platform content angles, and guide young women from awareness to genuine brand affinity and retail trial.',
    action:
      'I developed a three-pillar narrative framework: "Dignity, Freedom, and Open Conversations."\n\n1. Relatable Micro-Storytelling: Instead of generic product shots, I scripted short-form scenario videos addressing everyday moments (the panic of unexpected periods in school, fabric irritation myths, eco-friendly decomposition).\n2. Educational Advocacy: Produced easy-to-read carousel guides breaking down menstrual health facts in simple language.\n3. Community Advocacy: Partnered messaging with youth micro-voices to normalize talking about periods openly across TikTok and Instagram.',
    results:
      'The campaign blueprint demonstrated how creative empathy outperforms hard-selling in personal health. It delivered an actionable roadmap connecting social stigma breakdown with measurable product inquiries.',
    result:
      'Engineered an empathetic campaign strategy that turned a taboo personal health subject into an empowering, high-engagement community conversation.',
    impactLabel: 'Advocacy to Conversion',
    services: ['Creative Direction', 'Audience Research', 'Multi-Platform Content Strategy'],
    tools: ['Audience Persona Mapping', 'Content Frameworks', 'Canva Pro'],
    driveUrl: 'https://canva.link/kodu-pads-presentation',
    isFeatured: true,
    date: '2026-09-15',
  },
  {
    id: '7edd6518-138a-470a-9dea-28a6554d50f0',
    sourceType: 'digital_marketing',
    image: 'https://yumcvrgoucpuhazdxbcp.supabase.co/storage/v1/object/public/portfolio-media/case-studies/1789505663093-9ppw7l.png',
    galleryImages: ['https://yumcvrgoucpuhazdxbcp.supabase.co/storage/v1/object/public/portfolio-media/case-studies/1789505663093-9ppw7l.png'],
    mediaKind: 'image',
    title: 'HMD Events - 3-Month Funnel for 20 Confirmed Bookings',
    description:
      'Designing an integrated acquisition engine combining viral behind-the-scenes video, Meta retargeting, and WhatsApp direct messaging to achieve 20 verified event bookings.',
    category: 'Digital Marketing / Growth Engine',
    label: 'Growth & Lead Gen',
    client: 'HMD EVENTS',
    year: '2026',
    role: 'Growth Marketing Strategist',
    accent: 'sage',
    isConcept: false,
    situation:
      'HMD Events had plenty of "likes" and compliments on their event photos, but "likes" don\'t pay vendors. They were stuck in the vanity metrics trap: tons of impressions, but irregular inquiries and zero systematic conversion pipeline to turn social spectators into paying wedding and corporate clients.',
    task:
      'Develop and execute an end-to-end 90-day growth engine with one specific business metric: secure 20 confirmed, deposit-backed event bookings across wedding, corporate, and private celebrations.',
    action:
      'I connected previously disconnected channels into a single unified customer pipeline:\n\n1. Top of Funnel (Awe & Discovery): Deployed short-form TikTok & Reel transformations showing raw empty halls turning into jaw-dropping gala setups.\n2. Mid Funnel (Trust Engineering): Deployed carousel breakdowns answering real client anxieties: "How to budget for 200 guests without going broke" and "What planners actually do on your wedding morning."\n3. Bottom of Funnel (Direct Response): Launched localized Meta lead ads synced with direct click-to-WhatsApp chats, equipping the sales team with immediate response templates to capture brides-to-be while their intent was hot.\n4. Local Discovery: Optimized Google Business Profile for "wedding planners Accra" to capture high-intent local searchers.',
    results:
      'Instead of viewing social media as an aesthetic gallery, HMD Events received a closed-loop acquisition machine where every piece of content directly nourished their WhatsApp sales pipeline toward the 20-booking target.',
    result:
      'Designed a full-funnel customer journey that took prospects from short-form video discovery straight into qualified WhatsApp deposit negotiations.',
    impactLabel: 'Target: 20 Bookings',
    services: ['Full-Funnel Strategy', 'Meta Paid Acquisition', 'Local SEO & WhatsApp Lead Ops'],
    tools: ['Meta Ads Manager', 'Google Search Console', 'WhatsApp Lead Routing'],
    driveUrl: 'https://docs.google.com/presentation/d/1rTfuQggSDVK8KDPFFS0tfJR_ZoZy0CPVzT6QapzVBaE/edit?usp=sharing',
    isFeatured: true,
    date: '2026-09-15',
  },
  {
    id: '8f4e0975-ca09-4896-a5b3-4d05b16ac128',
    sourceType: 'digital_marketing',
    image: 'https://yumcvrgoucpuhazdxbcp.supabase.co/storage/v1/object/public/portfolio-media/case-studies/1789504896830-mcpthf.png',
    galleryImages: ['https://yumcvrgoucpuhazdxbcp.supabase.co/storage/v1/object/public/portfolio-media/case-studies/1789504896830-mcpthf.png'],
    mediaKind: 'image',
    title: 'GLICO General Insurance - Technical SEO & Intent Strategy',
    description:
      'Turning an underperforming corporate insurance website into an organic search engine for high-value policies through technical optimization and intent-focused architecture.',
    category: 'Digital Marketing / Technical SEO',
    label: 'Technical SEO Audit',
    client: 'GLICO INSURANCE',
    year: '2026',
    role: 'Lead SEO Strategist',
    accent: 'sage',
    isConcept: false,
    situation:
      'GLICO is one of the most respected insurance institutions in Ghana, yet when everyday drivers searched for "third-party motor insurance cost" or "how to make a car insurance claim in Ghana," GLICO was virtually invisible on Google. Their site suffered from broken mobile menus, duplicate homepages, uncompressed images, and generic marketing copy that failed to match real search intent.',
    task:
      'Conduct an in-depth technical SEO diagnostic and deliver an actionable execution blueprint that would elevate GLICO\'s organic rankings for competitive commercial insurance searches.',
    action:
      'I dismantled the problem into a clear 4-stage optimization plan:\n\n1. Technical Surgery: Identified critical crawl blockers, streamlined confusing mega-menus on mobile, and mapped out caching and image compression solutions to boost Core Web Vitals.\n2. Search Intent Mapping: Analyzed real Ghanaian search queries, discovering high-demand searches like "cheap car insurance Accra" and "comprehensive motor insurance quote".\n3. Pillar Content Reconstruction: Selected their underperforming motor insurance page and rebuilt it from the ground up as a definitive resource answering claims procedures, policy covers, and premium calculations.\n4. On-Page Engineering: Rewrote meta structures, injected clean schema markup, overhauled internal anchor link equity, and cleaned URL pathways to /motor-insurance-in-ghana/.',
    results:
      'Transformed a stagnant corporate site into a search-engine-friendly authority asset, giving GLICO the technical and content foundation needed to capture high-value organic insurance leads.',
    result:
      'Rebuilt underperforming insurance pages into search-intent authority hubs, eliminating technical crawl debt and targeting high-intent quote queries.',
    impactLabel: 'Organic Search Authority',
    services: ['Technical SEO Audit', 'Keyword Intent Research', 'Content Architecture Overhaul'],
    tools: ['Google Search Console', 'Screaming Frog', 'Keyword Discovery Tools'],
    driveUrl: 'https://docs.google.com/document/d/e/2PACX-1vSOc1pVWz-s3G5GtzqtpSMrwrqTKAItYWz1-iTFaxZSWqi_2gVTkT40wG5_rRtUFA9DQE2LOsVlfNTD/pub',
    isFeatured: true,
    date: '2026-09-15',
  },
  {
    id: 'd0884a0b-3a7a-477b-867c-007fc3c683d2',
    sourceType: 'digital_marketing',
    image: 'https://yumcvrgoucpuhazdxbcp.supabase.co/storage/v1/object/public/portfolio-media/case-studies/1789491540576-ztrhqr.png',
    galleryImages: ['https://yumcvrgoucpuhazdxbcp.supabase.co/storage/v1/object/public/portfolio-media/case-studies/1789491540576-ztrhqr.png'],
    mediaKind: 'image',
    title: 'M-KOPA - Unlocking High-Intent Clicks from Millions of Impressions',
    description:
      'Diagnosing why 19,000+ monthly search impressions were generating near-zero clicks, and engineering a prioritized organic growth roadmap across African markets.',
    category: 'Digital Marketing / Data Analytics & SEO',
    label: 'SEO Performance Deep Dive',
    client: 'M-KOPA',
    year: '2026',
    role: 'Growth & SEO Performance Analyst',
    accent: 'sage',
    isConcept: false,
    situation:
      'M-KOPA had massive organic visibility across emerging African markets, but the performance data revealed a frustrating leak: people were seeing them on Google, but they weren\'t clicking. Searches like "electric motorbike financing Africa" generated over 19,000 impressions with a dismal 3.2% CTR because users were dumped onto a generic product landing page that failed to answer their financing questions.',
    task:
      'Analyze the full-year Google Search Console dataset across African markets, isolate high-opportunity query clusters, and build a high-impact roadmap to turn dormant impressions into active clicks.',
    action:
      'I performed a detailed cohort breakdown across queries, devices, and countries:\n\n1. Intent-Page Alignment: Discovered that users searching for specific smartphone financing and EV motorbikes were bouncing off broad corporate pages. I recommended dedicated intent hubs tailored to specific financing questions.\n2. Mobile SERP Remediation: Discovered mobile represented 70% of total impressions but dragged overall CTR down. Formulated recommendations for snippet optimization and mobile Core Web Vitals.\n3. Content Refresh for Health Cover & Loans: Pinpointed pages ranking on the edge of page one (position 10–12) and drafted internal linking strategies to push them into the top 3 spots.\n4. Market Localization: Outlined South Africa and Kenya specific terminology adjustments to win localized search engines.',
    results:
      'Delivered a strategic data-backed roadmap that transitioned M-KOPA from passive search visibility to active, qualified borrower acquisitions.',
    result:
      'Identified critical search intent mismatches and outlined an action plan to push high-volume queries from position 12 into top-3 click territory.',
    impactLabel: 'Millions of Impressions Monetized',
    services: ['GSC Dataset Analysis', 'Intent Gap Analysis', 'International SEO Architecture'],
    tools: ['Google Search Console', 'Search Analytics Cohort Modeling', 'SERP Optimizers'],
    driveUrl: 'https://docs.google.com/document/d/e/2PACX-1vSfwK_jiYY6tcCyLRQevMyTVYWledi0xxFfiwcWFGwUK0WhVemTyMCaXbQGLvCeJs7DgsRzW1Tn6O6Z/pub',
    isFeatured: true,
    date: '2026-09-15',
  },

   
];