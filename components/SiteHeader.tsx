"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "@/components/ui/Logo";
import { CloseIcon, InstagramIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/Icons";
import { links } from "@/lib/links";
import { site } from "@/data/site";
import { navItems } from "@/data/nav";


export function SiteHeader() {
  const pathname = usePathname();
  const overHero = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Chiudi il menu al cambio pagina
  useEffect(() => setOpen(false), [pathname]);

  // Blocca lo scroll, gestisci Esc e il focus quando il menu mobile è aperto
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("[data-autofocus]")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "Tab" && panelRef.current) {
        const f = panelRef.current.querySelectorAll<HTMLElement>("a, button");
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
      toggleRef.current?.focus();
    };
  }, [open]);

  const solid = scrolled || !overHero;
  const tone = solid ? "dark" : "light";

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,color] duration-500 ${
        solid ? "bg-ivory/92 text-ink shadow-[0_1px_0_var(--color-line)] backdrop-blur-md" : "bg-transparent text-ivory"
      }`}
    >
      <a
        href="#contenuto"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-ivory"
      >
        Vai al contenuto
      </a>
      <div className="container-site flex h-[4.5rem] items-center justify-between gap-6">
        <Logo tone={tone} />

        <nav aria-label="Navigazione principale" className="hidden lg:block">
          <ul className="flex items-center gap-8 text-[0.92rem] font-medium">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="relative py-2 after:absolute after:inset-x-0 after:bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:after:scale-x-100"
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          {links.tel && (
            <a
              href={links.tel}
              className={`hidden min-h-11 items-center gap-2 rounded-full px-5 text-[0.9rem] font-semibold transition-colors sm:inline-flex ${
                solid ? "bg-tomato text-ivory hover:bg-tomato-dark" : "bg-ivory text-ink hover:bg-cream"
              }`}
            >
              <PhoneIcon width={16} height={16} />
              {site.phone.display}
            </a>
          )}
          <button
            ref={toggleRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Chiudi il menu" : "Apri il menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden="true" className="flex w-6 flex-col gap-[5px]">
              <span className="h-[1.5px] w-full bg-current" />
              <span className="h-[1.5px] w-4 self-end bg-current" />
            </span>
          </button>
        </div>
      </div>
    </header>

      {/* Menu mobile a schermo intero (fuori dall'header: il backdrop-filter
          dell'header creerebbe un contenitore per gli elementi fixed) */}
      <div
        id="menu-mobile"
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        hidden={!open}
        className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink text-ivory lg:hidden"
      >
        <div className="container-site flex h-[4.5rem] shrink-0 items-center justify-between">
          <Logo tone="light" />
          <button
            type="button"
            data-autofocus=""
            onClick={() => setOpen(false)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-ivory/25"
            aria-label="Chiudi il menu"
          >
            <CloseIcon />
          </button>
        </div>
        <nav aria-label="Navigazione mobile" className="container-site flex-1 pt-8">
          <ol className="space-y-1">
            {navItems.map((item, i) => (
              <li key={item.href} className="border-b border-ivory/10">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline gap-4 py-4 font-display text-[2.2rem] leading-none"
                >
                  <span className="font-sans text-xs tracking-widest text-crust">0{i + 1}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ol>
        </nav>
        <div className="container-site grid shrink-0 gap-3 pt-8 pb-[max(2rem,env(safe-area-inset-bottom))]">
          {links.tel && (
            <a href={links.tel} className="flex min-h-13 items-center justify-center gap-2 rounded-full bg-tomato px-6 py-3.5 font-semibold">
              <PhoneIcon /> Chiama {site.phone.display}
            </a>
          )}
          {links.whatsapp && (
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-13 items-center justify-center gap-2 rounded-full border border-ivory/40 px-6 py-3.5 font-semibold"
            >
              <WhatsAppIcon /> Scrivici su WhatsApp
            </a>
          )}
          {links.instagram && (
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-12 items-center justify-center gap-2 text-sm text-ivory/75"
            >
              <InstagramIcon width={18} height={18} /> @lievitosfizio
            </a>
          )}
        </div>
      </div>
    </>
  );
}
