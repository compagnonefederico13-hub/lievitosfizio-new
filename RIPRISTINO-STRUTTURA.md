# Ripristino della struttura delle cartelle

Se i file del progetto finiscono "appiattiti" nella root del repository (ad esempio `page.tsx`, `page (1).tsx`, `Hero.tsx`, immagini sciolte), Vercel non trova la cartella `app/` e la build fallisce con `Couldn't find any 'pages' or 'app' directory`.

La soluzione consigliata è **sostituire il contenuto del repository** con quello di questo ZIP, che ha già la struttura corretta.

## Come riconoscere i file `page*.tsx`

In Next.js tutte le pagine si chiamano `page.tsx`: quando le cartelle vanno perse, i download successivi diventano `page (1).tsx`, `page (2).tsx`, ecc. Il numero dipende dall'ordine di download, quindi **va riconosciuto dal contenuto**, cercando il nome della funzione esportata:

| Il file contiene | Va in | Rotta |
|---|---|---|
| `export default function HomePage` | `app/page.tsx` | `/` |
| `export default function MenuPage` | `app/menu/page.tsx` | `/menu` |
| `export default function PrivacyPage` | `app/privacy/page.tsx` | `/privacy` |
| `export default function CookiePage` | `app/cookie/page.tsx` | `/cookie` |

## Collocazione di tutti gli altri file

| File | Percorso corretto | Funzione esportata di default |
|---|---|---|
| `About.tsx` | `components/sections/About.tsx` | — |
| `ButtonLink.tsx` | `components/ui/ButtonLink.tsx` | — |
| `DemoBadge.tsx` | `components/menu/DemoBadge.tsx` | — |
| `DoughPhilosophy.tsx` | `components/sections/DoughPhilosophy.tsx` | — |
| `Gallery.tsx` | `components/sections/Gallery.tsx` | — |
| `Hero.tsx` | `components/sections/Hero.tsx` | — |
| `Icons.tsx` | `components/ui/Icons.tsx` | — |
| `JsonLd.tsx` | `components/JsonLd.tsx` | — |
| `LegalPage.tsx` | `components/LegalPage.tsx` | — |
| `Logo.tsx` | `components/ui/Logo.tsx` | — |
| `MapEmbed.tsx` | `components/MapEmbed.tsx` | — |
| `MobileActionBar.tsx` | `components/MobileActionBar.tsx` | — |
| `Reveal.tsx` | `components/ui/Reveal.tsx` | — |
| `SectionHeader.tsx` | `components/ui/SectionHeader.tsx` | — |
| `SignaturePizzas.tsx` | `components/sections/SignaturePizzas.tsx` | — |
| `SiteFooter.tsx` | `components/SiteFooter.tsx` | — |
| `SiteHeader.tsx` | `components/SiteHeader.tsx` | — |
| `TodoNote.tsx` | `components/ui/TodoNote.tsx` | — |
| `Visit.tsx` | `components/sections/Visit.tsx` | — |
| `globals.css` | `app/globals.css` | — |
| `icon.svg` | `app/icon.svg` | — |
| `images.ts` | `data/images.ts` | — |
| `layout.tsx` | `app/layout.tsx` | `RootLayout` |
| `links.ts` | `lib/links.ts` | — |
| `menu.ts` | `data/menu.ts` | — |
| `nav.ts` | `data/nav.ts` | — |
| `not-found.tsx` | `app/not-found.tsx` | `NotFound` |
| `page.tsx` | `app/cookie/page.tsx` | `CookiePage` |
| `page.tsx` | `app/menu/page.tsx` | `MenuPage` |
| `page.tsx` | `app/page.tsx` | `HomePage` |
| `page.tsx` | `app/privacy/page.tsx` | `PrivacyPage` |
| `robots.ts` | `app/robots.ts` | `robots` |
| `seo.ts` | `lib/seo.ts` | — |
| `site.ts` | `data/site.ts` | — |
| `sitemap.ts` | `app/sitemap.ts` | `sitemap` |

Immagini: tutte in `public/images/` (14 file `.jpg`), più `public/og/og-default.jpg`.
Nella root restano: `package.json`, `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`, `next-env.d.ts`, `.gitignore`, `.env.example`, `README.md`.
