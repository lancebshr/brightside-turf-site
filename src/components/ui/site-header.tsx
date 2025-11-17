"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavLink = {
  label: string;
  href: string;
};

type SiteHeaderProps = {
  links: NavLink[];
};

export function SiteHeader({ links }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 mx-auto w-full max-w-6xl px-4 transition-all duration-300",
        scrolled ? "translate-y-0" : "translate-y-0"
      )}
    >
      <div
        className={cn(
          "mt-4 flex items-center justify-between rounded-2xl border border-white/30 bg-white/80 px-4 py-3 shadow-lg backdrop-blur",
          scrolled && "shadow-brand bg-white"
        )}
      >
        <Link href="/" className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-xl bg-mint text-pine font-bold tracking-wide">
            BT
          </div>
          <div className="leading-tight">
            <span className="text-sm uppercase tracking-widest text-slate-500">
              Brightside
            </span>
            <p className="font-semibold text-pine text-base">
              Turf Services
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-ink md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-pine"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="shadow-brand">
            <a href="/get-quote">Get Quote</a>
          </Button>
        </nav>

        <button
          className="flex size-10 items-center justify-center rounded-full border border-pine/10 bg-white text-pine md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="size-5" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm md:hidden">
          <div className="ml-auto flex h-full w-64 flex-col gap-6 bg-white p-6">
            <button
              className="ml-auto rounded-full border border-slate-200 p-2"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="size-5 text-ink" />
            </button>
            <nav className="flex flex-col gap-4 text-lg text-ink">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-2 py-1 hover:bg-slate-100"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <Button asChild className="w-full">
              <a href="/get-quote" onClick={() => setOpen(false)}>
                Get Your Quote
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
