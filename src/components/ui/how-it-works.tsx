import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
    <section className="relative left-1/2 right-1/2 z-0 ml-[-50vw] mr-[-50vw] w-screen overflow-hidden">
      <Image
        src={image}
        alt="Brightside technician"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B3352] via-[#0B3352]/95 to-[#0B3352]/85" />

      <FadeInSection className="relative z-10 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mb-16 text-center md:mb-24">
            <h2 className="text-5xl font-black tracking-tight text-white drop-shadow-[0_6px_18px_rgba(0,0,0,0.4)] sm:text-6xl md:text-7xl">
              {heading}
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-xl font-bold text-white sm:text-2xl">
              {subheading}
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Connecting Line - Desktop (Horizontal) */}
            <div
              className="absolute left-0 top-[70px] z-0 hidden h-3 w-full -translate-y-1/2 rounded-full bg-white/20 md:block"
              aria-hidden="true"
            />
            <div
              className="absolute left-0 top-[70px] z-0 hidden h-3 w-full origin-left -translate-y-1/2 rounded-full bg-emerald-500 md:block"
              aria-hidden="true"
            />

            {/* Connecting Line - Mobile (Vertical) */}
            <div
              className="absolute left-[60px] top-0 z-0 h-full w-3 -translate-x-1/2 rounded-full bg-emerald-500 md:hidden"
              aria-hidden="true"
            />

            {/* Steps */}
            <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="group flex flex-col md:items-center md:text-center"
                >
                  {/* Node Container */}
                  <div className="mb-6 flex items-center pl-4 md:mb-10 md:pl-0">
                    {/* Circle Node */}
                    <div className="relative z-10 flex size-[120px] shrink-0 items-center justify-center rounded-full border-4 border-white bg-emerald-500 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.3)] transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110 md:size-[120px]">
                      <span className="text-6xl font-black text-white md:text-7xl">
                        {index + 1}
                      </span>
                    </div>

                    {/* Mobile Arrow */}
                    <div className="ml-6 text-emerald-400 md:hidden">
                      <ArrowRight size={32} strokeWidth={3} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pl-[124px] pr-4 md:pl-0">
                    <h3 className="mb-3 text-3xl font-black tracking-tight text-white md:text-4xl">
                      {step.title}
                    </h3>
                    <p className="text-lg font-semibold leading-relaxed text-white md:text-xl">
                      {step.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </FadeInSection>
    </section>
  );
}
