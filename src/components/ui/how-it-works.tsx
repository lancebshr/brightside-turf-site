import Image from "next/image";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";

type Step = {
  title: string;
  copy: string;
  icon: LucideIcon;
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
    <section className="grid gap-10 rounded-[2.5rem] bg-white p-6 shadow-brand md:grid-cols-2 md:p-10">
      <FadeInSection className="relative overflow-hidden rounded-3xl">
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
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-pine/70">
          How it works
        </p>
        <h2 className="text-4xl font-bold text-pine">{heading}</h2>
        <p className="text-lg text-slate-600">{subheading}</p>

        <div className="space-y-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-5"
            >
              <div className="flex size-11 items-center justify-center rounded-2xl bg-mint/70 text-pine">
                <step.icon className="size-5" />
              </div>
              <div className="space-y-1.5">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pine/70">
                  Step {index + 1}
                </p>
                <h3 className="text-xl font-semibold text-ink">
                  {step.title}
                </h3>
                <p className="text-base text-slate-600">{step.copy}</p>
              </div>
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
