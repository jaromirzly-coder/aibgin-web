'use client';

import { useEffect, useState } from 'react';

const STORAGE_KEY = 'aibgin_cookie_consent';
type ConsentState = 'accepted' | 'rejected' | null;

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState | 'loading'>('loading');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as ConsentState | null;
    setConsent(stored);
  }, []);

  function accept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setConsent('accepted');
  }

  function reject() {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setConsent('rejected');
  }

  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie souhlas"
      className="fixed bottom-0 left-0 right-0 z-[100000] bg-white border-t border-gray-200 shadow-xl"
    >
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-700 leading-relaxed">
            Tato stránka používá pouze technicky nezbytné cookies.
            Nepoužíváme analytické ani marketingové cookies.{' '}
            <a
              href="https://app.aibgin.cz/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80"
              style={{ color: '#6C47FF' }}
            >
              Zásady ochrany soukromí
            </a>
          </p>
        </div>
        <div className="flex gap-3 flex-shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm font-medium text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Odmítnout
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm font-medium text-white rounded-lg hover:opacity-90 transition-opacity"
            style={{ backgroundColor: '#6C47FF' }}
          >
            Souhlasím
          </button>
        </div>
      </div>
    </div>
  );
}
