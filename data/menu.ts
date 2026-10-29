/**
 * MENU LIEVITO SFIZIO — ricostruito dal PDF fornito.
 * Prezzi non verificati restano null e vengono mostrati come "Prezzo da confermare".
 * Prima della pubblicazione controllare i dati trascritti dal PDF.
 */

export type MenuItem = {
  name: string;
  description?: string;
  /** Prezzo in euro; null quando da confermare o non applicabile. */
  price: number | null;
  tags?: Array<"senza-glutine-su-richiesta" | "piccante" | "vegetariana" | "novita">;
  featured?: boolean;
  image?: "pizza01" | "pizza02" | "pizza03";
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menu: { isDemo: boolean; footnotes: string[]; categories: MenuCategory[] } = {
  isDemo: false,
  footnotes: [
    "Supplementi indicati: senza glutine +€ 0,50 per sfizi/bruschette e +€ 2,00 per pizza; mozzarella senza lattosio +€ 1,50.",
    "Per allergie o intolleranze avvisare il personale al momento dell’ordine. Il PDF non associa allergeni specifici a ogni singolo piatto.",
    "Allergeni indicati: cereali contenenti glutine, crostacei, uova, pesce, latte, arachidi, soia, frutta a guscio, sedano, senape, semi di sesamo, anidride solforosa e solfiti, lupini, molluschi."
  ],
  categories: [
    {
      id: "coperto",
      title: "Coperto",
      items: [
        { name: "Coperto", price: 2.0 }
      ]
    },
    {
      id: "meat-corner",
      title: "Meat corner",
      note: "Gradi di cottura: quasi cruda 35–49°C; al sangue 50–54°C; media al sangue 55–59°C; media 60–64°C; ben cotta 65–70°C.",
      items: [
        { name: "Entrecote Black Angus Argentino", description: "Prezzo all’etto", price: 10.0 },
        { name: "Controfiletto Black Angus Uruguay", description: "Prezzo all’etto", price: 7.0 },
        { name: "T-Bone Holstein Frisona Polonia", description: "Prezzo all’etto", price: 7.0 },
        { name: "Tagliata Black Angus Uruguay 250 g", description: "Rucola, pomodorino datterino, scaglie di Bruna Alpina, aceto balsamico. Prezzo indicato all’etto.", price: 7.0 },
        { name: "Tegamino salsicce, friarielli e provola", price: 12.0 },
        { name: "Polpettine Chianina", description: "8 pezzi", price: 8.0 },
        { name: "Braciata mista", description: "Entrecote argentino, controfiletto Uruguay, T-Bone Polonia, 4 salsicce di maiale, polpette Chianina, con patate fritte e insalata mista", price: 80.0 }
      ]
    },
    {
      id: "antipasti",
      title: "Antipasti",
      items: [
        { name: "Caprese", description: "Mozzarella di bufala campana D.O.P., pomodoro datterino, origano del Monte Saro, olio EVO del Cilento D.O.P.", price: 10 },
        { name: "All'italiana", description: "Mozzarella di bufala campana D.O.P., prosciutto crudo irpino, olive verdi", price: 12 },
        { name: "Ortolano", description: "Mozzarella di bufala campana D.O.P., melanzane a funghetto, peperoni fritti, zucchine alla scapece", price: 12 },
        { name: "Il Tagliere Lievito Sfizio x2", description: "Mortadella Bonfatti, prosciutto crudo irpino, salame irpino dolce/piccante, provolone del Monaco, stravecchio di Bruna Alpina, tarallo ’nsogn e pepe, olive nere caiazzane", price: 25 }
      ]
    },
    {
      id: "insalatone",
      title: "Insalatone",
      items: [
        { name: "Insalata mista", description: "Insalata verde, rucola, radicchio, pomodorino, mais", price: 8 },
        { name: "Ciliegina", description: "Insalata mista, julienne di carote, melanzane arrostite, mozzarella di bufala, olive verdi", price: 10 },
        { name: "Ricca", description: "Insalata verde, pomodorini, mais, rucola, straccetti di pollo arrostito, scaglie di stravecchio di Bruna Alpina", price: 10 },
        { name: "Tonnata", description: "Insalata mista, filetti di tonno, cipolla fresca, fagioli, olive verdi, olive nere caiazzane", price: 10 },
        { name: "Affumicata", description: "Insalata mista, salmone affumicato, scaglie di stravecchio di Bruna Alpina, grattugiata di limone", price: 10 }
      ]
    },
    {
      id: "sfizi",
      title: "Sfizi",
      note: "Supplemento gluten free: +€ 0,50. *Prodotto surgelato.",
      items: [
        { name: "Lievitosfizio", description: "1 crocchè, 1 arancino, 1 frittatina di pasta, 1 polpetta S.F., 1 polpetta P.P., 1 frittatina della settimana, zeppoline", price: 12 },
        { name: "Crocchè", description: "Patate, provola, formaggio", price: 2 },
        { name: "Arancino", description: "Riso, piselli, carne, formaggio", price: 2 },
        { name: "Polpetta S.F.", description: "Friarielli, salsiccia, provola", price: 2.5 },
        { name: "Polpetta P.P.", description: "Pulled pork, cheddar con panatura di corn flakes", price: 3 },
        { name: "Frittatina di pasta", description: "Bucatini, carne macinata, piselli, besciamella", price: 3 },
        { name: "Frittatina della settimana", price: 3 },
        { name: "Zeppoline 10 pz.", price: 3 },
        { name: "Montanara Cilentana", description: "Pizza fritta con pomodoro San Marzano D.O.P., formaggio grattugiato, basilico, olio del Cilento D.O.P.", price: 3 },
        { name: "Montanara datterino giallo", description: "Pizza fritta con datterino giallo, cacioricotta del Cilento, pepe, basilico, olio EVO del Cilento D.O.P.", price: 4 },
        { name: "Montanara Genovese", description: "Pizza fritta con sugo alla genovese (carne e cipolle), stravecchio di Bruna Alpina grattugiato", price: 4 },
        { name: "Montanara di Bronte", description: "Pizza fritta con pesto al pistacchio di Bronte, mortadella Bonfatti, granella di pistacchio", price: 4 },
        { name: "Poker di Montanare", description: "Montanara Cilentana, Genovese, Bronte, datterino giallo", price: 12 },
        { name: "Banditos*", description: "Straccetti di pollo impanati, 6 pezzi", price: 7 },
        { name: "Chiacchiere di Pulcinella (x2/3 persone)", description: "Straccetti di pizza fritti con crema ai 4 formaggi, pomodorini datterino, funghi champignon piccanti", price: 10 },
        { name: "Scugnizzielli (x2/3 persone)", description: "Straccetti di pizza fritti, pomodorini datterino, rucola, mozzarella di bufala campana D.O.C.", price: 10 },
        { name: "Polpettine di carne chianina", description: "8 pezzi", price: 8 },
        { name: "Polpettine di carne chianina al limone", description: "8 pezzi", price: 8 }
      ]
    },
    {
      id: "patatine",
      title: "Patatine",
      note: "*Prodotto surgelato.",
      items: [
        { name: "Chips", description: "Sfoglie di patata fresca", price: 5 },
        { name: "Chips sale e limone", description: "Sfoglie di patata fresca", price: 6 },
        { name: "Chips crema ai 4 formaggi e bacon croccante", description: "Sfoglie di patata fresca", price: 7 },
        { name: "Patatine*", price: 5.5 },
        { name: "Patatine* + mozzarella + wurstel", price: 6.5 },
        { name: "Patatine* + provola + salsiccia", price: 7.5 },
        { name: "Patatine* pulled pork", description: "Con crema ai 4 formaggi", price: 7.5 },
        { name: "Patatine* salsa cheddar e bacon croccante", price: 7.5 }
      ]
    },
    {
      id: "bruschette",
      title: "Bruschette",
      note: "Supplemento gluten free per sfizi e bruschette: +€ 0,50.",
      items: [
        { name: "Completa", description: "Pomodorini freschi e mozzarella di bufala", price: 2.5 },
        { name: "F. M.", description: "Formaggio, friarielli e mayonese", price: 2.5 },
        { name: "Diavola", description: "Funghi piccanti", price: 2.5 },
        { name: "Funghetto", description: "Melanzane a funghetto", price: 2.5 },
        { name: "Nerano", description: "Zucchine alla scapece e provolone del Monaco", price: 2.5 },
        { name: "Pistacchio e Mortadella", price: 3 },
        { name: "Mix", description: "6 bruschette miste", price: 12 }
      ]
    },
    {
      id: "hamburger",
      title: "Hamburger",
      note: "Supplemento gluten free per sfizi e bruschette: +€ 0,50.",
      items: [
        { name: "Fiorentino", description: "Hamburger di Chianina 180 g, provola di Agerola alla piastra, mortadella Bonfatti, melanzane alla parmigiana, zucchine alla scapece", price: 15 },
        { name: "Bufalotto", description: "Hamburger di bufalo 180 g, mozzarella di bufala, pomodorini, rucola, scaglie di stravecchio di Bruna Alpina, servito su focaccia", price: 15 },
        { name: "Yankee", description: "Hamburger di Black Angus U.S.A. 180 g, cheddar alla piastra, bacon croccante, uovo, patatine fritte", price: 15 }
      ]
    },
    {
      id: "pizze-tradizionali",
      title: "Pizze - tradizionali",
      note: "Pizza gluten free: +€ 2,00. Mozzarella senza lattosio: +€ 1,50.",
      items: [
        { name: "Margherita", description: "Fior di latte di Agerola, pomodoro San Marzano D.O.P., olio EVO del Cilento D.O.P.", price: 6, featured: true, image: "pizza01" },
        { name: "Doc", description: "Mozzarella di bufala campana D.O.C., pomodoro San Marzano D.O.P., olio EVO del Cilento D.O.P.", price: 8.5, featured: true, image: "pizza02" },
        { name: "Marinara", description: "Pomodoro San Marzano D.O.P., aglio di Nubia, origano del Monte Saro, olio EVO del Cilento D.O.P.", price: 5.5, featured: true, image: "pizza03" },
        { name: "Cosacca", description: "Pomodoro San Marzano D.O.P., stravecchio di Bruna Alpina, olio EVO del Cilento D.O.P.", price: 5.5 },
        { name: "Diavola", description: "Fiordilatte di Agerola, pomodoro San Marzano D.O.P., salame piccante, olio EVO del Cilento D.O.P.", price: 7.5 },
        { name: "Capricciosa", description: "Fior di latte di Agerola, pomodoro San Marzano D.O.P., prosciutto cotto nazionale alta qualità, salame irpino, foglie di carciofo, funghi champignon, olive nere caiazzane, olio EVO del Cilento D.O.P.", price: 9 },
        { name: "Carabiniera", description: "Fior di latte di Agerola, pomodoro San Marzano D.O.P., aglio di Nubia, origano del Monte Saro, olive nere caiazzane, salame piccante, olio EVO del Cilento D.O.P.", price: 8.5 },
        { name: "Quattro stagioni", description: "Pomodoro San Marzano D.O.P., 1/4 funghi champignon, 1/4 foglie di carciofo, 1/4 prosciutto cotto nazionale alta qualità, 1/4 Margherita", price: 9 },
        { name: "Fresca", description: "Fiordilatte di Agerola, pomodorino datterino, olio EVO del Cilento D.O.P.", price: 7.5 },
        { name: "Bufala fresca", description: "Fiordilatte, pomodorini a crudo, olio e basilico.; € 9,50 (da verificare)", price: null }
      ]
    },
    {
      id: "pizze-speciali",
      title: "Pizze - speciali",
      note: "Pizza gluten free: +€ 2,00. Mozzarella senza lattosio: +€ 1,50.",
      items: [
        { name: "Grattugiata", description: "Fior di latte di Agerola, pesto di pistacchio di Bronte D.O.P., limone grattugiato, stravecchio di Bruna Alpina grattugiato, granella di pistacchio, basilico, olio EVO del Cilento D.O.P.", price: 10 },
        { name: "Lievitosfizio", description: "Cornicione ripieno di ricotta, pomodoro San Marzano D.O.P., polpette di Chianina, pomodorino pelato al forno, stravecchio di Bruna Alpina grattugiato, olio EVO del Cilento D.O.P.", price: 13 },
        { name: "Mortazza", description: "Fiordilatte di Agerola, pesto di pistacchio di Bronte D.O.P., mortadella Bonfatti, granella di pistacchio, olio EVO del Cilento D.O.P.", price: 13 },
        { name: "Genovese", description: "Fior di latte di Agerola, salsa genovese home made, stravecchio di Bruna Alpina grattugiato, olio EVO del Cilento D.O.P.", price: 13 },
        { name: "Pulled Pork", description: "Provola di Agerola, patate al forno, pulled pork, salsa cheddar, olio EVO del Cilento D.O.P.", price: 12 },
        { name: "Tarallo", description: "Provola di Agerola, vellutata di friarielli, salsiccia, tarallo sbriciolato di Norvigold, 'nsogn e pepe, olio EVO del Cilento D.O.P.", price: 12 },
        { name: "Lasagna", description: "Provola, ricotta, pomodoro, polpette di Chianina, salame dolce, prosciutto cotto, stravecchio di Bruna Alpina grattugiato, olio EVO del Cilento D.O.P.", price: 13 },
        { name: "Lemon", description: "Fior di latte di Agerola, stravecchio di Bruna Alpina grattugiato, filetti di salmone affumicato, rucola, limone, olio EVO del Cilento D.O.P.", price: 12 },
        { name: "Zafferana", description: "Fior di latte di Agerola, funghi porcini, salsiccia, crema allo zafferano, radicchio, olio EVO del Cilento D.O.P.", price: 12 }
      ]
    },
    {
      id: "pizze-bianche",
      title: "Pizze - bianche",
      note: "Pizza gluten free: +€ 2,00. Mozzarella senza lattosio: +€ 1,50.",
      items: [
        { name: "Saracena", description: "Fior di latte di Agerola, wurstel, patate fritte", price: 8.5 },
        { name: "Crock", description: "Fior di latte di Agerola, panna, prosciutto cotto alta qualità, crocchè sbriciolato, olio EVO del Cilento D.O.P.", price: 8 },
        { name: "Quattro formaggi", description: "Fior di latte di Agerola, gorgonzola, stravecchio di Bruna Alpina, cacioricotta del Cilento, olio EVO del Cilento D.O.P.", price: 9 },
        { name: "Biancarosa", description: "Fior di latte di Agerola, prosciutto cotto nazionale alta qualità, panna, mais, olio EVO del Cilento D.O.P.", price: 7.5 },
        { name: "Delizia bianca", description: "Fior di latte di Agerola, prosciutto crudo irpino, rucola, stravecchio di Bruna Alpina a scaglie, olio EVO del Cilento D.O.P.", price: 10 },
        { name: "Affumicata", description: "Provola di Agerola, ricotta, speck, rucola, olio EVO del Cilento D.O.P.", price: 10 },
        { name: "Porcina", description: "Fiordilatte di Agerola, panna, funghi porcini, salsiccia, olio EVO del Cilento D.O.P.", price: 10 },
        { name: "Fresca gialla", description: "Provola di Agerola, pomodorino datterino giallo, cacioricotta del Cilento, pepe, olio EVO del Cilento D.O.P.", price: 11 },
        { name: "Nettuno", description: "Fior di latte di Agerola, filetti di tonno bianco, pomodorino datterino, cipolla ramata, olive nere caiazzane, olio EVO del Cilento D.O.P.", price: 10 },
        { name: "Chef", description: "Provola di Agerola, panna, prosciutto cotto alta qualità, funghi, stravecchio di Bruna Alpina grattugiato, olio EVO del Cilento D.O.P.", price: 8.5 },
        { name: "Fiocco al Salmone", description: "Provola di Agerola, panna, salmone, stravecchio di Bruna Alpina grattugiato, olio EVO del Cilento D.O.P.", price: 10 },
        { name: "P&F", description: "Provola di Agerola, porchetta di Ariccia, friarielli, olio EVO del Cilento D.O.P.", price: 10 },
        { name: "L'Ariccia", description: "Fior di latte di Agerola, porchetta di Ariccia, patate al forno, olio EVO del Cilento D.O.P.", price: 10 }
      ]
    },
    {
      id: "pizze-ripieni",
      title: "Pizze - ripieni",
      note: "Pizza gluten free: +€ 2,00. Mozzarella senza lattosio: +€ 1,50.",
      items: [
        { name: "Ripieno classico", description: "Fior di latte di Agerola, ricotta, pomodoro San Marzano D.O.P., prosciutto cotto nazionale alta qualità, salame irpino, olio EVO del Cilento D.O.P.", price: 9 },
        { name: "Ripieno fritto", description: "Fior di latte di Agerola, ricotta, cicoli, pepe, olio EVO del Cilento D.O.P.", price: 10 },
        { name: "Mezzaluna", description: "Metà Doc e metà Ripieno classico", price: 10 },
        { name: "Tronchetto", description: "Ripieno di fior di latte di Agerola, emmental, prosciutto crudo irpino, rucola, stravecchio di Bruna Alpina, olio EVO del Cilento D.O.P.", price: 10 },
        { name: "Troncopizza", description: "Metà datterino giallo, cacioricotta del Cilento, pepe e olio EVO del Cilento D.O.P.; metà tronchetto", price: 10 },
        { name: "Francesina", description: "Fior di latte di Agerola, ricotta, prosciutto cotto nazionale alta qualità, pomodorino datterino, mais, rucola, stravecchio di Bruna Alpina a scaglie, olio EVO del Cilento D.O.P.", price: 10 }
      ]
    },
    {
      id: "pizze-stagionali",
      title: "Pizze - stagionali",
      note: "Pizza gluten free: +€ 2,00. Mozzarella senza lattosio: +€ 1,50.",
      items: [
        { name: "Siciliana", description: "Provola di Agerola, pomodoro San Marzano, melanzane a funghetto, olio EVO del Cilento D.O.P.", price: 8 },
        { name: "Ortolana", description: "Fior di latte di Agerola, melanzane a funghetto, peperoni fritti, zucchine alla scapece, olio EVO del Cilento D.O.P.", price: 9 },
        { name: "Scarolina", description: "Provola di Agerola, scarole affogate, noci, olio EVO del Cilento D.O.P., in doppio disco di pasta", price: 13 },
        { name: "Nerano", description: "Provola di Agerola, vellutata di zucchine, zucchine, scaglie di provolone del Monaco, olio EVO del Cilento D.O.P.", price: 10 },
        { name: "Zucca", description: "Fiordilatte di Agerola, crema di zucca, bacon croccante, olio EVO del Cilento D.O.P.", price: 10 },
        { name: "S&F", description: "Fiordilatte di Agerola, salsiccia fresca di maialino nero, friarielli, olio EVO del Cilento D.O.P.", price: 10 },
        { name: "Parmigiana", description: "Fior di latte di Agerola, parmigiana di melanzane, salsiccia fresca di maialino nero, scaglie di stravecchio di Bruna Alpina, olio EVO del Cilento D.O.P.", price: 10 }
      ]
    },
    {
      id: "saltimbocca",
      title: "Saltimbocca",
      note: "Pizza gluten free: +€ 2,00. Mozzarella senza lattosio: +€ 1,50.",
      items: [
        { name: "Il Classico", description: "Provola di Agerola, prosciutto crudo irpino, melanzane arrostite", price: 10 },
        { name: "L'Americano", description: "Fior di latte di Agerola, wurstel, patatine fritte", price: 10 },
        { name: "Il Rustico", description: "Provola di Agerola, salsiccia, friarielli", price: 10 },
        { name: "Il Parmigiano", description: "Provola di Agerola, salsiccia, parmigiana di melanzane, scaglie di stravecchio di Bruna Alpina", price: 10 },
        { name: "'O Puork", description: "Provola di Agerola, pulled pork, patate al forno, salsa cheddar", price: 10 },
        { name: "Er Porchetta", description: "Provola di Agerola, porchetta, funghi", price: 10 },
        { name: "Il Gustoso", description: "Hamburger, cheddar, bacon, insalata, pomodorini, cipolle caramellate", price: 12 },
        { name: "Fattell tu", description: "Componi il tuo saltimbocca", price: null }
      ]
    },
    {
      id: "sweet-pizza",
      title: "Sweet pizza",
      items: [
        { name: "Pizza Nutella", description: "Nutella, biscotto sbriciolato, zucchero a velo, panna", price: 10 },
        { name: "Chiacchiere grappa e miele", description: "Grappa, miele, zucchero a velo", price: 10 },
        { name: "Una tira l'altra", description: "Graffette, zucchero e Nutella", price: 10 }
      ]
    },
    {
      id: "birre-artigianali-nartigiana",
      title: "Birre artigianali N'artigiana",
      items: [
        { name: "Senza glutine", description: "33 cl · 4,8% vol.", price: 5.5 },
        { name: "Bianca", description: "33 cl · 4,5% vol.", price: 5.5 },
        { name: "Oro", description: "33 cl · 4,8% vol.", price: 5.5 },
        { name: "Rossa", description: "33 cl · 5,0% vol.", price: 5.5 },
        { name: "Ambrata", description: "33 cl · 5,8% vol.", price: 5.5 },
        { name: "Doppio malto", description: "33 cl · 7,0% vol.", price: 5.5 }
      ]
    },
    {
      id: "bevande",
      title: "Bevande",
      items: [
        { name: "Natia 0,75 cl", price: 2.5 },
        { name: "Ferrarelle 0,75 cl", price: 2.5 },
        { name: "Pepsi", description: "33 cl, vetro", price: 2.5 },
        { name: "Pepsi Zero", description: "33 cl, vetro", price: 2.5 },
        { name: "Aranciata Ferrarelle 33 cl", description: "33 cl, lattina", price: 2.5 },
        { name: "7Up", description: "33 cl, lattina", price: 2.5 }
      ]
    },
    {
      id: "vini-bollicine",
      title: "Vini - bollicine",
      items: [
        { name: "Prosecco Valdobbiadene", description: "Bottiglia € 15,00 · calice € 5,00", price: 15 },
        { name: "Spumante Berlucchi", description: "Bottiglia", price: 25 },
        { name: "Spumante Ferrari", description: "Bottiglia", price: 35 }
      ]
    },
    {
      id: "vini-bianchi",
      title: "Vini - bianchi",
      items: [
        { name: "Coda di Volpe Masseria Frattasi", description: "Bottiglia € 20,00 · calice € 7,00", price: 20 },
        { name: "Falanghina Mustilli", description: "Bottiglia € 20,00 · calice € 7,00", price: 20 },
        { name: "Marsia Cantine Barone", description: "Bottiglia € 16,00 · calice € 6,00", price: 16 },
        { name: "Katà Cantine Olivella", description: "Bottiglia", price: 20 },
        { name: "Falanghina Pridie", description: "Bottiglia € 15,00 · calice € 5,00", price: 15 }
      ]
    },
    {
      id: "vini-rossi",
      title: "Vini - rossi",
      items: [
        { name: "Piedirosso Cantine Olivella", description: "Bottiglia € 25,00 · calice € 9,00", price: 25 },
        { name: "Aglianico Cantine Barone", description: "Bottiglia € 18,00 · calice € 6,00", price: 18 },
        { name: "Gragnano Mariano Sabatini", description: "Bottiglia € 18,00 · calice € 6,00", price: 18 },
        { name: "Marsia Cantine Barone", description: "Bottiglia € 16,00 · calice € 5,00", price: 16 },
        { name: "Primitivo Cantine Barone", description: "Bottiglia € 25,00 · calice € 9,00", price: 25 },
        { name: "Primitivo Pridie", description: "Bottiglia € 15,00 · calice € 5,00", price: 15 }
      ]
    },
    {
      id: "liquori-e-distillati",
      title: "Liquori e distillati",
      items: [
        { name: "Limoncello - Meloncello - Liquirizia", price: 5 },
        { name: "Amaro (Lucano)", price: 4 },
        { name: "Amaro (Del Capo - Jagermeister - Petrus)", price: 5 },
        { name: "Amaro (Jefferson)", price: 6 },
        { name: "Grappa bianca", price: 6 },
        { name: "Grappa barrique", price: 7 },
        { name: "Caffè espresso", price: 1 }
      ]
    },
  ],
};

export const tagLabels: Record<NonNullable<MenuItem["tags"]>[number], string> = {
  "senza-glutine-su-richiesta": "Senza glutine",
  piccante: "Piccante",
  vegetariana: "Vegetariana",
  novita: "Novità",
};

export const formatPrice = (value: number | null) =>
  value === null
    ? "Prezzo da confermare"
    : new Intl.NumberFormat("it-IT", { style: "currency", currency: "EUR" }).format(value);
