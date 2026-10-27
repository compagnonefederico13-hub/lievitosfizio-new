"use client";

import { useState } from "react";
import Link from "next/link";
import { links, addressLine } from "@/lib/links";
import { PinIcon } from "@/components/ui/Icons";

/**
 * Google Maps caricato SOLO dopo il clic dell'utente.
 * Finché la mappa non viene richiesta, il sito non contatta Google e non
 * vengono impostati cookie di terze parti. La scelta non viene memorizzata.
 */
export function MapEmbed() {
  const [loaded, setLoaded] = useState(false);

  if (!links.mapEmbed) return null;

  if (loaded) {
    return (
      <iframe
        src={links.mapEmbed}
        title={`Mappa: ${addressLine()}`}
        className="h-full min-h-[22rem] w-full rounded-[1.25rem] border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    );
  }

  return (
    <div className="relative flex h-full min-h-[22rem] flex-col justify-between overflow-hidden rounded-[1.25rem] bg-cream p-6 sm:p-8">
      {/* Trama decorativa che evoca una mappa, senza contenuti di terzi */}
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-cream-deep" preserveAspectRatio="none">
        <defs>
          <pattern id="grid-map" width="46" height="46" patternUnits="userSpaceOnUse" patternTransform="rotate(12)">
            <path d="M46 0H0V46" fill="none" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid-map)" />
        <path d="M-20 260 C 120 200, 220 320, 420 210 S 700 160, 900 240" fill="none" stroke="currentColor" strokeWidth="14" />
      </svg>
      <div className="relative">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-tomato text-ivory shadow-lg">
          <PinIcon />
        </span>
        <p className="mt-4 font-display text-2xl leading-tight">{addressLine()}</p>
      </div>
      <div className="relative space-y-3">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-ink px-6 text-[0.95rem] font-semibold text-ivory transition-colors hover:bg-tomato"
        >
          Mostra la mappa
        </button>
        <p className="max-w-sm text-[0.8rem] leading-snug text-ink-soft">
          La mappa è fornita da Google: caricandola, Google può raccogliere dati di navigazione e impostare cookie.{" "}
          <Link href="/cookie" className="underline underline-offset-2">
            Dettagli
          </Link>
        </p>
      </div>
    </div>
  );
}
