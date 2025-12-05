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
  title: {
    default: "Tiger Tronics - FTC Team #32561",
    template: "%s | Tiger Tronics"
  },
  description: "Tiger Tronics is a competitive robotics team (FTC Team #32561) from Harmony School of Innovation in Dallas, Texas. We design, build, and program robots for FIRST Tech Challenge competitions.",
  keywords: ["FTC", "FIRST Tech Challenge", "robotics", "Tiger Tronics", "Team 32561", "Dallas robotics", "student robotics", "STEM education"],
  authors: [{ name: "Tiger Tronics" }],
  creator: "Tiger Tronics",
  publisher: "Tiger Tronics",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hsi-tiger-tronics.vercel.app",
    siteName: "HSI Tiger Tronics",
    title: "HSI Tiger Tronics - FTC Team #32561",
    description: "HSI Tiger Tronics is a competitive robotics team (FTC Team #32561) from Harmony School of Innovation in Dallas, Texas. We design, build, and program robots for FIRST Tech Challenge competitions.",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "HSI Tiger Tronics Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HSI Tiger Tronics | FTC Team #32561",
    description: "HSI Tiger Tronics is a competitive robotics team (FTC Team #32561) from Harmony School of Innovation in Dallas, Texas. We design, build, and program robots for FIRST Tech Challenge competitions.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
    shortcut: "/images/logo.png",
  },
  metadataBase: new URL("https://hsi-tiger-tronics.vercel.app"),
  alternates: {
    canonical: "/",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tiger Tronics",
  "alternateName": "FTC Team #32561",
  "url": "https://hsi-tiger-tronics.vercel.app",
  "logo": "https://hsi-tiger-tronics.vercel.app/images/logo.png",
  "description": "HSI Tiger Tronics is a competitive robotics team (FTC Team #32561) from Harmony School of Innovation in Dallas, Texas. We design, build, and program robots for FIRST Tech Challenge competitions.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dallas",
    "addressRegion": "Texas",
    "addressCountry": "US"
  },
  "email": "hsitigertronics@gmail.com",
  "sameAs": [
    "https://www.instagram.com/hsi_tiger_tronics/",
  ]
};

const sportsTeamSchema = {
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  "name": "Tiger Tronics",
  "sport": "Robotics",
  "memberOf": {
    "@type": "Organization",
    "name": "FIRST Tech Challenge"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, sportsTeamSchema]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
