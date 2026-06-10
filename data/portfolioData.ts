// ─────────────────────────────────────────────────────────────
// Single source of truth for the entire portfolio + SEO entity
// ─────────────────────────────────────────────────────────────

export const SITE_URL = "https://avinashkumar.online";

export const portfolioData = {
  person: {
    name: "Avinash Kumar",
    givenName: "Avinash",
    familyName: "Kumar",
    // Helps Google reconcile the same entity across queries
    aliases: ["Avinash Kumar TapToTravel", "Avinash Kumar Founder", "Avinash TapToTravel"],
    role: "Founder & CEO, TapToTravel",
    shortRole: "Founder & Builder",
    location: "Gorakhpur, India",
    email: "hello@avinashkumar.online",
    image: `${SITE_URL}/avinash-photo.jpg`,
    photo: "/avinash-photo-dark.png",
    tagline:
      "Building India's first NFC-powered public-transport system — turning everyday transit into smart infrastructure.",
    bio: [
      "I'm a founder and full-stack builder focused on shipping real-world systems where software, AI and hardware meet. I think in products, not features.",
      "I built TapToTravel from zero — designing the NFC hardware, writing the Flutter apps, deploying cloud functions, and running the entire product as a solo founder. MCA from AKTU Lucknow, grounded in AI, ML & IoT.",
    ],
  },

  // schema.org sameAs — keep these IDENTICAL across every profile
  socials: [
    { label: "LinkedIn", short: "in", href: "https://linkedin.com/in/avinash-kumar-4a555b231" },
    { label: "GitHub", short: "GH", href: "https://github.com/Avinash88088" },
    { label: "Email", short: "@", href: "mailto:hello@avinashkumar.online" },
  ],

  // Google-panel-style quick facts
  facts: [
    { label: "Role", value: "Founder & CEO" },
    { label: "Company", value: "TapToTravel" },
    { label: "Based in", value: "Gorakhpur, India" },
    { label: "Founded", value: "2024" },
    { label: "Education", value: "MCA · AKTU" },
    { label: "Focus", value: "Smart Mobility" },
  ],

  hero: {
    status: "Live Pilot Running · Gorakhpur",
    primaryCta: { label: "View TapToTravel", href: "https://taptotravel.co.in" },
    secondaryCta: { label: "Partner / Invest", href: "#contact" },
    trust: ["100+ rides tested", "Pilot: Gorakhpur", "Real-time GPS + NFC"],
  },

  stats: [
    { value: "2+", label: "Years Building" },
    { value: "1", label: "Live Startup" },
    { value: "MCA", label: "AKTU Graduate" },
    { value: "100+", label: "Rides Tested" },
  ],

  company: {
    name: "TapToTravel",
    url: "https://taptotravel.co.in",
    description: "India's first NFC tap-to-board smart mobility platform.",
  },

  ventures: [
    {
      name: "TapToTravel",
      status: "Live Startup · Feb 2024 – Present",
      url: "https://taptotravel.co.in",
      description:
        "India's #1 NFC tap-to-board mobility platform for auto rickshaws, e-rickshaws & buses. Live GPS fare calculation, an AI voice assistant (Vira), offline-first architecture, and a real-time driver dashboard.",
      tech: ["Flutter", "Node.js", "Firebase", "NFC / RFID", "GPS", "AI / ML", "ESP32"],
    },
  ],

  experience: [
    {
      role: "Founder & CEO",
      company: "TapToTravel",
      timeframe: "2024 – Present",
      description:
        "India's first NFC-based tap-to-board smart mobility platform. Own the architecture, hardware, product, and business strategy end-to-end.",
    },
    {
      role: "Lead Developer",
      company: "IoT & AI Systems",
      timeframe: "2020 – 2023",
      description:
        "Built robust IoT hardware ecosystems, real-time tracking, AI intent resolution, and modern app interfaces with Flutter & React.",
    },
  ],

  skills: [
    { group: "Languages", items: ["C++", "Java", "JavaScript", "Dart", "Python"] },
    { group: "App Development", items: ["Flutter", "Dart", "React", "Next.js"] },
    { group: "Backend & Cloud", items: ["Node.js", "Firebase", "Firestore", "Cloud Functions"] },
    { group: "Hardware & IoT", items: ["Arduino", "ESP32", "NFC / RFID", "GPS Modules"] },
  ],

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      school: "Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow",
      meta: "AI, ML & IoT · 2023 – 2025 · First Division",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "Deen Dayal Upadhyaya Gorakhpur University (DDU)",
      meta: "Coding & Fundamentals · 2020 – 2023",
    },
  ],

  knowsAbout: [
    "Flutter", "Dart", "IoT", "NFC", "RFID", "ESP32", "Firebase",
    "Cloud Functions", "Node.js", "AI", "Machine Learning",
    "Smart Mobility", "GPS Tracking",
  ],

  alumniOf: "Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow",

  nav: [
    { name: "About", href: "#about" },
    { name: "Ventures", href: "#ventures" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
  ],

  footer: {
    text: "Avinash Kumar — Founder, TapToTravel.",
  },

  seo: {
    title: "Avinash Kumar — Founder, TapToTravel | Builder of Smart Mobility Systems",
    description:
      "Avinash Kumar is the Founder of TapToTravel — India's first NFC tap-to-board smart mobility platform. Full-stack builder across Flutter, IoT hardware, AI, and cloud.",
    keywords: [
      "Avinash Kumar", "Avinash Kumar TapToTravel", "TapToTravel", "Founder TapToTravel",
      "Smart Mobility India", "NFC Mobility", "Flutter Developer", "IoT Builder",
      "AI Developer", "Gorakhpur", "AKTU", "Full Stack Developer",
    ],
  },
};

export type PortfolioData = typeof portfolioData;
