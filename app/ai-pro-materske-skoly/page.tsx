import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CheckoutButton from '../components/CheckoutButton';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'AI pro mateřské školy | AIBgin — Bezpečný chatbot pro děti 3–6 let',
  description:
    'AIBgin pro mateřské školy: pohádky, hry, básničky, příroda. Speciální profil pro věkovou skupinu 3–6 let, COPPA 2026, QR přístup bez registrace. Plnou soulad se GDPR.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/ai-pro-materske-skoly` },
  keywords: [
    'AI pro mateřské školy',
    'chatbot pro předškoláky',
    'AI pro malé děti',
    'bezpečná AI 3-6 let',
    'COPPA 2026',
  ],
  openGraph: {
    title: 'AI pro mateřské školy | AIBgin',
    description:
      'AIBgin pro MŠ: pohádky, hry, básničky, příroda. Věk 3–6 let, COPPA 2026, bezpečnostní profil.',
    url: `${SITE_URL}/ai-pro-materske-skoly`,
    siteName: 'AIBgin',
    locale: 'cs_CZ',
    type: 'website',
    images: [{ url: `${SITE_URL}/logo.png`, width: 1200, height: 630, alt: 'AIBgin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI pro mateřské školy | AIBgin',
    description: 'AIBgin pro MŠ: pohádky, hry, básničky, příroda. Věk 3–6 let, COPPA 2026.',
    images: [`${SITE_URL}/logo.png`],
  },
};

const benefits = [
  'Speciální profil pro věk 3–6 let — jen pohádky, hry, básničky, příroda',
  'Maximálně omezený obsah — pokud je otázka mimo, systém ji zamítne',
  'COPPA 2026 compliance — nejpřísnější americký standard pro malé děti',
  'Bez registrace, bez emailu, bez osobních údajů',
  'QR kód z tabule — učitel kontroluje přístup',
  'Všechny odpovědi prochází AIBguard auditem',
];

const faqs = [
  {
    q: 'Je AI bezpečná pro děti ve věku 3–6 let?',
    a: 'S AIBginem ano. Náš profil pro tuto věkovou skupinu je maximálně omezený. Systém zná jen pohádky, jednoduché hry, verše a přírodní vědy. Vše je schváleno pedagogickým týmem.',
  },
  {
    q: 'Co se stane, když si dítě zeptá na něco mimo povolená témata?',
    a: 'AIBgin věcně odmítne a nabídne alternativu: "To je pro starší děti. Chceš slyšet pohádku o medvídkovi?" Veškeré "pokusy" vidí jen učitel v dashboardu.',
  },
  {
    q: 'Jak probíhá přístup? Musí mít děti tablety?',
    a: 'Učitel promítne QR kód na interaktivní tabuli. Děti si jej naskenují svými zařízeními (nebo sdíleným zařízením třídy). Funguje na jakémkoli smartphonu či tabletu s kamerou.',
  },
  {
    q: 'Jsou odpovědi generovány AI, nebo jsou přednapsané?',
    a: 'Jsou generovány AI (s omezeným rozsahem témat), ale každá odpověď projde AIBguard filtrem. Výsledek je tak bezpečný jako kdyby byl napsaný pedagogem.',
  },
  {
    q: 'Potřebujeme souhlas rodičů?',
    a: 'AIBgin nezpracovává žádné osobní údaje dětí. Neexistuje ani email, ani jméno, ani věk — jen anonymní přístup. Proto souhlas není vyžadován.',
  },
];

export default function AIProMaterskeSkolyPage() {
  return (
    <>
      <main className="min-h-screen bg-white text-gray-900">
        <Nav />

        {/* Hero */}
        <section
          className="pt-32 pb-20 px-6 text-center relative overflow-hidden"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% -5%, #ede9ff 0%, transparent 65%), #ffffff',
          }}
        >
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
              AI pro{' '}
              <span style={{ color: '#6C47FF' }}>
                mateřské školy
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Pohádky, hry, básničky a příroda pro nejmenší. Speciální profil pro věk 3–6 let.
              COPPA 2026 komplianci. Bez osobních údajů. Bez registrace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                className="px-8 py-4 rounded-xl font-bold text-white text-base transition-all shadow-lg shadow-purple-200"
                style={{ backgroundColor: '#6C47FF', opacity: 0.4, cursor: 'not-allowed', pointerEvents: 'none' }}
              >
                Koupit prázdninový přístup — 1 490 Kč →
              </a>
              <Link
                href="/kontakt"
                className="px-8 py-4 rounded-xl font-semibold text-white text-base bg-gray-900 hover:bg-gray-800 transition-colors"
              >
                Zeptejte se
              </Link>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Proč AIBgin pro mateřské školy?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              V mateřské škole jde o hru, imaginaci a zážitek. AI jako výukový nástroj musí být pro nejmenší
              maximálně bezpečná a vhodná. AIBgin pro tuto věkovou skupinu není klasickým chatbotem — je to
              říkátor pohádek, tvůrce her a přítel přírody.
            </p>

            <h3 className="text-2xl font-black mb-6">Klíčové výhody</h3>
            <ul className="space-y-3 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <span className="mt-1 shrink-0 font-bold" style={{ color: '#6C47FF' }}>
                    ✓
                  </span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl p-8 mb-8" style={{ backgroundColor: '#FAF9FF', borderColor: '#EDE9FF', borderWidth: 2 }}>
              <h3 className="font-bold text-lg mb-4" style={{ color: '#6C47FF' }}>
                Příklad: Co si mohou děti zeptat?
              </h3>
              <div className="space-y-2 text-sm text-gray-600">
                <p><strong>Povoleno:</strong> "Vyprávěj o Zlatovlásce", "Jaké zvířata žijí v lese?", "Nauč mě básničku o motýlovi", "Jaké jsou tvoje oblíbené farby?"</p>
                <p><strong>Zamítnuté:</strong> Cokoliv o politice, sexualitě, násilí, nadměrně smutnému obsahu. Systém nabídne alternativu.</p>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Časté otázky
            </h2>
            <div className="space-y-4 mb-12">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="rounded-lg border border-gray-100 p-4 hover:border-gray-200 transition-colors"
                >
                  <summary className="font-bold cursor-pointer" style={{ color: '#6C47FF' }}>
                    {faq.q}
                  </summary>
                  <p className="text-gray-600 mt-3 text-sm">{faq.a}</p>
                </details>
              ))}
            </div>

            <div className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #6C47FF 0%, #9B7AFF 100%)' }}>
              <h2 className="text-2xl font-black mb-4 text-white">Připraveni začít?</h2>
              <p className="text-white/90 mb-6 max-w-xl mx-auto">
                1 490 Kč jednorázově. Platnost červenec + srpen 2026. Onboarding za 5 minut.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  className="px-8 py-3 rounded-xl font-bold text-base bg-white transition-opacity"
                  style={{ color: '#6C47FF', opacity: 0.4, cursor: 'not-allowed', pointerEvents: 'none' }}
                >
                  Koupit přístup →
                </a>
                <Link
                  href="/kontakt"
                  className="px-8 py-3 rounded-xl font-bold text-base bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/30"
                >
                  Napsat si
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
