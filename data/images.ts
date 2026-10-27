import type { StaticImageData } from "next/image";

import heroPizza from "@/public/images/hero-pizza.jpg";
import pizza01 from "@/public/images/pizza-01.jpg";
import pizza02 from "@/public/images/pizza-02.jpg";
import pizza03 from "@/public/images/pizza-03.jpg";
import laCasaSala from "@/public/images/la-casa-sala.jpg";
import impastoMani from "@/public/images/impasto-mani.jpg";
import g01 from "@/public/images/gallery-01-pizza-dettaglio.jpg";
import g02 from "@/public/images/gallery-02-fritti.jpg";
import g03 from "@/public/images/gallery-03-impasto.jpg";
import g04 from "@/public/images/gallery-04-ingredienti.jpg";
import g05 from "@/public/images/gallery-05-forno.jpg";
import g06 from "@/public/images/gallery-06-sala.jpg";
import g07 from "@/public/images/gallery-07-pizzaiolo.jpg";
import g08 from "@/public/images/gallery-08-tavola.jpg";

/**
 * REGISTRO IMMAGINI
 *
 * Tutte le immagini sono file locali in /public/images.
 * Le versioni attuali sono SEGNAPOSTO generati: per sostituirle basta
 * sovrascrivere il file con la foto reale MANTENENDO LO STESSO NOME
 * (le dimensioni vengono lette automaticamente in fase di build),
 * poi aggiornare il testo alternativo `alt` qui sotto descrivendo la foto reale
 * e impostare `placeholder: false`.
 *
 * Elenco delle foto da importare da Instagram: docs/FOTO-DA-IMPORTARE.md
 */

export type SiteImage = {
  src: StaticImageData;
  alt: string;
  /** true finché il file è un segnaposto */
  placeholder: boolean;
  /** Punto focale per i ritagli (CSS object-position) */
  focus?: string;
};

export const images = {
  hero: {
    src: heroPizza,
    alt: "Pizza artigianale di Lievito Sfizio appena sfornata", // aggiornare con descrizione della foto reale
    placeholder: true,
    focus: "50% 55%",
  },
  pizza01: { src: pizza01, alt: "Pizza classica appena sfornata", placeholder: true },
  pizza02: { src: pizza02, alt: "Pizza della casa, dettaglio degli ingredienti", placeholder: true },
  pizza03: { src: pizza03, alt: "Pizza servita in sala", placeholder: true },
  laCasa: { src: laCasaSala, alt: "La sala di Lievito Sfizio con tavoli in legno e sedie impagliate", placeholder: true },
  impasto: { src: impastoMani, alt: "Mani che stendono l'impasto della pizza", placeholder: true },
} satisfies Record<string, SiteImage>;

export type GalleryImage = SiteImage & { caption: string; shape: "tall" | "wide" | "square" };

/**
 * Ordine e forme studiati perché la griglia resti piena sia su 2 colonne
 * (smartphone) sia su 4 colonne (desktop). Se si aggiungono foto, mantenere
 * il numero di "tall" uguale al numero di "wide".
 */
export const gallery: GalleryImage[] = [
  { src: g01, alt: "Dettaglio del cornicione di una pizza", caption: "Il cornicione", shape: "tall", placeholder: true },
  { src: g02, alt: "Fritti della friggitoria", caption: "Friggitoria", shape: "wide", placeholder: true },
  { src: g04, alt: "Ingredienti freschi sul banco", caption: "Gli ingredienti", shape: "tall", placeholder: true },
  { src: g05, alt: "Il forno della pizzeria", caption: "Il forno", shape: "wide", placeholder: true },
  { src: g08, alt: "Più pizze condivise sulla stessa tavola", caption: "Da condividere", shape: "wide", placeholder: true },
  { src: g07, alt: "Il pizzaiolo al lavoro", caption: "Al banco", shape: "tall", placeholder: true },
  { src: g06, alt: "Ospiti a tavola nella sala", caption: "La sala", shape: "wide", placeholder: true },
  { src: g03, alt: "Panetti di impasto", caption: "L'impasto", shape: "tall", placeholder: true },
];
