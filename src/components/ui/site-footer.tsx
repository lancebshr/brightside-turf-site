type FooterProps = {
  links: { label: string; href: string }[];
};

export function SiteFooter({ links }: FooterProps) {
  return (
    <footer className="mt-0 bg-ink px-6 py-16 text-white sm:px-10">
      <div className="grid gap-5 md:grid-cols-[1fr_2fr_1fr] md:items-start">
        <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mint text-pine font-bold">
            BT
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-mint/80">
              Brightside Turf
            </p>
            <p className="text-base text-white/80">
              The grass really is greener.
            </p>
          </div>
        </div>

        <nav className="flex flex-nowrap items-center justify-center gap-6 text-sm text-white/80 md:justify-center">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap hover:text-pine"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="text-center text-sm text-white/80 md:text-right">
          <p className="font-semibold uppercase tracking-wide text-mint/80">
            Office Contact
          </p>
          <p className="mt-4">
            <a href="tel:4028108692" className="hover:text-pine">
              (402) 810-8692
            </a>
          </p>
          <p>
            <a href="mailto:office@brightsideturfne.com" className="hover:text-pine">
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
