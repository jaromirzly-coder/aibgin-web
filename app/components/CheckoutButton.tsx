"use client";

interface CheckoutButtonProps {
  href: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

export default function CheckoutButton({ href, className, style, children }: CheckoutButtonProps) {
  const handleClick = () => {
    (window as any).gtag?.("event", "begin_checkout", { currency: "CZK", value: 999 });
  };
  return (
    <a href={href} className={className} style={style} onClick={handleClick}>
      {children}
    </a>
  );
}
