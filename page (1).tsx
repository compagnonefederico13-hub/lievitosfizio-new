import type { Metadata } from "next";
import { formatPrice, menu, tagLabels } from "@/data/menu";
import { site } from "@/data/site";
import { links } from "@/lib/links";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { PhoneIcon } from "@/components/ui/Icons";
import { DemoBadge } from "@/components/menu/DemoBadge";

export const metadata: Metadata = {
  title: "Menu",
  description: `Il menu di ${site.name}: pizze, fritti della friggitoria, proposte anche senza glutine, dolci e bevande.`,
  alternates: { canonical: "/menu" },
  openGraph: { url: "/menu", title: `Menu · ${site.name}` },
  // Finché il menu è dimostrativo la pagina non viene indicizzata.
  robots: menu.isDemo ? { index: false, follow: true } : undefined,
};

export default function MenuPage() {
  return (
    <>
      <header className="bg-cream pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="container-site">
          <p className="eyebrow text-tomato">{site.brandLine}</p>
          <h1 className="mt-4 text-display font-light">
            Il <em className="font-normal text-tomato italic">menu</em>
          </h1>
          <p className="mt-5 max-w-lg text-lg text-ink-soft">
            Pizze, fritti e qualcosa di dolce per chiudere. Chiedi al personale per allergie e intolleranze.
          </p>

          {menu.isDemo && (
            <div role="note" className="mt-8 max-w-2xl rounded-2xl border border-dashed border-tomato/60 bg-ivory p-5">
              <DemoBadge />
              <p className="mt-3 text-[0.95rem] text-ink-soft">
                Nomi, descrizioni e prezzi in questa pagina sono <strong>esempi di impaginazione</strong>, in attesa
                del menu ufficiale fornito dalla pizzeria. Per conoscere il menu reale{" "}
                {links.tel ? (
                  <a href={links.tel} className="font-semibold text-tomato underline underline-offset-2">
                    chiama il {site.phone.display}
                  </a>
                ) : (
                  "contatta la pizzeria"
                )}
                .
              </p>
            </div>
          )}
        </div>
      </header>

      {/* Indice categorie: scorrevole su smartphone, fisso sotto l'header */}
      <nav
        aria-label="Categorie del menu"
        className="sticky top-[4.5rem] z-20 border-y border-line bg-ivory/95 backdrop-blur-md"
      >
        <ul className="container-site flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {menu.categories.map((c) => (
            <li key={c.id} className="shrink-0">
              <a
                href={`#${c.id}`}
                className="inline-flex min-h-10 items-center rounded-full border border-line px-4 text-[0.9rem] font-medium whitespace-nowrap transition-colors hover:border-ink hover:bg-ink hover:text-ivory"
              >
                {c.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container-site py-14 sm:py-20">
        <div className="grid gap-x-20 gap-y-16 lg:grid-cols-2">
          {menu.categories.map((cat) => (
            <section key={cat.id} id={cat.id} aria-labelledby={`${cat.id}-title`} className="scroll-mt-36">
              <Reveal>
                <h2 id={`${cat.id}-title`} className="flex items-baseline gap-4 text-[2.2rem] leading-none">
                  {cat.title}
                  <span aria-hidden="true" className="h-px flex-1 translate-y-[-0.3rem] bg-line" />
                </h2>
                {cat.note && <p className="mt-3 text-[0.92rem] text-ink-soft italic">{cat.note}</p>}
              </Reveal>

              <ul className="mt-6 divide-y divide-line">
                {cat.items.map((item) => (
                  <li key={item.name} className="py-5">
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-[1.3rem] leading-snug">{item.name}</h3>
                      <span aria-hidden="true" className="mb-1.5 flex-1 border-b border-dotted border-ink/25" />
                      <p className="shrink-0 font-display text-[1.2rem] text-tomato tabular-nums">
                        <span className="sr-only">Prezzo: </span>
                        {formatPrice(item.price)}
                      </p>
                    </div>
                    {item.description && (
                      <p className="mt-1.5 max-w-[34rem] text-[0.95rem] leading-relaxed text-ink-soft">{item.description}</p>
                    )}
                    {item.tags && item.tags.length > 0 && (
                      <ul className="mt-2.5 flex flex-wrap gap-1.5" aria-label="Caratteristiche">
                        {item.tags.map((t) => (
                          <li key={t} className="rounded-full bg-cream px-2.5 py-0.5 text-[0.75rem] font-medium text-ink-soft">
                            {tagLabels[t]}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {menu.footnotes.length > 0 && (
          <div className="mt-16 border-t border-line pt-6 text-[0.88rem] text-ink-soft">
            {menu.footnotes.map((f) => (
              <p key={f}>{f}</p>
            ))}
          </div>
        )}
      </div>

      {links.tel && (
        <section aria-label="Contatti" className="bg-ink py-16 text-ivory">
          <div className="container-site flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
            <p className="max-w-xl font-display text-[2rem] leading-tight">
              Hai scelto? <em className="text-crust italic">Chiamaci</em> per informazioni e prenotazioni.
            </p>
            <ButtonLink href={links.tel} variant="light">
              <PhoneIcon width={18} height={18} /> {site.phone.display}
            </ButtonLink>
          </div>
        </section>
      )}
    </>
  );
}
