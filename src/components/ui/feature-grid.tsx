import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  GET_QUOTE_BUTTON_CLASSNAME,
  GET_QUOTE_BUTTON_STYLE,
  cn,
} from "@/lib/utils";

export type FeatureCard = {
  title: string;
  description: string;
  image: string;
  imageAlt?: string;
};

type FeatureGridProps = {
  heading: React.ReactNode;
  features: FeatureCard[];
  ctaLabel?: string;
  ctaHref?: string;
};

export function FeatureGrid({
  heading,
  features,
  ctaLabel = "Get Your Quote",
  ctaHref = "/get-quote",
}: FeatureGridProps) {
  return (
    <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-slate-50 to-white py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-black tracking-tight text-pine drop-shadow-[0_6px_18px_rgba(0,0,0,0.15)] md:text-5xl">
            {heading}
          </h2>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid auto-rows-fr gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group h-full overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-shadow duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]"
            >
              <div className="flex h-full flex-col md:flex-row">
                {/* Image */}
                <div className="relative h-48 w-full shrink-0 md:h-full md:w-[42%]">
                  <Image
                    src={feature.image}
                    alt={feature.imageAlt || feature.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 25vw, 100vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-center p-6 md:p-8">
                  <h3 className="mb-3 text-xl font-bold text-pine md:text-2xl">
                    {feature.title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-ink/70">
                    {feature.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 flex justify-center">
          <Button
            asChild
            size="lg"
            style={GET_QUOTE_BUTTON_STYLE}
            className={cn(GET_QUOTE_BUTTON_CLASSNAME, "px-12 py-7 text-xl")}
          >
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
