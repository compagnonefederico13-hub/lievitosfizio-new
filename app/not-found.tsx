import { ButtonLink } from "@/components/ui/ButtonLink";
import { DoughMark } from "@/components/ui/Logo";

export default function NotFound() {
  return (
    <section className="flex min-h-[100svh] items-center bg-cream pt-24 pb-32">
      <div className="container-site max-w-2xl text-center">
        <DoughMark className="mx-auto h-14 w-14 text-crust" />
        <p className="eyebrow mt-8 text-tomato">Errore 404</p>
        <h1 className="mt-4 text-title">
          Questa pagina <em className="text-tomato italic">non è lievitata.</em>
        </h1>
        <p className="mx-auto mt-6 max-w-md text-lg text-ink-soft">
          Il link potrebbe essere sbagliato o la pagina non esiste più. Ripartiamo da qualcosa di buono.
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="/">Torna alla home</ButtonLink>
          <ButtonLink href="/menu" variant="secondary">
            Guarda il menu
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
