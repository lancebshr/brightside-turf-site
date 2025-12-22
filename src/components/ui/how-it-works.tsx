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
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.3)] mb-6">
              {heading}
            </h2>
            {subheading && (
              <p className="text-xl md:text-2xl font-bold text-white/90 max-w-2xl mx-auto">
                {subheading}
              </p>
            )}
          </div>

          {/* Two Column Layout */}
          <div className="grid items-start gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12">
            {/* Left - Image (bigger, extends left and down) */}
            <div className="relative h-[400px] overflow-hidden rounded-3xl lg:h-full lg:min-h-[650px] lg:-ml-8 border-4 border-white/20 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.3)]">
              <Image
                src={image}
                alt="Brightside technician"
                fill
                priority
                className="object-cover"
              />
            </div>

            {/* Right - Steps */}
            <div className="relative">
              {/* Connecting Line - Vertical */}
              <div
                className="absolute top-0 left-[50px] h-full w-3 bg-[#45D1B7] z-0 rounded-full"
                aria-hidden="true"
              />

              {/* Steps */}
              <div className="flex flex-col gap-12 relative z-10">
                {steps.map((step, index) => (
                  <div key={step.title} className="flex flex-col group">
                    {/* Node Container */}
                    <div className="flex items-center mb-6 pl-4">
                      {/* Circle Node */}
                      <div className="w-[100px] h-[100px] rounded-full bg-[#45D1B7] flex items-center justify-center shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.3)] transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 border-4 border-white relative z-10">
                        <span className="text-5xl font-black text-white">
                          {index + 1}
                        </span>
                      </div>

                    </div>

                    {/* Content */}
                    <div className="pl-[124px] pr-4">
                      <h3 className="text-3xl font-black text-white mb-4 tracking-tight">
                        {step.title}
                      </h3>
                      <p className="text-lg font-bold text-white/80 leading-relaxed">
                        {step.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
