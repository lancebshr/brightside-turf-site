import Image from "next/image";
import Link from "next/link";
import { Hero } from "@/components/ui/hero";
import { SiteFooter } from "@/components/ui/site-footer";
import { NAV_LINKS } from "@/lib/nav-links";
import { getAllPosts } from "@/lib/blog";
import { getSiteImages } from "@/lib/site-images";

export default function BlogPage() {
  const posts = getAllPosts();
  const siteImages = getSiteImages();

  return (
    <div className="bg-background text-foreground">
      <Hero
        heading="The Brightside Blog"
        subheading="Tips, insights, and updates from our team."
        statLabel="5.0 stars on Google"
        primaryCta={{ label: "Get Your Quote", href: "/get-quote" }}
        navLinks={NAV_LINKS}
        starPlacement="aboveCta"
        compact
        backgroundImage={siteImages.heroBackgrounds.blog}
      />

      <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-white via-[#f5fbf7] to-[#c7f0de]">
        <div className="mx-auto flex max-w-6xl flex-col gap-16 px-4 pb-16 pt-16 sm:px-6 lg:px-0">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <article className="group relative overflow-hidden rounded-3xl shadow-brand h-full">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      width={480}
                      height={320}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                      <p className="text-sm text-white/80 mb-2">
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </p>
                      <h3 className="text-xl font-bold text-white">{post.title}</h3>
                      {post.description && (
                        <p className="text-sm text-white/80 mt-2 line-clamp-2">{post.description}</p>
                      )}
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}
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
