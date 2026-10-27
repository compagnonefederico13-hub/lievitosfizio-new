import type { ReactNode } from "react";
import { site } from "@/data/site";
import { addressLine, formatDays, links } from "@/lib/links";
import { Reveal } from "../ui/Reveal";
import { ButtonLink } from "../ui/ButtonLink";
import { TodoNote } from "../ui/TodoNote";
import { ClockIcon, InstagramIcon, PhoneIcon, PinIcon, WhatsAppIcon } from "../ui/Icons";
import { MapEmbed } from "../MapEmbed";

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-[2.75rem_1fr] gap-4 border-t border-line py-6 first:border-t-0 first:pt-0">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ivory text-tomato">{icon}</span>
      <div>
        <dt className="eyebrow text-ink-soft">{label}</dt>
        <dd className="mt-2 text-[1.05rem] leading-relaxed">{children}</dd>
      </div>
    </div>
  );
}

export function Visit() {
  return (
    <section id="contatti" aria-labelledby="contatti-title">
      {/* Invito all'azione */}
      <div className="bg-tomato text-ivory">
        <div className="container-site py-20 sm:py-28">
          <Reveal>
            <p className="eyebrow flex items-center gap-3 text-ivory/80">
              <span className="font-display text-base font-normal tracking-normal normal-case italic">05</span>
              <span aria-hidden="true" className="h-px w-8 bg-ivory/40" />
              Vieni a trovarci
            </p>
            <h2 id="contatti-title" className="mt-5 max-w-[14ch] text-display font-light">
              Ti aspettiamo <em className="font-normal italic">a tavola.</em>
            </h2>
            <p className="mt-6 max-w-lg text-lg text-ivory/85">
              Per informazioni e prenotazioni chiamaci: ti rispondiamo volentieri.
            </p>
          </Reveal>
          <Reveal delay={120} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {links.tel && (
              <ButtonLink href={links.tel} variant="light" ariaLabel={`Chiama ${site.name} al ${site.phone.display}`}>
                <PhoneIcon width={18} height={18} /> Chiama {site.phone.display}
              </ButtonLink>
            )}
            {links.whatsapp && (
              <ButtonLink href={links.whatsapp} external variant="outline-light">
                <WhatsAppIcon width={18} height={18} /> Scrivici su WhatsApp
              </ButtonLink>
            )}
            {links.directions && (
              <ButtonLink href={links.directions} external variant="outline-light">
                <PinIcon width={18} height={18} /> Raggiungici
              </ButtonLink>
            )}
          </Reveal>
        </div>
      </div>

      {/* Dettagli e mappa */}
      <div className="bg-cream py-20 sm:py-24">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <dl>
              <InfoRow icon={<PinIcon />} label="Indirizzo">
                <address className="not-italic">{addressLine()}</address>
                {!site.address.postalCode && (
                  <TodoNote variant="inline" className="mt-2">
                    CAP da inserire
                  </TodoNote>
                )}
                {links.directions && (
                  <a
                    href={links.directions}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 flex min-h-11 w-fit items-center text-[0.95rem] font-semibold text-tomato underline underline-offset-4"
                  >
                    Apri le indicazioni stradali
                  </a>
                )}
              </InfoRow>

              <InfoRow icon={<ClockIcon />} label="Orari">
                {site.hours.length > 0 ? (
                  <ul className="space-y-1">
                    {site.hours.map((h, i) => (
                      <li key={i} className="flex flex-wrap justify-between gap-x-6">
                        <span>
                          {formatDays(h.days)}
                          {h.label && <span className="text-ink-soft"> · {h.label}</span>}
                        </span>
                        <span className="tabular-nums">
                          {h.opens} – {h.closes}
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <TodoNote variant="inline">Orari di apertura da inserire</TodoNote>
                )}
                <p className="mt-2 font-semibold text-tomato-dark">{site.closedNote}</p>
              </InfoRow>

              <InfoRow icon={<PhoneIcon />} label="Telefono">
                {links.tel ? (
                  <a href={links.tel} className="font-display text-2xl hover:text-tomato">
                    {site.phone.display}
                  </a>
                ) : (
                  <TodoNote variant="inline">Telefono da inserire</TodoNote>
                )}
              </InfoRow>

              <InfoRow icon={<WhatsAppIcon />} label="WhatsApp">
                {links.whatsapp ? (
                  <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-tomato">
                    Scrivici su WhatsApp
                  </a>
                ) : (
                  <TodoNote variant="inline">Numero WhatsApp da inserire</TodoNote>
                )}
              </InfoRow>

              {links.instagram && (
                <InfoRow icon={<InstagramIcon />} label="Instagram">
                  <a href={links.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-tomato">
                    @lievitosfizio
                  </a>
                  <p className="text-[0.9rem] text-ink-soft">Serate, eventi e novità.</p>
                </InfoRow>
              )}
            </dl>
          </Reveal>

          <Reveal delay={120} className="min-h-[22rem]">
            <MapEmbed />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
