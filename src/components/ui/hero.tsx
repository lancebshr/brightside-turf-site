"use client";

import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type HeroProps = {
  heading: string;
  subheading: string;
  statLabel: string;
  primaryCta: { href: string; label: string };
  navLinks: { label: string; href: string }[];
};

export function Hero({
  heading,
  subheading,
  statLabel,
  primaryCta,
  navLinks,
}: HeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ink text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/team-truck.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 flex min-h-screen flex-col">
        <nav className="flex items-center justify-between px-6 py-6 text-white md:px-12 lg:px-16">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#1e3a4c]">
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2 8 6h3v4H8l4 4 4-4h-3V6h3l-4-4zm0 20 4-4h-3v-4h3l-4-4-4 4h3v4H8l4 4z" />
              </svg>
            </div>
            <div className="flex flex-col leading-tight text-[#1e3a4c] drop-shadow-[0_1px_4px_rgba(0,0,0,0.35)]">
              <span className="text-2xl font-bold tracking-tight">
                BRIGHTSIDE
              </span>
              <span className="text-xl font-bold tracking-[0.75em]">
                TURF
              </span>
            </div>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-white transition hover:text-white/80"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="lg"
              className="rounded-full bg-[#1e3a4c] px-8 py-6 text-lg font-semibold text-white hover:bg-[#2a4f66]"
              asChild
            >
              <a href="#lead">Get Quote</a>
            </Button>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#1e3a4c] px-6 py-5 text-base font-semibold text-white hover:bg-[#2a4f66]"
            >
              <a href="#lead">Get Quote</a>
            </Button>
          </div>
        </nav>

        <div className="flex flex-1 flex-col justify-center px-6 pb-16 text-white md:px-12 lg:px-16">
          <div className="mb-8 flex flex-wrap items-center gap-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="size-8 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-2 text-xl font-semibold">{statLabel}</span>
          </div>

          <h1 className="mb-6 max-w-4xl text-balance text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            {heading}
          </h1>

          <p className="mb-8 max-w-3xl text-balance text-xl font-medium md:text-2xl">
            {subheading}
          </p>

          <a
            href="tel:4028108692"
            className="mb-10 inline-flex text-2xl font-bold underline-offset-4 hover:underline md:text-3xl"
          >
            (402) 810-8692
          </a>

          <div>
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-[#00d9c0] px-8 py-7 text-xl font-bold uppercase tracking-wide text-[#1e3a4c] transition hover:bg-[#00c4ad]"
            >
              <a href={primaryCta.href}>
                {primaryCta.label}
                <ArrowRight className="ml-2 size-6 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
