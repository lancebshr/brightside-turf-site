import Image from "next/image";
import { FadeInSection } from "@/components/ui/fade-in-section";

type Step = {
  title: string;
  copy: string;
};

type HowItWorksProps = {
  heading: string;
  subheading?: string;
  steps: Step[];
  image: string;
  cta?: { href: string; label: string };
};

export function HowItWorks({
  heading,
  steps,
  image,
}: HowItWorksProps) {
  return (
    <section className="relative left-1/2 right-1/2 z-0 ml-[-50vw] mr-[-50vw] w-screen overflow-visible px-4 pb-6 md:px-8">
      <FadeInSection>
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-pine drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)]">
              {heading}
            </h2>
          </div>

          {/* Unified Card */}
          <div className="overflow-hidden rounded-3xl bg-white/90 backdrop-blur-sm shadow-[0_6px_20px_rgba(0,0,0,0.2)]">
            <div className="grid lg:grid-cols-[1fr_1fr]">
              {/* Left - Image */}
              <div className="relative min-h-[300px] lg:min-h-[480px]">
                <Image
                  src={image}
                  alt="Brightside technician"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>

              {/* Right - Steps */}
              <div className="p-8 md:p-10">
                <div className="flex h-full flex-col justify-center">
                  {steps.map((step, index) => (
                    <div key={step.title}>
                      <div className="py-5">
                        {/* Step Label */}
                        <p className="mb-2 text-base font-bold uppercase tracking-widest text-[#45D1B7]">
                          Step {index + 1}
                        </p>

                        {/* Headline */}
                        <h3 className="mb-2 text-3xl font-bold text-pine">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-lg font-medium leading-relaxed text-slate-500">
                          {step.copy}
                        </p>
                      </div>

                      {/* Divider (not after last item) */}
                      {index < steps.length - 1 && (
                        <div className="h-px w-full bg-slate-200" />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
