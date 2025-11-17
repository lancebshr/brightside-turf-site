"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND_MINT } from "@/lib/utils";

type HeroProps = {
  heading: string;
  subheading: string;
  statLabel: string;
  primaryCta: { href: string; label: string };
  navLinks: { label: string; href: string }[];
  phone?: string;
  showPhone?: boolean;
};

export function Hero({
  heading,
  subheading,
  statLabel,
  primaryCta,
  navLinks,
  phone = "(402) 810-8692",
  showPhone = true,
}: HeroProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const SERVICE_OPTIONS = [
    {
      label: "Lawn Fertilization & Weed Control",
      href: "/services/fertilization-and-weed-control",
    },
    { label: "Core Aeration", href: "/services/core-aeration" },
    { label: "Overseeding", href: "/services/overseeding" },
    { label: "Sprinkler Winterization", href: "/services/sprinkler-winterization" },
    { label: "Holiday Lighting", href: "/services/holiday-lighting" },
  ];
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-ink text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/team-truck.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 flex min-h-screen flex-col pt-32">
        <div className="fixed left-0 right-0 top-4 z-50 flex w-full justify-center px-4 sm:px-6 xl:px-0">
          <div className="relative w-full max-w-6xl">
            <div className="pointer-events-none absolute inset-0 h-24 rounded-[1.75rem] bg-black/20 shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-lg" />
            <nav className="relative flex h-24 w-full items-stretch justify-between px-5 text-white">
              <Link href="/" className="flex h-full items-center">
                <Image
                  src="/Brightside%20Black.png"
                  alt="Brightside Turf"
                  width={1467}
                  height={406}
                  priority
                  className="h-16 w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
                />
              </Link>
              <div className="hidden items-center gap-6 md:flex">
                {navLinks.map((link) => {
                  if (link.label === "Our Services") {
                    return (
                      <div
                        key={link.label}
                        className="relative pb-8 -mb-8"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        <button
                          className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black/70 hover:shadow-[0_8px_20px_rgba(0,0,0,0.45)] hover:text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
                          aria-haspopup="true"
                          aria-expanded={servicesOpen}
                          onClick={() => setServicesOpen((prev) => !prev)}
                        >
                          Our Services
                          <ChevronDown
                            className={`size-4 transition ${servicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        <div
                          className={`absolute right-0 mt-3 w-72 rounded-[1.25rem] border border-white/30 bg-black/80 p-4 shadow-[0_20px_45px_rgba(0,0,0,0.6)] backdrop-blur-lg ${
                            servicesOpen ? "opacity-100" : "hidden opacity-0"
                          }`}
                        >
                          <div className="flex flex-col gap-2 text-left text-sm text-white/90">
                            {SERVICE_OPTIONS.map((service) => (
                              <Link
                                key={service.label}
                                href={service.href}
                                className="rounded-xl px-3 py-2 transition hover:bg-white/10"
                              >
                                {service.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className="rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black/70 hover:shadow-[0_8px_20px_rgba(0,0,0,0.45)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
                    >
                      {link.label}
                    </a>
                  );
                })}
                <Button
                  size="lg"
                  className="rounded-full bg-[#1e3a4c] px-5 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-[#2a4f66]"
                  asChild
                >
                  <a href="#lead">Get Quote</a>
                </Button>
              </div>
              <div className="flex items-center gap-3 md:hidden">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-[#1e3a4c] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-[#2a4f66]"
                >
                  <a href="#lead">Get Quote</a>
                </Button>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center px-6 pb-16 text-white md:px-12 lg:px-16">
          <div className="mt-16 mb-8 flex flex-wrap items-center gap-2 text-glow">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="size-6 flex-shrink-0 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-2 flex items-center gap-2 text-base font-semibold whitespace-nowrap md:text-lg">
              {statLabel}
              <Image
                src="/icons8-google-48.png"
                alt="Google"
                width={20}
                height={20}
                className="h-5 w-5 flex-shrink-0"
                priority
              />
            </span>
          </div>

          <h1 className="text-glow mb-7 max-w-7xl text-balance text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            {heading}
          </h1>

          <p className="text-glow mb-9 max-w-7xl text-balance text-xl font-medium md:text-2xl">
            {subheading}
          </p>

          {showPhone && (
            <a
              href={`tel:${phone.replace(/[^0-9]/g, "")}`}
              className="text-glow mb-2 inline-flex text-2xl font-bold underline-offset-4 hover:underline md:text-3xl"
            >
              {phone}
            </a>
          )}

          <div className="mt-3">
            <Button
              asChild
              size="xl"
              style={{ backgroundColor: BRAND_MINT, color: "#1e3a4c" }}
              className="group rounded-full px-8 py-4 text-2xl font-bold uppercase tracking-wide transition hover:opacity-90"
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
