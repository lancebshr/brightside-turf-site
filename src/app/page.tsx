import { Hero } from "@/components/ui/hero";
import { LeadForm } from "@/components/ui/lead-form";
import { MeetBrightside } from "@/components/ui/meet-brightside";
import { ReviewsCarousel } from "@/components/ui/reviews-carousel";
import { ServiceArea } from "@/components/ui/service-area";
import { ServicesGrid } from "@/components/ui/services-grid";
import { SiteFooter } from "@/components/ui/site-footer";
import { HowItWorks } from "@/components/ui/how-it-works";
import { ContactStrip } from "@/components/ui/contact-strip";
import { NAV_LINKS } from "@/lib/nav-links";

const SERVICE_CARDS = [
  {
    title: "Fertilization & Weed Control",
    description:
      "We give your lawn what it needs to keep the grass green without weeds.",
    image: "/fertilization.JPG",
    slug: "fertilization-and-weed-control",
  },
  {
    title: "Core Aeration",
    description:
      "We give your lawn a breath of fresh air so the grass can grow the way it should.",
    image: "/aeration.JPG",
    slug: "core-aeration",
  },
  {
    title: "Overseeding",
    description:
      "We refresh your lawn with new seed so it can grow thicker and healthier again.",
    image: "/overseeding.JPG",
    slug: "overseeding",
  },
  {
    title: "Sprinkler Winterization",
    description:
      "We blow out your sprinkler system before the freeze so it’s ready to go come spring.",
    image: "/winterization.JPG",
    slug: "sprinkler-winterization",
  },
  {
    title: "Holiday Lighting",
    description:
      "We design, install, and store custom holiday lights your family will love.",
    image: "/lighting.webp",
    slug: "holiday-lighting",
  },
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
      "Brightside Turf offers several services but I’ve only used them for aeration. Two friendly, clean-cut young men showed up and did a great job. Great communication and I was extremely satisfied.",
  },
  {
    name: "David Fry",
    quote:
      "Luke and team were phenomenal from start to finish. We booked far out and really appreciated the reminders—they kept us on track! Hopefully more services coming soon?!",
  },
  {
    name: "Nhung Nguyen",
    quote:
      "I would recommend Brightside to anyone in Omaha. They’re a local company that does things right. When we noticed issues in our lawn they came back the next day to spot treat.",
  },
  {
    name: "Thomas Norway",
    quote:
      "Very quick and great communication. They arrived on time for the aeration and just sent the invoice—could not have been easier. Definitely looking forward to working with them next season.",
  },
  {
    name: "Marlene Riva",
    quote:
      "They did a very good aeration job at my house. Communication was great and even though they were running late, they kept me informed. I’ll definitely use them again next year!",
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
      "Brightside is amazing! They just aerated and overseeded my yard. Everyone was professional, prompt, and gracious—can’t wait to see it next spring!",
  },
  {
    name: "Anthony Podany",
    quote:
      "Hired Brightside to handle fall aeration and was very impressed with the work and communication. Price was good and they’ve followed up twice to make sure I’m satisfied. Highly recommend.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    title: "1. Get Your Quote",
    copy: "Tell us what you need and we’ll give you a clear and fair price.",
  },
  {
    title: "2. We Show Up",
    copy: "We do what we say we will and knock it out of the park.",
  },
  {
    title: "3. Enjoy Your Lawn",
    copy: "If anything is ever off, we come back and make it right.",
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
  return (
    <div className="bg-background text-foreground">
      <div id="top">
        <Hero
          heading="Top-Rated Fertilization and Aeration Services In Omaha"
          subheading="It shouldn’t be hard to love your lawn. At Brightside, the grass really is greener."
          statLabel="5.0 stars on Google"
          primaryCta={{ label: "Get Your Quote", href: "/get-quote" }}
          navLinks={NAV_LINKS}
        />
      </div>
      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-white via-[#f6fbf8] to-[#c7f0de]">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-12 pt-16 sm:px-6 lg:px-0">
          <section className="space-y-16">
            <ServicesGrid
              heading="Brightside’s Services"
              subheading="We’re redefining the way families experience lawn care. And really, it’s nothing too crazy. It’s just friendly people who show up when they say they will, in clean uniforms, ready to do the job right. That’s it."
              services={SERVICE_CARDS}
            />

            <MeetBrightside
              heading="Meet Brightside"
              body="We aren’t reinventing the wheel. We just really care about making your lawn look good… because that’s what you hired us to do. We show up, we do things right, and we never say “good enough”."
              cta={{ label: "Get Your Quote", href: "/get-quote" }}
              image={{ src: "/newhero.png", alt: "Brightside Turf crew" }}
            />
          </section>

          <div id="reviews" className="scroll-mt-32">
            <ReviewsCarousel
              heading="Here’s what the families of Omaha have to say"
              subheading=""
              reviews={REVIEWS}
            />
          </div>

          <HowItWorks
            heading="It’s really easy to get started"
            subheading="We keep it simple, fast, and without pressure."
            steps={HOW_IT_WORKS_STEPS}
            image="/newhero.png"
            cta={{ href: "/get-quote", label: "Get Your Quote" }}
          />

          <div id="lead" className="scroll-mt-32 space-y-6 pt-12">
            <div className="space-y-3 text-center">
              <h2 className="text-5xl font-bold text-pine">
                Tell us about your lawn.
              </h2>
              <p className="text-lg text-slate-600">
                We&apos;d love to take care of your home. Tell us what you want
                information on, and we&apos;ll reach out within 24 hours.
              </p>
            </div>
            <LeadForm services={SERVICE_CARDS.map((service) => service.title)} />
          </div>

          <ServiceArea
            title="Serving our neighbors across the Omaha Metro"
            description="We’re proud to care for lawns throughout the greater Omaha metro."
            areas={SERVICE_AREAS}
          />
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
