import Link from "next/link";

/**
 * Logotipo testuale provvisorio.
 * Il segno a goccia richiama il "cuore d'impasto" del logo ufficiale.
 * Quando la pizzeria fornisce il logo vettoriale (SVG), sostituire il contenuto
 * di questo componente con <Image src="/brand/logo.svg" ... />.
 */
export function DoughMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" className={className}>
      <path
        d="M20 35.5c-1.2 0-2.3-.6-3.4-1.6C10.4 28.6 5 23.4 5 16.4 5 10.6 9.2 6 14.4 6c2.3 0 4.1.8 5.6 2.4C21.5 6.8 23.3 6 25.6 6 30.8 6 35 10.6 35 16.4c0 7-5.4 12.2-11.6 17.5-1.1 1-2.2 1.6-3.4 1.6Z"
        fill="currentColor"
      />
    </svg>
  );
}

type LogoProps = {
  tone?: "dark" | "light";
  withTagline?: boolean;
  className?: string;
};

export function Logo({ tone = "dark", withTagline = true, className = "" }: LogoProps) {
  const color = tone === "light" ? "text-ivory" : "text-ink";
  return (
    <Link
      href="/"
      aria-label="Lievito Sfizio — torna alla home"
      className={`group inline-flex items-center gap-2.5 ${color} ${className}`}
    >
      <DoughMark className="h-7 w-7 shrink-0 text-crust transition-transform duration-500 group-hover:-rotate-6" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.45rem] tracking-tight">
          Lievito <em className="font-normal italic">Sfizio</em>
        </span>
        {withTagline && (
          <span className={`mt-1 text-[0.6rem] font-semibold tracking-[0.28em] uppercase ${tone === "light" ? "text-ivory/75" : "text-ink-soft"}`}>
            Pizzeria · Friggitoria
          </span>
        )}
      </span>
    </Link>
  );
}
