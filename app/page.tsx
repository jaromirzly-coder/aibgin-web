export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 font-sans">
      <Nav />
      <Hero />
      <HowItWorks />
      <Pricing />
      <Compliance />
      <Footer />
    </main>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-bold text-xl" style={{ color: "#6C47FF" }}>AIBgin</span>
        <nav className="hidden md:flex gap-8 text-sm text-gray-600">
          <a href="#jak-to-funguje" className="hover:text-gray-900 transition-colors">Jak to funguje</a>
          <a href="#cenik" className="hover:text-gray-900 transition-colors">Ceník</a>
          <a href="#compliance" className="hover:text-gray-900 transition-colors">Compliance</a>
        </nav>
        <a
          href="mailto:hello@aibgin.cz"
          className="text-sm font-medium text-white px-4 py-2 rounded-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#6C47FF" }}
        >
          Kontaktujte nás
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div
          className="inline-block text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6"
          style={{ backgroundColor: "#EDE9FF", color: "#6C47FF" }}
        >
          White-label AI chatbot platforma
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          Váš AI asistent.
          <br />
          <span style={{ color: "#6C47FF" }}>Vaše značka.</span>
          <br />
          Vaše pravidla.
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10">
          AIBgin umožňuje firmám nasadit vlastní AI chatbot s plnou kontrolou nad obsahem, brandem
          a bezpečností — bez nutnosti vlastního ML týmu. GDPR-first, audit log, šifrování.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cenik"
            className="px-8 py-4 rounded-xl font-semibold text-white text-base transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#6C47FF" }}
          >
            Zobrazit plány
          </a>
          <a
            href="mailto:hello@aibgin.cz"
            className="px-8 py-4 rounded-xl font-semibold text-gray-700 text-base border border-gray-200 hover:border-gray-400 transition-colors"
          >
            Domluvit demo
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-400">
          Bez závazků · 14 dní zdarma · Nasazení do 30 minut
        </p>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Nastavte brand",
      desc: "Nahrajte logo, zvolte barvy a tón komunikace. Chatbot promluví vaším hlasem.",
    },
    {
      num: "02",
      title: "Přidejte znalosti",
      desc: "Nahrajte dokumenty, FAQ nebo propojte interní systémy. AI se naučí vašemu oboru.",
    },
    {
      num: "03",
      title: "Vložte na web",
      desc: "Jeden řádek kódu a widget je živý. Funguje na webu, v aplikaci i na intranetu.",
    },
    {
      num: "04",
      title: "Sledujte a optimalizujte",
      desc: "Dashboard v reálném čase — metriky, audit log, nastavení limitů bez nutnosti IT.",
    },
  ];

  return (
    <section id="jak-to-funguje" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Jak to funguje</h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          Od registrace k živému chatbotu za méně než půl hodiny.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="text-3xl font-black mb-4" style={{ color: "#6C47FF" }}>
                {s.num}
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "490",
      desc: "Pro malé weby a tesování v ostrém provozu.",
      features: [
        "1 chatbot",
        "500 konverzací / měsíc",
        "Upload dokumentů (do 10 MB)",
        "Základní branding",
        "Email podpora",
      ],
      cta: "Začít zdarma",
      href: "mailto:hello@aibgin.cz?subject=Starter plán",
      highlight: false,
    },
    {
      name: "Growth",
      price: "1 490",
      desc: "Pro rostoucí firmy s vlastními požadavky.",
      features: [
        "5 chatbotů",
        "Neomezené konverzace",
        "Upload dokumentů (do 100 MB)",
        "Plný branding + vlastní doména",
        "Audit log 5 let",
        "Prioritní podpora",
        "API přístup",
      ],
      cta: "Vybrat Growth",
      href: "mailto:hello@aibgin.cz?subject=Growth plán",
      highlight: true,
    },
    {
      name: "Enterprise",
      price: null,
      desc: "Pro korporace, banky a regulované odvětví.",
      features: [
        "Neomezené chatboty",
        "On-premise nebo private cloud",
        "SLA 99,9 %",
        "Dedikovaný account manager",
        "Vlastní integrace",
        "Pokročilý compliance reporting",
      ],
      cta: "Požádat o nabídku",
      href: "mailto:reditel@aibgin.cz?subject=Enterprise poptávka",
      highlight: false,
    },
  ];

  return (
    <section id="cenik" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Ceník</h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          Transparentní ceny bez skrytých poplatků. Platby v Kč, faktura každý měsíc.
        </p>
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative rounded-2xl p-8 flex flex-col border ${
                p.highlight
                  ? "border-2 shadow-xl"
                  : "border-gray-200 bg-white"
              }`}
              style={
                p.highlight
                  ? { borderColor: "#6C47FF", background: "linear-gradient(135deg, #f5f3ff 0%, #fff 100%)" }
                  : {}
              }
            >
              {p.highlight && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-4 py-1 rounded-full"
                  style={{ backgroundColor: "#6C47FF" }}
                >
                  Nejoblíbenější
                </div>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{p.name}</h3>
                <p className="text-gray-500 text-sm">{p.desc}</p>
              </div>
              <div className="mb-8">
                {p.price ? (
                  <>
                    <span className="text-4xl font-extrabold">{p.price} Kč</span>
                    <span className="text-gray-400 text-sm"> / měsíc</span>
                  </>
                ) : (
                  <span className="text-4xl font-extrabold">Na dotaz</span>
                )}
              </div>
              <ul className="space-y-3 mb-10 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                    <span style={{ color: "#6C47FF" }} className="mt-0.5 shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={p.href}
                className="block text-center py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90"
                style={
                  p.highlight
                    ? { backgroundColor: "#6C47FF", color: "#fff" }
                    : { border: "1.5px solid #6C47FF", color: "#6C47FF" }
                }
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-gray-400 mt-8">
          Všechny ceny jsou bez DPH. DPH 21 % bude připočteno.
        </p>
      </div>
    </section>
  );
}

function Compliance() {
  const items = [
    {
      icon: "🔒",
      title: "GDPR & ePrivacy",
      desc: "Data zpracováváme výhradně v EU (eu-central-1). Smlouva o zpracování osobních údajů (DPA) je součástí každého plánu.",
    },
    {
      icon: "📋",
      title: "Audit log 5 let",
      desc: "Každá konverzace je neměnně zaznamenána. Splňuje požadavky ČNB, DORA i interních auditů.",
    },
    {
      icon: "🛡️",
      title: "AIBguard safety layer",
      desc: "Dvojí AI audit každé odpovědi. Fail-closed architektura — při selhání systém blokuje, neodpoví.",
    },
    {
      icon: "🔑",
      title: "Šifrování per-tenant",
      desc: "Konverzace jsou šifrovány AES-256 s klíčem unikátním pro každého zákazníka. Ani my je nemůžeme číst.",
    },
    {
      icon: "⚖️",
      title: "EU AI Act ready",
      desc: "Architektura připravena na požadavky EU AI Act (transparentnost, lidský dohled, záznamy).",
    },
    {
      icon: "🏢",
      title: "Česká firma",
      desc: "SAY TO PAY s.r.o., IČO dostupné na vyžádání. Smlouvy v češtině, fakturace v Kč.",
    },
  ];

  return (
    <section id="compliance" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Compliance & bezpečnost</h2>
        <p className="text-center text-gray-500 mb-16 max-w-xl mx-auto">
          Navrženo pro regulované odvětví. Splňuje standardy bank, pojišťoven i veřejné správy.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-base mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <span className="font-bold text-xl text-white block mb-3" style={{ color: "#6C47FF" }}>
              AIBgin
            </span>
            <p className="text-sm leading-relaxed">
              White-label AI chatbot platforma pro firmy, které berou compliance vážně.
            </p>
            <p className="text-xs mt-4">SAY TO PAY s.r.o. · Praha, Česká republika</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Navigace</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#jak-to-funguje" className="hover:text-white transition-colors">Jak to funguje</a></li>
              <li><a href="#cenik" className="hover:text-white transition-colors">Ceník</a></li>
              <li><a href="#compliance" className="hover:text-white transition-colors">Compliance</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Kontakt</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:hello@aibgin.cz" className="hover:text-white transition-colors">
                  hello@aibgin.cz
                </a>
                <span className="ml-2 text-xs text-gray-500">— obecné dotazy</span>
              </li>
              <li>
                <a href="mailto:support@aibgin.cz" className="hover:text-white transition-colors">
                  support@aibgin.cz
                </a>
                <span className="ml-2 text-xs text-gray-500">— technická podpora</span>
              </li>
              <li>
                <a href="mailto:reditel@aibgin.cz" className="hover:text-white transition-colors">
                  reditel@aibgin.cz
                </a>
                <span className="ml-2 text-xs text-gray-500">— Enterprise & partnerství</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 SAY TO PAY s.r.o. Všechna práva vyhrazena.</p>
          <p>
            <a href="#" className="hover:text-white transition-colors">Zpracování osobních údajů</a>
            {" · "}
            <a href="#" className="hover:text-white transition-colors">Podmínky služby</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
