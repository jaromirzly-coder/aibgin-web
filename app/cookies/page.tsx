import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'Cookie politika | AIBgin',
  description: 'Jak AIBgin používá cookies — pouze technicky nezbytné, žádná analytika, žádné sledování.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/cookies` },
};

export default function CookiesPage() {
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
            🍪 Cookies
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            Cookie politika
          </h1>
          <p className="text-sm text-gray-400">Poslední aktualizace: 24. května 2026</p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto space-y-10 text-gray-700 leading-relaxed">

          <div
            className="rounded-2xl p-5 border-l-4"
            style={{ borderColor: '#059669', backgroundColor: '#F0FDF4' }}
          >
            <p className="font-bold text-gray-800 mb-1">Stručně: používáme minimum cookies</p>
            <p className="text-sm text-gray-600">
              Na webu aibgin.cz používáme <strong>pouze technicky nezbytné cookies</strong>.
              Žádné sledování, žádná analytika, žádné reklamní cookies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">1. Co jsou cookies</h2>
            <p>
              Cookies jsou malé textové soubory ukládané do vašeho prohlížeče při návštěvě webové stránky.
              Slouží k zajištění základní funkčnosti (přihlášení, session) nebo ke sledování chování
              uživatelů (analytika, reklama). My používáme pouze první kategorii.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-4">2. Cookies, které používáme</h2>

            <h3 className="text-base font-bold text-gray-800 mb-3">Technicky nezbytné cookies</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left p-3 border border-gray-200 font-bold">Název</th>
                    <th className="text-left p-3 border border-gray-200 font-bold">Účel</th>
                    <th className="text-left p-3 border border-gray-200 font-bold">Platnost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-gray-200 font-mono text-xs">sb-access-token</td>
                    <td className="p-3 border border-gray-200">Autentizace pedagoga (Supabase)</td>
                    <td className="p-3 border border-gray-200">Session</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="p-3 border border-gray-200 font-mono text-xs">sb-refresh-token</td>
                    <td className="p-3 border border-gray-200">Obnovení přihlášení (Supabase)</td>
                    <td className="p-3 border border-gray-200">7 dní</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200 font-mono text-xs">cookieConsent</td>
                    <td className="p-3 border border-gray-200">Zapamatování vašeho souhlasu s cookie bannerem</td>
                    <td className="p-3 border border-gray-200">1 rok (localStorage)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-base font-bold text-gray-800 mb-3">Platební cookies (Stripe)</h3>
            <p className="text-sm text-gray-600 mb-3">
              Při platbě prostřednictvím Stripe mohou být ve vašem prohlížeči nastaveny cookies Stripe
              pro účely prevence podvodů a bezpečnosti platby. Tyto cookies jsou nastavovány třetí stranou
              (stripe.com) a podléhají{' '}
              <a href="https://stripe.com/cookies-policy" target="_blank" rel="noopener noreferrer"
                className="underline" style={{ color: '#6C47FF' }}>
                Cookie politice Stripe
              </a>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">3. Co nepoužíváme</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Analytické cookies (Google Analytics, Hotjar apod.) — <strong>NE</strong></li>
              <li>Reklamní a retargetingové cookies — <strong>NE</strong></li>
              <li>Cookies sociálních sítí — <strong>NE</strong></li>
              <li>Profilování uživatelů nebo sledování napříč weby — <strong>NE</strong></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">4. Jak spravovat cookies v prohlížeči</h2>
            <p className="mb-3">
              Cookies můžete kdykoliv smazat nebo zablokovat v nastavení svého prohlížeče:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Chrome:</strong> Nastavení → Soukromí a zabezpečení → Soubory cookie
              </li>
              <li>
                <strong>Firefox:</strong> Předvolby → Soukromí a zabezpečení → Soubory cookie
              </li>
              <li>
                <strong>Safari:</strong> Předvolby → Soukromí → Spravovat data webových stránek
              </li>
              <li>
                <strong>Edge:</strong> Nastavení → Soukromí, vyhledávání a služby → Soubory cookie
              </li>
            </ul>
            <p className="mt-3 text-sm text-gray-500">
              Upozornění: zablokování technicky nezbytných cookies může způsobit, že se nebudete
              moci přihlásit do platformy AIBgin.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-black text-gray-900 mb-3">5. Změny cookie politiky</h2>
            <p>
              O změnách cookie politiky informujeme aktualizací této stránky a datumem poslední aktualizace
              v záhlaví. Doporučujeme tuto stránku pravidelně kontrolovat.
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
