import { ChevronDown } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { ReviewsCarousel, type Review } from "@/components/ui/reviews-carousel";
import { SiteFooter } from "@/components/ui/site-footer";
import { NAV_LINKS } from "@/lib/nav-links";
import { Hero } from "@/components/ui/hero";
import { CoreValues } from "@/components/ui/core-values";
import { CtaStrip } from "@/components/ui/cta-strip";
import { getSiteImages } from "@/lib/site-images";

const FAQ_ITEMS = [
  {
    question: "What color mulch do you use?",
    answer:
      "Mulch color is selected before service so you get the look you want. We'll confirm color options during scheduling.",
  },
  {
    question: "Will you put a lot of mulch down?",
    answer:
      "No. We apply mulch at an appropriate depth to keep beds clean and finished without piling it excessively.",
  },
  {
    question: "Should I put landscape fabric down before mulching?",
    answer:
      "We do not recommend landscape fabric. Instead we focus on proper mulch depth and regular maintenance, which is more effective over time.",
  },
  {
    question: "Do you remove old mulch before installing new mulch?",
    answer:
      "Loose debris and buildup are cleared before installation. Existing mulch is typically refreshed rather than fully removed unless discussed ahead of time.",
  },
  {
    question: "Do I need to be home during the service?",
    answer:
      "No. As long as beds are accessible, you do not need to be home during mulch installation.",
  },
];

const REVIEWS: Review[] = [
  {
    name: "Petet Vargas Mas",
    quote:
      "Luke, Ben & Grant were excellent! Professional, friendly service. They did an awesome job with the lights. Clean lines, even spacing, and the lights look great. Best part is I didn't have to do a damn thing! 5 Star service. A+",
  },
  {
    name: "Josh Usewicz",
    quote:
      "Brightside Turf (Brightside Holiday Lighting) did an outstanding job with our holiday lighting! The team was communicative, professional, and easy to work with from start to finish. They delivered high-quality work with great attention to detail, and the end result looks fantastic.",
  },
  {
    name: "David Fry",
    quote:
      "Luke and team were phenomenal from start to finish. We booked far out and really appreciated the reminders—they kept us on track! Hopefully more services coming soon?!",
  },
  {
    name: "Nhung Nguyen",
    quote:
      "I would recommend Brightside to anyone in Omaha. They're a local company that does things right. When we noticed issues in our lawn they came back the next day to spot treat.",
  },
  {
    name: "Anthony Podany",
    quote:
      "Hired Brightside to handle fall aeration and was very impressed with the work and communication. Price was good and they've followed up twice to make sure I'm satisfied. Highly recommend.",
  },
];

export default function MulchInstallationPage() {
  const siteImages = getSiteImages();
  const featureImages = siteImages.services.mulchInstallation.featureGrid;

  const FEATURE_CARDS = [
    {
      title: "Proper Mulch Depth",
      description: "We install mulch at the right depth so beds look finished without burying plants.",
      image: featureImages.image1,
    },
    {
      title: "Redefined Bed Edges",
      description: "Edges are cleaned up and reshaped so beds look sharp and intentional.",
      image: featureImages.image2,
    },
    {
      title: "Beds Cleared First",
      description: "Leaves, sticks, and loose debris are removed before mulch is installed.",
      image: featureImages.image3,
    },
    {
      title: "Better Than We Found It",
      description: "We leave the area cleaner and more orderly than when we arrived.",
      image: featureImages.image4,
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <Hero
        heading="Local Mulch Installation Services in Omaha, NE"
        subheading="Refresh your landscape beds with clean, even mulch installation."
        statLabel="5.0 stars on Google"
        primaryCta={{ href: "/get-quote", label: "Get Your Quote" }}
        navLinks={NAV_LINKS}
        starPlacement="aboveCta"
        backgroundImage={siteImages.heroBackgrounds.mulchInstallation}
      />
      <main>
        <FeatureGrid
          heading={<>A seasonal refresh that brings order and<br /><span className="text-[#45D1B7]">definition</span> to your landscape beds.</>}
          features={FEATURE_CARDS}
        />
      </main>
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-white via-[#edf8f2] to-[#c7f0de]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-8 sm:px-6 lg:px-0">
          <section>
            <CoreValues image={siteImages.aboutPage.coreValuesImage} />
          </section>

          <section className="space-y-4">
            <FadeInSection className="space-y-3 text-center">
              <h2 className="text-5xl font-black tracking-tight text-pine drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]">Mulch Installation FAQs</h2>
              <p className="text-lg font-bold text-slate-600">Common questions about our mulch installation services.</p>
            </FadeInSection>
            <div className="rounded-[2.5rem] border border-slate-200 bg-white px-6 py-5 shadow-brand md:px-10 md:py-8">
              <div className="space-y-4">
                {FAQ_ITEMS.map((faq) => (
                  <details
                    key={faq.question}
                    className="group/item rounded-2xl border border-slate-100 bg-slate-50/70 px-5 py-4 transition"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-black text-pine">
                      <span>{faq.question}</span>
                      <ChevronDown className="size-5 text-ink/60 transition group-open/item:-rotate-180" />
                    </summary>
                    <p className="mt-4 pt-4 border-t border-slate-200 text-base font-semibold text-ink/90 leading-relaxed">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </div>

        <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 py-16">
          <div className="mb-10 px-4 text-center sm:px-8">
            <h2 className="text-5xl font-black tracking-tight text-pine drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]">
              What Your Neighbors Think
            </h2>
          </div>
          <div className="px-4 sm:px-10">
            <div className="w-full">
              <ReviewsCarousel
                reviews={REVIEWS}
                hideHeader
              />
            </div>
          </div>
        </section>

        <div className="pb-0 pt-4">
          <CtaStrip />
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
