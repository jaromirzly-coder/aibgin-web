import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'Odstoupení od smlouvy | AIBgin',
  description: 'Informace o právu na odstoupení od smlouvy — §1829 a §1837 občanského zákoníku.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/odstoupeni` },
};

export default function OdstoupeniPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />

      <section
        className="pt-32 pb-12 px-6 text-center"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% -5%, #ede9ff 0%, transparent 65%), #ffffff',
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: '#EDE9FF', color: '#6C47FF' }}
          >
            ⚖️ Právní dokumenty
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            Odstoupení od smlouvy
          </h1>
          <p className="text-sm text-gray-400">Poslední aktualizace: 24. května 2026</p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">1. Zákonné právo na odstoupení</h2>
            <p>
              Jako spotřebitel máte dle <strong>§ 1829 zákona č. 89/2012 Sb. (občanský zákoník)</strong> právo
              odstoupit od smlouvy uzavřené distančním způsobem bez udání důvodu, a to ve lhůtě <strong>14 dnů</strong>{' '}
              ode dne uzavření smlouvy.
            </p>
          </div>

          <div>
            <div
              className="rounded-2xl p-6 border-l-4"
              style={{ borderColor: '#DC2626', backgroundColor: '#FEF2F2' }}
            >
              <p className="font-bold text-gray-800 mb-2">Důležité upozornění — digitální obsah</p>
              <p className="text-sm text-gray-600">
                Dle <strong>§ 1837 písm. l) občanského zákoníku</strong> nevzniká právo na odstoupení od smlouvy
                u smlouvy o poskytování digitálního obsahu, který není dodáván na hmotném nosiči,
                jestliže byl digitální obsah dodán s <strong>předchozím výslovným souhlasem spotřebitele</strong>{' '}
                před uplynutím lhůty pro odstoupení od smlouvy a Poskytovatel sdělil spotřebiteli před uzavřením
                smlouvy, že v takovém případě nemá právo na odstoupení od smlouvy.
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Zakoupením přístupu AIBgin a potvrzením okamžitého zpřístupnění platformy při nákupu
                spotřebitel výslovně souhlasí s okamžitým poskytnutím digitálního obsahu a bere na vědomí,
                že tím <strong>ztrácí právo na odstoupení od smlouvy</strong>.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">2. Jak odstoupit od smlouvy</h2>
            <p>
              Pokud se domníváte, že máte právo na odstoupení (např. přístup nebyl okamžitě zpřístupněn),
              zašlete e-mail na adresu{' '}
              <a href="mailto:platby@aibgin.cz" className="underline font-semibold" style={{ color: '#6C47FF' }}>
                platby@aibgin.cz
              </a>{' '}
              obsahující vyplněný formulář níže nebo jednoznačné prohlášení o odstoupení od smlouvy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">3. Vzorový formulář pro odstoupení</h2>
            <div className="rounded-2xl border border-gray-200 p-6 font-mono text-sm text-gray-600 bg-gray-50 whitespace-pre-line">
{`Vzorový formulář pro odstoupení od smlouvy
(vyplňte tento formulář a zašlete jej, pokud chcete odstoupit od smlouvy)

Komu: SAY TO PAY s.r.o., platby@aibgin.cz

Oznamuji/oznamujeme (*), že odstupuji/odstupujeme (*) od smlouvy
o nákupu produktu AIBgin — Červnový AI Sandbox.

Datum objednávky: ......................
Číslo transakce (ze Stripe potvrzení): ......................
Jméno a příjmení spotřebitele/spotřebitelů (*): ......................
Adresa spotřebitele/spotřebitelů (*): ......................
E-mailová adresa, na níž byl zakoupen přístup: ......................

Podpis spotřebitele/spotřebitelů (*) (pouze pokud je tento formulář
zasílán v listinné podobě): ......................

Datum: ......................

(*) Nehodící se škrtněte.`}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">4. Důsledky odstoupení</h2>
            <p>
              V případě uznání práva na odstoupení vrátíme vám veškeré přijaté peněžní prostředky
              nejpozději do <strong>14 dnů</strong> ode dne, kdy nám bylo doručeno vaše rozhodnutí
              o odstoupení od smlouvy. Vrácení provedeme stejným platebním prostředkem, který jste
              použili při původní transakci, pokud jste výslovně nesouhlasili s jiným způsobem.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-8 mt-10 text-sm text-gray-500 text-center">
            SAY TO PAY s.r.o. · Frýdek-Místek · <a href="mailto:support@aibgin.cz" className="underline hover:text-gray-700">support@aibgin.cz</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
