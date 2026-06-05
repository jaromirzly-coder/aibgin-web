"use client";

interface CheckoutButtonProps {
  href: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function CheckoutButton({ href, className, style, children }: CheckoutButtonProps) {
  return (
    <a href={href} className={className} style={style}>
      {children}
    </a>
  );
}
