import Image from "next/image";
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
          "Just click “Get Your Quote,” tell us what you need, and we’ll reach out within 24 hours with clear next steps and pricing.",
      },
      {
        question: "Do I need to be home during my first service?",
        answer:
          "Not usually. As long as we have access to the areas we need, you don’t have to be home. If we ever need entry through a gate or special instructions, we’ll let you know ahead of time.",
      },
      {
        question: "What happens after I fill out the quote form?",
        answer:
          "You’ll get a quick confirmation message and a follow-up from our team. We’ll make sure we understand exactly what you’re looking for and schedule a time that works best for you.",
      },
      {
        question: "How soon can I get scheduled once I approve a quote?",
        answer:
          "Most services are booked within a few days. During peak seasons, we may schedule a bit further out, but we’ll always communicate clear timelines before confirming.",
      },
    ],
  },
  {
    title: "During Service",
    description: "What to expect on the day we show up and how we take care of your property.",
    items: [
      {
        question: "How will I know when you’re coming?",
        answer:
          "We’ll notify you the day before your service and again when we’re on the way. You’ll always know who’s coming and when.",
      },
      {
        question: "What should I do to prepare for my service?",
        answer:
          "Make sure gates are unlocked, pets are inside, and toys or obstacles are moved from the service area. That’s all we need to get the job done smoothly.",
      },
      {
        question: "Do I need to move anything in my yard or around my home?",
        answer:
          "Only if it blocks the area we’re working on. If something needs to be moved, our team can take care of it carefully and put it back afterward.",
      },
      {
        question: "What if it rains or snows on my scheduled day?",
        answer:
          "Weather happens. If we need to reschedule due to conditions, we’ll let you know right away and get you the next available time slot.",
      },
      {
        question: "Will you close my gate or move items back when you’re done?",
        answer:
          "Always. We make sure every gate is closed and the area looks as tidy as when we arrived.",
      },
      {
        question: "What if I have a dog or a locked gate?",
        answer:
          "Just let us know in advance. We’ll work with you on the best way to access your property safely and respectfully.",
      },
    ],
  },
  {
    title: "After Service",
    description: "What happens once we’re done and how we make sure you’re happy.",
    items: [
      {
        question: "How soon will I see results after my service?",
        answer:
          "It depends on the service. Fertilization and weed control show results within a few weeks, while aeration and overseeding take a bit longer to develop.",
      },
      {
        question: "What if I’m not happy with how something looks?",
        answer:
          "Reach out right away. Our 101% Satisfaction Guarantee means we’ll come back, assess the issue, and make it right at no extra cost.",
      },
      {
        question: "What’s your 101% Satisfaction Guarantee?",
        answer:
          "If something doesn’t meet your expectations, we don’t stop at fixing it. We take time to understand what went wrong and make sure it doesn’t happen again.",
      },
      {
        question: "Can I reach out directly to my technician?",
        answer:
          "Our technicians stay focused on providing great service, so all communication goes through our small office team and managers. They’ll make sure any questions or updates get to the right person fast.",
      },
      {
        question: "How do I leave feedback or a review?",
        answer:
          "After every service, we’ll send a quick follow-up asking for feedback. You can reply directly or leave a Google review — it helps our local team grow and improve.",
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
          "We operate on seasonal schedules based on what your lawn or lights need. You can sign up once and we’ll take care of everything from timing to reminders.",
      },
      {
        question: "Can I sign up for multiple services at once?",
        answer:
          "Yes. Many customers bundle services like fertilization, aeration, and lighting for convenience and savings.",
      },
      {
        question: "Do you automatically return next season?",
        answer:
          "Yes. Most of our programs renew automatically each season. You’ll always get a reminder before we start to confirm your schedule.",
      },
      {
        question: "How will I know when my next visit is scheduled?",
        answer:
          "You’ll receive reminders before every service, plus an on-the-way notification when we’re headed to your property.",
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
          "We’ll notify you immediately so you can update your information and keep your service on schedule.",
      },
      {
        question: "Is there a contract?",
        answer:
          "No long-term contracts. You can cancel anytime, though most customers stay with us because they love the experience.",
      },
      {
        question: "How do I cancel or pause my service?",
        answer:
          "Reach out by email or phone. We’ll confirm your request quickly and make sure your account is updated.",
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
          subheading="It shouldn’t be hard to love your lawn. At Brightside, the grass really is greener."
          statLabel="5.0 stars on Google"
          primaryCta={{ label: "Get Your Quote", href: "#contact" }}
          navLinks={NAV_LINKS}
          showPhone={false}
        />
      </div>

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-6 pt-16 sm:px-6 lg:px-0">
        <section
          id="story"
          className="grid gap-10 rounded-[2.5rem] bg-white/95 p-6 shadow-brand scroll-mt-32 md:grid-cols-[1.1fr_0.9fr] md:p-12"
        >
          <div className="space-y-5 text-ink">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-pine/70">
              Our Story
            </p>
            <h2 className="text-4xl font-bold text-pine">
              We built Brightside to raise the bar for Omaha homeowners.
            </h2>
            <p className="text-lg text-ink/80">
              Before Brightside, we spent years helping other home service companies run their operations, marketing, sales, and customer support. We learned a lot, but one thing became clear: no matter how much of a business you can control, you can’t control the care that goes into the work. So we started Brightside to change that.
            </p>
            <p className="text-lg text-ink/80">
              We built this company around one goal: to give homeowners an experience that feels as personal as it does professional. We’re from Omaha, and we take pride in serving the same neighborhoods we grew up in. Every part of Brightside is intentional, from how our technicians look and carry themselves to the products we choose to the emails you get throughout the year.
            </p>
            <p className="text-lg text-ink/80">
              We’re obsessed with creating something that feels personal, even as we grow. It’s the small business touch combined with the consistency of a big business system. Our job is simple: make people genuinely happy with their lawns and lights.
            </p>
            <p className="text-lg text-ink/80">
              We love meeting people in our community. If you ever want to grab a coffee, reach out to us directly:
            </p>
            <div className="space-y-4 text-lg font-semibold">
              <div className="space-y-1">
                <p className="text-pine">Luke Protzman</p>
                <a
                  href="mailto:lprotzman@brightsideturfne.com"
                  className="text-ink underline decoration-2 underline-offset-4 transition hover:text-pine/80"
                >
                  lprotzman@brightsideturfne.com
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-pine">Ben Newton</p>
                <a
                  href="mailto:bnewton@brightsideturfne.com"
                  className="text-ink underline decoration-2 underline-offset-4 transition hover:text-pine/80"
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
        </section>

        <section id="beliefs" className="scroll-mt-32">
          <CoreValues heading="We built Brightside on three simple values that guide every job we do." />
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
                  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-mint">
                    Blog
                  </p>
                  <h2 className="text-4xl font-bold text-white">The Brightside Blog</h2>
                </div>
              </div>
            </div>
          </div>
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
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="faqs" className="space-y-6 scroll-mt-32">
          <FadeInSection className="space-y-3 text-center">
            <h2 className="text-4xl font-bold text-pine">Questions about Brightside?</h2>
            <p className="text-lg text-slate-600">
              Below are some of the most common questions we are asked about the company.
            </p>
          </FadeInSection>

          <div className="space-y-6">
            {FAQ_CATEGORIES.map((category) => (
              <details
                key={category.title}
                className="group rounded-[2.5rem] border border-slate-200 bg-white px-6 py-5 shadow-brand md:px-10 md:py-8"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pine/70">
                      {category.title}
                    </p>
                    <p className="mt-2 text-lg text-ink/80">{category.description}</p>
                  </div>
                  <span className="text-xl font-bold text-pine transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-6 space-y-4">
                  {category.items.map((item, index) => (
                    <details
                      key={item.question}
                      className="group rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 transition"
                    >
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-pine">
                        <span className="flex items-center gap-3">
                          <span className="text-sm font-bold text-mint">
                            {(index + 1).toString().padStart(2, "0")}
                          </span>
                          {item.question}
                        </span>
                        <span className="text-sm text-ink/60 transition group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="mt-3 text-base text-ink/80">{item.answer}</p>
                    </details>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </section>
      </main>
      <div id="contact" className="scroll-mt-32">
        <ContactStrip
          phone="(402) 810-8692"
          email="hello@brightsideturf.com"
          note="Still have questions? We’d love to help. Reach out anytime and we’ll get you a quick answer."
        />
      </div>
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
