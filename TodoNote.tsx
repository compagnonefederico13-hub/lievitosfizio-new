import type { ReactNode } from "react";
import { site } from "@/data/site";

/**
 * Segnaposto ben visibile per contenuti da completare o validare con la pizzeria.
 * - `inline`: piccola etichetta accanto a un dato mancante (sempre visibile).
 * - `block`: nota editoriale; nascosta quando site.showTodoNotes = false.
 */
export function TodoNote({
  children,
  variant = "block",
  tone = "dark",
  className = "",
}: {
  children: ReactNode;
  variant?: "inline" | "block";
  tone?: "dark" | "light";
  className?: string;
}) {
  const colors =
    tone === "light" ? "border-ivory/50 text-ivory/90 bg-ivory/5" : "border-tomato/50 text-tomato-dark bg-tomato/[0.04]";

  if (variant === "inline") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded-full border border-dashed px-2.5 py-0.5 text-[0.78rem] font-medium ${colors} ${className}`}
      >
        <span aria-hidden="true">✎</span>
        {children}
      </span>
    );
  }

  if (!site.showTodoNotes) return null;

  return (
    <p
      role="note"
      className={`rounded-lg border border-dashed px-4 py-3 text-[0.85rem] leading-snug ${colors} ${className}`}
    >
      <strong className="font-semibold">Da completare · </strong>
      {children}
    </p>
  );
}
