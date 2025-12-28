import { ChevronDown } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { FeatureGrid } from "@/components/ui/feature-grid";
import { ReviewsCarousel, type Review } from "@/components/ui/reviews-carousel";
import { SiteFooter } from "@/components/ui/site-footer";
import { NAV_LINKS } from "@/lib/nav-links";
import { Hero } from "@/components/ui/hero";
import { CoreValues } from "@/components/ui/core-values";
import { CtaStrip } from "@/components/ui/cta-strip";

const FEATURE_CARDS = [
  {
    title: "Proper Fall Timing",
    description: "Aeration and overseeding are performed during the fall growing window when lawns respond best.",
    image: "/aeration.JPG",
  },
  {
    title: "Mechanical Core Aeration",
    description: "We mechanically remove soil cores to relieve compaction and open the ground for better results.",
    image: "/overseeding.JPG",
  },
  {
    title: "Quality Grass Seed",
    description: "We use quality grass seed selected to establish well and blend with your existing lawn.",
    image: "/grasstop.jpeg",
  },
  {
    title: "Clear Expectations",
    description: "We explain what to expect after service and how watering impacts results.",
    image: "/team-truck.jpg",
  },
];

const FAQ_ITEMS = [
  {
    question: "When do you perform aeration and overseeding?",
    answer:
      "We typically perform aeration and overseeding from late August through mid-October. Exact timing depends on soil temperatures and weather conditions, which determine when lawns respond best.",
  },
  {
    question: "What happens if a sprinkler head is damaged during service?",
    answer:
      "If a sprinkler head is damaged during aeration, we'll repair or replace it at no cost.",
  },
  {
    question: "What should I expect my lawn to look like after service?",
    answer:
      "After aeration and overseeding, soil cores will be visible and seed will be present on the surface. This is normal and part of the process.",
  },
  {
    question: "Do I need to water after overseeding?",
    answer:
      "Yes. Consistent watering is important to help new seed establish. We'll provide guidance so you know how often to water.",
  },
  {
    question: "Will this fix all thin or bare areas?",
    answer:
      "Aeration and overseeding help improve lawn density over time, but results depend on watering, weather, and existing lawn conditions.",
  },
];

const REVIEWS: Review[] = [
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
    name: "Thomas Norway",
    quote:
      "Very quick and great communication. They arrived on time for the aeration and just sent the invoice—could not have been easier. Definitely looking forward to working with them next season.",
  },
  {
    name: "Marlene Riva",
    quote:
      "They did a very good aeration job at my house. Communication was great and even though they were running late, they kept me informed. I'll definitely use them again next year!",
  },
  {
    name: "When In AZ",
    quote:
      "Brightside Turf handled aeration, overseeding, and fertilization for us. Fair pricing, easy to work with, and I could text to set everything up. Super happy to have found them.",
  },
];

export default function CoreAerationPage() {
  return (
    <div className="bg-background text-foreground">
      <Hero
        heading="Local Core Aeration & Overseeding in Omaha, NE"
        subheading="Reduce soil compaction and improve overall lawn density."
        statLabel="5.0 stars on Google"
        primaryCta={{ href: "/get-quote", label: "Get Your Quote" }}
        navLinks={NAV_LINKS}
        starPlacement="aboveCta"
      />
      <main>
        <FeatureGrid
          heading={<>A once-per-year service that helps thin or<br />compacted lawns fill in and <span className="text-[#45D1B7]">recover</span>.</>}
          features={FEATURE_CARDS}
        />
      </main>
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-white via-[#edf8f2] to-[#c7f0de]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-8 sm:px-6 lg:px-0">
          <section>
            <CoreValues />
          </section>

          <section className="space-y-4">
            <FadeInSection className="space-y-3 text-center">
              <h2 className="text-5xl font-black tracking-tight text-pine drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]">Aeration & Overseeding FAQs</h2>
              <p className="text-lg font-bold text-slate-600">Common questions about our aeration and overseeding services.</p>
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
