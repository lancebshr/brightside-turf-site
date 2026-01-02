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
    question: "How often do you mow?",
    answer:
      "We mow weekly during the growing season to keep your lawn consistent and under control.",
  },
  {
    question: "When does mowing start and end each year?",
    answer:
      "Mowing typically begins in the spring once grass is growing and ends in the fall when growth slows. Start and end dates depend on weather each season, but most lawns receive around 30 mows per year.",
  },
  {
    question: "Can I pause or cancel my mowing service?",
    answer:
      "Yes. You can pause or stop service at any time by calling or texting us.",
  },
  {
    question: "Do I need to be home during service?",
    answer:
      "No. As long as gates are accessible and pets are secured, you do not need to be home.",
  },
  {
    question: "What happens if weather delays service?",
    answer:
      "If weather causes a delay, we adjust the schedule and keep your lawn on track once conditions allow.",
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
    name: "Glen Tramp",
    quote:
      "Did a nice job with our aeration and came back to ensure we were satisfied. Took soil samples and met to discuss the results. Paying through a link was handy and the communication was top-notch.",
  },
  {
    name: "Doug Adams",
    quote:
      "Brightside Turf offers several services but I've only used them for aeration. Two friendly, clean-cut young men showed up and did a great job. Great communication and I was extremely satisfied.",
  },
  {
    name: "Nhung Nguyen",
    quote:
      "I would recommend Brightside to anyone in Omaha. They're a local company that does things right. When we noticed issues in our lawn they came back the next day to spot treat.",
  },
];

export default function LawnMowingPage() {
  const siteImages = getSiteImages();
  const featureImages = siteImages.services.lawnMowing.featureGrid;

  const FEATURE_CARDS = [
    {
      title: "Same-Day Weekly Service",
      description: "We mow on the same scheduled day each week so you're not left guessing when your lawn will be done.",
      image: featureImages.image1,
    },
    {
      title: "Presentable Crews",
      description: "Crews show up looking professional and treat your property with care while they're there.",
      image: featureImages.image2,
    },
    {
      title: "Easy to Reach",
      description: "Call or text us if you need to pause service, ask a question, or make a change.",
      image: featureImages.image3,
    },
    {
      title: "Attention to Detail",
      description: "We take care of the small things like edging, trimming, and cleaning up before we leave.",
      image: featureImages.image4,
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <Hero
        heading="Local Lawn Mowing Services in Omaha, NE"
        subheading="Consistent mowing that keeps your lawn neat and presentable all season long."
        statLabel="5.0 stars on Google"
        primaryCta={{ href: "/get-quote", label: "Get Your Quote" }}
        navLinks={NAV_LINKS}
        starPlacement="aboveCta"
        backgroundImage={siteImages.heroBackgrounds.lawnMowing}
      />
      <main>
        <FeatureGrid
          heading={<>A <span className="text-[#45D1B7]">dependable</span> weekly service that<br />keeps your lawn under control all season.</>}
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
              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-pine drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]">Lawn Mowing FAQs</h2>
              <p className="text-lg font-bold text-slate-600">Common questions about our lawn mowing services.</p>
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
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-pine drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]">
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
