import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { TodoNote } from "@/components/ui/TodoNote";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Cookie policy",
  description: `Informazioni sui cookie e sugli strumenti di terze parti del sito di ${site.name}.`,
  alternates: { canonical: "/cookie" },
};

/**
 * STRUTTURA DI COOKIE POLICY — BOZZA DA VERIFICARE.
 * Descrive il comportamento del codice così come consegnato. Se in futuro si
 * aggiungono strumenti di statistica, marketing o pixel social, è necessario
 * introdurre un sistema di gestione del consenso PRIMA di attivarli e
 * aggiornare questa pagina.
 */
export default function CookiePage() {
  return (
    <LegalPage title="Cookie policy">
      <TodoNote>
        Bozza da verificare con un professionista e da aggiornare a ogni modifica degli strumenti utilizzati dal sito.
      </TodoNote>

      <h2>Cookie utilizzati da questo sito</h2>
      <p>
        Nella versione attuale il codice del sito <strong>non installa cookie di profilazione né strumenti di
        statistica o marketing</strong> e non utilizza la memoria del browser per tracciare gli utenti. Per questo motivo
        non viene mostrato un banner di consenso.
      </p>
      <TodoNote>
        Verificare dopo la pubblicazione, con gli strumenti per sviluppatori del browser, che non vengano impostati cookie
        (inclusi eventuali cookie tecnici dell&apos;hosting) e documentarli qui se presenti.
      </TodoNote>

      <h2>Contenuti di terze parti</h2>
      <ul>
        <li>
          <strong>Google Maps</strong> — la mappa nella sezione contatti viene caricata solo dopo un clic sul pulsante
          &quot;Mostra la mappa&quot;. Prima di quel momento il sito non contatta i server di Google. Dopo il caricamento,
          Google può impostare cookie e raccogliere dati secondo la propria informativa (
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
            policies.google.com/privacy
          </a>
          ). La scelta non viene memorizzata: a ogni visita la mappa resta disattivata finché non la si richiede.
        </li>
        <li>
          <strong>Indicazioni stradali, WhatsApp e Instagram</strong> — sono semplici collegamenti che aprono servizi
          esterni in una nuova scheda o nell&apos;app corrispondente; nessun contenuto di questi servizi è incorporato
          nelle pagine.
        </li>
        <li>
          <strong>Font</strong> — i caratteri tipografici sono ospitati sullo stesso dominio del sito: non vengono
          richiesti a server esterni durante la navigazione.
        </li>
      </ul>

      <h2>Come gestire i cookie</h2>
      <p>
        Puoi eliminare o bloccare i cookie dalle impostazioni del tuo browser. Per il trattamento dei dati personali
        consulta l&apos;<Link href="/privacy">informativa privacy</Link>.
      </p>
    </LegalPage>
  );
}
