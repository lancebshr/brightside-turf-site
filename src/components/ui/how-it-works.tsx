import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FadeInSection } from "@/components/ui/fade-in-section";
import {
  GET_QUOTE_BUTTON_CLASSNAME,
  GET_QUOTE_BUTTON_STYLE,
  cn,
  formatGetQuoteLabel,
} from "@/lib/utils";

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
    <section className="relative z-0 overflow-hidden rounded-[2.5rem] shadow-brand">
      <Image
        src={image}
        alt="Brightside technician"
        fill
        priority
        className="object-cover"
      />

      <FadeInSection className="relative z-0 flex min-h-[520px] items-stretch justify-end px-4 py-6 sm:px-10 sm:py-10">
        <div className="ml-auto flex w-full max-w-md flex-col justify-center rounded-[2rem] bg-white p-8 text-ink shadow-2xl">
          <h2 className="text-4xl font-bold text-pine md:text-5xl">{heading}</h2>
          <p className="mt-3 text-lg text-slate-600">{subheading}</p>

          <div className="mt-8 space-y-4">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-pine/15 bg-white px-5 py-4 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-base text-slate-600">{step.copy}</p>
              </div>
            ))}
          </div>

          <Button
            asChild
            size="lg"
            style={GET_QUOTE_BUTTON_STYLE}
            className={cn(GET_QUOTE_BUTTON_CLASSNAME, "mt-8 w-full")}
          >
            <Link href={cta.href}>{formatGetQuoteLabel(cta.label)}</Link>
          </Button>
        </div>
      </FadeInSection>
    </section>
  );
}
