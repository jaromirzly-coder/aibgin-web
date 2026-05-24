import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'Kontakt | AIBgin — Technická podpora a dotazy',
  description:
    'Kontaktujte tým AIBgin. Technická podpora: support@aibgin.cz. Fakturace: platby@aibgin.cz. SAY TO PAY s.r.o., Slezská Ostrava. Odpovídáme do 24 hodin.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/kontakt` },
  keywords: [
    'AIBgin kontakt',
    'AI podpora školy',
    'AIBgin podpora',
    'kontakt edukační AI',
    'SAY TO PAY',
  ],
  openGraph: {
    title: 'Kontakt | AIBgin — Technická podpora a dotazy',
    description:
      'Kontaktujte tým AIBgin. support@aibgin.cz · platby@aibgin.cz · SAY TO PAY s.r.o., Slezská Ostrava.',
    url: `${SITE_URL}/kontakt`,
    siteName: 'AIBgin',
    locale: 'cs_CZ',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: 'Kontakt — AIBgin',
  url: `${SITE_URL}/kontakt`,
  isPartOf: { '@type': 'WebSite', url: SITE_URL },
  mainEntity: {
    '@type': 'Organization',
    name: 'SAY TO PAY s.r.o.',
    url: SITE_URL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Zámostní 1155/27',
      addressLocality: 'Slezská Ostrava',
      postalCode: '710 00',
      addressCountry: 'CZ',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        email: 'support@aibgin.cz',
        contactType: 'customer support',
        availableLanguage: 'Czech',
      },
      {
        '@type': 'ContactPoint',
        email: 'platby@aibgin.cz',
        contactType: 'billing support',
        availableLanguage: 'Czech',
      },
    ],
  },
};

const contacts = [
  {
    icon: '🛠️',
    title: 'Technická podpora',
    email: 'support@aibgin.cz',
    desc: 'Nastavení, onboarding, technické problémy a dotazy k platformě.',
    responseTime: 'Odpovídáme do 24 hodin',
  },
  {
    icon: '🧾',
    title: 'Fakturace a platby',
    email: 'platby@aibgin.cz',
    desc: 'Otázky k fakturám, platbám, daňovým dokladům a IČO fakturaci.',
    responseTime: 'Odpovídáme do 48 hodin',
  },
  {
    icon: '⚖️',
    title: 'Compliance a GDPR',
    email: 'support@aibgin.cz',
    desc: 'DPA smlouvy, GDPR dotazy, EU AI Act dokumentace, audit pro ČŠI.',
    responseTime: 'Předmět: GDPR/Compliance',
  },
];

const channels = [
  {
    icon: '📧',
    label: 'E-mail',
    value: 'support@aibgin.cz',
    href: 'mailto:support@aibgin.cz',
  },
  {
    icon: '🌐',
    label: 'Web app',
    value: 'app.aibgin.cz',
    href: 'https://app.aibgin.cz',
  },
  {
    icon: '📋',
    label: 'Certifikace AIBSN',
    value: 'aibsn.org',
    href: 'https://aibsn.org',
  },
];

export default function KontaktPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white text-gray-900">
        <Nav />

        {/* ── Hero ── */}
        <section
          className="pt-32 pb-20 px-6 text-center relative overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% -5%, #ede9ff 0%, transparent 65%), #ffffff',
          }}
        >
          <div className="max-w-2xl mx-auto">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: '#EDE9FF', color: '#6C47FF' }}
            >
              Jsme tady pro vás
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              Jak vám
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C47FF 0%, #9B7AFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                můžeme pomoci?
              </span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Tým AIBgin odpovídá do 24 hodin. Při onboardingu vám vždy nabídneme
              průvodní call zdarma.
            </p>
          </div>
        </section>

        {/* ── Contact Cards ── */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {contacts.map((c) => (
                <div
                  key={c.title}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="text-3xl mb-4">{c.icon}</div>
                  <h2 className="font-black text-lg mb-2">{c.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{c.desc}</p>
                  <a
                    href={`mailto:${c.email}`}
                    className="font-bold text-sm transition-colors hover:opacity-80"
                    style={{ color: '#6C47FF' }}
                  >
                    {c.email}
                  </a>
                  <p className="text-xs text-gray-400 mt-1">{c.responseTime}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Company info + channels ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                style={{ backgroundColor: '#EDE9FF', color: '#6C47FF' }}
              >
                O společnosti
              </div>
              <h2 className="text-2xl md:text-3xl font-black mb-5">SAY TO PAY s.r.o.</h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex gap-3">
                  <span className="shrink-0 text-lg">📍</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Sídlo</p>
                    <p className="text-sm">Zámostní 1155/27, Slezská Ostrava, 710 00</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 text-lg">🏗️</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Ekosystém</p>
                    <p className="text-sm">AIBgin · AIBguard · AIBSN</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="shrink-0 text-lg">🇪🇺</span>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Jurisdikce a data</p>
                    <p className="text-sm">Data výhradně v EU (Frankfurt) · Smlouvy v češtině</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                style={{ backgroundColor: '#EDE9FF', color: '#6C47FF' }}
              >
                Kanály
              </div>
              <h2 className="text-2xl md:text-3xl font-black mb-5">Kde nás najdete</h2>
              <div className="space-y-4">
                {channels.map((ch) => (
                  <a
                    key={ch.label}
                    href={ch.href}
                    className="flex items-center gap-4 p-4 rounded-2xl border border-gray-100 hover:border-purple-200 hover:bg-gray-50 transition-all group"
                  >
                    <span className="text-2xl">{ch.icon}</span>
                    <div className="flex-1">
                      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-0.5">
                        {ch.label}
                      </p>
                      <p className="font-semibold text-gray-800 text-sm group-hover:text-purple-700 transition-colors">
                        {ch.value}
                      </p>
                    </div>
                    <span className="text-gray-300 group-hover:text-purple-400 transition-colors">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Quick actions ── */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl font-black mb-8">Nebo rovnou začněte</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://app.aibgin.cz/api/stripe/create-checkout?plan=sandbox"
                className="px-8 py-4 rounded-xl font-bold text-white text-base transition-opacity hover:opacity-90 shadow-lg shadow-purple-200"
                style={{ backgroundColor: '#6C47FF' }}
              >
                Koupit AI Sandbox — 999 Kč →
              </a>
              <a
                href="https://app.aibgin.cz/demo"
                className="px-8 py-4 rounded-xl font-semibold text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                Vyzkoušet demo zdarma
              </a>
            </div>
            <p className="text-xs text-gray-400 mt-6">
              Máte dotaz ke compliance?{' '}
              <Link href="/compliance" style={{ color: '#6C47FF' }} className="underline">
                Přečtěte si stránku o regulaci →
              </Link>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
