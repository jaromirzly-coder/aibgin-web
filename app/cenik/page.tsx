import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CheckoutButton from '../components/CheckoutButton';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'Ceník | AIBgin — Červnový AI Sandbox 999 Kč',
  description:
    'Červnový AI Sandbox pro školy: 999 Kč jednorázově, platnost do 30. 6. 2026, bez trialu, bez automatického obnovení. 1 třída, 20–35 dětí, AIBguard, QR přístup, crisis detection.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/cenik` },
  keywords: [
    'AIBgin cena',
    'AI pro školy cena',
    'červnový AI sandbox',
    'AI chatbot pro třídu',
    '999 Kč AI škola',
    'bezpečná AI pro děti cena',
  ],
  openGraph: {
    title: 'Ceník | AIBgin — Červnový AI Sandbox 999 Kč',
    description:
      'Červnový AI Sandbox: 999 Kč jednorázově do 30. 6. 2026. Zahrnuje 1 třídu, AIBguard, QR přístup, crisis detection a certifikát pilotní školy.',
    url: `${SITE_URL}/cenik`,
    siteName: 'AIBgin',
    locale: 'cs_CZ',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Ceník — AIBgin',
  url: `${SITE_URL}/cenik`,
  isPartOf: { '@type': 'WebSite', url: SITE_URL },
  mainEntity: {
    '@type': 'Product',
    name: 'Červnový AI Sandbox',
    description:
      'Přístup k AIBginu pro jednu třídu nebo kroužek, platnost do 30. 6. 2026. Zahrnuje AIBguard, QR přístup, crisis detection, audit log a certifikát pilotní školy.',
    offers: {
      '@type': 'Offer',
      price: '999',
      priceCurrency: 'CZK',
      priceValidUntil: '2026-06-30',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'SAY TO PAY s.r.o.' },
    },
  },
};

const sandboxFeatures = [
  '1 třída nebo kroužek',
  '20–35 dětí · 1 pedagog',
  '10 000 dotazů / měsíc · po vyčerpání možnost dokoupení',
  'AIBguard real-time audit',
  'QR kód přístup bez registrace',
  'Crisis detection + Linka bezpečí 116 111',
  'Základní audit log',
  'Onboarding + bezpečnostní konfigurace',
  '🏅 Certifikát pilotní školy AIBgin',
];

const septemberPlans = [
  {
    name: 'Starter',
    price: '1 990',
    target: 'MŠ · kroužky · družiny',
    features: ['50 dětí · 5 pedagogů', 'AIBguard + QR přístup', 'Crisis detection', 'Audit log 5 let'],
  },
  {
    name: 'School',
    price: '4 990',
    target: 'Celá ZŠ nebo SŠ',
    features: [
      '300 dětí · 30 pedagogů',
      'AIBguard advanced',
      'Crisis detection',
      'Audit log 5 let',
      'Prioritní podpora',
    ],
  },
  {
    name: 'Enterprise',
    price: null,
    target: 'Sítě škol · DDM · města',
    features: [
      'Neomezeno + SLA',
      'Centrální správa',
      'Dedikovaný account manager',
      'Vlastní API',
    ],
  },
];

const faqs = [
  {
    q: 'Proč 999 Kč a ne více?',
    a: 'Červnový AI Sandbox je pilotní nabídka navržená tak, aby si každá škola mohla AIBgin vyzkoušet bez rizika. Chceme, aby rozhodnutí o přijetí AI do výuky bylo snadné a dostupné.',
  },
  {
    q: 'Co se stane po 30. 6. 2026?',
    a: 'Přístup vyprší. Žádné automatické obnovení, žádné strhávání peněz. Do 30. 6. vám nabídneme individuální letní nabídku pro testování bez žáků — zájemci napište na <a href="mailto:hello@aibgin.cz" style="color:#6C47FF">hello@aibgin.cz</a>',
  },
  {
    q: 'Potřebuji souhlas rodičů?',
    a: 'AIBgin nezpracovává žádné osobní údaje dětí — děti se neregistrují a neposkytují žádné osobní informace. Přístup přes QR kód je anonymní. Proto souhlas rodičů pro používání AIBginu není vyžadován.',
  },
  {
    q: 'Jak rychle je platforma aktivní po zaplacení?',
    a: 'Ihned. Onboarding trvá asi 5 minut a první QR kód pro třídu vygenerujete ihned potom.',
  },
];

export default function CenikPage() {
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
          <div className="max-w-3xl mx-auto">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: '#EDE9FF', color: '#6C47FF' }}
            >
              ⏰ Pouze do 30. června 2026
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              Transparentní ceny.
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C47FF 0%, #9B7AFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Žádné překvapení.
              </span>
            </h1>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Platby v Kč, faktura ihned. Bez trialu, bez automatického obnovení.
            </p>
          </div>
        </section>

        {/* ── Sandbox Card ── */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div
              className="relative rounded-3xl p-10 md:p-14 border-2 shadow-xl shadow-purple-100"
              style={{
                borderColor: '#6C47FF',
                background: 'linear-gradient(160deg, #f5f3ff 0%, #ffffff 100%)',
              }}
            >
              <div
                className="absolute -top-5 left-1/2 -translate-x-1/2 text-white text-sm font-black px-6 py-2 rounded-full shadow-lg whitespace-nowrap"
                style={{ backgroundColor: '#6C47FF' }}
              >
                ⏰ Pouze do 30. června 2026
              </div>

              <div className="flex flex-col lg:flex-row items-start gap-10 mt-4">
                <div className="flex-1">
                  <div
                    className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
                    style={{ backgroundColor: '#EDE9FF', color: '#6C47FF' }}
                  >
                    Červnový AI Sandbox
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black mb-2 leading-tight">
                    <span style={{ color: '#6C47FF' }}>999 Kč</span>
                    <span className="text-gray-400 text-lg font-normal"> jednorázově · bez DPH</span>
                  </h2>
                  <p className="text-gray-600 mb-2 leading-relaxed">
                    Za cenu jednoho oběda ve školní jídelně měsíčně (~40–60 Kč na dítě)
                    máte legislativně krytý AI nástroj pro celou třídu — s certifikátem
                    pro rodiče i kontrolu ČŠI.
                  </p>
                  <p className="text-sm text-gray-400 mb-8">
                    Platnost do 30. 6. 2026 · Žádné automatické obnovení
                    · Po 30. 6. individuální letní nabídka
                  </p>
                  <CheckoutButton
                    href="/registrace"
                    className="inline-block px-10 py-4 rounded-xl font-black text-white text-base transition-opacity hover:opacity-90 shadow-lg shadow-purple-200"
                    style={{ backgroundColor: '#6C47FF' }}
                  >
                    Koupit přístup — 999 Kč →
                  </CheckoutButton>
                  <p className="text-xs text-gray-400 mt-3">
                    Platba kartou přes Stripe · Faktura okamžitě · DPH 21 % bude připočteno
                  </p>
                </div>

                <div className="shrink-0 w-full lg:w-auto">
                  <div
                    className="rounded-2xl p-6 border"
                    style={{ borderColor: '#DDD6FE', backgroundColor: '#FAF9FF' }}
                  >
                    <h3 className="font-bold text-sm mb-4 text-gray-700">Co je zahrnuto</h3>
                    <ul className="space-y-3">
                      {sandboxFeatures.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-gray-700">
                          <span
                            className="mt-0.5 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                            style={{ backgroundColor: '#6C47FF' }}
                          >
                            ✓
                          </span>
                          <span className="text-sm">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── September Plans ── */}
        <section className="py-16 px-6 bg-gray-50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <div
                className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: '#F3F4F6', color: '#6B7280' }}
              >
                Plný provoz od 1. září 2026
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-400">
                Podzimní tarify
              </h2>
              <div className="text-xs text-gray-400 mt-2 max-w-xl mx-auto text-center">
                <p className="text-sm font-semibold text-gray-600 mb-1">Co se stane po 30. 6. 2026?</p>
                <p>Přístup vyprší. Žádné automatické obnovení, žádné strhávání peněz. Do 30. 6. vám nabídneme individuální letní nabídku pro testování bez žáků, zájemci napište na <a href="mailto:hello@aibgin.cz" style={{color:'#6C47FF'}}>hello@aibgin.cz</a></p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {septemberPlans.map((p) => (
                <div
                  key={p.name}
                  className="relative rounded-2xl p-8 flex flex-col border-2 border-gray-200 bg-white opacity-70"
                >
                  <div className="absolute -top-3 left-4 text-xs font-bold bg-gray-100 text-gray-500 px-3 py-1 rounded-full">
                    Od září 2026
                  </div>
                  <div className="mb-2 mt-2">
                    <span className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                      {p.target}
                    </span>
                  </div>
                  <h3 className="text-xl font-black mt-3 mb-4 text-gray-600">{p.name}</h3>
                  <div className="mb-6">
                    {p.price ? (
                      <>
                        <span className="text-3xl font-black text-gray-600">{p.price} Kč</span>
                        <span className="text-gray-400 text-sm"> / měsíc</span>
                      </>
                    ) : (
                      <span className="text-3xl font-black text-gray-600">Na dotaz</span>
                    )}
                  </div>
                  <ul className="space-y-2 mb-8 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="mt-0.5 shrink-0 font-bold">✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="block text-center py-3 rounded-xl font-bold text-sm text-gray-400 border-2 border-gray-200">
                    Dostupné od září
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-6">
              Roční předplatné: −15 % · Early Bird září: −15 % na první 3 měsíce
            </p>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-black mb-10 text-center">
              Časté otázky
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-2xl p-6 border border-gray-100 shadow-sm bg-white"
                >
                  <h3 className="font-bold text-base mb-2">{faq.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: faq.a }} />
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <p className="text-gray-400 text-sm mb-4">Máte další otázky?</p>
              <Link
                href="/kontakt"
                className="inline-block px-6 py-3 rounded-xl font-bold border-2 text-sm transition-colors hover:bg-gray-50"
                style={{ borderColor: '#6C47FF', color: '#6C47FF' }}
              >
                Kontaktujte nás
              </Link>
            </div>
          </div>
        </section>

        {/* ── Guarantee ── */}
        <section className="py-12 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              {[
                { icon: '🔒', title: 'Bezpečná platba', desc: 'Platba přes Stripe. Vaše karta není nikdy u nás uložena.' },
                { icon: '🧾', title: 'Faktura ihned', desc: 'Faktura na IČO do schránky okamžitě po zaplacení.' },
                { icon: '📞', title: 'Podpora při nastavení', desc: 'Onboarding call s technickým týmem zdarma.' },
              ].map((g) => (
                <div key={g.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <div className="text-3xl mb-3">{g.icon}</div>
                  <h3 className="font-bold text-sm mb-1">{g.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <p className="text-center text-xs text-gray-400 py-4 bg-gray-50">
          Všechny ceny jsou bez DPH · DPH 21 % bude připočteno · Fakturace v Kč
        </p>

        <Footer />
      </main>
    </>
  );
}
