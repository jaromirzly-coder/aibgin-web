import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CheckoutButton from '../components/CheckoutButton';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'AI pro základní školy | AIBgin — Bezpečný chatbot 1.–9. třída',
  description:
    'AIBgin pro základní školy: výukový asistent s bezpečnostním profilem pro každou třídu, učitel vidí souhrn konverzací, připravenost na kontrolu ČŠI. GDPR, EU AI Act, QR přístup.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/ai-pro-zakladni-skoly` },
  keywords: [
    'AI pro základní školy',
    'AI asistent pro třídu',
    'bezpečný chatbot pro děti',
    'AI 1-9 třída',
    'výukový asistent',
  ],
  openGraph: {
    title: 'AI pro základní školy | AIBgin',
    description:
      'Výukový asistent AIBgin pro základní školy: profil pro každou třídu, kontrola obsahu, audit log, připraveno na ČŠI.',
    url: `${SITE_URL}/ai-pro-zakladni-skoly`,
    siteName: 'AIBgin',
    locale: 'cs_CZ',
    type: 'website',
    images: [{ url: `${SITE_URL}/logo.png`, width: 1200, height: 630, alt: 'AIBgin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI pro základní školy | AIBgin',
    description:
      'Výukový asistent AIBgin pro základní školy: profil pro každou třídu, kontrola obsahu, audit log.',
    images: [`${SITE_URL}/logo.png`],
  },
};

const benefits = [
  'Výukový asistent pro 1.–9. třídu bez omezení',
  'Bezpečnostní profil nastavený pro věk žáků',
  'Učitel vidí souhrn dotazů, ne obsah konverzací',
  'QR kód bez registrace — děti se neregistrují',
  'Real-time audit s AIBguard',
  'Připraveno na kontrolu České školní inspekce',
];

const faqs = [
  {
    q: 'Jak se AIBgin liší od obecných ChatGPT aplikací?',
    a: 'AIBgin je navržen speciálně pro školství. Každá třída má vlastní bezpečnostní profil, učitel nevidí obsah konverzací (jen souhrn dotazů), a systém je certifikován pro GDPR, EU AI Act a COPPA. ChatGPT je obecný nástroj bez těchto bezpečnostních garantií.',
  },
  {
    q: 'Jaký je rozdíl mezi profilem pro 1.–3. třídu a 6.–9. třídu?',
    a: 'Profil se přizpůsobuje věku. Mladší žáci mají zúženou sadu povolených témat (pohádky, matematika, příroda), starší mají širší přístup. Vždy s fail-closed architekturou — raději dítě omezíme než riskujeme.',
  },
  {
    q: 'Co se stane, pokud se žák zeptá na zakázané téma?',
    a: 'AIBgin odmítne odpovědět a nabídne alternativu. Žák nikdy neuvidí nevhodný obsah. Učitel vidí v dashboardu, že žák "zkusil" zakazované téma, ale ne konkrétní otázku (ochrána soukromí).',
  },
  {
    q: 'Budeme se muset registrovat s celou školou?',
    a: 'Registruje se ředitel či vedoucí učitel. Jednotlivé děti se neregistrují — vstupují jen přes QR kód. Žádné heslo, žádný email dítěte, žádné osobní údaje.',
  },
  {
    q: 'Funguje to na školních tabletech? Potřebujeme speciální hardware?',
    a: 'Funguje na každém zařízení s internetem a kamerou (tablet, smartphone, laptop). QR kód naskenujete, dítě se automaticky připojí. Žádné speciální software, žádné instalace.',
  },
  {
    q: 'Jak se AIBgin chová při kontrole ČŠI?',
    a: 'Máte 5letý audit log všech dotazů, odpovědí a filtrování. Můžete inspektorům ukázat, jak systém pracuje, že je v souladu s zákonem 561/2004 Sb. Máte také AIBSN certifikát jako důkaz bezpečnosti.',
  },
];

export default function AIProZakladniSkolyPage() {
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
                základní školy
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Výukový asistent pro 1.–9. třídu se samostatným bezpečnostním profilem pro každou věkovou skupinu.
              Učitel má přehled, dítě má soukromí. Bez registrace, bez hesla, bez osobních údajů.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CheckoutButton
                href="/registrace"
                className="px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:opacity-90 shadow-lg shadow-purple-200"
                style={{ backgroundColor: '#6C47FF' }}
              >
                Koupit přístup — 999 Kč →
              </CheckoutButton>
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
              Proč AIBgin pro základní školy?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              V základní škole se jedná o kritické období, kdy se děti učí kritickému myšlení a samostatnosti.
              AI může být mocným nástrojem, ale bez správné bezpečnosti se stává rizikem. AIBgin řeší toto dilema tím,
              že kombinuje sílu AI s pěti vrstvami ochrany.
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
                Příklad: Bezpečnostní profil pro 6.–9. třídu
              </h3>
              <p className="text-gray-600 mb-4">
                Starší žáci mohou diskutovat o širší škále témat — dějinách, sociálních vědách, etice — ale vždy
                v age-appropriate formě. Zakázaná témata: sexualita, samopoškozování, extremismus. Povoleno:
                vědecké, historické, humanitární a umělecké otázky s věcným vysvětlením.
              </p>
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
                999 Kč jednorázově. Přístup do 30. června 2026. Onboarding za 5 minut.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CheckoutButton
                  href="/registrace"
                  className="px-8 py-3 rounded-xl font-bold text-base bg-white transition-opacity hover:opacity-90"
                  style={{ color: '#6C47FF' }}
                >
                  Koupit přístup →
                </CheckoutButton>
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
