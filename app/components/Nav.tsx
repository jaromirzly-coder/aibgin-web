import Link from 'next/link';
import Image from 'next/image';
import NavLinks from './NavLinks';

export default function Nav() {
  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src="/logo.png" width={32} height={32} alt="AIBgin logo" className="inline-block mr-2" />
          <span className="font-black text-xl tracking-tight" style={{ color: '#6C47FF' }}>
            AIBgin
          </span>
          <span className="hidden sm:inline text-xs text-gray-400 font-medium border border-gray-200 rounded-full px-2 py-0.5">
            pro děti
          </span>
        </Link>

        <NavLinks />

        <div className="flex items-center gap-3">
          <a
            href="https://app.aibgin.cz/login"
            className="hidden sm:block text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
          >
            Přihlásit se
          </a>
          <Link
            href="/cenik"
            className="text-sm font-bold text-white px-4 py-2 rounded-lg transition-opacity hover:opacity-90 shadow-sm"
            style={{ backgroundColor: '#6C47FF' }}
          >
            Koupit přístup
          </Link>
        </div>
      </div>
    </header>
  );
}
