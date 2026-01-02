import Image from "next/image";

type FooterProps = {
  links: { label: string; href: string }[];
};

export function SiteFooter({ links }: FooterProps) {
  return (
    <footer className="mt-0 bg-ink px-6 py-12 text-white sm:px-10">
      <div className="grid gap-6 md:grid-cols-[1fr_2fr_1fr] md:items-start">
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
          <Image
            src="/BrightsideLogo.svg"
            alt="Brightside Turf"
            width={240}
            height={72}
            className="h-12 w-48"
          />
        </div>

        <nav className="flex flex-nowrap items-center justify-center gap-6 text-sm font-semibold text-white/90 md:justify-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap transition hover:text-mint"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-center text-white/90 md:text-right">
          <p className="text-lg font-black tracking-tight text-mint">
            Office Contact
          </p>
          <p className="mt-4 text-base font-bold">
            <a href="tel:4028108692" className="transition hover:text-mint">
              (402) 810-8692
            </a>
          </p>
          <p className="text-base font-bold">
            <a href="mailto:office@brightsideturfne.com" className="transition hover:text-mint">
              office@brightsideturfne.com
            </a>
          </p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Brightside Turf. All rights reserved.
      </div>
    </footer>
  );
}
