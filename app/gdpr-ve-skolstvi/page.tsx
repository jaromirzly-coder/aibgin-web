import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'GDPR a AI ve školství | AIBgin — Jak to řeší AIBgin',
  description:
    'GDPR a AI ve školství: anonymní QR přístup, data v EU, DPA smlouva, 5letý audit log. Jak AIBgin zajišťuje GDPR compliance.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/gdpr-ve-skolstvi` },
  openGraph: {
    title: 'GDPR a AI ve školství | AIBgin',
    description:
      'GDPR a AI ve školství: anonymní QR, data v EU, DPA smlouva. Jak AIBgin řeší compliance.',
    url: `${SITE_URL}/gdpr-ve-skolstvi`,
    siteName: 'AIBgin',
    locale: 'cs_CZ',
    type: 'website',
    images: [{ url: `${SITE_URL}/logo.png`, width: 1200, height: 630, alt: 'AIBgin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GDPR a AI ve školství | AIBgin',
    description: 'GDPR a AI: anonymní QR, data v EU, DPA. Compliance bez kompromisů.',
    images: [`${SITE_URL}/logo.png`],
  },
};

export default function GdprVeSkolstviPage() {
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
              GDPR a AI ve{' '}
              <span style={{ color: '#6C47FF' }}>
                školství
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Jak zajistit ochranu osobních údajů dětí, když používáte AI asistenta. Praktický průvodce pro ředitele a právníky.
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto prose prose-lg">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              GDPR (Obecné nařízení o ochraně osobních údajů) je pro školství zásadní. Ochrana údajů dětí je zvláště důležitá,
              protože děti jsou považovány za „zranitelné osoby" a jejich souhlas není právně závazný — řídí se souhlasem rodičů či zákonného zástupce.
            </p>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Hlavní problémy s AI a GDPR
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Když použijete všeobecný ChatGPT nebo jiný veřejný AI nástroj, tyto problémy vznikají:
            </p>

            <ul className="space-y-4 mb-8 text-gray-700">
              <li className="flex gap-3">
                <span className="font-bold" style={{ color: '#6C47FF' }}>1.</span>
                <span><strong>Sběr dat:</strong> AI aplikace sbírají emaily, IP adresy, metadata. To jsou osobní údaje.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold" style={{ color: '#6C47FF' }}>2.</span>
                <span><strong>Tréninková data:</strong> Konverzace mohou být použity k trénování AI. Údaje dítěte se stanou součástí modelu.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold" style={{ color: '#6C47FF' }}>3.</span>
                <span><strong>Jurisdikce:</strong> Data leží v USA, mimo EU. To porušuje GDPR.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold" style={{ color: '#6C47FF' }}>4.</span>
                <span><strong>Žádný DPA:</strong> Běžné AI aplikace nemají s školou smlouvu o zpracování údajů.</span>
              </li>
            </ul>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Jak to řeší AIBgin
            </h2>

            <div className="rounded-2xl p-8 mb-8" style={{ backgroundColor: '#FAF9FF', borderColor: '#EDE9FF', borderWidth: 2 }}>
              <h3 className="font-bold text-xl mb-4" style={{ color: '#6C47FF' }}>
                Čtyři pilíře GDPR compliance v AIBginu
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="font-bold text-lg mb-2">🔐 Anonymní QR přístup</p>
                  <p className="text-gray-700">
                    Dítě se nemusí registrovat. Žádný email, žádné jméno, žádné osobní údaje. Jen naskenuje QR kód a začne mluvit.
                    Z pohledu GDPR: žádné osobní údaje = žádné riziko.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-lg mb-2">🇪🇺 Data výhradně v EU</p>
                  <p className="text-gray-700">
                    Všechna data jsou uložena v EU (AWS Frankfurt). Žádný transfer do USA, žádné třetí země.
                    To respektuje GDPR bez dalších právních opatření.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-lg mb-2">📋 DPA smlouva</p>
                  <p className="text-gray-700">
                    Každá škola dostane Data Processing Agreement (DPA) standardizovaný podle GDPR.
                    To jasně definuje, kdo odpovídá za co.
                  </p>
                </div>

                <div>
                  <p className="font-bold text-lg mb-2">📊 5letý audit log</p>
                  <p className="text-gray-700">
                    Každá konverzace je zaznamenána. Můžete ji exportovat, analyzovat, nebo ji vymazat.
                    Plná kontrola, plné auditování.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Praktické kroky pro ředitele
            </h2>

            <ol className="space-y-4 mb-8 text-gray-700">
              <li className="flex gap-3">
                <span className="font-bold" style={{ color: '#6C47FF' }}>1.</span>
                <span><strong>Přečtěte si DPA smlouvu</strong> s AIBginem. Je standardní a bez překvapení.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold" style={{ color: '#6C47FF' }}>2.</span>
                <span><strong>Informujte rodiče.</strong> Není potřeba souhlas (žádné osobní údaje), ale transparentnost je důležitá.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold" style={{ color: '#6C47FF' }}>3.</span>
                <span><strong>Zažádejte si audit log</strong> kdykoliv. Je vždy dostupný pro vaši kontrolu.</span>
              </li>
              <li className="flex gap-3">
                <span className="font-bold" style={{ color: '#6C47FF' }}>4.</span>
                <span><strong>Při kontrole ČŠI</strong> můžete ukázat compliance dokumentaci. Budete připraveni.</span>
              </li>
            </ol>

            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Závěr
            </h2>

            <p className="text-gray-700 text-lg leading-relaxed">
              GDPR není překážkou k používání AI v školách. Je to příležitost používat AI bezpečně a odpovědně.
              AIBgin je postaven na principu „Privacy by Design" — soukromí je zabudované od samého začátku,
              ne přidáné později. Pro ředitele to znamená spát pokojně vědouc, že údaje dětí jsou v bezpečí.
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
