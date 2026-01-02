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
    question: "What happens if I move during or after the season?",
    answer:
      "If you move, we can refit your lighting to your new home rather than charging you all over again. Any pricing adjustments are reasonable and based on the new layout.",
  },
  {
    question: "Who owns the lights?",
    answer:
      "We own and maintain the lighting materials. This allows us to replace worn components, fix issues quickly, and change colors or layouts without you having to buy new materials.",
  },
  {
    question: "What happens if a light goes out or something stops working?",
    answer:
      "If a light goes out or needs attention, we'll fix it within 48 hours under our service guarantee.",
  },
  {
    question: "What if lights fall or come loose?",
    answer:
      "If any lights come loose during the season, we'll resecure them at no additional cost.",
  },
  {
    question: "Do I need to be home for installation or service?",
    answer:
      "No. As long as the exterior of the home is accessible, you do not need to be home for installation, service, or removal.",
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

export default function HolidayLightingPage() {
  const siteImages = getSiteImages();
  const featureImages = siteImages.services.holidayLighting.featureGrid;

  const FEATURE_CARDS = [
    {
      title: "Full Service",
      description: "We handle everything from design and installation to in-season service, removal, and storage.",
      image: featureImages.image1,
    },
    {
      title: "48 Hour Guarantee",
      description: "If something goes out or needs adjustment, we fix it within 48 hours.",
      image: featureImages.image2,
    },
    {
      title: "Professional Materials",
      description: "We use commercial-grade lighting and materials designed to look good and hold up through the season.",
      image: featureImages.image3,
    },
    {
      title: "Custom Design",
      description: "Each lighting setup is designed to fit your home rather than using a one-size-fits-all layout.",
      image: featureImages.image4,
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <Hero
        heading="Local Holiday Lighting Installation Services in Omaha, NE"
        subheading="Professional holiday lighting without the hassle of installing or maintaining it yourself."
        statLabel="5.0 stars on Google"
        primaryCta={{ href: "/get-quote", label: "Get Your Quote" }}
        navLinks={NAV_LINKS}
        starPlacement="aboveCta"
        backgroundImage={siteImages.heroBackgrounds.holidayLighting}
      />
      <main>
        <FeatureGrid
          heading={<>A <span className="text-[#45D1B7]">complete</span> holiday lighting setup<br />that looks great all season.</>}
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
              <h2 className="text-5xl font-black tracking-tight text-pine drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]">Holiday Lighting FAQs</h2>
              <p className="text-lg font-bold text-slate-600">Common questions about our holiday lighting services.</p>
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
