import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { portfolioData, SITE_URL } from "@/data/portfolioData";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const { person, company, seo } = portfolioData;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  authors: [{ name: person.name, url: SITE_URL }],
  creator: person.name,
  publisher: person.name,
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: `${person.name} — Founder, ${company.name}`,
    description: seo.description,
    url: SITE_URL,
    siteName: person.name,
    locale: "en_IN",
    type: "profile",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${person.name} — Founder, ${company.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${person.name} — Founder, ${company.name}`,
    description: seo.description,
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    // TODO: Replace with your real Google Search Console verification string
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const personJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    givenName: person.givenName,
    familyName: person.familyName,
    alternateName: person.aliases,
    jobTitle: "Founder",
    url: SITE_URL,
    image: person.image,
    email: person.email,
    description: seo.description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gorakhpur",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "Organization",
      name: company.name,
      url: company.url,
      description: company.description,
      founder: {
        "@type": "Person",
        name: person.name,
        url: SITE_URL,
      },
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: portfolioData.alumniOf,
    },
    sameAs: portfolioData.socials
      .filter((s) => s.href.startsWith("http"))
      .map((s) => s.href),
    knowsAbout: portfolioData.knowsAbout,
  });

  const orgJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    url: company.url,
    logo: `${SITE_URL}/og-image.png`,
    description: company.description,
    founder: {
      "@type": "Person",
      name: person.name,
      url: SITE_URL,
    },
    sameAs: [company.url],
  });

  const profilePageJson = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: SITE_URL,
    name: seo.title,
    description: seo.description,
    mainEntity: {
      "@type": "Person",
      name: person.name,
      url: SITE_URL,
      image: person.image,
    },
  });

  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: personJson }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: orgJson }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: profilePageJson }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
