import { ChevronRight } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";

export type Service = {
  title: string;
  description: string;
  image: string;
  slug: string;
};

type ServicesGridProps = {
  heading: string;
  subheading: string;
  services: Service[];
};

export function ServicesGrid({
  heading,
  subheading,
  services,
}: ServicesGridProps) {
  const galleryServices = services.slice(0, 5);

  return (
    <section id="services" className="space-y-6 scroll-mt-32">
      <FadeInSection className="mx-auto max-w-3xl space-y-4 text-center">
        <h2 className="text-5xl font-bold text-pine">{heading}</h2>
        <p className="text-lg text-slate-600">{subheading}</p>
      </FadeInSection>

      <FadeInSection>
        <div className="gallery-5">
          {galleryServices.map((service) => (
            <a
              key={service.slug}
              href={`/services/${service.slug}`}
              className="gallery-5__tile group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
            >
              <img
                src={service.image}
                alt={service.title}
                className="gallery-5__image"
                loading="lazy"
              />
              <div className="gallery-5__overlay">
                <div className="relative flex h-full w-full flex-col items-center justify-center text-white">
                  <h3 className="text-2xl font-bold text-glow transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0">
                    {service.title}
                  </h3>
                  <p className="absolute inset-x-6 text-base text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    {service.description}
                  </p>
                  <span className="mt-auto flex items-center justify-center gap-1 text-sm font-semibold text-mint">
                    Learn More
                    <ChevronRight className="size-4" />
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
}
