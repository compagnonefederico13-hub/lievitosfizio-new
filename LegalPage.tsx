import type { ReactNode } from "react";

export function LegalPage({ title, updated, children }: { title: string; updated?: string; children: ReactNode }) {
  return (
    <article className="bg-ivory pt-32 pb-24 sm:pt-40">
      <div className="container-site max-w-3xl">
        <h1 className="text-title">{title}</h1>
        {updated && <p className="mt-3 text-sm text-ink-soft">Ultimo aggiornamento: {updated}</p>}
        <div className="legal mt-10 space-y-5 text-[1rem] leading-relaxed text-ink-soft [&_a]:text-tomato [&_a]:underline [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-[1.6rem] [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-ink">
          {children}
        </div>
      </div>
    </article>
  );
}
