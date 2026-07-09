'use client';

import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const timeline = [
  { year: '2024', text: 'Vznik vize bezpečné AI pro vzdělávání' },
  { year: '2025', text: 'Spuštění AIBSN registru, první AI identita na světě' },
  { year: '2025', text: 'Vývoj AIBgin platformy' },
  { year: '2026', text: 'Prázdninový testovací program 2026' },
];

const ecosystem = [
  { name: 'AIBgin', desc: 'Vzdělávací platforma pro školy', href: 'https://aibgin.cz' },
  { name: 'AIBaimy', desc: 'Monitoring AI pro rodiče', href: 'https://aibaimy.cloud' },
  { name: 'AIBguardian', desc: 'Bezpečnostní technologie', href: 'https://aibguardian.cz' },
  { name: 'AIBSN', desc: 'Globální registr AI agentů', href: 'https://aibsn.org' },
];

export default function ONasPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        {/* Hero */}
        <section className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Kdo jsme
          </h1>
          <p className="text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            AIBgin je vzdělávací AI platforma vyvinutá společností{' '}
            <strong className="text-gray-900">SAY TO PAY s.r.o.</strong> — českou technologickou
            firmou zaměřenou na bezpečnou AI pro děti a vzdělávací instituce.
          </p>
        </section>

        {/* Mise */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-5">Mise</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Věříme, že děti mají právo na AI, která je bezpečná, transparentní a pedagogicky
              smysluplná. AIBgin přináší AI chatbot pro školy navržený od základu pro bezpečnost
              dětí, s 5 vrstvami ochrany, real-time auditem a souladem s EU AI Act.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-black text-gray-900 mb-10">Historie</h2>
          <div className="relative border-l-2 border-gray-200 pl-8 space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative">
                <span
                  className="absolute -left-[2.6rem] top-1 w-4 h-4 rounded-full border-2 border-white"
                  style={{ backgroundColor: '#6C47FF' }}
                />
                <span className="text-xs font-black uppercase tracking-widest" style={{ color: '#6C47FF' }}>
                  {item.year}
                </span>
                <p className="text-gray-700 mt-1">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Ekosystém */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-black text-gray-900 mb-10">Ekosystém</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
              {ecosystem.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block bg-white rounded-2xl border border-gray-100 p-5 hover:border-purple-200 hover:shadow-md transition-all group"
                >
                  <p
                    className="font-black text-lg mb-1 group-hover:opacity-80 transition-opacity"
                    style={{ color: '#6C47FF' }}
                  >
                    {item.name}
                  </p>
                  <p className="text-gray-500 text-sm">{item.desc}</p>
                  <p className="text-xs mt-3 font-semibold" style={{ color: '#6C47FF' }}>
                    {item.href.replace('https://', '')} →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Technologie */}
        <section className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-black text-gray-900 mb-5">Technologie za AIBgin</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            AIBgin využívá proprietární AIBSN identifikační systém — historicky první registr AI
            agentů na světě, publikovaný v{' '}
            <em>The AI Journal</em>.
          </p>
          <a
            href="https://aijourn.com/end-of-the-dead-internet-agent-guardian-with-the-first-serial-number-is-bringing-order-to-moltbook/"
            className="inline-flex items-center gap-2 font-semibold text-sm px-5 py-3 rounded-xl border-2 transition-colors hover:text-white"
            style={{ color: '#6C47FF', borderColor: '#6C47FF' }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#6C47FF';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            → Číst článek v The AI Journal
          </a>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 py-16 px-6 text-center">
          <p className="text-gray-500 mb-6">Máte zájem o spolupráci?</p>
          <Link
            href="/kontakt"
            className="inline-block text-sm font-bold text-white px-6 py-3 rounded-xl transition-opacity hover:opacity-90 shadow-sm"
            style={{ backgroundColor: '#6C47FF' }}
          >
            Kontaktujte nás
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
