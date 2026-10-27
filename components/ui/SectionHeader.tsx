import type { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeader({
  index,
  eyebrow,
  title,
  intro,
  tone = "dark",
  id,
  className = "",
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "dark" | "light";
  id?: string;
  className?: string;
}) {
  const muted = tone === "light" ? "text-ivory/70" : "text-ink-soft";
  return (
    <Reveal className={className}>
      <p className={`eyebrow flex items-center gap-3 ${tone === "light" ? "text-ivory/80" : "text-tomato"}`}>
        <span className="font-display text-base font-normal tracking-normal normal-case italic">{index}</span>
        <span aria-hidden="true" className={`h-px w-8 ${tone === "light" ? "bg-ivory/40" : "bg-tomato/40"}`} />
        {eyebrow}
      </p>
      <h2 id={id} className="mt-5 text-title">
        {title}
      </h2>
      {intro && <div className={`mt-6 max-w-xl text-[1.08rem] ${muted}`}>{intro}</div>}
    </Reveal>
  );
}
