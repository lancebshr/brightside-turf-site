import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { ReviewsCarousel, type Review } from "@/components/ui/reviews-carousel";
import { SiteFooter } from "@/components/ui/site-footer";
import { NAV_LINKS } from "@/lib/nav-links";
import { Hero } from "@/components/ui/hero";
import { CoreValues } from "@/components/ui/core-values";
import { CtaStrip } from "@/components/ui/cta-strip";

const EXPECTATION_POINTS = [
  {
    title: "Seasonal Fertilization",
    body: "Timed applications that give your lawn the nutrients it needs to stay green and strong.",
  },
  {
    title: "Weed Control",
    body: "Targeted treatments that knock out broadleaf and invasive weeds before they take over.",
  },
  {
    title: "Professional Products",
    body: "We use high-quality granular materials hand-picked for Nebraska lawns.",
  },
  {
    title: "Consistent Scheduling",
    body: "The same techs service your property on a reliable schedule so you always know who’s showing up.",
  },
  {
    title: "101% Satisfaction Guarantee",
    body: "If weeds pop up between visits or something feels off, we come back and make it right.",
  },
];

const GALLERY_IMAGES = Array.from({ length: 6 }, () => "/newhero.png");

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
        primaryCta={{ href: "/#lead", label: "Get Your Quote" }}
        navLinks={NAV_LINKS}
        showPhone={false}
      />
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-16 pt-10 sm:px-6 lg:px-0">

        <section className="grid gap-10 rounded-[2.5rem] bg-white p-6 shadow-brand md:grid-cols-[1.05fr_0.95fr] md:p-12">
          <div className="relative h-72 overflow-hidden rounded-3xl md:h-[667px] md:self-start">
            <Image
              src="/newhero.png"
              alt="Brightside team walking a property"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
          <div className="space-y-5">
            <h2 className="text-3xl font-bold text-pine">
              A simple plan that gives your lawn exactly what it needs.
            </h2>
            <p className="text-lg text-ink/80">
              A fertilizer and weed control plan that gives your lawn the nutrients it needs
              and keeps weeds under control all season.
            </p>
            <div className="space-y-3">
              {EXPECTATION_POINTS.map((item) => (
                <details
                  key={item.title}
                  className="group rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-pine">
                    {item.title}
                    <span className="text-sm text-ink/60 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-2 text-base text-ink/80">{item.body}</p>
                </details>
              ))}
            </div>
            <Button asChild className="rounded-full bg-pine text-white hover:bg-pine/90">
              <Link href="/#lead">Get Your Quote</Link>
            </Button>
          </div>
        </section>

        <section>
          <CoreValues
            heading="Why Brightside"
            description="We built Brightside on three simple values that guide every job we do."
          />
        </section>

        <section className="space-y-10">
          <FadeInSection className="space-y-2 text-center">
          <h2 className="text-4xl font-bold text-pine">
          At Brightside, the Grass Really is Greener
            </h2>
            
            
          </FadeInSection>
          <FadeInSection>
            <div className="grid gap-4 md:grid-cols-3">
              {GALLERY_IMAGES.map((src, index) => (
                <div key={`${src}-${index}`} className="overflow-hidden rounded-2xl">
                  <Image
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    width={400}
                    height={300}
                    className="h-48 w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </FadeInSection>
        </section>

        <section className="space-y-6 rounded-[2.5rem] bg-white p-6 shadow-brand md:p-12">
          <FadeInSection className="space-y-3 text-center">
            
            <h2 className="text-4xl font-bold text-pine">Fertilization & Weed Control FAQs</h2>
          </FadeInSection>
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-pine">
                  {faq.question}
                  <span className="text-sm text-ink/60 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-base text-ink/80">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        
      </main>
      <section className="w-screen bg-background py-16">
        <div className="space-y-6 px-4 sm:px-10">
  
          <div className="w-full">
            <ReviewsCarousel
              heading="What Your Neighbors Think"
              subheading=""
              reviews={REVIEWS}
            />
          </div>
        </div>
      </section>
      <CtaStrip />
      <SiteFooter
        links={[
          ...NAV_LINKS,
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Get Quote", href: "/#lead" },
        ]}
      />
    </div>
  );
}
