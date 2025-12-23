import Image from "next/image";
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
}: HowItWorksProps) {
  return (
    <section className="relative left-1/2 right-1/2 z-0 ml-[-50vw] mr-[-50vw] w-screen overflow-hidden bg-[#0B3352] py-24 px-4 md:px-8">
      <FadeInSection>
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.3)] mb-6">
              {heading}
            </h2>
            {subheading && (
              <p className="text-xl md:text-2xl font-bold text-white/90 max-w-2xl">
                {subheading}
              </p>
            )}
            <div className="h-px w-32 bg-[#45D1B7]/60 mt-8" />
          </div>

          {/* Two Column Layout */}
          <div className="grid items-start gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
            {/* Left - Image */}
            <div className="relative h-[400px] overflow-hidden rounded-3xl lg:h-full lg:min-h-[500px]">
              <Image
                src={image}
                alt="Brightside technician"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Right - Steps (minimal style like CoreValues) */}
            <div className="flex flex-col gap-12">
              {steps.map((step, index) => (
                <div key={step.title} className="group flex flex-col">
                  {/* Step number and title row */}
                  <div className="w-full mb-5 pb-5 border-b border-white/20 group-hover:border-[#45D1B7]/50 transition-colors duration-500">
                    <div className="flex items-baseline gap-4">
                      <span className="text-[#45D1B7] text-2xl font-bold">
                        0{index + 1}
                      </span>
                      <h3 className="text-3xl font-extrabold text-white leading-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white leading-relaxed text-xl font-semibold pl-12">
                    {step.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
