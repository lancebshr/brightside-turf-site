import Image from "next/image";
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
  const topRow = services.slice(0, 3);
  const bottomRow = services.slice(3);

  return (
    <section id="services" className="space-y-6 scroll-mt-32">
      <FadeInSection className="mx-auto max-w-3xl space-y-4 text-center">
        <h2 className="text-4xl font-bold text-pine">{heading}</h2>
        <p className="text-lg text-slate-600">{subheading}</p>
      </FadeInSection>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topRow.map((service, index) => (
          <ServiceCard key={service.slug} service={service} delay={index * 60} />
        ))}
      </div>

      {bottomRow.length > 0 && (
        <div className="mx-auto grid max-w-4xl gap-6 justify-items-center md:grid-cols-2">
          {bottomRow.map((service, index) => (
            <ServiceCard
              key={service.slug}
              service={service}
              delay={(topRow.length + index) * 60}
            />
          ))}
        </div>
      )}
    </section>
  );
}

function ServiceCard({
  service,
  delay,
}: {
  service: Service;
  delay: number;
}) {
  return (
    <FadeInSection delay={delay}>
      <a
        href={`/services/${service.slug}`}
        className="group relative block overflow-hidden rounded-3xl shadow-brand transition-transform hover:-translate-y-1"
      >
        <Image
          src={service.image}
          alt={service.title}
          width={640}
          height={420}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity group-hover:opacity-95" />
        <div className="absolute inset-0 flex h-full flex-col p-6 text-white">
          <div className="relative flex flex-1 items-center justify-center text-center">
            
            <h3 className="text-2xl font-bold text-glow transition-opacity duration-300 group-hover:opacity-0">
              {service.title}
            </h3>
            <p className="absolute px-4 text-base text-white/90 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {service.description}
            </p>
          </div>
          <span className="mt-auto flex items-center justify-center gap-1 text-sm font-semibold text-mint">
            Learn More
            <ChevronRight className="size-4" />
          </span>
        </div>
      </a>
    </FadeInSection>
  );
}
