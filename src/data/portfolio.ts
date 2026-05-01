export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  category: string;
  url: string;
  description: string;
  overview: string;
  tags: string[];
  accent: string;
  year: string;
  status: string;
  highlights: string[];
  image?: string;
};

export const personalInfo = {
  name: "Ishant Shaw",
  role: "Associate Software Development Engineer",
  tagline: "Building software that ships. From CRMs to AI-powered platforms.",
  intro:
    "Full-stack engineer from Kolkata building enterprise tools, AI workflows, business websites, and mobile products with a bias for clean execution.",
  email: "ishantshaw28@gmail.com",
  phone: "+91 6291121370",
  github: "https://github.com/ishant987",
  linkedin: "https://linkedin.com/in/ishantshaw13",
  location: "Kolkata, India",
  playStore:
    "https://play.google.com/store/apps/details?id=com.zynapte.zivo",
};

export const metrics = [
  { label: "Live products", value: "49+" },
  { label: "Primary focus", value: "Full-stack apps" },
  { label: "Based in", value: "Kolkata" },
  { label: "Core strength", value: "Shipping fast" },
];

export const skills = {
  languages: ["Java", "JavaScript", "Dart", "PHP", "Python", "C/C++"],
  frameworks: [
    "Flutter",
    "Laravel",
    "Next.js",
    "NestJS",
    "ReactJS",
    "MySQL",
    "SQLite",
    "REST API",
    "Swagger UI",
    "FastAPI",
    "WebRTC",
    "PostgreSQL",
    "Zoho Creator",
    "Deluge Script",
  ],
};

export const experience = [
  {
    company: "Zynapte Technologies Pvt Ltd",
    role: "Associate Software Development Engineer",
    period: "Feb 2026 - Present",
    description:
      "Building and maintaining production software across CRM, AI, and web platform initiatives with a focus on dependable delivery and practical product thinking.",
  },
];

export const education = [
  {
    degree: "B.Tech - Information Technology",
    institute: "St. Thomas' College of Engineering & Technology, Kolkata",
    meta: "CGPA: 8.29 / 10",
    period: "2021-2025",
  },
  {
    degree: "ISC - Class XII",
    institute: "Gurukul Vidya Mandir Secondary School, Kolkata",
    meta: "81.16%",
    period: "Feb 2021",
  },
  {
    degree: "ICSE - Class X",
    institute: "Gurukul Vidya Mandir Secondary School, Kolkata",
    meta: "77.83%",
    period: "Feb 2019",
  },
];

export const projects: Project[] = [
  {
    slug: "jeskojets-aviation-website",
    title: "JeskoJets - Aviation Charter Website",
    shortTitle: "JeskoJets",
    category: "Aviation Website",
    url: "https://jeskojets.com/",
    description:
      "Premium aviation charter website built to present private jet services with a high-end, trust-driven digital experience.",
    overview:
      "A luxury-focused website for a private aviation brand, designed to convert high-value visitors through polished presentation, seamless navigation, and a clear path to booking.",
    tags: ["Aviation", "Luxury Brand", "Frontend"],
    accent: "#0c1445",
    year: "2025",
    status: "Live",
    image: "/sequence/jeskojets.png",
    highlights: [
      "Built a premium digital presence for a private jet charter brand.",
      "Designed for trust and conversion with a high-end visual language.",
      "Delivered a responsive experience tailored for an affluent audience.",
    ],
  },
  {
    slug: "findrealestate-property-platform",
    title: "FindRealEstate - Property Platform",
    shortTitle: "FindRealEstate",
    category: "Real Estate Platform",
    url: "https://findrealestate.com/",
    description:
      "Real estate search platform connecting buyers and sellers with expert agents and a clear path to finding properties.",
    overview:
      "A modern real estate platform built to simplify property discovery, agent connections, and the paperwork journey — all under one roof.",
    tags: ["Real Estate", "Property Search", "Web Platform"],
    accent: "#1a1a2e",
    year: "2025",
    status: "Live",
    image: "/sequence/findrealestate.png",
    highlights: [
      "Built a full-featured property search and listing experience.",
      "Integrated agent discovery and connection flows for buyers.",
      "Delivered a clean, conversion-focused interface across the platform.",
    ],
  },
  {
    slug: "theraworldskin-beauty-website",
    title: "TheRaWorldSkin - Beauty & Skincare Website",
    shortTitle: "TheRaWorldSkin",
    category: "Beauty & Skincare",
    url: "https://www.theraworldskin.com/",
    description:
      "Skincare and beauty brand website built to showcase products and connect customers with a premium, curated experience.",
    overview:
      "A visually refined website for a skincare brand, focused on product discovery, brand storytelling, and creating a seamless path to purchase.",
    tags: ["Beauty", "E-commerce", "Brand Website"],
    accent: "#be8a6a",
    year: "2025",
    status: "Live",
    image: "/sequence/theraworldskin.png",
    highlights: [
      "Crafted a premium brand experience for a skincare product line.",
      "Designed product-focused layouts for intuitive discovery and trust.",
      "Delivered a responsive, visually polished storefront experience.",
    ],
  },
  {
    slug: "silicon-infotech-corporate-website",
    title: "Silicon Infotech - Corporate Website",
    shortTitle: "Silicon Infotech",
    category: "Marketing Website",
    url: "https://silicon-infotech-website.vercel.app/",
    description:
      "Corporate website for a technology company with a professional product-facing presentation.",
    overview:
      "A clean corporate web presence built to present services, credibility, and company direction with clarity.",
    tags: ["Next.js", "ReactJS", "Corporate Web"],
    accent: "#0891b2",
    year: "2025",
    status: "Live",
    image: "/sequence/silicon.png",
    highlights: [
      "Built a polished company-facing website experience.",
      "Balanced clarity, speed, and trust-oriented design choices.",
      "Focused on straightforward navigation and strong presentation.",
    ],
  },
  {
    slug: "zrm-enterprise-crm",
    title: "ZRM - Enterprise CRM",
    shortTitle: "ZRM CRM",
    category: "CRM Platform",
    url: "https://zrm.zynapte.in/dashboard",
    description:
      "Enterprise CRM for interior operations covering lead flow, invoicing, calling integrations, and stock layers.",
    overview:
      "A production CRM built to handle day-to-day operational complexity for an interior business, from lead management to billing and inventory flow.",
    tags: ["Laravel", "PHP", "Next.js", "ReactJS", "MySQL"],
    accent: "#0f4c81",
    year: "2026",
    status: "Live",
    image: "/sequence/zrm.png",
    highlights: [
      "Built lead pipeline and invoicing workflows for real business operations.",
      "Integrated TataTeli calling flows into CRM activity handling.",
      "Supported multi-tier stock management inside the same platform.",
    ],
  },
  {
    slug: "workspace-futuristic-ai-crm",
    title: "Workspace - Futuristic AI CRM",
    shortTitle: "Workspace CRM",
    category: "AI Workflow Suite",
    url: "https://workspace.zynapte.in/",
    description:
      "Productivity suite with kanban planning, scheduling, and AI-assisted workflows for startup teams.",
    overview:
      "A modern CRM and productivity suite combining project management patterns with scheduling and AI-assisted execution.",
    tags: ["NestJS", "ReactJS", "Next.js", "MySQL"],
    accent: "#7c3aed",
    year: "2026",
    status: "Live",
    image: "/sequence/workspace.png",
    highlights: [
      "Created a Jira-style kanban experience for team coordination.",
      "Designed calendar-style scheduling inspired by familiar product patterns.",
      "Introduced AI-powered workflows to reduce manual process friction.",
    ],
  },
  {
    slug: "simbaa-playzone-management",
    title: "Simbaa - Playzone Management",
    shortTitle: "Simbaa",
    category: "Operations Software",
    url: "https://simbaa.zynapte.in/dashboard",
    description:
      "Management software for playzones and entertainment venues with practical operational tooling.",
    overview:
      "A full management platform focused on helping entertainment venues run bookings, operations, and staff workflows more smoothly.",
    tags: ["Web Platform", "Dashboard", "Operations"],
    accent: "#059669",
    year: "2026",
    status: "Live",
    image: "/sequence/simbaa.png",
    highlights: [
      "Designed around the needs of playzone and venue management.",
      "Centralized operational visibility inside a single dashboard flow.",
      "Focused on dependable everyday usability for staff teams.",
    ],
  },
  {
    slug: "myplexus-stock-management",
    title: "MyPlexus - Stock Management",
    shortTitle: "MyPlexus",
    category: "Inventory Platform",
    url: "https://www.myplexus.com/",
    description:
      "Inventory and stock management platform built to support organized business operations.",
    overview:
      "A stock-focused business platform built to improve control, visibility, and consistency across inventory-heavy workflows.",
    tags: ["Inventory", "Business Platform", "Web App"],
    accent: "#dc2626",
    year: "2025",
    status: "Live",
    highlights: [
      "Structured stock workflows into a dedicated digital platform.",
      "Improved operational clarity for inventory-driven processes.",
      "Shipped a business-focused interface with practical management tools.",
    ],
  },
  {
    slug: "zivo-offline-invoice-manager",
    title: "Zivo - Offline Invoice Manager",
    shortTitle: "Zivo",
    category: "Mobile App",
    url: "https://play.google.com/store/apps/details?id=com.zynapte.zivo",
    description:
      "Offline-first invoicing app with AI voice entry, ledger tooling, and role-based access.",
    overview:
      "An Android app designed for businesses that need invoice and POS capability even with limited or unreliable connectivity.",
    tags: ["Flutter", "Dart", "SQLite"],
    accent: "#f59e0b",
    year: "2025",
    status: "Published",
    highlights: [
      "Implemented offline-first invoice and POS workflows.",
      "Added AI-powered voice entry for faster data input.",
      "Included ledger support and RBAC for business teams.",
    ],
  },
  {
    slug: "synergy-claytech-business-website",
    title: "Synergy Claytech - Business Website",
    shortTitle: "Synergy Claytech",
    category: "Business Website",
    url: "https://www.synergyclaytech.com/",
    description:
      "Business website crafted to present brand, services, and company information with clarity.",
    overview:
      "A business-focused website experience designed to communicate offerings and brand trust for a manufacturing-oriented audience.",
    tags: ["Business Web", "Brand Site", "Frontend"],
    accent: "#b45309",
    year: "2025",
    status: "Live",
    highlights: [
      "Structured content for a clear business-first journey.",
      "Designed to support credibility and service discovery.",
      "Shipped a responsive experience for broad visitor access.",
    ],
  },
  {
    slug: "tulayraa-website",
    title: "Tulayraa - Website",
    shortTitle: "Tulayraa",
    category: "Brand Website",
    url: "https://www.tulayraa.com/",
    description:
      "Brand website built to present the business in a cleaner and more modern digital format.",
    overview:
      "A responsive website focused on visual polish, approachable content flow, and a stronger online brand presence.",
    tags: ["Brand Site", "Responsive UI", "Frontend"],
    accent: "#db2777",
    year: "2025",
    status: "Live",
    image: "/sequence/tulayara.png",
    highlights: [
      "Created a modern brand-facing website experience.",
      "Improved readability and presentation across devices.",
      "Focused on clean structure and approachable navigation.",
    ],
  },
  {
    slug: "final-touch-website",
    title: "Final Touch - Website",
    shortTitle: "Final Touch",
    category: "Company Website",
    url: "https://www.finaltouch.co.in/",
    description:
      "Company website designed to showcase services and brand identity in a clear, accessible format.",
    overview:
      "A service-oriented website built around discoverability, trust, and a straightforward path through the brand's offerings.",
    tags: ["Company Web", "Service Site", "Frontend"],
    accent: "#4f46e5",
    year: "2025",
    status: "Live",
    highlights: [
      "Built a focused service presentation for website visitors.",
      "Supported credibility through cleaner visual structure.",
      "Delivered a responsive experience that stays easy to scan.",
    ],
  },
  {
    slug: "kicgroup-corporate-website",
    title: "KIC Group - Corporate Website",
    shortTitle: "KIC Group",
    category: "Corporate Website",
    url: "https://www.kicgroup.in/",
    description:
      "Corporate website for KIC Group presenting their business, services, and brand identity with a professional digital presence.",
    overview:
      "A polished corporate web presence built to communicate KIC Group's offerings, credibility, and company direction to a professional audience.",
    tags: ["Corporate Web", "Business Site", "Frontend"],
    accent: "#b91c1c",
    year: "2025",
    status: "Live",
    image: "/sequence/kicgroup.png",
    highlights: [
      "Delivered a professional corporate website aligned with brand identity.",
      "Structured content for clear service discovery and company overview.",
      "Shipped a responsive, trust-oriented design across all devices.",
    ],
  },
];

