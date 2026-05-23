import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import CookieConsent from "./CookieConsent";

const GA_ID = "G-F964Z5G173";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "AIBgin — Bezpečná a nastavitelná AI pro děti",
  description:
    "AI chatbot pro školy, školky, kroužky a domy dětí a mládeže. 5 vrstev ochrany, crisis detection, COPPA 2026, EU AI Act. Žádná registrace pro děti — stačí QR kód. Od 490 Kč/měsíc.",
  metadataBase: new URL("https://aibgin.cz"),
  openGraph: {
    title: "AIBgin — Bezpečná a nastavitelná AI pro děti",
    description: "Bezpečný AI chatbot pro každou instituci pracující s dětmi. 5 vrstev ochrany, QR přístup, linka bezpečí 116 111.",
    url: "https://aibgin.cz",
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
