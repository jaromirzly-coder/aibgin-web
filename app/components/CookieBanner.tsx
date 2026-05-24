'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookieConsent');
    if (!stored) setVisible(true);
  }, []);

  function dismiss() {
    localStorage.setItem('cookieConsent', 'true');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Informace o cookies"
      className="fixed bottom-0 left-0 right-0 z-[100000] border-t border-gray-700 shadow-2xl"
      style={{ backgroundColor: '#111827' }}
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <p className="flex-1 text-sm text-gray-300 leading-relaxed">
          Používáme pouze technické cookies nezbytné pro provoz. Žádné sledování, žádná analytika.{' '}
          <Link
            href="/cookies"
            className="underline hover:text-white transition-colors"
            style={{ color: '#a78bfa' }}
          >
            Více informací
          </Link>
        </p>
        <button
          onClick={dismiss}
          className="flex-shrink-0 px-5 py-2 text-sm font-bold text-white rounded-xl transition-opacity hover:opacity-90"
          style={{ backgroundColor: '#6C47FF' }}
        >
          Rozumím
        </button>
      </div>
    </div>
  );
}
