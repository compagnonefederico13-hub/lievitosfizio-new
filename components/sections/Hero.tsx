import Image from "next/image";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { ButtonLink } from "../ui/ButtonLink";
import { ArrowIcon } from "../ui/Icons";

export function Hero() {
  const facts = [
    site.closedNote,
    site.services.glutenFreeOptions && "Anche senza glutine",
    site.services.delivery && "Consegne a domicilio",
  ].filter(Boolean) as string[];

  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-ivory">
      <div className="absolute inset-0 -z-10">
        <Image
          src={images.hero.src}
          alt={images.hero.alt}
          fill
          priority
          sizes="100vw"
          
          className="hero-image object-cover"
          style={{ objectPosition: images.hero.focus }}
        />
        {/* Velature per la leggibilità del testo, senza alterare i colori del prodotto al centro */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/55 via-ink/5 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-ink via-ink/70 to-transparent" />
      </div>

      <div className="container-site mt-auto pt-32 pb-10 sm:pb-14 lg:pb-16">
        <p className="eyebrow text-ivory/85">
          {site.brandLine}
          {site.address.locality && <span className="text-ivory/60"> — {site.address.locality}</span>}
        </p>

        <h1 id="hero-title" className="mt-5 max-w-[11ch] text-display font-light">
          Il buono ha i suoi <em className="font-normal text-crust italic">tempi.</em>
        </h1>

        <p className="mt-6 max-w-[34rem] text-[1.08rem] leading-relaxed text-ivory/85 sm:text-lg">
          Impasto seguito con pazienza, ingredienti scelti con cura e una sala dove si sta bene insieme. Da {site.name} la
          pizza è un invito a sedersi.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/menu" variant="primary" className="sm:min-w-48">
            Scopri il menu <ArrowIcon width={18} height={18} />
          </ButtonLink>
          <ButtonLink href="/#contatti" variant="outline-light" className="sm:min-w-48">
            Contattaci
          </ButtonLink>
        </div>

        {facts.length > 0 && (
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-ivory/20 pt-5 text-[0.85rem] text-ivory/75">
            {facts.map((f) => (
              <li key={f} className="flex items-center gap-2">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-crust" />
                {f}
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
