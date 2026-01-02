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
    question: "When do you perform seasonal cleanups?",
    answer:
      "We offer cleanups during the spring and fall, timed around weather and seasonal conditions.",
  },
  {
    question: "Do you haul away the debris?",
    answer:
      "Yes. All collected debris is hauled away unless otherwise discussed.",
  },
  {
    question: "What areas are included in a cleanup?",
    answer:
      "Cleanups typically focus on lawn areas and easily accessible landscape spaces. We'll confirm the scope before service.",
  },
  {
    question: "Is this a one-time service or recurring?",
    answer:
      "Seasonal cleanups are typically one-time services, though some customers schedule them each spring and fall.",
  },
  {
    question: "Do I need to be home during the cleanup?",
    answer:
      "No. As long as the property is accessible, you do not need to be home.",
  },
];

const REVIEWS: Review[] = [
  {
    name: "Petet Vargas Mas",
    quote:
      "Luke, Ben & Grant were excellent! Professional, friendly service. They did an awesome job with the lights. Clean lines, even spacing, and the lights look great. Best part is I didn't have to do a damn thing! 5 Star service. A+",
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
    name: "Sally S",
    quote:
      "The crew arrived on time, even on a weekend. They worked quickly, cleaned up afterward, and I was very happy with the aeration and overseeding they did.",
  },
  {
    name: "Jill Eli",
    quote:
      "Brightside is amazing! They just aerated and overseeded my yard. Everyone was professional, prompt, and gracious—can't wait to see it next spring!",
  },
];

export default function CleanupsPage() {
  const siteImages = getSiteImages();
  const featureImages = siteImages.services.cleanups.featureGrid;

  const FEATURE_CARDS = [
    {
      title: "Seasonal Debris Removal",
      description: "We remove built-up leaves, sticks, and organic debris left behind from the season.",
      image: featureImages.image1,
    },
    {
      title: "Reasonable Timing",
      description: "Cleanups are scheduled within a reasonable seasonal window so your property isn't left waiting for weeks.",
      image: featureImages.image2,
    },
    {
      title: "Clean Feel",
      description: "We focus on leaving your property looking orderly and cleared of visible seasonal mess.",
      image: featureImages.image3,
    },
    {
      title: "Post-Service Checkup",
      description: "Each cleanup is reviewed before we leave to make sure everything looks right.",
      image: featureImages.image4,
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <Hero
        heading="Local Seasonal Yard Cleanups in Omaha, NE"
        subheading="Seasonal cleanup to remove debris and prepare your yard for the next season."
        statLabel="5.0 stars on Google"
        primaryCta={{ href: "/get-quote", label: "Get Your Quote" }}
        navLinks={NAV_LINKS}
        starPlacement="aboveCta"
        backgroundImage={siteImages.heroBackgrounds.cleanups}
      />
      <main>
        <FeatureGrid
          heading={<>A thorough cleanup that <span className="text-[#45D1B7]">resets</span> your<br />property and prepares it for the next season.</>}
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
              <h2 className="text-5xl font-black tracking-tight text-pine drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]">Seasonal Yard Cleanup FAQs</h2>
              <p className="text-lg font-bold text-slate-600">Common questions about our seasonal cleanup services.</p>
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
