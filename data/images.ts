
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
    placeholder: false,
    focus: "50% 55%",
  },
  pizza01: {
    src: "/images/pizza-01.jpg",
    alt: "Pizza classica appena sfornata",
    placeholder: false,
  },
  pizza02: {
    src: "/images/pizza-02.jpg",
    alt: "Pizza della casa, dettaglio degli ingredienti",
    placeholder: false,
  },
  pizza03: {
    src: "/images/pizza-03.jpg",
    alt: "Pizza servita in sala",
    placeholder: false,
  },
  laCasa: {
    src: "/images/VIN_3304.JPG",
    alt: "La sala di Lievito Sfizio",
    placeholder: false,
  },
  impasto: {
    src: "/images/VIN_3377.JPG",
    alt: "L'impasto preparato da Lievito Sfizio",
    placeholder: false,
  },
} satisfies Record<string, SiteImage>;

export type GalleryImage = SiteImage & {
  caption: string;
  shape: "tall" | "wide" | "square";
};

export const gallery: GalleryImage[] = [
  {
    src: "/images/gallery-01-pizza-dettaglio.jpg",
    alt: "Dettaglio del cornicione di una pizza",
    caption: "Il cornicione",
    shape: "tall",
    placeholder: false,
  },
  {
    src: "/images/gallery-02-fritti.jpg",
    alt: "Fritti della friggitoria",
    caption: "Friggitoria",
    shape: "wide",
    placeholder: false,
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
];
