# Foto da importare — Lievito Sfizio

Analisi del profilo pubblico https://www.instagram.com/lievitosfizio/ effettuata il **27/10/2026**
senza login: erano visibili **solo i 12 post più recenti**. I post più vecchi vanno controllati
direttamente dall'account della pizzeria.

Le foto **non sono state scaricate**: vanno richieste alla pizzeria in versione originale
(non lo screenshot né il file compresso di Instagram) e copiate in `public/images/`
**con il nome indicato**, sovrascrivendo il segnaposto.

## Prima di usare qualsiasi foto

- [ ] La pizzeria conferma di avere i diritti per ripubblicarla sul sito (foto proprie o
      autorizzazione scritta del fotografo).
- [ ] Per le persone riconoscibili (staff, clienti) c'è il consenso alla pubblicazione sul sito.
- [ ] File originale, orizzontale o verticale come indicato, lato lungo almeno **2000 px**
      per la hero e **1400 px** per le altre, formato JPG.
- [ ] Nessun filtro pesante: colori fedeli al prodotto reale.
- [ ] Dopo la sostituzione: aggiornare il testo `alt` e impostare `placeholder: false`
      in `data/images.ts`.

## Corrispondenze suggerite

| File nel sito | Formato | Post Instagram di riferimento | Note |
|---|---|---|---|
| `hero-pizza.jpg` | orizzontale 3:2 | https://www.instagram.com/p/De1XU-_kc9r/ (23/10/2026) | Primo piano di pizza con crema gialla e radicchio: è la foto di pizza più forte tra quelle visibili. Serve l'originale ad alta risoluzione con più "aria" intorno, perché su smartphone viene ritagliata al centro. |
| `gallery-02-fritti.jpg` | orizzontale 4:3 | https://www.instagram.com/p/DerEJepAdeg/ (19/10/2026) | Fritto dorato su carta: ottimo per la sezione Friggitoria. |
| `la-casa-sala.jpg` | verticale 4:5 | Reel https://www.instagram.com/reel/Dewu97XDx-6/ (21/10/2026) | Mostra la sala (pareti in legno, sedie impagliate bianche, pavimento in cotto). Meglio una foto della sala senza persone, scattata appositamente. |
| `gallery-06-sala.jpg` | orizzontale 4:3 | Reel https://www.instagram.com/reel/De9t00FDDO-/ (26/10/2026) | Due persone al tavolo nella sala con l'insegna sul muro. Serve un fotogramma ad alta qualità e il consenso delle persone ritratte. |
| `gallery-07-pizzaiolo.jpg` | verticale 4:5 | Reel https://www.instagram.com/reel/Dej3AZaDPY1/ (16/10/2026) | Il pizzaiolo con una pizza al radicchio. Fotogramma o foto originale + consenso. |
| `pizza-01.jpg`, `pizza-02.jpg`, `pizza-03.jpg` | verticale 4:5 | Non presenti tra i 12 post visibili | Tre pizze diverse, preferibilmente quelle che compariranno nella selezione in homepage. |
| `impasto-mani.jpg`, `gallery-03-impasto.jpg` | verticale 4:5 | Non presenti | Mani che stendono l'impasto; panetti in lievitazione. |
| `gallery-01-pizza-dettaglio.jpg` | verticale 4:5 | Non presente | Dettaglio del cornicione. |
| `gallery-04-ingredienti.jpg` | verticale 4:5 | Non presente | Ingredienti sul banco. |
| `gallery-05-forno.jpg` | orizzontale 4:3 | Non presente | Il forno con una pizza in cottura. |
| `gallery-08-tavola.jpg` | orizzontale 4:3 | Non presente | Più pizze sulla stessa tavola. |

## Da non usare come foto del sito

Locandine ed eventi (contengono testo e date): `De_zgfoFG97` (menu della domenica),
`De9R1wWjQRF` e `DeRdUGGH3Pr` (serate karaoke), `DegwKumgsq2` (tombolata).
Le foto di tagliata (`DeeMLPAD7yx`) e di un piatto con crudo (reel `DeEcR5jjOdM`) non sono pizze:
utilizzabili solo se la pizzeria vuole dare spazio anche alla cucina.

## Altri materiali da richiedere

- **Logo ufficiale in vettoriale** (SVG o PDF): il sito usa un logotipo testuale provvisorio
  (`components/ui/Logo.tsx`).
- Eventuale servizio fotografico dedicato: con 6–8 scatti buoni (pizze, impasto, forno, sala)
  il sito raggiunge il livello visivo previsto dal design.
