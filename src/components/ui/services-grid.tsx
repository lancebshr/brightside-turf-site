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
  const galleryServices = services;

  return (
    <section id="services" className="space-y-6 scroll-mt-32">
      <FadeInSection className="mx-auto max-w-5xl space-y-4 text-center py-8 md:py-9">
        <h2 className="text-6xl font-black tracking-tight text-pine drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]">
          {heading}
        </h2>
        <p className="text-xl font-semibold text-slate-700">{subheading}</p>
      </FadeInSection>

      <FadeInSection className="mt-10">
        <div className="w-full">
          <div className="gallery-5 services-grid">
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
                </div>
              </a>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
