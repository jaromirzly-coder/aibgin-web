import type { Metadata } from 'next';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'Všeobecné obchodní podmínky | AIBgin',
  description: 'Všeobecné obchodní podmínky služby AIBgin — SAY TO PAY s.r.o., IČO: 08694222, Slezská Ostrava.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/podminky` },
};

export default function PodminkyPage() {
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
            Všeobecné obchodní podmínky
          </h1>
          <p className="text-sm text-gray-400">Poslední aktualizace: 24. května 2026</p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto prose prose-gray max-w-none">

          <div className="space-y-10 text-gray-700 leading-relaxed">

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">1. Identifikace prodávajícího</h2>
              <p>
                Poskytovatelem služby AIBgin je společnost <strong>SAY TO PAY s.r.o.</strong>, se sídlem Zámostní 1155/27, Slezská Ostrava, 710 00,
                IČO: 08694222, zapsaná v obchodním rejstříku vedeném příslušným krajským soudem
                (dále jen „Poskytovatel" nebo „my").
              </p>
              <p className="mt-2">Kontaktní e-mail: <a href="mailto:support@aibgin.cz" className="underline" style={{ color: '#6C47FF' }}>support@aibgin.cz</a></p>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">2. Předmět smlouvy</h2>
              <p>
                Předmětem smlouvy je poskytnutí přístupu k SaaS platformě <strong>AIBgin</strong> — bezpečné a nastavitelné
                AI platformě pro instituce pracující s dětmi. Produkt <strong>Červnový AI Sandbox</strong> zahrnuje:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Přístup k platformě AIBgin po dobu trvání AI Sandboxu do 30. června 2026</li>
                <li>10 000 dotazů na třídu za měsíc · po vyčerpání možnost dokoupení</li>
                <li>5 vrstev ochrany obsahu, crisis detection (Linka bezpečí 116 111), audit log</li>
                <li>Nastavení AI asistenta pro konkrétní instituci (školku, školu, kroužek)</li>
                <li>QR přístup pro děti bez sběru jejich osobních dat</li>
                <li>Technická podpora e-mailem</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">3. Cena a platba</h2>
              <p>
                Cena produktu <strong>Červnový AI Sandbox</strong> je <strong>999 Kč jednorázově</strong> (vč. DPH dle platné sazby).
                Platba je realizována prostřednictvím platební brány <strong>Stripe</strong>, která akceptuje platební karty
                (Visa, Mastercard, American Express) a další platební metody dostupné v rozhraní platební brány.
              </p>
              <p className="mt-2">
                Smlouva je uzavřena okamžikem úspěšného provedení platby. Potvrzení o platbě a přístupové údaje
                jsou zaslány na e-mailovou adresu zadanou při nákupu.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">4. Přístup ke službě</h2>
              <p>
                Přístup k platformě AIBgin je aktivován do 24 hodin od připsání platby. Přístup trvá do
                <strong> 30. června 2026</strong> včetně, poté je přístup deaktivován. Poskytovatel
                si vyhrazuje právo nabídnout prodloužení přístupu za podmínek aktuálního ceníku.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">5. Práva a povinnosti smluvních stran</h2>
              <h3 className="text-base font-bold text-gray-800 mb-2">5.1 Poskytovatel se zavazuje:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Zajistit dostupnost služby na úrovni min. 99 % měsíčně (SLA)</li>
                <li>Zpracovávat osobní údaje v souladu s GDPR a těmito podmínkami</li>
                <li>Poskytnout technickou podporu prostřednictvím e-mailu support@aibgin.cz</li>
                <li>Informovat o plánovaných výpadcích s předstihem min. 24 hodin</li>
              </ul>
              <h3 className="text-base font-bold text-gray-800 mb-2 mt-4">5.2 Kupující (Správce) se zavazuje:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Používat platformu v souladu s jejím určením a platnou legislativou</li>
                <li>Nezneužívat přístup k platformě (sdílení přístupu třetím osobám mimo instituci)</li>
                <li>Nastavit platformu přiměřeně věku a potřebám dětí v jeho péči</li>
                <li>Zajistit, aby děti používaly platformu pod dohledem pedagoga</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">6. Odpovědnost za obsah generovaný AI</h2>
              <p>
                Platforma AIBgin využívá jazykový model třetí strany (Anthropic). Poskytovatel nenese odpovědnost
                za obsah vygenerovaný AI modelem, který by byl v rozporu s nastavením ochrany provedeným Správcem.
                Poskytovatel nasazuje technická opatření (obsahové filtry, 5 vrstev ochrany) pro minimalizaci rizik,
                avšak absolutní bezpečnost AI výstupu nelze zaručit.
              </p>
              <p className="mt-2">
                Správce je odpovědný za přiměřené nastavení platformy odpovídající věku a potřebám dětí ve své péči.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">7. Ochrana dat dětí</h2>
              <p>
                Platforma je navržena tak, aby <strong>neshromažďovala osobní údaje dětí</strong>. Děti přistupují
                prostřednictvím anonymního QR kódu bez nutnosti registrace, zadání jména nebo jiných osobních údajů.
                Zpracování osobních údajů se týká výhradně pedagogů a správců institucí. Podrobnosti viz
                <a href="/privacy" className="underline ml-1" style={{ color: '#6C47FF' }}>Zásady ochrany osobních údajů</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">8. Rozhodné právo a spory</h2>
              <p>
                Tyto podmínky a veškeré právní vztahy z nich vyplývající se řídí <strong>právním řádem České republiky</strong>.
                Případné spory budou řešeny příslušnými soudy v České republice. Spotřebitelé mají právo na mimosoudní
                řešení sporu prostřednictvím České obchodní inspekce (www.coi.cz).
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">9. Limit používání</h2>
              <p>
                Tarif <strong>Červnový AI Sandbox</strong> zahrnuje <strong>10 000 dotazů na třídu za měsíc</strong>.
                Po vyčerpání limitu je služba pozastavena. Obnovení přístupu je možné zakoupením dalšího balíčku
                na <a href="https://app.aibgin.cz" className="underline" style={{ color: '#6C47FF' }}>app.aibgin.cz</a> nebo
                na <a href="mailto:platby@aibgin.cz" className="underline" style={{ color: '#6C47FF' }}>platby@aibgin.cz</a>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-black text-gray-900 mb-3">10. Závěrečná ustanovení</h2>
              <p>
                Poskytovatel si vyhrazuje právo tyto podmínky měnit. O změnách informuje zákazníky e-mailem
                s předstihem min. 14 dní. Pokračování v užívání služby po datu účinnosti změn se považuje
                za souhlas s novými podmínkami.
              </p>
            </div>

            <div className="border-t border-gray-100 pt-8 mt-10 text-sm text-gray-500 text-center">
              SAY TO PAY s.r.o. · IČO: 08694222 · <a href="mailto:support@aibgin.cz" className="underline hover:text-gray-700">support@aibgin.cz</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
