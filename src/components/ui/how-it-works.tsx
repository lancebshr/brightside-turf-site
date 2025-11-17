import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";

type Step = {
  title: string;
  copy: string;
};

type HowItWorksProps = {
  heading: string;
  subheading: string;
  steps: Step[];
  image: string;
  cta: { href: string; label: string };
};

export function HowItWorks({
  heading,
  subheading,
  steps,
  image,
  cta,
}: HowItWorksProps) {
  return (
    <section className="grid gap-10 rounded-[2.5rem] bg-white p-48 pb-48 shadow-brand md:grid-cols-2 md:p-7 md:pb-12">
      <FadeInSection className="relative overflow-hidden rounded-xl">
        <Image
          src={image}
          alt="Brightside technician"
          width={640}
          height={840}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
      </FadeInSection>

      <FadeInSection className="space-y-6">
        <h2 className="text-5xl font-bold text-pine">{heading}</h2>
        <p className="text-lg text-slate-600">{subheading}</p>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={step.title} className="space-y-1.5">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pine/70">
                Step {index + 1}
              </p>
              <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
              <p className="text-base text-slate-600">{step.copy}</p>
            </div>
          ))}
        </div>

        <Button
          asChild
          size="lg"
          className="rounded-full bg-pine px-8 py-6 text-lg font-semibold text-white hover:bg-pine/90"
        >
          <a href={cta.href}>{cta.label}</a>
        </Button>
      </FadeInSection>
    </section>
  );
}
