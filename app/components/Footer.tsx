import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-6 gap-10 mb-12">
          <div className="md:col-span-2">
            <Link href="/" className="font-black text-xl block mb-3" style={{ color: '#6C47FF' }}>
              AIBgin
            </Link>
            <p className="text-sm leading-relaxed mb-4 max-w-xs text-gray-400">
              Bezpečná a nastavitelná AI platforma pro instituce pracující s dětmi.
              Fail-closed architektura, crisis detection, 5 vrstev ochrany.
            </p>
            <p className="text-xs text-gray-600">
              SAY TO PAY s.r.o.
              <br />
              Zámostní 1155/27, Slezská Ostrava, 710 00
              <br />
              Ekosystém AIBlab: AIBSN · AIBgin · AIBaimy · AIBguardian
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Produkty</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/bezpecnost" className="hover:text-white transition-colors">
                  Bezpečnost
                </Link>
              </li>
              <li>
                <Link href="/cenik" className="hover:text-white transition-colors">
                  Ceník
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-white transition-colors">
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="/o-nas" className="hover:text-white transition-colors">
                  O nás
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Právní</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/podminky" className="hover:text-white transition-colors">
                  Podmínky služby
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Ochrana osobních údajů
                </Link>
              </li>
              <li>
                <Link href="/reklamace" className="hover:text-white transition-colors">
                  Reklamační řád
                </Link>
              </li>
              <li>
                <Link href="/odstoupeni" className="hover:text-white transition-colors">
                  Odstoupení od smlouvy
                </Link>
              </li>
              <li>
                <Link href="/dpa" className="hover:text-white transition-colors">
                  DPA pro školy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-white transition-colors">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>

          {/* ÚKOL 2: Aktualizované anchor texty · ÚKOL 3: Sémantický nav */}
          <div>
            <h4 className="text-white font-bold mb-2 text-sm">Ekosystém</h4>
            <p className="text-xs text-gray-500 mb-4">
              Součást ekosystému{" "}
              <a href="https://aiblab.cz" className="hover:text-white transition-colors">
                AIBlab
              </a>
            </p>
            <nav aria-label="Ekosystém AIBlab">
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://aiblab.cz" className="hover:text-white transition-colors">
                    O ekosystému AIBlab
                  </a>
                </li>
                <li>
                  <a href="https://aibaimy.cloud" className="hover:text-white transition-colors">
                    AI bezpečnost pro rodiče → AIBaimy
                  </a>
                </li>
                <li>
                  <a href="https://aibguardian.cz" className="hover:text-white transition-colors">
                    Bezpečnostní AI systémy → AIBguardian
                  </a>
                </li>
                <li>
                  <a href="https://aibsn.org" className="hover:text-white transition-colors">
                    AIBSN — AI registr
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Další informace</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
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
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 SAY TO PAY s.r.o. · IČO: 08694222 · Všechna práva vyhrazena.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Zpracování osobních údajů
            </Link>
            <Link href="/podminky" className="hover:text-white transition-colors">
              Podmínky služby
            </Link>
            <a href="https://aibsn.org" className="hover:text-white transition-colors">
              aibsn.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
