export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Nav />
      <Hero />
      <Institutions />
      <UseCases />
      <QRAccess />
      <SafetyLayers />
      <Compliance />
      <Pricing />
      <References />
      <CtaBanner />
      <Footer />
    </main>
  );
}

/* ── Navigation ───────────────────────────────────────────── */
function Nav() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-black text-xl" style={{ color: "#6C47FF" }}>AIBgin</span>
          <span className="hidden sm:inline text-xs text-gray-400 font-medium border border-gray-200 rounded-full px-2 py-0.5">
            pro děti
          </span>
        </div>
        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <a href="#instituce" className="hover:text-gray-900 transition-colors">Instituce</a>
          <a href="#bezpecnost" className="hover:text-gray-900 transition-colors">Bezpečnost</a>
          <a href="#cenik" className="hover:text-gray-900 transition-colors">Ceník</a>
          <a href="#compliance" className="hover:text-gray-900 transition-colors">Compliance</a>
          <a href="#reference" className="hover:text-gray-900 transition-colors">Reference</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="https://app.aibgin.cz/login"
            className="hidden sm:block text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors"
          >
            Přihlásit se
          </a>
          <a
            href="https://app.aibgin.cz/demo"
            className="text-sm font-semibold text-white px-4 py-2 rounded-lg transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#6C47FF" }}
          >
            Demo
          </a>
        </div>
      </div>
    </header>
  );
}

/* ── Hero ─────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8"
          style={{ backgroundColor: "#EDE9FF", color: "#6C47FF" }}
        >
          <span>🛡️</span>
          <span>Certifikovaná AI bezpečná pro děti</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight mb-6">
          AIBgin —{" "}
          <span style={{ color: "#6C47FF" }}>Bezpečná</span>
          {" "}a nastavitelná
          <br />AI pro děti
        </h1>

        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-4 leading-relaxed">
          Bezpečný AI chatbot navržený pro každou instituci pracující s dětmi.
          Každá odpověď prochází real-time auditem. Žádná registrace pro děti —
          stačí QR kód z tabule.
        </p>
        <p className="text-sm text-gray-400 mb-10">
          Školy · Školky · Kroužky · Domy dětí a mládeže · Nízkoprahová centra
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cenik"
            className="px-8 py-4 rounded-xl font-bold text-white text-base transition-opacity hover:opacity-90 shadow-lg"
            style={{ backgroundColor: "#6C47FF" }}
          >
            Zobrazit plány od 490 Kč
          </a>
          <a
            href="https://app.aibgin.cz/demo"
            className="px-8 py-4 rounded-xl font-semibold text-white text-base bg-blue-600 hover:bg-blue-700 transition-colors"
          >
            Demo
          </a>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
          <span>✓ 14 dní zdarma</span>
          <span>✓ Bez registrace pro děti</span>
          <span>✓ GDPR & EU AI Act</span>
          <span>✓ Linka bezpečí 116 111</span>
        </div>
      </div>
    </section>
  );
}

/* ── Institutions ─────────────────────────────────────────── */
function Institutions() {
  const list = [
    { icon: "🏫", label: "Základní školy" },
    { icon: "🎒", label: "Mateřské školy" },
    { icon: "🌅", label: "Školní družiny" },
    { icon: "⚽", label: "Zájmové kroužky" },
    { icon: "🎮", label: "Dětské kluby" },
    { icon: "🤝", label: "Nízkoprahová centra" },
    { icon: "🏠", label: "Domy dětí a mládeže" },
    { icon: "📚", label: "Střední školy" },
  ];

  return (
    <section id="instituce" className="py-16 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Pro každou instituci pracující s dětmi
        </h2>
        <p className="text-gray-500 mb-12 max-w-lg mx-auto">
          Jedno řešení, stovky typů institucí. Každá dostane vlastní bezpečnostní profil.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {list.map((item) => (
            <div
              key={item.label}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center gap-3"
            >
              <span className="text-4xl">{item.icon}</span>
              <span className="font-medium text-sm text-gray-700 text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── QR Access ────────────────────────────────────────────── */
function QRAccess() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center gap-10"
          style={{ background: "linear-gradient(135deg, #EDE9FF 0%, #f5f3ff 100%)" }}
        >
          <div className="flex-1">
            <div
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-5"
              style={{ backgroundColor: "#6C47FF", color: "#fff" }}
            >
              Žádná registrace pro děti
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4" style={{ color: "#1a1a2e" }}>
              Děti přistupují přes QR kód
              <br />
              <span style={{ color: "#6C47FF" }}>z tabule nebo odkaz.</span>
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Učitel promítne QR kód. Dítě naskenuje telefonem. Hotovo.
              Žádná registrace, žádné heslo, žádný účet.
              Správce má plný přehled — děti mají nulovou digitální stopu.
            </p>
            <ul className="space-y-3">
              {[
                "QR kód se vygeneruje v dashboardu jedním klikem",
                "Každá třída/skupina má vlastní bezpečnostní profil",
                "Správce vidí souhrn konverzací, ne jejich obsah",
                "Automatický reset po skončení hodiny",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-1 shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ backgroundColor: "#6C47FF" }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="shrink-0">
            <div className="w-48 h-48 bg-white rounded-3xl shadow-xl flex flex-col items-center justify-center gap-3 border-4" style={{ borderColor: "#6C47FF" }}>
              <div className="grid grid-cols-5 gap-0.5">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-sm"
                    style={{
                      backgroundColor: [0,1,2,3,4,5,9,10,14,15,19,20,21,22,23,24,6,8,16,18].includes(i)
                        ? "#6C47FF"
                        : "#EDE9FF",
                    }}
                  />
                ))}
              </div>
              <p className="text-xs font-bold text-center px-4" style={{ color: "#6C47FF" }}>
                Naskenuj a začni
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── 5 Safety Layers ──────────────────────────────────────── */
function SafetyLayers() {
  const layers = [
    {
      num: "01",
      icon: "🪪",
      title: "AIBSN identita",
      desc: "Certifikovaná identita každé instance ověřitelná veřejně na aibsn.org. Falešné chatboty vydávající se za vaši školu jsou detekovatelné okamžitě.",
      tag: "Verifikovatelné",
    },
    {
      num: "02",
      icon: "⚡",
      title: "AIBguard real-time audit",
      desc: "Každá odpověď AI projde nezávislým auditem PŘED odesláním dítěti. Verdikt PASS / ALERT / CRITICAL. Při CRITICAL odpověď nikdy neodejde.",
      tag: "Fail-closed",
    },
    {
      num: "03",
      icon: "🎛️",
      title: "Vlastní bezpečnostní profil",
      desc: "Správce nastaví věkové skupiny (3–6, 7–10, 11–15 let), zakázaná témata, povolený obsah a tón komunikace. Vše bez IT znalostí.",
      tag: "Plně nastavitelné",
    },
    {
      num: "04",
      icon: "📋",
      title: "Měsíční regulatorní update",
      desc: "COPPA 2026, EU AI Act, nové zákony na ochranu dětí jsou automaticky zavedeny do všech instancí. Nemusíte sledovat legislativu — my to děláme za vás.",
      tag: "Automaticky",
    },
    {
      num: "05",
      icon: "🆘",
      title: "Crisis detection + Linka bezpečí",
      desc: "Detekce šikany, sebepoškozování a krizových stavů. Dítěti se okamžitě zobrazí číslo 116 111 a správci přijde alert. Každá sekunda se počítá.",
      tag: "116 111",
    },
  ];

  return (
    <section id="bezpecnost" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: "#EDE9FF", color: "#6C47FF" }}
          >
            5 vrstev ochrany
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Bezpečnost není volitelná funkce.
            <br />
            <span style={{ color: "#6C47FF" }}>Je to architektura.</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Každá vrstva funguje nezávisle. Pokud selže jedna, ostatní blokují.
            Fail-closed od základů.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          {layers.map((l) => (
            <div
              key={l.num}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{l.icon}</span>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "#EDE9FF", color: "#6C47FF" }}
                >
                  {l.tag}
                </span>
              </div>
              <div className="text-2xl font-black mb-2" style={{ color: "#6C47FF" }}>
                {l.num}
              </div>
              <h3 className="font-bold text-sm mb-2">{l.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed flex-1">{l.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Compliance ───────────────────────────────────────────── */
function Compliance() {
  const items = [
    {
      badge: "COPPA 2026",
      icon: "🇺🇸",
      title: "COPPA 2026",
      desc: "Plný soulad s Children's Online Privacy Protection Act. Žádná osobní data dětí nejsou sbírána bez souhlasu rodičů.",
    },
    {
      badge: "EU AI Act",
      icon: "🇪🇺",
      title: "EU AI Act čl. 50",
      desc: "Transparentnost AI systémů pro děti. Každé dítě ví, že mluví s AI. Automatický disclosure při každé konverzaci.",
    },
    {
      badge: "GDPR",
      icon: "🔒",
      title: "GDPR & ePrivacy",
      desc: "Data výhradně v EU (eu-central-1). DPA smlouva součástí každého plánu. Šifrování AES-256 per-instance.",
    },
    {
      badge: "116 111",
      icon: "🆘",
      title: "Linka bezpečí 116 111",
      desc: "Integrovaná detekce krizí. Automatické zobrazení Linky bezpečí a okamžitý alert správci instituce.",
    },
    {
      badge: "Audit log",
      icon: "📋",
      title: "5letý audit log",
      desc: "Neměnný záznam pro inspekci ČŠI, GDPR audit a interní kontrolu. Uloženo v EU, šifrováno, nemodifikovatelné.",
    },
    {
      badge: "Czech law",
      icon: "⚖️",
      title: "Česká legislativa",
      desc: "Zákon č. 561/2004 Sb. (školský zákon), vyhláška MŠMT. Smlouvy v češtině, fakturace v Kč, sídlo Slezská Ostrava.",
    },
  ];

  return (
    <section id="compliance" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Compliance & regulace
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Navrženo pro regulované prostředí. Vaše škola je připravena na kontrolu České školní inspekce kdykoliv.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl p-6 border border-gray-100 shadow-sm bg-white">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{item.icon}</span>
                <span
                  className="text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "#EDE9FF", color: "#6C47FF" }}
                >
                  {item.badge}
                </span>
              </div>
              <h3 className="font-bold text-base mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Pricing ──────────────────────────────────────────────── */
function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "490",
      target: "1 třída / kroužek",
      desc: "Ideální pro otestování v jedné třídě nebo kroužku.",
      features: [
        "1 chatbot",
        "Až 35 dětí",
        "500 konverzací / měsíc",
        "QR kód přístup",
        "Základní bezpečnostní profil",
        "Crisis detection + 116 111",
        "Email podpora",
      ],
      cta: "Demo",
      href: "https://app.aibgin.cz/demo",
      highlight: false,
    },
    {
      name: "Growth",
      price: "1 490",
      target: "Celá škola",
      desc: "Pro školy a instituce s více třídami nebo skupinami.",
      features: [
        "5 chatbotů",
        "Až 300 dětí",
        "Neomezené konverzace",
        "QR kódy pro každou třídu",
        "Plný bezpečnostní profil",
        "Crisis detection + 116 111",
        "Měsíční regulatorní update",
        "Audit log 5 let",
        "Prioritní podpora",
      ],
      cta: "Vybrat Growth",
      href: "https://app.aibgin.cz/api/stripe/create-checkout?plan=growth",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: null,
      target: "Více poboček",
      desc: "Pro sítě škol, DDM, neziskovky s více pobočkami.",
      features: [
        "Neomezené chatboty",
        "Neomezené děti",
        "Více poboček / lokalit",
        "Centrální správa všech instancí",
        "SLA 99,9 %",
        "Dedikovaný account manager",
        "Vlastní integrace a API",
        "Pokročilý compliance reporting",
      ],
      cta: "Požádat o nabídku",
      href: "mailto:platby@aibgin.cz?subject=Enterprise poptávka",
      highlight: false,
    },
  ];

  return (
    <section id="cenik" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Ceník</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Transparentní ceny bez skrytých poplatků. Platby v Kč, faktura každý měsíc.
            14 dní zdarma u všech plánů.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 flex flex-col border-2 ${
                p.highlight ? "shadow-2xl" : "bg-white border-gray-200"
              }`}
              style={
                p.highlight
                  ? {
                      borderColor: "#6C47FF",
                      background: "linear-gradient(160deg, #f5f3ff 0%, #ffffff 100%)",
                    }
                  : {}
              }
            >
              {p.highlight && (
                <div
                  className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-black px-5 py-1.5 rounded-full shadow"
                  style={{ backgroundColor: "#6C47FF" }}
                >
                  🏫 Nejoblíbenější pro školy
                </div>
              )}

              <div className="mb-2">
                <span
                  className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "#EDE9FF", color: "#6C47FF" }}
                >
                  {p.target}
                </span>
              </div>
              <h3 className="text-xl font-black mt-3 mb-1">{p.name}</h3>
              <p className="text-gray-400 text-sm mb-6">{p.desc}</p>

              <div className="mb-8">
                {p.price ? (
                  <>
                    <span className="text-4xl font-black">{p.price} Kč</span>
                    <span className="text-gray-400 text-sm"> / měsíc</span>
                  </>
                ) : (
                  <span className="text-4xl font-black">Na dotaz</span>
                )}
              </div>

              <ul className="space-y-2.5 mb-10 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="mt-0.5 shrink-0 font-bold" style={{ color: "#6C47FF" }}>
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={p.href}
                className="block text-center py-3.5 rounded-xl font-bold text-sm transition-opacity hover:opacity-90"
                style={
                  p.highlight
                    ? { backgroundColor: "#6C47FF", color: "#fff" }
                    : { border: "2px solid #6C47FF", color: "#6C47FF" }
                }
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">
          Všechny ceny jsou bez DPH · DPH 21 % bude připočteno · Fakturace v Kč
        </p>
      </div>
    </section>
  );
}

/* ── Use Cases ────────────────────────────────────────────── */
function UseCases() {
  const cases = [
    {
      icon: "🏫",
      title: "Základní školy",
      points: [
        "Výukový asistent pro 1.–9. třídu",
        "Každá třída má vlastní bezpečnostní profil",
        "Učitel vidí souhrn dotazů, ne obsah",
        "Připraveni na kontrolu ČŠI",
      ],
    },
    {
      icon: "🎒",
      title: "Mateřské školy",
      points: [
        "Věková skupina 3–6 let — maximálně omezený obsah",
        "Jen pohádky, hry, básničky a příroda",
        "Žádná možnost přístupu bez QR kódu učitele",
        "Plný soulad s COPPA 2026",
      ],
    },
    {
      icon: "🌅",
      title: "Školní družiny",
      points: [
        "Odpolední asistent pro zábavu i domácí úkoly",
        "Automatický reset po každé skupině dětí",
        "Vychovatel nastaví témata pro daný den",
        "Crisis detection i mimo výuku",
      ],
    },
    {
      icon: "⚽",
      title: "Zájmové kroužky",
      points: [
        "Specializovaný chatbot pro konkrétní obor",
        "Robotický kroužek: Arduino, Python, fyzika",
        "Jazykový kroužek: konverzace v AJ/NJ",
        "Vedoucí spustí QR kód v mobilu za 10 sekund",
      ],
    },
    {
      icon: "🎮",
      title: "Dětské kluby & DDM",
      points: [
        "Flexibilní nastavení pro každou aktivitu",
        "Podpora pro nízkoprahová centra",
        "Anonymní přístup — bez sběru dat o dětech",
        "Měsíční regulatorní aktualizace automaticky",
      ],
    },
    {
      icon: "🤝",
      title: "Střední školy & VOŠ",
      points: [
        "Věková skupina 15–18 let se širšími tématy",
        "Příprava na maturitu a přijímačky",
        "Audit log 5 let pro potřeby školy",
        "AIBSN certifikát ověřitelný rodiči",
      ],
    },
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: "#EDE9FF", color: "#6C47FF" }}
          >
            Jak to funguje v praxi
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Jedno řešení pro každou instituci
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Každý typ instituce dostane profil přizpůsobený věku a kontextu.
            Bez IT oddělení, bez programování.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl p-7 border border-gray-100 shadow-sm bg-white hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="font-black text-lg mb-4">{c.title}</h3>
              <ul className="space-y-2">
                {c.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="mt-0.5 shrink-0 font-bold" style={{ color: "#6C47FF" }}>✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── References ───────────────────────────────────────────── */
function References() {
  const quotes = [
    {
      text: "Děti si rychle zvykly — a já jsem klidná, protože vím, že každá odpověď prošla kontrolou. QR kód na tabuli funguje skvěle.",
      name: "Mgr. Jana K.",
      role: "Třídní učitelka, ZŠ Ostrava",
      initials: "JK",
      tag: "Základní škola",
    },
    {
      text: "Nastavení bylo hotové za půl hodiny. Kroužek může pracovat s AI hned — a já nemusím řešit, co děti uvidí.",
      name: "Tomáš M.",
      role: "Vedoucí robotického kroužku, DDM",
      initials: "TM",
      tag: "Zájmový kroužek",
    },
    {
      text: "Jako ředitel potřebuji mít jistotu, že jsme v souladu s legislativou. AIBgin to řeší za mě — automaticky.",
      name: "Mgr. Pavel R.",
      role: "Ředitel ZŠ, Ostrava",
      initials: "PR",
      tag: "Ředitel školy",
    },
  ];

  return (
    <section id="reference" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div
            className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
            style={{ backgroundColor: "#EDE9FF", color: "#6C47FF" }}
          >
            Reference
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Co říkají pedagogové
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Ilustrativní reference — skutečné zkušenosti zákazníků doplníme
            při spuštění platformy. Chcete být mezi prvními? Napište nám.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((q) => (
            <div key={q.name} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm flex flex-col">
              <div
                className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded-full self-start mb-4"
                style={{ backgroundColor: "#EDE9FF", color: "#6C47FF" }}
              >
                {q.tag}
              </div>
              <div className="text-4xl mb-3" style={{ color: "#6C47FF" }}>"</div>
              <p className="text-gray-700 leading-relaxed mb-6 italic flex-1">{q.text}</p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ backgroundColor: "#6C47FF" }}
                >
                  {q.initials}
                </div>
                <div>
                  <p className="font-bold text-sm">{q.name}</p>
                  <p className="text-gray-400 text-xs">{q.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── CTA Banner ───────────────────────────────────────────── */
function CtaBanner() {
  return (
    <section className="py-20 px-6">
      <div
        className="max-w-4xl mx-auto rounded-3xl p-12 text-center text-white"
        style={{ background: "linear-gradient(135deg, #6C47FF 0%, #9B7AFF 100%)" }}
      >
        <h2 className="text-3xl md:text-4xl font-black mb-4">
          Připraveni začít?
        </h2>
        <p className="text-lg text-purple-100 mb-8 max-w-xl mx-auto">
          14 dní zdarma, žádná kreditní karta. Nastavení za 30 minut,
          první QR kód pro třídu za hodinu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://app.aibgin.cz/demo"
            className="px-8 py-4 rounded-xl font-bold text-base bg-white transition-opacity hover:opacity-90"
            style={{ color: "#6C47FF" }}
          >
            Demo
          </a>
          <a
            href="https://app.aibgin.cz/demo"
            className="px-8 py-4 rounded-xl font-bold text-base bg-blue-600 hover:bg-blue-700 text-white transition-colors"
          >
            Demo
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Footer ───────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <span className="font-black text-xl block mb-3" style={{ color: "#6C47FF" }}>
              AIBgin
            </span>
            <p className="text-sm leading-relaxed mb-4 max-w-xs">
              Bezpečná a nastavitelná AI platforma pro instituce pracující s dětmi.
              Fail-closed architektura, crisis detection, 5 vrstev ochrany.
            </p>
            <p className="text-xs text-gray-600">
              SAY TO PAY s.r.o.<br />
              Zámostní 1155/27, Slezská Ostrava, 710 00<br />
              Ekosystém AIBSN · AIBgin · AIBguard
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Navigace</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#instituce" className="hover:text-white transition-colors">Instituce</a></li>
              <li><a href="#bezpecnost" className="hover:text-white transition-colors">5 vrstev bezpečnosti</a></li>
              <li><a href="#cenik" className="hover:text-white transition-colors">Ceník</a></li>
              <li><a href="#compliance" className="hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:support@aibgin.cz" className="hover:text-white transition-colors block">
                  support@aibgin.cz
                </a>
                <span className="text-xs text-gray-600">technická podpora</span>
              </li>
              <li>
                <a href="mailto:platby@aibgin.cz" className="hover:text-white transition-colors block">
                  platby@aibgin.cz
                </a>
                <span className="text-xs text-gray-600">fakturace a platby</span>
              </li>
              <li>
                <a href="mailto:support@aibgin.cz" className="hover:text-white transition-colors block">
                  support@aibgin.cz
                </a>
                <span className="text-xs text-gray-600">automatické notifikace</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 SAY TO PAY s.r.o. · IČO: 08694222 · Všechna práva vyhrazena.</p>
          <div className="flex gap-4">
            <a href="/privacy" className="hover:text-white transition-colors">Zpracování osobních údajů</a>
            <a href="/podminky" className="hover:text-white transition-colors">Podmínky služby</a>
            <a href="https://aibsn.org" className="hover:text-white transition-colors">aibsn.org</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
