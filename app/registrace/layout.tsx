import type { Metadata } from 'next';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'Registrace | AIBgin — Červnový AI Sandbox',
  description: 'Registrace do Červnového AI Sandboxu — bezpečná AI pro vaši třídu za 999 Kč. Přístup do 30. 6. 2026, QR kód bez registrace dětí, AIBguard audit, certifikát pilotní školy.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/registrace` },
  openGraph: {
    title: 'Registrace | AIBgin — Červnový AI Sandbox',
    description: 'Registrace do Červnového AI Sandboxu — bezpečná AI pro vaši třídu za 999 Kč. Přístup do 30. 6. 2026, QR kód bez registrace dětí, AIBguard audit, certifikát pilotní školy.',
    url: `${SITE_URL}/registrace`,
    siteName: 'AIBgin',
    locale: 'cs_CZ',
    type: 'website',
    images: [
      {
        url: `${SITE_URL}/logo.png`,
        width: 1200,
        height: 630,
        alt: 'AIBgin — Bezpečná AI pro děti & školy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Registrace | AIBgin — Červnový AI Sandbox',
    description: 'Registrace do Červnového AI Sandboxu — bezpečná AI pro vaši třídu za 999 Kč. Přístup do 30. 6. 2026, QR kód bez registrace dětí, AIBguard audit, certifikát pilotní školy.',
    images: [`${SITE_URL}/logo.png`],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
