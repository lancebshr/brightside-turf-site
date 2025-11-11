import { ClipboardList, Sparkles, Truck } from "lucide-react";
import { Hero } from "@/components/ui/hero";
import { LeadForm } from "@/components/ui/lead-form";
import { MeetBrightside } from "@/components/ui/meet-brightside";
import { ReviewsCarousel } from "@/components/ui/reviews-carousel";
import { ServiceArea } from "@/components/ui/service-area";
import { ServicesGrid } from "@/components/ui/services-grid";
import { SiteFooter } from "@/components/ui/site-footer";
import { HowItWorks } from "@/components/ui/how-it-works";
import { ContactStrip } from "@/components/ui/contact-strip";

const NAV_LINKS = [
  { label: "Our Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Reviews", href: "#reviews" },
];

const SERVICE_CARDS = [
  {
    title: "Fertilization & Weed Control",
    description:
      "We give your lawn what it needs to keep the grass green without weeds.",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6b?auto=format&fit=crop&w=1200&q=80",
    slug: "fertilization-and-weed-control",
  },
  {
    title: "Core Aeration",
    description:
      "We give your lawn a breath of fresh air so the grass can grow the way it should.",
    image:
      "https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=1200&q=80",
    slug: "core-aeration",
  },
  {
    title: "Overseeding",
    description:
      "We refresh your lawn with new seed so it can grow thicker and healthier again.",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=1200&q=80",
    slug: "overseeding",
  },
  {
    title: "Sprinkler Winterization",
    description:
      "We blow out your sprinkler system before the freeze so it’s ready to go come spring.",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80",
    slug: "sprinkler-winterization",
  },
  {
    title: "Holiday Lighting",
    description:
      "We design, install, and store custom holiday lights your family will love.",
    image:
      "https://images.unsplash.com/photo-1455656755113-9c046f7e0c68?auto=format&fit=crop&w=1200&q=80",
    slug: "holiday-lighting",
  },
];

const REVIEWS = [
  {
    name: "Avery L.",
    quote:
      "We could see a difference after the first visit. Fast responses, spotless uniforms, and real pride in their work.",
  },
  {
    name: "Sam & Taylor R.",
    quote:
      "Brightside’s crew shows up when they say they will—even during the busy season. Our yard has never looked better.",
  },
  {
    name: "Dev & Priya M.",
    quote:
      "They handled fertilizing, aeration, and holiday lights in one plan. It felt like working with friends.",
  },
  {
    name: "Lauren O.",
    quote:
      "Getting a quote took minutes and there was zero pressure. The follow-up service was just as easy.",
  },
];

const HOW_IT_WORKS_STEPS = [
  {
    title: "Get Your Quote",
    copy: "Tell us what you need and we’ll give you a clear and fair price.",
    icon: ClipboardList,
  },
  {
    title: "We Show Up",
    copy: "We do what we say we will and knock it out of the park.",
    icon: Truck,
  },
  {
    title: "Enjoy Your Lawn",
    copy: "If anything is ever off, we come back and make it right.",
    icon: Sparkles,
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
          primaryCta={{ label: "Get Your Quote", href: "#lead" }}
          navLinks={NAV_LINKS}
        />
      </div>
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-20 pt-16 sm:px-6 lg:px-0">
        <section className="space-y-16">
          <ServicesGrid
            heading="Brightside’s Services"
            subheading="We’re redefining the way families experience lawn care. And really, it’s nothing too crazy. It’s just friendly people who show up when they say they will, in clean uniforms, ready to do the job right. That’s it."
            services={SERVICE_CARDS}
          />

          <MeetBrightside
            heading="Meet Brightside"
            body="We aren’t reinventing the wheel. We just really care about making your lawn look good… because that’s what you hired us to do. We show up, we do things right, and we never say “good enough”."
            cta={{ label: "Get Your Quote", href: "#lead" }}
            image={{ src: "/team-truck.jpg", alt: "Brightside Turf crew" }}
          />

          <div id="reviews">
            <ReviewsCarousel
              heading="Here’s what the families of Omaha have to say"
              subheading="Friendly crews, thoughtful service, and the mint trucks everyone recognizes."
              reviews={REVIEWS}
            />
          </div>

          <HowItWorks
            heading="It’s really easy to get started"
            subheading="We keep it simple, fast, and without pressure."
            steps={HOW_IT_WORKS_STEPS}
            image="/tech-solo.jpg"
            cta={{ href: "#lead", label: "Get Your Quote" }}
          />

          <div id="lead">
            <LeadForm services={SERVICE_CARDS.map((service) => service.title)} />
          </div>

          <ServiceArea
            title="Serving our neighbors across the Omaha Metro"
            description="We’re proud to care for lawns in Omaha, Papillion, Gretna, Elkhorn, Ralston, Bennington, La Vista, Bellevue, Waterloo, and Valley."
            areas={SERVICE_AREAS}
          />

          <ContactStrip
            phone="(402) 810-8692"
            email="hello@brightsideturf.com"
            note="Brightside is locally owned and operated in Omaha."
          />
        </section>
      </main>
      <div className="mx-auto w-full max-w-6xl px-4 pb-12 sm:px-6 lg:px-0">
        <SiteFooter
          links={[...NAV_LINKS, { label: "Get Quote", href: "#lead" }]}
        />
      </div>
    </div>
  );
}
