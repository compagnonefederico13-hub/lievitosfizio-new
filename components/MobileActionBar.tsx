import Link from "next/link";
import { links } from "@/lib/links";
import { MenuBookIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "./ui/Icons";

/**
 * Barra azioni fissa in basso, solo su smartphone/tablet:
 * le tre azioni che convertono di più (chiamare, vedere il menu, raggiungere il locale).
 * Se viene configurato il numero WhatsApp, compare automaticamente come quarta azione.
 */
export function MobileActionBar() {
  const items = [
    links.tel && { href: links.tel, label: "Chiama", icon: PhoneIcon, primary: true, external: false },
    links.whatsapp && { href: links.whatsapp, label: "WhatsApp", icon: WhatsAppIcon, primary: false, external: true },
    { href: "/menu", label: "Menu", icon: MenuBookIcon, primary: false, internal: true, external: false },
    links.directions && { href: links.directions, label: "Indicazioni", icon: PinIcon, primary: false, external: true },
  ].filter(Boolean) as Array<{
    href: string;
    label: string;
    icon: typeof PhoneIcon;
    primary: boolean;
    internal?: boolean;
    external: boolean;
  }>;

  return (
    <nav
      aria-label="Azioni rapide"
      className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-ivory/95 pb-[env(safe-area-inset-bottom)] backdrop-blur-md lg:hidden"
    >
      <ul className="mx-auto flex max-w-xl items-stretch gap-2 px-3 py-2.5">
        {items.map(({ href, label, icon: Icon, primary, internal, external }) => {
          const cls = `flex min-h-12 w-full flex-col items-center justify-center gap-0.5 rounded-2xl text-[0.72rem] font-semibold tracking-wide ${
            primary ? "bg-tomato text-ivory" : "text-ink hover:bg-cream"
          }`;
          return (
            <li key={label} className="flex-1">
              {internal ? (
                <Link href={href} className={cls}>
                  <Icon width={20} height={20} />
                  {label}
                </Link>
              ) : (
                <a href={href} className={cls} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                  <Icon width={20} height={20} />
                  {label}
                </a>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
