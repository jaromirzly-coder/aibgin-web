'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/bezpecnost', label: 'Bezpečnost' },
  { href: '/cenik', label: 'Ceník' },
  { href: '/compliance', label: 'Compliance' },
  { href: '/o-nas', label: 'O nás' },
  { href: '/kontakt', label: 'Kontakt' },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex gap-8 text-sm font-medium">
      {links.map((link) => {
        const active = pathname === link.href || pathname.startsWith(link.href + '/');
        return (
          <Link
            key={link.href}
            href={link.href}
            className="transition-colors"
            style={{ color: active ? '#6C47FF' : '#6B7280' }}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
