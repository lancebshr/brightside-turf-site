import { FadeInSection } from "@/components/ui/fade-in-section";

type ServiceAreaProps = {
  title: string;
  description: string;
  areas?: string[];
};

export function ServiceArea({ title, description, areas }: ServiceAreaProps) {
  return (
    <section className="grid gap-8 rounded-[2.5rem] bg-slate-50 px-6 py-12 md:grid-cols-2 md:px-12">
      <FadeInSection className="space-y-4">
        <h2 className="text-4xl font-bold text-pine">{title}</h2>
        <p className="text-lg text-slate-600">{description}</p>
        {areas && areas.length > 0 && (
          <ul className="grid gap-3 text-base text-ink/90 sm:grid-cols-2">
            {areas.map((area) => (
              <li
                key={area}
                className="flex items-center gap-3 font-semibold text-pine"
              >
                <span className="inline-flex size-2 rounded-full bg-mint shadow-[0_0_10px_rgba(16,185,129,0.6)]" />
                <span className="text-lg">{area}</span>
              </li>
            ))}
          </ul>
        )}
      </FadeInSection>

      <FadeInSection className="flex items-center justify-center">
        <div className="w-full overflow-hidden rounded-3xl border border-slate-200 shadow-brand">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1kTVCYCGoHKvztB-o8pNYoyNNbSO33xU&ehbc=2E312F&noprof=1"
            className="h-[420px] w-full rounded-3xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </FadeInSection>
    </section>
  );
}
