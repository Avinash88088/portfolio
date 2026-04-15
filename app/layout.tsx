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
  title: "Avinash Kumar | Founder & Developer at TapToTravel",
  description: "Official portfolio of Avinash Kumar, Founder and Lead Developer of TapToTravel. Specializing in smart mobility, IoT, Flutter, and Full-Stack development.",
  keywords: "Avinash Kumar, TapToTravel, Founder TapToTravel, Avinash Kumar TapToTravel, Developer, IoT, Flutter Developer, Smart Mobility",
  openGraph: {
    title: "Avinash Kumar | Founder & Tech Lead at TapToTravel",
    description: "Welcome to my official digital space. Exploring the intersection of hardware, AI, and smart mobility at TapToTravel.",
    url: "https://avinashkumar.online",
    siteName: "Avinash Kumar",
    images: [{
      url: "https://taptotravel.co.in/assets/img/hero-img.png",
      width: 800,
      height: 600,
    }],
    locale: "en_IN",
    type: "website",
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
