/** Etichetta che segnala in modo inequivocabile i contenuti dimostrativi del menu. */
export function DemoBadge({ className = "" }: { className?: string }) {
  return (
    <p
      className={`inline-flex items-center gap-2 rounded-full border border-dashed border-tomato/60 bg-ivory px-4 py-2 text-[0.8rem] font-semibold text-tomato-dark ${className}`}
    >
      <span aria-hidden="true" className="h-2 w-2 rounded-full bg-tomato" />
      Contenuti dimostrativi: non è il menu reale
    </p>
  );
}
