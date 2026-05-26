import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'Bezpečnost | AIBgin — 5 vrstev ochrany dětí',
  description:
    'Jak AIBgin chrání děti: AIBSN identita, AIBguard real-time audit, vlastní bezpečnostní profil, automatické regulatorní updaty, crisis detection a Linka bezpečí 116 111. Fail-closed architektura.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/bezpecnost` },
  keywords: [
    'AI bezpečnost pro děti',
    'AIBguard',
    'crisis detection AI',
    'fail-closed AI',
    'ochrana dětí online',
    'linka bezpečí 116111',
    'bezpečnostní vrstvy AI',
    'AI pro školy bezpečnost',
  ],
  openGraph: {
    title: 'Bezpečnost | AIBgin — 5 vrstev ochrany dětí',
    description:
      'AIBSN identita, AIBguard real-time audit, crisis detection, Linka bezpečí 116 111. Fail-closed architektura pro každou školu a instituci.',
    url: `${SITE_URL}/bezpecnost`,
    siteName: 'AIBgin',
    locale: 'cs_CZ',
    type: 'website',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Bezpečnost — AIBgin',
  description:
    '5 vrstev ochrany dětí: AIBSN identita, AIBguard real-time audit, vlastní bezpečnostní profil, měsíční regulatorní update, crisis detection.',
  url: `${SITE_URL}/bezpecnost`,
  isPartOf: { '@type': 'WebSite', url: SITE_URL },
};

const layers = [
  {
    num: '01',
    icon: '🪪',
    title: 'AIBSN identita',
    tag: 'Verifikovatelné',
    tagColor: '#EDE9FF',
    tagText: '#6C47FF',
    summary: 'Certifikovaná identita každé instance, ověřitelná veřejně na aibsn.org.',
    points: [
      'Každá instance AIBginu má jedinečný AIBSN certifikát',
      'Certifikát je veřejně ověřitelný na aibsn.org',
      'Falešné chatboty vydávající se za vaši školu jsou okamžitě detekovatelné',
      'Rodiče i inspekce ČŠI mohou certifikát ověřit bez přihlášení',
    ],
  },
  {
    num: '02',
    icon: '⚡',
    title: 'AIBguard real-time audit',
    tag: 'Fail-closed',
    tagColor: '#FEF2F2',
    tagText: '#DC2626',
    summary:
      'Každá odpověď AI projde nezávislým auditem PŘED odesláním dítěti. Verdikt PASS / ALERT / CRITICAL.',
    points: [
      'Audit každé odpovědi v reálném čase před doručením dítěti',
      'Tři úrovně: PASS (bezpečné), ALERT (upozornění správci), CRITICAL (odpověď nikdy neodejde)',
      'Nezávislý audit oddělený od generativního AI modelu',
      'Fail-closed: při jakékoliv chybě systém blokuje, neselhává otevřeně',
    ],
  },
  {
    num: '03',
    icon: '🎛️',
    title: 'Vlastní bezpečnostní profil',
    tag: 'Plně nastavitelné',
    tagColor: '#EDE9FF',
    tagText: '#6C47FF',
    summary:
      'Správce nastaví věkové skupiny (3–6, 7–10, 11–15 let), zakázaná témata a povolený obsah.',
    points: [
      'Věkové skupiny: MŠ (3–6), 1. stupeň (7–10), 2. stupeň (11–15), SŠ (15+)',
      'Zakázaná témata na jeden klik — bez IT znalostí',
      'Povolený obsah: výuka, pohádky, sport, konkrétní předměty',
      'Tón komunikace: formální, přátelský, edukační',
      'Každá třída/skupina má vlastní izolovaný profil',
    ],
  },
  {
    num: '04',
    icon: '📋',
    title: 'Měsíční regulatorní update',
    tag: 'Automaticky',
    tagColor: '#ECFDF5',
    tagText: '#059669',
    summary:
      'COPPA 2026, EU AI Act, nové zákony na ochranu dětí jsou automaticky zavedeny do všech instancí.',
    points: [
      'Sledování legislativy v ČR, EU a USA za vás',
      'Automatické zavedení změn do všech aktivních instancí',
      'Oznámení správci před každým updatem',
      'Historický log všech regulatorních změn k dispozici pro audit',
    ],
  },
  {
    num: '05',
    icon: '🆘',
    title: 'Crisis detection + Linka bezpečí',
    tag: '116 111',
    tagColor: '#FEF2F2',
    tagText: '#DC2626',
    summary:
      'Detekce šikany, sebepoškozování a krizových stavů. Dítěti se okamžitě zobrazí číslo 116 111.',
    points: [
      'Detekce šikany, sebevražedných myšlenek, sebepoškozování v textu konverzace',
      'Okamžité zobrazení čísla Linky bezpečí 116 111 dítěti',
      'Simultánní alert správci instituce v reálném čase',
      'Anonymizovaný log krizové události pro inspekci a rodiče',
      'Žádný obsah krizového charakteru není dítěti nikdy přeposlán',
    ],
  },
];

export default function BezpecnostPage() {
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
              5 vrstev ochrany
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              Bezpečnost není
              <br />
              <span
                style={{
                  backgroundImage: 'linear-gradient(135deg, #6C47FF 0%, #9B7AFF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                volitelná funkce.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-8 leading-relaxed">
              Architektura AIBginu je postavena tak, aby bezpečnost byla výchozím stavem.
              Každá vrstva funguje nezávisle — pokud selže jedna, ostatní blokují.
              Fail-closed od základů.
            </p>
          </div>
        </section>

        {/* ── 5 Layers Detail ── */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto space-y-8">
            {layers.map((l) => (
              <div
                key={l.num}
                className="bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="shrink-0">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-sm"
                      style={{ backgroundColor: '#EDE9FF' }}
                    >
                      {l.icon}
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span
                        className="text-3xl font-black"
                        style={{ color: '#6C47FF' }}
                      >
                        {l.num}
                      </span>
                      <h2 className="text-xl font-black text-gray-900">{l.title}</h2>
                      <span
                        className="text-xs font-bold px-2.5 py-1 rounded-full"
                        style={{ backgroundColor: l.tagColor, color: l.tagText }}
                      >
                        {l.tag}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-5 leading-relaxed">{l.summary}</p>
                    <ul className="space-y-2.5">
                      {l.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-sm text-gray-700">
                          <span
                            className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-white"
                            style={{ backgroundColor: '#6C47FF' }}
                          >
                            ✓
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Architecture note ── */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-3xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
              style={{ backgroundColor: '#FEF2F2', color: '#DC2626' }}
            >
              🔒 Fail-closed design
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-6">
              Systém, který selže bezpečně
            </h2>
            <p className="text-lg text-gray-500 leading-relaxed mb-6">
              Většina systémů selže otevřeně — při výpadku odpovídají bez omezení.
              AIBgin je navržen opačně: při jakékoliv nejistotě, chybě nebo anomálii
              systém <strong className="text-gray-900">blokuje</strong>, neselhává permisivně.
            </p>
            <p className="text-gray-400 text-sm">
              Tato architektura je základním požadavkem EU AI Actu pro high-risk systémy
              a je technicky vynucená — ne pouze deklarovaná.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 px-6 bg-gray-50">
          <div
            className="max-w-4xl mx-auto rounded-3xl p-10 md:p-12 text-center text-white"
            style={{ background: 'linear-gradient(135deg, #6C47FF 0%, #9B7AFF 100%)' }}
          >
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              Připraveni na kontrolu ČŠI kdykoliv
            </h2>
            <p className="text-purple-100 mb-8 max-w-xl mx-auto">
              Kompletní audit log, AIBSN certifikát, compliance dokumentace — vše k dispozici
              ihned po zakoupení.
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
                href="/compliance"
                className="px-7 py-3.5 rounded-xl font-bold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/30"
              >
                Compliance & regulace
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
