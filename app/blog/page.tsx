import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'Blog | AIBgin — Články o AI ve školství',
  description:
    'Blog AIBgin: články o GDPR, EU AI Act, kontrole ČŠI, zavádění AI. Praktické rady pro ředitele a učitele.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Blog | AIBgin',
    description: 'Články o AI ve školství: GDPR, AI Act, ČŠI, implementace.',
    url: `${SITE_URL}/blog`,
    siteName: 'AIBgin',
    locale: 'cs_CZ',
    type: 'website',
    images: [{ url: `${SITE_URL}/logo.png`, width: 1200, height: 630, alt: 'AIBgin' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog | AIBgin',
    description: 'Články o AI ve školství.',
    images: [`${SITE_URL}/logo.png`],
  },
};

const articles = [
  {
    slug: 'gdpr-ve-skolstvi',
    title: 'GDPR a AI ve školství',
    description: 'Jak zajistit ochranu osobních údajů dětí při používání AI. Anonymní přístupy, data v EU, audit log.',
    date: '2026-06-05',
  },
  {
    slug: 'ai-act-pro-skoly',
    title: 'EU AI Act a školy',
    description: 'High-risk klasifikace, povinnosti a sankce. Jak AIBgin řeší compliance za vás.',
    date: '2026-06-05',
  },
  {
    slug: 'kontrola-csi-a-ai',
    title: 'Kontrola ČŠI a AI',
    description: 'Co inspektory zajímá a jak se připravit. AIBSN certifikát, audit log, dokumentace.',
    date: '2026-06-05',
  },
  {
    slug: 'jak-zavest-ai-ve-skole',
    title: 'Jak zavést AI ve škole',
    description: 'Praktický průvodce: pilot, školení, integrace do osnov, měření dopadu.',
    date: '2026-06-05',
  },
];

export default function BlogPage() {
  return (
    <>
      <main className="min-h-screen bg-white text-gray-900">
        <Nav />

        <section className="pt-32 pb-20 px-6" style={{ background: 'linear-gradient(135deg, #ede9ff 0%, transparent 100%)' }}>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              Články o AI ve školství, GDPR, compliance a praktické rady pro zavádění AI do výuky.
            </p>
          </div>
        </section>

        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${article.slug}`}
                  className="group rounded-2xl border border-gray-100 p-8 hover:border-purple-200 hover:shadow-lg transition-all bg-white"
                >
                  <div className="text-xs text-gray-500 font-semibold mb-2 uppercase">Článek</div>
                  <h2 className="text-2xl font-black mb-3 group-hover:text-purple-600 transition-colors" style={{ color: '#1a1a2e' }}>
                    {article.title}
                  </h2>
                  <p className="text-gray-600 mb-4 text-base leading-relaxed">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-xs text-gray-500">
                      {new Date(article.date).toLocaleDateString('cs-CZ')}
                    </span>
                    <span className="text-sm font-bold" style={{ color: '#6C47FF' }}>
                      Číst →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
