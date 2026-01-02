"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, Menu, Phone, Star, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND_MINT, cn } from "@/lib/utils";

function ScrollIndicator() {
  const [visible, setVisible] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const progress = Math.min(scrollY / 150, 1);
      setScrollProgress(progress);
      setVisible(scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center transition-opacity duration-500"
      style={{
        opacity: 1 - scrollProgress,
        transform: `translateX(-50%) translateY(${scrollProgress * 30}px)`
      }}
    >
      <ChevronDown className="size-6 text-white/70" strokeWidth={1.5} />
    </div>
  );
}

type HeroProps = {
  heading: string;
  subheading: string;
  statLabel: string;
  primaryCta: { href: string; label: string };
  navLinks: { label: string; href: string }[];
  phone?: string;
  starPlacement?: "top" | "aboveCta";
  compact?: boolean;
  backgroundImage?: string;
};

export function Hero({
  heading,
  subheading,
  statLabel,
  primaryCta,
  navLinks,
  phone = "(402) 810-8692",
  starPlacement = "top",
  compact = false,
  backgroundImage = "/testhero.jpg",
}: HeroProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collapseLinks, setCollapseLinks] = useState(false);
  const [collapseActions, setCollapseActions] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const actionButtonsRef = useRef<HTMLDivElement>(null);
  const SERVICE_OPTIONS = [
    {
      label: "Fertilization and Weed Control",
      href: "/services/fertilization-and-weed-control",
    },
    { label: "Lawn Mowing", href: "/services/lawn-mowing" },
    { label: "Mulch Installation", href: "/services/mulch-installation" },
    { label: "Core Aeration", href: "/services/core-aeration" },
    { label: "Cleanups", href: "/services/cleanups" },
    { label: "Holiday Lighting", href: "/services/holiday-lighting" },
  ];
  const ABOUT_OPTIONS = [
    { label: "Our Story", href: "/about#story" },
    { label: "FAQs", href: "/faqs" },
    { label: "Blog", href: "/blog" },
  ];
  const renderStarRow = (className = "") => (
    <div
      className={`flex flex-wrap items-center gap-2 text-glow ${className}`}
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
      className={cn(
        "relative w-full overflow-hidden bg-ink text-white",
        compact ? "min-h-[60vh]" : "min-h-screen"
      )}
      style={{ minHeight: compact ? "60vh" : "100svh" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/30" />

      <div
        className={cn(
          "relative z-10 flex flex-col pt-28 md:pt-32",
          compact ? "min-h-[60vh]" : "min-h-screen"
        )}
        style={{ minHeight: compact ? "60vh" : "100svh" }}
      >
        <div className="fixed left-0 right-0 top-4 z-50 flex w-full justify-center px-4 sm:px-6 xl:px-0">
          <div className="relative w-full max-w-6xl">
            <div
              className="pointer-events-none absolute inset-0 h-24 rounded-[1.75rem] shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-md"
              style={{ backgroundColor: "rgba(111, 150, 188, 0.50)" }}
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
                    if (link.label === "About Us") {
                      return (
                        <div
                          key={link.label}
                          className="relative -mb-8 pb-8"
                          onMouseEnter={() => setAboutOpen(true)}
                          onMouseLeave={() => setAboutOpen(false)}
                        >
                          <Link
                            href="/about"
                            className="flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-black/70 hover:shadow-[0_8px_20px_rgba(0,0,0,0.45)] drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]"
                          >
                            About Us
                            <ChevronDown
                              className={`size-4 transition ${aboutOpen ? "rotate-180" : ""}`}
                            />
                          </Link>
                          <div
                            className={`absolute right-0 mt-3 w-56 rounded-[1.25rem] border border-white/30 bg-black/80 p-4 shadow-[0_20px_45px_rgba(0,0,0,0.6)] backdrop-blur-lg ${
                              aboutOpen ? "opacity-100" : "hidden opacity-0"
                            }`}
                          >
                            <div className="flex flex-col gap-2 text-left text-sm text-white/90">
                              {ABOUT_OPTIONS.map((option) => (
                                <Link
                                  key={option.label}
                                  href={option.href}
                                  className="rounded-xl px-3 py-2 transition hover:bg-white/10"
                                >
                                  {option.label}
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
                      boxShadow: "0 0 15px rgba(69, 209, 183, 0.25), 0 4px 12px rgba(0, 0, 0, 0.12)",
                    }}
                    className="rounded-full px-5 py-3 text-sm font-bold uppercase tracking-wide text-white transition-all duration-300 ease-out hover:scale-105 hover:brightness-110"
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
                    "absolute left-4 right-4 top-[calc(100%+0.75rem)] z-50 flex max-h-[75vh] flex-col rounded-2xl border border-white/40 bg-white text-ink shadow-[0_15px_40px_rgba(0,0,0,0.35)]",
                    showMenuButton ? "" : "md:hidden"
                  )}
                >
                  {/* Scrollable nav links */}
                  <div className="flex-1 overflow-y-auto p-4 pb-2">
                    <div className="flex flex-col gap-2">
                      <Link
                        href="/"
                        className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-bold text-pine transition hover:bg-slate-200"
                        onClick={closeMobileMenu}
                      >
                        Home
                      </Link>

                      {/* Services Dropdown */}
                      <details className="group rounded-xl bg-slate-100">
                        <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-bold text-pine">
                          Our Services
                          <ChevronDown className="size-4 transition group-open:rotate-180" />
                        </summary>
                        <div className="flex flex-col gap-1 px-2 pb-2">
                          {SERVICE_OPTIONS.map((service) => (
                            <Link
                              key={service.label}
                              href={service.href}
                              className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-white"
                              onClick={closeMobileMenu}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </details>

                      {/* About Us Dropdown */}
                      <details className="group rounded-xl bg-slate-100">
                        <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-bold text-pine">
                          About Us
                          <ChevronDown className="size-4 transition group-open:rotate-180" />
                        </summary>
                        <div className="flex flex-col gap-1 px-2 pb-2">
                          {ABOUT_OPTIONS.map((option) => (
                            <Link
                              key={option.label}
                              href={option.href}
                              className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-white"
                              onClick={closeMobileMenu}
                            >
                              {option.label}
                            </Link>
                          ))}
                        </div>
                      </details>

                      <Link
                        href="/reviews"
                        className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-bold text-pine transition hover:bg-slate-200"
                        onClick={closeMobileMenu}
                      >
                        Reviews
                      </Link>
                    </div>
                  </div>

                  {/* Sticky Action Buttons */}
                  <div className="border-t border-slate-200 bg-white p-4 pt-3">
                    <div className="flex flex-col gap-2">
                      <a
                        href={`tel:${sanitizedPhone}`}
                        onClick={closeMobileMenu}
                        className="flex items-center justify-center gap-2 rounded-xl border-2 border-pine bg-white px-4 py-3 text-sm font-bold text-pine transition hover:bg-slate-50"
                      >
                        <Phone className="size-4" />
                        Call Us
                      </a>
                      <Link
                        href="/get-quote"
                        onClick={closeMobileMenu}
                        className="flex items-center justify-center rounded-xl px-4 py-3 text-sm font-bold text-white transition-all duration-300 ease-out hover:scale-105 hover:brightness-110"
                        style={{
                          backgroundColor: BRAND_MINT,
                          boxShadow: "0 0 15px rgba(69, 209, 183, 0.25), 0 4px 12px rgba(0, 0, 0, 0.12)",
                        }}
                      >
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className={cn(
          "flex flex-1 flex-col justify-center px-6 pb-8 text-white md:px-12 md:pb-16 lg:px-16",
          compact && "pt-8 md:pt-12"
        )}>
          {starPlacement === "top" && renderStarRow("mt-16 mb-8")}

          <h1 className="text-glow mb-5 max-w-6xl text-4xl font-black tracking-tight leading-tight drop-shadow-[0_6px_18px_rgba(0,0,0,0.3)] md:mb-7 md:text-6xl lg:text-7xl">
            {heading}
          </h1>

          <p className={cn(
            "text-glow max-w-4xl text-balance text-lg font-extrabold md:text-2xl",
            compact ? "mb-4 md:mb-5" : "mb-6 md:mb-9"
          )}>
            {subheading}
          </p>

          <div className={cn("mt-2 md:mt-3", compact && "mt-1 md:mt-2")}>
            {starPlacement === "aboveCta" && renderStarRow(compact ? "mb-2 md:mb-3" : "mb-3 md:mb-4")}
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              <Button
                asChild
                size="lg"
                className="group rounded-full border-2 border-white bg-white/10 px-5 py-5 text-lg font-bold uppercase tracking-wide text-white backdrop-blur-sm transition hover:bg-white/20 md:px-8 md:py-7 md:text-2xl"
              >
                <a href={`tel:${sanitizedPhone}`}>
                  <Phone className="mr-2 size-5 md:size-6" />
                  {phone}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                style={{
                  backgroundColor: BRAND_MINT,
                  textShadow: "0 0 8px rgba(0,0,0,0.35)",
                  boxShadow: "0 0 15px rgba(69, 209, 183, 0.25), 0 4px 12px rgba(0, 0, 0, 0.12)",
                }}
                className="group rounded-full px-5 py-5 text-lg font-bold uppercase tracking-wide text-white transition-all duration-300 ease-out hover:scale-105 hover:brightness-110 md:px-8 md:py-7 md:text-2xl"
              >
                <a href={primaryCta.href}>
                  {primaryCta.label}
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1 md:size-6" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        {!compact && <ScrollIndicator />}
      </div>
    </section>
  );
}
