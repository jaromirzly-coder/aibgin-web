import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'Reklamační řád | AIBgin',
  description: 'Reklamační řád služby AIBgin — jak uplatnit reklamaci, lhůty, způsob vyřízení.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/reklamace` },
};

export default function ReklamacePage() {
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
            Reklamační řád
          </h1>
          <p className="text-sm text-gray-400">Poslední aktualizace: 24. května 2026</p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">1. Úvodní ustanovení</h2>
            <p>
              Tento reklamační řád upravuje práva a povinnosti mezi společností <strong>SAY TO PAY s.r.o.</strong>,
              se sídlem Frýdek-Místek, IČO: [DOPLNIT] (dále jen „Poskytovatel") a zákazníkem při uplatňování
              práv z odpovědnosti za vady v souvislosti se službou AIBgin.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">2. Jak uplatnit reklamaci</h2>
            <p>
              Reklamaci uplatňujte výhradně e-mailem na adresu{' '}
              <a href="mailto:platby@aibgin.cz" className="underline font-semibold" style={{ color: '#6C47FF' }}>
                platby@aibgin.cz
              </a>.
            </p>
            <p className="mt-3">E-mail musí obsahovat:</p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Vaše jméno a e-mailovou adresu, na kterou byl zakoupen přístup</li>
              <li>Datum nákupu a číslo transakce (ze Stripe potvrzení)</li>
              <li>Popis reklamované vady — co konkrétně nefunguje a od kdy</li>
              <li>Případné screenshoty nebo záznamy dokladující vadu</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">3. Lhůta pro uplatnění reklamace</h2>
            <p>
              Reklamaci je nutné uplatnit <strong>do 6 měsíců</strong> od data zakoupení přístupu.
              Po uplynutí této lhůty zaniká právo na reklamaci.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">4. Co lze reklamovat</h2>
            <p className="mb-3">Reklamaci lze uplatnit výhradně v případě:</p>
            <div
              className="rounded-2xl p-5 border-l-4 mb-4"
              style={{ borderColor: '#6C47FF', backgroundColor: '#FAF9FF' }}
            >
              <p className="font-bold text-gray-800 mb-2">Technická nedostupnost služby</p>
              <p className="text-sm text-gray-600">
                Platforma AIBgin byla nedostupná déle, než připouští SLA (99 % dostupnost měsíčně),
                tedy kumulativní výpadek přesáhl 7,2 hodiny v kalendářním měsíci. Plánované
                odstávky oznámené předem se do výpočtu nezapočítávají.
              </p>
            </div>
            <p className="text-sm text-gray-500">
              <strong>Reklamaci nelze uplatnit</strong> v případě: nefunkčnosti způsobené na straně
              zákazníka (internet, zařízení), nespokojenosti s kvalitou AI odpovědí (AI je
              nedeterministická technologie), nebo v případě porušení podmínek využívání platformy.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">5. Proces vyřízení reklamace</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Potvrzení přijetí reklamace zašleme e-mailem do <strong>3 pracovních dnů</strong></li>
              <li>Reklamaci posoudíme a vyřídíme do <strong>30 dnů</strong> od jejího uplatnění</li>
              <li>O výsledku vás informujeme e-mailem na adresu, ze které jste reklamaci zaslali</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">6. Způsob náhrady</h2>
            <p className="mb-3">V případě uznané reklamace nabídneme dle vašeho výběru:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Prodloužení přístupu</strong> — o dobu odpovídající délce výpadku, nejméně
                však o 7 dní (i pokud původní přístup skončil)
              </li>
              <li>
                <strong>Vrácení peněz</strong> — poměrná část ceny odpovídající době nedostupnosti,
                na platební kartu použitou při nákupu prostřednictvím Stripe (do 14 dnů)
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">7. Mimosoudní řešení sporů</h2>
            <p>
              V případě sporu, který se nepodaří vyřešit dohodou, má zákazník jako spotřebitel právo
              na mimosoudní řešení spotřebitelského sporu prostřednictvím <strong>České obchodní inspekce</strong>{' '}
              (www.coi.cz, e-mail: adr@coi.cz).
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
