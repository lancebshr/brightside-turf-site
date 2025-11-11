type FooterProps = {
  links: { label: string; href: string }[];
};

export function SiteFooter({ links }: FooterProps) {
  return (
    <footer className="mt-12 rounded-t-[3rem] bg-ink px-6 py-10 text-white sm:px-10">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-mint text-pine font-bold">
            BT
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-mint/80">
              Brightside Turf
            </p>
            <p className="text-lg font-semibold">The grass really is greener.</p>
          </div>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm font-medium text-white/80">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-pine">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <p className="mt-8 text-sm text-white/70">
        © {new Date().getFullYear()} Brightside Turf. All rights reserved.
      </p>
    </footer>
  );
}
