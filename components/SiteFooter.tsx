import Link from "next/link";
import { Logo } from "./ui/Logo";
import { TodoNote } from "./ui/TodoNote";
import { InstagramIcon } from "./ui/Icons";
import { site } from "@/data/site";
import { addressLine, links } from "@/lib/links";
import { navItems } from "@/data/nav";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink pb-28 text-ivory/80 lg:pb-0">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div className="space-y-5">
          <Logo tone="light" />
          <p className="max-w-sm text-[0.95rem] text-ivory/65">
            Pizzeria e friggitoria. Pizza fatta con cura, fritti e una tavola dove stare bene insieme.
          </p>
          {links.instagram && (
            <a
              href={links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ivory hover:text-crust"
            >
              <InstagramIcon width={18} height={18} /> Seguici su Instagram
            </a>
          )}
        </div>

        <div>
          <h2 className="eyebrow mb-4 font-sans text-ivory/50">Esplora</h2>
          <ul className="space-y-2 text-[0.95rem]">
            {navItems.map((i) => (
              <li key={i.href}>
                <Link href={i.href} className="inline-block py-1 hover:text-ivory">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow mb-4 font-sans text-ivory/50">Contatti</h2>
          <address className="space-y-2 text-[0.95rem] not-italic">
            <p>{addressLine() || <TodoNote variant="inline" tone="light">Indirizzo</TodoNote>}</p>
            {links.tel && (
              <p>
                <a href={links.tel} className="hover:text-ivory">
                  Tel. {site.phone.display}
                </a>
              </p>
            )}
            {site.email && (
              <p>
                <a href={`mailto:${site.email}`} className="hover:text-ivory">
                  {site.email}
                </a>
              </p>
            )}
            <p className="text-ivory/60">{site.closedNote}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-site flex flex-col gap-4 py-6 text-[0.8rem] text-ivory/55 md:flex-row md:items-center md:justify-between">
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            © {year} {site.legal.companyName || site.name}
            <span aria-hidden="true">·</span>
            {site.legal.vatNumber ? (
              <span>P.IVA {site.legal.vatNumber}</span>
            ) : (
              <TodoNote variant="inline" tone="light">Ragione sociale e P.IVA</TodoNote>
            )}
          </p>
          <ul className="flex gap-5">
            <li>
              <Link href="/privacy" className="inline-block py-2 hover:text-ivory">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/cookie" className="inline-block py-2 hover:text-ivory">
                Cookie
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
