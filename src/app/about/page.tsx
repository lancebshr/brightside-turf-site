import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { Hero } from "@/components/ui/hero";
import { FadeInSection } from "@/components/ui/fade-in-section";
import { ContactStrip } from "@/components/ui/contact-strip";
import { SiteFooter } from "@/components/ui/site-footer";
import { CoreValues } from "@/components/ui/core-values";
import { NAV_LINKS } from "@/lib/nav-links";

const BLOG_POSTS = [
  "Placeholder Blog #1",
  "Placeholder Blog #2",
  "Placeholder Blog #3",
  "Placeholder Blog #4",
  "Placeholder Blog #5",
  "Placeholder Blog #6",
];

type FaqCategory = {
  title: string;
  description: string;
  items: { question: string; answer: string }[];
};

const FAQ_CATEGORIES: FaqCategory[] = [
  {
    title: "Getting Started",
    description: "Everything you need to know before booking your first service.",
    items: [
      {
        question: "Are you locally owned?",
        answer:
          "Yes. Brightside is owned and operated right here in Omaha. We live where we work and take pride in caring for our own community.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We proudly serve the Omaha metro and surrounding areas including Papillion, Gretna, Elkhorn, Ralston, Bennington, La Vista, Bellevue, Waterloo, and Valley.",
      },
      {
        question: "How do I get a quote?",
        answer:
          "Just click 'Get Your Quote,' tell us what you need, and we'll reach out within 24 hours with clear next steps and pricing.",
      },
      {
        question: "Do I need to be home during my first service?",
        answer:
          "Not usually. As long as we have access to the areas we need, you don't have to be home. If we ever need entry through a gate or special instructions, we'll let you know ahead of time.",
      },
      {
        question: "What happens after I fill out the quote form?",
        answer:
          "You'll get a quick confirmation message and a follow-up from our team. We'll make sure we understand exactly what you're looking for and schedule a time that works best for you.",
      },
      {
        question: "How soon can I get scheduled once I approve a quote?",
        answer:
          "Most services are booked within a few days. During peak seasons, we may schedule a bit further out, but we'll always communicate clear timelines before confirming.",
      },
    ],
  },
  {
    title: "During Service",
    description: "What to expect on the day we show up and how we take care of your property.",
    items: [
      {
        question: "How will I know when you're coming?",
        answer:
          "We'll notify you the day before your service and again when we're on the way. You'll always know who's coming and when.",
      },
      {
        question: "What should I do to prepare for my service?",
        answer:
          "Make sure gates are unlocked, pets are inside, and toys or obstacles are moved from the service area. That's all we need to get the job done smoothly.",
      },
      {
        question: "Do I need to move anything in my yard or around my home?",
        answer:
          "Only if it blocks the area we're working on. If something needs to be moved, our team can take care of it carefully and put it back afterward.",
      },
      {
        question: "What if it rains or snows on my scheduled day?",
        answer:
          "Weather happens. If we need to reschedule due to conditions, we'll let you know right away and get you the next available time slot.",
      },
      {
        question: "Will you close my gate or move items back when you're done?",
        answer:
          "Always. We make sure every gate is closed and the area looks as tidy as when we arrived.",
      },
      {
        question: "What if I have a dog or a locked gate?",
        answer:
          "Just let us know in advance. We'll work with you on the best way to access your property safely and respectfully.",
      },
    ],
  },
  {
    title: "After Service",
    description: "What happens once we're done and how we make sure you're happy.",
    items: [
      {
        question: "How soon will I see results after my service?",
        answer:
          "It depends on the service. Fertilization and weed control show results within a few weeks, while aeration and overseeding take a bit longer to develop.",
      },
      {
        question: "What if I'm not happy with how something looks?",
        answer:
          "Reach out right away. Our 101% Satisfaction Guarantee means we'll come back, assess the issue, and make it right at no extra cost.",
      },
      {
        question: "What's your 101% Satisfaction Guarantee?",
        answer:
          "If something doesn't meet your expectations, we don't stop at fixing it. We take time to understand what went wrong and make sure it doesn't happen again.",
      },
      {
        question: "Can I reach out directly to my technician?",
        answer:
          "Our technicians stay focused on providing great service, so all communication goes through our small office team and managers. They'll make sure any questions or updates get to the right person fast.",
      },
      {
        question: "How do I leave feedback or a review?",
        answer:
          "After every service, we'll send a quick follow-up asking for feedback. You can reply directly or leave a Google review — it helps our local team grow and improve.",
      },
    ],
  },
  {
    title: "Programs and Scheduling",
    description: "How our recurring programs work and what to expect throughout the year.",
    items: [
      {
        question: "How do your service programs work?",
        answer:
          "We operate on seasonal schedules based on what your lawn or lights need. You can sign up once and we'll take care of everything from timing to reminders.",
      },
      {
        question: "Can I sign up for multiple services at once?",
        answer:
          "Yes. Many customers bundle services like fertilization, aeration, and lighting for convenience and savings.",
      },
      {
        question: "Do you automatically return next season?",
        answer:
          "Yes. Most of our programs renew automatically each season. You'll always get a reminder before we start to confirm your schedule.",
      },
      {
        question: "How will I know when my next visit is scheduled?",
        answer:
          "You'll receive reminders before every service, plus an on-the-way notification when we're headed to your property.",
      },
    ],
  },
  {
    title: "Payments and Policies",
    description: "Simple, transparent answers about billing, cancellations, and your information.",
    items: [
      {
        question: "How do I pay for my service?",
        answer:
          "We accept all major cards. You can pay online through your invoice or set up automatic payments for convenience.",
      },
      {
        question: "Do you offer recurring billing or auto-pay?",
        answer:
          "Yes. Most of our customers prefer auto-pay so they never miss a payment or have to track due dates.",
      },
      {
        question: "What happens if a payment fails?",
        answer:
          "We'll notify you immediately so you can update your information and keep your service on schedule.",
      },
      {
        question: "Is there a contract?",
        answer:
          "No long-term contracts. You can cancel anytime, though most customers stay with us because they love the experience.",
      },
      {
        question: "How do I cancel or pause my service?",
        answer:
          "Reach out by email or phone. We'll confirm your request quickly and make sure your account is updated.",
      },
      {
        question: "Do you share my information with anyone else?",
        answer:
          "Never. We take privacy seriously and only use your information to provide service or communicate with you directly.",
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <div id="top">
        <Hero
          heading="We are redefining the way families experience lawn care."
          subheading="It shouldn't be hard to love your lawn. At Brightside, the grass really is greener."
          statLabel="5.0 stars on Google"
          primaryCta={{ label: "Get Your Quote", href: "#contact" }}
          navLinks={NAV_LINKS}
          centerContent
          starPlacement="aboveCta"
        />
      </div>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-6 pt-16 sm:px-6 lg:px-0">
        <section id="story" className="scroll-mt-32 space-y-8">
          <h2 className="text-center text-5xl font-black tracking-tight text-pine drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]">
            We built Brightside to raise the bar for Omaha homeowners.
          </h2>
          <div
            className="grid gap-10 rounded-[2.5rem] border-2 border-slate-200 bg-white p-6 shadow-xl md:grid-cols-[1.1fr_0.9fr] md:p-12"
          >
            <div className="space-y-5 text-ink">
              <p className="text-lg font-medium leading-relaxed text-ink">
                Before Brightside, we spent years helping other home service companies with operations, marketing, and customer experience. We learned a lot, but one thing stood out: no matter how good the systems were, we could not control the care that went into the work. And for homeowners, that is what matters most.
              </p>
              <p className="text-lg font-medium leading-relaxed text-ink">
                So we built Brightside with one goal in mind: to give people a lawn care experience that feels as personal as it is professional. We are from Omaha, and we take pride in serving the same neighborhoods we grew up in. Everything we do is intentional, from how our technicians present themselves to the products we use and the communication you receive throughout the year.
              </p>
              <p className="text-lg font-medium leading-relaxed text-ink">
                We want Brightside to feel like the small business you trust and the big business you can rely on. Our job is simple: make people genuinely happy with their lawns and lights.
              </p>
              <p className="text-lg font-medium leading-relaxed text-ink">
                If you ever want to talk with us directly, here is how to reach us:
              </p>
              <div className="space-y-4 pt-2">
                <div className="space-y-1">
                  <p className="text-lg font-bold text-pine">Luke Protzman</p>
                  <a
                    href="mailto:lprotzman@brightsideturfne.com"
                    className="text-lg font-medium text-ink underline decoration-2 underline-offset-4 transition hover:text-pine"
                  >
                    lprotzman@brightsideturfne.com
                  </a>
                </div>
                <div className="space-y-1">
                  <p className="text-lg font-bold text-pine">Ben Newton</p>
                  <a
                    href="mailto:bnewton@brightsideturfne.com"
                    className="text-lg font-medium text-ink underline decoration-2 underline-offset-4 transition hover:text-pine"
                  >
                    bnewton@brightsideturfne.com
                  </a>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/newhero.png"
                alt="Brightside Turf team"
                width={720}
                height={540}
                className="h-full w-full object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-pine/40 to-transparent" />
            </div>
          </div>
        </section>

        <section id="beliefs" className="scroll-mt-32">
          <CoreValues heading="Our values that guide every job we do:" />
        </section>

        <section id="blog" className="space-y-6 scroll-mt-32">
          <div className="relative left-1/2 w-screen -translate-x-1/2">
            <div className="relative h-72 w-full overflow-hidden">
              <Image
                src="/hero-bg.jpg"
                alt="Brightside Blog"
                fill
                className="object-cover"
                sizes="100vw"
                priority
              />
              <div className="absolute inset-0 bg-ink/60" />
              <div className="relative z-10 flex h-full w-full items-center justify-center text-center">
                <div className="space-y-3 px-6">

                  <h2 className="text-5xl font-black tracking-tight text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.3)]">The Brightside Blog</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-white via-[#f5fbf7] to-[#c7f0de]">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-0 pt-12 sm:px-6 lg:px-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((title) => (
              <article
                key={title}
                className="group relative overflow-hidden rounded-3xl shadow-brand"
              >
                <Image
                  src="/newhero.png"
                  alt={title}
                  width={480}
                  height={320}
                  className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 flex items-end p-6">
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                </div>
              </article>
            ))}
          </div>

          <section id="faqs" className="space-y-6 scroll-mt-32">
            <FadeInSection className="space-y-3 text-center">
              <h2 className="text-5xl font-black tracking-tight text-pine drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]">Questions about Brightside?</h2>
              <p className="text-xl font-semibold text-slate-600">
                Below are some of the most common questions we are asked about the company.
              </p>
            </FadeInSection>

            <div className="space-y-10">
              {FAQ_CATEGORIES.map((category) => (
                <div key={category.title} className="space-y-4">
                  <div>
                    <p className="text-2xl font-black text-pine">
                      {category.title}
                    </p>
                    <p className="mt-2 text-lg font-bold text-slate-600">{category.description}</p>
                  </div>
                  <div className="rounded-[2.5rem] border border-slate-200 bg-white px-6 py-5 shadow-brand md:px-10 md:py-8">
                    <div className="space-y-4">
                      {category.items.map((item) => (
                        <details
                          key={item.question}
                          className="group/item rounded-2xl border border-slate-100 bg-slate-50/70 px-5 py-4 transition"
                        >
                          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-black text-pine">
                            <span>{item.question}</span>
                            <ChevronDown className="size-5 text-ink/60 transition group-open/item:-rotate-180" />
                          </summary>
                          <p className="mt-4 pt-4 border-t border-slate-200 text-base font-semibold text-ink/90 leading-relaxed">{item.answer}</p>
                        </details>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <div id="contact" className="scroll-mt-32">
            <ContactStrip
              phone="(402) 810-8692"
              email="hello@brightsideturfne.com"
              note="Reach out anytime and we'll get you a quick answer."
            />
          </div>
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
