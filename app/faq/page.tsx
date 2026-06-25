import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SITE_URL = 'https://aibgin.cz';

const faqCategories = [
  {
    name: 'Bezpečnost',
    questions: [
      {
        q: 'Je AI bezpečná pro děti?',
        a: 'Obecně ne. Existuje mnoho nebezpečí. Ale AIBgin je navržen speciálně s pěti vrstvami ochrany. Každá odpověď prochází AIBguard auditem. Pokud je něco nebezpečné, neodešle se.',
      },
      {
        q: 'Co když si dítě zeptá na něco užitečné, co je zakázané?',
        a: 'Systém nabídne alternativu. Pokud si 7leté dítě zeptá na to, jak funguje seks, AIBgin řekne: \"To je pro starší děti. Chceš vědět o třídění zvířat?\" Věcně a bez ostychu.',
      },
      {
        q: 'Vidí AI ostatních dětí?',
        a: 'Ne. Každé dítě má vlastní session. Konverzace jednoho dítěte nevidí ostatní. Úplné oddělení.',
      },
      {
        q: 'Co když se AI porouchá a řekne něco nevhodného?',
        a: 'To je právě důvod pěti vrstev. Pokud selže jedna, ostatní blokují. A kdybychom věděli o chybě, můžeme ji opravit v hodinách, ne dnech.',
      },
      {
        q: 'Jak dlouho máte tým na bezpečnost?',
        a: 'Více lidí, než na vývoj. Bezpečnost je nejdůležitější. Audity třetích stran. Penetrační testy. Žádné skrytí.',
      },
      {
        q: 'Co když nějak prolomím bezpečnost?',
        a: 'Děkuji. Prosím, napište nám na security@aibgin.cz. Máme bug-bounty program. Bezpečnost komunity je důležitá.',
      },
    ],
  },
  {
    name: 'Soukromí a data',
    questions: [
      {
        q: 'Musí mít dítě účet?',
        a: 'Vůbec ne. Jen naskenuje QR kód. To je všechno. Žádný email, žádné heslo, žádný login. Anonymní.',
      },
      {
        q: 'Jaké údaje se o dítěti sbírají?',
        a: 'Prakticky žádné. Neznáme jméno, věk, školu, rodinu. Víme jen: jaké otázky si položilo a jaké odpovědi dostal. A to je anonymizované.',
      },
      {
        q: 'Kdo vidí konverzace?',
        a: 'Nikdo konkrétně. Škola vidí souhrn (\"20 dotazů na matematiku\"), ale ne obsah jednotlivých konverzací. I učitel nevidí, co si dítě zeptalo. Jen souhrn. Soukromí.',
      },
      {
        q: 'Může AIBgin používat moje konverzace k trénování AI?',
        a: 'Ne. Nikdy. Máme to psáno v DPA. Data vaší školy se nepoužívají k trénování. Vaše data zůstávají vaše.',
      },
      {
        q: 'Jak dlouho se data uchovávají?',
        a: '5 let. Pak se automaticky smažou. Pokud chcete, můžete je vymazat dříve. Nebo je vyvézt.',
      },
      {
        q: 'Je to v souladu s GDPR?',
        a: 'Ano. Žádné osobní údaje = žádný problém GDPR. Máte DPA smlouvu. Audit log. Vše.',
      },
      {
        q: 'Co když rodiče chcou vidět, co si jejich dítě zeptalo?',
        a: 'Můžou si to vyprosit. Správce (obvykle učitel nebo ředitel) má audit log. Je to uloženo 5 let. Mohou si ho vyvézt a poslat rodičům.',
      },
    ],
  },
  {
    name: 'Cena a fakturace',
    questions: [
      {
        q: 'Kolik stojí AIBgin?',
        a: '1 490 Kč jednorázově za třídu (červenec + srpen 2026). Bez skrytých poplatků. Bez měsíčních plateb. Bez automatického obnovení.',
      },
      {
        q: 'Platí se za každého žáka zvlášť?',
        a: 'Ne. 1 490 Kč je za třídu. Máte 35 žáků? Pořád 1 490 Kč. 5 tříd? 7 450 Kč.',
      },
      {
        q: 'Co se stane po prázdninách?',
        a: 'Přístup vyprší 31. 8. 2026. Bez automatického obnovení. Od září nabídneme podzimní tarify. Budete vědět, co bude dál, včas.',
      },
      {
        q: 'Máte slevy pro více škol nebo sítě?',
        a: 'Ano. Kontaktujte nás na hello@aibgin.cz. Domluvíme si ceník.',
      },
      {
        q: 'Vrátíte peníze, pokud se mi to nebude líbit?',
        a: 'Máte 14 dní na vrácení bez otázek. Pokud to nebude fungovat, vrátíme vám 100 % peníze.',
      },
      {
        q: 'Jak probíhá fakturace?',
        a: 'Ihned po zaplacení. Fakturu dostanete na email uvedený při registraci. V češtině, s DPH, na vaše IČO.',
      },
    ],
  },
  {
    name: 'Provoz a nastavení',
    questions: [
      {
        q: 'Jak se AIBgin aktivuje?',
        a: 'Registrujete se, vytvoříte třídu, vygenerujete QR kód, promítnete jej. Hotovo za 5 minut.',
      },
      {
        q: 'Potřebuji nějaký speciální software?',
        a: 'Ne. Jen internetový prohlížeč. Děti si naskenují QR. Funguje na telefonu, tabletu, laptopě.',
      },
      {
        q: 'Jaké máte hardwarové požadavky?',
        a: 'Žádné speciální. Každé zařízení s internetem a kamerou (nebo jen internetem, pokud QR naskenuje zařízení učitele). Školní WiFi stačí.',
      },
      {
        q: 'Co když WiFi padne?',
        a: 'Session se přesune do offline režimu. Dotazy se ukládají lokálně a synchronizují se, když je WiFi zpátky. Bez výpadku.',
      },
      {
        q: 'Mohu mít více QR kódů pro jednu třídu?',
        a: 'Ano. Každý QR je unikátní session. Můžete si vygenerovat jeden pro každou hodinu. Nebo jeden obecný, který se restartuje po čase.',
      },
      {
        q: 'Jak vypnout AI na určitou dobu?',
        a: 'V dashboardu. Jedním klikem. Pokud chcete mít den bez AI, stačí QR deaktivovat.',
      },
      {
        q: 'Mohu nastavit, o čem AI mluví?',
        a: 'Ano. Vytváříme profily podle věkové skupiny a tématu. Chcete robotiku? Python. Angličtinu? Konverzace. Máte flexibilitu.',
      },
    ],
  },
  {
    name: 'Compliance a ČŠI',
    questions: [
      {
        q: 'Má AIBgin nějakou certifikaci?',
        a: 'Ano. AIBSN certifikát. Veřejně ověřitelný na aibsn.org. Také máme DPA smlouvu splňující GDPR.',
      },
      {
        q: 'Splňuje AIBgin EU AI Act?',
        a: 'Ano. Byl navržen s vědomím EU AI Act. Ready by Design, ne retrofit.',
      },
      {
        q: 'Co bude inspektor (ČŠI) chtít vidět?',
        a: 'DPA, certifikát, audit log, vaši vnitřní směrnici. Pokud to máte, projde to bez problémů.',
      },
      {
        q: 'Pomůžete nám při kontrole ČŠI?',
        a: 'Ano. Máme tým, který se stará o compliance. Pomůžeme vám připravit dokumentaci.',
      },
      {
        q: 'Máte audit log?',
        a: 'Ano. 5 let všech interakcí. Exportovatelný kdykoliv. Anonymizovaný.',
      },
      {
        q: 'Je AI používaná v našej škole shodná se zákonem 561/2004 Sb.?',
        a: 'Ano. Splňuje zákon o vzdělávání. Nic v něm není v rozporu. Pomáhá, neškodí.',
      },
    ],
  },
  {
    name: 'Integrace do výuky',
    questions: [
      {
        q: 'Jak se AIBgin integruje do osnov?',
        a: 'Není to povinné. Ale můžete jej použít jako doplněk ke kterémukoliv předmětu. Matematika: AI řeší příklady. Angličtina: konverzace. Biologie: otázky. Vaše volba.',
      },
      {
        q: 'Bude to nahrazovat učitele?',
        a: 'Vůbec ne. AI je pomocník. Učitel zůstává klíčový. AI sníží rutinní práci (opakující se otázky), aby měl učitel čas na klíčové věci.',
      },
      {
        q: 'Jak se měří dopad na vzdělávání?',
        a: 'To je na vás. Můžete měřit: angažovanost, výkony, spokojenost. My poskytujeme data (dotazy, časy), vy je interpretujete.',
      },
      {
        q: 'Co když se učitel bojí AI?',
        a: 'Je to běžné. Školení pomáhá. Pokud má učitel obavy, začne malým pilotem. Vidí, že to funguje.',
      },
      {
        q: 'Mohu AIBgin připojit do svého LMS (školský informační systém)?',
        a: 'Pracujeme na API. Zatím přímá integrace není, ale máme na to plány.',
      },
    ],
  },
  {
    name: 'Ostatní',
    questions: [
      {
        q: 'Kdo stojí za AIBginem?',
        a: 'Tým SAY TO PAY s.r.o. — česká startup s roky zkušeností v EdTech a bezpečnosti. Nejsme americký megakoncern. Jsme váš soused.',
      },
      {
        q: 'Jak se mohu obrátit s otázkou nebo problémem?',
        a: 'Email: hello@aibgin.cz. Telefon: +420 723 657 885. Chat na webu. Odpověď do 24 hodin.',
      },
      {
        q: 'Chci si AIBgin vyzkoušet bez registrace. Je to možné?',
        a: 'Ano. Půjďte na app.aibgin.cz/demo. Vidíte v praxi, jak to funguje. Bez emailu, bez zavazků.',
      },
      {
        q: 'Máte se kým mluvit o specifických situacích (v mé škole...)?',
        a: 'Ano. Objednejte si konzultaci. Řekněte nám svou situaci. Doporučíme řešení na míru.',
      },
    ],
  },
];

export const metadata: Metadata = {
  title: 'FAQ | AIBgin — Často kladené otázky',
  description:
    'Často kladené otázky o AIBginu: bezpečnost, soukromí, cena, integrace, compliance. Odpovědi na všechno.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: 'FAQ | AIBgin',
    description: 'Často kladené otázky o AIBginu.',
    url: `${SITE_URL}/faq`,
    siteName: 'AIBgin',
    locale: 'cs_CZ',
    type: 'website',
    images: [{ url: `${SITE_URL}/logo.png`, width: 1200, height: 630, alt: 'AIBgin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ | AIBgin',
    description: 'Často kladené otázky o AIBginu.',
    images: [`${SITE_URL}/logo.png`],
  },
};

const jsonLdFAQ = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqCategories.flatMap((category) =>
    category.questions.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    }))
  ),
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }}
      />
      <main className="min-h-screen bg-white text-gray-900">
        <Nav />

        <section className="pt-32 pb-20 px-6" style={{ background: 'linear-gradient(135deg, #ede9ff 0%, transparent 100%)' }}>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Často kladené otázky
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Odpovědi na všechny vaše otázky o AIBginu: bezpečnost, soukromí, cena, compliance a integraci.
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category) => (
              <div key={category.name} className="mb-16">
                <h2 className="text-3xl font-black mb-8" style={{ color: '#6C47FF' }}>
                  {category.name}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq) => (
                    <details
                      key={faq.q}
                      className="rounded-lg border border-gray-100 p-6 hover:border-purple-200 transition-colors bg-white hover:shadow-sm"
                    >
                      <summary className="font-bold cursor-pointer text-lg" style={{ color: '#1a1a2e' }}>
                        {faq.q}
                      </summary>
                      <p className="text-gray-600 mt-4 text-base leading-relaxed">{faq.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-6" style={{ color: '#6C47FF' }}>
              Máte další otázku?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Pokud jste nenašli odpověď, kontaktujte nás.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="px-8 py-4 rounded-xl font-bold text-white transition-opacity hover:opacity-90"
                style={{ backgroundColor: '#6C47FF' }}
              >
                Napsat nám
              </Link>
              <a
                href="https://app.aibgin.cz/demo"
                className="px-8 py-4 rounded-xl font-bold text-white bg-gray-900 hover:bg-gray-800 transition-colors"
              >
                Vyzkoušet demo
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
