type ImageAsset = string;

export type SiteImage = {
  src: ImageAsset;
  alt: string;
  /** true finché il file è un segnaposto */
  placeholder: boolean;
  /** Punto focale per i ritagli (CSS object-position) */
  focus?: string;
};

export const images = {
  hero: {
    src: "/images/hero-pizza.jpg",
    alt: "Pizza artigianale di Lievito Sfizio appena sfornata",
    placeholder: true,
    focus: "50% 55%",
  },
  pizza01: {
    src: "/images/pizza-01.jpg",
    alt: "Pizza classica appena sfornata",
    placeholder: true,
  },
  pizza02: {
    src: "/images/pizza-02.jpg",
    alt: "Pizza della casa, dettaglio degli ingredienti",
    placeholder: true,
  },
  pizza03: {
    src: "/images/pizza-03.jpg",
    alt: "Pizza servita in sala",
    placeholder: true,
  },
  laCasa: {
    src: "/images/la-casa-sala.jpg",
    alt: "La sala di Lievito Sfizio con tavoli in legno e sedie impagliate",
    placeholder: true,
  },
  impasto: {
    src: "/images/impasto-mani.jpg",
    alt: "Mani che stendono l'impasto della pizza",
    placeholder: true,
  },
} satisfies Record<string, SiteImage>;

export type GalleryImage = SiteImage & {
  caption: string;
  shape: "tall" | "wide" | "square";
};

/**
 * Ordine e forme studiati perché la griglia resti piena sia su 2 colonne
 * (smartphone) sia su 4 colonne (desktop).
 */

export const gallery: GalleryImage[] = [
  {
    src: "/images/gallery-01-pizza-dettaglio.jpg",
    alt: "Dettaglio del cornicione di una pizza",
    caption: "Il cornicione",
    shape: "tall",
    placeholder: true,
  },
  {
    src: "/images/gallery-02-fritti.jpg",
    alt: "Fritti della friggitoria",
    caption: "Friggitoria",
    shape: "wide",
    placeholder: true,
  },
  {
    src: "/images/gallery-04-ingredienti.jpg",
    alt: "Ingredienti freschi sul banco",
    caption: "Gli ingredienti",
    shape: "tall",
    placeholder: true,
  },
  {
    src: "/images/gallery-05-forno.jpg",
    alt: "Il forno di Lievito Sfizio",
    caption: "Il forno",
    shape: "wide",
    placeholder: true,
  },
  {
    src: "/images/VIN_3377.JPG",
    alt: "L'impasto preparato da Lievito Sfizio",
    caption: "L'impasto",
    shape: "wide",
    placeholder: false,
  },
  {
    src: "/images/VIN_3437.JPG",
    alt: "Il forno di Lievito Sfizio",
    caption: "Il forno",
    shape: "tall",
    placeholder: false,
  },
  {
    src: "/images/VIN_3304.JPG",
    alt: "La sala di Lievito Sfizio",
    caption: "La nostra sala",
    shape: "wide",
    placeholder: false,
  },
  {
    src: "/images/gallery-03-impasto.jpg",
    alt: "Panetti di impasto",
    caption: "L'impasto",
    shape: "tall",
    placeholder: true,
  },
];