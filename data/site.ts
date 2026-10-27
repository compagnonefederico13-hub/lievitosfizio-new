/**
 * DATI DELL'ATTIVITÀ — unico punto da cui il sito legge recapiti, indirizzo e orari.
 *
 * Regola: un campo vuoto ("" o []) viene mostrato sul sito come segnaposto
 * "Da completare" e viene ESCLUSO dai dati strutturati (JSON-LD).
 * Non inserire mai dati non verificati con la pizzeria.
 *
 * Fonte dei dati già presenti: profilo Instagram ufficiale @lievitosfizio,
 * consultato il 27/10/2026 (bio e locandine pubblicate). Da riconfermare
 * con la pizzeria prima della pubblicazione.
 */

export type DayCode = "Mo" | "Tu" | "We" | "Th" | "Fr" | "Sa" | "Su";

export type OpeningSlot = {
  /** Giorni a cui si applica la fascia, es. ["Tu","We","Th"] */
  days: DayCode[];
  /** Formato 24h "HH:MM" */
  opens: string;
  closes: string;
  /** Etichetta opzionale, es. "Cena" o "Pranzo" */
  label?: string;
};

export const site = {
  name: "Lievito Sfizio",
  /** Come appare nel logo/insegna */
  brandLine: "Pizzeria · Friggitoria",

  /** URL pubblico definitivo (sovrascrivibile con NEXT_PUBLIC_SITE_URL) */
  url: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://lievitosfizio.it",

  /**
   * Mostra sul sito le note "Da completare" accanto ai contenuti da validare.
   * Impostare a false SOLO dopo aver sostituito tutti i segnaposto.
   */
  showTodoNotes: false,

  /** Fonte: bio Instagram "Info e prenotazioni 0810572661" */
  phone: {
    display: "081 057 2661",
    /** Formato internazionale per i link tel: */
    e164: "+390810572661",
  },

  /**
   * Numero WhatsApp in formato internazionale, SOLO cifre, senza "+" e senza spazi.
   * Esempio di formato: 39XXXXXXXXXX. Lasciare "" finché non è confermato.
   */
  whatsapp: "",

  /** Email pubblica (facoltativa) */
  email: "",

  /** Fonte: locandine Instagram "Via C. Alberto dalla Chiesa, 5 Pomigliano d'Arco (NA)" */
  address: {
    street: "Via C. Alberto dalla Chiesa, 5",
    postalCode: "", // DA COMPLETARE: CAP
    locality: "Pomigliano d'Arco",
    province: "NA",
    region: "Campania",
    country: "IT",
  },

  /**
   * Coordinate esatte del locale (facoltative, migliorano i dati strutturati).
   * Ricavarle dalla scheda Google Business Profile della pizzeria.
   */
  geo: null as null | { lat: number; lng: number },

  /**
   * ORARI DI APERTURA — DA COMPLETARE con la pizzeria.
   * Esempio di formato (NON reale):
   *   { days: ["Tu","We","Th","Fr","Sa","Su"], opens: "19:00", closes: "23:30", label: "Cena" }
   */
  hours: [] as OpeningSlot[],

  /** Fonte: bio Instagram "Chiuso il Lunedì" */
  closedNote: "Chiuso il lunedì",

  /** Servizi dichiarati nella bio Instagram */
  services: {
    /** Bio: "Anche Senza Glutine" */
    glutenFreeOptions: true,
    /** Storia in evidenza "Consegne" — modalità e zone da confermare */
    delivery: true,
    /** Bio: "Info e prenotazioni" (telefonicamente) */
    reservationsByPhone: true,
  },

  social: {
    instagram: "https://www.instagram.com/lievitosfizio/",
    facebook: "", // facoltativo
  },

  /** Dati societari per footer e informative — DA COMPLETARE */
  legal: {
    companyName: "", // Ragione sociale
    vatNumber: "", // Partita IVA
    registeredOffice: "", // Sede legale, se diversa
    privacyEmail: "", // Contatto per richieste privacy
  },

  /** Messaggio precompilato per WhatsApp */
  whatsappMessage: "Ciao Lievito Sfizio! Vorrei avere qualche informazione.",
};

export type Site = typeof site;
