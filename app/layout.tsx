import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieConsent from "./CookieConsent";
import CookieBanner from "./components/CookieBanner";

const GA_ID = "G-F964Z5G173";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

const SITE_URL = "https://aibgin.cz";

// ÚKOL 4: Aktualizovaný description
const metaDescription = "AIBgin nabízí bezpečnou AI pro základní školy, mateřské školy a volnočasové instituce. GDPR & EU AI Act. Červnový Sandbox 999 Kč.";

// ÚKOL 1: Schema.org — SoftwareApplication + WebSite dle zadání
const jsonLdApp = {
  "@context": "https://schema.org",
  "@type": ["SoftwareApplication", "WebSite"],
  name: "AIBgin",
  url: SITE_URL,
  applicationCategory: "EducationApplication",
  operatingSystem: "Web",
  description: "Bezpečná AI platforma pro děti a instituce — EU AI Act Ready",
  isPartOf: { "@type": "Organization", name: "AIBlab", url: "https://aiblab.cz" },
  offers: {
    "@type": "Offer",
    price: "999",
    priceCurrency: "CZK",
    description: "Červnový AI Sandbox",
  },
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AIBgin",
  url: SITE_URL,
  isPartOf: { "@type": "Organization", name: "AIBlab", url: "https://aiblab.cz" },
  sameAs: ["https://aiblab.cz", "https://aibguardian.cz", "https://aibsn.org", "https://aibaimy.cloud"],
};

export const metadata: Metadata = {
  title: {
    default: "AIBgin — Bezpečná AI platforma pro školy | EU AI Act Ready",
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdApp) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
      </head>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>
        {children}
        <CookieConsent />
        <CookieBanner />
      </body>
    </html>
  );
}
