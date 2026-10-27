import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage } from "@/components/LegalPage";
import { TodoNote } from "@/components/ui/TodoNote";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Informativa privacy",
  description: `Informativa sul trattamento dei dati personali del sito di ${site.name}.`,
  alternates: { canonical: "/privacy" },
};

/**
 * STRUTTURA DI INFORMATIVA — BOZZA DA COMPLETARE E FAR VERIFICARE.
 * Questo testo non costituisce consulenza legale né attesta la conformità
 * del sito al GDPR (Reg. UE 2016/679) o al D.Lgs. 196/2003.
 */
export default function PrivacyPage() {
  const L = site.legal;
  const missing = (label: string) => <TodoNote variant="inline">{label}</TodoNote>;

  return (
    <LegalPage title="Informativa privacy">
      <TodoNote>
        Bozza strutturale da completare con i dati reali del titolare e da far verificare da un professionista prima
        della pubblicazione. Il sito non dichiara la propria conformità normativa finché la verifica non è stata
        effettuata.
      </TodoNote>

      <h2>Titolare del trattamento</h2>
      <p>
        {L.companyName || missing("Ragione sociale")} — {L.registeredOffice || missing("Sede legale")} — P.IVA{" "}
        {L.vatNumber || missing("Partita IVA")}. Contatto per richieste privacy: {L.privacyEmail || missing("Email")}.
      </p>

      <h2>Quali dati raccoglie questo sito</h2>
      <p>
        Il sito ha finalità informative e <strong>non contiene moduli di contatto, prenotazione, ordine o pagamento</strong>.
        Non vengono quindi raccolti tramite il sito dati personali inseriti dagli utenti.
      </p>
      <ul>
        <li>
          <strong>Dati di navigazione:</strong> i sistemi informatici del fornitore di hosting possono registrare dati
          tecnici (ad esempio indirizzo IP, data e ora della richiesta, pagina visitata) necessari al funzionamento e
          alla sicurezza del servizio. {missing("Indicare fornitore di hosting, luogo del trattamento e tempi di conservazione")}
        </li>
        <li>
          <strong>Contatti telefonici e WhatsApp:</strong> i pulsanti &quot;Chiama&quot; e &quot;WhatsApp&quot; aprono
          rispettivamente l&apos;app telefono e WhatsApp sul dispositivo dell&apos;utente. Le conversazioni avvengono
          fuori dal sito; i dati eventualmente comunicati sono trattati dal titolare per rispondere alle richieste.
          {" "}{missing("Descrivere finalità, base giuridica e conservazione")}
        </li>
        <li>
          <strong>Google Maps:</strong> la mappa viene caricata solo se l&apos;utente la richiede espressamente. Da quel
          momento si applica l&apos;informativa di Google. Vedi la <Link href="/cookie">cookie policy</Link>.
        </li>
        <li>
          <strong>Link a Instagram:</strong> aprendo il profilo Instagram si accede a un servizio di terzi, soggetto alla
          relativa informativa.
        </li>
      </ul>

      <h2>Diritti dell&apos;interessato</h2>
      <p>
        L&apos;interessato può esercitare i diritti previsti dagli artt. 15–22 del Regolamento (UE) 2016/679 (accesso,
        rettifica, cancellazione, limitazione, opposizione, portabilità) scrivendo al titolare, e ha diritto di proporre
        reclamo al Garante per la protezione dei dati personali.
      </p>
      <TodoNote>
        Completare con: basi giuridiche per ciascuna finalità, eventuali destinatari, trasferimenti extra-UE, tempi di
        conservazione, data di aggiornamento.
      </TodoNote>
    </LegalPage>
  );
}
