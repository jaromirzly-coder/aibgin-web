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
  name: "SAY TO PAY s.r.o.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  identifier: "08694222",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Zámostní 1155/27",
    addressLocality: "Slezská Ostrava",
    postalCode: "710 00",
    addressCountry: "CZ",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "support@aibgin.cz",
      contactType: "customer support",
      telephone: "+420723657885",
      availableLanguage: "Czech",
    },
    {
      "@type": "ContactPoint",
      email: "platby@aibgin.cz",
      contactType: "billing support",
      availableLanguage: "Czech",
    },
  ],
  sameAs: ["https://aiblab.cz", "https://aibaimy.cloud", "https://aibsn.org"],
};

const jsonLdFAQ = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { "@type": "Question", "name": "Jak děti přistupují k AIBgin bez registrace?", "acceptedAnswer": { "@type": "Answer", "text": "Učitel promítne QR kód vygenerovaný v dashboardu. Dítě ho naskenuje a okamžitě přistupuje k platformě bez registrace, e-mailu ani hesla. Po skončení hodiny se session automaticky resetuje." } },
    { "@type": "Question", "name": "Je AIBgin v souladu s EU AI Act a GDPR?", "acceptedAnswer": { "@type": "Answer", "text": "Ano. AIBgin bylo navrženo v souladu s EU 2024/1689. AI systémy ve vzdělávání jsou HIGH-RISK — AIBgin splňuje všechny požadavky: risk assessment, data governance, transparentnost, lidský dohled." } },
    { "@type": "Question", "name": "Co se stane při detekci krizové situace?", "acceptedAnswer": { "@type": "Answer", "text": "4. vrstva ochrany detekuje krizové vzorce. Správce je okamžitě notifikován a systém zahájí protokol pro kontakt s Linkou bezpečí 116 111." } },
    { "@type": "Question", "name": "Jak rychle lze AIBgin nastavit?", "acceptedAnswer": { "@type": "Answer", "text": "Nastavení trvá 30 minut. První QR kód pro třídu lze mít za hodinu od registrace." } },
    { "@type": "Question", "name": "Kolik dotazů je zahrnuto v ceně?", "acceptedAnswer": { "@type": "Answer", "text": "Červnový AI Sandbox za 999 Kč zahrnuje 10 000 dotazů měsíčně na třídu s přístupem do 30. června 2026." } }
  ]
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
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      </head>
      <body>
      {children}
        <CookieConsent />
        <CookieBanner />
      </body>
    </html>
  );
}
