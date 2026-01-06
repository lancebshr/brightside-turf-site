"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BRAND_MINT, cn } from "@/lib/utils";

type BlogHeaderProps = {
  navLinks: { label: string; href: string }[];
};

export function BlogHeader({ navLinks }: BlogHeaderProps) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collapseLinks, setCollapseLinks] = useState(false);
  const [collapseActions, setCollapseActions] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const actionButtonsRef = useRef<HTMLDivElement>(null);
  const phone = "(402) 810-8692";

  const SERVICE_OPTIONS = [
    { label: "Fertilization and Weed Control", href: "/services/fertilization-and-weed-control" },
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
      const navPadding = parseFloat(navStyles.paddingLeft || "0") + parseFloat(navStyles.paddingRight || "0");
      const availableWidth = navEl.clientWidth - logoEl.clientWidth - navPadding - 32;

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
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [navLinks.length]);

  const closeMobileMenu = () => setMobileMenuOpen(false);
  const sanitizedPhone = phone.replace(/[^0-9]/g, "");
  const showMenuButton = collapseLinks || collapseActions;

  return (
    <section className="relative w-full overflow-hidden bg-[#0B3352] text-white min-h-[30vh]">
      <div className="relative z-10 flex flex-col h-full min-h-[30vh] pt-24">
        {/* Navigation */}
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
              <Link ref={logoRef} href="/" className="flex h-full flex-shrink-0 items-center">
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
                    collapseLinks && "pointer-events-none opacity-0 md:absolute md:left-0 md:top-0 md:-z-10"
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
                            <ChevronDown className={`size-4 transition ${servicesOpen ? "rotate-180" : ""}`} />
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
                            <ChevronDown className={`size-4 transition ${aboutOpen ? "rotate-180" : ""}`} />
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
                    collapseActions && "pointer-events-none opacity-0 md:absolute md:left-0 md:top-0 md:-z-10"
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
              <div className={cn("flex items-center gap-3", showMenuButton ? "pl-4" : "md:hidden")}>
                <button
                  className="flex size-12 items-center justify-center text-white"
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
                  className={cn("fixed inset-0 z-40 bg-black/30", showMenuButton ? "" : "md:hidden")}
                  onClick={closeMobileMenu}
                />
                <div
                  className={cn(
                    "absolute left-4 right-4 top-[calc(100%+0.75rem)] z-50 flex max-h-[75vh] flex-col rounded-2xl border border-white/40 bg-white text-ink shadow-[0_15px_40px_rgba(0,0,0,0.35)]",
                    showMenuButton ? "" : "md:hidden"
                  )}
                >
                  <div className="flex-1 overflow-y-auto p-4 pb-2">
                    <div className="flex flex-col gap-2">
                      <Link href="/" className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-bold text-pine transition hover:bg-slate-200" onClick={closeMobileMenu}>
                        Home
                      </Link>
                      <details className="group rounded-xl bg-slate-100">
                        <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-bold text-pine">
                          Our Services
                          <ChevronDown className="size-4 transition group-open:rotate-180" />
                        </summary>
                        <div className="flex flex-col gap-1 px-2 pb-2">
                          {SERVICE_OPTIONS.map((service) => (
                            <Link key={service.label} href={service.href} className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-white" onClick={closeMobileMenu}>
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </details>
                      <details className="group rounded-xl bg-slate-100">
                        <summary className="flex cursor-pointer items-center justify-between px-4 py-3 text-sm font-bold text-pine">
                          About Us
                          <ChevronDown className="size-4 transition group-open:rotate-180" />
                        </summary>
                        <div className="flex flex-col gap-1 px-2 pb-2">
                          {ABOUT_OPTIONS.map((option) => (
                            <Link key={option.label} href={option.href} className="rounded-lg px-3 py-2 text-sm font-medium text-ink/80 transition hover:bg-white" onClick={closeMobileMenu}>
                              {option.label}
                            </Link>
                          ))}
                        </div>
                      </details>
                      <Link href="/reviews" className="rounded-xl bg-slate-100 px-4 py-3 text-sm font-bold text-pine transition hover:bg-slate-200" onClick={closeMobileMenu}>
                        Reviews
                      </Link>
                    </div>
                  </div>
                  <div className="border-t border-slate-200 bg-white p-4 pt-3">
                    <div className="flex flex-col gap-2">
                      <a href={`tel:${sanitizedPhone}`} onClick={closeMobileMenu} className="flex items-center justify-center gap-2 rounded-xl border-2 border-pine bg-white px-4 py-3 text-sm font-bold text-pine transition hover:bg-slate-50">
                        <Phone className="size-4" />
                        Call Us
                      </a>
                      <Link href="/get-quote" onClick={closeMobileMenu} className="flex items-center justify-center rounded-xl px-4 py-3 text-sm font-bold text-white transition-all duration-300 ease-out hover:scale-105 hover:brightness-110" style={{ backgroundColor: BRAND_MINT, boxShadow: "0 0 15px rgba(69, 209, 183, 0.25), 0 4px 12px rgba(0, 0, 0, 0.12)" }}>
                        Get Quote
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Simple Blog Header Content */}
        <div className="flex flex-1 items-center justify-center text-center px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">The Brightside Blog</h1>
        </div>
      </div>
    </section>
  );
}
