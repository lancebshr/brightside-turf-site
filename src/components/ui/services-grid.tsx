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
  return (
    <section id="services" className="space-y-6">
      <FadeInSection className="mx-auto max-w-3xl space-y-4 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pine/70">
          Brightside&apos;s Services
        </p>
        <h2 className="text-4xl font-bold text-pine">{heading}</h2>
        <p className="text-lg text-slate-600">{subheading}</p>
      </FadeInSection>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:[&>*:nth-last-child(2)]:col-start-2">
        {services.map((service, index) => (
          <FadeInSection key={service.slug} delay={index * 60}>
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
              <div className="absolute inset-0 flex flex-col justify-end gap-3 p-6 text-white">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/70">
                  </p>
                  <h3 className="text-2xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-base text-white/85 opacity-0 transition duration-300 group-hover:opacity-100">
                  {service.description}
                </p>
                <span className="flex items-center gap-1 text-sm font-semibold text-mint">
                  Learn More
                  <ChevronRight className="size-4" />
                </span>
              </div>
            </a>
          </FadeInSection>
        ))}
      </div>
    </section>
  );
}
