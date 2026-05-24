'use client';

import { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const AIBSN_NUMBER = 'AIBSN-CZ-EDU-DEMO-2026-001';
const CHECKOUT_BASE = 'https://app.aibgin.cz/api/stripe/create-checkout';

export default function RegistracePage() {
  const [form, setForm] = useState({
    institution: '',
    contact_name: '',
    email: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  function validate() {
    const e: Record<string, string> = {};
    if (!form.institution.trim()) e.institution = 'Povinné pole';
    if (!form.contact_name.trim()) e.contact_name = 'Povinné pole';
    if (!form.email.trim()) e.email = 'Povinné pole';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Neplatná e-mailová adresa';
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    setErrors((er) => ({ ...er, [e.target.name]: '' }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    const params = new URLSearchParams({
      plan: 'sandbox',
      aibsn_number: AIBSN_NUMBER,
      email: form.email,
      institution: form.institution,
      contact_name: form.contact_name,
    });
    window.location.href = `${CHECKOUT_BASE}?${params.toString()}`;
  }

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
        <div className="max-w-2xl mx-auto">
          <div
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6"
            style={{ backgroundColor: '#EDE9FF', color: '#6C47FF' }}
          >
            ⏰ Pouze do 30. června 2026
          </div>
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight mb-4">
            Registrace — Červnový AI Sandbox
          </h1>
          <p className="text-gray-500 text-base">
            Vyplňte údaje instituce a přejdeme k platbě. Celé to trvá 2 minuty.
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">

            {/* Název instituce */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5" htmlFor="institution">
                Název instituce <span style={{ color: '#6C47FF' }}>*</span>
              </label>
              <input
                id="institution"
                name="institution"
                type="text"
                autoComplete="organization"
                placeholder="ZŠ Masarykova, DDM Ostrava, Kroužek robotiky…"
                value={form.institution}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition"
                style={{
                  borderColor: errors.institution ? '#EF4444' : '#D1D5DB',
                }}
              />
              {errors.institution && (
                <p className="mt-1 text-xs text-red-500">{errors.institution}</p>
              )}
            </div>

            {/* Kontaktní osoba */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5" htmlFor="contact_name">
                Jméno a příjmení kontaktní osoby <span style={{ color: '#6C47FF' }}>*</span>
              </label>
              <input
                id="contact_name"
                name="contact_name"
                type="text"
                autoComplete="name"
                placeholder="Mgr. Jana Nováková"
                value={form.contact_name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition"
                style={{
                  borderColor: errors.contact_name ? '#EF4444' : '#D1D5DB',
                }}
              />
              {errors.contact_name && (
                <p className="mt-1 text-xs text-red-500">{errors.contact_name}</p>
              )}
            </div>

            {/* E-mail */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5" htmlFor="email">
                Pracovní e-mail <span style={{ color: '#6C47FF' }}>*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="reditel@zsmasarykova.cz"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border text-sm focus:outline-none focus:ring-2 transition"
                style={{
                  borderColor: errors.email ? '#EF4444' : '#D1D5DB',
                }}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-red-500">{errors.email}</p>
              )}
              <p className="mt-1 text-xs text-gray-400">
                Na tento e-mail zašleme přístupové údaje a fakturu.
              </p>
            </div>

            {/* AIBSN číslo — read-only */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1.5" htmlFor="aibsn_number">
                AIBSN číslo
                <span
                  className="ml-2 text-xs font-black px-2 py-0.5 rounded-full uppercase tracking-widest"
                  style={{ backgroundColor: '#FEF9C3', color: '#92400E' }}
                >
                  PILOTNÍ
                </span>
              </label>
              <div className="relative">
                <input
                  id="aibsn_number"
                  name="aibsn_number"
                  type="text"
                  readOnly
                  value={AIBSN_NUMBER}
                  className="w-full px-4 py-3 rounded-xl border text-sm font-mono cursor-not-allowed select-all"
                  style={{
                    borderColor: '#FDE68A',
                    backgroundColor: '#FFFBEB',
                    color: '#78350F',
                  }}
                />
                <span
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: '#FEF3C7', color: '#92400E' }}
                >
                  DEMO
                </span>
              </div>
              <p className="mt-1.5 text-xs text-amber-700">
                Pilotní AIBSN číslo platné do 30. 6. 2026. Na podzim 2026 si zakoupíte vlastní
                unikátní AIBSN číslo přidělené vaší instituci.
              </p>
            </div>

            {/* Submit */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={submitting}
                className="w-full px-8 py-4 rounded-xl font-black text-white text-base transition-opacity hover:opacity-90 shadow-lg shadow-purple-200 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ backgroundColor: '#6C47FF' }}
              >
                {submitting ? 'Přesměrování na platbu…' : 'Přejít k platbě — 999 Kč →'}
              </button>
              <p className="text-center text-xs text-gray-400 mt-3">
                Platba kartou přes Stripe · Faktura okamžitě · DPH 21 % bude připočteno
              </p>
            </div>

          </form>

          {/* Summary box */}
          <div
            className="mt-10 rounded-2xl p-6 border"
            style={{ borderColor: '#DDD6FE', backgroundColor: '#FAF9FF' }}
          >
            <h3 className="font-bold text-sm mb-3 text-gray-700">Co získáte za 999 Kč</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {[
                '1 třída nebo kroužek · 20–35 dětí',
                '10 000 dotazů / měsíc · po vyčerpání možnost dokoupení',
                'AIBguard real-time audit',
                'QR kód přístup bez registrace dětí',
                'Crisis detection + Linka bezpečí 116 111',
                'Platnost do 30. 6. 2026',
                '🏅 Certifikát pilotní školy AIBgin',
              ].map((f) => (
                <li key={f} className="flex items-start gap-2">
                  <span
                    className="mt-0.5 shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ backgroundColor: '#6C47FF' }}
                  >
                    ✓
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <p className="text-center text-xs text-gray-400 mt-8">
            Máte otázky?{' '}
            <Link href="/kontakt" className="underline" style={{ color: '#6C47FF' }}>
              Kontaktujte nás
            </Link>{' '}
            · Přečtěte si{' '}
            <Link href="/podminky" className="underline" style={{ color: '#6C47FF' }}>
              podmínky
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
