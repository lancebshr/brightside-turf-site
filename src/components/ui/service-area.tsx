import { MapPinned } from "lucide-react";
import { FadeInSection } from "@/components/ui/fade-in-section";

type ServiceAreaProps = {
  title: string;
  description: string;
  areas: string[];
};

export function ServiceArea({ title, description, areas }: ServiceAreaProps) {
  return (
    <section className="grid gap-8 rounded-[2.5rem] bg-slate-50 px-6 py-12 md:grid-cols-2 md:px-12">
      <FadeInSection className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pine/70">
          Service Area
        </p>
        <h2 className="text-4xl font-bold text-pine">{title}</h2>
        <p className="text-lg text-slate-600">{description}</p>
        <ul className="grid grid-cols-2 gap-3 text-sm font-medium text-ink/70">
          {areas.map((area) => (
            <li
              key={area}
              className="rounded-2xl border border-slate-200 bg-white px-4 py-3"
            >
              {area}
            </li>
          ))}
        </ul>
      </FadeInSection>

      <FadeInSection className="flex items-center justify-center">
        <div className="noise-surface relative aspect-square w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-brand">
          <MapPinned className="mx-auto size-10 text-pine" />
          <p className="mt-4 text-xl font-semibold text-ink">
            Map Placeholder
          </p>
          <p className="text-sm text-slate-500">
            Drag, zoom, and tap once the interactive map is connected.
          </p>
          <div className="absolute inset-4 rounded-3xl border border-dashed border-pine/30" />
        </div>
      </FadeInSection>
    </section>
  );
}
