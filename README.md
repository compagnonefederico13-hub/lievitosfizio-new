# Lievito Sfizio — sito ufficiale

Sito di **Lievito Sfizio, Pizzeria · Friggitoria** (dominio: https://lievitosfizio.it).
Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · pronto per Vercel.

> **Stato:** struttura, design e codice completi. Contenuti reali **da completare**:
> foto, menu, orari, CAP, WhatsApp, dati societari, testi da validare, informative.
> Tutto ciò che manca è segnalato sul sito con etichette tratteggiate "Da completare".

---

## 1. Avvio in locale

Requisiti: **Node.js 18.18 o superiore** (consigliato 20 o 22) — https://nodejs.org

```bash
cd lievitosfizio
npm install          # installa le dipendenze
npm run dev          # avvia l'anteprima su http://localhost:3000
```

Controlli prima di pubblicare:

```bash
npm run typecheck    # verifica TypeScript
npm run build        # build di produzione (la stessa che esegue Vercel)
npm run start        # prova la build su http://localhost:3000
```

Per vedere l'anteprima dallo smartphone sulla stessa rete Wi-Fi: `npm run dev -- -H 0.0.0.0`
e apri `http://<IP-del-computer>:3000`.

## 2. Struttura

La struttura delle cartelle è **obbligatoria**: Next.js cerca le pagine nella cartella `app/`.
Se i file vengono caricati "appiattiti" nella root, la build fallisce con
`Couldn't find any 'pages' or 'app' directory`.

```
app/                    ← ROTTE (App Router)
  layout.tsx            layout, font, metadati SEO globali, JSON-LD
  page.tsx              homepage (/)
  menu/page.tsx         pagina menu (/menu)
  privacy/page.tsx      informativa privacy (/privacy) — da completare
  cookie/page.tsx       cookie policy (/cookie) — da completare
  not-found.tsx         pagina 404 personalizzata
  sitemap.ts            /sitemap.xml
  robots.ts             /robots.txt
  icon.svg              favicon
  globals.css           palette, tipografia, animazioni (Tailwind 4)
components/
  sections/             Hero, About, SignaturePizzas, DoughPhilosophy, Gallery, Visit
  ui/                   Logo, ButtonLink, Icons, Reveal, SectionHeader, TodoNote
  menu/DemoBadge.tsx    etichetta "menu dimostrativo"
  SiteHeader.tsx        navigazione + menu mobile
  SiteFooter.tsx        piè di pagina
  MobileActionBar.tsx   barra azioni fissa su smartphone
  MapEmbed.tsx          Google Maps caricato solo su richiesta
  LegalPage.tsx         impaginazione pagine privacy/cookie
  JsonLd.tsx            dati strutturati
data/
  site.ts               ★ recapiti, indirizzo, orari, social, dati societari
  menu.ts               ★ menu (attualmente DIMOSTRATIVO)
  images.ts             ★ registro immagini e testi alternativi
  nav.ts                voci di navigazione
lib/                    link (tel, WhatsApp, Maps), dati strutturati
public/
  images/               foto del sito (ora SEGNAPOSTO)
  og/og-default.jpg     immagine per la condivisione social
docs/
  FOTO-DA-IMPORTARE.md  elenco foto da richiedere alla pizzeria
package.json, next.config.ts, tsconfig.json, postcss.config.mjs, next-env.d.ts  ← nella root
```

Nota: in Next.js tutte le pagine si chiamano `page.tsx`; è la **cartella** a determinare la rotta.

Tutti gli import interni usano l'alias `@/` (es. `@/components/ui/Reveal`), che parte dalla root
del progetto. Prima di ogni `npm run build` (anche su Vercel) viene eseguito automaticamente
`scripts/check-structure.mjs`: se un file è nella cartella sbagliata, la build si ferma subito
indicando dove va spostato. Si può lanciare anche a mano con `npm run check`.

## 3. Dove si modificano i contenuti

### Recapiti, indirizzo, orari — `data/site.ts`

Già inseriti (fonte: profilo Instagram ufficiale, 27/10/2026 — **da riconfermare**):
telefono 081 057 2661, indirizzo Via C. Alberto dalla Chiesa, 5 – Pomigliano d'Arco (NA),
"Chiuso il lunedì", proposte anche senza glutine, consegne.

Da completare:

| Campo | Esempio di formato |
|---|---|
| `whatsapp` | solo cifre con prefisso internazionale, es. `39XXXXXXXXXX` |
| `address.postalCode` | CAP |
| `hours` | `{ days: ["Tu","We","Th","Fr","Sa","Su"], opens: "19:00", closes: "23:30", label: "Cena" }` |
| `geo` | `{ lat: 40.xxxx, lng: 14.xxxx }` dalla scheda Google della pizzeria |
| `legal.*` | ragione sociale, P.IVA, sede legale, email privacy |

Quando un campo viene compilato, compare automaticamente sul sito, nei pulsanti
(menu mobile, sezione contatti, barra azioni su smartphone) e nei dati strutturati.

### Menu — `data/menu.ts`

Il menu attuale è **dimostrativo** (nomi "Pizza esempio", prezzi di esempio) ed è segnalato
chiaramente sul sito. Per pubblicare quello reale:

1. sostituire categorie e voci;
2. impostare `isDemo: false`.

Con `isDemo: false` spariscono gli avvisi, la pagina /menu diventa indicizzabile ed entra in
sitemap e dati strutturati. Le voci con `featured: true` (max 3) compaiono in homepage.

### Testi

I testi di homepage sono nei componenti in `components/sections/`. Sono scritti per non
dichiarare fatti non verificati (storia, farine, ore di lievitazione, forno): le note
"Da completare" indicano dove inserire i dettagli reali forniti dalla pizzeria.

### Foto — `public/images/` + `data/images.ts`

1. Sovrascrivere il file segnaposto con la foto reale **mantenendo lo stesso nome**.
2. In `data/images.ts` aggiornare il testo `alt` e mettere `placeholder: false`.

Next.js ridimensiona e converte automaticamente le immagini (AVIF/WebP) per ogni schermo.
Non usare URL di Instagram: i link alle immagini di Instagram sono temporanei.
Elenco dettagliato: `docs/FOTO-DA-IMPORTARE.md`.

### Logo

`components/ui/Logo.tsx` contiene un logotipo testuale provvisorio. Con il logo
ufficiale in SVG: salvarlo in `public/brand/logo.svg` e usarlo nel componente.

### Prima della pubblicazione definitiva

- [ ] Tutti i campi di `site.ts` compilati e confermati dalla pizzeria
- [ ] Menu reale inserito e `isDemo: false`
- [ ] Foto reali con diritti verificati, `placeholder: false`
- [ ] Testi validati dalla pizzeria
- [ ] Informativa privacy e cookie completate e verificate da un professionista
- [ ] `showTodoNotes: false` in `site.ts` (nasconde le note editoriali)
- [ ] `npm run build` senza errori

## 4. SEO, accessibilità, prestazioni

- Titoli e meta description per pagina, URL puliti, canonical, Open Graph e Twitter card.
- `sitemap.xml` e `robots.txt` generati automaticamente; le anteprime Vercel non vengono indicizzate.
- Dati strutturati `Restaurant` (schema.org) generati **solo con i dati compilati**: nessun
  orario, foto o menu inventato.
- HTML semantico, un solo `h1` per pagina, link "Vai al contenuto", focus visibile,
  menu mobile accessibile da tastiera (Esc per chiudere), area di tocco ≥ 44 px.
- Animazioni leggere disattivate con "riduci movimento" del sistema; i contenuti restano
  visibili anche senza JavaScript.
- Immagini responsive con lazy loading (eccetto la hero, caricata subito), font ospitati
  sul dominio del sito.

## 5. Privacy e cookie

- Il sito **non ha moduli** e non raccoglie dati: nessuna prenotazione, ordine o pagamento simulato.
  I contatti avvengono tramite telefono e WhatsApp.
- Nessuno strumento di statistica o marketing installato, quindi nessun banner di consenso.
- Google Maps viene caricato **solo dopo il clic** su "Mostra la mappa".
- Le pagine `/privacy` e `/cookie` sono **strutture da completare e far verificare**:
  il sito non dichiara di essere conforme.
- Se in futuro si aggiungono Google Analytics, Meta Pixel o simili, va prima integrato
  un sistema di gestione del consenso e aggiornata la cookie policy.

## 6. Pubblicazione su Vercel

1. Creare un account su https://vercel.com (anche con GitHub).
2. Caricare il progetto su un repository GitHub (privato va bene):
   ```bash
   git init && git add . && git commit -m "Sito Lievito Sfizio"
   git branch -M main
   git remote add origin https://github.com/<account>/lievitosfizio.git
   git push -u origin main
   ```
   **Attenzione al caricamento:** non selezionare i singoli file con "Add file → Upload files"
   di GitHub: in quel modo le cartelle vengono perse. Usare `git push` (sopra), GitHub Desktop,
   oppure trascinare **le cartelle** (non i file) nella pagina di upload. Dopo il caricamento,
   nella pagina del repository devono comparire le cartelle `app`, `components`, `data`, `lib`,
   `public` e, nella root, `package.json`.
3. Su Vercel: **Add New… → Project** → importare il repository.
   Il framework "Next.js" viene riconosciuto automaticamente; lasciare i comandi predefiniti
   e la "Root Directory" vuota (la root del repository contiene già `package.json`).
4. In **Environment Variables** aggiungere `NEXT_PUBLIC_SITE_URL` = `https://lievitosfizio.it`
   (ambiente Production).
5. **Deploy**. Al termine Vercel fornisce un indirizzo `*.vercel.app` per controllare il sito.
6. Ogni `git push` sul ramo `main` pubblica automaticamente una nuova versione.

In alternativa senza GitHub: `npm i -g vercel`, poi `vercel` nella cartella del progetto
e `vercel --prod` per la produzione.

## 7. Collegare il dominio lievitosfizio.it (acquistato su Aruba)

> I valori dei record DNS **vanno copiati da Vercel**: non usare valori trovati altrove.

1. Vercel → progetto → **Settings → Domains** → aggiungere `lievitosfizio.it` e
   `www.lievitosfizio.it`. Vercel propone di reindirizzare una delle due versioni sull'altra:
   accettare (es. `www` → `lievitosfizio.it`).
2. Vercel mostra per ciascun dominio i record da creare (di norma un record **A** per
   `lievitosfizio.it` e un record **CNAME** per `www`), con i valori esatti.
3. Accedere all'area clienti di **Aruba** → gestione del dominio → sezione di gestione
   **DNS** del dominio.
4. Creare/modificare i record **esattamente** come indicato da Vercel. Eliminare o sostituire
   eventuali record A/CNAME già presenti per `@` (dominio principale) e `www` che puntano
   all'hosting Aruba, altrimenti entrano in conflitto.
5. **Non toccare i record MX** se la pizzeria usa la posta Aruba (altrimenti le email smettono
   di funzionare).
6. Attendere la propagazione (da pochi minuti a 24–48 ore). In Vercel → Domains lo stato
   diventa "Valid Configuration" e il certificato HTTPS viene emesso automaticamente.

Alternativa: Vercel può indicare di usare i propri **nameserver**; in quel caso si cambiano
i nameserver del dominio dal pannello Aruba, ma tutti i record (incluse le email) andranno
poi gestiti su Vercel. Per chi usa la posta Aruba è più semplice la strada dei record A/CNAME.

## 8. Cosa è stato verificato e cosa no

Preparazione e correzione della struttura sono state fatte in un ambiente senza accesso al
registro npm e senza accesso al repository GitHub:

- **Verificato:** tutti i 97 import interni puntano a file esistenti; struttura `app/` + `components/` + `data/` + `lib/` + `public/` nella root;
  risoluzione di tutti gli import (alias `@/*` → root) e degli import delle 14 immagini in
  `public/images/`; rendering di tutte le pagine (`/`, `/menu`, `/privacy`, `/cookie`, 404) con
  React 19 e Tailwind CSS 4 (moduli `next/*` sostituiti da stub), senza errori in console e
  senza scorrimento orizzontale a 390 px e 1440 px.
- **Non eseguito:** `npm install`, `npm run build` di Next.js, type-check TypeScript completo,
  deploy su Vercel. Eseguire `npm install && npm run build` prima di pubblicare.

Per ricollocare file eventualmente "appiattiti" vedi `docs/RIPRISTINO-STRUTTURA.md`.
