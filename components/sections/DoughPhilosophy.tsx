import Image from "next/image";
import { images } from "@/data/images";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TodoNote } from "@/components/ui/TodoNote";

/**
 * Testi volutamente generici: descrivono un approccio, non dati tecnici.
 * Farine, ore di lievitazione, idratazione e tipo di forno vanno inseriti
 * SOLO se forniti e confermati dalla pizzeria.
 */
const steps = [
  {
    n: "I",
    title: "Il tempo",
    text: "Un buon impasto non si può affrettare. Gli lasciamo il tempo che serve per diventare morbido e profumato.",
  },
  {
    n: "II",
    title: "Le mani",
    text: "Ogni panetto viene steso e condito al momento. È il gesto del pizzaiolo a dare forma al cornicione.",
  },
  {
    n: "III",
    title: "Il fuoco",
    text: "La cottura si segue pizza per pizza, finché il bordo non è dorato e la base cotta al punto giusto.",
  },
];

export function DoughPhilosophy() {
  return (
    <section id="impasto" aria-labelledby="impasto-title" className="relative overflow-hidden bg-ink py-24 text-ivory sm:py-32">
      <div className="container-site grid gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-6">
          <SectionHeader
            index="03"
            eyebrow="L'impasto"
            tone="light"
            id="impasto-title"
            title={
              <>
                Il tempo è <em className="text-crust italic">un ingrediente.</em>
              </>
            }
            intro={
              <p>
                Tutto parte da lì: farina, acqua, lievito, sale. Pochi elementi semplici che chiedono pazienza e
                attenzione per diventare una buona pizza.
              </p>
            }
          />

          <ol className="mt-14 space-y-10">
            {steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 100} className="grid grid-cols-[3.5rem_1fr] gap-4 border-t border-ivory/15 pt-6">
                <span className="font-display text-3xl text-crust italic">{s.n}</span>
                <div>
                  <h3 className="text-2xl">{s.title}</h3>
                  <p className="mt-2 text-[1rem] leading-relaxed text-ivory/70">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>

          <TodoNote tone="light" className="mt-10 max-w-xl">
            Validare questi testi con la pizzeria e, se lo desidera, aggiungere i dettagli reali: tipo di farine, ore di
            lievitazione e maturazione, tipo di forno.
          </TodoNote>
        </div>

        <Reveal className="lg:col-span-6" delay={120}>
          <div className="relative mx-auto aspect-[4/5] max-w-lg overflow-hidden rounded-t-[999px] rounded-b-[1.25rem] lg:sticky lg:top-28">
            <Image
              src={images.impasto.src}
              alt={images.impasto.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              placeholder="blur"
              className="object-cover"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
