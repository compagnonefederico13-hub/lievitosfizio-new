import Image from "next/image";
import { gallery } from "@/data/images";
import { links } from "@/lib/links";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { ButtonLink } from "../ui/ButtonLink";
import { InstagramIcon } from "../ui/Icons";

const shapeClass = {
  tall: "row-span-2",
  wide: "col-span-2",
  square: "",
} as const;

export function Gallery() {
  return (
    <section id="galleria" aria-labelledby="galleria-title" className="bg-ivory py-24 sm:py-32">
      <div className="container-site">
        <SectionHeader
          index="04"
          eyebrow="Galleria"
          id="galleria-title"
          title={
            <>
              Uno sguardo <em className="text-tomato italic">dentro.</em>
            </>
          }
          intro={<p>Pizze, impasto, ingredienti e la nostra sala.</p>}
        />

        <ul className="mt-14 grid auto-rows-[9.5rem] grid-flow-dense grid-cols-2 gap-3 sm:auto-rows-[13rem] sm:gap-4 lg:grid-cols-4 lg:auto-rows-[15rem]">
          {gallery.map((img, i) => (
            <Reveal
              as="li"
              key={img.src.src}
              delay={(i % 4) * 70}
              className={`group relative overflow-hidden rounded-[1rem] bg-cream ${shapeClass[img.shape]}`}
            >
              <figure className="h-full w-full">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={img.shape === "wide" ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 25vw, 50vw"}
                  placeholder="blur"
                  className="object-cover transition-transform duration-[1.2s] ease-[var(--ease-soft)] group-hover:scale-[1.04]"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent px-4 pt-10 pb-3 font-display text-[1.05rem] text-ivory italic">
                  {img.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>

        {links.instagram && (
          <Reveal className="mt-12 flex justify-center">
            <ButtonLink href={links.instagram} external variant="secondary">
              <InstagramIcon width={18} height={18} /> Altre foto su Instagram
            </ButtonLink>
          </Reveal>
        )}
      </div>
    </section>
  );
}
