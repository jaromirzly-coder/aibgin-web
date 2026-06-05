import type { Metadata } from 'next';

const SITE_URL = 'https://aibgin.cz';

export const metadata: Metadata = {
  title: 'O nás — AIBgin',
  description: 'Kdo jsme, mise a ekosystém AIBgin platformy.',
  alternates: { canonical: `${SITE_URL}/o-nas` },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
