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
        <div className="w-full">
          <div className="gallery-5">
            {galleryServices.map((service) => (
              <a
                key={service.slug}
                href={`/services/${service.slug}`}
                className="gallery-5__tile focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="gallery-5__image"
                  loading="lazy"
                />
                <div className="gallery-5__overlay">
                  <div className="gallery-5__text">
                    <h2 className="gallery-5__title">{service.title}</h2>
                    <p className="gallery-5__body">{service.description}</p>
                  </div>
                  <span className="gallery-5__cta flex items-center gap-1 text-sm font-semibold text-mint">
                    Learn More
                    <ChevronRight className="size-4" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
