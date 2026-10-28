

type ImageAsset = string;

export type SiteImage = {
  src: ImageAsset;
  alt: string;
  placeholder: boolean;
  focus?: string;
};

export const images = {
  hero: {
    src: "/images/lievito13.JPG",
    alt: "Lievito Sfizio, pizza artigianale",
    placeholder: false,
    focus: "50% 55%",
  },
  pizza01: {
    src: "/images/img003.jpeg",
    alt: "Pizza di Lievito Sfizio",
    placeholder: false,
  },
  pizza02: {
    src: "/images/img002.jpeg",
    alt: "Pizza della casa",
    placeholder: false,
  },
  pizza03: {
    src: "/images/img001.jpeg",
    alt: "Pizza preparata da Lievito Sfizio",
    placeholder: false,
  },
  laCasa: {
    src: "/images/VIN_3316.JPG",
    alt: "La sala di Lievito Sfizio",
    placeholder: false,
  },
  impasto: {
    src: "/images/VIN_3367.JPG",
    alt: "L'impasto di Lievito Sfizio",
    placeholder: false,
  },
  birre: {
    src: "/images/IMG_0256.JPEG",
    alt: "Le birre alla spina",
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
    alt: "Dettaglio del cornicione della pizza",
    caption: "Il cornicione",
    shape: "tall",
    placeholder: false,
  },
  {
    src: "/images/gallery-02-fritti.jpg",
    alt: "I fritti della friggitoria",
    caption: "Friggitoria",
    shape: "wide",
    placeholder: false,
  },
  {
    src: "/images/VIN_3367.JPG",
    alt: "L'impasto di Lievito Sfizio",
    caption: "Impasto",
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
    src: "/images/IMG_0256.jpeg",
    alt: "Le birre alla spina",
    caption: "Le birre alla spina",
    shape: "tall",
    placeholder: false,
  },
];
