import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://avinashkumar.online"),
  title: "Avinash Kumar — Founder, TapToTravel | Builder of Smart Mobility Systems",
  description: "Avinash Kumar is the Founder of TapToTravel — India's first NFC tap-to-board smart mobility platform. Full-stack builder working across Flutter, IoT hardware, AI, and cloud infrastructure.",
  keywords: "Avinash Kumar, TapToTravel, Founder TapToTravel, Smart Mobility India, NFC, Flutter Developer, IoT Builder",
  openGraph: {
    title: "Avinash Kumar — Founder, TapToTravel",
    description: "Full-stack builder designing real-world systems combining software, AI, and hardware. Founder of TapToTravel.",
    url: "https://avinashkumar.online",
    siteName: "Avinash Kumar",
    images: [{
      url: "/og-image.png",
      width: 1200,
      height: 630,
      alt: "Avinash Kumar — Founder, TapToTravel",
    }],
    locale: "en_IN",
    type: "profile",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avinash Kumar — Founder, TapToTravel",
    description: "Building real-world systems combining software, AI, and hardware.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
