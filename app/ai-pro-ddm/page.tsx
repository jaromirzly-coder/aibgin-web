import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CheckoutButton from '../components/CheckoutButton';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'AI pro domy dětí a mládeže | AIBgin — Flexibilní profily pro DDM',
  description:
    'AIBgin pro DDM: flexibilní nastavení pro každou aktivitu, nízkoprahová centra, anonymní přístup, bez sběru dat. Soukromí dětí na prvním místě.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/ai-pro-ddm` },
  keywords: [
    'AI pro DDM',
    'AI pro domy dětí',
    'AI pro nízkoprahová centra',
    'bezpečná AI DDM',
    'anonymní přístup AI',
  ],
  openGraph: {
    title: 'AI pro domy dětí a mládeže | AIBgin',
    description:
      'AIBgin pro DDM: flexibilní profily, nízkoprahové centrum, anonymní přístup. Bezpečí a soukromí na prvním místě.',
    url: `${SITE_URL}/ai-pro-ddm`,
    siteName: 'AIBgin',
    locale: 'cs_CZ',
    type: 'website',
    images: [{ url: `${SITE_URL}/logo.png`, width: 1200, height: 630, alt: 'AIBgin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI pro domy dětí a mládeže | AIBgin',
    description:
      'AIBgin pro DDM: flexibilní nastavení, nízkoprahové centrum, anonymní přístup bez sběru dat.',
    images: [`${SITE_URL}/logo.png`],
  },
};

const benefits = [
  'Flexibilní bezpečnostní profil — nastaví se pro každou aktivitu',
  'Podpora nízkoprahových center — bez zbytečné byrokracie',
  'Anonymní přístup — žádný email, žádný login, jen QR kód',
  'Bez sběru osobních údajů — soukromí na prvním místě',
  'Real-time audit — vedoucí vidí jaká témata se řeší',
  'Automatický reset po každé skupině — čistý start',
];

const faqs = [
  {
    q: 'Jak nastavit profil pro různé aktivity?',
    a: 'Vedoucí si pro každou aktivitu (kroužek, skupinová hra, workshop) vytvoří vlastní profil. Například: programovací kroužek má přístup k tématu Python, dramatický kroužek má volnější hranice pro tvůrčí obsah. Všechno skrze intuitivní dashboard.',
  },
  {
    q: 'Slouží AIBgin i pro nízkoprahová centra?',
    a: 'Ano, a to bez zbytečné registrace. Vedoucí se přihlásí, vytvoří skupinu, promítne QR. Děti — z kterýchkoli sociálních situací — se mohou hned zapojit bez papírování.',
  },
  {
    q: 'Jaké jsou výhody anonymního přístupu?',
    a: 'Anonymní přístup znamená, že dítě nemusí mít email nebo vyplňovat formulář. Žádné osobní údaje nejsou sbírány ani ukládány. To zvyšuje ochotu dětí (zvláště zranitelných) se zapojit.',
  },
  {
    q: 'Co se stane po skončení aktivity?',
    a: 'AIBgin automaticky zresetuje session. Při příští aktivitě budou všichni účastníci v čistém prostředí. Vedoucí má přístup k agregovaným statistikám (jaká témata, kolik dotazů), ale ne k identifikaci jednotlivých dětí.',
  },
  {
    q: 'Jak AIBgin podporuje vedoucí v diferenciaci?',
    a: 'Vedoucí může nastavit profil pro každou věkovou skupinu či tématickou aktivitu. Programátoři si "říkají" o Python, děti ze sociálně znevýhodňujícího prostředí o základy číst a psát. Každé v bezpečném prostředí.',
  },
];

export default function AIProDdmPage() {
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
              AI pro domy dětí<br />
              <span style={{ color: '#6C47FF' }}>
                a mládeže
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Flexibilní nastavení pro každou aktivitu. Podpora nízkoprahových center.
              Anonymní přístup bez sběru dat. Soukromí a bezpečí na prvním místě.
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
              Proč AIBgin pro DDM?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Domy dětí a mládeže pracují s různorodými skupinami dětí v různorodých kontextech. Některé děti přicházejí
              z bezpečného domova, jiné jsou zranitelné. Záležet im na tom, aby měly bezpečné místo pro exploraci
              a vzdělávání bez ostychu. AIBgin poskytuje právě to: flexibilní, bezpečné, soukromé prostředí.
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
                Příklad: Flexibilní profily v praxi
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <p className="font-bold">Programovací kroužek:</p>
                  <p>Přístup k Pythonu, JavaScriptu, hardwaru. Otázky o technologii bez omezení.</p>
                </div>
                <div>
                  <p className="font-bold">Dramatická dílna:</p>
                  <p>Pomoc se scénáristkou, charaktery, emocemi. Širší hranice na emocionální obsah.</p>
                </div>
                <div>
                  <p className="font-bold">Nízkoprahové centrum:</p>
                  <p>Základní gramotnost, podpora v učení bez zábran. Bez osobních dat.</p>
                </div>
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
