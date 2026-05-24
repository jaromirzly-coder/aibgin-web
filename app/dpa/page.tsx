import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'DPA — Smlouva o zpracování osobních údajů | AIBgin',
  description: 'Data Processing Agreement dle GDPR čl. 28 — AIBgin jako zpracovatel, škola jako správce.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/dpa` },
};

export default function DpaPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Nav />

      <section
        className="pt-32 pb-12 px-6 text-center"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% -5%, #ecfdf5 0%, transparent 65%), #ffffff',
        }}
      >
        <div className="max-w-3xl mx-auto">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: '#ECFDF5', color: '#059669' }}
          >
            🇪🇺 GDPR čl. 28
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            Smlouva o zpracování osobních údajů
          </h1>
          <p className="text-base text-gray-500 mb-2">Data Processing Agreement (DPA)</p>
          <p className="text-sm text-gray-400">Poslední aktualizace: 24. května 2026</p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

          <div
            className="rounded-2xl p-5 border-l-4"
            style={{ borderColor: '#059669', backgroundColor: '#F0FDF4' }}
          >
            <p className="font-bold text-gray-800 mb-1">Pro školy a instituce</p>
            <p className="text-sm text-gray-600">
              Tato smlouva o zpracování osobních údajů je uzavírána dle čl. 28 nařízení GDPR
              mezi školou/institucí jako <strong>Správcem</strong> a SAY TO PAY s.r.o. (AIBgin) jako <strong>Zpracovatelem</strong>.
              Je součástí každého zakoupeného přístupu.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">1. Smluvní strany</h2>
            <p>
              <strong>Správce:</strong> Škola nebo instituce, která zakoupila přístup k platformě AIBgin
              (identifikovaná e-mailovou adresou a názvem instituce zadanými při registraci).
            </p>
            <p className="mt-2">
              <strong>Zpracovatel:</strong> SAY TO PAY s.r.o., Zámostní 1155/27, Slezská Ostrava, 710 00, IČO: 08694222,
              provozovatel platformy AIBgin (support@aibgin.cz).
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">2. Předmět zpracování</h2>
            <p className="mb-3">Zpracovatel zpracovává jménem Správce tyto kategorie dat:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Session logy</strong> — anonymizované záznamy o průběhu AI konverzací (bez osobních dat dětí)</li>
              <li><strong>Audit data</strong> — záznamy o přístupu, nastavení a konfiguraci platformy Správcem</li>
              <li><strong>Technické logy</strong> — IP adresy, časové razítka přístupu pedagogů</li>
            </ul>
            <p className="mt-3 text-sm text-gray-500">
              Děti přistupují přes anonymní QR kód — jejich osobní údaje nejsou zpracovávány.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">3. Účel zpracování</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Poskytování a provoz platformy AIBgin</li>
              <li>Bezpečnostní monitoring a detekce krizových situací</li>
              <li>Vedení zákonem požadovaného audit logu (5 let)</li>
              <li>Technická podpora Správce</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">4. Bezpečnostní opatření</h2>
            <p className="mb-3">Zpracovatel implementuje tato technická a organizační opatření:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Šifrování AES-256</strong> pro veškerá uložená data</li>
              <li><strong>Servery výhradně v EU</strong> (Vercel Frankfurt, Supabase EU region)</li>
              <li>Šifrovaný přenos dat (TLS 1.3)</li>
              <li>Přístup k datům pouze autorizovaným zaměstnancům (need-to-know)</li>
              <li>Pravidelné bezpečnostní audity a penetrační testy</li>
              <li>Zálohy každých 6 hodin, retence 30 dní</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">5. Sub-zpracovatelé</h2>
            <p className="mb-3">Správce souhlasí s využitím těchto sub-zpracovatelů:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-bold">Sub-zpracovatel</th>
                    <th className="text-left p-3 border border-gray-200 font-bold">Účel</th>
                    <th className="text-left p-3 border border-gray-200 font-bold">Záruka</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-200 font-medium">Anthropic</td>
                    <td className="p-3 border border-gray-200">Zpracování AI dotazů</td>
                    <td className="p-3 border border-gray-200">Standardní smluvní doložky EU</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200 font-medium">Vercel</td>
                    <td className="p-3 border border-gray-200">Hosting aplikace</td>
                    <td className="p-3 border border-gray-200">EU region (Frankfurt)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200 font-medium">Supabase</td>
                    <td className="p-3 border border-gray-200">Databáze a autentizace</td>
                    <td className="p-3 border border-gray-200">EU region, GDPR DPA</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Zpracovatel informuje Správce o plánovaných změnách sub-zpracovatelů s předstihem min. 30 dní.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">6. Práva a povinnosti správce</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Správce má právo auditovat zpracování dat (s předstihem 14 dní)</li>
              <li>Zpracovatel pomůže Správci splnit povinnosti dle čl. 32–36 GDPR</li>
              <li>Zpracovatel po ukončení smlouvy smaže nebo vrátí veškerá data (dle volby Správce)</li>
              <li>Zpracovatel hlásí porušení ochrany dat do 72 hodin od zjištění</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">7. Stáhnout DPA jako PDF</h2>
            <p className="mb-4">
              Kompletní DPA smlouvu v PDF formátu (vhodná pro podpis a archivaci) zašleme na vyžádání
              na vaši e-mailovou adresu.
            </p>
            <a
              href="mailto:support@aibgin.cz?subject=Žádost%20o%20DPA%20smlouvu%20AIBgin&body=Dobrý%20den%2C%0A%0Aprosím%20o%20zaslání%20DPA%20smlouvy%20(Data%20Processing%20Agreement)%20pro%20platformu%20AIBgin.%0A%0ANázev%20instituce%3A%20%0AKontaktní%20osoba%3A%20%0AE-mail%3A%20%0A%0ADěkuji."
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: '#6C47FF' }}
            >
              Stáhnout DPA jako PDF →
            </a>
            <p className="text-sm text-gray-400 mt-3">
              Kliknutím otevřete předvyplněný e-mail — zašleme DPA do 2 pracovních dnů.
            </p>
          </div>

          <div className="border-t border-gray-100 pt-8 mt-10 text-sm text-gray-500 text-center">
            SAY TO PAY s.r.o. · IČO: 08694222 · <a href="mailto:support@aibgin.cz" className="underline hover:text-gray-700">support@aibgin.cz</a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
