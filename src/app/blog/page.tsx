import Image from "next/image";
import { Hero } from "@/components/ui/hero";
import { SiteFooter } from "@/components/ui/site-footer";
import { NAV_LINKS } from "@/lib/nav-links";

const BLOG_POSTS = [
  "Placeholder Blog #1",
  "Placeholder Blog #2",
  "Placeholder Blog #3",
  "Placeholder Blog #4",
  "Placeholder Blog #5",
  "Placeholder Blog #6",
];

export default function BlogPage() {
  return (
    <div className="bg-background text-foreground">
      <Hero
        heading="The Brightside Blog"
        subheading="Tips, insights, and updates from our team."
        statLabel="5.0 stars on Google"
        primaryCta={{ label: "Get Your Quote", href: "/get-quote" }}
        navLinks={NAV_LINKS}
        starPlacement="aboveCta"
      />

      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-white via-[#f5fbf7] to-[#c7f0de]">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-16 pt-16 sm:px-6 lg:px-0">
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
