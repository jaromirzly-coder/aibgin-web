import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'Compliance | AIBgin — GDPR, EU AI Act, COPPA 2026',
  description:
    'AIBgin splňuje GDPR, EU AI Act čl. 50, COPPA 2026, českou školskou legislativu. Data výhradně v EU (eu-central-1), AES-256 šifrování, 5letý audit log, DPA smlouva součástí každého plánu.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/compliance` },
  keywords: [
    'AI GDPR školy',
    'EU AI Act vzdělávání',
    'COPPA 2026 compliance',
    'bezpečná AI GDPR',
    'audit log AI škola',
    'školský zákon AI',
    'DPA smlouva AI',
    'šifrování dat dětí',
  ],
  openGraph: {
    title: 'Compliance | AIBgin — GDPR, EU AI Act, COPPA 2026',
    description:
      'Kompletní compliance pro AI ve vzdělávání: GDPR, EU AI Act čl. 50, COPPA 2026, česká legislativa. Data v EU, DPA smlouva, 5letý audit log.',
    url: `${SITE_URL}/compliance`,
    siteName: 'AIBgin',
    locale: 'cs_CZ',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Compliance — AIBgin',
  description:
    'Přehled regulatorního souladu AIBginu: GDPR, EU AI Act, COPPA 2026, česká školská legislativa.',
  url: `${SITE_URL}/compliance`,
  isPartOf: { '@type': 'WebSite', url: SITE_URL },
};

const complianceItems = [
  {
    badge: 'COPPA 2026',
    icon: '🇺🇸',
    title: "COPPA 2026",
    color: '#EDE9FF',
    textColor: '#6C47FF',
    summary:
      'Plný soulad s Children\'s Online Privacy Protection Act. Žádná osobní data dětí nejsou sbírána.',
    points: [
      'Žádná osobní data dětí bez souhlasu rodičů',
      'Anonymní přístup přes QR kód — žádná registrace',
      'Bez cookies, bez profilování, bez sledování',
      'Automatická implementace změn COPPA 2026',
    ],
  },
  {
    badge: 'EU AI Act',
    icon: '🇪🇺',
    title: 'EU AI Act čl. 50',
    color: '#ECFDF5',
    textColor: '#059669',
    summary:
      'Transparentnost AI systémů pro děti. Každé dítě ví, že mluví s AI — při každé konverzaci.',
    points: [
      'Automatický AI disclosure při každé konverzaci',
      'Transparentní vysvětlení co AI je a co neumí',
      'Architektura Ready by Design — ne retrofit',
      'Monitoring a reporting v souladu s EU AI Act',
    ],
  },
  {
    badge: 'GDPR',
    icon: '🔒',
    title: 'GDPR & ePrivacy',
    color: '#EDE9FF',
    textColor: '#6C47FF',
    summary:
      'Data výhradně v EU (eu-central-1). DPA smlouva součástí každého plánu. Šifrování AES-256.',
    points: [
      'Servery výhradně v EU (AWS eu-central-1, Frankfurt)',
      'DPA (Data Processing Agreement) součástí každého plánu',
      'Šifrování AES-256 per-instance',
      'Právo na výmaz a přenositelnost dat zajištěno',
      'Jmenovaný DPO na vyžádání',
    ],
  },
  {
    badge: '116 111',
    icon: '🆘',
    title: 'Linka bezpečí 116 111',
    color: '#FEF2F2',
    textColor: '#DC2626',
    summary:
      'Integrovaná detekce krizí. Automatické zobrazení Linky bezpečí a okamžitý alert správci.',
    points: [
      'Linka bezpečí 116 111 — bezprostřední zobrazení dítěti',
      'Okamžitý alert správci instituce v reálném čase',
      'Detekce: šikana, sebepoškozování, krize',
      'Anonymizovaný záznam krizové události pro dokumentaci',
    ],
  },
  {
    badge: 'Audit log',
    icon: '📋',
    title: '5letý audit log',
    color: '#EDE9FF',
    textColor: '#6C47FF',
    summary:
      'Neměnný záznam pro inspekci ČŠI, GDPR audit a interní kontrolu. Uloženo v EU, šifrováno.',
    points: [
      'Nemodifikovatelný záznam po dobu 5 let',
      'Přístup pro oprávněné osoby školy a inspekcí',
      'Export pro GDPR audit a ČŠI kontrolu',
      'Uloženo šifrovaně v EU, zálohy každých 6 hodin',
    ],
  },
  {
    badge: 'Czech law',
    icon: '⚖️',
    title: 'Česká legislativa',
    color: '#EDE9FF',
    textColor: '#6C47FF',
    summary:
      'Zákon č. 561/2004 Sb. (školský zákon), vyhláška MŠMT. Smlouvy v češtině, fakturace v Kč.',
    points: [
      'Plný soulad se zákonem č. 561/2004 Sb.',
      'Vyhláška MŠMT o ochraně žáků',
      'Smluvní dokumentace v češtině',
      'Fakturace v Kč, sídlo v ČR (Slezská Ostrava, 710 00)',
      'Podpora při auditu ČŠI a krajské inspekce',
    ],
  },
];

export default function CompliancePage() {
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
              'radial-gradient(ellipse 70% 50% at 50% -5%, #ecfdf5 0%, transparent 65%), #ffffff',
          }}
        >
          <div className="max-w-3xl mx-auto">
            <div
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: '#ECFDF5', color: '#059669' }}
            >
              🇪🇺 EU AI Act Ready by Design
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              Compliance
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #059669 0%, #6C47FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                bez kompromisů.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
              Navrženo pro regulované prostředí od prvního dne.
              První český EdTech s architekturou připravenou na EU AI Act.
              Připraveni na kontrolu ČŠI kdykoliv.
            </p>
          </div>
        </section>

        {/* ── Compliance grid ── */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {complianceItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl p-8 border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{item.icon}</span>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{ backgroundColor: item.color, color: item.textColor }}
                    >
                      {item.badge}
                    </span>
                  </div>
                  <h2 className="font-black text-xl mb-2">{item.title}</h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{item.summary}</p>
                  <ul className="space-y-2">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5 text-sm text-gray-600">
                        <span
                          className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-white"
                          style={{ backgroundColor: item.textColor }}
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

        {/* ── EU AI Act deep dive ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto">
            <div
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: '#ECFDF5', color: '#059669' }}
            >
              🇪🇺 EU AI Act
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Proč EU AI Act záleží pro vaši školu
            </h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                EU AI Act vstupuje v platnost v roce 2026 a klasifikuje AI systémy pro vzdělávání
                a děti jako <strong className="text-gray-900">high-risk (vysoké riziko)</strong>.
                To znamená konkrétní povinnosti pro každou školu nebo instituci, která AI používá.
              </p>
              <p>
                AIBgin je navržen s architekturou, která tyto povinnosti splňuje technicky —
                ne jen na papíře. <strong className="text-gray-900">Ready by Design</strong> znamená,
                že compliance není přidána jako vrstva navíc, ale je zabudována do základů systému.
              </p>
              <div
                className="rounded-2xl p-6 border-l-4 text-sm"
                style={{ borderColor: '#6C47FF', backgroundColor: '#FAF9FF' }}
              >
                <p className="font-bold text-gray-800 mb-2">
                  Co hrozí při nesouladu s EU AI Act?
                </p>
                <p className="text-gray-500">
                  Pokuty až do výše 3 % ročního obratu nebo 15 milionů EUR pro organizace
                  používající AI systémy high-risk kategorie bez splnění požadavků.
                  Pro školy a municipální organizace platí stejná pravidla.
                </p>
              </div>
              <p>
                Pomocí AIBginu přenášíte technické compliance závazky na nás.
                Vaše zodpovědnost jako instituce zůstává, ale technická implementace
                a průběžné regulatorní updaty jsou na naší straně.
              </p>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-6 bg-gray-50">
          <div
            className="max-w-4xl mx-auto rounded-3xl p-10 md:p-12 text-center text-white"
            style={{ background: 'linear-gradient(135deg, #059669 0%, #6C47FF 100%)' }}
          >
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              Stáhněte si compliance dokumentaci
            </h2>
            <p className="text-green-100 mb-8 max-w-xl mx-auto">
              DPA smlouva, AIBSN certifikát, GDPR dokumentace a EU AI Act checklist
              jsou součástí každého plánu. Připraveni pro rodiče i ČŠI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cenik"
                className="px-7 py-3.5 rounded-xl font-bold bg-white transition-opacity hover:opacity-90"
                style={{ color: '#6C47FF' }}
              >
                Koupit přístup — 999 Kč →
              </Link>
              <Link
                href="/kontakt"
                className="px-7 py-3.5 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/30"
              >
                Dotaz na compliance
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
