import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieConsent from "./CookieConsent";

const GA_ID = "G-F964Z5G173";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

const SITE_URL = "https://aibgin.cz";

export const metadata: Metadata = {
  title: "AIBgin — Bezpečná a nastavitelná AI pro děti",
  description:
    "AI chatbot pro školy a děti. 5 vrstev ochrany, crisis detection, GDPR, EU AI Act. Žádná registrace pro děti — stačí QR kód. Od 490 Kč/měsíc.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: SITE_URL,
  },
  keywords: [
    "bezpečný AI pro děti",
    "AI chatbot pro školy",
    "AI asistent pro žáky",
    "bezpečná umělá inteligence pro děti",
    "AI pro vzdělávání",
    "GDPR AI pro školy",
    "white-label AI chatbot",
  ],
  openGraph: {
    title: "AIBgin — Bezpečná a nastavitelná AI pro děti",
    description: "Bezpečný AI chatbot pro každou instituci pracující s dětmi. 5 vrstev ochrany, QR přístup, linka bezpečí 116 111.",
    url: SITE_URL,
    siteName: "AIBgin",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" className={inter.className}>
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
      </body>
    </html>
  );
}
