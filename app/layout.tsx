import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieConsent from "./CookieConsent";
import CookieBanner from "./components/CookieBanner";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

const SITE_URL = "https://aibgin.cz";

const metaDescription = "AIBgin je bezpečná AI vzdělávací platforma pro děti a školy. 5 vrstev ochrany, QR přístup, real-time audit. Certifikovaná podle EU AI Act. Červnový AI Sandbox od 999 Kč.";

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SAY TO PAY s.r.o. / AIBgin",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zámostní 1155/27",
    addressLocality: "Slezská Ostrava",
    postalCode: "710 00",
    addressCountry: "CZ",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@aibgin.cz",
    contactType: "customer support",
    telephone: "+420723657885",
  },
  identifier: "08694222",
  sameAs: ["https://aiblab.cz", "https://aibguardian.cz", "https://aibsn.org", "https://aibaimy.cloud"],
};

const jsonLdProduct = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Červnový AI Sandbox",
  description: "Bezpečná AI platforma pro třídu až 35 dětí, přístup do 30.6.2026",
  url: SITE_URL,
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "CZK",
    priceValidUntil: "2026-06-30",
    availability: "https://schema.org/InStock",
    seller: { "@type": "Organization", name: "SAY TO PAY s.r.o." },
  },
};

export const metadata: Metadata = {
  title: {
    default: "AIBgin — Bezpečná AI platforma pro děti & školy | EU AI Act Ready",
    template: "%s",
  },
  description: metaDescription,
  metadataBase: new URL(SITE_URL),
  keywords: [
    "AIBgin",
    "bezpečná AI pro děti",
    "AI platforma pro školy",
    "EU AI Act",
    "QR přístup",
    "AIBguard",
    "vzdělávací AI",
    "AI chatbot pro děti",
    "Červnový AI Sandbox",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "AIBgin — Bezpečná AI pro děti & školy",
    description: metaDescription,
    url: SITE_URL,
    siteName: "AIBgin",
    locale: "cs_CZ",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 1200,
        height: 630,
        alt: "AIBgin — Bezpečná AI pro děti & školy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AIBgin — Bezpečná AI platforma pro děti & školy",
    description: metaDescription,
    images: [`${SITE_URL}/logo.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={inter.className}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdProduct) }} />
      </head>
      <body>
        {children}
        <CookieConsent />
        <CookieBanner />
      </body>
    </html>
  );
}
