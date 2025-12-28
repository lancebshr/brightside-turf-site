import { Hero } from "@/components/ui/hero";
import { ContactStrip } from "@/components/ui/contact-strip";
import { SiteFooter } from "@/components/ui/site-footer";
import { CoreValues } from "@/components/ui/core-values";
import { NAV_LINKS } from "@/lib/nav-links";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <div id="top">
        <Hero
          heading="We are redefining the way families experience lawn care."
          subheading="It shouldn't be hard to love your lawn. At Brightside, the grass really is greener."
          statLabel="5.0 stars on Google"
          primaryCta={{ label: "Get Your Quote", href: "#contact" }}
          navLinks={NAV_LINKS}
          starPlacement="aboveCta"
        />
      </div>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-6 pt-16 sm:px-6 lg:px-0">
        <section id="story" className="scroll-mt-32 space-y-10">
          <h2 className="text-center text-5xl font-black tracking-tight text-pine drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]">
            We built Brightside to raise the bar for Omaha homeowners.
          </h2>

          <div className="mx-auto max-w-3xl space-y-12">
            {/* Why We Exist */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-bold text-pine whitespace-nowrap">Why We Exist</h3>
                <div className="h-px flex-1 bg-pine/30" />
              </div>
              <p className="text-lg font-medium leading-relaxed text-ink">
                Before Brightside, we spent years helping other home service companies with operations, marketing, and customer experience. We learned a lot, but one thing stood out. No matter how good the systems were, we could not control the care that went into the work. And for homeowners, that is what matters most.
              </p>
              <p className="text-lg font-medium leading-relaxed text-ink">
                So we built Brightside with one goal in mind. To give people a lawn care experience that feels as personal as it is professional. We are from Omaha, and we take pride in serving the same neighborhoods we grew up in. Everything we do is intentional, from how our technicians present themselves to the products we use and the communication you receive throughout the year.
              </p>
            </div>

            {/* Our Standard */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <h3 className="text-xl font-bold text-pine whitespace-nowrap">Our Standard</h3>
                <div className="h-px flex-1 bg-pine/30" />
              </div>
              <p className="text-lg font-medium leading-relaxed text-ink">
                Brightside is built to combine the care of a small business with the reliability of a larger one. Our standard is simple. Show up when we say we will. Communicate clearly. Do the job right. And if something is not right, we fix it.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mx-auto max-w-3xl space-y-6 pt-6">
            <p className="text-lg font-medium leading-relaxed text-ink">
              If you ever want to talk with us directly, here is how to reach us.
            </p>
            <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:gap-12">
              <div className="space-y-1">
                <p className="text-lg font-bold text-pine">Luke Protzman</p>
                <a
                  href="mailto:lprotzman@brightsideturfne.com"
                  className="text-lg font-medium text-ink underline decoration-2 underline-offset-4 transition hover:text-pine"
                >
                  lprotzman@brightsideturfne.com
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-lg font-bold text-pine">Ben Newton</p>
                <a
                  href="mailto:bnewton@brightsideturfne.com"
                  className="text-lg font-medium text-ink underline decoration-2 underline-offset-4 transition hover:text-pine"
                >
                  bnewton@brightsideturfne.com
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="beliefs" className="scroll-mt-32">
          <CoreValues />
        </section>
      </main>

      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-white via-[#f5fbf7] to-[#c7f0de]">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-0 pt-12 sm:px-6 lg:px-0">
          <div id="contact" className="scroll-mt-32">
            <ContactStrip
              phone="(402) 810-8692"
              email="hello@brightsideturfne.com"
              note="Reach out anytime and we'll get you a quick answer."
            />
          </div>
        </div>
        <SiteFooter
          links={[
            ...NAV_LINKS,
            { label: "Privacy Policy", href: "/privacy" },
            { label: "Get Quote", href: "/get-quote" },
          ]}
        />
      </div>
    </div>
  );
}
