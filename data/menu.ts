/**
 * MENU — CONTENUTO DIMOSTRATIVO.
 *
 * Nomi, descrizioni e prezzi qui sotto sono ESEMPI per impaginare il sito:
 * NON corrispondono al menu reale di Lievito Sfizio.
 *
 * Per pubblicare il menu reale:
 *  1. sostituire categorie e voci con quelle fornite dalla pizzeria;
 *  2. impostare `isDemo` a false (rimuove il banner e le etichette "Esempio",
 *     e inserisce /menu nella sitemap e nei dati strutturati).
 */

export type MenuItem = {
  name: string;
  description?: string;
  /** Prezzo in euro, es. 8.5 */
  price: number;
  tags?: Array<"senza-glutine-su-richiesta" | "piccante" | "vegetariana" | "novita">;
  /** Mostrare in homepage nella selezione "Le nostre pizze" */
  featured?: boolean;
  /** Chiave di un'immagine in data/images.ts (solo per le voci in evidenza) */
  image?: "pizza01" | "pizza02" | "pizza03";
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menu: { isDemo: boolean; footnotes: string[]; categories: MenuCategory[] } = {
  isDemo: true,
  footnotes: [
    "Esempio di nota: segnalare al personale eventuali allergie o intolleranze.",
    "Esempio di nota: l'elenco degli allergeni è disponibile su richiesta.",
  ],
  categories: [
    {
      id: "classiche",
      title: "Le classiche",
      note: "Esempio di nota di categoria.",
      items: [
        { name: "Pizza esempio 1", description: "Descrizione dimostrativa: base pomodoro, mozzarella, basilico, olio extravergine.", price: 6, tags: ["vegetariana"], featured: true, image: "pizza01" },
        { name: "Pizza esempio 2", description: "Descrizione dimostrativa: pomodoro, aglio, origano, olio extravergine.", price: 5 },
        { name: "Pizza esempio 3", description: "Descrizione dimostrativa: pomodoro, mozzarella, salame piccante.", price: 7.5, tags: ["piccante"] },
        { name: "Pizza esempio 4", description: "Descrizione dimostrativa: mozzarella, funghi, prosciutto cotto.", price: 8 },
      ],
    },
    {
      id: "sfiziose",
      title: "Le sfiziose",
      note: "Esempio: le pizze della casa.",
      items: [
        { name: "Pizza esempio 5", description: "Descrizione dimostrativa: crema di stagione, verdure, formaggio stagionato.", price: 10, tags: ["vegetariana", "novita"], featured: true, image: "pizza02" },
        { name: "Pizza esempio 6", description: "Descrizione dimostrativa: fior di latte, salume, scaglie, olio a crudo.", price: 11, featured: true, image: "pizza03" },
        { name: "Pizza esempio 7", description: "Descrizione dimostrativa: provola, friarielli, salsiccia.", price: 9.5 },
      ],
    },
    {
      id: "fritti",
      title: "Friggitoria",
      items: [
        { name: "Fritto esempio 1", description: "Descrizione dimostrativa di un fritto della casa.", price: 3 },
        { name: "Fritto esempio 2", description: "Descrizione dimostrativa di un fritto della casa.", price: 3.5 },
        { name: "Fritto esempio 3", description: "Descrizione dimostrativa: porzione da condividere.", price: 7 },
      ],
    },
    {
      id: "senza-glutine",
      title: "Anche senza glutine",
      note: "Esempio: indicare qui modalità e disponibilità dell'offerta senza glutine, come comunicate dalla pizzeria.",
      items: [
        { name: "Pizza esempio 8", description: "Descrizione dimostrativa di una proposta senza glutine.", price: 9, tags: ["senza-glutine-su-richiesta"] },
      ],
    },
    {
      id: "dolci",
      title: "Dolci",
      items: [
        { name: "Dolce esempio 1", description: "Descrizione dimostrativa.", price: 5 },
        { name: "Dolce esempio 2", description: "Descrizione dimostrativa.", price: 5.5 },
      ],
    },
    {
      id: "bevande",
      title: "Bevande",
      items: [
        { name: "Acqua (esempio)", price: 2 },
        { name: "Bibita in lattina (esempio)", price: 3 },
        { name: "Birra alla spina (esempio)", description: "Formato dimostrativo.", price: 5 },
      ],
    },
  ],
};

export const tagLabels: Record<NonNullable<MenuItem["tags"]>[number], string> = {
  "senza-glutine-su-richiesta": "Senza glutine",
  piccante: "Piccante",
  vegetariana: "Vegetariana",
  novita: "Novità",
};

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(value);
