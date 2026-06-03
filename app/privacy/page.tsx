import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'Zásady ochrany osobních údajů | AIBgin',
  description: 'GDPR zásady ochrany osobních údajů AIBgin — SAY TO PAY s.r.o. Data výhradně v EU, děti neevidujeme.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
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
            🔒 GDPR
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            Zásady ochrany osobních údajů
          </h1>
          <p className="text-sm text-gray-400">Poslední aktualizace: 24. května 2026</p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">1. Správce osobních údajů</h2>
            <p>
              Správcem osobních údajů je <strong>SAY TO PAY s.r.o.</strong>, se sídlem Zámostní 1155/27, Slezská Ostrava, 710 00,
              IČO: 08694222 (dále jen „Správce"). Kontakt na pověřence ochrany osobních
              údajů (DPO): <a href="mailto:support@aibgin.cz" className="underline" style={{ color: '#6C47FF' }}>support@aibgin.cz</a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">2. Jaká data zpracováváme</h2>
            <div
              className="rounded-2xl p-5 mb-4 border-l-4"
              style={{ borderColor: '#059669', backgroundColor: '#F0FDF4' }}
            >
              <p className="font-bold text-gray-800 mb-1">Děti — žádná osobní data</p>
              <p className="text-sm text-gray-600">
                Děti přistupují k platformě prostřednictvím anonymního QR kódu. Neevidujeme jméno,
                věk, e-mail ani jiné osobní údaje dítěte. Zaznamenáváme pouze anonymní session ID
                pro účely audit logu (bez vazby na konkrétní osobu).
              </p>
            </div>
            <h3 className="text-base font-bold text-gray-800 mb-2">Pedagogové a správci institucí:</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Jméno a příjmení (registrace)</li>
              <li>E-mailová adresa (přihlášení, komunikace)</li>
              <li>Název instituce</li>
              <li>Platební údaje (zpracovává Stripe, my neukládáme čísla karet)</li>
              <li>IP adresa a technické logy přístupu</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">3. Právní základ zpracování</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Plnění smlouvy (čl. 6 odst. 1 písm. b GDPR)</strong> — zpracování nezbytné pro poskytnutí objednané služby</li>
              <li><strong>Oprávněný zájem (čl. 6 odst. 1 písm. f GDPR)</strong> — bezpečnost platformy, audit log, prevence zneužití</li>
              <li><strong>Plnění právní povinnosti (čl. 6 odst. 1 písm. c GDPR)</strong> — uchovávání daňových dokladů</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">4. Doba uchování dat</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Údaje pedagogů: po dobu trvání smlouvy + 3 roky pro daňové účely</li>
              <li>Audit log sessions (anonymizovaný): 5 let (zákonný požadavek pro školní dokumentaci)</li>
              <li>Platební záznamy: 10 let (zákon o účetnictví)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">5. Práva subjektů údajů</h2>
            <p className="mb-3">Máte právo:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Na přístup</strong> k osobním údajům, které o vás zpracováváme</li>
              <li><strong>Na opravu</strong> nesprávných nebo neúplných údajů</li>
              <li><strong>Na výmaz</strong> údajů (právo být zapomenut) — s výjimkou zákonných povinností</li>
              <li><strong>Na omezení zpracování</strong> v zákonem stanovených případech</li>
              <li><strong>Na přenositelnost dat</strong> ve strojově čitelném formátu</li>
              <li><strong>Vznést námitku</strong> proti zpracování na základě oprávněného zájmu</li>
              <li><strong>Podat stížnost</strong> u Úřadu pro ochranu osobních údajů (www.uoou.cz)</li>
            </ul>
            <p className="mt-3">
              Žádosti zasílejte na: <a href="mailto:support@aibgin.cz" className="underline" style={{ color: '#6C47FF' }}>support@aibgin.cz</a>.
              Odpovíme do 30 dnů.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">6. Umístění dat — výhradně v EU</h2>
            <p>
              Veškerá data jsou ukládána výhradně na serverech v Evropské unii. Nepřenášíme osobní
              údaje do třetích zemí mimo EU/EHP.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">7. Sub-zpracovatelé</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse mt-2">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-bold">Zpracovatel</th>
                    <th className="text-left p-3 border border-gray-200 font-bold">Účel</th>
                    <th className="text-left p-3 border border-gray-200 font-bold">Umístění</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-200">Anthropic</td>
                    <td className="p-3 border border-gray-200">Zpracování AI dotazů (bez ukládání osobních dat)</td>
                    <td className="p-3 border border-gray-200">USA (standardní smluvní doložky)</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">Vercel</td>
                    <td className="p-3 border border-gray-200">Hosting webové aplikace</td>
                    <td className="p-3 border border-gray-200">EU (Frankfurt)</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">Supabase</td>
                    <td className="p-3 border border-gray-200">Databáze, autentizace</td>
                    <td className="p-3 border border-gray-200">EU</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200">Stripe</td>
                    <td className="p-3 border border-gray-200">Platební brána</td>
                    <td className="p-3 border border-gray-200">EU/USA (SCCs)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">8. Cookies</h2>
            <p>
              Používáme pouze technicky nezbytné cookies. Podrobnosti v
              <a href="/cookies" className="underline ml-1" style={{ color: '#6C47FF' }}>Cookie politice</a>.
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
