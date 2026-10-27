import Image from "next/image";
import Link from "next/link";
import { images } from "@/data/images";
import { formatPrice, menu } from "@/data/menu";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { ArrowIcon } from "../ui/Icons";
import { DemoBadge } from "../menu/DemoBadge";

export function SignaturePizzas() {
  const featured = menu.categories.flatMap((c) => c.items).filter((i) => i.featured).slice(0, 3);
  if (featured.length === 0) return null;

  return (
    <section aria-labelledby="pizze-title" className="bg-cream py-24 sm:py-32">
      <div className="container-site">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            index="02"
            eyebrow="Le pizze"
            id="pizze-title"
            title={
              <>
                Dal banco <em className="text-tomato italic">alla tavola.</em>
              </>
            }
            intro={<p>Una piccola selezione per farti venire l&apos;acquolina. Il resto ti aspetta nel menu.</p>}
          />
          {menu.isDemo && (
            <Reveal>
              <DemoBadge />
            </Reveal>
          )}
        </div>

        {/* Su smartphone: carosello orizzontale con scorrimento a scatto; da tablet: griglia */}
        <ul className="-mx-5 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 [scrollbar-width:none] sm:-mx-8 sm:scroll-px-8 sm:px-8 md:mx-0 md:mt-14 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:pb-0 [&::-webkit-scrollbar]:hidden">
          {featured.map((item, i) => {
            const img = item.image ? images[item.image] : null;
            return (
              <Reveal as="li" key={item.name} delay={i * 110} className="group w-[80%] shrink-0 snap-start sm:w-[60%] md:w-auto">
                <article>
                  {img && (
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-cream-deep">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(min-width: 768px) 30vw, 80vw"
                        placeholder="blur"
                        className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-soft)] group-hover:scale-[1.04]"
                      />
                    </div>
                  )}
                  <div className="mt-5 flex items-baseline justify-between gap-4 border-b border-ink/15 pb-4">
                    <h3 className="text-[1.6rem] leading-tight">{item.name}</h3>
                    <p className="shrink-0 font-display text-xl text-tomato">{formatPrice(item.price)}</p>
                  </div>
                  {item.description && <p className="mt-3 text-[0.97rem] text-ink-soft">{item.description}</p>}
                </article>
              </Reveal>
            );
          })}
        </ul>

        <Reveal className="mt-14 flex justify-center">
          <Link
            href="/menu"
            className="group inline-flex min-h-12 items-center gap-3 border-b border-ink pb-1 font-display text-2xl italic transition-colors hover:border-tomato hover:text-tomato"
          >
            Sfoglia il menu completo
            <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
