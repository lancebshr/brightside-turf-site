"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, Phone, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND_MINT, cn } from "@/lib/utils";

type HeroProps = {
  heading: string;
  subheading: string;
  statLabel: string;
  primaryCta: { href: string; label: string };
  navLinks: { label: string; href: string }[];
  phone?: string;
  centerContent?: boolean;
  starPlacement?: "top" | "aboveCta";
};

export function Hero({
  heading,
  subheading,
  statLabel,
  primaryCta,
  navLinks,
  phone = "(402) 810-8692",
  centerContent = false,
  starPlacement = "top",
}: HeroProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collapseLinks, setCollapseLinks] = useState(false);
  const [collapseActions, setCollapseActions] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const actionButtonsRef = useRef<HTMLDivElement>(null);
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
  const renderStarRow = (className = "", alignCenter = centerContent) => (
    <div
      className={`flex flex-wrap items-center gap-2 text-glow ${
        alignCenter ? "justify-center" : ""
      } ${className}`}
    >
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="size-6 flex-shrink-0 fill-yellow-400 text-yellow-400" />
      ))}
      <span className="ml-2 flex items-center gap-2 whitespace-nowrap text-base font-semibold md:text-lg">
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
  );

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateLayout = () => {
      const navEl = navRef.current;
      const logoEl = logoRef.current;
      const linksEl = navLinksRef.current;
      const actionsEl = actionButtonsRef.current;

      if (!navEl || !logoEl || !linksEl || !actionsEl) {
        const forceCollapse = window.innerWidth < 768;
        setCollapseLinks(forceCollapse);
        setCollapseActions(forceCollapse);
        return;
      }

      if (window.innerWidth < 768) {
        setCollapseLinks(true);
        setCollapseActions(true);
        return;
      }

      const navStyles = window.getComputedStyle(navEl);
      const navPadding =
        parseFloat(navStyles.paddingLeft || "0") +
        parseFloat(navStyles.paddingRight || "0");
      const availableWidth =
        navEl.clientWidth - logoEl.clientWidth - navPadding - 32;

      if (availableWidth <= 0) {
        setCollapseLinks(true);
        setCollapseActions(true);
        return;
      }

      const linkWidth = linksEl.scrollWidth;
      const actionWidth = actionsEl.scrollWidth;

      if (linkWidth + actionWidth <= availableWidth) {
        setCollapseLinks(false);
        setCollapseActions(false);
        return;
      }

      setCollapseLinks(true);
      setCollapseActions(actionWidth > availableWidth);
    };

    updateLayout();
    window.addEventListener("resize", updateLayout);

    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && navRef.current) {
      resizeObserver = new ResizeObserver(updateLayout);
      resizeObserver.observe(navRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateLayout);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [navLinks.length]);

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const sanitizedPhone = phone.replace(/[^0-9]/g, "");
  const showMenuButton = collapseLinks || collapseActions;

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-ink text-white"
      style={{ minHeight: "100svh" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/testhero.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/25" />

      <div
        className="relative z-10 flex min-h-screen flex-col pt-28 md:pt-32"
        style={{ minHeight: "100svh" }}
      >
        <div className="fixed left-0 right-0 top-4 z-50 flex w-full justify-center px-4 sm:px-6 xl:px-0">
          <div className="relative w-full max-w-6xl">
            <div
              className="pointer-events-none absolute inset-0 h-24 rounded-[1.75rem] shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-lg"
              style={{ backgroundColor: "rgba(111, 150, 188, 0.95)" }}
            />
            <nav
              ref={navRef}
              className="relative flex h-24 w-full items-stretch justify-between px-5 text-white"
            >
              <Link
                ref={logoRef}
                href="/"
                className="flex h-full flex-shrink-0 items-center"
              >
                <Image
                  src="/BrightsideLogo.svg"
                  alt="Brightside Turf"
                  width={200}
                  height={64}
                  priority
                  className="h-16 w-auto flex-shrink-0 object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
                />
              </Link>
              <div className="relative hidden flex-1 items-center justify-end gap-6 md:flex">
                <div
                  ref={navLinksRef}
                  className={cn(
                    "flex items-center gap-6 text-sm font-medium uppercase tracking-wide text-white",
                    collapseLinks &&
                      "pointer-events-none opacity-0 md:absolute md:left-0 md:top-0 md:-z-10"
                  )}
                  aria-hidden={collapseLinks}
                >
                  {navLinks.map((link) => {
                    if (link.label === "Our Services") {
                      return (
                        <div
                          key={link.label}
                          className="relative -mb-8 pb-8"
                          onMouseEnter={() => setServicesOpen(true)}
                          onMouseLeave={() => setServicesOpen(false)}
                        >
                          <button
                            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black/70 hover:shadow-[0_8px_20px_rgba(0,0,0,0.45)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
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
                        className="rounded-full px-4 py-2 transition hover:bg-black/70 hover:shadow-[0_8px_20px_rgba(0,0,0,0.45)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
                      >
                        {link.label}
                      </a>
                    );
                  })}
                </div>
                <div
                  ref={actionButtonsRef}
                  className={cn(
                    "flex items-center gap-3",
                    collapseActions &&
                      "pointer-events-none opacity-0 md:absolute md:left-0 md:top-0 md:-z-10"
                  )}
                  aria-hidden={collapseActions}
                >
                  <a
                    href={`tel:${sanitizedPhone}`}
                    className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black/70 hover:shadow-[0_8px_20px_rgba(0,0,0,0.45)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
                  >
                    <Phone className="size-4" />
                    Call Us
                  </a>
                  <Button
                    size="lg"
                    style={{
                      backgroundColor: BRAND_MINT,
                      textShadow: "0 0 8px rgba(0,0,0,0.35)",
                    }}
                    className="rounded-full px-5 py-3 text-sm font-bold uppercase tracking-wide text-white hover:opacity-90"
                    asChild
                  >
                    <a href="/get-quote">Get Quote</a>
                  </Button>
                </div>
              </div>
              <div
                className={cn(
                  "flex items-center gap-3",
                  showMenuButton ? "pl-4" : "md:hidden"
                )}
              >
                <button
                  className="flex size-12 items-center justify-center bg-navy] text-white"
                  onClick={() => setMobileMenuOpen((prev) => !prev)}
                  aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                >
                  {mobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
                </button>
              </div>
            </nav>
            {mobileMenuOpen && (
              <>
                <button
                  aria-label="Close menu"
                  className={cn(
                    "fixed inset-0 z-40 bg-black/30",
                    showMenuButton ? "" : "md:hidden"
                  )}
                  onClick={closeMobileMenu}
                />
                <div
                  className={cn(
                    "absolute left-4 right-4 top-[calc(100%+0.75rem)] z-50 rounded-[1.75rem] border border-white/40 bg-white/95 p-5 text-ink shadow-[0_15px_40px_rgba(0,0,0,0.35)] backdrop-blur-md",
                    showMenuButton ? "" : "md:hidden"
                  )}
                >
                  <div className="flex flex-col gap-3">
                    {navLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className="rounded-xl px-4 py-3 text-sm font-semibold uppercase tracking-wide text-ink transition hover:bg-slate-100"
                        onClick={closeMobileMenu}
                      >
                        {link.label}
                      </a>
                    ))}
                    <div className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-ink/60">
                        Our Services
                      </p>
                      <div className="mt-3 flex flex-col">
                        {SERVICE_OPTIONS.map((service) => (
                          <Link
                            key={service.label}
                            href={service.href}
                            className="rounded-xl px-3 py-2 text-sm text-ink/80 transition hover:bg-white"
                            onClick={closeMobileMenu}
                          >
                            {service.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Button
                        asChild
                        style={{
                          backgroundColor: BRAND_MINT,
                          textShadow: "0 0 8px rgba(0,0,0,0.35)",
                        }}
                        className="h-auto w-full rounded-2xl py-6 text-base font-bold uppercase tracking-wide text-white hover:opacity-90"
                      >
                        <a
                          href={`tel:${sanitizedPhone}`}
                          onClick={closeMobileMenu}
                          className="flex items-center justify-center gap-2"
                        >
                          <Phone className="size-5" />
                          Call Us
                        </a>
                      </Button>
                      <Button
                        asChild
                        style={{
                          backgroundColor: BRAND_MINT,
                          textShadow: "0 0 8px rgba(0,0,0,0.35)",
                        }}
                        className="h-auto w-full rounded-2xl py-6 text-base font-bold uppercase tracking-wide text-white hover:opacity-90"
                      >
                        <a href="/get-quote" onClick={closeMobileMenu}>
                          Get Quote
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div
          className={`flex flex-1 flex-col justify-center px-6 pb-16 text-white md:px-12 lg:px-16 ${
            centerContent ? "items-center text-center" : ""
          }`}
        >
          {starPlacement === "top" && renderStarRow("mt-16 mb-8")}

          <h1 className="text-glow mb-7 max-w-7xl text-balance text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">
            {heading}
          </h1>

          <p className="text-glow mb-9 max-w-7xl text-balance text-xl font-medium md:text-2xl">
            {subheading}
          </p>

          <div
            className={`mt-3 ${centerContent ? "flex flex-col items-center gap-4" : ""}`}
          >
            {starPlacement === "aboveCta" && renderStarRow("mb-2", true)}
            <Button
              asChild
              size="lg"
              style={{
                backgroundColor: BRAND_MINT,
                textShadow: "0 0 8px rgba(0,0,0,0.35)",
              }}
              className={`group rounded-full px-8 py-7 text-2xl font-bold uppercase tracking-wide text-white transition hover:opacity-90 ${
                centerContent ? "mx-auto" : ""
              }`}
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
