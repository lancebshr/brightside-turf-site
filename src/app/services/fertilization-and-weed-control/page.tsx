import Image from "next/image";
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
    title: "Seasonal Fertilization",
    description: "Timed applications that give your lawn the nutrients it needs to stay green and strong all year round.",
    image: "/fertilization.JPG",
  },
  {
    title: "Weed Control",
    description: "Targeted treatments that knock out broadleaf and invasive weeds before they take over your lawn.",
    image: "/grasstop.jpeg",
  },
  {
    title: "Professional Products",
    description: "We use high-quality granular materials hand-picked specifically for Nebraska lawns and soil conditions.",
    image: "/team-truck.jpg",
  },
  {
    title: "101% Satisfaction Guarantee",
    description: "If weeds pop up between visits or something feels off, we come back and make it right at no extra cost.",
    image: "/aeration.JPG",
  },
];

const FAQ_ITEMS = [
  {
    question: "How often do you apply fertilizer and weed control?",
    answer:
      "We treat lawns about every 4 to 6 weeks during the growing season. Each visit is timed to match the weather and soil conditions so your grass gets what it needs at the right time.",
  },
  {
    question: "Is it safe for kids and pets?",
    answer:
      "Yes. Our granular products are completely safe once they’re applied. You don’t have to wait to enjoy your yard, just let us do our thing and you’re good to go.",
  },
  {
    question: "What if I’m not happy with the results?",
    answer:
      "You’re covered by our 101% Satisfaction Guarantee. If weeds pop up or something doesn’t look right, we’ll come back, re-treat, and make it right at no extra cost.",
  },
  {
    question: "Can you do one-time treatments or just full programs?",
    answer:
      "We only offer full fertilizer programs. One-time services might seem convenient, but they don’t deliver the consistent, lasting results we stand behind. Our program is designed to build a healthy lawn that stays strong all season.",
  },
  {
    question: "Do I need to water before or after an application?",
    answer:
      "We’ll give you simple watering instructions after each visit. Sometimes watering helps the product work better, and sometimes it’s best to wait. We’ll let you know exactly what’s needed each time.",
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
      "Brightside Turf offers several services but I’ve only used them for aeration. Two friendly, clean-cut young men showed up and did a great job. Great communication and I was extremely satisfied.",
  },
  {
    name: "Nhung Nguyen",
    quote:
      "I would recommend Brightside to anyone in Omaha. They’re a local company that does things right. When we noticed issues in our lawn they came back the next day to spot treat.",
  },
];

export default function FertilizationAndWeedControlPage() {
  return (
    <div className="bg-background text-foreground">
      <Hero
        heading="Local Lawn Fertilization and Weed Control Services in Omaha, NE"
        subheading="Keep your lawn healthy, green, and weed-free all season long."
        statLabel="5.0 stars on Google"
        primaryCta={{ href: "/get-quote", label: "Get Your Quote" }}
        navLinks={NAV_LINKS}
        starPlacement="aboveCta"
      />
      <main>
        <FeatureGrid
          heading={<>A simple plan that gives your lawn <span className="text-[#45D1B7]">exactly</span> what it needs.</>}
          features={FEATURE_CARDS}
        />
      </main>
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-white via-[#edf8f2] to-[#c7f0de]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-8 sm:px-6 lg:px-0">
          <section>
            <CoreValues />
          </section>

          <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-pine py-16 text-white">
            <div className="mx-auto flex w-full max-w-6xl flex-col space-y-10 px-4 sm:px-6 lg:px-0">
              <FadeInSection className="space-y-2 text-center">
                <h2 className="text-5xl font-black tracking-tight text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.3)]">
                  At Brightside, the Grass Really is Greener
                </h2>
              </FadeInSection>
              <FadeInSection>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                  <div className="relative h-48 overflow-hidden rounded-2xl md:h-56">
                    <Image src="/aeration.JPG" alt="Brightside technician aerating a lawn" fill className="object-cover transition duration-300 hover:scale-105" />
                  </div>
                  <div className="relative h-48 overflow-hidden rounded-2xl md:h-56">
                    <Image src="/fertilization.JPG" alt="Fertilizer application across a green yard" fill className="object-cover transition duration-300 hover:scale-105" />
                  </div>
                  <div className="relative h-48 overflow-hidden rounded-2xl md:h-56">
                    <Image src="/overseeding.JPG" alt="Overseeding equipment in action" fill className="object-cover transition duration-300 hover:scale-105" />
                  </div>
                  <div className="relative h-48 overflow-hidden rounded-2xl md:h-56">
                    <Image src="/lighting.webp" alt="Holiday lighting installed by Brightside" fill className="object-cover transition duration-300 hover:scale-105" />
                  </div>
                  <div className="relative h-48 overflow-hidden rounded-2xl md:h-56">
                    <Image src="/team-truck.jpg" alt="Brightside Turf team truck" fill className="object-cover transition duration-300 hover:scale-105" />
                  </div>
                  <div className="relative h-48 overflow-hidden rounded-2xl md:h-56">
                    <Image src="/grasstop.jpeg" alt="Lush green lawn" fill className="object-cover transition duration-300 hover:scale-105" />
                  </div>
                </div>
              </FadeInSection>
            </div>
          </section>

          <section className="space-y-4">
            <FadeInSection className="space-y-3 text-center">
              <h2 className="text-5xl font-black tracking-tight text-pine drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]">Fertilization & Weed Control FAQs</h2>
              <p className="text-lg font-bold text-slate-600">Common questions about our fertilization and weed control services.</p>
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
