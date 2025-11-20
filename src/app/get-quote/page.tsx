import Image from "next/image";
import { LeadForm } from "@/components/ui/lead-form";
import { SiteFooter } from "@/components/ui/site-footer";
import { NAV_LINKS } from "@/lib/nav-links";

const QUOTE_SERVICES = [
  "Fertilization & Weed Control",
  "Core Aeration",
  "Overseeding",
  "Sprinkler Winterization",
  "Holiday Lighting",
];

export default function GetQuotePage() {
  return (
    <div className="flex min-h-screen flex-col bg-ink text-white">
      <section className="relative flex-1 overflow-hidden">
        <Image
          src="/grasstop.jpeg"
          alt="Grass top view"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/75 to-black/85" />

        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
          <div className="space-y-3 text-white">
            <h1 className="text-5xl font-bold">Tell us about your lawn.</h1>
            <p className="text-lg">
              We&apos;d love to take care of your home. Tell us what you want information on,
              and we&apos;ll reach out within 24 hours.
            </p>
          </div>
          <div className="mt-4 w-full max-w-3xl">
            <LeadForm services={QUOTE_SERVICES} whiteLabels />
          </div>
        </div>
      </section>

      <SiteFooter
        links={[
          ...NAV_LINKS,
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Get Quote", href: "/get-quote" },
        ]}
      />
    </div>
  );
}
