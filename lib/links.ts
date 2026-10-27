import { site } from "@/data/site";

/** Indirizzo su una riga, senza parti mancanti */
export function addressLine(): string {
  const a = site.address;
  const city = [a.postalCode, a.locality, a.province ? `(${a.province})` : ""].filter(Boolean).join(" ");
  return [a.street, city].filter(Boolean).join(", ");
}

/** Testo usato per le ricerche su Google Maps */
function mapsQuery(): string {
  const a = site.address;
  return [site.name, a.street, a.postalCode, a.locality, a.province].filter(Boolean).join(" ");
}

export const links = {
  tel: site.phone.e164 ? `tel:${site.phone.e164}` : null,
  whatsapp: site.whatsapp
    ? `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(site.whatsappMessage)}`
    : null,
  email: site.email ? `mailto:${site.email}` : null,
  /** Apre l'app Mappe / Google Maps con il percorso verso la pizzeria */
  directions: site.address.street
    ? site.geo
      ? `https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat},${site.geo.lng}`
      : `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(mapsQuery())}`
    : null,
  /** Mappa incorporata (caricata solo su richiesta dell'utente, vedi MapEmbed) */
  mapEmbed: site.address.street
    ? `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery())}&output=embed`
    : null,
  instagram: site.social.instagram || null,
  facebook: site.social.facebook || null,
};

const dayNames: Record<string, string> = {
  Mo: "Lunedì",
  Tu: "Martedì",
  We: "Mercoledì",
  Th: "Giovedì",
  Fr: "Venerdì",
  Sa: "Sabato",
  Su: "Domenica",
};

export const dayOrder = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"] as const;

export function dayLabel(code: string) {
  return dayNames[code] ?? code;
}

/** Raggruppa giorni consecutivi: ["Tu","We","Th"] → "Martedì – Giovedì" */
export function formatDays(days: readonly string[]): string {
  const sorted = [...days].sort((a, b) => dayOrder.indexOf(a as never) - dayOrder.indexOf(b as never));
  const groups: string[][] = [];
  for (const d of sorted) {
    const last = groups[groups.length - 1];
    if (last && dayOrder.indexOf(d as never) === dayOrder.indexOf(last[last.length - 1] as never) + 1) last.push(d);
    else groups.push([d]);
  }
  return groups
    .map((g) => (g.length > 2 ? `${dayLabel(g[0])} – ${dayLabel(g[g.length - 1])}` : g.map(dayLabel).join(", ")))
    .join(", ");
}
