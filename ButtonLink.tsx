import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "light" | "outline-light";

const base =
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-[0.95rem] font-semibold tracking-wide transition-[background-color,color,border-color,transform] duration-300 ease-[var(--ease-soft)] active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-tomato text-ivory hover:bg-tomato-dark",
  secondary: "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-ivory",
  light: "bg-ivory text-ink hover:bg-cream",
  "outline-light": "border border-ivory/60 text-ivory hover:border-ivory hover:bg-ivory hover:text-ink",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** Per link esterni (WhatsApp, Maps, Instagram) */
  external?: boolean;
  ariaLabel?: string;
};

export function ButtonLink({ href, children, variant = "primary", className = "", external, ariaLabel }: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const isPlain = external || href.startsWith("tel:") || href.startsWith("mailto:");

  if (isPlain) {
    return (
      <a
        href={href}
        className={cls}
        aria-label={ariaLabel}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
