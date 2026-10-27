import Image from "next/image";
import { images } from "@/data/images";
import { site } from "@/data/site";
import { Reveal } from "../ui/Reveal";
import { SectionHeader } from "../ui/SectionHeader";
import { TodoNote } from "../ui/TodoNote";

export function About() {
  const pillars = [
    { title: "Pizzeria", text: "La pizza al centro della tavola, dalla classica alle proposte della casa." },
    { title: "Friggitoria", text: "I fritti della tradizione, da gustare in attesa della pizza o da condividere." },
    site.services.glutenFreeOptions && {
      title: "Anche senza glutine",
      text: "Proposte pensate anche per chi deve rinunciare al glutine.",
    },
  ].filter(Boolean) as { title: string; text: string }[];

  return (
    <section id="la-casa" aria-labelledby="la-casa-title" className="bg-ivory py-24 sm:py-32">
      <div className="container-site grid items-center gap-14 lg:grid-cols-12 lg:gap-20">
        <Reveal className="relative lg:col-span-5">
          {/* L'arco richiama la bocca del forno */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] rounded-b-[1.25rem] bg-cream">
            <Image
              src={images.laCasa.src}
              alt={images.laCasa.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
          <p className="absolute -bottom-5 left-6 rounded-full bg-tomato px-5 py-2.5 font-display text-[1.05rem] text-ivory italic shadow-lg sm:left-10">
            Accomodati, sei a casa.
          </p>
        </Reveal>

        <div className="lg:col-span-7">
          <SectionHeader
            index="01"
            eyebrow="La casa"
            id="la-casa-title"
            title={
              <>
                Una tavola semplice, <em className="text-tomato italic">fatta con attenzione.</em>
              </>
            }
            intro={
              <>
                <p>
                  {site.name} è pizzeria e friggitoria: due piaceri della tradizione sotto lo stesso tetto. Un posto
                  dove mangiare bene, senza fretta, in compagnia.
                </p>
                <p className="mt-4">
                  Ogni pizza esce dal banco con la stessa attenzione, che sia per una cena tra amici, una serata in
                  famiglia o un ordine da portare a casa.
                </p>
              </>
            }
          />

          <TodoNote className="mt-6 max-w-xl">
            Sostituire o integrare questo testo con la storia reale del locale fornita dalla pizzeria (chi c&apos;è
            dietro al banco, quando avete aperto, cosa vi rende diversi). Non pubblicare informazioni non confermate.
          </TodoNote>

          <dl className="mt-12 grid gap-px overflow-hidden rounded-[1.25rem] border border-line bg-line sm:grid-cols-3">
            {pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 90} className="bg-ivory p-6">
                <dt className="font-display text-xl">{p.title}</dt>
                <dd className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">{p.text}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
