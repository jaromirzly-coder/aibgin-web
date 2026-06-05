import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'Jak zavést AI ve škole | AIBgin — Praktický průvodce',
  description:
    'Průvodce zavádění AI do výuky: fáze pilotu, školení učitelů, integrace do osnov, měření dopadu. Krok za krokem.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/jak-zavest-ai-ve-skole` },
  openGraph: {
    title: 'Jak zavést AI ve škole | AIBgin',
    description:
      'Krok za krokem průvodce zavádění AI do výuky. Pilot, školení, integrace, měření.',
    url: `${SITE_URL}/jak-zavest-ai-ve-skole`,
    siteName: 'AIBgin',
    locale: 'cs_CZ',
    type: 'website',
    images: [{ url: `${SITE_URL}/logo.png`, width: 1200, height: 630, alt: 'AIBgin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jak zavést AI ve škole | AIBgin',
    description: 'Praktický průvodce zavádění AI do výuky. 4 fáze implementace.',
    images: [`${SITE_URL}/logo.png`],
  },
};

export default function JakZavestAIVeSkolePage() {
  return (
    <>
      <main className="min-h-screen bg-white text-gray-900">
        <Nav />

        <section className="pt-32 pb-20 px-6" style={{ background: 'linear-gradient(135deg, #ede9ff 0%, transparent 100%)' }}>
          <div className="max-w-3xl mx-auto">
            <div className="mb-6 text-sm font-bold uppercase tracking-widest" style={{ color: '#6C47FF' }}>
              Blog
            </div>
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Jak zavést AI{' '}
              <span style={{ color: '#6C47FF' }}>
                ve škole
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Praktický průvodce pro ředitele: od pilotu přes školení až po integraci do osnov.
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              AI v školství je hotová věc. Není to budoucnost — je to přítomnost. Ale zavádění je jako zavádění jakékoliv nové technologie:
              postupně, s plánováním, školením a měřením. Zde je praktický průvodce.
            </p>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Fáze 1: Příprava (týdny 1–2)
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Antes než něco kupujete, musíte vědět, co chcete.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#FAF9FF', borderColor: '#EDE9FF', borderWidth: 1 }}>
                <p className="font-bold mb-2">✓ Zjistěte, co budete chtít dělat</p>
                <p className="text-gray-700">
                  Kterou předmět? Kterou třídu? Jaký je cíl? (Lepší matematika? Podpora slabších žáků? Angličtina?)
                </p>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: '#FAF9FF', borderColor: '#EDE9FF', borderWidth: 1 }}>
                <p className="font-bold mb-2">✓ Oslovte učitele</p>
                <p className="text-gray-700">
                  Najděte učitele, který by byl otevřený novému. Nemusí to být tech-savvy, ale musí být zvídavý.
                </p>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: '#FAF9FF', borderColor: '#EDE9FF', borderWidth: 1 }}>
                <p className="font-bold mb-2">✓ Připravte hardware</p>
                <p className="text-gray-700">
                  Tablet, smartphone, laptop? Máte dostatek zařízení? Funguje WiFi? To není otázka pro AI, ale předpoklad.
                </p>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: '#FAF9FF', borderColor: '#EDE9FF', borderWidth: 1 }}>
                <p className="font-bold mb-2">✓ Připravte právní podklad</p>
                <p className="text-gray-700">
                  Informujte zákonodárce (ředitele). Máte DPA? Máte certifikát? To je důležité.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Fáze 2: Pilot (týdny 3–6)
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Začněte malý. Jedna třída. Jeden předmět. Jeden měsíc. Cíl: pochopte, jak to funguje.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-lg" style={{ backgroundColor: '#FAF9FF', borderColor: '#EDE9FF', borderWidth: 1 }}>
                <p className="font-bold mb-2">Týden 1: Onboarding</p>
                <p className="text-gray-700">
                  Ředitel se přihlásí, vytvoří třídu, vygeneruje QR. Připravíte si třídní učitele.
                  Není to složitější než vytvořit třídní email.
                </p>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: '#FAF9FF', borderColor: '#EDE9FF', borderWidth: 1 }}>
                <p className="font-bold mb-2">Týden 1–2: Školení učitele</p>
                <p className="text-gray-700">
                  Učitel si sám zkoušel AI? Má otázky? Věnujte mu 30 minut na vysvětlení:
                  jak to funguje, co si mohou děti zeptat, co vidí v dashboardu.
                </p>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: '#FAF9FF', borderColor: '#EDE9FF', borderWidth: 1 }}>
                <p className="font-bold mb-2">Týden 2: Pilotní hodina</p>
                <p className="text-gray-700">
                  Učitel si vezme jednu hodinu. Promítne QR. Děti se zeptají a vidí odpovědi.
                  Bez obsahu, bez tlaku. Zkušenost.
                </p>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: '#FAF9FF', borderColor: '#EDE9FF', borderWidth: 1 }}>
                <p className="font-bold mb-2">Týden 3–4: Stabilní pilot</p>
                <p className="text-gray-700">
                  Máte teď 2–3 hodiny týdně s AI. Učitel vidí, co funguje, co ne. Sbírá feedback od dětí.
                </p>
              </div>

              <div className="p-4 rounded-lg" style={{ backgroundColor: '#FAF9FF', borderColor: '#EDE9FF', borderWidth: 1 }}>
                <p className="font-bold mb-2">Týden 5–6: Reflexe</p>
                <p className="text-gray-700">
                  Sednete si s učitelem. Jak se vám to líbilo? Co by se mělo změnit? Jsou děti zainteresované?
                  Máte dostatek dat na rozhodnutí.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Fáze 3: Rozšíření (měsíce 2–3)
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Pilot se podařil. Teď rozšiřujete.
            </p>

            <ul className="space-y-3 mb-8 text-gray-700">
              <li>🎯 <strong>Další učitelé:</strong> Pozýváte dalšího učitele, který chce vyzkoušet.</li>
              <li>📚 <strong>Další předměty:</strong> Pokud to bylo úspěšné v matematice, zkusíte angličtinu.</li>
              <li>👥 <strong>Více tříd:</strong> Páté třídy vidí, že se to dělá ve čtvrtých. Proč by to nebylo u nich?</li>
              <li>💡 <strong>Integrujete do osnov:</strong> AI přestane být „zvláštní projekt" a stane se součástí výuky.</li>
            </ul>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Fáze 4: Měření a dlouhodobost (měsíc 4+)
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Po několika měsících máte data. Co budete měřit?
            </p>

            <ul className="space-y-3 mb-8 text-gray-700">
              <li>📊 <strong>Angažovanost:</strong> Jsou děti zainteresované? Ptají se dobrovolně?</li>
              <li>📈 <strong>Výkony:</strong> Zlepšily se školní výkony v daném předmětu?</li>
              <li>🎓 <strong>Autonomie:</strong> Učí se děti samostatnosti? Řešit problémy samy?</li>
              <li>😊 <strong>Spokojenost:</strong> Líbilo se to učitelům? Zbyly čas na jiné věci?</li>
            </ul>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Časté chyby, které se vyvarujete
            </h2>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-lg border-l-4" style={{ borderColor: '#dc2626', backgroundColor: '#FEF2F2' }}>
                <p className="font-bold text-red-700 mb-2">❌ Příliš velký pilot</p>
                <p className="text-gray-700">
                  Neotestovávejte všechny třídy najednou. Chyby v pilotu vám pak zkazí
                  reputaci u ostatních učitelů.
                </p>
              </div>

              <div className="p-4 rounded-lg border-l-4" style={{ borderColor: '#dc2626', backgroundColor: '#FEF2F2' }}>
                <p className="font-bold text-red-700 mb-2">❌ Příliš málo školení</p>
                <p className="text-gray-700">
                  Učitel, který neví, co dělá, nebude AI efektivně používat. Školte. Dělte si čas.
                </p>
              </div>

              <div className="p-4 rounded-lg border-l-4" style={{ borderColor: '#dc2626', backgroundColor: '#FEF2F2' }}>
                <p className="font-bold text-red-700 mb-2">❌ Bez komunikace s rodiči</p>
                <p className="text-gray-700">
                  Rodiče se budou bát. Řekněte jim, co se děje. Bezpečnost. Bez osobních údajů. Transparentnost.
                </p>
              </div>

              <div className="p-4 rounded-lg border-l-4" style={{ borderColor: '#dc2626', backgroundColor: '#FEF2F2' }}>
                <p className="font-bold text-red-700 mb-2">❌ Bez měření</p>
                <p className="text-gray-700">
                  Pokud neměříte dopad, nevíte, jestli se to vyplatilo. Sbírejte data. Buďte pragmatičtí.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Závěr: Čas je teď
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              AI není vzdálená budoucnost. Je to technologie, kterou mají děti ve své kapse. Lepší, aby ji používaly produktivně
              v kontrolovaném prostředí (ve škole s podporou učitele), než aby si ji „učily" sami na TikToku.
              Zavádění AI do školy není nástroj na modernizaci — je to nutnost.
            </p>

            <p className="text-gray-700 text-lg leading-relaxed mt-6">
              Začněte malý. Pilotujte. Učte se. Měřte. Rozšiřujte. Máte 6 měsíců času, abyste učinili rozdíl.
            </p>

            <p className="mt-8">
              <Link href="/ai-pro-zakladni-skoly" className="underline" style={{ color: '#6C47FF' }}>
                Začít s AIBginem →
              </Link>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
