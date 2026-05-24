import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieConsent from "./CookieConsent";

const GA_ID = "G-F964Z5G173";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

const SITE_URL = "https://aibgin.cz";

export const metadata: Metadata = {
  title: {
    default: "AIBgin — Bezpečná a nastavitelná AI pro děti",
    template: "%s",
  },
  description:
    "Certifikovaný AI chatbot pro školy, školky a kroužky. 5 vrstev ochrany, real-time audit, crisis detection 116 111, GDPR & EU AI Act. Červnový AI Sandbox 999 Kč.",
  metadataBase: new URL(SITE_URL),
  keywords: [
    "bezpečný AI pro děti",
    "AI chatbot pro školy",
    "AI asistent pro žáky",
    "bezpečná umělá inteligence pro děti",
    "AI pro vzdělávání",
    "GDPR AI pro školy",
    "EU AI Act školy",
    "AIBgin",
  ],
  openGraph: {
    title: "AIBgin — Bezpečná a nastavitelná AI pro děti",
    description:
      "Certifikovaný AI chatbot pro školy a instituce. 5 vrstev ochrany, QR přístup, linka bezpečí 116 111. Červnový AI Sandbox 999 Kč.",
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
