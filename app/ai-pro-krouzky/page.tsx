import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CheckoutButton from '../components/CheckoutButton';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'AI pro zájmové kroužky | AIBgin — Chatbot pro robotiku, jazyky, umění',
  description:
    'AIBgin pro kroužky: robotika (Arduino, Python), jazyky (AJ, NJ), umění a ostatní obory. Specializovaný profil pro každý kroužek. QR za 10 sekund.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/ai-pro-krouzky` },
  keywords: [
    'AI pro kroužky',
    'AI robotika Arduino',
    'AI jazykový kroužek',
    'AI umělecký kroužek',
    'chatbot pro kroužky',
  ],
  openGraph: {
    title: 'AI pro zájmové kroužky | AIBgin',
    description:
      'AIBgin pro kroužky: robotika, jazyky, umění. Specializovaný profil pro obor. QR za 10 sekund.',
    url: `${SITE_URL}/ai-pro-krouzky`,
    siteName: 'AIBgin',
    locale: 'cs_CZ',
    type: 'website',
    images: [{ url: `${SITE_URL}/logo.png`, width: 1200, height: 630, alt: 'AIBgin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI pro zájmové kroužky | AIBgin',
    description: 'AIBgin pro kroužky: robotika, jazyky, umění. Specializovaný profil pro obor.',
    images: [`${SITE_URL}/logo.png`],
  },
};

const benefits = [
  'Specializovaný profil pro každý kroužek — robotika, jazyky, umění, věda…',
  'Vedoucí spustí QR za 10 sekund — bez složitého nastavení',
  'Asistent připravený na obor — Python pro programování, AJ/NJ konverzace pro jazyky',
  'Individuální přístup — každý účastník kroužku dostane obsah dle věku',
  'Bez vyřazování — dítě se nemusí registrovat, jen naskenuje QR',
  'Učení bez stresu — AI je pomocník, ne soudce',
];

const faqs = [
  {
    q: 'Jak vytvořit profil pro programovací kroužek?',
    a: 'Vedoucí se přihlásí do dashboardu, vytvoří nový kroužek a vybere typ "Robotika & Programování". AIBgin automaticky zaktivuje témata Arduino, Python, fyziku atd. Pak stačí vygenerovat QR kód — hotovo za minutu.',
  },
  {
    q: 'Funguje to i pro jazykový kroužek?',
    a: 'Zcela. Zvolíte jazyk (angličtina, němčina, francouzština…), AIBgin se stane konverzačním partnerem. Může trénovat slovní zásobu, mluvnici, přirozenou konverzaci — vždy v bezpečné poloze bez soud.',
  },
  {
    q: 'Co když kroužek není na seznamu?',
    a: 'Kontaktujte nás. Pokud je to běžný kroužek, přidáme jej. Pokud je specifický, zkonfigurujeme custom profil. Nemáte důvod čekat.',
  },
  {
    q: 'Jak dlouho trvá aktivovat kroužek?',
    a: 'Vedoucí se přihlásí → vybere typ kroužku → vygeneruje QR → je hotovo. Trvá to opravdu 10 sekund. Žádné emaily, potvrzování, čekání.',
  },
  {
    q: 'Jaké jsou výhody pro vedoucího?',
    a: 'Vedoucí vidí statistiky: kolik dotazů, jaká témata, jak dlouho trvaly session. Ale nikdy nevidí obsah jednotlivých konverzací — to je soukromí účastníka. Má přehled bez porušení soukromí.',
  },
  {
    q: 'Mohu mít více kroužků pod jedním účtem?',
    a: 'Ano. Můžete mít robotický kroužek v pondělí a jazykový v úterý — každý s vlastním profilem a vlastním QR kódem.',
  },
];

export default function AIProKrouzkyPage() {
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
              AI pro zájmové<br />
              <span style={{ color: '#6C47FF' }}>
                kroužky
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
              Robotika, jazyky, umění — každý kroužek dostane specializovaného asistenta.
              Vedoucí spustí QR za 10 sekund. Bez registrace, bez papírování.
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
              Proč AIBgin pro kroužky?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Zájmový kroužek je místo, kde se děti učí tím, že si to užívají. Vedoucí chce nástroj,
              který usnadní jejich práci a posílí motivaci účastníků. AIBgin je právě ten asistent —
              personalizovaný pro obor, bez byrokracie, bez zbytečné registrace.
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
                Příklady: Co může AIBgin dělat v kroužcích?
              </h3>
              <div className="space-y-3 text-sm text-gray-600">
                <div>
                  <p className="font-bold">🤖 Robotika:</p>
                  <p>Vysvětlení kódu v Arduinu, řešení problémů s elektrikou, návrh projektů, tutoriály v Pythonu.</p>
                </div>
                <div>
                  <p className="font-bold">🌍 Jazykový kroužek:</p>
                  <p>Konverzace v angličtině/němčině, mluvnické cvičení, slovní zásoba, příprava na zkoušky.</p>
                </div>
                <div>
                  <p className="font-bold">🎨 Umělecký kroužek:</p>
                  <p>Inspirace k tvořivosti, návody na techniky, diskuse o umělcích a stylech.</p>
                </div>
                <div>
                  <p className="font-bold">📚 Ostatní kroužky:</p>
                  <p>Hudba, sport, věda — každý obor má svého asistenta.</p>
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
                1 490 Kč jednorázově. Platnost červenec + srpen 2026. QR kód za 10 sekund.
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
