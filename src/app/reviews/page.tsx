import Image from "next/image";
import { Star } from "lucide-react";
import { Hero } from "@/components/ui/hero";
import { SiteFooter } from "@/components/ui/site-footer";
import { NAV_LINKS } from "@/lib/nav-links";

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

const formatReviewerName = (name: string) => {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0];
  const last = parts[parts.length - 1];
  const initial = last[0]?.toUpperCase() ?? "";
  return `${parts[0]} ${initial}.`;
};

export default function ReviewsPage() {
  return (
    <div className="bg-background text-foreground">
      <Hero
        heading="What Our Customers Say"
        subheading="Over 150 five-star reviews from homeowners across Omaha."
        statLabel="5.0 stars on Google"
        primaryCta={{ label: "Get Your Quote", href: "/get-quote" }}
        navLinks={NAV_LINKS}
        starPlacement="aboveCta"
      />

      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-white via-[#f5fbf7] to-[#c7f0de]">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-16 pt-16 sm:px-6 lg:px-0">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {REVIEWS.map((review, i) => (
              <article
                key={`${review.name}-${i}`}
                className="flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-full bg-pine text-xl font-semibold text-white">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-lg font-medium text-slate-900">
                      {formatReviewerName(review.name)}
                    </span>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="size-5 text-[#FABB05]"
                          fill="#FABB05"
                        />
                      ))}
                    </div>
                  </div>
                  <Image
                    src="/icons8-google-48.png"
                    alt="Google"
                    width={32}
                    height={32}
                    className="ml-auto shrink-0"
                  />
                </div>
                <p className="flex-1 text-base leading-relaxed text-slate-600">
                  {review.quote}
                </p>
              </article>
            ))}
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
