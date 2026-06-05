import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'Kontrola ČŠI a AI | AIBgin — Co inspektory zajímá',
  description:
    'Co potřebuje škola při kontrole ČŠI ohledně AI: audit log, AIBSN certifikát, dokumentace, evidence. Jak se AIBgin na kontrolu připravuje.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/kontrola-csi-a-ai` },
  openGraph: {
    title: 'Kontrola ČŠI a AI | AIBgin',
    description:
      'ČŠI a AI: audit log, AIBSN, dokumentace. Co inspektory zajímá a jak se připravit.',
    url: `${SITE_URL}/kontrola-csi-a-ai`,
    siteName: 'AIBgin',
    locale: 'cs_CZ',
    type: 'website',
    images: [{ url: `${SITE_URL}/logo.png`, width: 1200, height: 630, alt: 'AIBgin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kontrola ČŠI a AI | AIBgin',
    description: 'ČŠI a AI: jak se připravit na kontrolu. Audit log, dokumentace.',
    images: [`${SITE_URL}/logo.png`],
  },
};

export default function KontrolaCSIaAIPage() {
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
              Kontrola ČŠI a{' '}
              <span style={{ color: '#6C47FF' }}>
                AI
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Co inspektory zajímá, když by vaše škola používala AI. Jak se připravit a co mít připraveno.
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Česká školní inspekce (ČŠI) se začíná zajímat o AI v školách. Zatím je to nové, ale inspektorovi,
              kteří přijedou kontrolovat, budou chtít vědět: Jak vaše škola AI používá? Jaké má bezpečnostní záruky?
              Jaké máte záznamy? Je to bezpečné pro děti?
            </p>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Co inspektoři chtějí vědět
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Inspekční zpráva se zaměří na:
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-lg border-l-4" style={{ borderColor: '#6C47FF', backgroundColor: '#FAF9FF' }}>
                <p className="font-bold" style={{ color: '#6C47FF' }}>1. Legislativa</p>
                <p className="text-gray-700">Splňuje to zákon č. 561/2004 Sb., GDPR, EU AI Act?</p>
              </div>

              <div className="p-4 rounded-lg border-l-4" style={{ borderColor: '#6C47FF', backgroundColor: '#FAF9FF' }}>
                <p className="font-bold" style={{ color: '#6C47FF' }}>2. Bezpečnost</p>
                <p className="text-gray-700">Jaké má AI schválení? Kdo ji testoval? Má certifikát?</p>
              </div>

              <div className="p-4 rounded-lg border-l-4" style={{ borderColor: '#6C47FF', backgroundColor: '#FAF9FF' }}>
                <p className="font-bold" style={{ color: '#6C47FF' }}>3. Evidence</p>
                <p className="text-gray-700">Jaké máte záznamy o používání? Audit log? Logs interakcí?</p>
              </div>

              <div className="p-4 rounded-lg border-l-4" style={{ borderColor: '#6C47FF', backgroundColor: '#FAF9FF' }}>
                <p className="font-bold" style={{ color: '#6C47FF' }}>4. Údaje dětí</p>
                <p className="text-gray-700">Jaké údaje se sbírají? Kde se ukládají? Kdo má přístup?</p>
              </div>

              <div className="p-4 rounded-lg border-l-4" style={{ borderColor: '#6C47FF', backgroundColor: '#FAF9FF' }}>
                <p className="font-bold" style={{ color: '#6C47FF' }}>5. Souhlas</p>
                <p className="text-gray-700">Mají rodiče informace? Mají možnost odmítnout?</p>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Co musíte mít připraveno
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Pokud inspektoři přijdou a vaše škola používá AIBgin, budete moci předložit:
            </p>

            <div className="space-y-4 mb-8">
              <div>
                <p className="font-bold text-lg mb-2" style={{ color: '#6C47FF' }}>📋 Dokumentace</p>
                <p className="text-gray-700">
                  Smlouva s AIBginem, DPA (Data Processing Agreement), manuál pro učitele, politika zabezpečení.
                </p>
              </div>

              <div>
                <p className="font-bold text-lg mb-2" style={{ color: '#6C47FF' }}>🏆 AIBSN Certifikát</p>
                <p className="text-gray-700">
                  Veřejně ověřitelný certifikát na{' '}
                  <a href="https://aibsn.org" className="underline" style={{ color: '#6C47FF' }}>
                    aibsn.org
                  </a>, který dokazuje, že AI splňuje bezpečnostní kritéria.
                </p>
              </div>

              <div>
                <p className="font-bold text-lg mb-2" style={{ color: '#6C47FF' }}>📊 Audit Log</p>
                <p className="text-gray-700">
                  5letý záznam všech interakcí, který můžete exportovat a ukázat inspektorům. Je anonymizovaný,
                  ale kompletní.
                </p>
              </div>

              <div>
                <p className="font-bold text-lg mb-2" style={{ color: '#6C47FF' }}>📄 Vnitřní evidence</p>
                <p className="text-gray-700">
                  Který třídní učitel AI používá? Kdy? Pro jaké účely? Máte to zdokumentované?
                </p>
              </div>

              <div>
                <p className="font-bold text-lg mb-2" style={{ color: '#6C47FF' }}>📧 Komunikace s rodiči</p>
                <p className="text-gray-700">
                  Informační dopis nebo oznámení v časopise pro rodiče, že škola AI používá. Není to povinné,
                  ale zvyšuje to transparentnost.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Praktické tipy na přípravu
            </h2>

            <ol className="space-y-4 mb-8 text-gray-700">
              <li className="flex gap-3">
                <span className="font-bold" style={{ color: '#6C47FF' }}>1.</span>
                <span><strong>Stáhněte si DPA.</strong> Máte ji od AIBginu? Uložte si ji.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold" style={{ color: '#6C47FF' }}>2.</span>
                <span><strong>Vytvořte vnitřní směrnici.</strong> Kdy se AI používá, jak, pro co, kdo má přístup.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold" style={{ color: '#6C47FF' }}>3.</span>
                <span><strong>Školte učitele.</strong> Vědí, jak AI používat bezpečně? Máte školící materiály?</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold" style={{ color: '#6C47FF' }}>4.</span>
                <span><strong>Exportujte audit log jednou měsíčně.</strong> Alespoň budete vědět, co se děje.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold" style={{ color: '#6C47FF' }}>5.</span>
                <span><strong>Informujte rodiče.</strong> Nebojte se jich. Budou rádi, že bezpečnost řešíte.</span>
              </li>
            </ol>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Odpovědi na typické otázky inspektorů
            </h2>

            <div className="space-y-4 mb-8">
              <div>
                <p className="font-bold text-lg mb-2" style={{ color: '#6C47FF' }}>🔹 "Má toto řešení certifikaci?"</p>
                <p className="text-gray-700">Ano. AIBgin má AIBSN certifikát. Lze jej ověřit veřejně.</p>
              </div>

              <div>
                <p className="font-bold text-lg mb-2" style={{ color: '#6C47FF' }}>🔹 "Splňuje GDPR?"</p>
                <p className="text-gray-700">Ano. Žádné osobní údaje nejsou sbírány (anonymní QR), data jsou v EU, máte DPA.</p>
              </div>

              <div>
                <p className="font-bold text-lg mb-2" style={{ color: '#6C47FF' }}>🔹 "Máte souhlas rodičů?"</p>
                <p className="text-gray-700">Není vyžadován (žádné osobní údaje), ale doporučujeme informaci odeslat.</p>
              </div>

              <div>
                <p className="font-bold text-lg mb-2" style={{ color: '#6C47FF' }}>🔹 "Jak dlouho se data uchovávají?"</p>
                <p className="text-gray-700">5 let. Pak se automaticky smažou, pokud si je nevyvezete.</p>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Závěr
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              Inspektoři nebudou proti AI. Budou proti tomu, aby se nebezpečně používala. AIBgin je navržen přesně pro to,
              aby inspektoři neměli výhrady. Máte certifikát, máte audit log, máte dokumentaci. Jste připraveni.
            </p>

            <p className="mt-8">
              <Link href="/compliance" className="underline" style={{ color: '#6C47FF' }}>
                Více o compliance →
              </Link>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
