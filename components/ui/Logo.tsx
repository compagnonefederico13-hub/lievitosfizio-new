import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  tone?: "dark" | "light";
  withTagline?: boolean;
  className?: string;
};

export function Logo({
  tone = "dark",
  withTagline = true,
  className = "",
}: LogoProps) {
  return (
    <Link
      href="/"
      aria-label="Lievito Sfizio — torna alla home"
      className={`inline-flex items-center ${className}`}
    >
      <Image
        src="/images/logo-color.png"
        alt="Lievito Sfizio"
        width={240}
        height={100}
        priority
        className="h-auto w-auto max-h-20 max-w-[240px] object-contain"
      />
    </Link>
  );
}