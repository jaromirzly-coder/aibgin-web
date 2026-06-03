import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'O nás — AIBgin',
  description: 'Kdo jsme, mise a ekosystém AIBgin platformy.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
