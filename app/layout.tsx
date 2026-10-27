import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import { defaultDescription, restaurantJsonLd } from "@/lib/seo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { MobileActionBar } from "@/components/MobileActionBar";
import { JsonLd } from "@/components/JsonLd";

// I font vengono scaricati in fase di build e serviti dal dominio del sito
// (nessuna richiesta ai server Google da parte dei visitatori).
const display = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "opsz"],
  variable: "--ff-display",
  display: "swap",
});

const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--ff-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Pizzeria e Friggitoria a ${site.address.locality}`,
    template: `%s · ${site.name}`,
  },
  description: defaultDescription,
  applicationName: site.name,
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "/",
    siteName: site.name,
    title: `${site.name} — Pizzeria e Friggitoria`,
    description: defaultDescription,
    images: [{ url: "/og/og-default.jpg", width: 1200, height: 630, alt: `${site.name} — Pizzeria e Friggitoria` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Pizzeria e Friggitoria`,
    description: defaultDescription,
    images: ["/og/og-default.jpg"],
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#fbf7f0",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="it" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        {/* Attiva le animazioni d'ingresso solo se JavaScript è disponibile */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <JsonLd data={restaurantJsonLd()} />
        <SiteHeader />
        <main id="contenuto">{children}</main>
        <SiteFooter />
        <MobileActionBar />
      </body>
    </html>
  );
}
