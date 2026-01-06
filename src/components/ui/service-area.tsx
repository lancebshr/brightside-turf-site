import Image from "next/image";
import { FadeInSection } from "@/components/ui/fade-in-section";

type ServiceAreaProps = {
  title?: string;
  description?: string;
  areas?: string[];
  mapImage?: string;
};

export function ServiceArea({ title, description, areas, mapImage = "/brightsidemaps.webp" }: ServiceAreaProps) {
  return (
    <section className="mx-auto grid max-w-5xl gap-6 rounded-[2rem] border border-slate-200 bg-slate-50 px-3 py-8 shadow-[0_1px_4px_rgba(0,0,0,0.3)] md:grid-cols-2 md:px-6 md:py-10">
      <FadeInSection className="flex flex-col justify-center space-y-4">
        {title && <h2 className="text-5xl font-bold text-pine">{title}</h2>}
        {description && <p className="text-lg text-slate-600">{description}</p>}
        {areas && areas.length > 0 && (
          <ul className="grid grid-cols-2 gap-x-4 gap-y-4 text-ink/90 sm:gap-x-6 sm:gap-y-9">
            {areas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-2 text-base font-bold text-pine sm:gap-4 sm:text-2xl"
              >
                <span className="inline-flex size-2 sm:size-3 rounded-full bg-mint shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
                <span className="leading-tight">{area}</span>
              </li>
            ))}
          </ul>
        )}
      </FadeInSection>

      <FadeInSection className="flex items-center justify-center">
        <div className="relative w-full md:w-[118%] overflow-hidden rounded-3xl border border-slate-200 shadow-brand">
          <Image
            src={mapImage}
            alt="Brightside Turf service area map"
            width={600}
            height={420}
            className="h-auto w-full rounded-3xl object-cover"
          />
        </div>
      </FadeInSection>
    </section>
  );
}
