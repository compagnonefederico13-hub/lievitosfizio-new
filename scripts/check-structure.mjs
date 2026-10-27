// Controllo della struttura del progetto, eseguito automaticamente prima di `npm run build`.
// Serve a individuare subito file caricati nella cartella sbagliata (ad esempio tutti
// "appiattiti" nella root del repository GitHub), con un messaggio chiaro.
import { existsSync, readdirSync } from "node:fs";

const expected = [
  "app/layout.tsx", "app/page.tsx", "app/globals.css", "app/not-found.tsx",
  "app/menu/page.tsx", "app/privacy/page.tsx", "app/cookie/page.tsx",
  "app/sitemap.ts", "app/robots.ts", "app/icon.svg",
  "components/SiteHeader.tsx", "components/SiteFooter.tsx", "components/MobileActionBar.tsx",
  "components/MapEmbed.tsx", "components/JsonLd.tsx", "components/LegalPage.tsx",
  "components/menu/DemoBadge.tsx",
  "components/sections/Hero.tsx", "components/sections/About.tsx", "components/sections/SignaturePizzas.tsx",
  "components/sections/DoughPhilosophy.tsx", "components/sections/Gallery.tsx", "components/sections/Visit.tsx",
  "components/ui/ButtonLink.tsx", "components/ui/Icons.tsx", "components/ui/Logo.tsx",
  "components/ui/Reveal.tsx", "components/ui/SectionHeader.tsx", "components/ui/TodoNote.tsx",
  "data/site.ts", "data/menu.ts", "data/images.ts", "data/nav.ts",
  "lib/links.ts", "lib/seo.ts",
  "public/og/og-default.jpg",
  "public/images/hero-pizza.jpg", "public/images/pizza-01.jpg", "public/images/pizza-02.jpg", "public/images/pizza-03.jpg",
  "public/images/la-casa-sala.jpg", "public/images/impasto-mani.jpg",
  "public/images/gallery-01-pizza-dettaglio.jpg", "public/images/gallery-02-fritti.jpg",
  "public/images/gallery-03-impasto.jpg", "public/images/gallery-04-ingredienti.jpg",
  "public/images/gallery-05-forno.jpg", "public/images/gallery-06-sala.jpg",
  "public/images/gallery-07-pizzaiolo.jpg", "public/images/gallery-08-tavola.jpg",
];

const missing = expected.filter((p) => !existsSync(p));
const rootFiles = readdirSync(".");
const misplaced = expected
  .filter((p) => p.includes("/"))
  .map((p) => ({ name: p.split("/").pop(), path: p }))
  .filter(({ name, path }) => name !== "page.tsx" && rootFiles.includes(name) && !existsSync(path) );
const looseRoutes = rootFiles.filter((f) => /^page( \(\d+\))?\.tsx$/.test(f));

if (missing.length === 0 && looseRoutes.length === 0) {
  console.log(`✓ Struttura del progetto corretta (${expected.length} file verificati).`);
  process.exit(0);
}

console.error("\n✗ STRUTTURA DEL PROGETTO NON VALIDA\n");
if (misplaced.length) {
  console.error("File presenti nella root ma che devono stare in una sottocartella:");
  for (const m of misplaced) console.error(`  ${m.name}  →  ${m.path}`);
  console.error("");
}
if (looseRoutes.length) {
  console.error(`File di pagina nella root: ${looseRoutes.join(", ")}`);
  console.error("  Vanno nelle cartelle app/, app/menu/, app/privacy/, app/cookie/ (vedi docs/RIPRISTINO-STRUTTURA.md).\n");
}
const others = missing.filter((p) => !misplaced.some((m) => m.path === p));
if (others.length) {
  console.error("File mancanti:");
  for (const p of others) console.error(`  ${p}`);
  console.error("");
}
console.error("Le cartelle sono andate perse durante il caricamento su GitHub.");
console.error("Ricarica il progetto con git push o GitHub Desktop (non con \"Upload files\" selezionando i singoli file).\n");
process.exit(1);
