import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';
import CheckoutButton from './components/CheckoutButton';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'AIBgin — Bezpečná a nastavitelná AI pro děti | Školy & instituce',
  description:
    'Certifikovaný AI chatbot pro školy, školky a zájmové kroužky. 5 vrstev ochrany, real-time AIBguard audit, crisis detection (116 111), GDPR & EU AI Act. Žádná registrace pro děti — stačí QR kód.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  keywords: [
    'bezpečný AI pro děti',
    'AI chatbot pro školy',
    'AI asistent pro žáky',
    'bezpečná umělá inteligence pro děti',
    'AI pro vzdělávání',
    'GDPR AI pro školy',
    'EU AI Act školy',
    'AIBgin',
    'bezpečnostní AI platforma',
    'QR přístup AI',
  ],
  openGraph: {
    title: 'AIBgin — Bezpečná a nastavitelná AI pro děti',
    description:
      'Certifikovaný AI chatbot pro školy a instituce. 5 vrstev ochrany, QR přístup bez registrace, linka bezpečí 116 111. Červnový AI Sandbox 999 Kč.',
    url: SITE_URL,
    siteName: 'AIBgin',
    locale: 'cs_CZ',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'AIBgin',
  applicationCategory: 'EducationalApplication',
  description:
    'Bezpečná a nastavitelná AI platforma pro instituce pracující s dětmi. 5 vrstev ochrany, crisis detection, EU AI Act.',
  url: SITE_URL,
  operatingSystem: 'Web',
  offers: {
    '@type': 'Offer',
    price: '999',
    priceCurrency: 'CZK',
    priceValidUntil: '2026-06-30',
    name: 'Červnový AI Sandbox',
  },
  provider: {
    '@type': 'Organization',
    name: 'SAY TO PAY s.r.o.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Zámostní 1155/27',
      addressLocality: 'Slezská Ostrava',
      postalCode: '710 00',
      addressCountry: 'CZ',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@aibgin.cz',
      contactType: 'customer support',
    },
  },
};

const stats = [
  { value: '5', label: 'Vrstev ochrany', sub: 'Fail-closed architektura' },
  { value: '0', label: 'Registrací pro děti', sub: 'Jen QR kód z tabule' },
  { value: '116 111', label: 'Linka bezpečí', sub: 'Crisis detection v reálném čase' },
];

const institutions = [
  { icon: '🏫', label: 'Základní školy' },
  { icon: '🎒', label: 'Mateřské školy' },
  { icon: '🌅', label: 'Školní družiny' },
  { icon: '⚽', label: 'Zájmové kroužky' },
  { icon: '🎮', label: 'Dětské kluby' },
  { icon: '🤝', label: 'Nízkoprahová centra' },
  { icon: '🏠', label: 'Domy dětí a mládeže' },
  { icon: '📚', label: 'Střední školy' },
];

const useCases = [
  {
    icon: '🏫',
    title: 'Základní školy',
    points: [
      'Výukový asistent pro 1.–9. třídu',
      'Každá třída má vlastní bezpečnostní profil',
      'Učitel vidí souhrn dotazů, ne obsah',
      'Připraveni na kontrolu ČŠI',
    ],
  },
  {
    icon: '🎒',
    title: 'Mateřské školy',
    points: [
      'Věková skupina 3–6 let — max. omezený obsah',
      'Jen pohádky, hry, básničky a příroda',
      'Žádný přístup bez QR kódu učitele',
      'Plný soulad s COPPA 2026',
    ],
  },
  {
    icon: '🌅',
    title: 'Školní družiny',
    points: [
      'Odpolední asistent pro zábavu i úkoly',
      'Automatický reset po každé skupině',
      'Vychovatel nastaví témata pro daný den',
      'Crisis detection i mimo výuku',
    ],
  },
  {
    icon: '⚽',
    title: 'Zájmové kroužky',
    points: [
      'Specializovaný chatbot pro konkrétní obor',
      'Robotický kroužek: Arduino, Python, fyzika',
      'Jazykový kroužek: konverzace v AJ/NJ',
      'Vedoucí spustí QR kód za 10 sekund',
    ],
  },
  {
    icon: '🎮',
    title: 'Dětské kluby & DDM',
    points: [
      'Flexibilní nastavení pro každou aktivitu',
      'Podpora pro nízkoprahová centra',
      'Anonymní přístup — bez sběru dat o dětech',
      'Měsíční regulatorní aktualizace automaticky',
    ],
  },
  {
    icon: '🤝',
    title: 'Střední školy & VOŠ',
    points: [
      'Věková skupina 15–18 let se širšími tématy',
      'Příprava na maturitu a přijímačky',
      'Audit log 5 let pro potřeby školy',
      'AIBSN certifikát ověřitelný rodiči',
    ],
  },
];

const quotes = [
  {
    text: 'Děti si rychle zvykly — a já jsem klidná, protože vím, že každá odpověď prošla kontrolou. QR kód na tabuli funguje skvěle.',
    name: 'Mgr. Jana K.',
    role: 'Třídní učitelka, ZŠ Ostrava',
    initials: 'JK',
    tag: 'Základní škola',
  },
  {
    text: 'Nastavení bylo hotové za půl hodiny. Kroužek může pracovat s AI hned — a já nemusím řešit, co děti uvidí.',
    name: 'Tomáš M.',
    role: 'Vedoucí robotického kroužku, DDM',
    initials: 'TM',
    tag: 'Zájmový kroužek',
  },
  {
    text: 'Jako ředitel potřebuji mít jistotu, že jsme v souladu s legislativou. AIBgin to řeší za mě — automaticky.',
    name: 'Mgr. Pavel R.',
    role: 'Ředitel ZŠ, Ostrava',
    initials: 'PR',
    tag: 'Ředitel školy',
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-white text-gray-900 font-sans">
        <Nav />

        {/* ── Hero ── */}
        <section
          className="pt-32 pb-24 px-6 text-center relative overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% -10%, #ede9ff 0%, transparent 70%), #ffffff',
          }}
        >
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
                style={{ backgroundColor: '#EDE9FF', color: '#6C47FF' }}
              >
                🛡️ Certifikovaná AI bezpečná pro děti
              </span>
              <span
                className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
                style={{ backgroundColor: '#ECFDF5', color: '#059669' }}
              >
                🇪🇺 EU AI Act Ready by Design
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight mb-6">
              AIBgin —{' '}
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C47FF 0%, #9B7AFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Bezpečná
              </span>{' '}
              AI
              <br />
              <span className="text-gray-900">pro děti & instituce</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-4 leading-relaxed">
              Bezpečný AI chatbot navržený pro každou instituci pracující s dětmi.
              Každá odpověď prochází real-time auditem. Žádná registrace pro děti —
              stačí QR kód z tabule.
            </p>
            <p className="text-sm text-gray-400 mb-10">
              Školy · Školky · Kroužky · Domy dětí a mládeže · Nízkoprahová centra
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/registrace"
                className="px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:opacity-90 shadow-lg shadow-purple-200"
                style={{ backgroundColor: '#6C47FF' }}
              >
                🚀 Červnový AI Sandbox — 999 Kč
              </Link>
              <a
                href="https://app.aibgin.cz/demo"
                className="px-8 py-4 rounded-xl font-semibold text-white text-base bg-gray-900 hover:bg-gray-800 transition-colors"
              >
                Demo
              </a>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span>✓ Bez registrace pro děti</span>
              <span>✓ GDPR & EU AI Act</span>
              <span>✓ 10 000 dotazů / měsíc na třídu</span>
              <span>✓ Linka bezpečí 116 111</span>
              <span>✓ Certifikát pilotní školy</span>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="border-y border-gray-100 bg-white py-12 px-6">
          <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-black mb-1 tabular-nums"
                  style={{ color: '#6C47FF' }}
                >
                  {s.value}
                </div>
                <div className="text-sm font-bold text-gray-800 mb-0.5">{s.label}</div>
                <div className="text-xs text-gray-400">{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Institutions ── */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto text-center">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: '#EDE9FF', color: '#6C47FF' }}
            >
              Pro koho
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-3">
              Pro každou instituci pracující s dětmi
            </h2>
            <p className="text-gray-500 mb-12 max-w-lg mx-auto">
              Jedno řešení, stovky typů institucí. Každá dostane vlastní bezpečnostní profil.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {institutions.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3"
                >
                  <span className="text-4xl">{item.icon}</span>
                  <span className="font-semibold text-sm text-gray-700 text-center">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── QR Access ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-5xl mx-auto">
            <div
              className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-10"
              style={{ background: 'linear-gradient(135deg, #EDE9FF 0%, #f5f3ff 100%)' }}
            >
              <div className="flex-1">
                <div
                  className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
                  style={{ backgroundColor: '#6C47FF', color: '#fff' }}
                >
                  Žádná registrace pro děti
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: '#1a1a2e' }}>
                  Děti přistupují přes QR kód
                  <br />
                  <span style={{ color: '#6C47FF' }}>z tabule nebo odkaz.</span>
                </h2>
                <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                  Učitel promítne QR kód. Dítě naskenuje telefonem. Hotovo.
                  Žádná registrace, žádné heslo, žádný účet.
                  Správce má plný přehled — děti mají nulovou digitální stopu.
                </p>
                <ul className="space-y-3">
                  {[
                    'QR kód se vygeneruje v dashboardu jedním klikem',
                    'Každá třída/skupina má vlastní bezpečnostní profil',
                    'Správce vidí souhrn konverzací, ne jejich obsah',
                    'Automatický reset po skončení hodiny',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-700">
                      <span
                        className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                        style={{ backgroundColor: '#6C47FF' }}
                      >
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="shrink-0">
                <div
                  className="w-48 h-48 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center gap-3 border-4"
                  style={{ borderColor: '#6C47FF' }}
                >
                  <div className="grid grid-cols-5 gap-0.5">
                    {Array.from({ length: 25 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-3 h-3 rounded-sm"
                        style={{
                          backgroundColor: [0, 1, 2, 3, 4, 5, 9, 10, 14, 15, 19, 20, 21, 22, 23, 24, 6, 8, 16, 18].includes(i)
                            ? '#6C47FF'
                            : '#EDE9FF',
                        }}
                      />
                    ))}
                  </div>
                  <p className="text-xs font-bold text-center px-4" style={{ color: '#6C47FF' }}>
                    Naskenuj a začni
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Safety teaser ── */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto text-center">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
              style={{ backgroundColor: '#EDE9FF', color: '#6C47FF' }}
            >
              5 vrstev ochrany
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Bezpečnost není volitelná funkce.
              <br />
              <span style={{ color: '#6C47FF' }}>Je to architektura.</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto mb-10">
              Každá vrstva funguje nezávisle. Pokud selže jedna, ostatní blokují.
              Fail-closed od základů.
            </p>
            <Link
              href="/bezpecnost"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-opacity hover:opacity-90 shadow-md"
              style={{ backgroundColor: '#6C47FF' }}
            >
              Více o bezpečnosti →
            </Link>
          </div>
        </section>

        {/* ── Use Cases ── */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: '#EDE9FF', color: '#6C47FF' }}
              >
                Jak to funguje v praxi
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                Jedno řešení pro každou instituci
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                Každý typ instituce dostane profil přizpůsobený věku a kontextu.
                Bez IT oddělení, bez programování.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {useCases.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl p-7 border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{c.icon}</div>
                  <h3 className="font-black text-lg mb-4">{c.title}</h3>
                  <ul className="space-y-2">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                        <span
                          className="mt-0.5 shrink-0 font-bold"
                          style={{ color: '#6C47FF' }}
                        >
                          ✓
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── References ── */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: '#EDE9FF', color: '#6C47FF' }}
              >
                Reference
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Co říkají pedagogové</h2>
              <p className="text-gray-400 text-sm max-w-md mx-auto">
                Ilustrativní reference — skutečné zkušenosti zákazníků doplníme při spuštění.
                Chcete být mezi prvními?{' '}
                <Link href="/kontakt" style={{ color: '#6C47FF' }} className="underline">
                  Napište nám.
                </Link>
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {quotes.map((q) => (
                <div
                  key={q.name}
                  className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col"
                >
                  <div
                    className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full self-start mb-4"
                    style={{ backgroundColor: '#EDE9FF', color: '#6C47FF' }}
                  >
                    {q.tag}
                  </div>
                  <div className="text-4xl mb-3" style={{ color: '#6C47FF' }}>
                    "
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic flex-1">{q.text}</p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                      style={{ backgroundColor: '#6C47FF' }}
                    >
                      {q.initials}
                    </div>
                    <div>
                      <p className="font-bold text-sm">{q.name}</p>
                      <p className="text-gray-400 text-xs">{q.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-20 px-6 bg-white">
          <div
            className="max-w-4xl mx-auto rounded-3xl p-12 text-center text-white"
            style={{ background: 'linear-gradient(135deg, #6C47FF 0%, #9B7AFF 100%)' }}
          >
            <h2 className="text-3xl md:text-4xl font-black mb-4">Připraveni začít?</h2>
            <p className="text-lg text-purple-100 mb-2 max-w-xl mx-auto">
              999 Kč jednorázově — přístup do 30. června 2026.
              Nastavení za 30 minut, první QR kód pro třídu za hodinu.
            </p>
            <p className="text-sm text-purple-200 mb-8">
              AIBgin je jediné edukační AI v ČR navržené s technickou garancí bezpečnosti
              podle EU AI Actu.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CheckoutButton
                href="/registrace"
                className="px-8 py-4 rounded-xl font-bold text-base bg-white transition-opacity hover:opacity-90"
                style={{ color: '#6C47FF' }}
              >
                Koupit přístup — 999 Kč →
              </CheckoutButton>
              <a
                href="https://app.aibgin.cz/demo"
                className="px-8 py-4 rounded-xl font-bold text-base bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/30"
              >
                Demo
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
