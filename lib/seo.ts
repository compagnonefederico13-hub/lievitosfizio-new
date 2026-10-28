import { site } from "@/data/site";
import { menu } from "@/data/menu";
import { images } from "@/data/images";

const schemaDays: Record<string, string> = {
  Mo: "https://schema.org/Monday",
  Tu: "https://schema.org/Tuesday",
  We: "https://schema.org/Wednesday",
  Th: "https://schema.org/Thursday",
  Fr: "https://schema.org/Friday",
  Sa: "https://schema.org/Saturday",
  Su: "https://schema.org/Sunday",
};

/**
 * Dati strutturati schema.org per la pizzeria.
 * Include SOLO i campi effettivamente compilati in data/site.ts:
 * campi vuoti, menu dimostrativo e foto segnaposto vengono omessi.
 */
export function restaurantJsonLd() {
  const a = site.address;

  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${site.url}/#restaurant`,
    name: site.name,
    url: site.url,
    servesCuisine: ["Pizza"],
  };

  if (site.phone.e164) data.telephone = site.phone.e164;
  if (site.email) data.email = site.email;
  if (site.services.reservationsByPhone) data.acceptsReservations = true;

  if (a.street && a.locality) {
    data.address = {
      "@type": "PostalAddress",
      streetAddress: a.street,
      addressLocality: a.locality,
      ...(a.postalCode ? { postalCode: a.postalCode } : {}),
      ...(a.province ? { addressRegion: a.province } : {}),
      addressCountry: a.country,
    };
  }

  if (site.geo) {
    data.geo = {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    };
  }

  if (site.hours.length > 0) {
    data.openingHoursSpecification = site.hours.map((slot) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: slot.days.map((d) => schemaDays[d]),
      opens: slot.opens,
      closes: slot.closes,
    }));
  }

  if (!menu.isDemo) data.hasMenu = `${site.url}/menu`;

  if (!images.hero.placeholder) {
    data.image = [`${site.url}${images.hero.src}`];
  }

  const sameAs = [site.social.instagram, site.social.facebook].filter(Boolean);
  if (sameAs.length) data.sameAs = sameAs;

  return data;
}

export const defaultDescription =
  "Lievito Sfizio, pizzeria e friggitoria a Pomigliano d'Arco: pizza preparata con cura, fritti, proposte anche senza glutine. Informazioni e prenotazioni al telefono.";

