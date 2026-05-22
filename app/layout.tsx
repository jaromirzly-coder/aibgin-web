import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: "AIBgin — White-label AI chatbot platforma",
  description:
    "Nasaďte vlastní AI chatbot s vaším brandem, GDPR compliance a plnou kontrolou. Starter od 490 Kč/měsíc.",
  metadataBase: new URL("https://aibgin.cz"),
  openGraph: {
    title: "AIBgin — White-label AI chatbot platforma",
    description: "Váš AI asistent. Vaše značka. Vaše pravidla.",
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
      <body>{children}</body>
    </html>
  );
}
