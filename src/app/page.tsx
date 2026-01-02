import Link from "next/link";
import { Hero } from "@/components/ui/hero";
import { LeadForm } from "@/components/ui/lead-form";
import { ReviewsCarousel } from "@/components/ui/reviews-carousel";
import { ServiceArea } from "@/components/ui/service-area";
import { ServicesGrid } from "@/components/ui/services-grid";
import { SiteFooter } from "@/components/ui/site-footer";
import { HowItWorks } from "@/components/ui/how-it-works";
import { ContactStrip } from "@/components/ui/contact-strip";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/nav-links";
import { BOLD_PLUS_HEADING, GET_QUOTE_BUTTON_CLASSNAME, GET_QUOTE_BUTTON_STYLE, cn } from "@/lib/utils";
import { getSiteImages } from "@/lib/site-images";

const QUOTE_SERVICES = [
  "Fertilization and Weed Control",
  "Lawn Mowing",
  "Mulch Installation",
  "Core Aeration/Overseeding",
  "Cleanups",
  "Holiday Lighting",
];

const REVIEWS = [
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
  {
    name: "Duy Tran",
    quote:
      "Excellent job aerating my lawn. New company but they did everything exceptionally. Email/text reminders were great, pricing was unbeatable, and they even picked up markers and left a thank you gift.",
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
  {
    name: "Anthony Podany",
    quote:
      "Hired Brightside to handle fall aeration and was very impressed with the work and communication. Price was good and they've followed up twice to make sure I'm satisfied. Highly recommend.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    title: "Get Your Quote",
    copy: "Tell us what you need and we'll give you clear pricing right away.",
  },
  {
    title: "We Show Up",
    copy: "Our team arrives when we say we will and gets the job done right.",
  },
  {
    title: "Enjoy Your Lawn",
    copy: "If anything needs attention, we come back and make it right.",
  },
];

const SERVICE_AREAS = [
  "Omaha",
  "Papillion",
  "Gretna",
  "Elkhorn",
  "Ralston",
  "Bennington",
  "La Vista",
  "Bellevue",
  "Waterloo",
  "Valley",
];

export default function Home() {
  const siteImages = getSiteImages();

  const SERVICE_CARDS = [
    {
      title: "Fertilization and Weed Control",
      description: "Healthy, green, weed-free lawns.",
      image: siteImages.homepage.serviceCards.fertilization,
      slug: "fertilization-and-weed-control",
    },
    {
      title: "Lawn Mowing",
      description: "Consistent weekly cuts with clean edges.",
      image: siteImages.homepage.serviceCards.lawnMowing,
      slug: "lawn-mowing",
    },
    {
      title: "Mulch Installation",
      description: "Fresh mulch, clean beds, boosted curb appeal.",
      image: siteImages.homepage.serviceCards.mulchInstallation,
      slug: "mulch-installation",
    },
    {
      title: "Core Aeration",
      description: "Stronger roots and thicker grass.",
      image: siteImages.homepage.serviceCards.coreAeration,
      slug: "core-aeration",
    },
    {
      title: "Cleanups",
      description: "Spring, fall, and yard debris cleanup.",
      image: siteImages.homepage.serviceCards.cleanups,
      slug: "cleanups",
    },
    {
      title: "Holiday Lighting",
      description: "Professional design, install, and takedown.",
      image: siteImages.homepage.serviceCards.holidayLighting,
      slug: "holiday-lighting",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <div id="top">
        <Hero
          heading="Top-Rated Lawn Care Services"
          subheading="Reliable lawn care in Omaha backed by 150+ five star reviews. We handle mowing, fertilization, aeration, mulch, cleanups, and more."
          statLabel="5.0 stars on Google"
          primaryCta={{ label: "Get Your Quote", href: "/get-quote" }}
          navLinks={NAV_LINKS}
          starPlacement="aboveCta"
          backgroundImage={siteImages.heroBackgrounds.homepage}
        />
      </div>
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-white via-[#e0f5eb] via-90% to-[#c7f0de]">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-12 pt-16 sm:px-6 lg:px-0">
          <section className="space-y-10">
            <ServicesGrid
              heading="Lawn and Landscaping Services"
              subheading=""
              services={SERVICE_CARDS}
            />
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                style={GET_QUOTE_BUTTON_STYLE}
                className={cn(GET_QUOTE_BUTTON_CLASSNAME, "px-12 py-7 text-xl")}
              >
                <Link href="/get-quote">GET YOUR QUOTE</Link>
              </Button>
            </div>
          </section>

          <section id="reviews" className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 py-16 scroll-mt-32">
            <div className="mb-10 px-4 text-center sm:px-8">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-pine drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]">
                Trusted by Homeowners Across Omaha
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

          <HowItWorks
            heading="How It Works"
            subheading=""
            steps={HOW_IT_WORKS_STEPS}
            image={siteImages.homepage.howItWorksImage}
            cta={{ href: "/get-quote", label: "Get Your Quote" }}
          />

          <div id="lead" className="scroll-mt-32 space-y-4 pt-12">
            <div className="space-y-3 text-center">
              <h2 className={BOLD_PLUS_HEADING}>Get Your Free Estimate</h2>
              <p className="text-lg text-slate-600">
                Tell us what you need and our team will reach out within one business day. No
                pressure, ever.
              </p>
            </div>
            <LeadForm services={QUOTE_SERVICES} />
          </div>

          <div className="space-y-6">
            <div className="text-center">
              <h2 className={BOLD_PLUS_HEADING}>Proudly Serving the Omaha Metro</h2>
            </div>
            <ServiceArea areas={SERVICE_AREAS} mapImage={siteImages.serviceAreaMap} />
          </div>
        </div>

        <ContactStrip
          phone="(402) 810-8692"
          email="hello@brightsideturf.com"
          note="Brightside is locally owned and operated in Omaha."
        />
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
