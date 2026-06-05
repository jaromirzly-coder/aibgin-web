import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'EU AI Act a školy | AIBgin — Jak se compliance řeší',
  description:
    'EU AI Act a AI v školách: high-risk klasifikace, povinnosti škol, sankce. Jak AIBgin přenáší technickou compliance na sebe.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/ai-act-pro-skoly` },
  openGraph: {
    title: 'EU AI Act a školy | AIBgin',
    description:
      'EU AI Act: high-risk, povinnosti, sankce. Jak AIBgin řeší compliance za vás.',
    url: `${SITE_URL}/ai-act-pro-skoly`,
    siteName: 'AIBgin',
    locale: 'cs_CZ',
    type: 'website',
    images: [{ url: `${SITE_URL}/logo.png`, width: 1200, height: 630, alt: 'AIBgin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EU AI Act a školy | AIBgin',
    description: 'EU AI Act: high-risk, povinnosti, sankce. Compliance bez rizika.',
    images: [`${SITE_URL}/logo.png`],
  },
};

export default function AiActProSkolyPage() {
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
              EU AI Act a{' '}
              <span style={{ color: '#6C47FF' }}>
                školy
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Jak se nový zákon o AI dotkne vašej školy. Co musíte vědět o high-risk klasifikaci a sankcích.
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              EU AI Act vstupuje v platnost v roce 2026 a zásadně mění, jak můžete používat AI.
              Pro školství to znamená: AI systémy, které pracují s dětmi, jsou automaticky klasifikovány jako „high-risk" (vysoké riziko).
              To není zákaz — je to povinnost, aby systém splňoval přísnější kritéria bezpečnosti a transparentnosti.
            </p>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              High-Risk klasifikace: Co to znamená?
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Podle EU AI Act jsou AI systémy pro vzdělávání „high-risk" kvůli:
            </p>

            <ul className="space-y-3 mb-8 text-gray-700">
              <li>🎯 <strong>Dopad na vývoj dítěte:</strong> AI může ovlivnit vzdělávání a osobnostní vývoj.</li>
              <li>🛡️ <strong>Bezpečnostní opatření:</strong> Musí být zabudována fail-closed architektura.</li>
              <li>📋 <strong>Transparentnost:</strong> Dítě musí vědět, že mluví s AI.</li>
              <li>🔍 <strong>Audit trail:</strong> Každá interakce musí být zaznamenána.</li>
            </ul>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Jaké jsou sankce za nesoulad?
            </h2>

            <div className="rounded-2xl p-8 mb-8" style={{ backgroundColor: '#FEF2F2', borderColor: '#FEE2E2', borderWidth: 2 }}>
              <p className="text-gray-700 text-lg leading-relaxed">
                <strong>Až 3 % ročního obratu nebo 15 milionů EUR</strong> — což je v případě škol aplikováno jako sankce vůči zřizovateli.
                Pro municipální organizaci nebo veřejnou instituci to znamená existenční problém.
              </p>
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Ale buďte v klidu — AIBgin je navržen tak, aby vás těchto sankcí nedotýkal.
            </p>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Jak AIBgin řeší compliance
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              AIBgin používá „Ready by Design" přístup — compliance není přidána později, je zabudována do základní architektury.
            </p>

            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-lg border-l-4" style={{ borderColor: '#6C47FF', backgroundColor: '#FAF9FF' }}>
                <p className="font-bold mb-2" style={{ color: '#6C47FF' }}>✓ AI Disclosure</p>
                <p className="text-gray-700">Dítě vidí, že mluví s AI — při každé odpovědi jasně uvedeno „Toto vygeneroval AI asistent".</p>
              </div>

              <div className="p-4 rounded-lg border-l-4" style={{ borderColor: '#6C47FF', backgroundColor: '#FAF9FF' }}>
                <p className="font-bold mb-2" style={{ color: '#6C47FF' }}>✓ Fail-Closed Architektura</p>
                <p className="text-gray-700">Raději AI neodpovídá, než aby riskovala nevhodný obsah. Bezpečnost je priorita.</p>
              </div>

              <div className="p-4 rounded-lg border-l-4" style={{ borderColor: '#6C47FF', backgroundColor: '#FAF9FF' }}>
                <p className="font-bold mb-2" style={{ color: '#6C47FF' }}>✓ Audit Log</p>
                <p className="text-gray-700">5letý záznam všech interakcí. Kdykoliv můžete inspektorům ukázat, co se dělo.</p>
              </div>

              <div className="p-4 rounded-lg border-l-4" style={{ borderColor: '#6C47FF', backgroundColor: '#FAF9FF' }}>
                <p className="font-bold mb-2" style={{ color: '#6C47FF' }}>✓ AIBSN Certifikát</p>
                <p className="text-gray-700">Certifikace, kterou mohou ověřit rodiče i inspektoři. Veřejně dostupné.</p>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Rozdělení odpovědnosti
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              EU AI Act jasně definuje: <strong>věc je společná odpovědnost, ale technické povinnosti jsou na dodavateli.</strong>
            </p>

            <ul className="space-y-3 mb-8 text-gray-700">
              <li><strong>AIBgin:</strong> Zajišťuje bezpečnost AI, dokumentaci, audit log, updaty.</li>
              <li><strong>Vaše škola:</strong> Zajišťuje správu přístupu, informace rodičům, compliance s místní legislativou.</li>
            </ul>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Co dělat teď?
            </h2>

            <ol className="space-y-3 mb-8 text-gray-700">
              <li><strong>1. Informujte se.</strong> Přečtěte si {' '}
                <Link href="/compliance" className="underline" style={{ color: '#6C47FF' }}>
                  naši compliance stránku
                </Link>.
              </li>
              <li><strong>2. Zvolte řešení.</strong> AIBgin splňuje EU AI Act, takže máte jednu starosti méně.</li>
              <li><strong>3. Dokumentujte.</strong> Vezměte si DPA smlouvu a audit log. Budete připraveni.</li>
              <li><strong>4. Informujte rodiče.</strong> Není povinné, ale dobré pro transparentnost.</li>
            </ol>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Závěr
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              EU AI Act není hrozbou, je to příležitost. Školám, které sáhnou po bezpečných řešením,
              dá právní jistotu a důvěru rodičů. AIBgin vás chrání — od technické bezpečnosti až po právní compliance.
            </p>

            <p className="mt-8">
              <Link href="/ai-pro-zakladni-skoly" className="underline" style={{ color: '#6C47FF' }}>
                Začít s AIBginem pro vaši školu →
              </Link>
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
